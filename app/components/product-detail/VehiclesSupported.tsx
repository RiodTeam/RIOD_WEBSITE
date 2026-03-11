"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

interface Brand {
  name: string;
  logo: string;
}

interface VehicleCategory {
  title: string;
  connector: string;
  brands: Brand[];
}

const vehicleModels: Record<string, string[]> = {
  "Tata Motors": ["Nexon EV", "Tiago EV", "Tigor EV", "Punch EV", "Harrier EV", "Curvv EV"],
  "MG Motor": ["ZS EV", "Comet EV", "Windsor EV"],
  "Mahindra": ["XUV400", "BE 6", "XEV 9e"],
  "BYD": ["Atto 3", "Seal", "e6"],
  "Hyundai": ["Ioniq 5", "Creta EV", "Kona Electric"],
  "Kia": ["EV6", "EV9"],
  "Citroen": ["eC3", "e-Berlingo"],
  "BMW": ["iX", "i4", "i7", "iX1", "iX3"],
  "Mercedes-Benz": ["EQS", "EQE", "EQB", "EQA"],
  "Audi": ["e-tron", "Q4 e-tron", "Q8 e-tron"],
  "Volkswagen": ["ID.4", "ID.5", "ID.7", "ID.Buzz"],
  "Volvo": ["XC40 Recharge", "C40 Recharge", "EX30", "EX90"],
  "Porsche": ["Taycan", "Macan Electric"],
  "Renault": ["Megane E-Tech", "Zoe"],
  "Peugeot": ["e-208", "e-2008", "e-308"],
  "Tesla": ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"],
  "Ford": ["Mustang Mach-E", "F-150 Lightning"],
  "Chevrolet": ["Bolt EV", "Bolt EUV", "Equinox EV", "Blazer EV"],
  "Rivian": ["R1T", "R1S"],
  "Ather": ["450X", "450S", "Rizta"],
  "Ola Electric": ["S1 Pro", "S1 Air", "S1 X"],
  "TVS": ["iQube", "iQube ST"],
  "Hero Electric": ["Optima", "Photon"],
  "Bajaj": ["Chetak"],
};

const fourWheelerIndia: Brand[] = [
  { name: "Tata Motors", logo: "/brands/tata.svg" },
  { name: "MG Motor", logo: "/brands/mg.svg" },
  { name: "Mahindra", logo: "/brands/mahindra.svg" },
  { name: "BYD", logo: "/brands/byd.svg" },
  { name: "Hyundai", logo: "/brands/hyundai.svg" },
  { name: "Kia", logo: "/brands/kia.svg" },
  { name: "Citroen", logo: "/brands/citroen.svg" },
];

const fourWheelerEU: Brand[] = [
  { name: "BMW", logo: "/brands/bmw.svg" },
  { name: "Mercedes-Benz", logo: "/brands/mercedes.svg" },
  { name: "Audi", logo: "/brands/audi.svg" },
  { name: "Volkswagen", logo: "/brands/volkswagen.svg" },
  { name: "Volvo", logo: "/brands/volvo.svg" },
  { name: "Porsche", logo: "/brands/porsche.svg" },
  { name: "Renault", logo: "/brands/renault.svg" },
  { name: "Peugeot", logo: "/brands/peugeot.svg" },
];

const fourWheelerUS: Brand[] = [
  { name: "Tesla", logo: "/brands/tesla.svg" },
  { name: "Ford", logo: "/brands/ford.svg" },
  { name: "Chevrolet", logo: "/brands/chevrolet.svg" },
  { name: "Rivian", logo: "/brands/rivian.svg" },
];

const twoThreeWheeler: Brand[] = [
  { name: "Ather", logo: "/brands/ather.svg" },
  { name: "Ola Electric", logo: "/brands/ola.svg" },
  { name: "TVS", logo: "/brands/tvs.svg" },
  { name: "Hero Electric", logo: "/brands/hero.svg" },
  { name: "Bajaj", logo: "/brands/bajaj.svg" },
];

const categories: VehicleCategory[] = [
  { title: "India Market", connector: "Type 2 (IEC 62196)", brands: fourWheelerIndia },
  { title: "European Market", connector: "Type 2 (IEC 62196)", brands: fourWheelerEU },
  { title: "US Market", connector: "Type 2 / J1772 with adapter", brands: fourWheelerUS },
  { title: "2W & 3W EVs", connector: "3-Pin Socket (IS 1293)", brands: twoThreeWheeler },
];

const allBrands = [...fourWheelerIndia, ...fourWheelerEU, ...fourWheelerUS, ...twoThreeWheeler];

interface VehiclesSupportedProps {
  vehicles?: { category: string; examples: string }[];
}

export default function VehiclesSupported(_props: VehiclesSupportedProps) {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const availableVehicles = selectedManufacturer
    ? vehicleModels[selectedManufacturer] || []
    : [];

  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Compatibility
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            Supported Vehicles
          </h2>
          <p className="para-text text-[#626262] max-w-2xl mb-12 md:mb-16">
            Works with every plug-in electric vehicle across India, Europe, and
            the US. Compatible with Type 2 (IEC 62196) connector and standard
            3-pin plug for two and three wheelers.
          </p>
        </MotionWrapper>

        <div className="space-y-12 md:space-y-16">
          {categories.map((cat, catIndex) => (
            <div key={cat.title}>
              <MotionWrapper delay={catIndex * 0.08}>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-xl font-medium text-[#1b1b1b] font-inter">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-medium text-[#626262] bg-[#f6f6f6] px-3 py-1.5 rounded-full font-inter">
                    {cat.connector}
                  </span>
                </div>
              </MotionWrapper>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {cat.brands.map((brand, brandIndex) => (
                  <MotionWrapper
                    key={brand.name}
                    delay={catIndex * 0.05 + brandIndex * 0.03}
                  >
                    <div className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-xl border border-[#e8e8e8] hover:border-[#cdf80a] transition-colors bg-white">
                      <div className="w-full h-[120px] md:h-[160px] relative flex items-center justify-center mb-3">
                        <Image
                          src={brand.logo}
                          alt={brand.name}
                          width={320}
                          height={160}
                          className="object-contain max-h-[120px] md:max-h-[160px] grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <p className="text-sm md:text-base text-[#626262] font-inter text-center font-medium">
                        {brand.name}
                      </p>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle Compatibility Checker */}
        <MotionWrapper delay={0.2}>
          <div className="mt-16 md:mt-20 bg-[#f6f6f6] rounded-2xl p-8 md:p-12">
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
                  {allBrands.map((brand) => (
                    <option key={brand.name} value={brand.name}>
                      {brand.name}
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

        <MotionWrapper delay={0.3}>
          <p className="text-sm text-[#9a99a2] font-inter mt-10 text-center">
            And all other vehicles with Type 2 or 3-pin plug compatibility.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
