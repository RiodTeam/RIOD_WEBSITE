"use client";

import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";
import { type Technology } from "@/app/data/technologies";

export default function TechnologyGrid({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Our Technology
          </span>
          <h2 className="section-heading text-black mb-4">
            Technology That Powers
            <br />
            the Charging Ecosystem
          </h2>
          <p className="para-text text-[#626262] max-w-[620px] mb-12 md:mb-16">
            From embedded firmware and power electronics to cloud platforms and
            AI-driven analytics, we build the full technology stack for EV
            charging infrastructure.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {technologies.map((tech, index) => (
            <MotionWrapper key={tech.slug} delay={index * 0.06}>
              <Link href={`/technology/${tech.slug}`} className="block h-full">
                <div className="relative bg-[#f8f8f8] rounded-xl p-6 md:p-7 h-full flex flex-col group hover:bg-[#f0f0f0] transition-colors border border-transparent hover:border-[#e0e0e0]">
                  {/* Upcoming badge */}
                  {tech.upcoming && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#cdf80a] text-black">
                      Upcoming
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#cdf80a] flex items-center justify-center mb-5">
                    <tech.icon className="w-5 h-5 text-black" />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-medium text-black mb-2 font-inter">
                    {tech.name}
                  </h3>

                  {/* Tagline */}
                  <p className="para-text2 text-[#626262] mt-auto leading-relaxed">
                    {tech.tagline}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
