import type { Metadata } from "next";
import { Heart, Compass, FlaskConical, Globe, Eye, Building2, HeartHandshake, MessageCircleHeart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CredentialBadge } from "@/components/ui/CredentialBadge";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Serenitilabs is an AI-native mental health provider in Malaysia: licensed clinical psychologists deliver the care, and our own AI companion, Damaura, supports people between sessions.",
  alternates: { canonical: "/about" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "About Us",
    description:
      "Serenitilabs is an AI-native mental health provider in Malaysia: licensed clinical psychologists deliver the care, and our own AI companion, Damaura, supports people between sessions.",
    url: `${site.url}/about`,
    type: "website",
  },
};

const values = [
  {
    icon: Heart,
    title: "Human First",
    desc: "Technology enhances our work. People define it.",
  },
  {
    icon: Compass,
    title: "Accessible by Design",
    desc: "Mental health care should not be a luxury. We design services and pricing that widen the door.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based",
    desc: "Every approach we use is grounded in clinical research and best practices.",
  },
  {
    icon: Globe,
    title: "Culturally Aware",
    desc: "We serve Malaysia's diverse communities with sensitivity, respect, and understanding.",
  },
  {
    icon: Eye,
    title: "Transparent",
    desc: "No jargon, no hidden agendas. We tell you what we do and why.",
  },
];

/* What makes Serenitilabs "full stack": it owns the care, not just the software.
   Keep every line true today; the closing line is framed as an aim on purpose. */
const stack = [
  {
    icon: HeartHandshake,
    title: "Licensed Clinicians",
    desc: "Registered clinical psychologists lead every session and make every clinical decision, online and in person, in English and Bahasa Malaysia.",
  },
  {
    icon: MessageCircleHeart,
    title: "Our Own AI",
    desc: "Damaura, built in-house, gives people a place to check in, practise and talk things through in the days between sessions.",
  },
  {
    icon: Building2,
    title: "One Partner for Organisations",
    desc: `Therapy, workshops from an ${site.hrdCorp.credential}, and Damaura for every employee, from one team instead of three vendors.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#C9B8DB" size={500} opacity={0.1} blur={40} className="top-[5%] -left-[10%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            Redefining Mental Health Care in Southeast Asia
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            Serenitilabs was born from a simple belief: that mental health
            support should be accessible, personal, and empowered by the best
            of what technology can offer, without ever replacing the human
            connection at its core.
          </p>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10 max-w-4xl mx-auto">
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            <div className="h-full bg-white rounded-card shadow-card p-8 md:p-10">
              <FadeInOnScroll>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-ink mb-3">
                  Vision
                </p>
                <p className="font-serif text-xl text-night leading-relaxed">
                  A world where seeking mental health support is as natural and
                  accessible as seeing a doctor for a physical checkup.
                </p>
              </FadeInOnScroll>
            </div>
            <div className="h-full bg-white rounded-card shadow-card p-8 md:p-10">
              <FadeInOnScroll delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-ink mb-3">
                  Mission
                </p>
                <p className="font-serif text-xl text-night leading-relaxed">
                  To deliver expert-led mental health care, enhanced by AI, that
                  empowers individuals and organisations to thrive, starting in
                  Malaysia and growing across Southeast Asia.
                </p>
              </FadeInOnScroll>
            </div>
          </StaggerChildren>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={1} color="#F5D3B8" size={400} opacity={0.08} blur={40} className="top-[20%] -right-[5%]" />
        </ParallaxLayer>

        <Container className="relative z-10 max-w-3xl mx-auto">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-ink mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-night leading-tight mb-8">
              The Human + AI Approach
            </h2>
            <div className="space-y-5 text-night/70 leading-relaxed">
              <p>
                We started with a question: what if technology could make mental
                health care better, not by replacing therapists, but by extending
                their reach?
              </p>
              <p>
                That&apos;s why we built Damaura, an AI companion that supports
                people between sessions with one-tap mood check-ins, small daily
                practices, a journal, and a chat in English, BM or Manglish. It
                gives clients continuous support. And it lets organisations offer
                that support to everyone on their team.
              </p>
              <p>
                But Damaura is a tool, not a therapist. At the heart of
                Serenitilabs is a team of licensed, experienced professionals who
                bring empathy, expertise, and genuine care to every session. The
                AI makes us better. The humans make us Serenitilabs.
              </p>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* How We're Built */}
      <section className="py-20 md:py-28 bg-indigo relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunrise mb-3">
                How We&apos;re Built
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dawn leading-tight">
                We Don&apos;t Sell AI to Mental Health Providers. We Are One.
              </h2>
              <p className="mt-6 text-lg text-dawn/60 leading-relaxed">
                Most mental health technology is built to be sold to clinics and
                HR teams. We took the other path. Serenitilabs employs the
                clinicians, delivers the care and the corporate programmes
                itself, and builds its own AI to support both.
              </p>
            </div>
          </FadeInOnScroll>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {stack.map((item) => (
              <div
                key={item.title}
                className="h-full rounded-card border border-dawn/10 bg-white/5 p-8"
              >
                <item.icon className="w-8 h-8 text-coral mb-5" strokeWidth={1.75} />
                <h3 className="font-sans text-lg font-semibold text-dawn mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dawn/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </StaggerChildren>

          <FadeInOnScroll>
            <p className="mt-14 text-center font-serif text-xl md:text-2xl text-dawn/90 max-w-2xl mx-auto leading-relaxed">
              People do the care. AI does the work around it. The aim is more
              people supported, with no drop in the standard of care.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <h2 className="text-center mb-12 md:mb-16 font-serif text-3xl md:text-4xl lg:text-5xl text-night">
              What We Stand For
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <ul className="max-w-3xl mx-auto bg-white rounded-card shadow-card divide-y divide-night/10">
              {values.map((v) => (
                <li key={v.title} className="flex gap-5 p-6 md:p-8">
                  <v.icon
                    className="w-6 h-6 text-coral shrink-0 mt-1"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-night">
                      {v.title}
                    </h3>
                    <p className="mt-1.5 text-night/70 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Credentials */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <h2 className="text-center mb-12 font-serif text-3xl md:text-4xl lg:text-5xl text-night">
              Registered and Accountable
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              <div className="flex items-start gap-4 rounded-card bg-white p-8 shadow-card">
                <Building2
                  className="w-6 h-6 text-coral shrink-0 mt-0.5"
                  strokeWidth={1.75}
                />
                <div className="text-left">
                  <p className="text-base font-semibold text-night">
                    Registered with SSM
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-night/70">
                    {site.legalName}, company registration {site.registration}.
                  </p>
                </div>
              </div>
              <CredentialBadge variant="card" />
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-2xl mx-auto">
          <FadeInOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
              Care That Starts with a Conversation
            </h2>
            <p className="mt-4 text-lg text-night/70 leading-relaxed">
              Whether you&apos;re taking your first step or looking for the right
              team to walk alongside you, we&apos;re here to listen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
              <Button href="/about/contact" size="lg" showArrow>
                Get in Touch
              </Button>
              <Button href="/team" variant="ghost" size="lg">
                Meet Our Team
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
