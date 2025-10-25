from django.contrib import admin
from backend.models import models

# Register your models here.
admin.site.register(models.Article)
admin.site.register(models.Membre)
admin.site.register(models.Evenement)
admin.site.register(models.CompteRendu)
admin.site.register(models.Projet)
admin.site.register(models.Partenariat)
admin.site.register(models.CategorieArticle)
admin.site.register(models.ParametreSite)
