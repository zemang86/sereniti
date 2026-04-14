"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Digital Screening", href: "/services/screening", indent: true },
  { label: "Psychotherapy", href: "/services/psychotherapy", indent: true },
  { label: "Corporate Services", href: "/services/corporate", indent: true },
  { label: "Our Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/about/careers", indent: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/about/contact" },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[380px] z-50"
            style={{ background: "var(--gradient-sunrise)" }}
          >
            <div className="flex items-center justify-between p-6">
              <Image
                src="/images/logo-wide.svg"
                alt="Serenitilabs"
                width={160}
                height={53}
                className="h-9 w-auto"
              />
              <button
                onClick={onClose}
                className="p-2 text-night hover:text-coral transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 text-night hover:text-coral transition-colors ${
                      link.indent
                        ? "pl-4 text-sm opacity-70 hover:opacity-100"
                        : "text-lg font-medium border-b border-night/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 mt-4">
              <Link
                href="/about/contact"
                onClick={onClose}
                className="block w-full text-center bg-night text-white font-semibold px-6 py-3 rounded-button hover:bg-coral transition-colors duration-300"
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
