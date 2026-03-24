import { MetadataRoute } from "next";
import { shopifyFetch } from "@/app/lib/shopify";
import { ALL_PRODUCTS_QUERY, type ShopifyProduct } from "@/app/lib/shopify-queries";
import { technologies } from "@/app/data/technologies";
import { insightsData } from "@/app/components/data/insightsData";
import { caseStudiesData } from "@/app/components/data/caseStudiesData";

const BASE_URL = "https://riod.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ─── Static pages ────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/products/ev-chargers`, lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/products/ev-chargers/powerpod`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/products/ev-chargers/powerpod-go`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/products/ev-chargers/powerpod-city`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/products/energy`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/technology`, lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/store`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/insights`, lastModified: now, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources`, lastModified: now, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/applications`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/careers`, lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/partners`, lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE_URL}/future-of-ev-energy`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ev-charger-selection-guide`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: now, priority: 0.3, changeFrequency: "yearly" },
  ];

  // ─── Vertical landing pages ──────────────────────────────────
  const verticalPages = [
    "ev-chargers-home", "ev-chargers-malls", "ev-chargers-hospitals",
    "ev-chargers-hotels", "ev-chargers-office", "ev-chargers-parking",
    "ev-chargers-resorts", "ev-chargers-institution",
    "ev-charging-apartments", "ev-charging-hotels", "ev-charging-parking",
    "ev-charging-workplaces", "ev-charging-stations-india",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // ─── Technology pages ────────────────────────────────────────
  const techPages = technologies
    .filter((t) => !t.upcoming)
    .map((t) => ({
      url: `${BASE_URL}/technology/${t.slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }));

  // ─── Insight articles ────────────────────────────────────────
  const insightPages = insightsData.map((i) => ({
    url: `${BASE_URL}/insights/${i.slug}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  // ─── Case studies ────────────────────────────────────────────
  const caseStudyPages = caseStudiesData.map((c) => ({
    url: `${BASE_URL}/case-studies/${c.slug}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  // ─── Shopify store products ──────────────────────────────────
  let shopifyPages: MetadataRoute.Sitemap = [];
  try {
    const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
      ALL_PRODUCTS_QUERY
    );
    shopifyPages = data.products.edges.map((e) => ({
      url: `${BASE_URL}/store/${e.node.handle}`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    }));
  } catch {
    // Shopify not configured yet
  }

  return [
    ...staticPages,
    ...verticalPages,
    ...techPages,
    ...insightPages,
    ...caseStudyPages,
    ...shopifyPages,
  ];
}
