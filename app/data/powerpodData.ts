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
  storeUrl?: string;
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
  {
    label: "Protection",
    value:
      "OV, UV, OC, Short Circuit, Surge, OT, Ground Fault, Residual Current (IGPC5)",
  },
  { label: "Energy Meter", value: "In-built, Class 1 Accuracy" },
  {
    label: "IP Rating",
    value: "IP65",
  },
  { label: "Operating Temperature", value: "-30\u00B0C to 55\u00B0C" },
  { label: "Storage Temperature", value: "-40\u00B0C to 70\u00B0C" },
  { label: "Humidity", value: "< 95%, non-condensing" },
  { label: "Status Indications", value: "LED Strip (Green\u2013Charging, Orange\u2013Idle, Red\u2013Error)" },
  { label: "Warranty", value: "24 Months" },
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
    name: "RIOD AC Powerpod Lite",
    tagline: "Engineered to charge where you park.",
    heroImage: "/products/powerpod.png",
    intro:
      "Every Powerpod is designed around one simple idea: your vehicle charges while it is parked, not while you stand around waiting. Whether it is a home garage, a villa, or a private parking bay, the charging infrastructure should fit the location, not the other way around. RIOD builds every Powerpod from the ground up. The hardware, the firmware, the connectivity stack, the energy metering, and the cloud platform. One engineering team. No outsourced modules. No white-labelled boards. This is what it means when we say Engineered, Not Assembled.",
    features: [
      {
        title: "Full-Stack Engineering",
        description:
          "Hardware, firmware, connectivity, and cloud built by one team under one roof. When something needs fixing, we trace it end to end.",
      },
      {
        title: "Built for Indian Conditions",
        description:
          "Humidity up to 95%. Operating temperature -30\u00B0C to 55\u00B0C. IP65 rated. Full protection suite (IGPC5) with OV, UV, OC, surge, ground fault, and residual current protection.",
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
          "Every Powerpod ships with a 2-year manufacturer warranty. Direct support from RIOD engineering, not a third-party call centre.",
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
          "Configurable between 3.3 kW and 7.4 kW to match your electrical supply. Works even without internet connectivity.",
      },
      {
        title: "Small Office Parking",
        description:
          "RFID-enabled access control for shared parking bays. No app or internet needed. Just tap and charge.",
      },
      {
        title: "Premium Residences",
        description:
          "22 kW three-phase model charges most EVs from 20% to 80% in under 2 hours. The fastest AC home charging available.",
      },
    ],
    variants: [
      {
        name: "Powerpod Lite 22kW (RD012)",
        power: "22 kW",
        supply: "Three Phase, 415V 50Hz",
        current: "32A",
        connector: "Type 2 (IEC 62196) with 5m Cable",
        mount: "Wall Mount",
        auth: "RFID / Plug-and-Play",
        dimensions: "350 \u00D7 230 \u00D7 170 mm",
        bestFor:
          "Premium residences, villas with three-phase supply, shared basement parking in premium apartments.",
        keyFeature:
          "22 kW output charges most EVs from 20% to 80% in under 2 hours.",
        description:
          "Full speed. At home. High-power personal EV charging. Three-phase 22 kW fast charging for rapid overnight top-ups.",
        storeUrl: "/store/powerpod-home-22kw-ev-charger",
      },
      {
        name: "Powerpod Lite 7.4kW (RD011)",
        power: "7.4 kW",
        supply: "Single Phase, 230V 50Hz",
        current: "32A",
        connector: "Type 2 (IEC 62196) with 5m Cable",
        mount: "Wall Mount",
        auth: "RFID / Plug-and-Play",
        dimensions: "350 \u00D7 230 \u00D7 170 mm",
        bestFor: "Home garages, villa parking, individual parking bays in apartments.",
        keyFeature:
          "Fast home charging. Plug in at night, wake up fully charged.",
        description:
          "Fast home charging. Effortless. Fast AC charging at home with Type 2 connector. Plug in at night, wake up fully charged.",
        storeUrl: "/store/powerpod-home-7-4-kw",
      },
      {
        name: "Powerpod Lite 3.3kW (RD010)",
        power: "3.3 kW",
        supply: "Single Phase, 230V 50Hz",
        current: "16A",
        connector: "16A 3-PIN Power Socket (with Shutter)",
        mount: "Wall Mount",
        auth: "RFID / Plug-and-Play",
        dimensions: "350 \u00D7 230 \u00D7 170 mm",
        bestFor:
          "Homes, apartments, private offices, villas.",
        keyFeature:
          "Affordable. Smart. Always ready.",
        description:
          "Compact AC charging dock for home or private parking. Simple plug-and-play with RFID access. Weight: 1.64 kg.",
        storeUrl: "",
      },
    ],
    commonSpecs: [
      { label: "Charging Type", value: "AC Level 1 (3.3kW) / AC Level 2 (7.4kW, 22kW)" },
      ...commonSpecs,
    ],
    vehiclesSupported,
    shopUrl: "/store",
  },
  {
    slug: "powerpod-go",
    name: "RIOD AC Powerpod Go",
    tagline: "Commercial charging that pays for itself.",
    heroImage: "/products/powerpod.png",
    intro:
      "Powerpod Go is built for locations where EV charging is a service, not just a convenience. Corporate parking lots, hotels, shopping centres, and fuel stations need chargers that authenticate users, process payments, and report energy usage to a central platform. Every Powerpod Go unit comes with RFID and plug-and-play authentication, Wi-Fi connectivity (standard), optional 4G LTE, and full OCPP 1.6J compliance. Connect to any standards-compliant charging management system with no vendor lock-in.",
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
        title: "Wi-Fi Standard, 4G Optional",
        description:
          "Wi-Fi connectivity comes standard. 4G LTE available as an option for remote locations without Wi-Fi infrastructure.",
      },
      {
        title: "RFID + App Authentication",
        description:
          "Support for RFID tags and the TelioEV mobile application for user authentication and payment. Facility managers control access and track energy usage.",
      },
      {
        title: "Built for Indian Conditions",
        description:
          "Humidity up to 95%. Operating temperature -30\u00B0C to 55\u00B0C. IP65 rated enclosures. Full protection suite (IGPC5) standard.",
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
        name: "Powerpod Go 22kW (RD015)",
        power: "22 kW",
        supply: "Three Phase, 415V 50Hz",
        current: "32A",
        connector: "Type 2 (IEC 62196) with 5m Cable",
        mount: "Wall Mount",
        auth: "RFID / Plug-and-Play",
        dimensions: "350 \u00D7 230 \u00D7 170 mm",
        bestFor:
          "Premium commercial parking, destination charging at hotels, corporate executive parking, fast-turnaround retail.",
        keyFeature:
          "Maximum power. Maximum returns.",
        description:
          "High-power commercial AC fast charger. 22 kW three-phase with full OCPP 1.6J and Wi-Fi connectivity. 4G LTE optional.",
        storeUrl: "/store/powerpod-go-22kw-fast-ev-charger",
      },
      {
        name: "Powerpod Go 7.4kW (RD014)",
        power: "7.4 kW",
        supply: "Single Phase, 230V 50Hz",
        current: "32A",
        connector: "Type 2 (IEC 62196) with 5m Cable",
        mount: "Wall Mount",
        auth: "RFID / Plug-and-Play",
        dimensions: "350 \u00D7 230 \u00D7 170 mm",
        bestFor:
          "Corporate parking, hotels, shopping centres, public semi-fast charging.",
        keyFeature:
          "Fast. Smart. Revenue-ready.",
        description:
          "Commercial AC fast charger with Type 2 connector. RFID/Plug-and-Play auth, OCPP 1.6J, Wi-Fi standard, 4G LTE optional.",
        storeUrl: "/store/powerpod-go-7-4kw-fast-ev-charger",
      },
      {
        name: "Powerpod Go 3.3kW (RD013)",
        power: "3.3 kW",
        supply: "Single Phase, 230V 50Hz",
        current: "16A",
        connector: "16A 3-PIN Power Socket",
        mount: "Wall Mount / Pedestal",
        auth: "RFID / Plug-and-Play",
        dimensions: "350 \u00D7 220 \u00D7 110 mm",
        bestFor:
          "Commercial spaces, building associations, restaurants, parking lots.",
        keyFeature:
          "Deploy anywhere. Earn from every charge.",
        description:
          "Commercial-grade EV charging point with RFID/Plug-and-Play auth and OCPP 1.6J compliance. Wi-Fi standard, 4G LTE optional.",
        storeUrl: "/store/3-3kw-ocpp-ev-charger",
      },
    ],
    commonSpecs: [
      { label: "Charging Type", value: "AC Level 1 (3.3kW) / AC Level 2 (7.4kW, 22kW)" },
      ...commonSpecs,
      {
        label: "Connectivity",
        value: "Wi-Fi (Standard), 4G LTE (Optional)",
      },
      { label: "Protocol", value: "OCPP 1.6J" },
    ],
    vehiclesSupported,
    shopUrl: "/store",
  },
  {
    slug: "powerpod-city",
    name: "RIOD AC Powerpod City",
    tagline: "Dual-gun public charging. Serve two vehicles at once.",
    heroImage: "/products/powerpod-city.png",
    intro:
      "Powerpod City is designed for public deployment where throughput matters. Every City model features two independent connectors, each with its own RFID reader, energy meter, and authentication session. Two vehicles charge simultaneously from a single floor-standing unit. High-visibility form factor for open parking areas, public stations, highway rest stops, and fuel station forecourts. Built to handle the highest demand locations in the RIOD charging ecosystem.",
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
        name: "Powerpod City 22kW Dual (RD018)",
        power: "22 kW \u2016 22 kW",
        supply: "Three Phase, 415V 50Hz",
        current: "32A \u2016 32A",
        connector: "Type 2 (IEC 62196) \u2016 Type 2 (IEC 62196) with 5m Cable each",
        mount: "Floor Mount / Pedestal",
        auth: "RFID / Plug-and-Play",
        dimensions: "1000 \u00D7 250 \u00D7 220 mm",
        bestFor:
          "High-traffic public stations, premium destination charging, fleet fast-charging, highway corridors.",
        keyFeature:
          "Dual charging. Double the revenue.",
        description:
          "High-power dual-connector station for high-demand deployments. Two 22 kW three-phase connectors. LED Strip per connector. Wi-Fi standard, 4G LTE optional.",
        storeUrl: "/store/powerpod-city-22kw-dual-port-fast-ev-charger",
      },
      {
        name: "Powerpod City 7.4kW Dual (RD017)",
        power: "7.4 kW \u2016 7.4 kW",
        supply: "Single Phase, 230V 50Hz",
        current: "32A \u2016 32A",
        connector: "Type 2 (IEC 62196) \u2016 Type 2 (IEC 62196) with 5m Cable each",
        mount: "Standalone Pedestal",
        auth: "RFID / Plug-and-Play",
        dimensions: "1000 \u00D7 250 \u00D7 220 mm",
        bestFor:
          "Public charging stations, highway rest stops, fuel station forecourts, large commercial parking.",
        keyFeature:
          "Dual fast charging. Compact. Revenue-ready.",
        description:
          "Dual-connector AC fast charging station. Two vehicles simultaneously with Type 2 connectors. LED Strip per connector. Wi-Fi standard, 4G LTE optional.",
        storeUrl: "/store/powerpod-city-hybrid-ev-charging-station",
      },
      {
        name: "Powerpod City 3.3kW Dual (RD016)",
        power: "3.3 kW \u2016 3.3 kW",
        supply: "Single Phase, 230V 50Hz",
        current: "16A \u2016 16A",
        connector: "16A 3-PIN \u2016 16A 3-PIN",
        mount: "Floor Mount / Pedestal",
        auth: "RFID / Plug-and-Play",
        dimensions: "1000 \u00D7 250 \u00D7 220 mm",
        bestFor:
          "Commercial spaces, building associations, restaurants, parking lots.",
        keyFeature:
          "Two chargers. One station. Double the value.",
        description:
          "Dual-connector charging station for shared/commercial environments. Two vehicles simultaneously. LED Strip per connector. Wi-Fi standard, 4G LTE optional.",
        storeUrl: "/store/riod-powerpod-city-3-3kw-dual-gun-ev-charger-ocpp-rfid-4g-public-charging-station-india",
      },
    ],
    commonSpecs: [
      { label: "Charging Type", value: "AC Level 1 (3.3kW) / AC Level 2 (7.4kW, 22kW)" },
      ...commonSpecs,
      {
        label: "Connectivity",
        value: "Wi-Fi (Standard), 4G LTE (Optional)",
      },
      { label: "Protocol", value: "OCPP 1.6J" },
    ],
    vehiclesSupported,
    shopUrl: "/store",
  },
];

export function getProductBySlug(slug: string): ProductFamily | undefined {
  return productFamilies.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productFamilies.map((p) => p.slug);
}
