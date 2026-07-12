"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every framer-motion animation honours the user's
 * "reduce motion" OS setting. Reveals become instant instead of sliding.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
