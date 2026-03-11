import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title:
    "EV Charging for Workplaces | Office Charging Solutions | RIOD",
  description:
    "Smart EV charging solutions for offices and corporate campuses in India. Dynamic load balancing, RFID and app authentication, employee billing, fleet charging, and ESG compliance reporting. Zero infrastructure overhaul required. Powerpod Go and Power Master for complete workplace charging.",
  keywords: [
    "workplace EV charging",
    "office EV charger",
    "corporate EV charging India",
    "employee EV charging",
    "workplace charging station",
    "office electric vehicle charger",
    "ESG EV charging",
    "fleet charging workplace",
  ],
  openGraph: {
    title: "EV Charging for Workplaces | Office Charging Solutions | RIOD",
    description:
      "Deploy workplace EV charging without overhauling your electrical infrastructure. Dynamic load balancing, employee billing, and ESG reporting built in.",
    type: "website",
    url: "/ev-charging-workplaces",
  },
};

export default function Page() {
  return <PageClient />;
}
