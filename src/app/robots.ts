import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * We WANT maximum AI + search visibility, so we explicitly welcome every major
 * AI crawler (training, live-retrieval, and user-triggered fetch agents) in
 * addition to the universal allow. Listing them documents intent to operators.
 */
const aiAgents = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Claude-Web",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Googlebot powers AI Overviews; Google-Extended = Gemini training)
  "Googlebot",
  "Google-Extended",
  // Apple
  "Applebot",
  "Applebot-Extended",
  // Others feeding LLMs / search
  "CCBot",
  "Bingbot",
  "Amazonbot",
  "Meta-ExternalAgent",
];

/**
 * Private/client-specific paths. Must be repeated on every agent group: a
 * per-agent `allow: "/"` group otherwise overrides the wildcard group's
 * disallow for that agent.
 */
const disallowed = [
  "/api/",
  "/umt-proposal26",
  "/umt-proposal26.html",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: disallowed },
      ...aiAgents.map((userAgent) => ({ userAgent, allow: "/", disallow: disallowed })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
