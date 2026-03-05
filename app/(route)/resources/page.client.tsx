"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import ResourceGrid from "@/app/components/resources/ResourceGrid";

export default function ResourcesClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/products/powerpod-city.png"
          title="Resources"
          description="Product datasheets, installation guides, brochures, and comparison charts for all RIOD EV chargers."
          overlayOpacity={0.55}
        />

        <ResourceGrid />
      </main>
    </ReactLenis>
  );
}
