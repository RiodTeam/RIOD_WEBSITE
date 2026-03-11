import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title:
    "EV Charging for Parking | Malls, Airports & Metro Stations | RIOD",
  description:
    "High-traffic EV charging solutions for parking operators, malls, airports, and metro stations. Dual-gun public chargers, DC fast charging, dynamic pricing, OCPP backend, payment collection, and utilization analytics. Powerpod City for public parking with revenue generation and remote monitoring.",
  keywords: [
    "parking EV charging",
    "EV charger for malls",
    "public EV charging station",
    "airport EV charger",
    "metro station EV charging",
    "parking lot EV charger India",
    "commercial parking charger",
    "EV charging operator India",
  ],
  openGraph: {
    title: "EV Charging for Parking | Malls, Airports & Metro Stations | RIOD",
    description:
      "Turn parking infrastructure into a charging revenue stream. High-traffic chargers, dynamic pricing, payment collection, and real-time analytics for parking operators.",
    type: "website",
    url: "/ev-charging-parking",
  },
};

export default function Page() {
  return <PageClient />;
}
