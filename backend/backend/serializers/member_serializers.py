from backend.models.models import Membre
from rest_framework import serializers


class MembreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Membre
        fields = [
            "nom_complet",
            "role",
            "bio",
            "photo_profil",  # pour la photo de profil, peut être pertinent (?): https://stackoverflow.com/questions/35522768/django-serializer-imagefield-to-get-full-url
            "pays_origine",
            "ordre_affichage",
        ]
