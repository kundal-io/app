import uuid, datetime
from django.utils.timezone import utc
from django.db import models
from django.utils.translation import gettext_lazy as _
from fidbk.users.models import User
from django_extensions.db.fields import AutoSlugField, CreationDateTimeField, ModificationDateTimeField

# Create your models here.

class MetaStampedModel(models.Model):
    """
    MetaStampedModel

    An abstract base class model that provides self-managed 
    
    "created_on", 
    "modified_on", 
    "created_by",
    "modified_by",
    "is_deleted", 
    "is_active",
    "start_date",
    "end_date",
    
    fields.
    """

    created_on = CreationDateTimeField(_('created'))
    modified_on = ModificationDateTimeField(_('modified'), null=True, blank=True)
    
    created_by = models.UUIDField(_('Created By'))
    modified_by = models.UUIDField(_('Modified By'), null=True, blank=True)
    
    is_deleted = models.BooleanField(_("Is Deleted"), default=False)
    is_active = models.BooleanField(_("Is Active"), default=True)
    
    start_date = CreationDateTimeField(_('start_date'))
    end_date = models.DateTimeField(default=datetime.datetime(9999, 12, 31).replace(tzinfo=utc))

    def save(self, **kwargs):
        self.update_modified = kwargs.pop('update_modified', getattr(self, 'update_modified', True))
        super().save(**kwargs)

    class Meta:
        get_latest_by = 'modified_on'
        abstract = True
        
        

class Group(MetaStampedModel): # Its a hidden entity, not in use right now.
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    data = models.JSONField()
    

    def __str__(self):
        return str(self.id)

    def get_absolute_url(self) -> str:
        return reverse("group:detail", kwargs={"pk": self.id})
    

class Company(MetaStampedModel): # Here a company is used as a Project or App and its a billable entity
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    group_id = models.UUIDField(null=True, blank=True)
    data = models.JSONField()

    def __str__(self):
        return str(self.id)

    def get_absolute_url(self) -> str:
        return reverse("company:detail", kwargs={"pk": self.id})
    

class TeamMemberManager(models.Manager):
    
    def company_members(self, company_id):
        c = Company.objects.get(pk=company_id)
        return self.filter(company = c)
    
    
class TeamMember(MetaStampedModel):
    
    objects = TeamMemberManager()
    
    USER_TYPES = (
        ('ADMIN', 'ADMIN'),
        ('CONTRIBUTOR', 'CONTRIBUTOR'),
    )
    
    member = models.ForeignKey(User, verbose_name=_("Member"), on_delete=models.CASCADE, related_name='teams')
    user_type = models.CharField(_("User Type"), choices=USER_TYPES, default='OPEN', max_length=50)
    company = models.ForeignKey(Company, verbose_name=_("Company"), related_name='team_members', on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.pk)

    def get_absolute_url(self) -> str:
        return reverse("teammember:detail", kwargs={"pk": self.id})    
    
    
class Roadmap(MetaStampedModel):

    STATUS = (
        ('OPEN', 'OPEN'),
        ('COMPLETE', 'COMPLETE')
    )
    
    title = models.CharField(_("Title"), max_length=100)
    company = models.ForeignKey(Company, verbose_name=_("Company"), related_name='roadmaps', on_delete=models.CASCADE)
    status = models.CharField(_("Status"), choices=STATUS, default='OPEN', max_length=50)
    
    class Meta:
        verbose_name = _("Roadmap")
        verbose_name_plural = _("Roadmaps")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})
    

class Board(MetaStampedModel):

    title = models.CharField(_("Title"), max_length=100)
    description = models.TextField(_("Description"), null=True, blank=True)    
    company = models.ForeignKey(Company, verbose_name=_("Company"), related_name='boards', on_delete=models.CASCADE)
    is_private = models.BooleanField(_("Is Private"), default=True)

    class Meta:
        verbose_name = _("Board")
        verbose_name_plural = _("Boards")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})

    
    
