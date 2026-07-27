import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  MapPin,
  Cog,
  Factory,
  Fuel,
  Zap,
  Wrench,
  HardHat,
  Mountain,
  Car,
  FlaskConical,
  Utensils,
  Plane,
  Ship,
  Truck,
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

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-navy-mid/70 text-foreground">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left p-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`p-4 ${j === 0 ? "font-medium text-foreground" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const faqs = [
  {
    q: "How much do industrial packing services cost?",
    a: "Costs depend on equipment weight, dimensions, calibration sensitivity, corrosion risk, and destination. We provide a free, itemized quote based on your specific equipment.",
  },
  {
    q: "How is heavy machinery packed for shipping?",
    a: "Heavy machinery is packed following an engineering assessment of lifting points and weight distribution, using reinforced crating and vibration-isolated cushioning matched to the machine's specific structure.",
  },
  {
    q: "Do you provide packing services for factory relocation?",
    a: "Yes, we provide industrial packing integrated with our broader factory and industrial relocation services for businesses moving or expanding production facilities.",
  },
  {
    q: "How is industrial equipment shipping different from standard cargo shipping?",
    a: "Industrial equipment shipping requires engineering assessment, precision vibration isolation, and often corrosion protection that standard commercial cargo shipping doesn't need.",
  },
  {
    q: "What is included in export packing for industrial equipment?",
    a: "Export packing includes engineering assessment, custom crate design, ISPM 15 certified materials, internal bracing and cushioning, and export documentation preparation.",
  },
  {
    q: "Do you build custom crates for industrial equipment?",
    a: "Yes, our custom crating services design crates specific to each piece of equipment's dimensions, weight, and fragility profile, detailed on our dedicated Custom Crating Services page.",
  },
  {
    q: "What are heat-treated wooden crates and why are they required?",
    a: "Heat-treated wooden crates meet ISPM 15 international phytosanitary standards, mandatory for wooden packaging material used in most international shipments.",
  },
  {
    q: "What is ISPM 15 compliance?",
    a: "ISPM 15 is the international standard requiring heat treatment of wooden packaging material to eliminate pest risk, verified through certification stamps checked at customs.",
  },
  {
    q: "What is industrial logistics and how does it relate to packing?",
    a: "Industrial logistics covers the broader transport, customs, and delivery process that industrial packing feeds into, with packaging and freight ideally coordinated as one process for schedule-critical equipment.",
  },
  {
    q: "Is industrial cargo insured during shipping?",
    a: "Yes, every industrial shipment we pack is covered by insurance against loss or damage throughout the entire transport process.",
  },
  {
    q: "What is container stuffing and why does it matter for industrial equipment?",
    a: "Container stuffing is the process of loading packed equipment into shipping containers with proper weight distribution, critical for both cargo safety and carrier loading compliance.",
  },
  {
    q: "What is vacuum packaging used for in industrial packing?",
    a: "Vacuum packaging removes air exposure for components particularly vulnerable to corrosion or oxidation, providing an additional protective layer beyond standard crating.",
  },
  {
    q: "What is moisture protection and when is it needed?",
    a: "Moisture protection involves barrier film and sealing systems preventing humidity damage, particularly important for extended sea freight transit through humid climate zones.",
  },
  {
    q: "What packaging materials are used for industrial equipment?",
    a: "We use heat-treated wooden crates, steel reinforcement, foam cushioning, VCI protection, vacuum packaging, moisture barriers, and industrial pallets, selected based on equipment type.",
  },
  {
    q: "How long does industrial packing take?",
    a: "Timelines vary based on equipment complexity, from a few days for standard machinery to longer for large, multi-component, or highly engineered packing projects.",
  },
  {
    q: "Do you handle international shipping for industrial equipment?",
    a: "Yes, we manage international industrial equipment shipping including ISPM 15 certified packing, export documentation, and freight coordination to over 100 countries.",
  },
  {
    q: "Do you provide door-to-door service for industrial shipments?",
    a: "Yes, our door-to-door logistics manage the complete industrial shipment journey from your facility to final delivery, without handoffs between vendors.",
  },
  {
    q: "How does industrial cargo handling differ from standard cargo handling?",
    a: "Industrial cargo handling requires certified rigging equipment, load calculations specific to each piece of equipment, and handling procedures matched to weight and fragility that standard cargo handling doesn't require.",
  },
  {
    q: "How do I book industrial packing services?",
    a: "Contact us via phone, WhatsApp, or our online quote form with your equipment details and shipping destination. We'll schedule an engineering assessment and provide a detailed quote.",
  },
  {
    q: "Do you offer emergency or urgent industrial packing services?",
    a: "Yes, our team accommodates urgent industrial packing needs, coordinating expedited engineering assessment and packing where required, subject to material and crate availability.",
  },
];

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
    logo: "https://bestintlmovers.com/logo.png",
    foundingDate: "2009",
    sameAs: [
      "https://www.facebook.com/bestintlmovers",
      "https://www.linkedin.com/company/bestintlmovers",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-300-9130211",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };
}

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com/industrial-packing-services/",
    telephone: "+92-300-9130211",
    priceRange: "$$$",
    address: { "@type": "PostalAddress", addressCountry: "PK" },
    areaServed: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Sialkot", "Multan", "Peshawar", "Quetta"],
    openingHours: "Mo-Su 00:00-23:59",
  };
}

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Industrial Packing Services",
    name: "Industrial Packing Services | Best International Movers & Logistics",
    description:
      "Engineering-led industrial packing services including custom crating, VCI protection, and ISPM 15 certified wooden crates for heavy machinery, generators, transformers, and factory equipment.",
    url: "https://bestintlmovers.com/industrial-packing-services/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Packing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Machinery Packing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generator & Transformer Packing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "VCI & Corrosion Protection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ISPM 15 Certified Industrial Crating" } },
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Industrial Packing Services",
        item: "https://bestintlmovers.com/industrial-packing-services/",
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
    author: { "@type": "Organization", name: "Generator Manufacturer, Karachi" },
    reviewBody:
      "The shipment cleared Pakistani export customs with proper ISPM 15 certification and arrived at the East African project site with every generator passing commissioning inspection without alignment issues.",
  };
}

