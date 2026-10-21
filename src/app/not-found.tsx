import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BlobShape } from "@/components/decorative/BlobShape";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const links = [
  { href: "/services/psychotherapy", label: "Psychotherapy" },
  { href: "/services/corporate", label: "Corporate Wellness" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
];

export default function NotFound() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[70vh] pt-32 pb-20 flex items-center overflow-hidden"
      style={{ background: "var(--gradient-sunrise)" }}
    >
      <BlobShape
        variant={2}
        color="#C9B8DB"
        size={450}
        opacity={0.1}
        blur={40}
        className="top-[10%] -right-[8%] pointer-events-none"
      />

      <Container className="relative z-10 text-center">
        <p className="text-sm font-medium text-night/70 mb-3">Error 404</p>
        <h1 className="font-serif text-4xl md:text-5xl text-night mb-4">
          This Page Took a Mental Health Day
        </h1>
        <p className="text-night/70 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. But we&apos;re
          here to help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
          <Button href="/" showArrow>
            Go Home
          </Button>
          <Button href="/about/contact" variant="ghost">
            Get in Touch
          </Button>
        </div>
        <nav aria-label="Popular pages">
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-night/70">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-coral-ink underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
