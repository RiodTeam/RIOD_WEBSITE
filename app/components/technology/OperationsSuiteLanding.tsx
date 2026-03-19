"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  Settings,
  Brain,
  Ticket,
  BarChart3,
  Shield,
  Wrench,
  TrendingUp,
  AlertTriangle,
  Users,
} from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";

const operatePlusModules = [
  {
    icon: TrendingUp,
    title: "Predictive Fault Engine",
    description:
      "Predict component failures before they cause downtime, using charger telemetry patterns and usage history.",
  },
  {
    icon: AlertTriangle,
    title: "Auto-RCA Engine",
    description:
      "Automatic root cause analysis on every fault, with next-best-action recommendations for the ops team.",
  },
  {
    icon: Ticket,
    title: "Smart Ticket Intelligence",
    description:
      "Auto-prioritise tickets by fault severity, SLA risk, and business impact so the right issues get fixed first.",
  },
  {
    icon: Wrench,
    title: "Maintenance Optimizer",
    description:
      "Schedule preventive maintenance based on usage cycles and degradation trends before failures occur.",
  },
  {
    icon: BarChart3,
    title: "Downtime Cost Analyzer",
    description:
      "Quantify revenue loss and SLA penalties from every downtime event to drive accountability.",
  },
  {
    icon: Users,
    title: "Technician Efficiency Tracker",
    description:
      "Measure field team performance with resolution time analytics and workload balancing.",
  },
  {
    icon: Eye,
    title: "Idle Blocking Detection",
    description:
      "Vision AI detects ICE vehicles or idle EVs occupying charging bays and triggers enforcement actions.",
  },
  {
    icon: Shield,
    title: "EVSE Diagnostic Tool",
    description:
      "Field technician app for on-site charger diagnostics, testing, logging, and reporting.",
  },
];

const tiers = [
  {
    icon: Eye,
    tier: "Tier 1",
    name: "EVSE Observe",
    tagline: "Live operational visibility",
    description:
      "Real-time charger status, session tracking, failure detection, and multi-site dashboards. See everything before issues reach your users.",
    features: [
      "Real-time charger status, session tracking, and error diagnostics",
      "Continuous failure detection across all chargers",
      "Live dashboards with configurable alerts",
      "Multi-site visibility from a single view",
    ],
  },
  {
    icon: Settings,
    tier: "Tier 2",
    name: "EVSE Operate",
    tagline: "Managed operations and SLA",
    description:
      "Automated fault-to-ticket workflows, self-recovery attempts, SLA tracking, and remote charger control for your operations team.",
    features: [
      "Automated service ticket creation from fault events",
      "Self-recovery attempts before escalating to technicians",
      "SLA tracking and maintenance workflow management",
      "Remote start, stop, configuration, and firmware updates",
    ],
  },
  {
    icon: Brain,
    tier: "Tier 3",
    name: "EVSE Operate Plus",
    tagline: "AI-powered intelligence modules",
    description:
      "Predictive fault engine, auto-RCA, smart ticket prioritisation, and eight advanced analytics modules that layer on top of Operate.",
    features: [
      "Predictive Fault Engine and Auto-RCA",
      "Smart Ticket Intelligence by severity and SLA",
      "Maintenance Optimizer and Downtime Cost Analyzer",
      "Vision AI for idle blocking and overstay detection",
    ],
  },
];

const detailSections = [
  {
    num: "01",
    name: "EVSE Observe",
    subtitle: "Live Operational View",
    body: "The base layer that gives operators continuous visibility into charger health and performance. See everything happening across your network before issues impact users.",
    points: [
      "Real-time charger status, session tracking, and error diagnostics",
      "Continuous monitoring and failure detection across all chargers",
      "Live operational dashboards with configurable alerts",
      "Multi-site visibility from a single pane of glass",
    ],
    image: "/technology/ops-observe.webp",
    bg: "bg-white",
    reversed: false,
  },
  {
    num: "02",
    name: "EVSE Operate",
    subtitle: "Managed Charger Operations",
    body: "The core operations layer that turns charger data into service tickets, maintenance actions, and SLA management. Self-recovery is attempted automatically; if it fails, a ticket is created for the operations team.",
    points: [
      "Automated service ticket creation from fault events",
      "Self-recovery attempts before escalating to technicians",
      "SLA tracking and maintenance workflow management",
      "Remote start/stop, configuration, and firmware updates",
    ],
    image: "/technology/ops-operate.webp",
    bg: "bg-[#f8f8f8]",
    reversed: true,
  },
  {
    num: "03",
    name: "EVSE Operate Plus",
    subtitle: "Advanced Intelligence Modules",
    body: "AI and analytics modules that layer on top of Operate. Each module addresses a specific operational challenge and can be deployed independently as your network grows.",
    points: [
      "Predictive Fault Engine: predict failures before they occur",
      "Auto-RCA Engine: automatic root cause and next best action",
      "Smart Ticket Intelligence: auto-prioritise by severity and SLA",
      "Idle Blocking and Overstay Detection via Vision AI",
    ],
    image: "/technology/ops-plus.webp",
    bg: "bg-white",
    reversed: false,
  },
];

