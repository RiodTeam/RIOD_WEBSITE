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
    title: "Full-Stack Engineering",
    description:
      "Hardware, firmware, connectivity, and cloud built by one team under one roof. When something needs fixing, we trace it end to end. No finger-pointing between vendors.",
  },
  {
    icon: Shield,
    title: "Built for Indian Conditions",
    description:
      "Voltage fluctuations between 180V and 265V. Humidity up to 95%. Temperatures from -30\u00B0C to 55\u00B0C. IP65 rated enclosures. All standard. All built in.",
  },
  {
    icon: Wifi,
    title: "OCPP Compliant",
    description:
      "Commercial models speak OCPP 1.6J out of the box. Connect to any standards-compliant central management system. No vendor lock-in.",
  },
  {
    icon: Gauge,
    title: "In-built Energy Metering",
    description:
      "Class 1 accuracy energy meter inside every unit. No external meter boxes. No additional cost. Precision measurement from day one.",
  },
  {
    icon: Zap,
    title: "Dual Connectivity",
    description:
      "Wi-Fi and 4G LTE with support for all major Indian carriers. SIM slot built in. No external routers needed. Always connected.",
  },
  {
    icon: Wrench,
    title: "Engineered, Not Assembled",
    description:
      "No outsourced modules. No white-labelled boards. Every component designed and tested in-house. This is what sets RIOD apart.",
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
