from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')
def about(request):
    return render(request,'about.html')
def contact(request):
    return render(request,'contact.html')
def blogs(request):
    return render(request,'blogs.html')
def destinations(request):
    return render(request,'destination.html')

def single(request):
    return render(request,'single.html')


