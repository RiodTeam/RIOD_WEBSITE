"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";

import {officeAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataOffice } from "@/app/components/data/idealProductsData";
import { servicesProductsOffice } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/office/hero.webp"
          title="EV Chargers For Office"
          description="Smart and reliable EV charging solutions designed for office environments, supporting employee convenience, sustainability goals, and efficient daily operations."
        />

        <PlatformSection
          title="Why Office Need EV Charging"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          titleMarginTop="mt-4 md:mt-4"
          description="For companies operating corporate fleets, on-site charging accelerates fleet electrification and reduces operational costs. Above all, EV charging future-proofs the workplace and positions the organization as an innovative, forward-thinking brand ready to lead in a sustainable future. "
        />

        <ServicesSection products={servicesProductsOffice} />

        <HotelAccordion
          heading="How We Help Office"
          intro="Our flexible commercial models allow organizations to choose between company-owned chargers or revenue-sharing arrangements based on their strategic and financial goals. With intelligent load balancing, RIOD chargers optimize your building’s electrical capacity, allowing multiple vehicles to charge efficiently without expensive infrastructure upgrades. We also enable seamless employee access, branding customization, and integration with corporate systems, offering a smooth and intuitive charging experience for staff and visitors alike. "
          items={officeAccordionData}
        />

        <IdealProductsSection data={idealProductsDataOffice} />

      </div>
    </ReactLenis>
  );
}
