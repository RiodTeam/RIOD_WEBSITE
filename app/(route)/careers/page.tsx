import type { Metadata } from "next";
import PageClient from "./page.client";

export const metadata: Metadata = {
  title: "Careers at RIOD | Join Our Team",
  description:
    "Join RIOD and help build the future of EV charging and energy technology. Explore open positions in engineering, design, operations, and more.",
};

export default function Page() {
  return <PageClient />;
}
