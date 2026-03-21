"use client";

import { useState } from "react";
import MotionWrapper from "../common/MotionWrapper";
import { Download, X, ArrowUpRight } from "lucide-react";

const products = [
  // Private Charging
  {
    type: "AC",
    category: "Private",
    name: "RIOD AC Powerpod 3.4kW",
    power: "3.4 kW",
    description:
      "Compact single-phase home charger with smart scheduling, Wi-Fi connectivity, and energy monitoring.",
    shopUrl: "/products/ev-chargers/powerpod",
  },
  {
    type: "AC",
    category: "Private",
    name: "RIOD AC Powerpod 7.4kW",
    power: "7.4 kW",
    description:
      "Fast home charging with OCPP 1.6J, BLE connectivity, dynamic load balancing, and app control.",
    shopUrl: "/store/powerpod-home-7-4-kw",
  },
  {
    type: "AC",
    category: "Private",
    name: "RIOD AC Powerpod 22kW",
    power: "22 kW",
    description:
      "Three-phase private charger for villas and premium residences with integrated energy metering.",
    shopUrl: "/store/powerpod-home-22kw-ev-charger",
  },
  // Community / Public Charging
  {
    type: "AC",
    category: "Community / Public",
    name: "RIOD AC Powerpod Go 3.4kW",
    power: "3.4 kW",
    description:
      "Networked community charger with RFID authentication, billing support, and remote management.",
    shopUrl: "/store/3-3kw-ocpp-ev-charger",
  },
  {
    type: "AC",
    category: "Community / Public",
    name: "RIOD AC Powerpod Go 7.4kW",
    power: "7.4 kW",
    description:
      "Public-ready wallbox with 4G, RFID, payment terminal integration, and OCPP cloud connectivity.",
    shopUrl: "/store/powerpod-go-7-4kw-fast-ev-charger",
  },
  {
    type: "AC",
    category: "Community / Public",
    name: "RIOD AC Powerpod Go 22kW",
    power: "22 kW",
    description:
      "High-power public AC charger with dual sockets, smart queuing, and integrated energy metering.",
    shopUrl: "/store/powerpod-go-22kw-fast-ev-charger",
  },
  // DC Fast Charging
  {
    type: "DC",
    category: "Fast Charging",
    name: "RIOD DC Fast 30kW",
    power: "30 kW",
    description:
      "Compact DC fast charger with CCS2 connector, ideal for retail locations and fleet depots.",
    shopUrl: "/contact",
  },
  {
    type: "DC",
    category: "Fast Charging",
    name: "RIOD DC Fast 60kW",
    power: "60 kW",
    description:
      "Dual-gun rapid charger with dynamic power sharing, payment terminal, and cloud management.",
    shopUrl: "/contact",
  },
  {
    type: "DC",
    category: "Fast Charging",
    name: "RIOD DC Fast 120kW",
    power: "120 kW",
    description:
      "High-power DC charger for highways and fleet hubs with liquid-cooled cables and 400V/800V support.",
    shopUrl: "/contact",
  },
];

export default function ProductCatalogueSection() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/tech-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, resource: "product-catalogue" }),
      });
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShowForm(false);
          setSubmitted(false);
          setEmail("");
          setName("");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#1b1b1b] text-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Header */}
        <MotionWrapper>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#cdf80a] block mb-3">
                Product Catalogue
              </span>
              <h2 className="section-heading text-white">
                Our Charging<br />Hardware Range
              </h2>
              <p className="para-text text-[#9a99a2] mt-4 max-w-[560px]">
                From residential wallboxes to highway-grade high-power chargers,
                engineered with precision and built for scale.
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-medium text-sm transition-colors shrink-0 self-start lg:self-auto"
              style={{ backgroundColor: "#cdf80a" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8e000")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cdf80a")}
            >
              <Download className="w-4 h-4" />
              Download Full Catalogue
            </button>
          </div>
        </MotionWrapper>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <MotionWrapper key={product.name} delay={index * 0.08}>
              <div className="bg-[#252525] rounded-xl p-6 md:p-8 h-full flex flex-col group hover:bg-[#2a2a2a] transition-colors">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full text-black"
                    style={{ backgroundColor: "#cdf80a" }}
                  >
                    {product.type}
                  </span>
                  <span className="text-xs text-[#9a99a2]">
                    {product.category}
                  </span>
                </div>

                {/* Product name */}
                <h3 className="text-lg font-normal text-white mb-2">
                  {product.name}
                </h3>

                {/* Power rating */}
                <span className="text-2xl md:text-3xl font-light text-white mb-4">
                  {product.power}
                </span>

                {/* Description */}
                <p className="para-text2 text-[#9a99a2]">
                  {product.description}
                </p>

                {/* Shop link */}
                <a
                  href={product.shopUrl}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#cdf80a] hover:text-[#b8e000] transition-colors"
                >
                  {product.type === "DC" ? "Contact Us" : "Learn more"}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Download Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="bg-[#1b1b1b] border border-[#333] rounded-2xl p-8 md:p-10 w-full max-w-md relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-normal text-white mb-2">
                Download Product Catalogue
              </h3>
              <p className="para-text2 text-[#9a99a2] mb-6">
                Enter your details to receive our complete product catalogue.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#252525] border border-[#333] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#717171] focus:outline-none focus:border-[#cdf80a] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#252525] border border-[#333] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#717171] focus:outline-none focus:border-[#cdf80a] transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full py-3 rounded-lg text-black font-medium text-sm transition-colors mt-2 disabled:opacity-70"
                  style={{ backgroundColor: "#cdf80a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b8e000")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cdf80a")}
                >
                  {submitted ? "Submitted!" : loading ? "Submitting..." : "Download Catalogue"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
