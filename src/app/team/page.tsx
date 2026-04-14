"use client";

import { Container } from "@/components/layout/Container";
import { TeamCard } from "@/components/cards/TeamCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { teamMembers } from "@/content/team";

export default function TeamPage() {
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

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              The People Behind Your Support
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              At Serenitilabs, therapy is a human experience. Our team of licensed
              psychologists brings together diverse expertise, genuine warmth, and
              a shared commitment to making mental health care more accessible in
              Malaysia.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.slug}
                name={member.name}
                role={member.role}
                specialties={member.specialties}
                slug={member.slug}
                isLead={member.isLead}
              />
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
