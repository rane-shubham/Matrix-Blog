from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('api/', views.BlogList.as_view()),
    path('api/<int:pk>/', views.BlogDetail.as_view()),
]
