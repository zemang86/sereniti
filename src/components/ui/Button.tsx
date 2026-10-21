import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-night text-white hover:bg-coral-ink shadow-[0_4px_14px_rgba(28,28,30,0.18)] hover:shadow-[0_6px_20px_rgba(163,74,38,0.28)]",
  secondary:
    "bg-white text-night shadow-card hover:shadow-card-hover",
  ghost:
    "bg-transparent text-night border border-night/40 hover:border-coral-ink hover:text-coral-ink",
};

const sizes = {
  default: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  showArrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 font-semibold rounded-button transition-all duration-300",
    "active:scale-[0.97] motion-reduce:active:scale-100",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
}
