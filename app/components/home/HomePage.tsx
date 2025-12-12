"use client";

import React from "react";
import ReactLenis, { useLenis } from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";
import CompatibleSection from "@/app/components/homepage/CompatibleSection";
import EvFeatures from "@/app/components/homepage/EvFeatures";
import EvNumbersSection from "@/app/components/homepage/EvNumbersSection";
import PartnerHostSection from "@/app/components/homepage/PartnerHostSection";
import PowerpodCitySection from "@/app/components/homepage/PowerpodCitySection";
import PowerpodSection from "@/app/components/homepage/PowerpodSection";

export default function HomePage() {
  useLenis(() => {
    // smooth scroll callback
  });

  return (
    <>
      <ReactLenis root />
      
      <div>
        <HeroSection
          backgroundImage="/home/hero.webp"
          title="Powering India’s EV Revolution"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Why RIOD"
          description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations..."
        />

        <EvFeatures />

        <PlatformSection
          title="Charge Anywhere, Anytime!"
          description="RNDSquare is your end-to-end R&D partner..."
        />

        <PowerpodSection />
        <PartnerHostSection />
        <CompatibleSection />
        <PowerpodCitySection />
        <EvNumbersSection />
      </div>
    </>
  );
}
