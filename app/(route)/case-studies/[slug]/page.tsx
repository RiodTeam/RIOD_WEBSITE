import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageClient from "./page.client";
import { getCaseStudy, getAllCaseStudySlugs } from "@/app/lib/contentProviders";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

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
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <PageClient caseStudy={caseStudy} />;
}
