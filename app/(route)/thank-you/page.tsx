"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center py-24">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-[#cdf80a]" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-4">
          Order Confirmed!
        </h1>

        <p className="text-gray-600 text-lg mb-2">
          Thank you for your purchase from RIOD.
        </p>
        <p className="text-gray-500 text-base mb-10">
          You will receive a confirmation email shortly. Our team will reach out
          to coordinate delivery and installation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/store"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#cdf80a] text-[#1b1b1b] font-semibold hover:bg-[#b8e000] transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#1b1b1b] text-[#1b1b1b] font-semibold hover:bg-[#f0f7d4] transition-colors"
          >
            Contact Support
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Questions? Email us at{" "}
          <a
            href="mailto:info@riod.in"
            className="text-[#1b1b1b] underline underline-offset-2"
          >
            info@riod.in
          </a>
        </p>
      </div>
    </main>
  );
}
