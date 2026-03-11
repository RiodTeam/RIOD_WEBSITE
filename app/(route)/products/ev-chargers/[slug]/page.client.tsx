"use client";

import { ReactLenis } from "lenis/react";
import type { ProductFamily } from "@/app/data/powerpodData";
import HeroSection from "@/app/components/common/Hero";
import WhySection from "@/app/components/product-detail/WhySection";
import FeaturesGrid from "@/app/components/product-detail/FeaturesGrid";
import UseCasesSection from "@/app/components/product-detail/UseCasesSection";
import VariantsTable from "@/app/components/product-detail/VariantsTable";
import ProductDetailCards from "@/app/components/product-detail/ProductDetailCards";
import CommonSpecs from "@/app/components/product-detail/CommonSpecs";
import VehiclesSupported from "@/app/components/product-detail/VehiclesSupported";
import WarrantyContact from "@/app/components/product-detail/WarrantyContact";

interface Props {
  product: ProductFamily;
}

export default function ProductDetailClient({ product }: Props) {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage={product.heroImage}
          title={product.name}
          description={product.tagline}
          overlayOpacity={0.55}
        />

        <WhySection name={product.name} intro={product.intro} />

        <VariantsTable variants={product.variants} />

        <ProductDetailCards variants={product.variants} />

        <CommonSpecs specs={product.commonSpecs} />

        <FeaturesGrid features={product.features} />

        <UseCasesSection useCases={product.useCases} />

        <VehiclesSupported vehicles={product.vehiclesSupported} />

        <WarrantyContact shopUrl={product.shopUrl} />
      </main>
    </ReactLenis>
  );
}
