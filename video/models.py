from django.db import models
from category.models import Category
from datetime import date


class Video(models.Model):
    url = models.URLField()
    title = models.CharField(max_length=500)
    like = models.BooleanField(default=None)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='video')
    release_date = models.DateField(default=date.today, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
