"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Settings, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import Hls from "hls.js";

const navLinks = [
  { id: "01", label: "EV Chargers", icon: Zap, href: "/products" },
  { id: "02", label: "Technology", icon: Settings, href: "#solutions" },
  { id: "03", label: "Future of EV Charging", icon: Lightbulb, href: "/insights" },
  { id: "04", label: "Our Team", icon: Users, href: "/about" },
];

export default function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc = "/home/herobg/index.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      });
      hls.loadSource(hlsSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS support
      video.src = hlsSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Poster / fallback image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/home/t2.webp)" }}
      />

      {/* HLS Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/home/t2.webp"
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Hero text */}
        <div className="flex-1 flex items-center">
          <div className="w-[90%] max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="hero-title text-white max-w-[800px]">
                EV Charging &<br />
                Energy Technology
              </h1>
              <p className="hero-desc text-white/80 mt-6 max-w-[620px]">
                Every layer of charging infrastructure, built in-house: from
                the hardware and firmware that powers the device, to the cloud
                platforms and energy systems that keep it all running.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom navigation links */}
        <div className="w-[90%] max-w-[1400px] mx-auto pb-10 md:pb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/20">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={link.href}
                  className={`group flex items-start gap-4 py-3 md:py-0 transition-opacity hover:opacity-100 opacity-80 ${
                    index === 0 ? "md:pr-6" : "md:px-6"
                  }`}
                >
                  <link.icon
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: "#cdf80a" }}
                  />
                  <div>
                    <span className="text-white/50 text-xs font-light tracking-wider block mb-1">
                      {link.id}
                    </span>
                    <span className="text-white text-sm md:text-base font-normal group-hover:text-[#cdf80a] transition-colors">
                      {link.label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
