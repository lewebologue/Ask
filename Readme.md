# Projet fictif - Ask, Plateforme de gestion digitale

Projet personnel et totalement fictif. Création d'une webapp regroupant des outils de gestion et de suivi pour un grossiste alimentaire.
- Gestion de demandes de répartion de matériel : Création et suivi
- Gestion du personnel de préparation : Liste, ajout et assignation de matériel
- Accès SaaS RH (Non fonctionnel)
- Suivi des palettes europe

## Disclaimer

Cette application web est un projet purement fictif, réalisé dans un seul but de maintien des compétences.
L'entreprise utilisée dans ce projet n'est en aucun cas liée à ce projet ni à son utlisation.
Cette application web n'est pas destinée à être déployée et utilisée.

Toute réclamation concernant ce projet doit se faire par mail à cette [adresse](mailto:thuard.ludovic@gmail.com).

## Technologies utilisées
- Angular CLI 14
- NodeJs + express + Mongoose

## Mise en place du projet

La base de données utilisée pour le développement est hebergée sur un serveur distant privé.
La connexion à cette base de données requiere un fichier .env à demander par mail à cette [adresse](mailto:thuard.ludovic@gmail.com).

Sinon, vous pouvez: 
- Créer une base de données mongoDB
- Entrer ces informations dans le fichier ".env" aux emplacements prévus

## Déploiement et lancement du Frontend

Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    ng serve

puis rendez-vous à cette adresse:

- http://localhost:8080/

## Déploiement et lancement du Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    nodemon server ou node server

## Erreur possibles

Dans le cadre d'un deploiment sous linux, node v17 présentant des dysfonctionnements sur ce sytème d'éxploitation, vous devez lancer le front-end avec la version 16(LTS).