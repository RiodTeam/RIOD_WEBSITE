import type { Metadata } from "next";
import TechnologyPageClient from "./page.client";

export const metadata: Metadata = {
  title: "Technology | RIOD",
  description:
    "Explore RIOD's technology stack powering the EV charging ecosystem — from embedded firmware and power electronics to cloud platforms and AI-driven analytics.",
};

export default function TechnologyPage() {
  return <TechnologyPageClient />;
}
