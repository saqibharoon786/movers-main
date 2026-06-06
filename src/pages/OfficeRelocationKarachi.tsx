import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Server,
  Users,
  Warehouse,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Lock,
  HelpCircle,
  AlertTriangle,
  FileText,
  DollarSign,
  Star,
  ArrowRight,
  Globe2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

// Pricing list
const pricing = [
  { size: "Small Office (1–10 staff)", price: "PKR 20,000 – 45,000", includes: "Packing + IT + Furniture + Transport" },
  { size: "Medium Office (10–30 staff)", price: "PKR 45,000 – 90,000", includes: "Full packing + IT safe + Weekend available" },
  { size: "Large Office (30–75 staff)", price: "PKR 90,000 – 180,000", includes: "Project manager + IT team + After-hours" },
  { size: "Enterprise (75–200+ staff)", price: "PKR 180,000 – 400,000+", includes: "Full project plan + Phased execution" },
  { size: "Server Room Only", price: "PKR 25,000 – 75,000", includes: "Anti-static packing + IT specialist" },
  { size: "Furniture Only (no IT)", price: "PKR 15,000 – 50,000", includes: "Dismantling + Transport + Reassembly" },
  { size: "Karachi to Lahore Office", price: "PKR 50,000 – 150,000+", includes: "Intercity covered truck + GPS" },
  { size: "Weekend Surcharge", price: "+ PKR 8,000 – 20,000", includes: "Friday evening to Sunday — worth every rupee" },
];

// Zero downtime points
const downtimePoints = [
  "Weekend execution — we move on Friday evening, Saturday and Sunday so Monday morning is business as usual",
  "Per-workstation colour coding — every desk, chair, monitor, CPU, keyboard, mouse and cable is tagged with a colour-coded label matching a floor plan of the new office",
  "IT shutdown sequence — our team follows your IT manager's exact protocol for shutting down servers, workstations, networking switches and UPS units",
  "Dedicated IT crates — all computer equipment travels in custom-padded IT crates, not cardboard boxes",
  "Cable labelling — every cable at every workstation is photographed before disconnection and labelled for exact reconnection",
  "Parallel setup — while transport is underway, our advance team at the new office prepares workstation positions per the floor plan",
  "Staged reconnection — IT is reconnected workstation by workstation in sequence, tested before the next one begins",
  "Monday morning test — we do not leave until every workstation is powered on, connected and confirmed working",
];

// Steps list
const processSteps = [
  {
    step: "1",
    title: "Free Site Survey (Both Offices)",
    desc: "Our senior project manager visits your current Karachi office and your new location. We measure floor plans, photograph all assets, assess lift and loading access at both addresses, identify IT infrastructure complexity, flag any special items — safes, large conference tables, AV equipment, reception counters — and produce a detailed written quotation within 48 hours."
  },
  {
    step: "2",
    title: "Asset Inventory and Floor Plan Mapping",
    desc: "We create a complete asset inventory — every workstation, every server, every printer, every piece of office furniture. Each item is assigned a tag number and mapped to its exact position on the new office floor plan. This document becomes the master reference for every team member on move day."
  },
  {
    step: "3",
    title: "IT Coordination Meeting",
    desc: "Our project manager meets with your IT focal and admin team. We agree on: server shutdown sequence, data backup protocol before move, network equipment labelling, UPS and power strip handling, and post-move IT testing checklist. We never move IT infrastructure without explicit sign-off from your technical team."
  },
  {
    step: "4",
    title: "Building and Society Coordination",
    desc: "We coordinate with building management at both locations: service lift bookings for move days, parking permits for trucks, after-hours access approval, security desk briefing on crew IDs, and any society-specific protocols in DHA, Clifton or other managed areas."
  },
  {
    step: "5",
    title: "Pre-Move Packing (Documents and Non-IT Items)",
    desc: "Starting 1–2 days before the main move: all document files are packed into labelled, numbered cartons with chain-of-custody receipts. Non-essential office supplies, stationery, kitchen items and storage room contents are packed and sealed. Each carton is barcoded to its destination room and shelf in the new office."
  },
  {
    step: "6",
    title: "Move Day — IT Shutdown and Packing",
    desc: "Move day begins with your IT team shutting down systems in the agreed sequence. Our crew simultaneously photographs each workstation, labels all cables, disconnects and packs peripherals. Computers go into padded IT crates. Servers are packed in anti-static foam-lined cases. Networking equipment is wrapped and stored separately from all other cargo."
  },
  {
    step: "7",
    title: "Furniture Dismantling and Loading",
    desc: "Workstation partitions, conference tables, reception counters, storage shelving and all large furniture is dismantled systematically. Each piece is wrapped in furniture blankets, labelled with its destination position, and loaded in reverse floor plan sequence — items that go last in the new office load first, items that set up first load last."
  },
  {
    step: "8",
    title: "Transport with GPS Tracking",
    desc: "Our truck fleet carries GPS tracking on every vehicle. Your admin manager receives WhatsApp updates at departure, en route and arrival. For large office moves using multiple trucks, we operate a convoy with a lead coordinator ensuring all vehicles arrive together at the new location."
  },
  {
    step: "9",
    title: "Delivery, Setup and IT Reconnection",
    desc: "At the new Karachi office, our team places furniture per the floor plan, reassembles workstation partitions, and sets up all furniture before any IT equipment is installed. Once furniture is confirmed, workstations are placed and IT reconnection begins — cable by cable, workstation by workstation — with your IT focal supervising each connection."
  },
  {
    step: "10",
    title: "Go-Live Testing and Sign-Off",
    desc: "Every workstation is powered on and network connectivity confirmed before our crew leaves. Printers are tested. Phones are checked. Server room is verified online by your IT manager. Only when your designated sign-off person confirms everything is operational do we consider the move complete."
  }
];

