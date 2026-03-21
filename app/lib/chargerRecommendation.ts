export type LocationType =
  | "home"
  | "apartment"
  | "office"
  | "hotel"
  | "resort"
  | "institution"
  | "mall"
  | "hospital"
  | "parking"
  | "roadside";

export type UserRange = "1-5" | "6-20" | "21-50" | "50+";
export type BudgetRange = "under-50k" | "50k-1l" | "1l-3l" | "3l-10l" | "10l+";
export type ParkingDuration = "under-1h" | "1-4h" | "4-8h" | "overnight";

export interface WizardInput {
  location: LocationType;
  userRange: UserRange;
  maxPowerKW?: number;
  budget?: BudgetRange;
  parkingDuration: ParkingDuration;
}

export interface ChargerRec {
  name: string;
  power: string;
  image: string;
  shopUrl: string;
}

export interface Recommendation {
  primary: ChargerRec;
  secondary?: ChargerRec;
  reasoning: string;
  software: {
    name: string;
    description: string;
    link: string;
  };
  applicationPage?: {
    label: string;
    href: string;
  };
}

const locationToAppPage: Partial<Record<LocationType, { label: string; href: string }>> = {
  hotel: { label: "EV Chargers for Hotels", href: "/ev-chargers-hotels" },
  office: { label: "EV Chargers for Offices", href: "/ev-chargers-office" },
  institution: { label: "EV Chargers for Institutions", href: "/ev-chargers-institution" },
  home: { label: "EV Chargers for Home", href: "/ev-chargers-home" },
  resort: { label: "EV Chargers for Resorts", href: "/ev-chargers-resorts" },
  mall: { label: "EV Chargers for Malls & Theatres", href: "/ev-chargers-malls" },
  hospital: { label: "EV Chargers for Hospitals", href: "/ev-chargers-hospitals" },
  parking: { label: "EV Chargers for Parking Complexes", href: "/ev-chargers-parking" },
};

const communitySuite = {
  name: "Community Charging Suite",
  description:
    "Free-to-use platform for managing community and residential EV charging. Handles user management, billing, and access control.",
  link: "/products/ev-chargers",
};

const operationsSuite = {
  name: "EV Charging Operations Suite",
  description:
    "Commercial-grade cloud platform for fleet management, billing, user management, and remote monitoring.",
  link: "/technology/ev-charging-operations-suite",
};

const powerpod = (power: string): ChargerRec => ({
  name: `RIOD AC Powerpod ${power}`,
  power,
  image: "/products/powerpod.png",
  shopUrl: "/store",
});

const edge = (power: string): ChargerRec => ({
  name: `RIOD AC Powerpod Go ${power}`,
  power,
  image: "/products/powerpod.png",
  shopUrl: "/store",
});

const city = (power: string): ChargerRec => ({
  name: `RIOD AC PowerPod City ${power}`,
  power,
  image: "/products/powerpod.png",
  shopUrl: "/store",
});

const dcFast = (power: string): ChargerRec => ({
  name: `RIOD DC Fast ${power}`,
  power,
  image: "/products/powerpod-city.png",
  shopUrl: "/store",
});

function isHighBudget(budget?: BudgetRange): boolean {
  return budget === "3l-10l" || budget === "10l+";
}

function isLowBudget(budget?: BudgetRange): boolean {
  return budget === "under-50k" || budget === "50k-1l";
}

function isShortParking(duration: ParkingDuration): boolean {
  return duration === "under-1h" || duration === "1-4h";
}

function isManyUsers(range: UserRange): boolean {
  return range === "21-50" || range === "50+";
}

