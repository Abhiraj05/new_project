import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
db_session = sessionmaker(autoflush=False, autocommit=False, bind=engine)
Base = declarative_base()

# creates db session
def create_db_connection():
    try:
        db = db_session()
        yield db
    except Exception as e:
        raise e
    finally:
        db.close()
