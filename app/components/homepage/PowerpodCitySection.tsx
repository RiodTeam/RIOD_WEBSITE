"use client";

import Image from "next/image";

export default function PowerpodCitySection() {
    const specs = [
        { title: "44 KW", subtitle: "Combined Capacity" },
        { title: "AC Type 2", subtitle: "Combined Capacity" },
        { title: "4G+Wifi", subtitle: "Combined Capacity" },
        { title: "OCPP", subtitle: "Combined Capacity" },
        { title: "IP65", subtitle: "Combined Capacity" },
        { title: "Easy to Install", subtitle: "Combined Capacity" },
    ];

    return (
        <section className="w-full bg-[#1b1b1b] text-white py-[6.4rem]">
            <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 ">

                {/* LEFT CONTENT */}
                <div className="items-start">
                    <h2 className="section-heading leading-normal!  font-inter  ">
                        Powerpod City
                    </h2>

                    <p className="normal-text font-inter font-normal tracking-[0.3px] mt-[4.1rem] leading-[1.7]! text-[#9a99a2]">
                        RNDSquare is your end-to-end R&D partner, transforming bold ideas into
                        market-ready innovations.
                    </p>

                    {/* SPECS GRID */}
                    <div className="mt-28 grid grid-cols-1 sm:grid-cols-[40%_40%] gap-x-12 gap-y-18 w-[70%]">
                        {specs.map((item, idx) => (
                            <div key={idx} className="pb-4 border-b border-[#717171]">
                                <h4 className="regular-heading font-inter">{item.title}</h4>
                                <p className="normal-text  text-[#9a99a2] mt-2">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-[360px] sm:h-[450px] md:h-[520px] lg:h-[670px] relative">
                        <Image
                            src="/home/hero.webp"
                            alt="EV Charging"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>



            </div>
        </section>
    );
}
