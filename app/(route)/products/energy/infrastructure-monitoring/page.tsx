import type { Metadata } from "next";
import InfraMonitoringClient from "./page.client";

export const metadata: Metadata = {
  title: "Infrastructure Monitoring | RIOD Energy Solutions",
  description:
    "Monitor critical energy infrastructure using Vision AI and autonomous drone inspections. Detect anomalies, thermal hotspots, and equipment damage before failure.",
  openGraph: {
    title: "Infrastructure Monitoring | RIOD Energy Solutions",
    description:
      "Monitor critical energy infrastructure using Vision AI and autonomous drone inspections. Detect anomalies, thermal hotspots, and equipment damage before failure.",
    url: "https://riod.energy/products/energy/infrastructure-monitoring",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infrastructure Monitoring | RIOD Energy Solutions",
    description:
      "Monitor critical energy infrastructure using Vision AI and autonomous drone inspections. Detect anomalies, thermal hotspots, and equipment damage before failure.",
  },
};

export default function InfraMonitoringPage() {
  return <InfraMonitoringClient />;
}
