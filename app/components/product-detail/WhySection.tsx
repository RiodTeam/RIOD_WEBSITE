"use client";

import MotionWrapper from "../common/MotionWrapper";

interface WhySectionProps {
  name: string;
  intro: string;
}

export default function WhySection({ name, intro }: WhySectionProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Why Choose
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                {name}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="para-text text-[#626262] leading-relaxed">
                {intro}
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
