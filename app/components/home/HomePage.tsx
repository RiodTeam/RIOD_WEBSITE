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
          description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life."
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
