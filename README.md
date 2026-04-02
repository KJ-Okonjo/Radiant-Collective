# Radiant Collective Capital - Website

Premium multi-page website for a private investment community empowering African women through financial learning and co-investment opportunities.

## 🌟 Overview

A high-end, editorial-style website featuring:
- Premium UI inspired by fff.club
- Mobile-first responsive design
- Sophisticated animations and interactions
- Clean, minimal aesthetic with strong typography
- High-converting membership funnel

## 📁 Structure

```
Radiant-Collective/
├── index.html              # Home page
├── membership.html         # Membership & application page
├── about.html             # About us page
├── contact.html           # Contact page
├── login.html             # Login page
├── signup.html            # Sign up page
├── assets/
│   ├── css/
│   │   └── styles.css     # Complete design system
│   ├── js/
│   │   └── main.js        # All interactive features
│   └── images/
│       ├── logos/         # Partner/client logos
│       ├── team/          # Team member photos
│       └── partners/      # Additional partner assets
└── README.md
```

## 🎨 Design System

### Color Palette
- **Base Background:** `#fffcf7`
- **Alternate Sections:**
  - Pink Light: `#faf0f3`
  - Pink Deep: `#f5e0e6`
  - Blue Soft: `#eff7f9`
- **Accent Gold:** `#cfa962` (buttons, highlights)
- **Text:** Black primary, grey secondary

### Typography
- **Primary Font:** Alte Haas Grotesk
- **Secondary Font:** Baskerville (accents only)
- Strong hierarchy with large, confident headings
- Clean, readable body text

### Layout
- Max width: 1320px
- 12-column grid system
- Generous whitespace
- Alternating section backgrounds

## ✨ Features

### 1. Dynamic Header
- Sticky navigation
- Background color transitions based on section
- Smooth scrolling
- Mobile hamburger menu with full-screen overlay

### 2. Animations
- **Scroll Reveal:** Fade + upward motion on elements
- **Logo Ticker:** Continuous horizontal scroll with gradient fade
- **Stacking Cards:** Team cards slide over each other on scroll
- **Rolling Text:** Slot machine-style text rotation
- **Journey Line:** SVG path drawing on scroll (About page)
- **Animated Headings:** Letter-by-letter fade and blur reveal

### 3. Forms
- Application form with conditional fields
- Email capture forms
- Contact form
- Authentication forms (Login/Signup)
- LinkedIn SSO integration

### 4. Mobile Optimization
- Touch-friendly buttons and targets
- Single-column layouts
- Optimized spacing
- Fast, intuitive navigation
- Performance-optimized animations

## 🚀 Pages

### Home (`index.html`)
- Hero section with dual CTAs
- Logo ticker showcase
- "What We're Building" with stacking cards
- Membership highlight with rolling text
- Email capture section

### Membership (`membership.html`)
- Hero with value proposition
- "Who Should Apply" segments
- Complete application form
- Member value cards
- Pricing spotlight

### About Us (`about.html`)
- Mission-driven hero
- Animated journey line (SVG)
- Our Purpose & Why sections
- Core Pillars grid
- Team showcase
- Newsletter signup

### Contact (`contact.html`)
- Contact information
- Message form
- Social links

### Login (`login.html`)
- LinkedIn SSO button
- Email/password form
- "Keep me logged in" option
- Forgot password link

### Sign Up (`signup.html`)
- LinkedIn SSO button
- Registration form
- Password confirmation
- Terms agreement

## 🔧 Adding Images

### Team Photos
1. Add images to `assets/images/team/`
2. Recommended: 800x1000px, clean cropping
3. Replace placeholders in HTML:
   ```html
   <div class="placeholder-image">Team Photo</div>
   <!-- Replace with: -->
   <img src="assets/images/team/member-name.jpg" alt="Name">
   ```

### Logos
1. Add to `assets/images/logos/`
2. Update ticker section in `index.html`

### Partners
1. Add to `assets/images/partners/`
2. Update as needed throughout site

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## ⚡ Performance

- Lazy loading for images
- Debounced scroll events
- CSS animations (GPU accelerated)
- Minimal JavaScript overhead
- Optimized asset loading

## 🔐 LinkedIn SSO Integration

The login/signup pages include LinkedIn authentication via Memberstack:
```
https://client.memberstack.com/auth-provider/login?provider=linkedin&appId=app_cmesp1uyv009y0wtmdi8lfp22&origin=www.radiantcollective.capital&allowSignup=true
```

## 📝 To-Do (Backend Integration)

- [ ] Connect application form to backend
- [ ] Set up email newsletter integration
- [ ] Implement authentication system
- [ ] Connect contact form to email service
- [ ] Add actual team photos
- [ ] Add partner/client logos
- [ ] Set up form validation and error handling
- [ ] Add loading states for form submissions

## 🎯 Conversion Optimization

- Clear, repeated CTAs
- Strategic email capture placement
- Frictionless application process
- Social proof through partner logos
- Trust signals (team, mission, values)

## 📄 License

© 2026 Radiant Collective Capital. All rights reserved.

## 📞 Support

For questions or support, contact: hello@radiantcollective.capital

---

**Built with precision for a premium investment community.**
