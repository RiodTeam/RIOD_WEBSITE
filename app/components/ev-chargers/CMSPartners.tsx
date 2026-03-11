"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const partners = [
  { name: "Numocity", logo: "/cms-partners/numocity.svg" },
  { name: "ChargeMod", logo: "/cms-partners/chargemod.svg" },
  { name: "Telio", logo: "/cms-partners/telio.svg" },
  { name: "Electric Pe", logo: "/cms-partners/electricpe.svg" },
  { name: "Kazam", logo: "/cms-partners/kazam.svg" },
];

export default function CMSPartners() {
  return (
    <section className="bg-[#f6f6f6] py-16 md:py-[5.5rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Integrations
          </span>
          <h2 className="section-heading text-black mb-3">
            CMS Integration Partners
          </h2>
          <p className="para-text text-[#626262] max-w-[540px] mb-12 md:mb-16">
            We integrate with leading charging management platforms, ensuring
            our hardware works seamlessly with your existing network.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {partners.map((partner, i) => (
            <MotionWrapper key={partner.name} delay={i * 0.08}>
              <div className="flex flex-col items-center justify-center bg-white rounded-xl border border-[#e8e8e8] hover:border-[#cdf80a] p-6 md:p-8 transition-colors">
                <div className="relative w-full h-[120px] md:h-[160px] grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm md:text-base font-medium text-[#626262] font-inter mt-4 text-center">
                  {partner.name}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
