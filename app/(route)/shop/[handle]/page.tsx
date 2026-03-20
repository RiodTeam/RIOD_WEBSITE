import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { shopifyFetch } from "@/app/lib/shopify";
import {
  PRODUCT_BY_HANDLE_QUERY,
  ALL_PRODUCTS_QUERY,
  type ShopifyProduct,
} from "@/app/lib/shopify-queries";
import ProductDetail from "@/app/components/shop/ProductDetail";

export const revalidate = 60;

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  try {
    const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
      ALL_PRODUCTS_QUERY
    );
    return data.products.edges.map((e) => ({ handle: e.node.handle }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  try {
    const data = await shopifyFetch<{ product: ShopifyProduct }>(
      PRODUCT_BY_HANDLE_QUERY,
      { handle }
    );
    const p = data.product;
    if (!p) return { title: "Product | RIOD" };

    const price = parseFloat(p.priceRange.minVariantPrice.amount);
    const image = p.images.edges[0]?.node.url;

    return {
      title: `${p.title} | Buy Online | RIOD India`,
      description: p.description.substring(0, 160),
      openGraph: {
        title: p.title,
        description: p.description.substring(0, 160),
        images: image ? [{ url: image }] : [],
      },
      other: {
        "script:ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.title,
          description: p.description,
          image: p.images.edges.map((e) => e.node.url),
          brand: { "@type": "Brand", name: "RIOD" },
          offers: {
            "@type": "Offer",
            price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "RIOD India" },
          },
        }),
      },
    };
  } catch {
    return { title: "Product | RIOD" };
  }
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  let product: ShopifyProduct | null = null;
  try {
    const data = await shopifyFetch<{ product: ShopifyProduct }>(
      PRODUCT_BY_HANDLE_QUERY,
      { handle }
    );
    product = data.product;
  } catch {
    notFound();
  }

  if (!product) notFound();

  return (
    <main className="bg-white pt-20 md:pt-24">
      <ProductDetail product={product} />
    </main>
  );
}
