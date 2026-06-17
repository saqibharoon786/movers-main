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
  FileCheck,
  Container,
  Clock,
  Star,
  MapPin,
  AlertTriangle,
  Anchor,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20a%20Pakistan%20to%20UK%20sea%20freight%20quote.";

const heroStats = [
  { value: "FCL from USD 900", label: "Ocean Freight Component" },
  { value: "LCL from USD 850", label: "Door-to-Door (5–6 CBM)" },
  { value: "15+ Years", label: "Pakistan to UK Route" },
  { value: "HMRC ToR", label: "Guidance Included" },
];

const serviceOptions = [
  {
    icon: Ship,
    title: "LCL Sea Freight — Less than Container Load",
    perfect: "Studio apartments, 1–2 bedroom homes, personal effects, student shipments, small commercial orders (1–15 CBM).",
    advantages: [
      "Most cost-effective for smaller volumes",
      "Regular sailings to Felixstowe on efficient services",
      "Weekly consolidation departures from Karachi Port",
      "Pay only for your space — no minimum container cost",
    ],
    transit: "28–40 days door-to-door",
  },
  {
    icon: Container,
    title: "FCL Sea Freight — Full Container Load",
    perfect: "Large household relocations (3+ bedrooms), villa contents, full office moves, large commercial orders (15 CBM+).",
    advantages: [
      "Maximum security — your goods travel alone",
      "Container sealed at your Karachi address",
      "Best value per CBM for volumes over 20 CBM",
      "Direct Karachi Port to UK port — fewer handling touchpoints",
    ],
    transit: "25–38 days door-to-door",
  },
  {
    icon: Package,
    title: "Shared Container / Groupage",
    perfect: "Medium volumes (8–20 CBM) where LCL feels too small but FCL is not yet cost-effective.",
    advantages: [
      "Dedicated section of container with 2–4 compatible shipments",
      "Slightly faster than standard LCL",
      "Fewer consolidation points",
      "Better security than standard LCL at medium volumes",
    ],
    transit: "26–36 days door-to-door",
  },
];

const lclRates = [
  { cbm: "1 CBM", home: "Single room / boxes", rate: "USD 280 – 420", notes: "Minimum charge applies" },
  { cbm: "2 CBM", home: "Studio (partial)", rate: "USD 480 – 700", notes: "Weekly consolidation" },
  { cbm: "3–4 CBM", home: "1 Bed flat (partial)", rate: "USD 680 – 980", notes: "Regular departures" },
  { cbm: "5–6 CBM", home: "1 Bed flat (full)", rate: "USD 850 – 1,250", notes: "Most popular LCL size" },
  { cbm: "7–10 CBM", home: "2 Bed flat", rate: "USD 1,150 – 1,700", notes: "Consider FCL at 15 CBM+" },
  { cbm: "11–15 CBM", home: "2–3 Bed small", rate: "USD 1,600 – 2,400", notes: "Borderline FCL territory" },
];

const fclRates = [
  { container: "20-Foot Standard", capacity: "~33 CBM", home: "2–3 Bedroom", rate: "USD 2,800 – 4,500" },
  { container: "40-Foot Standard", capacity: "~67 CBM", home: "4–5 Bedroom", rate: "USD 4,200 – 6,500" },
  { container: "40-Foot High Cube", capacity: "~76 CBM", home: "Large villa / office", rate: "USD 4,800 – 7,500" },
];

const costComponents = [
  { component: "Professional packing (3-bed house)", who: "Best International Movers", cost: "USD 300 – 500" },
  { component: "Karachi Port THC", who: "Shipping Line / KPT", cost: "USD 130 – 200" },
  { component: "Documentation fee (Bill of Lading)", who: "Shipping Line", cost: "USD 80 – 130" },
  { component: "WeBOC export declaration", who: "In-house agent", cost: "USD 60 – 100" },
  { component: "Seal + miscellaneous port fees", who: "Karachi Port", cost: "USD 30 – 60" },
  { component: "Ocean Freight 20ft FCL (Karachi to Felixstowe)", who: "Shipping Line", cost: "USD 900 – 1,500" },
  { component: "UK Port THC (Felixstowe / Southampton)", who: "Shipping Line", cost: "USD 200 – 350" },
  { component: "UK HMRC Customs Clearance", who: "UK Agent", cost: "USD 200 – 400" },
  { component: "ISPM-15 Inspection (if ordered)", who: "APHA / UK Agent", cost: "USD 100 – 300" },
  { component: "Last-Mile UK Delivery", who: "UK Agent", cost: "USD 150 – 400" },
  { component: "Marine Cargo Insurance ICC \"A\"", who: "Marine Insurer", cost: "USD 80 – 250" },
];

