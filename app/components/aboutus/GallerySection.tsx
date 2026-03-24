"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const TOTAL_IMAGES = 72;

const galleryImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  src: `/about/gallery/gallery-${i + 1}.webp`,
  alt: `RIOD team and workspace ${i + 1}`,
}));

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[7/5] rounded-xl overflow-hidden bg-[#e8e8e8] group"
    >
      {visible && (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#f6f6f6]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image) => (
            <LazyImage key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
