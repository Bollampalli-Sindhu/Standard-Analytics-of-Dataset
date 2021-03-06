from django.urls import path
from .views import Data_1View, AnalyticsView, Data_2View,GetMetadataView,MetadataView, metadataApi,UpdateMetaDataView,DownloadTrackerView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('data',Data_1View.as_view()), #whatever url is recieved + '/home' will call main function
    path('metadata', MetadataView.as_view()),
    path('get_metadata',GetMetadataView.as_view()),
    path('get_data', AnalyticsView.as_view()),
    path('analysis',UpdateMetaDataView.as_view()),
    path('metadata_edit',metadataApi),
    path(r'^metadata_edit/([0-9]+)$',metadataApi),
    path('track_download',DownloadTrackerView.as_view()),
    
] 