const transitStages = [
  { stage: "Packing at Pakistani home", fcl: "1–2 days", lcl: "1–2 days" },
  { stage: "Pakistan Customs export clearance", fcl: "2–4 days", lcl: "2–4 days" },
  { stage: "Karachi Port loading + vessel departure", fcl: "3–5 days", lcl: "4–7 days (CFS consolidation)" },
  { stage: "Ocean transit — Karachi to UK port", fcl: "18–28 days", lcl: "18–28 days" },
  { stage: "UK port unloading + terminal", fcl: "2–4 days", lcl: "3–5 days" },
  { stage: "UK HMRC Customs clearance", fcl: "2–5 days", lcl: "3–7 days" },
  { stage: "Last-mile UK delivery", fcl: "1–3 days", lcl: "1–3 days" },
  { stage: "Total Door-to-Door", fcl: "29–51 days", lcl: "32–56 days", highlight: true },
];

const ukTariffRates = [
  { category: "Cotton fabrics and garments", rate: "12% — UK Global Tariff" },
  { category: "Synthetic textiles", rate: "12% — UK Global Tariff" },
  { category: "Sports goods (Sialkot)", rate: "2.7% — UK Global Tariff" },
  { category: "Surgical instruments", rate: "0% — UK Global Tariff" },
  { category: "Rice and food products", rate: "0%–35% (varies by product)" },
  { category: "Pharmaceutical products", rate: "0% — UK Global Tariff" },
  { category: "Leather goods", rate: "3.7% — UK Global Tariff" },
  { category: "Marble and stone", rate: "0.7% — UK Global Tariff" },
  { category: "Halal meat products", rate: "Complex — phytosanitary clearance required" },
];

const felixstoweDelivery = [
  { area: "London", time: "1.5–2.5 hours" },
  { area: "Birmingham", time: "2.5–3.5 hours" },
  { area: "Manchester", time: "3.5–4.5 hours" },
  { area: "Leeds / Bradford", time: "3.5–4.5 hours" },
  { area: "Glasgow / Edinburgh", time: "5–7 hours" },
  { area: "Cardiff / Wales", time: "4–5 hours" },
  { area: "Bristol", time: "3–4 hours" },
  { area: "Sheffield / Derby", time: "3–4 hours" },
];

const cityOrigins = [
  {
    city: "Karachi to UK Sea Freight",
    desc: (
      <>
        Karachi is Pakistan&apos;s primary sea freight origin — Karachi Port provides direct vessel services to UK ports on
        regular schedules. Our{" "}
        <Link to="/cargo-service-karachi" className="text-gold hover:underline font-medium">
          international cargo and sea freight service from Karachi
        </Link>{" "}
        handles the complete process from your Karachi home to your UK front door. Origin packing at your home or
        warehouse, departure from Karachi Port (PKKHI), primary UK arrival at Felixstowe, Southampton or Tilbury.
        Door-to-door transit: 28–45 days.
      </>
    ),
  },
  {
    city: "Islamabad / Rawalpindi to UK Sea Freight",
    desc: (
      <>
        Our{" "}
        <Link to="/packers-and-movers-islamabad" className="text-gold hover:underline font-medium">
          packers and movers in Islamabad
        </Link>{" "}
        team packs your Islamabad household, transports overland to Karachi Port (18–26 hours) and connects to the full
        UK sea freight service. Inland transport: PKR 18,000 – 55,000. Total door-to-door: 32–50 days. Most popular UK
        destinations: London, Birmingham, Manchester, Bradford.
      </>
    ),
  },
  {
    city: "Lahore to UK Sea Freight",
    desc: "Pakistan's second-largest city has a large diaspora community in the UK — particularly in Bradford, Leeds, Birmingham and Glasgow. Our Lahore pickup team transports to Karachi Port. Inland transport: PKR 15,000 – 45,000. Total door-to-door: 30–48 days.",
  },
  {
    city: "Peshawar to UK Sea Freight",
    desc: "Significant Pathan community in the UK — particularly in London, Birmingham and Glasgow — drives strong Peshawar to UK sea freight demand. Inland transport: PKR 20,000 – 55,000. Total door-to-door: 32–52 days.",
  },
  {
    city: "Faisalabad / Sialkot / Multan to UK Sea Freight",
    desc: "Pakistan's industrial cities generate significant commercial sea freight to the UK — textiles from Faisalabad, surgical instruments from Sialkot, and food products from Multan and Punjab. Collection from factory or warehouse with DCTS preference certificate. Total commercial cargo door-to-door: 32–50 days.",
  },
];

