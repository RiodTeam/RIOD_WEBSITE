"use client";

import Image from "next/image";
import MotionWrapper from "../common/MotionWrapper";

const galleryImages = [
  {
    src: "/about/gallery-1.webp",
    alt: "RIOD lab and development workspace",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/about/gallery-2.webp",
    alt: "Product testing and quality assurance",
    span: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    src: "/about/gallery-3.webp",
    alt: "Hardware manufacturing and assembly",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/about/gallery-4.webp",
    alt: "RIOD development center overview",
    span: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    src: "/about/gallery-5.webp",
    alt: "Team collaboration and engineering discussions",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/about/gallery-6.webp",
    alt: "EV charger deployment and field testing",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Inside RIOD
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            Where It All Happens
          </h2>
          <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
            A look inside our development centers and the team that builds the
            systems our partners rely on.
          </p>
        </MotionWrapper>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[280px]">
          {galleryImages.map((image, index) => (
            <MotionWrapper
              key={image.src}
              delay={index * 0.08}
              className={image.span}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.alt}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
