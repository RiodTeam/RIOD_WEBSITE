"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const vehicles = [
  { name: "Tata", logo: "/vehicles/tata.svg" },
  { name: "MG Motor", logo: "/vehicles/mg.svg" },
  { name: "Hyundai", logo: "/vehicles/hyundai.svg" },
  { name: "Kia", logo: "/vehicles/kia.svg" },
  { name: "BYD", logo: "/vehicles/byd.svg" },
  { name: "BMW", logo: "/vehicles/bmw.svg" },
  { name: "Mercedes-Benz", logo: "/vehicles/mercedes.svg" },
  { name: "Audi", logo: "/vehicles/audi.svg" },
  { name: "Volvo", logo: "/vehicles/volvo.svg" },
  { name: "Mahindra", logo: "/vehicles/mahindra.svg" },
  { name: "Toyota", logo: "/vehicles/toyota.svg" },
  { name: "Honda", logo: "/vehicles/honda.svg" },
  { name: "Porsche", logo: "/vehicles/porsche.svg" },
  { name: "Jaguar", logo: "/vehicles/jaguar.svg" },
  { name: "Citroen", logo: "/vehicles/citroen.svg" },
  { name: "Mini", logo: "/vehicles/mini.svg" },
];

const vehicleModels: Record<string, string[]> = {
  "Tata": ["Nexon EV", "Tiago EV", "Tigor EV", "Punch EV", "Harrier EV", "Curvv EV"],
  "MG Motor": ["ZS EV", "Comet EV", "Windsor EV"],
  "Hyundai": ["Ioniq 5", "Creta EV", "Kona Electric"],
  "Kia": ["EV6", "EV9"],
  "BYD": ["Atto 3", "Seal", "e6"],
  "BMW": ["iX", "i4", "i7", "iX1", "iX3"],
  "Mercedes-Benz": ["EQS", "EQE", "EQB", "EQA"],
  "Audi": ["e-tron", "Q4 e-tron", "Q8 e-tron"],
  "Volvo": ["XC40 Recharge", "C40 Recharge", "EX30", "EX90"],
  "Mahindra": ["XUV400", "BE 6", "XEV 9e"],
  "Toyota": ["bZ4X"],
  "Honda": ["e:Ny1", "Prologue"],
  "Porsche": ["Taycan", "Macan Electric"],
  "Jaguar": ["I-PACE"],
  "Citroen": ["eC3", "e-Berlingo"],
  "Mini": ["Cooper SE", "Countryman SE"],
};

export default function VehicleScroll() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const availableVehicles = selectedManufacturer
    ? vehicleModels[selectedManufacturer] || []
    : [];

  return (
    <section className="bg-white py-16 md:py-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Compatibility
          </span>
          <h2 className="section-heading text-black mb-4">Supported Vehicles</h2>
          <p className="para-text text-[#626262] max-w-2xl mb-12 md:mb-16">
            Works with every plug-in electric vehicle. Compatible with Type 2
            (IEC 62196) connector and standard 3-pin plug for two and three wheelers.
          </p>
        </MotionWrapper>

        {/* Logo Grid - 3x size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16 md:mb-20">
          {vehicles.map((vehicle, i) => (
            <MotionWrapper key={vehicle.name} delay={i * 0.03}>
              <div className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-xl border border-[#e8e8e8] hover:border-[#cdf80a] transition-colors bg-white">
                <div className="w-full h-[100px] md:h-[140px] relative flex items-center justify-center mb-3">
                  <Image
                    src={vehicle.logo}
                    alt={vehicle.name}
                    width={240}
                    height={140}
                    className="object-contain max-h-[100px] md:max-h-[140px] grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-sm md:text-base text-[#626262] font-inter text-center font-medium">
                  {vehicle.name}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Vehicle Compatibility Checker */}
        <MotionWrapper delay={0.2}>
          <div className="bg-[#f6f6f6] rounded-2xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-medium text-[#1b1b1b] font-inter mb-2">
              Check Vehicle Compatibility
            </h3>
            <p className="para-text2 text-[#626262] mb-8">
              Select a manufacturer and vehicle to verify charging compatibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Manufacturer Dropdown */}
              <div className="relative flex-1">
                <select
                  value={selectedManufacturer}
                  onChange={(e) => {
                    setSelectedManufacturer(e.target.value);
                    setSelectedVehicle("");
                  }}
                  className="w-full appearance-none bg-white border border-[#d0d0d0] px-5 py-4 pr-12 rounded-lg text-sm font-inter text-[#1b1b1b] focus:outline-none focus:border-[#cdf80a] transition-colors cursor-pointer"
                >
                  <option value="">Select Manufacturer</option>
                  {vehicles.map((v) => (
                    <option key={v.name} value={v.name}>
                      {v.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a99a2] pointer-events-none" />
              </div>

              {/* Vehicle Dropdown */}
              <div className="relative flex-1">
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  disabled={!selectedManufacturer}
                  className="w-full appearance-none bg-white border border-[#d0d0d0] px-5 py-4 pr-12 rounded-lg text-sm font-inter text-[#1b1b1b] focus:outline-none focus:border-[#cdf80a] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Select Vehicle</option>
                  {availableVehicles.map((vehicle) => (
                    <option key={vehicle} value={vehicle}>
                      {vehicle}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9a99a2] pointer-events-none" />
              </div>
            </div>

            {/* Supported Vehicle List */}
            {selectedManufacturer && availableVehicles.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-[#e8e8e8]">
                <p className="text-sm font-medium text-[#626262] font-inter mb-4">
                  All supported {selectedManufacturer} models:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {availableVehicles.map((vehicle) => (
                    <div
                      key={vehicle}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        selectedVehicle === vehicle
                          ? "bg-[#cdf80a]/20 border border-[#cdf80a]"
                          : "bg-[#f6f6f6]"
                      }`}
                    >
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                      <span className="text-sm font-inter text-[#1b1b1b]">
                        {selectedManufacturer} {vehicle}
                      </span>
                    </div>
                  ))}
                </div>
                {selectedVehicle && (
                  <div className="mt-4 pt-4 border-t border-[#e8e8e8] flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium font-inter text-[#1b1b1b]">
                      {selectedManufacturer} {selectedVehicle} is fully supported
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
