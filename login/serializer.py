from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from login.models.ExtendUser import ExtendUser


class UserSerializer(serializers.ModelSerializer):
    EXTENDUSER = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'
        # for hiding password in get request
        # extra_kwargs = {'password': {'write_only': True, 'required': True}}

    # For hashing the password
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        # Creating token for each users
        Token.objects.create(user=user)
        return user


class ExtendUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtendUser
        fields = '__all__'

        def update(self, instance, validated_data):
            print('In update')
            instance.phone = validated_data.get('phone', instance.phone)
            instance.user = validated_data.get('user', instance.user)
            instance.address = validated_data.get('address', instance.address)
            instance.save()
            return instance


class GetExtendUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtendUser
        fields = '__all__'
        depth = 1

        def update(self, instance, validated_data):
            print('In update')
            instance.phone = validated_data.get('phone', instance.phone)
            instance.user = validated_data.get('user', instance.user)
            instance.address = validated_data.get('address', instance.address)
            instance.save()
            return instance
