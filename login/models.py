# from django.contrib.auth.models import AbstractUser
# from django.db import models
# from django.contrib.auth.models import AbstractUser, BaseUserManager
# from django.db import models
# from django.utils.translation import ugettext_lazy as _
#
#
# class CustomUserManager(BaseUserManager):
#     """Define a model manager for User model with no username field."""
#
#     def _create_user(self, email, password=None, **extra_fields):
#         """Create and save a User with the given email and password."""
#         if not email:
#             raise ValueError('The given email must be set')
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user
#
#     def create_user(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', False)
#         extra_fields.setdefault('is_superuser', False)
#         return self._create_user(email, password, **extra_fields)
#
#     def create_superuser(self, email, password=None, **extra_fields):
#         """Create and save a SuperUser with the given email and password."""
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#
#         if extra_fields.get('is_staff') is not True:
#             raise ValueError('Superuser must have is_staff=True.')
#         if extra_fields.get('is_superuser') is not True:
#             raise ValueError('Superuser must have is_superuser=True.')
#
#         return self._create_user(email, password, **extra_fields)
#
# # Create your models here.
#
# class CustomUser(AbstractUser):
#     email = models.EmailField(db_column="EMAIL", unique=True)
#     mobile = models.CharField(db_column="MOBILE", max_length=10, unique=True)
#     ipaddress = models.CharField(db_column="ADDRESS", max_length=500)
#
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []
#
#     object = CustomUserManager()
