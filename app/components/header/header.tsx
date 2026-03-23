"use client";

import React, { useState, useRef, useEffect } from "react";
import { Headset, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "@/app/components/store/CartIcon";
import { useCart } from "@/app/context/CartContext";

const applicationLinks = [
  { name: "Hotels", href: "/ev-chargers-hotels" },
  { name: "Office", href: "/ev-chargers-office" },
  { name: "Institution", href: "/ev-chargers-institution" },
  { name: "Home", href: "/ev-chargers-home" },
  { name: "Resorts", href: "/ev-chargers-resorts" },
  { name: "Malls & Theatres", href: "/ev-chargers-malls" },
  { name: "Hospitals", href: "/ev-chargers-hospitals" },
  { name: "Parking Complexes", href: "/ev-chargers-parking" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalQuantity } = useCart();

  // Mobile accordion states
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Desktop Applications flyout
  const [showAppsFlyout, setShowAppsFlyout] = useState(false);

  const pathname = usePathname();

  const forceDarkHeader =
    pathname.startsWith("/individual-insight") ||
    pathname.startsWith("/insights/") ||
    pathname.startsWith("/products/ev-chargers/powerpod") ||
    pathname.startsWith("/products/ev-chargers/powerpod-go") ||
    pathname.startsWith("/products/ev-chargers/powerpod-city") ||
    pathname === "/faq" ||
    pathname === "/legal-and-policy" ||
    pathname === "/partners" ||
    pathname === "/future-of-ev-energy" ||
    pathname === "/insights" ||
    pathname === "/contact" ||
    pathname === "/careers" ||
    pathname === "/applications" ||
    pathname === "/ev-charger-selection-guide" ||
    pathname.startsWith("/technology/") ||
    pathname.startsWith("/store") ||
    pathname === "/thank-you";

  useEffect(() => {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProductsOpen(false);
    setIsApplicationsOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex items-center justify-between w-full
          transition-all duration-300
          h-[60px] lg:h-[60px] xl:h-[89px] ${headerBg}`}
      >
        <div className="relative w-[95%] sm:w-[90%] xl:w-[89.7%] mx-auto">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center">
              <Link
                href="/"
                className="w-22 h-22 xl:w-20 xl:h-20 relative block"
              >
                <Image
                  src="/header/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 2xl:space-x-12">
              {/* About */}
              <Link
                href="/about"
                className={`para-text ${textColor} font-[350]! font-inter`}
              >
                About
              </Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <Link
                  href="/products"
                  className={`para-text ${textColor} font-[350]! font-inter cursor-pointer inline-flex items-center gap-1.5`}
                >
                  Products
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className="
                    absolute top-full left-0 mt-7
                    w-[240px]
                    bg-[#1e1e1e]/95 backdrop-blur-[16px]
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                    rounded-lg
                    border border-white/10
                  "
                >
                  <Link
                    href="/products/ev-chargers"
                    className="block px-6 py-4 text-white text-sm font-inter font-medium hover:bg-white/10 transition"
                  >
                    EV Chargers
                    <span className="block text-xs text-[#9a99a2] font-normal mt-0.5">
                      AC & DC charging hardware
                    </span>
                  </Link>
                  <Link
                    href="/products/energy"
                    className="block px-6 py-4 text-white text-sm font-inter font-medium hover:bg-white/10 transition border-t border-white/10"
                  >
                    Energy
                    <span className="block text-xs text-[#9a99a2] font-normal mt-0.5">
                      Energy Solutions
                    </span>
                  </Link>

                  {/* Applications — flyout on hover */}
                  <div
                    className="relative border-t border-white/10"
                    onMouseEnter={() => setShowAppsFlyout(true)}
                    onMouseLeave={() => setShowAppsFlyout(false)}
                  >
                    <Link
                      href="/applications"
                      className="flex items-center justify-between px-6 py-4 text-white text-sm font-inter font-medium hover:bg-white/10 transition cursor-pointer"
                    >
                      <div>
                        Applications
                        <span className="block text-xs text-[#9a99a2] font-normal mt-0.5">
                          Industry-specific solutions
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#9a99a2]" />
                    </Link>

                    {/* Flyout submenu */}
                    {showAppsFlyout && (
                      <div
                        className="
                          absolute left-full top-0
                          w-[220px]
                          bg-[#1e1e1e]/95 backdrop-blur-[16px]
                          rounded-lg overflow-hidden
                          border border-white/10
                          ml-1
                        "
                      >
                        {applicationLinks.map((item, i) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-5 py-3 text-white text-sm font-inter hover:bg-white/10 transition ${
                              i > 0 ? "border-t border-white/5" : ""
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Technology */}
              <Link
                href="/technology"
                className={`para-text ${textColor} font-[350]! font-inter`}
              >
                Technology
              </Link>

              {/* Future of EV Energy */}
              <Link
                href="/future-of-ev-energy"
                className={`para-text ${textColor} font-[350]! font-inter`}
              >
                Future of EV Energy
              </Link>

              {/* Resources Dropdown */}
              <div className="relative group">
                <span
                  className={`para-text ${textColor} font-[350]! font-inter cursor-pointer inline-flex items-center gap-1.5`}
                >
                  Resources
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </span>

                <div
                  className="
                    absolute top-full left-0 mt-7
                    w-[220px]
                    bg-[#1e1e1e]/95 backdrop-blur-[16px]
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                    rounded-lg
                    border border-white/10
                  "
                >
                  <Link
                    href="/resources"
                    className="block px-6 py-4 text-white text-sm font-inter font-medium hover:bg-white/10 transition"
                  >
                    Downloads
                    <span className="block text-xs text-[#9a99a2] font-normal mt-0.5">
                      Brochures & datasheets
                    </span>
                  </Link>
                  <Link
                    href="/insights"
                    className="block px-6 py-4 text-white text-sm font-inter font-medium hover:bg-white/10 transition border-t border-white/10"
                  >
                    Insights
                    <span className="block text-xs text-[#9a99a2] font-normal mt-0.5">
                      Articles & industry trends
                    </span>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="block px-6 py-4 text-white text-sm font-inter font-medium hover:bg-white/10 transition border-t border-white/10"
                  >
                    Case Studies
                    <span className="block text-xs text-[#9a99a2] font-normal mt-0.5">
                      Real-world deployments
                    </span>
                  </Link>
                </div>
              </div>

              {/* Contact Us */}
              <Link
                href="/contact"
                className={`para-text ${textColor} font-[350]! font-inter`}
              >
                Contact Us
              </Link>
            </nav>

            {/* RIGHT SIDE: Support + Cart + Mobile menu */}
            <div className="flex items-center gap-5 xl:gap-6">
              <a
                href="https://support.riod.in"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:text-gray-300 transition-colors hidden lg:block`}
                title="Support"
              >
                <Headset className="w-5 h-5 xl:w-[22px] xl:h-[22px]" />
              </a>

              {/* CART ICON — desktop only, shown when items in cart */}
              {totalQuantity > 0 && (
                <div className="hidden lg:block">
                  <CartIcon />
                </div>
              )}

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden ${textColor} hover:text-gray-300 transition-colors`}
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

      {/* MOBILE MENU OVERLAY */}
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
          className={`absolute top-0 right-0 h-full w-full bg-[#1e1e1e] shadow-2xl
            transform transition-transform duration-300 ease-in-out
            overflow-y-auto
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center">
              <Link
                href="/"
                className="w-20 h-20 xl:w-20 xl:h-20 relative block"
              >
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
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* MOBILE MENU ITEMS */}
          <nav className="flex flex-col">
            {/* About */}
            <Link
              href="/about"
              onClick={toggleMenu}
              className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
            >
              About
            </Link>

            {/* Products (Accordion) */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full flex justify-between items-center text-white text-lg font-medium py-6 pl-7 pr-6"
              >
                Products
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="bg-[#171717]">
                  {/* EV Chargers */}
                  <Link
                    href="/products/ev-chargers"
                    onClick={toggleMenu}
                    className="block text-white py-4 pl-12 text-base hover:text-[#cdf80a] border-b border-white/10 transition"
                  >
                    EV Chargers
                  </Link>

                  {/* Energy */}
                  <Link
                    href="/products/energy"
                    onClick={toggleMenu}
                    className="block text-white py-4 pl-12 text-base hover:text-[#cdf80a] border-b border-white/10 transition"
                  >
                    Energy
                  </Link>

                  {/* Applications (Nested Accordion) */}
                  <div className="border-b border-white/10">
                    <button
                      onClick={() => setIsApplicationsOpen(!isApplicationsOpen)}
                      className="w-full flex justify-between items-center text-white py-4 pl-12 pr-6 text-base"
                    >
                      Applications
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          isApplicationsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isApplicationsOpen && (
                      <div className="bg-[#141414]">
                        {applicationLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={toggleMenu}
                            className="block text-white/80 py-3.5 pl-16 text-sm hover:text-[#cdf80a] border-b border-white/5 transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Technology */}
            <Link
              href="/technology"
              onClick={toggleMenu}
              className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
            >
              Technology
            </Link>

            {/* Future of EV Energy */}
            <Link
              href="/future-of-ev-energy"
              onClick={toggleMenu}
              className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
            >
              Future of EV Energy
            </Link>

            {/* Resources (Accordion) */}
            <div className="border-b border-white/10">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="w-full flex justify-between items-center text-white text-lg font-medium py-6 pl-7 pr-6"
              >
                Resources
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isResourcesOpen && (
                <div className="bg-[#171717]">
                  <Link
                    href="/resources"
                    onClick={toggleMenu}
                    className="block text-white py-4 pl-12 text-base hover:text-[#cdf80a] border-b border-white/10 transition"
                  >
                    Downloads
                  </Link>
                  <Link
                    href="/insights"
                    onClick={toggleMenu}
                    className="block text-white py-4 pl-12 text-base hover:text-[#cdf80a] border-b border-white/10 transition"
                  >
                    Insights
                  </Link>
                  <Link
                    href="/case-studies"
                    onClick={toggleMenu}
                    className="block text-white py-4 pl-12 text-base hover:text-[#cdf80a] border-b border-white/10 transition"
                  >
                    Case Studies
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="text-white text-lg font-medium py-6 pl-7 border-b border-white/10"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE CONTACT ICONS */}
          <div className="mt-12 ml-7 flex items-center space-x-6 pb-12">
            <a
              href="https://support.riod.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Headset size={24} />
            </a>
            {totalQuantity > 0 && <CartIcon />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
