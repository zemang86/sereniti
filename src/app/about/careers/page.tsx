import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Serenitilabs, a Malaysian mental health company hiring therapists, counsellors, and wellness professionals to deliver human care enhanced by AI tools.",
  alternates: { canonical: "/about/careers" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Careers",
    description:
      "Join Serenitilabs, a Malaysian mental health company hiring therapists, counsellors, and wellness professionals to deliver human care enhanced by AI tools.",
    url: `${site.url}/about/careers`,
    type: "website",
  },
};

const perks = [
  "Work with a forward-thinking team at the intersection of mental health and technology",
  "Access to Damaura's AI tools to enhance your clinical practice",
  "Flexible work arrangements: online, in-person, or hybrid",
  "Competitive compensation with growth-aligned incentives",
  "Be part of shaping mental health care in Southeast Asia",
];

const roles = [
  "Registered Clinical Psychologists",
  "Registered Counsellors",
  "Child & Adolescent Therapists",
  "Corporate Wellness Facilitators",
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Careers", path: "/about/careers" },
          ])
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={1} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[10%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            Join a Team That&apos;s Redefining Care
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            Serenitilabs is growing. We&apos;re looking for therapists,
            counsellors, and wellness professionals who share our belief that
            mental health care can be both deeply human and intelligently
            enhanced.
          </p>
        </Container>
      </section>

      {/* Why Serenitilabs */}
      <section className="py-20 md:py-28 bg-dawn">
        <Container className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-8">
              Why Serenitilabs
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <ul className="bg-white rounded-card shadow-card divide-y divide-night/10">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-3 p-5">
                  <CheckCircle
                    className="w-5 h-5 text-coral mt-0.5 shrink-0"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-night/70 leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
              We&apos;re Always Looking For
            </h2>
            <p className="text-night/70 mb-8">
              Even if you don&apos;t see a role that fits perfectly, we&apos;d
              love to hear from you.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <ul className="grid md:grid-cols-2 gap-3">
              {roles.map((role) => (
                <li
                  key={role}
                  className="flex items-center gap-3 rounded-card border border-night/10 bg-dawn px-5 py-4 text-left text-night font-medium"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-coral shrink-0"
                    aria-hidden="true"
                  />
                  {role}
                </li>
              ))}
            </ul>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-center mt-10">
              <Button href="/about/contact?type=careers" size="lg" showArrow>
                Send Your Application
              </Button>
              <p className="mt-4 text-sm text-night/70">
                Tell us about yourself and the role you&apos;re interested in,
                and we&apos;ll take it from there.
              </p>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
