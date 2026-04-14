"use client";

import {
  Brain,
  Users,
  Presentation,
  Smartphone,
  Briefcase,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

const businessCase = [
  "Reduced absenteeism and presenteeism",
  "Higher employee engagement and retention",
  "Stronger employer brand and talent attraction",
  "Compliance with emerging ESG and workplace wellness standards",
  "Early intervention before issues escalate",
];

const offerings = [
  {
    icon: Brain,
    title: "Employee Mental Health Screening",
    desc: "Deploy Damaura-powered screening across your workforce. Employees complete a confidential AI-guided assessment. You receive anonymised aggregate insights to inform your wellness strategy.",
  },
  {
    icon: Users,
    title: "On-Site & Online Therapy Sessions",
    desc: "Embed licensed therapists into your workplace — available for regular on-site visits or private online sessions. Employees book directly. You provide the benefit; we handle the delivery.",
  },
  {
    icon: Presentation,
    title: "Workshops & Training",
    desc: "Interactive sessions for teams and leadership on stress management, emotional resilience, burnout prevention, mental health first aid, and building psychologically safe workplaces.",
  },
  {
    icon: Smartphone,
    title: "Damaura for Teams",
    desc: "Give every employee access to Damaura — daily mood tracking, sleep monitoring, guided reflections, and personalised wellness insights. A continuous support layer between sessions.",
  },
  {
    icon: Briefcase,
    title: "Manager & Leadership Briefings",
    desc: "Equip your leaders with the understanding and language to support their teams' mental health. Practical, non-clinical sessions that build confidence in handling sensitive conversations.",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn about your organisation, your team's needs, and your goals. No obligations, no jargon.",
  },
  {
    num: "02",
    title: "Custom Proposal",
    desc: "We design a programme tailored to your size, budget, and priorities — from standalone workshops to comprehensive year-round partnerships.",
  },
  {
    num: "03",
    title: "Delivery & Reporting",
    desc: "We deliver the programme and provide regular impact reports — utilisation rates, satisfaction scores, and anonymised wellness trends.",
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={3} color="#D8E8F0" size={500} opacity={0.12} blur={40} className="top-[5%] -right-[10%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-4">
              Corporate Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Invest in Your People. The Returns Are Real.
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Serenitilabs delivers structured mental wellness programmes that
              reduce absenteeism, improve retention, and build resilient teams —
              backed by licensed therapists and powered by AI.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.3}>
            <div className="mt-8">
              <Button href="/about/contact?type=corporate" size="lg" showArrow>
                Request a Proposal
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Business Case */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeInOnScroll>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                  The Business Case
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-night leading-tight">
                  Why Mental Wellness Is a Business Priority
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <p className="mt-6 text-night/60 leading-relaxed">
                  In Malaysia, workplace stress costs employers an estimated RM1.8
                  billion annually in lost productivity. Yet fewer than 10% of
                  companies have structured mental health programmes in place.
                </p>
                <ul className="mt-6 space-y-3">
                  {businessCase.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-coral mt-0.5 shrink-0" />
                      <span className="text-night/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>
            </div>

            <FadeInOnScroll direction="right">
              <div className="bg-cloud/30 rounded-card p-12 flex items-center justify-center aspect-square">
                <TrendingUp className="w-24 h-24 text-cloud" strokeWidth={1} />
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={1} color="#F5D3B8" size={400} opacity={0.08} blur={40} className="top-[30%] -right-[5%]" />
        </ParallaxLayer>

        <Container className="relative z-10">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                What We Offer
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night">
                Comprehensive Corporate Solutions
              </h2>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-dawn rounded-card p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              >
                <o.icon className="w-8 h-8 text-coral mb-5" />
                <h3 className="font-sans text-lg font-semibold text-night mb-3">
                  {o.title}
                </h3>
                <p className="text-night/60 text-sm leading-relaxed">
                  {o.desc}
                </p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                How It Works
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night">
                Three Simple Steps
              </h2>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-card shadow-card p-8 text-center"
              >
                <span className="text-5xl font-serif text-indigo/30">
                  {step.num}
                </span>
                <h3 className="font-sans text-xl font-semibold text-night mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-night/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggerChildren>

          <FadeInOnScroll>
            <div className="text-center mt-12">
              <Button href="/about/contact?type=corporate" size="lg" showArrow>
                Request a Proposal
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Scale CTA */}
      <section className="relative py-16 md:py-20 bg-indigo bg-[url('/images/indigo-bg.png')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-indigo/30" />
        <Container className="relative z-10 text-center">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-dawn leading-tight">
              Packages Scale With Your Organisation
            </h2>
            <p className="mt-4 text-dawn/60 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a startup of 20 or an enterprise of 2,000, our
              programmes adapt. We offer modular packages that you can build up
              over time as you see results.
            </p>
            <div className="mt-8">
              <Button
                href="/about/contact?type=corporate"
                size="lg"
                className="bg-coral text-white hover:bg-coral/90"
                showArrow
              >
                Get in Touch
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
