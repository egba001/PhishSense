from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(UnregisteredScan)
admin.site.register(LinkVerification)
admin.site.register(SafetyTips)
admin.site.register(DomainReputation)
admin.site.register(FlaggedLinks)
admin.site.register(TrustworthyWebsite)
admin.site.register(ReportedLinks)
