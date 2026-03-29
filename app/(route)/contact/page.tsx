import type { Metadata } from "next";
import ContactDetailsSection from '@/app/components/contact/ContactDetailsSection'
import ContactFormSection from '@/app/components/contact/ContactFormSection'
import LocationSection from '@/app/components/contact/LocationSection'
import JsonLd from "@/app/components/common/JsonLd";
import React from 'react'

export const metadata: Metadata = {
  title: "Contact RIOD | Get in Touch",
  description: "Reach out to the RIOD team for EV charger enquiries, technology partnerships, or deployment support. We typically respond within 1 business day.",
  openGraph: {
    title: "Contact RIOD | Get in Touch",
    description: "Reach out to the RIOD team for EV charger enquiries, technology partnerships, or deployment support. We typically respond within 1 business day.",
    url: "https://riod.energy/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact RIOD | Get in Touch",
    description: "Reach out to the RIOD team for EV charger enquiries, technology partnerships, or deployment support. We typically respond within 1 business day.",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact RIOD",
  description: "Reach out to the RIOD team for EV charger enquiries, technology partnerships, or deployment support.",
  url: "https://riod.energy/contact",
  mainEntity: {
    "@type": "Organization",
    name: "RIOD",
    legalName: "RnD Square Pvt. Ltd.",
    email: "info@riod.in",
    url: "https://riod.energy",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Infopark Koratty",
      addressLocality: "Koratty",
      addressRegion: "Kerala",
      postalCode: "680308",
      addressCountry: "IN",
    },
  },
};

const page = () => {
    return (
        <div>
            <JsonLd data={contactSchema} />
            <ContactFormSection />
            <ContactDetailsSection />
            <LocationSection />
        </div>
    )
}

export default page
