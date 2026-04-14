"use client";

import Image from "next/image";
import { Brain, Heart, Building, Smartphone, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TeamCard } from "@/components/cards/TeamCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { GlowEffect } from "@/components/decorative/GlowEffect";
import { teamMembers } from "@/content/team";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-sunrise)" }}
      />

      {/* Decorative blobs */}
      <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
        <BlobShape
          variant={0}
          color="#C9B8DB"
          size={500}
          opacity={0.12}
          blur={40}
          className="top-[10%] -right-[10%]"
        />
        <BlobShape
          variant={2}
          color="#F5D3B8"
          size={600}
          opacity={0.15}
          blur={50}
          className="-bottom-[20%] -left-[15%]"
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.4} className="absolute inset-0 pointer-events-none">
        <BlobShape
          variant={1}
          color="#F0C4B8"
          size={300}
          opacity={0.1}
          blur={30}
          className="top-[40%] left-[60%]"
        />
      </ParallaxLayer>

      <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeInOnScroll delay={0.1}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[60px] text-night leading-[1.1] tracking-tight">
                Mental Health Support That Meets Your People Where They Are
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.3}>
              <p className="mt-6 text-lg md:text-xl text-night/60 leading-relaxed max-w-xl">
                Serenitilabs combines expert therapists with AI-powered tools to
                deliver accessible, personalised mental health care — for
                individuals and organisations.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about/contact" size="lg" showArrow>
                  Get Started
                </Button>
                <Button
                  href="/services/corporate"
                  variant="secondary"
                  size="lg"
                >
                  Explore Corporate Packages
                </Button>
              </div>
            </FadeInOnScroll>
          </div>

          {/* Hero image */}
          <FadeInOnScroll delay={0.4} direction="right">
            <div className="relative">
              <div className="rounded-card overflow-hidden shadow-card">
                <Image
                  src="/images/hero.png"
                  alt="A figure standing peacefully under a starry night sky"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating accents */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-sunrise/30 rounded-full blur-3xl" />
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </section>
  );
}

/* ─── Services Overview ─── */
function ServicesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-dawn overflow-hidden">
      <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
        <BlobShape
          variant={3}
          color="#C9B8DB"
          size={400}
          opacity={0.08}
          blur={40}
          className="top-[20%] -right-[5%]"
        />
      </ParallaxLayer>

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionHeader
            overline="Our Services"
            title="How We Can Help"
            subtitle="Whether you're an individual seeking clarity or an organisation investing in your team's wellbeing — we have a pathway for you."
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Brain}
            title="Digital Mental Health Screening"
            description="A confidential, AI-guided assessment that helps individuals understand their mental health — and helps organisations identify how to best support their teams."
            href="/services/screening"
            ctaLabel="Learn More"
            variant="indigo"
          />
          <ServiceCard
            icon={Heart}
            title="Psychotherapy"
            description="Evidence-based therapy for adults, children, couples, and families. Online or in-person, with therapists who listen before they help you navigate your difficulties."
            href="/services/psychotherapy"
            ctaLabel="View Services"
          />
          <ServiceCard
            icon={Building}
            title="Corporate Services"
            description="Structured mental wellness programmes for organisations — from employee screening to on-site therapy sessions and leadership workshops."
            href="/services/corporate"
            ctaLabel="Talk to Us"
            variant="mist"
          />
        </StaggerChildren>
      </Container>
    </section>
  );
}

