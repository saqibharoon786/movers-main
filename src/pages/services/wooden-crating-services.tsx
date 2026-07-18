import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  Activity,
  Factory,
  Wrench,
  Cpu,
  TreePine,
  Plane,
  Radio,
  Palette,
  Truck,
  FlaskConical,
  Fuel,
  Hammer,
  Pickaxe,
  Sofa,
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
    q: "What are wooden crating services?",
    a: "Wooden crating services cover the design, material selection, construction, and treatment of timber-based crates used to protect cargo during domestic and international transport.",
  },
  {
    q: "What is ISPM 15 and why does it matter for wooden crates?",
    a: "ISPM 15 is the international phytosanitary standard requiring heat treatment of wooden packaging material used in trade, mandatory for most wooden crates shipped internationally to avoid customs rejection.",
  },
  {
    q: "What types of wood are used in crating?",
    a: "Common materials include pine wood, hardwood, plywood, and OSB panels, each selected based on the cargo's weight class and fragility requirements.",
  },
  {
    q: "How much do wooden crating services cost?",
    a: "Costs depend on cargo size, weight, timber type, and crate design complexity. We provide a free, itemized quote based on your specific cargo and shipping requirements.",
  },
  {
    q: "Are wooden crates better than cardboard for shipping?",
    a: "Yes, for heavier or higher-value cargo, wooden crates offer significantly greater structural protection and moisture resistance than cardboard packaging, which is better suited to lightweight goods.",
  },
  {
    q: "How do wooden crates compare to plastic crates?",
    a: "Wooden crates offer greater customization, easier on-site repair, and often lower upfront cost for custom builds, while plastic crates suit standardized, lighter cargo better.",
  },
  {
    q: "Can wooden crates handle heavy machinery?",
    a: "Yes, heavy-duty and solid timber crates, often reinforced with steel fasteners, are specifically engineered for heavy machinery and industrial equipment.",
  },
  {
    q: "Do you provide wooden crating for medical equipment?",
    a: "Yes, we build precision timber crating for diagnostic and hospital equipment requiring calibration protection during transit.",
  },
  {
    q: "What is the difference between open and closed wooden crates?",
    a: "Open crates are skeletal timber frames without full enclosure, suited to robust cargo, while closed crates provide complete weather and tamper protection.",
  },
  {
    q: "Are wooden crates reusable?",
    a: "Yes, certain designs — particularly reusable and collapsible wooden crates — are built for multiple shipping cycles, reducing long-term packaging costs.",
  },
  {
    q: "Do you provide wooden crating services outside Karachi?",
    a: "Yes, we provide wooden crating services across Pakistan, including Lahore, Islamabad, Rawalpindi, Faisalabad, and Sialkot.",
  },
  {
    q: "What happens if a wooden crate isn't ISPM 15 certified?",
    a: "Non-certified wooden crates risk rejection, forced treatment, or destruction at customs, potentially delaying or complicating your shipment.",
  },
  {
    q: "Can wooden crates protect electronics during shipping?",
    a: "Yes, with proper internal cushioning, moisture barriers, and anti-static protective layers, wooden crates provide effective protection for electronic cargo.",
  },
  {
    q: "What is the difference between plywood and solid timber crates?",
    a: "Plywood crates offer good structural rigidity at a lighter weight, while solid timber crates provide maximum structural strength for heavier or higher-value cargo.",
  },
  {
    q: "How is crated cargo protected from moisture during sea freight?",
    a: "We apply moisture barrier film and desiccant packs within the crate to manage humidity exposure during extended sea freight transit.",
  },
  {
    q: "Do wooden crates rust or corrode?",
    a: "No, wood doesn't rust, giving it an advantage over metal crating in humid or marine shipping environments where corrosion is a genuine risk factor.",
  },
  {
    q: "Can you build custom-sized wooden crates for irregular cargo?",
    a: "Yes, our crates are engineered per item, allowing custom dimensions and internal bracing configurations for irregularly shaped cargo.",
  },
  {
    q: "Do you handle the shipping process after crating?",
    a: "Yes, our wooden crating integrates directly with our broader freight and logistics services, managing the complete journey to final destination.",
  },
  {
    q: "What industries commonly use wooden crating services?",
    a: "Manufacturing, oil and gas, construction, mining, medical equipment, electronics, furniture, automotive, aerospace, and museums are among the industries we regularly serve.",
  },
  {
    q: "How do I get a quote for wooden crating services?",
    a: "Contact us via phone, WhatsApp, or our online quote form with your cargo details and shipping destination. We'll assess your requirements and provide a detailed quote.",
  },
];

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wooden Crating Services",
    name: "Wooden Crating Services | Best International Movers & Logistics",
    description:
      "Design, construction, and ISPM 15 heat treatment of wooden crates using pine, hardwood, plywood, and OSB for export and domestic cargo protection.",
    url: "https://bestintlmovers.com/services/wooden-crating-services/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wooden Crating Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solid Timber Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plywood Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ISPM 15 Heat Treatment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reusable & Collapsible Crates" } },
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
        name: "Wooden Crating Services",
        item: "https://bestintlmovers.com/services/wooden-crating-services/",
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
    author: { "@type": "Organization", name: "Furniture Exporter, Lahore" },
    reviewBody:
      "Our furniture shipment to the Middle East arrived with zero surface damage thanks to the custom plywood crating — now our standard export packaging.",
  };
}

