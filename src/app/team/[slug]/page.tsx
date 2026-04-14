import { notFound } from "next/navigation";
import { User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { teamMembers } from "@/content/team";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.role} at Serenitilabs. ${member.specialties.slice(0, 3).join(", ")}.`,
  };
}

export default async function TeamMemberPage({ params }: { params: Params }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-card bg-gradient-to-br from-white/60 to-mist/80 shadow-card flex items-center justify-center max-w-[320px] mx-auto">
                <User className="w-20 h-20 text-sunrise" strokeWidth={1} />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-2">
                {member.isLead ? "Lead Therapist" : "Therapist"}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
                {member.name}
              </h1>
              <p className="text-night/50 mt-1">{member.role}</p>

              <div className="mt-6 space-y-4">
                {member.bio.split("\n\n").map((para, i) => (
                  <p key={i} className="text-night/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/about/contact" showArrow>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Specialties */}
            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="font-sans text-lg font-semibold text-night mb-4">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <Tag key={s} variant="lavender">{s}</Tag>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            {member.qualifications.length > 0 && (
              <div className="bg-white rounded-card shadow-card p-8">
                <h3 className="font-sans text-lg font-semibold text-night mb-4">
                  Qualifications
                </h3>
                <ul className="space-y-2">
                  {member.qualifications.map((q) => (
                    <li key={q} className="text-sm text-night/60 leading-relaxed">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages */}
            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="font-sans text-lg font-semibold text-night mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.languages.map((l) => (
                  <Tag key={l} variant="mist">{l}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
