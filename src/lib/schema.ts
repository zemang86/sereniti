/**
 * JSON-LD structured data builders (schema.org).
 *
 * Strategy (per AEO/GEO best practice for YMYL medical content):
 * - One site-wide @graph in the root layout: MedicalOrganization + WebSite,
 *   with stable @id values so per-page nodes reference them.
 * - Per-page nodes (Person, Service, BlogPosting, FAQPage, BreadcrumbList)
 *   reference the org/website by @id instead of duplicating them.
 */

import { site, socialLinks, absoluteUrl } from "@/lib/site";

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

type Node = Record<string, unknown>;

/** MedicalOrganization node — the central entity for the whole site. */
export function organizationNode(): Node {
  return {
    "@type": "MedicalOrganization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(site.logo),
    },
    image: absoluteUrl(site.ogImage),
    description: site.description,
    slogan: site.tagline,
    medicalSpecialty: "Psychiatric",
    email: site.email,
    telephone: site.phoneE164,
    foundingDate: site.founded,
    knowsLanguage: ["en", "ms"],
    areaServed: { "@type": "Country", name: site.address.countryName },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      email: site.email,
      contactType: "customer service",
      availableLanguage: ["English", "Bahasa Malaysia"],
      areaServed: site.address.country,
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SSM Registration",
      value: site.registration,
    },
    ...(socialLinks.length ? { sameAs: socialLinks } : {}),
  };
}

/** WebSite node. */
export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.shortDescription,
    inLanguage: ["en-MY", "ms-MY"],
    publisher: { "@id": ORG_ID },
  };
}

/** Wrap nodes into a @graph document. */
export function graph(...nodes: Node[]): Node {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** BreadcrumbList from [{name, path}] (path relative, e.g. "/services"). */
export function breadcrumbNode(
  items: { name: string; path: string }[]
): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** Person node for a team member. */
export function personNode(member: {
  slug: string;
  name: string;
  role: string;
  bio: string;
  qualifications?: string[];
  photo?: string;
}): Node {
  return {
    "@type": "Person",
    "@id": absoluteUrl(`/team/${member.slug}#person`),
    name: member.name,
    jobTitle: member.role,
    description: member.bio.split("\n\n")[0],
    url: absoluteUrl(`/team/${member.slug}`),
    ...(member.photo ? { image: absoluteUrl(member.photo) } : {}),
    worksFor: { "@id": ORG_ID },
    ...(member.qualifications && member.qualifications.length
      ? {
          hasCredential: member.qualifications.map((q) => ({
            "@type": "EducationalOccupationalCredential",
            name: q,
          })),
        }
      : {}),
  };
}

/** Service node (a clinical / productized offering). */
export function serviceNode(svc: {
  name: string;
  description: string;
  path: string;
}): Node {
  return {
    "@type": "MedicalTherapy",
    name: svc.name,
    description: svc.description,
    url: absoluteUrl(svc.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: site.address.countryName },
  };
}

/** BlogPosting node for an article. */
export function blogPostingNode(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  author?: string;
}): Node {
  return {
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.category ? { articleSection: post.category } : {}),
    inLanguage: "en-MY",
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(site.ogImage),
  };
}

/** FAQPage node from Q&A pairs — high value for answer engines. */
export function faqNode(faqs: { q: string; a: string }[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
