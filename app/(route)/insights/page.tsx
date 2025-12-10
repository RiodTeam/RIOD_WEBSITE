import BlogGrid from '@/app/components/insights/BlogGrid'
import React from 'react'
import HeroSection from '@/app/components/common/Hero'


const page = () => {
  return (
    <div>
        <HeroSection
                backgroundImage="/home/hero.webp"
                title="Blogs and Articles"
                description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future." />

        <BlogGrid/>
    </div>
  )
}

export default page