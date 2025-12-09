"use client";

import Image from "next/image";

export default function CompatibleSection() {
    const brands = [
        { logo: "/home/logo1.svg", alt: "Panasonic" },
        { logo: "/home/logo2.svg", alt: "GEICO" },
        { logo: "/home/logo3.svg", alt: "SeatGeek" },
        { logo: "/home/logo4.svg", alt: "Marriott" },
    ];

    // Duplicate list for smooth infinite loop
    const loopBrands = [...brands, ...brands];

    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* TEXT SECTION */}
                <div className="max-w-[800px]">
                    <h2 className="section-heading leading-normal! mt-10 font-inter  text-[#222222]">
                        Compatible with all plug-in electric vehicles.
                    </h2>

                    <p className="normal-text text-[#9a99a2] mt-1 font-inter ">
                        RNDSquare is your end-to-end R&D partner, transforming bold ideas into
                        market-ready innovations. We combine cutting-edge engineering, IoT solutions,
                        and software expertise to design, build, and scale products that drive
                        real-world impact.
                    </p>
                </div>

                {/* LOGO LOOP */}
                <div className="mt-16 relative overflow-hidden">
                    <div className="flex animate-logo-scroll whitespace-nowrap">

                        {loopBrands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center mx-16 min-w-[300px]"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={brand.alt}
                                    width={300}
                                    height={300}
                                    className="object-contain opacity-90 hover:opacity-100 transition"
                                />
                            </div>

                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
