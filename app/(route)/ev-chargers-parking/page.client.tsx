"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";

import { parkingAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataParking } from "@/app/components/data/idealProductsData";
import { servicesProductsParking } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/home2/hero.webp"
          title="EV Charging for Parking Complexes"
          description="Scalable, revenue-generating EV charging solutions for multi-level and open parking facilities. Maximize utilization with intelligent infrastructure."
        />

        <PlatformSection
          title="Why Parking Complexes Need EV Charging"
          titleWidth="lg:w-[60%] xl:w-[70%]"
          description="Parking complexes are the ideal locations for EV charging infrastructure. With vehicles parked for hours, operators can monetize idle space, attract modern tenants and visitors, and meet emerging building code requirements for EV-ready parking."
        />

        <ServicesSection products={servicesProductsParking} />

        <HotelAccordion
          heading="How We Help Parking Complexes"
          intro="RIOD deploys large-scale EV charging infrastructure designed for complex parking environments. From intelligent load balancing across 50+ chargers to integrated payment systems and real-time cloud monitoring, we help operators maximize revenue and efficiency."
          items={parkingAccordionData}
        />

        <IdealProductsSection data={idealProductsDataParking} />

      </div>
    </ReactLenis>
  );
}
