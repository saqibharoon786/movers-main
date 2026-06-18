export const PAGE_URL = "https://bestintlmovers.com/international-cargo-islamabad";

export const seoConfig = {
  title: "International Cargo Service Islamabad | Air & Sea Freight 2026",
  description:
    "Pakistan's most reliable international cargo service in Islamabad — air cargo, sea freight, freight forwarding & door-to-door shipping to UAE, UK, USA, Canada, Saudi Arabia & 100+ countries. Free pickup. Call 0300-9130211.",
  keywords:
    "international cargo service islamabad, cargo service islamabad, air cargo islamabad, sea cargo islamabad, freight forwarding islamabad, door to door cargo islamabad, cargo company islamabad, cargo islamabad to dubai, cargo islamabad to uk, freight service islamabad",
};

export const airCargoRates = [
  { city: "Dubai / Abu Dhabi (UAE)", rate: "PKR 850 – 1,200", min: "10 kg", transit: "2–3 Days", level: "Standard Air" },
  { city: "Riyadh / Jeddah (Saudi Arabia)", rate: "PKR 900 – 1,400", min: "10 kg", transit: "2–4 Days", level: "Standard Air" },
  { city: "Doha / Muscat / Kuwait City", rate: "PKR 800 – 1,200", min: "10 kg", transit: "2–3 Days", level: "Standard Air" },
  { city: "London (UK)", rate: "PKR 1,200 – 1,800", min: "10 kg", transit: "3–5 Days", level: "Standard Air" },
  { city: "New York / Los Angeles (USA)", rate: "PKR 1,400 – 2,200", min: "10 kg", transit: "4–6 Days", level: "Standard Air" },
  { city: "Toronto / Vancouver (Canada)", rate: "PKR 1,500 – 2,400", min: "10 kg", transit: "4–7 Days", level: "Standard Air" },
  { city: "Sydney / Melbourne (Australia)", rate: "PKR 1,600 – 2,500", min: "10 kg", transit: "5–8 Days", level: "Standard Air" },
  { city: "Frankfurt / Amsterdam (Europe)", rate: "PKR 1,300 – 2,000", min: "10 kg", transit: "4–6 Days", level: "Standard Air" },
  { city: "Kuala Lumpur / Singapore", rate: "PKR 1,100 – 1,700", min: "10 kg", transit: "3–5 Days", level: "Standard Air" },
];

export const lclFclComparison = [
  { feature: "Best For", lcl: "1–15 CBM shipments", fcl: "15+ CBM or priority security" },
  { feature: "Pricing Unit", lcl: "Per CBM (cubic metre)", fcl: "Per container (20ft or 40ft)" },
  { feature: "Container", lcl: "Shared with other shippers", fcl: "Dedicated exclusively for you" },
  { feature: "Transit Time", lcl: "Adds 5–10 days for consolidation", fcl: "Faster — direct sailing when full" },
  { feature: "Risk of Damage", lcl: "Marginally higher (shared container)", fcl: "Lower (exclusive container)" },
  { feature: "Minimum Volume", lcl: "1 CBM", fcl: "Full 20ft (25 CBM) or 40ft (65 CBM)" },
  { feature: "Typical Use Case", lcl: "Partial household, SME exports", fcl: "Full household, large commercial" },
  { feature: "Rate to UK (Example)", lcl: "PKR 18,000–30,000/CBM", fcl: "USD 1,800–2,800 per 20ft container" },
];

export const seaTransitTable = [
  { port: "Dubai (Jebel Ali), UAE", lines: "MSC, Maersk, CMA CGM", lcl: "12–18 Days", fcl: "8–12 Days" },
  { port: "Jeddah / Dammam, Saudi Arabia", lines: "MSC, Hapag-Lloyd", lcl: "14–20 Days", fcl: "10–15 Days" },
  { port: "Felixstowe / Southampton, UK", lines: "MSC, CMA CGM, Maersk", lcl: "30–40 Days", fcl: "25–35 Days" },
  { port: "New York / Los Angeles, USA", lines: "Maersk, COSCO, CMA CGM", lcl: "35–50 Days", fcl: "30–45 Days" },
  { port: "Halifax / Vancouver, Canada", lines: "Hapag-Lloyd, COSCO", lcl: "35–50 Days", fcl: "30–45 Days" },
  { port: "Sydney / Melbourne, Australia", lines: "MSC, Maersk, PIL", lcl: "28–40 Days", fcl: "22–35 Days" },
  { port: "Hamburg / Rotterdam, Europe", lines: "MSC, Hapag-Lloyd, CMA CGM", lcl: "28–38 Days", fcl: "22–32 Days" },
];

