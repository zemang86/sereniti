"use client";

import { Container } from "@/components/layout/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";
import { ParallaxLayer } from "@/components/animation/ParallaxLayer";
import { BlobShape } from "@/components/decorative/BlobShape";
import { blogPosts } from "@/content/blog";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-sunrise)" }}
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <BlobShape variant={0} color="#C9B8DB" size={400} opacity={0.1} blur={40} className="top-[10%] -right-[8%]" />
        </ParallaxLayer>

        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-night leading-tight">
              Insights & Resources
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <p className="mt-6 text-lg text-night/60 leading-relaxed">
              Practical guidance, expert perspectives, and honest conversations
              about mental health — for individuals and organisations.
            </p>
          </FadeInOnScroll>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 bg-dawn">
        <Container>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </StaggerChildren>
        </Container>
      </section>
    </>
  );
}
