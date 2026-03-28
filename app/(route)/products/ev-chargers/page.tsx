import type { Metadata } from "next";
import EVChargersClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";

export const metadata: Metadata = {
  title: "EV Chargers | RIOD",
  description:
    "Explore RIOD's full range of AC and DC EV chargers, from home charging pods to commercial DC fast chargers. Smart, connected, and built for India.",
  openGraph: {
    title: "EV Chargers | RIOD",
    description:
      "Explore RIOD's full range of AC and DC EV chargers, from home charging pods to commercial DC fast chargers.",
    url: "https://riod.energy/products/ev-chargers",
    images: [{ url: "/heroes/ev-chargers-hero.webp", width: 1400, height: 800 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between AC and DC charging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AC chargers deliver power that the vehicle's onboard charger converts to DC. They range from 3.3kW to 22kW and are ideal for home and workplace charging. DC chargers bypass the onboard charger and deliver power directly to the battery at 30kW to 120kW+, providing rapid top-ups in 30-60 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Which charger is right for my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most Indian homes with a single-phase power connection, the RIOD AC Powerpod Lite 3.3kW or 7.4kW is ideal. The 3.3kW charges overnight, while the 7.4kW cuts that time in half. If your home has a three-phase connection, the 22kW Powerpod Lite provides the fastest AC charging.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to charge an electric vehicle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a typical 40kWh EV battery: 3.3kW takes ~12 hours, 7.4kW takes ~5.5 hours, 22kW takes ~2 hours, and a 30kW DC charger takes ~80 minutes for 10-80% charge.",
      },
    },
    {
      "@type": "Question",
      name: "What is OCPP and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCPP (Open Charge Point Protocol) is the global standard for communication between chargers and management systems. All RIOD chargers support OCPP 1.6J, ensuring compatibility with any OCPP-compliant backend.",
      },
    },
    {
      "@type": "Question",
      name: "What connector types do RIOD chargers use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AC chargers use the Type 2 (IEC 62196) connector, standard in India and Europe. DC chargers support CCS2 (Combined Charging System Type 2), the mandated DC standard for India.",
      },
    },
    {
      "@type": "Question",
      name: "Do RIOD chargers work with all electric vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. RIOD AC chargers with Type 2 connectors are compatible with all major EVs sold in India including Tata, MG, Hyundai, Kia, BMW, Mercedes, BYD, and more. DC chargers with CCS2 connectors support all CCS-compatible vehicles.",
      },
    },
  ],
};

export default function EVChargersPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <EVChargersClient />
    </>
  );
}
