export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  tag: string;
  client: string;
  industry: string;
  location: string;
  image: string;
  summary: string;
  challenge: string[];
  solution: string[];
  results: { metric: string; value: string }[];
  technologies: string[];
  testimonial?: { quote: string; author: string; role: string };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "energy-management-greek-utility",
    title: "Energy Management System for Greek Utility",
    tag: "Energy Management",
    client: "Unnamed European utility (Greece-based)",
    industry: "Energy & Utilities",
    location: "Greece",
    image: "/home/hero.webp",
    summary:
      "Deployed a unified energy management platform across 200+ distributed sites, replacing manual reporting with real-time dashboards and consumption analytics.",
    challenge: [
      "The client operated distributed energy assets across more than 200 sites with no unified monitoring system in place. Each site ran independently, making it nearly impossible to get a clear picture of overall energy consumption or performance.",
      "Reporting was entirely manual. Teams spent hours compiling spreadsheets that were outdated by the time they reached decision-makers. There was no way to identify waste patterns, compare sites, or respond to demand spikes in real time.",
    ],
    solution: [
      "We deployed RIOD's energy management platform across all 200+ sites. The system provides real-time dashboards that give operators and managers instant visibility into consumption data, demand trends, and anomalies across every location.",
      "Multi-site monitoring was built into the architecture from day one. The platform aggregates data from all locations into a single interface, with drill-down capability for site-level analysis. Automated reporting replaced the manual process entirely, delivering scheduled and on-demand reports without human intervention.",
    ],
    results: [
      { metric: "Peak Demand Reduction", value: "23%" },
      { metric: "Sites Monitored", value: "200+" },
      { metric: "Reporting", value: "Fully Automated" },
    ],
    technologies: [
      "RIOD Energy Management Platform",
      "Real-time Dashboards",
      "Multi-site Monitoring",
      "Consumption Analytics",
    ],
    testimonial: {
      quote:
        "We went from guessing to knowing. The platform gave us visibility we never had before, and the peak demand savings paid for the deployment within the first year.",
      author: "Operations Director",
      role: "European Utility Provider",
    },
  },
  {
    id: 2,
    slug: "dc-charger-multinational-fleet",
    title: "DC Charger Solution for Multinational Corporation",
    tag: "EV Charging",
    client: "Major multinational with 500+ vehicle fleet",
    industry: "Corporate Fleet Management",
    location: "Global (12 campuses)",
    image: "/home/hero.webp",
    summary:
      "Installed 40+ DC fast chargers across 12 corporate campuses with dynamic load balancing, achieving zero grid upgrades and 95% uptime.",
    challenge: [
      "The client needed fast charging infrastructure for a fleet of over 500 vehicles spread across 12 corporate campuses. Standard AC charging was too slow for their operational schedule, and vehicles needed to be ready for use within tight turnaround windows.",
      "Existing electrical infrastructure at most campuses could not handle the additional load that DC fast chargers would demand. Traditional deployment would have required expensive and time-consuming grid upgrades at nearly every location.",
    ],
    solution: [
      "We installed RIOD DC fast chargers equipped with Power Master dynamic load balancing at each campus. Power Master intelligently distributes available electrical capacity across all chargers in real time, ensuring maximum charging speed without exceeding grid limits.",
      "This approach eliminated the need for grid upgrades entirely. The system adapts to fluctuating building loads throughout the day, prioritizing vehicles based on charging urgency and fleet scheduling requirements.",
    ],
    results: [
      { metric: "Chargers Deployed", value: "40+" },
      { metric: "Grid Upgrades Needed", value: "Zero" },
      { metric: "System Uptime", value: "95%" },
    ],
    technologies: [
      "RIOD DC Fast Chargers",
      "Power Master Load Balancing",
      "Fleet Management Integration",
      "OCPP Backend",
    ],
  },
  {
    id: 3,
    slug: "hvac-platform-us-manufacturer",
    title: "HVAC Management Platform for US Manufacturer",
    tag: "Energy Management",
    client: "Industrial manufacturer with 8 production facilities",
    industry: "Manufacturing",
    location: "United States",
    image: "/home/hero.webp",
    summary:
      "Implemented production-aware HVAC scheduling that cut cooling costs by 31% by correlating energy use with production line activity.",
    challenge: [
      "HVAC systems consumed roughly 40% of the client's total energy bill across eight production facilities. Cooling ran on fixed schedules regardless of whether production lines were active, idle, or shut down for maintenance.",
      "There was zero correlation between production activity and HVAC operation. Air conditioning ran at full capacity in areas where no one was working, and cooling continued hours after shifts ended. The waste was substantial but invisible because no one had the data to see it.",
    ],
    solution: [
      "We deployed RIOD's energy management platform with smart HVAC control modules at all eight facilities. The system integrates directly with production line status data, creating automated schedules that match cooling output to actual demand.",
      "When a production line shuts down, the HVAC system in that zone automatically scales back. When a line starts up, cooling ramps ahead of time to maintain optimal working conditions. The platform also identifies zones that are being over-cooled relative to their occupancy and activity levels.",
    ],
    results: [
      { metric: "HVAC Energy Cost Reduction", value: "31%" },
      { metric: "Facilities Managed", value: "8" },
      { metric: "Scheduling", value: "Production-Aware" },
    ],
    technologies: [
      "RIOD Energy Management Platform",
      "Smart HVAC Control",
      "Production Line Integration",
      "Automated Scheduling",
    ],
    testimonial: {
      quote:
        "We always knew HVAC was expensive, but we had no idea how much energy we were wasting on empty floors. The production-aware scheduling was a game changer for our operating costs.",
      author: "Facilities Manager",
      role: "US Manufacturing Corporation",
    },
  },
  {
    id: 4,
    slug: "ocpp-implementation-indian-utility",
    title: "OCPP 1.6 Implementation for Indian Utility",
    tag: "EV Charging",
    client: "Major Indian power distribution utility",
    industry: "Energy & Utilities",
    location: "India",
    image: "/home/hero.webp",
    summary:
      "Deployed 800+ public EV chargers with OCPP 1.6J backend, centralized monitoring, and multiple authentication methods for a national utility.",
    challenge: [
      "The client, a major Indian power distribution utility, planned to deploy over 1,000 public EV chargers across their service territory. The scale demanded a centralized management system that could handle remote monitoring, firmware updates, and fault detection across all units.",
      "Interoperability was critical. The chargers needed to work with any OCPP-compliant backend and support multiple authentication methods including RFID cards and mobile apps. Revenue collection and billing had to be reliable and transparent from day one.",
    ],
    solution: [
      "We deployed RIOD AC Powerpod City and Powerpod Go chargers with full OCPP 1.6J compliance. The backend system provides centralized monitoring, remote configuration, and automated fault reporting for every charger in the network.",
      "Authentication supports both RFID cards and app-based access, giving users flexibility while ensuring secure payment processing. The system handles session tracking, energy metering, and billing automatically, with full audit trails for regulatory compliance.",
    ],
    results: [
      { metric: "Chargers Live", value: "800+" },
      { metric: "OCPP Compliance", value: "99.2%" },
      { metric: "Monitoring", value: "Centralized" },
    ],
    technologies: [
      "RIOD AC Powerpod City",
      "RIOD AC Powerpod Go",
      "OCPP 1.6J Backend",
      "RFID & App Authentication",
    ],
  },
  {
    id: 5,
    slug: "energy-management-hotel-chain",
    title: "Energy Management for Hotel Chain",
    tag: "Energy Management",
    client: "Premium hotel chain with 15 properties across India",
    industry: "Hospitality",
    location: "India",
    image: "/home/hero.webp",
    summary:
      "Reduced energy costs by 18% across 15 hotel properties while adding EV charging as a premium guest amenity through integrated monitoring.",
    challenge: [
      "The client, a premium hotel chain with 15 properties across India, faced rising energy costs with no clear understanding of where the money was going. Consumption patterns varied wildly between properties, but there was no centralized system to compare or analyze them.",
      "Guest demand for EV charging was growing fast. The chain needed to offer charging as a premium amenity without overloading their existing electrical infrastructure or creating a complex billing system for guests.",
    ],
    solution: [
      "We deployed RIOD's energy management platform across all 15 properties, giving the management team real-time visibility into consumption at every location. The platform identifies waste patterns, tracks peak usage periods, and highlights properties that deviate from efficiency benchmarks.",
      "At each property, we also installed RIOD AC Powerpod Go chargers for guest use. The chargers integrate with the energy management system, so the hotel can monitor charging load alongside overall building consumption and avoid demand spikes.",
    ],
    results: [
      { metric: "Energy Cost Reduction", value: "18%" },
      { metric: "Properties Monitored", value: "15" },
      { metric: "EV Charging", value: "Premium Amenity" },
    ],
    technologies: [
      "RIOD Energy Management Platform",
      "RIOD AC Powerpod Go",
      "Real-time Monitoring",
      "Multi-property Dashboard",
    ],
    testimonial: {
      quote:
        "The energy savings alone justified the investment. Adding EV charging for our guests was a bonus that has become a real differentiator for our brand.",
      author: "VP of Operations",
      role: "Premium Hotel Chain, India",
    },
  },
];
