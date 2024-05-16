from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import User

# personalizar o campo vídeos vistos no admin
fields = list(UserAdmin.fieldsets)
fields.append(("viwed", {'fields': ('videos_viewed',)}))

UserAdmin.fieldsets = tuple(fields)

admin.site.register(User, UserAdmin)
