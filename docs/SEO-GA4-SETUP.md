# GA4, SEO & Sitemap Integration Guide

## ✅ Completed Setup

This document outlines all the integrations completed for your CeilingHub website.

---

## 1. Google Analytics (GA4) Integration

**Location:** [index.html](index.html#L49-L55)

The GA4 tracking code has been added to your `index.html` file:

```html
<!-- Google Analytics (GA4) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4EXT0LQPJN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4EXT0LQPJN');
</script>
```

**What it does:**
- Automatically tracks all page views
- Tracks user interactions
- Compatible with React Router client-side navigation
- Data will appear in your GA4 dashboard within 24-48 hours

---

## 2. Google Search Console Verification

**Location:** [index.html](index.html#L37)

Add your Google Search Console verification code:

```html
<meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE_HERE" />
```

**Steps to complete:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://ceilinghub.in`
3. Choose "HTML tag" verification method
4. Copy the verification code from this line in the template
5. Replace `YOUR_GSC_VERIFICATION_CODE_HERE` with your actual code
6. Example: `<meta name="google-site-verification" content="abc123xyz456..." />`

---

## 3. Sitemap Integration

**Location:** [/public/sitemap.xml](../public/sitemap.xml)

A complete XML sitemap has been created with:
- Home page
- Products page
- All 25 individual product pages (/product/1 to /product/25)
- Support page
- Last modified dates and change frequencies

**Features:**
- Proper XML structure following sitemap protocol
- Priority levels set appropriately (1.0 for home, 0.9 for products listing, 0.8 for individual products, 0.7 for support)
- Change frequencies set (weekly for home/products, monthly for individual products)

**Automatic availability:**
- Accessible at: `https://ceilinghub.in/sitemap.xml`
- Referenced in index.html: `<link rel="sitemap" href="/sitemap.xml" />`
- Can be submitted to Google Search Console

---

## 4. SEO Meta Tags

**Location:** [index.html](index.html#L13-L35)

Base SEO meta tags added to index.html:

```html
<!-- Basic Meta Tags -->
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="CeilingHub" />

<!-- Open Graph Meta Tags (for social media) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ceilinghub.in/" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />

<!-- Twitter Card Meta Tags -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="..." />

<!-- Robots & Canonicals -->
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://ceilinghub.in/" />
<link rel="sitemap" href="/sitemap.xml" />
```

---

## 5. Dynamic Page Meta Tags (React Router)

**Location:** [src/hooks/usePageMeta.js](../src/hooks/usePageMeta.js)

A custom React hook has been created to manage dynamic meta tags per page.

### How to use in any page:

```javascript
import { usePageMeta } from '../hooks/usePageMeta';

export default function YourComponent() {
  // Call this hook at the top level of your component
  usePageMeta(
    'Page Title',
    'Meta description for this page',
    'https://ceilinghub.in/your-page'
  );

  return <div>Your component JSX</div>;
}
```

### Pages already updated:

1. **Home Page** ([src/pages/Home.jsx](../src/pages/Home.jsx))
2. **Products Page** ([src/pages/Products.jsx](../src/pages/Products.jsx))
3. **Product Detail Page** ([src/pages/ProductPage.jsx](../src/pages/ProductPage.jsx))
4. **Support Page** ([src/pages/Support.jsx](../src/pages/Support.jsx))

Each page now updates:
- ✅ Document title
- ✅ Meta description
- ✅ Open Graph tags (og:title, og:description, og:url, og:image)
- ✅ Twitter Card tags
- ✅ Canonical URL

---

## 6. Robots.txt

**Location:** [/public/robots.txt](../public/robots.txt)

Standard robots.txt file created:
- Allows all crawlers
- Points to sitemap location
- Accessible at: `https://ceilinghub.in/robots.txt`

---

## 📋 Pre-Deployment Checklist

Before deploying to Vercel, complete these steps:

- [ ] **Add GSC Verification Code** - Replace `YOUR_GSC_VERIFICATION_CODE_HERE` in index.html with your actual code
- [ ] **Deploy to Vercel** - Push changes to your repository
- [ ] **Verify in GSC** - Go to Google Search Console and verify `https://ceilinghub.in`
- [ ] **Submit Sitemap** - In GSC, go to Sitemaps and submit `https://ceilinghub.in/sitemap.xml`
- [ ] **Check GA4** - After 24-48 hours, check your GA4 dashboard to see if data is being collected
- [ ] **Monitor Search Console** - Wait 5-7 days for Google to crawl and index your sitemap

---

## 🔍 Verification Steps

### 1. Verify GA4 is working:
- Go to [Google Analytics Dashboard](https://analytics.google.com)
- Select your property
- Go to "Realtime" > "Overview"
- Visit your website - you should see activity

### 2. Verify Meta Tags:
```bash
# Open browser DevTools (F12)
# Go to Elements/Inspector tab
# Check <head> section for the meta tags
```

### 3. Verify Sitemap:
```bash
# Visit: https://ceilinghub.in/sitemap.xml
# You should see XML with all URLs
```

### 4. Verify Robots.txt:
```bash
# Visit: https://ceilinghub.in/robots.txt
# You should see the robots rules
```

---

## 🚀 Post-Deployment Actions

1. **Submit to Google Search Console:**
   - Add property: https://ceilinghub.in
   - Verify with provided meta tag
   - Go to Sitemaps and submit `/sitemap.xml`
   - Go to URL Inspection and test a few URLs

2. **Monitor GA4:**
   - Check Realtime view to confirm tracking is working
   - Set up goals/conversions for contact form submissions
   - Create custom dashboards

3. **Submit to Bing Webmaster Tools:**
   - Go to [Bing Webmaster Tools](https://www.bing.com/webmastertools)
   - Add your property
   - Submit sitemap

4. **Verify Social Media Preview:**
   - Test on [Facebook Share Debugger](https://developers.facebook.com/tools/debug/)
   - Test on [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 📊 File Changes Summary

| File | Change | Location |
|------|--------|----------|
| `index.html` | ✅ Added GA4, GSC, meta tags | Root |
| `public/sitemap.xml` | ✅ Created | New file |
| `public/robots.txt` | ✅ Created | New file |
| `src/hooks/usePageMeta.js` | ✅ Created | New file |
| `src/pages/Home.jsx` | ✅ Updated with usePageMeta | Updated |
| `src/pages/Products.jsx` | ✅ Updated with usePageMeta | Updated |
| `src/pages/ProductPage.jsx` | ✅ Updated with usePageMeta | Updated |
| `src/pages/Support.jsx` | ✅ Updated with usePageMeta | Updated |

---

## 🆘 Troubleshooting

### GA4 not showing data:
- Verify tracking ID is correct: `G-4EXT0LQPJN`
- Check browser DevTools > Network to confirm gtag.js loads
- Wait 24-48 hours for data to appear

### Meta tags not updating:
- Make sure you're using the `usePageMeta` hook at the top level of your component
- Don't call it conditionally or inside other hooks
- Check browser DevTools > Elements to verify tags are present

### Sitemap not indexing:
- Submit to Google Search Console manually
- Make sure all URLs are accessible (no 404 errors)
- Wait 1-2 weeks for initial crawl

### GSC still not verified:
- Make sure meta tag is exactly as provided by GSC
- Check for typos
- Clear cache and reload
- Verify property in GSC dashboard

---

## 📚 Resources

- [Google Analytics 4 Setup Guide](https://support.google.com/analytics/answer/10089681)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap XML Protocol](https://www.sitemaps.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Open Graph Tags](https://ogp.me/)

---

**Last Updated:** April 17, 2025
**Website:** https://ceilinghub.in
**Status:** ✅ Ready for Production Deployment
