from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Customer(models.Model):
    customer=models.ForeignKey(User,on_delete=models.CASCADE, related_name='customer_profile')
    customer_email=models.EmailField(max_length=50,null=False,blank=False)
    
class LLMResponse(models.Model):
      user=models.ForeignKey(User,on_delete=models.CASCADE, related_name='llm')
      user_input=models.TextField(null=True,blank=True)
      llm_response=models.JSONField(null=True,blank=True)
      