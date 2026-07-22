import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  MapPin,
  Wrench,
  Factory,
  Fuel,
  Wind,
  Mountain,
  Building2,
  Landmark,
  HardHat,
  Anchor,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

function InfoBox({ children, variant = "gold" }: { children: React.ReactNode; variant?: "gold" | "warn" | "save" | "blue" | "green" | "red" | "orange" }) {
  const cls =
    variant === "warn"
      ? "border-amber-500/40 bg-amber-500/5"
      : variant === "save"
        ? "border-emerald-500/40 bg-emerald-500/5"
        : variant === "blue"
          ? "border-blue-500/40 bg-blue-500/5"
          : variant === "green"
            ? "border-green-500/40 bg-green-500/5"
            : variant === "red"
              ? "border-red-500/40 bg-red-500/5"
              : variant === "orange"
                ? "border-orange-500/40 bg-orange-500/5"
                : "border-gold/30 bg-gold/5";
  return (
    <div className={`not-prose rounded-xl border ${cls} p-5 my-6 text-sm text-muted-foreground leading-relaxed`}>
      {children}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="not-prose space-y-2 my-4 pl-0 list-none">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
          <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const faqs = [
  {
    q: "What is project logistics?",
    a: "Project logistics refers to the specialized planning, engineering assessment, and transportation of oversized, overweight, or high-value cargo tied to large-scale industrial, energy, or infrastructure projects.",
  },
  {
    q: "How is project logistics different from standard freight forwarding?",
    a: "Project logistics requires route surveys, engineering assessments, and specialized heavy lift planning that standard containerized freight doesn't need, given the oversized and often schedule-critical nature of project cargo.",
  },
  {
    q: "What is a route survey and why is it necessary?",
    a: "A route survey physically verifies bridge weight limits, road widths, and clearance constraints along a planned transport path before cargo movement is booked, preventing mid-transport discoveries that a route can't actually accommodate the cargo.",
  },
  {
    q: "What industries use project logistics services in Pakistan?",
    a: "Oil and gas, power generation, renewable energy, mining, construction, manufacturing, infrastructure, and heavy engineering sectors regularly require project logistics for equipment transport.",
  },
  {
    q: "What is break bulk shipping?",
    a: "Break bulk shipping handles cargo too large for standard shipping containers, loaded and transported as individual pieces rather than within container units, requiring specialized vessel booking and port handling.",
  },
  {
    q: "How much does project logistics cost in Pakistan?",
    a: "Costs depend on cargo weight and dimensions, route distance and complexity, permit requirements, and heavy lift equipment needs. We provide a detailed quote following route survey and engineering assessment.",
  },
  {
    q: "Which ports handle project cargo in Pakistan?",
    a: "Karachi Port, Port Qasim, and Gwadar Port each support project cargo handling, with specific capabilities varying by cargo type and the port's available heavy lift infrastructure.",
  },
  {
    q: "How long does project logistics take?",
    a: "Timelines vary significantly based on cargo complexity, route distance, and permit requirements, with initial planning and permitting often taking longer than the physical transport itself.",
  },
  {
    q: "Do you provide heavy lift crane services?",
    a: "Yes, we plan and coordinate heavy lift operations, including crane selection and rigging configuration, based on engineering assessment of each cargo item's specific lifting requirements.",
  },
  {
    q: "What permits are required for oversized cargo transport in Pakistan?",
    a: "Requirements vary by province and specific road authority, generally involving special movement permits for cargo exceeding standard weight or dimension limits for road transport.",
  },
  {
    q: "Can you handle project logistics for EPC contracts?",
    a: "Yes, we manage the full scope of project logistics for EPC contractors, including coordination with construction schedules and multiple staged equipment deliveries.",
  },
  {
    q: "What is the difference between project cargo and standard cargo?",
    a: "Project cargo is typically oversized, overweight, or route-critical to a construction timeline, requiring specialized transport methods, while standard cargo fits within routine containerized shipping processes.",
  },
  {
    q: "Do you provide project logistics for renewable energy projects?",
    a: "Yes, we manage specialized transport for wind turbine blades, towers, nacelles, and solar project components, addressing the unique dimensional challenges these cargo types present.",
  },
  {
    q: "Is project cargo insured during transport?",
    a: "Yes, all project cargo is covered by insurance throughout the entire transport process, from origin handling through heavy lift operations to final delivery.",
  },
  {
    q: "How far in advance should project logistics be planned?",
    a: "We recommend beginning route survey and engineering assessment as early as possible in project planning, often months ahead of the required delivery date given permit and route planning timelines.",
  },
  {
    q: "What happens if a route survey identifies a bridge or road that can't handle the cargo?",
    a: "We plan alternative routes in advance based on survey findings, avoiding the far more costly scenario of discovering route constraints after cargo transport has already begun.",
  },
  {
    q: "Do you coordinate customs clearance for internationally sourced project equipment?",
    a: "Yes, our licensed customs brokers manage import documentation and clearance for internationally manufactured project cargo arriving through Pakistani ports.",
  },
  {
    q: "Can you provide warehousing for project cargo awaiting installation?",
    a: "Yes, we coordinate secure warehousing sized appropriately for oversized cargo when project timelines require staged delivery or temporary storage between transport legs.",
  },
  {
    q: "What industries have the most demanding project logistics requirements?",
    a: "Oil and gas, power generation, and mining typically involve the heaviest and most schedule-critical project cargo, given the scale of equipment and the cost of construction delays in these sectors.",
  },
  {
    q: "How do I get started with project logistics services?",
    a: "Contact us with your project's cargo details and timeline. We'll schedule an initial planning consultation and route survey to build a detailed project logistics plan and quote.",
  },
];

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Project Logistics",
    name: "Project Logistics Pakistan | Best International Movers & Logistics",
    description:
      "End-to-end project logistics including route surveys, heavy lift planning, break bulk shipping, customs clearance, and final delivery for oversized industrial and EPC cargo.",
    url: "https://bestintlmovers.com/services/project-logistics-pakistan/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Project Logistics Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Lift Transport" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Route Survey & Engineering Assessment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Break Bulk Shipping" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oversized Cargo Transport" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "EPC Project Freight Management" } },
      ],
    },
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://bestintlmovers.com/services/" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Project Logistics Pakistan",
        item: "https://bestintlmovers.com/services/project-logistics-pakistan/",
      },
    ],
  };
}

function buildReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "Organization", name: "Best International Movers & Logistics" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Organization", name: "EPC Contractor, Power Plant Project" },
    reviewBody:
      "The route survey process caught bridge constraints a previous provider missed entirely — our transformer arrived on schedule with zero damage.",
  };
}

const serviceSeo = {
  title: "Project Logistics Pakistan — Heavy Lift, Oversized Cargo & EPC Freight",
  description:
    "End-to-end project logistics in Pakistan — heavy lift, oversized cargo, break bulk shipping & EPC freight for oil & gas, power, mining & construction. 15+ years experience.",
  keywords:
    "project logistics Pakistan, project cargo Pakistan, heavy lift logistics Pakistan, industrial logistics Pakistan, EPC logistics services, heavy equipment transportation, oversized cargo transport, break bulk shipping, route survey heavy transport, transformer transport, wind turbine transport, Karachi Port project cargo, Port Qasim heavy lift, Gwadar Port project cargo, project logistics Lahore, project logistics Islamabad, licensed heavy haulage company",
};

const processSteps = [
  {
    title: "1. Cargo Planning",
    text: "We begin by understanding the full scope of cargo involved in a project — dimensions, weight, quantity, and delivery timeline — to build a transport strategy before any booking or route work begins. For EPC projects, this often means planning around multiple shipments arriving in a specific construction sequence, not a single delivery event. Cargo planning also identifies which components will require break bulk shipping versus standard containerization.",
  },
  {
    title: "2. Route Survey",
    text: "Before any heavy or oversized cargo transport is booked, we conduct a physical route survey — verifying bridge weight limits, road widths, overhead clearances, and turning radius constraints along the entire planned transport path from port or origin to final delivery site. Our survey teams document specific pinch points along the route — narrow intersections, low overhead utility lines, or weight-restricted secondary bridges.",
  },
  {
    title: "3. Engineering Assessment",
    text: "For cargo requiring lifting or specialized handling, we conduct an engineering assessment covering the equipment's structural lifting points, center of gravity, and load distribution requirements, often coordinating directly with the equipment manufacturer's technical documentation. This assessment determines how weight will be distributed across trailer axles during road transport.",
  },
  {
    title: "4. Heavy Lift Planning",
    text: "Based on the engineering assessment, we plan the specific lifting equipment, rigging configuration, and crane capacity required for loading and unloading the cargo safely at each handling point along the route. This includes confirming crane availability and capacity at both the origin port and the final delivery site.",
  },
  {
    title: "5. Customs Clearance",
    text: "Our licensed customs brokers manage import and export documentation for project cargo, which often involves more complex HS code classification and valuation than standard commercial freight. For EPC projects involving temporary import provisions or project-specific duty exemptions, we coordinate this documentation with the project's broader commercial and legal framework.",
  },
  {
    title: "6. Warehousing",
    text: "For projects requiring staged delivery or temporary storage between transport legs, we coordinate secure warehousing sized appropriately for oversized cargo, which standard warehouse facilities often can't accommodate without specific planning.",
  },
  {
    title: "7. Container Management",
    text: "For project components that do fit within container dimensions, we manage container booking and scheduling as part of the broader project timeline, coordinating with the oversized and break bulk elements of the same project so that containerized and non-containerized shipments arrive in a coordinated sequence.",
  },
  {
    title: "8. Heavy Equipment Transport",
    text: "Using multi-axle trailers, specialized lowboy transport, and route-appropriate vehicle configurations, we move oversized and overweight cargo according to the route survey and heavy lift plan developed earlier in the process. Transport execution includes real-time coordination with any required police or traffic escort for oversized loads.",
  },
  {
    title: "9. Freight Forwarding",
    text: "For international project components, we manage freight forwarding via sea freight — including break bulk shipping for cargo too large for standard containers — coordinating vessel booking specific to the cargo's dimensions and weight. Break bulk vessel space is considerably less flexible than standard container capacity, making early booking essential.",
  },
  {
    title: "10. Final Delivery",
    text: "We coordinate final delivery to the project site, including any final-leg handling challenges specific to construction sites — unpaved access roads, temporary structures, or coordination with other contractors working on the same site. This final stage often requires close communication with the site's own project management team.",
  },
  {
    title: "11. Risk Management",
    text: "Throughout the project, we proactively monitor for risks — permit delays, weather conditions affecting heavy lift operations, or route changes due to infrastructure work — adjusting the transport plan before these risks actually affect the project's delivery schedule.",
  },
];

