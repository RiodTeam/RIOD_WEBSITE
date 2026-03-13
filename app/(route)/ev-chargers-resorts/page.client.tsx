"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";
import FindYourCharger from "@/app/components/ev-chargers/FindYourCharger";

import { resortsAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataResorts } from "@/app/components/data/idealProductsData";
import { servicesProductsResorts } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/hotel/hero.webp"
          title="Smart EV Charging for Resorts & Leisure Properties"
          description="Premium, reliable EV charging solutions that enhance guest experience, boost sustainability credentials, and unlock new revenue for resort properties."
        />

        <PlatformSection
          title="Why Resorts Need EV Charging"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          description="As eco-tourism grows and EV adoption accelerates, resorts that offer reliable charging instantly attract premium, sustainability-conscious travelers. Installing EV chargers enhances the guest experience, differentiates your property, and positions your resort as a future-ready, green destination."
        />

        <ServicesSection products={servicesProductsResorts} />

        <HotelAccordion
          heading="How We Help Resorts"
          intro="RIOD delivers turnkey EV charging solutions designed for premium resort environments. From custom installation that preserves your property's aesthetic to flexible revenue models, we ensure resorts can offer world-class charging with minimal effort and maximum impact."
          items={resortsAccordionData}
        />

        <IdealProductsSection data={idealProductsDataResorts} />

        <FindYourCharger />

      </div>
    </ReactLenis>
  );
}
