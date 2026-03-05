import type { Metadata } from "next";
import ResourcesClient from "./page.client";

export const metadata: Metadata = {
  title: "Resources | RIOD",
  description:
    "Download product datasheets, installation guides, brochures, and comparison charts for all RIOD EV charging products.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
