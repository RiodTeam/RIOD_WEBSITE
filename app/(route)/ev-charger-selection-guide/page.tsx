import type { Metadata } from "next";
import SelectionGuideClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Charger Selection Guide | RIOD",
  description:
    "Find the right RIOD EV charger for your location. Answer a few questions and get personalized recommendations for homes, apartments, hotels, offices, and commercial spaces.",
  openGraph: {
    title: "EV Charger Selection Guide | RIOD",
    description:
      "Find the right RIOD EV charger for your location. Answer a few questions and get personalized recommendations for homes, apartments, hotels, offices, and commercial spaces.",
    url: "https://riod.energy/ev-charger-selection-guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Charger Selection Guide | RIOD",
    description:
      "Find the right RIOD EV charger for your location. Answer a few questions and get personalized recommendations for homes, apartments, hotels, offices, and commercial spaces.",
  },
};

export default function SelectionGuidePage() {
  return <SelectionGuideClient />;
}
