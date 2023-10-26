from rest_framework import serializers
from .models import User, UnregisteredScan, LinkVerification, SafetyTips, DomainReputation, FlaggedLinks, TrustworthyWebsite, ReportedLinks

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UnregisteredScanSerializer(serializers.ModelSerializer):
    url_status = serializers.CharField(default="", read_only=True)
    class Meta:
        model = UnregisteredScan
        fields = ('url', 'url_status')

class LinkVerificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkVerification
        fields = '__all__'

class SafetyTipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SafetyTips
        fields = '__all__'

class DomainReputationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DomainReputation
        fields = '__all__'

class FlaggedLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlaggedLinks
        fields = '__all__'

class TrustworthyWebsiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrustworthyWebsite
        fields = '__all__'

class ReportedLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportedLinks
        fields = '__all__'
