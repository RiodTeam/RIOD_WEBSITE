"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";

const applications = [
  {
    title: "Hotels",
    description:
      "Premium EV charging that enhances guest experience and positions your property as a sustainability leader.",
    href: "/ev-chargers-hotels",
    image: "/hotel/hero.webp",
  },
  {
    title: "Offices",
    description:
      "Workplace charging solutions with smart scheduling, access control, and employee billing.",
    href: "/ev-chargers-office",
    image: "/office/hero.webp",
  },
  {
    title: "Institutions",
    description:
      "Campus-wide charging networks for universities, schools, and government buildings.",
    href: "/ev-chargers-institution",
    image: "/institution/hero.webp",
  },
  {
    title: "Homes",
    description:
      "Safe, compact chargers designed for everyday convenience. Charge overnight, drive all day.",
    href: "/ev-chargers-home",
    image: "/home2/hero.webp",
  },
  {
    title: "Resorts",
    description:
      "Discreet, reliable charging for extended-stay guests in scenic resort environments.",
    href: "/ev-chargers-resorts",
    image: "/hotel/hero.webp",
  },
  {
    title: "Malls & Theatres",
    description:
      "High-throughput charging that increases footfall and keeps visitors engaged longer.",
    href: "/ev-chargers-malls",
    image: "/office/hero.webp",
  },
  {
    title: "Hospitals",
    description:
      "Safe, reliable infrastructure for staff, patients, visitors, and emergency fleet vehicles.",
    href: "/ev-chargers-hospitals",
    image: "/institution/hero.webp",
  },
  {
    title: "Parking Complexes",
    description:
      "High-density deployments with smart load management for large-scale parking facilities.",
    href: "/ev-chargers-parking",
    image: "/home2/hero.webp",
  },
];

export default function ApplicationsClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/heroes/ev-chargers-hero.webp"
          title="Applications"
          description="Industry-specific EV charging solutions engineered for every environment: from hotel lobbies to hospital parking, malls to residential complexes."
          overlayOpacity={0.55}
        />

        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Industries We Serve
              </p>
              <h2 className="section-heading text-[#1b1b1b] mb-4">
                Charging Solutions by Industry
              </h2>
              <p className="para-text text-[#626262] max-w-2xl mb-12 md:mb-16">
                Every environment has unique charging needs. Explore how RIOD
                tailors hardware, software, and service models for your
                industry.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <MotionWrapper key={app.title} delay={i * 0.06}>
                  <Link href={app.href} className="group block h-full">
                    <div className="bg-white rounded-xl overflow-hidden border border-[#e8e8e8] h-full hover:shadow-lg transition-shadow">
                      <div className="relative w-full aspect-[16/10] overflow-hidden">
                        <Image
                          src={app.image}
                          alt={app.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 md:p-6">
                        <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-2 flex items-center gap-2">
                          {app.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-[#626262] leading-relaxed">
                          {app.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
