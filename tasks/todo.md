# UI/UX detail pass — 2026-10-21

Design read: preserve-mode polish of a trust-first mental-health site. Keep the sunrise brand, IA,
URLs, copy voice. Evidence: headless Chrome screenshots (1440 + 390) of 14 templates, 4 parallel
audits (~120 findings, contrast computed with WCAG maths). Full reports in this session.

## Phase 1: systemic (one fix, every page)
- [x] globals.css base rules -> `@layer base` (unlayered h1-h3 rule beats utilities: every
      `font-sans` card title is faux-bold DM Serif; Fraunces never renders on /damaura;
      `:focus-visible{border-radius:4px}` squares every pill). Focus ring night (dawn on dark).
- [x] Reveal threshold: `amount: 0.2` can't fire on elements > 5 viewports tall. Blog grid and
      6/8 articles are BLANK on phones in production. -> `amount: "some"` + margin; no reveal on
      article body or hero h1/LCP image.
- [x] Contrast: coral text 2.8:1 and night/60 4.4:1 fail AA site-wide. Add `coral-ink` (#A34A26)
      for text + hover fills; coral stays for icons/fills. night/60 -> /70 (hero subtitles /75),
      /50 /55 /40 -> /70; dawn/40,/50 on dark -> /60,/70; input borders + placeholders; step numerals.
- [x] Logo SVGs: wordmark is live <text> with no fill -> footer logo is black-on-night (invisible),
      header falls back to Times. Outline glyphs with fontTools at the exact tspan positions,
      light variant filled dawn, crop viewBox, size up.
- [x] Equal-height cards + whole-card links (ServiceCard, TeamCard, BlogCard); no hover-lift on
      non-clickable cards. Full-width stacked CTAs on mobile.
- [x] Eyebrow cut: ~20 -> ~8 (keep where they label, drop where they restate the h2).
- [x] <title> em dash -> "|". indigo-bg.png 6.8MB -> WebP.

## Phase 2: interactive a11y
- [x] Header dropdowns keyboard-reachable (disclosure, aria-expanded, Escape). MobileNav as dialog
      (focus in/out, Escape, inert, scrollable). Skip link + <main id>. aria-current on nav.
- [x] Homepage carousel: pause on hover/focus/reduced-motion (WCAG 2.2.2), 24px dots.
- [x] Crisis lines: whole card tappable on /damaura; tel: links inside article text.

## Phase 3: page polish
- [x] Home: hero 4 lines -> 3, less float, soft bottom fade; image sizes/fetchPriority; Damaura
      section text-first on mobile; Team->FAQ dead gap; one label per CTA intent; footer 2-col mobile.
- [x] Services: corporate offerings 2x2 (no 3+1 orphan), one CTA per intent, h2 scale;
      template: issues as one list card (no 3+3+1), hero eyebrow + Book CTA, first-session default.
- [x] About/Team/Contact: values as one list (no 3+2), equal Vision/Mission, profile back link,
      bio measure, details grid; contact form autocomplete, optional labels, actionable error +
      success focus, crisis/privacy line by submit, WhatsApp link, honeypot; better 404.
- [x] Blog: featured first post (fills the empty 12th slot), 3-line excerpts, mobile article
      measure 38 -> 47 chars, show Updated date + linked author, related posts by category,
      intent-matched end CTA; 4 internal-brief excerpts rewritten; "8 Signs" lists 9.
- [x] /damaura: swipe row for screens on mobile (phones are 161px wide now), faith pills that look
      like toggles -> caption, line lengths, bottom-card link alignment.

## Review (UI/UX pass)

Verified on `next build` + `next start`, 19 routes x 1440/390 (headless Chrome, scrolled through):
- 0 axe-core violations (WCAG 2.0/2.1/2.2 A+AA) on all 38 page/viewport runs. Sanity check: axe
  does flag a planted coral-on-dawn line, so the zero is real. 8 "incomplete" = text on gradients.
- 0 horizontal overflow, 0 content left invisible after scroll (blog was blank on phones).
- h3.font-sans computes DM Sans (was faux-bold DM Serif); /damaura h1 computes Fraunces.
- 0 em/en dashes in rendered text or <title>; 404 returns 404 with its own title.
- Logo outlined: footer wordmark visible, header no longer Times. indigo-bg 6.8MB -> 209KB.
- Home headline 3 lines at 1024/1152/1280/1440.
Not verified: real Formspree submission (tested with the request intercepted); VoiceOver/NVDA by ear.

## Needs Hazman (not doing)
- Ummu's photo: white cutout vs Sarah's dark corridor look mismatched side by side. Needs a re-shoot/re-edit.
- Sarah's credential/specialty wording (inconsistent MAHPC formatting, DSM misquote): needs her sign-off.
- practice.webp / journey.webp show content bleeding under the tab bar: re-export from the app.
- Unsourced numbers: 500+/98% stats, RM1.8B / 4:1, EAP <5%, psychiatrists per 100k.
- Privacy policy page (contact form collects health-adjacent data; PDPA).
- Dark mode: out of scope for a preserve pass.
- "Licensed" vs "registered": MAHPC term is registered. /team + careers now say registered; /about,
  FAQ, site.description, team.ts bio still say licensed. Pick one site-wide.
- Carousel: pauses on hover/focus/reduced-motion; a strict WCAG 2.2.2 audit may still want a visible
  pause button.
- Family page: "How Sessions Are Structured" sits right above "How Sessions Work" (copy call).

# Damaura truth pass — 2026-10-21

Source of truth: /Users/hazman/damaura (audited HEAD 77a84d5a). Decisions (Hazman, 21 Oct):
screening -> new /damaura page; org claim -> narrow (aggregate engagement + themes at 5+, never individual).

- [x] /damaura page (real features, sample-data screens, faith layers, safety, orgs) in Damaura colours/fonts
- [x] 308 /services/screening -> /damaura; delete screening page; nav/footer/sitemap/services index/schema
- [x] Remove sleep claims (home, FAQ, corporate, about, AI blog post, llms-full)
- [x] Remove therapist-review / real-time / early-warning / "AI screening" claims (home, about, adults, blog, corporate, llms)
- [x] Homepage carousel -> 5 new-UI webp screens, "Sample data" caption; delete old PNG mockups
- [x] Links out: footer "Powered by Damaura" -> damaura.ai; web app CTAs
- [x] MHPSS line in site.crisis
- [x] Verify: lint, build, next start + curl every route, redirect, JSON-LD, no banned claims left

## Review

Audit of the Damaura repo found the site's "Damaura-powered screening" does not exist (no
questionnaire, no score, sign-up required). Org dashboard is real but partial: not real-time,
no alerts written, export stubbed. Specialist sharing exists but no Serenitilabs clinicians
are on it, so "your therapist can review" was dropped rather than reworded.

