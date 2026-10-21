"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Psychotherapy", href: "/services/psychotherapy", indent: true },
  { label: "Corporate Services", href: "/services/corporate", indent: true },
  { label: "Damaura", href: "/damaura", indent: true },
  { label: "Our Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about/careers", indent: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/about/contact" },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

/** Page regions behind the drawer. `inert` keeps Tab and screen readers inside the dialog. */
const BACKGROUND = ["header", "main", "footer"];

export function MobileNav({ open, onClose, pathname }: MobileNavProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const regions = BACKGROUND.flatMap((sel) => Array.from(document.querySelectorAll<HTMLElement>(sel)));

    document.body.style.overflow = "hidden";
    regions.forEach((el) => el.setAttribute("inert", ""));
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      regions.forEach((el) => el.removeAttribute("inert"));
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-night/30 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] z-50 overflow-y-auto overscroll-contain pb-8"
            style={{ background: "var(--gradient-sunrise)" }}
          >
            <div className="flex items-center justify-between p-6">
              <Image
                src="/images/logo-wide.svg"
                alt="Serenitilabs"
                width={582}
                height={70}
                className="h-6 w-auto"
              />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-night hover:text-coral-ink transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-6 py-4">
              {navLinks.map((link, i) => {
                const current = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "block py-3 transition-colors hover:text-coral-ink",
                        link.indent
                          ? "pl-4 text-sm"
                          : "text-lg font-medium border-b border-night/10",
                        current ? "text-coral-ink" : link.indent ? "text-night/70" : "text-night"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="px-6 mt-4">
              <Link
                href="/about/contact"
                onClick={onClose}
                className="block w-full text-center bg-night text-white font-semibold px-6 py-3 rounded-button hover:bg-coral-ink transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
