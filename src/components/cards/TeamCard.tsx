import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  specialties: string[];
  slug: string;
  photo?: string;
  className?: string;
}

export function TeamCard({
  name,
  role,
  specialties,
  slug,
  photo,
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col bg-white rounded-card shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 focus-within:shadow-card-hover",
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
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 100vw"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <User className="w-16 h-16 text-sunrise transition-transform duration-500 group-hover:scale-105" strokeWidth={1} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-night">{name}</h3>
        <p className="text-sm text-night/70 mt-1">{role}</p>

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

        {/* Stretched link: photo, name and label all open the profile. */}
        <Link
          href={`/team/${slug}`}
          className="mt-auto pt-5 self-start inline-flex items-center gap-2 text-coral-ink text-sm font-semibold hover:underline underline-offset-4 after:absolute after:inset-0 after:content-['']"
        >
          View Profile<span className="sr-only"> of {name}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
