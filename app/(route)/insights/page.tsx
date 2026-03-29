import type { Metadata } from "next";
import PageClient from "./page.client";
import { getInsights } from "@/app/lib/contentProviders";

export const metadata: Metadata = {
  title: "Blogs & Articles | RIOD",
  description:
    "Explore insights, blogs, and articles on EV charging, sustainability, and cutting-edge technology shaping India's electric mobility future.",
  openGraph: {
    title: "Blogs & Articles | RIOD",
    description:
      "Explore insights, blogs, and articles on EV charging, sustainability, and cutting-edge technology shaping India's electric mobility future.",
    url: "https://riod.energy/insights",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Articles | RIOD",
    description:
      "Explore insights, blogs, and articles on EV charging, sustainability, and cutting-edge technology shaping India's electric mobility future.",
  },
};

export default async function Page() {
  const insights = await getInsights();
  return <PageClient insights={insights} />;
}
