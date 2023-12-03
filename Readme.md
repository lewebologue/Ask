# Projet Ask, Plateforme de gestion digitale

Projet personnel et totalement fictif. Création d'une webapp regroupant des outils de gestion et de suivi pour une entreprise (ERP).
- Gestion de tickets informatique : Création, mise à jour, et suivi.
- Gestion parc informatique : Liste, ajout et assignation de matériel.
- Gestion du personnel :
    - Liste, ajout et assignation de personnel.
    - Gestion des congés : Création, mise à jour, et suivi.
    - Gestion des absences : Création, mise à jour, et suivi.
    - Demande d'assignation de matériel informatique: Création, mise à jour, et suivi.


## Disclaimer

Cette application web est un projet purement fictif, réalisé dans un seul but de maintien des compétences.
Cette application web n'est pas utilisée dans un cadre professionnel.

Toute réclamation concernant ce projet doit se faire par mail à cette [adresse](mailto:thuard.ludovic@gmail.com).

## Technologies utilisées
- Frontend:
    - TBD
- Backend:
    - NodeJS
    - Express
    - TypeScript
- Base de données:
    - PostgeSQL
    - TypeORM
- Conteneurisation:
    - Docker

## Mise en place du projet

La base de données utilisée pour le développement est hebergée sur un serveur distant privé.
La connexion à cette base de données requiere un fichier .env à demander par mail à cette [adresse](mailto:thuard.ludovic@gmail.com).

Sinon, vous pouvez: 
- Créer une base de données mongoDB
- Entrer ces informations dans le fichier ".env" aux emplacements prévus

## Déploiement et lancement du Frontend

Ouvrir le dossier Frontend dans le terminal de votre éditeur puis exécuter la commande:

    npm ci

puis

    npm run watch

puis rendez-vous à cette adresse:

- http://localhost:8080/

## Déploiement et lancement du Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm ci

puis

    nnpm run watch:tsc

## Erreur possibles

Dans le can d'une erreur, merci de créer une issue sur le repo github du projet.
[ICI](https://github.com/lewebologue/Ask/issues)
<br/>
Veillez à bien détailler l'erreur rencontrée et à fournir les logs et/ou screenshot de l'application ou du service.
Avant de valider votre issue, merci de verifier:
- Que votre environnement est bien configuré
- Que votre base de données est bien configurée
- Que votre base de données est bien accessible
- Que celle-ci n'ai pas dèjà été reportée