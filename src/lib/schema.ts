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
import { teamMembers } from "@/content/team";

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
    // Company-level training accreditation. Deliberately NOT a second `identifier`:
    // the certificate serial is the same number as the SSM registration above.
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: site.hrdCorp.credential,
      credentialCategory: "Training Provider Registration",
      recognizedBy: {
        "@type": "Organization",
        name: site.hrdCorp.issuer,
        alternateName: site.hrdCorp.issuerShort,
      },
      validIn: { "@type": "Country", name: site.address.countryName },
      validFrom: site.hrdCorp.approved,
      expires: site.hrdCorp.expires,
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
  specialties?: string[];
  languages?: string[];
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
    ...(member.specialties?.length ? { knowsAbout: member.specialties } : {}),
    ...(member.languages?.length ? { knowsLanguage: member.languages } : {}),
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

/**
 * Service node (a clinical / productized offering).
 *
 * Typed as both `Service` and `MedicalTherapy`: `provider` and `areaServed` are
 * Service properties and are NOT in the domain of `MedicalTherapy`
 * (MedicalProcedure -> MedicalEntity), so a bare MedicalTherapy node has both
 * of them ignored. Pass `medical: false` for offerings that are not a therapy
 * (screening, corporate programmes).
 */
export function serviceNode(svc: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  audience?: string;
  medical?: boolean;
}): Node {
  return {
    "@type": svc.medical === false ? "Service" : ["Service", "MedicalTherapy"],
    "@id": absoluteUrl(`${svc.path}#service`),
    name: svc.name,
    description: svc.description,
    url: absoluteUrl(svc.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: site.address.countryName },
    ...(svc.serviceType ? { serviceType: svc.serviceType } : {}),
    ...(svc.audience
      ? { audience: { "@type": "PeopleAudience", audienceType: svc.audience } }
      : {}),
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "Online",
        serviceUrl: absoluteUrl("/about/contact"),
      },
      {
        "@type": "ServiceChannel",
        name: "In person",
        serviceLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            addressCountry: site.address.country,
          },
        },
      },
    ],
  };
}

/**
 * Resolve an article byline to a graph reference. Named clinicians link to their
 * existing Person node so article authority attaches to a credentialed human;
 * the house byline resolves to the organisation.
 */
function authorRef(author?: string): Node {
  if (!author || author === `${site.name} Team`) return { "@id": ORG_ID };
  const member = teamMembers.find((m) => m.name === author);
  return member
    ? { "@id": absoluteUrl(`/team/${member.slug}#person`) }
    : { "@type": "Person", name: author };
}

/** BlogPosting node for an article. */
export function blogPostingNode(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  category?: string;
  author?: string;
}): Node {
  return {
    "@type": "BlogPosting",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    ...(post.category ? { articleSection: post.category } : {}),
    inLanguage: "en-MY",
    author: authorRef(post.author),
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
