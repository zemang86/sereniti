import { PsychotherapyTemplate } from "@/components/sections/PsychotherapyTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Therapy",
  description:
    "Developmentally sensitive therapy for children and adolescents. Play therapy, art-based expression, and CBT adapted for young minds.",
};

export default function ChildrenPage() {
  return (
    <PsychotherapyTemplate
      title="Supporting Young Minds to Thrive"
      subtitle="Children experience the world with big emotions and developing coping skills. When they struggle — whether with anxiety, behavioural changes, school stress, or family transitions — the right support can make a lasting difference."
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
        "In-person sessions (recommended for younger children)",
        "Online sessions available for older children and teens",
        "50-minute sessions, with flexible scheduling",
      ]}
    />
  );
}
