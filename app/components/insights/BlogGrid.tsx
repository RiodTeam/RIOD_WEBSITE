"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";

const blogs = [
  { id: 1, img: "/home/hero.webp", tag: "EV Charging", date: "March 20, 2025", title: "Driving the Future of EV Charging in Numbers", slug: "driving-the-future-of-ev-charging-in-numbers" },
  { id: 2, img: "/home/hero.webp", tag: "EV Charging", date: "March 20, 2025", title: "Driving the Future of EV Charging in Numbers", slug: "driving-the-future-of-ev-charging-in-numbers" },
  { id: 3, img: "/home/hero.webp", tag: "Technology", date: "March 20, 2025", title: "Driving the Future of EV Charging in Numbers", slug: "driving-the-future-of-ev-charging-in-numbers" },
  { id: 4, img: "/home/hero.webp", tag: "EV Charging", date: "March 20, 2025", title: "Driving the Future of EV Charging in Numbers", slug: "driving-the-future-of-ev-charging-in-numbers" },
  { id: 5, img: "/home/hero.webp", tag: "EV Charging", date: "March 20, 2025", title: "Driving the Future of EV Charging in Numbers", slug: "driving-the-future-of-ev-charging-in-numbers" },
  { id: 6, img: "/home/hero.webp", tag: "Sustainability", date: "March 20, 2025", title: "Driving the Future of EV Charging in Numbers", slug: "driving-the-future-of-ev-charging-in-numbers" },
];

const categories = ["View All", "Sustainability", "EV Charging", "Technology"];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("View All");

  const filteredBlogs =
    activeCategory === "View All"
      ? blogs
      : blogs.filter((b) => b.tag === activeCategory);

  return (
    <section className="w-full bg-white pt-30 pb-32 md:pb-[12.3rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* ---------------- CATEGORY FILTERS ---------------- */}
        <MotionWrapper>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-20">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-3 md:px-[1.1rem] py-2.5 rounded-full text-[12px] md:text-[14px] transition
                    ${isActive ? "bg-black text-white" : "bg-[#eeeeee] text-black"}
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
          <div className="sm:hidden flex overflow-x-auto gap-5 pb-4 scrollbar-hide">

            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/insights/${blog.slug}`}
                className="w-[360px] shrink-0 group cursor-pointer"
              >
                {/* IMAGE */}
                <div className="w-full h-[270px] relative overflow-hidden">
                  <Image
                    src={blog.img}
                    alt="blog image"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* TAG + DATE */}
                <div className="flex justify-between mt-5 text-[12px] text-black font-inter">
                  <span className="px-4 py-2 bg-[#eeeeee] rounded-full">{blog.tag}</span>
                  <span className="text-[#717171] mt-2">{blog.date}</span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-[20px] text-[#404040] font-inter leading-[1.4]">
                  {blog.title}
                </h3>
              </Link>
            ))}

          </div>
        </MotionWrapper>

        {/* ---------------- DESKTOP / TABLET GRID ---------------- */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[4.8rem]">

          {filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/insights/${blog.slug}`}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <MotionWrapper>
                <div className="w-full h-[270px] md:h-[300px] xl:h-[530px] relative overflow-hidden">
                  <Image
                    src={blog.img}
                    alt="blog image"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              </MotionWrapper>

              {/* TAG + DATE */}
              <MotionWrapper>
                <div className="flex justify-between mt-5 text-[12px] md:text-[14px] text-black font-inter">
                  <span className="px-4 py-2 bg-[#eeeeee] rounded-full">{blog.tag}</span>
                  <span className="text-[#717171] mt-2">{blog.date}</span>
                </div>
              </MotionWrapper>

              {/* TITLE */}
              <MotionWrapper>
                <h3 className="mt-4 text-[20px] md:text-[24px] text-[#404040] font-inter leading-[1.4]">
                  {blog.title}
                </h3>
              </MotionWrapper>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
