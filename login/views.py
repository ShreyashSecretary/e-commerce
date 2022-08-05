import traceback

from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, authentication, permissions
from rest_framework.authtoken.admin import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView

from login.serializer import UserSerializer
from login.services import ExtendUserService


class ListUsers(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        usernames = [user.username for user in User.objects.all()]
        return Response(usernames)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class HandleExtendUser(APIView):

    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    def get(self, request, **kwargs):
        user_data = ExtendUserService()
        print("parameters  ::  ", kwargs)
        try:
            res = user_data.get_users(request, kwargs)
            return Response(res.data)
        except Exception:
            traceback.print_exc()
            return Response(traceback)

    def post(self, request):
        user_data = ExtendUserService()
        # print("Data :" , request.data)

        try:
            print("Data :", request.data)
            res = user_data.create_user(request)
            return Response(res.data)
        except Exception:
            traceback.print_exc()
            return Response(traceback)

    def put(self, request):
        user_data = ExtendUserService()
        data = request.data
        try:
            res = user_data.update_user(data)
            return Response(res.data)
        except Exception:
            traceback.print_exc()
            return Response(traceback)

    # def delete(self, request):
    #     data = request.data
    #     id = data.get('id', None)
    #     user_data = ExtendUserService()
    #     res = user_data.(data)
    #     return Response(res.data)


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': user.username,
            'userid':user.id
        })
