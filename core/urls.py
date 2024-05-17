from django.urls import path
from core import views

app_name = "core"

urlpatterns = [
    path('', views.index, name="index"),
    path('about/', views.about, name="about"),
    path('contact_us/', views.contact, name="contact"),
    path('blogs/', views.blogs, name="blogs"),
    path('destinations/', views.destinations, name="destinations"),
    path('single/', views.single, name="single"),

]