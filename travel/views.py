from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from travel.models import Travel
from rest_framework import generics
from travel.serializers import TravelSerializer, TraveldetailSerializer
from django.views import generic
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView


class TravelTemplateView(TemplateView):
    template_name = 'travelTemplate.html'

    def get(self, request, *args, **kwargs):
        return self.render_to_response({})


class TravelList(ListCreateAPIView):
    queryset = Travel.objects.all()
    serializer_class = TravelSerializer


class TravelDetail(RetrieveAPIView):
    queryset = Travel.objects.all()
    serializer_class = TraveldetailSerializer


class TravelTestView(APIView):

    def get(self, request, format=None):
        queryset = Travel.objects.all()
        serializer = TravelSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TravelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_302_FOUND)


class TravelTestDetailView(APIView):

    def get_pk(self, pk):
        try:
            return Travel.objects.get(pk=pk)
        except Exception as e:
            print(e)
            raise (status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        queryset = self.get_pk(pk)
        serializer = TravelSerializer(queryset)
        return Response(serializer.data)
