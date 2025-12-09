import HeroSection from "./components/common/Hero";
import PlatformSection from "./components/common/Platform";
import CompatibleSection from "./components/homepage/CompatibleSection";
import EvFeatures from "./components/homepage/EvFeatures";
import EvNumbersSection from "./components/homepage/EvNumbersSection";
import PartnerHostSection from "./components/homepage/PartnerHostSection";
import PowerpodCitySection from "./components/homepage/PowerpodCitySection";
import PowerpodSection from "./components/homepage/PowerpodSection";


export default function Home() {
  return (
    <div >
      <HeroSection
        backgroundImage="/home/hero.webp"
        title="Powering India’s EV Revolution"
        description="Reliable, fast, and smart EV charging solutions for home, business, and commercial spaces. Designed to empower your journey towards a greener, smarter future."
      />
      <PlatformSection
        title="Why RIOD"
        description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life." />
      <EvFeatures />
      <PlatformSection
        title="Charge Anywhere, Anytime!"
        description="RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life." />
    <PowerpodSection/>
    <PartnerHostSection/>
    <CompatibleSection/>
    <PowerpodCitySection/>
    <EvNumbersSection/>
     <PartnerHostSection/>
    <CompatibleSection/>
    </div>
  );
}
