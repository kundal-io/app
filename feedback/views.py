from django.shortcuts import render, redirect
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt

import json

# Create your views here.
from .models import *
from django.template.loader import render_to_string



def user_home(request):
    
    if request.method == "GET":
        
        # Redirect to create a company and team's first member if not present.
        teams = TeamMember.objects.filter(member=request.user)
        if len(teams) <=0:
            return redirect("feedback:create-company")
        
        try:
            if not request.session['company_id']:
                return redirect("feedback:select-company")
        except:
            return redirect("feedback:select-company")

    return render(request, 'pages/user-home.html', {})


def select_company(request):
    if request.method == "POST":
        request.session['company_id'] = request.POST['company']
        return redirect("feedback:user-home")
        
    companies = []
    teams = TeamMember.objects.filter(member=request.user)
    for team in teams:
        companies.append(team.company)
    return render(request, 'pages/select-company.html', {
        'companies': companies
    })


def create_company(request):
    if request.method == "POST":
        jc = {"name": request.POST['name']}
        c = Company(data=jc, created_by=request.user.id)
        c.save()
        t = TeamMember(member=request.user, company=c, created_by=request.user.id)
        t.save()
        request.session['company_id'] = str(c.id)
        return redirect("feedback:user-home")
    
    return render(request, 'pages/create-company.html', {})


def get_changelogs(request):
    return render(request, 'pages/changelog-list.html', {})
    
def get_feedbacks(request):
    return render(request, 'pages/feedback-list.html', {
        'items': Feedback.objects.all()
    })
    
    
def get_feedback_details(request, pk):
    return render(request, 'pages/feedback-details.html', {
        'item': Feedback.objects.get(pk=pk)
    })
    
    
def get_roadmaps(request):
    return render(request, 'pages/roadmap-list.html', {
        'items': Roadmap.objects.all()
    })   
    
        
def company_users(request):
    companies = []
    try:
        company_users = CompanyUser.objects.users(request.session['company_id'])
    except KeyError as ex:
        return redirect("feedback:select-company")
    
    teams = TeamMember.objects.filter(member=request.user)
    
    for team in teams:
        companies.append(team.company)
        
    return render(request, 'pages/company-users.html', {
        'items': company_users,
        "companies": companies
    })    
    
    
@xframe_options_exempt
@csrf_exempt
def contact_widget(request, app_id):
    
    if request.method == "POST":
        name = request.POST['name']
        emailid = request.POST['emailid']
        phone = request.POST['phone']
        app_id = request.POST['app_id']
        company = Company.objects.get(pk=app_id)
        u = CompanyUser(name=name, email_id=emailid, phone_number=phone, source='CONTACT', company=company, created_by=app_id)
        u.save()
        return render(request, 'widgets/thanks.html', {
            "app_id": app_id
        })
            
    return render(request, 'widgets/contact-widget.html', {
        "app_id": app_id
    })    


def widgets(request):
    return render(request, 'pages/widgets.html', {})   

@xframe_options_exempt
@csrf_exempt
def subscribe_widget(request, app_id):
    
    if request.method == "POST":
        emailid = request.POST['emailid']
        app_id = request.POST['app_id']
        company = Company.objects.get(pk=app_id)
        u = CompanyUser(email_id=emailid, source='SUBSCRIBE', company=company, created_by=app_id)
        u.save()
        
        return render(request, 'widgets/thanks.html', {
            "app_id": app_id
        })
    
    return render(request, 'widgets/subscribe-widget.html', {
        "app_id": app_id
    })        
    
    
    
def project_settings(request):
    
    try:
        app_id = request.session['company_id']
    except KeyError as ex:
        return redirect("feedback:select-company")
        
    company = Company.objects.get(pk=app_id)
    
    sdk_js = render_to_string('pages/integration-sdk.html', {})
    subscribe_js = render_to_string('pages/integration-subscribe.html', {
        'app_id': app_id
    })
    
    return render(request, 'pages/project-settings.html', {
        'company': company,
        'sdk_js': sdk_js,
        'subscribe_js': subscribe_js
    })