export function getRecommendation(input: WizardInput): Recommendation {
  const { location, userRange, budget, parkingDuration } = input;
  const appPage = locationToAppPage[location];

  // Roadside/Highway: always DC
  if (location === "roadside") {
    let primary: ChargerRec;
    let reasoning: string;

    if (isHighBudget(budget) || isManyUsers(userRange)) {
      primary = dcFast("120 kW");
      reasoning =
        "For roadside and highway locations, DC fast charging is essential since vehicles stop briefly for quick top-ups. With high traffic expected, the 120kW charger delivers 10-80% charge in under 30 minutes, maximizing throughput and customer satisfaction. In India, having CCS2 compatibility ensures support for all major EV brands.";
    } else if (budget === "1l-3l") {
      primary = dcFast("60 kW");
      reasoning =
        "For roadside charging, DC fast chargers are the right choice since drivers need quick turnarounds. The 60kW unit balances speed and cost, delivering a usable charge in about 45 minutes. It supports CCS2, the mandated DC standard in India, and works with all major EVs.";
    } else {
      primary = dcFast("30 kW");
      reasoning =
        "For roadside locations, DC charging is the best fit since vehicles park for short durations. The 30kW DC charger is the most affordable entry point for fast charging, providing 10-80% in roughly 80 minutes. It requires a three-phase industrial power connection.";
    }

    return {
      primary,
      reasoning,
      software: operationsSuite,
      applicationPage: appPage,
    };
  }

  // Home: AC Powerpod
  if (location === "home") {
    let primary: ChargerRec;
    let reasoning: string;

    if (input.maxPowerKW && input.maxPowerKW >= 11) {
      primary = powerpod("22 kW");
      reasoning =
        "With a three-phase connection available at your home, the 22kW Powerpod gives you the fastest AC charging possible. A full charge takes under 2 hours for most EVs. This is ideal if you have multiple vehicles or need quick turnaround between trips.";
    } else if (userRange === "1-5" && isLowBudget(budget)) {
      primary = powerpod("3.4 kW");
      reasoning =
        "For a home with a standard single-phase connection, the 3.4kW Powerpod is the most practical and affordable option. It charges your EV overnight (8-10 hours) while you sleep. Smart scheduling lets you take advantage of off-peak electricity rates.";
    } else {
      primary = powerpod("7.4 kW");
      reasoning =
        "The 7.4kW Powerpod is ideal for home use. It runs on a single-phase 32A supply and cuts charging time in half compared to the 3.4kW, giving you a full charge in about 5-6 hours. Great for daily commuters who need reliable, hassle-free overnight charging.";
    }

    return {
      primary,
      reasoning,
      software: communitySuite,
      applicationPage: appPage,
    };
  }

  // Apartment/Office/Institution: shared spaces, long parking
  if (
    location === "apartment" ||
    location === "office" ||
    location === "institution"
  ) {
    let primary: ChargerRec;
    let secondary: ChargerRec | undefined;
    let reasoning: string;

    if (isManyUsers(userRange)) {
      primary = city("22 kW");
      secondary = edge("7.4 kW");
      reasoning =
        `For a ${location} with ${userRange} expected vehicles, the PowerPod City dual-gun charger is the best fit. It can charge two vehicles simultaneously from a single unit, effectively doubling your charging capacity. The dual-gun design is more space-efficient than installing two separate chargers. For additional parking spots, the Powerpod Go 7.4kW offers a cost-effective way to expand coverage. In India, power availability is a key factor, and AC chargers work well for locations where vehicles park for extended hours.`;
    } else if (parkingDuration === "overnight" || parkingDuration === "4-8h") {
      primary = edge("7.4 kW");
      reasoning =
        `With longer parking durations at your ${location}, AC charging is the most cost-effective approach. Vehicles have enough time to charge fully even at 7.4kW. The Powerpod Go comes with RFID access control and OCPP cloud management, making it easy to manage who charges and track usage across the community. It supports automated billing per user, which is essential for shared spaces.`;
    } else {
      primary = edge("22 kW");
      reasoning =
        `For your ${location} where parking time may be limited, the 22kW Powerpod Go delivers the fastest AC charging available. It requires a three-phase connection but provides a full charge in under 2 hours. With RFID access and payment terminals, it works well for shared environments where multiple users need managed access.`;
    }

    return {
      primary,
      secondary,
      reasoning,
      software: communitySuite,
      applicationPage: appPage,
    };
  }

  // Hotel/Resort: guest experience, overnight
  if (location === "hotel" || location === "resort") {
    let primary: ChargerRec;
    let secondary: ChargerRec | undefined;
    let reasoning: string;

    if (isManyUsers(userRange) || isHighBudget(budget)) {
      primary = city("22 kW");
      secondary = dcFast("30 kW");
      reasoning =
        `For a ${location} expecting high guest EV usage, we recommend the PowerPod City 22kW as your primary solution. Its dual-gun design serves two guests from one charger, which is important for maximizing limited parking infrastructure. Adding a 30kW DC fast charger provides a quick top-up option for guests who need a rapid charge during a short visit. This combination covers both overnight stays and quick stops.`;
    } else {
      primary = edge("7.4 kW");
      reasoning =
        `For your ${location}, the Powerpod Go 7.4kW is the ideal choice. Guests typically park overnight, giving plenty of time for a full charge at 7.4kW. The Edge series includes payment terminals, user authentication, and OCPP cloud management, so you can offer EV charging as a premium guest amenity. The single-phase installation keeps setup costs reasonable.`;
    }

    return {
      primary,
      secondary,
      reasoning,
      software: operationsSuite,
      applicationPage: appPage,
    };
  }

  // Mall/Hospital: short-medium parking, high turnover
  if (location === "mall" || location === "hospital") {
    let primary: ChargerRec;
    let secondary: ChargerRec | undefined;
    let reasoning: string;

    if (isShortParking(parkingDuration)) {
      if (isHighBudget(budget)) {
        primary = dcFast("60 kW");
        secondary = edge("22 kW");
        reasoning =
          `For a ${location === "mall" ? "mall or theatre" : "hospital"} where visitors park for short periods, DC fast charging gives the best experience. The 60kW charger provides a meaningful charge in 30-45 minutes, matching typical visit durations. The 22kW Edge can supplement as a lower-cost option for areas where longer parking is possible. In India, offering both DC and AC options maximizes the number of EV brands and charging scenarios you can serve.`;
      } else {
        primary = city("22 kW");
        reasoning =
          `For your ${location === "mall" ? "mall or theatre" : "hospital"} with moderate parking times, the PowerPod City 22kW dual-gun charger offers the best balance of speed and cost. It provides a usable charge in about 2 hours and serves two vehicles simultaneously. Its RFID and payment support lets you monetize the charging service or offer it as a customer perk.`;
      }
    } else {
      primary = edge("7.4 kW");
      secondary = city("22 kW");
      reasoning =
        `With longer parking durations at your ${location === "mall" ? "mall" : "hospital"}, AC charging works well. The Edge 7.4kW is a cost-effective base charger, and the City 22kW dual-gun adds higher-speed and two-vehicle capability for premium spots. This combination optimizes your investment while covering different visitor needs.`;
    }

    return {
      primary,
      secondary,
      reasoning,
      software: operationsSuite,
      applicationPage: appPage,
    };
  }

  // Parking Complex: mixed duration, dual-gun focus
  if (location === "parking") {
    let primary: ChargerRec;
    let secondary: ChargerRec | undefined;
    let reasoning: string;

    if (isManyUsers(userRange)) {
      primary = city("22 kW");
      secondary = dcFast("30 kW");
      reasoning =
        "For a parking complex with high expected usage, the PowerPod City 22kW dual-gun charger maximizes charger-to-vehicle ratio. Each unit serves two vehicles, so you get double the capacity per installation point. Adding a DC 30kW charger gives visitors a quick-charge option for short stays. RIOD's Decentralized Load Balancer ensures all chargers share available power without exceeding your site's electrical capacity.";
    } else {
      primary = city("7.4 kW");
      reasoning =
        "For your parking complex, the PowerPod City 7.4kW dual-gun charger is a smart choice. It serves two vehicles from one unit, keeping installation costs lower while doubling coverage. The 7.4kW power level works well for parking durations of 4+ hours and runs on a standard single-phase 32A supply, making installation straightforward.";
    }

    return {
      primary,
      secondary,
      reasoning,
      software: operationsSuite,
      applicationPage: appPage,
    };
  }

  // Fallback
  return {
    primary: edge("7.4 kW"),
    reasoning:
      "Based on your requirements, the Powerpod Go 7.4kW is a versatile choice that works well across most use cases. It offers smart connectivity, RFID access, and payment support, making it suitable for both private and shared environments.",
    software: communitySuite,
    applicationPage: appPage,
  };
}
