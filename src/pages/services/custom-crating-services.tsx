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
  Boxes,
  Shield,
  Plane,
  Radio,
  Palette,
  Truck,
  FlaskConical,
  Fuel,
  Hammer,
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
    q: "What are custom crating services?",
    a: "Custom crating services involve designing and building engineered wooden crates tailored to a specific item's dimensions, weight, and fragility, providing protection standard packaging can't match.",
  },
  {
    q: "What is ISPM 15 certification?",
    a: "ISPM 15 is the international standard requiring heat treatment of wooden packaging material used in international trade, mandatory for most wooden crates, pallets, and dunnage shipped internationally.",
  },
  {
    q: "How much does custom crating cost?",
    a: "Costs depend on cargo size, weight, fragility, crate type, and materials used. We provide a free, itemized quote based on your specific item and shipping requirements.",
  },
  {
    q: "Do you provide crating for heavy machinery?",
    a: "Yes, we design heavy-duty and steel-reinforced crates specifically engineered for industrial machinery and equipment, applying the same rigging principles used in our heavy machinery relocation services.",
  },
  {
    q: "Can you crate fragile items like artwork or antiques?",
    a: "Yes, we provide specialized art crating with climate-controlled, vibration-isolated protection for paintings, sculptures, antiques, and other high-value fragile items.",
  },
  {
    q: "What is the difference between open and closed crates?",
    a: "Open crates are skeletal wooden frames without full panel enclosure, suited to robust cargo, while closed crates provide complete enclosed protection, standard for most export shipments.",
  },
  {
    q: "Do you provide crating for medical equipment?",
    a: "Yes, we design precision crating for diagnostic, laboratory, and hospital equipment, protecting calibration accuracy during transit.",
  },
  {
    q: "How long does custom crating take?",
    a: "Timelines vary based on crate complexity and cargo size, from a few days for standard designs to longer for large, heavy-duty, or highly specialized engineering requirements.",
  },
  {
    q: "Is my crated cargo insured?",
    a: "Yes, all crated shipments we manage are covered by insurance against damage or loss during transit.",
  },
  {
    q: "Can crates be reused for future shipments?",
    a: "Yes, certain crate designs — particularly for businesses shipping similar equipment repeatedly — can be built for reuse, reducing long-term packaging costs.",
  },
  {
    q: "Do you provide crating services in cities outside Karachi?",
    a: "Yes, we provide custom crating services across Pakistan, including Lahore, Islamabad, Rawalpindi, Faisalabad, and Sialkot.",
  },
  {
    q: "What materials are used in custom crating?",
    a: "We use solid wood, plywood, custom-cut foam, shock-absorbing materials, moisture barriers, and steel fasteners, selected based on the specific cargo and shipping requirements.",
  },
  {
    q: "What happens if wooden packaging isn't ISPM 15 certified?",
    a: "Non-certified wooden packaging risks rejection or mandatory treatment at destination customs, potentially delaying or complicating your shipment regardless of how well the cargo itself is protected.",
  },
  {
    q: "Can you crate electronics and server equipment?",
    a: "Yes, we provide anti-static, shock-protected crating specifically designed for electronic components, server racks, and IT infrastructure.",
  },
  {
    q: "Do you offer on-site crating for large equipment?",
    a: "Yes, for large or heavy items, our team can conduct on-site inspection and, where practical, on-site crating rather than requiring the item to be transported to a facility first.",
  },
  {
    q: "What is vacuum packing and when is it used?",
    a: "Vacuum packing provides an additional moisture and oxygen barrier for sensitive electronics or components, typically used as an inner layer within the broader crate structure for extra environmental protection.",
  },
  {
    q: "How do you determine the right crate type for my cargo?",
    a: "Crate type is determined through engineering assessment of the item's weight, fragility, shipping mode, and destination climate conditions during our design process.",
  },
  {
    q: "Do you handle the full shipping process after crating?",
    a: "Yes, our custom crating integrates directly with our broader freight and logistics services, managing the complete journey from crating facility to final destination.",
  },
  {
    q: "Can you crate items for both domestic and international shipping?",
    a: "Yes, we provide custom crating for both domestic transport within Pakistan and international export shipments requiring ISPM 15 compliance.",
  },
  {
    q: "How do I get a quote for custom crating services?",
    a: "Contact us via phone, WhatsApp, or our online quote form with your item's details and shipping destination. We'll assess your requirements and provide a detailed quote, including an on-site inspection where needed.",
  },
];

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Crating Services",
    name: "Custom Crating Services | Best International Movers & Logistics",
    description:
      "Engineered custom crating and export packing services including ISPM 15 certified wooden crates for machinery, electronics, medical equipment, and fine art.",
    url: "https://bestintlmovers.com/services/custom-crating-services/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Crating Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Equipment Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electronics Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Equipment Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Art Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ISPM 15 Certified Export Packing" } },
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
        name: "Custom Crating Services",
        item: "https://bestintlmovers.com/services/custom-crating-services/",
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
    author: { "@type": "Organization", name: "Textile Machinery Manufacturer, Faisalabad" },
    reviewBody:
      "Our precision machine arrived in Southeast Asia with all calibration intact thanks to the custom crate design — no recalibration delays at all.",
  };
}

