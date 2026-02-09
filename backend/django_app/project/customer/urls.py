from django.urls import path
from views import UserLogin,UserRegistrationForm

urlpatterns = [
    path('user_signup/',UserLogin.as_view(),name="user_signup"),
    path('user_signin/',UserRegistrationForm.as_view(),name="user_signin")
]
