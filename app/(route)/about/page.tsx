
import EVNumbersSection from '@/app/components/aboutus/EVNumbersSection'
import FeatureGridSection from '@/app/components/aboutus/FeatureGridSection'
import Join from '@/app/components/aboutus/Join'
import VisionMissionSection from '@/app/components/aboutus/VisionMissionSection'
import HeroSection from '@/app/components/common/Hero'
import PlatformSection from '@/app/components/common/Platform'
import CompatibleSection from '@/app/components/homepage/CompatibleSection'


const page = () => {
  return (
    <div>
      <HeroSection
        backgroundImage="/home/hero.webp"
        title="Powering the Future of Electric Mobility"
        description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future." />
      <VisionMissionSection />
      <EVNumbersSection />
      <PlatformSection
        title="Innovation That Drives Us"
        titleWidth="lg:w-[50%] xl:w-[65%]"
        titleMarginTop="mt-4 md:mt-[5.9rem]"
        description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life." />
      <FeatureGridSection />
      <Join />
      <CompatibleSection />
    </div>
  )
}

export default page