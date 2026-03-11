"use client";

import React from "react";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  IndianRupee,
  BarChart3,
  Wifi,
  CreditCard,
  Eye,
  Bolt,
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
    icon: IndianRupee,
    title: "Revenue from Every Session",
    description:
      "Set your own per-kWh pricing or use time-based billing. The platform collects payment via UPI, cards, and wallets. You earn from every charging session. High-traffic locations see hundreds of sessions per charger per month.",
  },
  {
    icon: BarChart3,
    title: "Utilization Analytics",
    description:
      "Know which chargers are busy, which are idle, and when peak hours hit. Heatmaps show demand patterns across your location. Use this data to plan expansion, adjust pricing, and optimize charger placement for maximum revenue.",
  },
  {
    icon: Wifi,
    title: "Remote Monitoring 24/7",
    description:
      "Every charger reports its status in real time. Faults are flagged immediately. Energy consumption is tracked per unit, per session, per day. Your operations team monitors everything from a single dashboard without visiting the site.",
  },
  {
    icon: CreditCard,
    title: "Dynamic Pricing Engine",
    description:
      "Charge more during peak hours, less during off-peak. Set different rates for weekdays and weekends. Offer loyalty discounts for repeat users. The pricing engine is flexible enough to match any commercial model you want to run.",
  },
  {
    icon: Eye,
    title: "Brand Visibility",
    description:
      "Branded charging stations in high-traffic locations put your name in front of thousands of visitors daily. Mall shoppers, airport travelers, and metro commuters see your brand while they charge. It is advertising that also generates revenue.",
  },
  {
    icon: Bolt,
    title: "AC and DC Options",
    description:
      "Powerpod City dual-gun chargers handle standard AC charging for shoppers who stay 2 to 3 hours. DC fast chargers serve drivers who need a quick top-up in 30 minutes. Mix both types based on your traffic patterns and dwell times.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Traffic and Power Analysis",
    description:
      "We study your parking footfall, average dwell time, electrical infrastructure, and available space. This analysis determines the optimal number of AC and DC chargers, their placement for maximum visibility and usage, and the power configuration needed.",
  },
  {
    step: "02",
    title: "Hardware Deployment",
    description:
      "Powerpod City dual-gun units go into designated EV parking bays. DC fast chargers are positioned near entry and exit points for quick turnaround. Clear signage, bay markings, and cable management ensure a clean installation that matches your facility standards.",
  },
  {
    step: "03",
    title: "Payment and Operations Setup",
    description:
      "We configure UPI, card, and wallet payment acceptance on every charger. Your pricing model gets programmed into the backend. The operations dashboard goes live with real-time status, session tracking, revenue reports, and alert configurations.",
  },
  {
    step: "04",
    title: "Launch and Network Listing",
    description:
      "Your charging location goes live on all major EV charging maps and apps. Drivers find you on Google Maps, PlugShare, and aggregator platforms. We handle the listing and verification. Ongoing support keeps chargers operational with defined uptime SLAs.",
  },
];

export default function PageClient() {
  const { isOpen, open, close } = useLeadForm();

  return (
    <ReactLenis root>
      <main className="overflow-hidden">
        <HeroSection
          backgroundImage="/products/powerpod-city.png"
          title="EV Charging for<br />High-Traffic Parking"
          description="Turn your parking infrastructure into a revenue-generating charging hub. For malls, airports, metro stations, and commercial parking operators across India."
          overlayOpacity={0.6}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <MotionWrapper>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  Parking lots are the obvious place for public EV charging
                </h2>
              </MotionWrapper>

              <MotionWrapper delay={0.15}>
                <div className="space-y-5">
                  <p className="para-text text-[#626262]">
                    Think about where cars spend most of their time. Parked. At malls for 2 to 3 hours. At airports for days. At metro stations for an entire workday. These are not just parking spots. They are charging opportunities. Every hour a car sits in your lot is an hour it could be taking energy and paying you for it. Parking operators who figure this out early are building a revenue stream that grows as EV adoption accelerates.
                  </p>
                  <p className="para-text text-[#626262]">
                    The infrastructure you need depends on dwell time. Mall parking works best with AC chargers because shoppers stay long enough for a meaningful charge. Airport lots benefit from a mix: AC for long-term parking, DC fast for pickup and drop-off zones. Metro stations need fast turnaround chargers for commuters who park and ride. We help you match hardware to your specific traffic pattern so utilization stays high and ROI comes faster.
                  </p>
                  <p className="para-text text-[#626262]">
                    RIOD Powerpod City is our dual-gun public charger designed for exactly these environments. Two vehicles charge simultaneously from one unit, which means fewer installations for the same capacity. The OCPP backend connects to our operations platform or any third-party CMS. Payment collection supports UPI, credit cards, and digital wallets. Dynamic pricing lets you charge more during peak hours and offer discounts during slow periods. Every session is tracked, every rupee is accounted for, and your team manages it all remotely.
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
                Charging infrastructure that<br className="hidden md:block" /> pays for itself
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
                From parking lot to charging hub
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
                Turn your parking into profit
              </h2>
              <p className="para-text text-[#1b1b1b]/70 max-w-2xl mx-auto mb-8">
                Get a traffic analysis and revenue projection for your parking location. We will map out charger placement, estimate utilization based on your footfall data, and show you the numbers before you commit.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LeadFormTrigger
                  onClick={open}
                  className="h-[52px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors inline-flex items-center gap-2"
                >
                  Get a Revenue Projection
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
