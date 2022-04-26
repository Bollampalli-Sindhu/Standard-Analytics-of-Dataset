from pyexpat import model
from django.db import models

# Create your models here.
class data_1(models.Model):
    sample_id = models.IntegerField(null=False, default=0)
    timestamp = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    site_id = models.CharField(max_length=100)

class download_tracker(models.Model):
    dataset_name = models.CharField(max_length=50)
    timestamp = models.DateField()

class Metadata(models.Model):
    model_name = models.CharField(max_length=50)  
    citations = models.IntegerField(null=False, default=0) #get the info from user
    downloads = models.IntegerField(null=False, default=0) #check if the record exists.
    dataset_name = models.CharField(max_length=50)   
    dataset_size = models.IntegerField(null=False, default=0)
    description = models.CharField(max_length=500)  