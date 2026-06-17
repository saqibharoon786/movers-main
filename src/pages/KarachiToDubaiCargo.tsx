import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  Package,
  MessageCircle,
  Ship,
  Plane,
  FileCheck,
  Truck,
  Container,
  Clock,
  Star,
  MapPin,
  AlertTriangle,
  Thermometer,
  XCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20a%20Karachi%20to%20Dubai%20cargo%20quote.";

const heroStats = [
  { value: "15+ Years", label: "On Karachi–Dubai Route" },
  { value: "Weekly LCL", label: "Karachi Port Departures" },
  { value: "All 7 Emirates", label: "UAE Door Delivery" },
  { value: "Free Quote", label: "Written Door-to-Door" },
];

const serviceOptions = [
  {
    icon: Ship,
    title: "Sea Freight LCL — Less than Container Load",
    perfect: "Household goods (studio to 2-bedroom), personal effects, small commercial shipments (1–15 CBM).",
    advantages: [
      "Most affordable option for smaller volumes",
      "Weekly consolidation departures from Karachi Port",
      "Same professional packing and customs handling as FCL",
      "Fully insured door-to-door",
    ],
    transit: "14–22 days door-to-door",
  },
  {
    icon: Container,
    title: "Sea Freight FCL — Full Container Load",
    perfect: "Large household relocations (3+ bedrooms), villa contents, full office moves, large commercial shipments (15 CBM+).",
    advantages: [
      "Maximum security — no other cargo mixed with yours",
      "Best cost per CBM for large volumes",
      "Container sealed in your presence at Karachi",
      "Direct Karachi Port to Jebel Ali Port — no transshipment for most services",
    ],
    transit: "10–18 days door-to-door",
  },
  {
    icon: Plane,
    title: "Air Cargo Karachi to Dubai",
    perfect: "Urgent shipments, documents, small personal items, business samples, electronics under 300 kg, time-sensitive commercial cargo.",
    advantages: [
      "Fastest option — 2–5 days door-to-door",
      "Multiple daily flights on the Karachi–Dubai route",
      "Ideal when speed outweighs cost",
      "Suitable for items that cannot handle sea voyage conditions",
    ],
    transit: "2–5 days door-to-door",
  },
  {
    icon: Package,
    title: "Door-to-Door Cargo Boxes — Per Box Rates",
    perfect: "Individual boxes of personal items, clothing, food and gifts without a full household shipment.",
    advantages: [
      "Small box from PKR 3,500 — no minimum volume",
      "Includes pickup, export customs, air freight and Dubai clearance",
      "Weekly departures from Karachi",
      "Ideal for Pakistani families sending groceries, gifts and clothing",
    ],
    transit: "4–8 days door-to-door",
  },
];

const boxRates = [
  { size: "Small Box (40×30×30 cm)", weight: "Up to 10 kg", rate: "PKR 3,500 – 5,500" },
  { size: "Medium Box (50×40×40 cm)", weight: "Up to 20 kg", rate: "PKR 6,000 – 9,000" },
  { size: "Large Box (60×50×50 cm)", weight: "Up to 30 kg", rate: "PKR 8,500 – 13,000" },
  { size: "Extra Large Box (70×60×60 cm)", weight: "Up to 40 kg", rate: "PKR 11,000 – 17,000" },
  { size: "Pallet (100×120 cm)", weight: "Up to 500 kg", rate: "Custom quote" },
];

const lclRates = [
  { cbm: "1 CBM", home: "Single room / few boxes", rate: "USD 180 – 280" },
  { cbm: "2 CBM", home: "Studio flat (partial)", rate: "USD 300 – 450" },
  { cbm: "3–4 CBM", home: "1 Bedroom flat (partial)", rate: "USD 400 – 600" },
  { cbm: "5–6 CBM", home: "1 Bedroom flat (full)", rate: "USD 500 – 780" },
  { cbm: "7–10 CBM", home: "2 Bedroom flat", rate: "USD 720 – 1,100" },
  { cbm: "11–15 CBM", home: "2–3 Bedroom home", rate: "USD 1,000 – 1,500" },
];

const fclRates = [
  { container: "20-Foot Standard", capacity: "~33 CBM", home: "2–3 Bedroom", rate: "USD 1,200 – 2,200" },
  { container: "40-Foot Standard", capacity: "~67 CBM", home: "4–5 Bedroom", rate: "USD 1,900 – 3,200" },
  { container: "40-Foot High Cube", capacity: "~76 CBM", home: "Large villa / office", rate: "USD 2,300 – 3,800" },
];

