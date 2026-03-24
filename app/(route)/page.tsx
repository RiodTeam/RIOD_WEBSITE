import HomePage from "../components/home/HomePage";
import { getInsights } from "@/app/lib/contentProviders";
import JsonLd from "@/app/components/common/JsonLd";

export const metadata = {
  title: "RIOD | EV Charging & Energy Technology",
  description:
    "Smart and reliable EV charging infrastructure built for homes, businesses, and commercial spaces. Designed and manufactured in India.",
  openGraph: {
    title: "RIOD | EV Charging & Energy Technology",
    description:
      "Smart and reliable EV charging infrastructure built for homes, businesses, and commercial spaces.",
    url: "https://riod.in",
    images: [{ url: "/heroes/ev-chargers-hero.webp", width: 1400, height: 800 }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RIOD",
  legalName: "RnD Square Pvt. Ltd.",
  url: "https://riod.in",
  logo: "https://riod.in/header/logo.svg",
  description:
    "EV charging infrastructure and energy management technology company. Hardware, firmware, and cloud platforms built in-house in India.",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@riod.in",
    contactType: "sales",
  },
  sameAs: [
    "https://www.linkedin.com/company/riod",
    "https://twitter.com/riod",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RIOD",
  url: "https://riod.in",
};

export default async function Page() {
  const insights = await getInsights();
  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={websiteSchema} />
      <HomePage insights={insights} />
    </>
  );
}
