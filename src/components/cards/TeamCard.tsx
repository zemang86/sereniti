import Link from "next/link";
import { User } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  specialties: string[];
  slug: string;
  isLead?: boolean;
  className?: string;
}

export function TeamCard({
  name,
  role,
  specialties,
  slug,
  isLead,
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-card shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1",
        isLead && "md:col-span-2 lg:col-span-1",
        className
      )}
    >
      {/* Photo placeholder */}
      <div className="aspect-square bg-gradient-to-br from-dawn to-mist flex items-center justify-center">
        <User className="w-16 h-16 text-sunrise" strokeWidth={1} />
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-night">{name}</h3>
        <p className="text-sm text-night/50 mt-1">{role}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {specialties.slice(0, 4).map((s) => (
            <Tag key={s} variant="lavender">
              {s}
            </Tag>
          ))}
          {specialties.length > 4 && (
            <Tag variant="mist">+{specialties.length - 4}</Tag>
          )}
        </div>

        <Link
          href={`/team/${slug}`}
          className="inline-block mt-5 text-coral text-sm font-medium hover:underline"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
