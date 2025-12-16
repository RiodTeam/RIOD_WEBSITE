"use client";

import { useState, useRef, useEffect } from "react";
import { countries } from "./country";
import Image from "next/image";

export default function CountryCodeSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border-[0.5px] border-white px-4 py-4 cursor-pointer select-none"
      >
        <Image
          src={`https://flagcdn.com/w20/${selected.iso}.png`}
          alt=""
          width={20}
          height={15}
          className="w-5 h-auto"
        />
        <span className="text-sm">{selected.code}</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-20 w-full bg-black border border-white max-h-60 overflow-y-auto">
          {countries.map((c) => (
            <div
              key={c.code}
              onClick={() => {
                setSelected(c);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-white/10"
            >
              <Image
                src={`https://flagcdn.com/w20/${c.iso}.png`}
                alt=""
                width={20}
                height={15}
                className="w-5 h-auto"
              />
              <span className="text-[13px] text-gray-400">{c.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
