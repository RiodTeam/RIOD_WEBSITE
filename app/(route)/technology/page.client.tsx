"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import TechnologyGrid from "@/app/components/technology/TechnologyGrid";
import { technologies } from "@/app/data/technologies";

export default function TechnologyPageClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/technology/tech-hero.webp"
          title="Our<br />Technology"
          description="We engineer the complete technology stack for EV charging — from power electronics and embedded firmware to cloud platforms, AI analytics, and payment systems."
          overlayOpacity={0.45}
        />
        <TechnologyGrid technologies={technologies} />
      </main>
    </ReactLenis>
  );
}
