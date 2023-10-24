from django.db import models
from user_api.models import AppUser

# User model for both registered and unregistered users
class User(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)
    registration_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.user.username

# Model for unregistered scans
class UnregisteredScan(models.Model):
    link_url = models.URLField()
    status = models.CharField(max_length=50)
    
    def __str__(self):
        return self.link_url

# Model for link verifications, linked to a user
class LinkVerification(models.Model):
    LINK_STATUS = (("Secure", "Secure"),
                   ("Suspicious", "Suspicious"))
    
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    status = models.CharField(max_length=50)
    link_url = models.URLField()
    link_status = models.CharField(max_length=50, choices=LINK_STATUS)
    scan_date = models.DateTimeField(auto_now_add=True)
    summary = models.TextField()
    reasons_for_verification = models.TextField()
    recommended_actions = models.TextField()
    additional_info = models.TextField()
    
    def __str__(self):
        return self.link_url

# Model for Safety Tips
class SafetyTips(models.Model):
    safety_tips = models.CharField(max_length=255)
    
    def __str__(self):
        return self.safety_tips

# Model for Domain Reputation, linked to a user
class DomainReputation(models.Model):
    DOMAIN_STATUS = (("Secure", "Secure"),
                   ("Suspicious", "Suspicious"))
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE) 
    link_url = models.URLField()
    domain_status = models.CharField(max_length=50, choices=DOMAIN_STATUS)
    
    def __str__(self):
        return self.link_url

# Model for Flagged Links
class FlaggedLinks(models.Model):
    content_url = models.URLField()
    
    def __str__(self):
        return self.content_url

# Model for Trustworthy Websites
class TrustworthyWebsite(models.Model):
    TRUSTWORTHY_WEBSITE_STATUS = (("Secure", "Secure"),
                   ("Suspicious", "Suspicious"))
    trustworthy_website_url = models.URLField()
    trustworthy_website_status = models.CharField(max_length=50, choices=TRUSTWORTHY_WEBSITE_STATUS)
    
    def __str__(self):
        return self.trustworthy_website_url

# Model for Reported Links
class ReportedLinks(models.Model):
    reported_url = models.URLField()
    
    def __str__(self):
        return self.reported_url