const serviceSeo = {
  title: "Industrial Packing Services — Machinery, Generators & Equipment | Pakistan",
  description:
    "Professional industrial packing services in Pakistan — heavy machinery, generators, transformers & factory equipment. ISPM 15 certified crates, 15+ years experience. Free quote.",
  keywords:
    "industrial packing services, industrial packaging services, industrial export packing, heavy machinery packing, industrial equipment packing, factory equipment packing, industrial crating services, export industrial packaging, industrial cargo packing, industrial logistics Pakistan, protective industrial packaging, heavy equipment packaging, machine packing services, industrial wooden crates, industrial shipping crates, generator packing services, transformer packing services, VCI corrosion protection, ISPM 15 industrial crates, steel reinforced crating, industrial packing Karachi, industrial packing Lahore, industrial packing Islamabad",
};

const processSteps = [
  {
    title: "1. Cargo Inspection",
    text: "We physically inspect the equipment — dimensions, weight, existing condition, and any manufacturer handling documentation — before any packaging design work begins.",
  },
  {
    title: "2. Engineering Assessment",
    text: "Our team conducts an engineering assessment covering the equipment's structural lifting points, center of gravity, and vibration sensitivity, often coordinating directly with the equipment manufacturer's technical documentation to confirm handling requirements.",
  },
  {
    title: "3. Crating Design",
    text: "Based on the engineering assessment, we design the crate's structural configuration — panel layout, internal bracing points, and reinforcement requirements — specific to the equipment's dimensions and the stresses it will face during transit.",
  },
  {
    title: "4. Packing",
    text: "The equipment is packed according to the design specification, with internal bracing, cushioning, and corrosion protection materials positioned exactly as engineered, not improvised during the packing process itself.",
  },
  {
    title: "5. Loading",
    text: "Packed equipment is loaded using lifting equipment matched to its weight and dimensions, following certified rigging procedures for heavier and more structurally complex items.",
  },
  {
    title: "6. Container Stuffing",
    text: "For containerized shipments, we manage container stuffing with weight distribution planning that keeps the container balanced and complies with carrier loading requirements.",
  },
  {
    title: "7. Transportation",
    text: "Packed and loaded equipment is transported via road, sea, or air freight according to the shipment's requirements, with our broader logistics network managing the journey to final destination.",
  },
];

