"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

        {/* CTA */}
        <section style={{ backgroundColor: "#cdf80a" }} className="py-16 md:py-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="section-heading text-black">
                Want to know more?
              </h2>
              <p className="para-text text-black/60 mt-4 max-w-[520px]">
                Talk to our engineers about how this technology fits your deployment.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors shrink-0 group self-start md:self-auto"
            >
              Talk to Our Engineers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
