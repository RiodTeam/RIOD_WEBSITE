import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers For Home | RIOD EV Charging Solutions",
  description:
    "Reliable, fast, and smart EV charging solutions for homes. Power your EV with advanced home charging technology designed for convenience and efficiency.",
  openGraph: {
    title: "EV Chargers For Home | RIOD EV Charging Solutions",
    description:
      "Reliable, fast, and smart EV charging solutions for homes. Power your EV with advanced home charging technology designed for convenience and efficiency.",
    url: "https://riod.energy/ev-chargers-home",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Chargers For Home | RIOD EV Charging Solutions",
    description:
      "Reliable, fast, and smart EV charging solutions for homes. Power your EV with advanced home charging technology designed for convenience and efficiency.",
  },
};

export default function Page() {
  return <PageClient />;
}
