"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

const faqs = [
  {
    question: "What is the difference between AC and DC charging?",
    answer:
      "AC (Alternating Current) chargers deliver power that the vehicle's onboard charger converts to DC to charge the battery. They range from 3.4kW to 22kW and are ideal for home and workplace charging where vehicles are parked for hours. DC (Direct Current) chargers bypass the onboard charger and deliver power directly to the battery at 30kW to 120kW+, providing rapid top-ups in 30-60 minutes,ideal for highways and public stations.",
  },
  {
    question: "Which charger is right for my home?",
    answer:
      "For most Indian homes with a single-phase power connection, the RIOD AC PowerPod Lite 3.3kW or 7.4kW is ideal. The 3.3kW charges overnight (8-10 hours for a full charge), while the 7.4kW cuts that time in half. If your home has a three-phase connection, the 22kW PowerPod Lite provides the fastest AC charging available.",
  },
  {
    question: "What are the electrical requirements for installation?",
    answer:
      "A 3.4kW charger requires a standard single-phase connection with a 16A MCB and dedicated circuit. The 7.4kW needs a single-phase 32A supply. The 22kW requires a three-phase connection with a 32A supply per phase. DC chargers need a dedicated three-phase industrial connection,our team handles the complete site assessment and installation.",
  },
  {
    question: "How long does it take to charge an electric vehicle?",
    answer:
      "Charging time depends on the charger power and vehicle battery size. For a typical 40kWh EV battery: 3.4kW takes ~12 hours, 7.4kW takes ~5.5 hours, 22kW takes ~2 hours, and a 30kW DC charger takes ~80 minutes for 10-80% charge. Larger batteries (like 60kWh+) proportionally take longer.",
  },
  {
    question: "What is OCPP and why does it matter?",
    answer:
      "OCPP (Open Charge Point Protocol) is the global standard for communication between chargers and management systems. All RIOD chargers support OCPP 1.6J, ensuring compatibility with any OCPP-compliant backend. This means you can switch CMS providers without replacing hardware, and manage chargers from multiple manufacturers through a single platform.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "RIOD chargers support multiple payment methods: UPI QR code scanning, NFC contactless cards (Visa, Mastercard, RuPay), RFID cards for fleet and community access, and in-app payments through our Community Suite. Non-app payments (QR and RFID) are free to use with our software.",
  },
  {
    question: "What is the warranty on RIOD chargers?",
    answer:
      "All RIOD AC chargers come with a 2-year standard warranty covering manufacturing defects and component failures. DC chargers carry a 2-year warranty with optional extended warranty plans up to 5 years. Warranty includes remote diagnostics support and on-site service where applicable.",
  },
  {
    question: "Can I use solar power with RIOD chargers?",
    answer:
      "Yes. RIOD chargers work with any power source including solar. Our Decentralized Load Balancer technology can prioritize solar self-consumption, automatically adjusting charging power based on available solar generation. This is particularly effective for daytime workplace charging.",
  },
  {
    question: "Are there government subsidies for EV chargers in India?",
    answer:
      "Yes. Under the FAME II scheme and various state EV policies, subsidies and incentives are available for both home and commercial charger installations. Several states offer capital subsidies (up to 25-50% of equipment cost), reduced electricity tariffs for EV charging, and expedited permits. Contact us for state-specific subsidy guidance.",
  },
  {
    question: "What connector types do RIOD chargers use?",
    answer:
      "Our AC chargers use the Type 2 (IEC 62196) connector, which is the standard in India and Europe. DC chargers support CCS2 (Combined Charging System Type 2) which is the mandated DC standard for India. These connectors are compatible with all major EV brands sold in India.",
  },
  {
    question: "How does dynamic load balancing work?",
    answer:
      "Dynamic load balancing distributes available electrical capacity across multiple chargers in real-time. If your site has a 100A connection and two chargers, the system automatically splits power based on each vehicle's needs and the site's total consumption. As one vehicle finishes or appliances switch off, power is redistributed,maximizing charger utilization without exceeding your electrical capacity.",
  },
  {
    question: "Can I manage chargers for my apartment complex?",
    answer:
      "Yes. Our Community Charging Suite is specifically designed for residential complexes, gated communities, and shared parking. It handles user management, access control via RFID, automated billing per apartment, usage scheduling, and energy analytics,all free for non-app payment methods.",
  },
  {
    question: "Do RIOD chargers work with all electric vehicles?",
    answer:
      "Yes. All RIOD AC chargers with Type 2 connectors work with every EV sold in India,Tata, MG, Hyundai, Kia, BYD, BMW, Mercedes, Audi, Volvo, Mahindra, and more. Our DC chargers with CCS2 connectors support all CCS-compatible vehicles. The charger communicates with the vehicle to deliver the maximum power the vehicle can accept.",
  },
  {
    question: "What is the difference between Powerpod and Powerpod Go?",
    answer:
      "The Powerpod is designed for private, dedicated use,home garages, villa parking, and single-user installations. It focuses on smart scheduling and energy monitoring. The Powerpod Go is built for shared and public environments,apartments, offices, and commercial spaces. It adds RFID authentication, 4G connectivity, payment terminal support, and OCPP cloud management for multi-user scenarios.",
  },
];

export default function ChargingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white pt-16 md:pt-[6.8rem] pb-16 md:pb-[6.8rem]">
      <div className="w-[90%] max-w-[900px] mx-auto">
        <MotionWrapper>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#717171] block mb-3 text-center">
            Support
          </span>
          <h2 className="section-heading text-black text-center mb-12 md:mb-16">
            Frequently Asked Questions
          </h2>
        </MotionWrapper>

        <div className="divide-y divide-[#e5e5e5]">
          {faqs.map((faq, index) => (
            <MotionWrapper key={index} delay={index * 0.03}>
              <div className="py-5 md:py-6">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-start gap-4 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-black font-inter leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#9a99a2] shrink-0 mt-1 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="mt-4 para-text text-[#626262] leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