class FeedbackManager(models.Manager):
    
    def open(self):
        return self.filter(status='OPEN')

    def under_review(self):
        return self.filter(status='UNDER_REVIEW')

    def planned(self):
        return self.filter(status='PLANNED')

    def in_progress(self):
        return self.filter(status='IN_PROGRESS')

    def complete(self):
        return self.filter(status='COMPLETE')

    def closed(self):
        return self.filter(status='CLOSED')

    def by_category(self, category):
        return self.filter(category=category)


class Feedback(MetaStampedModel):    
    
    objects = FeedbackManager()
    
    STATUS = (
        ('OPEN', 'OPEN'),
        ('UNDER_REVIEW', 'UNDER REVIEW'),
        ('PLANNED', 'PLANNED'),
        ('IN_PROGRESS', 'IN PROGRESS'),
        ('COMPLETE', 'COMPLETE'),
        ('CLOSED', 'CLOSED')
    )
    
    title = models.CharField(_("Title"), max_length=255)
    description = models.TextField(_("Description"), null=True, blank=True)
    image = models.FileField(_("Image"), upload_to=None, max_length=255, null=True, blank=True)
    
    status =  models.CharField(_("Status"), default='OPEN', choices=STATUS, max_length=50)
    owner = models.ForeignKey(User, verbose_name=_("Owner"), on_delete=models.SET_NULL, related_name='feedbacks', null=True, blank=True)
    tags = models.TextField(_("Tags"), null=True, blank=True)
    
    roadmap = models.ForeignKey(Roadmap, verbose_name=_("Roadmap"), on_delete=models.SET_NULL, related_name='feedbacks', null=True, blank=True)
    board = models.ForeignKey(Board, verbose_name=_("Board"), related_name='feedbacks', null=True, on_delete=models.SET_NULL)
    company = models.ForeignKey(Company, verbose_name=_("Company"), related_name='feedbacks', on_delete=models.CASCADE)
    
    CATEGORIES = (
        ('Undefined', 'Undefined'),
        ('Feature', 'Feature'),
        ('Bug', 'Bug'),
        ('Enhancement', 'Enhancement'),
        ('Task', 'Task')
    )
    category = models.CharField(_("Category"), default='Undefined', choices=CATEGORIES, max_length=50) # Feature, Bug, Enhancement, Task
    
    
    class Meta:
        verbose_name = _("Feedback")
        verbose_name_plural = _("Feedbacks")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})
    
    

class CompanyUserManager(models.Manager):
    
    def users(self, company_id):
        c = Company.objects.get(pk=company_id)
        return self.filter(company=c)
    

class CompanyUser(MetaStampedModel):  
    
    objects = CompanyUserManager()
    
    SOURCE = (
        ('FEEDBACK', 'FEEDBACK'),
        ('CONTACT', 'CONTACT'),
        ('SUBSCRIBE', 'SUBSCRIBE')
    )
    email_id = models.CharField(_("Emaild ID"), max_length=255)
    name = models.CharField(_("Name"), max_length=255, null=True, blank=True)
    phone_number = models.CharField(_("Phone Number"), max_length=15, null=True, blank=True)
    source = models.CharField(_("Source"), default='SUBSCRIBE', choices=SOURCE, max_length=50)
    company = models.ForeignKey(Company, verbose_name=_("Company"), related_name='company_users', on_delete=models.CASCADE)
    
    

class OptOut(MetaStampedModel):  
    CHANNEL = (
        ('PHONE', 'PHONE'),
        ('EMAIL', 'EMAIL')
    )
        
    channel_value = models.CharField(_("Channel Value"), max_length=255)
    channel_type = models.CharField(_("Channel Type"), default='Undefined', choices=CHANNEL, max_length=50)
    company = models.ForeignKey(Company, verbose_name=_("Company"), related_name='optouts', on_delete=models.CASCADE)
