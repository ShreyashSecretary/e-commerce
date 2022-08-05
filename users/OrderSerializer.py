from rest_framework import serializers

from masters.models import Orders


class OrderSerializer(serializers.ModelSerializer):
    # ORDERS = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Orders
        fields = "__all__"
        depth = 1

