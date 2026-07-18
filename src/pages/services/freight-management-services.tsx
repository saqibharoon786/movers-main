import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Package,
  Ship,
  Truck,
  FileText,
  Globe,
  BarChart3,
  Route,
  Activity,
  MapPin,
  Factory,
  Wrench,
  Heart,
  ShoppingBag,
  UtensilsCrossed,
  Cpu,
  AlertTriangle,
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
    q: "What are freight management services?",
    a: "Freight management services coordinate every stage of a shipment's journey — planning, carrier selection, documentation, customs clearance, tracking, and delivery — as a single, ongoing managed process rather than individual bookings.",
  },
  {
    q: "How is freight management different from freight forwarding?",
    a: "Freight forwarding typically arranges transport for a single shipment, while freight management takes a broader, ongoing view — optimizing costs, consolidating cargo, and managing risk across a business's full shipping activity over time.",
  },
  {
    q: "How much do freight management services cost?",
    a: "Costs depend on freight mode, cargo volume, route complexity, and service scope. We provide a free, itemized quote reflecting your specific shipping needs.",
  },
  {
    q: "Which freight modes do you manage?",
    a: "We manage sea freight, air freight, road freight, rail freight where applicable, and multimodal transport combining multiple modes within a single shipment.",
  },
  {
    q: "Can freight management reduce our shipping costs?",
    a: "Yes, through volume-based carrier negotiation, route optimization, and cargo consolidation opportunities that are difficult to access when booking shipments individually.",
  },
  {
    q: "Do you provide real-time shipment tracking?",
    a: "Yes, we provide milestone-based tracking across sea, air, and road freight, giving businesses consolidated visibility throughout the shipment journey.",
  },
  {
    q: "Which ports do you work with in Pakistan?",
    a: "We coordinate freight through Karachi Port and Port Qasim for international sea freight, alongside major domestic hubs including Lahore, Islamabad, Rawalpindi, Faisalabad, and Sialkot.",
  },
  {
    q: "Do you handle customs clearance as part of freight management?",
    a: "Yes, our licensed customs brokers manage both export and import clearance, including HS code classification and duty calculation.",
  },
  {
    q: "What is the difference between FCL and LCL?",
    a: "FCL means your shipment has a dedicated container, while LCL means your shipment shares container space with other cargo, reducing cost for smaller volumes.",
  },
  {
    q: "Is my cargo insured during freight management?",
    a: "Yes, all cargo is covered by insurance against loss or damage throughout the entire freight journey, across every mode we manage.",
  },
  {
    q: "Can you manage freight for multiple suppliers or vendors?",
    a: "Yes, we coordinate freight across multiple origin points and suppliers, consolidating shipments where it creates genuine cost or efficiency advantages.",
  },
  {
    q: "What industries do you provide freight management for?",
    a: "We serve manufacturing, retail, construction, automotive, healthcare, pharmaceutical, textile, food and beverage, electronics, e-commerce, and import/export businesses, among others.",
  },
  {
    q: "Do you provide freight management for domestic shipments within Pakistan?",
    a: "Yes, we manage domestic road freight between major Pakistani cities alongside our international sea and air freight services.",
  },
  {
    q: "How does cargo consolidation work?",
    a: "Cargo consolidation combines multiple smaller shipments into shared container or freight space, reducing per-unit shipping costs while maintaining reasonable delivery timelines.",
  },
  {
    q: "What reporting do you provide for ongoing freight management?",
    a: "For businesses with recurring freight needs, we provide consolidated reporting covering cost trends, transit time performance, and recurring operational issues.",
  },
  {
    q: "Can you manage project cargo or oversized shipments?",
    a: "Yes, we provide specialized freight management for project cargo and heavy equipment, including custom routing and handling plans specific to oversized freight.",
  },
  {
    q: "How do you handle dangerous goods or hazardous cargo?",
    a: "We assess hazardous cargo requirements during shipment planning and coordinate the specialized handling, documentation, and regulatory compliance these categories require.",
  },
  {
    q: "What documents are required for international freight?",
    a: "Common requirements include a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and customs declarations for both export and import.",
  },
  {
    q: "How far in advance should I plan a freight shipment?",
    a: "We recommend planning at least two to three weeks ahead for international shipments, particularly during peak shipping seasons when carrier capacity tightens.",
  },
  {
    q: "How do I get started with freight management services?",
    a: "Contact us via phone, WhatsApp, or our online quote form with details about your shipping needs. We'll assess your freight patterns and provide a tailored management proposal and quote.",
  },
];

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Freight Management Services",
    name: "Freight Management Services | Best International Movers & Logistics",
    description:
      "End-to-end freight management including carrier selection, route optimization, documentation, customs clearance, real-time tracking, and delivery coordination across sea, air, and road freight.",
    url: "https://bestintlmovers.com/services/freight-management-services/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freight Management Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sea Freight Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Freight Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Road Freight Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customs Clearance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Freight Cost Optimization" } },
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
        name: "Freight Management Services",
        item: "https://bestintlmovers.com/services/freight-management-services/",
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
    author: { "@type": "Organization", name: "Electronics Distributor Client" },
    reviewBody:
      "Consolidating our freight under one managed relationship reduced our total shipping cost and gave us visibility we never had across three separate vendors.",
  };
}

