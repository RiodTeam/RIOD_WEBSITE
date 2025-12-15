"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

export default function PowerpodCitySection() {
    const specs = [
        { title: "44 kW", subtitle: "Combined Capacity" },
        { title: "AC Type 2", subtitle: "4 Wheeler" },
        { title: "4G+Wifi", subtitle: "Connectivity" },
        { title: "OCPP", subtitle: "Communication" },
        { title: "IP65", subtitle: "Made for outdoor" },
        { title: "Easy to Install", subtitle: "Floor Mount" },
    ];

    return (
        <section className="w-full bg-[#1b1b1b] text-white py-[6.4rem]">
            <div className="w-[90%] xl:w-[88%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[52.3%_43%] gap-12 md:gap-16 ">

                {/* LEFT CONTENT */}
                <div className="items-start xl:ml-8">
                    <MotionWrapper>
                        <h2 className="section-heading leading-normal!  font-inter  ">
                            Powerpod City
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper>
                        <p className="normal-text font-inter font-normal tracking-[0.3px] mt-6 md:mt-[4.1rem] leading-[1.7]! text-[#9a99a2]">
                            Power up your commercial space with POWERPOD CITY, delivering reliable, high-performance EV charging for modern business environments.
                        </p>
                    </MotionWrapper>

                    {/* SPECS GRID */}
                    <MotionWrapper className="mt-28 grid grid-cols-1 sm:grid-cols-[40%_40%] gap-x-16 gap-y-18 xl:w-[70%]">
                        {specs.map((item, idx) => (
                            <div key={idx} className="pb-4 border-b border-[#717171]">
                                <h4 className="regular-heading font-inter text-white!">{item.title}</h4>
                                <p className="normal-text  text-[#9a99a2] mt-2">{item.subtitle}</p>
                            </div>
                        ))}
                    </MotionWrapper>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full h-full flex items-center justify-center">
                    <MotionWrapper className="w-full h-[360px] sm:h-[450px] md:h-[520px] lg:h-[670px] relative">
                        <Image
                            src="/home/hero.webp"
                            alt="EV Charging"
                            fill
                            className="object-cover object-center"
                        />
                    </MotionWrapper>
                </div>



            </div>
        </section>
    );
}
