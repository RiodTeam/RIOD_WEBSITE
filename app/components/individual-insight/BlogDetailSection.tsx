"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

export default function BlogDetailSection() {
    return (
        <section className="w-full bg-white pt-40 pb-8 md:pt-52 md:pb-10">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* CATEGORY BADGE */}
                <MotionWrapper>
                    <span className="inline-block bg-[#eeeeee] text-[#222] px-4.5 py-2.5 rounded-full text-[16px] font-inter">
                        Technology
                    </span>
                </MotionWrapper>

                {/* DATE */}
                <MotionWrapper>
                    <p className="text-[#717171] mt-[1.1rem] text-[16px] font-inter">
                        March 20, 2025
                    </p>
                </MotionWrapper>

                {/* TITLE */}
                <MotionWrapper>
                    <h1 className="font-inter text-[#222222] mt-6 section-heading leading-[1.3]">
                        Why Institution Need EV Charging
                    </h1>
                </MotionWrapper>

                {/* INTRO PARAGRAPH */}
                <MotionWrapper>
                    <p className="mt-8 normal-text text-[#9a99a2] font-inter leading-[1.7]">
                        RNDSquare is your end-to-end R&D partner, transforming bold ideas into
                        market-ready innovations. We combine cutting-edge engineering, IoT solutions,
                        and software expertise to design, build, and scale products that drive real-world
                        impact. From initial concept and prototyping to application development and
                        lifecycle support, we work alongside your team to bring ambitious visions to life.
                    </p>
                </MotionWrapper>

                {/* FULL-WIDTH IMAGE */}
                <MotionWrapper>
                    <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px] lg:h-[500px] xl:h-[650px] mt-12">
                        <Image
                            src="/home/hero.webp"
                            alt="Blog Illustration"
                            fill
                            className="object-cover "
                        />
                    </div>
                </MotionWrapper>

                {/* SECTION 1 */}
                <div className="mt-20">
                    <MotionWrapper>
                        <h2 className="text-[32px] font-inter text-[#161616]">
                            Driving the Future of EV Charging in Numbers
                        </h2>
                    </MotionWrapper>

                    <MotionWrapper>
                        <p className="mt-4 para-text text-[#7b7b7b] font-inter leading-[1.7]">
                            To accelerate Indias shift towards sustainable electric mobility through
                            cutting-edge EV charging infrastructure thats intelligent, reliable, and
                            accessible. We envision a future where every journey is powered by clean
                            energy, and EV charging is as effortless as using your smartphone-connected,
                            fast, and everywhere you need it. By combining technology, design, and
                            sustainability, we aim to make India a global leader in next generation
                            charging solutions.
                        </p>
                    </MotionWrapper>
                </div>

                {/* SECTION 2 */}
                <div className="mt-[3.3rem]">
                    <MotionWrapper>
                        <h2 className="text-[32px] font-inter text-[#161616]">
                            Turnkey installation with minimal property disruption
                        </h2>
                    </MotionWrapper>

                    <MotionWrapper>
                        <p className="mt-4 para-text text-[#7b7b7b] font-inter leading-[1.7]">
                            To empower homes, businesses, and cities with future-ready charging solutions
                            that make owning and operating EVs effortless. Through constant innovation and
                            in-house engineering, we strive to deliver products that are smart, durable,
                            and built for Indian conditions. Our mission is to bridge the gap between
                            technology and sustainability, enabling a connected network of EV charging
                            experiences that drive convenience, reliability, and a cleaner planet.
                            We envision a future where every journey is powered by clean energy, and EV
                            charging is as effortless as using your smartphone-connected, fast, and
                            everywhere you need it. By combining technology, design, and sustainability,
                            we aim to make India a global leader in next generation charging solutions.
                        </p>
                    </MotionWrapper>
                </div>

            </div>
        </section>
    );
}
