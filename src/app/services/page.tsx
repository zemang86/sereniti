import type { Metadata } from "next";
import { MessageCircleHeart, Heart, Building } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, serviceNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mental Health Services",
  description:
    "Explore Serenitilabs mental health services in Malaysia: psychotherapy for individuals and families, corporate wellness programmes, and Damaura, our AI companion.",
  alternates: { canonical: "/services" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Mental Health Services",
    description:
      "Explore Serenitilabs mental health services in Malaysia: psychotherapy for individuals and families, corporate wellness programmes, and Damaura, our AI companion.",
    url: `${site.url}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          serviceNode({
            name: "Psychotherapy",
            description:
              "One-on-one and group therapy with licensed professionals. We offer specialised tracks for adults, children, couples, and families, online or face-to-face.",
            path: "/services/psychotherapy",
            serviceType: "Psychotherapy",
          }),
          serviceNode({
            name: "Corporate Wellness Programmes",
            description:
              "End-to-end employee wellness programmes designed for Malaysian workplaces. From workshops and leadership briefings to embedded therapy sessions and Damaura access.",
            path: "/services/corporate",
            serviceType: "Corporate wellness programme",
            audience: "Employers and organisations",
            medical: false,
          })
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={0} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[10%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-night/70 max-w-2xl mx-auto leading-relaxed">
            Mental health support should be as unique as the people it serves.
            Whether you&apos;re an individual seeking clarity, a parent supporting
            your child, or an organisation investing in your team&apos;s wellbeing,
            we have a pathway for you.
          </p>
        </Container>
      </section>

      {/* Three Pillars */}
      <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-dawn relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#F5D3B8" size={400} opacity={0.08} blur={40} className="bottom-[10%] -left-[5%]" />
        </ParallaxLayer>

        <Container className="relative z-10">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={MessageCircleHeart}
              title="Damaura, Our AI Companion"
              description="Support for the days between sessions: one-tap mood check-ins, small daily practices, a journal, and a chat in English, BM or Manglish. Free to start on the web."
              href="/damaura"
              ctaLabel="Meet Damaura"
            />
            <ServiceCard
              icon={Heart}
              title="Psychotherapy"
              description="One-on-one and group therapy with licensed professionals. We offer specialised tracks for adults, children, couples, and families, online or face-to-face."
              href="/services/psychotherapy"
              ctaLabel="Explore Therapy Options"
            />
            <ServiceCard
              icon={Building}
              title="Corporate Services"
              description="End-to-end employee wellness programmes designed for Malaysian workplaces. From workshops and leadership briefings to embedded therapy sessions and Damaura access."
              href="/services/corporate"
              ctaLabel="Explore Corporate Wellness"
            />
          </StaggerChildren>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <SectionHeader
              title="Let's Find the Right Path Together"
              subtitle="Every journey looks a little different. Reach out and we'll help you choose the support that fits your needs."
              className="mb-8 md:mb-8"
            />
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
              <Button href="/about/contact" size="lg" showArrow>
                Get in Touch
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
