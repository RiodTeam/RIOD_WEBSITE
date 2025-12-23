"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const RND_URL = process.env.NEXT_PUBLIC_RND_DOMAIN;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSegmentsOpen, setIsSegmentsOpen] = useState(false);
    // const dropdownTextColor = scrolled ? "text-black" : "text-white";


    const pathname = usePathname();

    const dropdownBg = scrolled
        ? "bg-black/25 backdrop-blur-[16px]"
        : "bg-transparent backdrop-blur-[16px]";

    // Detect pages requiring forced dark header
    const forceDarkHeader =
        pathname.startsWith("/individual-insight") ||
        pathname.startsWith("/insights/") ||
        pathname === "/faq" ||
        pathname === "/legal-and-policy";

    React.useEffect(() => {
        // If forced dark, disable scroll color logic
        if (forceDarkHeader) return;

        const handleScroll = () => {
            const halfScreen = window.innerHeight * 0.5;
            setScrolled(window.scrollY > halfScreen);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [forceDarkHeader]);

    // Header background logic
    const headerBg = forceDarkHeader
        ? "bg-[#2C2C2C]"
        : scrolled
            ? "bg-[#2C2C2C]"
            : "bg-transparent";

    // Text/icon color
    const textColor = "text-white";

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { name: "About", href: "/about" },
        { name: "Product", href: "/products" },

        { name: "Career", href: `${RND_URL}/careers` },
        { name: "Blog", href: "/insights" },
        { name: "Contact", href: "/contact" },
        { name: "Be a Partner", href: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 z-50 flex items-center justify-between w-full 
          transition-all duration-300 
          h-[60px] lg:h-[60px] xl:h-[89px] ${headerBg}`}>
                <div className="relative w-[95%] sm:w-[90%] xl:w-[89.7%] mx-auto">
                    <div className="flex items-center justify-between">
                        {/* LOGO */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="w-22 h-22 xl:w-20 xl:h-20 relative block">
                                <Image
                                    src="/header/logo.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        {/* DESKTOP NAV */}
                        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 2xl:space-x-12 ">

                            {navItems.slice(0, 2).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`para-text ${textColor} font-[350]! font-inter`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* SEGMENTS DROPDOWN */}
                            <div className="relative group">
                                <span
                                    className={`para-text ${textColor} font-[350]! font-inter cursor-pointer inline-flex items-center gap-2`}
                                >
                                    Segments We Serve
                                    <MdOutlineKeyboardArrowDown className="text-[18px]" />
                                </span>



                                {/* DROPDOWN */}
                                <div
                                    className={`
    absolute top-full left-0 mt-7
    w-56
    ${dropdownBg}
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-200
  `}>





                                    {[
                                        { name: "Hotels", href: "/ev-chargers-hotels" },
                                        { name: "Office", href: "/ev-chargers-office" },
                                        { name: "Institution", href: "/ev-chargers-institution" },
                                        { name: "Home", href: "/ev-chargers-home" },
                                    ].map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="
  block px-5 py-3
  text-white text-sm font-inter
  hover:bg-white/10
  transition
"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {navItems.slice(2).map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`para-text ${textColor} font-[350]! font-inter`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>


                        {/* ICONS */}
                        <div className="flex items-center space-x-5 xl:gap-5 lg:-mr-4">
                            <button
                                className={`${textColor} hover:text-gray-300 transition-colors`}>
                                <div className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative">
                                    <Image
                                        src="/header/vector1.svg"
                                        alt="Call"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>

                            <button
                                className={`${textColor} hover:text-gray-300 transition-colors`}>
                                <div className="lg:w-6 lg:h-3 relative">
                                    <Image
                                        src="/header/vector2.svg"
                                        alt="Message"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </button>

                            {/* MOBILE MENU BUTTON */}
                            <button
                                onClick={toggleMenu}
                                className={`lg:hidden ${textColor} hover:text-gray-300 transition-colors`}>
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeLinecap="round">
                                    <line x1="3" y1="7" x2="21" y2="7" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="17" x2="21" y2="17" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}>
                <div
                    className="absolute inset-0 bg-black/60"
                    onClick={toggleMenu}></div>

                <div
                    className={`absolute top-0 right-0 h-full w-full bg-[#1e1e1e] shadow-2xl
    transform transition-transform duration-300 ease-in-out
    overflow-y-auto
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >

                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="w-20 h-20 xl:w-20 xl:h-20 relative block">
                                <Image
                                    src="/header/logo.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-300 transition-colors">
                            <X size={28} />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <nav className="flex flex-col ">


                        {/* ABOUT */}
                        <Link
                            href="/about"
                            onClick={toggleMenu}
                            className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
                        >
                            About
                        </Link>

                        {/* PRODUCT */}
                        <Link
                            href="/products"
                            onClick={toggleMenu}
                            className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10 "
                        >
                            Product
                        </Link>

                        {/* SEGMENTS WE SERVE (MOBILE ACCORDION) */}
                        <div className=" border-b border-white/10">
                            <button
                                onClick={() => setIsSegmentsOpen(!isSegmentsOpen)}
                                className="w-full flex justify-between items-center
        text-white text-lg font-medium
        py-6 pl-7 pr-6"
                            >
                                Segments We Serve
                                <span
                                    className={`transform transition-transform ${isSegmentsOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    <MdOutlineKeyboardArrowDown />
                                </span>
                            </button>

                            {isSegmentsOpen && (
                                <div className="bg-[#1e1e1e]">
                                    {[
                                        { name: "Hotels", href: "/ev-chargers-hotels" },
                                        { name: "Office", href: "/ev-chargers-office" },
                                        { name: "Institution", href: "/ev-chargers-institution" },
                                        { name: "Home", href: "/ev-chargers-home" },
                                    ].map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={toggleMenu}
                                            className="block text-white py-6 pl-12 text-base hover:text-white border-b border-white/10"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* CAREER */}
                        <Link
                            href="/testimonials"
                            onClick={toggleMenu}
                            className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
                        >
                            Career
                        </Link>

                        {/* BLOG */}
                        <Link
                            href="/insights"
                            onClick={toggleMenu}
                            className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
                        >
                            Blog
                        </Link>

                        {/* CONTACT */}
                        <Link
                            href="/contact"
                            onClick={toggleMenu}
                            className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
                        >
                            Contact
                        </Link>

                        {/* PARTNER */}
                        <Link
                            href="/contact"
                            onClick={toggleMenu}
                            className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
                        >
                            Be a Partner
                        </Link>

                    </nav>


                    {/* MOBILE CONTACT ICONS */}
                    <div className="absolute mt-12 left-6 flex items-center space-x-6 pb-12">
                        <button className="text-white hover:text-gray-300 transition-colors">
                            <Phone size={24} />
                        </button>
                        <button className="text-white hover:text-gray-300 transition-colors">
                            <MessageCircle size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
