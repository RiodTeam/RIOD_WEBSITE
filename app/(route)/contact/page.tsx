import HeroSection from '@/app/components/common/Hero'
import ContactDetailsSection from '@/app/components/contact/ContactDetailsSection'
import ContactFormSection from '@/app/components/contact/ContactFormSection'
import LocationSection from '@/app/components/contact/LocationSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <HeroSection
                backgroundImage="/contact/hero.webp"
                title="Contact Us"
                description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future." />
            <ContactDetailsSection />
            <ContactFormSection />
            <LocationSection />

        </div>
    )
}

export default page
