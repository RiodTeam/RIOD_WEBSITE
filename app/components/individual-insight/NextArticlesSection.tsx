"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

export default function NextArticlesSection() {
    const articles = [
        {
            id: 1,
            image: "/home/hero.webp",
            category: "EV Charging",
            date: "March 20, 2025",
            title: "Driving the Future of EV Charging in Numbers",
        },
        {
            id: 2,
            image: "/home/hero.webp",
            category: "EV Charging",
            date: "March 20, 2025",
            title: "Driving the Future of EV Charging in Numbers",
        },
        {
            id: 3,
            image: "/home/hero.webp",
            category: "Sustainability",
            date: "March 20, 2025",
            title: "Driving the Future of EV Charging in Numbers",
        },
    ];

    return (
        <section className="w-full bg-white py-20 md:pt-28 md:pb-[12.3rem]">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* HEADING */}
                <MotionWrapper>
                    <h2 className="section-heading font-inter text-[#222222] mb-14">
                        Read Our Next Article
                    </h2>
                </MotionWrapper>

                {/* GRID */}
                <div>

                    {/* MOBILE → HORIZONTAL SCROLL */}
                    <div
                        className="
      grid grid-flow-col 
      auto-cols-[90%] 
      gap-6 
      overflow-x-auto 
      pb-4 
      sm:hidden 
      scrollbar-hide 
      snap-x snap-mandatory
    "
                    >
                        {articles.map((item) => (
                            <div key={item.id} className="snap-start">
                                <div className="flex flex-col">

                                    {/* IMAGE */}
                                    <div className="relative w-full h-[260px] overflow-hidden">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>

                                    {/* META */}
                                    <div className="flex items-center justify-between mt-5">
                                        <span className="inline-block bg-[#eeeeee] text-[#222] text-[14px] px-4.5 py-2 rounded-full font-inter">
                                            {item.category}
                                        </span>
                                        <span className="text-[14px] text-[#717171] font-inter">{item.date}</span>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="regular-heading text-[#404040] font-inter mt-5 leading-normal! cursor-pointer">
                                        {item.title}
                                    </h3>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP GRID (unchanged) */}
                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((item) => (
                            <MotionWrapper key={item.id}>
                                <div className="flex flex-col">

                                    <div className="relative w-full h-[260px] sm:h-[280px] md:h-[420px] xl:h-[530px] overflow-hidden">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>

                                    <div className="flex items-center justify-between mt-5">
                                        <span className="inline-block bg-[#eeeeee] text-[#222] text-[14px] px-4.5 py-2 rounded-full font-inter">
                                            {item.category}
                                        </span>
                                        <span className="text-[14px] text-[#717171] font-inter">
                                            {item.date}
                                        </span>
                                    </div>

                                    <h3 className="regular-heading text-[#404040]! font-inter mt-3 leading-normal! cursor-pointer">
                                        {item.title}
                                    </h3>

                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
