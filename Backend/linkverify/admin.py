from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(UnregisteredScan)
admin.site.register(LinkVerification)
admin.site.register(PhishingScamReport)
admin.site.register(EducationalResource)
admin.site.register(UserAction)
