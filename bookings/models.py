from django.db import models


# Create your models here.
class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    booked_date = models.DateTimeField(auto_now_add=True)
    checkin_date = models.DateTimeField(auto_now_add=True)
    checkout_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
