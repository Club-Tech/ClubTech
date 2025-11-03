from django.db import models
from django.contrib.auth.models import User
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index


# Create your models here.
class Article(models.Model):
    titre = models.CharField(max_length=30)
    slug = models.SlugField()
    contenu = models.TextField()
    auteur = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    date_publication = models.DateTimeField()
    est_publie = models.BooleanField()
    image = models.ImageField(blank=True, null=True)
    categorie = models.ForeignKey("CategorieArticle", on_delete=models.CASCADE)


class Membre(models.Model):
    nom_complet = models.CharField(max_length=40, blank=False, null=False)
    role = models.CharField(max_length=30, blank=False, null=False)
    bio = models.TextField(blank=True, null=True)
    photo_profil = models.ImageField(blank=True, null=True)
    pays_origine = models.CharField()
    ordre_affichage = models.PositiveIntegerField()


class Evenement(models.Model):
    titre = models.CharField(max_length=30)
    description_courte = models.CharField(max_length=50)
    description_complete = models.TextField()
    date_debut = models.DateTimeField()
    date_fin = models.DateTimeField()
    image = models.ImageField(blank=True, null=True)
    lien_inscription = models.URLField(blank=True, null=True)


class CompteRendu(models.Model):
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE)
    titre = models.CharField(max_length=30)
    contenu = models.TextField()
    fichier_pdf = models.FileField(blank=True, null=True)
    date_creation = models.DateTimeField()


class Projet(models.Model):
    nom = models.CharField(max_length=30)
    description_courte = models.CharField(max_length=50)
    description_complete = models.TextField()
    image = models.ImageField(blank=True, null=True)
    lien_demo = models.URLField(blank=True, null=True)


class Partenariat(models.Model):
    nom = models.CharField(max_length=30)
    logo = models.URLField()
    description = models.CharField()
    site = models.ForeignKey("ParametreSite", on_delete=models.CASCADE)


class CategorieArticle(models.Model):
    nom = models.CharField(max_length=30, blank=False, null=False)
    slug = models.SlugField(blank=True, null=True)


class ParametreSite(models.Model):
    cle = models.CharField(max_length=30, blank=False, null=False)
    valeur = models.URLField(blank=True, null=True)
