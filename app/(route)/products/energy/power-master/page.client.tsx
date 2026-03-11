"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Sun,
  Wind,
  Battery,
  Thermometer,
  Plug,
  Radio,
  Bluetooth,
  Cpu,
  Wifi,
  Network,
  Download,
  ShieldCheck,
  Zap,
  BarChart3,
} from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import PowerMasterArchitecture from "@/app/components/energy/PowerMasterArchitecture";

const capabilities = [
  {
    icon: Gauge,
    title: "Dynamic Load Balancing",
    description:
      "Monitor grid consumption, load, and renewable generation in real time. Under grid distress, Power Master automatically adjusts power to EVSE and other controllable equipment.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Queuing",
    description:
      "Smart charging queue management that prioritises vehicles based on departure time, battery state, and grid availability. No manual intervention needed.",
  },
  {
    icon: Sun,
    title: "Solar Management",
    description:
      "Maximise self-consumption from rooftop or ground-mounted solar. Power Master routes surplus solar energy to EV chargers and battery storage before exporting to the grid.",
  },
  {
    icon: Thermometer,
    title: "Smart HVAC Control",
    description:
      "Integrate building HVAC systems as controllable loads. Reduce peak demand by coordinating cooling, heating, and EV charging schedules.",
  },
  {
    icon: Battery,
    title: "Battery Storage (BESS)",
    description:
      "Integrate battery energy storage for peak shaving, demand response, and backup power. Power Master coordinates charge/discharge cycles with grid and solar conditions.",
  },
  {
    icon: Wind,
    title: "Grid-Connected Systems",
    description:
      "Monitor grid health, respond to demand signals, and participate in grid-balancing programmes. Designed for buildings, factories, and commercial campuses.",
  },
];

const protocols = [
  {
    icon: Plug,
    device: "EV Charger",
    protocols: "OCPP, EEBUS",
  },
  {
    icon: Sun,
    device: "Solar Inverter",
    protocols: "Modbus, EEBUS",
  },
  {
    icon: Thermometer,
    device: "Heat Pump",
    protocols: "SG-Ready, EEBUS",
  },
  {
    icon: Battery,
    device: "Battery (BESS)",
    protocols: "Modbus, Manufacturer API",
  },
];

const connectivity = [
  { icon: Radio, label: "Zigbee" },
  { icon: Bluetooth, label: "BLE" },
  { icon: Cpu, label: "RS485" },
  { icon: Zap, label: "DI/AI" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Network, label: "Ethernet" },
];