const airRates = [
  { weight: "Up to 50 kg", rate: "USD 150 – 320", transit: "2–4 days" },
  { weight: "51–100 kg", rate: "USD 280 – 560", transit: "2–4 days" },
  { weight: "101–200 kg", rate: "USD 520 – 1,000", transit: "2–5 days" },
  { weight: "201–500 kg", rate: "USD 1,000 – 2,400", transit: "2–5 days" },
  { weight: "500 kg+", rate: "Custom quote", transit: "3–6 days" },
];

const commercialRates = [
  { type: "Textile goods (per MT)", method: "Sea FCL", rate: "USD 80 – 150/MT" },
  { type: "Pharmaceutical exports", method: "Air / Sea", rate: "Custom quote" },
  { type: "Food products (halal certified)", method: "Sea", rate: "Custom quote" },
  { type: "Industrial equipment", method: "Sea FCL", rate: "Custom quote" },
  { type: "Samples / small commercial", method: "Air", rate: "USD 8 – 18/kg" },
];

const includedServices = [
  { component: "Free cargo assessment at your Karachi address", included: "Always" },
  { component: "Professional export-standard packing", included: "Included" },
  { component: "Custom wooden crating for fragile items", included: "Included where required" },
  { component: "Pakistan Customs export documentation", included: "In-house licensed agent" },
  { component: "WeBOC export declaration filing", included: "Included" },
  { component: "Karachi Port Terminal Handling", included: "Included" },
  { component: "LCL consolidation at Karachi CFS", included: "Included for LCL" },
  { component: "Ocean freight or air freight", included: "Included" },
  { component: "Marine cargo insurance ICC \"A\"", included: "Recommended — quoted separately" },
  { component: "Real-time shipment tracking", included: "WhatsApp updates throughout" },
  { component: "Jebel Ali Port Terminal Handling", included: "Included" },
  { component: "Dubai Customs clearance", included: "Included" },
  { component: "Last-mile delivery across UAE", included: "Included" },
  { component: "Unpacking and placement in Dubai", included: "Available on request" },
];

const cargoTypes = [
  {
    title: "Household Goods and Personal Effects",
    items: [
      "Furniture — sofas, beds, wardrobes, dining sets, cabinets, shelving",
      "Kitchen appliances — refrigerators, washing machines, microwaves, blenders",
      "Electronics — flat-screen TVs, computers, home theatre systems, gaming consoles",
      "Clothing and textiles — wardrobe cartons or vacuum-compressed",
      "Children's items — toys, baby furniture, car seats, educational materials",
      "Decorative items — artwork, rugs, lamps, ornamental pieces",
    ],
    prohibited: [
      "Original identity documents — carry personally",
      "Jewellery, cash and valuables — carry personally",
      "Medications — carry in hand luggage with prescriptions",
      "Alcohol, pork products — prohibited in UAE",
      "Items offensive to Islamic values — prohibited in UAE",
    ],
  },
  {
    title: "Commercial Cargo — Karachi to Dubai Exports",
    items: [
      "Textile and garments — Pakistan's largest export category to UAE",
      "Pharmaceutical exports — DRAP authorisation and UAE MOH approval",
      "Food products — halal certified rice, spices, dried fruits, processed foods",
      "Surgical instruments — extensive experience with Sialkot exports",
      "Marble and stone — Ziarat white, Sunny Gold, Badal Grey for Dubai construction",
      "Dry fruits and spices — walnuts, almonds, pistachios with UAE food import docs",
      "IT equipment and electronics — anti-static handling and export documentation",
      "Automobile parts — HS code classification and commercial documentation",
    ],
    prohibited: [],
  },
];

