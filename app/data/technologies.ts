import {
  ShieldCheck,
  Network,
  Monitor,
  BatteryCharging,
  ArrowLeftRight,
  Brain,
  Truck,
  CreditCard,
  Cpu,
  ParkingSquare,
  HardDrive,
  Users,
  LayoutGrid,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

export type TechnologySection = {
  heading: string;
  description: string;
  points: string[];
  image: string;
};

export type Technology = {
  name: string;
  slug: string;
  tagline: string;
  icon: LucideIcon;
  upcoming?: boolean;
  heroImage: string;
  sections: TechnologySection[];
};

export const technologies: Technology[] = [
  {
    name: "Self-Resettable RCD",
    slug: "self-resettable-rcd",
    tagline:
      "Automatic residual current protection that resets without manual intervention, minimizing charger downtime at unmanned locations.",
    icon: ShieldCheck,
    heroImage: "/technology/self-resettable-rcd.jpg",
    sections: [
      {
        heading: "Automatic Fault Recovery",
        description:
          "Our self-resettable RCD technology detects residual current faults and automatically restores operation after the fault clears. If the fault cannot be recovered, a service ticket is automatically registered in the EVSE Operations Suite for investigation — no manual intervention required.",
        points: [
          "Automatic reset after transient earth leakage faults",
          "Type A and Type B RCD support for DC fault detection",
          "Configurable reset delay and retry thresholds",
          "Automatic ticket creation in Operations Suite when fault persists",
        ],
        image: "/technology/rcd-fault-recovery.jpg",
      },
      {
        heading: "Designed for Unmanned Locations",
        description:
          "Ideal for chargers deployed at highways, parking lots, and remote fleet depots where immediate manual intervention is not feasible. The solution reduces manual on-site visits for non-related faults and automatically creates tickets in the Operations Suite for faults that require investigation.",
        points: [
          "Reduces truck rolls and maintenance costs by up to 60%",
          "Compliant with IEC 62955 and IEC 61851 safety standards",
          "Suitable for both AC wallbox and DC fast charger applications",
          "Integrated with charger firmware for coordinated protection",
        ],
        image: "/technology/rcd-unmanned.jpg",
      },
    ],
  },
  {
    name: "Decentralized Load Balancer",
    slug: "decentralized-load-balancer",
    tagline:
      "Intelligent power distribution across multiple chargers without a central controller. For advanced site-level energy management, see Power Master.",
    icon: Network,
    heroImage: "/technology/decentralized-load-balancer.jpg",
    sections: [
      {
        heading: "Peer-to-Peer Power Sharing",
        description:
          "Each charger communicates directly with its neighbors to dynamically allocate available power, ensuring optimal utilization of the site's electrical capacity. This is the embedded counterpart to RIOD's Power Master hardware — designed for sites that need load balancing without additional infrastructure.",
        points: [
          "No single point of failure — fully distributed architecture",
          "Real-time power rebalancing as vehicles connect and disconnect",
          "Supports mixed AC and DC charger deployments",
          "Scales from 2 to 50+ charge points per site",
        ],
        image: "/technology/load-balancer-p2p.jpg",
      },
      {
        heading: "Smart Grid Integration",
        description:
          "The load balancer interfaces with building energy management systems and utility demand-response signals to keep site power within contracted limits. For full site-level energy orchestration including solar, HVAC, and BESS integration, see Power Master.",
        points: [
          "Dynamic capacity limits based on real-time grid signals",
          "Priority charging for emergency or fleet vehicles",
          "Solar and battery storage integration support",
          "Seamless upgrade path to Power Master for advanced control",
        ],
        image: "/technology/load-balancer-grid.jpg",
      },
      {
        heading: "Zero Infrastructure Overhead",
        description:
          "Runs entirely on the charger's embedded hardware — no additional servers, gateways, or network infrastructure required.",
        points: [
          "Firmware-level implementation with minimal resource footprint",
          "Mesh communication over Wi-Fi, Ethernet, or RS-485",
          "Plug-and-play commissioning with auto-discovery",
          "OTA updates for algorithm improvements",
        ],
        image: "/technology/load-balancer-infra.jpg",
      },
    ],
  },
  {
    name: "EVSE Operations Suite",
    slug: "ev-charging-operations-suite",
    tagline:
      "Three-tier operations platform — from real-time monitoring to AI-powered predictive maintenance. Observe, Operate, and Optimize your charger network.",
    icon: Monitor,
    heroImage: "/technology/operations-suite.jpg",
    sections: [
      {
        heading: "EVSE Observe — Live Operational View",
        description:
          "The base layer that gives operators continuous visibility into charger health and performance. See everything that is happening across your network before issues impact users.",
        points: [
          "Real-time charger status, session tracking, and error diagnostics",
          "Continuous monitoring and failure detection across all chargers",
          "Live operational dashboards with configurable alerts",
          "Multi-site visibility from a single pane of glass",
        ],
        image: "/technology/ops-observe.jpg",
      },
      {
        heading: "EVSE Operate — Managed Charger Operations",
        description:
          "The core operations layer that transforms charger data into service tickets, maintenance actions, and SLAs. Self-recovery is attempted automatically based on fault type — if recovery fails, a ticket is created for the operations team.",
        points: [
          "Automated service ticket creation from fault events",
          "Self-recovery attempts before escalating to technicians",
          "SLA tracking and maintenance workflow management",
          "Remote start/stop, configuration, and firmware updates",
        ],
        image: "/technology/ops-operate.jpg",
      },
      {
        heading: "EVSE Operate Plus — Advanced Intelligence Modules",
        description:
          "Advanced AI and analytics modules that layer on top of Operate. Includes predictive fault engine, auto-RCA, smart ticket intelligence, maintenance optimizer, downtime cost analyzer, technician efficiency tracking, idle blocking detection, and failure pattern library.",
        points: [
          "Predictive Fault Engine — predict failures before they occur",
          "Auto-RCA Engine — automatic root cause and next best action",
          "Smart Ticket Intelligence — auto-prioritize by severity and SLA",
          "Maintenance Optimizer, Downtime Cost Analyzer, and Technician Tracker",
          "Idle Blocking & Overstay Detection via Vision AI",
          "EVSE Diagnostic Tool for field technicians",
        ],
        image: "/technology/ops-plus.jpg",
      },
    ],
  },
  {
    name: "EV Charging Powerbox",
    slug: "ev-charging-powerbox",
    tagline:
      "Modular power conversion unit designed for rapid deployment of DC charging infrastructure at any location.",
    icon: BatteryCharging,
    heroImage: "/technology/powerbox.jpg",
    sections: [
      {
        heading: "Modular Power Architecture",
        description:
          "Pre-engineered power conversion modules that snap together to deliver 30kW to 240kW of charging capacity, scaling with demand.",
        points: [
          "Hot-swappable power modules for zero-downtime maintenance",
          "93%+ power conversion efficiency across load range",
          "400V and 800V battery voltage support",
          "Compact form factor for space-constrained installations",
        ],
        image: "/technology/powerbox-modular.jpg",
      },
      {
        heading: "Rapid Site Deployment",
        description:
          "Pre-tested and pre-certified units reduce on-site installation time from weeks to days, accelerating your charging network rollout.",
        points: [
          "Factory-assembled and tested before shipment",
          "Integrated AC input protection and DC output isolation",
          "Plug-and-play connectivity with RIOD dispensers",
          "IP54 rated enclosure for outdoor deployment",
        ],
        image: "/technology/powerbox-deploy.jpg",
      },
    ],
  },
  {
    name: "Bidirectional Charging (V2G)",
    slug: "bidirectional-charging",
    tagline:
      "Vehicle-to-grid technology enabling EVs to feed energy back to the grid, turning every parked vehicle into a distributed energy asset.",
    icon: ArrowLeftRight,
    upcoming: true,
    heroImage: "/technology/v2g.jpg",
    sections: [
      {
        heading: "Vehicle-to-Grid Energy Flow",
        description:
          "Our V2G-ready chargers enable bidirectional power flow, allowing EV batteries to discharge energy back to the grid during peak demand periods.",
        points: [
          "CHAdeMO and CCS2 bidirectional protocol support",
          "ISO 15118-20 compliant communication stack",
          "Grid-synchronized power export with anti-islanding protection",
          "Configurable discharge limits to preserve battery health",
        ],
        image: "/technology/v2g-flow.jpg",
      },
      {
        heading: "Energy Arbitrage & Grid Services",
        description:
          "Software layer that optimizes charge/discharge cycles based on electricity tariffs, grid signals, and fleet scheduling requirements.",
        points: [
          "Time-of-use arbitrage for cost optimization",
          "Frequency regulation and demand response participation",
          "Fleet-aware scheduling that prioritizes departure readiness",
          "Revenue tracking for energy exported to the grid",
        ],
        image: "/technology/v2g-arbitrage.jpg",
      },
    ],
  },
  {
    name: "Charger Intelligence",
    slug: "charger-intelligence",
    tagline:
      "AI-powered predictive maintenance, analytics, and vehicle battery profiling that anticipate failures before they cause downtime.",
    icon: Brain,
    heroImage: "/technology/charger-intelligence.jpg",
    sections: [
      {
        heading: "Predictive Maintenance",
        description:
          "Machine learning models analyze charger telemetry data to predict component failures days or weeks in advance, enabling proactive servicing.",
        points: [
          "Anomaly detection on voltage, current, and temperature patterns",
          "Remaining useful life estimation for critical components",
          "Automated maintenance ticket generation and scheduling",
          "Continuous model improvement with fleet-wide learning",
        ],
        image: "/technology/intelligence-predictive.jpg",
      },
      {
        heading: "Charging Port Analytics",
        description:
          "Deep analytics on connector health, usage patterns, and degradation trends across your entire charging network.",
        points: [
          "Connector wear tracking based on insertion cycle counts",
          "Session success rate and failure root-cause analysis",
          "Utilization heatmaps by location, time, and connector type",
          "Benchmarking across sites for performance optimization",
        ],
        image: "/technology/intelligence-analytics.jpg",
      },
      {
        heading: "Operational Intelligence Dashboard",
        description:
          "Unified view of network health with actionable insights, alerts, and recommendations for operations teams.",
        points: [
          "Real-time health score for every charger in the network",
          "Alert prioritization based on business impact",
          "Spare parts demand forecasting",
          "Monthly reliability and uptime reports",
        ],
        image: "/technology/intelligence-dashboard.jpg",
      },
      {
        heading: "Vehicle Battery Profile as a Service",
        description:
          "Builds charging profiles for individual vehicles over time, correlating charging behaviour with battery health indicators to offer battery-as-a-service insights.",
        points: [
          "Per-vehicle charging curve analysis and battery health scoring",
          "Degradation trend detection from charge session data",
          "Fleet-level battery health benchmarking and reporting",
          "API-ready data for OEMs, fleet operators, and insurance providers",
        ],
        image: "/technology/intelligence-battery.jpg",
      },
    ],
  },
  {
    name: "Fleet Management Suite",
    slug: "fleet-management-suite",
    tagline:
      "Comprehensive platform for managing electric fleet charging — depot scheduling, route optimization, and energy cost management.",
    icon: Truck,
    heroImage: "/technology/fleet-management.jpg",
    sections: [
      {
        heading: "Depot Charging Orchestration",
        description:
          "Intelligent scheduling engine that assigns chargers to vehicles based on departure times, battery state, and energy costs.",
        points: [
          "Automated charge scheduling aligned with fleet duty cycles",
          "Priority queuing for high-utilization vehicles",
          "Integration with fleet telematics and dispatch systems",
          "Overnight valley charging for minimum energy costs",
        ],
        image: "/technology/fleet-depot.jpg",
      },
      {
        heading: "Energy Cost Optimization",
        description:
          "Reduces fleet charging costs by leveraging time-of-use tariffs, solar generation, and demand charge management.",
        points: [
          "Time-of-use tariff optimization across multiple utilities",
          "Demand charge management to avoid peak penalties",
          "Solar self-consumption maximization at depot sites",
          "Total cost of energy reporting per vehicle and route",
        ],
        image: "/technology/fleet-energy.jpg",
      },
      {
        heading: "Fleet Analytics & Reporting",
        description:
          "Comprehensive reporting on fleet electrification metrics — energy consumption, cost savings, emissions reduction, and charger utilization.",
        points: [
          "Per-vehicle energy consumption and cost tracking",
          "CO2 savings calculator with exportable reports",
          "Charger utilization and availability by depot",
          "SLA compliance and uptime reporting",
        ],
        image: "/technology/fleet-analytics.jpg",
      },
    ],
  },
  {
    name: "Smart Payment Terminals",
    slug: "smart-payment-terminals",
    tagline:
      "Integrated UPI and NFC payment hardware enabling cashless, card-free transactions at every charge point.",
    icon: CreditCard,
    heroImage: "/technology/payment-terminals.jpg",
    sections: [
      {
        heading: "UPI & NFC Integration",
        description:
          "Purpose-built payment terminals supporting India's UPI ecosystem alongside global NFC contactless standards for seamless driver payments.",
        points: [
          "UPI QR code generation with dynamic amount linking",
          "NFC contactless support for Visa, Mastercard, and RuPay",
          "Real-time payment confirmation with session auto-start",
          "Offline transaction queuing with automatic reconciliation",
        ],
        image: "/technology/payment-upi.jpg",
      },
      {
        heading: "Secure & Certified",
        description:
          "PCI DSS compliant payment processing with end-to-end encryption, ensuring every transaction is secure and auditable.",
        points: [
          "PCI DSS Level 1 certified payment flow",
          "End-to-end encryption for all card and UPI transactions",
          "Tamper-evident hardware with intrusion detection",
          "Automated settlement and reconciliation with payment gateways",
        ],
        image: "/technology/payment-secure.jpg",
      },
    ],
  },
  {
    name: "DC Charging Controller",
    slug: "dc-charging-controller",
    tagline:
      "High-performance embedded controller managing DC fast charging power electronics, safety systems, and communication protocols.",
    icon: Cpu,
    upcoming: true,
    heroImage: "/technology/dc-controller.jpg",
    sections: [
      {
        heading: "Power Electronics Control",
        description:
          "Real-time control of DC-DC converter stages with microsecond-level response times, ensuring stable and efficient power delivery to the vehicle.",
        points: [
          "Multi-loop digital control for voltage and current regulation",
          "Soft-switching topology support for high efficiency",
          "Wide output range: 150V to 1000V DC",
          "Thermal derating with graceful power reduction",
        ],
        image: "/technology/dc-controller-power.jpg",
      },
      {
        heading: "Safety & Protocol Stack",
        description:
          "Integrated safety monitoring and EV communication protocols ensuring reliable and standards-compliant charging sessions.",
        points: [
          "CCS2 and CHAdeMO protocol state machines",
          "IEC 61851 and IEC 61439 safety compliance",
          "Ground fault, over-voltage, and over-current protection",
          "Pre-charge and insulation monitoring sequences",
        ],
        image: "/technology/dc-controller-safety.jpg",
      },
    ],
  },
  {
    name: "Smart Parking & Charging (IVQ)",
    slug: "smart-parking-ivq",
    tagline:
      "Integrated vision-based parking occupancy detection with EV charging management for optimal space and energy utilization.",
    icon: ParkingSquare,
    heroImage: "/technology/smart-parking.jpg",
    sections: [
      {
        heading: "Vision-Based Occupancy Detection",
        description:
          "Camera-based AI system that detects vehicle presence, type, and charging status in real-time without ground-mounted sensors.",
        points: [
          "Edge AI processing on low-cost camera modules",
          "EV vs ICE vehicle classification for enforcement",
          "License plate recognition for automated access control",
          "Works in indoor, outdoor, and low-light conditions",
        ],
        image: "/technology/parking-vision.jpg",
      },
      {
        heading: "Integrated Charging Management",
        description:
          "Connects parking occupancy data with charger management to automate session allocation and prevent ICE-blocking of charging bays.",
        points: [
          "Automatic charger reservation when EV is detected in bay",
          "ICE vehicle alerts and enforcement notifications",
          "Parking duration tracking with overstay management",
          "Combined parking and charging billing",
        ],
        image: "/technology/parking-charging.jpg",
      },
      {
        heading: "Analytics & Space Optimization",
        description:
          "Data-driven insights on parking utilization, peak hours, and charging demand patterns to optimize space allocation.",
        points: [
          "Occupancy heatmaps by time, day, and zone",
          "Charging demand forecasting for infrastructure planning",
          "Revenue reporting for combined parking and charging",
          "API integration with parking management platforms",
        ],
        image: "/technology/parking-analytics.jpg",
      },
    ],
  },
  // --- NEW TECHNOLOGY PAGES ---
  {
    name: "EVSE Hardware Bundle",
    slug: "evse-hardware-bundle",
    tagline:
      "Complete hardware engineering platform — from power architecture and mechanical design to production tooling and certification support.",
    icon: HardDrive,
    heroImage: "/technology/hardware-bundle.jpg",
    sections: [
      {
        heading: "EVSE Hardware Core",
        description:
          "Defines the electrical and control foundation of the EV charger. Covers power architecture, protection circuits, control electronics, communication interfaces, and compliance-ready design for safe and reliable charging.",
        points: [
          "Power architecture design with integrated protection circuits",
          "Control electronics with embedded communication interfaces",
          "Compliance-ready design for IEC, CE, and UL standards",
          "Modular PCB layout for variant configurability",
        ],
        image: "/technology/hardware-core.jpg",
      },
      {
        heading: "EVSE Mechanical Casing & Production",
        description:
          "End-to-end mechanical design and production platform. From custom 3D-modelled enclosures to manufacturing test jigs, golden sample control, and full production line support.",
        points: [
          "Custom 3D modelling for enclosure design",
          "Manufacturing test jigs and simulator tools",
          "Golden Sample and Reference Build Control",
          "Pilot and mass production support",
        ],
        image: "/technology/hardware-casing.jpg",
      },
      {
        heading: "EVSE Hardware Extensions",
        description:
          "Extended hardware capabilities including OCPP 2.0.1 upgrade paths, payment integration, full compliance certification, supply chain risk management, and after-sales technical support.",
        points: [
          "OCPP 2.0.1 upgrade and certification support",
          "EVSE payment terminal integration",
          "Supply chain risk assessment and alternate BOM strategy",
          "After-sales RCA, technical support, and mass troubleshooting guidelines",
        ],
        image: "/technology/hardware-extensions.jpg",
      },
    ],
  },
  {
    name: "EVSE Community Suite",
    slug: "evse-community-suite",
    tagline:
      "Complete charging management for residential communities — from user onboarding and shared scheduling to billing and intelligent load balancing.",
    icon: Users,
    heroImage: "/technology/community-suite.jpg",
    sections: [
      {
        heading: "EVSE Access Manager",
        description:
          "Manage who can charge, when, and where. Role-based access control with user onboarding, charger assignment, and detailed usage logs for community administrators.",
        points: [
          "User onboarding with resident verification",
          "Role-based access for owners, tenants, and guests",
          "Charger assignment and usage quota management",
          "Detailed usage logs and audit trails",
        ],
        image: "/technology/community-access.jpg",
      },
      {
        heading: "EVSE Share & Bill",
        description:
          "Fair and transparent shared charging with automated consumption billing, monthly statements, and integrated payment collection for multi-user environments.",
        points: [
          "Shared scheduling to prevent charging conflicts",
          "Per-unit consumption billing with monthly statements",
          "Integrated payment collection and reconciliation",
          "Visitor charging module with guest billing",
        ],
        image: "/technology/community-billing.jpg",
      },
      {
        heading: "EVSE Community Intelligence",
        description:
          "Smart modules purpose-built for residential and community charging. Includes slot reservation, overstay penalties, community load balancing, and a transparency dashboard to reduce disputes.",
        points: [
          "Slot Reservation Engine — avoids charging time conflicts",
          "Overstay & Penalty Engine — discourages idle blocking",
          "Community Load Balancer — prevents electrical overload",
          "Usage Transparency Dashboard — reduces resident disputes",
        ],
        image: "/technology/community-intelligence.jpg",
      },
    ],
  },
  {
    name: "EVSE Fleet Management Suite",
    slug: "evse-fleet-management-suite",
    tagline:
      "Three-tier fleet charging platform — track, optimize, and intelligently manage your electric fleet from depot to route.",
    icon: Truck,
    heroImage: "/technology/evse-fleet.jpg",
    sections: [
      {
        heading: "EVSE Fleet Track",
        description:
          "The foundation layer for fleet charging visibility. Vehicle-charger mapping, real-time charging usage monitoring, driver reports, and depot dashboards.",
        points: [
          "Vehicle-to-charger mapping with real-time status",
          "Per-vehicle and per-driver charging usage reports",
          "Depot-level dashboards with utilization metrics",
          "Integration with fleet telematics systems",
        ],
        image: "/technology/evse-fleet-track.jpg",
      },
      {
        heading: "EVSE Fleet Optimize",
        description:
          "Smart charging schedules, automated load balancing, peak avoidance, and cost optimization. Ensures your fleet charges at the lowest cost without overloading infrastructure.",
        points: [
          "Smart charging schedules aligned with fleet duty cycles",
          "Automated load balancing across depot chargers",
          "Peak demand avoidance and time-of-use optimization",
          "Total cost of energy tracking per vehicle and route",
        ],
        image: "/technology/evse-fleet-optimize.jpg",
      },
      {
        heading: "EVSE Fleet Intelligence",
        description:
          "Advanced analytics layer with driver charging discipline tracking, route-aware charging planning, battery health correlation, depot energy optimization, and ESG carbon reporting.",
        points: [
          "Driver Charging Discipline — prevents idle blocking and misuse",
          "Route-Aware Charging Planner — predicts charging needs from routes",
          "Battery Health Correlation — links charging behaviour to battery life",
          "Fleet ESG & Carbon Reports — CO₂ and sustainability tracking",
        ],
        image: "/technology/evse-fleet-intelligence.jpg",
      },
    ],
  },
  {
    name: "EVSE CMS Suite",
    slug: "evse-cms-suite",
    tagline:
      "Charge Point Management System — from OCPP connectivity and remote control to billing, payments, and revenue growth modules.",
    icon: LayoutGrid,
    heroImage: "/technology/cms-suite.jpg",
    sections: [
      {
        heading: "EVSE Control Hub",
        description:
          "The operations backbone for CPOs. Full OCPP stack with charger provisioning, remote configuration, firmware updates, and site and charger management from a single dashboard.",
        points: [
          "OCPP 1.6J and 2.0.1 compliant charger management",
          "Remote provisioning, configuration, and firmware updates",
          "Site and charger hierarchy with multi-tenant support",
          "Role-based access with granular permissions for CPO ops teams",
        ],
        image: "/technology/cms-control.jpg",
      },
      {
        heading: "EVSE Commerce Engine",
        description:
          "End-to-end commerce platform covering user mobile app, session lifecycle, tariff management, billing, wallets, payments, and reconciliation for CPOs, finance teams, and end users.",
        points: [
          "User mobile app with charger discovery and session management",
          "Flexible tariff engine — time-based, energy-based, and flat-rate",
          "Integrated wallets, subscriptions, and payment processing",
          "GST-compliant billing with automated reconciliation",
        ],
        image: "/technology/cms-commerce.jpg",
      },
      {
        heading: "EVSE Growth Modules",
        description:
          "Revenue expansion modules including roaming and interoperability (OCPI), dynamic pricing, multi-entity settlement, tax compliance reporting, and revenue leakage monitoring.",
        points: [
          "Roaming & Interoperability Gateway — cross-network charging via OCPI",
          "Dynamic Pricing Engine — peak-hour and demand-based pricing",
          "Multi-Entity Settlement — revenue split between CPO, landlord, fleet",
          "Revenue Leakage Monitor — detects failed or unpaid sessions",
        ],
        image: "/technology/cms-growth.jpg",
      },
    ],
  },
];

export function getTechnologyBySlug(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}

export function getAllTechnologySlugs(): string[] {
  return technologies.map((t) => t.slug);
}
