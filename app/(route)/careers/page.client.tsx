"use client";

import React from "react";
import ReactLenis from "lenis/react";
import Link from "next/link";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import {
  Cpu,
  Cloud,
  Zap,
  Users,
  Rocket,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "Full-Stack Engineering",
    description:
      "Work across hardware, firmware, cloud, and mobile — building every layer of the EV charging stack in-house.",
  },
  {
    icon: Zap,
    title: "Real Impact",
    description:
      "Your work powers thousands of EV chargers across India, directly accelerating the shift to sustainable mobility.",
  },
  {
    icon: Cloud,
    title: "Cutting-Edge Tech",
    description:
      "From OCPP protocols and energy management to IoT and cloud platforms — tackle challenging engineering problems daily.",
  },
  {
    icon: Rocket,
    title: "Growth & Ownership",
    description:
      "Take ownership of projects early. We value initiative and give you the space to grow with the company.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "A tight-knit team of engineers, designers, and operators working together to solve hard problems.",
  },
  {
    icon: Globe,
    title: "Built for India",
    description:
      "We design for Indian conditions — heat, dust, voltage fluctuations, and the unique demands of Indian infrastructure.",
  },
];

const openings = [
  {
    title: "Embedded Firmware Engineer",
    team: "Hardware & Firmware",
    location: "Kochi, Kerala",
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    team: "Cloud & Platform",
    location: "Kochi, Kerala",
    type: "Full-time",
  },
  {
    title: "Hardware Design Engineer",
    team: "Hardware & Firmware",
    location: "Kochi, Kerala",
    type: "Full-time",
  },
  {
    title: "Mobile App Developer (React Native)",
    team: "Cloud & Platform",
    location: "Kochi, Kerala / Remote",
    type: "Full-time",
  },
  {
    title: "Business Development Executive",
    team: "Sales & Partnerships",
    location: "Kochi, Kerala",
    type: "Full-time",
  },
];

export default function PageClient() {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="w-full bg-[#1C1C1C] text-white pt-36 md:pt-48 pb-20 md:pb-28">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-[#cdf80a] text-sm font-inter tracking-wider uppercase mb-4">
                Careers
              </p>
              <h1 className="hero-title text-white max-w-[700px]">
                Build the Future of EV Charging
              </h1>
              <p className="hero-desc text-white/70 mt-6 max-w-[600px]">
                Join a team of engineers, designers, and innovators building
                India&apos;s most advanced EV charging infrastructure — from hardware
                to cloud.
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* Why Join RIOD */}
        <section className="w-full bg-white pt-20 md:pt-[7.5rem] pb-20 md:pb-[7.5rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <h2 className="section-heading text-black mb-4">Why Join RIOD</h2>
              <p className="para-text text-[#9a99a2] max-w-[600px] mb-16 md:mb-20">
                We&apos;re not just installing chargers — we&apos;re engineering
                every layer of the EV charging ecosystem. Here&apos;s what makes
                working at RIOD different.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {values.map((item) => (
                <MotionWrapper key={item.title}>
                  <div className="group">
                    <item.icon
                      className="w-8 h-8 mb-5 text-[#1C1C1C] group-hover:text-[#cdf80a] transition-colors"
                      strokeWidth={1.2}
                    />
                    <h3 className="text-lg font-inter font-semibold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="para-text2 text-[#9a99a2] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full bg-[#f7f7f7] pt-20 md:pt-[7.5rem] pb-20 md:pb-[7.5rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <h2 className="section-heading text-black mb-4">Open Positions</h2>
              <p className="para-text text-[#9a99a2] max-w-[600px] mb-16 md:mb-20">
                We&apos;re always looking for passionate people. If you don&apos;t
                see a role that fits, reach out anyway — we&apos;d love to hear from
                you.
              </p>
            </MotionWrapper>

            <div className="flex flex-col gap-4">
              {openings.map((role) => (
                <MotionWrapper key={role.title}>
                  <div className="bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="text-lg font-inter font-semibold text-black">
                        {role.title}
                      </h3>
                      <p className="para-text2 text-[#9a99a2] mt-1">
                        {role.team} &middot; {role.location} &middot; {role.type}
                      </p>
                    </div>
                    <a
                      href={`mailto:join@riodlogic.com?subject=Application: ${role.title}`}
                      className="shrink-0 inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-6 py-3 text-sm font-inter font-medium hover:bg-black transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-[#1C1C1C] text-white pt-20 md:pt-[7.5rem] pb-20 md:pb-[7.5rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto text-center">
            <MotionWrapper>
              <h2 className="section-heading text-white mb-6">
                Don&apos;t See Your Role?
              </h2>
              <p className="para-text text-white/60 max-w-[500px] mx-auto mb-10">
                Send us your resume and tell us what excites you about EV
                charging technology. We&apos;re always open to exceptional talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:join@riodlogic.com"
                  className="inline-flex items-center justify-center gap-2 bg-[#cdf80a] text-black px-8 py-4 text-sm font-inter font-semibold hover:bg-[#b8e000] transition-colors"
                >
                  Send Your Resume
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-inter font-medium hover:border-white/60 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
