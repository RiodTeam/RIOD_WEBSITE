"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";
import FindYourCharger from "@/app/components/ev-chargers/FindYourCharger";

import { hospitalsAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataHospitals } from "@/app/components/data/idealProductsData";
import { servicesProductsHospitals } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/institution/hero.webp"
          title="EV Charging Solutions for Hospitals"
          description="Safe, reliable EV charging infrastructure designed for healthcare environments. Support staff, patients, visitors, and fleet vehicles."
        />

        <PlatformSection
          title="Why Hospitals Need EV Charging"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          description="Hospitals serve thousands of staff, patients, and visitors daily. As EV adoption grows, healthcare facilities need reliable charging infrastructure that operates safely alongside critical medical systems while supporting sustainability goals and staff convenience."
        />

        <ServicesSection products={servicesProductsHospitals} />

        <HotelAccordion
          heading="How We Help Hospitals"
          intro="RIOD delivers EV charging solutions engineered for healthcare environments. Our installations prioritize safety, zero disruption to medical operations, and intelligent power management that never interferes with critical hospital systems."
          items={hospitalsAccordionData}
        />

        <IdealProductsSection data={idealProductsDataHospitals} />

        <FindYourCharger />

      </div>
    </ReactLenis>
  );
}
