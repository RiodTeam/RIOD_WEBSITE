"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

interface IdealProductData {
  title: string;
  intro: string;
  subTitle: string;
  description: string;
  image: string;
}

interface Props {
  data: IdealProductData;
}

export default function IdealProductsSection({ data }: Props) {
  return (
    <section className="w-full bg-white py-[5rem] md:py-[8rem] lg:pt-[13rem] lg:pb-[12.5rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">

        {/* LEFT SIDE */}
        <div>
          <MotionWrapper>
            <h2 className="font-inter section-heading !leading-[1.5] text-[#222222] md:w-[70%]">
              {data.title}
            </h2>
          </MotionWrapper>

          <MotionWrapper>
            <p className="text-[#9a99a2] mt-4 leading-[1.7] font-inter normal-text lg:w-[85%] xl:w-[68%]">
              {data.intro}
            </p>
          </MotionWrapper>

          <MotionWrapper>
            <h3 className="font-inter regular-heading mt-[2rem] xl:mt-[5.1rem] text-[#161616] md:w-[70%]">
              {data.subTitle}
            </h3>
          </MotionWrapper>

          <MotionWrapper>
            <p className="text-[#9a99a2] mt-7 leading-[1.7] font-inter para-text lg:w-[75%]">
              {data.description}
            </p>
          </MotionWrapper>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[560px] xl:h-[660px] mt-8 lg:mt-0">
          <MotionWrapper>
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </MotionWrapper>
        </div>

      </div>
    </section>
  );
}
