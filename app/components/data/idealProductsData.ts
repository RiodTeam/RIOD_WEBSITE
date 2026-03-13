export interface IdealProduct {
  name: string;
  power: string;
  href: string;
  image: string;
}

export interface IdealProductData {
  title: string;
  intro: string;
  subTitle: string;
  description: string;
  image: string;
  products: IdealProduct[];
}

export const idealProductsData: IdealProductData = {
  title: "Ideal Products for Hotels",
  intro:
    "RIOD delivers reliable, guest-friendly EV charging solutions for hotels, ensuring efficient, safe, and premium charging for every stay.",
  subTitle: "RIOD AC Powerpod & Powerpod Go — Perfect for Overnight Stays",
  description:
    "AC chargers are ideal for hotels, providing reliable overnight charging and seamless integration into existing parking infrastructure without major upgrades. RIOD's scalable solutions support properties of all sizes with flexible deployment and ownership models.",
  image: "/hotel/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod", image: "/products/powerpod.png" },
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
  ],
};

export const idealProductsDataOffice: IdealProductData = {
  title: "Ideal Products for Offices",
  intro:
    "RIOD's shared AC chargers provide smart scheduling and access control, adapting to parking layouts, power capacity, and business needs.",
  subTitle: "RIOD AC Powerpod Go & Powerpod City — Flexible Workplace Charging",
  description:
    "Offices benefit from shared chargers with RFID access, employee billing, and cloud management. Powerpod Go for single-bay setups and Powerpod City dual-gun chargers for higher-density areas.",
  image: "/office/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
    { name: "RIOD AC Powerpod City", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-city", image: "/products/powerpod-city.png" },
  ],
};

export const idealProductsDataInstitute: IdealProductData = {
  title: "Ideal Products for Institutions",
  intro:
    "Institutions benefit from versatile EV charging options that support long parking durations, high-traffic zones, and scalable campus-wide networks.",
  subTitle: "RIOD AC Powerpod Go & Powerpod City — Scalable Campus Networks",
  description:
    "RIOD chargers are designed for ease of use, providing students, staff, and visitors with a smooth charging experience. Clear interfaces, secure authentication, and optional branding allow campuses to customize chargers to reflect their institutional identity.",
  image: "/institution/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
    { name: "RIOD AC Powerpod City", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-city", image: "/products/powerpod-city.png" },
  ],
};

export const idealProductsDataResorts: IdealProductData = {
  title: "Ideal Products for Resorts",
  intro:
    "RIOD provides premium EV charging solutions tailored for resort environments — designed for extended stays, scenic settings, and luxury guest experiences.",
  subTitle: "RIOD AC Powerpod & Powerpod Go — Perfect for Extended Stays",
  description:
    "AC chargers are ideal for resorts where guests park for extended durations. RIOD's chargers integrate seamlessly into resort parking areas with minimal visual impact, providing reliable overnight and multi-day charging for all EV types.",
  image: "/hotel/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod", image: "/products/powerpod.png" },
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
  ],
};

export const idealProductsDataMalls: IdealProductData = {
  title: "Ideal Products for Malls & Theatres",
  intro:
    "RIOD delivers high-throughput EV charging solutions designed for busy retail and entertainment venues — increasing footfall and revenue.",
  subTitle: "RIOD AC Powerpod City — Fast Turnaround for Visitors",
  description:
    "Malls and theatres benefit from dual-gun Powerpod City chargers for high-density parking, with RFID access, payment terminals, and cloud management. Scalable solutions that adapt to any parking layout and visitor volume.",
  image: "/office/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod City", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-city", image: "/products/powerpod-city.png" },
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
  ],
};

export const idealProductsDataHospitals: IdealProductData = {
  title: "Ideal Products for Hospitals",
  intro:
    "RIOD provides safe, reliable EV charging infrastructure for hospitals — supporting staff, patients, visitors, and fleet vehicles.",
  subTitle: "RIOD AC Powerpod Go & Powerpod City — Safe, Reliable Healthcare Charging",
  description:
    "Hospitals require charging solutions that operate safely alongside critical medical systems. RIOD's chargers feature intelligent power management, robust safety certifications, and flexible deployment options suitable for staff parking, visitor areas, and emergency fleet zones.",
  image: "/institution/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
    { name: "RIOD AC Powerpod City", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-city", image: "/products/powerpod-city.png" },
  ],
};

export const idealProductsDataParking: IdealProductData = {
  title: "Ideal Products for Parking Complexes",
  intro:
    "RIOD's scalable EV charging solutions are built for large parking facilities — maximizing utilization, revenue, and operational efficiency.",
  subTitle: "RIOD AC Powerpod City — High-Density Deployments",
  description:
    "Parking complexes need high-density charging deployments with smart load management. RIOD's Powerpod City dual-gun chargers support 50+ simultaneous sessions, integrated payment systems, and cloud-based monitoring for seamless facility management.",
  image: "/home2/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod City", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-city", image: "/products/powerpod-city.png" },
    { name: "RIOD AC Powerpod Go", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod-go", image: "/products/powerpod.png" },
  ],
};

export const idealProductsDataHome: IdealProductData = {
  title: "Ideal Products for Home",
  intro:
    "RIOD delivers safe, reliable EV charging solutions for modern homes — designed for everyday convenience and efficient performance.",
  subTitle: "RIOD AC Powerpod — Smart Home Charging",
  description:
    "The Powerpod is purpose-built for home use. Compact, wall-mounted, and available from 3.4 kW to 22 kW — it charges your EV overnight with smart scheduling, energy monitoring, and Wi-Fi connectivity. No complex installation required.",
  image: "/home2/ideal.webp",
  products: [
    { name: "RIOD AC Powerpod", power: "3.4–22 kW", href: "/products/ev-chargers/powerpod", image: "/products/powerpod.png" },
  ],
};
