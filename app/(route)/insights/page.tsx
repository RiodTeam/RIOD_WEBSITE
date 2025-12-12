import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "Blogs & Articles | RIOD",
  description:
    "Explore insights, blogs, and articles on EV charging, sustainability, and cutting-edge technology shaping India's electric mobility future.",
};

export default function Page() {
  return <PageClient />;
}
