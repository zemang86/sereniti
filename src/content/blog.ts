export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-first-therapy-session",
    title: "What to Expect in Your First Therapy Session",
    excerpt:
      "A warm, practical guide that demystifies the first appointment. Addresses common fears and sets realistic expectations.",
    category: "Mental Health Education",
    date: "April 10, 2026",
    author: "Sarah Aleesa Aguinaldo",
    body: [
      "Walking into your first therapy session can feel daunting. You might wonder what you'll be asked, whether you'll have to share everything right away, or if the therapist will judge you. These concerns are completely normal, and completely unfounded.",
      "Your first session is really just a conversation. Your therapist wants to understand what brought you here, what you're hoping to get out of therapy, and how you're feeling right now. Think of it as a getting-to-know-you meeting, not an interrogation.",
      "Most first sessions last about 50 minutes. Your therapist will likely ask about your background, your current challenges, and your goals. You don't have to share anything you're not comfortable with. There's no pressure to dive deep right away.",
      "By the end of the session, you'll have a clearer sense of how therapy works, whether this therapist feels like a good fit, and what the next steps might look like. Many people leave their first session feeling lighter, simply because they've taken the step to show up.",
      "Remember: seeking help is a sign of strength, not weakness. You've already done the hardest part by deciding to try.",
    ],
  },
  {
    slug: "why-your-company-eap-isnt-enough",
    title: "Why Your Company's EAP Isn't Enough, and What to Do About It",
    excerpt:
      "Discusses the limitations of traditional Employee Assistance Programmes and introduces a more integrated model for workplace wellness.",
    category: "Workplace Wellness",
    date: "April 7, 2026",
    author: "Serenitilabs Team",
    body: [
      "Employee Assistance Programmes (EAPs) have been a staple of corporate benefits for decades. They offer confidential counselling, often through a toll-free number, for employees dealing with personal or work-related issues. On paper, they sound great. In practice? They're often underutilised and insufficient.",
      "The average EAP utilisation rate in Malaysia sits below 5%. That means 95% of your workforce either doesn't know about the programme, doesn't trust it, or doesn't find it relevant. The reasons are varied: stigma, lack of awareness, impersonal service, and the perception that EAP sessions are too few and too generic to make a real difference.",
      "A modern approach to employee wellness goes beyond reactive counselling. It integrates prevention, early detection, and continuous support. This might include AI-powered screening tools that help employees understand their mental health before issues escalate, regular workshops that build emotional resilience across teams, and embedded therapy sessions that feel like a natural part of the workplace, not a last resort.",
      "At Serenitilabs, we've designed our corporate programmes around this philosophy. We combine licensed therapists, Damaura's AI-powered tools, and structured wellness programming to create a system that actually gets used, because it's accessible, relevant, and destigmatised.",
      "If your EAP utilisation is below 10%, it's not your employees' fault. It's a design problem. And it's one we can help you solve.",
    ],
  },
  {
    slug: "5-signs-your-team-is-burning-out",
    title: "5 Signs Your Team Is Burning Out (And It's Not Just About Workload)",
    excerpt:
      "Practical signs of team burnout and actionable next steps for managers and HR leaders.",
    category: "Workplace Wellness",
    date: "April 3, 2026",
    author: "Serenitilabs Team",
    body: [
      "Burnout isn't always about working too many hours. Sometimes the most overworked teams aren't the ones burning out. It's the ones that feel unsupported, unrecognised, or disconnected from purpose. Here are five signs to watch for.",
      "1. Increased cynicism and disengagement. When team members who were once enthusiastic start making sarcastic remarks about company values or stop volunteering for projects, it's a red flag. Cynicism is often the first emotional symptom of burnout.",
      "2. Rising absenteeism and presenteeism. People are either calling in sick more often, or they're showing up but clearly not present. Both patterns signal that something deeper is going on.",
      "3. Declining quality of work. Burnout affects cognitive function: attention, memory, and decision-making all suffer. If you're seeing more mistakes, missed deadlines, or half-finished work, it may not be a competence issue.",
      "4. Social withdrawal. Team members who stop joining lunch, skip optional meetings, or keep cameras off in calls may be pulling away because they're emotionally exhausted.",
      "5. Emotional volatility. Sudden outbursts, tearfulness, or unusual sensitivity can signal that someone is at their breaking point. These reactions aren't personality flaws. They're distress signals.",
      "If you're seeing these patterns across your team, the solution isn't a pizza party or a one-off wellness talk. It's a structured, ongoing commitment to mental health support. Start by opening the conversation, and consider partnering with a professional team that can help you build a sustainable wellness programme.",
    ],
  },
  {
    slug: "how-ai-making-mental-health-accessible",
    title: "How AI Is Making Mental Health Support More Accessible",
    excerpt:
      "Introduces Damaura's role in modern mental health care, a thought leadership piece that educates while building brand awareness.",
    category: "Mental Health Education",
    date: "March 28, 2026",
    author: "Serenitilabs Team",
    body: [
      "Access to mental health support has long been limited by cost, availability, and stigma. In Malaysia, there are fewer than 2 psychiatrists per 100,000 people, and even fewer clinical psychologists. Waiting lists can stretch for weeks. For many, professional support simply isn't within reach.",
      "This is where artificial intelligence can make a meaningful difference. Not as a replacement for human therapists (that would be irresponsible) but as a tool that extends the reach of care, fills the gaps between sessions, and makes the first step less intimidating.",
      "AI-powered tools like Damaura can offer daily mood tracking, guided reflections, sleep quality insights, and evidence-based screening, all from a smartphone. They give users a private, non-judgmental way to check in with their mental health, without needing to book an appointment or speak to anyone before they're ready.",
      "For therapists, AI provides richer data. Instead of relying solely on what a client remembers in a 50-minute session, therapists can review mood trends, sleep patterns, and journal entries (with the client's consent) to provide more informed, personalised care.",
      "For organisations, AI enables scalable wellness programmes. Anonymous aggregate data helps HR teams understand wellbeing trends across their workforce, enabling early intervention and smarter resource allocation.",
      "The future of mental health care isn't AI versus humans. It's AI and humans, working together. And that's exactly what we're building at Serenitilabs.",
    ],
  },
  {
    slug: "parents-guide-talking-about-feelings",
    title: "A Parent's Guide to Talking About Feelings With Your Child",
    excerpt:
      "Practical, warm guide for parents who may be considering child therapy. Shareable and actionable.",
    category: "Tips & Resources",
    date: "March 24, 2026",
    author: "Sarah Aleesa Aguinaldo",
    body: [
      "Children feel everything deeply, but they don't always have the words to express what's going on inside. As a parent, one of the most powerful things you can do is create a safe space for emotional expression, even when it's messy, inconvenient, or uncomfortable.",
      "Start by normalising emotions. Instead of saying 'Don't cry' or 'There's nothing to be afraid of', try 'It's okay to feel sad. Do you want to tell me about it?' This simple shift tells your child that their feelings are valid and welcome.",
      "Use feeling words regularly. Label your own emotions out loud: 'I'm feeling frustrated because traffic was bad today.' This models emotional vocabulary and shows your child that everyone, even grown-ups, has big feelings sometimes.",
      "Be curious, not corrective. When your child is upset, resist the urge to immediately fix or dismiss. Instead, ask open-ended questions: 'What does that feel like in your body?' or 'Can you draw me a picture of how you're feeling?'",
      "Create rituals for checking in. A nightly 'roses and thorns' conversation at bedtime, one good thing and one hard thing from the day, gives your child a predictable, safe moment to share. Over time, these rituals build trust and emotional fluency.",
      "If your child seems consistently overwhelmed, withdrawn, or unable to manage their emotions, it might be worth exploring professional support. Child therapists use play, art, and storytelling to help young minds process what words alone can't capture. And the earlier you start, the more tools your child will have for life.",
    ],
  },
];
