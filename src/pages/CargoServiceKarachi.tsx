import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  Package,
  MessageCircle,
  Ship,
  Plane,
  Globe,
  FileCheck,
  Truck,
  Container,
  Anchor,
  Clock,
  Users,
  Star,
  Warehouse,
  Scale,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const heroImg =
  "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1920";

const heroStats = [
  { value: "Direct KPT Access", label: "Karachi Port & KICT" },
  { value: "Weekly LCL", label: "Every Thursday" },
  { value: "100+ Countries", label: "Sea & Air Cargo" },
  { value: "Free Quote", label: "Within 2 Hours" },
];

const cargoServices = [
  {
    icon: Ship,
    title: "Sea Freight Karachi — LCL (Less than Container Load)",
    desc: "Weekly LCL consolidations every Thursday to Jebel Ali, Dammam, Hamad Port, Felixstowe, Rotterdam, Hamburg, Port Klang, and Colombo. Pay only for the CBM your cargo occupies — measured at our Karachi warehouse before loading.",
  },
  {
    icon: Container,
    title: "Sea Freight Karachi — FCL (Full Container Load)",
    desc: "20ft and 40ft dry, high-cube, and reefer containers. Permanent FCL slots with Maersk, MSC, Hapag-Lloyd, CMA CGM, and Evergreen. Same-day sailing confirmation available.",
  },
  {
    icon: Plane,
    title: "Air Freight Karachi — Jinnah International Airport (KHI)",
    desc: "Emirates SkyCargo, Qatar Airways Cargo, Etihad Cargo, Saudi Cargo, PIA Cargo, Lufthansa Cargo, and more. 2–5 days to Gulf, 4–7 days to Europe and North America. Charged per kg (actual or volumetric).",
  },
  {
    icon: Truck,
    title: "Door-to-Door Cargo from Karachi",
    desc: "Pickup → packing → export customs → port or airport → transit → import customs → last-mile delivery. One company, one tracking number, one invoice.",
  },
  {
    icon: Clock,
    title: "Cargo Consolidation Karachi — Weekly Schedule",
    desc: "Cargo at our Karachi warehouse by Wednesday loads in Thursday's consolidation — predictable sailing dates for accurate ETAs.",
  },
  {
    icon: FileCheck,
    title: "Import Cargo Clearance at Karachi Port",
    desc: "Inbound customs at KPT/KICT — IGD filing, examination handling, duty payment, terminal delivery orders, and upcountry dispatch to Lahore, Islamabad, Peshawar.",
  },
];

const lclRates = [
  { port: "Jebel Ali, Dubai (UAE)", transit: "6–10 days", rate: "USD 55–85 per CBM", min: "1 CBM" },
  { port: "Dammam (Saudi Arabia)", transit: "10–16 days", rate: "USD 65–95 per CBM", min: "1 CBM" },
  { port: "Hamad Port, Qatar", transit: "10–15 days", rate: "USD 70–100 per CBM", min: "1 CBM" },
  { port: "Muscat (Oman)", transit: "8–14 days", rate: "USD 65–90 per CBM", min: "1 CBM" },
  { port: "Felixstowe / UK", transit: "22–28 days", rate: "USD 120–180 per CBM", min: "1 CBM" },
  { port: "Rotterdam (Netherlands)", transit: "24–30 days", rate: "USD 115–170 per CBM", min: "1 CBM" },
  { port: "Hamburg (Germany)", transit: "24–30 days", rate: "USD 120–175 per CBM", min: "1 CBM" },
  { port: "Melbourne (Australia)", transit: "18–25 days", rate: "USD 130–190 per CBM", min: "1 CBM" },
  { port: "Port Klang (Malaysia)", transit: "12–18 days", rate: "USD 75–110 per CBM", min: "1 CBM" },
  { port: "Colombo (Sri Lanka)", transit: "5–8 days", rate: "USD 50–70 per CBM", min: "0.5 CBM" },
];

const fclRates = [
  { route: "Karachi → Dubai (Jebel Ali)", c20: "USD 900–1,400", c40: "USD 1,300–2,000" },
  { route: "Karachi → Saudi Arabia (Dammam)", c20: "USD 1,200–1,800", c40: "USD 1,800–2,600" },
  { route: "Karachi → UK (Felixstowe)", c20: "USD 2,200–3,500", c40: "USD 3,000–4,800" },
  { route: "Karachi → Canada (Vancouver)", c20: "USD 3,500–5,500", c40: "USD 5,000–7,500" },
  { route: "Karachi → USA (Los Angeles)", c20: "USD 3,800–6,000", c40: "USD 5,500–8,000" },
  { route: "Karachi → Australia (Melbourne)", c20: "USD 2,800–4,200", c40: "USD 4,000–6,000" },
];

