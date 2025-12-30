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
          backgroundImage="/about/h1.webp"
          title="Powering the Future of Electric Mobility"
          description="Delivering intelligent and reliable EV charging solutions designed for homes, businesses, and public environments-supporting a cleaner, smarter mobility future."
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
          description="RIOD is driven by innovation that turns complex engineering into practical, reliable solutions. By combining intelligent hardware, connected software, and scalable system design, we create EV charging and IoT products built for real-world performance. Every solution is engineered to deliver safety, efficiency, and long-term value across diverse deployment environments."
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
