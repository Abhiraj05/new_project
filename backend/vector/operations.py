import uuid
from vector.collections import get_collection

# get's collection
collection = get_collection()


# add embeddings to the collection
def add_embeddings(chunks, embeddings, user_id, file_id):
    collection.add(
        ids=[str(uuid.uuid4()) for _ in chunks],
        documents=chunks,
        embeddings=embeddings,
        metadata=[{
            "user_id": user_id,
            "file_id": file_id
        }
            for _ in chunks
        ]
    )


# get queries of specified user
def query_embeddings(embedding, file_id, top_k=5):
    return collection.query(
        query_embeddings=[embedding],
        n_results=top_k,
        where={"file_id": str(file_id)}
    )
