"use client";

import MotionWrapper from "../common/MotionWrapper";
import Image from "next/image";
import Link from "next/link";

export default function PartnerHostSection() {
    const items = [
        {
            title: "Affiliate Partner Engagement ",
            desc: "We have a lucrative affiliate marketing program that gives you 10% on all orders referred to us through your site or other channels. ",
        },
        {
            title: "Distributor/Dealership Mode Engagement  ",
            desc: " RIOD distributors benefit from industry-leading margins, competitive pricing, and reliable support to grow their business. ",
        },
        {
            title: "Business Partner Engagement  ",
            desc: "Our business partners can build unique co-branded strategies through joint marketing initiatives and collaborative product offerings.",
        },
    ];

    return (
        <section className="w-full bg-[#1e1e1e] text-white py-[6.4rem]">
            <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[47.5%_47%] gap-[2.9rem]">
                {/* LEFT SECTION */}
                <MotionWrapper className="md:pr-12 md:border-b-0 lg:border-r border-[#545454]">
                    <MotionWrapper>
                        <h2 className="section-heading font-inter leading-normal!">
                            Partner & Host Opportunities
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper>
                        <p className="mt-8 normal-text text-[#9a99a2] md:w-[95%] leading-[1.8]!">
                            RNDSquare is your end-to-end R&D partner, transforming bold ideas
                            into market-ready innovations. We combine cutting-edge engineering,
                            IoT solutions, and software expertise to design, build, and scale
                            products that drive real-world impact.
                        </p>
                    </MotionWrapper>
                </MotionWrapper>

                {/* RIGHT SECTION */}
                <div className="space-y-[4.4rem] mt-2">
                    {items.map((item, idx) => (
                        <MotionWrapper key={idx} className="border-b border-[#545454] pb-8">
                            <h3 className="regular-heading text-white!">{item.title}</h3>

                            <p className="mt-8 normal-text text-[#9a99a2] leading-[1.8]!">
                                {item.desc}
                            </p>

                            <Link href="/contact">
                                <button className="mt-8 flex items-center gap-5 para-text text-white hover:opacity-80 transition">
                                    Know more
                                    <Image
                                        src="/home/arrow.svg"
                                        alt="arrow"
                                        width={14}
                                        height={14}
                                        className="object-contain"
                                    />
                                </button>
                            </Link>
                        </MotionWrapper>
                    ))}
                </div>

            </div>
        </section>
    );
}
