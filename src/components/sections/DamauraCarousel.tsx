"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const mockups = [
  { src: "/images/damaura/today.webp", alt: "Damaura Today screen: a mood check-in and today's rhythm" },
  { src: "/images/damaura/talk.webp", alt: "Damaura Talk screen: a chat in English and Bahasa Malaysia" },
  { src: "/images/damaura/practice.webp", alt: "Damaura Practice screen: Morning Intention, Mindful Moments, Gratitude and Evening Reflection" },
  { src: "/images/damaura/journey.webp", alt: "Damaura Journey screen: mood over the last 14 days, with no scores" },
  { src: "/images/damaura/today-islamic.webp", alt: "Damaura Today screen with the optional Islamic layer" },
];

/**
 * Auto-advancing phone mockups. WCAG 2.2.2: auto-advance never runs for
 * reduced-motion users and pauses while the pointer is over the carousel or
 * focus is inside it, so the dots can be used without the slide moving away.
 */
export function DamauraCarousel({ className }: { className?: string }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduce = useReducedMotion();
  const paused = reduce || hovered || focused;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mockups.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className={cn("relative max-w-[300px] mx-auto", className)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        // Only resume once focus has left the carousel, not when it moves between dots.
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      {/* Images */}
      <div className="relative overflow-hidden rounded-[28px] border border-damaura-border bg-white shadow-[0_1px_2px_rgba(31,26,36,0.05),0_12px_32px_rgba(31,26,36,0.09)]">
        {mockups.map((mock, i) => (
          <motion.div
            key={mock.src}
            className={i === 0 ? "relative" : "absolute inset-0"}
            aria-hidden={i === current ? undefined : "true"}
            initial={false}
            animate={{
              opacity: i === current ? 1 : 0,
              scale: i === current || reduce ? 1 : 1.05,
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={mock.src}
              alt={mock.alt}
              width={780}
              height={1688}
              sizes="300px"
              className="w-full h-auto block"
            />
          </motion.div>
        ))}
      </div>

      {/* Dots: 24px hit area around an 8px pill */}
      <div className="flex justify-center mt-4">
        {mockups.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Show screen ${i + 1} of ${mockups.length}`}
            aria-current={i === current ? "true" : undefined}
            className="group grid h-6 min-w-6 place-items-center"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-6 bg-damaura-plum"
                  : "w-2 bg-damaura-ink/40 group-hover:bg-damaura-ink/60"
              }`}
            />
          </button>
        ))}
      </div>
      <p className="mt-2 text-center text-xs text-damaura-muted">
        Sample data
      </p>
    </div>
  );
}
