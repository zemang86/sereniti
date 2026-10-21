import type { Metadata } from "next";
import {
  Users,
  Presentation,
  Smartphone,
  Briefcase,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CredentialBadge } from "@/components/ui/CredentialBadge";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, serviceNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Wellness Programmes",
  description:
    "Serenitilabs delivers corporate wellness programmes for Malaysian workplaces: on-site and online therapy, workshops, leadership briefings, and Damaura for teams.",
  alternates: { canonical: "/services/corporate" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Corporate Wellness Programmes",
    description:
      "Serenitilabs delivers corporate wellness programmes for Malaysian workplaces: on-site and online therapy, workshops, leadership briefings, and Damaura for teams.",
    url: `${site.url}/services/corporate`,
    type: "website",
  },
};

const businessCase = [
  "Reduced absenteeism and presenteeism",
  "Higher employee engagement and retention",
  "Stronger employer brand and talent attraction",
  "Compliance with emerging ESG and workplace wellness standards",
  "Early intervention before issues escalate",
];

const stats = [
  { value: "RM1.8B", label: "Annual cost of workplace stress in Malaysia" },
  { value: "<10%", label: "of companies have structured mental health programmes" },
  { value: "4:1", label: "Average ROI on wellness investment" },
];

const offerings: {
  icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string;
}[] = [
  {
    icon: Users,
    title: "On-Site & Online Therapy Sessions",
    desc: "Embed licensed therapists into your workplace, available for regular on-site visits or private online sessions. Employees book directly. You provide the benefit; we handle the delivery.",
  },
  {
    icon: Presentation,
    title: "Workshops & Training",
    desc: "Interactive sessions for teams and leadership on stress management, emotional resilience, burnout prevention, mental health first aid, and building psychologically safe workplaces.",
    badge: site.hrdCorp.credential,
  },
  {
    icon: Smartphone,
    title: "Damaura for Teams",
    desc: "Give every employee Damaura, our AI companion: mood check-ins, small daily practices, a journal, and a chat in English, BM or Manglish. You see aggregate engagement and recurring themes, never anyone's conversations or reflections.",
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
    desc: "We design a programme tailored to your size, budget, and priorities, from standalone workshops to comprehensive year-round partnerships.",
  },
  {
    num: "03",
    title: "Delivery & Reporting",
    desc: "We deliver the programme and provide regular impact reports: utilisation rates, satisfaction scores, and anonymised wellness trends.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Corporate Wellness Programmes", path: "/services/corporate" },
          ]),
          serviceNode({
            name: "Corporate Wellness Programmes",
            description:
              "End-to-end employee wellness programmes designed for Malaysian workplaces. From workshops and leadership briefings to embedded therapy sessions and Damaura access.",
            path: "/services/corporate",
            serviceType: "Corporate wellness programme",
            audience: "Employers and organisations",
            medical: false,
          })
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={3} color="#D8E8F0" size={500} opacity={0.12} blur={40} className="top-[5%] -right-[10%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-ink mb-4">
            Corporate Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            Invest in Your People. The Returns Are Real.
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            Serenitilabs delivers structured mental wellness programmes that
            reduce absenteeism, improve retention, and build resilient teams,
            backed by licensed therapists and powered by AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
            <Button href="/about/contact?type=corporate" size="lg" showArrow>
              Request a Proposal
            </Button>
          </div>
          <div className="mt-8 flex justify-center">
            <CredentialBadge variant="strip" />
          </div>
        </Container>
      </section>

      {/* Business Case */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeInOnScroll>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
                  Why Mental Wellness Is a Business Priority
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <ul className="mt-8 space-y-3">
                  {businessCase.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-coral mt-0.5 shrink-0" strokeWidth={1.75} />
                      <span className="text-night/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>
            </div>

            <FadeInOnScroll direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.value}
                    className="rounded-card bg-white shadow-card p-6 md:p-7"
                  >
                    <p className="font-serif text-4xl md:text-5xl text-coral-ink leading-none">
                      {s.value}
                    </p>
                    <p className="mt-3 text-sm text-night/70 leading-relaxed">
                      {s.label}
                    </p>
                  </div>
                ))}
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight text-center mb-12 md:mb-16">
              What We Offer
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="bg-dawn rounded-card p-8 shadow-card h-full"
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                    <o.icon className="h-6 w-6 text-coral" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-sans text-lg font-semibold text-night mb-3">
                    {o.title}
                  </h3>
                  <p className="text-night/70 leading-relaxed">
                    {o.desc}
                  </p>
                  {o.badge && (
                    <p className="mt-4 flex items-center gap-2.5 text-xs font-medium text-night/70">
                      <Image
                        src={site.hrdCorp.logo}
                        alt=""
                        aria-hidden="true"
                        width={96}
                        height={96}
                        className="w-8 h-8 shrink-0"
                      />
                      {o.badge}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight text-center mb-12 md:mb-16">
              How It Works
            </h2>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-3 gap-10 text-left">
            {steps.map((step) => (
              <div key={step.num} className="h-full border-t border-night/15 pt-6">
                <span className="block text-5xl font-serif text-indigo/60 leading-none">
                  {step.num}
                </span>
                <h3 className="font-sans text-xl font-semibold text-night mt-5 mb-3">
                  {step.title}
                </h3>
                <p className="text-night/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Scale CTA */}
      <section className="relative py-16 md:py-20 bg-indigo bg-[url('/images/indigo-bg.webp')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-indigo/30" />
        <Container className="relative z-10 text-center">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-dawn leading-tight">
              Packages Scale with Your Organisation
            </h2>
            <p className="mt-4 text-dawn/60 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a startup of 20 or an enterprise of 2,000, our
              programmes adapt. We offer modular packages that you can build up
              over time as you see results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
              <Button
                href="/about/contact?type=corporate"
                size="lg"
                className="bg-coral text-night hover:bg-sunrise"
                showArrow
              >
                Request a Proposal
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
