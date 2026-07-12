"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const servicesLinks = [
  { label: "Digital Screening", href: "/services/screening" },
  { label: "Psychotherapy", href: "/services/psychotherapy" },
  { label: "Corporate Services", href: "/services/corporate" },
];

const aboutLinks = [
  { label: "Vision & Mission", href: "/about" },
  { label: "Careers", href: "/about/careers" },
  { label: "Contact", href: "/about/contact" },
];

function Dropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-[15px] font-medium text-night hover:text-coral transition-colors">
        {label}
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-white rounded-card shadow-card py-2 min-w-[200px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-5 py-2.5 text-sm text-night hover:text-coral hover:bg-mist/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-dawn/95 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-wide.svg"
              alt="Serenitilabs"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Dropdown label="Services" links={servicesLinks} />
            <Link
              href="/team"
              className="text-[15px] font-medium text-night hover:text-coral transition-colors"
            >
              Our Team
            </Link>
            <Dropdown label="About" links={aboutLinks} />
            <Link
              href="/blog"
              className="text-[15px] font-medium text-night hover:text-coral transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/about/contact"
              className="hidden md:inline-flex items-center gap-2 bg-night text-white text-sm font-semibold px-6 py-2.5 rounded-button hover:bg-coral transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-night" />
              <span className="block w-6 h-0.5 bg-night" />
              <span className="block w-4 h-0.5 bg-night" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
