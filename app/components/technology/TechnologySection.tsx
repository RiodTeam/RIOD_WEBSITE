"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";
import { type TechnologySection as TechnologySectionType } from "@/app/data/technologies";

interface Props {
  section: TechnologySectionType;
  index: number;
  sectionNumber: string;
}

export default function TechnologySection({
  section,
  index,
  sectionNumber,
}: Props) {
  const isReversed = index % 2 !== 0;

  return (
    <section
      className={`py-16 md:py-[5.5rem] ${
        index % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"
      }`}
    >
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center ${
            isReversed ? "direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <MotionWrapper
            delay={0.1}
            className={isReversed ? "lg:order-2" : ""}
          >
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] rounded-xl overflow-hidden bg-[#e8e8e8]">
              <Image
                src={section.image}
                alt={section.heading}
                fill
                className="object-cover"
              />
            </div>
          </MotionWrapper>

          {/* Text Content */}
          <MotionWrapper
            delay={0.25}
            className={isReversed ? "lg:order-1" : ""}
          >
            <div>
              {/* Section number */}
              <span className="text-sm font-medium text-[#cdf80a] font-inter block mb-4"
                style={{ color: "#9a99a2" }}
              >
                {sectionNumber}
              </span>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-normal text-black font-inter leading-tight mb-4">
                {section.heading}
              </h2>

              {/* Description */}
              <p className="para-text text-[#626262] mb-6 leading-relaxed">
                {section.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-3">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cdf80a] mt-2 shrink-0" />
                    <span className="para-text2 text-[#626262] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
