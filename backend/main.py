import os
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

# app initialise
app = FastAPI()

# allowed origins
origins = [""]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")


@app.get("/")
def read_root():
    return {"message": "hello this is ai"}
