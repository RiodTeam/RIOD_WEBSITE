"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Scan,
  Thermometer,
  AlertTriangle,
  Plane,
  Camera,
  Brain,
  MapPin,
} from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";

const features = [
  {
    icon: Eye,
    title: "Vision AI Analytics",
    description:
      "Computer vision models trained on energy infrastructure. Detect corrosion, cracks, vegetation encroachment, and equipment degradation from visual and thermal imagery.",
  },
  {
    icon: Plane,
    title: "Autonomous Drone Inspections",
    description:
      "Pre-programmed flight paths for routine inspections. Drones capture high-resolution visual and thermal data across solar farms, substations, and transmission corridors.",
  },
  {
    icon: Thermometer,
    title: "Thermal Anomaly Detection",
    description:
      "Identify hotspots on solar panels, transformers, switchgear, and cable terminations. Catch thermal faults before they escalate to equipment failure or fire.",
  },
  {
    icon: Scan,
    title: "Defect Classification",
    description:
      "AI models classify defects by type and severity. Prioritise maintenance based on risk, not just inspection schedules. Reduce unnecessary interventions.",
  },
  {
    icon: AlertTriangle,
    title: "Predictive Maintenance",
    description:
      "Track degradation trends over time. Predict when equipment will need attention based on historical inspection data and environmental conditions.",
  },
  {
    icon: Camera,
    title: "Digital Asset Records",
    description:
      "Build a visual history of every asset. Compare current state against baseline. Track changes across inspection cycles with geo-tagged imagery.",
  },
];

const applications = [
  {
    icon: MapPin,
    title: "Solar Farms",
    description:
      "Inspect thousands of panels in hours instead of weeks. Detect hotspots, micro-cracks, PID, and soiling patterns. Maximise generation by prioritising panel-level maintenance.",
  },
  {
    icon: Brain,
    title: "Substations & Grid Infrastructure",
    description:
      "Monitor transformers, bushings, insulators, and switchgear without manual entry into high-voltage zones. Thermal and visual inspection from safe distance.",
  },
  {
    icon: Plane,
    title: "Transmission & Distribution Lines",
    description:
      "Inspect towers, conductors, and right-of-way corridors. Detect vegetation encroachment, conductor sag, and insulator damage across long distances.",
  },
  {
    icon: Eye,
    title: "EV Charging Infrastructure",
    description:
      "Monitor charging station condition, signage visibility, cable wear, and surrounding area. Maintain operational readiness across distributed charging networks.",
  },
];

export default function InfraMonitoringClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/heroes/infra-monitoring-hero.webp"
          title="Infrastructure Monitoring"
          description="Vision AI and drone technology for energy infrastructure inspection and predictive maintenance."
          overlayOpacity={0.55}
        />

        {/* INTRO */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <MotionWrapper className="lg:col-span-5">
                <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
                  Infrastructure Monitoring
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  Vision AI & Drone Technology
                </h2>
              </MotionWrapper>

              <MotionWrapper className="lg:col-span-7" delay={0.1}>
                <p className="para-text text-[#626262] leading-relaxed mb-5">
                  Manual inspection of energy infrastructure is slow, expensive,
                  and often dangerous. RIOD combines computer vision and
                  autonomous drone technology to monitor critical assets at
                  scale.
                </p>
                <p className="para-text text-[#626262] leading-relaxed">
                  From solar farms to substations and transmission corridors,
                  AI-powered analysis detects equipment anomalies, thermal
                  hotspots, and physical damage before they become failures.
                  Reduce inspection costs, eliminate manual risk, and shift from
                  reactive to predictive maintenance.
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
                AI-Powered Inspection
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

        {/* APPLICATIONS */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Applications
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                Where It Works
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {applications.map((app, index) => {
                const Icon = app.icon;
                return (
                  <MotionWrapper key={app.title} delay={index * 0.1}>
                    <div className="flex gap-5 p-6 md:p-8 rounded-xl border border-[#e8e8e8] h-full">
                      <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-[#cdf80a] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1b1b1b]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-2">
                          {app.title}
                        </h3>
                        <p className="para-text2 text-[#626262] leading-relaxed">
                          {app.description}
                        </p>
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
          <div className="w-[90%] max-w-[900px] mx-auto text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-medium text-white font-inter leading-tight mb-4">
                Inspect smarter, not harder
              </h2>
              <p className="para-text text-[#9a99a2] max-w-[500px] mx-auto mb-8">
                Talk to our engineers about AI-powered monitoring for your energy
                infrastructure.
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
