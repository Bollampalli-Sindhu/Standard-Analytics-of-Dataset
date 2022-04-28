from rest_framework import serializers
from .models import data_1, Metadata, download_tracker, data_2

class Data1Serializer(serializers.ModelSerializer):
    class Meta:
        model = data_1
        fields = ('id', 'sample_id', 'timestamp', 'country', 'site_id')

class Data2Serializer(serializers.ModelSerializer):
    class Meta:
        model = data_2
        fields = ('id', 'Country', 'Confirmed', 'Deaths', 'Recovered', 'Active', 'New_cases', 'New_deaths', 'New_recovered', 'Deaths_per_100_Cases', 'Recovered_per_100_Cases', 'WHO_Region')


class MetaDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metadata
        fields = ('id', 'model_name','dataset_name', 'dataset_size', 'downloads', 'citations','description')

class UpdateMetaDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metadata
        fields = ('model_name', 'downloads', 'citations')

class DownloadTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = download_tracker
        fields = ('dataset_name', 'month')

# class data_1Viewer(serializers.ModelSerializer):
#     class Meta:
#         model = data_1
#         fields = ('id', 'country')

        
