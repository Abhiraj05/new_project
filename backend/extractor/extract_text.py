import os
import uuid
from markitdown import MarkItDown

# extract text from document
def extract_text(file):
    temp_path = None
    text = None
    md = MarkItDown()
    temp_path = f"temp_{uuid.uuid4()}_{file}"
    f = open(temp_path, "wb")
        
    for chunk in file.chunks():
        f.write(chunk)
    f.close()

    try:
        result = md.convert(temp_path)
        text = result.text_content
    except:
        if not isinstance(text, str):
            return None
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)
    return text
    