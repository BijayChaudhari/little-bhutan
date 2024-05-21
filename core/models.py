from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='blog_images/')
    slug = models.SlugField(max_length=100, unique=True)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Destination(models.Model):
    pkg_name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='destination_images/')
    slug = models.SlugField(max_length=100, unique=True)
    content = models.TextField()
    price = models.IntegerField()

    def __str__(self):
        return self.pkg_name
