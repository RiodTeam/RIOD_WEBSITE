"use client";

import { insightsData } from "@/app/components/data/insightsData";
import BlogDetailSection from "@/app/components/individual-insight/BlogDetailSection";
import NextArticlesSection from "@/app/components/individual-insight/NextArticlesSection";

export default function PageClient({ slug }: { slug: string }) {
  const insight = insightsData.find(
    (item) =>
      item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!insight) {
    return <div className="p-10 text-red-500">Article not found</div>;
  }

  const relatedArticles = insightsData.filter((i) =>
    insight.relatedSlugs?.includes(i.slug)
  );


  return (
    <>
      <BlogDetailSection data={insight} />
      <NextArticlesSection articles={relatedArticles} />
    </>
  );
}
