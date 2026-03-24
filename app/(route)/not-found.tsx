import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | RIOD",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center py-24">
        <p className="text-8xl font-bold text-[#cdf80a] mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#cdf80a] text-[#1b1b1b] font-semibold hover:bg-[#b8e000] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#1b1b1b] text-[#1b1b1b] font-semibold hover:bg-[#f0f7d4] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
