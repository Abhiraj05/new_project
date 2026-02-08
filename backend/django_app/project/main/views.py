from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
import requests

@api_view(['GET'])
def show_data(request):
    response=requests.get("http://127.0.0.1:8001/get_random_int")
    return JsonResponse(response.json(),safe=False)

