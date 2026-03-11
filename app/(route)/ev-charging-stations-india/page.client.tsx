"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Cloud, Sun, Server, IndianRupee } from "lucide-react";

import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import LeadFormPopup, {
  LeadFormTrigger,
  useLeadForm,
} from "@/app/components/common/LeadFormPopup";
import NewsletterSignup from "@/app/components/common/NewsletterSignup";

const benefits = [
  {
    icon: Shield,
    title: "BIS Certified, IS 17017 Compliant",
    description:
      "Every RIOD charger meets BIS certification requirements and IS 17017 standards. No guesswork on compliance. Your installations pass inspections the first time.",
  },
  {
    icon: Zap,
    title: "Full Range: 3.3kW to DC Fast",
    description:
      "AC chargers from 3.3kW for overnight home charging to 22kW for commercial use. DC fast chargers for highway corridors and public stations. One manufacturer, complete coverage.",
  },
  {
    icon: Cloud,
    title: "Cloud-Managed via OCPP",
    description:
      "Every charger connects to our cloud platform through OCPP 1.6J. Remote monitoring, firmware updates, session tracking, and revenue management from a single dashboard.",
  },
  {
    icon: Sun,
    title: "Built for Indian Weather",
    description:
      "IP65-rated enclosures tested against monsoon rains, summer heat above 45 degrees Celsius, and coastal humidity. No seasonal downtime. No weather-related failures.",
  },
  {
    icon: Server,
    title: "Indian Grid Compatible",
    description:
      "Designed for voltage fluctuations between 170V and 270V that are common across Indian power grids. Built-in surge protection handles the load spikes and brownouts that imported chargers struggle with.",
  },
  {
    icon: IndianRupee,
    title: "Made in India, Priced for India",
    description:
      "Manufactured domestically with local supply chains. No import duties inflating your costs. Competitive pricing with warranty and service support that does not depend on shipping parts from overseas.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Site Assessment",
    description:
      "Our engineering team evaluates your electrical infrastructure, load capacity, and installation requirements. We factor in local grid conditions, transformer capacity, and future expansion needs.",
  },
  {
    step: "02",
    title: "Product Selection",
    description:
      "Based on your use case, whether it is fleet depot, public station, commercial parking, or residential complex, we recommend the right mix of AC and DC chargers with appropriate connectors and power ratings.",
  },
  {
    step: "03",
    title: "Installation and Commissioning",
    description:
      "Our certified installation partners handle everything from panel upgrades to charger mounting, cable routing, and network connectivity. Every unit is tested and commissioned on-site before handover.",
  },
  {
    step: "04",
    title: "Operations and Support",
    description:
      "Once live, chargers are monitored 24/7 through our cloud platform. Firmware updates roll out remotely. If something needs physical attention, our service network across India responds within defined SLAs.",
  },
];

export default function PageClient() {
  const { isOpen, open, close } = useLeadForm();

  return (
    <ReactLenis root>
      <main className="overflow-hidden">
        <HeroSection
          backgroundImage="/home/hero.webp"
          title="EV Charging Stations<br />Built for India"
          description="BIS-certified AC and DC chargers designed for Indian electrical standards, weather, and grid conditions. From a manufacturer that ships from India, not across oceans."
          overlayOpacity={0.55}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  EV charging infrastructure that actually works in Indian conditions
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="space-y-5">
                  <p className="para-text text-[#626262]">
                    India is not California. The power grid fluctuates. Temperatures hit 48 degrees in May. Monsoons dump water for months. Dust settles on everything. Any EV charger deployed here needs to handle all of that without breaking down every other week. Most imported chargers were not designed with these conditions in mind. They were built for stable European grids and mild climates, then shipped here with a BIS sticker added as an afterthought.
                  </p>
                  <p className="para-text text-[#626262]">
                    RIOD designs and manufactures EV charging stations specifically for the Indian market. Our hardware handles voltage swings from 170V to 270V. Our enclosures carry IP65 ratings tested in real monsoon conditions, not lab simulations. Our firmware accounts for grid instability and load management that Indian sites actually require. Every product ships with BIS certification and IS 17017 compliance built in from the design stage, not retrofitted after production.
                  </p>
                  <p className="para-text text-[#626262]">
                    We offer AC chargers ranging from 3.3kW single-phase units for residential and overnight charging, to 7.4kW and 22kW three-phase units for commercial and fleet applications. For locations that need rapid turnaround, our DC fast chargers deliver the speeds that keep vehicles moving. Every unit speaks OCPP 1.6J, connecting to our cloud platform or any third-party CMS you prefer.
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
                Why RIOD
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                Built different because India<br className="hidden md:block" /> is different
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
                From site survey to live charging
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
                Ready to deploy EV charging?
              </h2>
              <p className="para-text text-[#1b1b1b]/70 max-w-2xl mx-auto mb-8">
                Tell us about your project. Whether you are a CPO scaling across cities, a fleet operator electrifying your depot, or a business adding chargers to your property, we will put together the right solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadFormTrigger
                  onClick={open}
                  className="h-[52px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                >
                  Get a Quote
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
