from django.db import models
from django.contrib.auth.models import AbstractUser
from video.models import Video


class User(AbstractUser):
    videos_viewed = models.ManyToManyField(Video)
