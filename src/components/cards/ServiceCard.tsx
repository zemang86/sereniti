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
        "group relative p-8 rounded-card shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1",
        variant === "white"
          ? "bg-white"
          : variant === "indigo"
            ? "bg-indigo bg-[url('/images/indigo-bg.png')] bg-cover bg-center text-dawn"
            : "bg-mist",
        className
      )}
    >
      <div className={cn(
        "mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl",
        variant === "indigo" ? "bg-indigo-light/30" : "bg-dawn"
      )}>
        <Icon className={cn("w-6 h-6", variant === "indigo" ? "text-dawn" : "text-coral")} />
      </div>
      <h3 className={cn("font-sans text-xl font-semibold mb-3", variant === "indigo" ? "text-dawn" : "text-night")}>
        {title}
      </h3>
      <p className={cn("leading-relaxed mb-6", variant === "indigo" ? "text-dawn/70" : "text-night/60")}>{description}</p>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 font-medium text-sm hover:underline transition-all",
          variant === "indigo" ? "text-sunrise" : "text-coral"
        )}
      >
        {ctaLabel}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
