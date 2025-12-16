"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";
import { InsightType } from "../data/insightsData";


export default function BlogDetailSection({ data }: { data: InsightType }) {
  return (
    <section className="w-full bg-white pt-40 pb-8 md:pt-52 md:pb-10">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* CATEGORY BADGE */}
        <MotionWrapper>
          <span className="inline-block bg-[#eeeeee] text-[#222] px-4.5 py-2.5 rounded-full text-[16px] font-inter">
            {data.tag}
          </span>
        </MotionWrapper>

        {/* DATE */}
        <MotionWrapper>
          <p className="text-[#717171] mt-[1.1rem] text-[16px] font-inter">
            {data.date}
          </p>
        </MotionWrapper>

        {/* TITLE */}
        <MotionWrapper>
          <h1 className="font-inter text-[#222222] mt-6 section-heading leading-[1.3]">
            {data.title}
          </h1>
        </MotionWrapper>

        {/* INTRO */}
        {data.intro.map((para, i) => (
          <MotionWrapper key={i}>
            <p className="mt-8 normal-text text-[#9a99a2] font-inter leading-[1.7]">
              {para}
            </p>
          </MotionWrapper>
        ))}

        {/* MAIN IMAGE */}
        <MotionWrapper>
          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] xl:h-[650px] mt-12">
            <Image src={data.image} alt={data.title} fill className="object-cover" />
          </div>
        </MotionWrapper>

        {/* SECTIONS */}
        {data.sections.map((sec, i) => (
          <div key={i} className="mt-20">

            {/* HEADING */}
            <MotionWrapper>
              <h2 className="text-[32px] font-inter text-[#161616]">
                {sec.heading}
              </h2>
            </MotionWrapper>

            {/* PARAGRAPHS */}
            {sec.paragraphs?.map((para, idx) => (
              <MotionWrapper key={idx}>
                <p className="mt-4 para-text text-[#7b7b7b] font-inter leading-[1.7]">
                  {para}
                </p>
              </MotionWrapper>
            ))}

            {/* POINTS */}
            {sec.points && (
              <MotionWrapper>
                <ul className="mt-6 space-y-3 list-disc pl-6 text-[#7b7b7b] font-inter">
                  {sec.points.map((point, idx) => (
                    <li key={idx} className="para-text leading-[1.7]">
                      {point}
                    </li>
                  ))}
                </ul>
              </MotionWrapper>
            )}

          </div>
        ))}


      </div>
    </section>
  );
}
