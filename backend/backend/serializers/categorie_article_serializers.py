"""
Serializers pour le modèle des CategorieArticle
"""

from rest_framework import serializers
from backend.models.models import CategorieArticle


class CategorieArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = CategorieArticle
        fields = ["nom", "slug"]
