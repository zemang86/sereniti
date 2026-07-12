"use client";

import { Container } from "@/components/layout/Container";
import { TeamCard } from "@/components/cards/TeamCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { teamMembers } from "@/content/team";

const approaches = [
  "Cognitive Behavioural Therapy (CBT)",
  "Acceptance & Commitment Therapy (ACT)",
  "Dialectical Behaviour Therapy (DBT)",
  "Psychodynamic Therapy",
  "Trauma-Focused Therapy",
  "Person-Centred & Mindfulness-Based",
];

const expertise = [
  "Anxiety, Depression & Burnout",
  "Trauma & PTSD",
  "ADHD & Autism Spectrum (ASD)",
  "Children, Adolescents & Adults",
  "Psycho-Oncology & Grief",
  "Workplace Mental Health",
];

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
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.slug}
                name={member.name}
                role={member.role}
                specialties={member.specialties}
                slug={member.slug}
                photo={member.photo}
                isLead={member.isLead}
              />
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Clinical Capabilities */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={1} color="#F5D3B8" size={380} opacity={0.08} blur={40} className="bottom-[5%] -left-[6%]" />
        </ParallaxLayer>

        <Container className="relative z-10">
          <FadeInOnScroll>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                Clinical Capabilities
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night">
                Grounded in Evidence, Delivered with Care
              </h2>
            </div>
          </FadeInOnScroll>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeInOnScroll>
              <div className="h-full bg-dawn rounded-card p-8 md:p-10">
                <h3 className="font-sans text-lg font-semibold text-night mb-6">
                  Therapeutic Approaches
                </h3>
                <ul className="space-y-3.5">
                  {approaches.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                      <span className="text-night/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.15}>
              <div className="h-full bg-dawn rounded-card p-8 md:p-10">
                <h3 className="font-sans text-lg font-semibold text-night mb-6">
                  Areas of Expertise
                </h3>
                <ul className="space-y-3.5">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                      <span className="text-night/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
