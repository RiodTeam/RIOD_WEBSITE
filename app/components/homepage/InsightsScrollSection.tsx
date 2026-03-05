"use client";

import MotionWrapper from "../common/MotionWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    category: "Technology",
    title: "The Rise of V2G Technology in India",
    date: "Feb 2026",
    href: "/insights",
  },
  {
    category: "Standards",
    title: "OCPP 2.0.1: What Operators Need to Know",
    date: "Jan 2026",
    href: "/insights",
  },
  {
    category: "Software",
    title: "Building Scalable CPMS Platforms",
    date: "Jan 2026",
    href: "/insights",
  },
  {
    category: "Engineering",
    title: "DC Fast Charging: Hardware Design Deep Dive",
    date: "Dec 2025",
    href: "/insights",
  },
  {
    category: "Solutions",
    title: "Energy Management for Multi-Point Charging",
    date: "Dec 2025",
    href: "/insights",
  },
  {
    category: "Standards",
    title: "ISO 15118 Plug & Charge Implementation",
    date: "Nov 2025",
    href: "/insights",
  },
  {
    category: "Industry",
    title: "Fleet Electrification: Complete Guide",
    date: "Nov 2025",
    href: "/insights",
  },
  {
    category: "Technology",
    title: "Smart Grid Integration for EV Charging",
    date: "Oct 2025",
    href: "/insights",
  },
];

export default function InsightsScrollSection() {
  const duplicatedInsights = [...insights, ...insights];

  return (
    <section className="bg-black text-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem] overflow-hidden">
      <div className="w-[90%] max-w-[1400px] mx-auto mb-12 md:mb-16">
        <MotionWrapper>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#cdf80a] block mb-3">
                Insights & Updates
              </span>
              <h2 className="section-heading text-white">
                Latest in EV<br />Charging Tech
              </h2>
            </div>
            <Link
              href="/insights"
              className="flex items-center gap-2 text-white/70 hover:text-[#cdf80a] transition-colors shrink-0 self-start md:self-auto"
            >
              <span className="text-sm font-medium">View All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionWrapper>
      </div>

      <div className="animate-insights-scroll flex gap-5">
        {duplicatedInsights.map((insight, index) => (
          <Link
            key={`${insight.title}-${index}`}
            href={insight.href}
            className="flex-shrink-0 w-[320px] md:w-[380px] group"
          >
            <div className="bg-[#141414] border border-[#222] rounded-xl p-6 md:p-8 h-full flex flex-col hover:border-[#cdf80a]/30 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-black"
                  style={{ backgroundColor: "#cdf80a" }}
                >
                  {insight.category}
                </span>
                <span className="text-xs text-[#717171]">{insight.date}</span>
              </div>
              <h3 className="text-lg font-normal text-white group-hover:text-[#cdf80a] transition-colors leading-snug">
                {insight.title}
              </h3>
              <div className="flex items-center gap-2 mt-auto pt-6 text-[#717171] group-hover:text-[#cdf80a] transition-colors">
                <span className="text-xs font-medium">Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
