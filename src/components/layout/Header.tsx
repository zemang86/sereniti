"use client";

import { useState, useEffect, useId, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const servicesLinks = [
  { label: "Psychotherapy", href: "/services/psychotherapy" },
  { label: "Corporate Services", href: "/services/corporate" },
  { label: "Damaura", href: "/damaura" },
];

const aboutLinks = [
  { label: "Vision & Mission", href: "/about" },
  { label: "Careers", href: "/about/careers" },
  { label: "Contact", href: "/about/contact" },
];

/** Exact match, or a sub-page of it (/team/sarah under /team). "/" and "/about" stay exact
 *  so /about/careers doesn't also light up "Vision & Mission". */
function isCurrent(href: string, pathname: string) {
  if (pathname === href) return true;
  if (href === "/" || href === "/about") return false;
  return pathname.startsWith(`${href}/`);
}

/**
 * Disclosure menu. Opens on hover for pointer users and on click / Enter / Space for
 * keyboard users (a hover-only panel is `invisible`, so its links can't take focus).
 * Escape closes and returns focus to the trigger.
 */
function Dropdown({
  label,
  links,
  pathname,
}: {
  label: string;
  links: { label: string; href: string }[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = links.some((l) => isCurrent(l.href, pathname));

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-coral-ink",
          active ? "text-coral-ink" : "text-night"
        )}
      >
        {label}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      <div
        id={id}
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="bg-white rounded-card shadow-card py-2 min-w-[200px]">
          {links.map((link) => {
            const current = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-5 py-2.5 text-sm hover:text-coral-ink hover:bg-mist/50 transition-colors",
                  current ? "text-coral-ink font-medium" : "text-night"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const current = isCurrent(href, pathname);
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={cn(
        "text-[15px] font-medium transition-colors hover:text-coral-ink",
        current ? "text-coral-ink" : "text-night"
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // Stable identity: MobileNav's open effect depends on it, and re-running that
  // effect mid-session would bounce focus back to the hamburger.
  const closeMobile = useCallback(() => setMobileOpen(false), []);

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
            ? "bg-dawn/95 backdrop-blur-md shadow-[0_1px_12px_rgba(48,32,22,0.08)]"
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Serenitilabs home">
            <Image
              src="/images/logo-wide.svg"
              alt="Serenitilabs"
              width={582}
              height={70}
              className="h-6 md:h-7 w-auto"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
            <Dropdown label="Services" links={servicesLinks} pathname={pathname} />
            <NavLink href="/team" label="Our Team" pathname={pathname} />
            <Dropdown label="About" links={aboutLinks} pathname={pathname} />
            <NavLink href="/blog" label="Blog" pathname={pathname} />
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/about/contact"
              className="hidden md:inline-flex items-center gap-2 bg-night text-white text-sm font-semibold px-6 py-2.5 rounded-button hover:bg-coral-ink transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2.5 -mr-2.5"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="block w-6 h-0.5 bg-night" />
              <span className="block w-6 h-0.5 bg-night" />
              <span className="block w-4 h-0.5 bg-night" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={closeMobile} pathname={pathname} />
    </>
  );
}
