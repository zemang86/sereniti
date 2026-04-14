import { cn } from "@/lib/utils";

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: number;
  intensity?: number;
}

export function GlowEffect({
  children,
  className,
  color = "#F5D3B8",
  size = 300,
  intensity = 0.35,
}: GlowEffectProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          opacity: intensity,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
