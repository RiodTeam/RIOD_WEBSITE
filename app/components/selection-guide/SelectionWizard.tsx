"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import StepProgress from "./StepProgress";
import StepLocation from "./StepLocation";
import StepUsers from "./StepUsers";
import StepDetails from "./StepDetails";
import StepParking from "./StepParking";
import WizardResult from "./WizardResult";
import {
  getRecommendation,
  type LocationType,
  type UserRange,
  type BudgetRange,
  type ParkingDuration,
  type Recommendation,
} from "@/app/lib/chargerRecommendation";

const TOTAL_STEPS = 4;

export default function SelectionWizard() {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState<LocationType | null>(null);
  const [userRange, setUserRange] = useState<UserRange | null>(null);
  const [maxPowerKW, setMaxPowerKW] = useState<number | undefined>(undefined);
  const [budget, setBudget] = useState<BudgetRange | undefined>(undefined);
  const [parkingDuration, setParkingDuration] =
    useState<ParkingDuration | null>(null);
  const [recommendation, setRecommendation] =
    useState<Recommendation | null>(null);

  const canProceed = (): boolean => {
    switch (step) {
      case 0:
        return location !== null;
      case 1:
        return userRange !== null;
      case 2:
        return true;
      case 3:
        return parkingDuration !== null;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      const result = getRecommendation({
        location: location!,
        userRange: userRange!,
        maxPowerKW,
        budget,
        parkingDuration: parkingDuration!,
      });
      setRecommendation(result);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleStartOver = () => {
    setStep(0);
    setLocation(null);
    setUserRange(null);
    setMaxPowerKW(undefined);
    setBudget(undefined);
    setParkingDuration(null);
    setRecommendation(null);
  };

  if (recommendation) {
    return (
      <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <WizardResult
            recommendation={recommendation}
            onStartOver={handleStartOver}
            wizardAnswers={{
              location: location!,
              userRange: userRange!,
              maxPowerKW,
              budget,
              parkingDuration: parkingDuration!,
            }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[900px] mx-auto">
        <StepProgress currentStep={step} totalSteps={TOTAL_STEPS} />

        <MotionWrapper key={step}>
          {step === 0 && (
            <StepLocation selected={location} onSelect={setLocation} />
          )}
          {step === 1 && (
            <StepUsers selected={userRange} onSelect={setUserRange} />
          )}
          {step === 2 && (
            <StepDetails
              maxPowerKW={maxPowerKW}
              onPowerChange={setMaxPowerKW}
              budget={budget}
              onBudgetChange={setBudget}
            />
          )}
          {step === 3 && (
            <StepParking
              selected={parkingDuration}
              onSelect={setParkingDuration}
            />
          )}
        </MotionWrapper>

        <div className="flex items-center justify-between mt-12 md:mt-16">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-inter font-medium text-sm transition-colors ${
              step === 0
                ? "text-[#e0e0e0] cursor-not-allowed"
                : "text-[#626262] hover:text-[#1b1b1b]"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-md font-inter font-medium text-sm transition-colors ${
              canProceed()
                ? "bg-[#1b1b1b] text-[#cdf80a] hover:bg-[#333]"
                : "bg-[#e0e0e0] text-[#9a99a2] cursor-not-allowed"
            }`}
          >
            {step === TOTAL_STEPS - 1 ? "Get Recommendation" : "Next"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
