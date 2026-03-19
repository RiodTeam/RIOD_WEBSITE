import type { Metadata } from "next";
import ContactDetailsSection from '@/app/components/contact/ContactDetailsSection'
import ContactFormSection from '@/app/components/contact/ContactFormSection'
import LocationSection from '@/app/components/contact/LocationSection'
import React from 'react'

export const metadata: Metadata = {
  title: "Contact RIOD | Get in Touch",
  description: "Reach out to the RIOD team for EV charger enquiries, technology partnerships, or deployment support. We typically respond within 1 business day.",
};

const page = () => {
    return (
        <div>
            <ContactFormSection />
            <ContactDetailsSection />
            <LocationSection />
        </div>
    )
}

export default page
