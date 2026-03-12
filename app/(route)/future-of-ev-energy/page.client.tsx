"use client";

import React, { useState } from "react";
import ReactLenis from "lenis/react";
import MotionWrapper from "@/app/components/common/MotionWrapper";
import {
  Zap,
  Battery,
  Globe,
  TrendingUp,
  Building2,
  Car,
  Sun,
  Network,
  ArrowRight,
  Lock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const keyTrends = [
  {
    icon: Battery,
    title: "Next-Gen Battery Tech",
    description:
      "Solid-state batteries, silicon anodes, and sodium-ion cells are pushing energy density higher while slashing charge times to under 15 minutes.",
  },
  {
    icon: Network,
    title: "Vehicle-to-Grid (V2G)",
    description:
      "EVs become mobile power plants — feeding stored energy back into the grid during peak demand and earning revenue for owners.",
  },
  {
    icon: Sun,
    title: "Solar-Integrated Charging",
    description:
      "On-site solar canopies paired with battery buffers let charging stations operate partially or fully off-grid.",
  },
  {
    icon: Globe,
    title: "Smart Grid Integration",
    description:
      "AI-driven load balancing across thousands of chargers, dynamically shifting demand to off-peak windows and renewable supply surges.",
  },
  {
    icon: Building2,
    title: "Charging-as-a-Service",
    description:
      "Hardware, software, and maintenance bundled into zero-capex subscription models — making EV infrastructure accessible to every property owner.",
  },
  {
    icon: TrendingUp,
    title: "Ultra-Fast DC Networks",
    description:
      "350 kW+ corridors along highways with automated payment, predictive queuing, and real-time availability maps.",
  },
];

const marketStats = [
  { value: "30M+", label: "EVs on Indian roads by 2030" },
  { value: "4,00,000+", label: "Public chargers needed by 2030" },
  { value: "₹1.5L Cr", label: "Projected market by 2030" },
  { value: "80%", label: "Lower fuel cost vs ICE vehicles" },
];

const gatedSections = [
  {
    title: "The RIOD Approach: Full-Stack Energy Infrastructure",
    content: `RIOD builds every layer of the charging stack in-house — from power electronics and embedded firmware to OCPP-compliant cloud platforms and AI-powered energy management. This vertical integration eliminates vendor lock-in, accelerates innovation cycles, and ensures that every component is optimized for Indian grid conditions.\n\nOur hardware is designed for ambient temperatures exceeding 45°C, voltage fluctuations of ±20%, and dust ingress common across the subcontinent. The firmware supports over-the-air updates, remote diagnostics, and adaptive power management that responds to grid signals in real time.`,
  },
  {
    title: "Smart Energy Management: Beyond Just Charging",
    content: `The future of EV infrastructure isn't just about pushing electrons into batteries — it's about intelligent energy orchestration. RIOD's energy management platform monitors solar generation, battery storage levels, grid tariffs, and charger demand simultaneously.\n\nDynamic load balancing distributes available power across multiple chargers without tripping breakers or requiring expensive electrical upgrades. Time-of-use optimization shifts non-urgent charging to off-peak windows, reducing electricity costs by up to 40%. And with V2G-ready architecture, RIOD chargers are prepared for the bilateral energy flows that will define tomorrow's grid.`,
  },
  {
    title: "The Policy Landscape: Incentives & Regulations",
    content: `India's FAME II subsidy scheme, state-level EV policies, and the Bureau of Energy Efficiency's charging standards are accelerating adoption. States like Karnataka, Maharashtra, Delhi, and Kerala offer capital subsidies of 25-50% on charging infrastructure.\n\nUpcoming regulations around green building mandates (requiring EV-ready parking), fleet electrification timelines, and carbon credit frameworks will further drive demand. RIOD's OCPP 1.6J compliance and upgrade path to OCPP 2.0.1 ensure our customers remain compliant as standards evolve.`,
  },
  {
    title: "Roadmap 2025-2030: What's Next",
    content: `RIOD's roadmap is anchored in three pillars: deeper hardware intelligence, broader energy platform capabilities, and wider geographic reach.\n\nNear-term (2025): Launch of DC fast chargers (30 kW–120 kW), expansion of the OCPP cloud to support 50,000+ endpoints, and integration with major payment gateways for seamless public charging.\n\nMid-term (2026-2027): V2G-capable bidirectional chargers, AI-based predictive maintenance that flags component failures before they happen, and a white-label SaaS platform for charge point operators.\n\nLong-term (2028-2030): Autonomous energy micro-grids combining solar, storage, and EV charging in a single turnkey package — deployed at scale across highways, commercial complexes, and residential townships.`,
  },
];

export default function FutureOfEVEnergyClient() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/discord-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formTitle: "Future of EV Energy - Content Unlock",
          page: "/future-of-ev-energy",
          data: formData,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsUnlocked(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ReactLenis root>
      <div className="overflow-hidden">
        {/* HERO - Dark section with no image */}
        <section className="bg-[#1b1b1b] pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#cdf80a] block mb-4">
                Industry Report
              </span>
              <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-inter font-semibold text-white leading-tight max-w-[800px]">
                The Future of EV<br />Energy in India
              </h1>
              <p className="text-white/70 text-base md:text-lg mt-6 max-w-[640px] leading-relaxed font-inter">
                A comprehensive look at the technologies, policies, and market
                forces shaping India&apos;s electric vehicle charging
                infrastructure — and how RIOD is engineering the road ahead.
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* MARKET STATS */}
        <section className="bg-black py-16 md:py-20">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {marketStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-[2rem] md:text-[2.5rem] font-bold text-[#cdf80a] font-inter">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm mt-2 font-inter">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* KEY TRENDS - visible to all */}
        <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
                Trends & Innovations
              </span>
              <h2 className="section-heading text-[#1b1b1b] mb-16">
                Six Forces Reshaping<br />EV Charging
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyTrends.map((trend) => (
                <MotionWrapper key={trend.title}>
                  <div className="bg-[#f8f8f8] rounded-xl p-8 h-full border border-[#eee] hover:border-[#cdf80a]/40 transition-colors">
                    <trend.icon className="w-8 h-8 text-[#cdf80a] mb-5" />
                    <h3 className="text-lg font-semibold text-[#1b1b1b] font-inter mb-3">
                      {trend.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed font-inter">
                      {trend.description}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* INDIA EV LANDSCAPE - visible intro */}
        <section className="bg-[#f4f4f4] pt-16 md:pt-[6.8rem] pb-16 md:pb-20">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
                    India&apos;s EV Landscape
                  </span>
                  <h2 className="section-heading text-[#1b1b1b]">
                    The Charging<br />Gap Is Real
                  </h2>
                </div>
                <div className="text-[#444] text-base leading-relaxed font-inter space-y-4">
                  <p>
                    India has roughly 12,000 public charging stations today — a fraction of the
                    4,00,000+ needed to support projected EV adoption by 2030. The bottleneck
                    isn&apos;t just hardware — it&apos;s the lack of integrated solutions that combine
                    reliable chargers, intelligent software, and sustainable energy management.
                  </p>
                  <p>
                    Apartment complexes struggle with shared electrical infrastructure. Commercial
                    properties want revenue from chargers but lack the platforms to manage billing.
                    Highway corridors need fast chargers that stay online in harsh conditions.
                    Each use case demands a different combination of hardware, software, and energy
                    design — and that&apos;s exactly what RIOD builds.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* GATED CONTENT SECTION */}
        {!isUnlocked ? (
          <section className="bg-[#1b1b1b] py-16 md:py-[6.8rem]">
            <div className="w-[90%] max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left — preview */}
                <MotionWrapper>
                  <div>
                    <Lock className="w-10 h-10 text-[#cdf80a] mb-6" />
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-inter font-semibold text-white leading-tight mb-4">
                      Unlock the Full Report
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed font-inter mb-6">
                      Get exclusive access to the complete report including:
                    </p>
                    <ul className="space-y-3">
                      {gatedSections.map((s) => (
                        <li key={s.title} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#cdf80a] mt-0.5 shrink-0" />
                          <span className="text-white/80 text-sm font-inter">
                            {s.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>

                {/* Right — form */}
                <MotionWrapper>
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#252525] rounded-2xl p-8 md:p-10 border border-white/10"
                  >
                    <h3 className="text-white text-xl font-semibold font-inter mb-6">
                      Fill in your details to continue reading
                    </h3>

                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-5 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-[#cdf80a]/50 transition"
                      />
                      <input
                        type="email"
                        placeholder="Work Email *"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-5 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-[#cdf80a]/50 transition"
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-5 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-[#cdf80a]/50 transition"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#1b1b1b] border border-white/10 rounded-lg px-5 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-[#cdf80a]/50 transition"
                      />
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-sm mt-3">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-6 bg-[#cdf80a] text-[#1b1b1b] font-semibold text-sm py-4 rounded-lg hover:bg-[#b8e000] transition-colors disabled:opacity-50 font-inter"
                    >
                      {isSubmitting ? "Submitting..." : "Unlock Full Report"}
                    </button>

                    <p className="text-white/30 text-xs mt-4 font-inter">
                      By submitting, you agree to receive communications from RIOD.
                      We respect your privacy.
                    </p>
                  </form>
                </MotionWrapper>
              </div>
            </div>
          </section>
        ) : (
          /* UNLOCKED CONTENT */
          <>
            {gatedSections.map((section, i) => (
              <section
                key={section.title}
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-[#f4f4f4]"
                } pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]`}
              >
                <div className="w-[90%] max-w-[1400px] mx-auto">
                  <MotionWrapper>
                    <h2 className="text-[1.6rem] md:text-[2rem] font-inter font-semibold text-[#1b1b1b] leading-tight mb-8">
                      {section.title}
                    </h2>
                    <div className="max-w-[820px] text-[#444] text-base leading-relaxed font-inter space-y-4">
                      {section.content.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  </MotionWrapper>
                </div>
              </section>
            ))}
          </>
        )}

        {/* CTA Section */}
        <section className="bg-[#1b1b1b] pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto text-center">
            <MotionWrapper>
              <Zap className="w-10 h-10 text-[#cdf80a] mx-auto mb-6" />
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-inter font-semibold text-white leading-tight mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-[560px] mx-auto mb-8 font-inter">
                Whether you&apos;re a property developer, fleet operator, or charge point
                investor — talk to our team about deploying RIOD infrastructure.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#cdf80a] text-[#1b1b1b] font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#b8e000] transition-colors font-inter"
              >
                Talk to Our Engineers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MotionWrapper>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
