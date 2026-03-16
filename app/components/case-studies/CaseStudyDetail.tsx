"use client";

import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";
import { CaseStudy } from "../data/caseStudiesData";

export default function CaseStudyDetail({ data }: { data: CaseStudy }) {
  return (
    <section className="w-full bg-white pt-40 pb-20 md:pt-52 md:pb-28">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* BACK LINK */}
        <MotionWrapper>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[14px] md:text-[15px] text-[#626262] font-inter hover:text-[#1b1b1b] transition-colors"
          >
            &larr; Back to Case Studies
          </Link>
        </MotionWrapper>

        {/* TAG */}
        <MotionWrapper>
          <span className="inline-block mt-8 bg-[#eeeeee] text-[#1b1b1b] px-4.5 py-2.5 rounded-full text-[14px] md:text-[16px] font-inter">
            {data.tag}
          </span>
        </MotionWrapper>

        {/* TITLE */}
        <MotionWrapper>
          <h1 className="font-inter text-[#1b1b1b] mt-6 section-heading leading-[1.3]">
            {data.title}
          </h1>
        </MotionWrapper>

        {/* SUMMARY */}
        <MotionWrapper>
          <p className="mt-6 text-[16px] md:text-[18px] text-[#626262] font-inter leading-[1.7] max-w-4xl">
            {data.summary}
          </p>
        </MotionWrapper>

        {/* CLIENT INFO BAR */}
        <MotionWrapper>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-b border-[#e8e8e8] py-8">
            <div>
              <p className="text-[12px] md:text-[13px] text-[#626262] font-inter uppercase tracking-wider mb-1">
                Industry
              </p>
              <p className="text-[15px] md:text-[16px] text-[#1b1b1b] font-inter font-medium">
                {data.industry}
              </p>
            </div>
            <div>
              <p className="text-[12px] md:text-[13px] text-[#626262] font-inter uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-[15px] md:text-[16px] text-[#1b1b1b] font-inter font-medium">
                {data.location}
              </p>
            </div>
            <div>
              <p className="text-[12px] md:text-[13px] text-[#626262] font-inter uppercase tracking-wider mb-1">
                Client
              </p>
              <p className="text-[15px] md:text-[16px] text-[#1b1b1b] font-inter font-medium">
                {data.client}
              </p>
            </div>
          </div>
        </MotionWrapper>

        {/* THE CHALLENGE */}
        <div className="mt-16 md:mt-20">
          <MotionWrapper>
            <h2 className="text-[28px] md:text-[32px] font-inter text-[#1b1b1b] font-medium">
              The Challenge
            </h2>
          </MotionWrapper>
          {data.challenge.map((para, i) => (
            <MotionWrapper key={i}>
              <p className="mt-5 text-[15px] md:text-[16px] text-[#626262] font-inter leading-[1.7]">
                {para}
              </p>
            </MotionWrapper>
          ))}
        </div>

        {/* OUR SOLUTION */}
        <div className="mt-16 md:mt-20">
          <MotionWrapper>
            <h2 className="text-[28px] md:text-[32px] font-inter text-[#1b1b1b] font-medium">
              Our Solution
            </h2>
          </MotionWrapper>
          {data.solution.map((para, i) => (
            <MotionWrapper key={i}>
              <p className="mt-5 text-[15px] md:text-[16px] text-[#626262] font-inter leading-[1.7]">
                {para}
              </p>
            </MotionWrapper>
          ))}
        </div>

        {/* RESULTS */}
        <div className="mt-16 md:mt-20">
          <MotionWrapper>
            <h2 className="text-[28px] md:text-[32px] font-inter text-[#1b1b1b] font-medium mb-10">
              Results
            </h2>
          </MotionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.results.map((result, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <div className="bg-[#1b1b1b] rounded-lg p-8 text-center">
                  <p className="text-[36px] md:text-[44px] font-inter font-bold text-[#cdf80a] leading-tight">
                    {result.value}
                  </p>
                  <p className="mt-3 text-[14px] md:text-[15px] font-inter text-white/80">
                    {result.metric}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* TECHNOLOGIES USED */}
        <div className="mt-16 md:mt-20">
          <MotionWrapper>
            <h2 className="text-[28px] md:text-[32px] font-inter text-[#1b1b1b] font-medium mb-6">
              Technologies Used
            </h2>
          </MotionWrapper>
          <MotionWrapper>
            <div className="flex flex-wrap gap-3">
              {data.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2.5 bg-[#eeeeee] rounded-full text-[13px] md:text-[14px] text-[#1b1b1b] font-inter"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionWrapper>
        </div>

        {/* TESTIMONIAL */}
        {data.testimonial && (
          <div className="mt-16 md:mt-20">
            <MotionWrapper>
              <div className="bg-[#f8f8f8] border-l-4 border-[#cdf80a] rounded-r-lg p-8 md:p-12">
                <p className="text-[18px] md:text-[22px] text-[#1b1b1b] font-inter leading-[1.6] italic">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-[15px] md:text-[16px] text-[#1b1b1b] font-inter font-medium">
                    {data.testimonial.author}
                  </p>
                  <p className="text-[13px] md:text-[14px] text-[#626262] font-inter mt-1">
                    {data.testimonial.role}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        )}

        {/* CTA */}
        <MotionWrapper>
          <div className="mt-20 md:mt-28 bg-[#1b1b1b] rounded-lg p-10 md:p-16 text-center">
            <h3 className="text-[24px] md:text-[32px] font-inter text-white font-medium">
              Have a similar challenge?
            </h3>
            <p className="mt-4 text-[15px] md:text-[16px] text-white/70 font-inter max-w-xl mx-auto leading-[1.6]">
              Let&apos;s talk about how RIOD can solve it. Our team has delivered results across industries and geographies.
            </p>
            <Link href="/contact">
              <button className="mt-8 px-8 py-4 bg-[#cdf80a] text-[#1b1b1b] rounded-full text-[14px] md:text-[15px] font-inter font-medium hover:bg-[#b8e000] transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
