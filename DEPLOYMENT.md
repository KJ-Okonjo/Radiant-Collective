# Deployment Guide - Radiant Collective Capital

## ✅ What's Been Built

### 🎨 **6 Premium Pages**
1. **Home** (`index.html`) - Hero, ticker, stacking cards, membership highlight, email capture
2. **Membership** (`membership.html`) - Application form with conditional fields, value propositions
3. **About Us** (`about.html`) - Mission, journey line animation, team showcase
4. **Contact** (`contact.html`) - Contact information and message form
5. **Login** (`login.html`) - Authentication with LinkedIn SSO integration
6. **Sign Up** (`signup.html`) - Registration with LinkedIn SSO integration

### 🎭 **Advanced Features Implemented**

#### Animations
- ✅ Scroll reveal (fade + slide up)
- ✅ Logo ticker (horizontal scroll, gradient fade, hover pause)
- ✅ Stacking cards (team cards slide over each other)
- ✅ Rolling text (slot machine-style rotation)
- ✅ Journey line (SVG path drawing on scroll)
- ✅ Animated headings (letter-by-letter blur reveal)

#### Interactive Elements
- ✅ Dynamic header (sticky, section-based color transitions)
- ✅ Mobile menu (full-screen overlay)
- ✅ Smooth scroll to anchors
- ✅ Form validation
- ✅ Conditional form fields
- ✅ Touch-optimized for mobile

#### Design System
- ✅ Premium color palette
- ✅ Typography system (Alte Haas Grotesk + Baskerville)
- ✅ 12-column grid layout
- ✅ Alternating section backgrounds
- ✅ Mobile-first responsive design

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free & Easy)
1. Go to repository settings
2. Navigate to "Pages" section
3. Select source: `main` branch, `/ (root)`
4. Your site will be live at: `https://kj-okonjo.github.io/Radiant-Collective/`

### Option 2: Netlify (Recommended)
1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `Radiant-Collective`
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy"
6. Custom domain: `radiantcollective.capital`

### Option 3: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import `Radiant-Collective` from GitHub
4. Deploy with default settings
5. Add custom domain

### Option 4: Custom Server
Upload all files to your web hosting via FTP/SFTP:
```
public_html/
├── index.html
├── membership.html
├── about.html
├── contact.html
├── login.html
├── signup.html
└── assets/
    ├── css/
    ├── js/
    └── images/
```

## 📸 Adding Your Assets

### Team Photos
1. Prepare 3 high-quality photos (800x1000px recommended)
2. Name them:
   - `udo-okonjo.jpg`
   - `fadekemi-abiru.jpg`
   - `anwulika-okonjo.jpg`
3. Upload to `assets/images/team/`
4. Update HTML:

**In `index.html` (stacking cards section):**
```html
<!-- Replace this: -->
<div class="placeholder-image">Team Member 1</div>

<!-- With this: -->
<img src="assets/images/team/udo-okonjo.jpg" alt="Udo Okonjo">
```

**In `about.html` (team section):**
```html
<!-- Same replacement for all 3 team members -->
<div class="team-image">
    <img src="assets/images/team/udo-okonjo.jpg" alt="Udo Okonjo">
</div>
```

### Partner Logos
1. Add logo files to `assets/images/logos/`
2. Update the ticker section in `index.html`:

```html
<!-- Replace placeholder divs: -->
<div class="placeholder-logo">Partner 1</div>

<!-- With actual logos: -->
<img src="assets/images/logos/partner-name.png" alt="Partner Name">
```

### Quick Command to Add Images
```bash
cd /data/.openclaw/workspace/Radiant-Collective
# Add your images, then:
git add assets/images/
git commit -m "Add team photos and partner logos"
git push
```

## 🔗 Backend Integration Needed

### 1. Application Form
**Current:** Form data logged to console  
**Next:** Connect to backend API or service like:
- Airtable
- Google Forms
- Typeform
- Custom API endpoint

**Example integration point** (`assets/js/main.js`, line ~460):
```javascript
handleApplicationSubmit(form) {
    const formData = new FormData(form);
    
    // Add your API call here:
    fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your application!');
        form.reset();
    });
}
```

### 2. Email Newsletter
**Current:** Console logging  
**Next:** Integrate with:
- Mailchimp
- ConvertKit
- Klaviyo
- SendGrid

### 3. Authentication
**Current:** LinkedIn SSO URL configured  
**Next:** Set up Memberstack or custom auth backend

### 4. Contact Form
**Current:** Console logging  
**Next:** Connect to:
- Formspree
- EmailJS
- Custom email service

## 🎯 Custom Domain Setup

### DNS Records (for radiantcollective.capital)
If using Netlify/Vercel, add these records:

**A Records:**
```
@     A     [IP from hosting provider]
```

**CNAME Record:**
```
www   CNAME   [your-site-name].netlify.app
```

## ✨ Optional Enhancements

### Font Loading
Add Alte Haas Grotesk font file:
```html
<!-- In <head> of all HTML files -->
<link rel="preload" href="assets/fonts/AlteHaasGrotesk.woff2" as="font" type="font/woff2" crossorigin>
```

### Analytics
Add Google Analytics or Plausible:
```html
<!-- Before </head> in all HTML files -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Performance
- Compress images (TinyPNG, ImageOptim)
- Minify CSS/JS (optional, can be done via build tools)
- Add meta tags for SEO
- Set up CDN

## 📱 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Test all forms submit properly
- [ ] Test all navigation links work
- [ ] Verify animations perform smoothly
- [ ] Check responsive breakpoints (Desktop, Tablet, Mobile)
- [ ] Test LinkedIn SSO redirect
- [ ] Verify email addresses are correct
- [ ] Check all CTAs link to correct pages

## 🐛 Troubleshooting

### Animations not working?
- Check browser console for JavaScript errors
- Ensure `main.js` is loading properly

### Mobile menu not opening?
- Verify JavaScript is enabled
- Check console for errors

### Images not loading?
- Verify file paths are correct
- Check file names (case-sensitive on some servers)

### Forms not submitting?
- Open browser console to see logs
- Connect to backend API (forms currently just log to console)

## 📞 Next Steps

1. **Deploy the site** (choose hosting option above)
2. **Add team photos and logos** (see instructions above)
3. **Connect forms to backend** (see backend integration section)
4. **Set up custom domain** (if not using GitHub Pages)
5. **Add analytics** (Google Analytics, Plausible, etc.)
6. **Test thoroughly** (all devices and browsers)
7. **Launch!** 🚀

## 🎉 You're All Set!

The foundation is complete. You now have a production-ready, premium website that reflects the quality and mission of Radiant Collective Capital.

When you're ready to add images or make changes:
```bash
cd /data/.openclaw/workspace/Radiant-Collective
# Make your changes
git add .
git commit -m "Your change description"
git push
```

**Repository:** https://github.com/KJ-Okonjo/Radiant-Collective
