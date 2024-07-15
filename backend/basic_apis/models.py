from django.db import models


class WishObject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)
    owned = models.BooleanField(default=False)
    
    class Meta:
        abstract = True

    def __str__(self):
        return self.title

# Create your models here.
class Book(WishObject):
    author = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.title} by {self.author}"


class VideoGame(WishObject):
    platform = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.title} on {self.platform}"