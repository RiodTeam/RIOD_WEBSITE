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
              <p className="para-text font-inter text-[#9a99a2] md:leading-[1.7] lg:max-w-[620px]">
                Our vision is to lead India’s IoT and EV innovation by creating smart, reliable,
                and sustainable technologies that transform the energy, agriculture, and industrial sectors.
                We aspire to empower businesses and communities with intelligent solutions that enhance productivity,
                promote clean energy adoption, and contribute to a more connected and sustainable future.
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
              <p className="para-text font-inter text-[#9a99a2] md:leading-[1.7] lg:max-w-[620px]">
                Our mission is to design, develop, and manufacture world-class IoT products and EV charging solutions that deliver intelligence,
                efficiency, and measurable real-world impact. We are committed to engineering excellence, customer-centric innovation,
                and a Made-in-India approach that supports digital transformation across essential industries and drives long-term sustainability.
              </p>
            </MotionWrapper>
          </div>

        </div>

      </div>
    </section>
  );
}
