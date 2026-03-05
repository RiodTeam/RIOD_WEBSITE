"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import SelectionWizard from "@/app/components/selection-guide/SelectionWizard";

export default function SelectionGuideClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/products/powerpod-city.png"
          title="EV Charger Selection Guide"
          description="Answer a few quick questions and we'll recommend the right RIOD charger for your location, usage, and budget."
          overlayOpacity={0.55}
        />

        <SelectionWizard />
      </main>
    </ReactLenis>
  );
}
