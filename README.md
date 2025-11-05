# 🌱 Proterra Environnement - Site Web Next.js + Payload CMS

Site web professionnel moderne avec panel d'administration CMS pour Proterra Environnement, expert en étanchéité par géosynthétiques.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Payload CMS](https://img.shields.io/badge/Payload%20CMS-3.0-green)

---

## 🎯 Caractéristiques principales

- ✅ **Next.js 15** avec App Router pour performance optimale
- ✅ **Payload CMS 3.0** pour gestion de contenu sans développeur
- ✅ **TypeScript** strict pour robustesse du code
- ✅ **Charte graphique Proterra** (Bleu marine #0F2B46, Vert lime #A4D233, Bleu ciel #00A3E0)
- ✅ **Page Builder** avec blocs flexibles
- ✅ **SEO avancé** (Schema.org, métadonnées, sitemap)
- ✅ **Référencement IA** optimisé
- ✅ **100% Responsive** mobile-first
- ✅ **Accessibilité WCAG 2.1**
- ✅ **Tailwind CSS** + shadcn/ui
- ✅ **Framer Motion** pour animations
- ✅ **PostgreSQL** pour la base de données

---

## 📂 Architecture du projet

```
proterra-environnement/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Layout racine avec SEO
│   │   ├── page.tsx           # Page d'accueil
│   │   └── (routes)/          # Pages du site
│   │
│   ├── components/             # Composants React
│   │   ├── ui/                # Composants UI de base (shadcn/ui)
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── blocks/            # Blocs Page Builder
│   │   └── features/          # Composants métier
│   │
│   ├── payload/                # Configuration Payload CMS
│   │   ├── collections/       # Collections (Projects, Articles, etc.)
│   │   ├── globals/           # Paramètres globaux
│   │   ├── blocks/            # Blocs Page Builder
│   │   └── payload.config.ts  # Config principale
│   │
│   ├── lib/                    # Utilitaires et helpers
│   │   └── utils.ts           # Fonctions utilitaires
│   │
│   └── styles/                 # Styles CSS
│       └── globals.css        # Styles globaux + Design System
│
├── public/                     # Fichiers statiques
│   └── media/                 # Uploads Payload CMS
│
├── next.config.js             # Configuration Next.js
├── tailwind.config.ts         # Configuration Tailwind
├── tsconfig.json              # Configuration TypeScript
├── .eslintrc.json             # Configuration ESLint
├── .prettierrc                # Configuration Prettier
├── .env.example               # Variables d'environnement (exemple)
└── package.json               # Dépendances
```

---

## 🚀 Installation et démarrage

### Prérequis

- **Node.js** >= 18.17.0
- **PostgreSQL** >= 14
- **npm** ou **yarn** ou **pnpm**

### 1. Cloner le repository

```bash
git clone https://github.com/antoinevanloo/test-proterra-environnement.git
cd test-proterra-environnement
```

### 2. Installer les dépendances

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine :

```bash
cp .env.example .env
```

Éditer `.env` :

```env
# Database PostgreSQL
DATABASE_URI=postgres://user:password@localhost:5432/proterra

# Payload CMS
PAYLOAD_SECRET=votre-clé-secrète-super-sécurisée-32-caractères-minimum

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Email (Resend recommandé)
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=noreply@proterra-environnement.com
```

### 4. Créer la base de données PostgreSQL

```bash
# Avec psql
createdb proterra

# Ou avec Docker
docker run --name proterra-postgres \
  -e POSTGRES_DB=proterra \
  -e POSTGRES_USER=proterra \
  -e POSTGRES_PASSWORD=proterra \
  -p 5432:5432 \
  -d postgres:16-alpine
```

### 5. Démarrer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur :
- **Frontend** : http://localhost:3000
- **Admin CMS** : http://localhost:3000/admin

### 6. Créer le premier utilisateur admin

Lors du premier accès à `/admin`, Payload vous demandera de créer un compte administrateur.

---

## 🎨 Charte graphique Proterra

Le design system intègre la charte graphique officielle :

### Couleurs principales

```css
/* Bleu marine foncé (sections sombres, header, footer) */
--proterra-navy: #0F2B46

/* Vert lime (CTA, accents, sections vibrantes) */
--proterra-lime: #A4D233

/* Bleu ciel (sections bassins, liens hover) */
--proterra-blue: #00A3E0

/* Couleurs secondaires */
--color-white: #FFFFFF
--color-gray: #F5F5F5
--color-text: #333333
```

### Typographie

```css
/* Titres */
font-family: 'Poppins', sans-serif;
font-weight: 700-900;

/* Corps de texte */
font-family: 'Inter', sans-serif;
font-weight: 400-600;
```

### Utilisation dans Tailwind

```tsx
// Couleurs
<div className="bg-proterra-navy-500 text-white">
<button className="bg-proterra-lime-500 hover:bg-proterra-lime-600">
<a className="text-proterra-blue-500">

// Fonts
<h1 className="font-heading font-bold">
<p className="font-sans">
```

---

## 📦 Collections Payload CMS

### Projects (Réalisations)

Gestion des projets et réalisations.

**Champs :**
- Titre, slug, catégorie (Bassins/Déchets/Couvertures)
- Localisation, année, client
- Description complète
- Détails techniques (surface, durée, matériau)
- Galerie photos
- Tags et projets similaires

**Accès CMS :** `Admin → Contenu → Projects`

### Articles (Actualités)

Gestion des articles de blog et actualités.

**Champs :**
- Titre, slug, résumé
- Contenu riche
- Image de couverture
- Auteur, catégorie, tags
- Date de publication

**Accès CMS :** `Admin → Contenu → Articles`

### Testimonials (Témoignages)

Gestion des témoignages clients.

**Champs :**
- Nom, poste, entreprise
- Citation
- Photo (optionnel)
- Note (1-5 étoiles)
- Ordre d'affichage

**Accès CMS :** `Admin → Contenu → Testimonials`

### Media (Médias)

Gestion centralisée des images et fichiers.

**Fonctionnalités :**
- Upload drag & drop
- Génération automatique de plusieurs tailles
- Conversion WebP automatique
- Texte alternatif pour SEO

**Accès CMS :** `Admin → Média → Media`

### Pages (Pages avec Page Builder)

*(En cours de développement - Page Builder à venir)*

**Fonctionnalités prévues :**
- Construction de pages par blocs
- 10+ types de blocs (Hero, Services, Galerie, etc.)
- Drag & drop pour réorganiser
- Preview en temps réel

---

## 🛠️ Développement

### Commandes disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm run start

# Linter (ESLint)
npm run lint

# Formatter (Prettier)
npm run format

# Vérification TypeScript
npm run type-check

# Générer les types Payload
npm run generate:types
```

### Bonnes pratiques

1. **TypeScript strict** : Toujours typer vos composants
2. **ESLint + Prettier** : Formater le code avant commit
3. **Commits conventionnels** : `feat:`, `fix:`, `docs:`, etc.
4. **Tests** : Tester les composants critiques
5. **Accessibilité** : ARIA labels, navigation clavier

---

## 📄 SEO et référencement

### Métadonnées

Chaque page génère automatiquement :
- Title et description optimisés
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs
- Robots directives

### Schema.org

Données structurées JSON-LD incluses :
- Organization (entreprise)
- LocalBusiness (agences)
- Service (offres)
- Article (actualités)
- Project (réalisations)

### Sitemap XML

Généré automatiquement à `/sitemap.xml`

### Robots.txt

Configuré automatiquement à `/robots.txt`

---

## 🌐 Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Déployer automatiquement

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Variables d'environnement de production

```env
DATABASE_URI=postgres://...
PAYLOAD_SECRET=...
NEXT_PUBLIC_SERVER_URL=https://www.proterra-environnement.com
RESEND_API_KEY=re_...
```

---

## 📚 Documentation additionnelle

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

## 🤝 Support

Pour toute question :
- **Email** : proterra@proterra-environnement.com
- **Téléphone** : 02 47 42 82 82

---

## 📝 Licence

© 2024 Proterra Environnement. Tous droits réservés.

---

**Développé avec ❤️ par Claude Code pour Proterra Environnement**
