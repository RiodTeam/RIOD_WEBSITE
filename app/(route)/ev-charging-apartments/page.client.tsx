"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  ShieldCheck,
  Users,
  Zap,
  Smartphone,
  Building2,
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
    icon: Receipt,
    title: "Fair Per-Resident Billing",
    description:
      "Every resident pays for exactly what they use. Individual metering tracks energy per charger, per session. No arguments about shared electricity bills. No subsidizing your neighbor's charging habit. The platform generates monthly statements automatically.",
  },
  {
    icon: Zap,
    title: "No Grid Overload",
    description:
      "Dynamic load balancing ensures total charging demand never exceeds your building's sanctioned load. Even if 30 residents plug in at the same time, the system distributes power intelligently. No tripped breakers. No transformer damage. No angry calls to the DISCOM.",
  },
  {
    icon: Smartphone,
    title: "Resident Self-Service App",
    description:
      "Residents control their charging through the app. Start and stop sessions, view consumption history, check billing, and receive notifications when charging completes. No need to call the security guard or the RWA committee.",
  },
  {
    icon: Users,
    title: "RWA Dashboard and Controls",
    description:
      "The management committee gets a central dashboard showing building-wide consumption, individual resident usage, charger status, and energy costs. Approve new connections, set power limits, and export data for society meetings.",
  },
  {
    icon: ShieldCheck,
    title: "Safe for Multi-Dwelling Buildings",
    description:
      "Every charger includes built-in overcurrent protection, earth fault detection, and temperature monitoring. Designed to operate safely in enclosed basement parking with proper ventilation compliance. No fire safety concerns for your building insurance.",
  },
  {
    icon: Building2,
    title: "Scales with Demand",
    description:
      "Start with 5 chargers for early adopters. Add 20 more next year without redesigning the system. The load management infrastructure supports incremental growth. New residents get onboarded in minutes, not weeks.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Building Load Assessment",
    description:
      "We survey your electrical infrastructure, transformer capacity, common area load, and parking layout. This assessment determines how many chargers your building can support immediately and what upgrades, if any, are needed for full-scale deployment.",
  },
  {
    step: "02",
    title: "RWA Presentation and Approval",
    description:
      "We prepare a complete proposal for your RWA or management committee. It covers costs, billing structure, load impact, safety certifications, and maintenance terms. We have done this hundreds of times and know what committees ask. We come prepared.",
  },
  {
    step: "03",
    title: "Installation and Resident Onboarding",
    description:
      "Chargers are installed in designated parking spots with individual energy meters. The load management system connects to your building's distribution panel. Each resident gets app access, a quick walkthrough, and they start charging the same day.",
  },
  {
    step: "04",
    title: "Ongoing Management",
    description:
      "Monthly billing runs automatically. The RWA gets consumption reports without asking. Chargers are monitored remotely for faults. Firmware updates happen over the air. When new residents want a charger, adding one is a straightforward process, not a committee crisis.",
  },
];

export default function PageClient() {
  const { isOpen, open, close } = useLeadForm();

  return (
    <ReactLenis root>
      <main className="overflow-hidden">
        <HeroSection
          backgroundImage="/home2/hero.webp"
          title="EV Charging for<br />Apartments and Flats"
          description="Shared infrastructure, individual billing, zero grid overload. Apartment EV charging that actually works for residents and management committees alike."
          overlayOpacity={0.55}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  Apartment charging is a shared problem that needs a shared solution
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="space-y-5">
                  <p className="para-text text-[#626262]">
                    If you live in an apartment and own an EV, you already know the pain. You cannot just install a charger like a homeowner. There is the RWA to convince, electrical load to worry about, billing disputes to avoid, and the question of who pays for what. Most apartment residents give up before they even start. That is a problem because apartment dwellers make up the largest segment of potential EV buyers in Indian cities.
                  </p>
                  <p className="para-text text-[#626262]">
                    RIOD built its apartment charging solution around the real-world challenges of multi-dwelling buildings. The core of it is dynamic load management. Your building has a fixed sanctioned load from the DISCOM, and you cannot simply add 50 chargers to it without consequences. Our system ensures that total charging demand across all residents never exceeds a safe threshold. It does this by intelligently distributing available power. If 20 cars are plugged in overnight, they all charge at adjusted rates that keep the grid stable and safe.
                  </p>
                  <p className="para-text text-[#626262]">
                    Billing is the other headache we solve completely. Each charger has individual metering tied to a specific flat or resident. The platform calculates consumption per unit, applies the agreed tariff, and generates monthly bills. No disputes. No manual meter readings. The RWA gets a management dashboard to monitor everything, approve new connections, and run the system without turning it into a full-time job. Powerpod handles individual unit charging, while Powerpod Go is available for shared visitor parking spots.
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
                Charging that works for<br className="hidden md:block" /> every resident and every RWA
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
                From RWA approval to live charging
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
                Bring EV charging to your apartment
              </h2>
              <p className="para-text text-[#1b1b1b]/70 max-w-2xl mx-auto mb-8">
                Whether you are a resident championing the idea or an RWA evaluating options, we can help. Get a load assessment, a committee-ready proposal, and a clear deployment timeline for your building.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadFormTrigger
                  onClick={open}
                  className="h-[52px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                >
                  Get a Building Assessment
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
