# Generated by Django 4.0.1 on 2022-03-31 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='data_1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sample_id', models.IntegerField(default=0)),
                ('timestamp', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('site_id', models.CharField(max_length=100)),
            ],
        ),
    ]