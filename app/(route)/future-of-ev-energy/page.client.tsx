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
  Sun,
  Network,
  ArrowRight,
  CheckCircle,
  Target,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const keyTrends = [
  {
    icon: Battery,
    title: "Charge Times Are Collapsing",
    description:
      "Battery chemistry is shifting from lithium-ion to solid-state. Several automakers have working prototypes that charge to 80% in under 15 minutes. When that reaches production, every parking lot, hotel, and retail location becomes a viable charging site. The infrastructure you build today needs to be ready for that.",
  },
  {
    icon: Network,
    title: "Parked EVs Are Becoming Grid Assets",
    description:
      "Vehicle-to-Grid is no longer a lab concept. Fleet operators in Europe and Japan are already feeding stored energy back to the grid during peak hours and getting paid for it. A parked EV fleet is not idle inventory. It is a distributed battery you can monetise.",
  },
  {
    icon: Sun,
    title: "Charging Stations That Generate Their Own Power",
    description:
      "Solar canopies paired with on-site battery storage are turning charging hubs into semi-autonomous energy systems. The economics are compelling: sites that generate their own power cut grid dependency dramatically and insulate themselves from tariff volatility.",
  },
  {
    icon: Globe,
    title: "Software Is Eating the Charging Stack",
    description:
      "The real margin in EV infrastructure is not in selling hardware. It is in the software layer: intelligent load balancing, predictive maintenance, fleet analytics, and energy trading. The companies winning this market look more like software platforms than equipment manufacturers.",
  },
  {
    icon: Building2,
    title: "Zero-Capex Models Are Replacing Procurement",
    description:
      "Enterprises are shifting from buying chargers to subscribing to charging-as-a-service. Hardware, software, maintenance, and energy management bundled into a monthly fee. The property owner takes no capital risk. The operator takes no technology risk.",
  },
  {
    icon: TrendingUp,
    title: "Heavy Transport Is Electrifying Faster Than Expected",
    description:
      "Megawatt-class charging for trucks and buses is moving from standards committees to live corridors. Logistics operators who assumed electrification was a decade away are now seeing dedicated charging routes being built along their supply chains.",
  },
];

const marketStats = [
  { value: "68%", label: "Of Fortune 500 companies have fleet electrification commitments" },
  { value: "40%", label: "Of new commercial buildings globally now require EV-ready parking" },
  { value: "2-3x", label: "Cost penalty for organisations that delay infrastructure by 2+ years" },
  { value: "30-40%", label: "Energy cost reduction achievable with intelligent load management" },
];

const industrySignals = [
  {
    signal: "An automaker opened its proprietary charging network to every EV brand and turned a connector design into a continental standard. The moat was never the hardware. It was the network effect.",
  },
  {
    signal: "Two oil majors pivoted their retail energy strategy entirely around EV charging, bundling energy procurement, hardware, and fleet analytics into a single contract. They are selling outcomes, not equipment.",
  },
  {
    signal: "The largest charging network operator earns its margin from software, fleet APIs, and data, not from manufacturing chargers. They do not build a single unit themselves.",
  },
  {
    signal: "A battery manufacturer that dominates global cell supply is now deploying its own charging and battery-swap infrastructure. When your supplier becomes your competitor, the rules change.",
  },
  {
    signal: "Industrial conglomerates are embedding DC charging into building management systems and campus energy networks. For them, a charger is not a product. It is a feature of a larger system.",
  },
];

