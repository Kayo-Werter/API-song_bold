from django.contrib import admin
from django.urls import path, include
from category.router import category_router
from video.router import video_router
from review.router import review_route
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/', include(video_router.urls)),
    path('api/v1/', include(category_router.urls)),
    path('api/v1/', include(review_route.urls)),
]
