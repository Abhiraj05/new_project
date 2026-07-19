from fastapi import FastAPI, HTTPException, Depends, UploadFile, File, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from schemas.user_schema import User
from schemas.file_schema import UploadedFile
from schemas.messages_schema import Messages
from db.db_connection import create_db_connection
from auth.hash_password import hash_password, verify_password
from auth.jwt_token import create_token, get_current_user
from rag.extractor.extract_text import extract_text
from rag.chunks.generate_chunks import create_chunks
from rag.vector.vector_store import create_or_get_vector_db
from rag.chat.chatbot import answer_user_query
from cache.redis_client import redis_connection
from langchain_core.messages import AIMessage,HumanMessage,SystemMessage
from datetime import date

# app initialise
app = FastAPI()

# redis client connection
redis = redis_connection()

# allowed origins
origins = [""]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# checks whether new or older user & then register's user
@app.post("/signup")
async def create_user(user: User, db: AsyncSession = Depends(create_db_connection)):

    user_data = User(**user.model_dump())
    old_user = db.query(User).filter(User.email == user_data.email).first()

    if old_user is None:
        new_user = User(email=user_data.email,
                        password=hash_password(user_data.password))
        db.add(new_user)
        await db.commit()
        await db.refresh(new_user)
    else:
        return HTTPException(status_code=400, detail="user already exist !")


# checks credentials & login's user
@app.post("/signin")
def login(user: User, db: AsyncSession = Depends(create_db_connection)):
    user_data = User(**user.model_dump())
    is_user = db.query(User).filter(User.email == user_data.email).first()

    if is_user is None or not verify_password(user_data.password, is_user.password):
        return HTTPException(status_code=400, detail="invalid credentials !")

    token = create_token({"sub": is_user.email})

    return {"access_token": token}


# process the doument & create embeddings and store it in a vector db
@app.post("/upload-file")
async def upload_file(file: UploadFile = File(...), current_user=Depends(get_current_user), db: AsyncSession = Depends(create_db_connection)):
    file_name = file.filename
    path = f"upload/{file_name}"

    if not file_name:
        raise HTTPException(status_code=400, detail="file not found !")
    is_old_doc = db.query(UploadedFile).filter(UploadedFile.user_id == current_user.id,
                                               UploadedFile.file_name == file_name).first()
    if is_old_doc is not None:
        with open(path, "wb") as buffer:
            buffer.write(await file.read())

        new_doc = UploadedFile(user_id=current_user.id, file_name=file_name,
                               file_path=path, upload_date=date.today())
        db.add(new_doc)
        await db.commit()
        await db.refresh()
    else:
        return {"message": "embeddings already exist !"}

    text = extract_text(file_name)
    documents = create_chunks(text)
    chunks_ids = []

    for i, doc in enumerate(documents):
        doc.meta["source"] = file_name
        doc.meta["user_id"] = current_user.id
        doc.meta["file_id"] = new_doc.id
        chunks_ids.append(f"{file_name}_{i}")

    vector_db = create_or_get_vector_db()
    vector_db.add_documents(documents, ids=chunks_ids)

    return {"message": "embeddings generated successfully !", "file_id": new_doc.id}


# processes user query & gives answer
@app.websocket("/chat")
async def chat(websocket: WebSocket, current_user=Depends(get_current_user), db: AsyncSession = Depends(create_db_connection)):
    user_id = current_user.id
    chat_history=[SystemMessage(content="You are a helpful assistant.")]
    
    await websocket.accept()
    try:
        while True:
            user_data = await websocket.receive_text()
            if not file_id:
                file_id = user_data["file_id"]

            user_message = user_data["message"]
            chat_history.append(HumanMessage(content=user_message))
            bot_response = answer_user_query(user_id, file_id, user_message,chat_history)

            if bot_response is None:
                await websocket.send_text("sorry server is busy !")

            else:
                chat_history.append(AIMessage(content=bot_response))
                await websocket.send_text(bot_response)

                new_message = Messages(user_id=user_id,
                                       user_msg=user_message, bot_msg=bot_response)
                db.add(new_message)
                await db.commit()
                await db.refresh(new_message)

    except WebSocketDisconnect:
        print("user disconnected !")
