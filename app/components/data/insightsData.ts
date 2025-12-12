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
    slug: "driving-the-future-of-ev-charging-in-numbers",
    title: "Driving the Future of EV Charging",
    tag: "EV Charging",
    date: "March 20, 2025",
    image: "/home/hero.webp",
    intro: "RNDSquare is your end-to-end R&D partner, transforming bold ideas into market-ready innovations. We combine cutting-edge engineering, IoT solutions, and software expertise to design, build, and scale products that drive real-world impact. From initial concept and prototyping to application development and lifecycle support, we work alongside your team to bring ambitious visions to life.",
    sections: [
      {
        heading: "Driving the Future of EV Charging in Numbers",
        text: "To accelerate India’s shift towards sustainable electric mobility through cutting-edge EV charging infrastructure that’s intelligent, reliable, and accessible. We envision a future where every journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.We envision a future where every journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.",
      },
      {
        heading: "Turnkey installation with minimal property disruption",
        text: "To empower homes, businesses, and cities with future-ready charging solutions that make owning and operating EVs effortless. Through constant innovation and in-house engineering, we strive to deliver products that are smart, durable, and built for Indian conditions. Our mission is to bridge the gap between technology and sustainability, enabling a connected network of EV charging experiences that drive convenience, reliability, and a cleaner planet.We envision a future where every journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.",
      },
       {
        heading: "Turnkey installation with minimal property disruption",
        text: "To empower homes, businesses, and cities with future-ready charging solutions that make owning and operating EVs effortless. Through constant innovation and in-house engineering, we strive to deliver products that are smart, durable, and built for Indian conditions. Our mission is to bridge the gap between technology and sustainability, enabling a connected network of EV charging experiences that drive convenience, reliability, and a cleaner planet.We envision a future where every journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.To empower homes, businesses, and cities with future-ready charging solutions that make owning and operating EVs effortless. Through constant innovation and in-house engineering, we strive to deliver products that are smart, durable, and built for Indian conditions. Our mission is to bridge the gap between technology and sustainability, enabling a connected network of EV charging experiences that drive convenience, reliability, and a cleaner planet.We envision a future where every journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.To empower homes, businesses, and cities with future-ready charging solutions that make owning and operating EVs effortless. Through constant innovation and in-house engineering, we strive to deliver products that are smart, durable, and built for Indian conditions. Our mission is to bridge the gap between technology and sustainability, enabling a connected network of EV charging experiences that drive convenience, reliability, and a cleaner planet.We envision a future where every journey is powered by clean energy, and EV charging is as effortless as using your smartphone connected, fast, and everywhere you need it. By combining technology, design, and sustainability, we aim to make India a global leader in next generation charging solutions.",
      },
    ],

    //  YOU CONTROL RELATED ARTICLES BY SLUG HERE
    relatedSlugs: [
      "why-institutions-need-ev-charging",
      "the-rise-of-sustainable-ev-infrastructure",
      
    ],
  },

  {
    id: 2,
    slug: "why-institutions-need-ev-charging",
    title: "Why Institutions Need EV Charging",
    tag: "Technology",
    date: "April 10, 2025",
    image: "/home/hero.webp",
    intro: "Institutions are rapidly adopting EV charging...",
    sections: [
      {
        heading: "Benefits Overview",
        text: "Details here...",
      },
    ],

    relatedSlugs: [
      "driving-the-future-of-ev-charging-in-numbers",
    ],
  },

  {
    id: 3,
    slug: "the-rise-of-sustainable-ev-infrastructure",
    title: "The Rise of Sustainable EV Infrastructure",
    tag: "Sustainability",
    date: "May 05, 2025",
    image: "/home/hero.webp",
    intro: "Sustainable EV infra is growing...",
    sections: [
      {
        heading: "Green Design",
        text: "Details...",
      },
    ],

    relatedSlugs: [
      "driving-the-future-of-ev-charging-in-numbers",
    ],
  },
];

