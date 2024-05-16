from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from review.models import Review
from review.serializers import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    # permission_classes = [IsAuthenticated,]
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
