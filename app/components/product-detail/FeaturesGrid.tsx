"use client";

import {
  Cpu,
  Shield,
  Gauge,
  Plug,
  AlertTriangle,
  BadgeCheck,
  Wifi,
  CreditCard,
  Columns2,
  Building2,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const iconMap: Record<string, React.ElementType> = {
  "Full-Stack Engineering": Cpu,
  "Built for Indian Conditions": Shield,
  "In-built Energy Metering": Gauge,
  "Plug-and-Play Operation": Plug,
  "Emergency Stop on Every Unit": AlertTriangle,
  "2-Year Standard Warranty": BadgeCheck,
  "Payment-Enabled": CreditCard,
  "OCPP 1.6J Compliant": Wifi,
  "Dual Connectivity": Wifi,
  "RFID + App Authentication": BadgeCheck,
  "Dual Independent Connectors": Columns2,
  "Floor-Standing Design": Building2,
  "Maximum Throughput": Gauge,
  "Built for Outdoor Deployment": Shield,
};

interface FeaturesGridProps {
  features: { title: string; description: string }[];
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            What Sets It Apart
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
            Engineered, Not Assembled
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.title] || Cpu;
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
  );
}
