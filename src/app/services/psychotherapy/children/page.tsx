import { PsychotherapyTemplate } from "@/components/sections/PsychotherapyTemplate";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, serviceNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Child Therapy",
  description:
    "Developmentally sensitive therapy for children and adolescents. Play therapy, art-based expression, and CBT adapted for young minds.",
  alternates: { canonical: "/services/psychotherapy/children" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Child Therapy",
    description:
      "Developmentally sensitive therapy for children and adolescents. Play therapy, art-based expression, and CBT adapted for young minds.",
    url: `${site.url}/services/psychotherapy/children`,
    type: "website",
  },
};

export default function ChildrenPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Psychotherapy", path: "/services/psychotherapy" },
            { name: "Children", path: "/services/psychotherapy/children" },
          ]),
          serviceNode({
            name: "Child Therapy",
            description:
              "Psychotherapy for children and adolescents using play therapy, art-based expression, and child-adapted cognitive-behavioural techniques.",
            path: "/services/psychotherapy/children",
            serviceType: "Psychotherapy",
            audience: "Children and adolescents",
          })
        )}
      />
      <PsychotherapyTemplate
      eyebrow="Child Therapy"
      title="Supporting Young Minds to Thrive"
      subtitle="Children experience the world with big emotions and developing coping skills. When they struggle, whether with anxiety, behavioural changes, school stress, or family transitions, the right support can make a lasting difference."
      issuesTitle="Signs Your Child Might Benefit"
      issues={[
        "Persistent sadness, withdrawal, or irritability",
        "Difficulty concentrating or sudden changes in school performance",
        "Frequent tantrums, aggression, or defiance beyond their developmental stage",
        "Sleep disturbances or nightmares",
        "Difficulty making or keeping friends",
        "Anxiety about separation, social situations, or specific fears",
        "Response to family changes (divorce, relocation, loss)",
      ]}
      approach={{
        title: "Our Approach",
        body: "We use age-appropriate, evidence-based therapeutic approaches including play therapy, art-based expression, and cognitive-behavioural techniques adapted for children. Every intervention is tailored to your child's developmental stage and unique needs. You're part of the process. We provide regular updates, guidance on how to support your child at home, and family sessions when appropriate.",
      }}
      formats={[
        { kind: "in-person", label: "In-person sessions (recommended for younger children)" },
        { kind: "online", label: "Online sessions available for older children and teens" },
        { kind: "duration", label: "50-minute sessions, with flexible scheduling" },
      ]}
      />
    </>
  );
}
