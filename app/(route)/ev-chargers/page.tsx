import HowWeHelpHotels from '@/app/components/ev-chargers/HowWeHelp'
import React from 'react'
import HeroSection from '@/app/components/common/Hero'

const page = () => {
  return (
    <div>
        <HeroSection
                backgroundImage="/home/hero.webp"
                title="Blogs and Articles"
                description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future." />
        <HowWeHelpHotels/>
    </div>
  )
}

export default page