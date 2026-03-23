"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";
import type { CaseStudy } from "../data/caseStudiesData";

const categories = ["All", "EV Charging", "Energy Management"];

export default function CaseStudyGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.tag === activeCategory);

  return (
    <section className="w-full bg-white pt-30 pb-32 md:pb-[12.3rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* ---------------- CATEGORY FILTERS ---------------- */}
        <MotionWrapper>
          <div className="flex flex-wrap gap-4 md:gap-4 mb-20">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-3 md:px-[1.1rem] py-2.5 rounded-full text-[12px] md:text-[14px] font-inter transition
                    ${isActive ? "bg-[#1b1b1b] text-white" : "bg-[#eeeeee] text-[#1b1b1b]"}
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </MotionWrapper>

        {/* ---------------- MOBILE HORIZONTAL SCROLL ---------------- */}
        <MotionWrapper>
          <div className="sm:hidden flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {filtered.map((cs) => (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="w-[93%] shrink-0 group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="w-full h-[270px] relative overflow-hidden rounded-lg">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* TAG */}
                <div className="mt-5">
                  <span className="px-4 py-2 bg-[#eeeeee] rounded-full text-[12px] text-[#1b1b1b] font-inter">
                    {cs.tag}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-[20px] text-[#1b1b1b] font-inter font-medium leading-[1.4]">
                  {cs.title}
                </h3>

                {/* SUMMARY */}
                <p className="mt-2 text-[14px] text-[#626262] font-inter leading-[1.6] line-clamp-3">
                  {cs.summary}
                </p>

                {/* CTA */}
                <span className="inline-block mt-4 text-[14px] font-inter font-medium text-[#1b1b1b] group-hover:text-[#cdf80a] transition-colors">
                  Read Case Study &rarr;
                </span>
              </Link>
            ))}
          </div>
        </MotionWrapper>

        {/* ---------------- DESKTOP / TABLET GRID ---------------- */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[4.8rem]">
          {filtered.map((cs) => (
            <Link
              key={cs.id}
              href={`/case-studies/${cs.slug}`}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <MotionWrapper>
                <div className="w-full h-[270px] md:h-[300px] xl:h-[400px] relative overflow-hidden rounded-lg">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </MotionWrapper>

              {/* TAG */}
              <MotionWrapper>
                <div className="mt-5">
                  <span className="px-4 py-2 bg-[#eeeeee] rounded-full text-[12px] md:text-[14px] text-[#1b1b1b] font-inter">
                    {cs.tag}
                  </span>
                </div>
              </MotionWrapper>

              {/* TITLE */}
              <MotionWrapper>
                <h3 className="mt-4 text-[20px] md:text-[22px] text-[#1b1b1b] font-inter font-medium leading-[1.4]">
                  {cs.title}
                </h3>
              </MotionWrapper>

              {/* SUMMARY */}
              <MotionWrapper>
                <p className="mt-2 text-[14px] md:text-[15px] text-[#626262] font-inter leading-[1.6] line-clamp-3">
                  {cs.summary}
                </p>
              </MotionWrapper>

              {/* CTA */}
              <MotionWrapper>
                <span className="inline-block mt-4 text-[14px] md:text-[15px] font-inter font-medium text-[#1b1b1b] group-hover:text-[#cdf80a] transition-colors">
                  Read Case Study &rarr;
                </span>
              </MotionWrapper>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
