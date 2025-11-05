# Proterra Environnement - Site Web Moderne

Site web professionnel pour Proterra Environnement, expert en étanchéité par géosynthétiques.

## Stack Technique

- **Next.js 14.2.16** - Framework React avec App Router
- **Payload CMS 2.30.3** - CMS headless pour la gestion de contenu
- **TypeScript 5.6** - Type safety
- **Tailwind CSS 3.4** - Design system Proterra
- **MongoDB** - Base de données
- **React 18.3.1** - Bibliothèque UI
- **Radix UI** - Composants accessibles
- **Leaflet** - Cartes interactives

## Fonctionnalités

### Pages Publiques
- ✅ Page d'accueil avec Hero, Stats, Services, CTA
- ✅ Page Bassins avec tabs (Industriels, Agricoles, Rétention, Stockage)
- ✅ Page Déchets & Terres polluées avec solutions détaillées
- ✅ Page Couvertures flottantes avec vidéos
- ✅ Page Actualités avec filtres et recherche
- ✅ Page Contact avec formulaire et cartes interactives
- ✅ Page Réalisations avec projets en grille

### Page Builder (12 blocs flexibles)
1. **Hero** - Titre, sous-titre, background (gradient/image), CTAs
2. **Rich Text** - Contenu enrichi avec 4 largeurs
3. **Image** - Image unique avec légende, 4 tailles
4. **Gallery** - Galerie d'images, 2-4 colonnes
5. **Video** - YouTube, Vimeo ou fichier uploadé
6. **CTA** - Call-to-action avec boutons et backgrounds
7. **Features Grid** - Grille de services avec icônes, 2-4 colonnes
8. **Stats** - Statistiques en grille (2-6 items)
9. **Testimonials** - Témoignages clients avec ratings
10. **Contact Form** - Formulaire de contact complet
11. **Map** - Cartes interactives des bureaux
12. **FAQ** - Accordéon questions/réponses

