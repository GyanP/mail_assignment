from django.db import models


class MailRecord(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    message = models.TextField()

    def __str__(self):
        return self.name
