# Generated by Django 3.1.7 on 2021-07-22 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('guestbook', '0003_alter_guestbook_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guestbook',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]