"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

interface ProductItem {
    id: number;
    title: string;
    desc: string;
    image: string;
}

interface Props {
    products: ProductItem[];
}

export default function ServicesSection({ products }: Props) {
    return (
        <section className="w-full bg-white pt-22 pb-32 md:pb-50">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                <div>
                    {/* MOBILE → HORIZONTAL SCROLL */}
                    <div
                        className="
              grid grid-flow-col 
              auto-cols-[85%] 
              gap-6 
              overflow-x-auto 
              pb-6 
              snap-x snap-mandatory 
              sm:hidden 
              scrollbar-hide
            "
                    >
                        {products.map((p) => (
                            <div key={p.id} className="flex flex-col snap-start">

                                {/* IMAGE */}
                                <div className="relative w-full h-60 bg-gray-100 overflow-hidden">
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                </div>

                                {/* TITLE */}
                                <h3 className="mt-4 text-[20px] font-medium text-[#404040]">
                                    {p.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-3 text-[#9a99a2] text-[14px] leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP GRID */}
                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {products.map((p) => (
                            <div key={p.id} className="flex flex-col">

                                {/* IMAGE */}
                                <MotionWrapper className="relative w-full h-[400px] xl:h-[480px] bg-gray-100 overflow-hidden">
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                </MotionWrapper>

                                {/* TITLE */}
                                <MotionWrapper>
                                    <h3 className="mt-4 regular-heading text-[#404040] font-inter">
                                        {p.title}
                                    </h3>
                                </MotionWrapper>

                                {/* DESC */}
                                <MotionWrapper>
                                    <p className="mt-4 text-[#9a99a2] normal-text leading-relaxed">
                                        {p.desc}
                                    </p>
                                </MotionWrapper>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
