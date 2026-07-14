from pydantic import BaseModel, Field


class Document(BaseModel):
    user_id: int = Field(description="user id")
    document: str = Field(description="pdf document")
