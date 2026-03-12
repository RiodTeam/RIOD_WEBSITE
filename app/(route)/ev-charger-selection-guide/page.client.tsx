"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import SelectionWizard from "@/app/components/selection-guide/SelectionWizard";

export default function SelectionGuideClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/heroes/selection-guide-hero.webp"
          title="Find the Right EV Charger"
          description="Not sure which charger fits your needs? Tell us about your location, expected usage, and budget. We will recommend the best RIOD charger for you."
          overlayOpacity={0.55}
        />

        <SelectionWizard />
      </main>
    </ReactLenis>
  );
}
