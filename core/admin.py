from django.contrib import admin
from core.models import Blog, Destination

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date')
    search_fields = ('title', 'content')

class DestinationAdmin(admin.ModelAdmin):
    list_display = ('pkg_name', 'price')
    search_fields = ('pkg_name', 'content')

admin.site.register(Blog, BlogAdmin)
admin.site.register(Destination, DestinationAdmin)
