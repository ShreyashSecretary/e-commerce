"""
contains all business logic
"""
from rest_framework.response import Response

from login.entities import ExtendUserProxy
from login.serializer import ExtendUserSerializer, GetExtendUserSerializer


class ExtendUserService:

    def get_users(self, request, kwargs):
        if 'id' in kwargs:
            user = ExtendUserProxy.objects.get_user_by_id(kwargs['id'])
            serializer = GetExtendUserSerializer(user)
        # elif 'email' in kwargs and 'pass' in kwargs:
        #     user = ExtendUserProxy.objects.get_login_user(kwargs['email'], kwargs['pass'])
        #     serializer = ExtendUserSerializer(user)
        else:
            user = ExtendUserProxy.objects.get_all_users()
            serializer = GetExtendUserSerializer(user, many=True)
        return Response(serializer.data)

    def create_user(self, request):
        data = request.data
        serializer = ExtendUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'msg': serializer.errors})

    def update_user(self, data):
        id = data.get('user_id', None)
        user = ExtendUserProxy.objects.get_by_id(id)
        print("Com ::: ", user)
        # res = ComplaintProxy.add_date(data)
        serializer = ExtendUserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'msg': serializer.errors})

