"use client";

const stepLabels = ["Location", "Users", "Details", "Parking"];

export default function StepProgress({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center gap-2 mb-12 md:mb-16">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-inter font-medium transition-colors ${
                i <= currentStep
                  ? "bg-[#1b1b1b] text-[#cdf80a]"
                  : "bg-[#f0f0f0] text-[#9a99a2]"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`text-sm font-inter hidden sm:block ${
                i <= currentStep ? "text-black" : "text-[#9a99a2]"
              }`}
            >
              {stepLabels[i]}
            </span>
          </div>
          {i < totalSteps - 1 && (
            <div
              className={`w-8 md:w-16 h-px ${
                i < currentStep ? "bg-[#1b1b1b]" : "bg-[#e0e0e0]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
