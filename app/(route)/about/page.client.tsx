"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import VisionMissionSection from "@/app/components/aboutus/VisionMissionSection";
import InnovationSection from "@/app/components/aboutus/InnovationSection";
import LifeAtRiod from "@/app/components/aboutus/LifeAtRiod";
import TeamSection from "@/app/components/aboutus/TeamSection";
import GallerySection from "@/app/components/aboutus/GallerySection";
import FutureSection from "@/app/components/aboutus/FutureSection";

const PageClient = () => {
  return (
    <ReactLenis root>
      <main className="w-full overflow-hidden">

        {/* HERO */}
        <HeroSection
          backgroundImage="/about/hero.webp"
          title="Powering the Future of Electric Mobility"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        {/* VISION + MISSION */}
        <VisionMissionSection />

        {/* INNOVATION */}
        <InnovationSection />

        {/* TEAM */}
        <TeamSection />

        {/* GALLERY - Lab, Manufacturing, Deployment */}
        <GallerySection />

        {/* CULTURE */}
        <LifeAtRiod />

        {/* THE ROAD AHEAD */}
        <FutureSection />

      </main>
    </ReactLenis>
  );
};

export default PageClient;
