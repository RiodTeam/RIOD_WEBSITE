"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const RND_URL = process.env.NEXT_PUBLIC_RND_DOMAIN;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSegmentsOpen, setIsSegmentsOpen] = useState(false);

  const pathname = usePathname();

  const forceDarkHeader =
    pathname.startsWith("/individual-insight") ||
    pathname.startsWith("/insights/") ||
    pathname === "/faq" ||
    pathname === "/legal-and-policy";

  React.useEffect(() => {
    if (forceDarkHeader) return;

    const handleScroll = () => {
      const halfScreen = window.innerHeight * 0.5;
      setScrolled(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceDarkHeader]);

  const headerBg = forceDarkHeader
    ? "bg-[#2C2C2C]"
    : scrolled
    ? "bg-[#2C2C2C]"
    : "bg-transparent";

  const textColor = "text-white";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Product", href: "/products" },
    { name: "Career", href: `${RND_URL}/careers` },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex items-center justify-between w-full transition-all duration-300 h-[85px] ${headerBg}`}
      >
        <div className="relative w-[95%] sm:w-[90%] xl:w-[89.7%] mx-auto">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="w-22 h-22 xl:w-20 xl:h-20 relative block">
              <Image
                src="/header/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`para-text ${textColor} font-[350]! font-inter`}
                >
                  {item.name}
                </Link>
              ))}

              {/* SEGMENTS DROPDOWN (UPDATED) */}
              <div className="relative group">
                <span
                  className={`para-text ${textColor} font-[350]! font-inter cursor-pointer inline-flex items-center gap-2`}
                >
                  Segments We Serve
                  <MdOutlineKeyboardArrowDown className="text-[18px] opacity-70" />
                </span>

                <div
                  className={`
                    absolute left-0 top-[2.65rem] mt-4 w-56
                    backdrop-blur-xl
                    transition-all duration-200 z-50
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    ${
                      scrolled
                        ? "bg-white/90 border border-black/10"
                        : "bg-black/40 border border-white/20"
                    }
                  `}
                >
                  {[
                    { name: "Hotels", href: "/ev-chargers-hotels" },
                    { name: "Office", href: "/ev-chargers-office" },
                    { name: "Institution", href: "/ev-chargers-institution" },
                    { name: "Home", href: "/ev-chargers-home" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        block px-5 py-3 text-sm font-inter transition-colors
                        ${
                          scrolled
                            ? "text-black hover:bg-black/5"
                            : "text-white hover:bg-white/10"
                        }
                      `}
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
              <Link href="/contact">
                <div className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative">
                  <Image
                    src="/header/vector1.svg"
                    alt="Call"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden ${textColor}`}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
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

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={toggleMenu}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-full bg-[#1e1e1e]
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Image
              src="/header/logo.svg"
              alt="Logo"
              width={80}
              height={80}
            />
            <button onClick={toggleMenu}>
              <X size={28} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col">
            <Link href="/about" onClick={toggleMenu} className="menu-link">
              About
            </Link>
            <Link href="/products" onClick={toggleMenu} className="menu-link">
              Product
            </Link>

            {/* MOBILE SEGMENTS */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setIsSegmentsOpen(!isSegmentsOpen)}
                className="w-full flex justify-between items-center text-white text-lg py-6 pl-7 pr-6"
              >
                Segments We Serve
                <MdOutlineKeyboardArrowDown
                  className={`transition-transform ${
                    isSegmentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSegmentsOpen &&
                ["Hotels", "Office", "Institution", "Home"].map((name) => (
                  <Link
                    key={name}
                    href={`/ev-chargers-${name.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="block text-white py-6 pl-12 border-b border-white/10"
                  >
                    {name}
                  </Link>
                ))}
            </div>

            <Link
              href={`${RND_URL}/careers`}
              onClick={toggleMenu}
              className="menu-link"
            >
              Career
            </Link>
            <Link href="/insights" onClick={toggleMenu} className="menu-link">
              Insights
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="menu-link">
              Contact
            </Link>
          </nav>

          <div className="absolute mt-12 left-6 flex gap-6">
            <Phone className="text-white" />
            <MessageCircle className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
