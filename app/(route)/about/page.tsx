import React from "react";
import PageClient from "./page.client";
import JsonLd from "@/app/components/common/JsonLd";

export const metadata = {
  title: "About RIOD | Built in India. Engineered for the World.",
  description:
    "RIOD is an Indian EV charging and energy management company built by engineers. Learn about our story, our team, and our mission to make clean energy infrastructure smarter and more accessible.",
  openGraph: {
    title: "About RIOD | Built in India. Engineered for the World.",
    description:
      "RIOD is an Indian EV charging and energy management company built by engineers. Learn about our story, our team, and our mission to make clean energy infrastructure smarter and more accessible.",
    url: "https://riod.energy/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "About RIOD | Built in India. Engineered for the World.",
    description:
      "RIOD is an Indian EV charging and energy management company built by engineers. Learn about our story, our team, and our mission to make clean energy infrastructure smarter and more accessible.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RIOD",
  legalName: "RnD Square Pvt. Ltd.",
  url: "https://riod.energy",
  logo: "https://riod.energy/header/logo.svg",
  description:
    "RIOD is an Indian EV charging and energy management company built by engineers, focused on making clean energy infrastructure smarter and more accessible.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Infopark Koratty",
    addressLocality: "Koratty",
    addressRegion: "Kerala",
    postalCode: "680308",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@riod.in",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <PageClient />
    </>
  );
}
