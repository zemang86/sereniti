import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { BlogCard } from "@/components/cards/BlogCard";
import { BlogArt } from "@/components/blog/BlogArt";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { blogPosts } from "@/content/blog";
import { teamMembers } from "@/content/team";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, blogPostingNode, breadcrumbNode } from "@/lib/schema";
import { absoluteUrl, formatDate, site } from "@/lib/site";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

/** Crisis-line numbers in prose become tap-to-call links. Longest first so
 *  "15999" wins over "999"; digit guards stop "999" matching inside "15999". */
const crisisLines = [...site.crisis.lines].sort(
  (a, b) => b.display.length - a.display.length
);
const crisisPattern = new RegExp(
  `(?<![\\d,.])(${crisisLines
    .map((l) => l.display.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})(?!\\d)`
);

function linkCrisisNumbers(text: string): React.ReactNode {
  // split() with one capture group: odd indices are the matched numbers.
  const parts = text.split(crisisPattern);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const line = i % 2 === 1 && crisisLines.find((l) => l.display === part);
    return line ? (
      <a
        key={i}
        href={`tel:${line.tel}`}
        className="font-semibold text-night underline underline-offset-2"
      >
        {part}
      </a>
    ) : (
      part
    );
  });
}

/** "Label: sentence" (or "Label. sentence" for numbered items) gets a bold
 *  lead-in when the label is short enough to read as one. */
function withLabel(text: string, separator: ":" | ".") {
  const idx = text.indexOf(separator === ":" ? ":" : ". ");
  if (idx <= 0 || idx > 60) return linkCrisisNumbers(text);
  return (
    <>
      <strong className="font-semibold text-night">
        {text.slice(0, idx + 1)}
      </strong>
      {linkCrisisNumbers(text.slice(idx + 1))}
    </>
  );
}

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const numbered = /^(\d+)\. /;

/** Render body paragraphs: "## " as headings, "- " runs as bullet lists, and
 *  runs of "1. " paragraphs as an ordered list. */
function renderBlocks(body: string[]) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  let ordered: string[] = [];
  let orderedStart = 1;
  const flush = () => {
    if (list.length) {
      out.push(
        <ul
          key={`ul-${out.length}`}
          className="list-disc space-y-2 pl-6 marker:text-coral"
        >
          {list.map((li, i) => (
            <li key={i}>{withLabel(li, ":")}</li>
          ))}
        </ul>
      );
      list = [];
    }
    if (ordered.length) {
      out.push(
        <ol
          key={`ol-${out.length}`}
          start={orderedStart}
          className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-coral-ink"
        >
          {ordered.map((li, i) => (
            <li key={i}>{withLabel(li, ".")}</li>
          ))}
        </ol>
      );
      ordered = [];
    }
  };
  body.forEach((b, i) => {
    if (b.startsWith("- ")) {
      if (ordered.length) flush();
      list.push(b.slice(2));
      return;
    }
    const n = b.match(numbered);
    if (n) {
      if (list.length) flush();
      if (!ordered.length) orderedStart = Number(n[1]);
      ordered.push(b.slice(n[0].length));
      return;
    }
    flush();
    if (b.startsWith("## ")) {
      const text = b.slice(3);
      out.push(
        <h2
          key={i}
          id={headingId(text)}
          className="pt-6 md:pt-8 font-serif text-2xl md:text-3xl text-night leading-snug scroll-mt-28"
        >
          {text}
        </h2>
      );
    } else {
      out.push(<p key={i}>{linkCrisisNumbers(b)}</p>);
    }
  });
  flush();
  return out;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = absoluteUrl(`/blog/${slug}`);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
    },
    twitter: {
      images: ["/opengraph-image.png"],
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Same-category posts first, then the rest, newest first within each.
  const others = blogPosts.filter((p) => p.slug !== slug);
  const related = [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  const author = teamMembers.find((m) => m.name === post.author);
  const isWorkplace = post.category === "Workplace Wellness";

  return (
    <>
      <JsonLd
        data={graph(
          blogPostingNode({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
            updated: post.updated,
            category: post.category,
            author: post.author,
          }),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])
        )}
      />

      {/* Article */}
      <section
        className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[5%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-night/75 hover:text-coral-ink transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <Tag variant="lavender">{post.category}</Tag>
            <span className="text-xs text-night/75">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && (
                <>
                  {" "}&middot; Updated{" "}
                  <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-night/75 text-sm">
            {author ? (
              <>
                By{" "}
                <Link
                  href={`/team/${author.slug}`}
                  className="font-semibold text-night underline decoration-night/30 underline-offset-2 transition-colors hover:text-coral-ink hover:decoration-coral-ink"
                >
                  {author.name}
                </Link>
                , {author.role}
              </>
            ) : (
              <>By {post.author}</>
            )}
          </p>
        </Container>
      </section>

      <section className="pt-8 pb-16 md:pt-10 md:pb-20 bg-dawn">
        <Container className="max-w-3xl mx-auto">
          {/* Long-form content is not animated: it should be there on arrival. */}
          <article className="-mx-6 sm:mx-0 bg-white rounded-none sm:rounded-card shadow-none sm:shadow-card overflow-hidden">
            <BlogArt
              seed={post.slug}
              motif={post.art}
              className="w-full aspect-[21/9]"
            />
            <div className="px-6 py-10 sm:p-8 md:p-12">
              <div className="space-y-5 text-night/70 leading-relaxed text-lg">
                {renderBlocks(post.body)}
              </div>

              {/* In-article CTA */}
              <div className="mt-12 pt-8 border-t border-night/10 text-center">
                <p className="font-serif text-2xl text-night mb-6">
                  {isWorkplace ? "Supporting Your Team?" : "Ready to Talk to Someone?"}
                </p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
                  {isWorkplace ? (
                    <>
                      <Button href="/about/contact?type=corporate" showArrow>
                        Request a Proposal
                      </Button>
                      <Button href="/services/corporate" variant="ghost">
                        Explore Corporate Wellness
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button href="/about/contact?type=therapy" showArrow>
                        Book a Session
                      </Button>
                      <Button href="/damaura" variant="ghost">
                        Meet Damaura
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <h2 className="font-serif text-2xl md:text-3xl text-night text-center mb-10">
              More to Explore
            </h2>
            <FadeInOnScroll>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <BlogCard
                    key={r.slug}
                    title={r.title}
                    excerpt={r.excerpt}
                    category={r.category}
                    date={formatDate(r.date)}
                    slug={r.slug}
                    art={r.art}
                  />
                ))}
              </div>
            </FadeInOnScroll>
          </Container>
        </section>
      )}
    </>
  );
}