const equipmentTypes = [
  {
    title: "Heavy Machinery",
    text: "Production and manufacturing machinery requiring structural crating engineered around each machine's specific weight distribution.",
  },
  {
    title: "Generators",
    text: "Industrial and power generation generators requiring reinforced packaging and careful handling given their weight and internal precision components.",
  },
  {
    title: "Transformers",
    text: "Electrical transformers, among the heaviest and most calibration-sensitive industrial cargo, requiring precise load distribution and vibration isolation.",
  },
  {
    title: "Turbines",
    text: "Turbine components requiring precision packing given their extreme sensitivity to alignment shifts during transit.",
  },
  {
    title: "Boilers",
    text: "Industrial boilers requiring structural crating suited to their size, weight, and internal component protection needs.",
  },
  {
    title: "Production Lines",
    text: "Modular production line equipment requiring coordinated multi-component packing tied to installation sequencing at the destination.",
  },
  {
    title: "Industrial Panels",
    text: "Control panels and electrical panel systems requiring moisture and shock protection for sensitive internal wiring and components.",
  },
  {
    title: "Electrical Equipment",
    text: "General industrial electrical equipment requiring anti-static and moisture-conscious packaging.",
  },
  {
    title: "Compressors",
    text: "Industrial compressors requiring vibration-isolated packing given their internal mechanical precision.",
  },
  {
    title: "Pumps",
    text: "Industrial pumps requiring protection for both external housing and internal precision components.",
  },
  {
    title: "Industrial Valves",
    text: "Precision valve components requiring careful individual packing given their calibration sensitivity.",
  },
  {
    title: "Factory Machinery",
    text: "General factory equipment and machinery requiring packaging matched to each specific machine's weight class and fragility profile.",
  },
];

const IndustrialPackingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/industrial-packing-services/"
        canonicalUrl="https://bestintlmovers.com/industrial-packing-services/"
        ogTitle="Industrial Packing Services | Best International Movers & Logistics"
        ogDescription="Engineering-led industrial packing for heavy machinery, generators, transformers, and factory equipment. ISPM 15 certified, 15+ years experience, nationwide B2B service."
        schema={[
          buildOrganizationSchema(),
          buildLocalBusinessSchema(),
          buildServiceSchema(),
          buildFAQSchema(),
          buildBreadcrumbSchema(),
          buildReviewSchema(),
        ]}
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
                <Cog size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Industrial Packing Services — Engineering-Led Protection for Heavy Machinery & Equipment
                </h1>
                <p className="text-muted-foreground mt-1">
                  Machinery, Generators, Transformers & Factory Equipment | ISPM 15 Certified Crates
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Heavy Machinery</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Generators</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Transformers</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">VCI Protection</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">ISPM 15</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Steel Crates</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={14} /> Karachi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Lahore</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Islamabad</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Faisalabad</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Sialkot</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Multan</span>
            </div>

            <InfoBox variant="blue">
              <strong className="text-foreground">Hero Summary:</strong> Industrial equipment doesn&apos;t fail in shipping the way ordinary cargo does — a generator that arrives with hairline stress fractures in its housing, a transformer with internal alignment shifted by unmanaged vibration, or a production line component corroded from inadequate moisture protection can all look intact from the outside while carrying damage that only surfaces once the equipment is installed and running. <strong className="text-foreground">Best International Movers & Logistics</strong> provides <strong className="text-foreground">industrial packing services</strong> engineered specifically around the weight, precision, and corrosion risk profile of heavy machinery and industrial equipment — not standard commercial packaging scaled up. With 15+ years of experience and 5,000+ successful shipments, our industrial packing engineers protect equipment for manufacturing plants, oil and gas operations, power plants, and heavy engineering companies across Pakistan.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Industrial equipment packing is fundamentally an engineering problem, not a packaging one. A generator, transformer, or production line component carries weight, precision tolerances, and corrosion vulnerabilities that consumer or commercial cargo simply doesn&apos;t have to account for. Packing this equipment incorrectly doesn&apos;t just risk cosmetic damage — it risks internal component misalignment, bearing damage from unmanaged vibration, and corrosion that can take months to manifest as an operational failure long after the equipment has already been installed and commissioned.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> provides <strong className="text-foreground">industrial packing services</strong> for manufacturing plants, factories, oil and gas operations, power plants, engineering companies, and heavy industry across Pakistan, backed by more than 15 years of experience and 5,000+ successful industrial shipments. This page covers exactly how professional industrial packing works — the engineering assessment process, materials, compliance standards, and the specific techniques different categories of industrial equipment require. Explore our broader <Link to="/packaging-logistics-solutions/" className="text-gold hover:underline">Packaging &amp; Logistics Solutions</Link> for end-to-end export support.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Are Industrial Packing Services?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Industrial packing services involve the engineering assessment, material selection, and construction of protective packaging specifically designed for heavy machinery, industrial equipment, and factory components — accounting for weight distribution, vibration sensitivity, precision tolerances, and corrosion risk in ways standard commercial packaging doesn&apos;t address. This includes heat-treated wooden crating, steel reinforcement for exceptionally heavy loads, vacuum packaging and VCI (volatile corrosion inhibitor) protection for metal components, and moisture barrier systems designed for extended transit periods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike general export packing, <strong className="text-foreground">industrial packing</strong> typically requires an engineering assessment of the equipment&apos;s structural lifting points and internal weak points before any packaging decisions are made — since industrial equipment often has specific handling requirements documented by the manufacturer that generic packaging approaches would violate without ever realizing it.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Industrial Packing Is Critical</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "High Replacement Cost and Lead Time — Industrial equipment often has manufacturing lead times measured in months, meaning damage during shipping doesn't just cost the item's value — it can delay an entire production line or project timeline waiting for replacement",
                  "Hidden Damage Risk — Unlike visibly damaged cargo, industrial equipment can suffer internal misalignment, bearing damage, or corrosion that isn't apparent until the equipment is installed and operated, sometimes long after the shipment has been accepted as undamaged",
                  "Weight and Structural Complexity — Heavy machinery combines significant weight with precision internal components, requiring packaging that protects both the equipment's structural integrity during handling and its internal calibration during transit",
                  "Corrosion Exposure — Metal components on extended sea freight routes face genuine corrosion risk from humidity and salt air exposure, requiring specific VCI and moisture barrier protection that standard packaging doesn't provide",
                  "Regulatory and Compliance Requirements — International shipments of industrial equipment require ISPM 15 certified wooden packaging and often additional documentation specific to the equipment category, adding compliance complexity beyond standard export packing",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Factory, title: "Manufacturing Plants", text: "Production equipment, machinery components, and finished industrial products requiring protection during facility expansion, relocation, or export shipment." },
                  { icon: Factory, title: "Factories", text: "Factory equipment and machinery moving between production sites or shipped to international buyers, coordinated around minimizing production downtime during equipment transitions.", link: "/services/factory-relocation-pakistan/" },
                  { icon: Fuel, title: "Oil & Gas", text: "Heavy industrial equipment and components for energy sector operations, often requiring the reinforced crating and corrosion protection this equipment's operating environment demands." },
                  { icon: Zap, title: "Power Plants", text: "Generators, transformers, and turbine components requiring precision packing given their combination of extreme weight and internal calibration sensitivity." },
                  { icon: Wrench, title: "Engineering Companies", text: "Custom fabricated equipment and engineering project components requiring packaging engineered around each project's specific, often one-of-a-kind machinery." },
                  { icon: HardHat, title: "Construction Industry", text: "Construction equipment and machinery components moving between project sites or arriving from international suppliers." },
                  { icon: Mountain, title: "Mining Industry", text: "Mining equipment and processing components requiring durable, reinforced packaging suited to the demanding handling conditions typical of mining operations and remote site delivery." },
                  { icon: Car, title: "Automotive Industry", text: "Automotive manufacturing equipment and precision machinery components requiring calibration-protective packing." },
                  { icon: FlaskConical, title: "Pharmaceutical Industry", text: "Pharmaceutical manufacturing equipment requiring both structural protection and the documentation rigor pharmaceutical industry compliance demands." },
                  { icon: Utensils, title: "Food Processing Industry", text: "Food processing machinery and equipment requiring packaging that meets hygienic handling standards alongside standard structural protection." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <item.icon size={20} className="text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.text}
                        {"link" in item && item.link ? (
                          <>
                            {" "}
                            <Link to={item.link} className="text-gold hover:underline">Learn more</Link>
                          </>
                        ) : null}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                Related relocation support: <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link>
                {" · "}
                <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link>
                {" · "}
                <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link>
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Equipment We Pack</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {equipmentTypes.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Materials We Use</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Heat Treated Wooden Crates — ISPM 15 certified timber crating, mandatory for international shipments and providing the structural baseline for most industrial packing projects",
                  "Custom Wooden Crates — Engineered crates sized and structured specifically to each piece of equipment's dimensions and weight",
                  "Steel Reinforced Crates — Additional structural reinforcement for exceptionally heavy or high-value equipment exceeding standard timber crate capacity",
                  "Foam Protection — Custom-cut cushioning positioned at calculated support points to protect equipment from shock and vibration during transit",
                  "Moisture Barrier Packaging — Protective film and sealing systems preventing humidity damage during extended sea freight transit",
                  "Vacuum Packaging — Sealed packaging removing air exposure for components particularly vulnerable to corrosion or oxidation",
                  "VCI Protection — Volatile corrosion inhibitor materials that actively protect metal surfaces from corrosion throughout the shipping journey, particularly critical for components with precision machined surfaces",
                  "Shock Absorption Materials — Vibration-dampening materials engineered around each equipment type's specific sensitivity profile",
                  "Industrial Pallets — Load-rated pallets supporting equipment during handling, storage, and container loading",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For crate engineering details, see our <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link> and <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link> pages.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Packing Standards</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h3 className="text-lg font-semibold text-foreground mb-2">ISPM 15 Compliance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                All wooden crating used in international industrial shipments is heat-treated and certified to ISPM 15 standards, the internationally recognized phytosanitary requirement for wood packaging material, verified before construction begins on every project. For a complete breakdown of what ISPM 15 compliance involves, see our <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link> page.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Export Compliance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Beyond ISPM 15, industrial equipment exports often require additional documentation specific to the equipment category — commercial invoices reflecting accurate technical specifications, certificates of origin, and any regulatory certifications the destination country requires for industrial machinery imports.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cargo Protection Standards</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Our cargo protection standards apply category-specific protocols depending on equipment type — VCI protection for precision metal components, vibration isolation for calibration-sensitive machinery, and moisture barriers calibrated to the specific shipping route&apos;s climate exposure.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every industrial packing project undergoes documented quality assurance inspection before sealing, confirming structural integrity, correct internal bracing, and compliance documentation — a distinct, verified checkpoint rather than an informal check before a crate is closed.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Packing Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Insurance Coverage</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Every industrial shipment we pack is covered by insurance against loss or damage throughout the entire transport process, reflecting both the high replacement cost and the often lengthy manufacturing lead times associated with industrial equipment. Learn more about our <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">Cargo Insurance Services</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Project Logistics Support</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                For industrial equipment tied to larger construction or infrastructure projects — particularly oversized or exceptionally heavy machinery requiring route surveys and heavy lift planning — our industrial packing integrates directly with our <Link to="/services/project-logistics-pakistan/" className="text-gold hover:underline">Project Logistics Pakistan</Link> services, ensuring packaging decisions and transport planning are coordinated as one process rather than handled by disconnected teams.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Plane size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold text-foreground">Air Freight</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For urgent or smaller industrial components, air freight packing balances structural protection against the weight sensitivity of air freight pricing, using the lightest packaging configuration that still meets the equipment&apos;s actual protection requirements.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Ship size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold text-foreground">Sea Freight</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For larger industrial equipment and bulk shipments, sea freight packing requires more robust moisture and corrosion protection given the extended transit time and multiple port handling points involved.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Truck size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold text-foreground">Road Transport</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For domestic industrial equipment transport between Pakistani cities, packing accounts for road conditions and the specific vibration profile of road haulage, often requiring different cushioning calibration than sea or air freight.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Coordinate freight with our <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>, <Link to="/services/sea-freight-services/" className="text-gold hover:underline">Sea Freight Services</Link>, and <Link to="/services/air-freight/" className="text-gold hover:underline">Air Freight Services</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cities We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide industrial packing services across Pakistan&apos;s major industrial hubs, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and Quetta, with export coordination through Karachi Port, Port Qasim, Gwadar Port, and Islamabad International Airport.
              </p>
              <p className="text-muted-foreground text-sm">
                Regional cargo support: <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link>
                {" · "}
                <Link to="/locations/cargo-services-sialkot/" className="text-gold hover:underline">Cargo Services Sialkot</Link>
                {" · "}
                <Link to="/services/warehouse-relocation/" className="text-gold hover:underline">Warehouse Relocation</Link>
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Destinations</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our industrial packing and logistics network supports equipment shipments to over 100 countries, with particular experience serving Middle Eastern, European, and Asian markets where Pakistani manufacturers and industrial exporters maintain established trade relationships.
              </p>
              <p className="text-muted-foreground text-sm">
                See also <Link to="/routes/pakistan-to-china/" className="text-gold hover:underline">Pakistan to China</Link>, <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link>, and <Link to="/glass-packing-services/" className="text-gold hover:underline">Glass Packing Services</Link> for related fragile cargo packing.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Pricing Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">Industrial packing costs depend on several variables:</p>
              <CheckList
                items={[
                  "Equipment weight and dimensions — Heavier, larger equipment requires more substantial crating and handling equipment",
                  "Fragility and precision requirements — Calibration-sensitive equipment requires more extensive vibration isolation and internal bracing",
                  "Corrosion risk — Metal components on extended sea freight routes may require VCI protection and vacuum packaging, adding to material cost",
                  "Destination — International shipments require ISPM 15 certified crating and additional export documentation",
                  "Freight mode — Air, sea, or road transport each involve different packing considerations and cost structures",
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-4">
                We provide a <strong className="text-foreground">free, itemized quote</strong> for every industrial packing project, reflecting your specific equipment and shipping requirements.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Equipment vs. Packing Method</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Equipment Type", "Primary Risk", "Recommended Packing Method"]}
                rows={[
                  ["Generators", "Weight distribution, internal component shift", "Reinforced crate, vibration isolation"],
                  ["Transformers", "Calibration alignment, weight concentration", "Steel-reinforced crate, precise load distribution"],
                  ["Turbines", "Alignment sensitivity", "Custom vibration-isolated crating"],
                  ["Production Line Components", "Multi-part coordination, precision alignment", "Modular crating with sequenced labeling"],
                  ["Electrical Panels", "Moisture, internal wiring damage", "Moisture barrier, shock-absorbing crate"],
                  ["Pumps & Compressors", "Internal mechanical precision", "Vibration-isolated cushioning, VCI protection"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Materials Comparison</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Material", "Purpose", "Best Suited For"]}
                rows={[
                  ["Heat-Treated Wooden Crates", "Structural protection, ISPM 15 compliance", "All international industrial shipments"],
                  ["Steel Reinforced Crates", "Maximum structural strength", "Exceptionally heavy or high-value equipment"],
                  ["VCI Protection", "Corrosion prevention", "Precision metal components, extended transit"],
                  ["Vacuum Packaging", "Oxidation and moisture prevention", "Sensitive components requiring sealed protection"],
                  ["Foam Cushioning", "Shock and vibration absorption", "Calibration-sensitive machinery"],
                  ["Industrial Pallets", "Load-bearing support", "Handling, storage, and container loading"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Air vs. Sea vs. Road Transport</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Air Freight", "Sea Freight", "Road Transport"]}
                rows={[
                  ["Typical transit time", "Days", "Weeks", "Hours to days (domestic)"],
                  ["Best for", "Urgent, smaller components", "Bulk or heavy industrial equipment", "Domestic city-to-city equipment transport"],
                  ["Packing emphasis", "Lightweight but structurally sound", "Corrosion and moisture protection", "Road-condition-calibrated cushioning"],
                  ["Relative cost", "Higher", "Lower for bulk volume", "Moderate"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Packing Cost Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Impact on Cost"]}
                rows={[
                  ["Equipment weight", "Heavier equipment requires reinforced crating, increasing material and labor cost"],
                  ["Calibration sensitivity", "Precision equipment requires more extensive internal bracing and cushioning"],
                  ["Corrosion risk", "Extended sea freight for metal components may require VCI and vacuum packaging"],
                  ["International vs. domestic", "International shipments require ISPM 15 certified materials and documentation"],
                  ["Multi-component shipments", "Production line and modular equipment require sequenced, coordinated packing"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Crates Comparison</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Crate Type", "Structural Capacity", "Best Suited For"]}
                rows={[
                  ["Standard Wooden Crate", "Moderate", "General factory equipment, lighter machinery"],
                  ["Steel-Reinforced Crate", "High", "Heavy generators, transformers, oversized equipment"],
                  ["Skid-Based Crate", "Moderate-High", "Equipment requiring forklift mounting and access"],
                  ["VCI-Lined Crate", "Moderate", "Precision metal components with corrosion risk"],
                  ["Modular Multi-Crate System", "Variable", "Production lines and multi-component shipments"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <InfoBox variant="save">
              <h3 className="text-foreground font-semibold mb-2">Case Study: Generator Manufacturer, Karachi to East Africa</h3>
              <p className="mb-3">
                A Karachi-based industrial generator manufacturer needed to export a large order of diesel generators to a power infrastructure project in East Africa, with the generators&apos; combination of significant weight and precision internal components requiring packaging beyond the manufacturer&apos;s standard domestic delivery approach. The client&apos;s previous international shipment had arrived with several units showing internal component misalignment upon installation — damage that wasn&apos;t visible during unloading and only surfaced once technicians attempted commissioning, resulting in significant on-site delay and technician remobilization cost.
              </p>
              <p className="mb-3">
                Our engineering team assessed each generator&apos;s structural lifting points and internal component layout, coordinating with the manufacturer&apos;s technical documentation to identify the specific mounting points that could safely bear the generator&apos;s weight during crating and handling. We designed steel-reinforced wooden crates with internal bracing positioned specifically to prevent the shifting that had caused the previous shipment&apos;s alignment damage, along with VCI protection for exposed metal components given the sea freight transit and destination climate.
              </p>
              <p>
                The shipment cleared Pakistani export customs with proper ISPM 15 certification and arrived at the East African project site with every generator passing commissioning inspection without the alignment issues from the previous shipment. The manufacturer has since standardized this crating specification for all international generator exports and specifically credits the upfront engineering assessment — rather than a generic heavy-duty crate applied without equipment-specific analysis — as the change that resolved their recurring damage pattern.
              </p>
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Packing Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Confirm equipment weight, dimensions, and manufacturer handling documentation before crate design begins",
                  "Identify calibration-sensitive components requiring specific internal bracing",
                  "Assess corrosion risk for metal components on extended transit routes",
                  "Confirm ISPM 15 certification requirements for international shipments",
                  "Apply VCI or vacuum protection for precision metal components where warranted",
                  "Complete engineering assessment before finalizing crate design",
                  "Confirm insurance coverage appropriate to the equipment's replacement value",
                  "Verify export documentation matches the equipment's technical specifications",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Industrial Packing Mistakes</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Skipping Engineering Assessment — Building a crate based on dimensions alone without assessing lifting points and internal fragility, risking damage invisible until installation",
                  "Using Generic Heavy-Duty Crating — Applying a standard heavy-duty crate template without equipment-specific analysis, missing the specific vulnerabilities each machine type presents",
                  "Underestimating Corrosion Risk — Failing to apply VCI or moisture protection for metal components on extended sea freight routes, resulting in corrosion damage that surfaces after delivery",
                  "Ignoring Manufacturer Handling Documentation — Packing equipment without consulting available manufacturer specifications for lifting points and handling restrictions",
                  "Inadequate Vibration Isolation — Underestimating the cumulative vibration exposure of road haulage, port handling, and sea transit for calibration-sensitive equipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Recommendations</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Request manufacturer handling documentation before finalizing any industrial crate design, since lifting point and load restriction data significantly changes the correct packing approach",
                  "For equipment with precision internal components, insist on an engineering assessment rather than accepting a generic heavy-duty crate quote",
                  "For metal components facing extended sea freight, confirm VCI or vacuum protection is included, not treated as an optional add-on",
                  "For multi-component shipments like production lines, request sequenced, labeled crating that matches your installation order at the destination",
                  "Ask any industrial packing provider for references specific to your equipment category, not general industrial packing experience alone",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Best International Movers</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven, specific track record in industrial packing and heavy machinery protection across Pakistan",
                  "5,000+ Successful Shipments — Substantial completed shipment volume across generators, transformers, production equipment, and heavy industrial machinery",
                  "100+ Countries Served — A genuinely global logistics network supporting international industrial equipment exports from Pakistan",
                  "Licensed Logistics Company — Fully licensed for both domestic and international freight and export packaging operations",
                  "Professional Industrial Packing Engineers — Engineering-led assessment for every project, not generic heavy-duty crating applied without equipment-specific analysis",
                  "Certified Export Packing Team — Trained specialists experienced across the full range of industrial equipment categories",
                  "ISPM 15 Certified Wooden Crates — All timber crating heat-treated and certified for international shipping compliance",
                  "Heavy Machinery Specialists — Dedicated expertise in the rigging, load distribution, and lifting point analysis heavy equipment requires, integrated with Freight Management Services for complete shipment coordination",
                  "Door-to-Door Logistics — Complete industrial shipment management from your facility to final destination, without handoffs between disconnected vendors",
                  "24/7 Customer Support — Continuous availability for time-sensitive industrial packing and shipping projects",
                  "International Packing Standards — Documentation and materials meeting the compliance requirements of every major destination market we serve",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For complete shipment coordination, explore our <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>. For educational overviews, read our <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Heavy Machinery Relocation</Link> and <Link to="/blog/industrial-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Industrial Relocation</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Industrial packing failures rarely announce themselves at the point of delivery — they surface later, during installation or commissioning, when a misaligned component or a corroded surface reveals a packing decision that looked adequate on paper but wasn&apos;t engineered around the equipment&apos;s actual vulnerabilities. Businesses that consistently avoid this pattern are the ones that treat industrial packing as the engineering discipline it actually is, starting with an assessment of the specific equipment&apos;s lifting points, weight distribution, and fragility, not a generic heavy-duty crate applied to every shipment regardless of what&apos;s inside it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built its industrial packing practice around exactly that engineering-first approach — 15+ years of specialized heavy machinery packing experience, ISPM 15 certified materials, and a professional packing team trained to assess each piece of equipment on its own terms before a single board is cut. Whether you&apos;re shipping a single generator or coordinating packing for an entire production line relocation, that same engineering discipline applies to every project we take on.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Industrial Packing Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a single piece of heavy machinery professionally packed or ongoing industrial packing support for recurring export shipments, our team is ready to engineer protection built specifically around your equipment. Contact us today for a <strong className="text-foreground">free consultation and transparent quote</strong>.
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
                <Link to="/services/project-logistics-pakistan/" className="text-gold hover:underline">Project Logistics Pakistan</Link>
                <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>
                <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>
                <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>
                <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link>
                <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link>
                <Link to="/services/factory-relocation-pakistan/" className="text-gold hover:underline">Factory Relocation Pakistan</Link>
                <Link to="/packaging-logistics-solutions/" className="text-gold hover:underline">Packaging & Logistics Solutions</Link>
                <Link to="/glass-packing-services/" className="text-gold hover:underline">Glass Packing Services</Link>
                <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link>
                <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link>
                <Link to="/services/warehouse-relocation/" className="text-gold hover:underline">Warehouse Relocation</Link>
                <Link to="/services/medical-equipment-shipping/" className="text-gold hover:underline">Medical Equipment Shipping</Link>
                <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Heavy Machinery Relocation</Link>
                <Link to="/blog/industrial-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Industrial Relocation</Link>
                <Link to="/routes/pakistan-to-china/" className="text-gold hover:underline">Pakistan to China</Link>
                <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link>
                <Link to="/locations/cargo-services-sialkot/" className="text-gold hover:underline">Cargo Services Sialkot</Link>
                <Link to="/contact" className="text-gold hover:underline">Get a Free Quote</Link>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={faq.q} className={index < faqs.length - 1 ? "border-b border-border pb-6" : ""}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {index + 1}. {faq.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg">
                Get a Free Industrial Packing Quote Today
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

export default IndustrialPackingServices;
