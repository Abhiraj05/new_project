import os
import uuid
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from customer.models import LLMResponse
from django.contrib.auth.models import User
import requests
from markitdown import MarkItDown



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_quiz(request):
    user_instance=User.objects.get(id=request.user.id)
    user_input_data=request.data.get("text_data")
    file=request.FILES.get("file")
    num_of_questions=request.data.get("num_of_questions")
    if user_input_data:
        response = requests.get("http://127.0.0.1:8001/generate_quiz", json={"text": user_input_data,"num_of_questions":num_of_questions})
    else:
        text = file_text_extract(file)
        response = requests.get("http://127.0.0.1:8001/generate_quiz", json={"text": text,"num_of_questions":num_of_questions})
        
    LLMResponse.objects.create(user=user_instance,user_input=user_input_data,llm_response=response.json())
    return JsonResponse(response.json(), safe=False)


def file_text_extract(file):
        md = MarkItDown()
        temp_path = f"temp_{uuid.uuid4()}_{file.name}"
        f = open(temp_path, "wb")
        for chunk in file.chunks():
            f.write(chunk)
        f.close()

        try:
            result = md.convert(temp_path)
            text = result.text_content
        except Exception as e:
            return JsonResponse({"error": "Failed to extract text", "details": str(e)},status=400)
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)
        return text
