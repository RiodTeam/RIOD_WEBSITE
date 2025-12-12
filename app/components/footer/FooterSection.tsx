"use client";

import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";

export default function FooterSection() {
    return (
        <footer className="w-full bg-black text-white pt-[11.7rem] pb-10">

            {/* TOP SECTION */}
            <MotionWrapper className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                {/* LEFT TEXT */}
                <h3 className="regular-heading max-w-[550px] text-white!">
                    Get valuable strategy, culture, and brand insights
                    straight to your inbox.
                </h3>

                {/* RIGHT BUTTON */}
                <button className="bg-white text-black px-7 py-3 font-inter text-[16px] flex items-center gap-8 hover:opacity-80 transition">
                    Contact US
                    <Image
                        src="/footer/arrow.svg"
                        alt="arrow"
                        width={12}
                        height={12}
                        className="object-contain"
                    />
                </button>

            </MotionWrapper>

            {/* DIVIDER */}
            <MotionWrapper>
                <div className="w-[90%] max-w-[1400px] mx-auto border-b border-[#3a3a3a] mt-18 mb-20"></div>
            </MotionWrapper>

            {/* MIDDLE FOOTER LINKS */}
            <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 space-y-16 ">

                {/* LOGO */}
                <MotionWrapper>
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
                    <h4 className="font-inter text-[17px] text-[#b3b3b3] mb-4">Explore</h4>
                    <ul className="space-y-4 text-[#7c7c7c] text-[17px] font-medium">

                        <li>
                            <Link href="/industries">What We Do</Link>
                        </li>

                        <li>
                            <Link href="/about">Who We Are</Link>
                        </li>

                        <li>
                            <Link href="/careers">Career Opportunities</Link>
                        </li>

                        <li>
                            <Link href="/insights">Insights & Blogs</Link>
                        </li>

                        <li>
                            <Link href="/case-studies">Get  Quote</Link>
                        </li>

                        <li>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>

                    </ul>

                </MotionWrapper>

                {/* SERVICES */}
                <MotionWrapper className="xl:ml-[3.7rem]  mt-1">
                    <h4 className="font-inter text-[17px] text-[#b3b3b3] mb-4">Services</h4>
                    <ul className="space-y-4 text-[#7c7c7c] text-[17px] font-medium">

                        <li>
                            <Link href="/services/product-engineering">Product Engineering</Link>
                        </li>

                        <li>
                            <Link href="/services/cloud-applications">Application Development</Link>
                        </li>

                        <li>
                            <Link href="/services/vision-ai">Product Life cycle Support</Link>
                        </li>

                        <li>
                            <Link href="/services/ev-charging">Hardware Integration</Link>
                        </li>
                        <li>
                            <Link href="/services/ev-charging">Hardware Checking</Link>
                        </li>
                        <li>
                            <Link href="/services/ev-charging">Electronics Mapping</Link>
                        </li>

                    </ul>

                </MotionWrapper>

                {/* QUICK LINKS */}
                <MotionWrapper className="xl:ml-42  mt-1">
                    <h4 className="font-inter text-[17px] text-[#b3b3b3] mb-4">Quicklinks</h4>
                    <ul className="space-y-4 text-[#7c7c7c] text-[17px] font-medium">

                        <li>
                            <Link href="/partners">Hardware Rendering</Link>
                        </li>

                        <li>
                            <Link href="/resources">3D Modeling</Link>
                        </li>

                        <li>
                            <Link href="/gallery">EV Chargers</Link>
                        </li>

                        <li>
                            <Link href="/contact">IoT Device Integration</Link>
                        </li>
                        <li>
                            <Link href="/contact">IoT Device Integration</Link>
                        </li>

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
            <MotionWrapper className="w-[95%] sm:w-[90%] max-w-[1400px] mx-auto mt-11 flex flex-col md:flex-row justify-between text-[13px] text-[#7f7f7f]">
                <p className="text-[13.5px]">©2025 RIOD </p>
                <p className="mt-8 sm:mt-0 text-[#626262] text-[15px] md:text-[17px]">
                    Crafted With <span className="text-[#626262]">❤</span> by Woxro
                </p>
            </MotionWrapper>

        </footer>
    );
}