const airRates = [
  { dest: "Dubai (DXB)", transit: "1–2 days", rate: "USD 2.50–4.00/kg" },
  { dest: "Riyadh (RUH)", transit: "2–3 days", rate: "USD 3.00–4.50/kg" },
  { dest: "Doha (DOH)", transit: "2–3 days", rate: "USD 3.00–4.50/kg" },
  { dest: "London (LHR)", transit: "3–5 days", rate: "USD 4.50–7.00/kg" },
  { dest: "Frankfurt (FRA)", transit: "3–5 days", rate: "USD 4.50–7.00/kg" },
  { dest: "Toronto (YYZ)", transit: "4–6 days", rate: "USD 6.00–9.00/kg" },
  { dest: "Los Angeles (LAX)", transit: "4–7 days", rate: "USD 6.00–9.50/kg" },
  { dest: "Melbourne (MEL)", transit: "4–6 days", rate: "USD 5.50–8.50/kg" },
];

const cargoRoutes = [
  {
    title: "Karachi to Dubai Cargo — Most Popular Route",
    desc: "Highest-volume lane from Pakistan. Multiple weekly vessels, LCL 6–10 days, dedicated Thursday consolidation on Maersk and MSC.",
  },
  {
    title: "Karachi to Saudi Arabia Cargo",
    desc: "Dammam, Jeddah, and Yanbu — weekly sailings direct or via Jebel Ali. 10–20 days sea, 2–4 days air.",
  },
  {
    title: "Karachi to UK Cargo",
    desc: "Felixstowe and Southampton weekly. 22–28 days via Suez. UK customs clearance and delivery to London, Birmingham, Manchester, Bradford, Leeds.",
  },
  {
    title: "Karachi to Canada & USA Cargo",
    desc: "Transpacific via Colombo/Singapore (West Coast) or Suez (East Coast/Canada). 32–55 days sea; air from KHI in 4–7 days.",
  },
  {
    title: "Karachi to Australia Cargo",
    desc: "Via Singapore to Melbourne, Sydney, Brisbane. 18–25 days. ISPM-15 compliant packing and fumigation certificates supplied.",
  },
  {
    title: "Karachi to Qatar & Kuwait Cargo",
    desc: "Gulf LCL and FCL with weekly departures. 10–15 days sea.",
  },
];

const cargoTypes = [
  "Personal Effects and Household Goods — export-grade packing, Form E, marine insurance recommended",
  "Commercial Cargo and Trade Goods — textiles, garments, leather, surgical instruments, sports goods",
  "Vehicles and Automotive — RoRo and container, SBP Form M and inspection handled",
  "Industrial Machinery and Equipment — flat-rack and open-top for out-of-gauge cargo",
  "Dangerous Goods (DG Cargo) — select IMDG classes with MSDS and DG declarations",
  "Perishables — air freight cold-chain from KHI; reefer containers on select sea routes",
];

const whyChoose = [
  {
    icon: Anchor,
    title: "We Are at the Port — Not Behind a Desk",
    desc: "Physical presence at KPT operations — we check cargo in-terminal, expedite examination, and resolve documentation on the spot.",
  },
  {
    icon: Scale,
    title: "Transparent All-Inclusive Quotes",
    desc: "Full breakdown: freight + origin handling + customs + documentation + destination fees. Invoice matches quotation.",
  },
  {
    icon: Ship,
    title: "Weekly Sailing Certainty",
    desc: "Confirmed weekly slots on Karachi–Dubai, Karachi–Saudi, and Karachi–UK lanes — not \"first available vessel.\"",
  },
  {
    icon: FileCheck,
    title: "Licensed Freight Forwarder — Registered with Customs",
    desc: "WeBOC and FBR registered — legally authorised to file your Goods Declaration.",
  },
  {
    icon: Globe,
    title: "Real-Time Shipment Tracking",
    desc: "Tracking reference, vessel position updates, and WhatsApp milestones from Karachi departure to destination ETA.",
  },
  {
    icon: Users,
    title: "15+ Years Karachi Port Experience",
    desc: "Port strikes, congestion, examinations, disputes — navigated thousands of times before.",
  },
];

