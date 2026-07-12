export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  qualifications: string[];
  languages: string[];
  photo?: string;
  isLead?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "sarah-aleesa-aguinaldo",
    name: "Sarah Aleesa Aguinaldo",
    role: "Lead Therapist & Clinical Director",
    bio: "Sarah is a licensed clinical psychologist with over 8 years of experience in both clinical and non-clinical industries. Her practice integrates cognitive-behavioural, person-centred, and mindfulness-based approaches, with particular expertise in anxiety disorders, depression, trauma recovery, and workplace burnout.\n\nBefore founding the clinical practice at Serenitilabs, Sarah worked across hospital and private practice settings, gaining deep experience in adult mental health, crisis intervention, and culturally sensitive care in Malaysia's diverse context.\n\nSarah believes that therapy should feel like a conversation with someone who truly listens, not a clinical procedure. She leads the Serenitilabs team with that philosophy at the centre.",
    specialties: [
      "Anxiety Disorder",
      "Mood Disorder",
      "Trauma and Stressors-Related Disorder",
      "Workplace Burnout",
      "Neurodevelopmental Disorder",
      "Self-Esteem",
      "Life Transitions",
    ],
    qualifications: [
      "Master of Clinical Psychology",
      "Registered Clinical Psychologist (Malaysian Allied Health Profession Council (CP) 00218)",
      "Registered Psychologist (PSIMA -61700400)",
      "HRDC Accredited Trainer",
      "Certified in Talent, Competency and Succession Management",
      "Certified Psychological First Aid Provider",
      "Certified Dementia Rater and Caregiver",
      "Certified Couple Therapist",
    ],
    languages: ["English", "Bahasa Malaysia"],
    photo: "/images/team/sarah-aleesa-aguinaldo.jpg",
    isLead: true,
  },
  {
    slug: "ummu-nazra-nadzam",
    name: "Ummu Nazra Nadzam",
    role: "Registered Clinical Psychologist & HRD Corp Accredited Trainer",
    bio: "Ummu is a registered clinical psychologist who works with trauma, ADHD, autism spectrum conditions, anxiety, mood disorders, and psycho-oncology across all age groups.\n\nShe integrates Acceptance and Commitment Therapy, Dialectical Behaviour Therapy, psychodynamic, and trauma-focused approaches, tailoring care to each person she sees.\n\nBeyond the therapy room, Ummu is an active media advocate for accessible mental health, and serves as a National Paralympic Classifier.",
    specialties: [
      "Trauma & PTSD",
      "ADHD",
      "Autism Spectrum (ASD)",
      "Anxiety",
      "Mood Disorders",
      "Psycho-Oncology",
    ],
    qualifications: [
      "Registered Clinical Psychologist (MAHPC CP00227)",
      "HRD Corp Accredited Trainer (28008)",
      "National Paralympic Classifier",
    ],
    languages: ["English", "Bahasa Malaysia"],
    photo: "/images/team/ummu-nazra-nadzam.jpg",
  },
];
