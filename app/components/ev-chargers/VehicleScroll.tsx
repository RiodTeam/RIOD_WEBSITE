"use client";

import Image from "next/image";
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

export default function VehicleScroll() {
  return (
    <section className="bg-white py-16 md:py-[5.5rem] overflow-hidden">
      <div className="w-[90%] max-w-[1400px] mx-auto mb-10">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
            Compatibility
          </span>
          <h2 className="section-heading text-black">Supported Vehicles</h2>
        </MotionWrapper>
      </div>

      {/* Infinite scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-logo-scroll w-max">
          {[...vehicles, ...vehicles].map((vehicle, i) => (
            <div
              key={`${vehicle.name}-${i}`}
              className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
            >
              <div className="relative w-[80px] h-[50px] md:w-[100px] md:h-[60px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={vehicle.logo}
                  alt={vehicle.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
