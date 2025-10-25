# Diagramme de base de données proposée

Le schéma de la base de donnée n'est pas encore déterminée, mais pour implémenter la fonction CMS/interface admin pour maintenance rapide, il est nécessaire d'avoir quelques modèles.

`Django` fournit déjà un modèle `User` que l'on peux customiser si nécessaire dans le futur.

## Spécification des tables
### modèles principaux
- Table `Article` (pour la page du Blog Tech)
    - `titre` - `CharField` pour le titre d'un article
    - `slug` - `SlugField` pour l'url (identifiant)
    - `contenu` - `TextField`, représente le corps de l'article
    - `auteur` - `ForeignKey` vers `User` (`django`), représente l'auteur
    - `date_publication` - `DateTimeField`, représente date et heure de publication
    - `est_publie` - `BooleanField`, représente le statut de l'article (soit un brouillon ou publié) *
    - `image` - `ImageField`, représente l'image/miniature de l'article *
    - `categorie` - `ForeignKey` vers `CategorieArticle`

- Table `Membre` (pour la page de l'équipe)
    - `nom_complet` - `CharField`, représente nom et prénom du membre
    - `role` - `CharField`, représente rôle dans le club
    - `bio` - `TextField`, représente une description du membre
    - `photo_profil` - `ImageField` représente photo de la personne
    - `pays_origine` - `CharField`, représente le pays d'origine du membre
    - `ordre_affichage` - `PositiveIntegerField`, représente l'ordre d'affichage *

- Table `Evenement` (pour la page des évènements)
    - `titre` - `CharField`, pour le titre d'un évènement
    - `description_courte` - `CharField`, représente un résumé affiché en liste.
    - `description_complete` - `TextField`, représente les détails de l'événement.
    - `date_debut` - `DateTimeField` représente la date de début
    - `date_fin` - `DateTimeField` représente la date de fin
    - `image` - `ImageField`, représente l'image de l'évènement
    - `lien_inscription` - `URLField`, représente le lien du formulaire pour l'inscription *

- Table `CompteRendu` (pour les rapports post-évènements, lié à un `Evenement` spécifique)
    - `evenement` - `ForeignKey` vers `Evenement`, représente l'évènement concerné
    - `titre` - `CharField`, représente le titre du compte-rendu
    - `contenu` - `TextField`, représente le corps du compte-rendu *
    - `fichier_pdf` - `FileField` représente le fichier du rapport complet
    - `date_creation` - `DateTimeField` représente la date de rédaction

- Table `Projet` (pour la page des projets/réalisations)
    - `nom` - `CharField`, représente le nom du projet en question
    - `description_courte` - `CharField`, représente un petit résumé
    - `description_detaillee` - `TextField`, représente un texte qui décrit les défis, solutions et résultats
    - `image` - `ImageField` représente l'image du projet
    - `lien_demo` - `URLField` représente le lien du projet/démo associé/dépôt github (peut être `null`) *
 

- Table `Partenariat` (pour la page des partenariats)
    - `nom` - `CharField`, représente le nom du partenaire (association/compagnie)
    - `logo` - `URLField` (ou `ImageField`), représente le logo/image du partenaire
    - `description` - `CharField`, représente une petite description du partenaire
    - `site` - `ForeignKey` vers `ParametreSite`, représente les liens du partenaire

### ...
- Table `CategorieArticle` (pour les articles)
    - `nom` - `CharField`, représente le nom de la catégorie
    - `slug` - `SlugField`, pour l'url (identifiant)

- Table `ParametreSite` (pour certaines données statiques et modifiable, ex. lien de site/réseaux sociaux)
    - `cle` - `CharField`, représente le nom de la donnée (`facebook`)
    - `valeur` - `URLField`, pour l'url de cette clé

- Table `Tag` ?
    - peut être un `ForeignKey` pour `Projet` (avec `nom` ex. `Python`, `Git`, etc. et `slug`)

## Diagramme mermaid
...