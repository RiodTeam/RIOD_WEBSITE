import type { Metadata } from "next";
import EnergyManagementClient from "./page.client";

export const metadata: Metadata = {
  title: "Energy Management | RIOD Energy Solutions",
  description:
    "Monitor multiple energy assets across your chain. In-depth analytics on consumption patterns, demand forecasting, and energy prediction.",
};

export default function EnergyManagementPage() {
  return <EnergyManagementClient />;
}
