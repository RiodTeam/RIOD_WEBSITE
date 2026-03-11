"use client";

import MotionWrapper from "../common/MotionWrapper";

const supportedBrands = {
  "Solar Inverters": [
    "SMA",
    "Fronius",
    "SolarEdge",
    "Huawei",
    "Goodwe",
    "Growatt",
    "Sungrow",
    "Delta",
  ],
  "HVAC Systems": [
    "Daikin",
    "Mitsubishi Electric",
    "Carrier",
    "Trane",
    "Johnson Controls",
    "Honeywell",
    "Schneider Electric",
  ],
  "Battery (BESS)": [
    "BYD",
    "LG Energy",
    "Tesla Powerwall",
    "Huawei LUNA",
    "Sonnen",
    "Pylontech",
  ],
  "DG / Gensets": [
    "Cummins",
    "Kirloskar",
    "Caterpillar",
    "Ashok Leyland",
    "Mahindra Powerol",
  ],
};

export default function PowerMasterArchitecture() {
  return (
    <section className="py-16 md:py-[6.8rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <MotionWrapper>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
            System Architecture
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
            How Power Master Connects Everything
          </h2>
          <p className="para-text text-[#626262] max-w-[560px] mb-12 md:mb-16">
            A single hardware unit that acts as the energy brain of your site.
            Grid monitoring, load limiting, device communication, and
            intelligent control from one point.
          </p>
        </MotionWrapper>

        {/* Architecture Diagram */}
        <MotionWrapper delay={0.1}>
          <div className="bg-[#1b1b1b] rounded-2xl p-6 md:p-10 lg:p-14 overflow-x-auto">
            <svg
              viewBox="0 0 1100 720"
              className="w-full h-auto min-w-[750px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection lines */}
              <line x1="140" y1="155" x2="420" y2="310" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="390" y1="120" x2="450" y2="280" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="620" y1="120" x2="570" y2="280" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="870" y1="155" x2="600" y2="310" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="140" y1="560" x2="420" y2="410" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="390" y1="595" x2="450" y2="440" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="620" y1="595" x2="570" y2="440" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="870" y1="560" x2="600" y2="410" stroke="#cdf80a" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />

              {/* === POWER MASTER (Center) === */}
              <rect x="400" y="280" width="220" height="160" rx="16" fill="#cdf80a" />
              <text x="510" y="325" textAnchor="middle" fill="#1b1b1b" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17">Power Master</text>
              <line x1="430" y1="338" x2="590" y2="338" stroke="#1b1b1b" strokeWidth="0.5" opacity="0.2" />
              <text x="510" y="360" textAnchor="middle" fill="#1b1b1b" fontFamily="Inter, sans-serif" fontSize="10" opacity="0.7">Grid Monitoring</text>
              <text x="510" y="375" textAnchor="middle" fill="#1b1b1b" fontFamily="Inter, sans-serif" fontSize="10" opacity="0.7">Max Load Limiting</text>
              <text x="510" y="390" textAnchor="middle" fill="#1b1b1b" fontFamily="Inter, sans-serif" fontSize="10" opacity="0.7">Dynamic Adjustment</text>
              <text x="510" y="405" textAnchor="middle" fill="#1b1b1b" fontFamily="Inter, sans-serif" fontSize="10" opacity="0.7">Grid Communication</text>
              <text x="510" y="430" textAnchor="middle" fill="#1b1b1b" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.4">Zigbee / BLE / RS485 / Wi-Fi / Ethernet</text>

              {/* === GRID (Top Left) === */}
              <rect x="60" y="80" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="140" y="118" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">Grid</text>
              <text x="140" y="140" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Monitor / Limit / Report</text>
              <text x="140" y="157" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Modbus / DI-AI</text>
              <text x="140" y="177" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Max load threshold</text>

              {/* === SOLAR (Top Center-Left) === */}
              <rect x="280" y="40" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="360" y="78" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">Solar Inverter</text>
              <text x="360" y="100" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Generation / Export</text>
              <text x="360" y="117" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Modbus / EEBUS</text>
              <text x="360" y="137" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Self-consumption priority</text>

              {/* === DG GENERATOR (Top Center-Right) === */}
              <rect x="500" y="40" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="580" y="78" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">DG Generator</text>
              <text x="580" y="100" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Run Status / Fuel Level</text>
              <text x="580" y="117" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Modbus / DI-AI</text>
              <text x="580" y="137" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Auto switchover</text>

              {/* === BATTERY (Top Right) === */}
              <rect x="790" y="80" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="870" y="118" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">Battery (BESS)</text>
              <text x="870" y="140" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Charge / Discharge</text>
              <text x="870" y="157" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Modbus / API</text>
              <text x="870" y="177" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Peak shaving</text>

              {/* === EV CHARGER (Bottom Left) === */}
              <rect x="60" y="490" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="140" y="528" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">EV Chargers</text>
              <text x="140" y="550" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Power Adjust / Queue</text>
              <text x="140" y="567" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">OCPP / EEBUS</text>
              <text x="140" y="587" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Intelligent queuing</text>

              {/* === HVAC (Bottom Center-Left) === */}
              <rect x="280" y="530" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="360" y="568" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">HVAC / Heat Pump</text>
              <text x="360" y="590" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Schedule / Curtail</text>
              <text x="360" y="607" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">SG-Ready / EEBUS</text>
              <text x="360" y="627" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Demand-aware control</text>

              {/* === METERS (Bottom Center-Right) === */}
              <rect x="500" y="530" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="580" y="568" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">Energy Meters</text>
              <text x="580" y="590" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Consumption / Export</text>
              <text x="580" y="607" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Modbus / CT Clamp</text>
              <text x="580" y="627" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Sub-metering</text>

              {/* === CLOUD (Bottom Right) === */}
              <rect x="790" y="490" width="160" height="110" rx="12" fill="#2a2a2a" />
              <text x="870" y="528" textAnchor="middle" fill="white" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14">Cloud Platform</text>
              <text x="870" y="550" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Dashboard / Alerts</text>
              <text x="870" y="567" textAnchor="middle" fill="#9a99a2" fontFamily="Inter, sans-serif" fontSize="10">Wi-Fi / 4G / Ethernet</text>
              <text x="870" y="587" textAnchor="middle" fill="#cdf80a" fontFamily="Inter, sans-serif" fontSize="9" opacity="0.8">Remote management</text>
            </svg>
          </div>
        </MotionWrapper>

        {/* Legend */}
        <MotionWrapper delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-6 md:gap-10 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5" style={{ backgroundImage: "repeating-linear-gradient(90deg, #cdf80a 0, #cdf80a 6px, transparent 6px, transparent 10px)" }} />
              <span className="text-sm text-[#626262] font-inter">Communication link</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#cdf80a]" />
              <span className="text-sm text-[#626262] font-inter">Power Master</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#2a2a2a]" />
              <span className="text-sm text-[#626262] font-inter">Connected asset</span>
            </div>
          </div>
        </MotionWrapper>

        {/* Pre-integrated Brands */}
        <div className="mt-16 md:mt-24">
          <MotionWrapper>
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#1b1b1b]/50 font-inter mb-3">
              Pre-Integrated Brands
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-[#1b1b1b] font-inter leading-tight mb-4">
              Ready-to-Connect Equipment
            </h3>
            <p className="para-text text-[#626262] max-w-[560px] mb-10 md:mb-14">
              Power Master ships with pre-built protocol drivers for major
              equipment brands. Connect without custom integration work.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(supportedBrands).map(([category, brands], catIndex) => (
              <MotionWrapper key={category} delay={catIndex * 0.08}>
                <div className="bg-[#f6f6f6] rounded-xl p-6 md:p-7 h-full">
                  <h4 className="text-sm font-medium text-[#1b1b1b] font-inter mb-4 uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => (
                      <span
                        key={brand}
                        className="text-xs text-[#626262] bg-white border border-[#e8e8e8] rounded-full px-3 py-1.5 font-inter"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
