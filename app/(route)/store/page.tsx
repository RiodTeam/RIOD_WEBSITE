import type { Metadata } from "next";
import { shopifyFetch } from "@/app/lib/shopify";
import { ALL_PRODUCTS_QUERY, type ShopifyProduct } from "@/app/lib/shopify-queries";
import ProductCard from "@/app/components/store/ProductCard";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Buy EV Chargers Online India | Powerpod by RIOD",
  description:
    "Buy Powerpod AC EV chargers for home and commercial use. 3.3kW to 22kW. Type 2, OCPP, RFID. Shipping across India.",
  openGraph: {
    title: "Buy EV Chargers Online India | Powerpod by RIOD",
    description:
      "Buy Powerpod AC EV chargers for home and commercial use. 3.3kW to 22kW. Type 2, OCPP, RFID. Shipping across India.",
    url: "https://riod.energy/store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy EV Chargers Online India | Powerpod by RIOD",
    description:
      "Buy Powerpod AC EV chargers for home and commercial use. 3.3kW to 22kW. Type 2, OCPP, RFID. Shipping across India.",
  },
};

export default async function ShopPage() {
  let products: ShopifyProduct[] = [];

  try {
    const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
      ALL_PRODUCTS_QUERY
    );
    products = data.products.edges
      .map((e) => e.node)
      .filter((p) => !p.handle.includes("climate") && !p.handle.includes("rd280"));
  } catch {
    // Shopify not configured yet - show placeholder
  }

  const homeChargers = products.filter(
    (p) =>
      p.tags.includes("Home EV chargers") ||
      p.title.toLowerCase().includes("home") ||
      p.title.toLowerCase().includes("7.4") ||
      p.title.toLowerCase().includes("3.3")
  );
  const commercialChargers = products.filter((p) => !homeChargers.includes(p));

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#1b1b1b] pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
            Shop
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white font-inter leading-tight mb-4">
            Powerpod EV Chargers
          </h1>
          <p className="text-[#9a99a2] text-lg max-w-[560px] font-inter">
            Made in India. Designed for Indian EVs. From home wallboxes to
            commercial charging stations.
          </p>
        </div>
      </section>

      <div className="w-[90%] max-w-[1400px] mx-auto py-16 md:py-20">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#9a99a2] text-lg">
              Shop coming soon. For enquiries,{" "}
              <a href="/contact" className="text-[#1b1b1b] underline">
                contact us
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            {homeChargers.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-medium text-[#1b1b1b] font-inter mb-8">
                  Home Chargers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {homeChargers.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}

            {commercialChargers.length > 0 && (
              <div>
                <h2 className="text-2xl font-medium text-[#1b1b1b] font-inter mb-8">
                  Commercial &amp; Public Chargers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {commercialChargers.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
