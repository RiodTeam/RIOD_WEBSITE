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
                description="Get in touch with our team to learn more about our EV charging solutions, partnerships, or support-let’s build a smarter mobility future together." />
            <ContactDetailsSection />
            <ContactFormSection />
            <LocationSection />

        </div>
    )
}

export default page
