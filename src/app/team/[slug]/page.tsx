import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { teamMembers } from "@/content/team";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, personNode } from "@/lib/schema";
import { site } from "@/lib/site";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return {};
  const description = `${member.role} at Serenitilabs. ${member.specialties.slice(0, 3).join(", ")}.`;
  return {
    title: member.name,
    description,
    alternates: { canonical: `/team/${slug}` },
    openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
      title: member.name,
      description,
      url: `${site.url}/team/${slug}`,
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({ params }: { params: Params }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const hasQualifications = member.qualifications.length > 0;

  const specialtiesCard = (
    <div className="bg-white rounded-card shadow-card p-8">
      <h2 className="font-sans text-lg font-semibold text-night mb-4">
        Specialties
      </h2>
      <div className="flex flex-wrap gap-2">
        {member.specialties.map((s) => (
          <Tag key={s} variant="lavender">{s}</Tag>
        ))}
      </div>
    </div>
  );

  const languagesCard = (
    <div className="bg-white rounded-card shadow-card p-8">
      <h2 className="font-sans text-lg font-semibold text-night mb-4">
        Languages
      </h2>
      <div className="flex flex-wrap gap-2">
        {member.languages.map((l) => (
          <Tag key={l} variant="mist">{l}</Tag>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <JsonLd
        data={graph(
          personNode(member),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
            { name: member.name, path: `/team/${member.slug}` },
          ])
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[5%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo (LCP image: no reveal, so it paints immediately) */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square overflow-hidden rounded-card bg-gradient-to-br from-white/60 to-mist/80 shadow-card flex items-center justify-center max-w-[320px] mx-auto lg:mx-0">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={640}
                    height={640}
                    sizes="320px"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <User className="w-20 h-20 text-sunrise" strokeWidth={1} />
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <Link
                href="/team"
                className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-night/70 hover:text-coral-ink"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                Our Team
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
                {member.name}
              </h1>
              <p className="mt-1 text-lg text-night/70">{member.role}</p>

              <div className="mt-6 max-w-2xl space-y-4">
                {member.bio.split("\n\n").map((para, i) => (
                  <p key={i} className="text-night/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/about/contact?type=therapy" showArrow>
                  Book with {member.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-16 md:py-20 bg-dawn">
        <Container>
          <FadeInOnScroll>
            {hasQualifications ? (
              <div className="grid gap-8 lg:grid-cols-5 items-start">
                <div className="lg:col-span-2 space-y-8">
                  {specialtiesCard}
                  {languagesCard}
                </div>
                <div className="lg:col-span-3 bg-white rounded-card shadow-card p-8">
                  <h2 className="font-sans text-lg font-semibold text-night mb-4">
                    Qualifications
                  </h2>
                  <ul className="space-y-2">
                    {member.qualifications.map((q) => (
                      <li key={q} className="text-sm text-night/70 leading-relaxed">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 items-start max-w-3xl mx-auto">
                {specialtiesCard}
                {languagesCard}
              </div>
            )}
          </FadeInOnScroll>
        </Container>
      </section>
    </>
  );
}
