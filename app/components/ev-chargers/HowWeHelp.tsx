"use client";

import { useState } from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

interface AccordionItem {
  title: string;
  desc: string;
  image: string;
}

interface Props {
  items: AccordionItem[];
  heading?: string;
  intro?: string;
}

export default function HotelAccordion({ items, heading, intro }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#1e1e1e] text-white py-20 md:py-26">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* HEADING */}
        {heading && (
          <MotionWrapper>
            <h2 className="section-heading leading-normal! font-inter">
              {heading}
            </h2>
          </MotionWrapper>
        )}

        {/* INTRO */}
        {intro && (
          <MotionWrapper>
            <p className="normal-text font-inter font-normal tracking-[0.3px] mt-6 md:mt-12 leading-[1.7]! text-[#9a99a2] md:w-[75%]">
              {intro}
            </p>
          </MotionWrapper>
        )}

        {/* ACCORDION */}
        <div className=" mt-20 md:mt-[8.3rem] space-y-[4.2rem]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <MotionWrapper key={index} className="border-b border-[#4a4a4a] pb-6">

                <div className="grid grid-cols-1 md:grid-cols-[68%_24%] lg:grid-cols-[70%_23%] xl:grid-cols-[75%_21%] gap-[3.3rem] items-start">

                  {/* CLICKABLE TITLE */}
                  <div onClick={() => setOpenIndex(index)} className="cursor-pointer">
                    <MotionWrapper>
                      <h3 className="regular-heading font-inter text-white! leading-normal!">
                        {item.title}
                      </h3>
                    </MotionWrapper>

                    {/* DESCRIPTION (show only when open) */}
                    <MotionWrapper>
                      {isOpen && (
                        <p className="text-[#9a99a2] normal-text font-inter leading-[1.7] mt-8">
                          {item.desc}
                        </p>
                      )}
                    </MotionWrapper>
                  </div>

                  {/* IMAGE (show only when open) */}
                  {isOpen && (
                    <MotionWrapper>
                      <div className="relative w-full h-[230px] sm:h-[280px] md:h-[300px] lg:h-[270px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </MotionWrapper>
                  )}

                </div>

              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
