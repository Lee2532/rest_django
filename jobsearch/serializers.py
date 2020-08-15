from rest_framework import serializers
from jobsearch.models import Jobsearch
from django.contrib.auth.models import User


class JobsearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jobsearch
        fields = ['id', 'title', 'code', 'content']



class JobsearchdetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Jobsearch
        fields = ['id', 'created', 'title', 'code', 'content', 'test']