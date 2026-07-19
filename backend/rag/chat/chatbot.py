from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnableLambda, RunnablePassthrough, RunnableParallel
from langchain_core.output_parsers import StrOutputParser
from schemas.chatbotSchema import ChatResponse
from rag.vector.vector_store import create_or_get_vector_db


model = ChatGoogleGenerativeAI(model="gemini-3-flash-preview")
structured_model = model.with_structured_output(ChatResponse)

# joints the documents text to form context
def join_text(retrieved_docs):
    context = "\n\n".join(doc.page_content for doc in retrieved_docs)
    return context


# answers the user query based on context
def answer_user_query(user_id, file_id, user_message, chat_history):
    vector_db = create_or_get_vector_db()
    parser = StrOutputParser()
    retriever = vector_db.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 5},
        filter={
            'user_id': user_id,
            'file_id': file_id
        }
    )

    prompt = PromptTemplate(
        template="""You are a helpful assistant.
      Answer ONLY from the provided transcript context.
      If the context is insufficient, just say you don't know.
      {context}
      
      question:{question}
      
      previous_chat_history:{chat_history}
      """,
        input_variables=["context", "question", "chat_history"]
    )

    parallel_chain = RunnableParallel({
        "context": retriever | RunnableLambda(join_text),
        "question": RunnablePassthrough(),
        "chat_history":RunnableLambda(lambda x:x["chat_history"])
    })

    final_chain = parallel_chain | prompt | structured_model | parser

    response = final_chain.invoke({
         "question":user_message,
         "chat_history":chat_history
    })

    if not response:
        return None
    else:
        return response
