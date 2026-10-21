"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, ChevronDown, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";

const enquiryTypes = [
  { value: "", label: "Select enquiry type" },
  { value: "therapy", label: "Individual Therapy" },
  { value: "corporate", label: "Corporate Services" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General Enquiry" },
];

const WHATSAPP_URL = "https://wa.me/60183981795";

const inputClasses =
  "w-full px-4 py-3 rounded-input bg-white border border-night/50 text-night placeholder:text-night/70 focus:border-coral-ink focus:ring-2 focus:ring-coral/30 outline-none";

const inlineLink = "font-semibold underline underline-offset-2 whitespace-nowrap";

function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("type") || "";
  const initialType = enquiryTypes.some((t) => t.value === preselected)
    ? preselected
    : "";
  const [enquiryType, setEnquiryType] = useState(initialType);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so keyboard and screen reader users land on it.
  useEffect(() => {
    if (status !== "success" || !successRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    successRef.current.focus({ preventScroll: true });
    successRef.current.scrollIntoView({
      block: "center",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [status]);

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
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="bg-white rounded-card shadow-card p-6 md:p-12 text-center"
      >
        <h2 className="font-serif text-2xl text-night mb-4">Message Sent</h2>
        <p className="text-night/70 leading-relaxed">
          Thanks for reaching out. We&apos;ll reply within one to two business
          days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-card shadow-card p-6 md:p-12 space-y-6"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-night mb-2"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-night mb-2"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          spellCheck={false}
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-night mb-2"
        >
          Phone Number{" "}
          <span className="font-normal text-night/70">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className={inputClasses}
          placeholder="+60 12-345 6789"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-night mb-2"
        >
          Enquiry Type{" "}
          <span className="font-normal text-night/70">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="type"
            name="enquiry_type"
            defaultValue={initialType}
            onChange={(e) => setEnquiryType(e.target.value)}
            className={`w-full px-4 py-3 pr-10 rounded-input bg-white border border-night/50 focus:border-coral-ink focus:ring-2 focus:ring-coral/30 outline-none appearance-none ${
              enquiryType === "" ? "text-night/70" : "text-night"
            }`}
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value} className="text-night">
                {t.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-night/70"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-night mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-y`}
          placeholder="How can we help?"
        />
      </div>

      {/* Honeypot: Formspree drops submissions that fill this in. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700 leading-relaxed">
          Your message didn&apos;t send. Please try again, or reach us at{" "}
          <a href="mailto:hello@sereniti.my" className={inlineLink}>
            hello@sereniti.my
          </a>{" "}
          or on WhatsApp at{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={inlineLink}
          >
            +60 18-398 1795
          </a>
          .
        </p>
      )}

      <p className="text-xs text-night/70 leading-relaxed">
        This inbox isn&apos;t monitored around the clock. If you&apos;re in
        crisis, call Talian Kasih at{" "}
        <a href="tel:15999" className={`${inlineLink} text-night hover:text-coral-ink`}>
          15999
        </a>{" "}
        or{" "}
        <a href="tel:999" className={`${inlineLink} text-night hover:text-coral-ink`}>
          999
        </a>
        .
      </p>

      {/* Announces the in-flight state; kept out of the last slot so space-y
          doesn't add a trailing margin under the button. */}
      <p className="sr-only" aria-live="polite">
        {status === "submitting" ? "Sending your message…" : ""}
      </p>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-night text-white font-semibold py-3.5 rounded-button hover:bg-coral-ink transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

const linkCard =
  "group block bg-white rounded-card shadow-card p-6 transition-all hover:shadow-card-hover hover:-translate-y-0.5";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={3} color="#C9B8DB" size={400} opacity={0.1} blur={40} className="top-[5%] -left-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            Whether you&apos;re booking a session, enquiring about corporate
            packages, or just have a question, we&apos;re here.
          </p>
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
                    <div className="bg-white rounded-card shadow-card p-6 md:p-12 animate-pulse space-y-6">
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
            <div className="lg:sticky lg:top-28 self-start">
              <FadeInOnScroll delay={0.2}>
                <div className="space-y-6">
                  <a href="mailto:hello@sereniti.my" className={linkCard}>
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-coral mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-night">Email</p>
                        <p className="text-sm text-coral-ink group-hover:underline underline-offset-2">
                          hello@sereniti.my
                        </p>
                      </div>
                    </div>
                  </a>

                  <a href="tel:+60183981795" className={linkCard}>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-coral mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-night">Phone</p>
                        <p className="text-sm text-coral-ink group-hover:underline underline-offset-2">
                          +60 18-398 1795
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCard}
                  >
                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-5 h-5 text-coral mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-night">WhatsApp</p>
                        <p className="text-sm text-coral-ink group-hover:underline underline-offset-2">
                          Message on WhatsApp
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="bg-white rounded-card shadow-card p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-coral mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <div>
                        <p className="text-sm font-semibold text-night">
                          Location
                        </p>
                        <p className="text-sm text-night/70">
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
