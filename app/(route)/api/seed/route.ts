import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { insightsData } from "@/app/components/data/insightsData";
import { caseStudiesData } from "@/app/components/data/caseStudiesData";
import fs from "fs";
import path from "path";

// Helper: convert plain text strings to Lexical JSON
function textToLexical(paragraphs: string[]) {
  return {
    root: {
      type: "root",
      children: paragraphs.map((text) => ({
        type: "paragraph",
        version: 1,
        children: [{ type: "text", text, version: 1, format: 0, mode: "normal", style: "", detail: 0 }],
        direction: "ltr",
        format: "",
        indent: 0,
        textFormat: 0,
        textStyle: "",
      })),
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  };
}

// Helper: convert InsightType sections to Lexical JSON (headings + paragraphs + lists)
function insightContentToLexical(
  intro: string[],
  sections: { heading: string; paragraphs?: string[]; points?: string[] }[]
) {
  const children: any[] = [];

  // Intro paragraphs
  for (const text of intro) {
    children.push({
      type: "paragraph",
      version: 1,
      children: [{ type: "text", text, version: 1, format: 0, mode: "normal", style: "", detail: 0 }],
      direction: "ltr",
      format: "",
      indent: 0,
      textFormat: 0,
      textStyle: "",
    });
  }

  // Sections
  for (const section of sections) {
    // Heading
    children.push({
      type: "heading",
      tag: "h2",
      version: 1,
      children: [{ type: "text", text: section.heading, version: 1, format: 0, mode: "normal", style: "", detail: 0 }],
      direction: "ltr",
      format: "",
      indent: 0,
    });

    // Paragraphs
    if (section.paragraphs) {
      for (const text of section.paragraphs) {
        children.push({
          type: "paragraph",
          version: 1,
          children: [{ type: "text", text, version: 1, format: 0, mode: "normal", style: "", detail: 0 }],
          direction: "ltr",
          format: "",
          indent: 0,
          textFormat: 0,
          textStyle: "",
        });
      }
    }

    // Points as list
    if (section.points && section.points.length > 0) {
      children.push({
        type: "list",
        listType: "bullet",
        version: 1,
        children: section.points.map((point) => ({
          type: "listitem",
          version: 1,
          value: 1,
          children: [{ type: "text", text: point, version: 1, format: 0, mode: "normal", style: "", detail: 0 }],
          direction: "ltr",
          format: "",
          indent: 0,
        })),
        direction: "ltr",
        format: "",
        indent: 0,
        start: 1,
        tag: "ul",
      });
    }
  }

  return {
    root: {
      type: "root",
      children,
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  };
}

// Parse date string like "February 15, 2026" to ISO
function parseDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d.toISOString();
  } catch {
    // ignore
  }
  return new Date().toISOString();
}

