# Tovo website

- [x] Read app skill and web reference; obtain visual-reference selection and plan approval.
- [x] Review supplied logo and moodboard. Follow requested yellow palette; supplied logo and email retained.
- [x] Initialize managed app; document design.md before UI implementation.
- [x] Build seven-section React landing page, phone concept previews, contact links, launch dialog and privacy page.
- [x] Optimize local photos, self-host fonts, provide SEO and social image.
- [x] Fix hero phone positioning discovered in screenshot review.
- [x] Browser tests: no JS errors; 320/390/600/768/1024/1440 widths have no horizontal overflow; mobile nav, launch dialog, Escape, close, final CTA, Instagram notice, privacy route and email href verified; all images loaded.
- [x] Final lint: zero warnings/errors. Production build succeeded; standard bundle-size advisory remains (157 KB gzip main JS including template runtime).
- [x] Desktop and mobile screenshots visually reviewed.

Subsequent revisions completed: pink world accent, decorative slogans removed, Tovo capitalization, supplied Instagram URL connected, dead CTA buttons removed, future AI announcement section, OG image and favicon refreshed.

Current revision:
- [x] Final caption replaced exactly with “Your World, Unfolding, March 2027.” SEO descriptions match supplied month.
- [x] Add responsive.css: safe areas, 44px tap targets, readable copy, 601–950px stacked layouts and narrow-phone mockup scaling.
- [x] Audit 23 viewports, 320px–2560px plus landscape: no horizontal overflow/main-text clipping, mobile navigation verified, no JS errors.
- [x] Review phone, small-phone and tablet full-page screenshots.
- [x] Browser storage audit: empty cookies, localStorage, sessionStorage, IndexedDB. Application has no data-write tables or visitor forms.
- [x] Non-local analytics test: platform analytics requests observed and intercepted for test; integration retained. Privacy notice states this exception explicitly.
- [x] Lint and production build successful.

Limit: cannot promise zero data collection. Platform analytics and hosting technical logs are outside the visitor-data functionality of the site; remote retention is unverified. The website only presents the upcoming product; the AI preview is not a live chat. Cross-size tests are Chromium emulation, not tests on every physical device or Safari version.