### Design System Proterra
- **Couleurs** : Navy (#0F2B46), Lime (#A4D233), Blue (#00A3E0)
- **Typographie** : Inter + Poppins
- **Responsive** : Mobile-first
- **Accessibilité** : WCAG 2.1 AA
- **SEO** : Métadonnées complètes, Schema.org

## Installation

### Prérequis
- Node.js >= 18.17.0
- MongoDB (local ou cloud)
- npm ou yarn

### 1. Cloner et installer
```bash
git clone <repository-url>
cd test-proterra-environnement
npm install
```

### 2. Configuration
Créer un fichier `.env` à la racine :
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/proterra

# Payload CMS
PAYLOAD_SECRET=votre-clé-secrète-minimum-32-caractères
PAYLOAD_PORT=3001

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Démarrer MongoDB
```bash
# Si MongoDB local
mongod

# Ou utiliser MongoDB Atlas (cloud)
```

### 4. Démarrer les serveurs

⚠️ **IMPORTANT** : Vous devez lancer **2 serveurs séparément** dans 2 terminaux :

**Terminal 1 : Next.js (site web)**
```bash
npm run dev
```
Site accessible sur **http://localhost:3000**

**Terminal 2 : Payload CMS (admin)**
```bash
npm run dev:payload
```
Admin accessible sur **http://localhost:3001/admin**

### 5. Créer le premier utilisateur admin
- Aller sur **http://localhost:3001/admin**
- Créer votre compte administrateur

## URLs importantes

- **Site web** : http://localhost:3000
- **Admin Payload CMS** : http://localhost:3001/admin
- **Réalisations** : http://localhost:3000/realisations
- **Contact** : http://localhost:3000/contact
- **Actualités** : http://localhost:3000/actus

## Utilisation du CMS

### Accéder à l'admin Payload CMS
URL : **http://localhost:3001/admin**

### Collections disponibles

#### Pages
Créer des pages avec le Page Builder :
- Glisser-déposer 12 types de blocs
- Configuration visuelle sans code
- SEO intégré (title, description, keywords)

#### Projects (Réalisations)
Gérer vos projets :
- Titre, slug, catégorie
- Localisation, année, surface
- Galerie d'images
- Description détaillée

#### Articles (Actualités)
Publier des actualités :
- Titre, slug, catégorie
- Date de publication
- Contenu enrichi
- Image à la une

#### Testimonials (Témoignages)
Ajouter des témoignages clients :
- Nom, rôle, entreprise
- Citation
- Rating (1-5 étoiles)
- Ordre d'affichage

#### Media
Bibliothèque médias centralisée :
- Upload d'images et vidéos
- Génération automatique de tailles multiples
- Alt text pour SEO

### Globals

#### Site Settings
Paramètres globaux du site :
- Nom du site
- Description
- Logo
- Réseaux sociaux

#### Navigation
Gérer les menus de navigation :
- Menu principal
- Menu footer
- Liens personnalisés

## Scripts disponibles

```bash
# Développement
npm run dev              # Démarre Next.js (port 3000)
npm run dev:payload      # Démarre Payload Admin (port 3001)

# Production
npm run build            # Build Next.js
npm run start            # Démarre Next.js en production
npm run start:payload    # Démarre Payload Admin en production

# Qualité code
npm run lint             # ESLint
npm run format           # Prettier
npm run type-check       # TypeScript check
```

## Structure du projet

```
test-proterra-environnement/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx          # Layout racine
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── bassins/            # Page Bassins
│   │   ├── dechets-terres-polluees/
│   │   ├── couvertures-flottantes/
│   │   ├── actus/              # Page Actualités
│   │   ├── contact/            # Page Contact
│   │   └── realisations/       # Page Réalisations
│   ├── components/
│   │   ├── blocks/             # 12 blocs Page Builder
│   │   ├── layout/             # Header, Footer
│   │   └── ui/                 # Composants UI réutilisables
│   ├── lib/
│   │   └── utils.ts            # Fonctions utilitaires
│   ├── payload/
│   │   ├── collections/        # Collections Payload CMS
│   │   ├── globals/            # Globals Payload CMS
│   │   └── payload.config.ts   # Config Payload
│   └── styles/
│       └── globals.css         # Styles globaux Tailwind
├── public/                     # Assets statiques
├── server.ts                   # Serveur Express pour Payload Admin
├── tailwind.config.ts          # Configuration Tailwind
├── tsconfig.json               # Configuration TypeScript
└── package.json
```

## Dépannage

### Erreur 404 sur /admin
L'admin Payload CMS tourne sur un serveur séparé. Utilisez :
- **http://localhost:3001/admin** (et non localhost:3000/admin)
- Lancez `npm run dev:payload` dans un terminal séparé

### Erreur MongoDB
```bash
# Vérifier que MongoDB tourne
mongod

# Ou installer MongoDB:
# macOS: brew install mongodb-community
# Ubuntu: sudo apt install mongodb
# Windows: https://www.mongodb.com/try/download/community
```

### Port déjà utilisé
```bash
# Si port 3000 ou 3001 déjà pris
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

## Déploiement

### Vercel (recommandé pour Next.js)
1. Push le code sur GitHub
2. Importer sur Vercel
3. Configurer les variables d'environnement
4. Déployer

### Serveur Payload Admin séparé
Le serveur Payload Admin (Express) doit être déployé séparément :
- Utiliser Render, Railway, DigitalOcean, etc.
- Configurer MongoDB Atlas (cloud)
- Définir MONGODB_URI et PAYLOAD_SECRET

## Support

Pour toute question ou problème :
- Documentation Payload CMS : https://payloadcms.com/docs
- Documentation Next.js : https://nextjs.org/docs
- GitHub Issues : <repository-url>/issues

## Licence

Propriétaire - Proterra Environnement © 2024
