"use client";

import { Users, Lightbulb, Rocket, Heart } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const values = [
  {
    icon: Lightbulb,
    title: "Ownership Over Hierarchy",
    description:
      "Engineers own their projects end to end. From concept to production, the person who designed it sees it through. No handoffs. No silos.",
  },
  {
    icon: Rocket,
    title: "Ship, Then Iterate",
    description:
      "We move fast and put real products in real environments. Feedback from the field drives the next version, not a committee.",
  },
  {
    icon: Users,
    title: "Small Teams, Big Impact",
    description:
      "Lean teams that move quickly. Everyone contributes across hardware, firmware, and software. Generalists who go deep when it matters.",
  },
  {
    icon: Heart,
    title: "Engineering First",
    description:
      "We are engineers building for engineers. Technical excellence is the foundation, not the afterthought. Every decision starts with the engineering trade-off.",
  },
];

export default function LifeAtRiod() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <MotionWrapper className="lg:col-span-5">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
              Culture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
              Life at RIOD
            </h2>
            <p className="para-text text-[#626262] leading-relaxed">
              We are a team of engineers, designers, and builders working out of
              Infopark, Thrissur. The work is challenging, the problems are real,
              and the products ship to customers across India and four other
              countries. No corporate theatre. Just engineering that matters.
            </p>
          </MotionWrapper>

          {/* Right - Values grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <MotionWrapper key={value.title} delay={index * 0.1}>
                    <div className="bg-white rounded-xl p-6 md:p-7 h-full">
                      <div className="w-10 h-10 rounded-lg bg-[#cdf80a] flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#1b1b1b]" />
                      </div>
                      <h3 className="text-base font-medium text-[#1b1b1b] font-inter mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[#626262] leading-relaxed">
                        {value.description}
                      </p>
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
