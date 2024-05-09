from rest_framework import viewsets
from category.models import Category
from category.serializers import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# class CategoryCreateListView(generics.ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer


# class CategoryRetrieverUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    # queryset = Category.objects.all()
    # serializer_class = CategorySerializer
