import traceback

from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from users.OrderSerializer import OrderSerializer
from users.services import UserService, CartServices, ProductService, OrderService

from django.views.decorators.csrf import csrf_exempt


class HandleUsers(APIView):

    def get(self, request, **kwargs):
        user_data = UserService()
        print("parameters  ::  ", kwargs)
        res = user_data.get_users(request, kwargs)
        return Response(res.data)

    def post(self, request):
        user_data = UserService()
        try:
            res = user_data.create_user(request)
            return Response("User Created Successfully")
        except Exception:
            traceback.print_exc()
            return Response('Error!!!')

    def put(self, request):
        user_data = UserService()
        data = request.data
        res = user_data.update_user(data)
        return Response('User Updated successfully')


class HandleCart(APIView):

    def get(self, request, **kwargs):
        cart_data = CartServices()
        print("parameters  ::  ", kwargs)
        res = cart_data.get_cart_items(request, kwargs)
        return Response(res.data)

    def post(self, request):
        cart_data = CartServices()
        # print("Data :" , request.data)

        try:
            print("Data :" , request.data)
            res = cart_data.enter_into_cart(request)
            return Response(res.data)
        except Exception:
            traceback.print_exc()
            return Response(traceback)

    def put(self, request):
        cart_data = CartServices()
        data = request.data
        res = cart_data.update_cart(data)
        return Response(res.data)

    def delete(self, request):
        data = request.data
        id = data.get('cart_product_id', None)
        cart_data = CartServices()
        res = cart_data.delete_cart_item(data)
        return Response(res.data)


class HandleProducts(APIView):
    def get(self, request, **kwargs):
        product = ProductService()
        print("parameters  ::  ", kwargs)
        res = product.get_product(request, kwargs)
        return Response(res.data)


class HandleOrders(APIView):
    def get(self, request, **kwargs):
        order = OrderService()
        print('data ', kwargs)
        res = order.get_orders(request, kwargs)
        return Response(res.data)