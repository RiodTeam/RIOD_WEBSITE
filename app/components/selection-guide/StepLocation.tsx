"use client";

import type { LocationType } from "@/app/lib/chargerRecommendation";

const locations: { value: LocationType; label: string }[] = [
  { value: "home", label: "Home" },
  { value: "apartment", label: "Apartment" },
  { value: "office", label: "Office" },
  { value: "hotel", label: "Hotel" },
  { value: "resort", label: "Resort" },
  { value: "institution", label: "Institution" },
  { value: "mall", label: "Mall / Theatre" },
  { value: "hospital", label: "Hospital" },
  { value: "parking", label: "Parking Complex" },
  { value: "roadside", label: "Roadside / Highway" },
];

export default function StepLocation({
  selected,
  onSelect,
}: {
  selected: LocationType | null;
  onSelect: (v: LocationType) => void;
}) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium text-black font-inter mb-3">
        Where will the chargers be installed?
      </h3>
      <p className="para-text text-[#626262] mb-8">
        Select the type of location where you plan to set up EV charging.
      </p>

      <div className="flex flex-wrap gap-3">
        {locations.map((loc) => (
          <button
            key={loc.value}
            onClick={() => onSelect(loc.value)}
            className={`px-5 py-3 rounded-md text-sm font-inter font-medium transition-colors ${
              selected === loc.value
                ? "bg-[#1b1b1b] text-[#cdf80a]"
                : "bg-[#f6f6f6] text-[#626262] hover:bg-[#e8e8e8]"
            }`}
          >
            {loc.label}
          </button>
        ))}
      </div>
    </div>
  );
}
