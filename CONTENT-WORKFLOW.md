# Guide Éditorial - Proterra Environnement

Ce guide explique comment créer et gérer le contenu du site via Payload CMS.

---

## 🎯 Vue d'ensemble

### Architecture de contenu

```
┌──────────────────────────────────────────────────────────┐
│              Payload Admin (port 3001)                    │
│                                                           │
│  Vous créez le contenu ici :                             │
│  ├── Articles                                            │
│  ├── Projets (Réalisations)                             │
│  ├── Témoignages                                         │
│  ├── Médias (images)                                     │
│  └── Pages (avec Page Builder)                          │
│                                                           │
└──────────────────────┬───────────────────────────────────┘
                       │
                       │ API REST
                       │ http://localhost:3001/api/*
                       ↓
┌──────────────────────────────────────────────────────────┐
│              Next.js Frontend (port 3000)                 │
│                                                           │
│  Le site affiche le contenu :                            │
│  ├── / (Page d'accueil)                                  │
│  ├── /articles (Liste des articles)                      │
│  ├── /articles/[slug] (Article individuel)              │
│  ├── /realisations (Portfolio projets)                   │
│  └── /[...slug] (Pages dynamiques)                       │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## 📝 1. Créer et publier un article

### Dans Payload Admin (http://localhost:3001/admin)

1. **Aller dans Articles** → `Create New`

2. **Remplir les champs** :
   ```
   ✓ Titre : "Notre expertise en étanchéité géosynthétique"
   ✓ Slug : auto-généré (ex: "notre-expertise-etancheite")
   ✓ Excerpt : Résumé de l'article (2-3 phrases)
   ✓ Content : Contenu riche (texte formaté)
   ✓ Featured Image : Upload une image
   ✓ Author : Votre nom
   ✓ Category : Expertise / Actualités / Conseils
   ✓ Tags : géosynthétiques, étanchéité, etc.
   ✓ Published : ✓ (coché pour publier)
   ```

3. **Sauvegarder** : `Save` en haut à droite

4. **Voir l'article sur le site** :
   - URL API : `http://localhost:3001/api/articles`
   - URL frontend : `http://localhost:3000/articles` (liste)
   - URL article : `http://localhost:3000/articles/notre-expertise-etancheite`

---

## 🏢 2. Créer un projet (Réalisation)

### Dans Payload Admin

1. **Aller dans Projects** → `Create New`

2. **Remplir les champs** :
   ```
   ✓ Title : "Centre de stockage de déchets - Lyon"
   ✓ Slug : auto-généré
   ✓ Description : Description du projet
   ✓ Category : Installation de stockage / Bassin / Toiture / etc.
   ✓ Location : Lyon, France
   ✓ Year : 2024
   ✓ Surface : 5000 (m²)
   ✓ Client : Nom du client
   ✓ Featured Image : Image principale
   ✓ Gallery : Plusieurs images du projet
   ✓ Published : ✓
   ```

3. **Voir sur le site** :
   - URL frontend : `http://localhost:3000/realisations`

---

## 💬 3. Créer un témoignage client

### Dans Payload Admin

1. **Aller dans Testimonials** → `Create New`

2. **Remplir** :
   ```
   ✓ Name : Jean Dupont
   ✓ Role : Directeur Technique
   ✓ Company : Entreprise XYZ
   ✓ Quote : "Proterra nous a accompagné avec professionnalisme..."
   ✓ Avatar : Photo du client
   ✓ Rating : 5
   ✓ Order : 0 (ordre d'affichage)
   ✓ Published : ✓
   ```

3. **Affichage** : Les témoignages peuvent être affichés via le bloc "Testimonials" dans les pages

---

## 🖼️ 4. Uploader des médias

### Dans Payload Admin

1. **Aller dans Media** → `Upload`

2. **Uploader des fichiers** :
   - Images : JPG, PNG, WebP
   - Formats recommandés : 1920×1080 (paysage), 1080×1350 (portrait)
   - Poids max : 10 MB

3. **Remplir les métadonnées** :
   ```
   ✓ Alt Text : Description de l'image (SEO + accessibilité)
   ✓ Caption : Légende optionnelle
   ```

4. **Utiliser l'image** :
   - Dans les articles : champ "Featured Image"
   - Dans les projets : champs "Featured Image" et "Gallery"
   - Dans les pages : bloc "Image" du Page Builder

---

## 📄 5. Créer une page personnalisée (Page Builder)

Le **Page Builder** permet de créer des pages avec des blocs flexibles.

### Dans Payload Admin

1. **Aller dans Pages** → `Create New`

2. **Champs principaux** :
   ```
   ✓ Title : "Notre engagement environnemental"
   ✓ Slug : notre-engagement-environnemental
   ✓ Published : ✓
   ```

