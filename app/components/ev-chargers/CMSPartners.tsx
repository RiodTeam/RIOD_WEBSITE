"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const partners = [
  { name: "ChargePoint", logo: "/cms-partners/chargepoint.svg" },
  { name: "Statiq", logo: "/cms-partners/statiq.svg" },
  { name: "Tata Power EZ Charge", logo: "/cms-partners/tata-power.svg" },
  { name: "BPCL eCharge", logo: "/cms-partners/bpcl.svg" },
  { name: "Fortum", logo: "/cms-partners/fortum.svg" },
  { name: "Delta Electronics", logo: "/cms-partners/delta.svg" },
  { name: "Exicom", logo: "/cms-partners/exicom.svg" },
  { name: "Magenta", logo: "/cms-partners/magenta.svg" },
  { name: "Ather Grid", logo: "/cms-partners/ather.svg" },
  { name: "Kazam", logo: "/cms-partners/kazam.svg" },
  { name: "Charge+Zone", logo: "/cms-partners/chargezone.svg" },
  { name: "EVSE", logo: "/cms-partners/evse.svg" },
];

export default function CMSPartners() {
  return (
    <section className="bg-[#f6f6f6] py-16 md:py-[5.5rem] overflow-hidden">
      <div className="w-[90%] max-w-[1400px] mx-auto mb-10">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Integrations
          </span>
          <h2 className="section-heading text-black mb-3">
            CMS Integration Partners
          </h2>
          <p className="para-text text-[#626262] max-w-[540px]">
            We integrate with leading charging management platforms, ensuring
            our hardware works seamlessly with your existing network.
          </p>
        </MotionWrapper>
      </div>

      {/* Infinite scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-logo-scroll w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
            >
              <div className="relative w-[100px] h-[50px] md:w-[120px] md:h-[60px] grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