const serviceSeo = {
  title: "Freight Management Services — Sea, Air & Road Freight | Pakistan",
  description:
    "Professional freight management services in Pakistan — carrier selection, route optimization, customs clearance & real-time tracking. 15+ years experience. Free consultation.",
  keywords:
    "freight management services, freight management services Pakistan, freight management company, freight logistics services, international freight management, supply chain management services, road freight management, air freight management, sea freight management, import export logistics, cargo management services, freight cost optimization, multimodal transport services, Karachi Port freight, Port Qasim freight, end to end freight management",
};

const FreightManagementServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/services/freight-management-services/"
        canonicalUrl="https://bestintlmovers.com/services/freight-management-services/"
        ogTitle="Freight Management Services | Best International Movers & Logistics"
        ogDescription="End-to-end freight management — carrier selection, customs clearance, real-time tracking, and cost optimization across sea, air, and road freight. 15+ years experience."
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
                <Route size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Freight Management Services — End-to-End Cargo & Supply Chain Coordination
                </h1>
                <p className="text-muted-foreground mt-1">
                  Sea, Air & Road Freight Management for Businesses Across Pakistan
                </p>
              </div>
            </div>

            <InfoBox variant="blue">
              <strong className="text-foreground">Quick Answer:</strong> Freight management services coordinate every stage of a shipment&apos;s journey — carrier selection, route planning, documentation, customs clearance, tracking, and delivery — as a single managed process rather than a series of disconnected bookings. <strong className="text-foreground">Best International Movers & Logistics</strong> provides complete freight management across sea, air, and road freight for businesses in Pakistan, backed by 15+ years of experience, 5,000+ successful shipments, and a global network spanning 100+ countries.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Key Takeaways</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Freight management is broader than freight forwarding — it includes cost optimization, risk management, and performance reporting, not just booking transport",
                  "Businesses using structured freight management typically see lower per-shipment costs through carrier negotiation and route optimization",
                  "Real-time tracking and digital documentation reduce the visibility gaps that cause the most disruption in supply chains",
                  "The right freight mode — sea, air, road, or multimodal — depends on cargo type, urgency, and budget, not a single default choice",
                  "A single freight management partner across all modes reduces the coordination risk of managing separate vendors for each shipment type",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every business that moves goods — whether importing raw materials, exporting finished products, or distributing inventory domestically — eventually faces the same operational question: who is actually managing the freight, not just booking it? There&apos;s a meaningful difference between a vendor who quotes you a shipping rate and a partner who manages your entire freight operation — carrier selection, cost optimization, documentation accuracy, customs coordination, and delivery performance — as an ongoing, accountable function.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Best International Movers & Logistics</strong> provides <strong className="text-foreground">freight management services</strong> for businesses across Pakistan, managing sea, air, and road freight as an integrated operation rather than isolated transactions. With 15+ years of experience, more than 5,000 successful shipments completed, and a freight network spanning 100+ countries, this page explains what freight management actually involves — and how it differs meaningfully from simply booking a shipment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Explore our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> division or <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link> programs for related ongoing freight support.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Are Freight Management Services?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Freight management services refer to the end-to-end coordination of a company&apos;s cargo movement — including shipment planning, carrier selection, route optimization, documentation, customs clearance, real-time tracking, delivery coordination, and ongoing performance reporting — managed as a continuous operational function rather than a single transactional booking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Where a freight forwarder typically arranges transport for an individual shipment, <strong className="text-foreground">freight management</strong> takes a broader view: analyzing shipping patterns across multiple shipments, negotiating carrier rates based on volume, identifying route and consolidation efficiencies, and providing the reporting visibility a business needs to actually manage its supply chain rather than just react to it shipment by shipment. See our <Link to="/services/freight-forwarding-services/" className="text-gold hover:underline">Freight Forwarding Services</Link> for transactional shipment booking.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Freight Management Matters</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For businesses moving cargo regularly, the absence of structured freight management shows up as a set of recurring, avoidable costs: paying spot-market rates on every shipment instead of negotiated volume pricing, re-explaining shipping requirements to a different representative every time, absorbing customs delays caused by inconsistent documentation standards across vendors, and having no consolidated visibility into total freight spend or performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Freight management matters because it replaces this pattern with a structured, accountable process — one where a single team understands your cargo, your priorities, and your operational constraints well enough to make decisions that actually reduce cost and risk over time, not just complete the shipment in front of them.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of Professional Freight Management</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Lower Total Shipping Costs — Volume-based carrier negotiation and route optimization reduce per-shipment costs compared to ad hoc booking",
                  "Improved Delivery Reliability — Structured carrier selection and route planning reduce the variability that causes missed delivery windows",
                  "Better Supply Chain Visibility — Real-time tracking and consolidated reporting give businesses actual insight into where cargo is and how freight spend is trending",
                  "Reduced Customs Delays — Consistent, reviewed documentation standards applied across every shipment rather than varying by vendor",
                  "Risk Mitigation — Proactive identification of potential delays, capacity constraints, or compliance issues before they affect a shipment",
                  "Time Savings for Internal Teams — Freight decisions handled by a dedicated freight management partner instead of consuming internal staff time on logistics coordination",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Best International Movers & Logistics?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven, specific track record in freight management, not generic transport booking",
                  "5,000+ Successful Shipments — Substantial completed shipment volume across sea, air, and road freight for businesses throughout Pakistan",
                  "100+ Countries Served — A genuinely global freight network supporting both import and export operations",
                  "Licensed Logistics Company — Fully licensed for domestic and international freight management and customs brokerage",
                  "Global Freight Network — Established partnerships with major carriers including Maersk Line, MSC Shipping, Emirates SkyCargo, DHL Global, and DB Schenker",
                  "Professional Freight Coordinators — Dedicated staff managing your freight as an ongoing relationship, not a rotating point of contact",
                  "24/7 Shipment Monitoring — Continuous tracking and support availability, not limited to standard business hours",
                  "Door-to-Door Logistics — Complete coordination from origin pickup to final delivery, across every freight mode",
                  "Customs Clearance Experts — Licensed brokers managing both export and import documentation and compliance",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Freight Management Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Freight management isn&apos;t a single action — it&apos;s eleven distinct functions working together as one coordinated system, each one affecting how well the next stage performs.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Shipment Planning",
                    text: "We start by understanding your cargo — type, volume, weight, timeline, and budget — to build a shipment plan that matches the right freight mode and routing to your actual priorities, rather than defaulting to whatever's easiest to book. This stage also identifies any special handling requirements — temperature control, oversized dimensions, or regulatory documentation — before they become last-minute complications.",
                  },
                  {
                    title: "2. Carrier Selection",
                    text: "Rather than booking with a single default carrier, we evaluate multiple carrier options based on your specific route, comparing rates, transit times, and reliability track records to select the option that best fits your shipment's priorities. For businesses with recurring freight needs, this evaluation also considers which carriers offer the best long-term rate structure for your specific volume and routing pattern.",
                  },
                  {
                    title: "3. Route Optimization",
                    text: "We analyze available routing options — direct versus transshipment routes, port and airport combinations, and inland transport paths — to identify the option that balances cost, transit time, and reliability for your specific shipment.",
                  },
                  {
                    title: "4. Cargo Consolidation",
                    text: "For businesses with multiple smaller shipments, we identify consolidation opportunities — combining cargo into shared container space or coordinated freight bookings — to reduce per-unit shipping costs without sacrificing delivery timelines.",
                  },
                  {
                    title: "5. Documentation",
                    text: "We prepare and verify all required shipping documentation — commercial invoices, packing lists, bills of lading, certificates of origin, and customs declarations — before cargo departs, since documentation accuracy is the single biggest factor in how smoothly a shipment clears customs.",
                  },
                  {
                    title: "6. Customs Clearance",
                    text: "Our licensed customs brokers manage both export and import clearance, handling HS code classification, duty calculation, and regulatory compliance to keep your cargo moving instead of sitting at a customs checkpoint.",
                  },
                  {
                    title: "7. Real-Time Tracking",
                    text: "Every shipment we manage is tracked through key milestones — origin pickup, port or airport departure, transit, arrival, and final delivery — with status updates provided directly to your team.",
                  },
                  {
                    title: "8. Delivery Coordination",
                    text: "We coordinate final delivery to your specified destination, managing inland transport, delivery scheduling, and any access requirements at the receiving location.",
                  },
                  {
                    title: "9. Performance Reporting",
                    text: "For businesses with recurring freight needs, we provide consolidated performance reporting — covering cost trends, transit time performance, and any recurring issues — giving you the visibility needed to make informed logistics decisions going forward.",
                  },
                  {
                    title: "10. Freight Cost Optimization",
                    text: "Beyond individual shipment pricing, we continuously look for structural cost savings — better carrier rates based on accumulated volume, more efficient routing, or consolidation opportunities that only become apparent when freight is managed holistically.",
                  },
                  {
                    title: "11. Risk Management",
                    text: "We proactively identify potential risks — carrier capacity constraints during peak seasons, regulatory changes affecting specific cargo categories, or route disruptions — and adjust plans before these risks actually affect your shipment's timeline or cost.",
                  },
                ].map((step) => (
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
                  { icon: Factory, title: "Manufacturing", text: "Inbound raw material logistics and outbound finished goods freight management, coordinated around production schedules." },
                  { icon: ShoppingBag, title: "Retail", text: "Inventory freight management between suppliers, warehouses, and retail locations, supporting predictable restocking cycles." },
                  { icon: Wrench, title: "Construction", text: "Freight management for construction materials and heavy equipment, including specialized transport for oversized cargo." },
                  { icon: Truck, title: "Automotive", text: "Coordinated freight for vehicles, parts, and automotive manufacturing components across import and export operations." },
                  { icon: Heart, title: "Healthcare", text: "Time-sensitive freight management for medical equipment and healthcare supply chains. See our Medical Equipment Shipping services.", link: "/services/medical-equipment-shipping/" },
                  { icon: Activity, title: "Pharmaceutical", text: "Temperature-controlled freight management for regulated pharmaceutical products requiring an unbroken cold chain." },
                  { icon: Package, title: "Textile", text: "Freight management for Pakistan's major textile export sector, connecting manufacturing hubs to international buyers." },
                  { icon: UtensilsCrossed, title: "Food & Beverage", text: "Freight management for food exporters, balancing transit time and temperature control against spoilage risk." },
                  { icon: Cpu, title: "Electronics", text: "Freight management with attention to humidity, shock, and handling sensitivity specific to electronic components." },
                  { icon: Globe, title: "E-commerce", text: "Freight management supporting fast-moving inventory cycles and distributed fulfillment operations." },
                  { icon: Ship, title: "Import & Export Businesses", text: "End-to-end freight management combining freight booking with customs brokerage under one coordinated relationship.", link: "/services/import-export-services-pakistan/" },
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Freight We Manage</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Sea Freight — The most cost-effective option for bulk and large-volume cargo, departing from Karachi Port or Port Qasim for international shipments",
                  "Air Freight — The fastest option for urgent or high-value cargo, suited to time-sensitive shipments where speed outweighs the cost premium",
                  "Road Freight — Domestic haulage connecting inland origin points — including Lahore, Islamabad, Rawalpindi, Faisalabad, and Sialkot — to ports and airports",
                  "Rail Freight (Where Applicable) — For specific domestic bulk cargo routes where rail infrastructure offers a viable alternative to road transport",
                  "Multimodal Transport — Combined freight modes within a single shipment managed as one coordinated movement rather than separate bookings",
                  "Container Freight — Standardized container shipping via FCL or LCL; explore our sea freight and freight forwarding services for container shipments",
                  "Bulk Cargo — Non-containerized freight for commodities and raw materials shipped in large volumes",
                  "Project Cargo — Specialized freight management for large-scale shipments tied to infrastructure or industrial projects",
                  "Heavy Equipment — Freight management for industrial machinery and construction equipment, including rigging and permit coordination",
                  "Dangerous Goods (General Overview) — Hazardous cargo categories requiring specialized handling, documentation, and regulatory compliance",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For urgent cargo, check our <Link to="/air-freight-islamabad/" className="text-gold hover:underline">Air Freight Islamabad</Link> services. For heavy machinery, see our <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link> expertise.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Freight Management Technologies</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "GPS Tracking — Real-time location tracking for road freight and container shipments",
                  "Shipment Visibility — Milestone-based tracking across sea, air, and road freight, consolidated into a single view",
                  "Digital Documentation — Electronic documentation management for commercial invoices, packing lists, and customs paperwork",
                  "Inventory Coordination — Integration between freight schedules and inventory planning for just-in-time supply chains",
                  "Warehouse Integration — Coordination between freight arrival schedules and warehouse receiving operations",
                  "Supply Chain Analytics — Performance reporting and trend analysis across shipment history",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Freight Management vs. Freight Forwarding</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Freight Management", "Freight Forwarding"]}
                rows={[
                  ["Scope", "Ongoing, holistic coordination across all shipments", "Typically transaction-based, per shipment"],
                  ["Cost approach", "Volume-based optimization over time", "Per-shipment pricing"],
                  ["Reporting", "Consolidated performance reporting", "Limited to individual shipment status"],
                  ["Relationship", "Dedicated coordinator familiar with your business", "May vary by shipment or representative"],
                  ["Risk management", "Proactive, ongoing risk identification", "Typically reactive, addressed per shipment"],
                  ["Best suited for", "Businesses with recurring or complex freight needs", "One-off or infrequent shipments"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Air Freight vs. Sea Freight</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Air Freight", "Sea Freight"]}
                rows={[
                  ["Typical transit time", "Days", "Weeks"],
                  ["Relative cost", "Higher per kg/cbm", "Lower per kg/cbm"],
                  ["Best for", "Urgent, high-value, time-sensitive cargo", "Bulk, high-volume, non-urgent cargo"],
                  ["Volume suitability", "Smaller shipments", "Larger shipments"],
                  ["Typical use case", "Documents, samples, urgent parts, perishables", "Full container loads, bulk commodities, household goods"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">FCL vs. LCL</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "FCL (Full Container Load)", "LCL (Less-than-Container Load)"]}
                rows={[
                  ["Container use", "Dedicated to your cargo", "Shared with other shipments"],
                  ["Best for", "Larger shipments", "Smaller shipments"],
                  ["Relative cost", "More economical at higher volumes", "More economical for smaller volumes"],
                  ["Handling", "Direct loading and sealing", "Consolidation and deconsolidation"],
                  ["Damage risk", "Lower", "Slightly higher due to shared handling"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Domestic vs. International Freight</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Domestic freight management within Pakistan focuses on road (and where applicable, rail) transport between major cities — Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, and Sialkot — typically involving shorter transit times and more straightforward documentation than international shipments. International freight management adds customs clearance, cross-border documentation, and carrier coordination across sea and air freight modes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Businesses managing both domestic distribution and international trade benefit from a single freight management partner who understands how these two operations connect — for example, coordinating inland road transport timing with international vessel booking cutoffs at Karachi Port or Port Qasim. See our <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link> and <Link to="/locations/cargo-services-sialkot/" className="text-gold hover:underline">Cargo Services Sialkot</Link> pages for regional freight support.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Freight mode — Sea, air, or road freight, each with different base cost structures",
                  "Cargo volume and weight — Larger or heavier shipments affect both freight mode selection and pricing",
                  "Route complexity — Direct routes versus those requiring transshipment or multiple handling points",
                  "Consolidation opportunities — Whether cargo can share container or freight space with other shipments",
                  "Customs and documentation complexity — Additional certifications or regulated cargo categories affecting processing cost",
                  "Service scope — Port-to-port versus full door-to-door management",
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-4">
                We provide a <strong className="text-foreground">free, itemized quote</strong> for every freight management engagement, reflecting your actual cargo and requirements rather than a generic rate card. <Link to="/contact" className="text-gold hover:underline">Get a Free Quote</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Transit Time Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Transit time depends on freight mode, route, and current carrier schedules — air freight typically measured in days, sea freight in weeks, and road freight in hours to a few days depending on domestic distance. Beyond the base transit time, businesses should also account for customs clearance processing time at both origin and destination, which can add anywhere from a few hours to several days depending on documentation completeness and current port or airport processing volumes.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Required Documentation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Commercial Invoice — Reflecting accurate transaction value for customs assessment at the destination",
                  "Packing List — Itemized breakdown of shipment contents, weights, and dimensions, matched precisely against the physical cargo",
                  "Bill of Lading or Air Waybill — The official shipping contract and receipt of goods",
                  "Certificate of Origin — Supporting preferential tariff treatment where applicable under relevant trade agreements",
                  "Customs Declarations — Required for both export clearance in Pakistan and import clearance at the destination",
                  "Product-Specific Certifications — Including phytosanitary certificates, safety certifications, or other regulatory documentation",
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-4">
                Documentation errors and inconsistencies remain the leading cause of customs delays we see across both export and import shipments. Read our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link> before your first shipment.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Import, Export & Customs Clearance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Import Process</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For inbound freight, we manage carrier coordination, import documentation preparation, duty and tax calculation, and customs declaration submission, working directly with Pakistan Customs to clear cargo efficiently after arrival at Karachi Port, Port Qasim, or the relevant international airport.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Export Process</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For outbound freight, we handle export documentation, customs declaration, and any product-specific certification requirements before cargo departs Pakistan, reducing the risk of delays at the destination country&apos;s customs checkpoint.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Customs Clearance Process</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Customs clearance is managed by our licensed brokers at both ends of the shipment — verifying HS code classification, calculating applicable duties and taxes, and submitting required documentation to the relevant customs authority. Documentation review happens during the planning stage, not after a delay has already occurred.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Safety Standards & Cargo Insurance</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our freight management operations follow documented safety protocols across every mode — verified load ratings and cargo securing standards for road freight, proper container loading and weight distribution for sea freight, and appropriate handling procedures for time-sensitive or fragile air freight cargo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every shipment we manage is covered by insurance against loss or damage during transit, applicable across sea, air, and road freight, and throughout the entire door-to-door journey rather than a single segment of transport.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Shipping Challenges & How We Solve Them</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-gold" />
                    Port and Carrier Capacity Constraints
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Peak shipping seasons can create booking competition for container space and carrier capacity. We address capacity constraints through advance booking and established carrier relationships built up over years of consistent shipping volume.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={18} className="text-gold" />
                    Documentation Inconsistency
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We solve documentation inconsistency by applying the same reviewed documentation standards across every shipment we manage, regardless of freight mode or origin.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-gold" />
                    Limited Shipment Visibility
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide consolidated, milestone-based tracking so businesses maintain visibility throughout the entire journey rather than only at booking and delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 size={18} className="text-gold" />
                    Reactive Cost Management
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We address reactive cost management by treating freight as an ongoing relationship — analyzing shipping patterns over time to identify consolidation and rate negotiation opportunities that shipment-by-shipment booking simply can&apos;t surface.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <InfoBox variant="save">
              <h3 className="text-foreground font-semibold mb-2">Case Study: Electronics Distributor, Multi-Mode Freight Consolidation</h3>
              <p className="mb-3">
                An electronics distributor importing components from multiple international suppliers and distributing finished products domestically across Karachi, Lahore, and Islamabad was managing freight through several disconnected vendors — one for international air freight, another for sea freight, and a separate domestic road transport provider.
              </p>
              <p className="mb-3">
                We consolidated the business&apos;s freight management under a single coordinated relationship, starting with a full audit of their existing shipping patterns. This audit revealed two structural inefficiencies: a meaningful portion of components being air-freighted out of habit rather than genuine urgency, and multiple smaller domestic shipments being booked individually rather than consolidated into scheduled, combined road freight runs.
              </p>
              <p>
                Over the following quarter, we shifted eligible air freight shipments to sea freight where supplier timelines allowed, consolidated domestic distribution into scheduled combined runs, and used the business&apos;s now-visible total shipping volume to negotiate improved carrier rates. The business saw a meaningful reduction in total freight cost over the following two quarters, alongside improved delivery predictability from having a single coordinator managing the full shipment lifecycle.
              </p>
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Freight Management Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Define your cargo type, volume, and shipping frequency",
                  "Identify which freight modes suit your typical shipment profile",
                  "Confirm documentation requirements for both origin and destination",
                  "Evaluate consolidation opportunities across your regular shipments",
                  "Confirm insurance coverage for all cargo categories you ship",
                  "Request consolidated performance reporting from your freight partner",
                  "Review your total freight spend periodically, not just per-shipment cost",
                  "Confirm your freight partner's customs brokerage capability on both ends of your typical routes",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Review your shipping patterns quarterly to identify consolidation and rate negotiation opportunities you might otherwise miss shipment by shipment",
                  "Don't default to air freight purely for speed — confirm whether your supplier or customer timeline genuinely requires it before paying the cost premium",
                  "Request documentation review as a standard step before every shipment, not just when problems have occurred previously",
                  "Ask any freight management provider for shipment volume references specific to your industry and route",
                  "Build customs clearance time into your planning as a distinct variable, not an assumed extension of transit time",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes Businesses Make</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Booking Freight Shipment by Shipment — Missing the cost and reliability advantages of a structured, ongoing freight management relationship",
                  "Using Separate Vendors for Each Freight Mode — Creating visibility gaps and inconsistent documentation standards across sea, air, and road freight",
                  "Treating Customs Clearance as an Afterthought — Preparing documentation reactively rather than as a planned stage of the shipment process",
                  "Defaulting to the Same Freight Mode Regardless of Cargo — Missing cost savings available by matching freight mode more precisely to each shipment's actual urgency",
                  "No Consolidated Freight Reporting — Losing visibility into total freight spend and performance trends across a business's full shipping activity",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Freight management is what separates businesses that treat shipping as an unavoidable cost from those that treat it as a genuine operational advantage. The difference isn&apos;t the freight itself — it&apos;s whether cargo movement is planned, tracked, and optimized as a coordinated system, or booked reactively, shipment by shipment, with no one actually managing the bigger picture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built its freight management practice around exactly that distinction — 15+ years of experience, 5,000+ successful shipments, licensed customs brokerage, and a genuinely global carrier network, all coordinated through dedicated freight coordinators who manage your cargo as an ongoing relationship rather than a series of disconnected transactions.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Freight Management Consultation Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you&apos;re shipping occasionally across borders or managing complex, high-volume freight across multiple modes, our team is ready to build a freight management approach around how your business actually operates. Contact us today for a <strong className="text-foreground">free consultation and transparent quote</strong>.
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
                Get a Free Freight Management Consultation Today
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

export default FreightManagementServices;
