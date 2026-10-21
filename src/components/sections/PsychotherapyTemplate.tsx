"use client";

import { Video, MapPin, Clock, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

type FormatKind = "online" | "in-person" | "duration";

const formatIcons: Record<FormatKind, LucideIcon> = {
  online: Video,
  "in-person": MapPin,
  duration: Clock,
};

interface PsychotherapyTemplateProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  issues: string[];
  issuesTitle: string;
  approach?: { title: string; body: string };
  formats: { kind: FormatKind; label: string }[];
  firstSession?: string;
  ongoingSupport?: string;
}

const BOOKING_HREF = "/about/contact?type=therapy";

export function PsychotherapyTemplate({
  eyebrow,
  title,
  subtitle,
  issues,
  issuesTitle,
  approach,
  formats,
  firstSession,
  ongoingSupport,
}: PsychotherapyTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={0} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[5%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-ink mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
            <Button href={BOOKING_HREF} size="lg" showArrow>
              Book a Session
            </Button>
          </div>
        </Container>
      </section>

      {/* Issues */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight text-center mb-12">
              {issuesTitle}
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            {/* One card holding a list: an odd count never leaves an orphan tile,
                and a neutral dot (not a tick) avoids "approving" a symptom. */}
            <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-x-10 gap-y-4 bg-white rounded-card shadow-card p-8 md:p-10">
              {issues.map((issue) => (
                <li key={issue} className="flex items-start gap-3 text-night/80">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                  />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Approach (optional): sits directly on the white sessions block as its intro. */}
      {approach && (
        <section className="pt-16 md:pt-20 pb-0 bg-white">
          <Container className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight mb-6">
                {approach.title}
              </h2>
              <p className="text-night/70 leading-relaxed">{approach.body}</p>
            </FadeInOnScroll>
          </Container>
        </section>
      )}

      {/* How Sessions Work */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={3} color="#F5D3B8" size={350} opacity={0.08} blur={30} className="bottom-[10%] -left-[5%]" />
        </ParallaxLayer>

        <Container className="relative z-10 max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight text-center mb-12">
              How Sessions Work
            </h2>
          </FadeInOnScroll>

          {/* Tiles and panels share one column so their edges line up. */}
          <div className="max-w-3xl mx-auto">
            <StaggerChildren className="grid md:grid-cols-3 gap-6">
              {formats.map((f) => {
                const Icon = formatIcons[f.kind];
                return (
                  <div
                    key={f.label}
                    className="h-full flex items-center gap-4 md:block bg-dawn rounded-card p-5 md:p-6 shadow-card"
                  >
                    <span className="shrink-0 md:mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white">
                      <Icon className="w-6 h-6 text-coral" strokeWidth={1.75} />
                    </span>
                    <p className="text-night/70 text-sm leading-relaxed">{f.label}</p>
                  </div>
                );
              })}
            </StaggerChildren>

            {(firstSession || ongoingSupport) && (
              <div className="mt-12">
                {firstSession && (
                  <FadeInOnScroll>
                    <div className="bg-dawn rounded-card p-8 md:p-10 mb-6">
                      <h3 className="font-sans text-lg font-semibold text-night mb-3">
                        What to Expect in Your First Session
                      </h3>
                      <p className="text-night/70 leading-relaxed">{firstSession}</p>
                    </div>
                  </FadeInOnScroll>
                )}

                {ongoingSupport && (
                  <FadeInOnScroll delay={0.1}>
                    <div className="bg-mist/50 rounded-card p-8 md:p-10">
                      <h3 className="font-sans text-lg font-semibold text-night mb-3">
                        Ongoing Support
                      </h3>
                      <p className="text-night/70 leading-relaxed">
                        {ongoingSupport}
                      </p>
                    </div>
                  </FadeInOnScroll>
                )}
              </div>
            )}
          </div>

          <FadeInOnScroll delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
              <Button href={BOOKING_HREF} size="lg" showArrow>
                Book a Session
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
