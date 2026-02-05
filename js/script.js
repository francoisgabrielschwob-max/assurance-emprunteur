// =============================================
// CONFIGURATION POWER AUTOMATE
// =============================================

// ⚠️ URL DU WEBHOOK POWER AUTOMATE - À REMPLACER APRÈS CRÉATION DU FLUX
const POWER_AUTOMATE_WEBHOOK_URL = 'https://prod-XX.westeurope.logic.azure.com:443/workflows/XXXXXXXX/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XXXXXXXXXXXXXXXX';

// =============================================
// CAPTURE DES PARAMÈTRES UTM (Google Ads)
// =============================================

function getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        utm_source: urlParams.get('utm_source') || 'Direct',
        utm_campaign: urlParams.get('utm_campaign') || 'Aucune',
        utm_adgroup: urlParams.get('utm_adgroup') || 'Aucun',
        utm_term: urlParams.get('utm_term') || 'Aucun',
        utm_content: urlParams.get('utm_content') || 'Aucun',
        gclid: urlParams.get('gclid') || ''
    };
}

// =============================================
// INITIALISATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');
    
    // Capturer les paramètres UTM au chargement
    const utmParams = getUTMParameters();
    console.log('✅ Paramètres UTM capturés:', utmParams);
    
    // FOMO Counter Animation
    animateFomoCounter();
    setInterval(animateFomoCounter, 30000);
    
    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('a[href="#form"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const formSection = document.getElementById('form');
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous errors
        clearErrors();
        
        // Get form values
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const telephone = document.getElementById('telephone').value.trim();
        const assuranceGroupe = document.getElementById('assurance-groupe').checked;
        const consent = document.getElementById('consent').checked;
        
        let isValid = true;
        
        // Validate prénom
        if (prenom === '') {
            showError('prenom', 'Veuillez saisir votre prénom');
            isValid = false;
        } else if (prenom.length < 2) {
            showError('prenom', 'Le prénom doit contenir au moins 2 caractères');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('email', 'Veuillez saisir votre email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Veuillez saisir une adresse email valide');
            isValid = false;
        }
        
        // Validate telephone
        if (telephone === '') {
            showError('telephone', 'Veuillez saisir votre numéro de téléphone');
            isValid = false;
        } else if (!isValidPhone(telephone)) {
            showError('telephone', 'Veuillez saisir un numéro de téléphone valide (format français)');
            isValid = false;
        }
        
        // Validate assurance-groupe checkbox
        if (!assuranceGroupe) {
            showError('assurance-groupe', 'Veuillez confirmer que vous êtes assuré via l\'assurance groupe de votre banque');
            isValid = false;
        }
        
        // Validate consent checkbox
        if (!consent) {
            showError('consent', 'Veuillez accepter d\'être contacté(e) pour recevoir le guide');
            isValid = false;
        }
        
        // If form is valid, submit
        if (isValid) {
            submitForm({
                prenom,
                email,
                telephone,
                assuranceGroupe,
                consent
            });
        }
    });
    
    // Real-time validation on blur
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
    
    // Checkbox validation on change
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (!this.checked && this.parentElement.parentElement.querySelector('.error-message.show')) {
                hideError(this.id);
            }
        });
    });
});

// =============================================
// SOUMISSION DU FORMULAIRE VERS POWER AUTOMATE
// =============================================

