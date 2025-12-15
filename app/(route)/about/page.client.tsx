"use client";

import React from "react";
import ReactLenis, { useLenis } from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import VisionMissionSection from "@/app/components/aboutus/VisionMissionSection";
import EVNumbersSection from "@/app/components/aboutus/EVNumbersSection";
import PlatformSection from "@/app/components/common/Platform";
import FeatureGridSection from "@/app/components/aboutus/FeatureGridSection";
import Join from "@/app/components/aboutus/Join";
import CompatibleSection from "@/app/components/homepage/CompatibleSection";

const PageClient = () => {
  // initialize Lenis Smooth Scroll
  useLenis(() => {
    console.log("Lenis initialized for RIOD About Page");
  });

  return (
    <>
      <ReactLenis root />

      <main className="w-full overflow-hidden">

        {/* HERO */}
        <HeroSection
          backgroundImage="/about/hero.webp"
          title="Powering the Future of Electric Mobility"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        {/* VISION + MISSION */}
        <VisionMissionSection />

        {/* EV NUMBERS WITH COUNTERS */}
        <EVNumbersSection />

        {/* PLATFORM / INNOVATION SECTION */}
        <PlatformSection
          title="Innovation That Drives Us"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          titleMarginTop="mt-4 md:mt-[5.9rem]"
          description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact."
        />

        {/* FEATURES GRID */}
        <FeatureGridSection />

        {/* JOIN SECTION */}
        <Join />

        {/* COMPATIBLE BRANDS */}
        <CompatibleSection />

      </main>
    </>
  );
};

export default PageClient;
