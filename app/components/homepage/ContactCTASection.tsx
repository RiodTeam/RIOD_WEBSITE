"use client";

import MotionWrapper from "../common/MotionWrapper";
import Link from "next/link";
import { ArrowRight, Zap, Code } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section style={{ backgroundColor: "#cdf80a" }} className="pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-black/50 block mb-3">
              Get In Touch
            </span>
            <h2 className="section-heading text-black">
              Ready to Build the Future<br />of Charging?
            </h2>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <MotionWrapper delay={0.1}>
            <div className="bg-white rounded-2xl p-8 md:p-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                <Zap className="w-5 h-5 text-[#cdf80a]" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-[#1b1b1b] mb-3">
                For EV Chargers
              </h3>
              <p className="para-text text-[#626262] mb-8">
                Whether you need an AC Powerpod for a residential complex, a DC fast charger for a retail location, or a high-power station for a highway corridor, tell us what you're building.
              </p>
              <Link
                href="/contact?type=ev-charging"
                className="mt-auto inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors self-start group"
              >
                Enquire About Chargers
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="bg-white rounded-2xl p-8 md:p-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                <Code className="w-5 h-5 text-[#cdf80a]" />
              </div>
              <h3 className="text-xl md:text-2xl font-normal text-[#1b1b1b] mb-3">
                For Technology
              </h3>
              <p className="para-text text-[#626262] mb-8">
                From CPMS platforms and mobile apps to embedded firmware and energy management, talk to our engineers about what you need built.
              </p>
              <Link
                href="/contact?type=technology"
                className="mt-auto inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors self-start group"
              >
                Discuss Technology
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
