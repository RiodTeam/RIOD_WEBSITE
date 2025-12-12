import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Office | RIOD",
  description:
    "Smart, fast, and reliable EV charging solutions designed for offices, tech parks, and corporate environments. Boost employee convenience and sustainability.",
};

export default function Page() {
  return <PageClient />;
}
