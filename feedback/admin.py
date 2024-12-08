from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Group)

class CompanyAdmin(admin.ModelAdmin):
    list_display = ['id', 'data', 'created_by']

admin.site.register(Company, CompanyAdmin)

class RoadmapAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'company']

admin.site.register(Roadmap, RoadmapAdmin)


admin.site.register(Board)


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'board', 'company']

admin.site.register(Feedback, FeedbackAdmin)

class CompanyUserAdmin(admin.ModelAdmin):
    list_display = ['email_id', 'name', 'phone_number', 'source', 'company']

admin.site.register(CompanyUser, CompanyUserAdmin)

admin.site.register(OptOut)
admin.site.register(TeamMember)