3. **Layout (Page Builder)** : Cliquez sur `Add Layout`

   **Blocs disponibles** :

   ### 🎨 Bloc Hero
   - Bannière en haut de page
   - Image de fond
   - Titre + sous-titre
   - Bouton CTA

   ### 📝 Bloc Rich Text
   - Contenu texte formaté
   - Titres, paragraphes, listes
   - Gras, italique, liens

   ### 🖼️ Bloc Image
   - Image unique avec légende
   - Alignement gauche/centre/droite
   - Taille personnalisable

   ### 🖼️🖼️ Bloc Gallery
   - Galerie d'images
   - Grille responsive
   - Lightbox au clic

   ### 🎥 Bloc Video
   - Embed YouTube ou Vimeo
   - URL de la vidéo
   - Affichage responsive

   ### 🔘 Bloc CTA (Call-to-Action)
   - Bouton d'appel à l'action
   - Titre + description
   - Lien personnalisable
   - Couleur de fond

   ### ⚡ Bloc Features Grid
   - Grille de fonctionnalités
   - Icônes + titre + description
   - 2, 3 ou 4 colonnes

   ### 📊 Bloc Stats
   - Chiffres clés
   - Valeur + label + icône
   - Animation au scroll

   ### 💬 Bloc Testimonials
   - Témoignages clients
   - Sélection depuis la collection Testimonials
   - Carousel ou grille

   ### 📧 Bloc Contact Form
   - Formulaire de contact
   - Nom, email, message
   - Validation côté client

   ### 🗺️ Bloc Map
   - Carte Google Maps
   - Adresse + coordonnées
   - Marker personnalisé

   ### ❓ Bloc FAQ
   - Questions/réponses
   - Accordéon
   - SEO optimisé (schema.org)

4. **Exemple de page** :

   ```
   Page : "Notre engagement environnemental"

   Layout :
   1. Bloc Hero
      - Image : photo-nature.jpg
      - Titre : "Proterra, acteur de la protection environnementale"
      - Description : "Depuis 2009..."

   2. Bloc Rich Text
      - Contenu : Texte sur l'engagement

   3. Bloc Features Grid
      - Feature 1 : Certification ISO 14001
      - Feature 2 : Matériaux recyclables
      - Feature 3 : Réduction CO2

   4. Bloc Stats
      - 500+ projets écologiques
      - 2M m² protégés
      - 15 ans d'expertise

   5. Bloc CTA
      - Titre : "Parlons de votre projet"
      - Bouton : "Nous contacter"
   ```

5. **Voir la page** :
   - URL : `http://localhost:3000/notre-engagement-environnemental`

---

## 🏠 6. Éditer la page d'accueil

Il y a **deux approches** pour la page d'accueil :

### Option A : Page statique (actuelle)

Actuellement, la page d'accueil (`src/app/page.tsx`) est **codée en dur**.

Pour la modifier, il faut éditer le code directement.

### Option B : Page dynamique (via Page Builder) ✅ RECOMMANDÉ

1. **Créer une page dans Payload** :
   - Titre : "Accueil"
   - Slug : `home` ou laissez vide
   - Layout : Ajoutez vos blocs

2. **Dans Next.js** : Modifier `src/app/page.tsx` pour récupérer le contenu depuis l'API :

```typescript
// src/app/page.tsx
export default async function HomePage() {
  // Récupérer la page "home" depuis l'API Payload
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=home`,
    { next: { revalidate: 60 } } // Cache 60 secondes
  )
  const data = await res.json()
  const page = data.docs[0]

  if (!page) {
    return <div>Page d'accueil non trouvée</div>
  }

  return (
    <>
      <Header />
      {/* Afficher les blocs dynamiquement */}
      {page.layout?.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
      <Footer />
    </>
  )
}
```

---

## 🔄 7. Workflow typique

### Workflow de publication

```
1. Créer le contenu dans Payload Admin
   ↓
2. Cocher "Published" ✓
   ↓
3. Sauvegarder
   ↓
4. Le contenu est immédiatement disponible via l'API
   ↓
5. Next.js récupère et affiche le contenu
   (peut nécessiter un refresh ou revalidation)
```

### Modifier du contenu existant

```
1. Ouvrir l'article/projet/page dans Payload Admin
   ↓
2. Modifier les champs
   ↓
3. Sauvegarder
   ↓
4. Les changements sont immédiatement dans l'API
   ↓
5. Rafraîchir la page frontend (F5)
   OU attendre la revalidation automatique
```

---

## 🔌 8. Comment le frontend récupère le contenu

### API Endpoints disponibles

```bash
# Liste des articles
GET http://localhost:3001/api/articles

# Article par slug
GET http://localhost:3001/api/articles?where[slug][equals]=mon-article

