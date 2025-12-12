import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp"
import React from 'react'
import HeroSection from '@/app/components/common/Hero'
import IdealProductsSection from '@/app/components/ev-chargers/IdealProductsSection'
import PlatformSection from '@/app/components/common/Platform'
import { hotelAccordionData } from "@/app/components/data/hotelAccordionData"
import { idealProductsDataInstitute } from "@/app/components/data/idealProductsData"
import { servicesProductsInstitution } from "@/app/components/data/servicesProducts"
import ServicesSection from "@/app/components/ev-chargers/Services"

const page = () => {
    return (
        <div>
            <HeroSection
                backgroundImage="/home/hero.webp"
                title="EV Chargers For Institution"
                description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future." />
            <PlatformSection
                title="Why Institution Need EV Charging"
                titleWidth="lg:w-full"
                titleMarginTop="mt-4 md:mt-4"
                description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life." />
            <ServicesSection products={servicesProductsInstitution} />
            <HotelAccordion
                heading="How We Help Institution"
                intro="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact."
                items={hotelAccordionData}
            />
            <IdealProductsSection data={idealProductsDataInstitute} />
        </div>
    )
}

export default page