const cargoCategories = [
  {
    title: "Household Goods and Personal Effects",
    items: [
      "Furniture — beds, sofas, dining tables, wardrobes, bookshelves, display units",
      "Kitchen appliances — refrigerators, washing machines, microwaves, food processors",
      "Electronics — TVs, computers, gaming systems, home theatre, sound equipment",
      "Clothing — wardrobe cartons for hanging clothes, vacuum-compressed seasonal items",
      "Children's items — toys, books, baby furniture, educational materials",
      "Personal collections — books, artwork, ornaments, prayer items, musical instruments",
      "Pakistani kitchenware — degchis, pressure cookers, Pakistani utensil sets",
      "Family heirlooms — antiques, inherited jewellery (declared), family photographs",
    ],
  },
  {
    title: "Commercial Exports — Pakistan to UK",
    items: [
      "Textiles and garments — DCTS preference available; commercial invoice, packing list, certificate of origin",
      "Surgical instruments — Sialkot exports with zero UK import duty under UK Global Tariff",
      "Sports goods — footballs, protective equipment, sporting apparel with reduced UK tariff under DCTS",
      "Rice and food products — phytosanitary certificates and UK Food Standards Agency labelling compliance",
      "Marble and natural stone — flat-bed FCL containers and custom wooden crating",
      "Software and technology — physical media, hardware components and sample products",
    ],
  },
  {
    title: "Student Cargo — Pakistan to UK",
    items: [
      "LCL shipment typically 2–5 CBM — studio flat worth of personal items",
      "UK Student Import Relief — zero duty on personal effects for full-time students (apply separately from ToR)",
      "Ship 6–8 weeks before university start date to allow for 30–40 day sea transit",
      "Books and educational materials: zero UK import duty",
    ],
  },
];

const insuranceRates = [
  { value: "USD 10,000 (PKR ~28 lakh)", premium: "USD 35 – 60" },
  { value: "USD 20,000 (PKR ~55 lakh)", premium: "USD 70 – 120" },
  { value: "USD 35,000 (PKR ~97 lakh)", premium: "USD 122 – 210" },
  { value: "USD 60,000 (PKR ~166 lakh)", premium: "USD 210 – 360" },
];

const commonMistakes = [
  {
    title: "Not Applying for ToR Before Goods Depart Pakistan",
    desc: "UK HMRC Transfer of Residence (ToR) relief must be approved BEFORE your goods arrive in the UK. Families who ship first and apply after arrival face UK Import VAT (20%) on their entire declared cargo value — plus daily port storage charges. Apply for ToR minimum 6 weeks before your Pakistan departure date.",
  },
  {
    title: "Choosing LCL When FCL Is More Cost-Effective",
    desc: "At volumes above 15–18 CBM, LCL is often more expensive per CBM than a 20-foot FCL container — and provides inferior security. Our pre-shipment survey calculates your exact CBM and recommends the more cost-effective option with transparent comparison.",
  },
  {
    title: "Not Accounting for Suez Canal Routing Risk",
    desc: "The Suez Canal has experienced periodic disruptions since 2023 — with some shipping lines rerouting via Cape of Good Hope, adding 10–14 days to Pakistan to UK transit. Our team monitors routing changes and advises clients of any transit extension immediately.",
  },
  {
    title: "Shipping New Items as Personal Effects Under ToR",
    desc: "ToR relief requires goods to have been in your personal possession and use for at least 6 months. Brand-new appliances, electronics or furniture purchased in Pakistan for the UK home do not qualify. Our pre-shipment documentation review identifies new items and advises on appropriate customs treatment.",
  },
  {
    title: "Non-ISPM-15 Wooden Packing",
    desc: "Using non-certified wooden packing materials results in biosecurity interception at UK ports by APHA — goods held, significant clearance costs and potentially weeks of delay. Every wooden crate and pallet we use carries ISPM-15 certification.",
  },
  {
    title: "Ignoring UK DCTS Benefits for Commercial Cargo",
    desc: "Pakistani commercial exporters who do not claim UK Developing Countries Trading Scheme (DCTS) preference pay full UK tariff rates unnecessarily. A textile shipment worth USD 50,000 might pay 12% UK tariff (USD 6,000) when DCTS could reduce this to 5% or zero.",
  },
];

