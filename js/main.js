document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    const burger = document.querySelector('.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu', 'hidden', 'fixed', 'inset-0', 'bg-white', 'z-40', 'p-6', 'flex', 'flex-col', 'items-center', 'justify-center');
    document.body.appendChild(mobileMenu);
    
    // Ajouter les liens au menu mobile
    const navLinks = document.querySelector('.nav-links');
    const menuLinks = document.querySelectorAll('.nav-links a');
    
    menuLinks.forEach(link => {
        const newLink = link.cloneNode(true);
        newLink.classList.add('block', 'py-3', 'text-xl');
        mobileMenu.appendChild(newLink);
        
        // Fermer le menu quand un lien est cliqué
        newLink.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Ajouter un bouton de fermeture
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.classList.add('absolute', 'top-5', 'right-5', 'text-3xl', 'font-bold');
    mobileMenu.prepend(closeBtn);
    
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
    
    // Toggle du menu mobile
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Animation du formulaire de contact
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation de soumission (à remplacer par l'envoi réel du formulaire)
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simuler une requête AJAX
            setTimeout(() => {
                submitBtn.innerText = 'Envoyé !';
                submitBtn.classList.add('bg-green-600');
                
                // Reset du formulaire
                form.reset();
                
                // Réinitialiser le bouton après un délai
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.classList.remove('bg-green-600');
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    // Éléments à animer
    const elementsToAnimate = document.querySelectorAll('.skill-card, .project-card, .hero-content, .hero-image');
    elementsToAnimate.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Effet de typage pour le texte de la section héro
    const typingEffect = () => {
        const text = "Je développe des solutions web innovantes.";
        const typingElement = document.querySelector('.hero-content h2');
    };
});