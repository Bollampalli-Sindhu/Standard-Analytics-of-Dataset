from importlib.metadata import metadata
from re import S
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import generics,status
from .serializers import Data1Serializer, MetaDataSerializer, UpdateMetaDataSerializer
from .models import data_1,Metadata
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator

from datasets import serializers
from collections import Counter

from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

# Create your views here.
## view for dataset1
class Data_1View(generics.ListAPIView):
    queryset = data_1.objects.all()
    serializer_class = Data1Serializer 
    
 ##view for metadata table  -> url : /datasets/metadata (only for us)
class MetadataView(generics.ListAPIView):
    queryset = Metadata.objects.all()
    serializer_class = MetaDataSerializer 

## get metadata from backend to frontend -> receives fetch request from AnalysisPage.js get request
class GetMetadataView(APIView):
    queryset = Metadata.objects.all()
    serializer_class = MetaDataSerializer 
    lookup_url_kwarg = 'dataset'

    def get(self, request, format=None):
        dataset_name = request.GET.get(self.lookup_url_kwarg)
        if dataset_name != None:
            dataset = Metadata.objects.filter(dataset_name = dataset_name)
            if len(dataset)>0:
                data = MetaDataSerializer(dataset[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Dataset is not Found':"Dataset doesnot exits"}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request':'Dataset_name is not Found in request'}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data) # serializes and gives python representation of the data
        if serializer.is_valid():
            dataset_name = serializer.data.get('dataset_name')
            downloads = serializer.data.get('downloads')
            citations = serializer.data.get('citations')
            model_name = serializer.data.get('model_name')
            dataset_size = serializer.data.get('dataset_size')
            description = serializer.data.get('description')
            queryset = Metadata.objects.filter(dataset_name=dataset_name)  

            if queryset.exists():
                dataset = queryset[0]
                dataset.dataset_name = dataset_name
                dataset.downloads = downloads
                dataset.citations = citations
                dataset.model_name = model_name
                dataset.dataset_size = dataset_size
                dataset.description = description
                dataset.save(update_fields=['downloads','dataset_name','citations','model_name','dataset_size','description'])
                return Response(MetaDataSerializer(dataset).data,status=status.HTTP_201_CREATED)
            else:
                return Response({'Dataset Not Found': 'Invalid dataset name.'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Dataset name not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class UpdateMetaDataView(APIView):
    serializer_class = UpdateMetaDataSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            model_name = serializer.data.get('model_name')
            downloads = serializer.data.get('downloads')
            citations = serializer.data.get('citations')
            queryset = Metadata.objects.filter(model_name = model_name)
            metadata = queryset[0]
            metadata.downloads = downloads+1
            metadata.citations = citations
            metadata.save(update_fields=['downloads', 'citations'])
            return Response(MetaDataSerializer(metadata).data,status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Dataset name not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class CSRFExemptMixin(object):
   @method_decorator(csrf_exempt)
   def dispatch(self, *args, **kwargs):
       return super(CSRFExemptMixin, self).dispatch(*args, **kwargs)

# # @method_decorator(csrf_exempt, name='dispatch')
# class UpdateMetaDataView(CSRFExemptMixin,APIView):
#     seralizer_class = UpdateMetaDataSerializer
#     # queryset = Metadata.objects.all()
#     # authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


#     # @csrf_exempt
#     # @method_decorator(csrf_exempt)

#     # @method_decorator(csrf_exempt)
#     # def dispatch(self, request, *args, **kwargs):
#     #     return super(UpdateMetaDataView, self).dispatch(request, *args, **kwargs)


#     def post(self, request, format=None):
#         # request._dont_enforce_csrf_checks = True
#         print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
#         serializer = self.serializer_class(data=request.data) # serializes and gives python representation of the data
        
#         if not self.request.session.exists(self.request.session.session_key):
#             self.request.session.create()

#         if serializer.is_valid():
#             dataset_name = serializer.data.get('dataset_name')
#             downloads = serializer.data.get('downloads')
#             citations = serializer.data.get('citations')
#             model_name = serializer.data.get('model_name')
#             dataset_size = serializer.data.get('dataset_size')
#             description = serializer.data.get('description')
#             queryset = Metadata.objects.filter(dataset_name=dataset_name)  

#             if queryset.exists():
#                 dataset = queryset[0]
#                 dataset.dataset_name = dataset_name
#                 dataset.downloads = downloads
#                 dataset.citations = citations
#                 dataset.model_name = model_name
#                 dataset.dataset_size = dataset_size
#                 dataset.description = description
#                 dataset.save(update_fields=['downloads','dataset_name','citations','model_name','dataset_size','description'])
#                 return Response(MetaDataSerializer(dataset).data,status=status.HTTP_201_CREATED)
#             else:
#                 return Response({'Dataset Not Found': 'Invalid dataset name.'}, status=status.HTTP_404_NOT_FOUND)
#         return Response({'Bad Request': 'Dataset name not found in request'}, status=status.HTTP_400_BAD_REQUEST)


## metadata manipulation api calls for metadata table
@csrf_exempt
def metadataApi(request,id=0):
    if request.method=='GET':
        queryset_master = Metadata.objects.all()
        master_serializer = MetaDataSerializer(queryset_master, many=True)
        return JsonResponse(master_serializer.data, safe=False) 

    elif request.method=='POST':
        master_data=JSONParser().parse(request)
        master_serializer = MetaDataSerializer(data=master_data)
        if master_serializer.is_valid():
            master_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        master_data = JSONParser().parse(request)
        master_record = Metadata.objects.get(dataset_name = master_data['dataset_name'])
        master_serializer=MetaDataSerializer(master_record,data=master_data)
        if master_serializer.is_valid():
            master_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        master_record = Metadata.objects.get(dataset_id=id)
        master_record.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)         