export default function PowerMasterClient() {
  return (
    <ReactLenis root>
      <main>
        {/* HERO */}
        <HeroSection
          backgroundImage="/home/hero.webp"
          title="Power Master"
          description="Dynamic load balancing system. Hardware with integrated software, built to control what matters."
          overlayOpacity={0.55}
        />

        {/* INTRO */}
        <section className="py-16 md:py-[6.8rem] bg-white">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <MotionWrapper className="lg:col-span-5">
                <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
                  Power Master
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight">
                  Dynamic Load Balancing System
                </h2>
              </MotionWrapper>

              <MotionWrapper className="lg:col-span-7" delay={0.1}>
                <p className="para-text text-[#626262] leading-relaxed mb-5">
                  Power Master is a hardware unit with integrated software that
                  acts as the energy brain of your site. It monitors grid
                  consumption, renewable generation, and load in real time.
                  Under grid distress, it adjusts power to EV chargers and other
                  controllable equipment automatically.
                </p>
                <p className="para-text text-[#626262] leading-relaxed">
                  It works like a software central. New devices, whether HVAC
                  systems, solar inverters, battery storage, or EV chargers, can
                  be onboarded to Power Master. It supports both standard and
                  proprietary protocols to establish and manage these energy
                  assets from a single point.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* APP-BASED CAPABILITIES */}
        <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Downloadable Capabilities
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
                Install What You Need
              </h2>
              <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
                Power Master runs modular applications. Need EV charging
                intelligent queuing? Download it. Need solar management? Download
                it. Each capability is an app that can be installed on the same
                hardware.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <MotionWrapper key={cap.title} delay={index * 0.08}>
                    <div className="bg-white rounded-xl p-7 md:p-8 h-full">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-lg bg-[#1b1b1b] flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#cdf80a]" />
                        </div>
                        <Download className="w-4 h-4 text-[#9a99a2]" />
                      </div>
                      <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-2.5">
                        {cap.title}
                      </h3>
                      <p className="para-text2 text-[#626262] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROTOCOL SUPPORT */}
        <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <MotionWrapper>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40 font-inter mb-3">
                    Integration
                  </p>
                  <h2 className="text-3xl md:text-4xl font-medium text-white font-inter leading-tight mb-4">
                    Speaks Every Protocol
                  </h2>
                  <p className="para-text text-[#9a99a2] leading-relaxed mb-8">
                    Power Master supports standard and proprietary protocols to
                    communicate with every type of energy asset. One hardware
                    unit that connects to everything on your site.
                  </p>

                  {/* Connectivity chips */}
                  <div className="flex flex-wrap gap-3">
                    {connectivity.map((conn) => {
                      const Icon = conn.icon;
                      return (
                        <div
                          key={conn.label}
                          className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-2"
                        >
                          <Icon className="w-3.5 h-3.5 text-[#cdf80a]" />
                          <span className="text-sm text-white/70 font-inter">
                            {conn.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </MotionWrapper>
              </div>

              {/* Protocol mapping cards */}
              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {protocols.map((proto, index) => {
                    const Icon = proto.icon;
                    return (
                      <MotionWrapper key={proto.device} delay={index * 0.1}>
                        <div className="flex items-center gap-5 p-5 md:p-6 rounded-xl bg-white/5 border border-white/10">
                          <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-[#cdf80a] flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#1b1b1b]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-medium text-white font-inter">
                              {proto.device}
                            </h3>
                            <p className="text-sm text-[#9a99a2] mt-0.5">
                              via {proto.protocols}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/30" />
                        </div>
                      </MotionWrapper>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE DIAGRAM */}
        <PowerMasterArchitecture />

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
                Architecture
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-12 md:mb-16">
                One Hardware. Infinite Possibilities.
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MotionWrapper delay={0}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#cdf80a] flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-7 h-7 text-[#1b1b1b]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#1b1b1b] font-inter mb-3">
                    Hardware
                  </h3>
                  <p className="para-text2 text-[#626262] leading-relaxed">
                    A single Power Master unit with Zigbee, BLE, RS485, DI/AI,
                    Wi-Fi, and Ethernet connectivity. Installs at the
                    distribution board.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#cdf80a] flex items-center justify-center mx-auto mb-6">
                    <Download className="w-7 h-7 text-[#1b1b1b]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#1b1b1b] font-inter mb-3">
                    Apps
                  </h3>
                  <p className="para-text2 text-[#626262] leading-relaxed">
                    Download capabilities as needed. EV charging queuing, solar
                    management, HVAC control, and BESS integration are all
                    modular apps.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#cdf80a] flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-7 h-7 text-[#1b1b1b]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#1b1b1b] font-inter mb-3">
                    Control
                  </h3>
                  <p className="para-text2 text-[#626262] leading-relaxed">
                    Real-time monitoring and control of all onboarded assets.
                    Grid-aware decisions, automated demand response, and
                    centralised reporting.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
          <div className="w-[90%] max-w-[900px] mx-auto text-center">
            <MotionWrapper>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
                Ready to manage your energy?
              </h2>
              <p className="para-text text-[#626262] max-w-[500px] mx-auto mb-8">
                Talk to our engineers about integrating Power Master into your
                building, factory, or commercial site.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1b1b1b] text-white px-7 py-3.5 rounded-full font-inter font-medium text-sm hover:bg-[#333] transition-colors"
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
