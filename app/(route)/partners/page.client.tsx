"use client";

import { ReactLenis } from "lenis/react";
import { Handshake, MapPin, Cable, ArrowRight } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "@/app/components/common/MotionWrapper";

const partnerCards = [
  {
    icon: Handshake,
    title: "Channel Partner",
    description:
      "Become a distributor. Bring reliable EV charging to your region with our sales and support backing.",
    cta: "Learn more",
  },
  {
    icon: MapPin,
    title: "Host a Charger",
    description:
      "Got a parking spot? Install a Powerpod at your premises and earn from every charging session.",
    cta: "Get started",
  },
  {
    icon: Cable,
    title: "CMS Integration",
    description:
      "Integrate Powerpod into your charging management system via OCPP. We support all major platforms.",
    cta: "Get started",
  },
];

export default function PartnersClient() {
  return (
    <ReactLenis root>
      <main>
        <section className="bg-[#cdf80a] pt-40 md:pt-52 pb-16 md:pb-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/60 font-inter mb-3">
                Partner With Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
                Ready to Electrify?
              </h1>
              <p className="para-text text-[#1b1b1b]/70 max-w-[520px]">
                Multiple ways to join the EV charging revolution.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
              {partnerCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <MotionWrapper key={card.title} delay={index * 0.1}>
                    <div className="bg-[#1b1b1b] rounded-xl p-8 md:p-10 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-[#cdf80a] flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#1b1b1b]" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-medium text-white font-inter mb-3">
                        {card.title}
                      </h3>

                      <p className="para-text2 text-[#9a99a2] leading-relaxed flex-1 mb-6">
                        {card.description}
                      </p>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#cdf80a] font-inter font-medium text-sm hover:gap-3 transition-all"
                      >
                        {card.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
