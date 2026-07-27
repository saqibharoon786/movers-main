import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  FileText,
  MapPin,
  Layers,
  Building2,
  Sofa,
  Car,
  Factory,
  FlaskConical,
  Store,
  Palette,
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
    q: "How much do glass packing services cost?",
    a: "Costs depend on glass type, thickness, dimensions, quantity, and destination. We provide a free, itemized quote based on your specific glass packing requirements.",
  },
  {
    q: "Do you provide mirror packing services?",
    a: "Yes, we provide specialized mirror packing including protective backing material to guard the reflective coating in addition to standard glass edge and surface protection.",
  },
  {
    q: "How is window glass packed for shipping?",
    a: "Window glass is typically packed using vertical A-frame crating with edge protectors and individual sheet separation, avoiding the flat-stacking pressure that causes cracking.",
  },
  {
    q: "Can tempered glass be safely shipped internationally?",
    a: "Yes, with proper edge protection and vibration isolation, tempered glass can be shipped safely internationally, though its catastrophic full-sheet failure mode makes packing precision especially important.",
  },
  {
    q: "How is laminated glass different to pack compared to standard glass?",
    a: "Laminated glass requires even pressure distribution to avoid stressing the bonded interlayer, which can delaminate under concentrated point pressure that wouldn't affect standard annealed glass.",
  },
  {
    q: "Is glass cargo insured during shipping?",
    a: "Yes, every glass shipment we pack is covered by insurance against damage during transit.",
  },
  {
    q: "What documents are needed for international glass shipping?",
    a: "International glass shipments typically require a commercial invoice, packing list, and ISPM 15 certification for wooden crating, along with any destination-specific import documentation.",
  },
  {
    q: "Do you provide export packing for glass manufacturers?",
    a: "Yes, we provide export packing services for Pakistani glass manufacturers shipping window glass, architectural panels, and specialty glass to international buyers.",
  },
  {
    q: "What are custom wooden crates and why are they used for glass?",
    a: "Custom wooden crates are engineered to a specific glass item's dimensions and weight, providing structural protection that standard boxes and generic crates can't match.",
  },
  {
    q: "What is ISPM 15 compliance and why does it matter for glass shipping?",
    a: "ISPM 15 is the international standard requiring heat treatment of wooden packaging material, mandatory for wooden crates used in most international shipments to avoid customs rejection.",
  },
  {
    q: "How do you protect fragile glass cargo during long transit?",
    a: "We use individual sheet separation, edge protection, vibration-isolating cushioning, and moisture barriers for extended transit, particularly for sea freight shipments.",
  },
  {
    q: "What packing materials are used for glass shipping?",
    a: "We use custom wooden crates, foam padding, bubble wrap, edge protectors, shock absorption materials, and ISPM 15 certified timber for international shipments.",
  },
  {
    q: "How long does glass packing take?",
    a: "Timelines vary based on shipment size and complexity, from same-day packing for smaller items to several days for large custom architectural glass orders.",
  },
  {
    q: "What is the delivery process after glass is packed?",
    a: "Once packed and inspected, glass shipments are loaded and transported via road, sea, or air freight according to the coordinated logistics plan, with door-to-door delivery to the final destination.",
  },
  {
    q: "How do you prevent glass damage during transit?",
    a: "We prevent damage through edge protection, individual sheet separation, evenly distributed cushioning, and vibration isolation, addressing each of glass's specific failure modes directly.",
  },
  {
    q: "Do you provide commercial glass packing for construction projects?",
    a: "Yes, we provide packing and logistics support for architectural glass, window glass, and glazing panels used in construction and real estate projects.",
  },
  {
    q: "Can you handle industrial glass shipping for manufacturing equipment?",
    a: "Yes, we pack industrial glass components integrated into manufacturing and processing equipment, informed by both fragility and any industry-specific handling requirements.",
  },
  {
    q: "How do I book glass packing services?",
    a: "Contact us via phone, WhatsApp, or our online quote form with your glass type, dimensions, and shipping destination. We'll provide a detailed quote and schedule packing.",
  },
  {
    q: "Do you offer emergency or urgent glass packing services?",
    a: "Yes, our team accommodates urgent glass packing needs, coordinating expedited packing and air freight options where required, subject to material and crate availability.",
  },
  {
    q: "Do you provide door-to-door service for glass shipments?",
    a: "Yes, our door-to-door logistics manage the complete glass shipment journey from your facility to final delivery, without handoffs between separate vendors.",
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
    url: "https://bestintlmovers.com/glass-packing-services/",
    telephone: "+92-300-9130211",
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressCountry: "PK" },
    areaServed: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Sialkot", "Multan", "Peshawar", "Quetta"],
    openingHours: "Mo-Su 00:00-23:59",
  };
}

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Packing Services",
    name: "Glass Packing Services | Best International Movers & Logistics",
    description:
      "Specialized glass packing services including custom crating, edge protection, and vibration isolation for window glass, mirrors, tempered glass, laminated glass, and architectural panels.",
    url: "https://bestintlmovers.com/glass-packing-services/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Glass Packing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Glass Packing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mirror Packing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tempered & Laminated Glass Packing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Glass Crating" } },
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
        name: "Glass Packing Services",
        item: "https://bestintlmovers.com/glass-packing-services/",
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
    author: { "@type": "Organization", name: "Architectural Glass Exporter, Lahore" },
    reviewBody:
      "The shipment cleared Pakistani export customs with proper ISPM 15 certified crating and arrived at the Middle East construction site with zero panels damaged.",
  };
}

