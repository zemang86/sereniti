import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { BlogCard } from "@/components/cards/BlogCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { blogPosts } from "@/content/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, blogPostingNode, breadcrumbNode } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

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

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={graph(
          blogPostingNode({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
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
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={2} color="#C9B8DB" size={450} opacity={0.1} blur={40} className="top-[5%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-night/50 hover:text-coral transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Tag variant="lavender">{post.category}</Tag>
            <span className="text-xs text-night/60">{post.date}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-night leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-night/60 text-sm">By {post.author}</p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-dawn">
        <Container className="max-w-3xl mx-auto">
          <FadeInOnScroll>
            <article className="bg-white rounded-card shadow-card p-8 md:p-12">
              <div className="space-y-5 text-night/70 leading-relaxed text-lg">
                {post.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* In-article CTA */}
              <div className="mt-12 pt-8 border-t border-night/10 text-center">
                <p className="text-night/50 text-sm mb-4">
                  Curious about your mental health?
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/services/screening" showArrow>
                    Start a Free AI Screening
                  </Button>
                  <Button href="/about/contact" variant="ghost">
                    Book a Session
                  </Button>
                </div>
              </div>
            </article>
          </FadeInOnScroll>
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
                    date={r.date}
                    slug={r.slug}
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
