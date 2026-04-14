export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  qualifications: string[];
  languages: string[];
  isLead?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "sarah-aleesa-aguinaldo",
    name: "Sarah Aleesa Aguinaldo",
    role: "Lead Therapist & Clinical Director",
    bio: "Sarah is a licensed clinical psychologist with over 8 years of experience in both clinical and non-clinical industries. Her practice integrates cognitive-behavioural, person-centred, and mindfulness-based approaches, with particular expertise in anxiety disorders, depression, trauma recovery, and workplace burnout.\n\nBefore founding the clinical practice at Serenitilabs, Sarah worked across hospital and private practice settings, gaining deep experience in adult mental health, crisis intervention, and culturally sensitive care in Malaysia's diverse context.\n\nSarah believes that therapy should feel like a conversation with someone who truly listens — not a clinical procedure. She leads the Serenitilabs team with that philosophy at the centre.",
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
    isLead: true,
  },
  {
    slug: "therapist-2",
    name: "Therapist 2",
    role: "Counselling Psychologist",
    bio: "Specialising in child and adolescent therapy, they bring a gentle, playful approach to working with young people. With training in play therapy and family systems, they help children express what words alone can't capture.",
    specialties: [
      "Child & Adolescent",
      "Play Therapy",
      "Anxiety",
      "Behavioural Issues",
      "Family Dynamics",
    ],
    qualifications: [],
    languages: ["English", "Bahasa Malaysia"],
  },
  {
    slug: "therapist-3",
    name: "Therapist 3",
    role: "Clinical Psychologist",
    bio: "With a focus on couples and relationship dynamics, they help partners rebuild communication, navigate conflict, and rediscover connection. Their warm, structured approach creates space for both voices to be heard.",
    specialties: [
      "Couples Therapy",
      "Marriage",
      "Communication",
      "Intimacy",
      "Pre-Marital Counselling",
    ],
    qualifications: [],
    languages: ["English", "Bahasa Malaysia"],
  },
  {
    slug: "therapist-4",
    name: "Therapist 4",
    role: "Counsellor & Corporate Wellness Facilitator",
    bio: "Bridging clinical expertise with corporate understanding, they lead Serenitilabs' workplace programmes. They design and deliver workshops, leadership briefings, and employee wellness strategies that translate clinical insight into practical workplace action.",
    specialties: [
      "Workplace Stress",
      "Burnout",
      "Leadership Coaching",
      "Workshop Facilitation",
      "Employee Wellbeing",
    ],
    qualifications: [],
    languages: ["English", "Bahasa Malaysia"],
  },
];
