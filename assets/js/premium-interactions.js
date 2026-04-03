/**
 * Premium Interactions
 * Floating Header & Hero Scroll Behavior
 */

(function() {
    'use strict';

    // ===================================
    // Floating Header Scroll Behavior
    // ===================================
    const floatingHeader = document.querySelector('.floating-header');
    const premiumHero = document.querySelector('.premium-hero');
    
    if (floatingHeader) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            // Add 'scrolled' class when user scrolls down
            if (scrollY > 50) {
                floatingHeader.classList.add('scrolled');
            } else {
                floatingHeader.classList.remove('scrolled');
            }
            
            // Add scrolled class to hero for image animation
            if (premiumHero) {
                if (scrollY > 100) {
                    premiumHero.classList.add('scrolled');
                } else {
                    premiumHero.classList.remove('scrolled');
                }
            }
            
            lastScrollY = scrollY;
        }, { passive: true });
    }

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    
    if (mobileMenuToggle && mobileNavOverlay && mobileNavMenu) {
        function toggleMobileMenu() {
            const isActive = mobileNavMenu.classList.contains('active');
            
            if (isActive) {
                // Close menu
                mobileMenuToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                mobileNavMenu.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                // Open menu
                mobileMenuToggle.classList.add('active');
                mobileNavOverlay.classList.add('active');
                mobileNavMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        mobileNavOverlay.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking on a link
        const mobileNavLinks = mobileNavMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(toggleMobileMenu, 150);
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNavMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    }

    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Mobile Menu Toggle Animation
    // ===================================
    if (mobileMenuToggle) {
        const spans = mobileMenuToggle.querySelectorAll('span');
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    // ===================================
    // Performance: Reduce Motion Preference
    // ===================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable scroll animations if user prefers reduced motion
        document.documentElement.style.scrollBehavior = 'auto';
    }

})();
