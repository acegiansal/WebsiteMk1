from rest_framework import serializers
from .models import Book, VideoGame, WishObject

class WishObjectSerializer(serializers.Serializer):
    class Meta:
        model = WishObject
        fields = ['title', 'description', 'date_added', 'owned']

class BookSerializer(WishObjectSerializer, serializers.HyperlinkedModelSerializer):
    author = serializers.SerializerMethodField()

    def get_author(self, obj):
        return f"{obj.author}"

    class Meta:
        model = Book
        fields = WishObjectSerializer.Meta.fields + ['author']

class VideoGameSerializer(WishObjectSerializer, serializers.HyperlinkedModelSerializer):
    platform = serializers.SerializerMethodField()

    def get_author(self, obj):
        return f"{obj.platform}"

    class Meta:
        model = VideoGame
        fields = WishObjectSerializer.Meta.fields + ['platform']