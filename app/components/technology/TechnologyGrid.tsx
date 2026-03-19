"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
            Every technology on this page is built in-house: hardware, firmware, cloud, and software, deployed in real charging installations across India.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <MotionWrapper key={tech.slug} delay={index * 0.06}>
              {tech.upcoming ? (
                <div className="block h-full cursor-default">
                  <div className="relative bg-[#f4f4f4] rounded-xl p-7 md:p-8 h-full flex flex-col min-h-[260px] border border-[#e8e8e8]">
                    {/* Upcoming badge */}
                    <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#e0e0e0] text-[#888]">
                      Upcoming
                    </span>

                    {/* Icon — grayed */}
                    <div className="w-12 h-12 rounded-full bg-[#e0e0e0] flex items-center justify-center mb-5">
                      <tech.icon className="w-5 h-5 text-[#aaa]" />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-medium text-[#aaa] mb-2 font-inter">
                      {tech.name}
                    </h3>

                    {/* Tagline */}
                    <p className="para-text2 text-[#bbb] mt-auto leading-relaxed">
                      {tech.tagline}
                    </p>
                  </div>
                </div>
              ) : (
                <Link href={`/technology/${tech.slug}`} className="block h-full">
                  <div className="relative bg-[#f8f8f8] rounded-xl p-7 md:p-8 h-full flex flex-col min-h-[260px] group hover:bg-[#f0f0f0] transition-colors border border-transparent hover:border-[#e0e0e0]">
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
              )}
            </MotionWrapper>
          ))}

          {/* RnD Square — Custom Engineering Tile */}
          <MotionWrapper delay={technologies.length * 0.06}>
            <a
              href="https://rndsquare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="relative rounded-xl overflow-hidden h-full min-h-[260px] group cursor-pointer">
                {/* Background image */}
                <Image
                  src="/technology/tech-hero.webp"
                  alt="RnD Square Custom Engineering"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: "#cdf80a" }} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "#cdf80a" }}>
                    Service Division
                  </span>
                  <h3 className="text-lg font-medium text-white mb-2 font-inter leading-snug">
                    Looking for Custom Engineering?
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    Explore RnD Square, our product engineering division for bespoke hardware, firmware, and software development.
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-[#cdf80a] transition-colors">
                    Visit RnD Square
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
