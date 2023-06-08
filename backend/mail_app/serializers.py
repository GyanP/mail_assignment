from rest_framework import serializers
from .models import MailRecord


class MailSerializer(serializers.ModelSerializer):
    class Meta:
        model = MailRecord
        fields = "__all__"
 