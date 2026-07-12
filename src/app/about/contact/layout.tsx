import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Serenitilabs to book a therapy session or enquire about corporate wellness in Malaysia. Reach our team by email, phone, or WhatsApp for any enquiry.",
  alternates: { canonical: "/about/contact" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    title: "Contact",
    description:
      "Contact Serenitilabs to book a therapy session or enquire about corporate wellness in Malaysia. Reach our team by email, phone, or WhatsApp for any enquiry.",
    url: `${site.url}/about/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/about/contact" },
          ])
        )}
      />
      {children}
    </>
  );
}
