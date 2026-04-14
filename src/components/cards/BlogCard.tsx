import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  slug,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block bg-white rounded-card shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {/* Image placeholder */}
      <div className="aspect-[3/2] bg-gradient-to-br from-sunrise/40 to-mist" />

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Tag variant="lavender">{category}</Tag>
          <span className="text-xs text-night/40">{date}</span>
        </div>
        <h3 className="font-serif text-lg text-night group-hover:text-coral transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-night/60 mt-2 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
