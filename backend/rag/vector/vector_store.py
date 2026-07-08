from langchain_chroma import Chroma
from langchain_google_genai import GoogleGenerativeAIEmbeddings

# creates embeddings from chunks
def create_or_get_vector_db():
    vector_store = Chroma(
        embedding=GoogleGenerativeAIEmbeddings(
            model="gemini-embedding-2-preview"),
        persist_directory='new_chroma_db',
        collection_name='sample')
    
    return vector_store

def create_or_get():
    print()