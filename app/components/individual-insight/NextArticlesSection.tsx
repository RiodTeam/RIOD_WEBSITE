"use client";

import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";
import { InsightType } from "../data/insightsData";



export default function NextArticlesSection({ articles }: { articles: InsightType[] }) {

  return (
    <section className="w-full bg-white py-20 md:pt-28 md:pb-[12.3rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* HEADING */}
        <MotionWrapper>
          <h2 className="section-heading font-inter text-[#222222] mb-14">
            Read Our Next Article
          </h2>
        </MotionWrapper>

        {/* ---------- MOBILE SCROLL ---------- */}
        <div className="
          grid grid-flow-col auto-cols-[93%] 
          gap-4 overflow-x-auto pb-4 
          sm:hidden scrollbar-hide snap-x snap-mandatory
        ">
          {articles.map((item) => (
            <Link key={item.id} href={`/insights/${item.slug}`} className="snap-start">
              <div className="flex flex-col">

                {/* IMAGE */}
                <div className="relative w-full h-[260px] overflow-hidden group">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 ease-out
            group-hover:scale-110" />
                </div>

                {/* META */}
                <div className="flex items-center justify-between mt-5">
                  <span className="inline-block bg-[#eeeeee] text-[#222] text-[14px] px-4.5 py-2 rounded-full font-inter">
                    {item.tag}
                  </span>
                  <span className="text-[14px] text-[#717171] font-inter">
                    {item.date}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="regular-heading text-[#404040] font-inter mt-5 leading-[1.3]! cursor-pointer">
                  {item.title}
                </h3>

              </div>
            </Link>
          ))}
        </div>

        {/* ---------- DESKTOP GRID ---------- */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <MotionWrapper key={item.id}>
              <Link href={`/insights/${item.slug}`}>
                <div className="flex flex-col">

                  <div className="relative w-full h-[260px] sm:h-[280px] md:h-[420px] xl:h-[530px] overflow-hidden group">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 ease-out
            group-hover:scale-110" />
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <span className="inline-block bg-[#eeeeee] text-[#222] text-[14px] px-4.5 py-2 rounded-full font-inter">
                      {item.tag}
                    </span>
                    <span className="text-[14px] text-[#717171] font-inter">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="regular-heading text-[#404040] font-inter mt-3 leading-normal cursor-pointer">
                    {item.title}
                  </h3>

                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
