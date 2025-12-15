"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sections = [
    {
        id: "home",
        title: "Powerpod Home",
        desc: "Power up your EV in the comfort of your home or business with our private EV charger. Engineered for performance and reliability, it ensures fast, safe, and seamless charging whenever you need it.",
        image: "/home/hero.webp",
        tags: ["Homes", "Small Offices", "Apartment Complexes"],
    },
    {
        id: "go",
        title: "Powerpod Go",
        desc: " Empower your business with fast, reliable EV charging using our commercial-grade EV charger. Engineered for durability and scalability, it ensures seamless operation in demanding commercial settings.",
        image: "/home/hero.webp",
        tags: ["Homes", "Small Offices", "Apartment Complexes"],
    },
    {
        id: "city",
        title: "Powerpod City",
        desc: "Power two vehicles at the same time with our durable commercial-grade dual EV charger. Engineered for performance and longevity, it ensures seamless charging in high-traffic commercial environments.",
        image: "/home/hero.webp",
        tags: ["Homes", "Small Offices", "Apartment Complexes"],
    },
];

export default function PowerpodStickyScroll() {
    const [activeIndex, setActiveIndex] = useState(0);
    const wrapperRef = useRef<HTMLDivElement | null>(null);


    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current) return;


            const scrollPosition = window.scrollY - (wrapperRef.current.offsetTop);

            const sectionHeight = window.innerHeight;

            const index = Math.min(
                sections.length - 1,
                Math.max(0, Math.floor(scrollPosition / sectionHeight))
            );

            setActiveIndex(index);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full bg-white pb-20 xl:pb-0">
            <div
                ref={wrapperRef}
                className="relative w-[90%] max-w-[1400px] mx-auto 
           grid grid-cols-1 lg:grid-cols-[220px_1fr]"

                style={{ height: `${sections.length * 120}vh` }}


            >

                {/* LEFT SIDE NAVIGATION */}
                <div className="hidden lg:flex flex-col sticky top-0 h-screen justify-start pt-[8.4rem]">


                    {/* LEFT VERTICAL LINE */}
                    <div className="relative w-px bg-gray-300 h-20 rounded-xl mr-6 self-start">
                        <div
                            className="absolute left-0 bg-black w-full rounded-xl transition-all duration-300"
                            style={{
                                height: `${((activeIndex + 1) / sections.length) * 100}%`,
                            }}
                        />
                    </div>

                    {/* NAV ITEMS */}
                    <div className="flex flex-col gap-2 self-start mt-[-85px] ml-4">
                        {sections.map((s, i) => (
                            <div
                                key={s.id}
                                className="flex items-center gap-3 cursor-pointer"
                                onClick={() =>
                                    window.scrollTo({
                                        top: wrapperRef.current!.offsetTop + i * window.innerHeight,
                                        behavior: "smooth",
                                    })
                                }
                            >


                                {/* TITLE */}
                                <span
                                    className={`transition-all text-[16px] ${activeIndex === i ? "font-normal text-black" : "text-gray-400"
                                        }`}
                                >
                                    {s.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>




                {/* RIGHT SIDE STICKY CONTENT */}
                <div className="sticky top-0 h-screen flex items-start justify-start pt-24 md:pt-[8.4rem]">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col lg:flex-row items-center gap-10"
                        >
                            {/* TEXT */}
                            <div className="w-full lg:w-[38%] lg:mt-[7.7rem]">

                                <h2 className="text-[32px] font-normal font-inter text-black mb-5">
                                    {sections[activeIndex].title}
                                </h2>
                                <p className="text-[#9a99a2] text-[16px] font-inter mb-4 lg:mb-[4.7rem] leading-loose! xl:w-[93%]">
                                    {sections[activeIndex].desc}
                                </p>

                                <p className="text-[#9a99a2] text-[16px] font-inter mb-5">Suitable for:</p>

                                <div className="flex gap-2 md:gap-3 flex-wrap">
                                    {sections[activeIndex].tags.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 md:px-5 py-2  rounded-full bg-[#eeeeee] text-black text-[14px]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* IMAGE */}
                            <div className="relative w-full lg:w-[60%] h-[350px] md:h-[300px] lg:h-[668px]">
                                <Image
                                    src={sections[activeIndex].image}
                                    fill
                                    alt="Powerpod"
                                    className="object-cover "
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}