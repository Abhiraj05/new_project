from pydantic import BaseModel,Field

class User(BaseModel):
    email:str=Field(...,"user email id")
    password:str=Field(...,"user password")