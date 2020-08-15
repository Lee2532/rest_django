from django.db import models

class Jobsearch(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    content = models.TextField()
    test = models.TextField()

    class Meta:
        ordering = ['created']