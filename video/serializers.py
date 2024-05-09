from rest_framework import serializers
from video.models import Video
from category.serializers import CategorySerializer


class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = '__all__'


class VideoDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    
    class Meta:
        model = Video
        fields = ['id', 'url', 'title', 'category', 'like', 'release_date', 'description']