const serviceIncludes = [
  { component: "Free pre-shipment home survey", deliver: "Volume assessment, CBM calculation, LCL vs FCL recommendation" },
  { component: "HMRC ToR application guidance", deliver: "Step-by-step ToR application support before your shipment departs" },
  { component: "Export-standard professional packing", deliver: "Materials rated for 25-day ocean transit + North Atlantic weather" },
  { component: "ISPM-15 certified wooden crating", deliver: "Biosecurity compliance — zero APHA holds" },
  { component: "In-house WeBOC export clearance", deliver: "Pakistan Customs documentation — fully in-house, zero outsourcing" },
  { component: "LCL weekly consolidation", deliver: "Regular departures — no waiting weeks for next vessel" },
  { component: "FCL container booking", deliver: "Direct container Karachi to Felixstowe / Southampton / Tilbury" },
  { component: "Marine cargo insurance ICC \"A\"", deliver: "Full replacement value — written policy before departure" },
  { component: "Real-time shipment tracking", deliver: "WhatsApp updates — Karachi Port to UK delivery" },
  { component: "UK HMRC customs clearance", deliver: "ToR processing, duty calculation, import declaration" },
  { component: "APHA biosecurity coordination", deliver: "Wooden packing inspection compliance" },
  { component: "Last-mile UK delivery", deliver: "All UK postcodes — England, Scotland, Wales, Northern Ireland" },
  { component: "Unpacking and setup in UK", deliver: "Available on request — delivered to your room" },
  { component: "Written quote = final invoice", deliver: "Not one dollar more" },
];

const ukCities = [
  { city: "London (all boroughs)", community: "Largest Pakistani community in UK", delivery: "1.5–2.5 hours" },
  { city: "Birmingham", community: "Second largest Pakistani community", delivery: "2.5–3 hours" },
  { city: "Bradford", community: "Highest Pakistani-origin % of any UK city", delivery: "3.5–4 hours" },
  { city: "Manchester", community: "Major community — Longsight, Rusholme", delivery: "3.5–4 hours" },
  { city: "Leeds", community: "Large community — Beeston, Harehills", delivery: "3.5–4 hours" },
  { city: "Sheffield", community: "Significant presence — Nether Edge", delivery: "3–3.5 hours" },
  { city: "Glasgow", community: "Scotland's largest Pakistani community", delivery: "5.5–7 hours" },
  { city: "Leicester", community: "Growing Pakistani and South Asian community", delivery: "2–2.5 hours" },
  { city: "Luton", community: "Significant Pakistani community", delivery: "1.5–2 hours" },
  { city: "Oldham / Rochdale", community: "Large Pakistani communities", delivery: "4–4.5 hours" },
  { city: "Derby / Nottingham", community: "Pakistani communities — both cities", delivery: "2.5–3 hours" },
  { city: "Edinburgh", community: "Scottish capital — growing Pakistani presence", delivery: "6–7 hours" },
  { city: "Cardiff / Wales", community: "Pakistani community across South Wales", delivery: "4–5 hours" },
  { city: "Belfast", community: "Northern Ireland — all areas covered", delivery: "Via ferry from mainland" },
];

const testimonials = [
  {
    quote:
      "Moved our full 4-bedroom household from F-8 Islamabad to Birmingham. Best International Movers handled everything — packing in Islamabad, overland to Karachi, sea freight, Felixstowe customs and Birmingham delivery. HMRC ToR approved before we left Pakistan on their advice. Total 38 days door-to-door.",
    name: "Ahmed Raza",
    route: "F-8 Islamabad → Birmingham, UK | May 2026",
  },
  {
    quote:
      "LCL shipment — 6 CBM from Karachi to London. Best International Movers guided us through the ToR application, packed our Clifton apartment in export cartons, and delivered to our Ilford flat in 32 days. Cost was exactly as quoted door-to-door — not a penny more.",
    name: "Zara Khan",
    route: "Clifton Karachi → London | April 2026",
  },
  {
    quote:
      "Commercial textile export — 20-foot FCL container from our Faisalabad factory to a Birmingham buyer. Certificate of origin, DCTS preference declaration, UK customs clearance — all handled perfectly. Container arrived 5 days ahead of schedule.",
    name: "Tariq Textile",
    route: "Faisalabad → Birmingham, UK | March 2026",
  },
  {
    quote:
      "Student shipment — 4 CBM from Lahore to Manchester for my son starting university. Best International Movers handled the student import relief documentation, packed everything carefully and delivered to his student accommodation 3 days before term started.",
    name: "Nadia Siddiqui",
    route: "Lahore → Manchester, UK | February 2026",
  },
];

