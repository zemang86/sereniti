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
