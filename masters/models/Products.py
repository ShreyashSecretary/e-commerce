from django.db import models
from reversion import revisions as reversion
from api.alias import AliasField
from api.models import BaseModel


class Products(BaseModel):
    product_id = models.AutoField(db_column="PRODUCT_ID", primary_key=True)
    product_serialNo = models.IntegerField(db_column="SERIAL_NO", blank=True, null=True)
    product_name = models.CharField(db_column="PRODUCT_NAME", max_length=50)
    product_desc = models.CharField(db_column="PRODUCT_DESC", max_length=500)
    product_type = models.CharField(db_column="PRODUCT_TYPE", max_length=50)
    product_category = models.CharField(db_column="PRODUCT_CAT", max_length=20)
    product_color = models.CharField(db_column="PRODUCT_COLOR", max_length=20)
    product_size = models.CharField(db_column="PRODUCT_SIZE", max_length=5)
    product_quantity = models.IntegerField(db_column="PRODUCT_QUANTITY")
    product_image = models.CharField(db_column="PRODUCT_IMAGE", max_length=500, null=True, blank=True)
    product_price = models.FloatField(db_column="PRODUCT_PRICE")
    name = AliasField(db_column='PRODUCT_ID', blank=True, null=True)
    status = models.CharField(db_column='STATUS', max_length=80, default='Draft')

    class UI_Meta:
        ui_specs = {
            "listview": [
                "this value"
            ],
            "formview": [
                # {
                #     "sectionlabel": "Student Master",
                #     "cols": 2,
                #     "colComponent": [
                #         {
                #             "label": "Student Name",
                #             "decorator": "student_name",
                #             "type": "textbox",
                #             "required": "true",
                #             "message": "Enter Student Name!",
                #             "id": "student_name",
                #             "placeholder": "Please enter Student Name!",
                #             "maxlength": 10,
                #             "disabled": False,
                #         },
                #         {
                #             "label": "Student RollNo",
                #             "decorator": "student_roll",
                #             "type": "textbox",
                #             "required": "true",
                #             "message": "Enter Student RollNo!",
                #             "id": "student_roll",
                #             "placeholder": "Please enter Student RollNo!",
                #             "maxlength": 10,
                #             "disabled": False,
                #         },
                #         {
                #             "label": "Is Active",
                #             "decorator": "is_active",
                #             "type": "radio",
                #             "radioType": "group",
                #             "id": "isActive",
                #             "required": "true",
                #             "message": "Please select the status",
                #             "listed": "yes",
                #             "list_data": [
                #                 {"True": "Yes"},
                #                 {"False": "No"},
                #             ],
                #             "link_api": "isactive",
                #             "disabled": False,
                #         },
                #         {
                #             "label": "Created By",
                #             "decorator": "created_by",
                #             "type": "textbox",
                #             "required": "true",
                #             "message": "Created By !",
                #             "id": "created_by",
                #             "placeholder": "This is Created By :",
                #             "disabled": True
                #         },
                #         {
                #             "label": "Created Date ",
                #             "decorator": "created_date",
                #             "required": "true",
                #             "message": "Created Date ",
                #             "placeholder": "Select Date",
                #             "type": "date",
                #             "id": "created_date",
                #             "dateFormatList": "YYYY-MM-DD HH:mm:ss",
                #             "disabled": True
                #         },
                #         {"label": "Updated By ",
                #          "decorator": "last_updated_by",
                #          "type": "textbox",
                #          "required": "true",
                #          "message": "Last Updated By !",
                #          "id": "last_updated_by",
                #          "placeholder": "This was last Up-dated By:",
                #          "disabled": True
                #          },
                #         {
                #             "label": "Last Updated : ",
                #             "decorator": "last_updated_date",
                #             "required": "true",
                #             "message": "Last Updated Date",
                #             "placeholder": "Select Date",
                #             "type": "date",
                #             "id": "last_updated_date",
                #             "dateFormatList": "YYYY-MM-DD HH:mm:ss",
                #             "disabled": True
                #         },
                #     ]
                # }
            ]
        }

    class Meta:
        db_table = 'MST_PRODUCTS'
        app_label = 'masters'


reversion.register(Products)
