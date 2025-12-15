"use client";

import { useEffect, useRef, useState } from "react";
import MotionWrapper from "../common/MotionWrapper";

export default function EvNumbersSection() {
    const counters = [
        { value: 10, suffix: "K+", label: "Products Sold" },
        { value: 4, suffix: "+", label: "Countries" },
        { value: 100, suffix: "%", label: "Inhouse Engineering" },
        { value: 250, suffix: "+", label: "Customers" },
    ];

    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Observer to trigger counter when in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white md:pt-[15.4rem] md:pb-[12.2rem] pt-24 pb-20">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* HEADING */}
                <MotionWrapper>
                    <h2 className="section-heading leading-normal!  font-inter  text-black md:w-[60%]">
                        Driving the Future of EV Charging in Numbers
                    </h2>
                </MotionWrapper>

                {/* PARAGRAPH */}
                <MotionWrapper>
                    <p className="normal-text text-[#9a99a2] mt-8 font-inter leading-[1.7]!">
                        RNDSquare is your end-to-end R&D partner, transforming bold ideas into
                        market-ready innovations. We combine cutting-edge engineering, IoT solutions,
                        and software expertise to design, build, and scale products that drive
                        real-world impact. From initial concept and prototyping to application
                        development and lifecycle support, we work alongside your team to bring
                        ambitious visions to life.
                    </p>
                </MotionWrapper>

                {/* COUNTERS */}
                <MotionWrapper className=" mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4  gap-y-12 xl:w-[87%]">

                    {counters.map((item, index) => (
                        <CounterBox
                            key={index}
                            value={item.value}
                            suffix={item.suffix}
                            label={item.label}
                            start={visible}
                        />
                    ))}

                </MotionWrapper>

            </div>
        </section>
    );
}

/* ---------------------- COUNTER COMPONENT ---------------------- */

function CounterBox({
    value,
    suffix,
    label,
    start,
}: {
    value: number;
    suffix: string;
    label: string;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startValue = 0;
        const duration = 1500; // 1.5 sec animation
        const increment = value / (duration / 16); // per frame update

        const animate = () => {
            startValue += increment;
            if (startValue < value) {
                setCount(Math.floor(startValue));
                requestAnimationFrame(animate);
            } else {
                setCount(value);
            }
        };

        animate();
    }, [start, value]);

    return (
        <div>
            <h3 className="text-[32px] md:text-[36px] xl:text-[48px]  font-inter md:font-medium text-black">
                {count}
                {suffix}
            </h3>
            <p className="text-[17px] md:text-[16px] md:regular-heading text-[#9a99a2]  font-inter tracking-tighter">{label}</p>
        </div>
    );
}