# Liste des projets
GET http://localhost:3001/api/projects

# Liste des témoignages
GET http://localhost:3001/api/testimonials

# Page par slug
GET http://localhost:3001/api/pages?where[slug][equals]=contact

# Tous les médias
GET http://localhost:3001/api/media
```

### Exemple de code Next.js

```typescript
// app/articles/page.tsx
export default async function ArticlesPage() {
  // Récupérer les articles depuis l'API Payload
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/articles?where[published][equals]=true`,
    { next: { revalidate: 60 } } // ISR : revalidate toutes les 60 secondes
  )

  const data = await res.json()
  const articles = data.docs

  return (
    <div>
      <h1>Nos articles</h1>
      <div className="grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
```

---

## ⚙️ 9. Configuration (Globals)

### Site Settings

**Payload Admin** → **Site Settings** (dans le menu latéral)

Configurez :
- Nom du site : "Proterra Environnement"
- Slogan : "Expert en étanchéité par géosynthétiques"
- Description : Meta description par défaut
- Contact :
  - Email : contact@proterra-environnement.com
  - Téléphone : 02 47 42 82 82
- Réseaux sociaux :
  - LinkedIn : URL

### Navigation

**Payload Admin** → **Navigation**

Configurez le menu principal :
```
Menu Item 1 :
  - Label : Accueil
  - URL : /

Menu Item 2 :
  - Label : Expertise
  - URL : /expertise

Menu Item 3 :
  - Label : Réalisations
  - URL : /realisations

Menu Item 4 :
  - Label : Articles
  - URL : /articles

Menu Item 5 :
  - Label : Contact
  - URL : /contact
```

---

## 🚀 10. État actuel vs État cible

### ❌ État ACTUEL

```typescript
// Frontend affiche du contenu MOCK (hardcodé)
const articles = [
  { title: "Article 1", content: "..." }, // ⚠️ Hardcodé
  { title: "Article 2", content: "..." }, // ⚠️ Hardcodé
]
```

### ✅ État CIBLE

```typescript
// Frontend récupère depuis l'API Payload
const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/articles`)
const articles = await res.json() // ✓ Dynamique depuis le CMS
```

---

## 📋 TODO : Connecter le frontend

Pour connecter chaque page :

### 1. Page Articles (`/articles`)

**Fichier** : `src/app/articles/page.tsx`

**Action** : Remplacer le contenu mock par un fetch vers `/api/articles`

### 2. Page Article individuel (`/articles/[slug]`)

**Fichier** : `src/app/articles/[slug]/page.tsx`

**Action** : Créer cette page dynamique qui récupère l'article par slug

### 3. Page Réalisations (`/realisations`)

**Fichier** : `src/app/realisations/page.tsx`

**Action** : Remplacer le contenu mock par un fetch vers `/api/projects`

### 4. Page d'accueil (`/`)

**Fichier** : `src/app/page.tsx`

**Action** :
- Option 1 : Garder statique (actuel)
- Option 2 : Connecter au Page Builder (recommandé)

### 5. Pages dynamiques (`/[...slug]`)

**Fichier** : `src/app/[...slug]/page.tsx` (à créer)

**Action** : Créer un catch-all route pour les pages du Page Builder

---

## 🎓 Prochaines étapes

1. **Créer du contenu** dans Payload Admin
   - 3-5 articles
   - 5-10 projets
   - 3-5 témoignages
   - Plusieurs médias

2. **Connecter le frontend** (je peux vous aider)
   - Page articles
   - Page article individuel
   - Page réalisations
   - Pages dynamiques

3. **Tester le workflow complet**
   - Créer → Publier → Voir sur le site

4. **Configurer les Globals**
   - Site Settings
   - Navigation

---

## ❓ Questions fréquentes

### Q : Où voir mes articles sur le site ?

**R** : Une fois le frontend connecté à l'API :
- Liste : `http://localhost:3000/articles`
- Article : `http://localhost:3000/articles/[slug]`

### Q : Comment modifier la page d'accueil ?

**R** : Deux options :
1. Éditer `src/app/page.tsx` (code)
2. Créer une page "home" dans Payload avec le Page Builder (recommandé)

### Q : Les changements sont-ils instantanés ?

**R** : Oui dans l'API. Sur le frontend, dépend du cache :
- En dev (`npm run dev`) : quasi-instantané
- En prod : selon la stratégie de revalidation (ISR)

### Q : Comment supprimer un article ?

**R** : Payload Admin → Articles → Article → Menu 3 points → Delete

### Q : Comment dépublier sans supprimer ?

**R** : Décocher "Published" et sauvegarder

---

**Besoin d'aide pour connecter le frontend ?** Je peux vous montrer comment faire ! 🚀
