import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title:
    "EV Charging Stations in India | AC & DC Chargers | RIOD",
  description:
    "RIOD manufactures BIS-certified EV charging stations for India. AC chargers from 3.3kW to 22kW, DC fast chargers, OCPP compliant, IS 17017 certified. Built for Indian electrical standards, weather conditions, and grid compatibility. Trusted by CPOs, fleet operators, and businesses across India.",
  keywords: [
    "EV charging stations India",
    "electric vehicle charger India",
    "EV charger manufacturer India",
    "AC EV charger India",
    "DC fast charger India",
    "BIS certified EV charger",
    "IS 17017 EV charger",
    "OCPP charger India",
    "EV charging infrastructure India",
  ],
  openGraph: {
    title: "EV Charging Stations in India | AC & DC Chargers | RIOD",
    description:
      "BIS-certified EV charging stations built for Indian conditions. AC chargers, DC fast chargers, OCPP compliant, cloud-managed. From a manufacturer that understands Indian electrical standards.",
    type: "website",
    url: "https://riod.energy/ev-charging-stations-india",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charging Stations in India | AC & DC Chargers | RIOD",
    description:
      "BIS-certified EV charging stations built for Indian conditions. AC chargers, DC fast chargers, OCPP compliant, cloud-managed. From a manufacturer that understands Indian electrical standards.",
  },
};

export default function Page() {
  return <PageClient />;
}
