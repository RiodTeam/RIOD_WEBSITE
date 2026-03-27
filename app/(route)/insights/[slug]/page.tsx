import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";
import {
  getInsight,
  getInsights,
  getAllInsightSlugs,
} from "@/app/lib/contentProviders";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    return {
      title: "Article Not Found",
      description: "The requested article does not exist.",
    };
  }

  const description = insight.intro?.[0]?.substring(0, 160) || insight.title;

  return {
    title: insight.title,
    description,
    openGraph: {
      title: insight.title,
      description,
      url: `https://riod.energy/insights/${slug}`,
      type: "article",
      images: insight.image ? [{ url: insight.image, width: 1400, height: 800 }] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.intro?.[0]?.substring(0, 160) || insight.title,
    image: insight.image ? `https://riod.energy${insight.image}` : undefined,
    datePublished: insight.date,
    author: {
      "@type": "Organization",
      name: "RIOD",
    },
    publisher: {
      "@type": "Organization",
      name: "RIOD",
      logo: { "@type": "ImageObject", url: "https://riod.energy/header/logo.svg" },
    },
    url: `https://riod.energy/insights/${slug}`,
  };

  // Get related articles
  const allInsights = await getInsights();
  const relatedArticles = insight.relatedSlugs
    ? allInsights.filter((i) => insight.relatedSlugs?.includes(i.slug))
    : [];

  return (
    <>
      <JsonLd data={articleSchema} />
      <PageClient insight={insight} relatedArticles={relatedArticles} />
    </>
  );
}
