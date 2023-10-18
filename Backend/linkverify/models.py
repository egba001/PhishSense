from django.db import models

# User model for both registered and unregistered users
class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    registration_date = models.DateTimeField(auto_now_add=True)

# Model for unregistered scans
class UnregisteredScan(models.Model):
    link_url = models.URLField()
    scan_date = models.DateTimeField(auto_now_add=True)
    result = models.CharField(max_length=20)
    explanation = models.TextField()
    recommendation = models.TextField()
    scan_source = models.CharField(max_length=50)

# Model for link verifications, linked to a user
class LinkVerification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    link_url = models.URLField()
    scan_date = models.DateTimeField(auto_now_add=True)
    result = models.CharField(max_length=20)
    explanation = models.TextField()
    recommendation = models.TextField()
    scan_source = models.CharField(max_length=50)

# Model for phishing and scam reports, linked to a user
class PhishingScamReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    link_url = models.URLField()
    report_date = models.DateTimeField(auto_now_add=True)
    report_type = models.CharField(max_length=20)
    report_description = models.TextField()

# Model for educational resources
class EducationalResource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    content_url = models.URLField()
    resource_type = models.CharField(max_length=20)

# Model for user actions
class UserAction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    action_type = models.CharField(max_length=50)
    action_date = models.DateTimeField(auto_now_add=True)
    link_url = models.URLField()

