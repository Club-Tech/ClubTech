# Club tech - Site web officiel

Projet de site web du club Tech.

Suivre les guides suivants:
- [Guide de contribution](CONTRIBUTING.md)
- [Guide de déploiement](DEPLOYMENT.md)

Documentation supplémentaire:
- [Architecture du projet](docs/Architecture.md)
- [Endpoints du backend](docs/API.md)
- [Ressources supplémentaires](docs/Ressources.md)

## Tech Stack
Liste des technologies utilisée, risque d'être modifiée:
- Backend & API: `Django` 5.x (`Python`), `DjangoRestFramework` (avec `drf-spectacular`)
- Base de données: ...
- Frontend: `React` (Styling avec `TailwindCSS`, `shadcn`)
- Frontend testing: `Vitest` + React Testing Library
- Backend testing: Django's `TestCase`/DRF's `APITestCase`
- Outils CI/CD: Github Actions
- Containerisation: `Docker`
- Reverse proxy + web server: `Nginx`

## Pages principales:

| Catégorie              | Fonctionnalité                         | Description                                                  |
|------------------------|----------------------------------------|--------------------------------------------------------------|
| Accueil                | Page de présentation du club           | Mission, vision, valeurs, chiffres clés                      |
| Équipe                 | Présentation des membres               | Profils, photos, rôles, pays d’origine                       |
| Événements             | Liste et détails des événements        | Agenda, inscriptions, affiches, comptes rendus               |
| Blog Tech              | Articles techniques                    | Publications par les membres sur divers sujets informatiques |
| Projets / Réalisations | Mise en avant des projets réalisés     | Détails techniques, captures d'écran, membres participants   |
| Partenariats           | Présentation des partenaires officiels | Logos, descriptions, liens                                   |
| Contact / Adhésion     | Formulaire de contact et d'adhésion    | Pour rejoindre le club ou devenir partenaire                 |


## Contraintes et exigences techniques
| Type          | Détails                                                                |
|---------------|------------------------------------------------------------------------|
| Technologie   | Site web responsive, framework moderne recommandé                      |
| Hébergement   | Hébergement cloud                                                      |
| Maintenance   | Facilement modifiable par les membres du club (interface admin ou CMS) |
| Langues       | Français (prioritaire) – possibilité d’ajouter l’anglais à moyen terme |
| Accessibilité | Respect des bonnes pratiques UX/UI et accessibilité web                |

## Contenu initial à fournir
- Logo officiel du club
- Photos des membres de l’équipe exécutive
- Textes de présentation (mission, vision, valeurs)
- Liste des événements prévus
- Répertoire des projets étudiants récents