/* ─── Trust / Stats ─── */
function TrustSection() {
  const stats = [
    { value: "500+", label: "Sessions Delivered" },
    { value: "4", label: "Licensed Therapists" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-indigo bg-[url('/images/indigo-bg.png')] bg-cover bg-center">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-indigo/40" />

      <Container className="relative z-10">
        <FadeInOnScroll>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-dawn/50 mb-10">
            Trusted by Teams Across Malaysia
          </p>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-dawn">
                {stat.value}
              </p>
              <p className="text-sm text-dawn/50 mt-2">{stat.label}</p>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

/* ─── Damaura Spotlight ─── */
function DamauraSpolight() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
        <BlobShape
          variant={1}
          color="#F5D3B8"
          size={500}
          opacity={0.1}
          blur={50}
          className="-left-[10%] top-[10%]"
        />
      </ParallaxLayer>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* App mockup placeholder */}
          <FadeInOnScroll direction="left">
            <GlowEffect size={400} intensity={0.25}>
              <div className="aspect-[3/4] max-w-[320px] mx-auto rounded-[32px] bg-indigo bg-[url('/images/indigo-bg.png')] bg-cover bg-center shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Smartphone className="w-12 h-12 text-coral/60 mx-auto mb-3" strokeWidth={1} />
                  <p className="text-dawn/30 text-xs">Damaura App Mockup</p>
                </div>
              </div>
            </GlowEffect>
          </FadeInOnScroll>

          <div>
            <FadeInOnScroll>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                Powered by Damaura
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
                Support That Continues Between Sessions
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <p className="mt-6 text-night/60 leading-relaxed">
                Between sessions, your people aren&apos;t alone. Damaura is our
                AI-powered companion that provides daily mood tracking, sleep
                monitoring, guided reflections, and personalised mental health
                insights — all from a single app.
              </p>
              <p className="mt-4 text-night/60 leading-relaxed">
                For organisations, Damaura means real-time wellness data, early
                intervention signals, and a scalable support layer that works
                alongside your existing benefits programme.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.3}>
              <div className="mt-8">
                <Button href="/services/screening" showArrow>
                  See How Damaura Works
                </Button>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Team Teaser ─── */
function TeamTeaser() {
  return (
    <section className="relative py-20 md:py-28 bg-dawn overflow-hidden">
      <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
        <BlobShape
          variant={2}
          color="#C9B8DB"
          size={350}
          opacity={0.08}
          blur={30}
          className="top-[5%] right-[5%]"
        />
      </ParallaxLayer>

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionHeader
            overline="Our Team"
            title="The People Behind Your Support"
            subtitle="Our therapists are licensed, experienced, and genuinely passionate about what they do."
          />
        </FadeInOnScroll>

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

        <FadeInOnScroll>
          <div className="text-center mt-10">
            <Button href="/team" variant="ghost">
              Meet Our Team
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  const quotes = [
    {
      text: "Serenitilabs made seeking help feel natural and safe. The therapists here genuinely listen.",
      author: "Client",
      role: "Individual Therapy",
    },
    {
      text: "Our team's engagement improved measurably after partnering with Serenitilabs for our wellness programme.",
      author: "HR Director",
      role: "Corporate Client",
    },
    {
      text: "Damaura helped me stay mindful between sessions. It feels like someone always has your back.",
      author: "Client",
      role: "Damaura User",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #F5D3B8 0%, #E8B8A0 100%)" }}>
      <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
        <BlobShape
          variant={0}
          color="#1E1A93"
          size={400}
          opacity={0.06}
          blur={50}
          className="bottom-[10%] left-[5%]"
        />
        <BlobShape
          variant={2}
          color="#C9B8DB"
          size={300}
          opacity={0.1}
          blur={40}
          className="top-[5%] right-[10%]"
        />
      </ParallaxLayer>

      <Container className="relative z-10">
        <FadeInOnScroll>
          <SectionHeader
            title="What People Are Saying"
            subtitle="Placeholder testimonials — real stories coming soon."
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-8 shadow-card"
            >
              <p className="font-serif text-lg text-night italic leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-night">{q.author}</p>
                <p className="text-xs text-night/50">{q.role}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-indigo bg-[url('/images/indigo-bg.png')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-indigo/30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-[80px]" />
      </div>

      <Container className="relative z-10 text-center">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dawn leading-tight">
            Ready to Support Your Team&apos;s Wellbeing?
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <p className="mt-6 text-dawn/60 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re looking for corporate wellness packages or personal
            therapy, we&apos;re here to help you take the first step.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/about/contact"
              size="lg"
              className="bg-coral text-white hover:bg-coral/90"
              showArrow
            >
              Get in Touch
            </Button>
            <Button
              href="/services/corporate"
              variant="ghost"
              size="lg"
              className="text-dawn border-dawn/20 hover:border-coral hover:text-coral"
            >
              Explore Corporate Packages
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <DamauraSpolight />
      <TeamTeaser />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
