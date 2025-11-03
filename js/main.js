// Script principal
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation après chargement des sections
    document.addEventListener('sectionLoaded', function(e) {
        initSection(e.detail.element);
    });
    
    // Initialisation des sections déjà chargées
    document.querySelectorAll('section, header, footer').forEach(initSection);
});

function initSection(section) {
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (header && window.scrollY > 100) {
            header.classList.add('nav-scrolled');
        } else if (header) {
            header.classList.remove('nav-scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}