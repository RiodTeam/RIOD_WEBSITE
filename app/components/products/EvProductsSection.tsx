"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";
import Link from "next/link";

export default function EvProductsSection() {
    /* -----------------------------------------
        DROPDOWN STATES
    ------------------------------------------ */
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [category, setCategory] = useState("All Products");
    const [sortBy, setSortBy] = useState("Best Selling");

    const dropdownRef1 = useRef<HTMLDivElement | null>(null);
    const dropdownRef2 = useRef<HTMLDivElement | null>(null);

    const categoryOptions = ["All Products", "electric-vehicle-charging-stations", "ev-charging-station"];
    const sortOptions = ["Best Selling", "Price: Low to High", "Price: High to Low"];

    /* -----------------------------------------
        PRODUCT DATA
    ------------------------------------------ */
    const allProducts = [
        {
            id: 1,
            title: "7.4kW Home EV Charger - Single-Phase Fast AC Wall Box for Private Residential Use",
            type: "electric-vehicle-charging-stations",
            price: 30000.00,
            desc: "The 7.4kW Home EV Charger is a reliable and compact AC wall-mounted charger tailored for private residential use.",
            badge: "Best Selling Product",
            image: "/products/p2.webp",
        },
        {
            id: 2,
            title: "22kW Dual-Port EV Charging Station - Public Access",
            type: "ev-charging-station",
            price: 90000.00,
            desc: "This 22kW dual-port AC charger is ideal for commercial spaces, enabling fast and simultaneous charging of two vehicles with RFID-based access.",
            badge: "Best Selling Product",
            image: "/products/p1.webp",
        },
        {
            id: 3,
            title: "22kW Home EV Charger - Fast 3-Phase Type 2",
            type: "electric-vehicle-charging-stations",
            price: 49999.00,
            desc: "Upgrade your home charging setup with this 22kW 3-Phase AC EV Charger, designed for Indian households equipped with a three-phase power supply.",
            badge: "Best Selling Product",
            image: "/products/p2.webp",
        },
        {
            id: 4,
            title: "POWERPOD City - Hybrid EV Charging station Dual Port 7.4Kw",
            type: "ev-charging-station",
            price: 110000.00,
            desc: "POWERPOD City is a hybrid EV charging station with Dual EV charging at a time. ",
            badge: "Best Selling Product",
            image: "/products/p1.webp",
        },
        {
            id: 5,
            title: "7.4kW Wall-Mounted EV Charger for Public & Shared Parking - Type 2, OCPP, RFID",
            type: "electric-vehicle-charging-stations",
            price: 45000.00,
            desc: "This 7.4kW wall-mounted EV charger is designed for shared spaces such as apartments, offices, and gated communities.",
            badge: "Best Selling Product",
            image: "/products/p2.webp",
        },
        {
            id: 6,
            title: "7.4kW AC EV Charger for Commercial Use - OCPP & RFID Enabled | Type 2 Wall-Mounted",
            type: "electric-vehicle-charging-stations",
            price: 58000.00,
            desc: "The 7.4kW wall-mounted EV charger is a smart AC solution for shared and commercial spaces.",
            badge: "Best Selling Product",
            image: "/products/p2.webp",
        },
        {
            id: 7,
            title: "7.4kW Home EV Charger - Single Phase Fast Charger with Type 2 Connector",
            type: "electric-vehicle-charging-stations",
            price: 45000.00,
            desc: "The 7.4kW Home EV Charger is a reliable and efficient AC wall-mounted charger, perfect for daily home charging",
            badge: "Best Selling Product",
            image: "/products/p2.webp",
        },
        {
            id: 8,
            title: "PowerPod Commercial 22 kW Fast EV Charger",
            type: "electric-vehicle-charging-stations",
            price: 70000.00,
            desc: "The Smart PowerPod  Commercial 22 kW Fast EV Charger has been designed specifically with the Electric Vehicle charging experience in mind. ",
            badge: "Best Selling Product",
            image: "/products/p2.webp",
        },
        {
            id: 9,
            title: "3.3kW Public & Shared EV Charger - Wall-Mounted Type 2 with OCPP & RFID Access",
            type: "electric-vehicle-charging-stations",
            price: 18000.00,
            desc: "The 3.3kW commercial EV charger is a reliable entry-level solution for shared and public charging spaces.",
            badge: "Best Selling Product",
            image: "/products/p3.webp",
        },

    ];

    /* -----------------------------------------
        FILTER + SORT LOGIC
    ------------------------------------------ */
    const filteredProducts = allProducts.filter((item) => {
        if (category === "All Products") return true;
        return item.type === category;
    });

    let sortedProducts = [...filteredProducts];

    if (sortBy === "Best Selling") {
        sortedProducts = filteredProducts
            .filter((item) => item.badge === "Best Selling Product")

    }

    if (sortBy === "Price: Low to High") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price: High to Low") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    /* -----------------------------------------
        CLOSE DROPDOWN ON OUTSIDE CLICK
    ------------------------------------------ */
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef1.current && !dropdownRef1.current.contains(e.target as Node)) {
                setOpen1(false);
            }
            if (dropdownRef2.current && !dropdownRef2.current.contains(e.target as Node)) {
                setOpen2(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className="w-full bg-white pt-22 pb-32 md:pb-50">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* ================== TWO DROPDOWNS ================== */}
                <div className="flex flex-col md:flex-row md:justify-end gap-3 md:gap-4 mb-16 md:mb-[6.3rem]">

                    {/* Dropdown 1 - Category */}
                    <MotionWrapper>
                        <div className="relative" ref={dropdownRef1}>
                            <button
                                onClick={() => {
                                    setOpen1(!open1);
                                    setOpen2(false);
                                }}
                                className="flex items-center gap-4  rounded-full px-4 md:px-7 py-2 md:py-3 bg-[#eeeeee] text-[#222222] text-[14px] md:text-[16px]"
                            >
                                {category}
                                <Image
                                    src="/projects/icon.svg"
                                    alt="arrow"
                                    width={14}
                                    height={14}
                                    className="object-contain"
                                />

                            </button>

                            {open1 && (
                                <div className="absolute top-12 right-0 bg-white border  w-48 z-50">
                                    {categoryOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => {
                                                setCategory(opt);
                                                setOpen1(false);
                                            }}
                                            className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm text-black"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </MotionWrapper>

                    {/* Dropdown 2 - Sort */}
                    <MotionWrapper>
                        <div className="relative" ref={dropdownRef2}>
                            <button
                                onClick={() => {
                                    setOpen2(!open2);
                                    setOpen1(false);
                                }}
                                className="flex items-center gap-4 rounded-full px-4 md:px-7 py-2 md:py-3 bg-[#eeeeee] text-[#222222] text-[14px] md:text-[16px]"
                            >
                                {sortBy}
                                <Image
                                    src="/projects/icon.svg"
                                    alt="arrow"
                                    width={14}
                                    height={14}
                                    className="object-contain"
                                />
                            </button>

                            {open2 && (
                                <div className="absolute top-12 right-0 bg-white border  w-48 z-50">
                                    {sortOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => {
                                                setSortBy(opt);
                                                setOpen2(false);
                                            }}
                                            className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm text-black"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </MotionWrapper>
                </div>

                {/* ================== PRODUCT GRID ================== */}
                <div>




                    {/* DESKTOP & TABLET → NORMAL GRID */}
                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[6.2rem]">
                        {sortedProducts.map((p) => (
                            <div key={p.id} className="flex flex-col">

                                {/* IMAGE */}
                                {/* IMAGE */}
                                <MotionWrapper className="relative w-full h-[400px] xl:h-[537px] bg-gray-100 overflow-hidden group">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="
            object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-110
        "
                                    />
                                </MotionWrapper>


                                {/* TITLE */}
                                <MotionWrapper>
                                    <h3 className="mt-9 text-[20px] xl:text-[24px] font-medium text-black ">
                                        {p.title}
                                    </h3>
                                </MotionWrapper>


                                {/* DESCRIPTION */}
                                <MotionWrapper>
                                    <p className="mt-4 text-[#9a99a2] text-[15px] leading-relaxed">
                                        {p.desc}
                                    </p>
                                </MotionWrapper>

                                <MotionWrapper>
                                    <p className="mt-4 text-red-600 text-[15px] leading-relaxed">
                                        Rs.{p.price}
                                    </p>
                                </MotionWrapper>


                                {/* BADGE */}
                                <MotionWrapper>
                                    <Link
                                        href="https://shop.riod.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="mt-6 self-start inline-block bg-[#eeeeee] text-[#222222] text-[14px] px-5 py-2 rounded-full whitespace-nowrap cursor-pointer hover:bg-[#e0e0e0] transition">
                                            {p.badge}
                                        </span>
                                    </Link>
                                </MotionWrapper>


                            </div>
                        ))}
                    </div>

                </div>

            </div>
            {/* MOBILE → HORIZONTAL SCROLL */}
            <div
                className="
    flex
    overflow-x-auto
    sm:hidden
    pb-6
    snap-x snap-mandatory
    scrollbar-hide
    px-[3.5%]
    
  "
            >
                {sortedProducts.map((p) => (
                    <div
                        key={p.id}
                        className="shrink-0 w-[95%] snap-start flex flex-col pl-[5%]"
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-[260px] bg-gray-100 overflow-hidden group">
                            <Image
                                src={p.image}
                                alt={p.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-[22px] font-medium text-black">
                            {p.title}
                        </h3>

                        <p className="mt-3 text-[#9a99a2] text-[16px] leading-relaxed">
                            {p.desc}
                        </p>

                        <p className="mt-3 text-red-600 text-[16px] leading-relaxed mb-5">
                            Rs.{p.price}
                        </p>
                        <Link
                            href="https://shop.riod.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="mt-5 self-start bg-[#eeeeee] text-[#222222] text-[14px] px-4 py-3 rounded-full cursor-pointer hover:bg-[#e0e0e0] transition">
                                {p.badge}
                            </span>
                        </Link>

                    </div>
                ))}
            </div>
        </section>
    );
}
