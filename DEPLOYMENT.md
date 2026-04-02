# Deployment Guide - Radiant Collective Capital

> **Complete guide for deploying your premium investment platform**

---

## 🚀 Quick Deployment Options

### Option 1: Netlify (Recommended) ⭐
**Best for:** Custom domain, automatic deployments, SSL

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Connect GitHub:**
   - Click "Add new site" → "Import an existing project"
   - Select GitHub → Authorize → Choose `Radiant-Collective`
3. **Configure:**
   - Build command: (leave empty)
   - Publish directory: `/`
   - Click "Deploy site"
4. **Custom Domain:**
   - Go to Domain settings
   - Add `radiantcollective.capital`
   - Follow DNS instructions
5. **Enable SSL:** Automatic with Let's Encrypt

**Deploy time:** ~2 minutes  
**Cost:** Free for basic plan

---

### Option 2: Vercel
**Best for:** Fast global CDN, developer-friendly

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import Project:**
   - Click "Add New" → "Project"
   - Import from GitHub: `Radiant-Collective`
3. **Deploy:** Click "Deploy" (no configuration needed)
4. **Custom Domain:** Add domain in project settings

**Deploy time:** ~1 minute  
**Cost:** Free for personal projects

---

### Option 3: GitHub Pages
**Best for:** Simple, free hosting

1. **Go to repository settings**
2. **Navigate to Pages:**
   - Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Save
3. **Access:** `https://kj-okonjo.github.io/Radiant-Collective/`
4. **Custom Domain:** Add CNAME file with your domain

**Deploy time:** ~5 minutes  
**Cost:** Free

---

### Option 4: Custom Server (VPS/Cloud)
**Best for:** Full control, advanced features

**Requirements:**
- Ubuntu/Debian server
- Nginx or Apache
- SSL certificate (Let's Encrypt)

**Steps:**

```bash
# 1. Connect to server
ssh user@your-server.com

# 2. Install nginx
sudo apt update
sudo apt install nginx

# 3. Clone repository
cd /var/www
sudo git clone https://github.com/KJ-Okonjo/Radiant-Collective.git
sudo chown -R www-data:www-data Radiant-Collective

# 4. Configure nginx
sudo nano /etc/nginx/sites-available/radiantcollective

# Add configuration:
server {
    listen 80;
    server_name radiantcollective.capital www.radiantcollective.capital;
    root /var/www/Radiant-Collective;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}

# 5. Enable site
sudo ln -s /etc/nginx/sites-available/radiantcollective /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 6. Install SSL (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d radiantcollective.capital -d www.radiantcollective.capital
```

---

## 📸 Adding Your Assets

### Step 1: Prepare Images

**Team Photos:**
- **Dimensions:** 800x1000px (4:5 aspect ratio)
- **Format:** JPG (optimized)
- **Size:** < 200KB each
- **Names:**
  ```
  udo-okonjo.jpg
  fadekemi-abiru.jpg
  anwulika-okonjo.jpg
  ```

**Partner Logos:**
- **Formats:** PNG (transparent) or SVG (vector)
- **Dimensions:** 180-250px wide, 80-120px tall
- **Size:** < 50KB each

### Step 2: Add to Repository

```bash
cd Radiant-Collective

# Add team photos
cp path/to/photos/*.jpg assets/images/team/

# Add partner logos
cp path/to/logos/*.png assets/images/logos/

# Verify
ls -lh assets/images/team/
ls -lh assets/images/logos/
```

### Step 3: Update HTML

**Team Photos** (in `index.html` and `about.html`):

Replace placeholders:
```html
<!-- FROM: -->
<img data-src="assets/images/team/udo-okonjo.jpg" alt="Udo Okonjo" src="data:image/svg+xml,...">

<!-- TO: -->
<img src="assets/images/team/udo-okonjo.jpg" alt="Udo Okonjo" loading="lazy">
```

**Partner Logos** (in `index.html` logo ticker):

Replace SVG placeholders:
```html
<!-- FROM: -->
<svg width="140" height="60">...</svg>

<!-- TO: -->
<img src="assets/images/logos/partner-name.png" alt="Partner Name">
```

### Step 4: Commit & Push

```bash
git add assets/images/
git commit -m "Add team photos and partner logos"
git push origin main
```

---

## 🔌 Backend Integration

### Forms Setup

All forms currently log to console. Connect to your backend:

**1. Application Form** (`assets/js/app.js` → `handleApplicationSubmit`)

```javascript
handleApplicationSubmit(form) {
    const formData = new FormData(form);
    
    // Option A: REST API
    fetch('https://api.radiantcollective.capital/applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your application!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
    
    // Option B: Airtable
    fetch('https://api.airtable.com/v0/YOUR_BASE/Applications', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fields: Object.fromEntries(formData)
        })
    });
    
    // Option C: Google Forms
    // Use form action URL from Google Forms
}
```

**2. Email Newsletter** (`handleEmailSubmit`)

```javascript
// Mailchimp Example
fetch('https://YOUR_DOMAIN.us1.list-manage.com/subscribe/post-json?u=XXX&id=XXX', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        EMAIL: email
    })
});

// ConvertKit Example
fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        api_key: 'YOUR_API_KEY',
        email: email
    })
});
```

**3. Contact Form** (`handleContactSubmit`)

```javascript
// Formspree Example
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    })
});
```

**4. Authentication**

LinkedIn SSO is already configured. For email/password auth:

```javascript
// Firebase Example
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = '/dashboard.html';
    })
    .catch((error) => {
        alert('Invalid credentials');
    });
```

---

## 🌐 DNS Configuration

### For Custom Domain: `radiantcollective.capital`

**A Records** (if using custom server):
```
Type  Name  Value           TTL
A     @     YOUR_SERVER_IP  3600
A     www   YOUR_SERVER_IP  3600
```

**CNAME Records** (if using Netlify/Vercel):
```
Type   Name  Value                        TTL
CNAME  www   your-site.netlify.app        3600
```

**For Netlify:**
```
Type   Name  Value
ALIAS  @     apex-loadbalancer.netlify.com
CNAME  www   your-site.netlify.app
```

---

## ⚡ Performance Optimization

### 1. Image Optimization

```bash
# Install imagemagick
brew install imagemagick  # macOS
sudo apt install imagemagick  # Ubuntu

# Optimize all images
cd assets/images

# Team photos
for img in team/*.jpg; do
    convert "$img" -quality 85 -strip "$img"
done

# Logos (PNG)
for img in logos/*.png; do
    pngquant --quality=80-90 "$img" --ext .png --force
done
```

### 2. Enable Compression (Nginx)

Already included in config above, but verify:
```nginx
gzip on;
gzip_vary on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_comp_level 6;
```

### 3. Browser Caching

Add to nginx config:
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 4. CDN (Optional)

- **Cloudflare:** Free CDN + DDoS protection
- **BunnyCDN:** Low-cost, fast
- **AWS CloudFront:** Enterprise-grade

---

## 🔒 Security Checklist

- [ ] **SSL Certificate installed** (HTTPS)
- [ ] **Security headers configured**
- [ ] **Rate limiting enabled** (for forms)
- [ ] **CORS configured** (if using API)
- [ ] **Environment variables secured** (API keys)
- [ ] **Firewall enabled** (ufw/iptables)
- [ ] **Regular backups configured**

### Security Headers (Nginx)

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' https: 'unsafe-inline' 'unsafe-eval';" always;
```

---

## 📊 Analytics Setup

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to all HTML pages (before `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-friendly alternative)

