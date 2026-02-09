from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def generate_quiz(request):
    user_input=request.data.get("text_data")
    response = requests.get("http://127.0.0.1:8001/generate_quiz", json={"text": user_input})
    return JsonResponse(response.json(), safe=False)