const gatedSections = [
  {
    title: "Enterprise Readiness Assessment Framework",
    content: `Most organisations approach EV infrastructure as a facilities problem. The leaders treat it as a strategic asset. The difference between a charging installation and an energy platform determines whether your investment appreciates or depreciates over its 10-year lifecycle.\n\nThe framework evaluates five dimensions: grid capacity and upgrade pathways, energy cost optimisation potential, revenue generation capability, fleet electrification alignment, and regulatory compliance trajectory. Organisations scoring high across all five are positioned to turn EV infrastructure from a cost centre into a competitive advantage.`,
  },
  {
    title: "Smart Energy Architecture: What Market Leaders Are Building",
    content: `The next generation of EV infrastructure does not just charge vehicles. It orchestrates energy flows across solar generation, battery storage, grid tariffs, building loads, and vehicle batteries simultaneously.\n\nDynamic load balancing distributes available power across dozens of chargers without expensive electrical upgrades. Time-of-use optimisation shifts non-urgent charging to off-peak windows, reducing electricity costs by 30-40%. V2G-ready architecture prepares your fleet for bilateral energy trading, the market that McKinsey projects will be worth $15B globally by 2030.`,
  },
  {
    title: "Regulatory Landscape: Mandates That Will Force Your Hand",
    content: `The EU's Energy Performance of Buildings Directive (EPBD) mandates EV-ready parking in all new commercial buildings from 2025. California's CALGreen requires EV infrastructure in 20% of new commercial parking spaces. Similar mandates are rolling out across 40+ countries.\n\nFleet electrification timelines are tightening: the UK bans new ICE commercial vehicles by 2035, several US states follow California's Advanced Clean Fleets rule, and India's FAME III policy targets 30% fleet electrification by 2030. Organisations that wait for mandates to become enforceable will face 2-3x higher deployment costs due to contractor demand surges and rushed electrical upgrades.`,
  },
  {
    title: "Strategic Roadmap 2025-2030: The Decision Window",
    content: `The next 18 months represent a critical decision window. Early movers are locking in electrical capacity, securing favourable energy contracts, and building operational expertise before demand-driven cost inflation hits.\n\nNear-term (2025-2026): Deploy AC infrastructure at scale across owned and leased properties. Establish energy management platforms. Begin fleet electrification pilots with 10-20% of vehicles.\n\nMid-term (2027-2028): Add DC fast charging at high-traffic sites. Activate V2G revenue streams. Integrate charging with building energy management systems. Scale fleet electrification to 50%+.\n\nLong-term (2029-2030): Operate autonomous energy microgrids combining solar, storage, and bidirectional charging. Achieve energy cost neutrality or net-positive status. Full fleet electrification with predictive maintenance and AI-optimised routing.\n\nThe cost of inaction is measurable: organisations that delay by 2 years typically face 40-60% higher total deployment costs and miss the first wave of regulatory incentives.`,
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
          formTitle: "Future of EV Energy - Strategic Briefing Access",
          page: "/future-of-ev-energy",
          data: formData,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsUnlocked(true);
      setFormData({ name: "", email: "", company: "", phone: "" });
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ReactLenis root>
      <div className="overflow-hidden">
        {/* HERO */}
        <section className="bg-[#1b1b1b] pt-36 md:pt-44 pb-16 md:pb-24">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-5">
                Strategic Briefing 2025
              </span>
              <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-inter font-semibold text-white leading-tight max-w-[900px]">
                The EV Energy Transition:<br />
                Who Moves First, Wins
              </h1>
              <p className="text-white/70 text-base md:text-lg mt-6 max-w-[680px] leading-relaxed font-inter">
                Tesla, BP, Shell, and ChargePoint are making billion-dollar bets on
                EV charging infrastructure. This briefing breaks down what the
                market leaders are building, which technologies will define the
                next five years, and what it means for your organisation.
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

        {/* KEY TRENDS */}
        <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
                Technology & Market Forces
              </span>
              <h2 className="section-heading text-[#1b1b1b] mb-4">
                Six Shifts Redefining<br />the Competitive Landscape
              </h2>
              <p className="para-text text-[#626262] max-w-[640px] mb-16">
                These are not predictions. They are active programmes with
                committed capital, published timelines, and named operators.
              </p>
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

        {/* INDUSTRY SIGNALS - the hook */}
        <section className="bg-[#f4f4f4] pt-16 md:pt-[6.8rem] pb-16 md:pb-20">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <MotionWrapper>
              <div className="mb-12 md:mb-16">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
                  Market Signals
                </span>
                <h2 className="section-heading text-[#1b1b1b] mb-4">
                  Capital Is Moving.<br />Positions Are Being Taken.
                </h2>
                <p className="para-text text-[#626262] max-w-[640px]">
                  These are not announcements. These are deployed programmes with
                  committed budgets and published timelines. The full briefing
                  covers where the gaps are, and where the real opportunities sit.
                </p>
              </div>
            </MotionWrapper>

            <div className="space-y-4">
              {industrySignals.map((item, i) => (
                <MotionWrapper key={i} delay={i * 0.08}>
                  <div className="bg-white rounded-xl p-6 md:p-8 flex items-start gap-5 border border-[#eee]">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1b1b1b] text-[#cdf80a] text-xs font-bold font-inter shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#444] text-[15px] leading-relaxed font-inter">
                      {item.signal}
                    </p>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper>
              <p className="text-[#999] text-sm font-inter mt-8 max-w-[640px]">
                The full briefing covers the architecture choices behind each
                approach, the trade-offs they accepted, and what the next wave
                of infrastructure will need to do differently.
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* GATED CONTENT SECTION */}
        {!isUnlocked ? (
          <section className="bg-[#1b1b1b] py-16 md:py-[6.8rem]">
            <div className="w-[90%] max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left - what they get */}
                <MotionWrapper>
                  <div>
                    <Target className="w-10 h-10 text-[#cdf80a] mb-6" />
                    <h2 className="text-[1.8rem] md:text-[2.2rem] font-inter font-semibold text-white leading-tight mb-3">
                      Get Early Access to the<br />Full Strategic Briefing
                    </h2>
                    <p className="text-white/60 text-base leading-relaxed font-inter mb-6">
                      The sections above cover what is happening. The briefing
                      below covers what to do about it:
                    </p>
                    <ul className="space-y-3 mb-8">
                      {gatedSections.map((s) => (
                        <li key={s.title} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#cdf80a] mt-0.5 shrink-0" />
                          <span className="text-white/80 text-sm font-inter">
                            {s.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <BarChart3 className="w-5 h-5 text-[#cdf80a] mt-0.5 shrink-0" />
                        <p className="text-white/50 text-xs leading-relaxed font-inter">
                          Based on data from BloombergNEF, McKinsey Energy Insights,
                          IEA Global EV Outlook 2025, and published corporate
                          roadmaps from Tesla, ChargePoint, BP, Shell, Siemens,
                          and ABB.
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>

                {/* Right - form */}
                <MotionWrapper>
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#252525] rounded-2xl p-8 md:p-10 border border-white/10"
                  >
                    <h3 className="text-white text-xl font-semibold font-inter mb-2">
                      Request Early Access
                    </h3>
                    <p className="text-white/40 text-sm font-inter mb-6">
                      For enterprise leaders evaluating EV infrastructure strategy.
                    </p>

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
                        placeholder="Company *"
                        required
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
                      {isSubmitting ? "Submitting..." : "Get Early Access"}
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
          /* CONFIRMATION MESSAGE */
          <section className="bg-[#1b1b1b] py-16 md:py-[6.8rem]">
            <div className="w-[90%] max-w-[600px] mx-auto text-center">
              <MotionWrapper>
                <div className="w-16 h-16 rounded-full bg-[#cdf80a] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#1b1b1b]" />
                </div>
                <h2 className="text-[1.8rem] md:text-[2.2rem] font-inter font-semibold text-white leading-tight mb-4">
                  Request Received
                </h2>
                <p className="text-white/60 text-base leading-relaxed font-inter mb-3">
                  Thank you for your interest. Our team will review your request and share the full strategic briefing with you shortly.
                </p>
                <p className="text-white/40 text-sm font-inter">
                  We typically respond within 1 business day.
                </p>
              </MotionWrapper>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-[#1b1b1b] pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto text-center">
            <MotionWrapper>
              <Zap className="w-10 h-10 text-[#cdf80a] mx-auto mb-6" />
              <h2 className="text-[1.8rem] md:text-[2.5rem] font-inter font-semibold text-white leading-tight mb-4">
                Building the Infrastructure<br />Behind the Transition
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-[600px] mx-auto mb-8 font-inter">
                RIOD engineers full-stack energy and charging technology for
                enterprises, fleet operators, and infrastructure providers.
                From hardware design to cloud platforms, we build the systems
                that power what comes next.
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
