import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title:
    "EV Charging for Apartments & Flats | Residential Charging | RIOD",
  description:
    "Solve apartment EV charging with fair billing, load management, and zero grid overload. Individual metering for each resident, RWA-friendly installation, dynamic load balancing, and a community management platform. Powerpod for individual units and Powerpod Go for shared parking areas.",
  keywords: [
    "apartment EV charging",
    "EV charger for flats",
    "residential EV charging India",
    "society EV charging",
    "RWA EV charger",
    "apartment complex EV charging",
    "multi-dwelling EV charging",
    "residential charging station India",
  ],
  openGraph: {
    title: "EV Charging for Apartments & Flats | Residential Charging | RIOD",
    description:
      "Fair billing, no grid overload, resident self-service, and central monitoring. EV charging designed for Indian apartment complexes.",
    type: "website",
    url: "/ev-charging-apartments",
  },
};

export default function Page() {
  return <PageClient />;
}
