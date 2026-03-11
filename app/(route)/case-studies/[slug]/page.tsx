import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/app/components/data/caseStudiesData";
import PageClient from "./page.client";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = caseStudiesData.find(
    (item) => item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | RIOD",
      description: "The requested case study does not exist.",
    };
  }

  return {
    title: `${caseStudy.title} | RIOD Case Studies`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const caseStudy = caseStudiesData.find(
    (item) => item.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );

  if (!caseStudy) {
    notFound();
  }

  return <PageClient slug={slug} />;
}
