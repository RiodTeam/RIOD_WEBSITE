"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/app/components/common/Hero";
import TechnologyGrid from "@/app/components/technology/TechnologyGrid";
import { technologies } from "@/app/data/technologies";

export default function TechnologyPageClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/technology/tech-hero.webp"
          title="Our<br />Technology"
          description="Every component in our charging infrastructure is built by our own engineers, from the power board inside the charger to the cloud platform managing thousands of sessions."
          overlayOpacity={0.45}
        />
        <TechnologyGrid technologies={technologies} />

        {/* CTA */}
        <section style={{ backgroundColor: "#cdf80a" }} className="py-16 md:py-[6.8rem]">
          <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="section-heading text-black">
                Want to Discuss a<br />Technology Project?
              </h2>
              <p className="para-text text-black/60 mt-4 max-w-[520px]">
                Whether you need a custom integration, a specific protocol, or a complete charging platform, talk to our engineers directly.
              </p>
            </div>
            <Link
              href="/contact?type=technology"
              className="flex items-center gap-2 bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-[#1b1b1b] transition-colors shrink-0 group self-start md:self-auto"
            >
              Schedule a Discussion
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
