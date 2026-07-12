"use client";

import { User, Baby, Heart, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

const tracks = [
  {
    icon: User,
    title: "Adults",
    description: "For the pressures that build quietly: work stress, anxiety, burnout, life transitions, grief. A safe space to process, understand, and move forward.",
    href: "/services/psychotherapy/adults",
    ctaLabel: "Learn More",
  },
  {
    icon: Baby,
    title: "Children",
    description: "Developmentally sensitive therapy that helps young minds navigate emotions, behaviour, and challenges, with parents supported every step of the way.",
    href: "/services/psychotherapy/children",
    ctaLabel: "Learn More",
  },
  {
    icon: Heart,
    title: "Couples",
    description: "Strengthen your relationship through better communication, understanding, and connection. Whether you're working through conflict or growing together.",
    href: "/services/psychotherapy/couples",
    ctaLabel: "Learn More",
  },
  {
    icon: Users,
    title: "Family",
    description: "When one person struggles, the whole family feels it. Family therapy creates space for everyone to be heard and builds healthier patterns together.",
    href: "/services/psychotherapy/family",
    ctaLabel: "Learn More",
  },
];

export default function PsychotherapyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[10%] -left-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Therapy That Fits Your Life
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Our licensed therapists provide evidence-based psychotherapy for
              individuals, couples, and families. Every session is tailored to
              you: your pace, your goals, your comfort. Available online and
              in-person.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Therapy Tracks */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <ServiceCard key={t.title} {...t} />
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Between Sessions */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <FadeInOnScroll>
            <div className="bg-dawn rounded-card p-8 md:p-12 text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                Between Sessions
              </p>
              <p className="text-night/70 leading-relaxed text-lg">
                Your progress doesn&apos;t stop when the session ends. With
                Damaura, our AI companion, you can track your mood, reflect on
                your day, and stay connected to your wellbeing between
                appointments.
              </p>
              <div className="mt-6">
                <Button href="/services/screening" variant="ghost">
                  Learn About Damaura
                </Button>
              </div>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
