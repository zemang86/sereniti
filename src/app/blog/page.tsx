import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { blogPosts } from "@/content/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, breadcrumbNode } from "@/lib/schema";
import { absoluteUrl, formatDate } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guidance and expert perspectives on mental health and workplace wellbeing from Serenitilabs, for individuals and organisations in Malaysia.",
  alternates: { canonical: "/blog" },
  openGraph: {
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Serenitilabs" }],
    type: "website",
    title: "Blog",
    description:
      "Practical guidance and expert perspectives on mental health and workplace wellbeing from Serenitilabs, for individuals and organisations in Malaysia.",
    url: absoluteUrl("/blog"),
  },
};

export default function BlogPage() {
  // Newest first; the lead post is featured across two columns.
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ])
        )}
      />
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={0} color="#C9B8DB" size={400} opacity={0.1} blur={40} className="top-[10%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
            Insights & Resources
          </h1>
          <p className="mt-6 text-lg text-night/70 leading-relaxed">
            Practical guidance, expert perspectives, and honest conversations
            about mental health, for individuals and organisations.
          </p>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 bg-dawn">
        <Container>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:[&>*:first-child]:col-span-2">
            {posts.map((post, i) => (
              <BlogCard
                key={post.slug}
                featured={i === 0}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={formatDate(post.date)}
                slug={post.slug}
                art={post.art}
              />
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
