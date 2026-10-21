import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Damaura's own type (damaura repo: mobile/DESIGN_SYSTEM.md). Kept out of
 * fonts.ts on purpose: the root layout imports that module, so anything declared
 * there is preloaded on every route. Only the /damaura page imports this one.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
