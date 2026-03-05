"use client";

import MotionWrapper from "../common/MotionWrapper";
import Image from "next/image";

const logos = [
  { name: "Tata Power", src: "/logos/tata-power.svg" },
  { name: "BPCL", src: "/logos/bpcl.svg" },
  { name: "HPCL", src: "/logos/hpcl.svg" },
  { name: "IOCL", src: "/logos/iocl.svg" },
  { name: "Adani", src: "/logos/adani.svg" },
  { name: "Ather Energy", src: "/logos/ather-energy.svg" },
  { name: "MG Motor", src: "/logos/mg-motor.svg" },
  { name: "Hyundai", src: "/logos/hyundai.svg" },
  { name: "ChargePoint", src: "/logos/chargepoint.svg" },
  { name: "Fortum", src: "/logos/fortum.svg" },
  { name: "Delta Electronics", src: "/logos/delta-electronics.svg" },
  { name: "ABB E-mobility", src: "/logos/abb.svg" },
  { name: "Siemens", src: "/logos/siemens.svg" },
  { name: "Schneider Electric", src: "/logos/schneider.svg" },
  { name: "Eaton", src: "/logos/eaton.svg" },
  { name: "Legrand", src: "/logos/legrand.svg" },
];

export default function TrustedBySection() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto mb-12 md:mb-16">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Our Partners
          </span>
          <h2 className="section-heading text-[#1b1b1b]">
            Trusted By Industry Leaders
          </h2>
        </MotionWrapper>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-16 animate-logo-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-[120px] md:w-[150px] h-[60px] flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                className="object-contain max-h-[50px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
