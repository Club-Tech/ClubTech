# API

Liste de quelques endpoints du projet (GET):
- `/membres/:id` -> détails d'un membre spécifique
- `/membres` -> liste des membres
- `/evenements/:id`-> détails d'un évènement spécifique
- `/evenements` -> liste d'évènements
- `/articles/:id`-> détails d'un article spécifique
- `/articles` -> liste d'articles
- `/projets/:id`-> détails d'un projet/une réalisation spécifique
- `/projets`-> liste des projets/réalisation
- ...


## Tableau
| Method | Endpoint          | Description                                    | Corps de la requête (Request Body) | Corps de réponse (Response body)                                                                         |
|--------|-------------------|------------------------------------------------|------------------------------------|----------------------------------------------------------------------------------------------------------|
| GET    | `/membres/:id`    | Détails d'un membre spécifique                 | -                                  | `{id, nom_complet, role, bio, photo, pays}`                                                              |
| GET    | `/membres`        | liste des membres                              | -                                  | `[{id, nom_complet, role, bio, photo, pays, ordre_affichage}]`                                           |
| GET    | `/evenements/:id` | détails d'un évènement spécifique              | -                                  | `{id, titre, description_courte, description_complete, date_debut, date_fin, affiche, lien_inscription}` |
| GET    | `/evenements`     | liste d'évènements                             | -                                  | `[{id, titre, description_courte, date_debut, date_fin, affiche}]`                                       |
| GET    | `/articles/:id`   | détails d'un article spécifique                | -                                  | `{id, titre, slug, contenu, auteur, date_publication, est_publie, image, categorie}`                     |
| GET    | `/articles`       | liste d'articles                               | -                                  | `[{id, titre, slug, auteur, date_publication, est_publie, image, categorie}]`                            |
| GET    | `/projets/:id`    | détails d'un projet/une réalisation spécifique | -                                  | ...                                                                                                      |
| GET    | `/projets`        | liste des projets/réalisation                  | -                                  | ...                                                                                                      |
| GET    | `/rapports/:id`   | Détails pour un seule rapport                  | -                                  | ...                                                                                                      |
| GET    | `/partenaires`    | Liste des partenaires                          | -                                  | ...                                                                                                      |
| ...    | ...               | ...                                            | -                                  | ...                                                                                                      |


### Membres
Liste ou obtient des membres
**Lister tous les membres**
```http
GET /membres

Response 200 OK

...
```

### Evenement
...

### Articles
...

### Projets
...