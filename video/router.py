from rest_framework.routers import DefaultRouter
from video.viewsets import VideoViewSet, VideoStatsViewSet

video_router = DefaultRouter()
video_router.register('video', VideoViewSet)
video_router.register('stats', VideoStatsViewSet, basename='videostats')
