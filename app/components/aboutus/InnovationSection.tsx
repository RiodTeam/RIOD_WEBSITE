"use client";

import {
  Cpu,
  Shield,
  Wifi,
  Gauge,
  Zap,
  Wrench,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const pillars = [
  {
    icon: Cpu,
    title: "Own the Full Stack",
    description:
      "We design the hardware, write the firmware, build the cloud, and own the outcome. One team, one responsibility. No gaps between vendors.",
  },
  {
    icon: Shield,
    title: "Built for Real Conditions",
    description:
      "Our products are tested against the environments they actually operate in. Extreme heat, humidity, unstable power grids. If it works here, it works anywhere.",
  },
  {
    icon: Wifi,
    title: "Open Standards, No Lock-in",
    description:
      "We build on open protocols so our customers are never locked into a single vendor. Your infrastructure stays yours.",
  },
  {
    icon: Gauge,
    title: "Intelligence at the Edge",
    description:
      "Every device we ship thinks for itself. Real-time metering, predictive diagnostics, and autonomous decision-making built into the hardware.",
  },
  {
    icon: Zap,
    title: "Always Connected",
    description:
      "Connectivity is not an add-on. Every unit ships with multiple communication options so remote monitoring and management work from day one.",
  },
  {
    icon: Wrench,
    title: "Engineered, Not Assembled",
    description:
      "We do not rebrand other people's hardware. Every component is designed, tested, and manufactured under our roof. That is the difference.",
  },
];

export default function InnovationSection() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            Innovation That Drives Us
          </h2>
          <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
            Everything we build starts with a simple question: does this solve a
            real problem? From silicon to cloud, every decision is guided by
            engineering rigour, not market trends.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <MotionWrapper key={pillar.title} delay={index * 0.08}>
                <div className="border border-[#e8e8e8] rounded-xl p-7 md:p-8 h-full">
                  <div className="w-11 h-11 rounded-lg bg-[#1b1b1b] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#cdf80a]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="para-text2 text-[#626262] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
