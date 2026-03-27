import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProductSlugs } from "@/app/data/powerpodData";
import ProductDetailClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";

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
    openGraph: {
      title: `${product.name} | RIOD EV Chargers`,
      description: product.tagline,
      url: `https://riod.energy/products/ev-chargers/${slug}`,
      images: [{ url: product.heroImage, width: 1400, height: 800 }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    image: `https://riod.energy${product.heroImage}`,
    brand: {
      "@type": "Brand",
      name: "RIOD",
    },
    manufacturer: {
      "@type": "Organization",
      name: "RnD Square Pvt. Ltd.",
    },
    category: "EV Charger",
    url: `https://riod.energy/products/ev-chargers/${slug}`,
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <ProductDetailClient product={product} />
    </>
  );
}
