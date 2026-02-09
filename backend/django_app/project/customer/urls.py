from django.urls import path
from customer.views import UserLogin,UserRegistrationForm

urlpatterns = [
    path('user_signup/',UserRegistrationForm.as_view(),name="user_signup"),
    path('user_signin/',UserLogin.as_view(),name="user_signin")
]
