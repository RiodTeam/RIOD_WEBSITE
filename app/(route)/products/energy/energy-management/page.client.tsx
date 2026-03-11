"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Activity,
  Layers,
  Bell,
  Globe,
} from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";

const features = [
  {
    icon: Layers,
    title: "Multi-Asset Monitoring",
    description:
      "Monitor grid, solar, battery, EV chargers, and building loads from a single dashboard. Track energy flow across your entire chain of assets in real time.",
  },
  {
    icon: BarChart3,
    title: "Consumption Analytics",
    description:
      "Deep analytics on consumption patterns across time periods, locations, and asset types. Identify peak demand, wastage, and optimisation opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Energy Prediction",
    description:
      "AI-driven demand forecasting based on historical data, weather patterns, and occupancy. Plan procurement, storage, and load distribution ahead of time.",
  },
  {
    icon: Activity,
    title: "Real-Time Dashboards",
    description:
      "Live visibility into every energy asset. Current draw, generation, storage levels, and grid import/export updated every second.",
  },
  {
    icon: Bell,
    title: "Alerts & Anomaly Detection",
    description:
      "Automated alerts for unusual consumption, equipment faults, and threshold breaches. Catch problems before they become outages.",
  },
  {
    icon: Globe,
    title: "Multi-Site Management",
    description:
      "Manage energy across multiple locations from a central platform. Compare site performance, benchmark efficiency, and roll out policies at scale.",
  },
];

const useCases = [
  {
    title: "Commercial Buildings",
    description:
      "Track HVAC, lighting, EV charging, and common area consumption. Reduce energy costs by identifying inefficiencies and scheduling loads intelligently.",
  },
  {
    title: "Factories & Industrial Sites",
    description:
      "Monitor production line energy consumption, compressed air, and heavy machinery. Correlate energy usage with production output for efficiency benchmarking.",
  },
  {
    title: "EV Charging Networks",
    description:
      "Monitor charger utilisation, energy throughput, and revenue per kWh across your network. Forecast demand and plan infrastructure expansion.",
  },
  {
    title: "Solar & Renewable Sites",
    description:
      "Track generation, self-consumption, grid export, and degradation. Predict output based on weather and optimise storage dispatch.",
  },
];

export default function EnergyManagementClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/home/hero.webp"
          title="Energy Management"
          description="Monitor, analyse, and predict energy across every asset in your chain."
          overlayOpacity={0.55}
        />

        {/* INTRO */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <MotionWrapper className="lg:col-span-5">
                <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
                  Energy Management
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  Monitoring, Analytics & Prediction
                </h2>
              </MotionWrapper>

              <MotionWrapper className="lg:col-span-7" delay={0.1}>
                <p className="para-text text-[#626262] leading-relaxed mb-5">
                  Energy management starts with visibility. RIOD&apos;s platform
                  connects to every energy asset in your infrastructure and
                  provides in-depth analytics on consumption, generation, and
                  storage across your entire chain.
                </p>
                <p className="para-text text-[#626262] leading-relaxed">
                  From real-time dashboards to AI-driven energy prediction, the
                  platform gives operators the data they need to reduce costs,
                  prevent outages, and make informed decisions about energy
                  procurement and infrastructure investment.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                Complete Energy Visibility
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <MotionWrapper key={feature.title} delay={index * 0.08}>
                    <div className="bg-white rounded-xl p-7 md:p-8 h-full">
                      <div className="w-11 h-11 rounded-lg bg-[#1b1b1b] flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-[#cdf80a]" />
                      </div>
                      <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-2.5">
                        {feature.title}
                      </h3>
                      <p className="para-text2 text-[#626262] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Applications
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                Built for Every Energy Environment
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {useCases.map((uc, index) => (
                <MotionWrapper key={uc.title} delay={index * 0.1}>
                  <div className="border border-[#e8e8e8] rounded-xl p-6 md:p-8 h-full">
                    <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-3">
                      {uc.title}
                    </h3>
                    <p className="para-text2 text-[#626262] leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
          <div className="w-[90%] max-w-[900px] mx-auto text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-medium text-white font-inter leading-tight mb-4">
                See your energy data clearly
              </h2>
              <p className="para-text text-[#9a99a2] max-w-[500px] mx-auto mb-8">
                Talk to our engineers about monitoring and analytics for your
                energy infrastructure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#cdf80a] text-[#1b1b1b] px-7 py-3.5 rounded-full font-inter font-medium text-sm hover:bg-[#b8e000] transition-colors"
              >
                Talk to Our Engineers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionWrapper>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
