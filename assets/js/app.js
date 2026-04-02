/* ===================================
   RADIANT COLLECTIVE CAPITAL
   Premium Interactions & Animations
   =================================== */

// Utility: Debounce
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Utility: Check if element is in viewport
function isInViewport(element, threshold = 0.2) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
        rect.top <= windowHeight * (1 - threshold) &&
        rect.bottom >= windowHeight * threshold
    );
}

/* ===================================
   DYNAMIC HEADER
   =================================== */
class DynamicHeader {
    constructor() {
        this.header = document.querySelector('.site-header');
        if (!this.header) return;
        
        this.lastScroll = 0;
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 50));
        this.handleScroll();
    }
    
    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        // Check section backgrounds
        this.updateHeaderMode();
        
        this.lastScroll = currentScroll;
    }
    
    updateHeaderMode() {
        const headerRect = this.header.getBoundingClientRect();
        const headerCenter = headerRect.top + headerRect.height / 2;
        
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= headerCenter && rect.bottom >= headerCenter) {
                const bgColor = window.getComputedStyle(section).backgroundColor;
                const rgb = bgColor.match(/\d+/g);
                
                if (rgb) {
                    const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
                    
                    if (brightness < 200) {
                        this.header.classList.add('dark-mode');
                    } else {
                        this.header.classList.remove('dark-mode');
                    }
                }
            }
        });
    }
}

/* ===================================
   MOBILE MENU
   =================================== */
class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.mobile-menu-toggle');
        this.menu = document.querySelector('.mobile-menu');
        
        if (!this.toggle || !this.menu) return;
        
        this.init();
    }
    
    init() {
        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        // Close on link click
        const links = this.menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        
        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.menu.classList.contains('active')) {
                this.close();
            }
        });
    }
    
    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.menu.classList.toggle('active');
        document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
    }
    
    close() {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ===================================
   SELECTIVE SCROLL REVEAL
   Only for hero and specific sections
   =================================== */
class ScrollReveal {
    constructor() {
        // Only target specific elements, not all
        this.elements = document.querySelectorAll('.reveal-on-scroll');
        if (this.elements.length === 0) return;
        
        this.init();
    }
    
    init() {
        this.checkElements();
        window.addEventListener('scroll', debounce(() => this.checkElements(), 100));
    }
    
    checkElements() {
        this.elements.forEach(el => {
            if (isInViewport(el, 0.15) && !el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }
}

/* ===================================
   SMOOTH SCROLL TO ANCHOR
   =================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            if (!target) return;
            
            e.preventDefault();
            
            const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/* ===================================
   FORM HANDLING
   =================================== */
class FormHandler {
    constructor() {
        this.initApplicationForm();
        this.initEmailForms();
        this.initContactForm();
        this.initAuthForms();
    }
    
    initApplicationForm() {
        const form = document.querySelector('#applicationForm');
        if (!form) return;
        
        // Conditional logic for investment experience
        const expRadios = form.querySelectorAll('input[name="investmentExperience"]');
        const typesGroup = form.querySelector('#investmentTypesGroup');
        const otherCheckbox = form.querySelector('input[value="other"]');
        const otherInput = form.querySelector('#otherInvestment');
        
        expRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (typesGroup) {
                    typesGroup.style.display = e.target.value === 'yes' ? 'block' : 'none';
                }
            });
        });
        
        if (otherCheckbox && otherInput) {
            otherCheckbox.addEventListener('change', (e) => {
                otherInput.style.display = e.target.checked ? 'block' : 'none';
            });
        }
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleApplicationSubmit(form);
        });
    }
    
    initEmailForms() {
        const emailForms = document.querySelectorAll('.email-form, .footer-newsletter form');
        emailForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleEmailSubmit(form);
            });
        });
    }
    
    initContactForm() {
        const form = document.querySelector('#contactForm');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit(form);
        });
    }
    
    initAuthForms() {
        const loginForm = document.querySelector('#loginForm');
        const signupForm = document.querySelector('#signupForm');
        
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLoginSubmit(loginForm);
            });
        }
        
        if (signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSignupSubmit(signupForm);
            });
        }
    }
    
    handleApplicationSubmit(form) {
        const formData = new FormData(form);
        console.log('Application submitted:', Object.fromEntries(formData));
        
        // TODO: Connect to backend API
        alert('Thank you for your application! We will review it and get back to you soon.');
        form.reset();
    }
    
    handleEmailSubmit(form) {
        const email = form.querySelector('input[type="email"]')?.value;
        console.log('Email submitted:', email);
        
        // TODO: Connect to email service
        alert('Thank you for subscribing!');
        form.reset();
    }
    
    handleContactSubmit(form) {
        const formData = new FormData(form);
        console.log('Contact form submitted:', Object.fromEntries(formData));
        
        // TODO: Connect to backend API
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }
    
    handleLoginSubmit(form) {
        const formData = new FormData(form);
        console.log('Login attempt:', Object.fromEntries(formData));
        
        // TODO: Connect to authentication system
        alert('Login functionality will be connected to your backend.');
    }
    
    handleSignupSubmit(form) {
        const formData = new FormData(form);
        const password = formData.get('password');
        const passwordConfirm = formData.get('passwordConfirm');
        
        if (password !== passwordConfirm) {
            alert('Passwords do not match!');
            return;
        }
        
        console.log('Signup attempt:', Object.fromEntries(formData));
        
        // TODO: Connect to authentication system
        alert('Sign up functionality will be connected to your backend.');
    }
}

/* ===================================
   ROLLING TEXT ANIMATION
   =================================== */
class RollingText {
    constructor() {
        this.container = document.querySelector('.rolling-text');
        if (!this.container) return;
        
        this.words = this.container.querySelectorAll('.rolling-word');
        this.currentIndex = 0;
        
        if (this.words.length === 0) return;
        
        this.init();
    }
    
    init() {
        setInterval(() => this.rotate(), 3000);
    }
    
    rotate() {
        const current = this.words[this.currentIndex];
        const next = this.words[(this.currentIndex + 1) % this.words.length];
        
        current.classList.remove('active');
        current.classList.add('exiting');
        
        setTimeout(() => {
            current.classList.remove('exiting');
            next.classList.add('active');
        }, 300);
        
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
    }
}

/* ===================================
   PERFORMANCE OPTIMIZATION
   =================================== */
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            this.lazyLoadImages();
        }
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/* ===================================
   INITIALIZE EVERYTHING
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new DynamicHeader();
    new MobileMenu();
    new ScrollReveal();
    new FormHandler();
    new RollingText();
    new PerformanceOptimizer();
    
    // Utilities
    initSmoothScroll();
    
    // Trigger initial checks
    window.dispatchEvent(new Event('scroll'));
    
    // Mark body as loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

/* ===================================
   WINDOW LOAD EVENT
   =================================== */
window.addEventListener('load', () => {
    document.body.classList.add('fully-loaded');
});

/* ===================================
   EXPORT FOR MODULE USAGE
   =================================== */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DynamicHeader,
        MobileMenu,
        ScrollReveal,
        FormHandler,
        RollingText
    };
}
