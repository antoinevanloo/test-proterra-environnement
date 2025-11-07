# Architecture Proterra Environnement

## 📐 Vue d'ensemble

Ce projet utilise une **architecture découplée** avec :
- **Payload CMS 2.x** : Headless CMS standalone (Express)
- **Next.js 14** : Frontend React avec App Router

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                     │
└─────────────────────────────────────────────────────────┘
                │                           │
                │ Pages publiques           │ Admin UI
                ↓                           ↓
    ┌─────────────────────┐     ┌─────────────────────┐
    │   Next.js Frontend  │     │   Payload Admin     │
    │   Port 3000         │     │   Port 3001         │
    │                     │     │                     │
    │  - Pages (/)        │     │  - Admin (/admin)   │
    │  - Components       │     │  - API (/api/*)     │
    │  - Styles           │     │  - GraphQL          │
    └─────────────────────┘     └─────────────────────┘
                │                           │
                │ API Calls                 │
                └───────────┬───────────────┘
                            ↓
                ┌─────────────────────┐
                │   MongoDB           │
                │   Port 27017        │
                └─────────────────────┘
```

---

## 🏗️ Composants

### 1. Payload CMS (Port 3001)

**Rôle** : Backend headless CMS avec admin panel

**Stack** :
- Express.js
- Payload CMS 2.30.3
- MongoDB (Mongoose)
- GraphQL
- Webpack (pour l'admin UI)

**Routes exposées** :
- `/admin` - Interface d'administration
- `/api/projects` - Collection Projects
- `/api/articles` - Collection Articles
- `/api/testimonials` - Collection Testimonials
- `/api/media` - Collection Media (uploads)
- `/api/pages` - Collection Pages (Page Builder)
- `/api/users` - Collection Users
- `/api/graphql` - Endpoint GraphQL

**Fichiers clés** :
- `server.ts` - Point d'entrée Express
- `src/payload/payload.config.ts` - Configuration Payload
- `src/payload/collections/` - Définitions des collections
- `src/payload/globals/` - Paramètres globaux (Settings, Navigation)

---

### 2. Next.js Frontend (Port 3000)

**Rôle** : Site web public

**Stack** :
- Next.js 14.2 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Radix UI

**Routes principales** :
- `/` - Page d'accueil
- `/expertise` - Page expertise
- `/realisations` - Portfolio projets
- `/articles` - Blog
- `/contact` - Formulaire de contact

**Fichiers clés** :
- `src/app/` - Pages et layouts (App Router)
- `src/components/` - Composants React réutilisables
- `src/lib/` - Utilitaires

**Communication avec Payload** :
```typescript
// Example: Récupérer les projets depuis l'API Payload
const response = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/projects`)
const data = await response.json()
```

---

### 3. MongoDB (Port 27017)

**Rôle** : Base de données

**Stack** :
- MongoDB 7.0 (via Docker Compose)
- Authentication activée
- Volume persistant

**Collections** :
- `projects` - Projets / réalisations
- `articles` - Articles de blog
- `testimonials` - Témoignages clients
- `media` - Fichiers uploadés
- `pages` - Pages avec Page Builder
- `users` - Utilisateurs admin
- `payload-preferences` - Préférences Payload
- `payload-migrations` - Migrations schema

---

## 🔐 Variables d'environnement

### MongoDB
```env
MONGO_USERNAME=proterra_admin
MONGO_PASSWORD=ProterraSecure2024!
MONGO_DATABASE=proterra
MONGODB_URI=mongodb://proterra_admin:ProterraSecure2024!@localhost:27017/proterra?authSource=admin
```

### Payload CMS
```env
PAYLOAD_SECRET=<votre-clé-32-caractères>
PAYLOAD_PORT=3001
PAYLOAD_SERVER_URL=http://localhost:3001
```
- `PAYLOAD_SECRET` : Clé de chiffrement JWT (min 32 caractères)
- `PAYLOAD_PORT` : Port du serveur Express
- `PAYLOAD_SERVER_URL` : URL utilisée par l'admin panel pour les appels API

### Next.js
```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3001
```
- `NEXT_PUBLIC_SERVER_URL` : URL publique du site Next.js
- `NEXT_PUBLIC_PAYLOAD_URL` : URL de l'API Payload (pour fetch depuis Next.js)

---

## 🚀 Démarrage

### Ordre de démarrage (IMPORTANT)

**1. MongoDB** (doit tourner en premier)
```bash
docker-compose up -d
```

**2. Payload Admin** (démarrer AVANT Next.js)
```bash
npm run dev:payload
```
Attendez : `webpack compiled successfully`

**3. Next.js Frontend** (démarrer EN DERNIER)
```bash
npm run dev
```

### Pourquoi cet ordre ?

1. **MongoDB** : Les deux serveurs en dépendent
2. **Payload avant Next.js** : Réserve le port 3001 avant que Next.js ne le prenne
3. **Next.js en dernier** : Forcé sur port 3000 (via `-p 3000`)

---

## 📦 Scripts npm

### Développement
```bash
npm run dev           # Next.js (port 3000)
npm run dev:payload   # Payload Admin (port 3001)
```

### Production
```bash
npm run build         # Build Next.js + migrations Payload
npm run start         # Start Next.js (port 3000)
npm run start:payload # Start Payload Admin (port 3001)
```

### Utilitaires
```bash
npm run lint          # ESLint
npm run format        # Prettier
npm run type-check    # TypeScript
```

---

## 🎨 Page Builder

Le système de Page Builder permet de créer des pages dynamiques via l'admin Payload.

**Blocs disponibles** :
1. `hero` - Bannière hero avec image de fond
2. `richText` - Contenu riche (texte formaté)
3. `image` - Image unique avec légende
4. `gallery` - Galerie d'images
5. `video` - Embed vidéo (YouTube/Vimeo)
6. `cta` - Call-to-action
7. `featuresGrid` - Grille de fonctionnalités
8. `stats` - Statistiques/chiffres clés
9. `testimonials-block` - Témoignages clients
10. `contactForm` - Formulaire de contact
11. `map` - Carte géographique
12. `faq` - Questions fréquentes

**Utilisation** :
1. Dans Payload Admin : Pages → Create New
2. Ajouter des blocs via "Layout"
3. Publier la page
4. Next.js récupère et affiche les blocs

---

## 🔒 Sécurité

### MongoDB
- ✅ Authentication activée
- ✅ Credentials dans `.env` (non versionné)
- ✅ Volume Docker persistant
- ✅ Réseau Docker isolé

### Payload CMS
- ✅ JWT avec secret fort (32+ caractères)
- ✅ RBAC (Role-Based Access Control)
- ✅ Upload validation
- ✅ CORS configuré

### Next.js
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ Variables d'environnement (NEXT_PUBLIC_*)
- ✅ Image optimization
- ✅ Rate limiting (recommandé en production)

---

## 🚢 Déploiement

### Production recommandée

**Option 1 : Deux serveurs séparés**
- Serveur 1 : Payload Admin (Node.js + MongoDB)
- Serveur 2 : Next.js Frontend (Vercel/Netlify)
- Communication via API REST/GraphQL

**Option 2 : Serveur unique avec reverse proxy**
```nginx
server {
  location / {
    proxy_pass http://localhost:3000;  # Next.js
  }

  location /admin {
    proxy_pass http://localhost:3001;  # Payload
  }

  location /api {
    proxy_pass http://localhost:3001;  # Payload API
  }
}
```

### Variables d'environnement production

```env
# MongoDB (ex: MongoDB Atlas)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/proterra?retryWrites=true&w=majority

# Payload CMS
PAYLOAD_SECRET=<clé-production-forte>
PAYLOAD_PORT=3001
PAYLOAD_SERVER_URL=https://admin.proterra-environnement.com

# Next.js
NEXT_PUBLIC_SERVER_URL=https://proterra-environnement.com
NEXT_PUBLIC_PAYLOAD_URL=https://admin.proterra-environnement.com
```

---

## 🛠️ Maintenance

### Backup MongoDB
```bash
# Backup
docker exec proterra-mongodb mongodump --out /backup

# Restore
docker exec proterra-mongodb mongorestore /backup
```

### Migrations Payload
```bash
npm run payload migrate
```

### Logs
```bash
# MongoDB
docker-compose logs mongodb

# Payload
npm run dev:payload (voir console)

# Next.js
npm run dev (voir console)
```

---

## 📚 Ressources

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

---

## 🤝 Contribution

1. Créer une branche feature : `git checkout -b feature/ma-feature`
2. Commiter les changements : `git commit -m "feat: ma feature"`
3. Push la branche : `git push origin feature/ma-feature`
4. Créer une Pull Request

**Conventions de commit** : [Conventional Commits](https://www.conventionalcommits.org/)