const uaeDeliveryAreas = [
  { area: "Dubai — Downtown, Business Bay, DIFC", lead: "1–2 days after port release" },
  { area: "Dubai Marina, JLT, JBR, Palm Jumeirah", lead: "1–2 days after port release" },
  { area: "Dubai — Deira, Bur Dubai, Karama", lead: "1–2 days after port release" },
  { area: "Dubai — Al Quoz, Industrial Areas", lead: "1 day after port release" },
  { area: "Dubai — Mirdif, Silicon Oasis, Academic City", lead: "1–2 days after port release" },
  { area: "Sharjah — All Areas", lead: "2–3 days after port release" },
  { area: "Abu Dhabi — City, Khalifa City, Al Reem", lead: "2–3 days after port release" },
  { area: "Ajman", lead: "2–3 days after port release" },
  { area: "Ras Al Khaimah", lead: "3–4 days after port release" },
  { area: "Fujairah", lead: "3–4 days after port release" },
  { area: "Umm Al Quwain", lead: "2–3 days after port release" },
  { area: "Al Ain", lead: "3–4 days after port release" },
];

const cityOrigins = [
  {
    city: "Karachi to Dubai — Direct Service",
    desc: "Karachi Port and Jinnah International Airport are both dedicated to the Karachi–Dubai corridor. Sea freight direct to Jebel Ali with no transshipment. Daily KHI to DXB flights. Fastest door-to-door: 4–8 days air, 13–24 days sea.",
  },
  {
    city: "Islamabad / Rawalpindi to Dubai",
    desc: "Export-standard packing at your address, overland transport to Karachi (18–26 hours), then full Karachi to Dubai cargo service. Total transit: 18–28 days sea, 7–12 days air. Inland transport: PKR 15,000 – 45,000.",
  },
  {
    city: "Lahore to Dubai",
    desc: "Lahore pickup, transport to Karachi (12–18 hours by road), then Dubai via standard cargo process. Total transit: 16–26 days sea, 6–10 days air. Inland transport: PKR 12,000 – 38,000.",
  },
  {
    city: "Peshawar to Dubai",
    desc: "Overland to Karachi (22–30 hours), then Dubai via standard cargo process. Total transit: 20–30 days sea, 8–13 days air.",
  },
  {
    city: "Faisalabad / Sialkot / Gujranwala",
    desc: "Commercial cargo collection from manufacturing facilities and transportation to Karachi Port for Dubai-bound vessels — ideal for textile and surgical goods exporters.",
  },
];

const packingStandards = [
  { item: "Cartons", standard: "Double-wall export grade, 32 ECT minimum", why: "Withstands stacking + moisture" },
  { item: "Electronics", standard: "Custom foam-lined cartons or wooden crate", why: "Sea vibration protection" },
  { item: "Glassware", standard: "Individual tissue + bubble wrap, upright", why: "Monsoon swell protection" },
  { item: "Marble / stone", standard: "Foam edge guards + furniture blankets", why: "No compression" },
  { item: "Sofas / upholstery", standard: "Stretch wrap + furniture blanket", why: "Moisture + dust protection" },
  { item: "Appliances", standard: "Original box or custom padded carton", why: "Defrost 24 hrs before packing" },
  { item: "Wooden furniture", standard: "Furniture blankets + desiccant", why: "Humidity and heat protection" },
  { item: "Documents / books", standard: "Small heavy cartons — 20 kg maximum", why: "Water-resistant sealing" },
];

const insuranceRates = [
  { value: "USD 5,000 (PKR ~14 lakh)", premium: "USD 15 – 30" },
  { value: "USD 10,000 (PKR ~28 lakh)", premium: "USD 30 – 60" },
  { value: "USD 20,000 (PKR ~55 lakh)", premium: "USD 60 – 120" },
  { value: "USD 50,000 (PKR ~139 lakh)", premium: "USD 150 – 300" },
];

const commonMistakes = [
  {
    title: "Getting a Port-to-Port Quote Instead of Door-to-Door",
    desc: "Many cargo companies quote only the sea or air freight component — hiding origin handling, Dubai customs clearance and last-mile delivery charges until the final invoice. Always get a written door-to-door quote with every component listed.",
  },
  {
    title: "Shipping Prohibited UAE Items Without Realising",
    desc: "Common culprits: certain Pakistani medications with controlled substances, satellite dishes (require UAE licence), items with Israeli origin markings. Our pre-shipment review identifies and removes prohibited items before your cargo leaves Karachi.",
  },
  {
    title: "Not Having a Valid UAE Residence Visa at Time of Import",
    desc: "Duty-free import under UAE Transfer of Residence requires a valid UAE residence visa at import — not at shipping. If cargo arrives before your visa is stamped, you may face 5% UAE import duty on declared value.",
  },
  {
    title: "Choosing Summer Sea Freight for Temperature-Sensitive Cargo",
    desc: "June–September container temperatures can exceed 50°C on the Arabian Sea route. Candles, chocolates, cosmetics, vinyl records and some electronics cannot tolerate these conditions — we recommend air freight or post-monsoon sea freight.",
  },
  {
    title: "Undervaluing Commercial Cargo for Lower Duty",
    desc: "UAE Customs has reference price databases for major export categories from Pakistan. Undervaluation triggers examination, potential penalty and commercial cargo seizure. Our documentation is always accurate.",
  },
  {
    title: "Missing the Weekly LCL Consolidation Cutoff",
    desc: "LCL cargo consolidates weekly at Karachi CFS — typically Thursday cutoff for the following week's vessel. Our team books LCL space in advance to ensure your cargo always makes the target vessel.",
  },
];

