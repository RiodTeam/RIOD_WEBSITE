import { getPayload } from "payload";
import configPromise from "@payload-config";
import {
  insightsData,
  type InsightType,
  type InsightSection,
} from "@/app/components/data/insightsData";
import {
  caseStudiesData,
  type CaseStudy,
} from "@/app/components/data/caseStudiesData";

// ─── Lexical JSON → plain text helpers ────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */

function extractTextFromNode(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.text || "";
  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractTextFromNode).join("");
  }
  return "";
}

function extractParagraphsFromLexical(lexicalJson: any): string[] {
  if (!lexicalJson?.root?.children) return [];
  return lexicalJson.root.children
    .filter((n: any) => n.type === "paragraph")
    .map((n: any) => extractTextFromNode(n))
    .filter((t: string) => t.trim().length > 0);
}

function extractSectionsFromLexical(lexicalJson: any): {
  intro: string[];
  sections: InsightSection[];
} {
  if (!lexicalJson?.root?.children) return { intro: [], sections: [] };

  const intro: string[] = [];
  const sections: InsightSection[] = [];
  let currentSection: InsightSection | null = null;

  for (const node of lexicalJson.root.children) {
    if (node.type === "heading") {
      // Start a new section
      if (currentSection) sections.push(currentSection);
      currentSection = {
        heading: extractTextFromNode(node),
        paragraphs: [],
      };
    } else if (node.type === "paragraph") {
      const text = extractTextFromNode(node);
      if (!text.trim()) continue;
      if (currentSection) {
        if (!currentSection.paragraphs) currentSection.paragraphs = [];
        currentSection.paragraphs.push(text);
      } else {
        intro.push(text);
      }
    } else if (node.type === "list") {
      const items = (node.children || []).map((li: any) =>
        extractTextFromNode(li)
      );
      if (currentSection) {
        if (!currentSection.points) currentSection.points = [];
        currentSection.points.push(...items);
      }
    }
  }
  if (currentSection) sections.push(currentSection);

  return { intro, sections };
}

/* eslint-enable @typescript-eslint/no-explicit-any */

// ─── Payload Post → InsightType ───────────────────────────────────────

