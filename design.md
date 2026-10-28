# Tovo — Design

Official pre-launch event-discovery website, web only. Preserve the user's English copy. Reference informs strong typography, generous spacing and solid-color section rhythms, not neon decorations.

## Brand and typography
- Warm yellow #FFD84D, near-black #191A18, off-white #FAFAF7, secondary grey #66675F.
- Revision: hero word “world” uses the supplied moodboard pink #FF00C7. Remove decorative mini-slogans, eyebrows, numbering and redundant footer copy. Retain essential product descriptions and honest app-preview disclosure.
- Self-hosted Manrope 400–800. Bold, tightly tracked display type; readable body copy.
- Supplied brand symbol extracted from the user's image, paired with the capitalized wordmark Tovo.
- Max-width 1200px; 32–64px desktop gutters, 22px mobile. 100–128px section spacing, 64px mobile.

## Layout and components
White nav; spacious off-white hero with two realistic phone mockups; editorial feature panels; light-yellow app showcase; dark brand section; warm-yellow final CTA; clean footer.
Rounded buttons, fine borders, small directional icons. Shadows only on physical phones. No decorative gradients or generic clutter.

## Pages and flows
Home: working anchors, mailto contact and direct Instagram link to the supplied @tovo.app_ URL. Coming soon and Stay tuned buttons removed, with no replacement CTA or pre-launch modal.
Add an editorial AI section between app showcase and brand section, announcing the user-specified future capability: ask where to go and where friends plan to go. Present two sample questions, not fabricated live answers or an operational chatbot.
App screens are labelled illustrative previews, not live event listings. No testimonials or user numbers. Launch month supplied by the user: March 2027; final caption is exactly “Your World, Unfolding, March 2027.” No signup collection. Privacy page covers website-only contact and analytics.
Skip link, strong contrast, visible keyboard focus, responsive layouts and prefers-reduced-motion support.

## Architecture
Web package React and CSS only; no new API routes or database tables. Static photos, extracted logo and fonts in packages/web/public. Keep platform analytics. SEO metadata. Verify build plus mobile and desktop behavior before delivery.

## Responsive and privacy audit
Device-independent breakpoints; stacked hero/showcase through 950px, smaller mockups at narrow phone widths, 44px tap targets, readable 14–16px body copy, safe-area support and reduced-motion preference. Tested 23 viewport configurations from 320px to 2560px including landscape. No horizontal overflow, external main-copy clipping or console errors detected in Chromium emulation; not a physical-device/Safari certification.
Browser checks found no cookies, localStorage, sessionStorage or IndexedDB data. Application schema has no data tables and no visitor data-write procedures. Platform analytics still transmits page-view requests: preserve required integration and clearly disclose it. Hosting logs and remote analytics retention are not independently verified; never advertise “zero data collected.”
