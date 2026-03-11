"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

type Product = {
  name: string;
  power: string;
  description: string;
  image: string;
  shopUrl: string;
};

type ProductGroup = {
  subHeading: string;
  products: Product[];
  specUrl?: string;
};

interface ProductGridProps {
  label: string;
  heading: string;
  subtext?: string;
  products?: Product[];
  groups?: ProductGroup[];
  bg?: "white" | "gray";
  labelHighlight?: boolean;
  specUrl?: string;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <MotionWrapper key={`${product.name}-${product.power}`} delay={index * 0.1}>
      <div className="group flex flex-col h-full">
        {/* Image with hover overlay */}
        <div className="relative w-full aspect-square bg-[#f0f0f0] rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Product info */}
        <div className="mt-5 flex flex-col flex-1">
          <h3 className="text-lg md:text-xl font-medium text-black font-inter">
            {product.name}
          </h3>
          <span className="text-2xl md:text-3xl font-light text-black mt-1 mb-3">
            {product.power}
          </span>
          <p className="para-text2 text-[#626262] leading-relaxed">
            {product.description}
          </p>

          <a
            href={product.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-[#626262] transition-colors"
          >
            Shop Now
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </MotionWrapper>
  );
}

export default function ProductGrid({
  label,
  heading,
  subtext,
  products,
  groups,
  bg = "white",
  labelHighlight = false,
  specUrl,
}: ProductGridProps) {
  const bgClass = bg === "gray" ? "bg-[#f6f6f6]" : "bg-white";
  const labelColor = labelHighlight ? "text-[#cdf80a]" : "text-[#717171]";
  const labelBg = labelHighlight ? "bg-[#1b1b1b]" : "";
  const sectionBg = labelHighlight ? `${bgClass}` : bgClass;

  return (
    <section className={`${sectionBg} pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]`}>
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          {labelHighlight ? (
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1.5 rounded-md mb-4">
              {label}
            </span>
          ) : (
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3">
              {label}
            </span>
          )}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
            <h2 className="section-heading text-black">{heading}</h2>
            {specUrl && (
              <Link
                href={specUrl}
                className="inline-flex items-center gap-2 border border-[#1b1b1b] text-[#1b1b1b] px-5 py-2.5 rounded-full font-inter font-medium text-sm hover:bg-[#1b1b1b] hover:text-white transition-colors whitespace-nowrap"
              >
                View Specifications
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
          {subtext && (
            <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
              {subtext}
            </p>
          )}
          {!subtext && <div className="mb-12 md:mb-16" />}
        </MotionWrapper>

        {/* Single product list */}
        {products && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={`${product.name}-${product.power}`}
                product={product}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Multiple product groups */}
        {groups &&
          groups.map((group, gIndex) => (
            <div key={group.subHeading} className={gIndex > 0 ? "mt-16 md:mt-20" : ""}>
              <MotionWrapper>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 md:mb-10">
                  <h3 className="text-xl md:text-2xl font-medium text-black font-inter">
                    {group.subHeading}
                  </h3>
                  {group.specUrl && (
                    <Link
                      href={group.specUrl}
                      className="inline-flex items-center gap-2 border border-[#1b1b1b] text-[#1b1b1b] px-4 py-2 rounded-full font-inter font-medium text-xs hover:bg-[#1b1b1b] hover:text-white transition-colors whitespace-nowrap"
                    >
                      View Specifications
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </MotionWrapper>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {group.products.map((product, index) => (
                  <ProductCard
                    key={`${product.name}-${product.power}`}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
