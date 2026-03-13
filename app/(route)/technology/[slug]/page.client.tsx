"use client";

import { ReactLenis } from "lenis/react";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import TechnologySectionComponent from "@/app/components/technology/TechnologySection";
import { type TechnologySection } from "@/app/data/technologies";

interface Props {
  name: string;
  tagline: string;
  sections: TechnologySection[];
}

export default function TechnologyDetailClient({
  name,
  tagline,
  sections,
}: Props) {
  return (
    <ReactLenis root>
      <main>
        {/* Inline title (no hero image) */}
        <section className="bg-white pt-32 md:pt-40 pb-16 md:pb-[5.5rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-3">
                {name}
              </h1>
              <p className="para-text text-[#626262] max-w-xl">
                {tagline}
              </p>
            </MotionWrapper>
          </div>
        </section>

        {sections.map((section, index) => (
          <TechnologySectionComponent
            key={index}
            section={section}
            index={index}
            sectionNumber={`0${index + 1}`}
          />
        ))}
      </main>
    </ReactLenis>
  );
}
