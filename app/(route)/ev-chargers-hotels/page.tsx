import HotelAccordion from "@/app/components/ev-chargers/HowWeHelp"
import React from 'react'
import HeroSection from '@/app/components/common/Hero'
import IdealProductsSection from '@/app/components/ev-chargers/IdealProductsSection'
import PlatformSection from '@/app/components/common/Platform'
import { hotelAccordionData } from "@/app/components/data/hotelAccordionData"
import { idealProductsData } from "@/app/components/data/idealProductsData"
import { servicesProducts } from "@/app/components/data/servicesProducts"
import ServicesSection from "@/app/components/ev-chargers/Services"

const page = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/home/hero.webp"
        title="Power Up Guest Experience with Smart EV Charging"
        description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future." />
      <PlatformSection
        title="Why Hotels Need EV Charging"
        titleWidth="lg:w-[50%] xl:w-[65%]"
        titleMarginTop="mt-4 md:mt-4"
        description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life." />
      <ServicesSection products={servicesProducts} />;
       <HotelAccordion
      heading="How We Help Hotels"
      intro="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact."
      items={hotelAccordionData}
    />
      <IdealProductsSection data={idealProductsData} />
    </div>
  )
}

export default page