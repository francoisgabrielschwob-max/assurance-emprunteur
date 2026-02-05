# 🎯 FG STRATEGIES - Landing Page Assurance de Prêt
**Guide gratuit pour optimiser votre assurance de prêt immobilier**

---

## 📋 Vue d'ensemble du projet

Landing page professionnelle pour **FG STRATEGIES**, conçue pour capturer des leads qualifiés intéressés par l'optimisation de leur assurance de prêt immobilier.

### 🎨 Design
- **Identité visuelle premium** : Or (#c9a161, #d4af37) + Bleu-noir (#1a1a2e)
- **Typographie** : Playfair Display (titres) + Inter (corps)
- **100% Responsive** : Mobile, tablette, desktop
- **Animations fluides** : Micro-interactions professionnelles

### ⚡ Fonctionnalités
- ✅ Formulaire de capture avec validation en temps réel
- ✅ Badge FOMO dynamique (compteur de guides reçus)
- ✅ Envoi automatique vers **Power Automate** (sans Zapier)
- ✅ Tracking **Google Ads** + **Google Analytics**
- ✅ Page de remerciement
- ✅ Mentions légales + Politique de confidentialité RGPD

---

## 🏗️ Architecture technique

### Flux de données :

```
Visiteur remplit le formulaire
         ↓
JavaScript (js/script.js) capture les données + UTM
         ↓
POST JSON vers Power Automate Webhook
         ↓
    ┌────┴────┐
    ↓         ↓
Excel    Email Outlook
OneDrive  (contact@fg-strategies.com)
         ↓
Conversion Google Ads + Redirection thank-you.html
```

### Technologies utilisées :
- **Frontend** : HTML5, CSS3, JavaScript ES6
- **Automation** : Power Automate (Microsoft 365)
- **Stockage** : Excel Online (OneDrive)
- **Email** : Outlook Office 365
- **Tracking** : Google Ads, Google Analytics
- **Hébergement** : Netlify (gratuit)
- **Versioning** : Git + GitHub

---

## 📂 Structure du projet

```
fg-strategies-assurance-pret/
│
├── index.html                      # Landing page principale
├── thank-you.html                  # Page de remerciement
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # Politique RGPD
├── robots.txt                      # Directives pour les robots
├── sitemap.xml                     # Plan du site pour SEO
│
├── css/
│   └── style.css                   # Styles premium
│
├── js/
│   └── script.js                   # Validation + envoi Power Automate
│
├── GUIDE_MAITRE.md                 # 🌟 Guide complet étape par étape
├── EXCEL_TEMPLATE.md               # Guide création Excel OneDrive
├── POWER_AUTOMATE_SETUP.md         # Guide configuration Power Automate
├── GITHUB_DEPLOY.md                # Guide déploiement GitHub + Netlify
├── OVH_DOMAIN_CONFIG.md            # Guide configuration domaine OVH
├── DESIGN_TEMPLATE.md              # Template design pour nouvelles pages
├── OPTIMISATION_SEO_SEA.md         # Optimisations SEO/SEA
└── README.md                       # Ce fichier
```

---

## 🚀 Déploiement - Quick Start

### 1️⃣ Préparation (Power Automate + Excel)

```bash
# Consulter les guides dans cet ordre :
1. EXCEL_TEMPLATE.md         # Créer le fichier Excel OneDrive
2. POWER_AUTOMATE_SETUP.md   # Configurer le flux automation
```

### 2️⃣ Configuration du site

Modifiez ces fichiers :

**`js/script.js`** (ligne 6) :
```javascript
const POWER_AUTOMATE_WEBHOOK_URL = 'VOTRE_URL_WEBHOOK_ICI';
```

**`js/script.js`** (ligne 200) :
```javascript
'send_to': 'AW-XXXXXXXXX/YYYYYYYYY'  // Votre ID conversion Google Ads
```

**`index.html`** (ligne 22) :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 3️⃣ Déployer sur GitHub + Netlify

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit - Landing Page FG STRATEGIES"
git branch -M main

# Connecter à GitHub (remplacez VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/fg-strategies-assurance-pret.git
git push -u origin main

# Puis connecter GitHub à Netlify (interface web)
# Guide complet : GITHUB_DEPLOY.md
```

### 4️⃣ Configurer le domaine OVH

```bash
# Suivre le guide : OVH_DOMAIN_CONFIG.md
# Ajouter un CNAME pointant vers Netlify
# Activer HTTPS (certificat SSL automatique)
```

### 5️⃣ Mettre à jour les URLs

Une fois le domaine configuré, mettez à jour :
- `sitemap.xml` (toutes les URLs)
- `index.html` (canonical, og:url)
- `robots.txt` (sitemap URL)

```bash
git add .
git commit -m "Update final domain URLs"
git push
```

---

## ✅ Fonctionnalités actuelles

### 🎨 Design et UX
- [x] Hero premium avec gradient et animations
- [x] Lead magnet (Guide Box) avec bullets condensés
- [x] Badge FOMO animé au-dessus du formulaire
- [x] Section "Qui sommes-nous" (FG STRATEGIES 360°)
- [x] Section "À qui c'est utile / pas adapté"
- [x] Footer avec liens légaux
- [x] Responsive 100% (mobile-first)

### ⚙️ Fonctionnalités techniques
- [x] Formulaire avec validation en temps réel
- [x] Envoi vers Power Automate (webhook)
- [x] Capture UTM parameters (Google Ads)
- [x] Stockage automatique dans Excel OneDrive
- [x] Email automatique via Outlook
- [x] Tracking conversion Google Ads
- [x] Event GA4 (generate_lead)
- [x] Redirection vers page de remerciement
- [x] Page thank-you.html stylée
- [x] Mentions légales complètes
- [x] Politique de confidentialité RGPD

### 📊 SEO et tracking
- [x] Meta tags optimisés (title, description)
- [x] Open Graph (Facebook, LinkedIn)
- [x] Twitter Cards
- [x] Schema.org (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Google Analytics 4 ready
- [x] Google Tag Manager ready
- [x] Facebook Pixel ready

---

## 🔧 Configuration requise

### Avant le déploiement :

**⚠️ À remplacer absolument :**
- [ ] URL webhook Power Automate (`js/script.js` ligne 6)
- [ ] ID conversion Google Ads (`js/script.js` ligne 200)
- [ ] ID Google Analytics (`index.html` ligne 22)
- [ ] ID Google Tag Manager (`index.html` ligne 30 - optionnel)
- [ ] URLs finales dans `sitemap.xml`, `index.html`, `robots.txt`

### Services à configurer :
- [ ] Compte **Microsoft 365** (Power Automate, OneDrive, Outlook)
- [ ] Fichier **Excel OneDrive** : `Leads-Assurance-Pret.xlsx`
- [ ] Flux **Power Automate** (webhook → Excel + Email)
- [ ] Compte **Google Ads** avec conversion configurée
- [ ] Compte **Google Analytics** (GA4)
- [ ] Compte **GitHub** (pour versioning)
- [ ] Compte **Netlify** (hébergement gratuit)
- [ ] Domaine ou sous-domaine **OVH**

---

## 📊 Données collectées

### Formulaire :
- Prénom
- Email
- Téléphone
- Assurance groupe bancaire (checkbox)
- Consentement RGPD (checkbox)

### Tracking automatique :
- Date et heure de soumission
- URL de la page
- Titre de la page
- utm_source (ex: Google, Facebook)
- utm_campaign (nom de la campagne)
- utm_adgroup (groupe d'annonces)
- utm_term (mot-clé)
- utm_content (variante de l'annonce)
- gclid (Google Click ID)

**Total : 14 colonnes dans Excel**

---

## 🎓 Documentation complète

Pour un déploiement guidé, suivez le **GUIDE_MAITRE.md** qui vous accompagne étape par étape :

| Guide | Description |
|-------|-------------|
| 🌟 **GUIDE_MAITRE.md** | Guide complet avec toutes les étapes dans l'ordre |
| **EXCEL_TEMPLATE.md** | Créer le fichier Excel avec les bonnes colonnes |
| **POWER_AUTOMATE_SETUP.md** | Configurer le flux Power Automate (webhook, Excel, email) |
| **GITHUB_DEPLOY.md** | Déployer sur GitHub et Netlify |
| **OVH_DOMAIN_CONFIG.md** | Configurer le domaine OVH avec Netlify |
| **DESIGN_TEMPLATE.md** | Template de design pour créer d'autres pages |
| **OPTIMISATION_SEO_SEA.md** | Optimisations SEO/SEA complètes |

---

## 🚧 Prochaines étapes suggérées

### Après le lancement :
1. **Automatiser l'envoi du PDF**
   - Héberger le guide PDF sur OneDrive
   - Ajouter une action Power Automate pour l'envoyer au prospect

2. **Séquence de nurturing**
   - Email J+1 : "Avez-vous lu le guide ?"
   - Email J+3 : "Témoignage client"
   - Email J+7 : "Offre d'accompagnement"

3. **A/B Testing**
   - Tester différents titres
   - Tester différentes couleurs de CTA
   - Tester avec/sans badge FOMO

4. **Optimisation continue**
   - Analyser les données Excel
   - Optimiser les campagnes Google Ads
   - Améliorer le taux de conversion

---

## 📞 Informations FG STRATEGIES

- **Adresse** : 385 Rue Alfred Nobel, 34000 Montpellier
- **SIRET** : 809 971 930 00023
- **Téléphone** : 07 64 09 10 23
- **Email** : contact@fg-strategies.com
- **Site web** : https://www.fg-strategies.com
- **ORIAS** : 150 022 59
- **Assurance RC Pro** : AIG EUROPE SA (Police RD01690548U)

---

## 📝 Licence et usage

Ce projet est développé pour **FG STRATEGIES**.

Tous les contenus, designs et codes sont la propriété de FG STRATEGIES.

---

## 🎉 Bon lancement !

Pour toute question, consultez d'abord le **GUIDE_MAITRE.md** qui contient toutes les réponses !

**Développé avec ❤️ par GenSpark AI**
