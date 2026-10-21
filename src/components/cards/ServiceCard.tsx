import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  icon: LucideIcon;
  variant?: "white" | "mist" | "indigo";
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  ctaLabel,
  icon: Icon,
  variant = "white",
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        // h-full + flex-col: cards in a row match heights and their links line up.
        "group relative flex h-full flex-col p-8 rounded-card shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 focus-within:shadow-card-hover",
        variant === "white"
          ? "bg-white"
          : variant === "indigo"
            ? // Tint over the star texture so specks never land inside words.
              "bg-indigo bg-[linear-gradient(rgb(30_26_147/0.45),rgb(30_26_147/0.45)),url('/images/indigo-bg.webp')] bg-cover bg-center text-dawn"
            : "bg-mist",
        className
      )}
    >
      <div className={cn(
        "mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl",
        variant === "indigo" ? "bg-indigo-light/30" : "bg-dawn"
      )}>
        <Icon className={cn("w-6 h-6", variant === "indigo" ? "text-dawn" : "text-coral")} strokeWidth={1.75} />
      </div>
      <h3 className={cn("font-sans text-xl font-semibold mb-3", variant === "indigo" ? "text-dawn" : "text-night")}>
        {title}
      </h3>
      <p className={cn("leading-relaxed mb-6", variant === "indigo" ? "text-dawn/70" : "text-night/70")}>{description}</p>
      {/* Stretched link: the whole card is the target, not just the label. */}
      <Link
        href={href}
        className={cn(
          "mt-auto self-start inline-flex items-center gap-2 font-semibold text-sm hover:underline underline-offset-4 after:absolute after:inset-0 after:rounded-card after:content-['']",
          variant === "indigo" ? "text-sunrise" : "text-coral-ink"
        )}
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
