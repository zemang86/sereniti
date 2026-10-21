import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { BlogArt, type Motif } from "@/components/blog/BlogArt";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  art?: Motif;
  /** Wide two-column layout for the lead post on the blog index. */
  featured?: boolean;
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  slug,
  art,
  featured = false,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex h-full flex-col bg-white rounded-card shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1",
        featured && "md:grid md:grid-cols-2",
        className
      )}
    >
      {/* Metaphorical brand artwork */}
      <div
        className={cn(
          "relative aspect-[3/2] overflow-hidden",
          featured && "md:aspect-auto md:h-full md:min-h-[320px]"
        )}
      >
        <BlogArt
          seed={slug}
          motif={art}
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "md:justify-center md:p-10")}>
        <div className="flex items-center gap-3 mb-3">
          <Tag variant="lavender">{category}</Tag>
          <span className="text-xs text-night/70">{date}</span>
        </div>
        <h3
          className={cn(
            "font-serif text-night group-hover:text-coral-ink transition-colors leading-snug",
            featured ? "text-xl md:text-3xl" : "text-lg"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-night/70 mt-2 leading-relaxed",
            featured ? "text-sm md:text-lg md:mt-4" : "text-sm line-clamp-3"
          )}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
