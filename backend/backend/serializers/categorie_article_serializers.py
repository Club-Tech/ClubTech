from backend.models.models import CategorieArticle
from rest_framework import serializers


class CategorieArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = CategorieArticle
        fields = ["nom", "slug"]
