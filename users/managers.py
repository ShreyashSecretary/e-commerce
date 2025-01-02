from django.db import models


class UserManager(models.Manager):

    def get_all_users(self):
        return self.all()

    def get_login_user(self, email, password):
        return self.get(user_email=email, password=password)

    def get_user_by_filter(self, args):
        return self.filter(user_email=args)

    def get_user_by_id(self, id):
        return self.get(user_id=id)


class CartManager(models.Manager):

    def filter_cart_by_user(self, args):
        return self.filter(user=args)

    def get_cart_by_id(self, id):
        return self.get(cart_product_id=id)

    def get_all_cart_items(self):
        return self.all()


class ProductManager(models.Manager):

    def get_product_by_id(self, id):
        return self.get(product_id=id)

    def get_all_products(self):
        return self.all()

    def filter_products_from_category(self, kwargs):
        return self.filter(product_type=kwargs)

    def filter_product_from_serial(self, kwargs):
        return self.filter(product_serialNo=kwargs)


class OrderManager(models.Manager):
    def get_order_by_id(self, id):
        return self.filter(user=id)

    def get_all_orders(self):
        return self.all()

