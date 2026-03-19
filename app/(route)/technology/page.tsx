import type { Metadata } from "next";
import TechnologyPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Technology | RIOD",
  description:
    "Explore RIOD's full-stack EV charging technology, built in-house from power electronics and embedded firmware to CPMS platforms, energy management, and mobile applications.",
};

export default function TechnologyPage() {
  return <TechnologyPageClient />;
}
