"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

export default function FeatureGridSection() {
  const features = [
    {
      icon: "/about/icon3.svg",
      title: "Smarter Connectivity",
      desc: "Experience truly intelligent charging with seamless Wi-Fi, 4G, and OCPP (Open Charge Point Protocol) integration. Every RIOD charger connects effortlessly to your network",
    },
    {
      icon: "/about/icon5.svg",
      title: "Safe & Reliable",
      desc: "Experience truly intelligent charging with seamless Wi-Fi, 4G, and OCPP (Open Charge Point Protocol) integration. Every RIOD charger connects effortlessly to your network",
    },
    {
      icon: "/about/icon2.svg",
      title: "Sustainable",
      desc: "Experience truly intelligent charging with seamless Wi-Fi, 4G, and OCPP (Open Charge Point Protocol) integration. Every RIOD charger connects effortlessly to your network",
    },
    {
      icon: "/about/icon1.svg",
      title: "Versatile",
      desc: "Experience truly intelligent charging with seamless Wi-Fi, 4G, and OCPP (Open Charge Point Protocol) integration. Every RIOD charger connects effortlessly to your network",
    },
    {
      icon: "/about/icon4.svg",
      title: "Future Ready Technology",
      desc: "Experience truly intelligent charging with seamless Wi-Fi, 4G, and OCPP (Open Charge Point Protocol) integration. Every RIOD charger connects effortlessly to your network",
    },
  ];

  return (
    <section className="w-full bg-white py-24 md:pt-32 md:pb-[12.6rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">

          {features.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col">

                {/* ICON */}
                <div className="w-[60px] h-[46px] mb-6">
                    <MotionWrapper>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  </MotionWrapper>
                </div>

                {/* TITLE */}
                <MotionWrapper>
                <h3 className="regular-heading font-inter text-[#404040] mb-3">
                  {item.title}
                </h3>
                </MotionWrapper>

                {/* DESCRIPTION */}
                <MotionWrapper>
                <p className="normal-text text-[#9a99a2] font-inter leading-[1.7] ">
                  {item.desc}
                </p>
                </MotionWrapper>

                {/* LINE */}
                <MotionWrapper><div className="mt-8 w-full h-px bg-[#717171]"></div></MotionWrapper>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
