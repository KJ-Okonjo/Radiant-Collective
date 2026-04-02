# Testing Guide - Radiant Collective Capital

> **Comprehensive testing checklist for pre-launch quality assurance**

---

## 🧪 TESTING STRATEGY

Test in this order:
1. **Local Testing** (development environment)
2. **Device Testing** (physical devices)
3. **Browser Testing** (all major browsers)
4. **Performance Testing** (speed & optimization)
5. **Accessibility Testing** (compliance)
6. **User Testing** (real users)
7. **Final Pre-Launch** (production environment)

---

## 📱 DEVICE TESTING CHECKLIST

### Desktop Devices
- [ ] **1920x1080** (Full HD)
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari (macOS)
  - [ ] Edge

- [ ] **1440x900** (MacBook Pro 13")
  - [ ] Chrome
  - [ ] Safari

- [ ] **2560x1440** (2K/QHD)
  - [ ] Chrome
  - [ ] Firefox

### Tablet Devices
- [ ] **iPad Pro 12.9"** (2732x2048)
  - [ ] Safari
  - [ ] Chrome

- [ ] **iPad Air** (2360x1640)
  - [ ] Safari

- [ ] **Samsung Galaxy Tab** (1280x800)
  - [ ] Chrome
  - [ ] Samsung Internet

### Mobile Devices
- [ ] **iPhone 15 Pro** (393x852)
  - [ ] Safari
  - [ ] Chrome

- [ ] **iPhone 14** (390x844)
  - [ ] Safari

- [ ] **iPhone SE** (375x667)
  - [ ] Safari

- [ ] **Samsung Galaxy S24** (360x800)
  - [ ] Chrome
  - [ ] Samsung Internet

- [ ] **Google Pixel 8** (412x915)
  - [ ] Chrome

---

## 🌐 BROWSER TESTING CHECKLIST

### Chrome (Desktop & Mobile)
- [ ] **Windows** - Latest version
- [ ] **macOS** - Latest version
- [ ] **Linux** - Latest version
- [ ] **Android** - Latest version
- [ ] **iOS** - Latest version

### Firefox
- [ ] **Windows** - Latest version
- [ ] **macOS** - Latest version
- [ ] **Linux** - Latest version

### Safari
- [ ] **macOS** - Latest version
- [ ] **iOS** - Latest version

### Edge
- [ ] **Windows** - Latest version
- [ ] **macOS** - Latest version

### Samsung Internet
- [ ] **Android** - Latest version

### Testing Tools
```bash
# BrowserStack (cross-browser testing)
https://www.browserstack.com/

# LambdaTest
https://www.lambdatest.com/

# Sauce Labs
https://saucelabs.com/
```

---

## 📄 PAGE-BY-PAGE TESTING

### Home Page (index.html)
- [ ] **Hero Section**
  - [ ] Headline displays correctly
  - [ ] Subheading is readable
  - [ ] Both CTAs are visible and clickable
  - [ ] CTAs link to correct pages
  - [ ] Spacing looks professional

- [ ] **Logo Ticker**
  - [ ] Logos scroll smoothly
  - [ ] Infinite loop works
  - [ ] Gradient fade on edges
  - [ ] Hover pauses animation
  - [ ] No jitter or jumps

- [ ] **What We're Building**
  - [ ] Left content displays correctly
  - [ ] Team cards show properly
  - [ ] Images load (or placeholders show)
  - [ ] "Apply to Join" button works
  - [ ] Layout switches to single column on mobile

- [ ] **Membership Highlight**
  - [ ] Pricing card is readable
  - [ ] Prices display correctly
  - [ ] Benefits list shows checkmarks
  - [ ] Rolling text animates smoothly
  - [ ] CTA button works

- [ ] **Email Capture**
  - [ ] Form is centered
  - [ ] Email input accepts valid email
  - [ ] Submit button responds
  - [ ] Disclaimer text is visible

- [ ] **Footer**
  - [ ] All links work
  - [ ] Newsletter signup functions
  - [ ] Social links open in new tab
  - [ ] Layout adapts on mobile

### Membership Page (membership.html)
- [ ] **Hero Section**
  - [ ] Headline displays
  - [ ] Description is clear
  - [ ] Proper spacing

- [ ] **Who Should Apply**
  - [ ] 4 cards display
  - [ ] Cards stack on mobile
  - [ ] Text is readable

- [ ] **Application Form**
  - [ ] All 13 fields present
  - [ ] Required fields marked
  - [ ] Conditional logic works (investment experience)
  - [ ] "Other" checkbox triggers text input
  - [ ] Dropdowns work
  - [ ] Checkboxes/radios functional
  - [ ] Terms checkbox required
  - [ ] Submit button works
  - [ ] Form validation present

- [ ] **What You'll Unlock**
  - [ ] 3 value cards display
  - [ ] Icons show correctly
  - [ ] Cards have hover effect
  - [ ] Mobile layout stacks

- [ ] **Pricing Card**
  - [ ] Pricing displays correctly
  - [ ] Benefits list shows
  - [ ] CTA links to form

### About Page (about.html)
- [ ] **Hero Section**
  - [ ] Headline impactful
  - [ ] Subheading clear
  - [ ] Both CTAs work

- [ ] **Our Purpose**
  - [ ] Section centered
  - [ ] Text readable

- [ ] **Our Why**
  - [ ] Manifesto box styled
  - [ ] "Radiant changes that" stands out
  - [ ] Spacing appropriate

- [ ] **Core Pillars**
  - [ ] 4 cards display
  - [ ] Layout adapts on mobile
  - [ ] Card hover works

- [ ] **Team Section**
  - [ ] 3 team members show
  - [ ] Images load (or placeholders)
  - [ ] Names and titles display
  - [ ] Grid adapts on mobile

- [ ] **Stay Connected**
  - [ ] Form is centered
  - [ ] Email input works
  - [ ] Submit button functional

### Contact Page (contact.html)
- [ ] **Hero Section**
  - [ ] Clean, minimal
  - [ ] Spacing correct

- [ ] **Contact Grid**
  - [ ] Email link clickable
  - [ ] Opens email client
  - [ ] Social links work
  - [ ] Links open in new tab

- [ ] **Contact Form**
  - [ ] 3 fields present
  - [ ] Validation works
  - [ ] Submit button responds
  - [ ] Layout stacks on mobile

### Login Page (login.html)
- [ ] **Page Layout**
  - [ ] Logo links to home
  - [ ] Card is centered
  - [ ] Spacing looks good

- [ ] **LinkedIn SSO**
  - [ ] Button styled correctly
  - [ ] LinkedIn icon shows
  - [ ] Link goes to correct URL
  - [ ] Opens in new tab

- [ ] **Login Form**
  - [ ] Email field works
  - [ ] Password field hidden
  - [ ] "Keep me logged in" checkbox
  - [ ] "Forgot password" link present
  - [ ] Submit button functional

- [ ] **Footer Link**
  - [ ] "Sign up" link works

### Signup Page (signup.html)
- [ ] **Page Layout**
  - [ ] Logo links to home
  - [ ] Card is centered

- [ ] **LinkedIn SSO**
  - [ ] Button works correctly
  - [ ] Link is correct

- [ ] **Signup Form**
  - [ ] Name field works
  - [ ] Email field works
  - [ ] Password field hidden
  - [ ] Confirm password field hidden
  - [ ] Passwords match validation
  - [ ] Terms checkbox required
  - [ ] Submit button functional

- [ ] **Footer Link**
  - [ ] "Log in" link works

### 404 Page (404.html)
- [ ] **Error Message**
  - [ ] Large "404" displays
  - [ ] Heading clear
  - [ ] Description helpful

- [ ] **Navigation**
  - [ ] "Go Home" button works
  - [ ] "Explore Membership" button works
  - [ ] Additional links work

---

## ⚡ PERFORMANCE TESTING

### Lighthouse Audit (Chrome DevTools)
Run on each page:
```bash
# Target Scores
Performance:    90+
Accessibility:  90+
Best Practices: 90+
SEO:            90+
```

**How to Run:**
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Mobile" or "Desktop"
4. Click "Analyze page load"

### Check These Metrics:
- [ ] **First Contentful Paint (FCP)** < 1.8s
- [ ] **Largest Contentful Paint (LCP)** < 2.5s
- [ ] **Time to Interactive (TTI)** < 3.8s
- [ ] **Total Blocking Time (TBT)** < 200ms
- [ ] **Cumulative Layout Shift (CLS)** < 0.1

### GTmetrix
```
https://gtmetrix.com/
```
- [ ] Test homepage
- [ ] Test membership page
- [ ] Grade: A or B
- [ ] Load time: < 3 seconds
- [ ] Page size: < 1MB (excluding images)

### WebPageTest
```
https://www.webpagetest.org/
```
- [ ] Test from multiple locations
- [ ] Test on 3G and 4G
- [ ] Speed Index: < 3000
- [ ] Time to First Byte: < 600ms

---

## ♿ ACCESSIBILITY TESTING

### WAVE Tool
```
https://wave.webaim.org/
```
- [ ] No errors
- [ ] Warnings reviewed
- [ ] Contrast ratios pass

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Enter key submits forms
- [ ] Escape closes mobile menu
- [ ] Focus visible on all elements
- [ ] Skip to main content works

### Screen Reader Testing
**NVDA (Windows)** or **VoiceOver (Mac)**
- [ ] All images have alt text
- [ ] Headings in proper order (H1, H2, H3)
- [ ] Form labels are read
- [ ] Buttons are identified
- [ ] Links are descriptive

### Color Contrast
Use Chrome DevTools or:
```
https://webaim.org/resources/contrastchecker/
```
- [ ] Text on background: 4.5:1 minimum
- [ ] Large text: 3:1 minimum
- [ ] Buttons: sufficient contrast

---

## 📱 MOBILE-SPECIFIC TESTING

### Touch Testing
- [ ] All buttons are at least 48x48px
- [ ] Buttons have adequate spacing
- [ ] No accidental clicks
- [ ] Swipe gestures don't interfere

### Mobile Menu
- [ ] Hamburger icon visible
- [ ] Menu opens smoothly
- [ ] Menu closes with X button
- [ ] Menu closes on link click
- [ ] Menu closes on Escape key
- [ ] No body scroll when menu open

### Form Inputs (Mobile)
- [ ] Keyboard doesn't cover input
- [ ] Zoom doesn't break layout
- [ ] Number inputs show numeric keyboard
- [ ] Email inputs show email keyboard
- [ ] Auto-fill works correctly

### Orientation
- [ ] Portrait mode works
- [ ] Landscape mode works
- [ ] No horizontal scroll
- [ ] Content adapts properly

---

## 🔗 FUNCTIONAL TESTING

### Links
- [ ] All internal links work
- [ ] All external links open in new tab
- [ ] No broken links (404s)
- [ ] Email links open email client
- [ ] Social links go to correct profiles

### Forms
- [ ] Required fields enforce validation
- [ ] Email validation works
- [ ] Phone validation works (if applicable)
- [ ] Conditional fields show/hide correctly
- [ ] Error messages are clear
- [ ] Success messages work
- [ ] Form resets after submission

### Navigation
- [ ] Logo links to home
- [ ] All nav links work
- [ ] Active page highlighted
- [ ] Smooth scroll to anchors works
- [ ] Back button works correctly

### Animations
- [ ] Logo ticker scrolls smoothly
- [ ] Rolling text rotates correctly
- [ ] Card hovers work
- [ ] Scroll reveals trigger
- [ ] No performance issues
- [ ] Animations respect reduced-motion

---

## 🔍 SEO TESTING

### Meta Tags (Each Page)
- [ ] Title tag present (< 60 characters)
- [ ] Meta description present (< 160 characters)
- [ ] Canonical URL set
- [ ] Open Graph tags present
- [ ] Twitter Card tags present

### Structure
- [ ] One H1 per page
- [ ] Heading hierarchy correct (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] Semantic HTML used

### Technical
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] No duplicate content
- [ ] No broken internal links
- [ ] HTTPS enabled

