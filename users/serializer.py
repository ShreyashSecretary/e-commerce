from rest_framework import serializers

from .ProductSerializer import ProductSerializer
from .entities import UserProxy
from .models import users
from .models.Cart import Cart


class UserSerializer(serializers.ModelSerializer):
    CART = serializers.StringRelatedField(many=True, read_only=True)
    ORDERS = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = users
        fields = '__all__'

        def update(self, instance, validated_data):
            instance.user_id = validated_data.get('user_id', instance.user_id)
            instance.user_name = validated_data.get('user_name', instance.user_name)
            instance.user_email = validated_data.get('user_email', instance.user_email)
            instance.password = validated_data.get('password', instance.password)
            instance.mobile = validated_data.get('mobile', instance.mobile)
            instance.address = validated_data.get('address', instance.address)
            instance.save()
            return instance


class CartSerializer(serializers.ModelSerializer):
    # products = ProductSerializer(read_only=True)
    # user = UserSerializer(read_only=True)
    # users = serializers.PrimaryKeyRelatedField(queryset=users.objects.all(), many=True)
    class Meta:
        model = Cart
        fields = '__all__'
        # depth = 1

        def update(self, instance, validated_data):
            print('In update')
            instance.cart_product_id = validated_data.get('cart_product_id', instance.cart_product_id)
            instance.user = validated_data.get('user', instance.user)
            instance.products = validated_data.get('products', instance.products)
            instance.quantity = validated_data.get('quantity', instance.quantity)
            instance.size = validated_data.get('size', instance.size)
            instance.save()
            return instance


class GetCartSerializer(serializers.ModelSerializer):
    # products = ProductSerializer(read_only=True)
    # user = UserSerializer(read_only=True)
    # users = serializers.PrimaryKeyRelatedField(queryset=users.objects.all(), many=True)
    class Meta:
        model = Cart
        fields = '__all__'
        depth = 1

        def update(self, instance, validated_data):
            print('In update')
            instance.cart_product_id = validated_data.get('cart_product_id', instance.cart_product_id)
            instance.user = validated_data.get('user', instance.user)
            instance.products = validated_data.get('products', instance.products)
            instance.quantity = validated_data.get('quantity', instance.quantity)
            instance.size = validated_data.get('size', instance.size)
            instance.save()
            return instance

