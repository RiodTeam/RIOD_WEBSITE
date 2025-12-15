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
          description="Our best-selling products reflect RNDSquare’s commitment to engineering excellence, performance, and reliability. Designed through in-house innovation and powered by advanced hardware, IoT, and software integration, they deliver proven results across real-world applications. Trusted by customers across industries, these solutions represent the impact of ideas built right-from concept to scalable success."
        />

        <EvProductsSection />
      </div>
    </ReactLenis>
  );
}
