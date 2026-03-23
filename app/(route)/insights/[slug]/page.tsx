import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageClient from "./page.client";
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

  return {
    title: insight.title,
    description: insight.intro?.[0]?.substring(0, 160) || insight.title,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsight(slug);

  if (!insight) {
    notFound();
  }

  // Get related articles
  const allInsights = await getInsights();
  const relatedArticles = insight.relatedSlugs
    ? allInsights.filter((i) => insight.relatedSlugs?.includes(i.slug))
    : [];

  return <PageClient insight={insight} relatedArticles={relatedArticles} />;
}
