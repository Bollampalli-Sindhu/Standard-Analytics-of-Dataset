from pyexpat import model
from django.db import models

# Create your models here.
class data_1(models.Model):
    sample_id = models.IntegerField(null=False, default=0)
    timestamp = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    site_id = models.CharField(max_length=100)

class data_2(models.Model):
    Country = models.CharField(max_length=50)
    Confirmed = models.IntegerField(null=False, default=0)
    Deaths = models.IntegerField(null=False, default=0)
    Recovered = models.IntegerField(null=False, default=0)
    Active = models.IntegerField(null=False, default=0)
    New_cases = models.IntegerField(null=False, default=0)
    New_deaths = models.IntegerField(null=False, default=0)
    New_recovered = models.IntegerField(null=False, default=0)
    Deaths_per_100_Cases = models.FloatField(null=False, default=0)
    Recovered_per_100_Cases = models.FloatField(null=False, default=0)
    WHO_Region = models.CharField(max_length=50)

class download_tracker(models.Model):
    dataset_name = models.CharField(max_length=50)
    month = models.IntegerField(null=False, default=0)
    

class Metadata(models.Model):
    model_name = models.CharField(max_length=50)  
    citations = models.IntegerField(null=False, default=0) #get the info from user
    downloads = models.IntegerField(null=False, default=0) #check if the record exists.
    dataset_name = models.CharField(max_length=50)   
    dataset_size = models.IntegerField(null=False, default=0)
    description = models.CharField(max_length=500)  