export const customsDocsTable = [
  { doc: "Commercial Invoice", for: "All commercial cargo", by: "Exporter / Our team", us: "Yes" },
  { doc: "Packing List", for: "All cargo", by: "Our packing team", us: "Yes" },
  { doc: "CNIC / Passport Copy", for: "All shipments", by: "Sender", us: "Sender provides" },
  { doc: "Airway Bill / Bill of Lading", for: "All cargo", by: "Airline / Shipping Line", us: "Yes" },
  { doc: "Certificate of Origin", for: "Commercial exports", by: "TDAP / Chamber of Commerce", us: "Yes (we apply)" },
  { doc: "SPS / Phytosanitary Certificate", for: "Food, agricultural goods", by: "DPMQ / Ministry of Agriculture", us: "Yes (we facilitate)" },
  { doc: "Health Certificate", for: "Meat, dairy, perishables", by: "Provincial Health Authority", us: "Yes (we facilitate)" },
  { doc: "Export License / NOC", for: "Controlled commodities", by: "Relevant Ministry / MOFA", us: "Case by case" },
  { doc: "NTN Certificate", for: "Business / commercial exports", by: "FBR", us: "Sender provides" },
  { doc: "Fumigation Certificate", for: "Wooden crates, wood packing", by: "Approved Fumigation Company", us: "Yes" },
];

export const doorToDoorTimes = [
  { dest: "UAE (Dubai, Abu Dhabi)", air: "3–5 Days", sea: "15–20 Days", best: "Personal effects, commercial" },
  { dest: "Saudi Arabia", air: "4–7 Days", sea: "18–25 Days", best: "Household goods, commercial" },
  { dest: "United Kingdom", air: "5–8 Days", sea: "35–45 Days", best: "Household removals, relocation" },
  { dest: "United States", air: "6–9 Days", sea: "45–55 Days", best: "Commercial cargo, relocation" },
  { dest: "Canada", air: "6–10 Days", sea: "45–55 Days", best: "Household goods, immigration" },
  { dest: "Australia", air: "7–11 Days", sea: "38–50 Days", best: "Household goods, relocation" },
  { dest: "Qatar / Oman / Kuwait", air: "3–5 Days", sea: "15–22 Days", best: "Personal effects, commercial" },
];

export const vehicleShippingTable = [
  { dest: "UAE (Dubai)", roro: "USD 600 – 900", container: "USD 1,200 – 1,800", transit: "12–18 Days" },
  { dest: "Saudi Arabia", roro: "USD 700 – 1,000", container: "USD 1,400 – 2,000", transit: "14–20 Days" },
  { dest: "United Kingdom", roro: "USD 1,200 – 1,800", container: "USD 2,000 – 3,200", transit: "28–40 Days" },
  { dest: "Canada", roro: "USD 1,500 – 2,200", container: "USD 2,500 – 3,800", transit: "35–50 Days" },
  { dest: "Australia", roro: "USD 1,600 – 2,400", container: "USD 2,800 – 4,200", transit: "30–45 Days" },
];

export const pickupAreas = [
  {
    title: "DHA Islamabad Cargo Service",
    desc: "We serve all phases of DHA Islamabad including Phase 1 and Phase 2. DHA clients typically ship household goods for overseas relocations, personal effects for family members abroad, and commercial cargo for small businesses. Same-day or next-day pickup with prior booking.",
  },
  {
    title: "Bahria Town Islamabad & Rawalpindi",
    desc: "Coverage across Bahria Town Phase 1 through Phase 8, Bahria Enclave Islamabad and Safari Valley — popular for household goods and personal effects to UAE, UK and Canada during international relocations.",
  },
  {
    title: "F-10 & F-11 Islamabad",
    desc: "F-10 Markaz is a major commercial hub with high demand for commercial cargo to GCC markets. We also serve F-5, F-6, F-7, F-8 and F-9 with the same efficiency.",
  },
  {
    title: "G-11 & G-13 Islamabad",
    desc: "Densely populated residential sectors with high demand for international cargo — particularly overseas Pakistani families sending personal effects and gifts abroad. Same-day pickup scheduling available.",
  },
  {
    title: "Blue Area Islamabad Commercial Cargo",
    desc: "Islamabad's central business district and the location of our main cargo office. Import-export companies, law firms, embassies and corporate offices use our commercial cargo and freight forwarding services with walk-in consultations.",
  },
  {
    title: "I-8, I-9 & I-10 Industrial Cargo",
    desc: "Large mixed-use sectors with significant industrial activity — machinery exports, spare parts shipments and bulk commercial consignments from I-9 and I-10 industrial zones.",
  },
];