const faqs = [
  {
    q: "How long does sea freight from Pakistan to UK take in 2026?",
    a: "Door-to-door: 28–45 days for FCL, 32–55 days for LCL. Ocean transit alone: 18–28 days. Total includes packing, Pakistan Customs, Karachi Port operations, ocean transit, UK port handling, HMRC clearance and last-mile UK delivery.",
  },
  {
    q: "How much does sea freight from Pakistan to UK cost in 2026?",
    a: "LCL: from USD 280 door-to-door for 1 CBM, to USD 2,400 for 15 CBM. FCL 20-foot container: USD 2,800–4,500 door-to-door. FCL 40-foot container: USD 4,200–6,500 door-to-door. Exact quote after free home survey.",
  },
  {
    q: "Do I need HMRC Transfer of Residence (ToR) approval?",
    a: "Yes — if you are relocating permanently from Pakistan to the UK, ToR approval is essential for duty-free and VAT-free import of your household goods. Apply at gov.uk minimum 6 weeks before your Pakistan departure. Without ToR, UK Import VAT (20%) applies to your full cargo declared value.",
  },
  {
    q: "Do I pay UK customs duty on household goods from Pakistan?",
    a: "With approved ToR relief: zero customs duty and zero VAT on personal household effects. Without ToR: 20% UK Import VAT on declared value. Commercial cargo: UK tariff rates apply (0%–12% depending on goods; DCTS reduction available for most Pakistani exports).",
  },
  {
    q: "What UK ports do Pakistan sea freight shipments arrive at?",
    a: "Primarily Felixstowe — the UK's largest container port. Also Southampton, London Tilbury, London Gateway and Grangemouth (Scotland). Port selection depends on the shipping line and is included in your written quote.",
  },
  {
    q: "Is my Pakistan to UK shipment insured?",
    a: "Marine cargo insurance is not automatically included but we strongly recommend ICC \"A\" All-Risks. Premium for a typical household shipment (USD 25,000 value) is USD 88–150 — for full replacement value coverage across a 25-day ocean voyage.",
  },
  {
    q: "Can you ship from Islamabad or Lahore to UK?",
    a: "Yes — we pack your home in Islamabad, Lahore, Peshawar or any city, transport overland to Karachi Port, and complete the full UK sea freight process. Total door-to-door from Islamabad: 32–50 days.",
  },
  {
    q: "What is the difference between LCL and FCL for Pakistan to UK?",
    a: "LCL: your goods share a container — pay per CBM, best under 15 CBM. FCL: your goods fill a container exclusively — pay per container, best for 15+ CBM. At 15–18 CBM, compare both quotes — FCL sometimes cheaper AND provides better security.",
  },
  {
    q: "Do wooden crates need special certification for UK import?",
    a: "Yes — ISPM-15 heat-treatment certification is mandatory for all wooden packing materials entering the UK. APHA (Animal and Plant Health Agency) enforces this at UK ports. All Best International Movers wooden crates carry ISPM-15 certification — zero biosecurity holds.",
  },
  {
    q: "How do I get an accurate Pakistan to UK sea freight quote?",
    a: "Call or WhatsApp 0300-9130211. Our team visits your Pakistani home or office for a free volume assessment, calculates your exact CBM, recommends LCL vs FCL, and provides a written door-to-door quote covering all charges from your Pakistani door to your UK door.",
  },
];

const torSteps = [
  { step: "Check Your Eligibility", desc: "You must be transferring your normal place of residence from outside the UK to the UK. You must have been living outside the UK for at least 12 consecutive months. Goods must have been in your personal possession and use for at least 6 months before import." },
  { step: "Apply Online at HMRC", desc: "Apply for ToR relief at gov.uk before your goods depart Pakistan. Complete form ToR01 online. HMRC typically responds within 15 working days. Apply minimum 6 weeks before your planned Pakistan departure date." },
  { step: "Receive Your ToR Reference Number", desc: "HMRC issues a ToR approval letter with a unique reference number. This number must be quoted on your UK customs entry documentation. Without it, UK Customs cannot process your goods as personal effects." },
  { step: "Provide ToR Number to Your Freight Company", desc: "Give your ToR approval letter and reference number to Best International Movers before your Pakistan shipment departs. Our UK agent uses this reference number when filing your UK import declaration." },
  { step: "Goods Arrive UK — Clearance Processing", desc: "Our UK customs agent files your import declaration with ToR reference number. HMRC processes as duty-free personal effects. Goods released to last-mile delivery." },
];