const ProjectLogisticsPakistan = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/services/project-logistics-pakistan/"
        canonicalUrl="https://bestintlmovers.com/services/project-logistics-pakistan/"
        ogTitle="Project Logistics Pakistan | Best International Movers & Logistics"
        ogDescription="Heavy lift and oversized cargo transportation for oil & gas, power plants, mining, and infrastructure projects across Pakistan. 15+ years experience, 100+ countries served."
        schema={[buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema(), buildReviewSchema()]}
      />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">
              ← All Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Anchor size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Project Logistics Pakistan — Heavy Lift, Oversized Cargo & EPC Freight Specialists
                </h1>
                <p className="text-muted-foreground mt-1">
                  End-to-End Project Cargo Logistics for Pakistan&apos;s Energy, Mining & Infrastructure Sectors
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Heavy Lift</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Route Survey</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Break Bulk</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">EPC Freight</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Oversized Cargo</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">100+ Countries</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={14} /> Karachi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Lahore</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Islamabad</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Rawalpindi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Faisalabad</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Gwadar</span>
            </div>

            <InfoBox variant="blue">
              <strong className="text-foreground">Quick Answer:</strong> Project logistics manages the end-to-end transportation of oversized, heavy, and high-value cargo for large-scale industrial projects — power plants, oil and gas facilities, mining operations, and infrastructure builds — covering route surveys, heavy lift planning, customs clearance, and final delivery as one coordinated engineering process. <strong className="text-foreground">Best International Movers & Logistics</strong> provides project logistics across Pakistan for EPC contractors and industrial developers, backed by 15+ years of experience, 5,000+ successful shipments, and a global network spanning 100+ countries.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Key Takeaways</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Project logistics differs from standard freight because cargo is typically oversized, overweight, or route-critical to a project's construction timeline",
                  "A route survey — checking bridge clearances, road widths, and weight limits — must happen before heavy cargo transport is ever booked",
                  "Break bulk shipping handles cargo too large for standard containers, requiring specialized vessel booking and port handling",
                  "Project logistics for EPC contracts requires coordination across engineering, customs, and multiple transport modes as a single managed timeline",
                  "Karachi Port, Port Qasim, and Gwadar Port each offer different capabilities relevant to specific project cargo types",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A standard freight shipment fits inside a container and follows a predictable booking process. Project cargo doesn&apos;t. A 200-ton transformer, a wind turbine blade longer than a highway lane, or a power plant boiler section that exceeds every standard container dimension requires an entirely different discipline — one where the transport plan has to be engineered around the cargo, not the other way around. This is what <strong className="text-foreground">project logistics</strong> actually means: managing oversized, heavy, and route-critical cargo as a coordinated engineering and logistics project, not a standard shipping transaction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Best International Movers & Logistics</strong> provides <strong className="text-foreground">project logistics services in Pakistan</strong> for EPC contractors, energy developers, mining operators, and infrastructure builders, managing more than 5,000 successful shipments across 100+ countries over 15+ years of operation. This page is built to be the most complete resource available on project logistics in Pakistan — covering the engineering process, cargo types, port infrastructure, and the specific risks that separate project cargo from standard freight.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For related heavy equipment expertise, see our{" "}
                <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link>{" "}
                and{" "}
                <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>{" "}
                — or explore our broader{" "}
                <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link>{" "}
                division for integrated freight support.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Project Logistics?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Project logistics refers to the specialized planning, engineering assessment, and transportation of oversized, overweight, or high-value cargo tied to large-scale industrial, energy, or infrastructure projects — as opposed to standard containerized freight moving through routine shipping channels. <strong className="text-foreground">Project cargo</strong> typically includes heavy machinery, power generation equipment, industrial plant components, and construction materials that exceed standard freight dimensions or weight limits, requiring specialized transport methods including break bulk shipping, heavy lift cranes, and multi-axle trailer configurations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike standard freight forwarding, project logistics requires a route survey before transport is ever booked — verifying that bridges, roads, and handling infrastructure along the entire route can physically accommodate the cargo&apos;s dimensions and weight. A single unchecked bridge weight limit or road width constraint can derail an entire project timeline if discovered after cargo has already departed, which is why this upfront engineering work is treated as non-negotiable in professional project logistics.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Project Logistics Is Critical</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For EPC contractors and industrial developers, project logistics failures don&apos;t just delay a shipment — they delay an entire construction schedule, often with contractual penalties attached. Project logistics matters because it addresses risks that standard freight simply doesn&apos;t face:
              </p>
              <CheckList
                items={[
                  "Route Feasibility — Confirming bridges, roads, and handling points along the entire transport route can physically accommodate the cargo before committing to a transport plan",
                  "Schedule-Critical Delivery — Project cargo is often tied to a specific construction milestone, meaning a delayed delivery can cascade into idle labor, missed contractual deadlines, and significant cost overruns",
                  "Specialized Handling Requirements — Heavy lift cranes, multi-axle trailers, and break bulk vessel booking require expertise standard freight forwarders typically don't maintain",
                  "Regulatory and Permit Complexity — Oversized road transport requires specific government permits and route approvals that vary by province and road authority",
                  "Engineering Coordination — Project cargo often requires structural engineering input to confirm lifting points, load distribution, and handling procedures specific to the equipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Fuel, title: "Oil & Gas", text: "Heavy lift and oversized transport for refinery components, pipeline equipment, and drilling machinery, coordinated around the tight schedules typical of energy sector construction projects." },
                  { icon: Factory, title: "Power Plants", text: "Project logistics for turbines, generators, transformers, and boiler components — exceptionally heavy, often single-piece critical equipment that power generation projects depend on." },
                  { icon: Wind, title: "Renewable Energy", text: "Specialized transport for wind turbine blades, towers, and nacelles, along with solar project components, addressing unique dimensional challenges on Pakistan's road network." },
                  { icon: Mountain, title: "Mining", text: "Heavy equipment transport for mining machinery and processing plant components, often requiring transport to remote sites with limited existing road infrastructure." },
                  { icon: HardHat, title: "Construction", text: "Project cargo logistics for major construction equipment and prefabricated structural components tied to large-scale building and infrastructure projects." },
                  { icon: Wrench, title: "Manufacturing", text: "Transport of large-scale production equipment and industrial plant machinery for manufacturing facility construction or expansion projects." },
                  { icon: Building2, title: "Infrastructure", text: "Logistics support for bridge components, transportation infrastructure equipment, and large-scale public works project cargo." },
                  { icon: Landmark, title: "Government Projects", text: "Project logistics for public sector infrastructure and industrial development projects, managed with the documentation rigor government contracts typically require." },
                  { icon: Anchor, title: "Heavy Engineering", text: "Transport for large fabricated steel structures, industrial vessels, and heavy engineering project components requiring specialized lifting and load-securing expertise." },
                ].map((industry) => (
                  <div key={industry.title} className="p-4 bg-navy-mid/20 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <industry.icon size={18} className="text-gold" />
                      {industry.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{industry.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our End-to-End Project Logistics Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Project logistics is an eleven-stage coordinated process, where each stage&apos;s output directly informs the next. Skipping or rushing any single stage is where most project cargo delays and cost overruns originate.
              </p>
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Cargo We Handle</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Heavy Machinery — Industrial machinery and production equipment requiring specialized rigging and multi-axle transport",
                  "Transformers — Electrical transformers, among the heaviest single-piece cargo typical in power infrastructure projects",
                  "Generators — Industrial and power generation generators requiring reinforced transport and careful handling",
                  "Industrial Plants — Modular and prefabricated industrial plant components requiring coordinated multi-shipment logistics",
                  "Wind Turbines — Turbine blades, towers, and nacelles presenting unique dimensional transport challenges",
                  "Steel Structures — Large fabricated steel components for construction and heavy engineering projects",
                  "Factory Equipment — Production line equipment and manufacturing machinery for facility construction or expansion",
                  "Construction Equipment — Heavy construction machinery and equipment moving between project sites or arriving from international suppliers",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For facility-level moves involving production equipment, see our{" "}
                <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link>{" "}
                and{" "}
                <Link to="/services/factory-relocation-pakistan/" className="text-gold hover:underline">Factory Relocation Pakistan</Link>{" "}
                services. For protective packaging of sensitive components, explore{" "}
                <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of Choosing Best International Movers</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven, specific track record in project logistics and heavy lift transport, not general freight forwarding extended to occasional large shipments",
                  "5,000+ Successful Shipments — Substantial completed project cargo volume across Pakistan's energy, mining, and infrastructure sectors",
                  "100+ Countries Served — A genuinely global freight network supporting internationally sourced project equipment",
                  "Licensed Logistics Company — Fully licensed for both domestic heavy haulage and international freight forwarding",
                  "Project Cargo Specialists — Dedicated project logistics coordinators, not general freight staff managing oversized shipments as an exception",
                  "Heavy Lift Experts — In-house engineering assessment capability for lifting plans, rigging configuration, and load distribution",
                  "Door-to-Door Logistics — Complete project cargo management from international origin or Pakistani port through to final project site delivery",
                  "24/7 Support — Continuous availability for time-critical project schedules where delays carry real contractual and financial consequences",
                  "Customs Clearance Experts — Licensed brokers experienced specifically in the complex documentation project cargo requires",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Project Timeline</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Initial Planning (2-4 weeks) — Cargo planning, route survey, and engineering assessment before any transport is booked",
                  "Permit and Documentation (2-6 weeks) — Securing oversized load permits, customs documentation, and any required government approvals",
                  "Transport Execution (Variable) — Actual transport duration depends on distance, route complexity, and number of heavy lift operations required",
                  "Final Delivery and Installation Support (1-2 weeks) — Final site delivery and coordination with installation contractors at the project site",
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-4">
                For EPC contracts with fixed construction milestones, we work backward from the required on-site delivery date to establish realistic booking and permit timelines, rather than starting the process too late to realistically meet the project&apos;s schedule.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Safety Standards</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Project logistics carries genuine safety risk given the weight and dimensions involved, and our operations follow documented safety protocols at every stage — certified rigging equipment and trained lift operators, pre-lift load calculations verified against equipment specifications, exclusion zones maintained during active lifting operations, and route surveys specifically checking for infrastructure weight limits before transport begins.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every lift operation involving cargo above a certain weight threshold requires a documented lift plan reviewed before equipment is ever attached to the cargo, not an informal assessment made on-site in the moment. Road transport safety for oversized loads involves coordinated escort vehicles, clearly communicated route plans shared with local traffic authorities where required, and contingency procedures for unexpected road conditions encountered during transit.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Insurance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Every project cargo shipment we manage is covered by insurance against loss or damage throughout the entire transport process — from origin handling through heavy lift operations to final site delivery — reflecting the genuinely high replacement cost and schedule impact associated with damaged project cargo. We work with clients to confirm coverage levels appropriate to each shipment&apos;s actual risk profile rather than applying a single standard policy regardless of cargo value or project criticality.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Project Planning Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Confirm full cargo inventory, dimensions, and weight for the entire project scope",
                  "Schedule a route survey before committing to any transport booking",
                  "Confirm engineering documentation for lifting points and load distribution",
                  "Identify permit requirements for the specific route and provincial jurisdictions involved",
                  "Build realistic timeline buffers around permit approval, which frequently takes longer than physical transport",
                  "Confirm insurance coverage specific to project cargo value and risk profile",
                  "Coordinate delivery scheduling with on-site construction milestones",
                  "Establish a single point of contact managing the full project logistics scope",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Booking Transport Before a Route Survey — Committing to a transport date without verifying bridge, road, and clearance constraints along the actual route",
                  "Underestimating Permit Timelines — Assuming oversized load permits will be approved quickly, when provincial approval processes can take considerably longer than the physical transport itself",
                  "Treating Project Cargo Like Standard Freight — Using general freight forwarders without dedicated heavy lift and route survey expertise for cargo that genuinely requires specialized handling",
                  "Skipping Engineering Assessment — Moving heavy or awkwardly shaped equipment without confirming structural lifting points, risking equipment damage during loading or unloading",
                  "Poor Coordination with Construction Schedules — Booking transport without close coordination with the project's actual construction milestones",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Commission a route survey as early as possible in project planning, ideally before finalizing equipment sourcing decisions that assume a specific transport route",
                  "Build permit approval time into your project schedule as a distinct, often lengthy variable, not an assumed quick formality",
                  "Request engineering documentation from equipment manufacturers early, since lifting point and load distribution data is often needed well before the equipment itself is ready to ship",
                  "Ask any project logistics provider for references specific to your industry and cargo type, not general freight forwarding experience",
                  "Build in schedule buffers around heavy lift operations, since weather and site conditions can affect lifting windows more than standard freight transport",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Case Study: Transformer Delivery for Power Plant Project, Port Qasim to Punjab
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                An EPC contractor building a power generation facility in Punjab needed to import and transport a large power transformer — among the heaviest single-piece components in the entire project — from international manufacture through Port Qasim to the project site, with the transformer&apos;s arrival tied directly to a specific construction milestone in the contractor&apos;s overall build schedule. The contractor had experienced a costly delay on a previous project when a different logistics provider discovered a route constraint only after the transformer was already partway through transport.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team began with a route survey covering the entire path from Port Qasim to the project site, identifying two bridges along the most direct route with weight limits below the transformer&apos;s actual weight once loaded onto transport trailers. Rather than discovering this constraint after booking transport, the survey allowed us to plan an alternative route in advance, adding some distance but avoiding a mid-transport crisis that would have required unloading and rerouting a partially transported, extremely heavy piece of equipment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We coordinated customs clearance at Port Qasim in parallel with securing the necessary oversized load permits for the alternative route, timing both processes to complete before the transformer&apos;s vessel arrival to avoid unnecessary port storage costs. Heavy lift planning included engineering assessment of the transformer&apos;s specific lifting points, confirmed against the manufacturer&apos;s technical documentation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The transformer arrived at the project site within the contractor&apos;s required delivery window, with no damage and no schedule impact to the broader construction timeline. The EPC contractor has since engaged us for the project&apos;s remaining major equipment deliveries, citing the route survey process specifically as the difference between this delivery and a previous project experience where a competitor&apos;s lack of route planning caused a multi-week delay.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Project logistics is where the gap between an experienced specialist and a general freight provider becomes immediately visible — not in a brochure, but in whether a 200-ton transformer actually reaches a power plant site on schedule, undamaged, and without a mid-route discovery that a bridge along the way can&apos;t bear its weight. This is engineering-led logistics, where route surveys, lifting assessments, and permit coordination all have to happen correctly before the first truck ever moves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built its project logistics practice around exactly that discipline — 15+ years of heavy lift and oversized cargo experience, licensed customs brokerage, and dedicated project coordinators who treat every shipment as the engineering problem it actually is. For deeper background on heavy equipment moves, read our{" "}
                <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Heavy Machinery Relocation</Link>{" "}
                and{" "}
                <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link>.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Project Logistics Consultation Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re planning a single heavy lift shipment or managing the full equipment logistics for an EPC project, our team is ready to build a route survey, engineering assessment, and transport plan around your project&apos;s actual requirements. Contact us today for a <strong className="text-foreground">free consultation and project logistics assessment</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+923009130211" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
                  <Phone size={18} />
                  0300-9130211
                </a>
                <a href="mailto:info@bestintlmovers.com" className="inline-flex items-center justify-center gap-2 bg-navy-mid text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid/80 transition-colors">
                  <FileText size={18} />
                  info@bestintlmovers.com
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Related Services & Resources</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link>
                <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link>
                <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>
                <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link>
                <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>
                <Link to="/services/international-moving-services/" className="text-gold hover:underline">International Moving Services</Link>
                <Link to="/routes/pakistan-to-china/" className="text-gold hover:underline">Pakistan to China Routes</Link>
                <Link to="/air-freight-islamabad/" className="text-gold hover:underline">Air Freight Islamabad</Link>
                <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link>
                <Link to="/contact" className="text-gold hover:underline">Get a Free Quote</Link>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Project Logistics</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={faq.q} className={i < faqs.length - 1 ? "border-b border-border pb-6" : ""}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {i + 1}. {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg">
                Request Free Project Logistics Consultation
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectLogisticsPakistan;
