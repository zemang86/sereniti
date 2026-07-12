"use client";

import { Brain, Heart, Building } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={0} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[10%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Our Services
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 max-w-2xl mx-auto leading-relaxed">
              Mental health support should be as unique as the people it serves.
              Whether you&apos;re an individual seeking clarity, a parent supporting
              your child, or an organisation investing in your team&apos;s wellbeing,
              we have a pathway for you.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Three Pillars */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#F5D3B8" size={400} opacity={0.08} blur={40} className="bottom-[10%] -left-[5%]" />
        </ParallaxLayer>

        <Container className="relative z-10">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="Digital Mental Health Screening"
              description="Start with understanding. Our AI-powered screening tool provides a confidential, personalised assessment of your mental health, in under 10 minutes."
              href="/services/screening"
              ctaLabel="Start Your Screening"
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
              description="End-to-end employee wellness programmes designed for Malaysian workplaces. From screening and workshops to embedded therapy sessions and Damaura access."
              href="/services/corporate"
              ctaLabel="Request a Proposal"
              variant="mist"
            />
          </StaggerChildren>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <SectionHeader
              overline="Not Sure Where to Start"
              title="Let's Find the Right Path Together"
              subtitle="Every journey looks a little different. Reach out and we'll help you choose the support that fits your needs."
              className="mb-8 md:mb-8"
            />
            <div className="text-center">
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
