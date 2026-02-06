# 🎯 Site Landing Page : Assurance de Prêt Immobilier

**URL du site** : https://assurance-emprunteur.fg-strategies.fr/

Site de génération de leads pour l'optimisation d'assurance de prêt immobilier - FG STRATEGIES

---

## 📊 **STATUT DU PROJET**

✅ **Site en ligne et opérationnel**  
✅ **HTTPS activé** (certificat SSL Let's Encrypt)  
✅ **Formulaire fonctionnel**  
✅ **Automatisation Power Automate active**  
✅ **Tracking Google Ads installé**  
✅ **Design optimisé pour la conversion**

**Dernière mise à jour** : 06/02/2026

---

## 🌐 **INFORMATIONS TECHNIQUES**

### **Hébergement**
- **Plateforme** : GitHub Pages
- **Repository** : https://github.com/francoisgabrielscwob-max/assurance-emprunteur
- **Domaine** : assurance-emprunteur.fg-strategies.fr
- **DNS** : Configuré via OVH (CNAME vers francoisgabrielscwob-max.github.io)

### **Structure du site**
```
├── index.html                      # Page principale
├── thank-you.html                  # Page de remerciement
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # Politique de confidentialité
├── robots.txt                      # Configuration SEO
├── sitemap.xml                     # Plan du site
├── css/
│   └── style.css                   # Styles CSS
├── js/
│   └── script.js                   # JavaScript (formulaire + tracking)
└── README.md                       # Ce fichier
```

---

## 🎨 **DESIGN ET STRUCTURE DE CONVERSION**

### **Ordre des sections** (optimisé pour la conversion) :
1. **Hero** → Accroche avec animation bounce
2. **Bloc guide** → Valeur (Ce que vous allez découvrir)
3. **Éligibilité** → Qualification (✅ C'est utile si / ❌ Ce n'est pas adapté si)
4. **Compteur temps** → Cadrage (10 minutes de lecture)
5. **Formulaire** → Action (Capture de lead)
6. **Badge FOMO** → Social proof (247 guides reçus)
7. **Transition** → Une démarche précise qui ne peut s'improviser
8. **Bloc administratif** → Rassurance
9. **Trust section** → Qui sommes-nous
10. **Contact discret** → Mailto avec message pré-rempli
11. **CTA final** → Dernier appel à l'action
12. **Footer** → Mentions légales

### **Palette de couleurs harmonisée** :
- Dégradés doux alternant : crème (#faf8f5), blanc (#ffffff), gris léger (#f8f9fa)
- Couleur principale : Bleu nuit (#1a1a2e)
- Couleur accent : Or (#c9a161)

---

## 📝 **FORMULAIRE DE CONTACT**

### **Champs** :
- Prénom (requis)
- Email (requis, validation format)
- Téléphone (requis, validation format français)
- ☑️ Je confirme être actuellement assuré via l'assurance groupe de ma banque
- ☑️ Consentement RGPD

### **Validation** :
- Validation en temps réel
- Messages d'erreur en français
- Formatage automatique du téléphone

### **Soumission** :
1. Envoi des données à Power Automate (webhook)
2. Redirection vers `thank-you.html`
3. Envoi de la conversion Google Ads

---

## ⚡ **AUTOMATISATION POWER AUTOMATE**

### **Flux** : Lead Assurance Emprunteur - FG Strategies

**Webhook URL** : 
```
https://default95e2642c307a49d8b4811b70a66b7f.58.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9bd265c809c3430cb410f971fedf3bd4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LY73l4rKj4srmmhXWIJnMGgo2NRzzGn8QFdN6iWvFcA
```

### **Processus** :
1. **Déclencheur** : Webhook HTTP (réception des données du formulaire)
2. **Action 1** : Ajout d'une ligne dans Excel OneDrive
3. **Action 2** : Envoi d'un email Outlook à contact@fg-strategies.com

### **Excel OneDrive** : `Leads-Assurance-Emprunteur.xlsx`

**Tableau** : `TableauLeads` (14 colonnes)

| Colonne | Description |
|---------|-------------|
| ID | UUID généré automatiquement |
| Date | Date/heure de la soumission |
| Prénom | Prénom du prospect |
| Email | Email du prospect |
| Téléphone | Téléphone du prospect |
| Assurance Groupe | Oui/Non |
| Consentement | Oui/Non |
| UTM Source | Source de la campagne (ex: google, facebook) |
| UTM Campaign | Nom de la campagne |
| UTM AdGroup | Groupe d'annonces |
| UTM Term | Mot-clé |
| UTM Content | Contenu de l'annonce |
| GCLID | Google Click ID |
| URL Page | URL de la page de provenance |

---

## 📊 **TRACKING GOOGLE ADS**

### **Compte Google Ads** :
- **ID** : `AW-16583907507`

### **Conversion** : Lead - Téléchargement Guide Assurance Prêt
- **ID complet** : `AW-16583907507/SQsWCIyW3vMbELOx6eM9`
- **Catégorie** : Génération de prospects
- **Comptage** : Une conversion par personne
- **Fenêtre de conversion** : 90 jours après clic
- **Emplacement** : Code installé sur `thank-you.html`

### **Balise globale** :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0MWEKGD5J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  // Google Analytics GA4
  gtag('config', 'G-Q0MWEKGD5J');
  
  // Google Ads
  gtag('config', 'AW-16583907507');
</script>
```

**Installée sur** :
- `index.html` (balise globale)
- `thank-you.html` (balise globale + événement de conversion)

---

## 📈 **TRACKING GOOGLE ANALYTICS GA4**

### **Propriété GA4** : Assurance Emprunteur - FG Strategies
- **ID de mesure** : `G-Q0MWEKGD5J`
- **ID de flux** : `13544760791`
- **URL** : https://analytics.google.com/

### **Événements trackés automatiquement** :
- ✅ Pages vues
- ✅ Sessions
- ✅ Engagement
- ✅ Conversions (generate_lead)
- ✅ Clics sortants
- ✅ Défilements de page

---

## 🎯 **FONCTIONNALITÉS PRINCIPALES**

✅ **Capture de leads qualifiés**  
✅ **Enregistrement automatique dans Excel**  
✅ **Notification email instantanée**  
✅ **Tracking des campagnes publicitaires (UTM)**  
✅ **Conversion Google Ads**  
✅ **Google Analytics GA4**  
✅ **Design responsive**  
✅ **SEO optimisé**  
✅ **RGPD compliant**

---

## 🔜 **FONCTIONNALITÉS À VENIR**

- [ ] Envoi automatique du PDF guide par email
- [ ] Favicon personnalisé
- [ ] Image Open Graph (partage réseaux sociaux)
- [ ] A/B Testing des titres

---

## 📧 **CONTACTS**

**Email** : contact@fg-strategies.com  
**Téléphone** : 07 64 09 10 23  
**Adresse** : 385 Rue Alfred Nobel, 34000 Montpellier

---

## 🚀 **DÉPLOIEMENT**

### **Pour mettre à jour le site** :

1. Modifier les fichiers sur GitHub
2. Commit et push
3. GitHub Pages redéploie automatiquement (2-5 minutes)
4. Vérifier sur https://assurance-emprunteur.fg-strategies.fr/

### **Pour tester localement** :

```bash
# Cloner le repo
git clone https://github.com/francoisgabrielscwob-max/assurance-emprunteur.git

# Ouvrir index.html dans un navigateur
# (Attention : le webhook Power Automate ne fonctionnera qu'en production)
```

---

## 📝 **NOTES IMPORTANTES**

⚠️ **Ne jamais modifier** :
- L'URL du webhook Power Automate (dans `js/script.js`)
- L'ID de conversion Google Ads (dans `thank-you.html`)
- La structure du fichier Excel (les colonnes)

✅ **Peut être modifié librement** :
- Textes et contenus
- Design et couleurs (CSS)
- Structure des sections (HTML)
- Formulaire (ajouter/retirer des champs - adapter le JS et Excel)

---

## 🔐 **SÉCURITÉ**

✅ HTTPS activé (certificat SSL)  
✅ Headers de sécurité configurés  
✅ Validation côté client (JavaScript)  
✅ Protection RGPD  
✅ Pas de données sensibles stockées côté client

---

## 📈 **MÉTRIQUES À SUIVRE**

1. **Taux de conversion** : Visiteurs → Leads
2. **Coût par lead** : Budget Google Ads / Nombre de leads
3. **Taux de rebond** : À analyser avec GA4
4. **Temps sur la page** : À analyser avec GA4
5. **Source des leads** : UTM parameters dans Excel

---

## 🆘 **SUPPORT**

En cas de problème :
1. Vérifier les logs de la Console (F12)
2. Vérifier l'historique des runs Power Automate
3. Vérifier les conversions dans Google Ads
4. Contacter le support technique

---

**Projet créé avec ❤️ par FG STRATEGIES - 2026**