const seaVsAir = [
  { factor: "Cost", sea: "Much lower — 80–90% cheaper than air", air: "High — premium for speed" },
  { factor: "Transit time", sea: "6–55 days depending on destination", air: "2–7 days" },
  { factor: "Volume suitability", sea: "Any volume — 0.5 CBM to full containers", air: "Small–medium (up to a few hundred kg)" },
  { factor: "Best for", sea: "Household goods, furniture, commercial cargo", air: "Documents, electronics, high value, urgent" },
  { factor: "Packing requirements", sea: "Export-grade sea packaging needed", air: "Standard air packaging" },
  { factor: "Customs process", sea: "Karachi Port — 1–3 days typically", air: "KHI Airport — same day or next day" },
];

const faqs = [
  {
    q: "How do I get a cargo rate from Karachi?",
    a: "Call or WhatsApp 0300-9130211 with pickup area, destination, volume (CBM) or weight (KG), and goods type. Rate within 2 hours. Large shipments get a physical survey.",
  },
  {
    q: "What is the minimum cargo volume for sea freight from Karachi?",
    a: "Minimum LCL booking is 0.5 CBM (large washing-machine carton size). No maximum — from 0.5 CBM to multiple 40ft containers per week.",
  },
  {
    q: "How is cargo volume calculated?",
    a: "CBM = Length (m) × Width (m) × Height (m). A 65×45×45 cm carton ≈ 0.13 CBM. Typical 2-bedroom apartment: 8–15 CBM. We measure precisely before quoting.",
  },
  {
    q: "What documents are needed for cargo from Karachi?",
    a: "Personal effects: passport copy, destination visa/residence permit, Form E (SBP), packing list. Commercial: invoice, packing list, certificate of origin, HS codes. We guide you per cargo type.",
  },
  {
    q: "How long does customs clearance take at Karachi Port?",
    a: "Properly documented export clearance: 1–2 working days after WeBOC GD submission. Examination requests add 1–3 days. We monitor GD status daily.",
  },
  {
    q: "Can you track my cargo from Karachi after it leaves?",
    a: "Yes — vessel name, voyage number, container or B/L number. Track on MarineTraffic.com plus WhatsApp updates: loaded, departed, arrived at destination port.",
  },
  {
    q: "What is the difference between KPT and Port Qasim?",
    a: "KPT is the main Karachi port; Port Qasim (PQA) handles bulk and some containers. KICT is Hutchison's terminal within KPT — most household LCL/FCL uses KICT. We operate at KPT and Port Qasim.",
  },
  {
    q: "Can you ship cargo from Lahore or Islamabad via Karachi Port?",
    a: "Yes — we collect from Lahore, Islamabad, Rawalpindi, and Peshawar, road to Karachi, then international shipping. Single point of contact.",
    link: true,
  },
  {
    q: "Is cargo insurance compulsory?",
    a: "Not legally required but strongly recommended. All-risk marine insurance ≈ 0.5–1.2% of declared value. PKR 2,000,000 cargo ≈ PKR 10,000–24,000 premium.",
  },
  {
    q: "What items cannot be shipped as cargo from Karachi?",
    a: "Pakistan Customs restricts currency above thresholds, weapons without permits, counterfeit goods, narcotics, cultural artefacts without approval. Destination import bans also apply — we advise before packing.",
  },
];

const testimonials = [
  {
    quote:
      "We shipped 22 CBM from Karachi to Birmingham. Survey to delivery took exactly 34 days. Customs at Felixstowe cleared same day. Photo of our container loading at Karachi Port. Excellent.",
    name: "Kashif Nawaz",
    route: "DHA Karachi → Birmingham, UK",
  },
  {
    quote:
      "Garments export Karachi to UAE for two years. Customs team knows their work — no delays, correct documentation. Competitive transparent rates.",
    name: "Salman Textile",
    route: "SITE Area Karachi → Dubai",
  },
  {
    quote:
      "Urgent air freight Karachi to Toronto in 4 days. Qatar Airways Cargo booked same evening. Clean air waybill, no customs issues.",
    name: "Zubair Ahmad",
    route: "Karachi → Toronto (air freight)",
  },
  {
    quote:
      "Best cargo service for Jeddah. Fixed price, no hidden charges, container arrived 14 days after loading. No surprise costs unlike three previous companies.",
    name: "Fahad Al-Qureshi",
    route: "Clifton Karachi → Jeddah, KSA",
  },
];

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FreightForwarder"],
    name: "Best International Movers & Logistics — Cargo Service Karachi",
    url: "https://bestintlmovers.com/cargo-service-karachi",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: "Karachi",
    description:
      "Licensed freight forwarder in Karachi offering sea freight, air freight, FCL/LCL container shipping, and international cargo from Karachi Port (KPT/KICT) to 100+ countries.",
    priceRange: "USD 50–9,500 per shipment",
    openingHours: "Mo-Sa 08:00-20:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Karachi Cargo Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "LCL Sea Freight Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "FCL Container Shipping Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Freight Karachi KHI" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customs Clearance Karachi Port" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door to Door Cargo Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Import Cargo Clearance Karachi" } },
      ],
    },
    sameAs: ["https://www.facebook.com/share/r/18FvZRMQ27/"],
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.link
          ? "Yes. We collect cargo from Lahore, Islamabad, Rawalpindi, and Peshawar, transport to Karachi, and ship internationally — single point of contact."
          : faq.a,
      },
    })),
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cargo Service Karachi",
        item: "https://bestintlmovers.com/cargo-service-karachi",
      },
    ],
  };
}

