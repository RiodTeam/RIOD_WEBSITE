"use client";

import { ReactLenis } from "lenis/react";
import HeroSection from "@/app/components/common/Hero";
import TechnologySectionComponent from "@/app/components/technology/TechnologySection";
import { type TechnologySection } from "@/app/data/technologies";

interface Props {
  name: string;
  tagline: string;
  heroImage: string;
  sections: TechnologySection[];
}

export default function TechnologyDetailClient({
  name,
  tagline,
  heroImage,
  sections,
}: Props) {
  return (
    <ReactLenis root>
      <main>
        <HeroSection
          backgroundImage={heroImage}
          title={name}
          description={tagline}
          overlayOpacity={0.5}
        />

        {sections.map((section, index) => (
          <TechnologySectionComponent
            key={index}
            section={section}
            index={index}
            sectionNumber={`0${index + 1}`}
          />
        ))}
      </main>
    </ReactLenis>
  );
}
