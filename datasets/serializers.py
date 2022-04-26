from rest_framework import serializers
from .models import data_1, Metadata

class Data1Serializer(serializers.ModelSerializer):
    class Meta:
        model = data_1
        fields = ('id', 'sample_id', 'timestamp', 'country', 'site_id')


class MetaDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metadata
        fields = ('id', 'model_name','dataset_name', 'dataset_size', 'downloads', 'citations','description')

class UpdateMetaDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metadata
        fields = ('model_name', 'downloads', 'citations')

# class handleDownloadSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = 

# class data_1Viewer(serializers.ModelSerializer):
#     class Meta:
#         model = data_1
#         fields = ('id', 'country')

        
