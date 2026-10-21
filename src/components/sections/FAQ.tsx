import { Plus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, faqNode } from "@/lib/schema";

/**
 * Answer-engine-friendly FAQ. Uses native <details> so every answer is present
 * in the server-rendered HTML (crawlers and LLMs read it even when collapsed),
 * and emits FAQPage JSON-LD for unambiguous Q&A extraction.
 */
export const faqs = [
  {
    q: "What is Serenitilabs?",
    a: "Serenitilabs is an AI-native mental health provider in Malaysia. Its licensed clinical psychologists deliver psychotherapy and corporate wellness programmes for individuals and organisations, and its own AI companion, Damaura, supports people between sessions.",
  },
  {
    q: "What mental health services does Serenitilabs offer?",
    a: "Serenitilabs offers evidence-based psychotherapy for adults, children, couples, and families; end-to-end corporate wellness programmes for organisations; and Damaura, an AI companion for support between sessions.",
  },
  {
    q: "Does Serenitilabs offer online therapy?",
    a: "Yes. Therapy sessions are available both online and in person, in English and Bahasa Malaysia, so you can get support in the way that suits you best.",
  },
  {
    q: "Where is Serenitilabs based?",
    a: "Serenitilabs is based in Kuala Lumpur, Malaysia, and supports clients across the country, both online and in person.",
  },
  {
    q: "What is Damaura?",
    a: "Damaura is Serenitilabs' AI companion for mental wellbeing, built for Southeast Asia and grounded in CBT, DBT and ACT. It offers one-tap mood check-ins, small daily practices, a journal, and a chat in English, BM or Manglish, with an optional faith layer. It is free to start on the web at damaura.ai. Damaura is an AI companion, not an emergency service.",
  },
  {
    q: "How do I book a session or get in touch?",
    a: "You can reach Serenitilabs at hello@sereniti.my or +60 18-398 1795, or use the contact form on the website. The team usually responds within one to two business days.",
  },
];

export function FAQ() {
  // Follows the homepage Team section on the same dawn surface, so the top padding is
  // short: two full section paddings back to back read as a gap, not a break.
  return (
    <section id="faq" className="pt-8 pb-20 md:pt-12 md:pb-28 bg-dawn">
      <Container className="max-w-3xl">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night text-center leading-tight mb-10 md:mb-12">
            Frequently Asked Questions
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border-y border-night/10 divide-y divide-night/10">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-lg font-medium text-night hover:text-coral-ink transition-colors">
                  {f.q}
                  <Plus className="w-5 h-5 text-coral shrink-0 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="-mt-1 pb-6 max-w-2xl text-night/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </FadeInOnScroll>
      </Container>

      <JsonLd data={graph(faqNode(faqs))} />
    </section>
  );
}
