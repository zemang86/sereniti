import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {overline && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-ink mb-3">
          {overline}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg text-night/70 max-w-2xl leading-relaxed", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