// Upload a local file from public/ to a Payload media collection
async function uploadLocalImage(
  payload: any,
  collection: string,
  publicPath: string,
  altText: string
): Promise<string | null> {
  try {
    const fullPath = path.join(process.cwd(), "public", publicPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Image not found: ${fullPath}`);
      return null;
    }

    const media = await payload.create({
      collection,
      data: { alt: altText },
      filePath: fullPath,
    });

    console.log(`Uploaded image: ${publicPath} → ${media.id}`);
    return media.id as string;
  } catch (err: any) {
    console.error(`Failed to upload image ${publicPath}:`, err?.message || JSON.stringify(err));
    return null;
  }
}

export async function POST(req: NextRequest) {
  // Protect with a secret
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  if (secret !== process.env.PAYLOAD_SECRET && secret !== "riod-seed-2025") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await getPayload({ config: configPromise });
  const results = {
    insights: { created: 0, skipped: 0, imagesUpdated: 0 },
    caseStudies: { created: 0, skipped: 0, imagesUpdated: 0 },
  };

  // ─── Seed Categories ─────────────────────────────────────────────
  const uniqueTags = [...new Set(insightsData.map((i) => i.tag))];
  const categoryMap: Record<string, string> = {};

  for (const tag of uniqueTags) {
    const existing = await payload.find({
      collection: "categories",
      where: { title: { equals: tag } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      categoryMap[tag] = existing.docs[0].id as string;
    } else {
      const created = await payload.create({
        collection: "categories",
        data: { title: tag } as any,
      });
      categoryMap[tag] = created.id as string;
    }
  }

  // ─── Seed Insights ───────────────────────────────────────────────
  for (const insight of insightsData) {
    // Check if slug already exists
    const existing = await payload.find({
      collection: "posts",
      where: { slug: { equals: insight.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      // Post exists — check if it needs a heroImage
      const existingPost = existing.docs[0] as any;
      if (!existingPost.heroImage && insight.image) {
        const mediaId = await uploadLocalImage(
          payload,
          "media",
          insight.image,
          insight.title
        );
        if (mediaId) {
          await payload.update({
            collection: "posts",
            id: existingPost.id,
            data: { heroImage: mediaId } as any,
          });
          results.insights.imagesUpdated++;
        }
      }
      results.insights.skipped++;
      continue;
    }

    const content = insightContentToLexical(insight.intro, insight.sections);

    // Upload hero image
    let heroImageId: string | null = null;
    if (insight.image) {
      heroImageId = await uploadLocalImage(
        payload,
        "media",
        insight.image,
        insight.title
      );
    }

    try {
      await payload.create({
        collection: "posts",
        data: {
          title: insight.title,
          slug: insight.slug,
          description: insight.intro[0] || insight.title,
          content,
          heroImage: heroImageId || undefined,
          categories: categoryMap[insight.tag] || undefined,
          publishedAt: parseDate(insight.date),
          _status: "published",
        } as any,
      });
      results.insights.created++;
    } catch (err: any) {
      console.error(`Failed to seed insight: ${insight.slug}`, err?.message);
    }
  }

  // ─── Seed Case Studies ───────────────────────────────────────────
  for (const cs of caseStudiesData) {
    const existing = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: cs.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      // Case study exists — check if it needs images
      const existingCS = existing.docs[0] as any;
      if (!existingCS.displayImage) {
        const displayPath = `/case-studies/${cs.slug}.webp`;
        const bannerPath = `/case-studies/${cs.slug}-2.webp`;
        const displayId = await uploadLocalImage(payload, "caseStudyMedia", displayPath, cs.title);
        const bannerId = await uploadLocalImage(payload, "caseStudyMedia", bannerPath, `${cs.title} banner`);

        if (displayId || bannerId) {
          await payload.update({
            collection: "case-studies",
            id: existingCS.id,
            data: {
              ...(displayId ? { displayImage: displayId } : {}),
              ...(bannerId ? { bannerImage: bannerId } : {}),
            } as any,
          });
          results.caseStudies.imagesUpdated++;
        }
      }
      results.caseStudies.skipped++;
      continue;
    }

    const paraOne = textToLexical(cs.challenge);
    const paraTwo = textToLexical(cs.solution);
    const paraThree = textToLexical([
      cs.results.map((r) => `${r.metric}: ${r.value}`).join(". "),
    ]);

    const counterData = cs.results.map((r) => ({
      count: r.value,
      text: r.metric,
    }));

    // Upload case study images
    const displayPath = `/case-studies/${cs.slug}.webp`;
    const bannerPath = `/case-studies/${cs.slug}-2.webp`;
    const displayId = await uploadLocalImage(payload, "caseStudyMedia", displayPath, cs.title);
    const bannerId = await uploadLocalImage(payload, "caseStudyMedia", bannerPath, `${cs.title} banner`);

    try {
      await payload.create({
        collection: "case-studies",
        data: {
          title: cs.title,
          slug: cs.slug,
          meta: {
            metaTitle: `${cs.title} | RIOD Case Studies`,
            metaDescription: cs.summary,
          },
          content: {
            paraOne,
            paraTwo,
            paraThree,
          },
          counterData,
          displayImage: displayId || undefined,
          bannerImage: bannerId || undefined,
          industry: cs.industry.toLowerCase().includes("energy")
            ? "energy"
            : cs.industry.toLowerCase().includes("auto")
              ? "automotive"
              : cs.industry.toLowerCase().includes("health")
                ? "healthcare"
                : cs.industry.toLowerCase().includes("tech")
                  ? "technology"
                  : "technology",
          technology: cs.technologies.map((t) => ({ name: t })),
          tag: cs.tag,
          client: cs.client,
          location: cs.location,
          summary: cs.summary,
          testimonial: cs.testimonial
            ? {
                quote: cs.testimonial.quote,
                author: cs.testimonial.author,
                role: cs.testimonial.role,
              }
            : undefined,
        } as any,
      });
      results.caseStudies.created++;
    } catch (err: any) {
      console.error(`Failed to seed case study: ${cs.slug}`, err?.message);
    }
  }

  return NextResponse.json({
    message: "Seed complete",
    results,
  });
}
