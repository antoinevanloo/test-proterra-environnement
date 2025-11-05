# 🚀 Guide de Démarrage Rapide - Proterra Environnement

## ⚡ Démarrage Ultra-Rapide (Copy-Paste)

### 1️⃣ Arrêter l'ancien conteneur MongoDB (si existant)
```bash
docker stop proterra-mongodb 2>/dev/null
docker rm proterra-mongodb 2>/dev/null
```

### 2️⃣ Créer le fichier .env
```bash
cp .env.example .env
```

### 3️⃣ Générer une clé secrète sécurisée
```bash
# Générer une clé aléatoire
openssl rand -base64 32
```

**Copiez le résultat** et éditez le fichier `.env` :
```bash
nano .env
# ou
code .env
# ou ouvrez-le avec votre éditeur préféré
```

Remplacez dans `.env` :
```env
PAYLOAD_SECRET=COLLEZ_ICI_LA_CLE_GENEREE_PAR_OPENSSL
```

### 4️⃣ Démarrer MongoDB avec Docker Compose
```bash
docker-compose up -d
```

Vérifier que MongoDB tourne :
```bash
docker-compose ps
```

Vous devriez voir :
```
NAME                IMAGE            STATUS
proterra-mongodb    mongo:7-alpine   Up X seconds
```

### 5️⃣ Installer les dépendances
```bash
npm install
```

### 6️⃣ Lancer les 2 serveurs

**Terminal 1 - Site Next.js** :
```bash
npm run dev
```
✅ Site accessible sur **http://localhost:3000**

**Terminal 2 - Payload Admin** (nouveau terminal) :
```bash
npm run dev:payload
```
✅ Admin accessible sur **http://localhost:3001/admin**

---

## 🎯 Créer votre compte admin

1. Ouvrez **http://localhost:3001/admin**
2. Remplissez le formulaire de création d'utilisateur
3. Vous êtes connecté ! 🎉

---

## 📋 Commandes Docker Compose utiles

```bash
# Démarrer MongoDB
docker-compose up -d

# Arrêter MongoDB
docker-compose down

# Arrêter ET supprimer les données (⚠️ DANGER)
docker-compose down -v

# Voir les logs MongoDB
docker-compose logs -f mongodb

# Redémarrer MongoDB
docker-compose restart

# Voir l'état
docker-compose ps
```

---

## 🔐 Informations de connexion MongoDB

- **Host** : localhost
- **Port** : 27017
- **Database** : proterra
- **Username** : proterra_admin
- **Password** : ProterraSecure2024!
- **Auth Database** : admin

**URI complète** :
```
mongodb://proterra_admin:ProterraSecure2024!@localhost:27017/proterra?authSource=admin
```

---

## 🛠️ Dépannage

### MongoDB ne démarre pas
```bash
# Voir les logs détaillés
docker-compose logs mongodb

# Redémarrer complètement
docker-compose down
docker-compose up -d
```

### Port 27017 déjà utilisé
```bash
# Trouver ce qui utilise le port
lsof -ti:27017

# Tuer le processus
lsof -ti:27017 | xargs kill -9
```

### Erreur "Cannot connect to MongoDB"
```bash
# Vérifier que MongoDB tourne
docker-compose ps

# Tester la connexion
docker exec -it proterra-mongodb mongosh -u proterra_admin -p ProterraSecure2024! --authenticationDatabase admin
```

### Port 3000 ou 3001 déjà utilisé
```bash
# Trouver et tuer les processus
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

---

## 📊 Structure des URLs

| Service | URL | Commande |
|---------|-----|----------|
| **Site web** | http://localhost:3000 | `npm run dev` |
| **Admin CMS** | http://localhost:3001/admin | `npm run dev:payload` |
| **MongoDB** | localhost:27017 | `docker-compose up -d` |

---

## 🎨 Tester le site

Une fois tout démarré, visitez :
- http://localhost:3000 - Page d'accueil
- http://localhost:3000/bassins - Page Bassins
- http://localhost:3000/realisations - Page Réalisations
- http://localhost:3000/contact - Page Contact
- http://localhost:3001/admin - Admin Payload CMS

---

## 🔄 Workflow quotidien

```bash
# Matin - Démarrer tout
docker-compose up -d
npm run dev                 # Terminal 1
npm run dev:payload         # Terminal 2

# Soir - Tout arrêter
# Ctrl+C dans les 2 terminaux
docker-compose down
```

---

## 💾 Sauvegarder les données

Les données MongoDB sont persistées dans un volume Docker nommé `proterra-data`.

Pour sauvegarder :
```bash
# Exporter la base de données
docker exec proterra-mongodb mongodump -u proterra_admin -p ProterraSecure2024! --authenticationDatabase admin --db proterra --out /tmp/backup

# Copier la sauvegarde
docker cp proterra-mongodb:/tmp/backup ./backup-$(date +%Y%m%d)
```

Pour restaurer :
```bash
# Copier la sauvegarde dans le conteneur
docker cp ./backup-YYYYMMDD proterra-mongodb:/tmp/restore

# Restaurer
docker exec proterra-mongodb mongorestore -u proterra_admin -p ProterraSecure2024! --authenticationDatabase admin --db proterra /tmp/restore/proterra
```

---

**🎉 Vous êtes prêt ! Bon développement !**
