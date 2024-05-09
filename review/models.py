from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from video.models import Video


class Review(models.Model):
    video = models.ForeignKey(Video, on_delete=models.PROTECT, related_name='reviews')
    stars = models.IntegerField(validators=[
        MinValueValidator(0, 'Avaliação não pode ser inferior a 0'),
        MaxValueValidator(5, 'Avaliação não pode ser maior que 5')])
    comment = models.TextField(null=True, blank=True)
