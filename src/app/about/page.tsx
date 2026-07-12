import type { Metadata } from "next";
import { Heart, Compass, FlaskConical, Globe, Eye } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
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
    "Serenitilabs is a Malaysian mental health company delivering expert-led, evidence-based care enhanced by AI, making support accessible across Southeast Asia.",
  alternates: { canonical: "/about" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "About Us",
    description:
      "Serenitilabs is a Malaysian mental health company delivering expert-led, evidence-based care enhanced by AI, making support accessible across Southeast Asia.",
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
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#C9B8DB" size={500} opacity={0.1} blur={40} className="top-[5%] -left-[10%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Redefining Mental Health Care in Southeast Asia
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Serenitilabs was born from a simple belief: that mental health
              support should be accessible, personal, and empowered by the best
              of what technology can offer, without ever replacing the human
              connection at its core.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10 max-w-4xl mx-auto">
          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-card shadow-card p-8 md:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
              <FadeInOnScroll>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                  Vision
                </p>
                <p className="font-serif text-xl text-night leading-relaxed">
                  A world where seeking mental health support is as natural and
                  accessible as seeing a doctor for a physical checkup.
                </p>
              </FadeInOnScroll>
            </div>
            <div className="bg-white rounded-card shadow-card p-8 md:p-10 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1">
              <FadeInOnScroll delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-night leading-tight mb-8">
              The Human + AI Approach
            </h2>
            <div className="space-y-5 text-night/60 leading-relaxed">
              <p>
                We started with a question: what if technology could make mental
                health care better, not by replacing therapists, but by extending
                their reach?
              </p>
              <p>
                That&apos;s why we built Damaura, an AI companion that supports
                clients between sessions with mood tracking, sleep insights,
                guided reflections, and personalised recommendations. It gives
                therapists richer context. It gives clients continuous support.
                And it gives organisations measurable wellness data.
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

      {/* Values */}
      <section className="py-20 md:py-28 bg-dawn relative overflow-hidden">
        <Container className="relative z-10">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
                Our Values
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night">
                What We Stand For
              </h2>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="flex flex-wrap justify-center gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="w-full sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(33.333%_-_1rem)] bg-white rounded-card shadow-card p-8 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
                >
                  <v.icon className="w-8 h-8 text-coral mb-4" />
                  <h3 className="font-sans text-lg font-semibold text-night mb-2">
                    {v.title}
                  </h3>
                  <p className="text-night/60 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-2xl mx-auto">
          <FadeInOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3">
              Let&apos;s Talk
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
              Care That Starts With a Conversation
            </h2>
            <p className="mt-4 text-lg text-night/60 leading-relaxed">
              Whether you&apos;re taking your first step or looking for the right
              team to walk alongside you, we&apos;re here to listen.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