// IT server handling
const serverHandlingPoints = [
  "All servers are shut down using your IT team's documented shutdown procedure — never powered off without authorisation",
  "Server rails are removed and packed separately; servers travel in their rack positions where possible or in individual padded anti-static cases",
  "Network switches, routers and patch panels are photographed before disconnection — every cable port documented",
  "UPS units are discharged to safe transport levels before loading — lithium battery compliance followed throughout",
  "All networking equipment travels in temperature-controlled truck space, never exposed to direct sun or heat",
  "Server room setup at destination follows your rack diagram exactly — our crew does not improvise equipment placement",
];

// IT workstation handling
const workstationHandlingPoints = [
  "Each workstation is photographed — top-down view showing all cable connections and peripheral positions",
  "All cables are labelled at both ends before disconnection — monitor cables, power cables, USB hubs, docking stations",
  "Desktop PCs travel in foam-padded IT crates with shock-absorbing base — never in cardboard boxes",
  "Monitors travel in custom foam-lined cartons or original manufacturer packaging where available",
  "Laptops travel in individual padded laptop bags, separated from all other cargo",
  "Hard drives and SSDs in transit-critical machines are removed and carried by your IT team personally — we recommend this as standard practice",
];

// Commercial areas list
const commercialAreas = [
  { area: "I.I. Chundrigar Road", locations: "Banks, corporate HQs, financial institutions", notes: "Weekday truck access restricted — weekend preferred" },
  { area: "Shahrah-e-Faisal", locations: "Airlines, hotels, PTCL, large corporates", notes: "Multiple building entry protocols — survey required" },
  { area: "DHA Business Zone", locations: "IT companies, clinics, SMEs, Tecno City", notes: "DHA truck entry coordination standard — we manage" },
  { area: "Clifton", locations: "Embassies, NGOs, luxury offices, media", notes: "Narrow access in older buildings — shuttle loading" },
  { area: "PECHS / Tariq Road", locations: "SMEs, retailers, fashion industry, IT", notes: "Good access — Tariq Road weekend loading easy" },
  { area: "Korangi Industrial", locations: "Manufacturing, logistics, warehousing", notes: "Heavy machinery moves available — site survey must" },
  { area: "SITE Area", locations: "Factories, industrial offices, textile", notes: "Large-format furniture + factory equipment specialist" },
  { area: "Gulshan-e-Iqbal", locations: "Tech firms, call centres, SMEs", notes: "Multiple high-rise complexes — lift coordination" },
  { area: "North Nazimabad", locations: "Healthcare, education, SME offices", notes: "Older buildings — stair carry common, extra crew" },
  { area: "Port Qasim / Bin Qasim", locations: "Port logistics, shipping companies", notes: "Heavy cargo + container coordination available" },
];

// Planning timeline
const planningTimeline = [
  { timeframe: "8 Weeks Before", actions: "Book your moving company — weekend dates fill 6–8 weeks out in Karachi. Get a free site survey and written quote. Sign agreement." },
  { timeframe: "6 Weeks Before", actions: "Notify all staff. Assign a move coordinator from your team. Begin decluttering — dispose of equipment, files and furniture you will not move." },
  { timeframe: "4 Weeks Before", actions: "IT team begins data backup audit. New office layout plan finalised. Notify PTCL / ISP for internet line installation at new address." },
  { timeframe: "3 Weeks Before", actions: "New office internet line confirmed. Colour-coded floor plan distributed to all staff. Department heads brief teams on move day responsibilities." },
  { timeframe: "2 Weeks Before", actions: "Non-essential items pre-packed. Archive files packed and labelled. Building management at both locations confirmed for move weekend." },
  { timeframe: "1 Week Before", actions: "IT shutdown sequence finalised with IT team. Truck access confirmed at both buildings. Move day crew briefing with your admin manager." },
  { timeframe: "Move Day (Fri–Sun)", actions: "IT shutdown, packing, loading, transport, delivery, setup, IT reconnection, go-live testing — all executed by Best International Movers." },
  { timeframe: "Monday Morning", actions: "Full operations at new Karachi office. Every desk live, every system online, every printer working. Staff arrive to a functioning office." },
];

