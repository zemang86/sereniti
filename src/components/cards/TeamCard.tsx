import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  specialties: string[];
  slug: string;
  photo?: string;
  isLead?: boolean;
  className?: string;
}

export function TeamCard({
  name,
  role,
  specialties,
  slug,
  photo,
  isLead,
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-card shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1",
        isLead && "ring-1 ring-coral/40",
        className
      )}
    >
      {/* Photo */}
      <div className="relative aspect-square bg-gradient-to-br from-dawn to-mist flex items-center justify-center overflow-hidden">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={600}
            height={600}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <User className="w-16 h-16 text-sunrise transition-transform duration-500 group-hover:scale-105" strokeWidth={1} />
        )}
        {isLead && (
          <span className="absolute top-3 left-3 z-10 rounded-button bg-coral px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
            Lead Therapist
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-serif text-xl text-night">{name}</h3>
        <p className="text-sm text-night/60 mt-1">{role}</p>

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
