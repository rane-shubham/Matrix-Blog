from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=64)
    body = models.TextField()
    author = models.CharField(max_length=32)

