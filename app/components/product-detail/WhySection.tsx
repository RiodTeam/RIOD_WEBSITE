"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

interface WhySectionProps {
  name: string;
  tagline?: string;
  intro: string;
  heroImage?: string;
}

export default function WhySection({ name, tagline, intro, heroImage }: WhySectionProps) {
  return (
    <section className="pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text content */}
          <MotionWrapper>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Why Choose
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-3">
                {name}
              </h2>
              {tagline && (
                <p className="text-lg md:text-xl text-[#626262] font-inter mb-6">
                  {tagline}
                </p>
              )}
              <p className="para-text text-[#626262] leading-relaxed">
                {intro}
              </p>
            </div>
          </MotionWrapper>

          {/* Right: Product image */}
          {heroImage && (
            <MotionWrapper delay={0.15}>
              <div className="relative w-full aspect-square bg-[#f6f6f6] rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt={name}
                  fill
                  className="object-contain p-6 md:p-10"
                  priority
                />
              </div>
            </MotionWrapper>
          )}
        </div>
      </div>
    </section>
  );
}
