"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  CreditCard,
  BarChart3,
  Leaf,
  ScanLine,
  BatteryCharging,
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
    icon: Gauge,
    title: "Dynamic Load Balancing",
    description:
      "Power Master distributes available power across all chargers in real time. Add 10 or 50 charging points without upgrading your transformer or sanctioned load. The system adapts automatically as vehicles plug in and out.",
  },
  {
    icon: ScanLine,
    title: "RFID and App Authentication",
    description:
      "Employees tap their RFID card or scan via the app. No unauthorized usage. No manual tracking. Each session is logged with user identity, energy consumed, duration, and cost. Clean data for your admin team.",
  },
  {
    icon: CreditCard,
    title: "Automated Employee Billing",
    description:
      "Charge employees at cost, subsidize partially, or offer it free. The platform handles billing per session or per month. Integrates with payroll deductions or generates individual invoices automatically.",
  },
  {
    icon: BatteryCharging,
    title: "Fleet Charging Ready",
    description:
      "If your company operates an EV fleet alongside employee vehicles, the same infrastructure handles both. Priority scheduling ensures fleet vehicles are charged during off-peak hours for lowest cost.",
  },
  {
    icon: Leaf,
    title: "ESG Compliance Reporting",
    description:
      "Automatic tracking of CO2 offset, green energy usage, and charging statistics. Export-ready reports for ESG disclosures, sustainability audits, and BRSR filings. Real numbers, not estimates.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics Dashboard",
    description:
      "See which chargers are busy, when peak demand hits, and how utilization trends month over month. Data-driven decisions on when to add capacity and where to place new chargers.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Load Assessment",
    description:
      "We audit your existing electrical infrastructure, sanctioned load, and daily consumption patterns. This tells us exactly how many chargers your building can support today and what it takes to scale later.",
  },
  {
    step: "02",
    title: "Hardware Deployment",
    description:
      "Powerpod Go wall-mount chargers go into your parking area. Power Master sits at the distribution board, managing load across all units. Installation typically takes 2 to 3 days for a 10-charger setup with zero disruption to office operations.",
  },
  {
    step: "03",
    title: "Software Configuration",
    description:
      "We configure RFID access, set billing policies, connect the dashboard, and onboard your employees. Admin gets a web portal. Employees get the app. IT gets API access if they want integration with internal systems.",
  },
  {
    step: "04",
    title: "Ongoing Operations",
    description:
      "Remote monitoring catches issues before they become tickets. Firmware updates roll out over the air. Monthly usage reports land in the admin inbox. And when you need to add more chargers, we scale without starting from scratch.",
  },
];

export default function PageClient() {
  const { isOpen, open, close } = useLeadForm();

  return (
    <ReactLenis root>
      <main className="overflow-hidden">
        <HeroSection
          backgroundImage="/office/hero.webp"
          title="EV Charging for<br />the Modern Workplace"
          description="Add EV charging to your office without overhauling the electrical system. Dynamic load balancing, employee billing, and ESG reporting built in from day one."
          overlayOpacity={0.55}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  Your employees are buying EVs. Your parking lot should keep up.
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="space-y-5">
                  <p className="para-text text-[#626262]">
                    EV adoption in India is accelerating faster than most facilities teams expected. Employees who drive electric are already asking about workplace charging. Some are choosing employers based on it. The companies that figure this out now will have a real edge in talent retention and ESG commitments. The ones that wait will be retrofitting under pressure later at twice the cost.
                  </p>
                  <p className="para-text text-[#626262]">
                    The biggest concern we hear from facility managers is power capacity. Most office buildings were not designed with EV charging in mind, and upgrading the sanctioned load is expensive and slow. That is exactly the problem our Power Master solves. It dynamically distributes available power across all connected chargers, so you can install 20 or 30 charging points on the same electrical capacity that would normally support 5. No transformer upgrade. No DISCOM approval delays.
                  </p>
                  <p className="para-text text-[#626262]">
                    Powerpod Go is our wall-mount commercial charger built for daily workplace use. Compact, reliable, and designed for the kind of repetitive charging cycles that office installations demand. Pair it with RFID authentication and our billing platform, and you have a system that practically runs itself. Employees charge, the platform bills them, and your admin team gets clean reports without chasing anyone.
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
                Workplace charging that<br className="hidden md:block" /> works for everyone
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
                From audit to operational in weeks
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
                Make your workplace EV-ready
              </h2>
              <p className="para-text text-[#1b1b1b]/70 max-w-2xl mx-auto mb-8">
                Get a load assessment and deployment plan for your office. We will tell you exactly how many chargers your building supports today, what it costs, and how fast we can get them operational.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadFormTrigger
                  onClick={open}
                  className="h-[52px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                >
                  Request a Site Assessment
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
