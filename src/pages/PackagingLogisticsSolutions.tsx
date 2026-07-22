import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  MapPin,
  Factory,
  Shirt,
  Activity,
  Cpu,
  Heart,
  Car,
  ShoppingBag,
  HardHat,
  UtensilsCrossed,
  Boxes,
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
    q: "What are packaging and logistics solutions?",
    a: "Packaging and logistics solutions combine export packing, industrial packaging, and freight management under one coordinated process, covering everything from initial packaging design through freight booking and final delivery.",
  },
  {
    q: "Why should packaging and logistics be managed by the same company?",
    a: "Coordinating packaging and freight under one provider ensures packaging is engineered around the actual shipping route, and freight decisions account for cargo fragility, reducing damage and delay compared to disconnected vendors.",
  },
  {
    q: "How much do packaging and logistics solutions cost?",
    a: "Costs depend on cargo type, fragility, freight mode, shipment volume, and destination. We provide a free, itemized quote covering both packaging and freight.",
  },
  {
    q: "Do you provide custom crating services?",
    a: "Yes, our custom crating services design engineered wooden crates specific to an item's dimensions, weight, and fragility for machinery, electronics, and high-value cargo.",
  },
  {
    q: "What is ISPM-15 and why does it matter?",
    a: "ISPM-15 is the international standard requiring heat treatment of wooden packaging material used in trade, mandatory for most wooden crates shipped internationally to avoid customs rejection.",
  },
  {
    q: "Which freight modes do you offer?",
    a: "We manage sea freight, air freight, and road freight, selecting the appropriate mode based on your cargo's timeline, volume, and budget priorities.",
  },
  {
    q: "Do you handle both domestic and international shipments?",
    a: "Yes, we provide packaging and logistics solutions for domestic distribution within Pakistan as well as international export and import shipments.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve manufacturing, textile export, pharmaceutical, electronics, medical equipment, automotive, retail, construction, and food and beverage industries, among others.",
  },
  {
    q: "Is my cargo insured during packaging and shipping?",
    a: "Yes, every shipment is covered by insurance against loss or damage throughout the entire process, from initial packing through final delivery.",
  },
  {
    q: "Which cities do you provide services in?",
    a: "We provide packaging and logistics solutions in Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and Quetta.",
  },
  {
    q: "Do you offer container logistics for FCL and LCL shipments?",
    a: "Yes, we manage both full container load and less-than-container load shipments based on your cargo volume.",
  },
  {
    q: "What packaging materials do you use?",
    a: "We use solid wood, hardwood, plywood, OSB panels, industrial foam, moisture barrier film, steel fasteners, and standard cardboard, selected based on cargo type.",
  },
  {
    q: "Can you handle customs clearance as part of your service?",
    a: "Yes, our licensed customs brokers manage export and import documentation and clearance for both packaging compliance and freight requirements.",
  },
  {
    q: "Do you provide warehousing services?",
    a: "Yes, we offer warehouse logistics integrated with freight scheduling for businesses needing storage coordination alongside shipping.",
  },
  {
    q: "How do you protect high-value or fragile cargo?",
    a: "We use engineered custom crating, custom-fitted cushioning, and moisture barrier protection matched to each item's specific fragility points and shipping route.",
  },
  {
    q: "Do you ship to international destinations?",
    a: "Yes, our logistics network supports shipments to over 100 countries across the Middle East, Europe, North America, and Asia.",
  },
  {
    q: "What is the difference between standard packaging and custom crating?",
    a: "Standard packaging uses generic materials and sizing, while custom crating is engineered specifically around an item's dimensions, weight, and fragility for maximum protection.",
  },
  {
    q: "How far in advance should I book packaging and freight services?",
    a: "We recommend booking at least two to three weeks in advance for international shipments, particularly during peak shipping seasons.",
  },
  {
    q: "Do you provide door-to-door delivery?",
    a: "Yes, our door-to-door logistics manage the complete journey from your facility to the final delivery address without handoffs between vendors.",
  },
  {
    q: "How do I get a quote for packaging and logistics solutions?",
    a: "Contact us via phone, WhatsApp, or our online quote form with your cargo details and shipping destination. We'll provide a transparent, itemized quote within 24 hours.",
  },
];

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Packaging & Logistics Solutions",
    name: "Packaging & Logistics Solutions | Best International Movers & Logistics",
    description:
      "Complete packaging and logistics solutions including export packing, custom crating, freight forwarding, container logistics, and door-to-door delivery.",
    url: "https://bestintlmovers.com/packaging-logistics-solutions/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Packaging & Logistics Solutions",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Export Packaging" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Crating" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freight Forwarding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Container Logistics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door-to-Door Logistics" } },
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
        name: "Packaging & Logistics Solutions",
        item: "https://bestintlmovers.com/packaging-logistics-solutions/",
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
    author: { "@type": "Organization", name: "Electronics Distributor, Karachi" },
    reviewBody:
      "Having packaging and freight under one team eliminated the damage disputes we had when using separate vendors — one accountable process made all the difference.",
  };
}

