"use client";

import type { ProductVariant } from "@/app/data/powerpodData";
import { Ruler, Target, Sparkles } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

interface ProductDetailCardsProps {
  variants: ProductVariant[];
}

export default function ProductDetailCards({
  variants,
}: ProductDetailCardsProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Detailed Specifications
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
            Every Model, In Detail
          </h2>
        </MotionWrapper>

        <div className="space-y-6">
          {variants.map((v, index) => (
            <MotionWrapper key={v.name} delay={index * 0.1}>
              <div className="border border-[#e8e8e8] rounded-xl p-6 md:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="lg:max-w-[60%]">
                    <h3 className="text-xl md:text-2xl font-medium text-[#1b1b1b] font-inter mb-1">
                      {v.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#cdf80a] bg-[#1b1b1b] px-3 py-1 rounded-full text-sm font-medium font-inter">
                        {v.power}
                      </span>
                      <span className="text-sm text-[#626262]">
                        {v.supply}
                      </span>
                      <span className="text-sm text-[#626262]">
                        {v.mount} Mount
                      </span>
                    </div>
                    <p className="para-text2 text-[#626262] leading-relaxed mb-5">
                      {v.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Target className="w-4 h-4 mt-0.5 text-[#1b1b1b]/50 min-w-[1rem]" />
                        <div>
                          <span className="text-sm font-medium text-[#1b1b1b] font-inter">
                            Best for:{" "}
                          </span>
                          <span className="text-sm text-[#626262]">
                            {v.bestFor}
                          </span>
                        </div>
                      </div>

                      {v.keyFeature && (
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 mt-0.5 text-[#1b1b1b]/50 min-w-[1rem]" />
                          <div>
                            <span className="text-sm font-medium text-[#1b1b1b] font-inter">
                              Key feature:{" "}
                            </span>
                            <span className="text-sm text-[#626262]">
                              {v.keyFeature}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <Ruler className="w-4 h-4 mt-0.5 text-[#1b1b1b]/50 min-w-[1rem]" />
                        <div>
                          <span className="text-sm font-medium text-[#1b1b1b] font-inter">
                            Dimensions:{" "}
                          </span>
                          <span className="text-sm text-[#626262]">
                            {v.dimensions}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end lg:min-w-[180px]">
                    <div className="bg-[#cdf80a]/15 border border-[#cdf80a]/30 rounded-lg px-4 py-2.5">
                      <p className="text-xs text-[#1b1b1b]/50 font-inter">
                        Connector
                      </p>
                      <p className="text-sm font-medium text-[#1b1b1b] font-inter">
                        {v.connector}
                      </p>
                    </div>
                    <div className="bg-[#cdf80a]/15 border border-[#cdf80a]/30 rounded-lg px-4 py-2.5">
                      <p className="text-xs text-[#1b1b1b]/50 font-inter">
                        Current
                      </p>
                      <p className="text-sm font-medium text-[#1b1b1b] font-inter">
                        {v.current}
                      </p>
                    </div>
                    <div className="bg-[#cdf80a]/15 border border-[#cdf80a]/30 rounded-lg px-4 py-2.5">
                      <p className="text-xs text-[#1b1b1b]/50 font-inter">
                        Authentication
                      </p>
                      <p className="text-sm font-medium text-[#1b1b1b] font-inter">
                        {v.auth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