### Tools
```bash
# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters

# SEO Site Checkup
https://seositecheckup.com/
```

---

## 🛡️ SECURITY TESTING

### SSL/HTTPS
- [ ] Valid SSL certificate
- [ ] HTTPS enforced (no mixed content)
- [ ] Certificate not expired
- [ ] No security warnings

### Headers (Check with securityheaders.com)
- [ ] X-Frame-Options set
- [ ] X-Content-Type-Options set
- [ ] X-XSS-Protection set
- [ ] Referrer-Policy set
- [ ] Content-Security-Policy recommended

### Forms
- [ ] No sensitive data in URLs
- [ ] CSRF protection (when backend connected)
- [ ] Rate limiting planned
- [ ] Input sanitization planned

---

## 👥 USER TESTING

### Test with Real Users (5-10 people)
- [ ] **Task 1:** Find and complete membership application
- [ ] **Task 2:** Learn about the team
- [ ] **Task 3:** Subscribe to newsletter
- [ ] **Task 4:** Contact the team
- [ ] **Task 5:** Log in or sign up

### Collect Feedback
- [ ] Is the purpose clear?
- [ ] Is navigation intuitive?
- [ ] Are forms easy to fill?
- [ ] Is the mobile experience good?
- [ ] Any confusing elements?