const serviceSeo = {
  title: "Glass Packing Services — Windows, Mirrors & Tempered Glass | Pakistan",
  description:
    "Professional glass packing services in Pakistan — custom crates for windows, mirrors, tempered & laminated glass. ISPM 15 certified, 15+ years experience. Free quote.",
  keywords:
    "glass packing services, glass packaging services, glass packing company Pakistan, fragile glass packing, glass export packing, glass shipping services, glass crating services, mirror packing services, window glass packing, tempered glass packing, laminated glass packaging, architectural glass packing, custom glass crating, wooden crates for glass, ISPM 15 glass crates, glass packing Karachi, glass packing Lahore, glass packing Islamabad",
};

const processSteps = [
  {
    title: "1. Glass Inspection & Assessment",
    text: "We inspect each glass item — type, thickness, dimensions, and existing condition — to determine the specific packing approach required before any materials are selected.",
  },
  {
    title: "2. Individual Sheet Preparation",
    text: "Each glass sheet or panel is individually wrapped and separated, preventing the direct glass-on-glass contact that causes chipping and scratching during transit.",
  },
  {
    title: "3. Edge Protection Application",
    text: "Edge protectors are applied to every exposed edge, specifically targeting the stress-concentration points where glass failure most commonly originates.",
  },
  {
    title: "4. Crate Design & Construction",
    text: "We design and build a custom crate — typically vertical or A-frame configuration for flat glass — sized and structured to the specific item's dimensions and weight.",
  },
  {
    title: "5. Cushioning & Shock Absorption",
    text: "Foam and shock-absorbing materials are positioned within the crate at calculated support points, distributing weight evenly and preventing vibration transfer.",
  },
  {
    title: "6. Securing Within the Crate",
    text: "Glass is secured within the crate to prevent shifting during transit, using methods that hold the item firmly without introducing pressure points against the glass surface itself.",
  },
  {
    title: "7. Quality Inspection",
    text: "Before sealing, every crate undergoes inspection confirming secure packing, proper edge protection, and correct internal cushioning placement.",
  },
  {
    title: "8. Labeling & Documentation",
    text: "Crates are labeled with fragile handling markings and, for international shipments, accompanying export documentation and ISPM 15 certification where wooden crating is used.",
  },
  {
    title: "9. Loading & Transport",
    text: "Packed glass is loaded using handling procedures specific to its weight and fragility, coordinated with the broader freight plan for road, sea, or air transport.",
  },
];

