"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import type { IdealProductData } from "../data/idealProductsData";

interface Props {
  data: IdealProductData;
}

export default function IdealProductsSection({ data }: Props) {
  return (
    <section className="w-full bg-white py-20 md:py-32 lg:pt-52 lg:pb-50">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <MotionWrapper>
            <h2 className="font-inter section-heading leading-[1.3]! lg:leading-normal! text-[#222222] md:w-[70%]">
              {data.title}
            </h2>
          </MotionWrapper>

          <MotionWrapper>
            <p className="text-[#9a99a2] mt-4 leading-[1.7] font-inter normal-text lg:w-[85%] xl:w-[68%]">
              {data.intro}
            </p>
          </MotionWrapper>

          <MotionWrapper>
            <h3 className="font-inter regular-heading mt-12 lg:mt-8 xl:mt-[5.1rem] text-[#161616] md:w-[70%] leading-normal!">
              {data.subTitle}
            </h3>
          </MotionWrapper>

          <MotionWrapper>
            <p className="text-[#9a99a2] mt-7 leading-[1.7] font-inter para-text lg:w-[75%]">
              {data.description}
            </p>
          </MotionWrapper>

          {/* Product cards */}
          {data.products && data.products.length > 0 && (
            <MotionWrapper delay={0.1}>
              <div className="flex flex-wrap gap-4 mt-8">
                {data.products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="flex items-center gap-4 bg-[#f6f6f6] hover:bg-[#eef6d0] border border-[#e8e8e8] rounded-xl px-5 py-4 transition-colors group"
                  >
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1b1b1b] font-inter">
                        {product.name}
                      </p>
                      <p className="text-xs text-[#9a99a2] font-inter">
                        {product.power}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9a99a2] group-hover:text-[#1b1b1b] transition-colors ml-1" />
                  </Link>
                ))}
              </div>
            </MotionWrapper>
          )}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[260px] sm:h-80 md:h-[380px] lg:h-[560px] xl:h-[660px] mt-8 lg:mt-0">
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
