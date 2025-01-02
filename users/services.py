"""
contains all business logic
"""
from rest_framework.response import Response

from users.OrderSerializer import OrderSerializer
from users.ProductSerializer import ProductSerializer
from users.entities import UserProxy, CartProxy, ProductProxy, OrderProxy
from users.managers import ProductManager
from users.serializer import UserSerializer, CartSerializer, GetCartSerializer


class UserService:

    def get_users(self, request, kwargs):
        if 'id' in kwargs:
            user = UserProxy.objects.get_user_by_id(kwargs['id'])
            serializer = UserSerializer(user)
        elif 'email' in kwargs and 'pass' in kwargs:
            user = UserProxy.objects.get_login_user(kwargs['email'], kwargs['pass'])
            serializer = UserSerializer(user)
        else:
            user = UserProxy.objects.get_all_users()
            serializer = UserSerializer(user, many=True)
        return Response(serializer.data)

    def create_user(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response("User Created Successsfully")
        return Response({'msg': serializer.errors})

    def update_user(self, data):
        id = data.get('user_id', None)
        user = UserProxy.objects.get_by_id(id)
        print("Com ::: ", user)
        # res = ComplaintProxy.add_date(data)
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            res = {'msg': 'user updated successfully'}
            return Response({'msg': 'user updated successfully'})
        return Response({'msg': serializer.errors})


class CartServices:
    def get_cart_items(self, request, kwargs):
        if 'user' in kwargs:
            cart = CartProxy.objects.filter_cart_by_user(kwargs['user'])
            serializer = GetCartSerializer(cart, many=True)
        elif 'id' in kwargs:
            cart = CartProxy.objects.get_cart_by_id(kwargs['id'])
            serializer = GetCartSerializer(cart)
        else:
            cart = CartProxy.objects.get_all_cart_items()
            serializer = GetCartSerializer(cart, many=True)
        return Response(serializer.data)

    def enter_into_cart(self, request):
        data = request.data
        print("In service", data)
        serializer = CartSerializer(data=data)
        print("In service", serializer.is_valid(), "   Error ::  ", serializer.errors)
        if serializer.is_valid():
            serializer.save()
            print("In Is valid")
            return Response("Addedd To cart Successsfully")
        return Response({'msg': serializer.errors})

    def update_cart(self, data):
        id = data.get('cart_product_id', None)
        cart = CartProxy.objects.get_cart_by_id(id)
        print("Com ::: ", cart)
        # res = ComplaintProxy.add_date(data)
        serializer = CartSerializer(cart, data=data)
        if serializer.is_valid():
            serializer.save()
            res = {'msg': 'Cart updated successfully'}
            return Response({'msg': 'Cart updated successfully'})
        return Response({'msg': serializer.errors})

    def delete_cart_item(self, data):
        id = data.get('cart_product_id', None)
        print("id ::: ", id)
        return CartProxy.delete_cart_item(id)


class ProductService:
    def get_product(self, request, kwargs):
        if 'id' in kwargs:
            product = ProductProxy.objects.get_product_by_id(kwargs['id'])
            serializer = ProductSerializer(product)
        elif 'category' in kwargs:
            product = ProductProxy.objects.filter_products_from_category(kwargs['category'])
            serializer = ProductSerializer(product)
        elif 'serial' in kwargs:
            product = ProductProxy.objects.filter_product_from_serial(kwargs['serial'])
            serializer = ProductSerializer(product, many=True)
        else:
            product = ProductProxy.objects.get_all_products()
            serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)


class OrderService:
    def get_orders(self, request, kwargs):
        if 'id' in kwargs:
            order = OrderProxy.objects.get_order_by_id(kwargs['id'])
            serializer = OrderSerializer(order, many=True)
        else:
            order = OrderProxy.objects.get_all_orders()
            serializer = OrderSerializer(order, many=True)
        return Response(serializer.data)
