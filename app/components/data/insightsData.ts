export interface InsightType {
  id: number;
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  intro: string;
  sections: { heading: string; text: string }[];
  relatedSlugs: string[];  
}


export const insightsData: InsightType[] = [
  {
    id: 1,
    slug: "riod-collaborating-with-cpos-to-solve-ev-charging-infrastructure-problem",
    title: "RIOD is Collaborating With CPO’s to Solve EV Charging Infrastructure Problem",
    tag: "EV Charging",
    date: "March 20, 2025",
    image: "/home/hero.webp",
    intro: "RIOD designs, develops and manufactures EV charging infrastructure for public, buildings, commercial entities and residential homes. We are an Indian company that has a good expertise and one of the few companies in India that is an OEM (Original Equipment Manufacturer) Charging Station Manufacturer. We build on our strong history of successfully integrating hardware, software and systems engineering to create innovative solutions for electric transportation infrastructure.",
    sections: [
      {
        heading: "Charge point operators (CPO)",
        text: "Charge point operators (CPOs) install and maintain charge stations to provide drivers with access to charging facilities. Either a CPO can own and operate a set of charge stations, or simply operate them for third parties. They make revenue by offering energy as a service. EV charging stations can be installed in apartments, workplaces, public parking spaces or commercial buildings.",
      },
      {
        heading: "RIOD <> CPO Partnership",
        text: "RIOD is happy to collaborate with CPO’s, to offer best in class EV charging solutions. Our commitment is to provide energy management and sustainable smart mobility solutions that are safe, reliable and smart. With the Collaboration, RIOD can become a technical partner for the end-end CPO Operations, and provide best in class support for the connectivity, technical queries, configuration, diagnosis of EVSE. RIOD offers best pricing strategy for our EV charging stations to CPO, Our pricing strategy gives the flexibility to accelerate the EV adoption much faster.",
      },
       {
        heading: "",
        text: " RIOD currently manufactures upto 22kW Dual Gun Chargers.",
       }
    ],

    //  YOU CONTROL RELATED ARTICLES BY SLUG HERE
    relatedSlugs: [
      "importance-of-temperature-monitoring-in-pharma-companies",
      "monitoring-hatchery-temperature-humidity-kpi-hatchability",
      
    ],
  },

  {
    id: 2,
    slug: "importance-of-temperature-monitoring-in-pharma-companies",
    title: "Importance of temperature monitoring in Pharma companies",
    tag: "Technology",
    date: "April 10, 2025",
    image: "/home/hero.webp",
    intro: "Temperature monitoring is a critical process in most industries, from pharmaceuticals to food production. It can help prevent spoilage, product failure and loss of revenue. Temperature monitoring provides critical information and alerts that can reduce costs and ensure compliance with regulatory agencies. If you’re working in the pharma industry or any other where temperature monitoring is important, this guide will walk you through the different aspects of choosing a temperature monitoring solution",
    sections: [
      {
        heading: "Temperature monitoring is one of the major concerns in pharmaceutical industry.",
        text: "Temperature monitoring is one of the major concerns in pharmaceutical industry. The improper storage conditions, such as temperature fluctuations can cause loss of product integrity and even promote microbial growth. The benefits of temperature monitoring include: Ensuring compliance with regulatory requirements for storage, transport and distribution. Reduce loss of revenue due to spoilage. Reducing waste due to spoilage or discarding damaged materials. Minimizing safety risks associated with unsafe temperatures",
      },
    ],

    relatedSlugs: [
      "riod-collaborating-with-cpos-to-solve-ev-charging-infrastructure-problem",
    ],
  },

  {
    id: 3,
    slug: "monitoring-hatchery-temperature-humidity-kpi-hatchability",
    title: "Monitoring Your Hatchery & Know how Temperature, Humidity and KPI affects the Hatchability",
    tag: "Sustainability",
    date: "May 05, 2025",
    image: "/home/hero.webp",
    intro: "We were approached by a hatchery owner during the covid 19 period. he lost a batch due to unstable temperature in one of their hatchery unit. Later the issue was identified with the cabling of the heater, resulted in a big loss.",
    sections: [
      {
        heading: "Green Design",
        text: "Details...",
      },
    ],

    relatedSlugs: [
      "importance-of-temperature-monitoring-in-pharma-companies",
    ],
  },
  {
    id: 4,
    slug: "elive-energy-management-solution",
    title: "Elive - Energy Management Solution",
    tag: "Sustainability",
    date: "May 05, 2025",
    image: "/home/hero.webp",
    intro: "We were approached by a hatchery owner during the covid 19 period. he lost a batch due to unstable temperature in one of their hatchery unit. Later the issue was identified with the cabling of the heater, resulted in a big loss.",
    sections: [
      {
        heading: "Green Design",
        text: "Details...",
      },
    ],

    relatedSlugs: [
      "monitoring-hatchery-temperature-humidity-kpi-hatchability",
    ],
  },
];

