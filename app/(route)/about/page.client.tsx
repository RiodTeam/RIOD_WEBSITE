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
          backgroundImage="/about/about-hero.webp"
          title="Powering the Future of Electric Mobility"
          description="We are an Indian company building the infrastructure for a cleaner, smarter energy future: from EV charging to intelligent energy management, engineered in-house from hardware to software."
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
