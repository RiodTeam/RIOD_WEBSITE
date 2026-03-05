"use client";

import type { UserRange } from "@/app/lib/chargerRecommendation";

const ranges: { value: UserRange; label: string }[] = [
  { value: "1-5", label: "1 - 5 vehicles" },
  { value: "6-20", label: "6 - 20 vehicles" },
  { value: "21-50", label: "21 - 50 vehicles" },
  { value: "50+", label: "50+ vehicles" },
];

export default function StepUsers({
  selected,
  onSelect,
}: {
  selected: UserRange | null;
  onSelect: (v: UserRange) => void;
}) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium text-black font-inter mb-3">
        How many vehicles will need charging in the next 3 years?
      </h3>
      <p className="para-text text-[#626262] mb-8">
        Estimate the number of EVs that will use the charging setup. This helps
        us recommend the right capacity.
      </p>

      <div className="flex flex-wrap gap-3">
        {ranges.map((r) => (
          <button
            key={r.value}
            onClick={() => onSelect(r.value)}
            className={`px-5 py-3 rounded-md text-sm font-inter font-medium transition-colors ${
              selected === r.value
                ? "bg-[#1b1b1b] text-[#cdf80a]"
                : "bg-[#f6f6f6] text-[#626262] hover:bg-[#e8e8e8]"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}
