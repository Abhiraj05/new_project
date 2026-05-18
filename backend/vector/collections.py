from vector.client import client

# creates or get a collection
def get_collection():
    return client.get_or_create_collection(name="documents")
