import type { Metadata } from "next";
import FutureOfEVEnergyClient from "./page.client";

export const metadata: Metadata = {
  title: "Future of EV Energy | RIOD",
  description:
    "Explore the future of EV charging and energy technology — insights on V2G, smart grids, battery innovation, and the road to sustainable mobility.",
};

export default function FutureOfEVEnergyPage() {
  return <FutureOfEVEnergyClient />;
}
