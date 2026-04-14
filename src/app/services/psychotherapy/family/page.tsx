import { PsychotherapyTemplate } from "@/components/sections/PsychotherapyTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Therapy",
  description:
    "Family therapy for conflict resolution, communication, and healing. Sessions structured for your whole household.",
};

export default function FamilyPage() {
  return (
    <PsychotherapyTemplate
      title="Healing Is Easier When You Do It Together"
      subtitle="Family dynamics shape how we relate to the world. When tension, miscommunication, or unresolved conflict affects your household, family therapy creates space for everyone to be heard — and builds a path toward understanding."
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
        body: "Family therapy typically involves the whole household, though sessions can be adapted based on who's ready to participate. Our therapists facilitate open, respectful dialogue and help families identify patterns, roles, and dynamics that may be contributing to friction. Who attends varies — sometimes it's the entire household, sometimes a parent and child, or siblings. Your therapist will guide you on the most productive configuration.",
      }}
      formats={[
        "In-person sessions recommended (Kuala Lumpur)",
        "Online sessions available when in-person isn't feasible",
        "60–90 minute sessions depending on family size",
      ]}
    />
  );
}
