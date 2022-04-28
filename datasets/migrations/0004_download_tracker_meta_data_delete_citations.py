# Generated by Django 4.0.1 on 2022-04-02 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0003_remove_data_1_number_of_citations_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='download_tracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataset_name', models.CharField(max_length=50)),
                ('timestamp', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='meta_data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('citations', models.IntegerField(default=0)),
                ('downloads', models.IntegerField(default=0)),
                ('dataset_name', models.CharField(max_length=50)),
                ('dataset_size', models.IntegerField(default=0)),
                ('description', models.CharField(max_length=500)),
            ],
        ),
        migrations.DeleteModel(
            name='citations',
        ),
    ]
