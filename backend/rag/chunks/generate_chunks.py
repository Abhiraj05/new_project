import os
from langchain_experimental.text_splitter import SemanticChunker
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv


load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

embeddings = GoogleGenerativeAIEmbeddings(model="gemini-embedding-2-preview")

# creates chunks from text
def create_chunks(document_text):
    text_splitter = SemanticChunker(
        embeddings,
        breakpoint_threshold_type='standard_deviation',
        breakpoint_threshold_amount=1
    )
    documents = text_splitter.create_documents([document_text])
    return documents
