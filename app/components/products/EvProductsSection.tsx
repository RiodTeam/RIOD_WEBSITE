"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

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

    const categoryOptions = ["All Products", "Home Chargers", "Portable Chargers"];
    const sortOptions = ["Best Selling", "Price: Low to High", "Price: High to Low"];

    /* -----------------------------------------
        PRODUCT DATA
    ------------------------------------------ */
    const allProducts = [
        {
            id: 1,
            title: "7.4KW Home Charger",
            type: "Home Chargers",
            price: 499,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Top Discount of the Sale",
            image: "/home/hero.webp",
        },
        {
            id: 2,
            title: "Portable EV Charger",
            type: "Portable Chargers",
            price: 299,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Best Selling Product",
            image: "/home/hero.webp",
        },
        {
            id: 3,
            title: "10KW Home Charger",
            type: "Home Chargers",
            price: 699,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Customer Favorite",
            image: "/home/hero.webp",
        },
        {
            id: 4,
            title: "Ultra Portable Charger",
            type: "Portable Chargers",
            price: 199,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Top Discount of the Sale",
            image: "/home/hero.webp",
        },
        {
            id: 5,
            title: "7.4KW Home Charger",
            type: "Home Chargers",
            price: 499,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Top Discount of the Sale",
            image: "/home/hero.webp",
        },
        {
            id: 6,
            title: "Portable EV Charger",
            type: "Portable Chargers",
            price: 299,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Best Selling Product",
            image: "/home/hero.webp",
        },
        {
            id: 7,
            title: "10KW Home Charger",
            type: "Home Chargers",
            price: 699,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Customer Favorite",
            image: "/home/hero.webp",
        },
        {
            id: 8,
            title: "Ultra Portable Charger",
            type: "Portable Chargers",
            price: 199,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Top Discount of the Sale",
            image: "/home/hero.webp",
        },
        {
            id: 9,
            title: "Ultra Portable Charger",
            type: "Portable Chargers",
            price: 199,
            desc: "Single-Phase Fast AC Wall Box for Private Residential Use",
            badge: "Top Discount of the Sale",
            image: "/home/hero.webp",
        },
    ];

    /* -----------------------------------------
        FILTER + SORT LOGIC
    ------------------------------------------ */
    const filteredProducts = allProducts.filter((item) => {
        if (category === "All Products") return true;
        return item.type === category;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        return 0; // Default: Best Selling (no sorting)
    });

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
                <div className="flex justify-end gap-3 md:gap-4 mb-16 md:mb-[6.3rem]">

                    {/* Dropdown 1 - Category */}
                    <MotionWrapper>
                        <div className="relative" ref={dropdownRef1}>
                            <button
                                onClick={() => {
                                    setOpen1(!open1);
                                    setOpen2(false);
                                }}
                                className="flex items-center gap-4  rounded-full px-4 md:px-7 py-2 md:py-3 bg-[#eeeeee] text-[#222222] text-[16px]"
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
                                className="flex items-center gap-4 rounded-full px-4 md:px-7 py-2 md:py-3 bg-[#eeeeee] text-[#222222] text-[16px]"
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

                    {/* MOBILE → HORIZONTAL SCROLL */}
                    <div className="
    grid grid-flow-col auto-cols-[90%] 
    gap-6 
    overflow-x-auto 
    sm:hidden 
    pb-6 
    snap-x snap-mandatory 
    scrollbar-hide
">

                        {sortedProducts.map((p) => (
                            <div key={p.id} className="flex flex-col snap-start">

                                {/* IMAGE */}
                                <div className="relative w-full h-[260px] bg-gray-100 overflow-hidden ">
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                </div>

                                {/* TITLE */}
                                <h3 className="mt-4 text-[20px] font-medium text-black">
                                    {p.title}
                                </h3>

                                {/* DESC */}
                                <p className="mt-3 text-[#9a99a2] text-[14px] leading-relaxed">
                                    {p.desc}
                                </p>

                                {/* BADGE */}
                                <span className="mt-4 text-center inline-block bg-[#eeeeee] text-[#222222] text-[14px] px-4 py-1.5 rounded-full whitespace-nowrap">
                                    {p.badge}
                                </span>

                            </div>
                        ))}
                    </div>

                    {/* DESKTOP & TABLET → NORMAL GRID */}
                    <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[6.2rem]">
                        {sortedProducts.map((p) => (
                            <div key={p.id} className="flex flex-col">

                                {/* IMAGE */}
                                <MotionWrapper className="relative w-full h-[400px] xl:h-[537px] bg-gray-100 overflow-hidden">
                                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                                </MotionWrapper>

                                {/* TITLE */}
                                <MotionWrapper>
                                    <h3 className="mt-9 text-[20px] xl:text-[24px] font-medium text-black uppercase">
                                        {p.title}
                                    </h3>
                                </MotionWrapper>


                                {/* DESCRIPTION */}
                                <MotionWrapper>
                                    <p className="mt-4 text-[#9a99a2] text-[15px] leading-relaxed">
                                        {p.desc}
                                    </p>
                                </MotionWrapper>


                                {/* BADGE */}
                                <MotionWrapper>
                                    <span className="mt-6 self-start inline-block bg-[#eeeeee] text-[#222222] text-[14px] px-5 py-2 rounded-full whitespace-nowrap">
                                        {p.badge}
                                    </span>
                                </MotionWrapper>


                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
