# Generated by Django 4.0.3 on 2022-05-01 07:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0007_alter_data_2_deaths_per_100_cases_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='data_2',
            old_name='Active',
            new_name='active',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='Confirmed',
            new_name='confirmed',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='Country',
            new_name='country',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='Deaths',
            new_name='deaths',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='New_cases',
            new_name='new_cases',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='New_deaths',
            new_name='new_deaths',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='New_recovered',
            new_name='new_recovered',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='Recovered',
            new_name='recovered',
        ),
        migrations.RenameField(
            model_name='data_2',
            old_name='WHO_Region',
            new_name='who_region',
        ),
        migrations.RemoveField(
            model_name='data_2',
            name='Deaths_per_100_Cases',
        ),
        migrations.RemoveField(
            model_name='data_2',
            name='Recovered_per_100_Cases',
        ),
    ]
