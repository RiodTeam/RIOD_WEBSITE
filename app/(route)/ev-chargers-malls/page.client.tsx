"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";

import { mallsAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataMalls } from "@/app/components/data/idealProductsData";
import { servicesProductsMalls } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/office/hero.webp"
          title="EV Charging for Malls & Theatres"
          description="Smart, scalable EV charging solutions that increase footfall, boost dwell time, and generate new revenue for retail and entertainment venues."
        />

        <PlatformSection
          title="Why Malls & Theatres Need EV Charging"
          titleWidth="lg:w-[60%] xl:w-[70%]"
          description="EV drivers actively seek destinations with charging facilities. By installing chargers, malls and theatres attract high-spending customers who stay longer, shop more, and return frequently. EV charging transforms parking from a cost center into a revenue generator."
        />

        <ServicesSection products={servicesProductsMalls} />

        <HotelAccordion
          heading="How We Help Malls & Theatres"
          intro="RIOD delivers end-to-end EV charging solutions for high-traffic retail and entertainment venues. From multi-level parking deployments to integrated payment systems and real-time analytics, we help property owners maximize revenue and visitor satisfaction."
          items={mallsAccordionData}
        />

        <IdealProductsSection data={idealProductsDataMalls} />

      </div>
    </ReactLenis>
  );
}
