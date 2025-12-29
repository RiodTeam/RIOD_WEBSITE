export interface InsightSection {
  heading: string;
  paragraphs?: string[];
  points?: string[];
}

export interface InsightType {
  id: number;
  slug: string;
  title: string;
  tag: string;
  date: string;
  image: string;
  intro: string[];
  sections: InsightSection[];
  relatedSlugs?: string[];
}

export const insightsData: InsightType[] = [
  {
    id: 1,
    slug: "riod-collaborating-with-cpos-to-solve-ev-charging-infrastructure-problem",
    title:
      "RIOD is Collaborating With CPO’s to Solve EV Charging Infrastructure Problem",
    tag: "EV Charging",
    date: "March 20, 2025",
    image: "/home/hero.webp",

    intro: [
      "RIOD designs, develops and manufactures EV charging infrastructure for public, buildings, commercial entities and residential homes. We are an Indian company that has a good expertise and one of the few companies in India that is an OEM (Original Equipment Manufacturer) Charging Station Manufacturer. We build on our strong history of successfully integrating hardware, software and systems engineering to create innovative solutions for electric transportation infrastructure.",
    ],

    sections: [
      {
        heading: "Charge point operators (CPO)",
        paragraphs: [
          "Charge point operators (CPOs) install and maintain charge stations to provide drivers with access to charging facilities. Either a CPO can own and operate a set of charge stations, or simply operate them for third parties. They make revenue by offering energy as a service. EV charging stations can be installed in apartments, workplaces, public parking spaces or commercial buildings.",
        ],
      },

      {
        heading: "RIOD <> CPO Partnership",
        paragraphs: [
          "RIOD is happy to collaborate with CPO’s, to offer best in class EV charging solutions. Our commitment is to provide energy management and sustainable smart mobility solutions that are safe, reliable and smart. With the Collaboration, RIOD can become a technical partner for the end-end CPO Operations, and provide best in class support for the connectivity, technical queries, configuration, diagnosis of EVSE. RIOD offers best pricing strategy for our EV charging stations to CPO, Our pricing strategy gives the flexibility to accelerate the EV adoption much faster.",
          "RIOD currently manufactures upto 22kW Dual Gun Chargers.",
        ],
      },
    ],

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
    intro: [
      "Temperature monitoring is a critical process in most industries, from pharmaceuticals to food production. It can help prevent spoilage, product failure and loss of revenue. Temperature monitoring provides critical information and alerts that can reduce costs and ensure compliance with regulatory agencies.",
      "If you’re working in the pharma industry or any other where temperature monitoring is important, this guide will walk you through the different aspects of choosing a temperature monitoring solution",
    ],
    sections: [
      {
        heading:
          "Temperature monitoring is one of the major concerns in pharmaceutical industry.",
        paragraphs: [
          "Temperature monitoring is one of the major concerns in pharmaceutical industry. The improper storage conditions, such as temperature fluctuations can cause loss of product integrity and even promote microbial growth. The benefits of temperature monitoring include:",
        ],
        points: [
          "Ensuring compliance with regulatory requirements for storage, transport and distribution",
          "Reduce loss of revenue due to spoilage",
          "Reducing waste due to spoilage or discarding damaged materials",
          "Minimizing safety risks associated with unsafe temperatures",
        ],
      },

      {
        heading:
          "Freezer/Refrigeration failure is one of the major problems that can affect the quality of vaccines in particular.",
        paragraphs: [
          "Freezer/refrigeration failure is one of the major problems that can affect the quality of vaccines in particular. This can be due to multiple reasons, including power failure, equipment failure, door and configuration issues.",
          "This type of failure can cause a range of issues ranging from vaccine degradation and loss of inventory to loss of revenue.",
        ],
      },

      {
        heading: "Maintaining the proper temperature across the supply chain.",
        paragraphs: [
          "Temperature monitoring is not only important for pharmaceutical companies, but also for strategic partners like manufacturers and distributors. Proper temperature management is needed from the production process all the way through storage and transportation. Monitoring of cold rooms, freezers, reefer trucks and vaccination boxes are just some examples of points that need to be monitored with software that visualizes all points in one portal.",
        ],
        // points: [
        //   "Cold rooms and warehouses",
        //   "Freezers and refrigeration units",
        //   "Reefer trucks",
        //   "Vaccination storage boxes"
        // ]
      },

      {
        heading: "Solutions should be scalable and easy to install",
        paragraphs: [
          "In the past, temperature monitoring solutions were complex and costly to install. Today, as more industries adopt IoT technologies, companies have a wider choice of options when selecting a solution.",
          "Some considerations for choosing a solution include:",
        ],
        points: [
          "Every solution is different and requires multiple sensor integrations such as humidity sensors, occupancy sensors, water leak detectors etc., making them difficult to scale up or down at any point in time",
          "Are they easy to install? There is no future for wired solutions! They should be completely scalable i.e., to increase the monitoring nodes any time without any issues.",
        ],
      },

      {
        heading:
          "How RIOD Sensei wireless micro-nodes help in the monitoring of entire supply chain.",
        paragraphs: [
          "RIOD Sensei wireless micro-nodes can be used to monitor temperature in real time. The RIOD Sensei TempLive offers sensing from -200 to 500 deg C. It is a completely wireless scalable solution that can be deployed in seconds and does not require any special equipment or programming knowledge for operation. The RIOD Sensei TempLive enables users to monitor temperature from multiple points in a single software.",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "RIOD Sensei wireless micro-nodes help in the monitoring of entire supply chain. The RIOD Sensei Micro-nodes are compact, lightweight and easy to install. They are installed on each freezer, cold rooms, reefer trucks in the supply chain and can be monitored from a central server. This makes your product temperature monitoring solution scalable and cost effective. The RIOD Sensei TempLive is designed specifically for the negative temperatures at pharmaceutical industries with addon features such as alarms, power monitoring, Humidity CO2 etc., which ensures complete control over your traceability at all times",
        ],
      },
    ],

    relatedSlugs: [
      "riod-collaborating-with-cpos-to-solve-ev-charging-infrastructure-problem",
    ],
  },

  {
    id: 3,
    slug: "monitoring-hatchery-temperature-humidity-kpi-hatchability",
    title:
      "Monitoring Your Hatchery & Know how Temperature, Humidity and KPI affects the Hatchability",
    tag: "Sustainability",
    date: "May 05, 2025",
    image: "/home/hero.webp",

    intro: [
      "We were approached by a hatchery owner during the covid 19 period. he lost a batch due to unstable temperature in one of their hatchery unit. Later the issue was identified with the cabling of the heater, resulted in a big loss.",
      "Because we manufacture hatchery controllers, He approached us for a solution. The Live Hatchery Monitoring software and controller were developed by our team as an addon to existing controllers or as a stand-alone controller as the solution for hatcheries.",
      "The customer was able to gain a better understanding of their yield results by analyzing their data with our software. They were able to increase the hatchability in their hatchery by applying changes they made based on this knowledge.",
    ],

    sections: [
      {
        heading: "Hatch Success Starts in the Hatchery",
        paragraphs: [
          "Hatch success starts in the hatchery. The eggs you select, how they are handled in the hatchery and what happens during incubation can all have an impact on hatchability. Temperature and humidity play a critical role in successful hatching. Hatching egg mortality is greatly influenced by temperature and humidity control during incubation.",
          "In order to maximize hatchability, it’s important to monitor these two factors at regular intervals throughout your incubation process. A combination of knowledge and technology can help producers get a better handle on these variables and improve efficiency on their farm or hatchery unit (UH).",
        ],
      },

      {
        heading:
          "In a chicken hatchery, even small changes in temperature and humidity matter.",
        paragraphs: [
          "If you’re a chicken hatchery owner, you know how important it is to maintain a constant temperature and humidity level. The eggs in your incubators are very fragile while they’re developing, and any changes to those conditions can negatively impact hatchability.",
          "At times, changes in the key parameters of a system can be due to multiple reasons. Some of them are power fluctuations, door improper closing, parameter configuration issues, and many more. The most common ones include power failure and Heater/Controller or Wiring issues.",
        ],
      },

      {
        heading:
          "Tracking Temperature and Humidity Across Multiple Incubators to Increase Hatchery Efficiency",
        paragraphs: [
          "Temperature and humidity control are vital to successful hatchery management, as they can impact embryo viability, chick quality and overall hatchability. In this section we will look at how you can use technology to optimize your temperature and humidity levels across multiple incubators in order to increase your hatchery efficiency.",
          "The online indicates that the machines is running and the data in the software is live. You will get live hatchery information like - Running temperature, Running Humidity, Safety Sensor Reading, Egg tray turning delay, No of turn rotations from your Hatchery Monitoring Software",
        ],
      },

      {
        heading: "Monitoring Temperature Across multiple machineries",
        paragraphs: [
          "It can be from multiple locations in the world, all hatchery units can be visualized in our software.",
        ],
      },

      {
        heading: "Operator Monitoring with Motion Sensing",
        paragraphs: [
          "A unique feature of our solution is that it detects when an operator is near, and then shows time indicating some kind of operation is carried out, like door opening, adjusting configuration, loading or unloading the tray etc. The advantage is that the key parameters all can be viewed with respect to the operator indications",
        ],
      },

      {
        heading: "Analyzing Anomalies",
        paragraphs: [
          "The Importance of Monitoring Temperature & Humidity",
          "Temperature changes during the incubation process have a significant impact on hatching rates due to their effect on embryonic development. In general, an increase of 2° Celsius (3.6° Fahrenheit) above optimum results in a decrease of 0.5-1% hatchability while a drop below optimum by 1° C (1.8° F) lowers hatchability by 3%. Likewise, humidity levels also affect hatchability but not as much as temperature does; however if humidity is too low it can negatively impact embryo development or cause dehydration which may damage feathers or membranes resulting in reduced chick quality or death after hatching",
        ],
      },

      {
        heading:
          "Accurate Humidity and Temperature Monitoring for Better Hatchery Control",
        paragraphs: [
          "Accurate humidity and temperature monitoring is critical for improving hatchery efficiency. The best way to monitor these variables is with a hatchery monitoring controller and software that reads the current conditions in your hatchery and sends data directly to your computer or tablet. This allows you to get real-time readings of the environment inside your incubators, as well as record historical data for future reference.",
          "our RD250 Hactchey monitoring system will help you avoid issues such as low hatchability due to unstable incubation temperatures/humidity/operations, by providing early warning signs before it’s too late. By checking the software data, the Operator can make adjustments at any time without having to rely on guesswork or intuitions - and this means Increases hatchability with Quality Yield!",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "No matter what hatchery you’re working in, it’s important to monitor and log its key metrics. If you want to ensure that your eggs are protected from machine anomalies, then consider investing in a hatchery monitoring system that has built-in sensors for humidity, temperature, and other key metrics.",
        ],
      },
    ],

    relatedSlugs: ["importance-of-temperature-monitoring-in-pharma-companies"],
  },

  {
    id: 4,
    slug: "elive-energy-management-solution",
    title: "Elive - Energy Management Solution",
    tag: "Sustainability",
    date: "May 05, 2025",
    image: "/home/hero.webp",

    intro: [
  "Elive is an intelligent energy management solution designed to help organizations gain complete visibility into their energy consumption across facilities, equipment, and utilities. By continuously collecting and analyzing real-time energy data, Elive enables businesses to identify high energy-consuming assets, detect inefficiencies early, and make informed decisions to optimize usage. The platform supports centralized monitoring and control of HVAC systems, DG fuel usage, water and gas consumption, and critical equipment, helping organizations reduce operational costs while improving sustainability and reliability."
],


    sections: [
      {
        heading: "What is Elive Energy Management Solution?",
        paragraphs: [
          "Elive is a unique hardware and software solution that constantly monitor the energy consumption throughout the organization. Elive can provide consolidated energy consumption, Organizational or Specific to area wise or Equipment wise. Easily analyze your energy data through Elive Energy management software which helps to identify the highest energy-consuming areas and Equipment’s in your organization to implement energy-saving actions that will positively impact energy bill.",
        ],
        points: [
          "Energy Monitoring",
          "Forecast Consumption",
          "Organization wise, Location wise, Area Wise, Equipment wise energy consumption view ",
          "Machines Anomaly detection",
          "Peak and Non Peak Consumption",
        ],
      },

      {
        heading: "Applications",
        points: [
          "Monitor energy consumption across multiple machineries, locations, and areas",
          "Control multiple HVAC and air conditioning systems from a centralized software platform",
          "Monitor utilities such as DG fuel, water consumption, water level, and gas",
          "Monitor and control equipment, machines, and pumps",
          "Monitor air and water quality across premises",
        ],
      },

      {
        heading: "Ideal For",
        points: [
          "Facility management companies",
          "Smart and green buildings",
          "Manufacturing facilities",
          "Hospital and clinic chains",
          "Hotel chains",
          "Factories and industrial units",
        ],
      },

      {
        heading: "Conclusion",
        paragraphs: [
          "Elive enables organizations to gain complete visibility into their energy usage, detect inefficiencies early, and take proactive control measures. By centralizing energy data and providing actionable insights, Elive helps businesses reduce operational costs, improve sustainability, and achieve smarter energy management.",
        ],
      },
    ],

    relatedSlugs: ["monitoring-hatchery-temperature-humidity-kpi-hatchability"],
  },


  {
  id: 5,
  slug: "how-climate-pro-is-helping-mushroom-farms-to-maintain-optimal-climate-conditions-for-better-yields",
  title: "How Climate Pro Helps Mushroom Farms Maintain Optimal Climate Conditions for Better Yields",
  tag: "Agriculture",
  date: "May 05, 2025",
  image: "/home/hero.webp",

  intro: [
    "Climate Pro is the leading climate control solution for indoor farming. By utilizing our proprietary technology, we are able to monitor and control the climate in your growing facility so you can focus on what matters most: growing your product! This technology allows us to monitor temperature, humidity levels and CO2 levels inside the grow chambers. We then use this data to determine if anything needs adjusting based on our algorithms. Our goal is simple: help you increase yield while also reducing cost by only heating or cooling when needed resulting in less wasted energy usage and lower utility costs per square foot of production space.",
     
  ],

  sections: [
    {
      heading: "Mushroom Indoor Cultivation",
      paragraphs: [
        "Mushroom cultivation is the process of growing mushrooms in a controlled environment. The main difference between mushroom cultivation and mushroom picking is that only the latter takes place outdoors. In contrast, mushroom cultivation takes place indoors with climate control to ensure optimal growth conditions for your crop.",
        "Mushrooms are a nutritional powerhouse loaded with vitamins and minerals—from A to K, they boast an impressive array of nutrients (including protein). They’re also low in fat and calories but high in fiber, making them a healthy addition to any diet.",
      ]
    },

    {
      heading: "Optimal Temperature for Mushroom Growth",
      paragraphs: [
        "You might be wondering how temperature affects mushroom growth. To put it simply, the optimal temperature for mushrooms to grow well is between 15-30 degrees Celsius. When the temperature falls below this range, the peat becomes too cold and inhibits the growth of your mushrooms. If you are growing mushrooms in a climate that has an average annual temperature above 30 degrees Celsius; will affect the yield due to the heat stress.",
      ]
    },

    {
      heading: "Optimal Humidity for Mushroom Growth",
      paragraphs: [
        "Before we start, you need to know that humidity is an important consideration for mushroom growth. The optimal level of relative humidity for most varieties is 70-80%, although some species grow at lower levels(Like Shiitake).",
        "Mushroom farms should therefore ensure that their climate pro systems are able to maintain the required humidity levels and not allow them to fall below this range.",
      ]
    },

    {
      heading: "Importance of CO₂ Level Control in Mushroom Farming",
      paragraphs: [
        "A mushroom farm is a controlled environment. The CO2 concentration in the air of a mushroom house should be maintained at 25% for optimal growth. If the CO2 level is too low, it will affect the growth of mushrooms and could reduce their shelf life. If the CO2 levels are too high, it can cause an increase in water loss from leaves.",
      ]
    },

    {
      heading: "The Need for Climate Control in Mushroom Farms",
      paragraphs: [
        "Mushrooms are sensitive to temperature, humidity, and light. They need a controlled environment to grow in. The ideal temperature for mushroom growth is around 18-25 degrees Celsius with a relative humidity of 95%. The temperature inside the growing rooms should be kept constant at 24ºC while the air exchange rate should be 1-2 times per day.",
        "To maintain these conditions, it is necessary to control climate variables such as temperature, humidity and air circulation on a farm level using HVAC systems.",
      ]
    },

    {
      heading: "Climate Pro is improving yield by maintaining optimal growing conditions.",
      paragraphs: [
        "Climate Pro is improving yield by maintaining optimal grow conditions. Climate Pro is a climate control system for indoor farming. It can help you to grow mushrooms in any climate, even in difficult climates with challenging weather conditions or high humidity. The Climate Pro system will maintain the optimal growing temperature and humidity levels so that you can achieve increased yields while maintaining the operational cost of energy.",
      ]
    },

    {
      heading: "Conclusion",
      paragraphs: [
        "To summarize, Mushroom cultivation is an expensive and time-consuming process. It requires a lot of investment in the initial phase, as well as continuous monitoring for the duration of production. The best way to ensure successful production is by maintaining optimal growing conditions throughout the entire process. This can be achieved by using a climate control system that monitors temperature and humidity levels at all times, ensuring that they don’t fluctuate beyond certain parameters. We hope this blog has helped you understand why it is important to install climate pro in your mushroom farms!",
      ]
    }
  ],

  relatedSlugs: [
    "monitoring-hatchery-temperature-humidity-kpi-hatchability"
  ]
}

];
