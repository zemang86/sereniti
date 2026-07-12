import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Container } from "./Container";

const serviceLinks = [
  { label: "Digital Screening", href: "/services/screening" },
  { label: "Psychotherapy", href: "/services/psychotherapy" },
  { label: "Corporate Services", href: "/services/corporate" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/about/careers" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-night text-dawn/80">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-wide-light.svg"
                alt="Serenitilabs"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-dawn/60">
              Expert care. Intelligent support.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-dawn/40">
              <span>Powered by</span>
              <span className="text-coral font-medium">Damaura</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-dawn uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dawn/60 hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-dawn uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dawn/60 hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-dawn uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@sereniti.my"
                  className="flex items-center gap-2 text-sm text-dawn/60 hover:text-coral transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@sereniti.my
                </a>
              </li>
              <li>
                <a
                  href="tel:+60183981795"
                  className="flex items-center gap-2 text-sm text-dawn/60 hover:text-coral transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +60 18-398 1795
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/damaura.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dawn/60 hover:text-coral transition-colors"
                aria-label="Follow Damaura on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-dawn/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dawn/40">
          <p>
            &copy; 2026 Serenitilabs Sdn. Bhd. Reg. No. 202601000377
            (1662475-P). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-dawn/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-dawn/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