// Document security protocol
const docSecurityPoints = [
  "All document cartons are sealed, numbered and inventoried before leaving your current office — a signed receipt is provided to your admin manager",
  "Cartons are loaded last and unloaded first — minimising the time documents spend in transit",
  "All document boxes carry visible 'CONFIDENTIAL — DO NOT OPEN' markings where instructed by your team",
  "File room and archive setup at the new office follows your filing system map exactly — no reorganisation by our crew",
  "Shredding coordination available for documents identified for disposal before the move",
  "Our crew members sign non-disclosure agreements for sensitive corporate moves on request",
];

// 10 Questions checklist
const checklistQuestions = [
  { num: 1, q: "Do you conduct a free site survey of both offices?", a: "Always — without surveying both locations we cannot quote accurately or plan the move correctly" },
  { num: 2, q: "Do you have IT-safe packing equipment?", a: "Yes — padded IT crates, anti-static foam, cable labelling system, monitor cartons" },
  { num: 3, q: "Can you execute the move over a weekend?", a: "Yes — Friday evening start, Saturday full day, Sunday completion for Monday go-live" },
  { num: 4, q: "Do you assign a dedicated project manager?", a: "Yes — single point of contact from survey through to Monday morning sign-off" },
  { num: 5, q: "Is the move fully insured?", a: "Yes — written transit insurance covering all office assets at replacement value" },
  { num: 6, q: "Do you provide a floor plan mapping service?", a: "Yes — every item tagged and mapped to its exact position in the new office" },
  { num: 7, q: "Do you coordinate with building management?", a: "Yes — lift bookings, truck permits, security briefing at both locations" },
  { num: 8, q: "Can you handle server room relocation?", a: "Yes — with anti-static packing and in coordination with your IT team" },
  { num: 9, q: "What is your damage claims process?", a: "Written claims procedure, surveyor assessment, settlement within 30 days" },
  { num: 10, q: "Do you provide corporate references?", a: "Yes — we can provide references from completed Karachi office relocations in 2026" },
];

// Common mistakes
const commonMistakes = [
  {
    title: "Mistake 1 — Moving on a Weekday",
    desc: "Moving during business hours means staff cannot work, clients cannot reach you, and the entire office is disrupted for 1–3 days. Weekend moves eliminate this entirely. In 2026, any office relocation company in Karachi that cannot offer a weekend execution window is not equipped for true zero-downtime corporate moving."
  },
  {
    title: "Mistake 2 — No Advance IT Coordination",
    desc: "The most expensive office relocation mistakes in Karachi involve IT. Servers improperly shut down cause data corruption. Cables reconnected to wrong ports cause hours of troubleshooting. Network equipment mishandled causes hardware failure. IT coordination is not optional — it is the foundation of a successful office move."
  },
  {
    title: "Mistake 3 — Choosing a Residential Mover for a Corporate Job",
    desc: "A company that primarily does house shifting does not have IT crates, does not understand chain-of-custody document handling, does not have project management capability, and is not equipped to execute a 50-workstation move with zero downtime. Corporate office relocation is a specialist service — it requires a company that does it regularly."
  },
  {
    title: "Mistake 4 — Not Getting a Written Quote",
    desc: "Verbal office relocation quotes in Karachi consistently increase on move day — when the mover sees the actual volume, the floor access challenges, or the IT complexity. A professional company provides a detailed written quotation after a physical site survey. What you are quoted is what you pay."
  },
  {
    title: "Mistake 5 — Ignoring Building Access Rules",
    desc: "Several Karachi commercial buildings — particularly in I.I. Chundrigar Road, DHA and Clifton — have strict weekday truck access restrictions, specific loading dock timings, and building management approval requirements. A mover that does not pre-coordinate with building management at both locations is setting your move up to fail before a single box is packed."
  }
];

// International office relocation routes
const internationalRoutes = [
  { route: "Karachi to Dubai, UAE", freight: "Sea LCL / Air", time: "10–15 days / 2–3 days", price: "From USD 380" },
  { route: "Karachi to Riyadh, KSA", freight: "Sea LCL / Air", time: "12–18 days / 2–4 days", price: "From USD 350" },
  { route: "Karachi to London, UK", freight: "Sea LCL / Air", time: "22–28 days / 3–5 days", price: "From USD 850" },
  { route: "Karachi to Toronto, Canada", freight: "Sea FCL / Air", time: "35–42 days / 4–6 days", price: "From USD 1,100" },
  { route: "Karachi to KL, Malaysia", freight: "Sea LCL / Air", time: "12–18 days / 3–4 days", price: "From USD 420" },
];

