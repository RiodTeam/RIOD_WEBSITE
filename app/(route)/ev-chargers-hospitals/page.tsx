import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Hospitals | Healthcare Charging Solutions",
  description:
    "Safe, reliable EV charging solutions for hospitals. Support staff, patients, visitors, and fleet vehicles with intelligent charging infrastructure.",
};

export default function Page() {
  return <PageClient />;
}
