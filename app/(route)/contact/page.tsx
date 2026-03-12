import ContactDetailsSection from '@/app/components/contact/ContactDetailsSection'
import ContactFormSection from '@/app/components/contact/ContactFormSection'
import LocationSection from '@/app/components/contact/LocationSection'
import React from 'react'

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
