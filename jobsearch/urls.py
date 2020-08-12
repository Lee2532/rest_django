from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from jobsearch import views

# API endpoints
urlpatterns = format_suffix_patterns([
    path('', views.JobsearchList.as_view(), name='jobsearch-list'),
    path('test', views.hello_world, name='test'),
    # path('jobsearchs/<int:pk>/', views.J.as_view(), name='jobsearch-detail'),
    # path('jobsearchs/<int:pk>/highlight/', views.SnippetHighlight.as_view(), name='jobsearch-highlight'),
    # path('users_test/', views.UserList.as_view(), name='users_test-list'),
    # path('users_test/<int:pk>/', views.UserDetail.as_view(), name='users_test-detail')
])