import type { Metadata } from "next";
import { dmSans, dmSerifDisplay } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Serenitilabs: Expert Mental Health Support",
    template: "%s | Serenitilabs",
  },
  description:
    "Expert-led mental health support, enhanced by AI. Psychotherapy for individuals, couples, and families. Corporate wellness programmes. Powered by Damaura.",
  keywords: [
    "mental health",
    "therapy",
    "psychotherapy",
    "counselling",
    "Malaysia",
    "corporate wellness",
    "Damaura",
    "Serenitilabs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
