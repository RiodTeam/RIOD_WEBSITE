"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Gauge,
  BarChart3,
  Eye,
} from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";

const products = [
  {
    icon: Gauge,
    tag: "Power Master",
    title: "Dynamic Load Balancing System",
    description:
      "Hardware unit with integrated software that acts as the energy brain of your site. Monitors grid consumption, renewable generation, and load in real time. Under grid distress, it adjusts power to EV chargers and other controllable equipment automatically. Supports OCPP, EEBUS, Modbus, SG-Ready, and manufacturer APIs.",
    highlights: [
      "Real-time grid monitoring and load limiting",
      "Downloadable app-based capabilities",
      "Solar, HVAC, BESS, and EV charger integration",
      "DG generator communication and switchover",
    ],
    href: "/products/energy/power-master",
    imagePlaceholder: "Power Master Unit",
  },
  {
    icon: BarChart3,
    tag: "Energy Management",
    title: "Monitoring, Analytics & Prediction",
    description:
      "Connects to every energy asset in your infrastructure. Provides in-depth analytics on consumption, generation, and storage across your entire chain. Real-time dashboards, AI-driven demand forecasting, automated alerts, and multi-site management from a single platform.",
    highlights: [
      "Multi-asset monitoring across sites",
      "Consumption analytics and demand forecasting",
      "Anomaly detection and automated alerts",
      "Multi-site benchmarking and reporting",
    ],
    href: "/products/energy/energy-management",
    image: "/products/ems1.webp",
    imagePlaceholder: "Energy Dashboard",
  },
  {
    icon: Eye,
    tag: "Infrastructure Monitoring",
    title: "Vision AI & Drone Technology",
    description:
      "Computer vision and autonomous drone technology for inspecting energy infrastructure at scale. AI-powered analysis detects equipment anomalies, thermal hotspots, and physical damage across solar farms, substations, and transmission corridors before they become failures.",
    highlights: [
      "Autonomous drone inspections",
      "Thermal anomaly and defect detection",
      "Predictive maintenance from field data",
      "Digital asset records with geo-tagged imagery",
    ],
    href: "/products/energy/infrastructure-monitoring",
    imagePlaceholder: "Drone Inspection",
  },
];

export default function EnergyClient() {
  return (
    <ReactLenis root>
      <main>
        {/* HERO */}
        <HeroSection
          backgroundImage="/home/hero.webp"
          title="Energy Solutions"
          description="Hardware and software for buildings, factories, and commercial infrastructure. From dynamic load balancing to AI-powered monitoring."
          overlayOpacity={0.5}
        />

        {/* PRODUCTS */}
        {products.map((product, index) => {
          const Icon = product.icon;
          const isEven = index % 2 === 0;
          const bgColor = isEven ? "bg-white" : "bg-[#f6f6f6]";

          return (
            <section key={product.tag} className={`py-16 md:py-[6.8rem] ${bgColor}`}>
              <div className="w-[90%] max-w-[1400px] mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}>
                  {/* Content */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                    <MotionWrapper>
                      <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
                        {product.tag}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-5">
                        {product.title}
                      </h2>
                      <p className="para-text text-[#626262] leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {product.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#cdf80a] mt-2 shrink-0" />
                            <span className="text-[15px] text-[#626262] font-inter">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={product.href}
                        className="inline-flex items-center gap-2 border border-[#1b1b1b] text-[#1b1b1b] px-6 py-3 rounded-full font-inter font-medium text-sm hover:bg-[#1b1b1b] hover:text-white transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </MotionWrapper>
                  </div>

                  {/* Image */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                    <MotionWrapper delay={0.15}>
                      {product.image ? (
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="relative w-full aspect-[4/3] bg-[#e8e8e8] rounded-2xl overflow-hidden flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-[#1b1b1b] flex items-center justify-center mx-auto mb-4">
                              <Icon className="w-7 h-7 text-[#cdf80a]" />
                            </div>
                            <p className="text-sm font-medium text-[#9a99a2] font-inter">
                              {product.imagePlaceholder}
                            </p>
                          </div>
                        </div>
                      )}
                    </MotionWrapper>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* FINAL CTA */}
        <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
          <div className="w-[90%] max-w-[900px] mx-auto text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-medium text-white font-inter leading-tight mb-4">
                Ready to manage your energy?
              </h2>
              <p className="para-text text-[#9a99a2] max-w-[500px] mx-auto mb-8">
                Talk to our engineers about the right energy solution for your
                site.
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
