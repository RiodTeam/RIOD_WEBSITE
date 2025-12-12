"use client";

import React from "react";
import ReactLenis from "lenis/react";

import HeroSection from "@/app/components/common/Hero";
import PlatformSection from "@/app/components/common/Platform";
import EvProductsSection from "@/app/components/products/EvProductsSection";

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <HeroSection
          backgroundImage="/home/hero.webp"
          title="EV Chargers"
          description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
        />

        <PlatformSection
          title="Best Selling Products"
          titleWidth="lg:w-[50%] xl:w-[65%]"
          titleMarginTop="mt-4 md:mt-3"
          description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life."
        />

        <EvProductsSection />
      </div>
    </ReactLenis>
  );
}
