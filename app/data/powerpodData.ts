export interface ProductVariant {
  name: string;
  power: string;
  supply: string;
  current: string;
  connector: string;
  mount: string;
  auth: string;
  dimensions: string;
  bestFor: string;
  keyFeature?: string;
  description: string;
}

export interface ProductFamily {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  intro: string;
  features: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  variants: ProductVariant[];
  commonSpecs: { label: string; value: string }[];
  vehiclesSupported: { category: string; examples: string }[];
  shopUrl: string;
}

const commonSpecs: { label: string; value: string }[] = [
  { label: "Charging Type", value: "AC Level 2" },
  {
    label: "Working Voltage",
    value: "180V to 265V (per phase with respect to neutral)",
  },
  {
    label: "Protection",
    value:
      "Over Voltage, Under Voltage, Over Current, Short Circuit, Surge Protection, Ground Fault, Residual Current",
  },
  { label: "Energy Meter", value: "In-built, Class 1 Accuracy" },
  {
    label: "IP Rating",
    value: "IP65 (dust-tight, protected against water jets from any direction)",
  },
  { label: "Operating Temperature", value: "-30\u00B0C to 55\u00B0C" },
  { label: "Storage Temperature", value: "-40\u00B0C to 70\u00B0C" },
  { label: "Humidity", value: "Up to 95%, non-condensing" },
];

const vehiclesSupported = [
  {
    category: "4-Wheeler EVs (Type 2)",
    examples:
      "Tata Nexon EV, Tata Tiago EV, MG ZS EV, MG Comet, Hyundai Ioniq 5, Kia EV6, BYD Atto 3, BYD e6, Mercedes EQS, BMW iX, Audi e-tron, Volvo XC40 Recharge, Citroen eC3, Mahindra XUV400, and all Type 2 compatible vehicles.",
  },
  {
    category: "3-Wheeler EVs (3-Pin Socket)",
    examples:
      "Mahindra Treo, Piaggio Ape E-City, Euler HiLoad, Kinetic Safar, and other electric three-wheelers with standard 3-pin charging.",
  },
  {
    category: "2-Wheeler EVs (3-Pin Socket)",
    examples:
      "Ather 450X, Ola S1, TVS iQube, Bajaj Chetak, Hero Vida V1, Simple One, Revolt RV400, and all electric scooters/motorcycles with standard 3-pin charging.",
  },
];

