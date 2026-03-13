"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";

import ServicesSection from "@/app/components/ev-chargers/Services";
import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp";
import IdealProductsSection from "@/app/components/ev-chargers/IdealProductsSection";
import FindYourCharger from "@/app/components/ev-chargers/FindYourCharger";

import {InstitutionAccordionData } from "@/app/components/data/hotelAccordionData";
import { idealProductsDataInstitute } from "@/app/components/data/idealProductsData";
import { servicesProductsInstitution } from "@/app/components/data/servicesProducts";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/institution/hero.webp"
          title="EV Chargers For Institution"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Why Institution Need EV Charging"
          titleWidth="lg:w-full"
          titleMarginTop="mt-4 md:mt-4"
          description="As campuses evolve toward smarter, greener, and more connected environments, EV charging has become an essential part of modern institutional infrastructure. Schools, colleges, and universities benefit greatly from providing reliable charging options-enhancing convenience, supporting sustainability goals, and strengthening their position as forward-thinking educational leaders. "
        />

        <ServicesSection products={servicesProductsInstitution} />

        <HotelAccordion
          heading="How We Help Institution"
          intro="RIOD helps educational institutions deploy reliable EV charging infrastructure designed for campuses of all sizes. Our solutions focus on seamless installation, flexible deployment models, intelligent power management, and secure system integrations that support students, staff, and visitors without disrupting daily campus life."
          items={InstitutionAccordionData}
        />

        <IdealProductsSection data={idealProductsDataInstitute} />

        <FindYourCharger />

      </div>
    </ReactLenis>
  );
}
