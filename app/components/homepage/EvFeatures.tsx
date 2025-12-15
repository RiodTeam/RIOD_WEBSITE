"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

export default function EvFeatures() {
    const features = [
        { title: "SMART", subtitle: "Advanced Connectivity" },
        { title: "FAST", subtitle: "Advanced Connectivity" },
        { title: "SAFE", subtitle: "Advanced Connectivity" },
        { title: "COMPATIBLE", subtitle: "Advanced Connectivity" },
        { title: "MADE IN INDIA", subtitle: "Advanced Connectivity" },
    ];

    return (
        <section className="w-full bg-white pt-[5.2rem]  pb-16">
            <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* LEFT LIST */}
                <div className="flex flex-col gap-[2.1rem] md:w-[87%]">
                    {features.map((item, index) => (
                        <MotionWrapper key={index} className="pb-6 border-b border-gray-300">
                            <MotionWrapper>
                                <h3 className="regular-heading text-[#404040]  font-inter">
                                    {item.title}
                                </h3>
                            </MotionWrapper>
                            <MotionWrapper>
                                <p className="normal-text text-[#9a99a2] mt-2 md:mt-1 font-inter">
                                    {item.subtitle}
                                </p>
                            </MotionWrapper>
                        </MotionWrapper>
                    ))}
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full flex justify-center md:justify-end">
                    <div className="w-full  relative">
                        <MotionWrapper>
                            <Image
                                src="/home/hero.webp"
                                alt="EV Charger"
                                fill
                                className="object-cover"
                            />
                        </MotionWrapper>
                    </div>
                </div>


            </div>
        </section>
    );
}
