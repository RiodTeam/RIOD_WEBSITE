import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Resorts | Premium Guest Charging",
  description:
    "Elevate the resort experience with smart EV charging solutions. Attract eco-conscious travelers and generate new revenue streams.",
  openGraph: {
    title: "EV Chargers for Resorts | Premium Guest Charging",
    description:
      "Elevate the resort experience with smart EV charging solutions. Attract eco-conscious travelers and generate new revenue streams.",
    url: "https://riod.energy/ev-chargers-resorts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Chargers for Resorts | Premium Guest Charging",
    description:
      "Elevate the resort experience with smart EV charging solutions. Attract eco-conscious travelers and generate new revenue streams.",
  },
};

export default function Page() {
  return <PageClient />;
}
