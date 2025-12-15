import { insightsData } from "@/app/components/data/insightsData";
import PageClient from "./page.client";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const insight = insightsData.find(
    (item) =>
      item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!insight) {
    return {
      title: "Article Not Found",
      description: "The requested article does not exist.",
    };
  }

  return {
    title: insight.title,
    description: insight.title, // safe, type-correct
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PageClient slug={slug} />;
}
