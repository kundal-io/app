from django.urls import path

from .views import *

urlpatterns = [
    
    path("", user_home, name="user-home"),
    
    path("create_company/", create_company, name="create-company"),
    path("select_company/", select_company, name="select-company"),
    
    
    path("<int:pk>/",get_feedback_details, name="feedback-details"),
    
    path("feedbacks/", get_feedbacks, name="feedback-list"),
    path("roadmaps/", get_roadmaps, name="roadmap-list"),
    path("users/", company_users, name="company-users"),
    path("changelogs/", get_changelogs, name="changelog-list"),
    path("settings/", project_settings, name="project-settings"),
    
      
    
    path("widgets/", widgets, name="widgets"),
    
    path("widgets/subscribe/<uuid:app_id>/", subscribe_widget, name="subscribe-widget"),
    path("widgets/contact/<uuid:app_id>/", contact_widget, name="contact-widget"),
    
    
]