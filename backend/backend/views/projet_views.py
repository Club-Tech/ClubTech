"""
Views pour le modèle des projets
"""

from rest_framework import viewsets
from backend.models.models import Projet
from backend.serializers.projet_serializers import ProjetSerializer


class ProjetViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing projects instances.
    """

    serializer_class = ProjetSerializer
    queryset = Projet.objects.all()
