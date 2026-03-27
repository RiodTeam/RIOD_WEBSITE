import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";
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
    openGraph: {
      title: `${caseStudy.title} | RIOD Case Studies`,
      description: caseStudy.summary,
      url: `https://riod.energy/case-studies/${slug}`,
      images: caseStudy.image ? [{ url: caseStudy.image, width: 1400, height: 800 }] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.summary,
    image: caseStudy.image ? `https://riod.energy${caseStudy.image}` : undefined,
    author: {
      "@type": "Organization",
      name: "RIOD",
    },
    publisher: {
      "@type": "Organization",
      name: "RIOD",
      logo: { "@type": "ImageObject", url: "https://riod.energy/header/logo.svg" },
    },
    url: `https://riod.energy/case-studies/${slug}`,
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <PageClient caseStudy={caseStudy} />
    </>
  );
}
