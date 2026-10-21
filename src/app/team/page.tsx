import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TeamCard } from "@/components/cards/TeamCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { teamMembers, leadership } from "@/content/team";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, personNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Serenitilabs team of registered psychologists delivering evidence-based mental health care with genuine warmth, making support more accessible in Malaysia.",
  alternates: { canonical: "/team" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Our Team",
    description:
      "Meet the Serenitilabs team of registered psychologists delivering evidence-based mental health care with genuine warmth, making support more accessible in Malaysia.",
    url: `${site.url}/team`,
    type: "website",
  },
};

const approaches = [
  "Cognitive Behavioural Therapy (CBT)",
  "Acceptance & Commitment Therapy (ACT)",
  "Dialectical Behaviour Therapy (DBT)",
  "Psychodynamic Therapy",
  "Trauma-Focused Therapy",
  // Non-breaking hyphen (U+2011) so "Mindfulness-Based" never splits on phones.
  "Person-Centred & Mindfulness\u2011Based",
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
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ]),
          ...teamMembers.map(personNode)
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

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            The People Behind Your Support
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            At Serenitilabs, therapy is a human experience. Our team of registered
            psychologists brings together diverse expertise, genuine warmth, and
            a shared commitment to making mental health care more accessible in
            Malaysia.
          </p>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <h2 className="sr-only">Our Clinicians</h2>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.slug}
                name={member.name}
                role={member.role}
                specialties={member.specialties}
                slug={member.slug}
                photo={member.photo}
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
            <h2 className="text-center mb-14 font-serif text-3xl md:text-4xl lg:text-5xl text-night">
              Grounded in Evidence, Delivered with Care
            </h2>
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

      {/* Leadership: text only, one card split into columns so it reads as a different
          kind of thing from the clinician cards above. */}
      <section className="py-20 md:py-28 bg-dawn">
        <Container>
          <FadeInOnScroll>
            <div className="text-center mb-12 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
                People Behind the Purpose
              </h2>
              <p className="mt-4 text-lg text-night/70">
                Different expertise. A shared commitment.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <ul className="max-w-5xl mx-auto grid md:grid-cols-3 bg-white rounded-card shadow-card divide-y md:divide-y-0 md:divide-x divide-night/10">
              {leadership.map((person) => (
                <li key={person.name} className="flex flex-col p-8 md:p-10">
                  <h3 className="font-serif text-2xl text-night">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-coral-ink">{person.role}</p>
                  <p className="mt-4 text-night/70 leading-relaxed">{person.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-night/80">
                    {person.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {person.profileSlug && (
                    <Link
                      href={`/team/${person.profileSlug}`}
                      className="group mt-auto pt-6 self-start inline-flex items-center gap-2 text-sm font-semibold text-coral-ink hover:underline underline-offset-4"
                    >
                      View Profile<span className="sr-only"> of {person.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
