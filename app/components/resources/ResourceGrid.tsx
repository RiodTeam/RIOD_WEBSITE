"use client";

import { useState } from "react";
import {
  FileText,
  Wrench,
  BookOpen,
  BarChart3,
  Download,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import {
  resources,
  resourceCategories,
  type Resource,
  type ResourceCategory,
} from "../data/resourcesData";

const iconMap = { FileText, Wrench, BookOpen, BarChart3 };

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  const Icon = iconMap[resource.icon] || FileText;

  return (
    <MotionWrapper delay={index * 0.06}>
      <div className="group flex flex-col h-full bg-[#f6f6f6] rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#cdf80a]/30">
        <div className="w-12 h-12 rounded-lg bg-[#1b1b1b] flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-[#cdf80a]" />
        </div>

        <h3 className="text-lg md:text-xl font-medium text-black font-inter mb-2">
          {resource.title}
        </h3>

        <p className="para-text2 text-[#626262] leading-relaxed flex-1 mb-4">
          {resource.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#e0e0e0]">
          <span className="text-xs text-[#9a99a2] font-inter uppercase tracking-wide">
            PDF &middot; {resource.fileSize}
          </span>
          <a
            href={resource.filePath}
            download
            className="inline-flex items-center gap-2 bg-[#1b1b1b] text-[#cdf80a] px-4 py-2 rounded-md text-sm font-medium font-inter hover:bg-[#cdf80a] hover:text-[#1b1b1b] transition-colors duration-300"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </MotionWrapper>
  );
}

export default function ResourceGrid() {
  const [activeCategory, setActiveCategory] = useState<
    ResourceCategory | "All"
  >("All");

  const filtered =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <h2 className="section-heading text-black mb-4">
            Downloads & Resources
          </h2>
          <p className="para-text text-[#626262] max-w-[600px] mb-10 md:mb-14">
            Access product datasheets, installation guides, brochures, and
            comparison charts for all RIOD EV charging products.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
            {(["All", ...resourceCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveCategory(cat as ResourceCategory | "All")
                }
                className={`px-5 py-2.5 rounded-md text-sm font-inter font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1b1b1b] text-[#cdf80a]"
                    : "bg-[#f6f6f6] text-[#626262] hover:bg-[#e8e8e8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
