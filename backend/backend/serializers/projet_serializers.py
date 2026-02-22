"""
Serializers pour le modèle des projets
"""

from rest_framework import serializers
from backend.models.models import Projet


class ProjetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projet
        fields = [
            "nom",
            "description_courte",
            "description_complete",
            "image",  # pour l'image, peut être pertinent (?): https://stackoverflow.com/questions/35522768/django-serializer-imagefield-to-get-full-url
            "lien_demo",
        ]
