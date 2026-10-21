"use client";

import { motion } from "framer-motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (duration: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.12,
  duration = 0.7,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      // "some", not a ratio: a ratio can never be met by an element taller
      // than 1/ratio viewports (long articles and the blog grid stayed blank).
      viewport={{ once: true, amount: "some", margin: "0px 0px -80px 0px" }}
      custom={staggerDelay}
      className={className}
    >
      {/* Children should use staggerItemVariants */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={staggerItemVariants} custom={duration}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