export const productFamilies: ProductFamily[] = [
  {
    slug: "powerpod",
    name: "RIOD AC Powerpod Specifications",
    tagline: "Engineered to charge where you park.",
    heroImage: "/products/powerpod.png",
    intro:
      "Every PowerPod is designed around one simple idea: your vehicle charges while it is parked, not while you stand around waiting. Whether it is a home garage, a villa, or a private parking bay, the charging infrastructure should fit the location, not the other way around. RIOD builds every PowerPod from the ground up. The hardware, the firmware, the connectivity stack, the energy metering, and the cloud platform. One engineering team. No outsourced modules. No white-labelled boards. This is what it means when we say Engineered, Not Assembled.",
    features: [
      {
        title: "Full-Stack Engineering",
        description:
          "Hardware, firmware, connectivity, and cloud built by one team under one roof. When something needs fixing, we trace it end to end.",
      },
      {
        title: "Built for Indian Conditions",
        description:
          "Voltage fluctuations between 180V and 265V. Humidity up to 95%. Temperatures from -30\u00B0C to 55\u00B0C. IP65 rated. Surge protection and ground fault detection built in.",
      },
      {
        title: "In-built Energy Metering",
        description:
          "Class 1 accuracy energy meter inside every unit. No external meter boxes. No additional cost.",
      },
      {
        title: "Plug-and-Play Operation",
        description:
          "Home models work out of the box. No app, no network dependency. Just plug in and charging starts automatically.",
      },
      {
        title: "Emergency Stop on Every Unit",
        description:
          "Physical emergency stop button standard on every model. Safety is not optional.",
      },
      {
        title: "2-Year Standard Warranty",
        description:
          "Every PowerPod ships with a 2-year manufacturer warranty. Direct support from RIOD engineering, not a third-party call centre.",
      },
    ],
    useCases: [
      {
        title: "Residential Apartments & Villas",
        description:
          "Wall-mounted units install in basement parking or garage walls. Plug-and-play operation. No app required. Your car charges overnight, every night.",
      },
      {
        title: "Individual Home Garages",
        description:
          "Configurable between 3.3 kW and 7.2 kW to match your electrical supply. Works even without internet connectivity.",
      },
      {
        title: "Small Office Parking",
        description:
          "The 7.2 kW OCPP model connects to any OCPP-compliant management system for remote start/stop and usage tracking.",
      },
      {
        title: "Premium Residences",
        description:
          "22 kW three-phase model charges most EVs from 20% to 80% in under 2 hours. The fastest AC home charging available.",
      },
    ],
    variants: [
      {
        name: "PowerPod 3.3 kW Commercial",
        power: "3.3 kW",
        supply: "Single Phase 230V",
        current: "16A",
        connector: "3-Pin Socket",
        mount: "Wall",
        auth: "RFID, App",
        dimensions: "350mm x 230mm x 170mm",
        bestFor:
          "Office parking, apartment 2W bays, retail outlets, fleet depots with electric scooters and three-wheelers.",
        description:
          "Entry-level commercial charger designed for 2-wheeler and 3-wheeler EV fleets. The 16A 3-pin power socket accommodates standard charging cables. Compact wall-mount form factor fits tight spaces in parking structures.",
      },
      {
        name: "PowerPod 7.2 kW Home",
        power: "7.2 kW",
        supply: "Single Phase 230V",
        current: "32A",
        connector: "Type 2 Gun",
        mount: "Wall",
        auth: "RFID / Plug & Play",
        dimensions: "Compact wall-mount unit",
        bestFor: "Home garages, villa parking, individual parking bays in apartments.",
        keyFeature:
          "Plug-and-play mode. No network dependency. Works even without internet.",
        description:
          "Home charging made simple. Plug-and-play operation with no app or network needed. Just plug in and charging starts automatically. RFID mode available for shared parking. Configurable between 3.3 kW and 7.2 kW to match your electrical supply.",
      },
      {
        name: "PowerPod 7.2 kW OCPP",
        power: "7.2 kW",
        supply: "Single Phase 230V",
        current: "32A",
        connector: "Type 2 Gun",
        mount: "Wall",
        auth: "RFID, Server",
        dimensions: "Compact wall-mount unit",
        bestFor:
          "Managed residential complexes, small commercial installations, fleet charging with central monitoring.",
        keyFeature:
          "OCPP 1.6J compliance. Remote management capable. Configurable 3.3/7.2 kW output.",
        description:
          "Network-connected version of the 7.2 kW with full OCPP 1.6J support. Connects to any OCPP-compliant central management system. Supports remote start/stop, RFID authentication, and server-based control.",
      },
      {
        name: "PowerPod 22 kW Home",
        power: "22 kW",
        supply: "Three Phase 415V",
        current: "32A/phase",
        connector: "Type 2 Gun",
        mount: "Wall",
        auth: "RFID",
        dimensions: "350mm x 230mm x 170mm",
        bestFor:
          "Premium residences, villas with three-phase supply, shared basement parking in premium apartments.",
        keyFeature:
          "22 kW output charges most EVs from 20% to 80% in under 2 hours.",
        description:
          "High-power home charger for three-phase electrical supplies. Delivers the fastest AC charging speed available for residential use. Supports both RFID and plug-and-play modes. Configurable charging current via web interface.",
      },
    ],
    commonSpecs,
    vehiclesSupported,
    shopUrl: "https://shop.riod.in",
  },
  {
    slug: "powerpod-go",
    name: "RIOD AC Powerpod Go",
    tagline: "Commercial charging that pays for itself.",
    heroImage: "/products/powerpod.png",
    intro:
      "Powerpod Go is built for locations where EV charging is a service, not just a convenience. Corporate parking lots, hotels, shopping centres, and fuel stations need chargers that authenticate users, process payments, and report energy usage to a central platform. Every Powerpod Go unit comes with RFID and app-based authentication, integrated payment via TelioEV, built-in 4G LTE and Wi-Fi, and full OCPP 1.6J compliance. Connect to any standards-compliant charging management system with no vendor lock-in.",
    features: [
      {
        title: "Payment-Enabled",
        description:
          "Revenue-generating capability for commercial operators. Integrated payment via TelioEV mobile application with QR code scanning for self-service.",
      },
      {
        title: "OCPP 1.6J Compliant",
        description:
          "Connect to any standards-compliant central management system. No vendor lock-in. Remote start/stop, firmware updates, and usage reporting.",
      },
      {
        title: "Dual Connectivity",
        description:
          "Wi-Fi and 4G LTE with support for all major Indian carriers: Jio, Airtel, BSNL, VI. SIM slot built in. No external routers needed.",
      },
      {
        title: "RFID + App Authentication",
        description:
          "Support for RFID tags and the TelioEV mobile application for user authentication and payment. Facility managers control access and track energy usage.",
      },
      {
        title: "Built for Indian Conditions",
        description:
          "Voltage fluctuations between 180V and 265V. Humidity up to 95%. IP65 rated enclosures. Surge protection and ground fault detection standard.",
      },
      {
        title: "2-Year Standard Warranty",
        description:
          "Direct support from RIOD engineering. OTA firmware updates delivered through the life of the product at no additional charge.",
      },
    ],
    useCases: [
      {
        title: "Corporate & Office Parking",
        description:
          "Employees park for 8 to 10 hours a day. Even a 7.4 kW charger delivers a meaningful charge over a workday. RFID and payment integration let facility managers control access and track energy usage.",
      },
      {
        title: "Hotels, Resorts & Homestays",
        description:
          "Guests park overnight. EV-ready hospitality is not a future need. It is a booking decision happening today. Payment-enabled chargers make it self-service.",
      },
      {
        title: "Shopping Malls & Retail",
        description:
          "Shoppers park for 2 to 4 hours. A 7.4 kW or 22 kW charger adds meaningful range. QR code scanning makes the process self-service.",
      },
      {
        title: "Fleet Depots & Logistics Hubs",
        description:
          "Fleet vehicles return to base every day. Overnight charging on 7.4 kW or 22 kW units is the most cost-effective way to electrify a fleet. OCPP connectivity feeds data to fleet management systems.",
      },
    ],
    variants: [
      {
        name: "Powerpod Go 7.4 kW",
        power: "7.4 kW",
        supply: "Single Phase 230V",
        current: "32A",
        connector: "Type 2 Gun",
        mount: "Wall",
        auth: "RFID, App",
        dimensions: "350mm x 230mm x 170mm",
        bestFor:
          "Corporate parking, hotels, shopping centres, public semi-fast charging.",
        keyFeature:
          "Payment-enabled. Revenue-generating capability for commercial operators.",
        description:
          "The workhorse of the Powerpod Go commercial range. 32A single-phase output through a Type 2 connector. RFID and app-based authentication with integrated payment via TelioEV. Built-in 4G LTE and Wi-Fi.",
      },
      {
        name: "Powerpod Go 22 kW",
        power: "22 kW",
        supply: "Three Phase 415V",
        current: "32A/phase",
        connector: "Type 2 Gun",
        mount: "Wall",
        auth: "RFID, App",
        dimensions: "350mm x 230mm x 170mm",
        bestFor:
          "Premium commercial parking, destination charging at hotels, corporate executive parking, fast-turnaround retail.",
        keyFeature:
          "22 kW fast AC charging with revenue generation capability.",
        description:
          "Maximum AC charging speed in a wall-mount commercial package. Full OCPP support, RFID + app authentication, and integrated payment. The fastest wall-mounted Powerpod Go for commercial deployments.",
      },
    ],
    commonSpecs: [
      ...commonSpecs,
      {
        label: "Connectivity",
        value: "Wi-Fi and 4G LTE (Jio, Airtel, BSNL, VI)",
      },
      { label: "Protocol", value: "OCPP 1.6J" },
    ],
    vehiclesSupported,
    shopUrl: "https://shop.riod.in",
  },
  {
    slug: "powerpod-city",
    name: "RIOD AC PowerPod City",
    tagline: "Dual-gun public charging. Serve two vehicles at once.",
    heroImage: "/products/powerpod-city.png",
    intro:
      "PowerPod City is designed for public deployment where throughput matters. Every City model features two independent connectors, each with its own RFID reader, energy meter, and authentication session. Two vehicles charge simultaneously from a single floor-standing unit. High-visibility form factor for open parking areas, public stations, highway rest stops, and fuel station forecourts. Built to handle the highest demand locations in the RIOD charging ecosystem.",
    features: [
      {
        title: "Dual Independent Connectors",
        description:
          "Two connectors per unit, each with its own RFID reader, energy meter, and authentication. Serves two vehicles simultaneously.",
      },
      {
        title: "Floor-Standing Design",
        description:
          "High-visibility form factor for open parking areas and public stations. Easy access for drivers. No wall mounting needed.",
      },
      {
        title: "Maximum Throughput",
        description:
          "The 22 kW City delivers 44 kW total capacity across two connectors. Maximum vehicles served per hour at any public charging location.",
      },
      {
        title: "OCPP 1.6J Compliant",
        description:
          "Connect to any standards-compliant central management system. Remote management, usage reporting, and firmware updates over the air.",
      },
      {
        title: "Payment-Enabled",
        description:
          "RFID and app-based authentication with integrated payment. Revenue-generating capability for station operators.",
      },
      {
        title: "Built for Outdoor Deployment",
        description:
          "IP65 rated for dust and water protection. Operates in -30\u00B0C to 55\u00B0C. Designed for unsheltered, high-traffic environments.",
      },
    ],
    useCases: [
      {
        title: "Public Charging Stations",
        description:
          "Dual connectors serve two vehicles simultaneously. Floor-mounted for high visibility and easy access. Designed for municipal and commercial public charging deployments.",
      },
      {
        title: "Highway Rest Stops & Fuel Stations",
        description:
          "High-traffic locations need maximum throughput. The City form factor is designed for quick pull-in, plug-in charging with payment self-service.",
      },
      {
        title: "Large Commercial Parking",
        description:
          "Malls, hospitals, airports. High vehicle turnover locations where dual-gun operation means fewer units serve more vehicles.",
      },
      {
        title: "Government & Institutional Campuses",
        description:
          "Ministries, universities, hospitals. Controlled parking areas with defined user groups. RFID authentication ensures only authorised personnel charge.",
      },
    ],
    variants: [
      {
        name: "PowerPod City 3.3 kW",
        power: "3.3 kW x2",
        supply: "Single Phase 230V",
        current: "16A x2",
        connector: "3-Pin Socket x2",
        mount: "Floor",
        auth: "RFID, App",
        dimensions: "100cm x 23cm x 17cm",
        bestFor:
          "Public 2W/3W charging stations, municipal parking, bus stops, metro stations.",
        description:
          "Floor-standing public charging station with two independent 3.3 kW connectors. Each connector has its own RFID reader, energy meter, and authentication. Serves two vehicles simultaneously.",
      },
      {
        name: "PowerPod City 7.4 kW",
        power: "7.4 kW x2",
        supply: "Single Phase 230V",
        current: "32A x2",
        connector: "Type 2 Gun x2",
        mount: "Floor",
        auth: "RFID, App",
        dimensions: "100cm x 23cm x 17cm",
        bestFor:
          "Public charging stations, highway rest stops, fuel station forecourts, large commercial parking.",
        description:
          "Floor-standing dual-connector station delivering 7.4 kW to each vehicle independently. High-visibility form factor for public and commercial deployment. Two RFID readers, two Type 2 guns, two independent charging sessions.",
      },
      {
        name: "PowerPod City 22 kW",
        power: "22 kW x2",
        supply: "Three Phase 415V",
        current: "32A/phase x2",
        connector: "Type 2 Gun x2",
        mount: "Floor",
        auth: "RFID, App",
        dimensions: "100cm x 23cm x 17cm",
        bestFor:
          "High-traffic public stations, premium destination charging, fleet fast-charging, highway corridors.",
        keyFeature:
          "44 kW total capacity across two connectors. Maximum vehicles served per hour.",
        description:
          "The flagship PowerPod. Two independent 22 kW connectors in a floor-standing enclosure. Each connector delivers full 22 kW three-phase charging. Maximum throughput for high-demand public charging locations.",
      },
    ],
    commonSpecs: [
      ...commonSpecs,
      {
        label: "Connectivity",
        value: "Wi-Fi and 4G LTE (Jio, Airtel, BSNL, VI)",
      },
      { label: "Protocol", value: "OCPP 1.6J" },
    ],
    vehiclesSupported,
    shopUrl: "https://shop.riod.in",
  },
];

export function getProductBySlug(slug: string): ProductFamily | undefined {
  return productFamilies.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productFamilies.map((p) => p.slug);
}
