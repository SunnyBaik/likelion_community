# Generated by Django 3.2 on 2021-07-21 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('privateCommunity', '0004_auto_20210720_1947'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='qna_type',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]