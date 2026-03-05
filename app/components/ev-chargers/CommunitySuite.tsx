"use client";

import { Monitor, Users, Receipt, BarChart3 } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const features = [
  {
    icon: Monitor,
    title: "Charger Dashboard",
    description:
      "Monitor all chargers in real-time with live status, session history, and remote control capabilities.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Manage residents, assign charger access, set usage limits, and handle onboarding with ease.",
  },
  {
    icon: Receipt,
    title: "Automated Billing",
    description:
      "Generate bills per session or monthly, with support for split billing across apartments and common areas.",
  },
  {
    icon: BarChart3,
    title: "Energy Analytics",
    description:
      "Track energy consumption per charger, per user, and per time period with exportable reports.",
  },
];

export default function CommunitySuite() {
  return (
    <section className="bg-[#1b1b1b] text-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text Content */}
          <div>
            <MotionWrapper>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#cdf80a] block mb-3">
                Software
              </span>
              <h2 className="section-heading text-white mb-4">
                Community Charging Suite
              </h2>
              <p className="para-text text-[#9a99a2] mb-6 max-w-[500px]">
                Our free-to-use platform for managing community and residential
                EV charging networks. No setup fees, no hidden charges.
              </p>
            </MotionWrapper>

            {/* Pricing info */}
            <MotionWrapper delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="bg-[#252525] rounded-xl px-6 py-5 flex-1">
                  <span className="text-[#cdf80a] text-2xl font-light block mb-1">
                    Free
                  </span>
                  <p className="text-sm text-[#9a99a2]">
                    For non-app payments (QR code, RFID)
                  </p>
                </div>
                <div className="bg-[#252525] rounded-xl px-6 py-5 flex-1">
                  <span className="text-[#cdf80a] text-2xl font-light block mb-1">
                    10%
                  </span>
                  <p className="text-sm text-[#9a99a2]">
                    Platform fee for in-app payments
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <MotionWrapper key={feature.title} delay={0.15 + i * 0.08}>
                  <div className="bg-[#252525] rounded-xl p-5 h-full">
                    <feature.icon className="w-6 h-6 text-[#cdf80a] mb-3" />
                    <h3 className="text-base font-medium text-white mb-2 font-inter">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#9a99a2] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Right — Mockup Placeholder */}
          <MotionWrapper delay={0.2}>
            <div className="relative w-full h-[400px] md:h-[560px] bg-[#252525] rounded-xl flex items-center justify-center overflow-hidden lg:mt-8">
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-full bg-[#cdf80a]/10 flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-[#cdf80a]" />
                </div>
                <p className="text-[#9a99a2] text-sm">
                  Dashboard mockup placeholder
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
