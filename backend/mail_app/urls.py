from django.urls import path
from .views import MailCreateApiView, MailRecordListApiView

urlpatterns = [
    path('create/', MailCreateApiView.as_view()),
    path('list/', MailRecordListApiView.as_view()),
]
