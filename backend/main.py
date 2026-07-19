from fastapi import FastAPI, HTTPException, Depends, UploadFile, File, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from schemas.user_schema import UserSchema
from schemas.file_schema import UploadedFileSchema
from schemas.chats_schema import chatsSchema
from schemas.report_schema import ReportDetailsSchema
from sql.models.user_model import User
from sql.models.file_model import UploadedFile
from sql.models.report_model import ReportDetails
from sql.models.chats_model import Chats
from db.db_connection import create_db_connection
from auth.hash_password import hash_password, verify_password
from auth.jwt_token import create_token, get_current_user
from rag.extractor.extract_text import extract_text
from rag.chunks.generate_chunks import create_chunks
from rag.vector.vector_store import create_or_get_vector_db
from rag.chat.chatbot import extract_report_values, generate_summary, answer_user_query
from cache.redis_client import redis_connection
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
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
async def create_user(user: UserSchema, db: AsyncSession = Depends(create_db_connection)):

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
def login(user: UserSchema, db: AsyncSession = Depends(create_db_connection)):
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

    report_text = extract_text(file_name)
    response = extract_report_values(report_text)
    if response is None:
        raise HTTPException(
            status_code=404, detail="failed to extract report values !")

    new_report = ReportDetails(hemoglobin=response.hemoglobin,
                               wbc_count=response.wbc_count,
                               platelet_count=response.platelet_count,
                               blood_sugar=response.blood_sugar,
                               hba1c=response.hba1c,
                               total_cholesterol=response.total_cholesterol,
                               hdl_cholesterol=response.hdl_cholesterol,
                               ldl_cholesterol=response.ldl_cholesterol,
                               triglycerides=response.triglycerides,
                               creatinine=response.creatinine,
                               egfr=response.egfr,
                               ast_sgot=response.ast_sgot,
                               alt_sgpt=response.alt_sgpt,
                               tsh=response.tsh,
                               vitamin_d=response.vitamin_d)
    db.add(new_report)
    await db.commit()
    await db.refresh(new_report)

    report_dict = new_report.model_dump()
    summary = generate_summary(report_dict)
    if summary is None:
        raise HTTPException(
            status_code=404, detail="failed to generate summary !")

    documents = create_chunks(report_text)
    chunks_ids = []

    for i, doc in enumerate(documents):
        doc.meta["source"] = file_name
        doc.meta["user_id"] = current_user.id
        doc.meta["file_id"] = new_doc.id
        chunks_ids.append(f"{file_name}_{i}")

    vector_db = create_or_get_vector_db()
    vector_db.add_documents(documents, ids=chunks_ids)

    return {"message": "summary & embeddings generated successfully !", "file_id": new_doc.id, "summary": summary}


# processes user query & gives answer
@app.websocket("/chat")
async def chat(websocket: WebSocket, current_user=Depends(get_current_user), db: AsyncSession = Depends(create_db_connection)):
    user_id = current_user.id
    chat_history = [SystemMessage(content="You are a helpful assistant.")]

    await websocket.accept()
    try:
        while True:
            user_data = await websocket.receive_text()
            if not file_id:
                file_id = user_data["file_id"]

            user_message = user_data["message"]
            chat_history.append(HumanMessage(content=user_message))
            ai_response = answer_user_query(
                user_id, file_id, user_message, chat_history)

            if ai_response is None:
                await websocket.send_text("sorry server is busy !")

            else:
                chat_history.append(AIMessage(content=ai_response))
                await websocket.send_text(ai_response)

                new_message = Chats(user_id=user_id,
                                       user_msg=user_message, ai_msg=ai_response)
                db.add(new_message)
                await db.commit()
                await db.refresh(new_message)

    except WebSocketDisconnect:
        print("user disconnected !")


# deletes specific chat history
@app.delete("/delete-chat/{id}")
async def delete_chat(id:int, db: AsyncSession = Depends(create_db_connection)):
    try:
        (db.query(upload_file,ReportDetails,Chats)
        .join())
    except:
        raise HTTPException(
            status_code=404, detail="failed to delete chat history !")
    