const whyChoose = [
  { deliver: "Door-to-door written quote", means: "Every cost included — no surprise invoices at any stage" },
  { deliver: "In-house WeBOC clearing agent", means: "Pakistan Customs documentation prepared in-house — full accountability" },
  { deliver: "Export-standard packing team", means: "Materials rated for Karachi to Dubai ocean and air route conditions" },
  { deliver: "Marine cargo insurance ICC \"A\"", means: "Full replacement value — written policy before departure" },
  { deliver: "Real-time tracking", means: "WhatsApp updates — Karachi Port to Dubai door" },
  { deliver: "Weekly LCL consolidations", means: "Regular departures — no waiting weeks for a vessel" },
  { deliver: "FCL container booking", means: "Direct container Karachi Port to Jebel Ali" },
  { deliver: "UAE coverage — all 7 emirates", means: "Dubai, Sharjah, Abu Dhabi, Ajman, RAK, Fujairah, UAQ" },
  { deliver: "15+ years on this route", means: "Hundreds of successful Karachi to Dubai cargo deliveries" },
  { deliver: "No hidden charges", means: "Written quote = final invoice" },
  { deliver: "All cities in Pakistan covered", means: "Islamabad, Lahore, Peshawar, Multan — all connected to Karachi Port" },
];

const testimonials = [
  {
    quote:
      "Sent 7 CBM of household goods from our DHA Phase 6 flat to Dubai Marina via LCL sea freight. Best International Movers handled packing, WeBOC export, Jebel Ali clearance and Dubai Marina delivery. 18 days total. Cost was exactly as written on the quote — not one dirham extra.",
    name: "Ahmed Hussain",
    route: "DHA Phase 6 → Dubai Marina | May 2026",
  },
  {
    quote:
      "Commercial textile export — 20-foot FCL container from our factory in SITE Karachi to a buyer in Jebel Ali Free Zone. Certificate of origin, export declaration, letter of credit documentation — all handled perfectly. Container arrived on schedule.",
    name: "Tariq Textile",
    route: "SITE Karachi → Jebel Ali, Dubai | April 2026",
  },
  {
    quote:
      "Urgent air cargo — 180 kg of IT equipment from Karachi to our Dubai office. Booked Monday morning, cargo collected Monday afternoon, Dubai delivery Wednesday. 48 hours total.",
    name: "Zara Khan",
    route: "Karachi → Dubai | March 2026",
  },
  {
    quote:
      "Full 4-bedroom household from Gulshan Karachi to Sharjah — 20-foot FCL container. Packing at our home, customs clearance, Jebel Ali port handling and Sharjah delivery. 16 days total. Every item in perfect condition. Their team even warned us about heat-sensitive items before packing.",
    name: "Nadia Siddiqui",
    route: "Gulshan → Sharjah, UAE | February 2026",
  },
];

