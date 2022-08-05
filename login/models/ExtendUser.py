from django.db import models

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class ExtendUser(models.Model):
    id = models.AutoField(db_column="ID", primary_key = True)
    phone = models.CharField(db_column="PHONE", max_length=10, unique=True)
    address = models.CharField(db_column="ADDRESS", max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="USER", related_name="EXTENDUSER")

