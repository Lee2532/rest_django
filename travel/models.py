from django.db import models

class Travel(models.Model):
    tourist_dest = models.TextField()
    stree_name_address = models.TextField()
    location_name_address = models.TextField()
    latitude = models.DecimalField(max_digits=10, decimal_places=5)
    longitude = models.DecimalField(max_digits=10, decimal_places=5)
    designated_date = models.TextField()
    intro = models.TextField()
    loc = models.TextField()

class Meta:
        ordering = ['designated_date']