"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

export default function CompatibleSection() {
    const brands = [
        { logo: "/home/logo1.svg", alt: "Panasonic" },
        { logo: "/home/logo2.svg", alt: "GEICO" },
        { logo: "/home/logo3.svg", alt: "SeatGeek" },
        { logo: "/home/logo4.svg", alt: "Marriott" },
    ];

    // Duplicate list for smooth infinite loop
    const loopBrands = [...brands, ...brands];

    return (
        <section className="w-full bg-white pt-24 pb-20  md:pt-[8.7rem]  lg:pb-56 overflow-hidden">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* TEXT SECTION */}
                <div className="max-w-[860px]">
                    <MotionWrapper>
                        <h2 className="section-heading leading-normal! mt-3 md:mt-10 font-inter  text-[#222222]">
                            Compatible with all plug-in electric vehicles.
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper>
                        <p className="normal-text text-[#9a99a2] mt-6 font-inter leading-[1.8]!">
                            RNDSquare is your end-to-end R&D partner, transforming bold ideas into
                            market-ready innovations. We combine cutting-edge engineering, IoT solutions,
                            and software expertise to design, build, and scale products that drive
                            real-world impact.
                        </p>
                    </MotionWrapper>
                </div>

               <div className="mt-8 relative overflow-hidden">
  <div className="flex w-max animate-logo-scroll whitespace-nowrap">

    {[...loopBrands, ...loopBrands].map((brand, index) => (
      <div
        key={index}
        className="
          flex items-center justify-center
          min-w-[140px] mx-0
          sm:min-w-[180px] sm:mx-8
          md:min-w-[220px] md:mx-12
          lg:min-w-[300px] lg:mx-16
        "
      >
       <Image
  src={brand.logo}
  alt={brand.alt}
  width={300}
  height={300}
  className="
    object-contain opacity-90 transition
    w-[180px] sm:w-[120px] md:w-[200px] lg:w-[300px]
    h-auto
  "
/>

      </div>
    ))}

  </div>
</div>

            </div>
        </section>
    );
}
