/* ===================================
   Radiant Collective Capital - Main JavaScript
   Premium Interactive Features
   =================================== */

// ===================================
// Utility Functions
// ===================================
function debounce(func, wait) {
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

function isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const vertInView = (rect.top <= windowHeight * (1 - threshold)) && ((rect.top + rect.height) >= windowHeight * threshold);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

// ===================================
// Dynamic Header
// ===================================
class DynamicHeader {
    constructor() {
        this.header = document.getElementById('siteHeader');
        if (!this.header) return;

        this.lastScrollY = window.scrollY;
        this.sections = document.querySelectorAll('section');
        
        this.init();
    }

    init() {
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
        this.handleScroll();
    }

    handleScroll() {
        const scrollY = window.scrollY;

        // Add scrolled class
        if (scrollY > 50) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }

        // Check section backgrounds
        this.updateHeaderBackground();
    }

    updateHeaderBackground() {
        const headerRect = this.header.getBoundingClientRect();
        const headerCenter = headerRect.top + headerRect.height / 2;

        this.sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            if (rect.top <= headerCenter && rect.bottom >= headerCenter) {
                const bgColor = window.getComputedStyle(section).backgroundColor;
                
                // Check if section has alternate background
                if (section.classList.contains('alternate-bg-1') ||
                    section.classList.contains('alternate-bg-2') ||
                    section.classList.contains('alternate-bg-3')) {
                    this.header.classList.add('dark-bg');
                } else {
                    this.header.classList.remove('dark-bg');
                }
            }
        });
    }
}

// ===================================
// Mobile Menu
// ===================================
class MobileMenu {
    constructor() {
        this.toggle = document.getElementById('mobileMenuToggle');
        this.overlay = document.getElementById('mobileMenuOverlay');
        this.close = document.getElementById('mobileMenuClose');
        
        if (!this.toggle || !this.overlay) return;

        this.init();
    }

