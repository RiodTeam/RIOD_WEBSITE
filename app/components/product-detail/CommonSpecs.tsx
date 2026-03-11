"use client";

import MotionWrapper from "../common/MotionWrapper";

interface CommonSpecsProps {
  specs: { label: string; value: string }[];
}

export default function CommonSpecs({ specs }: CommonSpecsProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Technical Specifications
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
            Common Across All Models
          </h2>
        </MotionWrapper>

        <MotionWrapper>
          <div className="bg-white rounded-xl overflow-hidden">
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0 px-6 md:px-8 py-5 ${
                  index < specs.length - 1 ? "border-b border-[#f0f0f0]" : ""
                }`}
              >
                <div className="sm:w-[35%] text-sm font-medium text-[#1b1b1b] font-inter">
                  {spec.label}
                </div>
                <div className="sm:w-[65%] para-text2 text-[#626262]">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
