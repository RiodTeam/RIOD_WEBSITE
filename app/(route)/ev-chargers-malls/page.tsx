import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Malls & Theatres | Increase Footfall",
  description:
    "Drive footfall and revenue with EV charging at malls and theatres. Smart, scalable solutions for high-traffic retail and entertainment venues.",
  openGraph: {
    title: "EV Chargers for Malls & Theatres | Increase Footfall",
    description:
      "Drive footfall and revenue with EV charging at malls and theatres. Smart, scalable solutions for high-traffic retail and entertainment venues.",
    url: "https://riod.energy/ev-chargers-malls",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Chargers for Malls & Theatres | Increase Footfall",
    description:
      "Drive footfall and revenue with EV charging at malls and theatres. Smart, scalable solutions for high-traffic retail and entertainment venues.",
  },
};

export default function Page() {
  return <PageClient />;
}