const glassTypes = [
  {
    title: "Window Glass Packing",
    text: "Standard window glass panes require edge protection and vertical A-frame crating to prevent the flat-stacking pressure that causes flex-related cracking during transit.",
  },
  {
    title: "Mirror Packing",
    text: "Mirrors require particular care for their reflective coating, which can be damaged by moisture or direct contact even when the glass itself survives — our mirror packing includes protective backing material in addition to standard glass protection techniques.",
  },
  {
    title: "Tempered Glass Packing",
    text: "While tempered glass is more impact-resistant than standard annealed glass, it's also more prone to catastrophic full-sheet shattering if it does fail, making edge protection and vibration isolation just as critical despite its added strength.",
  },
  {
    title: "Laminated Glass Packing",
    text: "Laminated glass — bonded layers with an interlayer, common in automotive and safety glazing applications — requires packing that avoids pressure points that could delaminate the interlayer bond, a failure mode unique to this glass type.",
  },
  {
    title: "Architectural Glass",
    text: "Large-format architectural glass panels for building facades and glazing require custom crate engineering given their size, weight, and the precision handling required to avoid stress cracks during loading and transport.",
  },
  {
    title: "Office Glass Partitions",
    text: "Modern office glass partition systems require careful disassembly-aware packing, protecting both the glass panels and any attached hardware or framing components during office relocations.",
  },
  {
    title: "Glass Doors",
    text: "Glass doors, particularly those with attached hardware, require crating that protects both the glass surface and the functional door components from misalignment during transit.",
  },
  {
    title: "Glass Furniture",
    text: "Glass tabletops, shelving, and furniture components require individual protection and separation from other furniture pieces during a move, since generic furniture blankets alone don't provide adequate protection for glass surfaces.",
  },
  {
    title: "Glass Panels",
    text: "Decorative and functional glass panels used in construction and interior design require sheet separation and edge protection matched to their specific thickness and size.",
  },
  {
    title: "Industrial Glass",
    text: "Industrial glass components, including specialized glass used in manufacturing and processing equipment, require packing informed by both the glass's fragility and any regulatory handling requirements specific to its industrial application.",
  },
  {
    title: "Medical Glass Equipment",
    text: "Glass components in medical and laboratory equipment require precision packing that protects both the glass itself and any calibrated components it's integrated with.",
  },
  {
    title: "Laboratory Glass",
    text: "Laboratory glassware and glass instrumentation require individually cushioned packing given the typically smaller, more delicate nature of laboratory-grade glass compared to architectural glass.",
  },
];

const GlassPackingServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        {...serviceSeo}
        urlPath="/glass-packing-services/"
        canonicalUrl="https://bestintlmovers.com/glass-packing-services/"
        ogTitle="Glass Packing Services | Best International Movers & Logistics"
        ogDescription="Expert glass packing for windows, mirrors, tempered and laminated glass, architectural panels, and industrial glass. ISPM 15 certified crating, 15+ years experience."
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
                <Layers size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Glass Packing Services — Expert Protection for Fragile Glass Cargo
                </h1>
                <p className="text-muted-foreground mt-1">
                  Windows, Mirrors, Tempered & Laminated Glass | ISPM 15 Certified Crating
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Window Glass</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Mirror Packing</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Tempered Glass</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Architectural Glass</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">ISPM 15</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Custom Crates</span>
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
              <strong className="text-foreground">Hero Summary:</strong> Glass doesn&apos;t forgive packing mistakes. A single unpadded edge, a crate built without vibration isolation, or a mirror packed flat against another sheet without separation can turn an entire shipment into a total loss before it ever leaves Pakistan. <strong className="text-foreground">Best International Movers & Logistics</strong> provides specialized <strong className="text-foreground">glass packing services</strong> built around the physics of what makes glass break — with 15+ years of experience and 5,000+ successful shipments protecting windows, mirrors, tempered glass, laminated glass, and architectural panels across Pakistan.
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Glass is one of the least forgiving materials to ship. Unlike most fragile cargo, glass doesn&apos;t dent or scuff when mishandled — it shatters, completely and often unrecoverably, from stresses that would leave other cargo entirely unaffected: a slight flex under uneven support, direct edge-to-edge contact with another glass sheet, or vibration transmitted through a crate that wasn&apos;t isolated properly. This is why generic &quot;fragile item&quot; packaging consistently fails when applied to glass, and why <strong className="text-foreground">glass packing services</strong> require a distinct set of techniques most general movers simply haven&apos;t developed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built a specialized glass packing practice over more than 15 years, protecting window glass, mirrors, tempered and laminated glass, architectural panels, and industrial glass equipment across more than 5,000 successful shipments. Whether you&apos;re a homeowner shipping a single custom mirror or a glass manufacturer exporting a full container of architectural panels, the underlying engineering principles — and the risk of getting them wrong — remain the same. Explore our broader <Link to="/packaging-logistics-solutions/" className="text-gold hover:underline">Packaging &amp; Logistics Solutions</Link> for end-to-end export support.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Are Glass Packing Services?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Glass packing services involve the specialized preparation, cushioning, and crating of glass products — windows, mirrors, tempered and laminated glass, architectural panels, and glass furniture components — for safe transport during domestic moves and international export. Unlike standard packaging, <strong className="text-foreground">glass packing</strong> accounts for glass&apos;s unique failure modes: it fails from flex and point pressure rather than blunt impact alone, meaning support has to be distributed evenly across the entire surface rather than concentrated at a few contact points.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Professional glass packing typically involves individual sheet separation to prevent glass-on-glass contact, edge protection to guard against chip propagation, vertical or A-frame crating that avoids flat stacking pressure, and vibration-isolating cushioning that prevents resonance from transmitting through the glass during transit. Each of these techniques addresses a specific, well-understood glass failure mode — which is exactly why glass packing benefits from a team with dedicated experience in this specific material.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Professional Glass Packing Matters</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Glass Fails Differently Than Other Fragile Cargo — Glass breaks from flex, point pressure, and edge chipping — stresses that generic foam-and-box packaging isn't designed to distribute or absorb correctly",
                  "Total Loss Risk — Unlike a dented appliance or scratched furniture, damaged glass is almost always a complete loss, with no partial-use value and often no repair option",
                  "Edge Vulnerability — Even minor edge chips from inadequate protection can propagate into full breaks days or weeks after packing — sometimes after installation",
                  "Weight and Handling Complexity — Large glass panels combine significant weight with extreme fragility, requiring handling techniques most general movers don't practice regularly",
                  "Higher Replacement and Delay Cost — Custom-cut, tempered, or laminated glass often has longer replacement lead times, delaying construction or installation projects",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Glass We Pack</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                {glassTypes.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Art Glass</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Decorative and artistic glass pieces require the same climate-conscious, vibration-isolated handling used for other irreplaceable fine art — for pieces requiring this level of specialized care, our team applies techniques specifically suited to art glass alongside our standard glass packing expertise, coordinated with broader fragile-cargo packing when needed.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Materials We Use</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Custom Wooden Crates — Engineered crates sized to the specific glass sheet or panel dimensions; see our Custom Crating Services for full crate engineering detail",
                  "Foam Protection — Custom-cut foam padding at contact points and edges, distributing pressure evenly rather than concentrating it",
                  "Bubble Wrap — Layered protective wrap for glass surfaces, providing cushioning against minor impacts during handling",
                  "Edge Protectors — Specialized corner and edge guards designed to prevent the chip propagation that causes delayed glass failure",
                  "Shock Absorption Materials — Vibration-dampening materials positioned within the crate to prevent resonance transfer during road, sea, or air transit",
                  "ISPM 15 Wooden Crates — Heat-treated, internationally certified timber crating for glass shipments crossing international borders",
                ]}
              />
              <p className="text-muted-foreground text-sm mt-4">
                For crate engineering details, see our <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link> and <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link> pages.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Glass Packing Process</h2>
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Quality Inspection, Safety & Damage Prevention</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every glass shipment undergoes a documented quality inspection before it leaves our facility, confirming that edge protection, internal cushioning, and crate structural integrity all meet our packing standards. This pre-sealing check is the last real opportunity to catch a preparation mistake — glass packing errors are rarely visible from the outside once a crate is closed.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our glass packing operations follow documented safety protocols covering both the glass itself and handling personnel — including proper lifting techniques for large glass panels, verified crate weight ratings before loading, and clear handling markings that communicate fragility and orientation requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Glass damage prevention addresses each failure mode directly: edge protection against chip propagation, individual sheet separation against glass-on-glass contact, evenly distributed cushioning against flex-related cracking, and vibration isolation against resonance-induced stress fractures.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cargo Insurance & International Shipping Standards</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every glass shipment we pack is covered by insurance against damage during transit, reflecting both the total-loss nature of most glass damage and the often significant replacement cost and lead time associated with custom-cut, tempered, or architectural glass. Learn more about our <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">Cargo Insurance Services</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                International glass shipments must meet both packaging material standards — including ISPM 15 certification for wooden crating — and any destination-specific documentation requirements for the glass category being shipped, which we verify and prepare before any international glass shipment departs Pakistan.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Air, Sea & Road Freight Glass Packing</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Plane size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold text-foreground">Air Freight</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For urgent or smaller glass shipments, air freight packing emphasizes lightweight but structurally sound crating, since air freight pricing is highly weight-sensitive.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Ship size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold text-foreground">Sea Freight</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For larger glass shipments or full architectural glass orders, sea freight packing requires more robust moisture protection and vibration isolation given extended transit and multiple port transfers.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Truck size={18} className="text-gold" />
                    <h3 className="text-lg font-semibold text-foreground">Road Transport</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For domestic glass transport between Pakistani cities, packing accounts for road conditions and transit duration, with crating calibrated to shorter but often rougher handling conditions.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Coordinate freight with our <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>, <Link to="/services/sea-freight-services/" className="text-gold hover:underline">Sea Freight Services</Link>, and <Link to="/services/air-freight/" className="text-gold hover:underline">Air Freight Services</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Building2, title: "Construction & Real Estate", text: "Architectural glass, window glass, and glazing panels for building projects across Pakistan's major cities, coordinated around construction timelines." },
                  { icon: Sofa, title: "Interior Design & Furniture", text: "Glass furniture components, decorative panels, and fixtures for residential and commercial interior projects where surface quality matters as much as structural integrity." },
                  { icon: Car, title: "Automotive", text: "Laminated and tempered glass components for automotive manufacturing and aftermarket distribution, with interlayer-conscious handling." },
                  { icon: Factory, title: "Manufacturing", text: "Industrial glass components integrated into manufacturing equipment and processing systems, often coordinated with broader equipment relocation.", link: "/services/industrial-relocation/" },
                  { icon: FlaskConical, title: "Medical & Laboratory", text: "Glass components in medical devices and laboratory equipment requiring precision handling alongside calibrated instruments.", link: "/services/medical-equipment-shipping/" },
                  { icon: Store, title: "Retail & Commercial Fit-Out", text: "Glass partitions, display cases, and storefront glazing for retail and commercial space construction." },
                  { icon: Palette, title: "Art & Decorative Glass", text: "Artistic and decorative glass pieces requiring specialized handling for one-of-a-kind, irreplaceable items." },
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
                Office glass partition moves are supported through our <Link to="/services/office-moving-services/" className="text-gold hover:underline">Office Moving Services</Link>. Factory and equipment glass shipments can be coordinated with <Link to="/services/factory-relocation-pakistan/" className="text-gold hover:underline">Factory Relocation Pakistan</Link> and <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cities We Cover</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide glass packing services across Pakistan&apos;s major cities, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Sialkot, Multan, Peshawar, and Quetta, with export coordination through Karachi Port, Port Qasim, and Islamabad International Airport.
              </p>
              <p className="text-muted-foreground text-sm">
                Regional cargo support: <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Cargo Services Faisalabad</Link>
                {" · "}
                <Link to="/locations/cargo-services-sialkot/" className="text-gold hover:underline">Cargo Services Sialkot</Link>
                {" · "}
                <Link to="/services/office-moving-services/" className="text-gold hover:underline">Office Moving Services</Link>
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Destinations</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our glass packing and export logistics support shipments to over 100 countries, with particular experience shipping architectural and industrial glass to Middle Eastern, European, and Asian markets where Pakistani glass manufacturers and exporters maintain strong trade relationships.
              </p>
              <p className="text-muted-foreground text-sm">
                See also <Link to="/services/international-moving-services/" className="text-gold hover:underline">International Moving Services</Link>, <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link>, and our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link>.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Pricing Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">Glass packing costs depend on several variables:</p>
              <CheckList
                items={[
                  "Glass type and thickness — Tempered and laminated glass often require different handling approaches than standard annealed glass",
                  "Dimensions and weight — Larger, heavier glass panels require more substantial crating and handling equipment",
                  "Quantity — Multi-sheet shipments require sheet separation and careful stacking sequence planning",
                  "Destination — International shipments require ISPM 15 certified crating and additional export documentation",
                  "Freight mode — Air, sea, or road transport each involve different packing considerations and cost structures",
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-4">
                We provide a <strong className="text-foreground">free, itemized quote</strong> for every glass packing project, reflecting your specific glass type, dimensions, and shipping destination.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Glass Types vs. Packing Method</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Glass Type", "Primary Risk", "Recommended Packing Method"]}
                rows={[
                  ["Window Glass (Annealed)", "Flex cracking, edge chips", "Vertical A-frame crate, edge protectors"],
                  ["Mirror", "Coating damage, edge chips", "Protective backing, edge protectors, individual wrap"],
                  ["Tempered Glass", "Catastrophic full-sheet shatter", "Edge protection, vibration isolation"],
                  ["Laminated Glass", "Interlayer delamination", "Even pressure distribution, avoid point loads"],
                  ["Architectural Glass Panels", "Weight-related stress cracks", "Custom heavy-duty crate, reinforced support points"],
                  ["Art/Decorative Glass", "Surface and structural damage", "Custom crating with climate-conscious cushioning"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Materials Comparison</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Material", "Purpose", "Best Suited For"]}
                rows={[
                  ["Custom Wooden Crates", "Structural protection", "All glass types, especially large or heavy panels"],
                  ["Foam Padding", "Pressure distribution", "Contact points, edges, corners"],
                  ["Bubble Wrap", "Surface cushioning", "Minor impact protection during handling"],
                  ["Edge Protectors", "Chip prevention", "All glass sheet edges"],
                  ["Shock Absorbers", "Vibration isolation", "Extended transit, sea freight, road transport"],
                  ["ISPM 15 Timber", "Regulatory compliance", "International wooden crate shipments"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Air vs. Sea vs. Road Glass Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Air Freight", "Sea Freight", "Road Transport"]}
                rows={[
                  ["Typical transit time", "Days", "Weeks", "Hours to days (domestic)"],
                  ["Best for", "Urgent, smaller glass shipments", "Bulk architectural glass, large orders", "Domestic city-to-city glass delivery"],
                  ["Packing emphasis", "Lightweight but structurally sound crating", "Moisture protection, extended vibration isolation", "Road-condition-calibrated cushioning"],
                  ["Relative cost", "Higher", "Lower for bulk volume", "Moderate"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packaging Cost Factors</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Factor", "Impact on Cost"]}
                rows={[
                  ["Glass thickness", "Thicker glass requires more substantial crate structure"],
                  ["Panel size", "Larger panels require custom, more expensive crating"],
                  ["Quantity", "Multi-sheet shipments require additional separation materials"],
                  ["International vs. domestic", "International shipments require ISPM 15 certified materials and documentation"],
                  ["Fragility class", "Art and decorative glass often requires additional cushioning and climate consideration"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Glass Protection Levels</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <DataTable
                headers={["Protection Level", "Included Measures", "Best Suited For"]}
                rows={[
                  ["Standard", "Bubble wrap, basic edge protection", "Small, low-value glass items, short domestic transit"],
                  ["Enhanced", "Foam padding, full edge protectors, wooden crate", "Standard window glass, mirrors, moderate-value shipments"],
                  ["Premium", "Custom-engineered crate, vibration isolation, moisture barriers", "Tempered/laminated glass, international shipments"],
                  ["Specialized", "Climate-conscious custom crating, individualized handling plan", "Architectural glass, art glass, high-value industrial glass"],
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Customer Success Story</h2>
            <InfoBox variant="save">
              <h3 className="text-foreground font-semibold mb-2">Case Study: Architectural Glass Exporter, Lahore to Middle East</h3>
              <p className="mb-3">
                A Lahore-based architectural glass manufacturer needed to export a large order of tempered glass panels to a construction project in the Middle East. The panels&apos; large format and weight presented packing challenges beyond what the manufacturer&apos;s previous, smaller domestic shipments had required. The client had experienced breakage on a prior shipment handled by a general packing vendor — several panels arrived cracked despite being technically &quot;wrapped and boxed&quot; — and needed assurance this wouldn&apos;t happen again on an order significantly larger and more valuable.
              </p>
              <p className="mb-3">
                Our team assessed each panel&apos;s dimensions and weight to design custom vertical A-frame crates sized specifically to this shipment. Edge protectors were applied to every panel edge, panels were individually separated using foam spacers, and shock-absorbing material was positioned at calculated support points. Given the sea freight transit, we applied additional moisture protection against condensation during the multi-week voyage.
              </p>
              <p>
                The shipment cleared Pakistani export customs with proper ISPM 15 certified crating documentation and arrived at the Middle East construction site with zero panels damaged. The manufacturer has since made our custom crate specification their standard packing requirement for all international architectural glass orders, and has referred our services to two other glass fabricators within their supplier network.
              </p>
            </InfoBox>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packing Checklist</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Identify glass type, thickness, and dimensions before selecting packing materials",
                  "Apply edge protection to every exposed glass edge",
                  "Individually separate glass sheets to prevent direct glass-on-glass contact",
                  "Use vertical or A-frame crating rather than flat stacking for panel glass",
                  "Apply moisture protection for sea freight or humid-climate destinations",
                  "Confirm ISPM 15 certification for wooden crates on international shipments",
                  "Complete quality inspection before sealing the crate",
                  "Confirm insurance coverage for the glass shipment",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Stacking Glass Flat Without Separation — Allowing direct glass-on-glass contact during flat stacking, a leading cause of chipping and scratching during transit",
                  "Skipping Edge Protection — Leaving glass edges unprotected, allowing minor chips to propagate into full cracks during handling or transit",
                  "Using Generic Fragile-Item Packaging — Applying standard foam-and-box packaging that doesn't address glass's specific flex and edge-failure risks",
                  "Underestimating Weight in Crate Design — Building crates without accounting for the actual weight of large glass panels, risking structural failure of the crate itself",
                  "Ignoring Vibration During Sea Freight — Failing to apply vibration isolation for extended sea freight transit, allowing resonance-induced stress fractures",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Always request edge protectors specifically, not just general bubble wrap, when packing any glass shipment",
                  "For mirrors, confirm that packing materials won't scratch or affect the reflective coating during transit",
                  "For international shipments, verify ISPM 15 certification documentation accompanies wooden crates before departure",
                  "For large architectural glass, request a custom crate design rather than accepting a standard template sized for smaller glass",
                  "Ask your packing provider directly about their specific experience with your glass type — tempered, laminated, and architectural glass each require distinct techniques",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Choose Best International Movers</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Experience — A proven, specific track record in glass and fragile cargo packing across Pakistan",
                  "5,000+ Successful Shipments — Substantial completed shipment volume across window glass, mirrors, tempered glass, and architectural glass projects",
                  "100+ Countries Served — A genuinely global logistics network supporting international glass exports from Pakistan",
                  "Licensed Logistics Company — Fully licensed for both domestic and international freight and export packaging",
                  "Professional Fragile Cargo Experts — Trained specifically in the packing techniques glass requires",
                  "Certified Export Packing Team — Dedicated packing specialists experienced across every glass type we handle",
                  "ISPM 15 Compliant Wooden Crates — All timber crating heat-treated and certified for international shipping compliance",
                  "Door-to-Door Logistics — Complete glass shipment management from your facility to final delivery",
                  "24/7 Customer Support — Continuous availability for time-sensitive glass packing and shipping projects",
                  "International Packaging Standards — Documentation and materials meeting compliance requirements of major destination markets",
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Conclusion</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Glass punishes packing shortcuts in a way most other cargo doesn&apos;t — there&apos;s rarely a partial failure, just a shipment that arrives intact or one that doesn&apos;t. The businesses and manufacturers who consistently avoid glass breakage during shipping are the ones who work with a packing partner that treats glass as the distinct material science problem it actually is.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best International Movers & Logistics</strong> has built its glass packing practice around exactly that distinction — 15+ years of specialized fragile cargo experience, ISPM 15 certified crating, and a professional export packing team trained specifically in the edge protection, sheet separation, and vibration isolation techniques glass requires. Whether you&apos;re shipping a single custom mirror or a full architectural glass order for an international construction project, that same level of glass-specific expertise applies to every shipment we pack.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Glass Packing Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a single mirror professionally packed or export-grade crating for a bulk architectural glass order, our team is ready to protect your glass with the techniques it actually requires. Contact us today for a <strong className="text-foreground">free consultation and transparent quote</strong>.
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
                Get a Free Glass Packing Quote Today
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

export default GlassPackingServices;
