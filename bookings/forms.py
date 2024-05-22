from django import forms
from .models import Booking


class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = ['name', 'email', 'phone', 'destination', 'checkin_date', 'checkout_date']
        widgets = {
            'checkin_date': forms.DateTimeInput(attrs={'type': 'datetime-local'}),
            'checkout_date': forms.DateTimeInput(attrs={'type': 'datetime-local'}),
        }
