/**
 * Single source of truth for site-wide facts.
 * Used by metadata, JSON-LD structured data, sitemap, robots, and llms.txt.
 */

export const site = {
  name: "Serenitilabs",
  legalName: "Serenitilabs Sdn. Bhd.",
  registration: "202601000377 (1662475-P)",
  /**
   * HRD Corp (Pembangunan Sumber Manusia Berhad) Training Provider registration.
   * NOTE: `serial` is the SAME number as `registration` above — HRD Corp reuses the SSM
   * company number as the certificate serial. Never render it as a second, separate
   * registration number; lead with the credential name and validity dates instead.
   * Expires 2027-08-03 — after that date every claim below becomes false.
   */
  hrdCorp: {
    credential: "HRD Corp Registered Training Provider",
    issuer: "Pembangunan Sumber Manusia Berhad",
    issuerShort: "HRD Corp",
    serial: "202601000377",
    approved: "2026-08-04",
    expires: "2027-08-03",
    certificate: "/hrd-corp-training-provider-certificate.pdf",
    // Official HRD Corp lockup from the TP portal. Do not recolour, crop or
    // distort it — usage is governed by HRD Corp's corporate identity guidelines.
    logo: "/images/hrd-corp-registered-training-provider.png",
  },
  url: "https://sereniti.my",
  // Short, factual, entity-rich descriptions (good for AEO/GEO citation)
  tagline: "Expert care. Intelligent support.",
  description:
    "Serenitilabs is a Malaysian mental health technology company that combines licensed clinical expertise with AI-powered tools to deliver accessible, personalised mental health care for individuals and organisations. It offers psychotherapy, digital mental health screening, and corporate wellness programmes across Malaysia, powered by its AI companion, Damaura.",
  shortDescription:
    "Expert-led mental health support, enhanced by AI. Psychotherapy, digital screening, and corporate wellness programmes in Malaysia.",
  founded: "2026-01-05",
  email: "hello@sereniti.my",
  phone: "+60 18-398 1795",
  phoneE164: "+60183981795",
  address: {
    locality: "Kuala Lumpur",
    region: "Federal Territory of Kuala Lumpur",
    country: "MY",
    countryName: "Malaysia",
  },
  areaServed: "Malaysia",
  /**
   * Malaysian crisis lines. Duty of care: these must be reachable from site
   * chrome on every page, not buried inside article prose. Numbers match those
   * already cited throughout src/content/blog.ts.
   */
  crisis: {
    lines: [
      { name: "Befrienders KL", detail: "24 hours", display: "03-7627 2929", tel: "+60376272929" },
      { name: "Talian Kasih", detail: "24 hours", display: "15999", tel: "15999" },
      { name: "Emergency", detail: "police / ambulance", display: "999", tel: "999" },
    ],
  },
  // Real social profile URLs (used for schema.org sameAs). Empty = omitted.
  social: {
    instagram: "https://www.instagram.com/damaura.ai/",
    linkedin: "",
    facebook: "",
  },
  ogImage: "/opengraph-image.png",
  logo: "/images/logo-wide.svg",
} as const;

/** sameAs array for structured data (only non-empty profiles). */
export const socialLinks = Object.values(site.social).filter(Boolean);

/** Absolute URL helper. */
export function absoluteUrl(path = ""): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Format an ISO date ("2027-08-03") for display ("3 August 2027"). UTC-pinned so it
 *  renders identically on server and client. */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
