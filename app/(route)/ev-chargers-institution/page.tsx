import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "EV Chargers for Institutions | RIOD",
  description:
    "Smart EV charging solutions designed for institutions, campuses, universities, and public buildings. Fast, reliable, and future-ready infrastructure.",
};

export default function Page() {
  return <PageClient />;
}
