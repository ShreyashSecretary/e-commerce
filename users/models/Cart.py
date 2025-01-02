from django.db import models
from reversion import revisions as reversion

from masters.models import Products
from users.models import users


class Cart(models.Model):
    cart_product_id = models.AutoField(db_column="CART_PRODUCT_ID", primary_key=True)
    user = models.ForeignKey(users, on_delete=models.CASCADE, db_column='USER', related_name='CART')
    products = models.ForeignKey(Products, on_delete=models.CASCADE, db_column='PRODUCTS', related_name='CART')
    quantity = models.IntegerField(db_column="QUANTITY")
    size = models.CharField(db_column="SIZE", max_length=5, null=True, blank=True)
    is_active = models.BooleanField(db_column="IS_ACTIVE",null=True, blank=True, default=True)
    added_date = models.DateTimeField(db_column="ADDED_DATE", null=True, blank=True, auto_now_add=True)