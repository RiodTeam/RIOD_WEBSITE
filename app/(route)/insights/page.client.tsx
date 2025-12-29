"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import BlogGrid from "@/app/components/insights/BlogGrid";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/home/hero.webp"
          title="Blogs and Articles"
          description="Insights, updates, and perspectives on EV charging, electric mobility, and sustainable energy shaping the future of transportation."
        />

        <BlogGrid />

      </div>
    </ReactLenis>
  );
}
