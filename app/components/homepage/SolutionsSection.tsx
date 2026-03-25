"use client";

import MotionWrapper from "../common/MotionWrapper";
import {
  Cpu,
  Cloud,
  Smartphone,
  CircuitBoard,
  Factory,
  BarChart3,
} from "lucide-react";

const solutions = [
  {
    icon: Cpu,
    title: "Charging Station Hardware",
    description:
      "We design and engineer complete charging station hardware, covering power electronics, thermal management, and EMC compliance for global markets.",
    bullets: [
      "Power electronics & converter design",
      "Thermal management systems",
      "CE/UL certification support",
    ],
  },
  {
    icon: Cloud,
    title: "CPMS & Cloud Platform",
    description:
      "Our cloud-based charge point management system supports OCPP 1.6J and 2.0.1 with real-time analytics, multi-tenant architecture, and seamless scalability.",
    bullets: [
      "OCPP 1.6J & 2.0.1 compliant",
      "Real-time monitoring & analytics",
      "Multi-tenant SaaS architecture",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & User Applications",
    description:
      "We build intuitive mobile applications for charger discovery, payment integration, session tracking, and fleet management across iOS and Android.",
    bullets: [
      "Charger discovery & navigation",
      "Integrated payment gateway",
      "Session tracking & history",
    ],
  },
  {
    icon: CircuitBoard,
    title: "Firmware & Embedded Systems",
    description:
      "Our embedded engineering team develops RTOS-based firmware with OTA update capabilities, safety interlocks, and protocol compliance built in.",
    bullets: [
      "RTOS-based architecture",
      "Over-the-air updates",
      "Safety interlock systems",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing & Testing",
    description:
      "We support the full manufacturing lifecycle from ATE development and quality systems to production line setup and certification testing.",
    bullets: [
      "ATE development & integration",
      "Quality management systems",
      "Production line optimization",
    ],
  },
  {
    icon: BarChart3,
    title: "Energy Management",
    description:
      "Our energy management solutions enable intelligent load balancing and solar integration for optimized charging operations.",
    bullets: [
      "Dynamic load balancing",
      "Solar & renewable integration",
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
              Our Capabilities
            </span>
            <h2 className="section-heading text-[#1b1b1b]">
              Solutions for the EV<br />Charging Industry
            </h2>
            <p className="para-text text-[#626262] mt-4 max-w-[620px]">
              We bring full-stack engineering capabilities to every layer of the
              EV charging ecosystem, from silicon-level firmware to
              enterprise-grade cloud platforms.
            </p>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <MotionWrapper key={solution.title} delay={index * 0.08}>
              <div className="bg-[#fafafa] border border-[#eee] rounded-xl p-6 md:p-8 h-full flex flex-col hover:shadow-lg hover:border-[#ddd] transition-all group">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#cdf80a" }}
                >
                  <solution.icon className="w-5 h-5 text-black" />
                </div>

                <h3 className="text-lg font-medium text-[#1b1b1b] mb-3">
                  {solution.title}
                </h3>

                <p className="para-text2 text-[#626262] mb-5">
                  {solution.description}
                </p>

                <ul className="mt-auto space-y-2.5">
                  {solution.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-[#1b1b1b]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: "#cdf80a" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
