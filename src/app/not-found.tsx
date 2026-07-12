import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { BlobShape } from "@/components/decorative/BlobShape";

export default function NotFound() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-sunrise)" }}
    >
      <BlobShape
        variant={2}
        color="#C9B8DB"
        size={450}
        opacity={0.1}
        blur={40}
        className="top-[10%] -right-[8%] pointer-events-none"
      />

      <Container className="relative z-10 text-center">
        <FadeInOnScroll>
          <h1 className="font-serif text-4xl md:text-5xl text-night mb-4">
            This page took a mental health day.
          </h1>
          <p className="text-night/60 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist. But we&apos;re
            here to help you find what you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" showArrow>
              Go Home
            </Button>
            <Button href="/about/contact" variant="ghost">
              Get in Touch
            </Button>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
