"use client";

import React, { useState, FormEvent } from "react";
import MotionWrapper from "../common/MotionWrapper";

interface NewsletterSignupProps {
  variant?: "inline" | "section";
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = "section",
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.message === "Already subscribed.") {
        setStatus("error");
        setErrorMessage("Already subscribed.");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // Inline variant for footer
  if (variant === "inline") {
    return (
      <div className="mt-8">
        <p className="font-inter text-[13px] text-[#7c7c7c] mb-3">
          Subscribe to updates
        </p>

        {status === "success" ? (
          <p className="font-inter text-[13px] text-[#cdf80a]">
            You&apos;re in. We&apos;ll keep it useful.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Your email"
              required
              className="w-full max-w-[220px] h-[38px] px-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[13px] text-white placeholder:text-[#555] font-inter outline-none focus:border-[#cdf80a] transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-[38px] px-4 bg-[#cdf80a] text-[#1b1b1b] text-[13px] font-medium font-inter rounded-md hover:bg-[#d8ff2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === "loading" ? (
                <span className="inline-block w-4 h-4 border-2 border-[#1b1b1b]/30 border-t-[#1b1b1b] rounded-full animate-spin" />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="font-inter text-[12px] text-red-400 mt-2">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }

  // Section variant (full-width section with heading)
  return (
    <section className="w-full bg-[#f6f6f6] py-16 md:py-20">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <div className="flex flex-col items-center text-center">
            <h2 className="font-inter text-[#1b1b1b] text-2xl md:text-3xl lg:text-[2.2rem] font-semibold mb-3">
              Stay in the loop
            </h2>
            <p className="font-inter text-[#626262] text-[15px] md:text-base max-w-lg mb-8">
              Engineering updates, product launches, and field insights. No
              spam.
            </p>

            {status === "success" ? (
              <MotionWrapper>
                <div className="flex items-center gap-2 bg-[#1b1b1b] text-[#cdf80a] font-inter text-[15px] px-6 py-3 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  You&apos;re in. We&apos;ll keep it useful.
                </div>
              </MotionWrapper>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  required
                  className="w-full h-[50px] px-5 bg-white border border-[#e8e8e8] rounded-full text-[15px] text-[#1b1b1b] placeholder:text-[#9a99a2] font-inter outline-none focus:border-[#1b1b1b] transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto h-[50px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="font-inter text-red-500 text-[14px] mt-4">
                {errorMessage}
              </p>
            )}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default NewsletterSignup;
