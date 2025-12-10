"use client";

import { useState } from "react";
import Image from "next/image";

export default function HowWeHelpHotels() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      title: "Turnkey installation with minimal property disruption",
      desc: `RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. 
             We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale 
             products that drive real-world impact.`,
      image: "/home/hero.webp",
    },
    {
      title: "Revenue-sharing or hotel-owned model",
      desc: `We combine engineering, IoT, and software expertise to scale impactful products.`,
      image: "/home/hero.webp",
    },
    {
      title: "Smart load balancing for hotel power infrastructure",
      desc: `Balance load across hotel EV charging systems while ensuring safety and performance.`,
      image: "/home/hero.webp",
    },
    {
      title: "Guest-friendly, branded charging experience",
      desc: `Deliver a seamless charging experience aligned with hotel branding.`,
      image: "/home/hero.webp",
    },
    {
      title: "Integration with hotel apps / billing systems",
      desc: `Integrate charging systems with PMS, apps, and automated billing.`,
      image: "/home/hero.webp",
    },
  ];

  return (
    <section className="w-full bg-[#1e1e1e] text-white py-[5rem] md:py-[7rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* TITLE */}
        <h2 className="section-heading leading-normal! font-inter">
          How We Help Hotels
        </h2>

        {/* INTRO */}
        <p className="normal-text font-inter font-normal tracking-[0.3px] mt-8 leading-[1.7]! text-[#9a99a2]">
          RNDSquare is your end-to-end R&D partner, transforming bold ideas into
          market-ready innovations.
        </p>

        {/* ACCORDION */}
        <div className="mt-[4rem] space-y-10">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                
                <button
                  onClick={() => setOpenIndex(index)}
                  className="w-[50%] text-left text-[20px] md:text-[24px] font-inter text-[#e5e5e5]"
                >
                  {item.title}
                </button>

                {isOpen && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* LEFT SIDE — TITLE + DESCRIPTION */}
                    <div>
                      <p className="text-[#9a99a2] normal-text font-inter leading-[1.7] mt-4">
                        {item.desc}
                      </p>
                    </div>

                    {/* RIGHT SIDE — IMAGE */}
                    <div className="relative w-full h-[230px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
                      <Image
                        src={item.image}
                        alt="Feature image"
                        fill
                        className="object-cover"
                      />
                    </div>

                  </div>
                )}

                <div className="w-full border-b border-[#4a4a4a] mt-6"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
