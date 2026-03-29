"use client";
import { useState } from "react";
import Image from "next/image";


export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      setForm({ name: "", email: "", countryCode: "+91", phone: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#1C1C1C] text-white pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-[6.2rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* LEFT FORM */}
        <div>
          <label className="block mb-2 para-text2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-[10px] mb-3 md:mb-4 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-2 para-text2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Corporate E-mail"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-[10px] mb-3 md:mb-4 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-2 para-text2">
            Phone Number <span className="text-red-500">*</span>
            <span className="text-[11px] text-[#9a99a2] font-normal ml-2 normal-case tracking-normal">tap code to change</span>
          </label>
          <div className="flex gap-0 mb-3 md:mb-4">
            {/* Editable code - type any country code */}
            <input
              type="text"
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="bg-transparent text-white border-[0.5px] border-white px-3 py-[10px] text-sm focus:outline-none text-center shrink-0 focus:bg-white/10 transition-colors"
              style={{ width: "68px" }}
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="flex-1 bg-transparent border-[0.5px] border-l-0 border-white px-4 py-[10px] placeholder:text-[13px] focus:outline-none"
            />
          </div>

          <label className="block mb-2 para-text2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            maxLength={500}
            placeholder="Tell us what you're working on"
            className="w-full h-20 md:h-24 bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-3 focus:outline-none resize-none"
          />
          <div className="flex justify-end mb-1">
            <span className="text-[11px] text-[#9A99A2]">{form.message.length} / 500</span>
          </div>

          {error && <p className="text-red-500 font-inter mt-2 text-sm">{error}</p>}
          {success && <p className="text-green-400 font-inter mt-2 text-sm">Submitted successfully</p>}

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="mt-4 md:mt-5 w-full bg-white text-black px-8 py-[1.1rem] flex justify-between font-medium hover:opacity-80 transition"
          >
            <p className="text-md font-inter font-normal">
              {loading ? "Submitting..." : "CONTACT US"}
            </p>
            <Image
              src="/footer/arrow.svg"
              alt="arrow"
              width={12}
              height={14}
              className="object-contain"
            />
          </button>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="flex flex-col justify-start md:pl-6 lg:pl-20 lg:border-l-[0.5px] lg:border-white">
          <h2 className="section-heading mb-6">Let&apos;s Connect</h2>

          <p className="text-[#9a99a2] leading-9! normal-text mb-10">
            Tell us what you&apos;re working on: a new charging deployment, a technology integration, or a product enquiry. We&apos;ll get back to you within 1 business day.
          </p>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/contact/office.webp"
              alt="RIOD Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
