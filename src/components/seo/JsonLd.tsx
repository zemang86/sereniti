/**
 * Renders a JSON-LD <script> from a Server Component so AI crawlers see it in
 * the raw HTML. The `<` -> `<` replace prevents breaking out of the tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
