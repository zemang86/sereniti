import { PsychotherapyTemplate } from "@/components/sections/PsychotherapyTemplate";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adult Therapy",
  description:
    "Individual psychotherapy for adults: anxiety, depression, burnout, life transitions, and more. Online and in-person sessions in Kuala Lumpur.",
  alternates: { canonical: "/services/psychotherapy/adults" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Adult Therapy",
    description:
      "Individual psychotherapy for adults: anxiety, depression, burnout, life transitions, and more. Online and in-person sessions in Kuala Lumpur.",
    url: `${site.url}/services/psychotherapy/adults`,
    type: "website",
  },
};

export default function AdultsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Psychotherapy", path: "/services/psychotherapy" },
            { name: "Adults", path: "/services/psychotherapy/adults" },
          ])
        )}
      />
      <PsychotherapyTemplate
      title="You Don't Have to Carry It Alone"
      subtitle="Life is demanding. Work pressure, relationship strain, financial stress, grief, or simply feeling like something is off, these are real, valid reasons to seek support. Our adult psychotherapy services give you a confidential space to process, heal, and grow."
      issuesTitle="What We Help With"
      issues={[
        "Anxiety and panic",
        "Depression",
        "Workplace stress and burnout",
        "Life transitions and adjustment",
        "Grief",
        "Trauma-related issues",
        "Self-esteem and identity",
        "Relationship difficulties",
        "Sleep and stress-related physical symptoms",
      ]}
      formats={[
        "Online sessions via secure video call",
        "In-person sessions (Kuala Lumpur)",
        "50-minute standard sessions",
      ]}
      firstSession="Your first session is about getting to know each other. Your therapist will listen to what brought you here, understand your goals, and discuss how therapy can help. There's no pressure to share more than you're comfortable with."
      ongoingSupport="Between sessions, Damaura helps you stay connected to your progress, with daily mood check-ins, journaling prompts, and personalised insights that your therapist can review with your consent."
      />
    </>
  );
}
