# Site aqua poney club

Site web fictif pour tester AdonisJS + Inertia

Démo live : https://aquaponeyclub.doelia.fr/

## Stack
- AdonisJS
- PostgreSQL
- InertiaJS
- React
- ReactPrime
- TailwindCSS

## Fonctionnalités explorées
- Rendu SSR avec react
- Création d'une commande en CLI
- Connexion à une BDD PostgreSQL via service custom (sans ORM)
- Utilisation de composants ReactPrime (Modales)
- Exception 404 custom (pour les articles introuvables en BDD)

## Développement

#### Prérequis
- NodeJS
- Une base de donnée PostgreSQL

#### Configuration
Copier le fichier `.env.example` en `.env` et modifier les informations de connexion à la base de donnée

#### Installation
```shell
# Installation des dépendances
npm install

# Création des tables
node ace init:db
```

#### Execution
```
npm run dev
```
