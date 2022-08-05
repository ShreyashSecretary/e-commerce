from django.urls import path
from rest_framework import routers
from .views import UserViewSet, HandleExtendUser, ListUsers, CustomAuthToken
from django.conf.urls import include

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('extendUserApi/', HandleExtendUser.as_view()),
    path('extendUserApi/<int:id>', HandleExtendUser.as_view()),
    path('user/', CustomAuthToken.as_view()),
    # path('userApi/<str:email>/<str:pass>', HandleExtendUser.as_view()),
]
