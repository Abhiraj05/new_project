from pydantic import BaseModel, Field


class User(BaseModel):
    email: str = Field(description="user email id")
    password: str = Field(description="user password")
