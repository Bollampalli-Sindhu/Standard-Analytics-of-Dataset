# Generated by Django 4.0.1 on 2022-04-01 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='citations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataset', models.CharField(max_length=200)),
                ('dataset_id', models.IntegerField(default=0)),
                ('published', models.BooleanField()),
            ],
        ),
        migrations.AddField(
            model_name='data_1',
            name='number_of_citations',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='data_1',
            name='number_of_downloads',
            field=models.IntegerField(default=0),
        ),
    ]
