import type { Metadata } from "next";
import InfraMonitoringClient from "./page.client";

export const metadata: Metadata = {
  title: "Infrastructure Monitoring | RIOD Energy Solutions",
  description:
    "Monitor critical energy infrastructure using Vision AI and autonomous drone inspections. Detect anomalies, thermal hotspots, and equipment damage before failure.",
};

export default function InfraMonitoringPage() {
  return <InfraMonitoringClient />;
}
