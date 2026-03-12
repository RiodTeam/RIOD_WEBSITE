import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Parking Complexes | Scalable Solutions",
  description:
    "Scalable EV charging solutions for parking complexes. Maximize utilization, revenue, and operational efficiency with RIOD's intelligent infrastructure.",
};

export default function Page() {
  return <PageClient />;
}
