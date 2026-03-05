"use client";

import type { ParkingDuration } from "@/app/lib/chargerRecommendation";

const durations: { value: ParkingDuration; label: string }[] = [
  { value: "under-1h", label: "Under 1 hour" },
  { value: "1-4h", label: "1 - 4 hours" },
  { value: "4-8h", label: "4 - 8 hours" },
  { value: "overnight", label: "Overnight (8+ hours)" },
];

export default function StepParking({
  selected,
  onSelect,
}: {
  selected: ParkingDuration | null;
  onSelect: (v: ParkingDuration) => void;
}) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium text-black font-inter mb-3">
        How long do vehicles typically stay parked?
      </h3>
      <p className="para-text text-[#626262] mb-8">
        Parking duration determines whether AC (slower, cheaper) or DC (faster,
        premium) charging is the better fit.
      </p>

      <div className="flex flex-wrap gap-3">
        {durations.map((d) => (
          <button
            key={d.value}
            onClick={() => onSelect(d.value)}
            className={`px-5 py-3 rounded-md text-sm font-inter font-medium transition-colors ${
              selected === d.value
                ? "bg-[#1b1b1b] text-[#cdf80a]"
                : "bg-[#f6f6f6] text-[#626262] hover:bg-[#e8e8e8]"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
}
