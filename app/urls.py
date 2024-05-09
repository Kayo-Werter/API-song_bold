from django.contrib import admin
from django.urls import path, include
from category.router import category_router
from video.router import video_router
from review.router import review_route

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(video_router.urls)),
    path('api/v1/', include(category_router.urls)),
    path('api/v1/', include(review_route.urls)),
]