function payloadPostToInsight(post: any): InsightType {
  const { intro, sections } = extractSectionsFromLexical(post.content);

  // Resolve hero image URL
  let image = "/insights/placeholder.webp";
  if (post.heroImage) {
    if (typeof post.heroImage === "string") {
      image = post.heroImage;
    } else if (post.heroImage.url) {
      image = post.heroImage.url;
    }
  }

  // Resolve category tag
  let tag = "Technology";
  if (post.categories) {
    if (typeof post.categories === "string") {
      tag = post.categories;
    } else if (post.categories.title) {
      tag = post.categories.title;
    }
  }

  // Format date
  let date = "";
  if (post.publishedAt) {
    const d = new Date(post.publishedAt);
    date = d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Related slugs
  const relatedSlugs: string[] = [];
  if (post.relatedPosts && Array.isArray(post.relatedPosts)) {
    for (const rp of post.relatedPosts) {
      if (typeof rp === "string") relatedSlugs.push(rp);
      else if (rp?.slug) relatedSlugs.push(rp.slug);
    }
  }

  return {
    id: post.id ? Number(post.id) || 0 : 0,
    slug: post.slug || "",
    title: post.title || "",
    tag,
    date,
    image,
    intro: intro.length > 0 ? intro : post.description ? [post.description] : [],
    sections,
    relatedSlugs: relatedSlugs.length > 0 ? relatedSlugs : undefined,
  };
}

// ─── Payload CaseStudy → CaseStudy ───────────────────────────────────

function payloadCaseStudyToFrontend(doc: any): CaseStudy {
  // Extract content from richText fields
  const challenge = extractParagraphsFromLexical(doc.content?.paraOne);
  const solution = extractParagraphsFromLexical(doc.content?.paraTwo);

  // Results from counterData
  const results = (doc.counterData || []).map((item: any) => ({
    metric: item.text || "",
    value: item.count || "",
  }));

  // Image
  let image = "/case-studies/placeholder.webp";
  if (doc.displayImage) {
    if (typeof doc.displayImage === "string") {
      image = doc.displayImage;
    } else if (doc.displayImage.url) {
      image = doc.displayImage.url;
    }
  }

  // Technologies
  const technologies: string[] = [];
  if (doc.technology && Array.isArray(doc.technology)) {
    for (const t of doc.technology) {
      // Convert value to label format
      const label = t
        .split("-")
        .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      technologies.push(label);
    }
  }

  // Testimonial
  let testimonial: CaseStudy["testimonial"] = undefined;
  if (doc.testimonial?.quote) {
    testimonial = {
      quote: doc.testimonial.quote,
      author: doc.testimonial.author || "",
      role: doc.testimonial.role || "",
    };
  }

  return {
    id: doc.id ? Number(doc.id) || 0 : 0,
    slug: doc.slug || "",
    title: doc.title || "",
    tag: doc.tag || "EV Charging",
    client: doc.client || "",
    industry: doc.industry
      ? doc.industry.charAt(0).toUpperCase() + doc.industry.slice(1)
      : "",
    location: doc.location || "",
    image,
    summary: doc.summary || "",
    challenge,
    solution,
    results,
    technologies,
    testimonial,
  };
}

// ─── Data Providers (Payload first, static fallback) ──────────────────

export async function getInsights(): Promise<InsightType[]> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      sort: "-publishedAt",
      limit: 100,
      depth: 1,
    });

    if (result.docs.length > 0) {
      const payloadInsights = result.docs.map(payloadPostToInsight);
      // Merge: Payload posts first, then any static ones not in Payload
      const payloadSlugs = new Set(payloadInsights.map((i) => i.slug));
      const staticOnly = insightsData.filter((i) => !payloadSlugs.has(i.slug));
      return [...payloadInsights, ...staticOnly];
    }
  } catch {
    // Payload not available — fall back to static
  }
  return insightsData;
}

export async function getInsight(
  slug: string
): Promise<InsightType | undefined> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    });

    if (result.docs.length > 0) {
      return payloadPostToInsight(result.docs[0]);
    }
  } catch {
    // Payload not available
  }

  // Fall back to static
  return insightsData.find(
    (i) => i.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "case-studies",
      limit: 50,
      depth: 1,
    });

    if (result.docs.length > 0) {
      const payloadStudies = result.docs.map(payloadCaseStudyToFrontend);
      const payloadSlugs = new Set(payloadStudies.map((s) => s.slug));
      const staticOnly = caseStudiesData.filter(
        (s) => !payloadSlugs.has(s.slug)
      );
      return [...payloadStudies, ...staticOnly];
    }
  } catch {
    // Payload not available
  }
  return caseStudiesData;
}

export async function getCaseStudy(
  slug: string
): Promise<CaseStudy | undefined> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    });

    if (result.docs.length > 0) {
      return payloadCaseStudyToFrontend(result.docs[0]);
    }
  } catch {
    // Payload not available
  }

  return caseStudiesData.find(
    (s) => s.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );
}

// ─── Slug providers for generateStaticParams ──────────────────────────

export async function getAllInsightSlugs(): Promise<string[]> {
  const staticSlugs = insightsData.map((i) => i.slug);

  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      limit: 200,
      depth: 0,
    });
    const payloadSlugs = result.docs
      .map((d: any) => d.slug as string)
      .filter(Boolean);
    return [...new Set([...payloadSlugs, ...staticSlugs])];
  } catch {
    return staticSlugs;
  }
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  const staticSlugs = caseStudiesData.map((s) => s.slug);

  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "case-studies",
      limit: 100,
      depth: 0,
    });
    const payloadSlugs = result.docs
      .map((d: any) => d.slug as string)
      .filter(Boolean);
    return [...new Set([...payloadSlugs, ...staticSlugs])];
  } catch {
    return staticSlugs;
  }
}
