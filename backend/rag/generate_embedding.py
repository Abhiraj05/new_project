import os
from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# creates chunks from text
def create_chunks(document_text):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=200,
        chunk_overlap=50,
        separators=["\n", ". ", " "]
    )
    chunks = splitter.split_text(document_text)
    return chunks


# creates embeddings from chunks
def create_embeddings(chunks):
    vectors = []
    embedding = GoogleGenerativeAIEmbeddings(
        model="gemini-embedding-2-preview",
        task_type="retrieval_document")

    for chunk in chunks:
        vector = embedding.embed_query(chunk)
        vectors.append(vector)

    return vectors
