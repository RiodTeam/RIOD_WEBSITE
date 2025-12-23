"use client";

import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white pt-24 md:pt-[11.7rem] pb-10">
      {/* TOP SECTION */}
      <MotionWrapper className="w-[90%] max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* LEFT TEXT */}
        <h3 className="regular-heading max-w-[550px] text-white! leading-[1.4]! ">
          Get valuable strategy, culture, and brand insights straight to your
          inbox.
        </h3>

        {/* RIGHT BUTTON */}
        <Link href="/contact" className="block w-full sm:w-auto">
          <button
            className="
      bg-white text-black
      w-full sm:w-auto
      px-7 py-3
      font-inter text-[16px]
      flex items-center
      justify-between sm:justify-center
      gap-8
      hover:opacity-80 transition
    "
          >
            <span>Contact US</span>

            <Image
              src="/footer/arrow.svg"
              alt="arrow"
              width={12}
              height={12}
              className="object-contain"
            />
          </button>
        </Link>
      </MotionWrapper>

      {/* DIVIDER */}
      <MotionWrapper>
        <div className="w-[90%] max-w-[1400px] mx-auto border-b border-[#3a3a3a] mt-18 mb-20"></div>
      </MotionWrapper>

      {/* MIDDLE FOOTER LINKS */}
      <div className="w-[90%] max-w-[1400px] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16">
        <MotionWrapper className="col-span-2 md:col-span-3 lg:col-span-1">
          <Image
            src="/header/logo.svg"
            alt="RIOD Logo"
            width={90}
            height={10}
            className="object-contain"
          />
        </MotionWrapper>

        {/* EXPLORE */}
        <MotionWrapper className="xl:mr-10 mt-1">
          <h4 className="font-inter text-[17px] text-[#b3b3b3] mb-4">
            Explore
          </h4>
          <ul className="space-y-4 text-[#7c7c7c] text-[17px] font-medium">
            <li>
              <Link
                href="/industries "
                className="underline-hover"
              >
                What We Do
              </Link>
            </li>

            <li>
              <Link href="/about" className="underline-hover">
                Who We Are
              </Link>
            </li>

            <li>
              <Link href="/careers" className="underline-hover">
                Career Opportunities
              </Link>
            </li>

            <li>
              <Link href="/insights" className="underline-hover">
                Insights & Blogs
              </Link>
            </li>

            <li>
              <Link href="/case-studies" className="underline-hover">
                Get Quote
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className="underline-hover">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </MotionWrapper>

        {/* SERVICES */}
        <MotionWrapper className="xl:ml-[3.7rem]  mt-1">
          <h4 className="font-inter text-[17px] text-[#b3b3b3] mb-4">
            Services
          </h4>
          <ul className="space-y-4 text-[#7c7c7c] text-[17px] font-medium">
            <li>
              <Link
                href="/services/product-engineering"
                className="underline-hover"
              >
                Product Engineering
              </Link>
            </li>

            <li>
              <Link
                href="/services/cloud-applications"
                className="underline-hover"
              >
                Application Development
              </Link>
            </li>

            <li>
              <Link href="/services/vision-ai" className="underline-hover">
                Product Life cycle Support
              </Link>
            </li>

            <li>
              <Link href="/services/ev-charging" className="underline-hover">
                Hardware Integration
              </Link>
            </li>
            <li>
              <Link href="/services/ev-charging" className="underline-hover">
                Hardware Checking
              </Link>
            </li>
            <li>
              <Link href="/services/ev-charging" className="underline-hover">
                Electronics Mapping
              </Link>
            </li>
          </ul>
        </MotionWrapper>

        {/* QUICK LINKS */}
        <MotionWrapper className="md:ml-[10%] lg:ml-[11%] xl:ml-[39%]  mt-1">
          <h4 className="font-inter text-[17px] text-[#b3b3b3] mb-4">
            Quicklinks
          </h4>
          <ul className="space-y-4 text-[#7c7c7c] text-[17px] font-medium">
            <li>
              <Link href="/ev-chargers-hotels" className="underline-hover">
                EV Chargers For Hotels
              </Link>
            </li>

            <li>
              <Link href="/ev-chargers-office" className="underline-hover">
                EV Chargers For Office
              </Link>
            </li>

            <li>
              <Link href="/ev-chargers-institution" className="underline-hover">
                EV Chargers For Institution
              </Link>
            </li>

            <li>
              <Link href="/ev-chargers-home" className="underline-hover">
                EV Chargers For Home
              </Link>
            </li>
            {/* <li>
                            <Link href="/contact" className="underline-hover">IoT Device Integration</Link>
                        </li> */}

            {/* <li>
    <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
  </li> */}
          </ul>
        </MotionWrapper>
      </div>

      {/* DIVIDER */}
      <MotionWrapper>
        <div className="w-[95%] sm:w-[90%] max-w-[1400px] mx-auto border-b border-[#3a3a3a] mt-18 "></div>
      </MotionWrapper>

      {/* BOTTOM FOOTER */}
      <MotionWrapper className="w-[95%] sm:w-[90%] max-w-[1400px] mx-auto mt-11 flex flex-row justify-between text-[13px] text-[#7f7f7f]">
        <p className="text-[13.5px]">©2025 RIOD </p>
        <p className=" text-[#626262] text-[15px] md:text-[17px]">
          Crafted With <span className="text-[#626262]">❤</span> by Woxro
        </p>
      </MotionWrapper>
    </footer>
  );
}
