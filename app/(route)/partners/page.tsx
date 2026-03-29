import type { Metadata } from "next";
import PartnersClient from "./page.client";

export const metadata: Metadata = {
  title: "Partner With Us | RIOD",
  description:
    "Join the EV charging revolution. Become a channel partner, host a charger at your premises, or integrate RIOD chargers into your CMS platform.",
  openGraph: {
    title: "Partner With Us | RIOD",
    description:
      "Join the EV charging revolution. Become a channel partner, host a charger at your premises, or integrate RIOD chargers into your CMS platform.",
    url: "https://riod.energy/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Us | RIOD",
    description:
      "Join the EV charging revolution. Become a channel partner, host a charger at your premises, or integrate RIOD chargers into your CMS platform.",
  },
};

export default function PartnersPage() {
  return <PartnersClient />;
}
