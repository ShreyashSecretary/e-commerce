from django.db import models
from reversion import revisions as reversion


class users(models.Model):
    user_id = models.AutoField(db_column='USER_IS', primary_key=True)
    user_name = models.CharField(db_column='USER_NAME', max_length=20)
    user_email = models.CharField(db_column='USER_EMAIL', unique=True, max_length=30)
    password = models.CharField(db_column='PASSWORD', unique=True, max_length=30)
    mobile = models.CharField(db_column='MOBILE', null=True, blank=True, max_length=12)
    address = models.CharField(db_column='ADDRESS', max_length=100, null=True, blank=True)
    is_admin = models.BooleanField(db_column='IS_ADMIN', default=False, null=True, blank = True)
