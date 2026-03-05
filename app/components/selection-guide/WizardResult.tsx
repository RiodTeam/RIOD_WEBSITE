"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  RotateCcw,
  MessageCircle,
  Monitor,
} from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";
import type { Recommendation } from "@/app/lib/chargerRecommendation";

function ChargerCard({
  name,
  power,
  image,
  shopUrl,
  label,
}: {
  name: string;
  power: string;
  image: string;
  shopUrl: string;
  label: string;
}) {
  return (
    <div className="bg-[#f6f6f6] rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-center">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-white shrink-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div>
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#1b1b1b] bg-[#cdf80a] px-3 py-1 rounded-md mb-3">
          {label}
        </span>
        <h4 className="text-lg md:text-xl font-medium text-black font-inter">
          {name}
        </h4>
        <span className="text-2xl font-light text-black block mt-1 mb-3">
          {power}
        </span>
        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-[#626262] transition-colors"
        >
          Shop Now
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function WizardResult({
  recommendation,
  onStartOver,
}: {
  recommendation: Recommendation;
  onStartOver: () => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      setError("Please fill in name and email.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          type: "charger-selection",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border border-[#d0d0d0] px-4 py-3 rounded-md text-sm font-inter text-black placeholder:text-[#9a99a2] focus:outline-none focus:border-[#cdf80a] transition-colors";

  return (
    <div>
      <MotionWrapper>
        <h2 className="section-heading text-black mb-4">
          Your Recommended Charger
        </h2>
      </MotionWrapper>

      {/* Charger cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10">
        <MotionWrapper delay={0.1}>
          <ChargerCard
            {...recommendation.primary}
            label="Recommended"
          />
        </MotionWrapper>
        {recommendation.secondary && (
          <MotionWrapper delay={0.2}>
            <ChargerCard
              {...recommendation.secondary}
              label="Also Consider"
            />
          </MotionWrapper>
        )}
      </div>

      {/* Reasoning */}
      <MotionWrapper delay={0.2}>
        <div className="bg-[#f6f6f6] rounded-xl p-6 md:p-8 mb-10">
          <h3 className="text-lg font-medium text-black font-inter mb-3">
            Why this charger?
          </h3>
          <p className="para-text text-[#626262] leading-relaxed">
            {recommendation.reasoning}
          </p>
        </div>
      </MotionWrapper>

      {/* Software + Application links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <MotionWrapper delay={0.3}>
          <div className="bg-[#1b1b1b] rounded-xl p-6 md:p-8 text-white">
            <Monitor className="w-6 h-6 text-[#cdf80a] mb-4" />
            <h4 className="text-lg font-medium font-inter mb-2">
              {recommendation.software.name}
            </h4>
            <p className="text-sm text-[#9a99a2] leading-relaxed mb-4">
              {recommendation.software.description}
            </p>
            <Link
              href={recommendation.software.link}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#cdf80a] hover:text-white transition-colors"
            >
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionWrapper>

        {recommendation.applicationPage && (
          <MotionWrapper delay={0.35}>
            <div className="bg-[#f6f6f6] rounded-xl p-6 md:p-8 flex flex-col">
              <h4 className="text-lg font-medium text-black font-inter mb-2">
                Read more about your application
              </h4>
              <p className="para-text2 text-[#626262] leading-relaxed mb-4 flex-1">
                Explore how RIOD chargers are designed specifically for your
                type of location.
              </p>
              <Link
                href={recommendation.applicationPage.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-[#626262] transition-colors"
              >
                {recommendation.applicationPage.label}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionWrapper>
        )}
      </div>

      {/* Expert Advice CTA */}
      <MotionWrapper delay={0.4}>
        <div className="border-t border-[#e5e5e5] pt-10">
          {!showForm && !submitted && (
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-medium text-black font-inter mb-3">
                Want personalized advice?
              </h3>
              <p className="para-text text-[#626262] mb-6">
                Our EV charging experts can help you with site assessment,
                installation planning, and custom recommendations.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-[#1b1b1b] text-[#cdf80a] px-8 py-3 rounded-md font-inter font-medium hover:bg-[#333] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Get Expert Advice
              </button>
            </div>
          )}

          {showForm && !submitted && (
            <div className="max-w-[500px] mx-auto">
              <h3 className="text-xl font-medium text-black font-inter mb-6">
                Talk to an EV Charging Expert
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-inter text-[#626262]">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-inter text-[#626262]">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="Your email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-inter text-[#626262]">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Phone number"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-inter text-[#626262]">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your charging needs"
                    maxLength={500}
                    className={`${inputClass} h-28 resize-none`}
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-3">{error}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-6 bg-[#1b1b1b] text-white px-8 py-3 rounded-md font-inter font-medium hover:bg-[#333] transition-colors disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </div>
          )}

          {submitted && (
            <div className="text-center">
              <h3 className="text-xl font-medium text-black font-inter mb-3">
                Thank you!
              </h3>
              <p className="para-text text-[#626262]">
                Our team will reach out to you soon with personalized guidance.
              </p>
            </div>
          )}
        </div>
      </MotionWrapper>

      {/* Start Over */}
      <div className="mt-10 text-center">
        <button
          onClick={onStartOver}
          className="inline-flex items-center gap-2 text-sm font-inter font-medium text-[#626262] hover:text-black transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Start Over
        </button>
      </div>
    </div>
  );
}
