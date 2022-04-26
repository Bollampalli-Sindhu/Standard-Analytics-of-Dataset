from django.core.management.base import BaseCommand
import pandas as pd
from datasets.models import data_1

class Command(BaseCommand):
    help = 'import booms'

    def add_arguments(self, parser):
        pass 

    def handle(self, *args , **options):
        pass
        #df =  pd.read_excel('patient_data.xlsx')
        
        # for t, s, c, si in zip(df.timestamp, df.sample_id, df.country, df.site_id):
        #     models = data_1( sample_id = s, timestamp=t, country=c, site_id=si)
        #     models.save()

        
        
            
                  
              