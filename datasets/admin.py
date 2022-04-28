from csv import list_dialects
from django.contrib import admin
from .models import Metadata

# Register your models here.
class MetadataAdmin(admin.ModelAdmin):
    list_display = ("model_name","citations","downloads","dataset_name","dataset_size","description")

admin.site.register(Metadata,MetadataAdmin)