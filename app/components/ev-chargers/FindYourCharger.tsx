"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

export default function FindYourCharger() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
      <div className="w-[90%] max-w-[900px] mx-auto text-center">
        <MotionWrapper>
          <div className="w-14 h-14 rounded-2xl bg-[#1b1b1b] flex items-center justify-center mx-auto mb-6">
            <Zap className="w-6 h-6 text-[#cdf80a]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            Not sure which charger fits?
          </h2>
          <p className="para-text text-[#626262] max-w-[500px] mx-auto mb-8">
            Answer a few quick questions about your setup and we&apos;ll
            recommend the right RIOD charger for your needs.
          </p>
          <Link
            href="/ev-charger-selection-guide"
            className="inline-flex items-center gap-2 bg-[#1b1b1b] text-white px-7 py-3.5 rounded-full font-inter font-medium text-sm hover:bg-[#333] transition-colors"
          >
            Find Your Charger
            <ArrowRight className="w-4 h-4" />
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}
