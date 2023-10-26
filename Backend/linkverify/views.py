# import re 
# from django.contrib.auth.decorators import login_required
# from rest_framework.views import APIView
# from rest_framework.response import Response
# # from rest_framework import status
# from rest_framework import status, generics
# from .models import *
# from .serializers import *
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login, logout
# from rest_framework.exceptions import NotFound, ValidationError
# from rest_framework.authentication import SessionAuthentication
# from rest_framework.permissions import IsAuthenticated, AllowAny
# from django.contrib.auth import get_user_model
# import joblib  # Import the joblib library for loading the AI model
# import os
# from django.http import JsonResponse
# import nltk
# import logging
# from sklearn.pipeline import Pipeline
# from .forms import UnregisteredScanForm
# import numpy as np
# from sklearn.feature_extraction.text import TfidfVectorizer

# # Add this line at the beginning of your views.py file



# # BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))
# nltk.download('punkt')


# logger = logging.getLogger(__name__)
# # Load your AI model
# current_directory = os.path.dirname(os.path.abspath(__file__))
# model_file_path = os.path.join(current_directory, 'ml_model/phishing_url_model.joblib')
# tfidf_vectorizer_path = os.path.join(current_directory, 'ml_model/tfidf_vectorizer.joblib')


# # tfidf_vectorizer = joblib.load(tfidf_vectorizer_path) 
# # model = joblib.load(model_file_path) 

# class UnregisteredScanCreate(generics.CreateAPIView):
#     serializer_class = UnregisteredScanSerializer

#     def tokenizer(self, url):
#         # Your tokenizer code here
#         """Separates feature words from the raw data
#         Keyword arguments:
#         url ---- The full URL

#         :Returns -- The tokenized words; returned as a list
#         """

#         tokens = re.split('[/-]', url)

#         for i in tokens:
#             if i.find(".") >= 0:
#                 dot_split = i.split('.')
#                 if "com" in dot_split:
#                     dot_split.remove("com")
#                 if "www" in dot_split:
#                     dot_split.remove("www")
#                 tokens += dot_split

#         return tokens

#     def create(self, request, *args, **kwargs):
#         try:
#             # Load the trained TF-IDF vectorizer
#             tfidf_vectorizer = joblib.load(tfidf_vectorizer_path)

#             # Load the trained model
#             model = joblib.load(model_file_path)

#             # Get the URL from the request data
#             url = request.data.get("url", "")

#             if not url:
#                 return Response({"error": "URL is required"}, status=status.HTTP_400_BAD_REQUEST)

#             # Transform the URL into a numeric format using the fitted vectorizer
#             url_features = tfidf_vectorizer.transform([url])

#             # Predict the class (bad or good)
#             prediction = model.predict(url_features)

#             if prediction[0] == 'bad':
#                 url_status = "This is a Phishing Site"
#             else:
#                 url_status = "This is not a Phishing Site"

#             response_data = {
#                 'url': url,
#                 'url_status': url_status
#             }

#             return Response(response_data, status=status.HTTP_200_OK)

#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# # The rest of your view code remains the same

    
# class UnregisteredScanList(generics.ListAPIView):
#     queryset = UnregisteredScan.objects.all()
#     serializer_class = UnregisteredScanSerializer
#     # return Response(serializer.data)
    
# class UnregisteredScanUrlList(generics.RetrieveUpdateDestroyAPIView):
#     queryset = UnregisteredScan.objects.all()
#     serializer_class = UnregisteredScanSerializer
#     # return Response(serializer.data)
    
#     def get_object(self):
#         try:
#             return UnregisteredScan.objects.get(pk=self.kwargs['pk'])
#         except UnregisteredScan.DoesNotExist:
#             raise NotFound("not found")
    
# class LinkVerificationView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, format=None):
#         user = request.user  # Use the user instance from the request
#         link_url = request.data.get('link_url')

#         # Create a new LinkVerification instance (no AI model logic here)
#         link_verification = LinkVerification(user=user, link_url=link_url, link_status='Pending')
#         link_verification.save()

#         serializer = LinkVerificationSerializer(link_verification)

#         return Response(serializer.data, status=status.HTTP_201_CREATED)

#     def get(self, request, format=None):
#         user = request.user  # Use the user instance from the request

#         # Retrieve and return the details of the scanned links for the authenticated user
#         link_verifications = LinkVerification.objects.filter(user=user)
#         serializer = LinkVerificationSerializer(link_verifications, many=True)
#         return Response(serializer.data)
    
# class SafeTipsView(APIView):
#     def get(self, request, format=None):
#         safe_tips = SafetyTips.objects.all()
#         serializer = SafetyTipsSerializer(safe_tips, many=True)
#         return Response(serializer.data)
    
#     def post(self, request, format=None):
#         serializer = SafetyTipsSerializer(data=request.data)
        
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     def put(self, request, format=None):
#         safe_tips = SafetyTips.objects.get(pk=request.data.get('id'))
#         serializer = SafetyTipsSerializer(safe_tips, data=request.data)
        
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     def delete(self, request, format=None):
#         safe_tips = SafetyTips.objects.get(pk=request.data.get('id'))
#         safe_tips.delete()
#         return Response(safe_tips.data, status=status.HTTP_204_NO_CONTENT)
    
# class DomainReputationView(APIView):
#     permission_classes = [IsAuthenticated]  # Ensure that the user is authenticated

#     def get(self, request, format=None):
#         user = request.user  # Use the user instance from the request
#         domain_reputation = DomainReputation.objects.filter(user=user)
#         serializer = DomainReputationSerializer(domain_reputation, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         user = request.user  # Use the user instance from the request
#         serializer = DomainReputationSerializer(data=request.data)

#         if serializer.is_valid():
#             domain_reputation = serializer.save(user=user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)