// Why choose us deliveries
const whyChooseUs = [
  { title: "Dedicated Project Manager", desc: "Single point of contact — no miscommunication between your team and ours" },
  { title: "Free Site Survey — Both Offices", desc: "Accurate quote, no move-day surprises, floor plan prepared in advance" },
  { title: "Weekend Execution", desc: "Monday morning you open at the new address — no weekday downtime" },
  { title: "IT-Safe Packing Crates", desc: "Computers, servers and networking equipment protected through transit" },
  { title: "Colour-Coded Floor Plan", desc: "Every workstation, every desk, every unit placed exactly as planned" },
  { title: "Full Transit Insurance", desc: "All office assets covered at replacement value — written policy" },
  { title: "Go-Live Testing", desc: "We do not leave until every workstation is confirmed operational" },
  { title: "No Hidden Charges", desc: "Written quote = final invoice — ever" },
  { title: "Background-Verified Crew", desc: "CNIC verified, uniformed, ID-carrying professionals in your office" },
  { title: "WhatsApp Updates", desc: "Real-time status updates throughout the entire move weekend" },
];

// Customer reviews
const reviews = [
  {
    quote: "We relocated our 45-person IT services office from Shahrah-e-Faisal to DHA Tecno City over a weekend in May 2026. Best International Movers moved 45 workstations, 3 servers, all networking equipment and our entire office furniture setup. Monday morning we opened at 8 AM, every system online, every desk in the right position. Absolutely zero downtime. The best corporate moving company in Karachi.",
    author: "Hassan Rauf",
    title: "CEO, IT Services Company | Shahrah-e-Faisal → DHA Karachi | May 2026"
  },
  {
    quote: "Our law firm moved from Clifton Block 5 to PECHS in April 2026. 12 staff, 3 rooms of client files, reception counter and conference room. Best International Movers handled the document packing with chain-of-custody receipts — exactly what we needed. Every file in the right place at the new office. Highly recommended for any professional office relocation in Karachi.",
    author: "Zara Mirza",
    title: "Managing Partner, Law Firm | Clifton → PECHS | April 2026"
  },
  {
    quote: "Relocated our call centre — 80 workstations, server room and all associated equipment — from Gulshan-e-Iqbal to North Nazimabad over a long weekend in March 2026. Every single workstation was operational by Monday 8 AM. Their project manager was exceptional — coordinated our IT team, the building management and his own crew perfectly. Zero downtime, zero damage.",
    author: "Adeel Raza",
    title: "Operations Director, BPO Company | Gulshan → North Nazimabad | March 2026"
  },
  {
    quote: "Small office move — 8 staff, 2 rooms — from Saddar to Tariq Road in February 2026. I was worried it would be complex but Best International Movers made it completely straightforward. Written quote matched invoice exactly. Team arrived on time, packed everything, set up perfectly in the new office in 4 hours. Will use again for our next expansion.",
    author: "Rukhsana Siddiqui",
    title: "Director, Marketing Agency | Saddar → Tariq Road | February 2026"
  }
];

// FAQ list
const faqs = [
  {
    q: "How much does office relocation cost in Karachi in 2026?",
    a: "Small office (1–10 staff): PKR 20,000–45,000. Medium office (10–30 staff): PKR 45,000–90,000. Large office (30–75 staff): PKR 90,000–180,000. Enterprise (75+ staff): PKR 180,000–400,000+. Weekend execution adds PKR 8,000–20,000. Exact price after free site survey of both locations."
  },
  {
    q: "Can you move our office without any business downtime?",
    a: "Yes — our zero-downtime weekend execution model moves your office Friday evening through Sunday so you open at the new address on Monday morning with every system operational. This is our standard corporate relocation approach for Karachi businesses."
  },
  {
    q: "Do you handle server room and IT equipment relocation?",
    a: "Yes. We use padded IT crates, anti-static foam packing, full cable labelling and photographic documentation at every workstation. Server room relocation follows your IT team's shutdown and setup protocols. We coordinate directly with your IT manager throughout."
  },
  {
    q: "How far in advance should we book for office relocation in Karachi?",
    a: "Minimum 6–8 weeks for medium to large offices. This allows time for site surveys, floor plan preparation, IT coordination, building management approvals and pre-packing. Peak periods (end of quarter, Eid holidays, year-end) book faster — earlier is always better."
  },
  {
    q: "Do you cover DHA and Clifton office relocations?",
    a: "Yes — DHA all phases including Tecno City, Clifton all blocks, I.I. Chundrigar Road, Shahrah-e-Faisal, PECHS, Gulshan-e-Iqbal, North Nazimabad, Korangi, SITE Area, Saddar, Tariq Road and all commercial areas across Karachi."
  },
  {
    q: "Is our office equipment insured during the move?",
    a: "Yes. Every office relocation carries full transit insurance at replacement value. In the rare event of any damage to equipment, furniture or documents, we provide complete compensation. Written insurance documentation is provided before move day."
  },
  {
    q: "Do you provide a dedicated project manager?",
    a: "Yes. Every corporate office relocation is assigned a dedicated project manager — your single point of contact from the initial site survey through to Monday morning go-live confirmation. Reachable by phone and WhatsApp throughout the move weekend."
  },
  {
    q: "Can you relocate our Karachi office to another city or internationally?",
    a: "Yes. Intercity office moves to Lahore, Islamabad, Rawalpindi and Peshawar are available with covered truck transport and GPS tracking. International office relocation to UAE, UK, Saudi Arabia, Canada and 100+ countries is available via our Karachi Port cargo service."
  }
];

