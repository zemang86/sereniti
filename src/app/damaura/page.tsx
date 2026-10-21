import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode, damauraAppNode } from "@/lib/schema";
import { site } from "@/lib/site";
import { fraunces, plusJakartaSans } from "@/lib/damaura-fonts";
import { cn } from "@/lib/utils";

/*
 * Every claim on this page is checked against the Damaura repo. Before adding
 * one, confirm it ships. Not built, so never advertise: screening, sleep
 * tracking, pricing / Damaura+, HRDC cohorts, consultation referrals, real-time
 * or early-warning org analytics. Faith layers: Universal and Islamic only.
 */

const description =
  "Damaura is Serenitilabs' AI companion for mental wellbeing, built for Southeast Asia: mood check-ins, guided practices, a journal, and a chat in English, BM or Manglish. Free to start on the web.";

export const metadata: Metadata = {
  title: "Damaura: AI Companion for Mental Wellbeing",
  description,
  alternates: { canonical: "/damaura" },
  openGraph: {
    images: [{ url: "/images/damaura/og.png", width: 1200, height: 630, alt: "Damaura, the AI companion that speaks your language" }],
    title: "Damaura: AI Companion for Mental Wellbeing",
    description,
    url: `${site.url}/damaura`,
    type: "website",
  },
};

const screens = [
  {
    name: "Today",
    src: "/images/damaura/today.webp",
    alt: "Damaura Today screen: a mood check-in, an afternoon Gratitude practice and today's rhythm",
    desc: "One tap to check in on your mood, one gentle next step, and a daily rhythm to come back to. It counts the days you showed up, with no streaks to lose.",
  },
  {
    name: "Talk",
    src: "/images/damaura/talk.webp",
    alt: "Damaura Talk screen: a conversation that switches between English and Bahasa Malaysia",
    desc: "Chat in English, BM or Manglish. Breathing and grounding exercises open right inside the conversation, and crisis lines appear when things sound heavy.",
  },
  {
    name: "Practice",
    src: "/images/damaura/practice.webp",
    alt: "Damaura Practice screen: Morning Intention, Mindful Moments, Mood Check-in, Gratitude and Evening Reflection",
    desc: "Morning Intention, Mindful Moments, Mood Check-in, Gratitude and Evening Reflection, plus a journal with a daily prompt.",
  },
  {
    name: "Journey",
    src: "/images/damaura/journey.webp",
    alt: "Damaura Journey screen: mood over the last 14 days, with no scores",
    desc: "A gentle look back at your mood over time, the days you showed up, and themes from your reflections. No scores.",
  },
];

const ctaBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 active:scale-[0.97] motion-reduce:active:scale-100";

