"use client";

import type { BudgetRange } from "@/app/lib/chargerRecommendation";

const budgets: { value: BudgetRange; label: string }[] = [
  { value: "under-50k", label: "Under 50K" },
  { value: "50k-1l", label: "50K - 1 Lakh" },
  { value: "1l-3l", label: "1 - 3 Lakhs" },
  { value: "3l-10l", label: "3 - 10 Lakhs" },
  { value: "10l+", label: "10 Lakhs+" },
];

export default function StepDetails({
  maxPowerKW,
  onPowerChange,
  budget,
  onBudgetChange,
}: {
  maxPowerKW?: number;
  onPowerChange: (v: number | undefined) => void;
  budget?: BudgetRange;
  onBudgetChange: (v: BudgetRange | undefined) => void;
}) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-medium text-black font-inter mb-3">
        Additional details (optional)
      </h3>
      <p className="para-text text-[#626262] mb-8">
        These are optional but help us give a more accurate recommendation. You
        can skip this step.
      </p>

      <div className="space-y-8">
        {/* Power input */}
        <div>
          <label className="block text-sm font-inter font-medium text-black mb-3">
            Maximum power that can be allocated (kW)
          </label>
          <input
            type="number"
            min={0}
            placeholder="e.g. 22, 50, 100"
            value={maxPowerKW ?? ""}
            onChange={(e) => {
              const val = e.target.value;
              onPowerChange(val ? Number(val) : undefined);
            }}
            className="w-full max-w-[300px] bg-transparent border border-[#d0d0d0] px-4 py-3 rounded-md text-sm font-inter text-black placeholder:text-[#9a99a2] focus:outline-none focus:border-[#cdf80a] transition-colors"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-inter font-medium text-black mb-3">
            Estimated budget
          </label>
          <div className="flex flex-wrap gap-3">
            {budgets.map((b) => (
              <button
                key={b.value}
                onClick={() =>
                  onBudgetChange(budget === b.value ? undefined : b.value)
                }
                className={`px-5 py-3 rounded-md text-sm font-inter font-medium transition-colors ${
                  budget === b.value
                    ? "bg-[#1b1b1b] text-[#cdf80a]"
                    : "bg-[#f6f6f6] text-[#626262] hover:bg-[#e8e8e8]"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
