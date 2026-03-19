"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

      {/* CTA */}
      <section style={{ backgroundColor: "#cdf80a" }} className="py-16 md:py-[6.8rem]">
        <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="section-heading text-black">
              Deploying EV charging?
            </h2>
            <p className="para-text text-black/60 mt-4 max-w-[520px]">
              Talk to our team about your project. We design, supply, and manage EV charging infrastructure across India.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors shrink-0 group self-start md:self-auto"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
