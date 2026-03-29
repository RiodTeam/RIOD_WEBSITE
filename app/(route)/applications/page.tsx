import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Charging Applications | RIOD",
  description:
    "Industry-specific EV charging solutions for hotels, offices, hospitals, malls, parking complexes, resorts, institutions, and homes.",
  openGraph: {
    title: "EV Charging Applications | RIOD",
    description:
      "Industry-specific EV charging solutions for hotels, offices, hospitals, malls, parking complexes, resorts, institutions, and homes.",
    url: "https://riod.energy/applications",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charging Applications | RIOD",
    description:
      "Industry-specific EV charging solutions for hotels, offices, hospitals, malls, parking complexes, resorts, institutions, and homes.",
  },
};

export default function Page() {
  return <PageClient />;
}
