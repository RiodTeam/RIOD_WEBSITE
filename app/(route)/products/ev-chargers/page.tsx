import type { Metadata } from "next";
import EVChargersClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers | RIOD",
  description:
    "Explore RIOD's full range of AC and DC EV chargers, from home charging pods to commercial DC fast chargers. Smart, connected, and built for India.",
};

export default function EVChargersPage() {
  return <EVChargersClient />;
}
