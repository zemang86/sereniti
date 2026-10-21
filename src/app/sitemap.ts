import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/content/blog";
import { teamMembers } from "@/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes with priority hints (home + primary conversion paths highest).
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/damaura", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/psychotherapy", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/psychotherapy/adults", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/psychotherapy/children", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/psychotherapy/couples", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/psychotherapy/family", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services/corporate", priority: 0.9, changeFrequency: "monthly" },
    { path: "/team", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/careers", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const parsed = new Date(post.updated ?? post.date);
    return {
      url: `${site.url}/blog/${post.slug}`,
      lastModified: isNaN(parsed.getTime()) ? now : parsed,
      changeFrequency: "yearly",
      priority: 0.6,
    };
  });

  const teamEntries: MetadataRoute.Sitemap = teamMembers.map((m) => ({
    url: `${site.url}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...teamEntries];
}