async function submitForm(data) {
    const form = document.getElementById('leadForm');
    const submitButton = form.querySelector('.btn-submit');
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';
    
    // Récupérer les paramètres UTM
    const utmParams = getUTMParameters();
    
    // Préparer les données enrichies pour Power Automate
    const leadData = {
        prenom: data.prenom,
        email: data.email,
        telephone: data.telephone,
        assurance_groupe: data.assuranceGroupe ? 'Oui' : 'Non',
        consentement: data.consent ? 'Oui' : 'Non',
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
        utm_adgroup: utmParams.utm_adgroup,
        utm_term: utmParams.utm_term,
        utm_content: utmParams.utm_content,
        gclid: utmParams.gclid,
        source: 'Landing Page Assurance Prêt',
        date: new Date().toLocaleString('fr-FR', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit' 
        }),
        url: window.location.href,
        page_title: document.title
    };
    
    console.log('📤 Envoi du lead vers Power Automate:', leadData);
    
    try {
        // Envoyer les données à Power Automate
        const response = await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadData)
        });
        
        if (response.ok || response.status === 202) {
            console.log('✅ Lead envoyé avec succès à Power Automate');
            
            // ✅ GOOGLE ADS CONVERSION TRACKING
            if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-16583907507/XXXXXXXX',  // ⚠️ À REMPLACER PAR VOTRE ID
                    'value': 1.0,
                    'currency': 'EUR'
                });
                console.log('✅ Conversion Google Ads envoyée');
            }
            
            // ✅ FACEBOOK PIXEL TRACKING (si activé)
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: 'Guide Assurance Prêt',
                    content_category: 'Lead Magnet',
                    value: 1.00,
                    currency: 'EUR'
                });
                console.log('✅ Facebook Pixel Lead envoyé');
            }
            
            // ✅ GOOGLE ANALYTICS EVENT (si GA4 activé)
            if (typeof gtag === 'function') {
                gtag('event', 'generate_lead', {
                    'event_category': 'Lead',
                    'event_label': 'Guide Assurance Prêt',
                    'value': 1
                });
                console.log('✅ Événement generate_lead (GA4) envoyé');
            }
            
            // Redirection vers la page de remerciement
            console.log('🔄 Redirection vers thank-you.html');
            window.location.href = 'thank-you.html';
            
        } else {
            console.error('❌ Erreur Power Automate - Status:', response.status);
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
    } catch (error) {
        console.error('❌ Erreur lors de l\'envoi:', error);
        submitButton.disabled = false;
        submitButton.textContent = 'Recevoir votre guide offert';
        alert('Une erreur s\'est produite lors de l\'envoi.\n\nVeuillez réessayer ou nous contacter directement :\n📞 07 64 09 10 23\n✉️ contact@fg-strategies.com');
    }
}

// =============================================
// FOMO COUNTER
// =============================================

function animateFomoCounter() {
    const counterElement = document.getElementById('fomoCounter');
    if (!counterElement) return;
    
    const baseNumber = 247;
    const variation = Math.floor(Math.random() * 11) - 5;
    const targetNumber = baseNumber + variation;
    
    const currentNumber = parseInt(counterElement.textContent);
    const duration = 1000;
    const steps = 30;
    const increment = (targetNumber - currentNumber) / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
        currentStep++;
        const newNumber = Math.round(currentNumber + (increment * currentStep));
        counterElement.textContent = newNumber;
        
        if (currentStep >= steps) {
            clearInterval(timer);
            counterElement.textContent = targetNumber;
        }
    }, duration / steps);
}

// =============================================
// VALIDATION DES CHAMPS
// =============================================

function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.id;
    
    hideError(fieldName);
    
    if (fieldName === 'prenom') {
        if (value === '') {
            showError(fieldName, 'Veuillez saisir votre prénom');
        } else if (value.length < 2) {
            showError(fieldName, 'Le prénom doit contenir au moins 2 caractères');
        }
    } else if (fieldName === 'email') {
        if (value === '') {
            showError(fieldName, 'Veuillez saisir votre email');
        } else if (!isValidEmail(value)) {
            showError(fieldName, 'Veuillez saisir une adresse email valide');
        }
    } else if (fieldName === 'telephone') {
        if (value === '') {
            showError(fieldName, 'Veuillez saisir votre numéro de téléphone');
        } else if (!isValidPhone(value)) {
            showError(fieldName, 'Veuillez saisir un numéro de téléphone valide');
        }
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const cleanPhone = phone.replace(/[\s.\-]/g, '');
    const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/;
    return phoneRegex.test(cleanPhone);
}

function showError(fieldName, message) {
    const input = document.getElementById(fieldName);
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function hideError(fieldName) {
    const input = document.getElementById(fieldName);
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorInputs = document.querySelectorAll('.error');
    
    errorMessages.forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    
    errorInputs.forEach(input => {
        input.classList.remove('error');
    });
}

// =============================================
// FORMAT TÉLÉPHONE (ESPACEMENT AUTOMATIQUE)
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('telephone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            
            if (value.length > 0) {
                let formatted = value.match(/.{1,2}/g)?.join(' ') || value;
                if (formatted.length <= 14) {
                    e.target.value = formatted;
                }
            }
        });
    }
});
