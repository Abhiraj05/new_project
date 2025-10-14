from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
@api_view(['GET'])
def get_data(request):
    data={
        "message":"this  is a django app"
    }
    return Response(data)