"use client";

import MotionWrapper from "../common/MotionWrapper";
import Image from "next/image";

const logos = [
  { name: "Tata", src: "/logos/tata.svg" },
  { name: "Siemens", src: "/logos/siemens.svg" },
  { name: "Godrej", src: "/logos/godrej.png" },
  { name: "JSW", src: "/logos/jsw.png" },
  { name: "Asset Homes", src: "/logos/asset-homes.webp" },
  { name: "Sugam Homes", src: "/logos/sugam-homes.webp" },
  { name: "GOEC", src: "/logos/goec.svg" },
  { name: "Virgin Power", src: "/logos/virgin-power.png" },
  { name: "Electric Pe", src: "/logos/electric-pe.png" },
];

export default function TrustedBySection() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto mb-12 md:mb-16">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Our Customers
          </span>
          <h2 className="section-heading text-[#1b1b1b]">
            Trusted By
          </h2>
        </MotionWrapper>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-20 md:gap-28 animate-logo-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-[160px] md:w-[200px] h-[80px] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={80}
                className="object-contain max-h-[70px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
