/**
 * Single source of truth for site-wide facts.
 * Used by metadata, JSON-LD structured data, sitemap, robots, and llms.txt.
 */

export const site = {
  name: "Serenitilabs",
  legalName: "Serenitilabs Sdn. Bhd.",
  registration: "202601000377 (1662475-P)",
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
