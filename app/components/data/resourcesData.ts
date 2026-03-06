export type ResourceCategory =
  | "Product Datasheets"
  | "Installation Guides"
  | "Brochures"
  | "Comparison Charts";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileSize: string;
  filePath: string;
  icon: "FileText" | "Wrench" | "BookOpen" | "BarChart3";
}

export const resourceCategories: ResourceCategory[] = [
  "Product Datasheets",
  "Installation Guides",
  "Brochures",
  "Comparison Charts",
];

export const resources: Resource[] = [
  // Product Datasheets
  {
    id: "ds-ac-powerpod-3.4",
    title: "AC Powerpod 3.4kW Datasheet",
    description:
      "Complete technical specifications, dimensions, and performance data for the RIOD AC Powerpod 3.4kW home charger.",
    category: "Product Datasheets",
    fileSize: "1.2 MB",
    filePath: "/downloads/datasheets/ac-powerpod-3.4kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-ac-powerpod-7.4",
    title: "AC Powerpod 7.4kW Datasheet",
    description:
      "Technical specifications for the RIOD AC Powerpod 7.4kW fast single-phase home charger.",
    category: "Product Datasheets",
    fileSize: "1.3 MB",
    filePath: "/downloads/datasheets/ac-powerpod-7.4kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-ac-powerpod-22",
    title: "AC Powerpod 22kW Datasheet",
    description:
      "Technical specifications for the three-phase RIOD AC Powerpod 22kW charger.",
    category: "Product Datasheets",
    fileSize: "1.4 MB",
    filePath: "/downloads/datasheets/ac-powerpod-22kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-go-3.4",
    title: "AC Powerpod Go 3.4kW Datasheet",
    description:
      "Specifications for the compact shared charger with RFID access and OCPP cloud management.",
    category: "Product Datasheets",
    fileSize: "1.5 MB",
    filePath: "/downloads/datasheets/ac-powerpod-go-3.4kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-go-7.4",
    title: "AC Powerpod Go 7.4kW Datasheet",
    description:
      "Specifications for the mid-range community charger with payment terminal support.",
    category: "Product Datasheets",
    fileSize: "1.5 MB",
    filePath: "/downloads/datasheets/ac-powerpod-go-7.4kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-go-22",
    title: "AC Powerpod Go 22kW Datasheet",
    description:
      "Specifications for the high-power shared AC charger for commercial spaces.",
    category: "Product Datasheets",
    fileSize: "1.6 MB",
    filePath: "/downloads/datasheets/ac-powerpod-go-22kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-city-3.4",
    title: "AC PowerPod City 3.4kW Datasheet",
    description:
      "Technical data for the dual-gun public charger with RFID and 4G connectivity.",
    category: "Product Datasheets",
    fileSize: "1.7 MB",
    filePath: "/downloads/datasheets/ac-powerpod-city-3.4kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-city-7.4",
    title: "AC PowerPod City 7.4kW Datasheet",
    description:
      "Technical data for the mid-range dual-gun charger with payment and remote monitoring.",
    category: "Product Datasheets",
    fileSize: "1.7 MB",
    filePath: "/downloads/datasheets/ac-powerpod-city-7.4kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-city-22",
    title: "AC PowerPod City 22kW Datasheet",
    description:
      "Technical data for the high-power dual-gun charger for commercial spaces.",
    category: "Product Datasheets",
    fileSize: "1.8 MB",
    filePath: "/downloads/datasheets/ac-powerpod-city-22kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-dc-30",
    title: "DC Fast 30kW Datasheet",
    description:
      "Complete specifications for the entry-level DC fast charger with CCS2 connector.",
    category: "Product Datasheets",
    fileSize: "2.1 MB",
    filePath: "/downloads/datasheets/dc-fast-30kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-dc-60",
    title: "DC Fast 60kW Datasheet",
    description:
      "Technical specifications for the mid-range DC charger with dual connector option.",
    category: "Product Datasheets",
    fileSize: "2.3 MB",
    filePath: "/downloads/datasheets/dc-fast-60kw.pdf",
    icon: "FileText",
  },
  {
    id: "ds-dc-120",
    title: "DC Fast 120kW Datasheet",
    description:
      "Specifications for the high-power DC charger for highways and public charging hubs.",
    category: "Product Datasheets",
    fileSize: "2.5 MB",
    filePath: "/downloads/datasheets/dc-fast-120kw.pdf",
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
    title: "PowerPod City Installation Guide",
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
    title: "AC Charger Comparison Chart",
    description:
      "Side-by-side comparison of all RIOD AC chargers: Powerpod, Powerpod Go, and PowerPod City across all power levels.",
    category: "Comparison Charts",
    fileSize: "1.1 MB",
    filePath: "/downloads/comparisons/ac-charger-comparison.pdf",
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
];
