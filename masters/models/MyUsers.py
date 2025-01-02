from django.contrib.auth.models import AbstractUser
from django.db import models
from reversion import revisions as reversion


class MyUsers(AbstractUser):
    mobile = models.CharField(db_column="MOBILE", max_length=10, unique=True)
    address = models.CharField(db_column="ADDRESS", max_length=100)
    email = models.EmailField(db_column="EMAIL", unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    spouse_name = models.CharField(blank=True, max_length=100)
    date_of_birth = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.email
    # class UI_Meta:
    #     ui_specs = {
    #         "listview": [
    #             "this value"
    #         ],
    #         "formview": [
    #
    #         ]
    #     }
    #
    # class Meta:
    #     db_table = 'MST_MYUSERS'
    #     app_label = 'masters'


# reversion.register(MyUsers)
