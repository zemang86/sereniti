import type { Metadata } from "next";
import { Shield, Eye, Lock, BarChart3, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, serviceNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Mental Health Screening",
  description:
    "Serenitilabs offers AI-guided digital mental health screening in Malaysia: a confidential, clinically informed assessment of your wellbeing in under 10 minutes.",
  alternates: { canonical: "/services/screening" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Digital Mental Health Screening",
    description:
      "Serenitilabs offers AI-guided digital mental health screening in Malaysia: a confidential, clinically informed assessment of your wellbeing in under 10 minutes.",
    url: `${site.url}/services/screening`,
    type: "website",
  },
};

const steps = [
  {
    num: "01",
    title: "Answer a Few Questions",
    desc: "Guided by Damaura, our AI companion, you'll complete a short, evidence-based questionnaire. No sign-up required. No judgment.",
  },
  {
    num: "02",
    title: "Get Your Personalised Report",
    desc: "Receive a clear, easy-to-understand summary of your emotional wellbeing, covering stress levels, mood patterns and areas that may benefit from professional support.",
  },
  {
    num: "03",
    title: "Take the Next Step",
    desc: "Your report comes with tailored recommendations. If therapy would help, we'll guide you to the right therapist on our team. If you're doing well, we'll share tips to keep it that way.",
  },
];

const corpFeatures = [
  "Bulk screening for teams of any size",
  "Anonymous aggregate reports for HR and leadership",
  "Identify trends before they become crises",
  "Seamless integration with our therapy and workshop services",
];

export default function ScreeningPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Digital Screening", path: "/services/screening" },
          ]),
          serviceNode({
            name: "Digital Mental Health Screening",
            description:
              "Start with understanding. Our AI-powered screening tool provides a confidential, personalised assessment of your mental health, in under 10 minutes.",
            path: "/services/screening",
            serviceType: "Mental health screening",
            medical: false,
          })
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={1} color="#C9B8DB" size={500} opacity={0.1} blur={40} className="top-[5%] -right-[10%]" />
        </ParallaxLayer>

        <Container className="relative z-10 max-w-3xl text-center mx-auto">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-4">
              Powered by Damaura
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Understand Your Mental Health in Under 10 Minutes
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Our AI-guided screening is private, clinically informed, and
              designed to give you a clear starting point, whether you&apos;re
              checking in for yourself or rolling it out across your
              organisation.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.3}>
            <div className="mt-8">
              <Button href="/about/contact" size="lg" showArrow>
                Start Your Screening
              </Button>
            </div>
          </FadeInOnScroll>
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
                Simple. Private. Insightful.
              </h2>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-card shadow-card p-8">
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
        </Container>
      </section>

      {/* For Organisations */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={3} color="#D8E8F0" size={400} opacity={0.12} blur={30} className="top-[20%] -right-[5%]" />
        </ParallaxLayer>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeInOnScroll>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                  For Organisations
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-night leading-tight">
                  Scale Mental Health Screening Across Your Workforce
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <p className="mt-6 text-night/60 leading-relaxed">
                  Deploy Damaura-powered screening as part of your corporate
                  wellness programme. Get anonymised, aggregated insights into
                  your team&apos;s wellbeing, without compromising individual
                  privacy.
                </p>
                <ul className="mt-6 space-y-3">
                  {corpFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-coral mt-0.5 shrink-0" />
                      <span className="text-night/70">{f}</span>
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.3}>
                <div className="mt-8">
                  <Button href="/about/contact?type=corporate" showArrow>
                    Request Corporate Screening
                  </Button>
                </div>
              </FadeInOnScroll>
            </div>

            <FadeInOnScroll direction="right">
              <div className="bg-cloud/30 rounded-card p-12 flex items-center justify-center aspect-square">
                <BarChart3 className="w-24 h-24 text-cloud" strokeWidth={1} />
              </div>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* Privacy */}
      <section className="py-16 md:py-20 bg-dawn">
        <Container>
          <FadeInOnScroll>
            <div className="bg-white rounded-card shadow-card p-8 md:p-12 text-center max-w-3xl mx-auto">
              <div className="flex justify-center gap-6 mb-6">
                <Lock className="w-8 h-8 text-coral/60" />
                <Shield className="w-8 h-8 text-coral/60" />
                <Eye className="w-8 h-8 text-coral/60" />
              </div>
              <h3 className="font-serif text-2xl text-night mb-4">
                Your Data, Your Control
              </h3>
              <p className="text-night/60 leading-relaxed">
                Screening results are strictly confidential. Individual data is
                never shared with employers. Corporate reports contain only
                anonymised, aggregate insights. We comply with Malaysian data
                protection standards and take your privacy seriously.
              </p>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
