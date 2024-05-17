# Generated by Django 5.0.6 on 2024-05-17 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='')),
                ('slug', models.SlugField(max_length=100)),
                ('content', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('author', models.CharField(max_length=100)),
            ],
        ),
    ]