"use client";

import Link from "next/link";
import { ArrowRight, Globe, Zap, Building2 } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const milestones = [
  {
    icon: Zap,
    title: "Develop Technology IPs for Growing EV & Energy Needs",
    description:
      "Building proprietary technology across charging hardware, energy management, and grid intelligence. Every product we ship creates IP that compounds over time.",
  },
  {
    icon: Globe,
    title: "Take Indian Engineering Global",
    description:
      "Expanding into Europe, Middle East, and Asia-Pacific. The infrastructure we have built for Indian conditions is designed to work everywhere.",
  },
  {
    icon: Building2,
    title: "Shape the Energy Transition",
    description:
      "EV charging is just the starting point. We are building the technology layer that connects vehicles, buildings, and the grid into one intelligent energy network.",
  },
];

export default function FutureSection() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <MotionWrapper className="lg:col-span-5">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40 font-inter mb-3">
              What Comes Next
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-white font-inter leading-tight mb-4">
              The Road Ahead
            </h2>
            <p className="para-text text-[#9a99a2] leading-relaxed mb-8">
              The shift to electric mobility and distributed energy is
              accelerating. RIOD is building the technology and infrastructure
              that makes this transition practical, scalable, and lasting.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#cdf80a] text-[#1b1b1b] px-6 py-3 rounded-full font-inter font-medium text-sm hover:bg-[#b8e000] transition-colors"
              >
                Talk to Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-inter font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Join the Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionWrapper>

          {/* Right - Milestones */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <MotionWrapper key={milestone.title} delay={index * 0.1}>
                    <div className="flex gap-5 p-6 md:p-7 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-[#cdf80a] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1b1b1b]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white font-inter mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-[#9a99a2] leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
