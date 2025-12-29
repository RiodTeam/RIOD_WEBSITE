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
          backgroundImage="/home/hero1.webp"
          title="Powering India’s EV Revolution"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Why RIOD"
          description="At RIOD, we are redefining the EV charging experience in India through advanced engineering and intelligent design. Our reliable, durable, and user-friendly charging solutions deliver fast, safe, and seamless performance across residential, commercial, and public environments. By integrating smart hardware and scalable software, we enable future-ready charging infrastructure that supports the rapid growth of electric mobility."
        />

        <EvFeatures />

        <PlatformSection
          title="Charge Anywhere, Anytime!"
          titleWidth="lg:w-[50%] xl:w-[45%]"
          description="RIOD builds reliable and scalable EV charging solutions designed for real-world use. By integrating robust hardware, intelligent energy management, and connected software platforms, RIOD delivers safe and efficient charging systems ready for everyday deployment. From product development and validation to large-scale rollout and long-term operation, RIOD focuses on enabling dependable charging experiences for modern electric mobility."
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
