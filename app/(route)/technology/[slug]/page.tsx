import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTechnologyBySlug, getAllTechnologySlugs } from "@/app/data/technologies";
import TechnologyDetailClient from "./page.client";

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
  };
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params;
  const tech = getTechnologyBySlug(slug);
  if (!tech) notFound();

  // Pass only serializable data (exclude icon which is a component)
  return (
    <TechnologyDetailClient
      name={tech.name}
      tagline={tech.tagline}
      heroImage={tech.heroImage}
      sections={tech.sections}
    />
  );
}
