from masters.models import Products, Orders
from users.models.Cart import Cart
from users.models.users import users
from users.managers import UserManager, CartManager, ProductManager, OrderManager


class UserProxy(users):
    objects = UserManager()

    class Meta:
        proxy = True


class CartProxy(Cart):
    objects = CartManager()

    def delete_cart_item(id):
        CartProxy.objects.get_cart_by_id(id).delete()
        return CartProxy.objects

    class Meta:
        proxy = True


class ProductProxy(Products):
    objects = ProductManager()

    class Meta:
        proxy = True


class OrderProxy(Orders):
    objects = OrderManager()

    class Meta:
        proxy = True
