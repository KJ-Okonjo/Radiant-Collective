# Quick Start Guide - Radiant Collective Capital

> **Get your website live in 30 minutes**

---

## 🚀 Fast Track to Launch

### Step 1: Clone Repository (2 minutes)
```bash
git clone https://github.com/KJ-Okonjo/Radiant-Collective.git
cd Radiant-Collective
```

### Step 2: Add Your Images (10 minutes)
```bash
# Add team photos (800x1000px JPG)
cp /path/to/udo-okonjo.jpg assets/images/team/
cp /path/to/fadekemi-abiru.jpg assets/images/team/
cp /path/to/anwulika-okonjo.jpg assets/images/team/

# Add partner logos (PNG/SVG)
cp /path/to/logos/*.png assets/images/logos/

# Verify
ls -lh assets/images/team/
ls -lh assets/images/logos/
```

### Step 3: Deploy to Netlify (10 minutes)
1. **Go to:** [netlify.com](https://netlify.com)
2. **Click:** "Add new site" → "Import an existing project"
3. **Select:** GitHub
4. **Choose:** Radiant-Collective repository
5. **Deploy:** Click "Deploy site" (no configuration needed)
6. **Done!** Your site is live

### Step 4: Add Custom Domain (5 minutes)
1. **In Netlify:** Go to Domain settings
2. **Click:** "Add custom domain"
3. **Enter:** radiantcollective.capital
4. **Follow:** DNS configuration instructions
5. **Wait:** DNS propagation (up to 24 hours)

### Step 5: Configure SSL (Automatic)
- SSL certificate is automatically provisioned by Netlify
- HTTPS will be enabled within minutes

---

## 📋 30-Minute Checklist

- [ ] **0-5 min:** Clone repository
- [ ] **5-10 min:** Add team photos
- [ ] **10-15 min:** Add partner logos
- [ ] **15-20 min:** Test locally (open index.html)
- [ ] **20-25 min:** Deploy to Netlify
- [ ] **25-30 min:** Configure custom domain

**Total Time:** ~30 minutes to live website! 🎉

---

## 🖥️ Local Testing (Optional)

### Option 1: Python Server (Easiest)
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser
open http://localhost:8000
```

### Option 2: Node.js (http-server)
```bash
# Install globally
npm install -g http-server

# Run server
http-server -p 8000

# Open browser
open http://localhost:8000
```

### Option 3: PHP
```bash
php -S localhost:8000

# Open browser
open http://localhost:8000
```

### Option 4: VS Code Live Server
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"

---

## 🎨 Updating Content

### Change Text
Open any HTML file and edit directly:
```html
<!-- Before -->
<h1>The Future Will Be Funded By African Women</h1>

<!-- After -->
<h1>Your New Headline Here</h1>
```

### Change Colors
Open `assets/css/design-system.css`:
```css
/* Change accent color */
--color-accent: #cfa962; /* Change this */
```

### Change Spacing
Use the spacing scale in `design-system.css`:
```css
/* Available spacing */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
```

---

## 🔧 Common Customizations

### 1. Update Team Photos
**Replace placeholders in HTML:**
```html
<!-- In index.html and about.html -->
<img src="assets/images/team/udo-okonjo.jpg" alt="Udo Okonjo">
```

### 2. Update Partner Logos
**Replace SVG placeholders in index.html:**
```html
<!-- Replace this: -->
<svg>...</svg>

<!-- With: -->
<img src="assets/images/logos/partner-name.png" alt="Partner Name">
```

### 3. Change Pricing
**In index.html and membership.html:**
```html
<span class="price-old">$650</span>
<span class="price-new">$500</span>
```

### 4. Update LinkedIn SSO URL
**In login.html and signup.html:**
```html
<a href="https://client.memberstack.com/auth-provider/login?provider=linkedin&appId=YOUR_APP_ID...">
```

### 5. Add Google Analytics
**In all HTML files (before `</head>`):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔗 Connect Forms to Backend

### Application Form (membership.html)
Edit `assets/js/app.js` → `handleApplicationSubmit()`:
```javascript
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(Object.fromEntries(formData))
})
```

### Newsletter Forms
Edit `assets/js/app.js` → `handleEmailSubmit()`:
```javascript
fetch('YOUR_EMAIL_SERVICE_API', {
    method: 'POST',
    body: JSON.stringify({email: email})
})
```

### Contact Form
Edit `assets/js/app.js` → `handleContactSubmit()`:
```javascript
fetch('YOUR_CONTACT_API', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData))
})
```

---

## 📱 Testing Before Launch

### Quick Test Checklist
- [ ] Open index.html in browser
- [ ] Click all navigation links
- [ ] Test mobile menu (resize browser)
- [ ] Submit a form (check console)
- [ ] Check all images load
- [ ] Test on your phone

### Mobile Testing
1. **Chrome DevTools:** F12 → Toggle device toolbar
2. **Responsive mode:** Test 375px, 768px, 1024px, 1440px
3. **Real device:** Test on actual phone

---

## 🐛 Troubleshooting

### Images Not Showing
**Problem:** Broken image icons  
**Solution:**
```bash
# Check files exist
ls -la assets/images/team/
ls -la assets/images/logos/

# Check file names match HTML (case-sensitive)
```

### Forms Not Working
**Problem:** Form submits but nothing happens  
**Solution:** Connect to backend (see "Connect Forms" above)

### Mobile Menu Not Opening
**Problem:** Hamburger icon doesn't work  
**Solution:**
```bash
# Check JavaScript loads
ls -la assets/js/app.js

# Check browser console for errors (F12)
```

### Styles Not Applying
**Problem:** Website looks broken  
**Solution:**
```bash
# Check CSS files exist
ls -la assets/css/*.css

# Check links in HTML are correct
```

---

## 🎯 Next Steps After Launch

### Day 1
- [ ] Monitor analytics
- [ ] Check for errors (browser console)
- [ ] Test all forms
- [ ] Share on social media

### Week 1
- [ ] Collect user feedback
- [ ] Fix any issues found
- [ ] Optimize images if slow
- [ ] Set up Google Search Console

### Month 1
- [ ] Create blog content
- [ ] Add success stories
- [ ] Build backlinks
- [ ] Review analytics data

---

## 📞 Getting Help

### Documentation
- **README.md** - Project overview
- **DEPLOYMENT.md** - Detailed deployment guide
- **SEO.md** - SEO optimization
- **TESTING.md** - Testing checklist

### Resources
- **Netlify Docs:** https://docs.netlify.com
- **Git Basics:** https://git-scm.com/doc
- **HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS

### Support
- **Email:** hello@radiantcollective.capital
- **Repository:** https://github.com/KJ-Okonjo/Radiant-Collective

---

## 💡 Pro Tips

### Use Git Properly
```bash
# Always check status before committing
git status

# Commit often with clear messages
git add .
git commit -m "Update team photos"
git push origin main

# Pull before making changes
git pull origin main
```

### Keep Documentation Updated
- Update CHANGELOG.md when making changes
- Document any customizations
- Keep README.md accurate

### Test Regularly
- Test locally before pushing
- Test on multiple devices
- Check browser console for errors
- Monitor user feedback

### Optimize Images
```bash
# Before uploading, optimize:
# Team photos: < 200KB each
# Partner logos: < 50KB each
# Use tools like TinyPNG or ImageOptim
```

---

## 🎉 You're Ready!

**Follow these steps and you'll have a live website in 30 minutes.**

Need more details? Check:
- **DEPLOYMENT.md** - Comprehensive deployment guide
- **TESTING.md** - Testing checklist
- **SEO.md** - SEO setup

**Good luck with your launch!** 🚀
