"use client";

import Link from "next/link";
import type { ProductVariant } from "@/app/data/powerpodData";
import MotionWrapper from "../common/MotionWrapper";

interface VariantsTableProps {
  variants: ProductVariant[];
}

export default function VariantsTable({ variants }: VariantsTableProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/40 font-inter mb-3">
            Product Range
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-white font-inter leading-tight mb-12 md:mb-16">
            Compare Models
          </h2>
        </MotionWrapper>

        {/* Desktop table */}
        <MotionWrapper>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="pb-4 pr-6 text-sm font-medium text-white/50 font-inter">
                    Model
                  </th>
                  <th className="pb-4 pr-6 text-sm font-medium text-white/50 font-inter">
                    Power
                  </th>
                  <th className="pb-4 pr-6 text-sm font-medium text-white/50 font-inter">
                    Supply
                  </th>
                  <th className="pb-4 pr-6 text-sm font-medium text-white/50 font-inter">
                    Connector
                  </th>
                  <th className="pb-4 pr-6 text-sm font-medium text-white/50 font-inter">
                    Mount
                  </th>
                  <th className="pb-4 pr-6 text-sm font-medium text-white/50 font-inter">
                    Authentication
                  </th>
                  <th className="pb-4 text-sm font-medium text-white/50 font-inter"></th>
                </tr>
              </thead>
              <tbody>
                {variants.map((v) => (
                  <tr
                    key={v.name}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <td className="py-5 pr-6 text-[15px] font-medium text-white font-inter">
                      {v.name}
                    </td>
                    <td className="py-5 pr-6 text-[15px] text-[#cdf80a] font-inter">
                      {v.power}
                    </td>
                    <td className="py-5 pr-6 text-[15px] text-white/70 font-inter">
                      {v.supply}
                    </td>
                    <td className="py-5 pr-6 text-[15px] text-white/70 font-inter">
                      {v.connector}
                    </td>
                    <td className="py-5 pr-6 text-[15px] text-white/70 font-inter">
                      {v.mount}
                    </td>
                    <td className="py-5 pr-6 text-[15px] text-white/70 font-inter">
                      {v.auth}
                    </td>
                    <td className="py-5">
                      <Link
                        href={v.storeUrl ?? "/contact"}
                        className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium font-inter transition-colors whitespace-nowrap ${
                          v.storeUrl
                            ? "bg-[#cdf80a] text-[#1b1b1b] hover:bg-[#b8e000]"
                            : "border border-white/20 text-white hover:bg-white/10"
                        }`}
                      >
                        {v.storeUrl ? "Buy Now" : "Contact Us"}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionWrapper>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {variants.map((v, index) => (
            <MotionWrapper key={v.name} delay={index * 0.1}>
              <div className="bg-white/5 rounded-xl p-6 space-y-3">
                <h3 className="text-lg font-medium text-white font-inter">
                  {v.name}
                </h3>
                <div className="text-[#cdf80a] text-xl font-medium font-inter">
                  {v.power}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <p className="text-xs text-white/40 font-inter">Supply</p>
                    <p className="text-sm text-white/70">{v.supply}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-inter">
                      Connector
                    </p>
                    <p className="text-sm text-white/70">{v.connector}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-inter">Mount</p>
                    <p className="text-sm text-white/70">{v.mount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-inter">Auth</p>
                    <p className="text-sm text-white/70">{v.auth}</p>
                  </div>
                </div>
                <Link
                  href={v.storeUrl ?? "/contact"}
                  className={`mt-2 inline-flex items-center px-5 py-2 rounded-full text-sm font-medium font-inter transition-colors ${
                    v.storeUrl
                      ? "bg-[#cdf80a] text-[#1b1b1b] hover:bg-[#b8e000]"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {v.storeUrl ? "Buy Now" : "Contact Us"}
                </Link>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