```html
<script defer data-domain="radiantcollective.capital" src="https://plausible.io/js/script.js"></script>
```

---

## 🧪 Testing Checklist

### Pre-Launch Testing

- [ ] **Desktop browsers:** Chrome, Firefox, Safari, Edge
- [ ] **Mobile browsers:** iOS Safari, Chrome Mobile, Samsung Internet
- [ ] **Responsive:** Test all breakpoints (320px, 768px, 1024px, 1440px+)
- [ ] **Forms:** Submit all forms, test validation
- [ ] **Links:** Click all navigation links
- [ ] **Images:** Verify all images load
- [ ] **Animations:** Check all transitions work
- [ ] **Performance:** Run Lighthouse audit (score 90+)
- [ ] **Accessibility:** Test keyboard navigation, screen reader
- [ ] **SEO:** Check meta tags, titles, descriptions

### Tools

```bash
# Lighthouse (Chrome DevTools)
# Performance, Accessibility, Best Practices, SEO

# Mobile-Friendly Test
https://search.google.com/test/mobile-friendly

# GTmetrix
https://gtmetrix.com/

# WebPageTest
https://www.webpagetest.org/
```

---

## 🐛 Troubleshooting

### Images Not Loading

**Problem:** Broken image icons  
**Solution:** Check file paths are correct (case-sensitive on Linux)

```bash
# Verify files exist
ls -la assets/images/team/
ls -la assets/images/logos/

# Check permissions
chmod 644 assets/images/**/*.{jpg,png,svg}
```

### Forms Not Submitting

**Problem:** Form submits but nothing happens  
**Solution:** Connect to backend API (see Backend Integration section)

### SSL Certificate Issues

**Problem:** "Not Secure" warning  
**Solution:** Install Let's Encrypt certificate

```bash
sudo certbot --nginx -d radiantcollective.capital
```

### Mobile Menu Not Opening

**Problem:** Hamburger doesn't work  
**Solution:** Check JavaScript is loading

```bash
# Verify file exists and has correct permissions
ls -la assets/js/app.js
chmod 644 assets/js/app.js
```

---

## 📞 Support & Resources

- **Repository:** https://github.com/KJ-Okonjo/Radiant-Collective
- **Email:** hello@radiantcollective.capital
- **Netlify Docs:** https://docs.netlify.com
- **Let's Encrypt:** https://letsencrypt.org/getting-started/

---

## 🎉 Launch Day Checklist

- [ ] All images uploaded and optimized
- [ ] Forms connected to backend
- [ ] SSL certificate installed
- [ ] Custom domain configured
- [ ] Analytics tracking active
- [ ] All pages tested on mobile
- [ ] All links working
- [ ] Social media meta tags set
- [ ] Backup system in place
- [ ] Error pages created (404, 500)
- [ ] Contact email configured
- [ ] Team notified
- [ ] Soft launch to test group
- [ ] Final check before public announcement

---

**Ready to launch!** 🚀

When everything is set up, announce on:
- Instagram
- LinkedIn
- Email newsletter
- Partner networks
