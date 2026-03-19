import type { Metadata } from "next";
import PowerMasterClient from "./page.client";

export const metadata: Metadata = {
  title: "Power Master | RIOD Energy Solutions",
  description:
    "RIOD Power Master: dynamic load balancing hardware with integrated software. Solar management, HVAC control, BESS integration, and intelligent EV charging queuing.",
};

export default function PowerMasterPage() {
  return <PowerMasterClient />;
}
