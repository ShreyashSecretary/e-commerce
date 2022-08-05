from django.contrib.postgres.fields import ArrayField
from django.db import models
from api.models import BaseModel
from api.alias import AliasField
from reversion import revisions as reversion

from masters.models import Products
from users.models import users


class Orders(BaseModel):
    order_id = models.AutoField(db_column="ORDER_ID", primary_key=True)
    order_price = models.FloatField(db_column="ORDER_PRICE")
    order_address = models.CharField(db_column="ORDER_ADDRESS", max_length=100)
    order_quantity = models.IntegerField(db_column="ORDER_QUANTITY")
    order_date = models.DateField(db_column="ORDER_DATE", auto_now_add=True)
    # product = models.ForeignKey(Products, on_delete=models.CASCADE, db_column="PRODUCT", related_name="ORDERS")
    user = models.ForeignKey(users, on_delete=models.CASCADE, db_column="USERS", related_name="ORDERS", null=True, blank=True)
    cart_id = ArrayField(models.IntegerField(blank=True, null=True, db_column="CART_ID"), null=True, blank=True)
    name = AliasField(db_column='ORDER_ID', blank=True, null=True)
    status = models.CharField(db_column='STATUS', max_length=80, default='Draft')

    class UI_Meta:
        ui_specs = {
            "listview": [
                "this value"
            ],
            "formview": [

            ]
        }

    class Meta:
        db_table = 'MST_ORDER'
        app_label = 'masters'


reversion.register(Orders)
