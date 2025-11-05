# Proterra Environnement - Site Web Moderne

Site web professionnel pour **Proterra Environnement**, expert en étanchéité par géosynthétiques. Site moderne, responsive, optimisé SEO et entièrement configurable.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Configuration](#configuration)
- [Personnalisation](#personnalisation)
- [SEO](#seo)
- [Performance](#performance)
- [Accessibilité](#accessibilité)
- [Navigateurs supportés](#navigateurs-supportés)
- [Déploiement](#déploiement)

---

## 🌟 Aperçu

Site web moderne et professionnel développé selon les meilleures pratiques web actuelles :

- ✅ **Design moderne** : Interface épurée et professionnelle
- ✅ **100% Responsive** : Optimisé mobile, tablette et desktop
- ✅ **Performance optimale** : Temps de chargement rapide
- ✅ **SEO avancé** : Optimisé pour Google et les moteurs de recherche
- ✅ **Accessible** : Conforme WCAG 2.1
- ✅ **Configurable** : Personnalisation facile via fichiers JSON
- ✅ **Dark mode** : Support du mode sombre
- ✅ **Animations fluides** : Scroll reveal et transitions modernes

---

## ✨ Fonctionnalités

### 🎨 Design & UX

- Design system complet avec variables CSS
- Palette de couleurs professionnelle (vert environnement)
- Typographie moderne (Inter + Poppins)
- Composants réutilisables (boutons, cartes, formulaires)
- Animations et transitions fluides
- Mode sombre automatique ou manuel

### 📱 Responsive

- Mobile-first approach
- Breakpoints adaptés : 320px, 768px, 1024px, 1280px, 1920px
- Navigation mobile avec menu hamburger
- Images et vidéos responsives
- Grilles CSS adaptatives

### 🔍 SEO

- Métadonnées complètes (title, description, keywords)
- Open Graph pour réseaux sociaux
- Schema.org (Organisation, Services)
- Sitemap.xml généré
- Robots.txt configuré
- URLs canoniques
- Structure sémantique HTML5

### ⚡ Performance

- CSS optimisé et modulaire
- JavaScript vanilla (pas de framework lourd)
- Lazy loading des images
- Minification possible
- Cache browser optimisé
- Core Web Vitals optimisés

### ♿ Accessibilité

- HTML sémantique
- ARIA labels
- Navigation clavier
- Skip to content
- Contraste optimal
- Focus visible
- Lecteurs d'écran compatibles

---

## 📁 Structure du projet

```
proterra-environnement/
├── index.html                 # Page d'accueil
├── services.html             # Page services
├── realisations.html         # Page réalisations
├── about.html                # Page à propos
├── contact.html              # Page contact
├── sitemap.xml               # Plan du site (SEO)
├── robots.txt                # Directives robots (SEO)
├── README.md                 # Documentation
├── .gitignore               # Fichiers à ignorer
│
├── config/                   # Configuration
│   ├── site.config.json     # Config générale du site
│   └── content.config.json  # Contenu des pages
│
└── src/                      # Sources
    ├── css/                  # Styles
    │   ├── variables.css    # Variables CSS (couleurs, fonts, spacing)
    │   ├── reset.css        # Reset CSS moderne
    │   ├── components.css   # Composants réutilisables
    │   ├── layout.css       # Layout (header, footer, hero)
    │   └── main.css         # Import principal + animations
    │
    ├── js/                   # Scripts
    │   └── main.js          # JavaScript principal
    │
    └── images/               # Assets images
        └── (vos images)
```

---

## 🚀 Installation

### Prérequis

- Navigateur web moderne
- Éditeur de code (VS Code recommandé)
- Serveur web local (optionnel) : Live Server, Python SimpleHTTPServer, etc.

### Étapes

1. **Cloner ou télécharger le projet**

```bash
git clone https://github.com/votre-repo/proterra-environnement.git
cd proterra-environnement
```

2. **Ouvrir dans un navigateur**

Option 1 : Double-cliquer sur `index.html`

Option 2 : Utiliser un serveur local (recommandé)

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (npx http-server)
npx http-server

# Avec VS Code Live Server
# Installer l'extension "Live Server" et cliquer sur "Go Live"
```

3. **Accéder au site**

Ouvrir `http://localhost:8000` dans votre navigateur

---

## ⚙️ Configuration

### Configuration générale

Fichier : `config/site.config.json`

```json
{
  "site": {
    "name": "Proterra Environnement",
    "url": "https://www.proterra-environnement.com",
    "logo": "/src/images/logo.svg"
  },
  "theme": {
    "colors": {
      "primary": "#2C5F2D",
      "secondary": "#0066CC"
    }
  }
}
```

### Configuration du contenu

Fichier : `config/content.config.json`

Modifiez le contenu de toutes les pages :
- Textes du hero
- Services
- Témoignages
- Coordonnées
- Footer

### Personnaliser les couleurs

Fichier : `src/css/variables.css`

```css
:root {
  --color-primary: #2C5F2D;      /* Votre couleur principale */
  --color-secondary: #0066CC;    /* Votre couleur secondaire */
  --color-accent: #FF9800;       /* Votre couleur d'accent */
}
```

### Personnaliser les fonts

Dans `src/css/variables.css` :

```css
:root {
  --font-primary: 'Votre Font', sans-serif;
  --font-heading: 'Votre Font Heading', sans-serif;
}
```

N'oubliez pas d'ajouter l'import Google Fonts dans `src/css/main.css`.

---

## 🎨 Personnalisation

### Ajouter une nouvelle page

1. Créer un fichier HTML (ex: `nouvelle-page.html`)
2. Copier la structure depuis une page existante
3. Modifier le contenu
4. Ajouter le lien dans la navigation (`header`)
5. Ajouter l'URL dans `sitemap.xml`

### Modifier les images

1. Placer vos images dans `src/images/`
2. Optimiser les images (compression, format WebP)
3. Mettre à jour les chemins dans les pages HTML

### Ajouter un service

Dans `config/content.config.json`, section `services.details` :

```json
{
  "id": "nouveau-service",
  "title": "Nouveau Service",
  "description": "Description du service",
  "features": ["Feature 1", "Feature 2"]
}
```

### Modifier le formulaire de contact

Dans `contact.html`, ajoutez/modifiez les champs du formulaire.

Le JavaScript de validation est dans `src/js/main.js` (classe `FormValidator`).

---

## 🔍 SEO

### Métadonnées

Chaque page contient :
- `<title>` unique et descriptif
- `<meta name="description">` optimisée
- `<meta name="keywords">` pertinents
- Open Graph (Facebook, LinkedIn)
- Twitter Cards

### Schema.org

Données structurées JSON-LD incluses dans `index.html` :
- Organization
- LocalBusiness
- ContactPoint
- OfferCatalog

### Sitemap

`sitemap.xml` liste toutes les pages avec :
- URL
- Fréquence de mise à jour
- Priorité

Pour soumettre à Google :
- Google Search Console → Sitemaps → Ajouter `https://www.proterra-environnement.com/sitemap.xml`

### Robots.txt

`robots.txt` configure les règles d'indexation.

---

## ⚡ Performance

### Optimisations incluses

✅ CSS modulaire et optimisé
✅ JavaScript vanilla (pas de jQuery)
✅ Lazy loading des images
✅ Polices web optimisées (preconnect)
✅ Animations performantes (transform, opacity)
✅ Throttle/debounce sur les events

### Optimisations recommandées

1. **Minification**

```bash
# CSS
npx clean-css-cli src/css/main.css -o dist/css/main.min.css

# JavaScript
npx terser src/js/main.js -o dist/js/main.min.js -c -m
```

2. **Compression images**

Utilisez des outils comme :
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

3. **Format WebP**

Convertir les images JPG/PNG en WebP pour réduire le poids.

4. **CDN**

Héberger les assets sur un CDN (Cloudflare, AWS CloudFront).

---

## ♿ Accessibilité

### Conformité WCAG 2.1

- ✅ Niveau AA atteint
- ✅ Navigation clavier complète
- ✅ Lecteurs d'écran supportés
- ✅ Contraste suffisant (4.5:1)
- ✅ Textes alternatifs sur images
- ✅ ARIA labels sur éléments interactifs

### Tester l'accessibilité

Outils recommandés :
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🌐 Navigateurs supportés

| Navigateur | Version minimale |
|-----------|-----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

**Mobile** :
- iOS Safari 14+
- Chrome Android 90+
- Samsung Internet 14+

---

## 🚢 Déploiement

### Hébergement statique

Le site peut être hébergé sur :

1. **Netlify** (Recommandé)
   - Déploiement automatique depuis Git
   - HTTPS gratuit
   - Formulaires intégrés

2. **Vercel**
   - Déploiement rapide
   - Preview branches

3. **GitHub Pages**
   - Gratuit pour projets publics
   - Custom domain possible

4. **AWS S3 + CloudFront**
   - Scalable
   - Performance globale

### Configuration DNS

Après déploiement, configurer les DNS :

```
Type  | Nom  | Valeur
------|------|------------------
A     | @    | IP_du_serveur
CNAME | www  | votre-site.netlify.app
```

### HTTPS

Toujours activer HTTPS (inclus gratuitement sur Netlify, Vercel, GitHub Pages).

---

## 📝 Configuration du formulaire de contact

Le formulaire est actuellement en mode simulation. Pour le connecter à un backend :

### Option 1 : Netlify Forms

Dans `contact.html`, ajouter `data-netlify="true"` :

```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2 : FormSpree

1. Créer un compte sur [FormSpree](https://formspree.io/)
2. Obtenir l'endpoint
3. Dans `src/js/main.js`, modifier la méthode `submit()` :

```javascript
async submit() {
  const formData = new FormData(this.form);

  const response = await fetch('https://formspree.io/f/VOTRE_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    this.showSuccess('Message envoyé !');
  }
}
```

### Option 3 : API personnalisée

Créer votre propre endpoint et modifier `src/js/main.js`.

---

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne (Grid, Flexbox, Variables)
- **JavaScript ES6+** : Interactions (Classes, Async/Await)
- **Google Fonts** : Typographie (Inter, Poppins)
- **Schema.org** : Données structurées
- **Open Graph** : Réseaux sociaux

---

## 📊 Checklist de lancement

Avant de mettre en production :

- [ ] Remplacer toutes les images placeholder
- [ ] Vérifier tous les liens
- [ ] Tester le formulaire de contact
- [ ] Vérifier les métadonnées SEO
- [ ] Tester sur mobile
- [ ] Vérifier la performance (Lighthouse)
- [ ] Tester l'accessibilité
- [ ] Configurer Google Analytics (si souhaité)
- [ ] Soumettre sitemap à Google Search Console
- [ ] Configurer SSL/HTTPS
- [ ] Tester tous les navigateurs

---

## 📧 Support

Pour toute question :
- **Email** : proterra@proterra-environnement.com
- **Site** : https://www.proterra-environnement.com

---

## 📄 Licence

© 2024 Proterra Environnement. Tous droits réservés.

---

## 🙏 Crédits

- **Design & Développement** : Développé selon les meilleures pratiques web modernes
- **Fonts** : Google Fonts (Inter, Poppins)
- **Icons** : SVG personnalisés

---

**Fait avec ❤️ pour Proterra Environnement**
