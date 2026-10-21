import type { Metadata } from "next";
import { dmSans, dmSerifDisplay } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, organizationNode, websiteNode } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Serenitilabs | Mental Health Care & Therapy in Malaysia",
    template: "%s | Serenitilabs",
  },
  description: site.shortDescription,
  applicationName: site.name,
  keywords: [
    "mental health Malaysia",
    "therapy Malaysia",
    "psychotherapy",
    "counselling",
    "clinical psychologist Malaysia",
    "online therapy",
    "corporate wellness",
    "employee mental health",
    "AI mental health companion",
    "Damaura",
    "Serenitilabs",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Serenitilabs | Mental Health Care & Therapy in Malaysia",
    description: site.shortDescription,
    url: site.url,
    locale: "en_MY",
    alternateLocale: ["ms_MY"],
    images: [
      { url: site.ogImage, width: 1200, height: 630, alt: "Serenitilabs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenitilabs | Mental Health Care & Therapy in Malaysia",
    description: site.shortDescription,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd data={graph(organizationNode(), websiteNode())} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-button focus:bg-night focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
