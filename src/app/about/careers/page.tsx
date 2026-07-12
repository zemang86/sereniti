"use client";

import { CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

const perks = [
  "Work with a forward-thinking team at the intersection of mental health and technology",
  "Access to Damaura's AI tools to enhance your clinical practice",
  "Flexible work arrangements: online, in-person, or hybrid",
  "Competitive compensation with growth-aligned incentives",
  "Be part of shaping mental health care in Southeast Asia",
];

const roles = [
  "Licensed Clinical Psychologists",
  "Registered Counsellors",
  "Child & Adolescent Therapists",
  "Corporate Wellness Facilitators",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={1} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[10%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Join a Team That&apos;s Redefining Care
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Serenitilabs is growing. We&apos;re looking for therapists,
              counsellors, and wellness professionals who share our belief that
              mental health care can be both deeply human and intelligently
              enhanced.
            </p>
          </FadeInOnScroll>
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
          <StaggerChildren className="space-y-4">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-start gap-4 bg-white rounded-card shadow-card p-6"
              >
                <CheckCircle className="w-5 h-5 text-coral mt-0.5 shrink-0" />
                <p className="text-night/70 leading-relaxed">{perk}</p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Roles */}
      <section className="py-20 md:py-28 bg-white">
        <Container className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-night mb-4">
              We&apos;re Always Looking For
            </h2>
            <p className="text-night/50 mb-8">
              Even if you don&apos;t see a role that fits perfectly, we&apos;d
              love to hear from you.
            </p>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <div
                key={role}
                className="bg-dawn rounded-card p-6 text-center text-night font-medium"
              >
                {role}
              </div>
            ))}
          </StaggerChildren>

          <FadeInOnScroll>
            <div className="text-center mt-10">
              <Button href="/about/contact?type=careers" size="lg" showArrow>
                Send Your Application
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
