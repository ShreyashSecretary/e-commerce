from django.contrib import admin
from django.urls import path
from .views import HandleUsers, HandleCart, HandleProducts, HandleOrders

urlpatterns = [
    path('userApi/', HandleUsers.as_view()),
    path('userApi/<int:id>', HandleUsers.as_view()),
    path('userApi/<str:email>/<str:pass>', HandleUsers.as_view()),
    path('cartApi/<int:user>', HandleCart.as_view()),
    path('cartApiWithId/<int:id>', HandleCart.as_view()),
    path('cartApiWithId/', HandleCart.as_view()),
    path('cartApi/', HandleCart.as_view()),
    path('productApi/', HandleProducts.as_view()),
    path('productApi/<int:id>', HandleProducts.as_view()),
    path('productApiSerial/<int:serial>', HandleProducts.as_view()),
    path('productApi/<str:category>', HandleProducts.as_view()),
    # path('productApi/<arr:category>', HandleProducts.as_view()),
    path('orderApi/<int:id>', HandleOrders.as_view()),
    path('orderApi/', HandleOrders.as_view())
]
