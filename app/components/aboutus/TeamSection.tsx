"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import MotionWrapper from "../common/MotionWrapper";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  photo: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    name: "Akhil Joy",
    title: "Product & Strategy",
    description:
      "Leads product strategy and project execution across RIOD's EV and energy verticals. Drives the roadmap from concept through production with a focus on system-level thinking.",
    photo: "/about/akhil.jfif",
    linkedin: "https://www.linkedin.com/in/joyakhil/",
  },
  {
    name: "Anees PK",
    title: "Hardware Engineering",
    description:
      "Heads hardware engineering at RIOD's Hardware Development Center. Responsible for PCB design, power electronics, and manufacturing-ready hardware for EV chargers and energy systems.",
    photo: "/about/anees.webp",
    linkedin: "https://www.linkedin.com/in/aneespkriod/",
  },
  {
    name: "Deepu Joy",
    title: "Delivery & Operations",
    description:
      "Oversees delivery across all engineering verticals. Ensures products ship on time, meet quality standards, and work reliably in real-world deployments across multiple countries.",
    photo: "/about/deepu.webp",
    linkedin: "https://www.linkedin.com/in/deepu-joy-540715116/",
  },
  {
    name: "Kailash CS",
    title: "Business Development",
    description:
      "Drives business development and client partnerships. Builds long-term relationships with partners across India, Europe, and the Middle East.",
    photo: "/about/kailash.jfif",
    linkedin: "https://www.linkedin.com/in/kailash-cs/",
  },
];

function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <MotionWrapper delay={index * 0.08}>
      <div className="group bg-white rounded-xl overflow-hidden border border-[#e8e8e8] h-full">
        {/* Photo */}
        <div className="w-full aspect-[4/5] relative bg-[#f0f0f0] overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-base font-medium text-[#1b1b1b] font-inter">
                {member.name}
              </h3>
              <p className="text-[13px] text-[#9a99a2] font-inter mt-1 tracking-wide uppercase">
                {member.title}
              </p>
            </div>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626262] hover:text-[#0077b5] transition-colors mt-1"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
          <p className="text-sm text-[#626262] leading-relaxed">
            {member.description}
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            The Team Behind RIOD
          </h2>
          <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
            Leadership at RIOD is hands-on. Every director is deeply involved in
            engineering, accountable for real outcomes, and directly accessible
            to our partners.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
