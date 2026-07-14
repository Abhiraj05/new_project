from pydantic import BaseModel, Field


class ChatResponse(BaseModel):
    user: str = Field(description="user message")
    bot: str = Field(description="bot message based on user message")