export default function OperationsSuiteLanding() {
  return (
    <ReactLenis root>
      <main>
        {/* HERO */}
        <HeroSection
          backgroundImage="/technology/operations-suite.webp"
          title="EVSE Operations Suite"
          description="Three-tier operations platform. Observe your network, operate it efficiently, and optimise it with AI."
          overlayOpacity={0.5}
        />

        {/* INTRO */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <MotionWrapper className="lg:col-span-5">
                <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
                  Operations Suite
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  One Platform.
                  <br />
                  Three Tiers of Control.
                </h2>
              </MotionWrapper>

              <MotionWrapper className="lg:col-span-7" delay={0.1}>
                <p className="para-text text-[#626262] leading-relaxed mb-5">
                  The EVSE Operations Suite is RIOD&apos;s end-to-end platform
                  for running a charging network. It is structured in three
                  tiers: Observe gives you live visibility, Operate turns
                  visibility into action and SLA management, and Operate Plus
                  adds AI-powered intelligence for predictive maintenance and
                  advanced analytics.
                </p>
                <p className="para-text text-[#626262] leading-relaxed">
                  Each tier builds on the previous one. Start with Observe and
                  add Operate and Operate Plus as your network grows and your
                  operations mature.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* THREE TIER CARDS (dark) */}
        <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40 font-inter mb-3">
                Platform Tiers
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white font-inter leading-tight mb-12 md:mb-16">
                From Visibility to Intelligence
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <MotionWrapper key={tier.name} delay={index * 0.1}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-7 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-lg bg-[#cdf80a] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#1b1b1b]" />
                        </div>
                        <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 font-inter">
                          {tier.tier}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium text-white font-inter mb-1">
                        {tier.name}
                      </h3>
                      <p className="text-xs font-medium tracking-wide uppercase text-[#cdf80a] mb-4">
                        {tier.tagline}
                      </p>
                      <p className="para-text2 text-[#9a99a2] leading-relaxed mb-6">
                        {tier.description}
                      </p>
                      <ul className="space-y-2.5 mt-auto">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#cdf80a] mt-1.5 shrink-0" />
                            <span className="text-sm text-white/60 font-inter leading-relaxed">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* DETAILED SECTIONS */}
        {detailSections.map((sec) => (
          <section key={sec.num} className={`py-16 md:py-[5.5rem] ${sec.bg}`}>
            <div className="w-[90%] max-w-[1400px] mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center`}
              >
                <MotionWrapper
                  delay={0.1}
                  className={sec.reversed ? "lg:order-2" : ""}
                >
                  <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] rounded-xl overflow-hidden bg-[#e8e8e8]">
                    <Image
                      src={sec.image}
                      alt={sec.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </MotionWrapper>

                <MotionWrapper
                  delay={0.25}
                  className={sec.reversed ? "lg:order-1" : ""}
                >
                  <span className="text-sm font-medium text-[#9a99a2] font-inter block mb-4">
                    {sec.num}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-normal text-black font-inter leading-tight mb-2">
                    {sec.name}
                  </h2>
                  <p className="text-base font-medium text-[#cdf80a] font-inter mb-4"
                    style={{ color: "#1b1b1b", opacity: 0.5 }}>
                    {sec.subtitle}
                  </p>
                  <p className="para-text text-[#626262] mb-6 leading-relaxed">
                    {sec.body}
                  </p>
                  <ul className="space-y-3">
                    {sec.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cdf80a] mt-2 shrink-0" />
                        <span className="para-text2 text-[#626262] leading-relaxed">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MotionWrapper>
              </div>
            </div>
          </section>
        ))}

        {/* OPERATE PLUS MODULES GRID */}
        <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Operate Plus
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
                Eight Intelligence Modules
              </h2>
              <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
                Each module addresses a specific operational challenge. Deploy
                the ones relevant to your network size and complexity.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {operatePlusModules.map((mod, index) => {
                const Icon = mod.icon;
                return (
                  <MotionWrapper key={mod.title} delay={index * 0.07}>
                    <div className="bg-white rounded-xl p-6 h-full">
                      <div className="w-11 h-11 rounded-lg bg-[#1b1b1b] flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-[#cdf80a]" />
                      </div>
                      <h3 className="text-base font-medium text-[#1b1b1b] font-inter mb-2">
                        {mod.title}
                      </h3>
                      <p className="para-text2 text-[#626262] leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{ backgroundColor: "#cdf80a" }}
          className="py-16 md:py-[6.8rem]"
        >
          <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="section-heading text-black">
                Ready to take control of
                <br />
                your charger network?
              </h2>
              <p className="para-text text-black/60 mt-4 max-w-[520px]">
                Talk to our team about deploying the EVSE Operations Suite for
                your charging network.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors shrink-0 group self-start md:self-auto"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
