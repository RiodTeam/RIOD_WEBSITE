"use client";

import { useEffect, useRef, useState } from "react";

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
        <section ref={sectionRef} className="w-full bg-white py-24">
            <div className="w-[90%] max-w-[1400px] mx-auto">

                {/* HEADING */}
                <h2 className="section-heading leading-normal!  font-inter  text-black w-[60%]">
                    Driving the Future of EV Charging in Numbers
                </h2>

                {/* PARAGRAPH */}
                <p className="normal-text text-[#9a99a2] mt-1 font-inter">
                    RNDSquare is your end-to-end R&D partner, transforming bold ideas into
                    market-ready innovations. We combine cutting-edge engineering, IoT solutions,
                    and software expertise to design, build, and scale products that drive
                    real-world impact. From initial concept and prototyping to application
                    development and lifecycle support, we work alongside your team to bring
                    ambitious visions to life.
                </p>

                {/* COUNTERS */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-12">

                    {counters.map((item, index) => (
                        <CounterBox
                            key={index}
                            value={item.value}
                            suffix={item.suffix}
                            label={item.label}
                            start={visible}
                        />
                    ))}

                </div>

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
            <h3 className="text-[28px] md:text-[48px] font-inter font-medium text-black">
                {count}
                {suffix}
            </h3>
            <p className="regular-heading text-[#9a99a2] mt-2 font-inter">{label}</p>
        </div>
    );
}
