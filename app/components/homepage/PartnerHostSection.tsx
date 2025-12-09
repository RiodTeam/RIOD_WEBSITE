"use client";

export default function PartnerHostSection() {
    const items = [
        {
            title: "Become a Partner",
            desc: "RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations.",
        },
        {
            title: "Host EV Charger",
            desc: "RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations.",
        },
        {
            title: "Partner Network",
            desc: "RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations.",
        },
    ];

    return (
        <section className="w-full bg-[#1e1e1e] text-white py-[6.4rem]">
            <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[47.5%_47%] gap-[2.9rem]">
                {/* LEFT SECTION */}
                <div className="md:pr-12 border-b md:border-b-0 md:border-r border-[#545454]">
                    <h2 className="section-heading font-inter leading-normal!">
                        Partner & Host Opportunities
                    </h2>

                    <p className="mt-8 normal-text text-[#9a99a2] w-[95%] leading-[1.8]!">
                        RNDSquare is your end-to-end R&D partner, transforming bold ideas
                        into market-ready innovations. We combine cutting-edge engineering,
                        IoT solutions, and software expertise to design, build, and scale
                        products that drive real-world impact.
                    </p>
                </div>

                {/* RIGHT SECTION */}
                <div className="space-y-[4.4rem] mt-2">
                    {items.map((item, idx) => (
                        <div key={idx} className="border-b border-[#545454] pb-8">
                            <h3 className="regular-heading text-white">{item.title}</h3>

                            <p className="mt-8 normal-text text-[#9a99a2] leading-[1.8]!">
                                {item.desc}
                            </p>

                            <button className="mt-8 flex items-center gap-2 para-text text-white hover:opacity-80 transition">
                                Know more
                                <span className="text-[18px]">→</span>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
