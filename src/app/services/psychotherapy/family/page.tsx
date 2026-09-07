import { PsychotherapyTemplate } from "@/components/sections/PsychotherapyTemplate";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, serviceNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Family Therapy",
  description:
    "Family therapy for conflict resolution, communication, and healing. Sessions structured for your whole household.",
  alternates: { canonical: "/services/psychotherapy/family" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Family Therapy",
    description:
      "Family therapy for conflict resolution, communication, and healing. Sessions structured for your whole household.",
    url: `${site.url}/services/psychotherapy/family`,
    type: "website",
  },
};

export default function FamilyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Psychotherapy", path: "/services/psychotherapy" },
            { name: "Family", path: "/services/psychotherapy/family" },
          ]),
          serviceNode({
            name: "Family Therapy",
            description:
              "Family therapy in 60-90 minute sessions, adapted to who needs to be in the room. Communication, conflict, and rebuilding trust.",
            path: "/services/psychotherapy/family",
            serviceType: "Psychotherapy",
            audience: "Families",
          })
        )}
      />
      <PsychotherapyTemplate
      title="Healing Is Easier When You Do It Together"
      subtitle="Family dynamics shape how we relate to the world. When tension, miscommunication, or unresolved conflict affects your household, family therapy creates space for everyone to be heard, and builds a path toward understanding."
      issuesTitle="When Family Therapy Helps"
      issues={[
        "Ongoing conflict between family members",
        "A family member dealing with mental health challenges",
        "Navigating grief, loss, or significant life changes",
        "Blended family adjustments",
        "Parenting disagreements or challenges",
        "Supporting a child or teen through a difficult period",
        "Rebuilding trust after a crisis",
      ]}
      approach={{
        title: "How Sessions Are Structured",
        body: "Family therapy typically involves the whole household, though sessions can be adapted based on who's ready to participate. Our therapists facilitate open, respectful dialogue and help families identify patterns, roles, and dynamics that may be contributing to friction. Who attends varies: sometimes it's the entire household, sometimes a parent and child, or siblings. Your therapist will guide you on the most productive configuration.",
      }}
      formats={[
        "In-person sessions recommended (Kuala Lumpur)",
        "Online sessions available when in-person isn't feasible",
        "60-90 minute sessions depending on family size",
      ]}
      />
    </>
  );
}