const serviceSeo = {
  title: "Custom Crating Services — Industrial & Export Packing | Pakistan",
  description:
    "Professional custom crating services in Pakistan — ISPM 15 certified wooden crates for machinery, electronics, art & medical equipment. 15+ years experience. Free quote.",
  keywords:
    "custom crating services, custom crating services Pakistan, export crating services, industrial crating services, ISPM 15 certified crates, export packing services, heavy equipment crating, machinery crating, art crating services, medical equipment crating, electronics crating, wooden shipping crates, international export packaging, protective packaging solutions, cargo crating company, engineered wooden crates, crating services Faisalabad, crating services Sialkot",
};

const processSteps = [
  {
    title: "1. Site Inspection",
    text: "For larger or more complex items, our team conducts an on-site inspection to assess the item in its actual environment — access points, existing damage, and any handling constraints that will affect both crating and eventual loading.",
  },
  {
    title: "2. Cargo Measurement",
    text: "Precise measurement of dimensions, weight, and center of gravity forms the foundation of the crate design, since even small measurement errors can result in a crate that doesn't properly secure or protect the item inside.",
  },
  {
    title: "3. Engineering Assessment",
    text: "Our team assesses the specific stresses the item will face during its shipping route — freight mode, transit duration, handling points, and climate conditions — to determine the structural and protective requirements the crate design must meet.",
  },
  {
    title: "4. Crate Design",
    text: "Based on the engineering assessment, we design a crate specific to the item, determining crate type (open, closed, skid-based), internal bracing requirements, and cushioning approach before construction begins.",
  },
  {
    title: "5. Material Selection",
    text: "We select materials — wood type, plywood grade, foam density, moisture barriers — matched to the item's specific fragility and the shipping route's climate and handling conditions.",
  },
  {
    title: "6. ISPM 15 Heat-Treated Wood",
    text: "All wooden crating materials are heat-treated and certified to ISPM 15 standards, the internationally recognized phytosanitary requirement for wood packaging material used in international trade.",
  },
  {
    title: "7. Moisture Protection",
    text: "For items sensitive to humidity — electronics, furniture, machinery with precision components — we apply moisture barrier materials and, where needed, desiccant packs designed to maintain a controlled internal environment throughout transit.",
  },
  {
    title: "8. Shock Protection",
    text: "Internal bracing and cushioning are engineered around the item's specific shock sensitivity, ensuring vibration and sudden movement during transit don't transfer directly to fragile or precision components.",
  },
  {
    title: "9. Foam Cushioning",
    text: "For particularly sensitive items — electronics, optical equipment, precision instruments — custom-cut foam cushioning provides form-fitted protection that generic padding materials can't replicate.",
  },
  {
    title: "10. Vacuum Packing (Overview)",
    text: "For certain sensitive electronics or components requiring an additional moisture and oxygen barrier, vacuum-sealed packaging can be used as an inner layer within the crate structure.",
  },
  {
    title: "11. Packing",
    text: "The item is carefully packed into the completed crate according to the pre-planned configuration, with internal bracing secured and cushioning positioned exactly as engineered in the design stage.",
  },
  {
    title: "12. Quality Inspection",
    text: "Before sealing, every crate undergoes a quality inspection confirming secure packing, proper bracing, correct labeling, and compliance documentation before it's cleared for loading.",
  },
  {
    title: "13. Loading",
    text: "Crates are loaded using appropriate lifting and handling equipment matched to their weight and dimensions, following the same rigging discipline used for heavy machinery transport.",
  },
  {
    title: "14. Transportation",
    text: "Crated cargo is transported via road, sea, or air freight according to the shipment's requirements, with our broader logistics network managing the journey from crating facility to final destination.",
  },
];

const CustomCratingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/services/custom-crating-services/"
        canonicalUrl="https://bestintlmovers.com/services/custom-crating-services/"
        ogTitle="Custom Crating Services | Best International Movers & Logistics"
        ogDescription="Engineered wooden crating and export packing for machinery, electronics, medical equipment & fine art. ISPM 15 certified, 15+ years experience."
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
                <Boxes size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Custom Crating Services — Engineered Export Packing & Protective Crating
                </h1>
                <p className="text-muted-foreground mt-1">ISPM 15 Certified Wooden Crates for Industrial & Export Cargo</p>
              </div>
            </div>

            <InfoBox variant="blue">
              <strong className="text-foreground">Quick Answer:</strong> Custom crating services design and build engineered wooden crates tailored to a specific item&apos;s dimensions, weight, and fragility — protecting machinery, electronics, medical equipment, and fine art during domestic and international transport. <strong className="text-foreground">Best International Movers & Logistics</strong> provides ISPM 15 certified custom crating across Pakistan, built by a professional export packing team with 15+ years of experience and full door-to-door logistics support.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Key Takeaways</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Custom crating is engineered per item, unlike standard packaging built to generic dimensions",
                  "ISPM 15 heat-treated wood certification is mandatory for wooden packaging in most international shipments",
                  "The right crate type — open, closed, skid-based, or steel-reinforced — depends on cargo weight, fragility, and shipping mode",
                  "Poor crating is one of the leading causes of cargo damage claims in international freight",
                  "A crate should be engineered around the specific stresses of your shipping route, not built to a generic template",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The single most preventable cause of cargo damage in international shipping isn&apos;t rough handling at a port or a poorly driven truck — it&apos;s a crate that was never engineered for the item inside it. A generic wooden box built to &quot;roughly fit&quot; a CNC machine, a server rack, or a museum-quality painting will almost always fail under the actual stresses of a multi-week sea freight journey: vibration, stacking pressure, humidity, and the repeated handling that happens at every port and transfer point along the way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has provided <strong className="text-foreground">custom crating services</strong> for manufacturers, exporters, and institutions across Pakistan for over 15 years, building engineered protective packaging for more than 5,000 successful shipments to over 100 countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pair custom crating with our <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link> or <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> for complete export support from crate to delivery.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Are Custom Crating Services?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Custom crating services involve the design and construction of engineered wooden crates built specifically around an individual item&apos;s dimensions, weight, fragility, and shipping requirements — as opposed to standard, off-the-shelf packaging built to generic size categories. A <strong className="text-foreground">custom crate</strong> accounts for the specific stresses an item will face during its actual journey: the vibration of road haulage, the humidity of sea freight, the pressure of container stacking, and the repeated handling at ports and transfer points.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This engineering-first approach is what separates true custom crating from generic industrial packaging. For household and office moves, see our <Link to="/services/professional-packing-services/" className="text-gold hover:underline">Professional Packing Services</Link>; for industrial export cargo, custom crating is the appropriate standard.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Custom Crating Is Important</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cargo damage during international shipping is overwhelmingly a packaging failure, not a transport failure. Custom crating matters because it addresses these risks directly:
              </p>
              <CheckList
                items={[
                  "Weight-Specific Structural Design — A crate built for a 200kg item and one built for a 2,000kg item require entirely different structural engineering, not just a bigger box",
                  "Vibration and Shock Protection — Precision equipment, electronics, and scientific instruments require internal cushioning engineered around their specific fragility points",
                  "Moisture and Climate Protection — Sea freight routes through humid conditions can destroy improperly protected wooden furniture, electronics, or machinery over a multi-week journey",
                  "Regulatory Compliance — Wooden packaging material must meet international phytosanitary standards (ISPM 15) or risk being rejected at customs",
                  "Handling and Stacking Stress — Crates are stacked, lifted, and repositioned multiple times during a typical shipment; structural failure at any point can damage cargo that survived transit undamaged",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of Professional Crating</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Reduced Damage Claims — Engineered crating significantly reduces the transit damage that generic packaging fails to prevent",
                  "Customs Compliance — ISPM 15 certified materials avoid the shipment holds and rejections that non-compliant wooden packaging faces",
                  "Insurance Advantages — Properly documented professional crating supports smoother insurance claims processing if damage does occur",
                  "Reusability for Some Crate Types — Certain crate designs can be reused for return shipments or repeat orders, reducing long-term packaging costs",
                  "Protection for High-Value and Irreplaceable Cargo — Fine art, antiques, and specialized scientific equipment often cannot be replaced if damaged",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Best International Movers & Logistics?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven, specific track record in custom crating and export packing",
                  "5,000+ Successful Shipments — Substantial completed shipment volume across industrial, medical, electronics, and fine art crating projects",
                  "100+ Countries Served — A genuinely global logistics network supporting crated cargo shipped internationally",
                  "Licensed Logistics Company — Fully licensed for both domestic and international freight and export packaging",
                  "Professional Export Packing Team — Trained crating specialists, not general labor building boxes without engineering input",
                  "ISPM 15 Compliant Solutions — All wooden crating materials meet international heat-treatment certification standards",
                  "Door-to-Door Logistics — Crating integrated directly with our broader freight and relocation services",
                  "24/7 Customer Support — Continuous availability for time-sensitive crating and shipping projects",
                  "Customs Clearance Experts — Licensed brokers managing the documentation that accompanies crated export shipments",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Custom Crating Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Custom crating is a fourteen-stage engineering and construction process, not a single &quot;build a box&quot; task. Each stage protects against a specific risk your cargo will actually face during transit.
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Factory, title: "Manufacturing", text: "Custom crating for finished products, components, and production equipment requiring protection during domestic and export shipping." },
                  { icon: Fuel, title: "Oil & Gas", text: "Heavy-duty crating for industrial equipment and components used in energy sector operations, often requiring reinforced structural designs." },
                  { icon: Hammer, title: "Construction", text: "Crating for construction equipment components and specialized tools moving between project sites or export markets." },
                  { icon: Activity, title: "Medical Equipment", text: "Precision crating for diagnostic, laboratory, and hospital equipment requiring calibration protection.", link: "/services/medical-equipment-shipping/" },
                  { icon: FlaskConical, title: "Laboratories", text: "Custom crating for scientific and testing instruments sensitive to vibration and requiring precise internal bracing." },
                  { icon: Cpu, title: "Electronics", text: "Anti-static, shock-protected crating for electronic components, finished devices, and manufacturing equipment." },
                  { icon: Radio, title: "Telecommunications", text: "Crating for network infrastructure equipment and components requiring careful handling during installation-site delivery." },
                  { icon: Plane, title: "Aerospace", text: "Precision crating for aerospace components and equipment, where structural integrity and documentation standards are especially rigorous." },
                  { icon: Shield, title: "Defense", text: "Secure, compliance-conscious crating for defense-related equipment and components requiring specific handling protocols." },
                  { icon: Palette, title: "Museums & Art Galleries", text: "Specialized art crating for paintings, sculptures, and artifacts requiring climate-controlled, vibration-isolated protection." },
                  { icon: Truck, title: "Automotive", text: "Crating for automotive parts, components, and specialized equipment moving between manufacturing and distribution points." },
                  { icon: Wrench, title: "Heavy Machinery", text: "Structural crating and skid-based packaging for industrial machinery.", link: "/services/heavy-machinery-relocation/" },
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Cargo We Crate</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Industrial Machinery — CNC machines, production equipment, and manufacturing machinery requiring structural crating and internal bracing",
                  "Generators — Heavy industrial and commercial generators requiring reinforced skid-based crating",
                  "Transformers — Electrical transformers requiring specialized structural support given their weight and sensitivity",
                  "Medical Devices — Diagnostic and treatment equipment requiring calibration-protective crating",
                  "Artwork — Paintings, sculptures, and fine art requiring climate-controlled, vibration-isolated crating",
                  "Antiques — Fragile, often irreplaceable items requiring custom-fitted protective crating",
                  "Furniture — High-value or antique furniture requiring moisture and surface protection during transit",
                  "Server Racks — IT infrastructure requiring anti-static, shock-protected crating",
                  "Electrical Panels — Industrial electrical equipment requiring careful internal bracing and moisture protection",
                  "Fragile Equipment — Any equipment with glass components, precision optics, or delicate mechanical parts",
                  "Scientific Instruments — Laboratory and testing equipment sensitive to vibration and requiring precise internal support",
                  "Large Industrial Parts — Oversized components requiring custom-dimensioned crate engineering",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Crates</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-4">
                {[
                  { title: "Open Crates", text: "Skeletal wooden frames without full panel enclosure, suited to robust, non-fragile cargo where visibility or ventilation matters more than full enclosure." },
                  { title: "Closed Crates", text: "Fully enclosed wooden crates providing complete protection from weather, tampering, and physical contact, standard for most export shipments requiring full protection." },
                  { title: "Plywood Crates", text: "Lightweight, cost-effective crating using plywood panels, suited to moderate-weight cargo where full solid wood construction isn't structurally necessary." },
                  { title: "Solid Wood Crates", text: "Heavier-duty construction for cargo requiring maximum structural strength, typically used for heavier machinery or high-value items." },
                  { title: "Skid Bases", text: "Base platforms without full crate enclosure, used for machinery and equipment that needs secure mounting and forklift accessibility." },
                  { title: "Heavy-Duty Export Crates", text: "Reinforced construction specifically engineered for international shipping stresses, incorporating additional bracing for extended transit and multiple handling points." },
                  { title: "Reusable Crates", text: "Durable crate designs built for multiple shipping cycles, cost-effective for businesses with recurring shipments of similar equipment." },
                  { title: "Steel Reinforced Crates", text: "Wooden crates incorporating steel bracing or corner reinforcement for exceptionally heavy or high-value cargo requiring maximum structural integrity." },
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
                  "Wood — Solid wood construction for structural crate components requiring maximum strength",
                  "Plywood — Panel material for crate walls and bases where full solid wood isn't structurally required",
                  "Foam — Custom-cut cushioning foam for form-fitted protection of sensitive or irregularly shaped items",
                  "Shock Absorbers — Internal shock-absorbing materials engineered around an item's specific vibration sensitivity",
                  "Moisture Barriers — Protective film and desiccant materials preventing humidity damage during extended transit",
                  "Steel Fasteners — Reinforced fastening hardware for high-stress structural joints in heavy-duty crate designs",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Export Standards</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ISPM 15</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    ISPM 15 (International Standards for Phytosanitary Measures No. 15) is the international standard governing wooden packaging material used in international trade, requiring heat treatment to eliminate pest risk. Wooden crates, pallets, and dunnage that don&apos;t meet ISPM 15 certification face rejection or mandatory treatment at destination customs, regardless of how well the cargo inside is protected.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">International Shipping Requirements</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Beyond ISPM 15, international shipments often require crate labeling, weight and dimension documentation, and handling instructions specific to the cargo type and destination country&apos;s import requirements. Read our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link> for broader export documentation guidance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Customs Compliance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Properly certified and documented crating supports smoother customs clearance, since customs authorities specifically check for ISPM 15 compliance markings on wooden packaging material as part of standard import inspection.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packing Standards, Safety & Insurance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our packing standards apply category-specific protocols depending on cargo type — anti-static protective layers for electronics, climate-controlled packing materials for art and antiques, and reinforced bracing for heavy machinery — rather than a single generic packing approach applied regardless of what&apos;s actually being shipped.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every crating project follows documented safety protocols, including weight-rated lifting equipment for loading crated cargo, verified structural testing for heavy-duty crate designs, and quality inspection before any crate is sealed and cleared for transport.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every crated shipment we manage is covered by insurance against damage or loss during transit, with our documented crating and packing process supporting clear evidence of professional handling standards if a claim ever needs to be filed.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Standard Packing vs. Custom Crating</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Standard Packing", "Custom Crating"]}
                rows={[
                  ["Design approach", "Generic, pre-made sizes", "Engineered per item"],
                  ["Structural protection", "Limited, generalized", "Weight and fragility-specific"],
                  ["ISPM 15 compliance", "Not always applicable/verified", "Standard practice"],
                  ["Damage risk", "Higher, especially for irregular or heavy items", "Significantly reduced"],
                  ["Best suited for", "Standard-shaped, low-value, low-fragility items", "Machinery, electronics, art, medical equipment, high-value cargo"],
                  ["Reusability", "Rarely", "Possible with certain crate designs"],
                  ["Cost", "Lower upfront", "Higher upfront, lower total risk cost"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Using Generic Packaging for High-Value Cargo — Assuming standard boxes or basic wooden crates offer adequate protection for machinery, electronics, or fragile items on a long international journey",
                  "Ignoring ISPM 15 Requirements — Shipping wooden packaging without proper heat-treatment certification, risking rejection or forced treatment at destination customs",
                  "Underestimating Moisture Risk — Failing to account for humidity exposure during extended sea freight transit, particularly for wood, electronics, and precision machinery",
                  "Skipping Professional Measurement — Estimating dimensions rather than precisely measuring cargo, resulting in crates that don't properly secure the item inside",
                  "Choosing Crate Type Based on Cost Alone — Selecting a lighter-duty crate design purely to save on upfront cost, without accounting for the actual handling and transit stresses the shipment will face",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Request an on-site inspection for any large, heavy, or high-value item rather than relying on remote measurements alone",
                  "Confirm ISPM 15 certification documentation is included with every wooden crate before shipment departs",
                  "For sea freight shipments, always ask about moisture protection measures given the extended transit time and humidity exposure",
                  "For fragile or irregularly shaped items, request custom foam cushioning rather than generic padding materials",
                  "If your business ships similar equipment repeatedly, ask about reusable crate designs to reduce long-term packaging costs",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <InfoBox variant="save">
              <h3 className="text-foreground font-semibold mb-2">Case Study: Precision Machinery Export, Faisalabad to Southeast Asia</h3>
              <p className="mb-3">
                A textile machinery manufacturer in Faisalabad needed to export a precision component-manufacturing machine to a buyer in Southeast Asia, with the equipment&apos;s calibration sensitivity making standard crating unsuitable for the multi-week sea freight journey involved.
              </p>
              <p className="mb-3">
                Our engineering team conducted an on-site inspection to assess the machine&apos;s center of gravity, fragile components, and existing handling points, then designed a custom heavy-duty crate incorporating internal bracing specifically positioned around the machine&apos;s most vibration-sensitive assemblies. The crate was built using ISPM 15 certified solid wood construction with steel-reinforced corner joints, and internal moisture barrier materials were applied given the extended sea freight transit time.
              </p>
              <p>
                The machine arrived at its destination with all calibration settings intact and no shipping-related damage. The manufacturer has since used the same crate design for subsequent export orders of similar equipment, reducing both crating time and cost for repeat shipments. See our <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link> page for regional export support.
              </p>
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packing Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Confirm exact item dimensions, weight, and center of gravity before crate design begins",
                  "Identify fragility points and vibration-sensitive components requiring specific internal bracing",
                  "Confirm ISPM 15 certification requirements for the destination country",
                  "Determine appropriate crate type based on cargo weight, fragility, and shipping mode",
                  "Apply moisture protection for sea freight or humid-climate destinations",
                  "Complete quality inspection before sealing the crate",
                  "Confirm insurance coverage for the crated shipment",
                  "Verify all required export documentation accompanies the crated cargo",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For heavy equipment moves, review our <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Heavy Machinery Relocation</Link> before shipping.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The difference between cargo that arrives exactly as it left and cargo that arrives damaged, recalibrated, or rejected at customs almost always traces back to one decision: whether the packaging was engineered for the specific item and journey, or assembled from generic materials never actually designed around what&apos;s inside.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built its custom crating practice around exactly that principle — 15+ years of engineering-first crating experience, ISPM 15 certified materials, and a professional export packing team that treats every crate as a structural design problem specific to the item inside it. Whether you&apos;re shipping a single precision instrument or managing recurring export volume for a full product line, that same engineering discipline applies to every crate we build.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Custom Crating Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re exporting a single piece of precision machinery or need ongoing crating support for recurring shipments, our team is ready to engineer protection built specifically around your cargo. Contact us today for a <strong className="text-foreground">free consultation and transparent quote</strong>.
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
                Get a Free Custom Crating Quote Today
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

export default CustomCratingServices;
