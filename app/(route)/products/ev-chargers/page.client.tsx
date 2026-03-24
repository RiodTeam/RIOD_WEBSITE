"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import ProductGrid from "@/app/components/ev-chargers/ProductGrid";
import CommunitySuite from "@/app/components/ev-chargers/CommunitySuite";
import VehicleScroll from "@/app/components/ev-chargers/VehicleScroll";
import CMSPartners from "@/app/components/ev-chargers/CMSPartners";
import ChargingFAQ from "@/app/components/ev-chargers/ChargingFAQ";

/* ─── Section 1: Private Charging & Community ─── */
const privateChargers = [
  {
    name: "RIOD AC PowerPod Lite",
    power: "3.3 kW",
    description:
      "Single-phase home charger for overnight charging. Smart scheduling, energy monitoring, and Wi-Fi connectivity.",
    image: "/products/powerpod.png",
    shopUrl: "/products/ev-chargers/powerpod",
  },
  {
    name: "RIOD AC PowerPod Lite",
    power: "7.4 kW",
    description:
      "Fast single-phase home charger. Cuts charging time in half compared to 3.3kW. Ideal for daily commuters.",
    image: "/products/powerpod.png",
    shopUrl: "/products/ev-chargers/powerpod",
  },
  {
    name: "RIOD AC PowerPod Lite",
    power: "22 kW",
    description:
      "Three-phase AC charger for the fastest home charging. Full charge in under 2 hours for most EVs.",
    image: "/products/powerpod.png",
    shopUrl: "/products/ev-chargers/powerpod",
  },
];

/* ─── Section 3: Public Charging ─── */
const edgeChargers = [
  {
    name: "RIOD AC PowerPod Go",
    power: "3.3 kW",
    description:
      "Compact shared charger with RFID access, 4G connectivity, and OCPP cloud management for apartments and offices.",
    image: "/products/powerpod.png",
    shopUrl: "/products/ev-chargers/powerpod-go",
  },
  {
    name: "RIOD AC PowerPod Go",
    power: "7.4 kW",
    description:
      "Mid-range community charger with payment terminal support, user authentication, and remote monitoring.",
    image: "/products/powerpod.png",
    shopUrl: "/products/ev-chargers/powerpod-go",
  },
  {
    name: "RIOD AC PowerPod Go",
    power: "22 kW",
    description:
      "High-power shared AC charger for commercial spaces. Supports multiple payment methods and load balancing.",
    image: "/products/powerpod.png",
    shopUrl: "/products/ev-chargers/powerpod-go",
  },
];

const cityChargers = [
  {
    name: "RIOD AC PowerPod City",
    power: "3.3 kW",
    description:
      "Dual-gun public charger with RFID access, 4G connectivity, and OCPP cloud management for apartments and offices.",
    image: "/products/powerpod-city.png",
    shopUrl: "/products/ev-chargers/powerpod-city",
  },
  {
    name: "RIOD AC PowerPod City",
    power: "7.4 kW",
    description:
      "Mid-range dual-gun charger with payment terminal support, user authentication, and remote monitoring.",
    image: "/products/powerpod-city.png",
    shopUrl: "/products/ev-chargers/powerpod-city",
  },
  {
    name: "RIOD AC PowerPod City",
    power: "22 kW",
    description:
      "High-power dual-gun charger for commercial spaces. Supports multiple payment methods and load balancing.",
    image: "/products/powerpod-city.png",
    shopUrl: "/products/ev-chargers/powerpod-city",
  },
];

const dcChargers = [
  {
    name: "RIOD DC Fast",
    power: "30 kW",
    description:
      "Entry-level DC fast charger for retail locations and small businesses. CCS2 connector, 10-80% in ~80 minutes.",
    image: "/products/powerpod-city.png",
    shopUrl: "/contact",
    ctaLabel: "Contact Us",
  },
  {
    name: "RIOD DC Fast",
    power: "60 kW",
    description:
      "Mid-range DC charger for fuel stations and fleet depots. Dual connector option, OCPP 1.6J compliant.",
    image: "/products/powerpod-city.png",
    shopUrl: "/contact",
    ctaLabel: "Contact Us",
  },
  {
    name: "RIOD DC Fast",
    power: "120 kW",
    description:
      "High-power DC charger for highways and public charging hubs. Rapid top-up in under 30 minutes for most EVs.",
    image: "/products/powerpod-city.png",
    shopUrl: "/contact",
    ctaLabel: "Contact Us",
  },
];

export default function EVChargersClient() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage="/heroes/ev-chargers-hero.webp"
          title="Charge While You Park"
          description="From home pods to highway fast chargers, RIOD's full range of AC and DC charging solutions, built in India for the world."
          overlayOpacity={0.55}
        />

        {/* Section 1: Private and Community Charging */}
        <ProductGrid
          label="Private and Community Charging"
          heading="Private & Community Solutions"
          subtext="Designed for home garages, villas, private parking, companies, and apartment communities. Smart scheduling, energy monitoring, and seamless overnight charging."
          products={privateChargers}
          labelHighlight
          specUrl="/products/ev-chargers/powerpod"
        />

        {/* Section 2: Community Charging Suite */}
        <CommunitySuite />

        {/* Section 3: Public Charging */}
        <ProductGrid
          label="Public Charging"
          heading="Public Charging Solutions"
          subtext="Built for shared environments, apartments, offices, highways, and commercial spaces. RFID access, payment terminals, and cloud management."
          bg="gray"
          labelHighlight
          groups={[
            { subHeading: "RIOD AC PowerPod Go", products: edgeChargers, specUrl: "/products/ev-chargers/powerpod-go" },
            { subHeading: "RIOD AC PowerPod City (Dual Gun)", products: cityChargers, specUrl: "/products/ev-chargers/powerpod-city" },
            { subHeading: "RIOD DC Fast", products: dcChargers },
          ]}
        />

        <VehicleScroll />

        <CMSPartners />

        <ChargingFAQ />
      </main>
    </ReactLenis>
  );
}