const serviceSeo = {
  title: "Wooden Crating Services — Timber & Plywood Export Crates | Pakistan",
  description:
    "Professional wooden crating services in Pakistan — pine, hardwood & plywood export crates, ISPM 15 heat-treated, built for machinery, electronics & cargo. 15+ years experience.",
  keywords:
    "wooden crating services, wooden crating services Pakistan, wooden shipping crates, export wooden crates, industrial wooden crates, timber crates, ISPM 15 wooden crates, pine wood crating, hardwood crating, plywood crates, OSB panel crates, wooden export packing, heavy equipment wooden crating, wooden crating Lahore, wooden crating Faisalabad, wooden crates vs cardboard, customs compliant wooden packaging",
};

const processSteps = [
  { title: "1. Cargo Inspection", text: "We begin by physically inspecting the cargo — assessing shape, existing damage, fragile components, and handling points — to understand exactly what the crate needs to protect against before any design work begins." },
  { title: "2. Measurement", text: "Precise measurement of dimensions, weight, and center of gravity ensures the crate is built to properly secure the item, not roughly sized based on estimated dimensions." },
  { title: "3. Wood Selection", text: "Based on the cargo's weight class and fragility, we select the appropriate timber — pine for lighter, cost-sensitive shipments, hardwood or reinforced plywood for heavier or higher-value cargo." },
  { title: "4. Crate Design", text: "We design the crate's structural configuration — panel layout, internal bracing points, and joint construction — specific to the cargo's dimensions and the stresses it will face during its shipping route." },
  { title: "5. ISPM 15 Heat Treatment", text: "All timber used in export crating is heat-treated to ISPM 15 standards, eliminating pest risk and meeting the phytosanitary certification required for international shipments." },
  { title: "6. Assembly", text: "The crate is constructed according to the design specification, using appropriate joinery and fastening methods matched to the cargo's weight class and the crate's intended structural load." },
  { title: "7. Internal Cushioning", text: "Internal padding and cushioning materials are fitted to protect the cargo's specific fragile points, positioned according to the item's actual structural profile rather than generic placement." },
  { title: "8. Moisture Protection", text: "Moisture barrier materials and, where needed, desiccant packs are applied within the crate to protect against humidity exposure during extended transit, particularly critical for sea freight routes." },
  { title: "9. Shock Protection", text: "Internal bracing is engineered to absorb vibration and sudden movement during transit, protecting the cargo from the cumulative shock of road haulage, port handling, and vessel transit." },
  { title: "10. Cargo Securing", text: "The item is secured within the crate using appropriate strapping, blocking, and bracing to prevent shifting during transport, verified against the crate's internal design before sealing." },
  { title: "11. Final Inspection", text: "Before sealing, the completed crate undergoes final inspection confirming structural integrity, correct labeling, ISPM 15 certification marking, and secure internal cargo placement." },
  { title: "12. Loading", text: "The crate is loaded using lifting equipment matched to its weight and dimensions, following the same handling discipline applied across our broader freight operations." },
  { title: "13. Transportation", text: "Crated cargo is transported via road, sea, or air freight according to shipment requirements, with our logistics network managing the complete journey to final destination." },
];

const WoodenCratingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/services/wooden-crating-services/"
        canonicalUrl="https://bestintlmovers.com/services/wooden-crating-services/"
        ogTitle="Wooden Crating Services | Best International Movers & Logistics"
        ogDescription="ISPM 15 certified wooden crates built from pine, hardwood, and plywood for machinery, electronics, and industrial cargo. 15+ years experience, nationwide service."
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
                <TreePine size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Wooden Crating Services — Timber-Built Protection for Export & Domestic Cargo
                </h1>
                <p className="text-muted-foreground mt-1">ISPM 15 Certified Pine, Hardwood & Plywood Export Crates</p>
              </div>
            </div>

            <InfoBox variant="blue">
              <strong className="text-foreground">Quick Answer:</strong> Wooden crating services design and manufacture crates from timber materials — pine, hardwood, plywood, and OSB panels — heat-treated to ISPM 15 standards for safe, customs-compliant shipping. <strong className="text-foreground">Best International Movers & Logistics</strong> builds wooden crates across Pakistan for machinery, electronics, medical equipment, and industrial cargo, backed by 15+ years of experience and a professional export packing team.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Key Takeaways</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Wood remains the preferred material for export crating due to its strength-to-weight ratio, repairability, and worldwide handling familiarity",
                  "ISPM 15 heat treatment is a legal requirement for wooden packaging in most international shipments, not an optional feature",
                  "Different timber types — pine, hardwood, plywood, OSB — suit different weight classes and cargo categories",
                  "Wooden crates outperform cardboard for weight capacity, plastic for repairability and cost, and metal for weight-to-strength efficiency in most cargo scenarios",
                  "Crate design should match the specific timber type and construction method to the cargo's weight, fragility, and shipping route",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wood has remained the dominant material for export crating for over a century, and not by tradition alone. Timber offers a combination of strength, workability, weight efficiency, and worldwide handling familiarity that alternative materials still haven&apos;t matched for the majority of industrial and commercial shipping needs. But &quot;wooden crate&quot; covers an enormous range of actual construction — from a lightweight pine frame suited to a domestic furniture delivery to a hardwood-reinforced, steel-fastened export crate built to survive a six-week sea freight journey with a two-ton machine inside it.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has provided <strong className="text-foreground">wooden crating services</strong> for manufacturers, exporters, and industrial businesses across Pakistan for over 15 years, building ISPM 15 certified timber crates for more than 5,000 successful shipments to over 100 countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For fully engineered protective packaging, see our <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>. For complete shipment coordination, explore our <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Are Wooden Crating Services?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wooden crating services cover the design, material selection, construction, and treatment of timber-based crates used to protect cargo during domestic and international transport. This includes selecting the appropriate wood type — pine, hardwood, plywood, or OSB — based on the cargo&apos;s weight and fragility, engineering the crate&apos;s structural design around the specific item, and applying ISPM 15 heat treatment certification required for international shipments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike generic packaging, professional <strong className="text-foreground">wooden crating</strong> treats timber selection itself as a design decision, not a default. A crate built from softwood pine suits different cargo than one built from hardwood or reinforced plywood, and matching the wrong timber type to heavy or high-value cargo is one of the more common — and costly — mistakes businesses make when sourcing crating informally.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Wooden Crates Are Preferred for International Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Strength-to-Weight Efficiency — Timber offers structural strength without the excess weight of metal crating, keeping freight costs lower for weight-based shipping charges",
                  "Repairability — Wooden crates can be repaired on-site with basic tools if damaged during handling, unlike plastic or composite alternatives",
                  "Worldwide Handling Familiarity — Port and freight handling infrastructure globally is built around wooden crate dimensions and handling methods",
                  "Customization — Timber construction allows precise, item-specific internal bracing and structural design that molded plastic or standardized metal crating typically can't match",
                  "Regulatory Familiarity — Customs authorities worldwide are well-versed in inspecting and clearing ISPM 15 certified wooden packaging",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of Wooden Crating</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Cost-Effective Structural Protection — Wood delivers strong structural protection at a lower material cost than steel or engineered composite alternatives",
                  "Customs Compliance — ISPM 15 certified timber avoids the shipment holds that non-compliant wooden packaging faces at international borders",
                  "Design Flexibility — Timber can be cut, shaped, and reinforced to match virtually any cargo dimension or weight class",
                  "Reusability — Certain wooden crate designs, particularly reusable and collapsible formats, can serve multiple shipping cycles",
                  "Insurance and Documentation Support — Professionally built wooden crating provides clear, documentable evidence of proper handling standards if a damage claim needs to be filed",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Best International Movers & Logistics?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven, specific track record in wooden crating and export packing across Pakistan's manufacturing and export sectors",
                  "5,000+ Successful Shipments — Substantial completed shipment volume across industrial, medical, electronics, and general cargo crating projects",
                  "100+ Countries Served — A genuinely global logistics network supporting wooden-crated cargo shipped internationally",
                  "Licensed Logistics Company — Fully licensed for domestic and international freight and export packaging operations",
                  "Professional Export Packing Team — Trained crating specialists working with engineered timber selection",
                  "ISPM 15 Certified Wooden Crating Solutions — All timber materials heat-treated and certified to international phytosanitary standards",
                  "Door-to-Door Logistics — Wooden crating integrated directly into our broader freight and relocation services",
                  "Global Shipping Network — Established carrier partnerships supporting crated cargo moving to over 100 countries",
                  "24/7 Customer Support — Continuous availability for time-sensitive crating and export packing projects",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Wooden Crating Process</h2>
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Factory, title: "Manufacturing", text: "Wooden crating for finished products, components, and production equipment across Pakistan's manufacturing sector." },
                  { icon: Fuel, title: "Oil & Gas", text: "Heavy-duty timber crating for industrial equipment and components used in energy sector operations." },
                  { icon: Hammer, title: "Construction", text: "Wooden crates for construction equipment components and specialized tools moving between project sites or export markets." },
                  { icon: Pickaxe, title: "Mining", text: "Reinforced wooden crating for mining equipment and components requiring structural durability under demanding handling conditions." },
                  { icon: Activity, title: "Medical Equipment", text: "Precision wooden crating for diagnostic and hospital equipment requiring calibration protection during transit.", link: "/services/medical-equipment-shipping/" },
                  { icon: FlaskConical, title: "Laboratories", text: "Custom timber crating for scientific instruments sensitive to vibration and requiring precise internal bracing." },
                  { icon: Radio, title: "Telecommunications", text: "Wooden crating for network infrastructure equipment moving to installation sites, often in remote locations." },
                  { icon: Cpu, title: "Electronics", text: "Moisture-protected, cushioned wooden crating for electronic components and finished devices." },
                  { icon: Sofa, title: "Furniture", text: "Timber crating for furniture manufacturers and exporters, protecting surface finishes and structural joints during transit." },
                  { icon: Truck, title: "Automotive", text: "Wooden crating for automotive parts and components moving between manufacturing and distribution points." },
                  { icon: Plane, title: "Aerospace", text: "Precision timber crating for aerospace components meeting rigorous structural and documentation standards." },
                  { icon: Palette, title: "Museums", text: "Specialized wooden crating for artifacts and exhibition pieces requiring climate-conscious, vibration-isolated protection." },
                  { icon: Wrench, title: "Heavy Machinery", text: "Heavy-duty timber crating and skid-based packaging for industrial machinery.", link: "/services/heavy-machinery-relocation/" },
                ].map((industry) => (
                  <div key={industry.title} className="p-4 bg-navy-mid/20 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <industry.icon size={18} className="text-gold" />
                      {industry.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {industry.text}
                      {industry.link && (
                        <>
                          {" "}
                          <Link to={industry.link} className="text-gold hover:underline">
                            Learn more
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Wooden Crates</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-4">
                {[
                  { title: "Closed Wooden Crates", text: "Fully enclosed timber construction providing complete protection from weather, tampering, and physical contact — the standard choice for most international export shipments." },
                  { title: "Open Wooden Crates", text: "Skeletal timber frames without full panel enclosure, suited to robust, non-fragile cargo where full weather protection isn't required." },
                  { title: "Plywood Crates", text: "Lightweight timber panel construction offering good structural rigidity at lower weight than solid timber, suited to moderate-weight cargo." },
                  { title: "Solid Timber Crates", text: "Heavy-duty solid wood construction for cargo requiring maximum structural strength, typically reserved for heavier machinery and high-value items." },
                  { title: "Skid Crates", text: "Base platform construction without full enclosure, used for machinery requiring secure mounting and forklift accessibility." },
                  { title: "Heavy Duty Crates", text: "Reinforced timber construction engineered specifically for international shipping stresses and multiple handling points." },
                  { title: "Export Crates", text: "Timber crates built to meet full international shipping requirements, including ISPM 15 certification and destination-specific documentation compliance." },
                  { title: "Reusable Wooden Crates", text: "Durable construction designed for multiple shipping cycles, using robust fastening systems that allow repeated opening and resealing." },
                  { title: "Collapsible Wooden Crates", text: "Timber crates engineered to fold flat when not in use, reducing return shipping and storage costs for businesses with recurring shipment needs." },
                ].map((crate) => (
                  <div key={crate.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{crate.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{crate.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Materials We Use</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Pine Wood — A lightweight, cost-effective softwood suited to lighter cargo and general-purpose crating",
                  "Hardwood — Denser, stronger timber used for heavier cargo and high-value shipments requiring maximum structural integrity",
                  "Plywood — Engineered wood panels offering strong structural rigidity at a lighter weight than solid timber",
                  "OSB Panels — Oriented strand board, a cost-effective engineered wood panel option suited to certain crate wall and base applications",
                  "Steel Fasteners — Reinforced fastening hardware for high-stress structural joints in heavy-duty timber crate construction",
                  "Industrial Foam — Custom-cut cushioning material fitted within wooden crates to protect fragile or vibration-sensitive cargo",
                  "Moisture Barrier Materials — Protective film and desiccant materials applied within wooden crates to prevent humidity damage during extended transit",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Wood Treatment Standards</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ISPM 15</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    ISPM 15 is the international phytosanitary standard governing wooden packaging material used in cross-border trade, requiring heat treatment to eliminate pest risk before wood can be used in export crating. This standard applies specifically to raw wood packaging material — meaning even well-engineered crates face customs rejection if the underlying timber wasn&apos;t properly heat-treated and certified.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Heat Treatment Process</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    ISPM 15 heat treatment requires wood to be heated to a specific core temperature for a minimum duration, eliminating insects and larvae that could otherwise be transported internationally within the wood itself. Once treated, timber is stamped with an official ISPM 15 mark confirming compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Export Compliance & Customs Regulations</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Beyond heat treatment, export compliance for wooden crates includes proper labeling, accurate weight and dimension documentation, and any destination-specific requirements. Read our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link> for broader export documentation guidance.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cargo Safety & Insurance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our wooden crating operations follow documented safety protocols, including weight-rated lifting equipment for loading, verified structural testing for heavy-duty crate designs, and inspection procedures confirming crate integrity before cargo is sealed inside.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every wooden-crated shipment we manage is covered by insurance against loss or damage during transit, with our documented construction and treatment process supporting clear evidence of professional handling standards should a claim need to be filed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Common shipping problems — structural collapse under stacking pressure, moisture damage from unprotected timber, and customs holds from missing ISPM 15 certification — each trace back to inadequate material selection or skipped treatment steps, not the inherent limitations of wood as a crating material.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Wooden Crates vs. Cardboard Packaging</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Wooden Crates", "Cardboard Packaging"]}
                rows={[
                  ["Weight capacity", "High — suited to heavy and industrial cargo", "Low — suited to lightweight goods only"],
                  ["Structural protection", "Strong, rigid protection", "Limited, prone to crushing under stacking"],
                  ["Moisture resistance", "Good with proper treatment", "Poor, degrades quickly when wet"],
                  ["Reusability", "High for certain designs", "Minimal, typically single-use"],
                  ["Best suited for", "Machinery, electronics, high-value cargo", "Light retail goods, documents, small parcels"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Wooden Crates vs. Plastic Crates</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Wooden Crates", "Plastic Crates"]}
                rows={[
                  ["Repairability", "Repairable on-site with basic tools", "Typically requires full replacement if damaged"],
                  ["Custom sizing", "Fully customizable per item", "Limited to standard molded sizes"],
                  ["Upfront cost", "Generally lower for custom builds", "Higher for custom molded designs"],
                  ["Structural strength (heavy cargo)", "Excellent for heavy, irregular cargo", "Better suited to lighter, uniform cargo"],
                  ["Environmental handling", "Performs well across most climates with treatment", "Can become brittle in extreme temperature variation"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Wooden Crates vs. Metal Crates</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Wooden Crates", "Metal Crates"]}
                rows={[
                  ["Weight-to-strength ratio", "More efficient, lower freight cost impact", "Heavier, increasing freight cost"],
                  ["Upfront cost", "Lower for most cargo categories", "Significantly higher material and fabrication cost"],
                  ["Customization speed", "Fast, flexible construction", "Slower, requires specialized fabrication"],
                  ["Best suited for", "Most industrial, commercial, and export cargo", "Extremely heavy, high-security, or reusable long-term assets"],
                  ["Corrosion risk", "None (wood doesn't rust)", "Present in humid or marine shipping environments"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <InfoBox variant="save">
              <h3 className="text-foreground font-semibold mb-2">Case Study: Furniture Exporter, Lahore to Middle East</h3>
              <p className="mb-3">
                A furniture manufacturer in Lahore needed reliable wooden crating for a bulk export order of finished wooden furniture to a buyer in the Middle East, with the client specifically concerned about surface damage and joint stress given the furniture&apos;s own delicate wood finishes.
              </p>
              <p className="mb-3">
                We assessed the furniture pieces individually, selecting plywood-based closed crates with internal foam cushioning positioned specifically at each piece&apos;s joints and finished surfaces. ISPM 15 certified timber was used throughout, with moisture barrier materials applied given the sea freight transit and destination climate.
              </p>
              <p>
                The shipment cleared Pakistani export customs without delay and arrived at its Middle East destination with no reported surface damage or structural issues. The client has since adopted the same plywood crate specification as their standard export packaging for future international orders. See our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> for full export support.
              </p>
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packing Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Confirm cargo weight and dimensions before selecting timber type",
                  "Match wood selection (pine, hardwood, plywood) to cargo weight class and fragility",
                  "Confirm ISPM 15 heat treatment and certification before crate construction",
                  "Apply internal cushioning specific to the cargo's fragile points",
                  "Add moisture protection for sea freight or humid-climate destinations",
                  "Complete final inspection before sealing the crate",
                  "Confirm insurance coverage for the crated shipment",
                  "Verify crate labeling and documentation meet destination country requirements",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Don't default to the cheapest timber option for heavy or high-value cargo — matching wood type to actual weight class prevents structural failure risk",
                  "Always confirm ISPM 15 certification documentation accompanies wooden crates on international shipments, not just verbal assurance",
                  "For sea freight shipments, request moisture barrier protection as standard, given the extended humidity exposure risk",
                  "Ask about reusable or collapsible crate designs if your business ships similar cargo repeatedly",
                  "Request an on-site cargo inspection for large or high-value items rather than relying on remote measurements",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Using Untreated or Uncertified Wood — Risking customs rejection or forced treatment for international shipments using non-ISPM 15 compliant timber",
                  "Matching the Wrong Wood Type to Cargo Weight — Using lightweight pine for heavy machinery, resulting in structural strain the timber wasn't designed to handle",
                  "Skipping Moisture Protection for Sea Freight — Underestimating humidity exposure risk during extended ocean transit, particularly for electronics and finished wood products",
                  "Assuming All Wooden Crates Are Equivalent — Treating wooden crating as a commodity rather than an engineering decision specific to the cargo being shipped",
                  "Neglecting Internal Cushioning for Fragile Cargo — Relying on the crate's outer structure alone without addressing the item's specific internal fragility points",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For heavy equipment moves, review our <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Heavy Machinery Relocation</Link> before shipping.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wood remains the material of choice for export and industrial crating because it delivers a combination of strength, cost-efficiency, repairability, and worldwide handling familiarity that alternative materials still haven&apos;t matched for most cargo categories. But the material alone doesn&apos;t guarantee protection — the difference between a wooden crate that protects your cargo and one that fails under transit stress comes down to matching the right timber type, construction method, and treatment standard to what&apos;s actually inside it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built its wooden crating practice around exactly that principle — 15+ years of timber crating experience, ISPM 15 certified materials, and a professional export packing team that treats wood selection and construction as an engineering decision specific to your cargo, not a default box built the same way regardless of what&apos;s inside.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Wooden Crating Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a single crate for a precision instrument or ongoing wooden crating support for recurring export shipments, our team is ready to build protection engineered specifically around your cargo. Contact us today for a <strong className="text-foreground">free consultation and transparent quote</strong>.
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
                Get a Free Wooden Crating Quote Today
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

export default WoodenCratingServices;
