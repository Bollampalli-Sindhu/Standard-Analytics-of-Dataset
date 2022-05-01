from django.core.management.base import BaseCommand
import pandas as pd
# from datasets.models import data_1
from datasets.models import data_2

class Command(BaseCommand):
    help = 'import booms'

    def add_arguments(self, parser):
        pass 

    def handle(self, *args , **options):
        records = data_2.objects.all()
        # records.delete()
        print(records)
        for i in records:
            print(i)
        # df =  pd.read_excel('patient_data.xlsx')
        
        # for t, s, c, si in zip(df.timestamp, df.sample_id, df.country, df.site_id):
        #     models = data_1( sample_id = s, timestamp=t, country=c, site_id=si)
        #     # print(models)
        #     models.save()

        # df =  pd.read_csv('country_wise_latest.csv')
        # for r, c, d, rc, a, nc, nd, nr, w in zip(df.Country_Region, df.Confirmed, df.Deaths, df.Recovered, df.Active, df.New_cases, df.New_deaths, df.New_recovered,  df.WHO_Region):
        #     models = data_2( country = r, confirmed=c, deaths=d, recovered=rc, active=a, new_cases=nc, new_deaths = nd, new_recovered=nr, who_region=w)
        #     # print(models)
        #     models.save()

        
        
            
                  
              