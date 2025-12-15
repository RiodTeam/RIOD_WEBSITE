import { insightsData } from "@/app/components/data/insightsData";
import BlogDetailSection from "@/app/components/individual-insight/BlogDetailSection";
import NextArticlesSection from "@/app/components/individual-insight/NextArticlesSection";

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const insight = insightsData.find((item) => item.slug === slug);

  if (!insight)
    return <div className="p-10 text-red-500">Article not found</div>;

  // ⭐ Get related using slug list
  const relatedArticles = insightsData.filter((i) =>
    insight.relatedSlugs.includes(i.slug)
  );

  return (
    <>
      <BlogDetailSection data={insight} />
      <NextArticlesSection articles={relatedArticles} />
    </>
  );
}
