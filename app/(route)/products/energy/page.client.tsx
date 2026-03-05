"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";

export default function EnergyClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/hero/hero-image.webp"
          title="Energy Solutions"
          description="Smart energy management systems for sustainable EV charging infrastructure."
          overlayOpacity={0.5}
        />

        <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
          <div className="w-[90%] max-w-[900px] mx-auto text-center">
            <MotionWrapper>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
                Coming Soon
              </span>
              <h2 className="section-heading text-black mb-6">
                Energy Solutions by RIOD
              </h2>
              <p className="para-text text-[#626262] max-w-[600px] mx-auto">
                We&apos;re building comprehensive energy management solutions
                — from solar-integrated charging to smart grid connectivity.
                Stay tuned for updates.
              </p>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
