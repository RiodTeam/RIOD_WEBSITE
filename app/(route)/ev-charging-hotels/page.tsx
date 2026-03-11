import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title:
    "EV Charging for Hotels | Guest Amenity & Revenue Stream | RIOD",
  description:
    "Turn your hotel parking into a revenue-generating EV charging hub. Guest-facing chargers with PMS integration, energy management, and sustainability branding. Powerpod Go for hospitality. Attract premium EV-driving guests and earn from every charging session.",
  keywords: [
    "hotel EV charging",
    "EV charger for hotels",
    "hospitality EV charging",
    "hotel charging station",
    "guest EV charging amenity",
    "hotel EV charging revenue",
    "resort EV charger India",
    "hotel parking EV charger",
  ],
  openGraph: {
    title: "EV Charging for Hotels | Guest Amenity & Revenue Stream | RIOD",
    description:
      "Offer premium EV charging as a guest amenity. Revenue from charging, sustainability branding, and competitive advantage for your hotel property.",
    type: "website",
    url: "/ev-charging-hotels",
  },
};

export default function Page() {
  return <PageClient />;
}
