"use client";

import MotionWrapper from "../common/MotionWrapper";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28 lg:pt-30 lg:pb-50">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[40%_50%] xl:grid-cols-[47%_50%] gap-16 lg:gap-24">

        {/* LEFT SIDE — MAIN HEADING */}
        <div className="flex items-start">
          <MotionWrapper>
            <h2 className="font-inter section-heading leading-normal! text-[#222222] md:w-[70%]">
              Made in India.
              Designed for
              the World.
            </h2>
          </MotionWrapper>
        </div>

        {/* RIGHT SIDE — VISION + MISSION */}
        <div className="space-y-[3.7rem]">

          {/* Vision */}
          <div>
            <MotionWrapper>
              <h3 className="regular-heading font-inter text-[#161616] mb-[1.1rem]">
                Our Vision
              </h3>
            </MotionWrapper>

            <MotionWrapper>
              <p className="para-text font-inter text-[#9a99a2] leading-[1.7] lg:max-w-[620px]">
               To accelerate India’s shift towards sustainable electric mobility through cutting-edge EV charging infrastructure that’s 
               intelligent, reliable, and accessible. We envision a future where every journey is powered by clean energy, and EV charging
                is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and 
                sustainability, we aim to make India a global leader in next generation charging solutions.We envision a future where every 
                journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere 
                you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.
              </p>
            </MotionWrapper>
          </div>

          {/* Mission */}
          <div>
            <MotionWrapper>
              <h3 className="regular-heading font-inter text-[#161616] mb-4">
                Our Mission
              </h3>
            </MotionWrapper>

            <MotionWrapper>
              <p className="para-text font-inter text-[#9a99a2] leading-[1.7] lg:max-w-[620px]">
                To empower homes, businesses, and cities with future-ready charging solutions that make
                owning and operating EVs effortless. Through constant innovation and in-house engineering,
                we strive to deliver products that are smart, durable, and built for Indian conditions.
                Our mission is to bridge the gap between technology and sustainability, enabling a connected
                network of EV charging experiences that drive convenience, reliability, and a cleaner planet.
                We envision a future where every journey is powered by clean energy, and EV charging is as
                effortless as using your smartphone-connected, fast, and everywhere you need it.
              </p>
            </MotionWrapper>
          </div>

        </div>

      </div>
    </section>
  );
}
