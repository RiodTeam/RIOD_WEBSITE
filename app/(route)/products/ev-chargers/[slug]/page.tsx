import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "@/app/data/powerpodData";
import ProductDetailClient from "./page.client";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | RIOD" };

  return {
    title: `${product.name} | RIOD EV Chargers`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
