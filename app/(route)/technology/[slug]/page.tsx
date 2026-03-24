import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTechnologyBySlug, getAllTechnologySlugs } from "@/app/data/technologies";
import TechnologyDetailClient from "./page.client";
import OperationsSuiteLanding from "@/app/components/technology/OperationsSuiteLanding";
import JsonLd from "@/app/components/common/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTechnologySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) return { title: "Technology | RIOD" };

  return {
    title: `${tech.name} | Technology | RIOD`,
    description: tech.tagline,
    openGraph: {
      title: `${tech.name} | Technology | RIOD`,
      description: tech.tagline,
      url: `https://riod.in/technology/${slug}`,
      images: tech.sections?.[0]?.image
        ? [{ url: tech.sections[0].image, width: 1400, height: 800 }]
        : [],
    },
  };
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) notFound();

  const techSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: tech.name,
    description: tech.tagline,
    image: tech.sections?.[0]?.image
      ? `https://riod.in${tech.sections[0].image}`
      : undefined,
    author: {
      "@type": "Organization",
      name: "RIOD",
    },
    publisher: {
      "@type": "Organization",
      name: "RIOD",
      logo: { "@type": "ImageObject", url: "https://riod.in/header/logo.svg" },
    },
    url: `https://riod.in/technology/${slug}`,
  };

  // Operations Suite gets its own full landing page
  if (slug === "ev-charging-operations-suite") {
    return (
      <>
        <JsonLd data={techSchema} />
        <OperationsSuiteLanding />
      </>
    );
  }

  return (
    <>
      <JsonLd data={techSchema} />
      <TechnologyDetailClient
        name={tech.name}
        tagline={tech.tagline}
        sections={tech.sections}
      />
    </>
  );
}
