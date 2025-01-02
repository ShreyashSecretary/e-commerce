from rest_framework import serializers

from masters.models import Products


class ProductSerializer(serializers.ModelSerializer):
    CART = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Products
        fields = "__all__"
