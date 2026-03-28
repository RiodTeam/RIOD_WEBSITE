"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone, Mail } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

interface WarrantyContactProps {
  shopUrl: string;
}

export default function WarrantyContact({ shopUrl }: WarrantyContactProps) {
  return (
    <section className="py-16 md:py-[6.8rem] bg-[#1b1b1b]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Warranty */}
          <MotionWrapper>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-[#cdf80a] flex items-center justify-center min-w-[3rem]">
                <ShieldCheck className="w-6 h-6 text-[#1b1b1b]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white font-inter mb-4">
                  2-Year Standard Warranty
                </h3>
                <p className="para-text2 text-[#9a99a2] leading-relaxed mb-3">
                  Every Powerpod ships with a standard 2-year manufacturer
                  warranty covering defects in materials and workmanship. Backed
                  directly by RIOD Logic engineering.
                </p>
                <ul className="space-y-2 text-sm text-[#9a99a2]">
                  <li>
                    All internal components covered: control board, energy meter,
                    RFID reader, relay, contactor, surge protection, and
                    connectivity module.
                  </li>
                  <li>Remote diagnosis within 24 hours.</li>
                  <li>
                    OTA firmware updates through the life of the product at no
                    additional charge.
                  </li>
                </ul>
              </div>
            </div>
          </MotionWrapper>

          {/* Contact + Shop */}
          <MotionWrapper delay={0.1}>
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-white font-inter mb-4">
                Talk to Our Engineers
              </h3>
              <p className="para-text2 text-[#9a99a2] leading-relaxed mb-6">
                Direct technical support from the same engineering team that
                designs and builds the Powerpod. No call centres. No outsourced
                support.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Phone className="w-4 h-4" />
                  <span>+91 7306 908 599</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Mail className="w-4 h-4" />
                  <span>support@riod.in</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={shopUrl}
                  className="inline-flex items-center gap-2 bg-[#cdf80a] text-[#1b1b1b] px-6 py-3 rounded-full font-inter font-medium text-sm hover:bg-[#b8e000] transition-colors"
                >
                  Buy Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-inter font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
