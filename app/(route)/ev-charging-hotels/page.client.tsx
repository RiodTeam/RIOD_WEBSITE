"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Leaf,
  Wifi,
  Clock,
  BadgeIndianRupee,
} from "lucide-react";

import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import LeadFormPopup, {
  LeadFormTrigger,
  useLeadForm,
} from "@/app/components/common/LeadFormPopup";
import NewsletterSignup from "@/app/components/common/NewsletterSignup";

const benefits = [
  {
    icon: BadgeIndianRupee,
    title: "New Revenue Stream",
    description:
      "Charge guests per kWh or per session. Set your own pricing. The platform handles metering, billing, and payment collection. Some hotel partners recover their hardware investment within 18 months from charging fees alone.",
  },
  {
    icon: Star,
    title: "Premium Guest Experience",
    description:
      "EV-driving guests actively search for hotels with charging. Showing up on PlugShare, Google Maps, and booking platforms as a charging-enabled property puts you in front of a high-spending demographic that values convenience.",
  },
  {
    icon: TrendingUp,
    title: "Higher Booking Rates",
    description:
      "Properties with EV charging report measurably higher direct bookings from EV owners. These guests tend to book longer stays because they can charge overnight. They spend more on room upgrades and F&B during the stay.",
  },
  {
    icon: Leaf,
    title: "Sustainability Credentials",
    description:
      "EV charging directly supports your green certifications. Quantifiable CO2 offset data from our platform feeds straight into sustainability reports, LEED documentation, and marketing collateral with real numbers.",
  },
  {
    icon: Wifi,
    title: "Remote Management",
    description:
      "Your front desk does not need to manage chargers. The cloud platform handles session initiation, billing, and monitoring. Staff gets notified only if something needs attention. Otherwise it runs autonomously.",
  },
  {
    icon: Clock,
    title: "Overnight Charging Convenience",
    description:
      "Guests plug in at check-in and wake up to a full battery. No waiting at public stations. No range anxiety during their trip. This level of convenience turns first-time guests into repeat visitors.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Property Assessment",
    description:
      "We evaluate your parking layout, electrical capacity, guest volume patterns, and brand positioning. This determines charger quantity, placement for guest convenience, and the optimal power configuration for your property.",
  },
  {
    step: "02",
    title: "Charger Installation",
    description:
      "Powerpod Go units are installed in designated guest parking spots. Clean, wall-mounted design that matches the aesthetic standard of hospitality properties. Cable management keeps things tidy. Signage guides guests to charging bays.",
  },
  {
    step: "03",
    title: "Revenue and Access Setup",
    description:
      "We configure pricing per your revenue model. Complimentary for premium rooms, pay-per-use for others, or a flat nightly charging fee bundled with the room. Front desk gets a simple interface to monitor active sessions and assist guests if needed.",
  },
  {
    step: "04",
    title: "Go Live and Grow",
    description:
      "Your property goes live on charging networks and maps. We handle the listing. As demand grows and more guests arrive with EVs, scaling up means adding more Powerpod units to the same managed infrastructure. No redesign needed.",
  },
];

export default function PageClient() {
  const { isOpen, open, close } = useLeadForm();

  return (
    <ReactLenis root>
      <main className="overflow-hidden">
        <HeroSection
          backgroundImage="/hotel/hero.webp"
          title="EV Charging That Elevates<br />Your Hotel Experience"
          description="Give guests the charging convenience they expect. Generate revenue from your parking infrastructure. Position your property as a sustainability leader."
          overlayOpacity={0.5}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  EV charging is not a future amenity. It is a current expectation.
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="space-y-5">
                  <p className="para-text text-[#626262]">
                    Hotels that added Wi-Fi early did not think of it as a competitive advantage. It was just obvious. EV charging is at that same inflection point right now. The number of electric vehicles on Indian roads is growing month over month. Business travelers, families on road trips, and weekend tourists are increasingly driving EVs. When they search for hotels, charging availability is becoming a filter, not a bonus.
                  </p>
                  <p className="para-text text-[#626262]">
                    The economics are straightforward. You already have parking spaces and an electrical connection. Adding chargers converts dead infrastructure into a revenue line. Guests pay for the energy they use. You set the markup. The platform handles billing and payment collection without your staff lifting a finger. Some properties charge a premium nightly rate for rooms with dedicated charging, and guests happily pay it because the alternative is hunting for a public charger in an unfamiliar city.
                  </p>
                  <p className="para-text text-[#626262]">
                    RIOD Powerpod Go is designed for hospitality environments. Wall-mounted, clean design, minimal cabling visible to guests. The energy management dashboard lets you monitor consumption across your property without adding to your engineering team's workload. And because every unit is cloud-connected via OCPP, your chargers show up on public charging maps, bringing in walk-in charging customers even when your hotel is not fully booked.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/60 font-inter mb-3">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                Why hotels across India are<br className="hidden md:block" /> adding EV charging
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <MotionWrapper key={benefit.title} delay={index * 0.08}>
                    <div className="bg-white rounded-xl p-8 h-full border border-[#e8e8e8]">
                      <div className="w-12 h-12 rounded-lg bg-[#cdf80a] flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-[#1b1b1b]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-[#1b1b1b] font-inter mb-3">
                        {benefit.title}
                      </h3>
                      <p className="para-text2 text-[#626262] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/60 font-inter mb-3">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                Get your property charging-ready
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {solutions.map((item, index) => (
                <MotionWrapper key={item.step} delay={index * 0.1}>
                  <div className="bg-[#1b1b1b] rounded-xl p-8 md:p-10 h-full">
                    <span className="text-[#cdf80a] font-inter font-semibold text-sm mb-4 block">
                      {item.step}
                    </span>
                    <h3 className="text-xl md:text-2xl font-medium text-white font-inter mb-3">
                      {item.title}
                    </h3>
                    <p className="para-text2 text-[#9a99a2] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-[6.8rem] bg-[#cdf80a]">
          <div className="w-[90%] max-w-[1400px] mx-auto text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
                Start earning from your parking lot
              </h2>
              <p className="para-text text-[#1b1b1b]/70 max-w-2xl mx-auto mb-8">
                Get a property assessment and revenue projection for your hotel. We will map out charger placement, calculate expected utilization, and show you the ROI timeline based on your guest volume and location.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadFormTrigger
                  onClick={open}
                  className="h-[52px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                >
                  Get a Revenue Estimate
                  <ArrowRight className="w-4 h-4" />
                </LeadFormTrigger>
                <Link
                  href="/products/ev-chargers"
                  className="h-[52px] px-8 bg-transparent border-2 border-[#1b1b1b] text-[#1b1b1b] text-[15px] font-medium font-inter rounded-full hover:bg-[#1b1b1b] hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  View Products
                </Link>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup variant="section" />

        <LeadFormPopup isOpen={isOpen} onClose={close} />
      </main>
    </ReactLenis>
  );
}
