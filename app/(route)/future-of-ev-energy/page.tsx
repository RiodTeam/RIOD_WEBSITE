import type { Metadata } from "next";
import FutureOfEVEnergyClient from "./page.client";

export const metadata: Metadata = {
  title: "The EV Energy Transition: Strategic Briefing 2025 | RIOD",
  description:
    "What Tesla, ChargePoint, BP, and Shell are building in EV charging infrastructure. Strategic briefing for enterprise leaders on V2G, smart grids, and the technologies reshaping energy.",
};

export default function FutureOfEVEnergyPage() {
  return <FutureOfEVEnergyClient />;
}
