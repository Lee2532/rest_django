from rest_framework.response import Response

from jobsearch.models import Jobsearch
from rest_framework import generics
from jobsearch.serializers import JobsearchSerializer

class JobsearchList(generics.ListCreateAPIView):
    queryset = Jobsearch.objects.all()
    serializer_class = JobsearchSerializer



from rest_framework.decorators import api_view

@api_view()
def hello_world(request):
    return Response({"message": "Hello, world!"})