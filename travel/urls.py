from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from travel import views

# API endpoints
urlpatterns = format_suffix_patterns([
    path('', views.TravelList.as_view(), name='Travel-list'),
    path('<int:pk>/', views.TravelDetail.as_view(), name='Travel-detail'),
    path('test/', views.TravelTestView.as_view(), name='Travel-detail'),
    path('test/<int:pk>/', views.TravelTestDetailVeiw.as_view(), name='Travel-detail'),
    path('page/', views.TravelTemplateView.as_view(), name="Travel-template")
])