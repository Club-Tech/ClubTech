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
| Method | Endpoint           | Description                                    | Corps de la requête (Request Body) | Corps de réponse (Response body)                                                                         |
|--------|--------------------|------------------------------------------------|------------------------------------|----------------------------------------------------------------------------------------------------------|
| GET    | `/api/membres/:id` | Détails d'un membre spécifique                 | N/A                                | `{id, nom_complet, role, bio, photo, pays}`                                                              |
| GET    | `/api/membres`     | liste des membres                              | N/A                                | `[{id, nom_complet, role, bio, photo, pays, ordre_affichage}]`                                           |
| POST   | `/api/membres`     | Création d'un membre                           | ...                                | ...                                                                                                      |
| PUT    | `/api/membres/:id` | Modification d'un membre                       | ...                                | ...                                                                                                      |
| PATCH  | `/api/membres/:id` | Modification partielle d'un membre             | ...                                | ...                                                                                                      |
| DELETE | `/api/membres/:id` | Suppréssion d'un membre                        | N/A                                | N/A                                                                                                      |
| GET    | `/evenements/:id`  | détails d'un évènement spécifique              | -                                  | `{id, titre, description_courte, description_complete, date_debut, date_fin, affiche, lien_inscription}` |
| GET    | `/evenements`      | liste d'évènements                             | -                                  | `[{id, titre, description_courte, date_debut, date_fin, affiche}]`                                       |
| GET    | `/articles/:id`    | détails d'un article spécifique                | -                                  | `{id, titre, slug, contenu, auteur, date_publication, est_publie, image, categorie}`                     |
| GET    | `/articles`        | liste d'articles                               | -                                  | `[{id, titre, slug, auteur, date_publication, est_publie, image, categorie}]`                            |
| GET    | `/projets/:id`     | détails d'un projet/une réalisation spécifique | -                                  | ...                                                                                                      |
| GET    | `/projets`         | liste des projets/réalisation                  | -                                  | ...                                                                                                      |
| GET    | `/rapports/:id`    | Détails pour un seule rapport                  | -                                  | ...                                                                                                      |
| GET    | `/partenaires`     | Liste des partenaires                          | -                                  | ...                                                                                                      |
| ...    | ...                | ...                                            | -                                  | ...                                                                                                      |

### Membres
Liste ou obtient des membres
**Lister tous les membres**
```http
GET /membres

Response 200 OK

[
  {
    "nom_complet": "string",
    "role": "string",
    "bio": "string",
    "photo_profil": "string",
    "pays_origine": "string",
    "ordre_affichage": 2147483647
  }
]
```

**Lister un seul membre**
```http
GET /membres/:id

Response 200 OK

{
  "nom_complet": "string",
  "role": "string",
  "bio": "string",
  "photo_profil": "string",
  "pays_origine": "string",
  "ordre_affichage": 2147483647
}
```
### Evenement
...

### Articles
...

### Projets
...