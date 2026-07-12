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
      viewport={{ once: true, amount: 0.2 }}
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