export const shippingSteps = [
  { step: "Step 1", title: "Free Quote & Consultation", desc: "Call or WhatsApp 0300-9130211 with cargo type, weight, dimensions, origin address and destination. Fully itemized quote within minutes." },
  { step: "Step 2", title: "Booking Confirmation", desc: "Booking raised in our system. You receive a booking reference by WhatsApp with confirmed pickup date and time." },
  { step: "Step 3", title: "Cargo Pickup from Islamabad", desc: "Uniformed collection team arrives at your address anywhere in Islamabad or Rawalpindi. Cargo surveyed and loaded." },
  { step: "Step 4", title: "Professional Packing", desc: "Export-grade packing on-site or pre-packed cartons checked for adequacy. Each carton labeled with shipment details and handling instructions." },
  { step: "Step 5", title: "Documentation Preparation", desc: "Commercial invoice, packing list, AWB/B/L and commodity-specific certificates. TDAP or Chamber of Commerce COO arranged if required." },
  { step: "Step 6", title: "Pakistan Customs Export Clearance", desc: "Licensed agent files GD on WeBOC. Green Channel clearance in hours for most shipments; examination cases managed same day." },
  { step: "Step 7", title: "Dispatch to Airline or Shipping Line", desc: "Cleared cargo handed to airline at ISB or trucked to Karachi Port for sea freight. AWB or B/L number issued immediately." },
  { step: "Step 8", title: "International Transit & Tracking", desc: "WhatsApp updates at each milestone — hub transit for air, direct or transshipment sailing for sea." },
  { step: "Step 9", title: "Destination Customs Clearance", desc: "Partner agent files import declarations, pays applicable duties (if agreed) and releases cargo for delivery." },
  { step: "Step 10", title: "Last Mile Delivery", desc: "Cargo delivered to recipient's door with proof of delivery confirmation." },
];

export const whyChooseUs = [
  { title: "Licensed & Internationally Accredited", desc: "IATA accreditation, FIATA membership and valid Pakistan Customs Clearing Agent License under the Customs Act 1969." },
  { title: "15+ Years of Islamabad Cargo Experience", desc: "Operating since 2009 through PACCS-to-WeBOC transitions, COVID disruptions, port congestion and global container shortages." },
  { title: "100+ Country Partner Network", desc: "Formal agency agreements with licensed freight forwarders and customs brokers — vetted annually with clear accountability." },
  { title: "Transparent Pricing", desc: "Fully itemized written quotation before booking. Every charge named and explained — no surprise fees after booking." },
  { title: "All-Risk Cargo Insurance", desc: "Basic transit insurance included. All-risk marine cargo insurance available for high-value shipments at booking." },
];

export const relatedLinks = [
  { label: "Cargo Services Pakistan", href: "/cargo-services-pakistan/" },
  { label: "Air Freight Islamabad", href: "/air-freight-islamabad" },
  { label: "Sea Freight Islamabad", href: "/sea-freight-islamabad" },
  { label: "Customs Clearance Islamabad", href: "/customs-clearance-islamabad" },
  { label: "Freight Forwarding Islamabad", href: "/freight-forwarding-islamabad" },
  { label: "International Courier Islamabad", href: "/international-courier-islamabad" },
  { label: "Logistics Services Pakistan", href: "/logistics-services-pakistan/" },
  { label: "Custom Duty Calculator", href: "/custom-duty-calculator" },
];

