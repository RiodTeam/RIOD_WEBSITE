import type { Metadata } from "next";
import EnergyClient from "./page.client";

export const metadata: Metadata = {
  title: "Energy Solutions | RIOD",
  description:
    "RIOD energy solutions — smart energy management, solar integration, and grid-connected systems for sustainable EV charging infrastructure.",
};

export default function EnergyPage() {
  return <EnergyClient />;
}