- New /damaura (Damaura paper/plum + Fraunces/Jakarta, scoped to that route only): Today/Talk/
  Practice/Journey with sample-data screens, Universal + Islamic layers, safety, orgs (narrow
  claim), WebApplication JSON-LD (no offers). OG = Damaura's own og.png.
- /services/screening deleted, 308 -> /damaura. Nav, footer, sitemap, services index, schema,
  layout keywords, blog CTA (all 11 posts) now point at Damaura.
- Sleep / screening / real-time / early-warning / therapist-review claims removed from home,
  FAQ (+FAQPage JSON-LD), corporate, about, adults, 4 blog posts (updated: 2026-10-21), llms.
- Homepage carousel: 5 new-UI webp (380KB total) replacing 3 old PNGs (4.8MB). "Sample data".
- Footer "Powered by Damaura" -> damaura.ai on every route; web-app CTAs on home + /damaura.
- MHPSS Helpline added to site.crisis -> footer CrisisNotice on every route.

Verified on `next start`: lint + tsc + build clean; 19 routes/assets 200; /services/screening
308 -> /damaura; banned-claim grep over rendered HTML = 0 hits; JSON-LD parses on all 9
sampled pages; Damaura fonts preload only on /damaura (4 vs 2 elsewhere).
Not verified by eye: layout of /damaura and the homepage spotlight.

Follow-ups (same day):
- Sarah's photo: 200px -> 896px square crop, new filename (avoids stale image-CDN cache).
- Positioning: "AI-native mental health provider" (clinicians do the care, AI does the work
  around it). About gets "How We're Built"; site.description (Org JSON-LD), FAQ #1, llms
  files updated. Kept off the consumer homepage headline on purpose.

## Open — needs Hazman (Damaura repo, not this site)
1. Org settings page claims "All conversations are end-to-end encrypted": false (server-side Claude).
2. Privacy policy promises data export ("Right to Data Portability"); no export exists.
3. Org dashboard department engagement has no minimum group size: a 1-2 person department
   reveals who uses the app. Patterns (5+) and risk (3+) are thresholded; engagement is not.
