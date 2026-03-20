import { MetadataRoute } from "next";
import { shopifyFetch } from "@/app/lib/shopify";
import { ALL_PRODUCTS_QUERY, type ShopifyProduct } from "@/app/lib/shopify-queries";

const BASE_URL = "https://riod.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/technology`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/shop`, lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/insights`, lastModified: new Date(), priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/products/ev-chargers`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), priority: 0.6, changeFrequency: "monthly" },
  ];

  // Shopify product pages
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
      ALL_PRODUCTS_QUERY
    );
    productPages = data.products.edges.map((e) => ({
      url: `${BASE_URL}/shop/${e.node.handle}`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly" as const,
    }));
  } catch {
    // Shopify not configured yet
  }

  return [...staticPages, ...productPages];
}
