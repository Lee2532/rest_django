from rest_framework import serializers
from travel.models import Travel
from django.contrib.auth.models import User


class TravelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Travel
        fields = ['id', 'tourist_dest', 'stree_name_address', 'latitude',
                  'longitude', 'designated_date', 'loc']



class TraveldetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Travel
        fields = ['id', 'tourist_dest', 'stree_name_address', 'location_name_address', 'latitude',
                  'longitude', 'designated_date', 'intro', 'loc']