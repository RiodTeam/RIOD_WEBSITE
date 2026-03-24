"use client";

import MotionWrapper from "../common/MotionWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    number: "01",
    title: "EV Charging\nStations",
    description:
      "AC PowerPods, DC fast chargers, and high-power charging stations, designed and manufactured in-house for homes, businesses, and public infrastructure.",
    cta: "Explore Chargers",
    href: "/products/ev-chargers",
    image: "/home/ev-charger-tile.webp",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Embedded firmware, CPMS platforms, mobile apps, and energy management systems, built by the same team that makes the hardware.",
    cta: "Explore Technology",
    href: "/technology",
    image: "/technology/payment-terminals.webp",
  },
];

export default function CoreOfferingsSection() {
  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {offerings.map((item, index) => (
            <MotionWrapper key={item.number} delay={index * 0.15}>
              <Link href={item.href} className="group block">
                <div className="relative h-[260px] sm:h-[320px] md:h-[440px] lg:h-[540px] xl:h-[600px] rounded-2xl overflow-hidden">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 lg:p-12">
                    <span
                      className="text-sm font-medium tracking-widest mb-4"
                      style={{ color: "#cdf80a" }}
                    >
                      {item.number}
                    </span>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight whitespace-pre-line mb-4">
                      {item.title}
                    </h2>
                    <p className="para-text text-white/70 max-w-[480px] mb-6">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-white group-hover:text-[#cdf80a] transition-colors">
                      <span className="text-sm font-medium">{item.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