const CargoServiceKarachi = () => {
  const seoConfig = {
    title: "Cargo Service Karachi | Sea Freight & Air Freight | Best Intl Movers",
    description:
      "International cargo service from Karachi Port — sea freight, air freight, FCL & LCL containers to UAE, UK, USA & 100+ countries. Get a free cargo quote today.",
    keywords:
      "cargo service Karachi, international cargo Karachi, sea freight Karachi, air freight Karachi, cargo Karachi, container shipping Karachi, FCL LCL Karachi, freight forwarding Karachi, cargo rates Karachi, shipping Karachi port, Karachi to Dubai cargo, cargo company Karachi",
    canonicalUrl: "https://bestintlmovers.com/cargo-service-karachi",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/cargo-service-karachi"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildLocalBusinessSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Ship className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Licensed Freight Forwarder — KPT &amp; KHI</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Cargo Service in Karachi — Sea Freight, Air Freight &amp; Container Shipping
            </h1>

            <img
              src={heroImg}
              alt="Cargo service Karachi — sea freight and container shipping from Karachi Port"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Direct from Karachi Port (KPT/KICT) &amp; Jinnah International Airport | FCL &amp; LCL | 100+ Countries |
              Weekly Consolidations | Licensed Freight Forwarder | Free Cargo Quote
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <p className="text-gold font-bold text-lg md:text-xl">{stat.value}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
              >
                <Phone size={18} />
                Get Free Cargo Quote
              </Link>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp for Rates
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="py-16 bg-background">
        <motion.div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Karachi Cargo Service — Pakistan&apos;s Most Powerful Shipping Gateway
              </h2>
              <p>
                Every ton of international cargo that leaves Pakistan by sea passes through Karachi. Karachi Port Trust
                (KPT), Karachi International Container Terminal (KICT), Port Qasim Authority (PQA), and Pakistan
                International Bulk Terminal (PIBT) handle over 95% of Pakistan&apos;s international sea trade.
              </p>
              <p>
                Best International Movers &amp; Logistics is a licensed freight forwarder with direct operational
                presence at KPT and KICT. Our own team handles documentation, customs clearance, container stuffing, and
                vessel booking — not a third-party agent at the port gate.
              </p>
              <p>
                Whether you need a few boxes, a full commercial container, or urgent air freight from Jinnah
                International Airport — our Karachi cargo team handles it end to end.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Our Cargo Services from Karachi — Complete Range
              </h2>
              <div className="space-y-6">
                {cargoServices.map((svc) => (
                  <div key={svc.title} className="flex gap-4 p-4 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <svc.icon className="text-gold" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
                Sea Freight from Karachi — Rates, Transit Times &amp; Container Options
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Indicative 2025 rates — contact us for firm all-inclusive quotes including surcharges and port fees.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">LCL Sea Freight Rates from Karachi</h3>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-10">
                <table className="w-full border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Destination Port
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Transit Time
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Rate per CBM
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Minimum
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lclRates.map((row, idx) => (
                      <tr key={row.port} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 text-foreground">{row.port}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.transit}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.min}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">FCL Container Rates from Karachi</h3>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-4">
                <table className="w-full border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Route</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        20ft Container
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        40ft Container
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fclRates.map((row, idx) => (
                      <tr key={row.route} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 text-foreground">{row.route}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.c20}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold">{row.c40}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm">
                *FCL rates exclude destination port charges, import customs, and last-mile delivery. All-inclusive quotes
                available on request.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Air Freight from Karachi (KHI) — Rates and Airlines
              </h2>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-4">
                <table className="w-full border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Destination
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Transit Time
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Approx. Rate per KG
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {airRates.map((row, idx) => (
                      <tr key={row.dest} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 text-foreground">{row.dest}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.transit}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                *Minimum chargeable weight: 45 kg most airlines. Volumetric: (L × W × H cm) ÷ 6000 — actual or
                volumetric, whichever is higher.
              </p>
              <p className="text-foreground text-sm font-medium">
                Airlines from KHI: Emirates SkyCargo | Qatar Airways Cargo | Etihad Cargo | Saudi Cargo | PIA Cargo |
                Lufthansa Cargo | British Airways World Cargo | Turkish Cargo | Air Arabia Cargo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Customs Clearance at Karachi Port — Export &amp; Import
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Export Customs Clearance from Karachi</h3>
                  <p className="mb-3">
                    EGM, Customs Export Declaration (GD via WeBOC), commercial invoice, packing list, Bill of Lading, Form
                    E (household goods), certificate of origin, fumigation certificate, and phytosanitary certificates
                    where required. We clear before loading — never load first and clear later.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Import Customs Clearance at Karachi Port</h3>
                  <p className="mb-3">
                    IGD filing, examination handling, duty payment on your behalf, terminal delivery orders, port
                    de-stuffing, and upcountry transport.
                  </p>
                  <p className="text-sm border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3">
                    Estimate import duties early with our{" "}
                    <Link to="/custom-duty-calculator" className="text-gold hover:underline font-medium">
                      Custom Duty Calculator →
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Karachi Cargo Routes — Most Active Shipping Lanes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cargoRoutes.map((route) => (
                  <div key={route.title} className="glass-card rounded-2xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{route.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{route.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Types of Cargo We Handle from Karachi
              </h2>
              <ul className="space-y-3">
                {cargoTypes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Choose Our Karachi Cargo Service Over Competitors
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="glass-card rounded-2xl p-6 border border-border">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <item.icon className="text-gold" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Sea Freight vs Air Freight from Karachi — Which Should You Choose?
              </h2>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-6">
                <table className="w-full border-collapse min-w-[560px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Factor</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Sea Freight (Karachi Port)
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Air Freight (KHI Airport)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {seaVsAir.map((row, idx) => (
                      <tr key={row.factor} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">{row.factor}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground text-sm">{row.sea}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground text-sm">{row.air}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                <strong className="text-foreground">Our recommendation:</strong> Use sea freight above 50 kg or 0.5 CBM
                unless speed is critical. Karachi to Dubai sea: 6–10 days at a fraction of air cost.
              </p>
              <p className="text-sm">
                <Link
                  to="/blog/air-freight-vs-sea-freight-pakistan/"
                  className="text-gold hover:underline font-medium"
                >
                  Air Freight vs Sea Freight Pakistan guide →
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Cargo Packing Standards for Karachi Port Shipments
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  <strong className="text-foreground">General cargo:</strong> Double-wall 5-ply cartons, stretch wrap,
                  bubble wrap, foam corners, anti-scratch fleece on wood.
                </p>
                <p>
                  <strong className="text-foreground">Sea freight:</strong> Desiccant packets in boxes and containers;
                  waterproof polybag lining; ISPM-15 heat-treated wood for Australia, EU, USA, Canada.
                </p>
                <p>
                  <strong className="text-foreground">Air freight:</strong> Lightweight strong packaging, anti-static
                  for electronics, secure strapping.
                </p>
                <p>
                  <strong className="text-foreground">Container loading:</strong> Heavy items floor-level, load straps,
                  sealed and photographed before departure — loaded by our team, not random port labour.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — Cargo Service Karachi
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    {faq.link ? (
                      <p className="text-muted-foreground leading-relaxed">
                        Yes. We collect cargo from Lahore, Islamabad, Rawalpindi, and Peshawar, transport to Karachi,
                        and ship internationally. See our{" "}
                        <Link
                          to="/international-movers-pakistan/"
                          className="text-gold hover:underline font-medium"
                        >
                          International Movers Pakistan page →
                        </Link>
                      </p>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Client Reviews — Cargo Service Karachi
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="glass-card rounded-2xl p-6 border border-border">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="text-gold fill-gold" size={16} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-gold text-sm">{t.route}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Get a Free Cargo Quote from Karachi Today
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Pickup area, destination, volume or weight, type of goods — detailed rate within 2 hours.
              </p>
              <div className="text-muted-foreground text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-foreground">Call / WhatsApp:</strong> 0300-9130211
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@bestintlmovers.com
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday to Saturday, 8:00 AM – 8:00 PM
                </p>
                <p>
                  <strong className="text-foreground">Port:</strong> Direct operations at KPT (KICT) and Port Qasim,
                  Karachi
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Get Free Cargo Quote
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp for Rates
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CargoServiceKarachi;
