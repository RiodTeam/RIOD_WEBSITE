import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers | Best Selling Electric Vehicle Chargers",
  description:
    "Explore reliable, fast, and smart EV charging solutions designed for home, business, and commercial spaces.",
  openGraph: {
    title: "EV Chargers | Best Selling Electric Vehicle Chargers",
    description:
      "Explore reliable, fast, and smart EV charging solutions designed for home, business, and commercial spaces.",
    url: "https://riod.energy/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Chargers | Best Selling Electric Vehicle Chargers",
    description:
      "Explore reliable, fast, and smart EV charging solutions designed for home, business, and commercial spaces.",
  },
};

export default function Page() {
  return <PageClient />;
}
