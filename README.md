<h1 align="center">  <b>Club tech</b> - Site web officiel
<br>
<img width="44" height="44" alt="club-tech-logo" style="border-radius: 50%;" src="/frontend/public/clubtech_logo.jpg" />
</h1>

Le Club Tech est une association étudiante regroupant des passionnés d’informatique provenant de plusieurs pays différents. Le club vise à promouvoir la collaboration internationale, l’innovation technologique et le partage de connaissances au sein de la communauté universitaire.


Actuellement, le club ne dispose pas d’un espace numérique centralisé pour communiquer, valoriser ses membres et partager ses activités. Le projet consiste donc à concevoir et développer le site officiel du Club Tech, vitrine du club et plateforme de communication interne et externe

Suivre les guides suivants:
- [Guide de contribution](CONTRIBUTING.md)
- [Guide de déploiement](DEPLOYMENT.md)

Documentation supplémentaire:
- [Architecture du projet](docs/ARCHITECTURE.md)
- [Endpoints du backend](docs/API.md)
- [Ressources supplémentaires](docs/RESSOURCES.md)

## Table des matières
- [Tech Stack](#tech-stack)
- [Exécuter le projet](#exécuter-avec-docker)
    - [Exécuter avec Docker](#exécuter-avec-docker)
    - [Créer un super-utilisateur (superuser)](#créer-un-super-utilisateur-superuser)
- [Pages principales](#pages-principales)
- [Contraintes et exigences techniques](#contraintes-et-exigences-techniques)
- [Contenu initial à fournir](#contenu-initial-à-fournir)
- [Livrables attendus](#livrables-attendus)
- [Vision long terme](#vision-long-terme)
- [L'équipe](#léquipe)
    - [Membres de l'équipe de développement](#membres-de-léquipe-de-développement)


## Tech Stack
Liste des technologies utilisée, risque d'être modifiée:
- Backend & API: `Django` 5.2 (`Python`), `DjangoRestFramework` (avec `drf-spectacular`)
- Base de données: `PostgreSQL`
- Frontend: `React` (Styling avec `TailwindCSS`, `shadcn`)
- Frontend testing: `Vitest` + React Testing Library
- Backend testing: Django's `TestCase`/DRF's `APITestCase`
- Outils CI/CD: Github Actions
- Containerisation: `Docker`
- Reverse proxy + web server: `Nginx`

## Exécuter le projet
```sh
git clone https://github.com/Club-Tech/ClubTech.git
```
```sh
cd ClubTech
```

### Exécuter avec Docker
```sh
docker compose up -d
```

L'interface (Swagger UI) du `backend` est accessible sur http://localhost:8000/
![backend-interface](/docs/img/backend_interface.png)


L'application principale, `frontend`, est accessible sur http://localhost:5173/
![frontend-interface](/docs/img/frontend_interface.png)

### Créer un super-utilisateur (superuser)
```sh
docker compose exec -it backend bash
```
```sh
python manage.py createsuperuser
```

En accédant sur http://localhost:8000/api/admin, on peut se connecter sur le dashboard d'administrateur
![backend-admin-login](/docs/img/backend_login_interface_admin.png)
![backend-admin-interface](/docs/img/backend_interface_admin.png)


## Pages principales:

| Catégorie              | Fonctionnalité                         | Description                                                  | URL                     |
|------------------------|----------------------------------------|--------------------------------------------------------------|-------------------------|
| Accueil                | Page de présentation du club           | Mission, vision, valeurs, chiffres clés                      | `/`                     |
| Équipe                 | Présentation des membres               | Profils, photos, rôles, pays d’origine                       | `/equipe`               |
| Événements             | Liste et détails des événements        | Agenda, inscriptions, affiches, comptes rendus               | `/evenement`            |
| Blog Tech              | Articles techniques                    | Publications par les membres sur divers sujets informatiques | `/blog-tech`            |
| Projets / Réalisations | Mise en avant des projets réalisés     | Détails techniques, captures d'écran, membres participants   | `/projets`              |
| Partenariats           | Présentation des partenaires officiels | Logos, descriptions, liens                                   | `/partenaires`          |
| Contact / Adhésion     | Formulaire de contact et d'adhésion    | Pour rejoindre le club ou devenir partenaire                 | `/contact`, `/adhesion` |


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

## Livrables attendus
1. Maquette visuelle (wireframes + design final)
2. Prototype fonctionnel du site (version bêta)
3. Version finale hébergée et accessible en ligne.
4. Guide de mise à jour et maintenance pour les futurs membres.
5. `README.md` (travail d’équipe et coordination)

## Vision long terme
Le site du Club Tech doit devenir une plateforme vivante et collaborative, au service de la communauté étudiante et des partenaires.

À terme, il pourrait évoluer vers un espace membre connecté, intégrant :
- Des profils personnels
- Une messagerie interne
- Un tableau de bord d’activités
- Une galerie de projets open source

## L'équipe
- **Product Owner (PO)**: [Abdoulaye Soumah](https://github.com/Soumah1)
- **Scrum Master (SM)**: [Mariama Diané]()
### Membres de l'équipe de développement
- [Sosane Mahamoud Houssein](https://github.com/SOSANE)
- [Vincent Godbout](https://github.com/gyoo18)
- [Ramatoulaye Bah](https://github.com/RAMAbah224)
- [Ciré]()
---

- **Test**: [Alpha Diallo]()
- **Design**: [Aissatoubilly Diallo](), [Kader Bangoura]()
- **Documentation**: [Amadou Diarouga Soumah](), [Kader Bangoura]()