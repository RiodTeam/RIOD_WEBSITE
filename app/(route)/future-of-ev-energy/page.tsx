import type { Metadata } from "next";
import FutureOfEVEnergyClient from "./page.client";

export const metadata: Metadata = {
  title: "The EV Energy Transition: Strategic Briefing 2025 | RIOD",
  description:
    "What Tesla, ChargePoint, BP, and Shell are building in EV charging infrastructure. Strategic briefing for enterprise leaders on V2G, smart grids, and the technologies reshaping energy.",
  openGraph: {
    title: "The EV Energy Transition: Strategic Briefing 2025 | RIOD",
    description:
      "What Tesla, ChargePoint, BP, and Shell are building in EV charging infrastructure. Strategic briefing for enterprise leaders on V2G, smart grids, and the technologies reshaping energy.",
    url: "https://riod.energy/future-of-ev-energy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The EV Energy Transition: Strategic Briefing 2025 | RIOD",
    description:
      "What Tesla, ChargePoint, BP, and Shell are building in EV charging infrastructure. Strategic briefing for enterprise leaders on V2G, smart grids, and the technologies reshaping energy.",
  },
};

export default function FutureOfEVEnergyPage() {
  return <FutureOfEVEnergyClient />;
}
