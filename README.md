## Application Liste des Séries avec Next.js

Il s'agit d'un projet Next.js qui affiche une liste de séries TV avec une barre de recherche et un bouton permettant de trouver une série aléatoire. Les utilisateurs peuvent facilement filtrer la liste des séries et voir leurs informations. L'application comprend également un bouton permettant de charger une série au hasard, ce qui la rend plus interactive.
Fonctionnalités

    Liste des Séries : Affiche une liste de séries TV récupérées depuis le backend.
    Barre de Recherche : Permet aux utilisateurs de filtrer la liste en fonction du nom de la série.
    Bouton Série Aléatoire : Charge et affiche une série aléatoire au clic.
    Affichage des Images : Affiche les images des séries dans la liste (pour une future mise à jour, voir "v2").

## Installation : 
 ## A lire et suivre scrupuleusement pour voir ma super appli ;) 

1) Cloner le repository :

Tout d'abord, clonez le repository sur votre machine :

git clone ccléSSH ou HTTPS
cd le-repository

2) Ouvrir dans votre éditeur de code préféré :

Ouvrez le projet dans votre éditeur de code (par exemple, VS Code) :
code .

3) Configurer les variables d'environnement :
    Copiez le fichier .env.sample en .env et renseignez les informations nécessaires, notamment celles liées à votre base de données MySQL. Voici un exemple des variables que vous devrez définir :

    API_URL=http://localhost:5000/api/shows

    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=votre_utilisateur_mysql
    DB_PASSWORD=votre_mot_de_passe_mysql
    DB_NAME=movies_db

4) Installer les dépendances :

Dans un premier terminal, installez les dépendances pour le frontend :
cd frontend
npm install

Ensuite, dans un second terminal, installez les dépendances pour le backend :

    cd backend
    npm install

5) Configuration de MySQL (Optionnel)

    Se connecter à MySQL : Si vous n'avez pas encore configuré MySQL, assurez-vous d'être connecté à votre serveur MySQL local avec les bonnes informations d'identification. Vous pouvez vous connecter à MySQL avec la commande suivante dans votre terminal :

6) Initialiser la base de données :

Exécutez le script init-db pour créer la database et y insérer la table show. Pour cela, allez dans le dossier backend et exécutez la commande suivante :

    npm run init-db

    Ce script va créer la base de données et les tables nécessaires à l'application.

7) Lancer l'application
   
Lancez tout d'abord le terminal du backend, lancez le serveur avec la commande suivante :

npm run dev

Lancer le frontend :

Ouvrez un autre terminal et allez dans le dossier frontend, puis lancez le serveur Next.js avec la commande suivante :

npm run dev

## Technologies : 

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


    
## Read me par défaut
## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
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

    
