'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


interface HeroSectionProps {
  backgroundImage: string
  title: string
  description?: string
  buttonText?: string
  buttonHref?: string
  overlayOpacity?: number
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonHref = '/',
  overlayOpacity = 0.5,
}) => {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div className="relative w-full h-svh min-h-140 md:min-h-[450px] lg:min-h-[580px] lg:h-lvh">
        
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-center "
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black z-1" style={{ opacity: overlayOpacity }} />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-28 md:pb-12 lg:pb-[65px] z-2">
        <div className="mx-auto w-[90%] md:w-[90%] 2xl:max-w-[1800px]">
          <div className="max-w-4xl">
            {/* Title */}
           
              <h1
                className="hero-title font-inter leading-tight! mb-6 md:mb-[15px] lg:mb-[17px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
           
            {/* Description */}
           
              {description && (
                <p className=" hero-desc font-inter leading-[1.55rem]! mb-0 md:mb-[1.8rem]  max-w-2xl xl:max-w-2xl text-[#f4f4f4]">
                  {description}
                </p>
              )}
            
            {/* Button (Optional) */}
           
              {buttonText && (
                <Link href={buttonHref}>
                  <button className="flex justify-center items-center rounded-full mt-3 px-6 md:px-8 h-[50px] md:h-14 bg-[#00E17B] text-black font-medium text-sm md:text-base hover:bg-[#00c96b] transition-colors">
                    {buttonText}
                  </button>
                </Link>
              )}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

// Example Usage:
// <HeroSection
//   backgroundImage="/about/hero.jpg"
//   title="Product<br />Engineering"
//   description="We turn your bold ideas into market-ready innovations by combining cutting-edge engineering, IoT solutions, and end-to-end product development expertise to bring your vision to life."
//   buttonText="SCHEDULE A MEETING"
//   onButtonClick={() => console.log('Button clicked')}
//   overlayOpacity={0.2}
// />
