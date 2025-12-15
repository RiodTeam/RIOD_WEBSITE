"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";
import EvProductsSection from "@/app/components/products/EvProductsSection";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/home/hero.webp"
          title="EV Chargers"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Best Selling Products"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          titleMarginTop="mt-4 md:mt-3"
          description="RIOD is a leading provider of electric vehicle (EV) charging solutions in India, with a wide range of products to suit the needs of different customers. Among these products, there are some best-selling EV chargers that have become a popular choice among EV drivers and businesses alike. "
        />

        <EvProductsSection />
      </div>
    </ReactLenis>
  );
}
