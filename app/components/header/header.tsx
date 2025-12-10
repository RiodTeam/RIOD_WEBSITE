"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

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
        { name: "Services", href: "/services" },
        { name: "Career", href: "/career" },
        { name: "Blog", href: "/insights" },
        { name: "Contact", href: "/contact" },
        { name: "Be a Partner", href: "/be-a-partner" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 z-50 flex items-center justify-between w-full 
          transition-all duration-300 
          h-[50px] lg:h-[60px] xl:h-[89px] ${headerBg}`}
            >
                <div className="relative w-[95%] sm:w-[90%] xl:w-[89.7%] mx-auto">
                    <div className="flex items-center justify-between">

                        {/* LOGO */}
                        <div className="flex items-center">
                            <Link href="/" className="w-8.5 h-8.5 xl:w-20 xl:h-20 relative block">
                                <Image
                                    src="/header/logo.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        {/* DESKTOP NAV */}
                        <nav className="hidden lg:flex items-center space-x-10 xl:mr-64">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`para-text ${textColor} font-[350]! font-inter`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* ICONS */}
                        <div className="flex items-center space-x-5 xl:gap-5 lg:-mr-4">
                            <button className={`${textColor} hover:text-gray-300 transition-colors`}>
                                <div className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative">
                                    <Image src="/header/vector1.svg" alt="Call" fill className="object-cover" />
                                </div>
                            </button>

                            <button className={`${textColor} hover:text-gray-300 transition-colors`}>
                                <div className="lg:w-5 lg:h-5 xl:w-6 xl:h-3 relative">
                                    <Image src="/header/vector2.svg" alt="Message" fill className="object-cover" />
                                </div>
                            </button>



                            {/* MOBILE MENU BUTTON */}
                            <button
                                onClick={toggleMenu}
                                className={`lg:hidden ${textColor} hover:text-gray-300 transition-colors`}
                            >
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1.3"
                                    strokeLinecap="round"
                                >
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
                    }`}
            >
                <div className="absolute inset-0 bg-black/60" onClick={toggleMenu}></div>

                <div
                    className={`absolute top-0 right-0 h-full w-[80%] bg-[#4a3728] shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <div className="flex items-center">
                            <Link href="/" className="w-20 h-20 xl:w-20 xl:h-20 relative block">
                                <Image
                                    src="/header/logo.svg"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        <button onClick={toggleMenu} className="text-white hover:text-gray-300 transition-colors">
                            <X size={28} />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <nav className="flex flex-col py-6 space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={toggleMenu}
                                className="text-white text-lg font-medium tracking-wide 
                  hover:text-gray-300 transition-colors py-2 border-b border-white/10 pl-7"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* MOBILE CONTACT ICONS */}
                    <div className="absolute bottom-8 left-6 flex items-center space-x-6">
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
