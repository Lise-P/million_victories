Application Liste des Séries avec Next.js

Il s'agit d'un projet Next.js qui affiche une liste de séries TV avec une barre de recherche et un bouton permettant de trouver une série aléatoire. Les utilisateurs peuvent facilement filtrer la liste des séries et voir leurs informations. L'application comprend également un bouton permettant de charger une série au hasard, ce qui la rend plus interactive.
Fonctionnalités

    Liste des Séries : Affiche une liste de séries TV récupérées depuis le backend.
    Barre de Recherche : Permet aux utilisateurs de filtrer la liste en fonction du nom de la série.
    Bouton Série Aléatoire : Charge et affiche une série aléatoire au clic.
    Affichage des Images : Affiche les images des séries dans la liste (pour une future mise à jour, voir "v2").

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Installation

Cloner ce dépôt et installer les dépendances :

git clone <url-du-repository>
cd <dossier-du-projet>
npm install   # ou yarn install, ou pnpm install

Variables d'environnement

Dans le fichier .env.sample, vous trouverez des exemples de variables à définir dans votre propre fichier .env. 

Par exemple :

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=movies_db
API_URL=http://localhost:5000/api/shows

Frontend (Next.js)

    Next.js 
    React : La bibliothèque JavaScript pour la construction de l'interface utilisateur.
    TypeScript : Superset de JavaScript qui ajoute une vérification des types statiques.
    Tailwind CSS : Framework CSS utilitaire pour faciliter la gestion de la mise en page et du design.

Backend (Node.js)

    Node.js : Utilisé pour créer un serveur backend qui sert de point d'API pour l'application. Il se charge de la gestion des requêtes et des données (ici, la récupération des séries à partir d'une base de données MySQL).
    Express : Utilisé pour le serveur Node.js
    MySQL : Base de données relationnelle utilisée pour stocker les séries.
    dotenv : Pour gérer les variables d'environnement telles que les informations de connexion à la base de données.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

    
