"use client";

import React from "react";
import ReactLenis, { useLenis } from "lenis/react";

import HeroVideoSection from "@/app/components/homepage/HeroVideoSection";
import CoreOfferingsSection from "@/app/components/homepage/CoreOfferingsSection";
import ProductCatalogueSection from "@/app/components/homepage/ProductCatalogueSection";
import TrustedBySection from "@/app/components/homepage/TrustedBySection";
import InsightsScrollSection from "@/app/components/homepage/InsightsScrollSection";
import SolutionsSection from "@/app/components/homepage/SolutionsSection";
import ContactCTASection from "@/app/components/homepage/ContactCTASection";

export default function HomePage() {
  useLenis(() => {
    // smooth scroll callback
  });

  return (
    <>
      <ReactLenis root />

      <div>
        <HeroVideoSection />
        <CoreOfferingsSection />
        <ProductCatalogueSection />
        <TrustedBySection />
        <InsightsScrollSection />
        <SolutionsSection />
        <ContactCTASection />
      </div>
    </>
  );
}
