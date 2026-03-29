import type { Metadata } from "next";
import ResourcesClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Resources | RIOD",
  description:
    "Download product datasheets, installation guides, brochures, and comparison charts for all RIOD EV charging products.",
  openGraph: {
    title: "Resources | RIOD",
    description:
      "Download product datasheets, installation guides, brochures, and comparison charts for all RIOD EV charging products.",
    url: "https://riod.energy/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | RIOD",
    description:
      "Download product datasheets, installation guides, brochures, and comparison charts for all RIOD EV charging products.",
  },
};

const resourcesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Resources | RIOD",
  description:
    "Download product datasheets, installation guides, brochures, and comparison charts for all RIOD EV charging products.",
  url: "https://riod.energy/resources",
  publisher: {
    "@type": "Organization",
    name: "RIOD",
    url: "https://riod.energy",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={resourcesSchema} />
      <ResourcesClient />
    </>
  );
}