const torMistakes = [
  "Not applying before goods depart Pakistan — ToR must be approved BEFORE your goods arrive in the UK",
  "Goods not in personal use for 6 months — brand-new items purchased for the UK move do not qualify for ToR relief",
  "Applying for ToR after starting UK residence — you must be transferring your residence, not already resident for 12+ months",
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
  name: "Sea Freight Pakistan to UK",
  description:
    "Door-to-door sea freight from Pakistan to the United Kingdom — LCL and FCL containers, HMRC ToR guidance, ISPM-15 packing, UK customs clearance and delivery across all UK postcodes.",
  serviceType: "International sea freight",
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United Kingdom" },
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

const SeaFreightPakistanToUK = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sea Freight Pakistan to UK 2026 | Complete Guide"
        description="Complete sea freight Pakistan to UK guide 2026. FCL from USD 900, LCL from USD 850. Karachi to Felixstowe. HMRC ToR guide. Free quote. Call 0300-9130211."
        keywords="sea freight Pakistan to UK, Pakistan to UK shipping, FCL LCL Pakistan UK, Felixstowe cargo Pakistan, HMRC ToR Pakistan, household goods UK, commercial cargo Pakistan UK, Karachi to UK sea freight 2026"
        urlPath="/sea-freight-pakistan-to-uk"
        canonicalUrl="https://bestintlmovers.com/sea-freight-pakistan-to-uk"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Anchor className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Pakistan to UK Sea Freight — Complete 2026 Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Sea Freight Pakistan to UK — The Complete 2026 Guide for Families, Expats and Businesses
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              LCL &amp; FCL | Karachi to Felixstowe | HMRC ToR Guidance | ISPM-15 Packing | UK Customs Clearance |
              All UK Postcodes
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
                Get Free Sea Freight Quote
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
              Why Sea Freight Is the Only Practical Option for Pakistan to UK Shipping in 2026
            </h2>
            <p>
              Every year, thousands of Pakistani families and businesses need to move goods from Pakistan to the United
              Kingdom — household contents for families relocating permanently, commercial exports for Pakistani textile
              and pharmaceutical companies, personal effects for students starting university, and cargo for the 1.6
              million strong Pakistani-British community.
            </p>
            <p>
              For almost every one of these shipments, sea freight is the only financially practical option. For larger
              shipments or less urgent deliveries, sea freight is the most economical solution — ideal for household
              moves, bulk items and commercial exports, allowing heavy and oversized items to be shipped at dramatically
              lower costs than air freight.
            </p>
            <p>
              The Pakistan to UK sea freight route covers approximately 11,000 nautical miles from Karachi Port through
              the Gulf of Oman, Arabian Sea, Indian Ocean, Red Sea (or Cape of Good Hope routing), Suez Canal and North
              Atlantic to arrive at UK ports including Felixstowe, Southampton, Tilbury and Grangemouth.
            </p>
            <p>
              Best International Movers &amp; Logistics has been executing Pakistan to UK sea freight operations since
              2009 — handling Pakistan Customs export clearance, Karachi Port operations, UK HMRC customs import
              clearance and last-mile delivery across England, Scotland, Wales and Northern Ireland. Also see our{" "}
              <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline font-medium">
                Pakistan to UK movers
              </Link>{" "}
              page for full relocation services.
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
              Sea Freight Pakistan to UK — Your Options in 2026
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
          </motion.section>

          {/* Rates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">
              Sea Freight Pakistan to UK — Complete 2026 Cost Guide
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              June 2026 estimates for door-to-door service. Call 0300-9130211 for exact quote after free home survey.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">LCL Sea Freight Rates — Pakistan to UK 2026</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Volume</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Home Size</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Door-to-Door (USD)</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody>
                {lclRates.map((row, idx) => (
                  <tr key={row.cbm} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.cbm}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.home}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.rate}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-semibold text-foreground mb-4">FCL Sea Freight Rates — Pakistan to UK 2026</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Container</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Capacity</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Home Size</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Door-to-Door (USD)</th>
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

            <h3 className="text-xl font-semibold text-foreground mb-4">Complete Door-to-Door Cost Components — Pakistan to UK</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Component</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Who Charges</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Typical Cost (USD)</th>
                </tr>
              </thead>
              <tbody>
                {costComponents.map((row, idx) => (
                  <tr key={row.component} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.component}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.who}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-center font-semibold text-foreground">
              TOTAL (20ft FCL, 3-bed): USD 2,800 – 4,500
            </p>
          </motion.section>

          {/* Transit Times */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Pakistan to UK Sea Freight — Transit Times 2026
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Stage</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">FCL</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">LCL</th>
                </tr>
              </thead>
              <tbody>
                {transitStages.map((row, idx) => (
                  <tr
                    key={row.stage}
                    className={`${idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"} ${row.highlight ? "font-bold" : ""}`}
                  >
                    <td className="border border-border px-4 py-3 text-foreground">{row.stage}</td>
                    <td className={`border border-border px-4 py-3 ${row.highlight ? "text-gold" : "text-muted-foreground"}`}>
                      {row.fcl}
                    </td>
                    <td className={`border border-border px-4 py-3 ${row.highlight ? "text-gold" : "text-muted-foreground"}`}>
                      {row.lcl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Suez Canal vs Cape Routing",
                  desc: "Standard route transits Suez Canal — approximately 22–28 days ocean transit. When Suez disruptions occur, some lines reroute via Cape of Good Hope — adding 10–14 days. Our team monitors routing changes and advises clients immediately.",
                },
                {
                  title: "UK Port Selection",
                  desc: "Felixstowe handles the majority of Pakistan-origin sea freight. Southampton and Tilbury are alternatives. Port selection affects transit time by 2–5 days and last-mile delivery cost depending on your UK address.",
                },
                {
                  title: "APHA Biosecurity",
                  desc: "APHA inspects wooden packing materials for ISPM-15 compliance. All our wooden crates are ISPM-15 heat-treated and certified — eliminating biosecurity hold risk.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* HMRC / UK Customs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              UK HMRC Customs — The Most Critical Part of Pakistan to UK Sea Freight
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              UK Customs (HMRC) administration of imports is the most complex element of Pakistan to UK sea freight.
              Without ToR approval: UK Import VAT (20%) applies to the full declared value. On a USD 30,000 household
              shipment, that is USD 6,000 in avoidable tax. With ToR approval: zero UK import duty and zero UK VAT.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="text-gold" size={22} />
              Transfer of Residence (ToR) — Step by Step
            </h3>
            <div className="space-y-4 mb-8">
              {torSteps.map((s, idx) => (
                <div key={s.step} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{s.step}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-3">Common ToR Mistakes That Pakistani Families Make</h3>
            <ul className="space-y-2 mb-8">
              {torMistakes.map((m) => (
                <li key={m} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <AlertTriangle className="text-gold mt-0.5 shrink-0" size={16} />
                  {m}
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-4">UK Customs Duty for Commercial Cargo from Pakistan</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Pakistani Export Category</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK Tariff Rate</th>
                </tr>
              </thead>
              <tbody>
                {ukTariffRates.map((row, idx) => (
                  <tr key={row.category} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.category}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-muted-foreground text-sm mt-4">
              Post-Brexit 2026: Pakistan benefits from the UK&apos;s Developing Countries Trading Scheme (DCTS) — reducing
              or eliminating UK customs duty on many Pakistani exports. Our commercial documentation team identifies DCTS
              applicability for every commercial Pakistan to UK shipment.
            </p>
          </motion.section>

          {/* UK Ports */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Pakistan to UK Sea Freight — Port by Port Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  port: "Felixstowe — Primary UK Port",
                  desc: "Over 90% of container sea freight from Pakistan arrives via major UK ports. Felixstowe is the UK's largest container port and handles the majority of Pakistan-origin sea freight. Most shipping lines serving Karachi to UK call at Felixstowe with excellent rail connections to all UK cities.",
                },
                {
                  port: "Southampton — Alternative UK Port",
                  desc: "UK's second-largest container port — preferred by certain shipping lines. Best for deliveries to Portsmouth, Southampton, Bournemouth, Bristol, Cardiff, Exeter and Plymouth.",
                },
                {
                  port: "London Tilbury / London Gateway",
                  desc: "Two major Thames Estuary ports serving London and the southeast. Higher port costs than Felixstowe but excellent for central and east London, Essex, Kent and Surrey deliveries.",
                },
                {
                  port: "Glasgow / Grangemouth",
                  desc: "For Pakistani families relocating to Scotland — some services offer direct routing to Grangemouth near Glasgow, eliminating the long road delivery from Felixstowe to Scotland.",
                },
              ].map((p) => (
                <div key={p.port} className="glass-card rounded-xl p-5 border border-border">
                  <Anchor className="text-gold mb-2" size={22} />
                  <h3 className="font-semibold text-foreground mb-2">{p.port}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-4">Felixstowe Delivery Times from Port Release</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK Delivery Area</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Road from Felixstowe</th>
                </tr>
              </thead>
              <tbody>
                {felixstoweDelivery.map((row, idx) => (
                  <tr key={row.area} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.area}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* City Origins */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Pakistan to UK Sea Freight — City-by-City Origin Guide
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

          {/* Cargo Categories */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              What We Ship — Pakistan to UK Sea Freight Cargo Categories
            </h2>
            {cargoCategories.map((cat) => (
              <div key={cat.title} className="glass-card rounded-2xl p-6 md:p-8 border border-border mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.section>

          {/* ISPM-15 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              ISPM-15 — Why Wooden Packing Compliance Is Non-Negotiable for Pakistan to UK
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ISPM-15 (International Standards for Phytosanitary Measures No. 15) requires all wooden packing materials
              (crates, pallets, dunnage) used in international shipments to be heat-treated to eliminate pest and disease
              risk. The UK&apos;s APHA (Animal and Plant Health Agency) enforces ISPM-15 at all UK ports.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Non-compliant wooden packaging is intercepted at the UK port, either treated (at significant cost and
              delay) or destroyed. Every wooden crate, pallet and dunnage used by Best International Movers for Pakistan
              to UK sea freight is ISPM-15 certified — heat-treated timber with the official ISPM-15 mark stamped on every
              piece. Zero biosecurity holds.
            </p>
          </motion.section>

          {/* Packing Standards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Packing Standards for Pakistan to UK Sea Freight — The 25-Day Ocean Reality
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                <strong className="text-foreground">Export cartons:</strong> Double-wall corrugated export cartons with
                minimum 32 ECT bursting test strength — sealed with reinforced packing tape at all seams and edges.
              </p>
              <p>
                <strong className="text-foreground">Custom wooden crating (ISPM-15):</strong> Recommended for flat-screen
                TVs over 55 inches, antique furniture, original artwork, marble dining tables, musical instruments and
                high-value electronics.
              </p>
              <p>
                <strong className="text-foreground">Furniture protection:</strong> Fully dismantled, wrapped in export
                furniture blankets, double-wrapped in stretch wrap. Glass surfaces in custom cardboard or timber sleeves.
                Container desiccant packs placed throughout.
              </p>
              <p>
                <strong className="text-foreground">North Atlantic weather:</strong> Unlike the Karachi to Dubai route,
                Pakistan to UK sea freight must transit the North Atlantic — where rough weather is common November
                through March. Winter shipments require extra internal carton bracing and additional void-fill.
              </p>
            </div>
          </motion.section>

          {/* Insurance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Marine Cargo Insurance — Pakistan to UK 2026
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Pakistan to UK sea voyage is 25–30 days at sea — significantly longer than shorter Gulf routes. Best
              International Movers arranges ICC &quot;A&quot; All-Risks marine cargo insurance covering vessel accident,
              Suez Canal incidents, theft, water damage, North Atlantic weather, rough handling and general average
              contributions. Carrier liability without insurance: USD 2 per kilogram under Hague-Visby Rules.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Declared Cargo Value</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">ICC &quot;A&quot; Premium (0.35%–0.60%)</th>
                </tr>
              </thead>
              <tbody>
                {insuranceRates.map((row, idx) => (
                  <tr key={row.value} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.value}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.premium}</td>
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

          {/* Prohibited Items */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Pakistan to UK Sea Freight — Prohibited and Restricted Items
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Pakistan Export Prohibited Items</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Currency over USD 10,000 without SBP approval</li>
                  <li>• Antiques over 50 years without Department of Archaeology NOC</li>
                  <li>• Firearms and ammunition without Ministry of Interior export licence</li>
                  <li>• Certain medications (narcotics) without DRAP authorisation</li>
                  <li>• CITES-listed endangered species products</li>
                </ul>
              </div>
              <div className="glass-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">UK Import Restricted / Prohibited Items</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Illegal drugs, offensive weapons, CITES products — absolute prohibitions</li>
                  <li>• Firearms — UK firearms certificate required</li>
                  <li>• Prescription medications — carry in hand luggage, do not ship</li>
                  <li>• Food products of plant origin — phytosanitary certificate required</li>
                  <li>• Meat and dairy — UK post-Brexit import restrictions</li>
                  <li>• Tobacco and alcohol — UK duty applies</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Common Mistakes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Pakistan to UK Sea Freight — Common Mistakes and How We Prevent Them
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

          {/* Our Service */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Pakistan to UK Sea Freight Service — Complete What We Handle
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our{" "}
              <Link to="/cargo-service-karachi" className="text-gold hover:underline font-medium">
                international sea freight and cargo service
              </Link>{" "}
              handles every element of your Pakistan to UK shipment under one roof — from your Pakistani front door to
              your UK front door.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Service Component</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">What We Deliver</th>
                </tr>
              </thead>
              <tbody>
                {serviceIncludes.map((row, idx) => (
                  <tr key={row.component} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.component}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.deliver}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* UK Cities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              UK Cities We Deliver To — Pakistan Sea Freight 2026
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">UK City</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Pakistani Community</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Delivery from Felixstowe</th>
                </tr>
              </thead>
              <tbody>
                {ukCities.map((row, idx) => (
                  <tr key={row.city} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.city}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground text-xs">{row.community}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.delivery}</td>
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
              Pakistan to UK Sea Freight — 2026 Client Reviews
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
              Frequently Asked Questions — Sea Freight Pakistan to UK 2026
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
        heading="Get Your Free Pakistan to UK Sea Freight Quote — June 2026"
        subtext="Free home survey in Karachi, Islamabad, Lahore & Peshawar. Written door-to-door quote. HMRC ToR guidance. ISPM-15 certified packing. ICC 'A' marine insurance. Call 0300-9130211"
      />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default SeaFreightPakistanToUK;
