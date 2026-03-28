export type ResourceCategory =
  | "Product Datasheets"
  | "Installation Guides"
  | "Brochures"
  | "Comparison Charts"
  | "Whitepapers & Guides";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileSize: string;
  filePath: string;
  icon: "FileText" | "Wrench" | "BookOpen" | "BarChart3";
  isLeadMagnet?: boolean;

}

export const resourceCategories: ResourceCategory[] = [
  "Product Datasheets",
  "Installation Guides",
  "Brochures",
  "Comparison Charts",
  "Whitepapers & Guides",
];

export const resources: Resource[] = [
  // Product Datasheets — Powerpod Lite
  {
    id: "ds-lite-3.3",
    title: "Powerpod Lite 3.3kW (RD010) Datasheet",
    description:
      "Complete technical specifications for the RIOD Powerpod Lite 3.3kW home charger. RFID, plug-and-play, IP65.",
    category: "Product Datasheets",
    fileSize: "368 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Lite_3_3kW.docx.pdf",
    icon: "FileText",
  },
  {
    id: "ds-lite-7.4",
    title: "Powerpod Lite 7.4kW (RD011) Datasheet",
    description:
      "Technical specifications for the RIOD Powerpod Lite 7.4kW single-phase Type 2 home charger.",
    category: "Product Datasheets",
    fileSize: "372 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Lite_7_4kW.docx.pdf",
    icon: "FileText",
  },
  {
    id: "ds-lite-22",
    title: "Powerpod Lite 22kW (RD012) Datasheet",
    description:
      "Technical specifications for the three-phase RIOD Powerpod Lite 22kW fast AC home charger.",
    category: "Product Datasheets",
    fileSize: "371 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Lite_22kW.docx.pdf",
    icon: "FileText",
  },
  // Product Datasheets — Powerpod Go
  {
    id: "ds-go-3.3",
    title: "Powerpod Go 3.3kW (RD013) Datasheet",
    description:
      "Specifications for the commercial OCPP 1.6J charger with WiFi and optional 4G LTE.",
    category: "Product Datasheets",
    fileSize: "370 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Go_3_3kW.docx.pdf",
    icon: "FileText",
  },
  {
    id: "ds-go-7.4",
    title: "Powerpod Go 7.4kW (RD014) Datasheet",
    description:
      "Specifications for the commercial AC fast charger with Type 2 connector and OCPP 1.6J.",
    category: "Product Datasheets",
    fileSize: "375 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Go_7_4kW.docx.pdf",
    icon: "FileText",
  },
  {
    id: "ds-go-22",
    title: "Powerpod Go 22kW (RD015) Datasheet",
    description:
      "Specifications for the high-power three-phase commercial AC charger with OCPP 1.6J.",
    category: "Product Datasheets",
    fileSize: "375 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Go_22kW.docx.pdf",
    icon: "FileText",
  },
  // Product Datasheets — Powerpod City
  {
    id: "ds-city-3.3",
    title: "Powerpod City 3.3kW Dual (RD016) Datasheet",
    description:
      "Technical data for the dual-gun public charger with RFID and OCPP 1.6J.",
    category: "Product Datasheets",
    fileSize: "371 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_City_3_3kW.docx.pdf",
    icon: "FileText",
  },
  {
    id: "ds-city-7.4",
    title: "Powerpod City 7.4kW Dual (RD017) Datasheet",
    description:
      "Technical data for the dual-gun fast charger with Type 2 connectors and standalone pedestal.",
    category: "Product Datasheets",
    fileSize: "378 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_City_7_4kW.docx.pdf",
    icon: "FileText",
  },
  {
    id: "ds-city-22",
    title: "Powerpod City 22kW Dual (RD018) Datasheet",
    description:
      "Technical data for the high-power dual-gun three-phase charger for public deployments.",
    category: "Product Datasheets",
    fileSize: "376 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_City_22kW.docx.pdf",
    icon: "FileText",
  },

  // Installation Guides
  {
    id: "ig-ac-home",
    title: "AC Powerpod Home Installation Guide",
    description:
      "Step-by-step installation instructions for RIOD AC Powerpod chargers in residential settings.",
    category: "Installation Guides",
    fileSize: "3.2 MB",
    filePath: "/downloads/guides/ac-powerpod-installation.pdf",
    icon: "Wrench",

  },
  {
    id: "ig-go-commercial",
    title: "Powerpod Go Installation Guide",
    description:
      "Installation guide for RIOD AC Powerpod Go chargers in apartments, offices, and shared spaces.",
    category: "Installation Guides",
    fileSize: "3.5 MB",
    filePath: "/downloads/guides/powerpod-go-installation.pdf",
    icon: "Wrench",

  },
  {
    id: "ig-city-public",
    title: "Powerpod City Installation Guide",
    description:
      "Dual-gun charger installation instructions for public and commercial locations.",
    category: "Installation Guides",
    fileSize: "3.8 MB",
    filePath: "/downloads/guides/powerpod-city-installation.pdf",
    icon: "Wrench",

  },
  {
    id: "ig-dc-fast",
    title: "DC Fast Charger Installation Guide",
    description:
      "Professional installation guide for RIOD DC Fast chargers (30/60/120kW).",
    category: "Installation Guides",
    fileSize: "4.1 MB",
    filePath: "/downloads/guides/dc-fast-installation.pdf",
    icon: "Wrench",

  },

  // Brochures
  {
    id: "br-product-catalog",
    title: "RIOD Product Catalogue 2026",
    description:
      "Complete product catalogue featuring all RIOD EV chargers, software platforms, and energy solutions.",
    category: "Brochures",
    fileSize: "5.8 MB",
    filePath: "/downloads/brochures/riod-product-catalogue-2026.pdf",
    icon: "BookOpen",

  },
  {
    id: "br-community-suite",
    title: "Community Charging Suite Brochure",
    description:
      "Overview of RIOD's free-to-use community charging management platform for apartments and residential complexes.",
    category: "Brochures",
    fileSize: "2.8 MB",
    filePath: "/downloads/brochures/community-suite-brochure.pdf",
    icon: "BookOpen",

  },
  {
    id: "br-operations-suite",
    title: "Operations Suite Brochure",
    description:
      "Commercial-grade charging management platform for hotels, malls, parking, and fleet operators.",
    category: "Brochures",
    fileSize: "3.1 MB",
    filePath: "/downloads/brochures/operations-suite-brochure.pdf",
    icon: "BookOpen",

  },

  // Comparison Charts
  {
    id: "cc-ac-chargers",
    title: "Powerpod Product Comparison Guide",
    description:
      "Side-by-side comparison of all 9 RIOD Powerpod variants: Lite, Go, and City across all power levels (3.3kW, 7.4kW, 22kW).",
    category: "Comparison Charts",
    fileSize: "443 KB",
    filePath: "/downloads/datasheets/RIOD_Powerpod_Product_Comparison_Guide.docx.pdf",
    icon: "BarChart3",
  },
  {
    id: "cc-dc-chargers",
    title: "DC Fast Charger Comparison Chart",
    description:
      "Comparison of RIOD DC Fast chargers at 30kW, 60kW, and 120kW with performance and feature breakdowns.",
    category: "Comparison Charts",
    fileSize: "0.9 MB",
    filePath: "/downloads/comparisons/dc-charger-comparison.pdf",
    icon: "BarChart3",

  },
  {
    id: "cc-ac-vs-dc",
    title: "AC vs DC Charging Guide",
    description:
      "When to choose AC vs DC charging: use cases, costs, power requirements, and ROI comparison.",
    category: "Comparison Charts",
    fileSize: "1.4 MB",
    filePath: "/downloads/comparisons/ac-vs-dc-guide.pdf",
    icon: "BarChart3",

  },

  // Whitepapers & Guides
  {
    id: "wp-workplace-10-steps",
    title: "10 Steps to Install EV Charging at the Workplace",
    description:
      "Step-by-step guide for facility managers and HR teams. Covers site assessment, electrical capacity check, charger selection, load balancing, employee billing, and go-live checklist.",
    category: "Whitepapers & Guides",
    fileSize: "2.1 MB",
    filePath: "/downloads/whitepapers/10-steps-workplace-ev-charging.pdf",
    icon: "BookOpen",

  },
  {
    id: "wp-apartment-6-things",
    title: "6 Things to Consider When Installing EV Chargers in Apartment Societies",
    description:
      "Essential guide for RWAs and residents. Covers electrical load assessment, metering and billing, RWA approval process, charger placement, safety compliance, and resident onboarding.",
    category: "Whitepapers & Guides",
    fileSize: "1.8 MB",
    filePath: "/downloads/whitepapers/6-things-apartment-ev-charging.pdf",
    icon: "BookOpen",

  },
  {
    id: "wp-future-energy-infrastructure",
    title: "The Future of Energy Infrastructure",
    description:
      "In-depth whitepaper on the convergence of EV charging, renewable energy, and smart grid technology. Covers V2G, HEMS, dynamic load balancing, and the role of communication protocols in the energy transition.",
    category: "Whitepapers & Guides",
    fileSize: "3.2 MB",
    filePath: "/downloads/whitepapers/future-of-energy-infrastructure.pdf",
    icon: "BookOpen",
    isLeadMagnet: true,

  },
  {
    id: "wp-ocpp-guide",
    title: "OCPP 1.6J Implementation Guide",
    description:
      "Technical guide for charge point operators on OCPP 1.6J integration. Covers message flows, backend configuration, remote management, and firmware updates.",
    category: "Whitepapers & Guides",
    fileSize: "1.8 MB",
    filePath: "/downloads/whitepapers/ocpp-1.6j-implementation-guide.pdf",
    icon: "BookOpen",

  },
  {
    id: "wp-power-master",
    title: "Power Master: Dynamic Load Balancing Whitepaper",
    description:
      "Technical deep-dive into Power Master's architecture, protocol support, and deployment scenarios. Includes case studies from grid-constrained sites.",
    category: "Whitepapers & Guides",
    fileSize: "3.0 MB",
    filePath: "/downloads/whitepapers/power-master-whitepaper.pdf",
    icon: "BookOpen",

  },
];
