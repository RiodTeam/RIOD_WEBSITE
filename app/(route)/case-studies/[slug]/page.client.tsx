"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/app/components/data/caseStudiesData";
import CaseStudyDetail from "@/app/components/case-studies/CaseStudyDetail";

export default function PageClient({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <CaseStudyDetail data={caseStudy} />

      {/* CTA */}
      <section style={{ backgroundColor: "#cdf80a" }} className="py-16 md:py-[6.8rem]">
        <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="section-heading text-black">
              Want similar results?
            </h2>
            <p className="para-text text-black/60 mt-4 max-w-[520px]">
              Talk to our team about your EV charging project. We design, install, and manage the infrastructure.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors shrink-0 group self-start md:self-auto"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
