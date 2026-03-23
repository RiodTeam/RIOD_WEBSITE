"use client";

import React from "react";
import ReactLenis from "lenis/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import BlogGrid from "@/app/components/insights/BlogGrid";
import type { InsightType } from "@/app/components/data/insightsData";

export default function PageClient({ insights }: { insights: InsightType[] }) {
  return (
    <ReactLenis root>
      <div className="overflow-hidden">

        <BlogGrid insights={insights} />

        {/* CTA */}
        <section style={{ backgroundColor: "#cdf80a" }} className="py-16 md:py-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="section-heading text-black">
                Have a Charging Project<br />in Mind?
              </h2>
              <p className="para-text text-black/60 mt-4 max-w-[480px]">
                Talk to our engineers, whether it's a new deployment, an integration, or a product question.
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

      </div>
    </ReactLenis>
  );
}
