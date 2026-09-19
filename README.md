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

## SEO hardening completed

- Search-focused page titles and unique meta descriptions across all indexable pages
- Canonical URL on every indexable page
- Explicit index/follow directives with large-image/snippet preview allowances
- Open Graph site, title, description, URL, locale, image, and image-alt metadata
- Twitter card metadata with image and accessible image description
- Homepage Organization + WebSite + WebPage JSON-LD
- Organization identity linked to the official LinkedIn company profile
- Organization contact point for business inquiries
- BreadcrumbList JSON-LD on secondary pages
- Service/ItemList structured data for the four visible Solutions capabilities
- AboutPage and ContactPage semantic schema where appropriate
- robots.txt allows crawling and declares the XML sitemap
- XML sitemap includes all 9 indexable pages and accurate 2026-09-18 lastmod values
- Custom 404 is marked noindex
- Descriptive heading hierarchy and substantial crawlable HTML copy on the core commercial pages
- Internal contextual links connect Solutions, Network, Intelligence, Why NOAH, Contact, and the owned commerce properties
- Approved property images are local, lazy-loaded, async-decoded, and include intrinsic dimensions

### SEO tasks that require the production domain

After deployment, complete these items against the live HTTPS domain:

1. Verify ownership of **noahdigital.io** in Google Search Console.
2. Submit **https://noahdigital.io/sitemap.xml** and inspect the core URLs.
3. Run Google Rich Results Test / Schema validation on the deployed pages and resolve any production-only warnings.
4. Run Lighthouse / PageSpeed Insights on mobile and desktop and address any Core Web Vitals regressions introduced by hosting, scripts, analytics, or form services.
5. Add a compliant favicon and confirm that Google can crawl it.
6. Add a dedicated 1200×630 social-sharing image and update Open Graph/Twitter metadata from the current NOAH lockup.
7. Verify canonical redirects, HTTPS, robots.txt, sitemap.xml, 404 status behavior, and cache headers on the actual production host.
8. Connect analytics and conversion measurement only after the tracking/consent approach is approved.
9. Monitor Search Console indexing, structured-data enhancements, Core Web Vitals, crawl errors, and search queries after launch.

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
