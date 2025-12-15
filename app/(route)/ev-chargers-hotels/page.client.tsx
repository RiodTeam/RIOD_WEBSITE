"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";

import { hotelAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsData } from "@/app/components/data/idealProductsData";
import { servicesProducts } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/hotel/hero.webp"
          title="Power Up Guest Experience with Smart EV Charging"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Why Hotels Need EV Charging"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          titleMarginTop="mt-4 md:mt-4"
          description="As electric vehicle adoption accelerates, hotels that offer reliable EV charging instantly gain a competitive edge. Installing EV chargers not only enhances guest experience but also positions your property as a future-ready, sustainability-driven brand. Here’s why EV charging has become essential for the hospitality industry: "
        />

        <ServicesSection products={servicesProducts} />

        <HotelAccordion
          heading="How We Help Hotels"
          intro="RIOD delivers smart, reliable, and guest-friendly EV charging solutions designed specifically for the hospitality industry. Our technology, engineering expertise, and end-to-end service model help hotels attract premium guests, boost revenue, and support sustainability goals all with minimal effort and maximum impact. "
          items={hotelAccordionData}
        />

        <IdealProductsSection data={idealProductsData} />

      </div>
    </ReactLenis>
  );
}
