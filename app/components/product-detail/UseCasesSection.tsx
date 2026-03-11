"use client";

import {
  Home,
  Building2,
  Hotel,
  ShoppingBag,
  Truck,
  MapPin,
  Landmark,
  Car,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const iconMap: Record<string, React.ElementType> = {
  "Residential Apartments & Villas": Home,
  "Individual Home Garages": Home,
  "Small Office Parking": Building2,
  "Premium Residences": Home,
  "Corporate & Office Parking": Building2,
  "Hotels, Resorts & Homestays": Hotel,
  "Shopping Malls & Retail": ShoppingBag,
  "Fleet Depots & Logistics Hubs": Truck,
  "Public Charging Stations": MapPin,
  "Highway Rest Stops & Fuel Stations": Car,
  "Large Commercial Parking": ShoppingBag,
  "Government & Institutional Campuses": Landmark,
};

interface UseCasesSectionProps {
  useCases: { title: string; description: string }[];
}

export default function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Where It Fits
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            The best time to charge is when your vehicle is already parked
          </h2>
          <p className="para-text text-[#626262] max-w-2xl mb-12 md:mb-16">
            Designed for the locations where EVs spend the most time standing
            still.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.title] || MapPin;
            return (
              <MotionWrapper key={useCase.title} delay={index * 0.1}>
                <div className="flex gap-5 p-6 md:p-8 rounded-xl border border-[#e8e8e8] h-full">
                  <div className="w-11 h-11 min-w-[2.75rem] rounded-lg bg-[#cdf80a] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1b1b1b]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#1b1b1b] font-inter mb-2">
                      {useCase.title}
                    </h3>
                    <p className="para-text2 text-[#626262] leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
