"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function PowerpodSection() {
    const sections = [
        {
            title: "Powerpod Home",
            desc: "Choose a plan that fits your business whether you need foundational branding or full creative support. Our flexible monthly options are built to help startups grow and scale.",
            suitable: ["Homes", "Small Offices", "Apartment Complexes"],
            img: "/images/powerpod-home.jpg"
        },
        {
            title: "Powerpod Go",
            desc: "Choose a plan that fits your business whether you need foundational branding or full creative support. Our flexible monthly options are built to help startups grow and scale.",
            suitable: ["Homes", "Small Offices", "Apartment Complexes"],
            img: "/images/powerpod-go.jpg"
        },
        {
            title: "Powerpod City",
            desc: "Choose a plan that fits your business whether you need foundational branding or full creative support. Our flexible monthly options are built to help startups grow and scale.",
            suitable: ["Homes", "Small Offices", "Apartment Complexes"],
            img: "/images/powerpod-city.jpg"
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            {/* ----------- TOP ANIMATED TITLES ----------- */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-[90%] max-w-[1200px] mx-auto mb-16"
            >
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl font-semibold text-gray-900"
                >
                    Our Powerpod Plans
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="text-gray-600 mt-2 max-w-2xl"
                >
                    Choose the perfect plan that suits your space and your lifestyle.
                </motion.p>
            </motion.div>

            {/* ----------- SECTIONS ----------- */}
            <div className="w-[90%] max-w-[1400px] mx-auto space-y-32">
                {sections.map((sec, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                    >
                        {/* LEFT CONTENT */}
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                {sec.title}
                            </h3>

                            <p className="text-gray-600 mt-4 leading-relaxed">
                                {sec.desc}
                            </p>

                            <p className="mt-6 text-gray-800 font-medium">Suitable for</p>

                            <div className="flex flex-wrap gap-3 mt-2">
                                {sec.suitable.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="order-1 lg:order-2">
                            <div className="w-full h-[300px] md:h-[420px] lg:h-[520px] relative rounded-lg overflow-hidden">
                                <Image
                                    src={sec.img}
                                    alt={sec.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
