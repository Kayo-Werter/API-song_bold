# Generated by Django 5.0.6 on 2024-05-08 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='url',
            field=models.URLField(),
        ),
    ]
