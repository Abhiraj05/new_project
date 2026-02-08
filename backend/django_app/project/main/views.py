from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
import requests


@api_view(['POST'])
def generate_quiz(request):
    user_input=request.data.get("text_data")
    data = {
        "text": user_input
    }
    response = requests.get("http://127.0.0.1:8001/generate_quiz", json=data)
    return JsonResponse(response.json(), safe=False)
