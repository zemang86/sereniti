import Image from "next/image";
import { MessageCircleHeart, Heart, Building, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { TeamCard } from "@/components/cards/TeamCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { DamauraCarousel } from "@/components/sections/DamauraCarousel";
import { FAQ } from "@/components/sections/FAQ";
import { CredentialBadge } from "@/components/ui/CredentialBadge";
import { teamMembers } from "@/content/team";
import { site } from "@/lib/site";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative lg:min-h-[min(100svh,780px)] flex items-center overflow-hidden">
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

      {/* Fade the sunrise into the dawn services section so there is no hard seam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-dawn"
      />

      {/* Hero copy and image render without reveal animations: they are the LCP. */}
      <Container className="relative z-10 w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[46px] xl:text-[60px] text-night leading-[1.05] tracking-tight">
              Mental Health Support That Meets Your People Where They Are
            </h1>
            <p className="mt-6 text-lg md:text-xl text-night/70 leading-relaxed max-w-xl">
              Serenitilabs combines expert therapists with AI-powered tools to
              deliver accessible, personalised mental health care, for
              individuals and organisations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Button href="/about/contact" size="lg" showArrow>
                Get in Touch
              </Button>
              <Button
                href="/services/corporate"
                variant="secondary"
                size="lg"
              >
                Explore Corporate Packages
              </Button>
            </div>
            <div className="mt-8">
              <CredentialBadge variant="strip" showCertLink={false} />
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="rounded-card overflow-hidden shadow-card">
              <Image
                src="/images/hero.png"
                alt="A figure standing peacefully under a starry night sky"
                width={1200}
                height={675}
                sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Floating accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lavender/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-sunrise/30 rounded-full blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Services Overview ─── */
function ServicesSection() {
  // The hero fades into dawn, so there is no surface change to pad against: a full
  // top padding here stacked a ~280px empty band under the hero.
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-dawn overflow-hidden">
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
            title="How We Can Help"
            subtitle="Whether you're an individual seeking clarity or an organisation investing in your team's wellbeing, we have a pathway for you."
          />
        </FadeInOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={MessageCircleHeart}
            title="Damaura, Our AI Companion"
            description="Check in on your mood, build small daily practices, and talk things through in English, BM or Manglish. Free to start on the web."
            href="/damaura"
            ctaLabel="Meet Damaura"
            variant="indigo"
          />
          <ServiceCard
            icon={Heart}
            title="Psychotherapy"
            description="Evidence-based therapy for adults, children, couples, and families. Online or in-person, with therapists who listen before they help you navigate your difficulties."
            href="/services/psychotherapy"
            ctaLabel="Explore Therapy"
          />
          <ServiceCard
            icon={Building}
            title="Corporate Services"
            description="Structured mental wellness programmes for organisations: on-site and online therapy, leadership workshops, and Damaura for your whole team."
            href="/services/corporate"
            ctaLabel="Explore Corporate Services"
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
    { value: String(teamMembers.length), label: "Licensed Therapists" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-indigo bg-[url('/images/indigo-bg.webp')] bg-cover bg-center">
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-indigo/40" />

      <Container className="relative z-10">
        <FadeInOnScroll>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-dawn/70 mb-8 md:mb-10">
            Trusted by Teams Across Malaysia
          </p>
        </FadeInOnScroll>

        <StaggerChildren className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-5xl text-dawn">
                {stat.value}
              </p>
              <p className="text-sm text-dawn/70 mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

/* ─── Damaura Spotlight ─── */
function DamauraSpotlight() {
  return (
    // Damaura's paper surface sits between dawn sections; the border makes the change read as deliberate.
    <section className="relative py-20 md:py-28 bg-damaura-paper border-y border-damaura-border/60 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
          {/* App mockup carousel: after the copy on mobile so the heading leads */}
          <FadeInOnScroll direction="left" className="order-last lg:order-none">
            {/* Sits at the inner edge of its column on desktop so the phone and copy read as one group */}
            <DamauraCarousel className="lg:mr-0" />
          </FadeInOnScroll>

          <div>
            <FadeInOnScroll>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-damaura-plum mb-3">
                Powered by Damaura
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
                Support That Continues Between Sessions
              </h2>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.2}>
              <p className="mt-6 max-w-lg text-night/70 leading-relaxed">
                Between sessions, your people aren&apos;t alone. Damaura is our
                AI companion for mental wellbeing, built for Southeast Asia and
                grounded in CBT, DBT and ACT. It offers one-tap mood check-ins,
                small daily practices, a journal, and a chat in English, BM or
                Manglish, with an optional faith layer.
              </p>
              <p className="mt-4 max-w-lg text-night/70 leading-relaxed">
                For organisations, Damaura is a support layer for the whole team.
                You see aggregate engagement and recurring themes, never
                anyone&apos;s conversations or reflections.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
                <Button href="/damaura" showArrow>
                  See How Damaura Works
                </Button>
                <Button href={site.damaura.app} variant="ghost">
                  Try Damaura Free
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
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
    // Short bottom padding: the FAQ follows on the same dawn surface.
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-dawn overflow-hidden">
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
            title="The People Behind Your Support"
            subtitle="Our therapists are licensed, experienced, and genuinely passionate about what they do."
          />
        </FadeInOnScroll>

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

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-indigo bg-[url('/images/indigo-bg.webp')] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-indigo/30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-[80px]" />
      </div>

      <Container className="relative z-10 text-center">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dawn leading-tight">
            Ready to Take the First Step?
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <p className="mt-6 text-dawn/70 text-lg max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s corporate wellness for your team or therapy for
            yourself, we&apos;ll help you find the right support.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              href="/about/contact"
              size="lg"
              className="bg-coral text-night hover:bg-sunrise"
              showArrow
            >
              Get in Touch
            </Button>
            <Button
              href="/services/corporate"
              variant="ghost"
              size="lg"
              className="text-dawn border-dawn/40 hover:border-sunrise hover:text-sunrise"
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
      <DamauraSpotlight />
      <TeamTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}
