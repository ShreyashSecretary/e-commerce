from django.db import models


class ExtendUserManager(models.Manager):

    def get_all_users(self):
        return self.all()

    # def get_login_user(self, email, password):
    #     return self.get(user_email=email, password=password)
    #
    # def get_user_by_filter(self, args):
    #     return self.filter(user_email=args)

    def get_user_by_id(self, id):
        return self.get(user=id)

    def get_by_id(self, id):
        return self.get(id=id)
