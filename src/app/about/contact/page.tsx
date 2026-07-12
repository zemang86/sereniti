"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { Suspense } from "react";

const enquiryTypes = [
  { value: "", label: "Select enquiry type" },
  { value: "therapy", label: "Individual Therapy" },
  { value: "corporate", label: "Corporate Services" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General Enquiry" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("type") || "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xvzdgavb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-card shadow-card p-8 md:p-12 text-center">
        <h3 className="font-serif text-2xl text-night mb-4">Thank You</h3>
        <p className="text-night/60 leading-relaxed">
          Thank you for reaching out. We&apos;ll get back to you within 1-2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-card shadow-card p-8 md:p-12 space-y-6"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-night mb-2"
        >
          Full Name <span className="text-coral">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-input bg-white border border-night/12 text-night placeholder:text-night/30 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-night mb-2"
        >
          Email Address <span className="text-coral">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-input bg-white border border-night/12 text-night placeholder:text-night/30 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none"
          placeholder="you@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-night mb-2"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-input bg-white border border-night/12 text-night placeholder:text-night/30 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none"
          placeholder="+60 18-398 1795"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-night mb-2"
        >
          Enquiry Type
        </label>
        <div className="relative">
          <select
            id="type"
            name="enquiry_type"
            defaultValue={preselected}
            className="w-full px-4 py-3 pr-10 rounded-input bg-white border border-night/12 text-night focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none appearance-none"
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-night/40" />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-night mb-2"
        >
          Message <span className="text-coral">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-input bg-white border border-night/12 text-night placeholder:text-night/30 focus:border-coral focus:ring-2 focus:ring-coral/20 outline-none resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or email us at hello@sereniti.my.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-night text-white font-semibold py-3.5 rounded-button hover:bg-coral transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={3} color="#C9B8DB" size={400} opacity={0.1} blur={40} className="top-[5%] -left-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Let&apos;s Start a Conversation
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Whether you&apos;re booking a session, enquiring about corporate
              packages, or just have a question, we&apos;re here.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Contact Form + Details */}
      <section className="py-20 md:py-28 bg-dawn">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <Suspense
                  fallback={
                    <div className="bg-white rounded-card shadow-card p-8 md:p-12 animate-pulse space-y-6">
                      <div className="h-12 rounded-input bg-night/5" />
                      <div className="h-12 rounded-input bg-night/5" />
                      <div className="h-12 rounded-input bg-night/5" />
                      <div className="h-12 rounded-input bg-night/5" />
                      <div className="h-32 rounded-input bg-night/5" />
                      <div className="h-12 rounded-button bg-night/5" />
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </FadeInOnScroll>
            </div>

            {/* Contact Details */}
            <div>
              <FadeInOnScroll delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-white rounded-card shadow-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-coral mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-night">Email</p>
                        <a
                          href="mailto:hello@sereniti.my"
                          className="text-sm text-coral hover:underline"
                        >
                          hello@sereniti.my
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-card shadow-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-coral mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-night">
                          Phone / WhatsApp
                        </p>
                        <a
                          href="tel:+60183981795"
                          className="text-sm text-coral hover:underline"
                        >
                          +60 18-398 1795
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-card shadow-card p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-coral mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-night">
                          Location
                        </p>
                        <p className="text-sm text-night/60">
                          Kuala Lumpur, Malaysia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
