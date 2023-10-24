from django.contrib.auth.decorators import login_required
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from .models import *
from .serializers import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.exceptions import NotFound, ValidationError
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
# from .urls import *

class UnregisteredScanURLView(APIView):
    def post(self, request, format=None):
        url = request.data.get('url')

        # Implement AI model logic to scan the URL and get the status
        # Replace the following line with your actual AI model integration
        # status = your_ai_model_scan(url)

        # data = {'url': url, 'status': status}
        serializer = UnregisteredScanSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    # def get(self, request, format=None):
    #     scan = UnregisteredScan.objects.all()
    #     serializer = UnregisteredScanSerializer(scan, many=True)
    #     return Response(serializer.data)
    
class UnregisteredScanCreate(generics.CreateAPIView):
    queryset = UnregisteredScan.objects.all()
    serializer_class = UnregisteredScanSerializer
    # return Response(serializer.data)
    # url = request.data.get('url')

        # Implement AI model logic to scan the URL and get the status
        # Replace the following line with your actual AI model integration
        # status = your_ai_model_scan(url)

        # data = {'url': url, 'status': status}
    # serializer = UnregisteredScanSerializer(data=request.data)
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UnregisteredScanList(generics.ListAPIView):
    queryset = UnregisteredScan.objects.all()
    serializer_class = UnregisteredScanSerializer
    # return Response(serializer.data)
    
class UnregisteredScanUrlList(generics.RetrieveUpdateDestroyAPIView):
    queryset = UnregisteredScan.objects.all()
    serializer_class = UnregisteredScanSerializer
    # return Response(serializer.data)
    
    def get_object(self):
        try:
            return UnregisteredScan.objects.get(pk=self.kwargs['pk'])
        except UnregisteredScan.DoesNotExist:
            raise NotFound("not found")
    
class LinkVerificationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        user = request.user  # Use the user instance from the request
        link_url = request.data.get('link_url')

        # Create a new LinkVerification instance (no AI model logic here)
        link_verification = LinkVerification(user=user, link_url=link_url, link_status='Pending')
        link_verification.save()

        serializer = LinkVerificationSerializer(link_verification)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get(self, request, format=None):
        user = request.user  # Use the user instance from the request

        # Retrieve and return the details of the scanned links for the authenticated user
        link_verifications = LinkVerification.objects.filter(user=user)
        serializer = LinkVerificationSerializer(link_verifications, many=True)
        return Response(serializer.data)
    
class SafeTipsView(APIView):
    def get(self, request, format=None):
        safe_tips = SafetyTips.objects.all()
        serializer = SafetyTipsSerializer(safe_tips, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = SafetyTipsSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, format=None):
        safe_tips = SafetyTips.objects.get(pk=request.data.get('id'))
        serializer = SafetyTipsSerializer(safe_tips, data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, format=None):
        safe_tips = SafetyTips.objects.get(pk=request.data.get('id'))
        safe_tips.delete()
        return Response(safe_tips.data, status=status.HTTP_204_NO_CONTENT)
    
class DomainReputationView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure that the user is authenticated

    def get(self, request, format=None):
        user = request.user  # Use the user instance from the request
        domain_reputation = DomainReputation.objects.filter(user=user)
        serializer = DomainReputationSerializer(domain_reputation, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        user = request.user  # Use the user instance from the request
        serializer = DomainReputationSerializer(data=request.data)

        if serializer.is_valid():
            domain_reputation = serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)