import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "lavender" | "mist" | "cloud" | "indigo";
  className?: string;
}

const variants = {
  lavender: "bg-lavender/30 text-night",
  mist: "bg-mist text-night",
  cloud: "bg-cloud text-night",
  indigo: "bg-indigo-soft text-indigo",
};

export function Tag({ children, variant = "lavender", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-button",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
