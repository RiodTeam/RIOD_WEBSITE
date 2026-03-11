"use client";

import React, { useState, useEffect, useCallback, FormEvent, ReactNode } from "react";
import MotionWrapper from "../common/MotionWrapper";

// ─── Trigger Button ─────────────────────────────────────────────────────────

interface LeadFormTriggerProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export const LeadFormTrigger: React.FC<LeadFormTriggerProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

// ─── Popup Component ────────────────────────────────────────────────────────

interface LeadFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const LeadFormPopup: React.FC<LeadFormPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Close on Escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData(initialFormData);
        setStatus("idle");
        setErrorMessage("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim() || "Lead form submission",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  const inputClasses =
    "w-full h-[48px] px-4 bg-white border border-[#e8e8e8] rounded-lg text-[15px] text-[#1b1b1b] placeholder:text-[#9a99a2] font-inter outline-none focus:border-[#1b1b1b] transition-colors";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-[540px] md:mx-4 bg-white md:rounded-2xl overflow-y-auto z-10">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#f6f6f6] hover:bg-[#e8e8e8] transition-colors z-20"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-[#1b1b1b]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-6 py-8 md:px-10 md:py-10">
          {status === "success" ? (
            <MotionWrapper>
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                <div className="w-16 h-16 rounded-full bg-[#cdf80a] flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#1b1b1b]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-inter text-[#1b1b1b] text-xl font-semibold mb-2">
                  Thank you
                </h3>
                <p className="font-inter text-[#626262] text-[15px] max-w-xs">
                  Got it. Our team will reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 h-[48px] px-8 bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors"
                >
                  Close
                </button>
              </div>
            </MotionWrapper>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8 pr-8">
                <h2 className="font-inter text-[#1b1b1b] text-xl md:text-2xl font-semibold mb-2">
                  Get in touch
                </h2>
                <p className="font-inter text-[#626262] text-[14px] md:text-[15px]">
                  Fill in the details and our team will get back to you.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block font-inter text-[13px] text-[#626262] mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-inter text-[13px] text-[#626262] mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-inter text-[13px] text-[#626262] mb-1.5">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-inter text-[13px] text-[#626262] mb-1.5">
                    Message{" "}
                    <span className="text-[#9a99a2] font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about what you need..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-[#e8e8e8] rounded-lg text-[15px] text-[#1b1b1b] placeholder:text-[#9a99a2] font-inter outline-none focus:border-[#1b1b1b] transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="font-inter text-red-500 text-[14px]">
                    {errorMessage}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-[52px] bg-[#1b1b1b] text-white text-[15px] font-medium font-inter rounded-full hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Convenience wrapper that manages open/close state ──────────────────────

export function useLeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
}

export default LeadFormPopup;
