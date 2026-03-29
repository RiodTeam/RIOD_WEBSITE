import type { Metadata } from "next";
import PageClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";

export const metadata: Metadata = {
  title: "Careers at RIOD | Join Our Team",
  description:
    "Join RIOD and help build the future of EV charging and energy technology. Explore open positions in engineering, design, operations, and more.",
  openGraph: {
    title: "Careers at RIOD | Join Our Team",
    description:
      "Join RIOD and help build the future of EV charging and energy technology. Explore open positions in engineering, design, operations, and more.",
    url: "https://riod.energy/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at RIOD | Join Our Team",
    description:
      "Join RIOD and help build the future of EV charging and energy technology. Explore open positions in engineering, design, operations, and more.",
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RIOD",
  legalName: "RnD Square Pvt. Ltd.",
  url: "https://riod.energy",
  logo: "https://riod.energy/header/logo.svg",
  description:
    "RIOD is building the future of EV charging and energy technology. We are always looking for talented engineers, designers, and operators to join our team.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Infopark Koratty",
    addressLocality: "Koratty",
    addressRegion: "Kerala",
    postalCode: "680308",
    addressCountry: "IN",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={careersSchema} />
      <PageClient />
    </>
  );
}
