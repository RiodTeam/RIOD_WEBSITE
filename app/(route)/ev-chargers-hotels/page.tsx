import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Hotels | Enhance Guest Experience",
  description:
    "Smart, fast, and reliable EV charging solutions that elevate hotel guest experience, attract premium EV drivers, and boost property value.",
};

export default function Page() {
  return <PageClient />;
}
