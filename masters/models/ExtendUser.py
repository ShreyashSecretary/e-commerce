from api.models import BaseModel
from django.db import models
from rest_framework.authtoken.admin import User
from reversion import revisions as reversion


class ExtendUser(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="USER", related_name="EXTENDUSER")
    mobile = models.CharField(db_column="MOBILE", max_length=10)
    address = models.CharField(db_column="ADDRESS", max_length=500, null=True, blank=True)

    class UI_Meta:
        ui_specs = {
            "listview": [
                "this value"
            ],
            "formview": [

            ]
        }

    class Meta:
        db_table = 'MST_EXTENDUSER'
        app_label = 'masters'


reversion.register(ExtendUser)