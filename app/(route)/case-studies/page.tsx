import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "Case Studies | RIOD",
  description:
    "Real-world implementations of RIOD EV charging and energy management solutions across industries.",
};

export default function CaseStudiesPage() {
  return <PageClient />;
}