---

## 📊 TESTING TOOLS SUMMARY

### Free Tools
- **Chrome DevTools** - Performance, Lighthouse
- **Firefox Developer Tools** - Accessibility, Responsive
- **WAVE** - Accessibility checking
- **GTmetrix** - Performance analysis
- **WebPageTest** - Speed testing
- **Google Search Console** - SEO monitoring
- **Mobile-Friendly Test** - Mobile optimization

### Paid Tools (Optional)
- **BrowserStack** ($39/mo) - Cross-browser testing
- **Pingdom** ($10/mo) - Uptime monitoring
- **Hotjar** ($39/mo) - User behavior analytics

---

## ✅ PRE-LAUNCH CHECKLIST

### Content
- [ ] All text proofread (no typos)
- [ ] All images optimized
- [ ] All placeholders replaced
- [ ] All links tested

### Technical
- [ ] DNS configured correctly
- [ ] SSL certificate active
- [ ] Analytics tracking works
- [ ] Forms submit properly
- [ ] Error pages configured
- [ ] Redirects work (if any)

### SEO
- [ ] Sitemap submitted to Google
- [ ] robots.txt configured
- [ ] Meta tags complete
- [ ] Structured data added
- [ ] Social meta tags set

### Legal
- [ ] Privacy policy linked
- [ ] Terms and conditions linked
- [ ] Cookie notice (if applicable)
- [ ] GDPR compliance (if applicable)

