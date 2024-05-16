from django.db.models import Count
from rest_framework import viewsets, response, status
from rest_framework.permissions import IsAuthenticated
from video.models import Video
from video.serializers import VideoSerializer, VideoDetailSerializer


class VideoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    queryset = Video.objects.all()

    def get_serializer_class(self):

        if self.request.method == 'GET':
            return VideoDetailSerializer
        return VideoSerializer


class VideoStatsViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated,]
    queryset = Video.objects.all()

    def list(self, request):
        total_videos = self.queryset.count()
        video_by_genre = self.queryset.values('category__name').annotate(count=Count('id'))

        data = {
            'total_videos': total_videos,
            'video_by_genre': video_by_genre
        }

        return response.Response(data=data, status=status.HTTP_200_OK)
