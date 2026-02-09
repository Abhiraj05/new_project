from rest_framework import serializers


class CustomerRegistrationFormSerializer(serializers.Serializer):
    customer_email=serializers.EmailField()
    password=serializers.CharField(write_only=True)
    