"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";
import Counter from "../common/Counter";

export default function EVNumbersSection() {
  return (
    <section className="relative w-full h-[800px] md:h-[700px] lg:h-[817px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/home/hero.webp"
        alt="EV Charging Background"
        fill
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 w-[90%] max-w-[1400px] mx-auto flex flex-col mt-[6.4rem]">

        {/* HEADING */}
        <MotionWrapper>
          <h2 className="text-white section-heading font-inter leading-[1.3] max-w-[700px]">
            Driving the Future of EV Charging in Numbers
          </h2>
        </MotionWrapper>

       
       {/* STATS ROW */}
<div
  className="
    grid 
    grid-cols-2   space-y-10 gap-10
    sm:flex sm:flex-wrap    
    md:gap-10 
    lg:gap-24 
    xl:gap-38
    mt-56 md:mt-78
  "
>


          {/* ITEM 1 */}
          <MotionWrapper>
            <div className="text-white">
              <h3 className="text-[30px] md:text-[40px] xl:text-[48px] md:font-medium font-inter">
                <Counter to={10} suffix="K+" />
              </h3>
              <p className="text-[16.8px] md:text-[22px] text-light! text-white/80! mt-1 font-inter">Products Sold</p>
            </div>
          </MotionWrapper>

          {/* ITEM 2 */}
          <MotionWrapper>
            <div className="text-white">
             <h3 className="text-[30px] md:text-[40px] xl:text-[48px] md:font-medium font-inter">
                <Counter to={4} suffix="+" />
              </h3>
              <p className="text-[16.8px] md:text-[22px] text-light! text-white/80! mt-1">Countries</p>
            </div>
          </MotionWrapper>

          {/* ITEM 3 */}
          <MotionWrapper>
            <div className="text-white">
            <h3 className="text-[30px] md:text-[40px] xl:text-[48px] md:font-medium font-inter">
                <Counter to={100} suffix="%" />
              </h3>
              <p className="text-[16.8px] md:text-[22px] text-light! text-white/80! mt-1">Inhouse Engineering</p>
            </div>
          </MotionWrapper>

          {/* ITEM 4 */}
          <MotionWrapper>
            <div className="text-white">
             <h3 className="text-[30px] md:text-[40px] xl:text-[48px] md:font-medium font-inter">
                <Counter to={250} suffix="+" />
              </h3>
              <p className="text-[16.8px] md:text-[22px] text-light! text-white/80! mt-1">Customers</p>
            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
