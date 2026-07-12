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
    a: "Serenitilabs is a Malaysian mental health technology company that combines licensed clinical expertise with AI-powered tools. It provides psychotherapy, digital mental health screening, and corporate wellness programmes for individuals and organisations.",
  },
  {
    q: "What mental health services does Serenitilabs offer?",
    a: "Serenitilabs offers evidence-based psychotherapy for adults, children, couples, and families; confidential AI-guided mental health screening; and end-to-end corporate wellness programmes for organisations.",
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
    a: "Damaura is Serenitilabs' AI companion that supports you between sessions with daily mood and sleep tracking, guided reflections, and personalised wellness insights, alongside care from licensed clinicians.",
  },
  {
    q: "How do I book a session or get in touch?",
    a: "You can reach Serenitilabs at hello@sereniti.my or +60 18-398 1795, or use the contact form on the website. The team usually responds within one to two business days.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-dawn">
      <Container className="max-w-3xl">
        <FadeInOnScroll>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night text-center mb-12">
            Frequently Asked Questions
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="border-y border-night/10 divide-y divide-night/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-lg font-medium text-night">
                  {f.q}
                  <Plus className="w-5 h-5 text-coral shrink-0 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-night/60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </FadeInOnScroll>
      </Container>

      <JsonLd data={graph(faqNode(faqs))} />
    </section>
  );
}