const serviceSeo = {
  title: "Packaging & Logistics Solutions — Complete Cargo Protection | Pakistan",
  description:
    "Professional packaging & logistics solutions in Pakistan — export packing, freight forwarding, container logistics & door-to-door delivery. 15+ years experience. Free quote.",
  keywords:
    "packaging & logistics solutions, packaging solutions Pakistan, logistics solutions Pakistan, export packaging services, industrial packaging, freight forwarding Pakistan, container logistics, door to door logistics, custom crating services, ISPM-15 packaging, cargo packaging company Pakistan, supply chain solutions Pakistan",
};

const logisticsSteps = [
  { title: "1. Shipment Assessment", text: "We start by understanding your cargo, volume, destination, and timeline to determine the right combination of packaging and freight approach for your specific shipment." },
  { title: "2. Carrier & Route Selection", text: "We evaluate freight options — sea, air, or road — and specific carrier choices based on cost, transit time, and reliability suited to your shipment's priorities." },
  { title: "3. Documentation Preparation", text: "We prepare export and import documentation, including commercial invoices, packing lists, and customs declarations, verified for accuracy before the shipment departs." },
  { title: "4. Customs Clearance", text: "Our licensed customs brokers manage export and import clearance, handling HS code classification and duty calculation to keep shipments moving without unnecessary delay." },
  { title: "5. Freight Booking & Transport", text: "We coordinate freight booking and transport execution, tracking your shipment through key milestones from origin to destination." },
  { title: "6. Final Delivery", text: "We coordinate final delivery to your specified destination, managing inland transport and any access requirements at the receiving location." },
];

const packagingSteps = [
  { title: "1. Cargo Inspection", text: "We physically assess the item — dimensions, weight, fragility, and existing handling constraints — before any packaging design work begins." },
  { title: "2. Packaging Design", text: "Based on the inspection, we determine the right packaging approach — standard commercial packing, protective cushioning, or full custom crating — matched to the cargo's specific needs." },
  { title: "3. Material Selection", text: "We select materials specific to the cargo type and shipping route, from lightweight cardboard for standard goods to ISPM-15 certified timber for export crating." },
  { title: "4. Construction & Packing", text: "Packaging is built and the item packed according to the design specification, with internal bracing and cushioning positioned at the item's actual fragility points." },
  { title: "5. Quality Inspection", text: "Before sealing, every shipment undergoes quality inspection confirming secure packing, correct labeling, and compliance documentation." },
  { title: "6. Loading & Dispatch", text: "Packaged cargo is loaded using appropriate handling equipment and dispatched according to the coordinated logistics plan." },
];

const PackagingLogisticsSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/packaging-logistics-solutions/"
        canonicalUrl="https://bestintlmovers.com/packaging-logistics-solutions/"
        ogTitle="Packaging & Logistics Solutions | Best International Movers & Logistics"
        ogDescription="Complete packaging and freight solutions — export packing, industrial packaging, container logistics, and door-to-door delivery across Pakistan. 15+ years experience."
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
                  Packaging & Logistics Solutions — Complete Cargo Protection & Freight Management
                </h1>
                <p className="text-muted-foreground mt-1">
                  Export Packing, Freight Forwarding & Door-to-Door Delivery Under One Team
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Export Packing</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Custom Crating</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Freight Forwarding</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Container Logistics</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Door-to-Door</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">ISPM-15</span>
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
              <strong className="text-foreground">Hero Summary:</strong> Every shipment depends on two things working together: packaging that protects what&apos;s inside, and logistics that gets it where it&apos;s going on time. <strong className="text-foreground">Best International Movers & Logistics</strong> brings <strong className="text-foreground">packaging and logistics solutions</strong> together under one roof, with 15+ years of experience, 5,000+ successful shipments, and a network spanning 100+ countries.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cargo damage claims and shipping delays rarely come from one dramatic failure — they come from the gap between how something was packed and how it was actually shipped. A crate built without knowing the freight route it would face, or a freight booking made without understanding the fragility of what&apos;s inside, creates exactly the kind of mismatch that causes damage, delay, and disputed insurance claims.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> provides complete <strong className="text-foreground">packaging and logistics solutions</strong> for businesses across Pakistan, combining professional export packing, industrial packaging, freight forwarding, and door-to-door delivery under a single accountable team — from textile exporters in Faisalabad to manufacturers in Lahore and pharmaceutical distributors in Karachi.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Professional Packaging & Logistics Matters</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Packaging Should Be Engineered Around the Actual Route — A crate built for domestic road delivery has different requirements than one facing six weeks of sea freight through humid climate zones",
                  "Logistics Decisions Should Account for Cargo Fragility — Route and carrier selection should factor in how much handling and transfer the cargo can actually tolerate",
                  "Single Accountability Reduces Risk — When one team manages both packaging and freight, there's no gap where responsibility gets disputed between separate vendors",
                  "Documentation Consistency — Export packaging compliance (ISPM-15) and freight documentation need to align to avoid customs delays",
                  "Faster Problem Resolution — A single accountable provider can trace issues back through the entire process",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">About Our Packaging & Logistics Solutions</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Our packaging and logistics solutions cover the complete journey of your cargo — from initial packaging design through freight booking, customs clearance, and final delivery — managed as one coordinated process rather than separate transactions with separate vendors. Whether you need a single custom crate for a precision instrument or ongoing packaging and freight support for recurring export volume, our team applies the same integrated approach.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Complete Packaging Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Export Packing — Professional export-grade packing designed to withstand international shipping conditions",
                  "Industrial Packaging — Heavy-duty packaging for machinery, equipment, and industrial cargo",
                  "Custom Crating — Engineered wooden crates designed around specific dimensions, weight, and fragility",
                  "Wooden Crating — ISPM-15 certified timber crates built from pine, hardwood, and plywood",
                  "Protective Packaging — Cushioning, moisture barriers, and shock-absorbing materials",
                  "Custom Packaging — Solutions for irregularly shaped, oversized, or unusually fragile cargo",
                  "Cargo Packaging — General commercial packaging for retail goods and standard commercial shipments",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                See our dedicated{" "}
                <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>{" "}
                and{" "}
                <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>{" "}
                for engineering-first crating and ISPM-15 timber solutions.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Complete Logistics Solutions</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Freight Forwarding — Coordinated booking and management of sea, air, and road freight",
                  "Container Logistics — Full container load (FCL) and less-than-container load (LCL) coordination",
                  "Freight Management — Ongoing carrier selection, route optimization, and cost management",
                  "Warehouse Logistics — Storage and inventory coordination integrated with freight scheduling",
                  "Door-to-Door Logistics — Complete shipment management from your facility to final delivery",
                  "Cargo Handling — Professional loading, unloading, and transfer at every stage",
                  "Export Logistics — Complete export documentation, customs clearance, and freight coordination",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                Explore our{" "}
                <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>,{" "}
                <Link to="/services/sea-freight-services/" className="text-gold hover:underline">Sea Freight Services</Link>, and{" "}
                <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link>{" "}
                for related freight support.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Factory, title: "Manufacturing", text: "Packaging and freight for finished products, components, and industrial equipment moving domestically and internationally." },
                  { icon: Shirt, title: "Textile & Garment Export", text: "Export packing and freight coordination for Faisalabad and Sialkot, where tight retail buyer deadlines make coordinated timing especially important." },
                  { icon: Activity, title: "Pharmaceutical", text: "Temperature-conscious packaging and freight management for regulated products requiring an unbroken cold chain." },
                  { icon: Cpu, title: "Electronics", text: "Anti-static, shock-protected packaging combined with careful freight handling for sensitive electronic components." },
                  { icon: Heart, title: "Medical Equipment", text: "Precision packaging and logistics for diagnostic and hospital equipment requiring calibration protection during transit." },
                  { icon: Car, title: "Automotive", text: "Packaging and freight coordination for automotive parts, with attention to preventing surface damage on precision-machined parts." },
                  { icon: ShoppingBag, title: "Retail & E-Commerce", text: "Packaging and distribution logistics supporting inventory movement between suppliers, warehouses, and retail locations." },
                  { icon: HardHat, title: "Construction & Heavy Industry", text: "Industrial packaging and freight coordination for construction materials and heavy equipment." },
                  { icon: UtensilsCrossed, title: "Food & Beverage", text: "Packaging and freight solutions balancing transit time and protection against spoilage risk for food exporters." },
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Materials We Use</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Solid Wood & Hardwood — For structural crating requiring maximum strength for heavy or high-value cargo",
                  "Plywood & OSB Panels — Lightweight, cost-effective panel materials for moderate-weight crating",
                  "Industrial Foam — Custom-cut cushioning matched to each item's specific fragility points",
                  "Moisture Barrier Film — Protective materials preventing humidity damage during extended transit",
                  "Steel Fasteners & Reinforcement — Reinforced hardware for high-stress structural joints",
                  "Corrugated Cardboard — Cost-effective packaging for lighter commercial goods",
                  "Stretch Wrap & Strapping — Securing materials for palletized cargo and general commercial shipments",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Cargo We Handle</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Our packaging and logistics solutions cover industrial machinery, electronics and IT equipment, medical and laboratory equipment, textiles and finished garments, furniture, automotive parts, food and beverage products, pharmaceutical goods, and general commercial and retail merchandise — spanning the full range of cargo categories Pakistani businesses need to move both domestically and internationally.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our End-to-End Logistics Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {logisticsSteps.map((step) => (
                  <div key={step.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Packaging Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {packagingSteps.map((step) => (
                  <div key={step.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of Choosing Us</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Single Accountable Team — Packaging and freight decisions made together, eliminating coordination gaps",
                  "Reduced Damage Claims — Packaging engineered around the actual shipping route",
                  "Faster Customs Clearance — Consistent documentation standards across packaging and freight paperwork",
                  "Cost Predictability — Transparent, itemized quotes covering both packaging and freight",
                  "Time Savings — One point of contact managing your entire shipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Businesses Trust Best International Movers</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven track record across packaging and logistics throughout Pakistan",
                  "5,000+ Successful Shipments — Substantial completed volume across export packing, industrial packaging, and freight management",
                  "100+ Countries Served — A genuinely global logistics network supporting international shipments",
                  "Licensed Logistics Company — Fully licensed for both domestic and international freight operations",
                  "Certified Packaging Team — Trained specialists in export packing, industrial packaging, and ISPM-15 compliant crating",
                  "Door-to-Door Logistics — Complete shipment management without handoffs between disconnected vendors",
                  "Professional Export Packers — Specialists who understand both protective packaging and freight handling realities",
                  "24/7 Customer Support — Continuous availability for time-sensitive packaging and shipping needs",
                  "Safe Cargo Handling — Documented safety protocols across every stage of packaging and freight handling",
                  "International Standards — ISPM-15 certified materials and export documentation meeting international compliance",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">How We Protect High-Value Cargo</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                High-value and fragile cargo requires protection that goes beyond standard packaging. Our approach includes engineering assessment of the item&apos;s specific fragility points, custom-fitted cushioning rather than generic padding, moisture barrier protection for humidity-sensitive items, and — for particularly high-value shipments — full{" "}
                <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>{" "}
                with engineered internal bracing designed around the exact item being shipped.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Shipping Standards & Export Compliance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                International shipments must meet both packaging material standards and cargo-specific documentation requirements — properly certified wooden packaging, accurate commercial invoices and packing lists, and any product-specific certifications required by the destination country.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">ISPM-15</strong> is the international phytosanitary standard requiring heat treatment of wooden packaging material used in international trade. Non-compliant wooden packaging risks rejection or forced treatment at destination customs, which is why all wooden crating and packaging materials we use are heat-treated and certified. See our{" "}
                <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>{" "}
                for a full breakdown of ISPM-15 compliance.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Quality Assurance & Insurance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every shipment undergoes quality inspection before dispatch, confirming secure packaging, accurate documentation, and correct labeling — a distinct, documented checkpoint in our process, not an informal check before a shipment leaves our facility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every shipment we handle — packaging and freight combined — is covered by insurance against loss or damage throughout the entire journey, from initial packing through final delivery.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Areas We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide packaging and logistics solutions across Pakistan&apos;s major commercial and industrial hubs, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and Quetta, with freight coordination through Karachi Port, Port Qasim, and Islamabad International Airport.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our logistics network supports shipments to over 100 countries, covering major trade destinations across the Middle East, Europe, North America, and Asia, with freight forwarding and customs clearance support on both ends of the journey.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Pricing Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Cargo type and fragility — Standard commercial packaging costs less than custom-engineered crating",
                  "Freight mode — Sea, air, or road freight, each with different base cost structures",
                  "Shipment volume and weight — Larger or heavier shipments affect both packaging and freight pricing",
                  "Destination — International shipments involve additional customs and documentation costs",
                  "Service scope — Port-to-port versus full door-to-door management",
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-4">
                We provide a <strong className="text-foreground">free, itemized quote</strong> covering both packaging and freight for every shipment.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Types Comparison</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Packaging Type", "Best Suited For", "Relative Cost"]}
                rows={[
                  ["Standard Cardboard", "Lightweight retail goods, documents", "Low"],
                  ["Protective Cushioned Packaging", "Electronics, moderately fragile items", "Moderate"],
                  ["Plywood Crating", "Moderate-weight machinery, furniture", "Moderate-High"],
                  ["Solid Timber Crating", "Heavy machinery, high-value equipment", "High"],
                  ["Custom Engineered Crating", "Precision instruments, art, irreplaceable cargo", "Highest"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Materials Comparison</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Material", "Strength", "Weight", "Best Use Case"]}
                rows={[
                  ["Pine Wood", "Moderate", "Light", "General-purpose crating, cost-sensitive shipments"],
                  ["Hardwood", "High", "Moderate-Heavy", "Heavy machinery, high-value cargo"],
                  ["Plywood", "Moderate-High", "Light-Moderate", "Crate walls and bases, moderate-weight cargo"],
                  ["Cardboard", "Low", "Very Light", "Lightweight retail goods, documents"],
                  ["Steel-Reinforced Timber", "Very High", "Heavy", "Oversized or exceptionally heavy cargo"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Road vs. Air vs. Sea Freight</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Road Freight", "Air Freight", "Sea Freight"]}
                rows={[
                  ["Typical transit time", "Hours to days (domestic)", "Days", "Weeks"],
                  ["Relative cost", "Low-Moderate", "High", "Low"],
                  ["Best for", "Domestic distribution", "Urgent, high-value cargo", "Bulk, high-volume shipments"],
                  ["Volume suitability", "Moderate", "Smaller shipments", "Larger shipments"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries Comparison</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Industry", "Primary Packaging Need", "Primary Logistics Need"]}
                rows={[
                  ["Textile Export", "Moisture-resistant wrapping, bulk packing", "Sea freight, port coordination"],
                  ["Electronics", "Anti-static, shock-protected packaging", "Careful handling, air freight for urgent orders"],
                  ["Pharmaceutical", "Temperature-controlled packaging", "Cold chain logistics"],
                  ["Heavy Machinery", "Structural crating, rigging", "Route survey, heavy lift transport"],
                  ["Medical Equipment", "Calibration-protective crating", "Careful handling, insured transport"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Separate Vendors vs. Integrated Solutions</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Separate Packaging & Freight Vendors", "Integrated Packaging & Logistics Solution"]}
                rows={[
                  ["Accountability", "Split between vendors, often disputed", "Single point of accountability"],
                  ["Documentation consistency", "Frequently inconsistent", "Consistent across packaging and freight"],
                  ["Damage root-cause visibility", "Limited, each vendor sees only their part", "Full visibility across the entire journey"],
                  ["Coordination effort", "Managed by the customer", "Managed by the provider"],
                  ["Cost transparency", "Separate, harder to compare", "Consolidated, itemized quote"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Case Study: Electronics Distributor, Combined Packaging & Freight Overhaul
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                An electronics distributor in Karachi was managing packaging through one vendor and freight through a separate logistics provider, with no coordination between the two. Products were arriving at the freight company already packed in generic cardboard boxes that hadn&apos;t been designed with the actual freight route in mind, resulting in a recurring pattern of transit damage that neither vendor took clear responsibility for.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We took over both functions under one coordinated process, starting with an assessment of the specific damage patterns. This revealed that most damage was occurring during a specific transfer point in their domestic distribution route — information the previous packaging vendor never had visibility into. We redesigned the packaging specifically around that transfer point&apos;s handling conditions, adding targeted reinforcement rather than uniformly upgrading all packaging materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Combined with route adjustments on the freight side, the business saw a significant reduction in transit damage claims over the following two quarters, along with faster resolution when issues did occur — since one team now had visibility into both the packaging and the freight execution.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Confirm cargo weight, dimensions, and fragility before selecting packaging type",
                  "Match packaging material to the item's specific weight class and shipping route",
                  "Confirm ISPM-15 certification for wooden packaging on international shipments",
                  "Apply moisture protection for sea freight or humid-climate destinations",
                  "Complete quality inspection before sealing and dispatch",
                  "Confirm insurance coverage for the packaged shipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Logistics Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Confirm destination, freight mode, and required delivery timeline",
                  "Verify export and import documentation requirements",
                  "Confirm customs clearance requirements at both origin and destination",
                  "Book freight capacity in advance during peak shipping periods",
                  "Confirm insurance coverage for the freight journey",
                  "Establish a single point of contact managing the full shipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Managing Packaging and Freight Separately — Using disconnected vendors creates coordination gaps that cause damage and delay",
                  "Using Generic Packaging Regardless of Route — Applying the same approach to domestic delivery and six-week sea freight",
                  "Skipping ISPM-15 Certification — Shipping wooden packaging internationally without proper heat-treatment certification",
                  "Booking Freight Without Considering Cargo Fragility — Selecting routes based purely on cost without accounting for handling tolerance",
                  "No Consolidated Accountability — Having no single party responsible for the full shipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Request packaging and freight quotes from the same provider to identify genuine coordination advantages",
                  "Ask any provider directly how packaging decisions inform their freight route recommendations, and vice versa",
                  "For recurring shipments, review actual damage patterns periodically rather than assuming your current approach is adequate",
                  "Confirm ISPM-15 certification documentation accompanies every wooden crate on international shipments",
                  "Build customs clearance time into your planning as a distinct variable from freight transit time",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Us</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Businesses choose our combined packaging and logistics solutions because the coordination itself is the value — not just competent packaging, and not just reliable freight, but the two working together as one process with one team accountable for the outcome. For deeper background, read our{" "}
                <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link>{" "}
                or explore{" "}
                <Link to="/services/project-logistics-pakistan/" className="text-gold hover:underline">Project Logistics Pakistan</Link>{" "}
                for heavy industrial cargo.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                The businesses that consistently avoid damaged shipments, customs delays, and disputed responsibility are the ones that stop treating packaging and logistics as separate problems. <strong className="text-foreground">Best International Movers & Logistics</strong> has built its packaging and logistics solutions around exactly that integrated approach — 15+ years of experience, 5,000+ successful shipments, and a single accountable team managing your cargo from initial packaging design through final delivery across Pakistan and 100+ countries worldwide.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Packaging & Logistics Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need custom crating for a single high-value item or ongoing packaging and freight support for recurring shipments, our team is ready to build a coordinated solution around your cargo. Contact us today for a <strong className="text-foreground">free consultation and transparent quote</strong>.
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
                <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>
                <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>
                <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>
                <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link>
                <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link>
                <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link>
                <Link to="/services/medical-equipment-shipping/" className="text-gold hover:underline">Medical Equipment Shipping</Link>
                <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link>
                <Link to="/locations/cargo-services-sialkot/" className="text-gold hover:underline">Cargo Services Sialkot</Link>
                <Link to="/contact" className="text-gold hover:underline">Get a Free Quote</Link>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Packaging & Logistics</h2>
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
                Request Free Packaging & Logistics Quote
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

export default PackagingLogisticsSolutions;