    init() {
        this.toggle.addEventListener('click', () => this.open());
        this.close.addEventListener('click', () => this.close());
        
        // Close on link click
        const links = this.overlay.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    open() {
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===================================
// Scroll Reveal Animations
// ===================================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in-up');
        if (this.elements.length === 0) return;

        this.init();
    }

    init() {
        // Initial check
        this.checkElements();

        // Check on scroll
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

// ===================================
// Animated Headings (Letter by Letter)
// ===================================
class AnimatedHeadings {
    constructor() {
        this.headings = document.querySelectorAll('.animated-heading');
        if (this.headings.length === 0) return;

        this.init();
    }

    init() {
        this.headings.forEach(heading => {
            if (!heading.classList.contains('processed')) {
                this.animateHeading(heading);
                heading.classList.add('processed');
            }
        });

        window.addEventListener('scroll', debounce(() => this.checkHeadings(), 100));
    }

    animateHeading(heading) {
        const text = heading.textContent;
        heading.textContent = '';
        
        const chars = text.split('');
        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${index * 0.03}s`;
            heading.appendChild(span);
        });
    }

    checkHeadings() {
        this.headings.forEach(heading => {
            if (isInViewport(heading, 0.2) && !heading.classList.contains('letter-animate')) {
                heading.classList.add('letter-animate');
            }
        });
    }
}

// ===================================
// Logo Ticker
// ===================================
class LogoTicker {
    constructor() {
        this.track = document.getElementById('tickerTrack');
        if (!this.track) return;

        this.init();
    }

    init() {
        // Animation is handled by CSS
        // This can be enhanced with dynamic speed or pause on hover
    }
}

// ===================================
// Stacking Cards Animation
// ===================================
class StackingCards {
    constructor() {
        this.container = document.getElementById('stackingCards');
        if (!this.container) return;

        this.cards = this.container.querySelectorAll('.team-card');
        this.section = this.container.closest('section');
        
        this.init();
    }

    init() {
        window.addEventListener('scroll', debounce(() => this.handleScroll(), 10));
        this.handleScroll();
    }

    handleScroll() {
        if (window.innerWidth < 768) return; // Disable on mobile

        const sectionRect = this.section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const scrollProgress = Math.max(0, Math.min(1, 
            (viewportHeight - sectionRect.top) / (viewportHeight + sectionRect.height)
        ));

        this.cards.forEach((card, index) => {
            const cardProgress = Math.max(0, Math.min(1, 
                (scrollProgress - (index * 0.15)) / 0.3
            ));

            if (cardProgress > 0) {
                const scale = 0.9 + (cardProgress * 0.1);
                const translateY = (1 - cardProgress) * 40;
                const opacity = 0.4 + (cardProgress * 0.6);

                card.style.transform = `translateY(${translateY}px) scale(${scale})`;
                card.style.opacity = opacity;
                card.style.zIndex = Math.floor(cardProgress * 10) + index;
            }
        });
    }
}

// ===================================
// Rolling Text Animation
// ===================================
class RollingText {
    constructor() {
        this.container = document.getElementById('rollingText');
        if (!this.container) return;

        this.words = this.container.querySelectorAll('.rolling-word');
        this.currentIndex = 0;
        
        this.init();
    }

    init() {
        if (this.words.length === 0) return;

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

// ===================================
// Journey Line Animation (About Page)
// ===================================
class JourneyLine {
    constructor() {
        this.svg = document.getElementById('journeyLine');
        if (!this.svg) return;

        this.path = this.svg.querySelector('.journey-path');
        this.points = document.querySelectorAll('[data-journey-point]');
        
        if (this.points.length === 0) return;

        this.init();
    }

    init() {
        this.calculatePath();
        window.addEventListener('scroll', debounce(() => this.updatePath(), 10));
        window.addEventListener('resize', debounce(() => {
            this.calculatePath();
            this.updatePath();
        }, 200));
    }

    calculatePath() {
        const svgWidth = this.svg.clientWidth;
        const svgHeight = document.body.scrollHeight;
        
        this.svg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

        let pathD = 'M 1 0';
        let y = 0;

        this.points.forEach((point, index) => {
            const rect = point.getBoundingClientRect();
            const pointY = rect.top + window.scrollY + (rect.height / 2);
            
            // Create smooth curve
            if (index % 2 === 0) {
                pathD += ` Q 1 ${pointY - 100}, 1 ${pointY}`;
            } else {
                pathD += ` Q 1 ${pointY - 100}, 1 ${pointY}`;
            }
            
            y = pointY;
        });

        pathD += ` L 1 ${svgHeight}`;
        this.path.setAttribute('d', pathD);
        
        this.pathLength = this.path.getTotalLength();
        this.path.style.strokeDasharray = this.pathLength;
        this.path.style.strokeDashoffset = this.pathLength;
    }

    updatePath() {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const drawLength = this.pathLength * scrollPercentage;
        
        this.path.style.strokeDashoffset = this.pathLength - drawLength;
    }
}

// ===================================
// Form Handling
// ===================================
class FormHandler {
    constructor() {
        this.initApplicationForm();
        this.initEmailForms();
        this.initContactForm();
        this.initAuthForms();
    }

    initApplicationForm() {
        const form = document.getElementById('applicationForm');
        if (!form) return;

        // Conditional investment types
        const investmentExp = form.querySelectorAll('input[name="investmentExperience"]');
        const typesGroup = document.getElementById('investmentTypesGroup');
        const otherCheckbox = form.querySelector('input[value="other"]');
        const otherInput = document.getElementById('otherInvestment');

        investmentExp.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (e.target.value === 'yes') {
                    typesGroup.style.display = 'block';
                } else {
                    typesGroup.style.display = 'none';
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
        const emailForms = document.querySelectorAll('.email-form, .footer-email-form');
        emailForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleEmailSubmit(form);
            });
        });
    }

    initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit(form);
        });
    }

    initAuthForms() {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');

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
        
        // Show success message
        alert('Thank you for your application! We will review it and get back to you soon.');
        form.reset();
    }

    handleEmailSubmit(form) {
        const email = form.querySelector('input[type="email"]').value;
        console.log('Email submitted:', email);
        
        alert('Thank you for subscribing!');
        form.reset();
    }

    handleContactSubmit(form) {
        const formData = new FormData(form);
        console.log('Contact form submitted:', Object.fromEntries(formData));
        
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    }

    handleLoginSubmit(form) {
        const formData = new FormData(form);
        console.log('Login attempt:', Object.fromEntries(formData));
        
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
        alert('Sign up functionality will be connected to your backend.');
    }
}

// ===================================
// Performance Optimization
// ===================================
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            this.lazyLoadImages();
        }

        // Preload critical assets
        this.preloadCritical();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    preloadCritical() {
        // Preload critical fonts if needed
        // This would be customized based on actual font files
    }
}

// ===================================
// Smooth Scroll to Anchor
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('siteHeader')?.offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new DynamicHeader();
    new MobileMenu();
    new ScrollReveal();
    new AnimatedHeadings();
    new FormHandler();
    new PerformanceOptimizer();
    
    // Page-specific features
    new LogoTicker();
    new StackingCards();
    new RollingText();
    new JourneyLine();
    
    // Utilities
    initSmoothScroll();

    // Trigger initial animations
    window.dispatchEvent(new Event('scroll'));
});

// ===================================
// Window Load Event
// ===================================
window.addEventListener('load', () => {
    // Hide loading spinner if you add one
    document.body.classList.add('loaded');
});

// ===================================
// Export for potential module usage
// ===================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DynamicHeader,
        MobileMenu,
        ScrollReveal,
        AnimatedHeadings,
        FormHandler
    };
}
