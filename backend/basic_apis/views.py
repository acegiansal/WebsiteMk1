from django.shortcuts import render
from rest_framework import viewsets
from .models import VideoGame, Book
from .serializers import BookSerializer, VideoGameSerializer

# Create your views here.
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all().order_by('date_added')
    serializer_class = BookSerializer

class VideoGameViewSet(viewsets.ModelViewSet):
    queryset = VideoGame.objects.all().order_by('date_added')
    serializer_class = VideoGameSerializer
