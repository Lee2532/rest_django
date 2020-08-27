from rest_framework.response import Response
from rest_framework.decorators import api_view
from jobsearch.models import Jobsearch
from rest_framework import generics
from jobsearch.serializers import JobsearchSerializer, JobsearchdetailSerializer
from django.views import generic
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.renderers import TemplateHTMLRenderer

class JobsearchList(generics.ListCreateAPIView):
    queryset = Jobsearch.objects.all()
    serializer_class = JobsearchSerializer


class JobsearchDetail(generics.RetrieveAPIView):
    queryset = Jobsearch.objects.all()
    serializer_class = JobsearchdetailSerializer


@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})


class TemplateTest(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'test.html'
    def get(self, request):
        queryset = Jobsearch.objects.all()
        return Response({'Jobsearch': queryset})
