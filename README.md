# NOAH Digital developer handoff

Static website review source for Ghausul and Asad. This revision replaces the earlier symbol-and-mockup version. Production launch approval is still required.

## Download the complete current codebase first

Repository: https://github.com/pks-alt/noah-website

Final review branch: `developer-handoff-final`

Review PR: https://github.com/pks-alt/noah-website/pull/2

Select `developer-handoff-final` in GitHub, then choose Code and Download ZIP. Alternatively, clone the repository and check out that branch. Record `git rev-parse HEAD` in your deployment notes. Do not use an old ZIP, an old preview's source, or `main` as the review baseline.

## Approved business identity

Domain: https://noahdigital.io/

Contact: hello@noahdigital.io

LinkedIn: https://www.linkedin.com/company/noah-digital-inc/

Positioning: Global Performance Commerce. Model: Connected Growth System.

Capabilities: Performance Media, Performance Partnerships, Owned Commerce, and NOAH Intelligence.

## Current presentation revision

All ten pages use plain text links and a word-based Menu/Close control. Decorative arrow symbols, emoji, artificial KPI charts, simulated live dashboards, and stylized property mockups have been removed. The approved NOAH logo is retained. DealsCanvas and CatchTheDeal.ai remain linked as text-based property cards.

Copy is static HTML. The old homepage scripts that overwrote revised text after load and rebuilt property images have been removed. `site-shell.js` now handles navigation only. `content-cleanup.css` contains the presentation adjustments. Do not reintroduce the retired script files or property mockups from Git history.

Policy body language has not been substantively rewritten in this presentation pass. Final legal and business approval remains outstanding. Do not describe this work as an authorship certification or a guarantee about reader perception.

## Pages and local review

Home (`index.html`), Solutions (`solutions.html`), Our Network (`network.html`), NOAH Intelligence (`intelligence.html`), Why NOAH (`why.html`), Contact (`contact.html`), Privacy (`privacy.html`), Terms (`terms.html`), Cookies (`cookies.html`), and the error document (`404.html`).

No application build step is required. Serve the repository root with a static web server, for example `python -m http.server 8000`. Run `python tools/check_content.py` for source checks. The read-only GitHub review workflow runs those checks and packages the source; it does not deploy production or merge PRs.

## Verified scope

The revision was rendered in local Chromium at widths 1440, 1024, 768, 390, and 320 pixels across all ten pages. Checks covered visible symbols, pseudo-element symbols, missing images, JavaScript errors, horizontal text overflow, one H1 per page, and mobile menu opening/closing. Source checks also cover internal files, anchors, duplicate IDs, JSON-LD parsing, and unexpected images.

Local rendering is not a substitute for production-host testing, Safari/iPhone testing, screen-reader testing, or Core Web Vitals field data. Preserve these distinctions in the handoff.

## Remaining launch requirements

1. Replace or formally accept the two email-client inquiry forms. They prepare an email; they do not deliver or store an inquiry through a backend. Add proper server/API delivery, validation, spam controls, and success/error states for production lead capture.
2. Configure DNS, HTTPS, canonical-host redirects, response headers, compression, and caching. Serve unknown URLs with HTTP 404 and the custom error document. Test a nested invalid path as well as `/404.html`.
3. Add approved favicon/app icons and a social-share image. Current social metadata uses the logo. Do not add decorative generated artwork without approval.
4. Obtain business approval for service/network claims and legal approval for Privacy, Terms, and Cookies. Update policies to match the actual production form, hosting, and tracking setup.
5. Confirm the tracking/consent approach before adding analytics or advertising tags. Set up conversion measurement appropriate to the approved form workflow.
6. Verify Search Console ownership, submit the production sitemap, check canonical URLs and indexability, and validate structured data with the appropriate tools. Metadata presence does not guarantee ranking or rich-result eligibility.
7. Complete production browser/device, accessibility, form-delivery, and performance tests. Share the deployed staging URL and test results with PK before merging PR #2 or launching.

Do not merge into `main` or change the approved business positioning without review.
