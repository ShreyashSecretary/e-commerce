from .managers import ExtendUserManager
from .models.ExtendUser import ExtendUser


class ExtendUserProxy(ExtendUser):
    objects = ExtendUserManager()

    # def delete_cart_item(id):
    #     CartProxy.objects.get_cart_by_id(id).delete()
    #     return CartProxy.objects

    class Meta:
        proxy = True
