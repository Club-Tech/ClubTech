"""
Views pour le modèle des membres
"""

from rest_framework import viewsets
from backend.models.models import Membre
from backend.serializers.member_serializers import MembreSerializer


class MembreViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing member instances.
    """

    serializer_class = MembreSerializer
    queryset = Membre.objects.all()
