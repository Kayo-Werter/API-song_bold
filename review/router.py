from rest_framework.routers import DefaultRouter
from review.viewsets import ReviewViewSet


review_route = DefaultRouter()
review_route.register('review', ReviewViewSet)