### Performance
- [ ] Lighthouse score 90+
- [ ] Load time < 3 seconds
- [ ] Images compressed
- [ ] Caching configured

---

## 🐛 COMMON ISSUES & FIXES

### Issue: Images not loading
**Fix:** Check file paths are correct (case-sensitive)

### Issue: Mobile menu not closing
**Fix:** Check JavaScript console for errors

### Issue: Forms not submitting
**Fix:** Check network tab, connect to backend

### Issue: Layout broken on specific device
**Fix:** Test responsive CSS, check media queries

### Issue: Slow performance
**Fix:** Compress images, enable caching, minify CSS/JS

---

## 📝 BUG REPORT TEMPLATE

```markdown
**Description:**
Brief description of the issue

**Steps to Reproduce:**
1. Go to page X
2. Click on Y
3. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Device:**
- Browser: Chrome 120
- OS: Windows 11
- Screen: 1920x1080

**Screenshots:**
Attach if applicable

**Priority:**
Critical / High / Medium / Low
```

---

## 🚀 LAUNCH TESTING (Final)

### Day Before Launch
- [ ] Run full test suite again
- [ ] Test on production URL
- [ ] Verify DNS propagation
- [ ] Check SSL certificate
- [ ] Test all forms
- [ ] Verify analytics tracking
- [ ] Test backup/rollback plan

### Launch Day
- [ ] Monitor server performance
- [ ] Check error logs
- [ ] Monitor analytics (traffic spike)
- [ ] Test from different locations
- [ ] Check social media shares work
- [ ] Verify all email notifications

### Week After Launch
- [ ] Review analytics data
- [ ] Check for 404 errors
- [ ] Monitor form submissions
- [ ] Collect user feedback
- [ ] Fix any issues found
- [ ] Update documentation

---

**Testing is essential for a successful launch. Take your time and be thorough!** ✅
