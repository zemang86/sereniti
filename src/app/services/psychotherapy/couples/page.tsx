import { PsychotherapyTemplate } from "@/components/sections/PsychotherapyTemplate";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Couples Therapy",
  description:
    "Couples therapy for communication, conflict resolution, and connection. Online and in-person sessions in Kuala Lumpur.",
  alternates: { canonical: "/services/psychotherapy/couples" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Couples Therapy",
    description:
      "Couples therapy for communication, conflict resolution, and connection. Online and in-person sessions in Kuala Lumpur.",
    url: `${site.url}/services/psychotherapy/couples`,
    type: "website",
  },
};

export default function CouplesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Psychotherapy", path: "/services/psychotherapy" },
            { name: "Couples", path: "/services/psychotherapy/couples" },
          ])
        )}
      />
      <PsychotherapyTemplate
      title="Every Relationship Deserves Support"
      subtitle="Relationships take work, and seeking help isn't a sign of failure. It's a sign of commitment. Couples therapy provides a structured, neutral space where both partners can be heard, understood, and guided toward healthier patterns."
      issuesTitle="Common Reasons Couples Seek Help"
      issues={[
        "Communication breakdowns and recurring arguments",
        "Trust issues or recovery from betrayal",
        "Emotional distance or disconnection",
        "Navigating major life changes together",
        "Differences in parenting, finances, or values",
        "Intimacy concerns",
        "Pre-marital preparation",
      ]}
      formats={[
        "Online sessions via secure video call",
        "In-person sessions (Kuala Lumpur)",
        "90-minute sessions to allow space for both partners",
      ]}
      />
    </>
  );
}
