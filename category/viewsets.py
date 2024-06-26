from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from category.models import Category
from category.serializers import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated,]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
