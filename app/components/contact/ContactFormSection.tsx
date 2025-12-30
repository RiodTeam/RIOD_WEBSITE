"use client";
import { useState } from "react";
import CountryCodeSelect from "./CountrySelector";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_RND_DOMAIN!;

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`${API_BASE}/api/riod-submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full bg-[#1C1C1C] text-white pt-26 pb-[6.2rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT FORM */}
        <div className="mt-6">
          <label className="block mb-3 para-text2">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-[11px] mb-7 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-3 para-text2">
            Primary Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Corporate E-mail"
            className="w-full bg-transparent border-[0.5px] border-white px-4 py-[11px] mb-7 placeholder:text-[13px] focus:outline-none"
          />

          <label className="block mb-3 para-text2">
            Primary Contact Number <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-0 mb-6">
            <CountryCodeSelect />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-[11px] focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center mb-3 mt-12">
            <label className="para-text2">Tell Us About You</label>

            <span className="text-[12px] text-[#9A99A2]">0 / 500</span>
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            maxLength={500}
            placeholder="Type Your Message"
            className="w-full h-40 bg-transparent border-[0.5px] border-white placeholder:text-[13px] px-4 py-3 focus:outline-none resize-none"
          />
          {error && <p className="text-red-500 font-inter mt-4">{error}</p>}
          {success && (
            <p className="text-green-500 font-inter mt-4">Submitted successfully</p>
          )}

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="mt-[4.3rem] w-full bg-white text-black px-8 py-[1.2rem] flex justify-between font-medium hover:opacity-80 transition"
          >
            <p className="text-md font-inter font-normal">
              {loading ? "Submitting..." : "CONTACT US"}
            </p>{" "}
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
          <h2 className="section-heading mb-6 ">What Do You Need Help With?</h2>

          <p className="text-[#9a99a2] leading-[1.8rem]! lg:leading-9! normal-text">
            Connect with RIOD for all inquiries related to our EV charging
            stations and IoT solutions. Share your details through the form
            below, and our experts will reach out with tailored information and
            next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
