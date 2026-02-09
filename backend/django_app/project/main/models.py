# from django.db import models

# # Create your models here.
# #user model
# class User(models.Model):
#     username=models.CharField(max_length=10,blank=False,null=False)
#     password=models.CharField(max_length=8,blank=False,null=False)
    
    
# #quiz topic model
# class Quiz_Topic(models.Model):
#     user=models.ForeignKey(User,on_delete=models.CASCADE)
#     topic_name=models.CharField(max_length=100,blank=False,null=False)
  
  
# #quiz topic questions model  
# class Topic_Questions(models.Model):
#     quiz_topic=models.ForeignKey(Quiz_Topic,on_delete=models.CASCADE)
#     question=models.CharField(max_length=1000,blank=False,null=False)
 
 
# #quiz topic questions answer options model  
# class Question_Answer_Options(models.Model):
#     topic_question=models.ForeignKey(Topic_Questions,on_delete=models.CASCADE)
#     option=models.CharField(max_length=100,blank=False,null=False)
#     is_true=models.BooleanField(default=False,blank=False,null=False)
    
    