const faqs = [
  {
    q: "What is the cheapest way to send cargo from Karachi to Dubai in 2026?",
    a: "LCL sea freight is the most affordable for smaller volumes — 1 CBM from USD 180 door-to-door. For larger volumes (15 CBM+), FCL containers offer better per-CBM value. Air cargo is most expensive but fastest — best when speed is essential.",
  },
  {
    q: "How long does cargo take from Karachi to Dubai?",
    a: "Sea freight FCL: 13–24 days door-to-door. Sea freight LCL: 15–25 days door-to-door. Air cargo: 4–8 days door-to-door. Times vary based on customs examination, port conditions and seasonal factors.",
  },
  {
    q: "Do I pay customs duty in Dubai for my household goods from Karachi?",
    a: "No — UAE Transfer of Residence scheme provides duty-free import for personal household effects when you hold a valid UAE residence visa. Commercial cargo is subject to 5% CIF value UAE customs duty for most categories.",
  },
  {
    q: "What documents do I need for Karachi to Dubai cargo?",
    a: "Household goods: passport copy, UAE residence visa copy, CNIC copy. Our team prepares the packing list, export declaration and personal effects declaration. Commercial cargo: commercial invoice, certificate of origin, export form E and product-specific certificates.",
  },
  {
    q: "Can you ship from Islamabad or Lahore to Dubai via Karachi?",
    a: "Yes — we pack in Islamabad, Lahore, Peshawar or any city, transport overland to Karachi Port, and complete the full Dubai cargo service. Total door-to-door from Islamabad: 18–28 days sea freight.",
  },
  {
    q: "Is marine insurance included in your Karachi to Dubai cargo quote?",
    a: "Marine insurance is quoted as a recommended addition — typically USD 30–300 depending on cargo value. We strongly recommend ICC \"A\" All-Risks for every Karachi to Dubai shipment. The cost is less than 1% of cargo value.",
  },
  {
    q: "Can you send individual boxes from Karachi to Dubai?",
    a: "Yes — per-box rates start at PKR 3,500 for small boxes. Weekly departures. Ideal for Pakistani families in Dubai sending grocery items, gifts and clothing between Karachi and Dubai.",
  },
  {
    q: "What items cannot be sent from Karachi to Dubai?",
    a: "Alcohol, pork products, narcotics, certain medications, items offensive to Islamic values, counterfeit goods and firearms are prohibited in UAE. Currency over USD 10,000 requires SBP approval for Pakistan export. Our pre-shipment review covers all prohibited items.",
  },
  {
    q: "Do you provide real-time tracking for Karachi to Dubai cargo?",
    a: "Yes — WhatsApp updates at packing confirmation, Karachi Port departure, mid-voyage, Jebel Ali arrival, Dubai customs clearance and delivery day. Container tracking via shipping line portal also provided.",
  },
  {
    q: "How do I get an accurate Karachi to Dubai cargo quote?",
    a: "Call or WhatsApp 0300-9130211. For household goods: free home assessment at your Karachi address — we calculate exact CBM, recommend LCL or FCL, and provide a written door-to-door quote. For commercial cargo: share your cargo description, weight and volume for a written commercial quote.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Karachi to Dubai Cargo",
  description:
    "Door-to-door cargo service from Karachi to Dubai — sea freight LCL/FCL, air cargo, household goods, commercial cargo and per-box rates. Pakistan Customs export and Dubai customs clearance included.",
  serviceType: "International cargo shipping",
  areaServed: [
    { "@type": "City", name: "Karachi" },
    { "@type": "City", name: "Dubai" },
  ],
  provider: { "@id": "https://bestintlmovers.com/#organization" },
};

function TableWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-8">
      <table className="w-full border-collapse min-w-[560px] text-sm">{children}</table>
    </div>
  );
}

