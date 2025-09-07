# HH456 Movie Site Structure

Structure de base d'un site inspiré d'ecranlarge.com avec une page par film, une page par acteur et des pages de news.

## Installation

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Définir la clé TMDB dans une variable d'environnement `TMDB_API_KEY`.
3. Démarrer le serveur :
   ```bash
   npm start
   ```

## Routes
- `/films/:id` affiche les informations d'un film depuis TMDB.
- `/actors/:id` affiche les informations d'un acteur depuis TMDB.
- `/news` liste les news locales et `/news/:id` affiche une news.