4. Risk Awareness card reads `alerts`, which nothing writes: always empty.
5. Blog excerpts on this site still carry internal brief text ("Shareable and actionable.",
   "Addresses common fears..."): 4 posts, shown as meta descriptions.

# SEO/AEO remediation — 2026-09-07

## Block 1 — credibility & duty of care (not optimisation)
- [x] Homepage "4 Licensed Therapists" vs 2 in team.ts → derive from data
- [x] Remove placeholder testimonials (self-labelled fake, shipping to crawlers)
- [x] Add crisis resources to site chrome (footer + contact); currently blog-prose only
- [x] Fix dead Privacy Policy / Terms links (href="#")
- [x] Stop /umt-proposal26 (client deck) being crawlable

## Block 2 — broken machine-readable data
- [x] ISO 8601 dates across 11 blog posts (+ display formatter)
- [x] serviceNode: MedicalTherapy -> ["Service","MedicalTherapy"], add @id/serviceType/audience/availableChannel
- [x] Add serviceNode to psychotherapy/{adults,children,couples,family}
- [x] BlogPosting.author -> link to existing Person @id
- [x] personNode: consume specialties -> knowsAbout, languages -> knowsLanguage

## Deferred (needs Hazman's decision)
- Cloudflare robots.txt AI-crawler conflict — dashboard setting, not code
- Pricing content — business decision
- llms.txt regeneration from source — structural, separate change
- Twitter cards / per-page OG — bulk edit, 16 files
- "500+ Sessions" / "98% Client Satisfaction" — unverifiable, left untouched

## Review

Both blocks done, verified against `next start` (not dev).

**Block 1 — credibility**
- Homepage stat now `String(teamMembers.length)` -> renders "2". Was a hardcoded "4"
  contradicting team.ts, /team, both profile pages, the Person JSON-LD and both llms files.
- Deleted the whole `Testimonials` component (70 lines): 3 invented quotes plus a
  subtitle that literally read "Placeholder testimonials. Real stories coming soon."
  All of it was server-rendered to crawlers.
- New `CrisisNotice` in the footer -> Befrienders KL / Talian Kasih / 999 now on
  16/16 routes. Numbers taken from those already cited in blog.ts so they stay consistent.
- Removed the two `href="#"` footer links. A Privacy Policy link that goes nowhere
  implies a policy exists. REAL PAGES STILL NEEDED - see open items.
- /umt-proposal26 now disallowed in all 38 robots groups + `noindex` meta in the HTML.

**Block 2 — structured data**
- 11 blog dates -> ISO 8601. datePublished/dateModified/og:published_time were all
  invalid. Side effect: sitemap lastmod was a day early (Asia/KL parse of a US date
  string); now correct at 2026-04-24T00:00:00.000Z.
- Added optional `updated` field; dateModified is `updated ?? date` instead of
  always claiming the post was never revised.
- serviceNode -> ["Service","MedicalTherapy"] + @id + serviceType + audience +
  availableChannel. provider/areaServed were being ignored on the old bare
  MedicalTherapy type. Screening and corporate are now plain `Service` (neither is a therapy).
- serviceNode added to adults/children/couples/family - those 4 had breadcrumb-only markup.
- BlogPosting.author now references the existing Person @id for named clinicians;
  house byline resolves to the org instead of a fake Person.
- personNode consumes specialties -> knowsAbout (6 entries) and languages -> knowsLanguage.
  Both fields already existed in team.ts and were being discarded.

**Verified:** lint clean, build clean, 16/16 routes emit valid JSON-LD.

## Open — needs Hazman
1. Cloudflare robots.txt is prepending Disallow for ClaudeBot/GPTBot/Google-Extended/CCBot,
   contradicting our Allow. Dashboard setting; no code fix possible. Undermines all AEO work.
2. Privacy Policy + Terms pages do not exist. Contact form sends health-adjacent data to
   Formspree (third party) - PDPA relevance.
3. "500+ Sessions Delivered" and "98% Client Satisfaction" left untouched - unverifiable
   from the repo. Confirm or cut.
4. Pricing: highest-intent unanswered question. Own blog post cites RM100-400 market range
   then declines to state Serenitilabs' rates.
5. llms.txt drift: 0/11 blog posts and 0/6 depth-3 pages listed; unverifiable "target
   sectors" claim; misquoted mission; 6 of Sarah's 8 credentials dropped. Fix by generating
   from source, not hand-editing (it drifted because it is hand-maintained).
6. Twitter cards missing on 15/17 routes; single site-wide OG image.
7. hreflang/ms_MY claimed with zero Bahasa Malaysia content.
