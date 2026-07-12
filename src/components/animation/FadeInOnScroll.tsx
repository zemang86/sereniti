"use client";

import { motion } from "framer-motion";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
}

const directionOffset = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
};

export function FadeInOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.7,
  distance,
}: FadeInOnScrollProps) {
  const offset = directionOffset[direction];
  const initialY = distance !== undefined && direction === "up" ? distance : offset.y;
  const initialX = distance !== undefined && (direction === "left" || direction === "right") ? distance : offset.x;

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
