# Generated by Django 4.0.1 on 2022-04-28 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0006_data_2_remove_download_tracker_timestamp_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data_2',
            name='Deaths_per_100_Cases',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='data_2',
            name='Recovered_per_100_Cases',
            field=models.FloatField(default=0),
        ),
    ]