export const faqs = [
  {
    q: "What is international cargo service in Islamabad?",
    a: "International cargo service in Islamabad is a professional freight and logistics solution that manages the complete process of moving goods from your address in Islamabad to destinations worldwide — pickup, export-grade packing, Pakistan Customs export clearance, airline or shipping line booking, international transit, destination import clearance and final door delivery as a single integrated service.",
  },
  {
    q: "How much does air cargo from Islamabad to Dubai cost in 2026?",
    a: "Air cargo from Islamabad to Dubai in 2026 costs approximately PKR 850 to PKR 1,200 per chargeable kilogram depending on airline, weight break and fuel surcharges. Shipments above 100 kg qualify for volume discounts. Chargeable weight is the higher of actual weight or volumetric weight (L×W×H cm ÷ 5,000). Call 0300-9130211 for today's confirmed all-inclusive rate.",
  },
  {
    q: "How long does cargo from Islamabad to the UK take?",
    a: "Air cargo from Islamabad to the UK takes 3 to 5 business days. Sea freight (LCL or FCL) via Karachi Port to Felixstowe or Southampton takes 28 to 40 days. Door-to-door total time is typically 5–8 days for air and 35–45 days for sea freight.",
  },
  {
    q: "Do you provide free cargo pickup from all sectors of Islamabad?",
    a: "Yes. Free pickup from all sectors including DHA, Bahria Town, F-10, F-11, G-11, G-13, Blue Area, I-8, I-9, I-10, E-7, Diplomatic Enclave, Park Enclave, Gulberg Greens and all F, G, E and I subsectors. We also serve Rawalpindi including Bahria Town Rawalpindi, Saddar, Chaklala and Satellite Town.",
  },
  {
    q: "What is the difference between LCL and FCL sea freight from Islamabad?",
    a: "LCL (Less than Container Load) shares container space — you pay only for the cubic metres your cargo occupies, ideal for 1–15 CBM. FCL (Full Container Load) books an entire 20ft or 40ft container exclusively for your cargo — more economical per CBM above 15–20 CBM with better security. Both depart from Karachi Port.",
  },
  {
    q: "What documents are needed to send cargo from Islamabad?",
    a: "Personal effects: CNIC or passport, packing list with approximate values, destination address. Commercial cargo: commercial invoice with HS codes, packing list, CNIC and NTN, Certificate of Origin for certain destinations, and product-specific certificates (SPS, health, MSDS). Our team prepares most documentation and tells you exactly what you need to provide.",
  },
  {
    q: "Can I ship commercial goods and trade cargo from Islamabad?",
    a: "Yes. We specialize in commercial cargo for Islamabad businesses — textiles, surgical instruments, handicrafts, agricultural produce, pharmaceuticals, spare parts, IT equipment and manufactured goods. We provide HS code classification, WeBOC GD filing, Certificate of Origin, duty drawback documentation and weekly departures to UAE, UK, USA and Canada.",
  },
  {
    q: "Is cargo insurance included in your service from Islamabad?",
    a: "Yes. Basic transit insurance is included as standard. All-risk marine cargo insurance is available for comprehensive coverage of loss, theft, damage and general average during international transit. Premium is a percentage of declared cargo value — strongly recommended for high-value shipments.",
  },
  {
    q: "How do I track my cargo from Islamabad?",
    a: "You receive an Airway Bill (AWB) for air cargo or Bill of Lading (B/L) for sea freight. Track on the airline or shipping line website, or universal trackers like 17track.net. Our operations team also sends proactive WhatsApp updates at every key milestone from pickup to final delivery.",
  },
  {
    q: "What is the cheapest way to send large cargo from Islamabad internationally?",
    a: "For volumes above 3 CBM, consolidated LCL sea freight via Karachi Port is most economical — typically 60–80% cheaper than air. For full household removals (10+ CBM), FCL in a 20ft container offers best value. For urgent smaller shipments, consolidated air cargo with weekly departures provides competitive rates.",
  },
  {
    q: "Do you ship perishable food and cold chain cargo from Islamabad?",
    a: "Yes. Temperature-controlled cold chain cargo for perishable food, fresh fruit, frozen meat, dairy, pharmaceuticals, vaccines and biological samples. SPS phytosanitary certificates, DPMQ health certificates and food safety documentation arranged by our team. Air freight is suitable for most perishables due to transit time.",
  },
  {
    q: "How do you handle Pakistan Customs export clearance for cargo from Islamabad?",
    a: "Licensed Customs Clearing Agents file your Goods Declaration (GD) electronically through WeBOC. Pakistan Customs' PACCS system assigns Green (instant clearance), Yellow (document review) or Red (physical examination) channels. We handle all channels efficiently for same-day export clearance in most cases.",
  },
  {
    q: "Can you ship a car or vehicle from Islamabad internationally?",
    a: "Yes. Complete international vehicle shipping including MVRS de-registration, Pakistan Customs export GD, overland transport to Karachi Port, RoRo or container vessel booking, marine insurance, ocean transit and destination import clearance to UAE, UK, Canada, Australia and 50+ countries. Transit time 20–45 days depending on destination.",
  },
  {
    q: "What is freight forwarding and how is it different from regular cargo service?",
    a: "A regular cargo service transports goods from Point A to Point B. A freight forwarder manages the entire logistics chain — carrier selection, customs documentation, transshipment, insurance and destination delivery. Best International Movers is a fully licensed IATA and FIATA freight forwarder in Islamabad providing full freight management, not just physical transport.",
  },
  {
    q: "Is there a minimum weight or size requirement for cargo from Islamabad?",
    a: "No minimum weight or size requirement. We accept shipments from 1 kg upward. For parcels under 5 kg, consolidated courier offers best economy. Sea freight LCL minimum billing is typically 1 CBM. FCL has no practical minimum since you book the entire container.",
  },
  {
    q: "How long does door-to-door cargo from Islamabad to Saudi Arabia take?",
    a: "Door-to-door air cargo to Riyadh, Jeddah, Dammam or Khobar typically takes 4 to 7 business days total: pickup (same/next day), export clearance (1 day), air transit (2–3 days), ZATCA customs (1–2 days) and final delivery (1 day). Sea freight door-to-door takes 22–30 days.",
  },
  {
    q: "Do you provide cargo packing services in Islamabad?",
    a: "Yes. Export-grade packing using double-wall corrugated cartons, polyethylene foam, bubble wrap, stretch wrap pallets and ISPM-15 compliant wooden crates. We pack at your Islamabad address or at our warehouse. Packing can be booked as an add-on or standalone service.",
  },
  {
    q: "What cargo can you NOT send from Islamabad internationally?",
    a: "Prohibited items include narcotics, firearms without export license, counterfeit goods, CITES-restricted endangered species products, currency above declared thresholds, explosives, and destination-prohibited items (e.g., alcohol to Saudi Arabia). Restricted items may be shipped with correct permits — our team advises case by case.",
  },
  {
    q: "How do sea freight rates from Islamabad compare to air freight rates?",
    a: "Sea freight is typically 60–80% cheaper than air for equivalent volumes. Benchmark for 1,000 kg, 5 CBM to UK: air freight ~PKR 600,000–900,000 vs LCL sea freight ~PKR 90,000–150,000. Trade-off is transit time — 5 days air vs 35–45 days sea.",
  },
  {
    q: "Why should I choose Best International Movers for cargo from Islamabad?",
    a: "Islamabad's most experienced IATA and FIATA licensed cargo company since 2009 with 10,000+ successful international shipments. Free pickup from all sectors, transparent all-inclusive pricing, real-time tracking, comprehensive insurance, licensed customs clearance and verified partner network in 100+ countries.",
  },
];

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bestintlmovers.com/#organization",
        name: "Best International Movers & Logistics",
        url: "https://bestintlmovers.com",
        logo: "https://bestintlmovers.com/logo.png",
        telephone: "+923009130211",
        foundingDate: "2009",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+923009130211",
          contactType: "customer service",
          availableLanguage: ["English", "Urdu"],
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "International Cargo Service Islamabad",
        serviceType: "International Cargo & Freight Forwarding",
        description: seoConfig.description,
        url: PAGE_URL,
        provider: { "@id": "https://bestintlmovers.com/#organization" },
        areaServed: { "@type": "City", name: "Islamabad" },
      },
    ],
  };
}

export function buildFAQSchema() {
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

export function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com/" },
      { "@type": "ListItem", position: 2, name: "International Cargo Islamabad", item: PAGE_URL },
    ],
  };
}

export function buildAllSchemas() {
  return [buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()];
}
