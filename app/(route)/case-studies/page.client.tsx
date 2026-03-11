"use client";

import ReactLenis from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import CaseStudyGrid from "@/app/components/case-studies/CaseStudyGrid";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">
        <HeroSection
          backgroundImage="/home/hero.webp"
          title="Case Studies"
          description="Real results from real deployments. See how RIOD solutions work in the field."
          overlayOpacity={0.55}
        />
        <CaseStudyGrid />
      </div>
    </ReactLenis>
  );
}
