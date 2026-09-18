# NOAH Digital Website

Production-ready static website for **NOAH Digital**.

- Primary domain: **https://noahdigital.io/**
- Contact email: **hello@noahdigital.io**
- Positioning: **Global Performance Commerce**
- Core model: **Connected Growth System**
- Canonical journey: **Acquire → Expand → Convert → Learn → Improve**

## Core pages

- `index.html` — Home
- `solutions.html` — Solutions
- `network.html` — Our Network
- `intelligence.html` — NOAH Intelligence
- `why.html` — Why NOAH
- `contact.html` — Brand / Partner inquiries

## Shared system

- `site-system.css` — shared header, footer, typography, visual-system rules
- `site-shell.js` — shared mobile-navigation behavior
- `preqa-polish.css` — final spacing and responsive polish
- `assets/noah-lockup.png` — canonical NOAH logo
- `assets/property/dealscanvas-homepage.webp` — approved DealsCanvas visual
- `assets/property/catchthedeal-homepage.avif` — approved CatchTheDeal.ai visual

## Legal pages

- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Use
- `cookies.html` — Cookie Policy
- `404.html` — Custom page-not-found experience

## SEO / launch files

- `robots.txt`
- `sitemap.xml`
- Canonical URLs and Open Graph metadata are included on all core pages.

## Important deployment notes

1. The contact forms currently open the visitor's default email client and send to `hello@noahdigital.io`. If production requires server-side form delivery, replace the mailto workflow during deployment.
2. Configure the production host for `noahdigital.io`, HTTPS, and a single canonical host (redirect `www` or non-`www` consistently).
3. Verify AVIF/WebP MIME types and long-lived caching for static assets.
4. Add production analytics / tag management only after the final tracking requirements are approved.
5. A dedicated square favicon and 1200×630 social-share image are recommended before public launch. The current social metadata uses the NOAH lockup asset.
6. Verify any promotional language visible inside approved property showcase images before public launch.
7. Run final visual smoke tests in Chrome, Safari, Edge, iOS Safari, and Android Chrome after deployment to the production host.

## QA status

Code-level final QA completed before developer handoff:
- Shared header/footer normalized across all six pages
- Internal links and section anchors checked
- No dead placeholder links
- No duplicate IDs
- One H1 per page
- Image paths and alt text checked
- Direct local assets used for logo and owned-property visuals
- JavaScript syntax checked
- CSS brace structure checked
- Responsive mobile navigation standardized
- Skip-to-content accessibility link added
- Domain/email standardized to `noahdigital.io`
- Legacy prototype wording and old optimization/activation language removed
- Legal pages are included and linked from every footer
- LinkedIn company page is linked in every footer

The developer should perform the final browser/device review and deployment verification on the production environment.
