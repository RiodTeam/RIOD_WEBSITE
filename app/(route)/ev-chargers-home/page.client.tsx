"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";
import FindYourCharger from "@/app/components/ev-chargers/FindYourCharger";

import { homeAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataHome } from "@/app/components/data/idealProductsData";
import { servicesProductsHome } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/home2/hero.webp"
          title="EV Chargers For Home"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Why Home Need EV Charging"
          titleWidth="lg:w-full"
          titleMarginTop="mt-4 md:mt-4"
          description="As EV adoption grows, home charging has become the most convenient and cost-effective way for families to power their vehicles. A dedicated home charger ensures comfort, safety, and reliability-allowing EV owners to enjoy seamless daily charging without depending on public stations or fluctuating availability. "
        />

        <ServicesSection products={servicesProductsHome} />

        <HotelAccordion
          heading="How We Help Home"
          intro="RIOD makes it simple for homeowners to adopt smart and reliable EV charging. From installation to setup and ongoing support, we ensure a seamless experience that blends perfectly with your home environment. Our solutions are designed for safety, convenience, and long-term performance-giving every household a modern, future-ready charging system. "
          items={homeAccordionData}
        />

        <IdealProductsSection data={idealProductsDataHome} />

        <FindYourCharger />

      </div>
    </ReactLenis>
  );
}
