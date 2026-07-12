"use client";

import { CheckCircle, Video, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

interface PsychotherapyTemplateProps {
  title: string;
  subtitle: string;
  issues: string[];
  issuesTitle: string;
  approach?: { title: string; body: string };
  formats: string[];
  firstSession?: string;
  ongoingSupport?: string;
}

export function PsychotherapyTemplate({
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
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={0} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[5%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              {title}
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              {subtitle}
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Issues */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-night text-center mb-12">
              {issuesTitle}
            </h2>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {issues.map((issue) => (
              <div
                key={issue}
                className="flex items-start gap-3 bg-white rounded-card p-5 shadow-card"
              >
                <CheckCircle className="w-5 h-5 text-coral mt-0.5 shrink-0" />
                <span className="text-night/70">{issue}</span>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Approach (optional) */}
      {approach && (
        <section className="py-16 md:py-20 bg-white">
          <Container className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-serif text-3xl md:text-4xl text-night mb-6">
                {approach.title}
              </h2>
              <p className="text-night/60 leading-relaxed">{approach.body}</p>
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
            <h2 className="font-serif text-3xl md:text-4xl text-night text-center mb-12">
              How Sessions Work
            </h2>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-12">
            {formats.map((f) => {
              const lower = f.toLowerCase();
              const Icon =
                lower.includes("online") || lower.includes("video")
                  ? Video
                  : lower.includes("person") ||
                      lower.includes("clinic") ||
                      lower.includes("office")
                    ? MapPin
                    : Clock;
              return (
                <div
                  key={f}
                  className="group bg-dawn rounded-card p-6 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <span className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white">
                    <Icon className="w-5 h-5 text-coral" strokeWidth={1.75} />
                  </span>
                  <p className="text-night/70 text-sm leading-relaxed">{f}</p>
                </div>
              );
            })}
          </StaggerChildren>

          {firstSession && (
            <FadeInOnScroll>
              <div className="bg-dawn rounded-card p-8 mb-6">
                <h3 className="font-sans text-lg font-semibold text-night mb-3">
                  What to Expect in Your First Session
                </h3>
                <p className="text-night/60 leading-relaxed">{firstSession}</p>
              </div>
            </FadeInOnScroll>
          )}

          {ongoingSupport && (
            <FadeInOnScroll delay={0.1}>
              <div className="bg-mist/50 rounded-card p-8">
                <h3 className="font-sans text-lg font-semibold text-night mb-3">
                  Ongoing Support
                </h3>
                <p className="text-night/60 leading-relaxed">
                  {ongoingSupport}
                </p>
              </div>
            </FadeInOnScroll>
          )}

          <FadeInOnScroll delay={0.2}>
            <div className="text-center mt-10">
              <Button href="/about/contact" size="lg" showArrow>
                Book a Session
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
