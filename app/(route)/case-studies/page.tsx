import type { Metadata } from "next";
import PageClient from "./page.client";
import { getCaseStudies } from "@/app/lib/contentProviders";

export const metadata: Metadata = {
  title: "Case Studies | RIOD",
  description:
    "Real-world implementations of RIOD EV charging and energy management solutions across industries.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  return <PageClient caseStudies={caseStudies} />;
}
