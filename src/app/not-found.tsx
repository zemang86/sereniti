import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section
      className="min-h-[80vh] flex items-center"
      style={{ background: "var(--gradient-sunrise)" }}
    >
      <Container className="text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-night mb-4">
          This page took a mental health day.
        </h1>
        <p className="text-night/60 text-lg mb-8 max-w-md mx-auto leading-relaxed">
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
      </Container>
    </section>
  );
}
