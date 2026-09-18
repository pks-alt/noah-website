# NOAH Digital Website

Production-ready static website for **NOAH Digital**.

- Primary domain: **https://noahdigital.io/**
- Contact email: **hello@noahdigital.io**
- Positioning: **Global Performance Commerce**
- Core model: **Connected Growth System**
- Canonical journey: **Acquire → Expand → Convert → Learn → Improve**

## Public pages

- `index.html` — Home
- `solutions.html` — Solutions
- `network.html` — Our Network
- `intelligence.html` — NOAH Intelligence
- `why.html` — Why NOAH
- `contact.html` — Brand / Partner inquiries
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Use
- `cookies.html` — Cookie Policy
- `404.html` — Custom page-not-found experience

## Shared system

- `site-system.css` — shared header, footer, typography, visual-system rules
- `site-shell.js` — shared mobile-navigation behavior
- `preqa-polish.css` — final spacing and responsive polish
- `legal-page.css` — legal-page and 404 presentation
- `assets/noah-lockup.png` — canonical NOAH logo
- `assets/property/dealscanvas-homepage.webp` — approved DealsCanvas visual
- `assets/property/catchthedeal-homepage.avif` — approved CatchTheDeal.ai visual

The Home, Solutions, and Our Network pages use the approved local property assets. There is no runtime dependency on third-party screenshot services for these showcase images.

## SEO / launch files

- `robots.txt`
- `sitemap.xml`
- Canonical URLs and Open Graph metadata are included on all indexable public content pages.
- `404.html` is explicitly marked `noindex`.

## Developer launch checklist

Complete these items before production launch:

1. **Contact forms:** the two inquiry forms currently open the visitor's default email client and prepare a message to `hello@noahdigital.io`. For production lead capture, replace the mailto workflow with a server-side/API form endpoint, success/error states, spam protection, and delivery monitoring.
2. **Domain / HTTPS:** configure `noahdigital.io`, HTTPS, and one canonical host. Permanently redirect the alternate `www` or non-`www` host.
3. **Security headers:** configure appropriate production headers such as HSTS, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy.
4. **Caching / compression:** verify AVIF/WebP MIME types, compression, and long-lived caching for versioned/static assets.
5. **Favicon / social sharing:** add a dedicated favicon/app-icon set, Apple Touch icon, and a 1200×630 NOAH social-share image. Current Open Graph metadata uses the NOAH lockup.
6. **Analytics / consent:** add production analytics or tag management only after tracking requirements are approved. If non-essential analytics/advertising technology is introduced, revisit the Privacy Policy, Cookie Policy, and any consent requirements before enabling it.
7. **Legal review:** obtain final business/legal approval for Privacy Policy, Terms of Use, and Cookie Policy before public launch.
8. **Property imagery:** confirm any promotional language or third-party marks visible inside the approved property showcase images are cleared for public use.
9. **Production QA:** smoke-test Home, Solutions, Our Network, NOAH Intelligence, Why NOAH, Contact, Privacy, Terms, Cookies, and the custom 404 in Chrome, Edge, Safari, iOS Safari, and Android Chrome after deployment.
10. **Forms QA:** verify both brand and partner inquiries on the production host, including validation, success/failure handling, notification delivery, and spam protection.
11. **Monitoring / CI:** this repository currently has no required GitHub status checks or automated browser test workflow. Add deployment/QA automation if required by the production engineering standard.

## QA status before handoff

Code-level QA completed on the `developer-handoff-final` branch:

- Shared header/footer normalized across all public pages
- Privacy / Terms / Cookies visual system revised for desktop, tablet, and mobile
- Internal links and section anchors checked
- No duplicate IDs
- Exactly one H1 per page
- Image paths and alt text checked
- Approved local assets used for logo and owned-property visuals
- Intrinsic dimensions added to approved property imagery to reduce layout shift
- Responsive mobile navigation standardized
- Skip-to-content accessibility link included
- Canonical URLs / Open Graph metadata present on indexable content pages
- `robots.txt` and `sitemap.xml` included
- `404.html` marked `noindex`
- Domain/email standardized to `noahdigital.io` and `hello@noahdigital.io`
- Legacy prototype / optimization / activation wording removed
- Legal pages and LinkedIn are linked from the footer

The developer should perform the final production browser/device, performance, security, and form-delivery verification before merging/deploying.