// SEO schema functions
function buildMovingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Best International Movers & Logistics",
    "telephone": "+923009130211",
    "url": "https://bestintlmovers.com/office-relocation-karachi",
    "description": "Professional office relocation in Karachi 2026. Zero downtime, weekend execution, IT-safe packing, server room relocation. All Karachi areas covered.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "I.I. Chundrigar Road",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "priceRange": "PKR 20,000 - PKR 400,000+",
    "openingHours": "Mo-Sa 08:00-20:00",
    "areaServed": ["Karachi", "DHA Karachi", "Clifton", "PECHS", "Gulshan-e-Iqbal", "Shahrah-e-Faisal", "Korangi", "SITE Area", "North Nazimabad"]
  };
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com" },
      { "@type": "ListItem", position: 2, name: "Office Relocation Karachi", item: "https://bestintlmovers.com/office-relocation-karachi/" },
    ],
  };
}

const OfficeRelocationKarachi = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SEO
        title="Office Relocation Karachi 2026 | Call 0300-9130211"
        description="Professional office relocation in Karachi 2026. Zero downtime. IT-safe packing. DHA, Clifton, SITE all covered. Weekend moves. Free site survey. Call 0300-9130211."
        keywords="office relocation karachi, office shifting karachi, office movers karachi, corporate relocation karachi, office moving company karachi, office shifting services karachi, commercial relocation karachi, office relocation services karachi 2026, best office movers karachi, office shifting charges karachi, IT office relocation karachi, DHA office relocation karachi, office shifting without downtime karachi, corporate movers karachi, office furniture movers karachi, business relocation karachi, server room relocation karachi, office moving karachi weekend"
        urlPath="/office-relocation-karachi"
        canonicalUrl="https://bestintlmovers.com/office-relocation-karachi/"
        ogTitle="Office Relocation Karachi 2026 | Best International Movers"
        ogDescription="Professional office relocation in Karachi. Zero downtime. IT equipment, server rooms, furniture — all handled. Weekend moves. Call 0300-9130211."
        ogImage="/images/office-relocation-karachi.png"
        ogImageAlt="Office relocation and corporate moving in Karachi"
        schema={[buildMovingCompanySchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-navy-dark via-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Hero Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-gold/15 backdrop-blur-md border border-gold/30 rounded-full px-4 py-2 mb-6"
              >
                <Building2 className="text-gold" size={16} />
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                  Corporate Relocation 2026
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
              >
                Best Office Relocation Services in Karachi 2026 — Zero Downtime, Weekend Execution, Fully Insured
              </motion.h1>

              {/* Stat Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {[
                  "15+ Years Experience",
                  "Zero Business Downtime Guarantee",
                  "Weekend Execution Available",
                  "All Karachi Areas",
                  "Fully Insured",
                ].map((stat, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-white/95 text-xs font-medium px-3 py-1.5 rounded-md border border-white/10"
                  >
                    {stat}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-lg font-bold hover:bg-gold-light transition-all transform hover:-translate-y-0.5 shadow-lg shadow-gold/20"
                >
                  <Phone size={18} />
                  Book Free Site Survey
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold hover:bg-gold hover:text-navy-dark transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  WhatsApp: 0300-9130211
                </a>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <img
                  src="/images/office-relocation-karachi.png"
                  alt="Office Relocation Karachi 2026 Skyline and Moving Truck"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent"></div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-gold text-navy-dark p-4 rounded-xl shadow-xl font-display font-bold hidden sm:flex items-center gap-3 border border-white/20">
                <Clock className="animate-pulse" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-wider font-body">Guaranteed</p>
                  <p className="text-sm">Zero Downtime</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Page Layout */}
      <div className="py-20 bg-background relative">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 pb-2 border-b border-border">
              Introduction — Why Office Relocation in Karachi Demands Specialist Expertise
            </h2>
            <div className="text-muted-foreground space-y-5 leading-relaxed">
              <p>
                Office relocation in Karachi is categorically different from house shifting — and businesses that treat it as anything less than a specialist operation pay the price in days of lost productivity, damaged IT equipment, confused staff, and clients who cannot reach them.
              </p>
              <p>
                Karachi is Pakistan's commercial capital. Every major industry — banking, FMCG, textiles, pharmaceuticals, technology, shipping and logistics — has significant office infrastructure here. In 2026, the city's commercial real estate market is in active churn: IT companies are moving out of old Saddar buildings into modern DHA Tecno City offices. Multinationals are consolidating from multiple Clifton locations into single PECHS headquarters. Startups are upsizing from co-working spaces in Gulshan into their first dedicated floor.
              </p>
              <p>
                Every one of these moves carries the same core risk: business disruption. Every hour your IT systems are offline is lost revenue. Every workstation that arrives at the wrong desk is wasted setup time. Every server that is improperly handled is a potential data loss event. Every document carton that is mislabelled is a regulatory compliance risk.
              </p>
              <p>
                Best International Movers & Logistics has been executing zero-downtime office relocations in Karachi since 2009. Our corporate moving methodology — built around per-seat project planning, colour-coded asset tracking, IT-safe packing protocols, after-hours and weekend execution, and dedicated project management — ensures your business resumes operations at its new Karachi address as if the move never happened.
              </p>
              <p>
                This complete 2026 guide covers everything you need to plan, execute and complete a successful office relocation in Karachi: costs, timelines, IT handling, what questions to ask your moving company, and the step-by-step process that eliminates downtime.
              </p>
            </div>
          </motion.section>

          {/* Section 1: Pricing Guide */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><DollarSign size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                1. Office Relocation Charges in Karachi — 2026 Pricing Guide
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Office relocation pricing in Karachi is based on the number of workstations, volume of furniture, IT infrastructure complexity, distance, floor access and execution timing (weekday vs. weekend). Below is our transparent June 2026 pricing guide:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/20 text-foreground font-semibold">
                    <th className="px-6 py-4 border-b border-border">Office Size</th>
                    <th className="px-6 py-4 border-b border-border">Price Range (PKR)</th>
                    <th className="px-6 py-4 border-b border-border">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  {pricing.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-navy-light/5"}>
                      <td className="px-6 py-4 font-semibold text-foreground">{item.size}</td>
                      <td className="px-6 py-4 font-bold text-gold">{item.price}</td>
                      <td className="px-6 py-4">{item.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-gold/5 border-l-4 border-gold p-4 rounded-r-xl text-sm text-muted-foreground">
              <p className="font-semibold text-foreground mb-1">Indicative Pricing Notice:</p>
              All prices are indicative. Exact pricing is provided after a free site survey of both your current and new Karachi office locations. Our written quote is your final invoice — no additions on move day. Call 0300-9130211.
            </div>
          </motion.section>

          {/* Section 2: Zero Downtime */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="glass-card border border-border rounded-2xl p-8 shadow-sm bg-gradient-to-br from-navy-dark/95 to-navy/90 text-white relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 text-white"><Clock size={250} /></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gold/20 rounded-lg text-gold"><Clock size={24} /></div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold">
                    2. The #1 Rule of Office Relocation in Karachi — Zero Downtime
                  </h2>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Every business has a different tolerance for downtime. A trading firm cannot afford 4 hours offline. A law firm cannot have case files inaccessible for a day. An IT company cannot have developers offline for even an afternoon. Our zero-downtime office relocation methodology is built around one principle: your business opens at its new Karachi address on Monday morning exactly as it left the old one on Friday evening.
                </p>

                <h3 className="text-xl font-bold text-gold mb-4">How We Achieve Zero Downtime:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {downtimePoints.map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                      <span className="text-sm text-white/90 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3: 10 Steps Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><Calendar size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                3. Our Office Relocation Process in Karachi — 10 Steps to a Perfect Move
              </h2>
            </div>

            <div className="relative border-l-2 border-gold/30 ml-4 pl-6 space-y-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Number bubble */}
                  <div className="absolute -left-[38px] top-0 w-8 h-8 rounded-full bg-gold text-navy-dark font-bold flex items-center justify-center border-4 border-background text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: IT & Server Room Relocation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><Server size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                4. IT Equipment and Server Room Relocation Karachi — Specialist Handling
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              IT equipment is the most critical and most vulnerable element of any Karachi office relocation. Our IT-safe moving protocols are integrated into all our packers and movers in Karachi corporate operations — ensuring servers, workstations, networking equipment and sensitive electronics arrive at your new Karachi office in exactly the condition they left.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Server and network */}
              <div className="bg-navy-light/10 p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Server className="text-gold" size={20} />
                  Servers &amp; Networking Equipment
                </h3>
                <ul className="space-y-3">
                  {serverHandlingPoints.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workstations */}
              <div className="bg-navy-light/10 p-6 rounded-xl border border-border">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="text-gold" size={20} />
                  Workstation &amp; Desktop Computers
                </h3>
                <ul className="space-y-3">
                  {workstationHandlingPoints.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-xs text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-6 rounded-r-xl">
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2 text-sm">
                <ShieldCheck className="text-gold" size={18} />
                Data and Compliance During Office Relocation
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Best International Movers does not handle data — we move the hardware. But we understand that data compliance is your primary concern during office relocation. Our process supports your compliance requirements by maintaining chain-of-custody documentation for all IT equipment, providing signed asset receipts at both locations, and never leaving IT equipment unattended during transit.
              </p>
            </div>
          </motion.section>

          {/* Section 5: Commercial Areas Covered */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><MapPin size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                5. Karachi Commercial Areas We Cover — Office Relocation Across the City
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our office relocation teams operate across every major commercial district and business area in Karachi in 2026. Here is our area coverage with specific local knowledge for each zone:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/20 text-foreground font-semibold">
                    <th className="px-6 py-4 border-b border-border">Area</th>
                    <th className="px-6 py-4 border-b border-border">Key Business Locations</th>
                    <th className="px-6 py-4 border-b border-border">Special Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  {commercialAreas.map((zone, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-navy-light/5"}>
                      <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                        <MapPin className="text-gold shrink-0" size={14} />
                        {zone.area}
                      </td>
                      <td className="px-6 py-4">{zone.locations}</td>
                      <td className="px-6 py-4 text-xs italic">{zone.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 6: Planning Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><Clock size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                6. Office Relocation Planning Timeline — What to Do and When
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The most common mistake Karachi businesses make is starting their office relocation planning too late. Here is the exact timeline our project managers use for a successful zero-downtime office move:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/20 text-foreground font-semibold">
                    <th className="px-6 py-4 border-b border-border">Timeframe</th>
                    <th className="px-6 py-4 border-b border-border">Actions Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  {planningTimeline.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-navy-light/5"}>
                      <td className="px-6 py-4 font-semibold text-foreground shrink-0">{item.timeframe}</td>
                      <td className="px-6 py-4 leading-relaxed">{item.actions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 7: Secure Documents Relocation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><Lock size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                7. Office Documents, Archives and Confidential Files — Secure Relocation
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Document and archive management is one of the most overlooked aspects of office relocation in Karachi. Our secure document relocation protocol — used across all our cargo services in Karachi corporate operations — ensures your confidential files, HR records, financial documents and legal archives are handled with full chain-of-custody accountability.
            </p>

            <div className="bg-navy-light/10 p-6 rounded-xl border border-border mb-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Our Document Security Protocol</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {docSecurityPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                    <span className="text-xs text-muted-foreground leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/5 border-l-4 border-gold p-5 rounded-r-xl">
              <h4 className="font-bold text-foreground mb-2 text-sm">Legal and Regulatory Compliance</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For industries with document retention regulations — banking, insurance, pharmaceutical, legal and government-adjacent offices — Best International Movers provides a detailed chain-of-custody log for every carton moved. This log is signed by our project manager and your admin representative at both origin and destination, creating a full paper trail for audit purposes.
              </p>
            </div>
          </motion.section>

          {/* Section 8: 10 Questions Checklist */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><HelpCircle size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                8. 10 Questions to Ask Before Hiring an Office Relocation Company in Karachi
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The office relocation market in Karachi ranges from highly professional operations to general movers who have never handled a server room or a 50-workstation open-plan office. Before you sign any agreement, ask these ten questions:
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/20 text-foreground font-semibold">
                    <th className="px-4 py-4 border-b border-border w-12 text-center">#</th>
                    <th className="px-6 py-4 border-b border-border">Question</th>
                    <th className="px-6 py-4 border-b border-border">What a Professional Company Says</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  {checklistQuestions.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-navy-light/5"}>
                      <td className="px-4 py-4 text-center font-bold text-foreground">{row.num}</td>
                      <td className="px-6 py-4 font-semibold text-foreground">{row.q}</td>
                      <td className="px-6 py-4 text-xs leading-relaxed">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Best International Movers answers yes to all ten. Call <strong className="text-gold">0300-9130211</strong> and verify for yourself — our Karachi project manager will answer every question directly.
              </p>
            </div>
          </motion.section>

          {/* Section 9: Common Mistakes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><AlertTriangle size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                9. Common Office Relocation Mistakes in Karachi — And How We Prevent Them
              </h2>
            </div>

            <div className="grid gap-6">
              {commonMistakes.map((mistake, idx) => (
                <div key={idx} className="bg-background border border-border rounded-xl p-6 shadow-sm hover:border-gold/30 transition-colors">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                    <AlertTriangle className="text-gold shrink-0" size={18} />
                    {mistake.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">{mistake.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 10: International Office Relocation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><Globe2 size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                10. International Office Relocation from Karachi — When Your Business Moves Abroad
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For businesses relocating internationally from Karachi — whether moving an entire office to Dubai, shipping equipment to a UK subsidiary, or relocating a team to Canada — our office relocation service connects directly with our international cargo services from Karachi Port providing seamless corporate relocation from your Karachi office to any destination worldwide.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              International office moves from Karachi involve an additional layer of complexity beyond domestic relocation: export customs documentation for commercial goods, restricted item compliance (certain electronics require export licences), marine cargo insurance for the international voyage, and destination import customs clearance.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our international corporate moving team manages all of this in-house — from the packing of IT equipment at your Karachi office to the delivery and setup at your new international location. We have executed international office relocations from Karachi to Dubai, Abu Dhabi, Riyadh, London, Toronto and Kuala Lumpur in 2026.
            </p>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/20 text-foreground font-semibold">
                    <th className="px-6 py-4 border-b border-border">International Route</th>
                    <th className="px-6 py-4 border-b border-border">Freight Option</th>
                    <th className="px-6 py-4 border-b border-border">Transit Time</th>
                    <th className="px-6 py-4 border-b border-border">From (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  {internationalRoutes.map((route, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-navy-light/5"}>
                      <td className="px-6 py-4 font-semibold text-foreground">{route.route}</td>
                      <td className="px-6 py-4">{route.freight}</td>
                      <td className="px-6 py-4">{route.time}</td>
                      <td className="px-6 py-4 font-bold text-gold">{route.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 11: Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><ShieldCheck size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                11. Why Karachi Businesses Choose Best International Movers for Office Relocation
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-navy-light/20 text-foreground font-semibold">
                    <th className="px-6 py-4 border-b border-border w-1/3">What We Deliver</th>
                    <th className="px-6 py-4 border-b border-border w-2/3">Why It Matters for Your Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-muted-foreground">
                  {whyChooseUs.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-navy-light/5"}>
                      <td className="px-6 py-4 font-semibold text-foreground">{item.title}</td>
                      <td className="px-6 py-4">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 12: Client Reviews */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><Star size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                12. What Karachi Businesses Say — Office Relocation Reviews 2026
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((rev, idx) => (
                <div key={idx} className="bg-navy-light/10 border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-gold/20 transition-all">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="text-gold fill-gold" size={14} />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic leading-relaxed mb-4">
                      "{rev.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{rev.author}</p>
                    <p className="text-[11px] text-gold">{rev.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 13: FAQs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 glass-card border border-border rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gold/10 rounded-lg text-gold"><HelpCircle size={24} /></div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                13. Frequently Asked Questions — Office Relocation Karachi 2026
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-xl overflow-hidden bg-background"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:bg-navy-light/5 transition-colors"
                  >
                    <span className="text-sm pr-4">{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="text-gold shrink-0" size={18} />
                    ) : (
                      <ChevronDown className="text-gold shrink-0" size={18} />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 border-t border-border/50 text-xs text-muted-foreground leading-relaxed bg-navy-light/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Booking / CTA Card */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-navy-dark to-navy border-2 border-gold/30 rounded-3xl p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <Warehouse className="mx-auto text-gold mb-4" size={40} />
              
              <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                BOOK FREE OFFICE SITE SURVEY — KARACHI 2026
              </h2>
              
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm">
                Karachi Operations: Available Mon–Sun | Emergency weekend service 24 hours.
                Zero Downtime Guarantee | Written Quote = Final Invoice | Monday Morning Go-Live Confirmed.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-xl mx-auto mb-8 text-left grid md:grid-cols-2 gap-4">
                <div className="text-white/90 text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone className="text-gold shrink-0" size={16} />
                    <span>Call / WhatsApp: <strong className="text-white">0300-9130211</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FileText className="text-gold shrink-0" size={16} />
                    <span>Email: <strong className="text-white">info@bestintlmovers.com</strong></span>
                  </p>
                </div>
                <div className="text-white/90 text-sm space-y-2">
                  <p className="flex items-center gap-2">
                    <Globe2 className="text-gold shrink-0" size={16} />
                    <span>Website: <strong className="text-white">bestintlmovers.com</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="text-gold shrink-0" size={16} />
                    <span className="text-gold font-semibold">Zero Downtime Guarantee</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3.5 rounded-lg font-bold hover:bg-gold-light transition-all"
                >
                  Request Site Survey
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3.5 rounded-lg font-bold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      <div className="bg-navy-dark border-t border-white/10 py-6 text-center text-xs text-white/55">
        <div className="container mx-auto px-4">
          <p>© June 2026 Best International Movers &amp; Logistics | Karachi's #1 Office Relocation Company | bestintlmovers.com</p>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default OfficeRelocationKarachi;