const KarachiToDubaiCargo = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Karachi to Dubai Cargo 2026 | Call 0300-9130211"
        description="Best Karachi to Dubai cargo service 2026. Air cargo, sea freight, household goods, commercial cargo. Door-to-door. Free quote. Call 0300-9130211 today."
        keywords="Karachi to Dubai cargo, cargo Karachi to Dubai, sea freight Karachi Dubai, air cargo Karachi Dubai, LCL FCL Karachi Dubai, door to door cargo Karachi Dubai, cargo rates Karachi Dubai 2026, household goods Dubai, commercial cargo Karachi"
        urlPath="/karachi-to-dubai-cargo"
        canonicalUrl="https://bestintlmovers.com/karachi-to-dubai-cargo"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Ship className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Pakistan&apos;s #1 Cargo Route — Karachi to Dubai 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Karachi to Dubai Cargo — Pakistan&apos;s Most Trusted Door-to-Door Service 2026
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Sea freight LCL &amp; FCL | Air cargo KHI to DXB | Household goods | Commercial cargo | Per-box rates |
              In-house WeBOC agent | All 7 UAE emirates
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
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
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp 0300-9130211
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed space-y-4 mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Karachi to Dubai Is Pakistan&apos;s #1 Cargo Route in 2026
            </h2>
            <p>
              The Karachi to Dubai cargo corridor is the single most active, most trusted and most frequently used
              international shipping route from Pakistan. Every single day, hundreds of cargo consignments — personal
              effects boxes, full household containers, commercial textile shipments, pharmaceutical exports, food cargo
              and business equipment — depart Karachi Port and Jinnah International Airport bound for Dubai, Abu Dhabi,
              Sharjah, Ajman and the wider UAE.
            </p>
            <p>
              The UAE is home to over 1.6 million Pakistani expatriates — the largest Pakistani diaspora community in
              the world. Families send household goods when relocating. Workers send personal packages. Pakistani
              businesses export goods to Dubai&apos;s massive re-export market. And thousands of new arrivals ship their
              life from Karachi to Dubai every single month.
            </p>
            <p>
              Best International Movers &amp; Logistics has been operating Karachi to Dubai cargo services since 2009.
              With hundreds of successful door-to-door deliveries on this route — household goods, commercial cargo, air
              freight, sea freight, LCL consolidations and FCL containers — our team understands every dimension of
              this corridor: Karachi Port operations, Pakistan Customs export procedures, Jebel Ali Port import
              clearance, Dubai Customs duty exemptions and last-mile delivery across all seven UAE emirates.
            </p>
            <p>
              This complete 2026 guide covers everything you need to know: what it costs, how it works, which service
              to choose, what documents you need, what mistakes to avoid and why choosing the right cargo company makes
              all the difference. Also see our{" "}
              <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline font-medium">
                Pakistan to Dubai movers
              </Link>{" "}
              and{" "}
              <Link to="/cargo-service-karachi" className="text-gold hover:underline font-medium">
                cargo service Karachi
              </Link>{" "}
              pages for related services.
            </p>
          </motion.section>

          {/* Service Options */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Karachi to Dubai Cargo — Your Service Options in 2026
            </h2>
            <div className="space-y-8">
              {serviceOptions.map((opt, idx) => (
                <div key={opt.title} className="glass-card rounded-2xl p-6 md:p-8 border border-border">
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <opt.icon className="text-gold" size={22} />
                    </div>
                    <div>
                      <p className="text-gold text-sm font-medium mb-1">Option {idx + 1}</p>
                      <h3 className="text-xl font-semibold text-foreground">{opt.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    <strong className="text-foreground">Perfect for:</strong> {opt.perfect}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {opt.advantages.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-foreground">
                    <Clock className="inline text-gold mr-1 mb-0.5" size={16} />
                    Transit time: <span className="text-gold">{opt.transit}</span>
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Per-Box Rates — Karachi to Dubai (2026)</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Per-box rates include pickup from your Karachi address, export customs, air freight to Dubai and Dubai
              customs clearance. Delivery to your Dubai address charged separately at AED 50–100.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Box Size</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Weight Limit</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Karachi to Dubai Rate</th>
                </tr>
              </thead>
              <tbody>
                {boxRates.map((row, idx) => (
                  <tr key={row.size} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.size}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.weight}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* Rates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
              Karachi to Dubai Cargo Rates — Complete 2026 Price Guide
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              June 2026 estimates for door-to-door service including packing, customs documentation, freight, Dubai
              clearance and delivery. Call 0300-9130211 for exact written quote.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">Sea Freight LCL Rates — Karachi to Dubai</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Volume (CBM)</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Equivalent Home Size</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Door-to-Door Rate (USD)</th>
                </tr>
              </thead>
              <tbody>
                {lclRates.map((row, idx) => (
                  <tr key={row.cbm} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.cbm}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.home}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-semibold text-foreground mb-4">Sea Freight FCL Rates — Karachi to Dubai</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Container</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Capacity</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Home Size</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Door-to-Door Rate (USD)</th>
                </tr>
              </thead>
              <tbody>
                {fclRates.map((row, idx) => (
                  <tr key={row.container} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.container}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.capacity}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.home}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-semibold text-foreground mb-4">Air Cargo Rates — Karachi to Dubai</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Weight</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Door-to-Door Rate (USD)</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Transit</th>
                </tr>
              </thead>
              <tbody>
                {airRates.map((row, idx) => (
                  <tr key={row.weight} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.weight}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.transit}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-semibold text-foreground mb-4">Commercial Cargo Rates — Karachi to Dubai</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Cargo Type</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Method</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Rate</th>
                </tr>
              </thead>
              <tbody>
                {commercialRates.map((row, idx) => (
                  <tr key={row.type} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.type}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.method}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* What's Included */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              What Is Included in Our Karachi to Dubai Cargo Service
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Many Karachi cargo companies quote only the ocean freight or air freight leg — then reveal additional
              charges at every subsequent step. Best International Movers provides a complete door-to-door service with
              every component included in your written quote.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Service Component</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Included</th>
                </tr>
              </thead>
              <tbody>
                {includedServices.map((row, idx) => (
                  <tr key={row.component} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.component}</td>
                    <td className="border border-border px-4 py-3 text-gold font-medium">{row.included}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-foreground font-semibold text-center mt-4">
              Written quote = final invoice. Not one dollar more — ever.
            </p>
          </motion.section>

          {/* Cargo Types */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Karachi to Dubai Cargo — Types of Cargo We Handle
            </h2>
            {cargoTypes.map((cat) => (
              <div key={cat.title} className="glass-card rounded-2xl p-6 md:p-8 border border-border mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
                <ul className="space-y-2 mb-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
                {cat.prohibited.length > 0 && (
                  <>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <XCircle className="text-red-400" size={18} />
                      What must NOT go in household cargo
                    </h4>
                    <ul className="space-y-1">
                      {cat.prohibited.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm pl-6">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </motion.section>

          {/* Pakistan Customs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Pakistan Customs Export Process — Karachi to Dubai Cargo 2026
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every cargo shipment departing Karachi for Dubai must clear Pakistan Customs (FBR) through the WeBOC
              electronic system. Our in-house licensed agent handles all export documentation.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-3">Documents Required — Household Goods</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Packing list (itemised), export declaration (GD via WeBOC), personal effects declaration, bill of lading
              or airway bill, passport copy, UAE residence visa copy and CNIC copy.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-3">Documents Required — Commercial Cargo</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Commercial invoice, packing list, export declaration (GD), certificate of origin (FPCCI / Chamber), export
              form E (for forex realisation), product-specific certificates (halal, health, DRAP) and bill of lading.
            </p>
            <div className="border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <FileCheck className="text-gold" size={18} />
                WeBOC Export Examination
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Approximately 5–15% of consignments are selected for physical examination by FBR Customs. Our
                documentation accuracy rate means examinations are routine — never penalty situations. We never
                undervalue, never omit items, never submit incomplete documentation. 15+ years and hundreds of Karachi
                to Dubai shipments — zero penalty situations on properly declared cargo.
              </p>
            </div>
          </motion.section>

          {/* Dubai Customs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Dubai Customs — Importing Your Karachi Cargo in 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="glass-card rounded-2xl p-6 border border-border">
                <ShieldCheck className="text-gold mb-3" size={24} />
                <h3 className="font-semibold text-foreground mb-2">Household Goods — UAE Transfer of Residence (Duty-Free)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Pakistani families relocating to the UAE qualify for duty-free import of personal household effects.
                  You must hold a valid UAE residence visa, goods must be genuinely personal household effects, and items
                  must not be imported for commercial sale.
                </p>
                <p className="text-muted-foreground text-sm">
                  Qualifies: furniture, electronics, clothing, kitchen appliances, personal items, books, children&apos;s
                  toys, sports equipment. Does NOT qualify: alcohol, pork products, counterfeit goods, narcotics,
                  firearms, items offensive to Islamic law.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-border">
                <FileCheck className="text-gold mb-3" size={24} />
                <h3 className="font-semibold text-foreground mb-2">Commercial Cargo — UAE Customs Duty 2026</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Commercial cargo is subject to UAE customs duty — typically 5% CIF value for most goods. Pharmaceutical
                  goods and books are exempt (0%). Alcohol (if permitted): 50%. Tobacco products: 100%. Dubai Customs
                  may order physical inspection — particularly for electronics, food products and pharmaceutical goods
                  — typically adding 2–4 days to clearance time.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Transit Times */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
              Karachi to Dubai Cargo — Transit Times 2026
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { method: "Sea Freight FCL", total: "13–24 days", stages: "Packing 1–2 days → Export docs 2–3 days → Port loading 2–4 days → Ocean transit 5–8 days → Jebel Ali handling 1–2 days → Dubai customs 1–3 days → Delivery 1–2 days" },
                { method: "Sea Freight LCL", total: "15–25 days", stages: "Packing + CFS 3–5 days → Export docs 2–3 days → Weekly consolidation wait up to 7 days → Ocean transit 5–8 days → Dubai deconsolidation 2–3 days → Customs 2–4 days → Delivery 1–2 days" },
                { method: "Air Cargo", total: "4–8 days", stages: "Packing 1 day → Air export clearance 1–2 days → Air transit 2–4 hours → Dubai terminal 1 day → Customs 1–2 days → Delivery 1–2 days" },
              ].map((t) => (
                <div key={t.method} className="glass-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{t.method}</h3>
                  <p className="text-gold font-bold text-xl mb-3">{t.total}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{t.stages}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* City Origins */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Karachi to Dubai Cargo — City by City Guide for Pakistani Senders
            </h2>
            <div className="space-y-4">
              {cityOrigins.map((c) => (
                <div key={c.city} className="glass-card rounded-xl p-5 border border-border flex gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.city}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* UAE Delivery Areas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Karachi to Dubai Cargo — UAE Delivery Areas Covered
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UAE Emirate / Area</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Coverage</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Delivery Lead Time</th>
                </tr>
              </thead>
              <tbody>
                {uaeDeliveryAreas.map((row, idx) => (
                  <tr key={row.area} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.area}</td>
                    <td className="border border-border px-4 py-3 text-gold">Full coverage</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.lead}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* Packing Standards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Packing Standards for Karachi to Dubai Cargo — Why It Matters
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Best International Movers uses only export-standard materials rated for the Arabian Sea route. Summer heat
              (June–September) can push container temperatures to 45–55°C. Monsoon swells require extra void-fill and
              bracing. Humidity causes &quot;container rain&quot; — our desiccant packs are placed inside every FCL
              container before sealing.
            </p>
            <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-gold/5 border border-gold/20">
              <Thermometer className="text-gold shrink-0 mt-0.5" size={20} />
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Summer shipments:</strong> Candles melt, vinyl warps, some plastics
                deform. Our pre-shipment assessment identifies temperature-sensitive items and recommends air freight or
                delayed sea freight where needed.
              </p>
            </div>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Item</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Our Standard</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Why</th>
                </tr>
              </thead>
              <tbody>
                {packingStandards.map((row, idx) => (
                  <tr key={row.item} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.item}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.standard}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* Insurance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Marine Cargo Insurance — Karachi to Dubai 2026
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Without marine cargo insurance, your liability recovery in the event of loss or damage is limited to
              approximately USD 2 per kilogram under the Hague-Visby Rules. Best International Movers arranges ICC
              &quot;A&quot; All-Risks marine cargo insurance on every shipment — covering vessel sinking, fire, theft,
              water damage, rough handling, container stacking damage and general average contributions.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Cargo Value</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">ICC &quot;A&quot; Premium</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {insuranceRates.map((row, idx) => (
                  <tr key={row.value} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.value}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.premium}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Full replacement on total or partial loss</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm mt-4">
              <Link to="/services/cargo-insurance-services" className="text-gold hover:underline font-medium">
                Cargo insurance services →
              </Link>
            </p>
          </motion.section>

          {/* Common Mistakes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Karachi to Dubai Cargo — Common Mistakes and How We Prevent Them
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((m, idx) => (
                <div key={m.title} className="glass-card rounded-xl p-5 border border-border flex gap-4">
                  <AlertTriangle className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Mistake {idx + 1} — {m.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Why Pakistani Families and Businesses Choose Best International Movers
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">What We Deliver</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">What This Means</th>
                </tr>
              </thead>
              <tbody>
                {whyChoose.map((row, idx) => (
                  <tr key={row.deliver} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.deliver}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.means}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* Reviews */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Karachi to Dubai Cargo — 2026 Client Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-gold fill-gold" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-gold text-xs">{t.route}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Karachi to Dubai Cargo — Complete FAQ 2026
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Get Your Free Karachi to Dubai Cargo Quote — June 2026"
        subtext="Free home survey in Karachi, Islamabad, Lahore & Peshawar. Written door-to-door quote. In-house WeBOC customs agent. ICC 'A' marine insurance. Weekly LCL departures. Call 0300-9130211"
      />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default KarachiToDubaiCargo;
