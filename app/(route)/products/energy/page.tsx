import type { Metadata } from "next";
import EnergyClient from "./page.client";

export const metadata: Metadata = {
  title: "Energy Solutions | RIOD",
  description:
    "RIOD Power Master: dynamic load balancing, solar management, HVAC control, and battery storage integration for buildings, factories, and commercial sites.",
  openGraph: {
    title: "Energy Solutions | RIOD",
    description:
      "RIOD Power Master: dynamic load balancing, solar management, HVAC control, and battery storage integration for buildings, factories, and commercial sites.",
    url: "https://riod.energy/products/energy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Solutions | RIOD",
    description:
      "RIOD Power Master: dynamic load balancing, solar management, HVAC control, and battery storage integration for buildings, factories, and commercial sites.",
  },
};

export default function EnergyPage() {
  return <EnergyClient />;
}