function PhoneScreen({
  src,
  alt,
  sizes,
  eager = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[28px] border border-damaura-border bg-white shadow-[0_1px_2px_rgba(31,26,36,0.05),0_12px_32px_rgba(31,26,36,0.09)]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={780}
        height={1688}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function DamauraPage() {
  return (
    <div
      className={cn(
        fraunces.variable,
        plusJakartaSans.variable,
        "font-damaura-sans text-damaura-ink"
      )}
    >
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Damaura", path: "/damaura" },
          ]),
          damauraAppNode(description)
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-damaura-paper pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Image
                src="/images/damaura/wordmark.png"
                alt="Damaura"
                width={690}
                height={116}
                loading="eager"
                className="h-7 w-auto md:h-8"
              />
              <h1 className="mt-7 font-damaura-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                A companion for the days in between
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-damaura-muted">
                Damaura is Southeast Asia&apos;s culturally intelligent AI
                companion for mental wellbeing. It&apos;s grounded in CBT, DBT
                and ACT, it talks with you in English, BM or Manglish, and it
                can carry an optional faith layer.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href={site.damaura.app}
                  className={cn(ctaBase, "w-full bg-damaura-plum text-white hover:bg-damaura-ink sm:w-auto")}
                >
                  Try Damaura free
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={site.damaura.url}
                  className={cn(ctaBase, "w-full border border-damaura-plum/25 text-damaura-plum hover:border-damaura-plum sm:w-auto")}
                >
                  Visit damaura.ai
                </a>
              </div>
              <p className="mt-5 text-sm text-damaura-muted">
                Free to start on the web. App Store and Google Play coming soon.
              </p>
            </div>

            {/* LCP image on desktop: not wrapped in a reveal, so it paints on arrival. */}
            <PhoneScreen
              src="/images/damaura/today.webp"
              alt="Damaura Today screen with a mood check-in and today's rhythm"
              sizes="(min-width: 1024px) 300px, 260px"
              eager
              className="mx-auto max-w-[260px] lg:max-w-[300px]"
            />
          </div>
        </Container>
      </section>

      {/* Inside the app */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeInOnScroll>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-damaura-display text-3xl font-semibold md:text-4xl lg:text-5xl">
                Small, steady steps for your day
              </h2>
            </div>
          </FadeInOnScroll>

          {/* Phones: a swipeable snap row below sm (a 2-col grid made them
              ~160px wide), a grid from sm up. One reveal for the whole row so
              off-screen items are never left hidden mid-swipe. */}
          <FadeInOnScroll>
            <div
              role="region"
              aria-label="App screens"
              tabIndex={0}
              className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-x-8"
            >
              {screens.map((s) => (
                <div
                  key={s.name}
                  className="w-[72%] max-w-[270px] shrink-0 snap-start sm:w-auto sm:max-w-none"
                >
                  <PhoneScreen
                    src={s.src}
                    alt={s.alt}
                    sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 72vw"
                    className="mx-auto max-w-[270px]"
                  />
                  <h3 className="mt-6 font-damaura-display text-2xl font-semibold">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-damaura-muted md:text-base">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>

          <p className="mt-12 text-center text-sm text-damaura-muted">
            Screens shown with sample data.
          </p>
        </Container>
      </section>

      {/* Faith layers */}
      <section className="overflow-hidden bg-damaura-paper py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <FadeInOnScroll direction="left" className="order-last lg:order-first">
              <PhoneScreen
                src="/images/damaura/today-islamic.webp"
                alt="Damaura Today screen with the Islamic layer: a Soul Check-in, Dhikr and Muhasaba in today's rhythm"
                sizes="(min-width: 1024px) 300px, 260px"
                className="mx-auto max-w-[260px] lg:max-w-[300px]"
              />
              <p className="mt-4 text-center text-sm text-damaura-muted">
                Today, with the Islamic layer on
              </p>
            </FadeInOnScroll>

            <div>
              <FadeInOnScroll>
                <h2 className="font-damaura-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  Faith, woven all the way through, if you want it
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <p className="mt-6 max-w-xl leading-relaxed text-damaura-muted">
                  Damaura works for everyone with its Universal layer. Choose the
                  Islamic layer and it goes far deeper than a greeting: your
                  check-in becomes a Soul Check, your daily rhythm includes
                  Dhikr, gratitude becomes three blessings from today, your
                  journal becomes Tafakkur, and the evening closes with
                  Muhasaba, a moment of honest self-reflection.
                </p>
              </FadeInOnScroll>
            </div>
          </div>
        </Container>
      </section>

      {/* Safety */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <FadeInOnScroll>
                <h2 className="font-damaura-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  Safety is never behind a paywall
                </h2>
              </FadeInOnScroll>
              <FadeInOnScroll delay={0.2}>
                <div className="mt-6 space-y-4 leading-relaxed text-damaura-muted">
                  <p>
                    Every reply weighs safety, clinical psychology and culture.
                    When things get heavier, specialist agents take a closer look.
                    Crisis detection, hotline access and urgent support are free
                    for everyone, always.
                  </p>
                  <p>
                    Damaura is an AI companion, not an emergency service. When
                    things sound heavy, it puts these lines in front of you:
                  </p>
                </div>
              </FadeInOnScroll>
            </div>
            <FadeInOnScroll delay={0.2}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {site.crisis.lines.map((line) => (
                  <li key={line.name}>
                    <a
                      href={`tel:${line.tel}`}
                      className="block rounded-[20px] border border-damaura-border bg-damaura-paper px-5 py-4 transition-colors hover:border-damaura-plum/40"
                    >
                      <span className="block font-semibold text-damaura-plum">
                        {line.display}
                      </span>
                      <span className="block text-sm text-damaura-muted">
                        {line.name} &middot; {line.detail}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeInOnScroll>
          </div>
        </Container>
      </section>

      {/* With Serenitilabs */}
      <section className="bg-damaura-paper py-20 md:py-28">
        <Container>
          <StaggerChildren className="grid gap-6 md:grid-cols-2">
            <div className="flex h-full flex-col rounded-[28px] bg-white p-8 shadow-[0_1px_2px_rgba(31,26,36,0.05),0_8px_24px_rgba(31,26,36,0.06)] md:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-damaura-coral-text">
                For organisations
              </p>
              <h2 className="font-damaura-display text-2xl font-semibold md:text-3xl">
                Support for your whole team
              </h2>
              <p className="mt-4 leading-relaxed text-damaura-muted">
                Offer Damaura as part of a Serenitilabs corporate programme.
                Employers see aggregate engagement and recurring themes, never
                anyone&apos;s conversations or reflections, and a theme only
                appears once five or more people share it.
              </p>
              <Link
                href="/services/corporate"
                className="group mt-auto inline-flex items-center gap-2 self-start pt-6 font-semibold text-damaura-plum"
              >
                Explore corporate programmes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex h-full flex-col rounded-[28px] bg-white p-8 shadow-[0_1px_2px_rgba(31,26,36,0.05),0_8px_24px_rgba(31,26,36,0.06)] md:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-damaura-coral-text">
                When you want a person
              </p>
              <h2 className="font-damaura-display text-2xl font-semibold md:text-3xl">
                A tool, not a therapist
              </h2>
              <p className="mt-4 leading-relaxed text-damaura-muted">
                When you&apos;re ready to talk to someone, our licensed clinical
                psychologists see clients online and in person, in English and
                Bahasa Malaysia.
              </p>
              <Link
                href="/services/psychotherapy"
                className="group mt-auto inline-flex items-center gap-2 self-start pt-6 font-semibold text-damaura-plum"
              >
                Explore psychotherapy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </StaggerChildren>

          <p className="mt-10 text-center text-sm text-damaura-muted">
            Questions about the app? Write to{" "}
            <a
              href={`mailto:${site.damaura.email}`}
              className="font-semibold text-damaura-plum hover:underline"
            >
              {site.damaura.email}
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
}
