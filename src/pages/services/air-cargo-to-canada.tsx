import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  Plane,
  Package,
  MessageCircle,
  Star,
  MapPin,
  FileCheck,
  ShieldCheck,
  Globe,
  Clock,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20air%20cargo%20to%20Canada%20quote.";

const heroStats = [
  { value: "5–9 Days", label: "Door-to-Door Delivery" },
  { value: "From PKR 16,000", label: "Small Parcels (Up to 5 kg)" },
  { value: "10+ Years", label: "Pakistan to Canada Route" },
  { value: "All Provinces", label: "Canadian Delivery" },
];

const airVsSea = [
  { factor: "Transit time", detail: "Air: 5–9 business days vs Sea: 35–50 days" },
  { factor: "Tracking", detail: "Real-time flight tracking vs vessel milestone updates" },
  { factor: "Damage risk", detail: "Very low — minimal handling vs sea exposure" },
  { factor: "Urgency capability", detail: "Express delivery in 48–72 hours available" },
  { factor: "Size flexibility", detail: "From 1 kg parcels to 500 kg+ consignments" },
  { factor: "Customs speed", detail: "Air customs typically cleared in 1–3 days" },
  { factor: "Reliability", detail: "Fixed airline schedules — predictable arrival" },
  { factor: "Best for", detail: "Documents, electronics, clothing, medicines, gifts" },
];

const serviceOptions = [
  {
    icon: Package,
    title: "1. Door-to-Door Air Cargo — Pakistan to Canada",
    intro:
      "Our most popular service. We collect your cargo from your home, office, or warehouse anywhere in Pakistan and deliver it directly to the recipient's door anywhere in Canada.",
    bullets: [
      "Pickup from your location in Pakistan — same day or next day collection available",
      "Professional packing using airline-approved materials",
      "All documentation prepared — airway bill, commercial invoice, packing list",
      "Pakistan export customs clearance — FBR compliance",
      "Air transit via scheduled airlines — Karachi / Lahore / Islamabad to Canada",
      "CBSA import customs clearance in Canada — by our licensed Canadian broker",
      "Final delivery to recipient's door anywhere in Canada",
      "Delivery confirmation with proof of receipt",
    ],
    note: "Door-to-door eliminates the risk of your Canadian recipient needing to visit a cargo terminal or navigate CBSA paperwork alone.",
  },
  {
    icon: Clock,
    title: "2. Express Air Cargo — 48 to 72 Hours",
    intro:
      "When your shipment absolutely cannot wait, our express air cargo service to Canada delivers in 48 to 72 hours from Pakistan.",
    bullets: [
      "Ideal for: Legal documents, passport applications, visa documents, business samples",
      "Medical shipments: Medicines, test samples, and medical equipment",
      "Business-critical cargo: Product samples, spare parts, signed contracts",
      "Transit route: Pakistan → Dubai/Doha/Istanbul → Canada (fastest available routing)",
    ],
    note: "Express air cargo operates on premium airline rates. Contact us for express pricing based on weight, dimensions, and airline availability.",
  },
  {
    icon: Globe,
    title: "3. Personal Parcel & Family Cargo to Canada",
    intro:
      "Sending a parcel to your family in Canada? Our personal parcel service handles shipments from 1 kg to 150 kg with the same level of care regardless of size.",
    bullets: [
      "Clothing — shalwar kameez, shawls, suits, children's clothes",
      "Medicines and health supplements unavailable in Canada",
      "Pakistani dry food — sealed commercial spices, dried fruits, specialty items",
      "Books, educational materials, gifts, toys, and personal items",
      "Prayer mats, Qurans, and Islamic items",
      "Electronics, Pakistani traditional items — embroidered items, brassware, handicrafts",
    ],
    note: "Consolidate multiple small parcels into one shipment — a single 15 kg shipment is significantly cheaper per kg than three separate 5 kg shipments.",
  },
  {
    icon: Briefcase,
    title: "4. Commercial Air Freight Pakistan to Canada",
    intro:
      "Pakistani businesses exporting to Canada rely on Best Int'l Movers for regular commercial air freight needs.",
    bullets: [
      "Export documentation — commercial invoice, packing list, certificate of origin (TDAP/Chamber)",
      "HS code classification for CBSA import duty assessment",
      "Letter of Credit documentation handling",
      "CBSA Advance Commercial Information (ACI) filing",
      "Canada-Pakistan trade preferential tariff advisory",
      "Volume-based pricing for regular exporters — dedicated account manager",
      "Temperature-controlled options for pharmaceutical exports",
    ],
  },
  {
    icon: GraduationCap,
    title: "5. Student Cargo Service — Pakistan to Canada",
    intro:
      "Our student cargo service is designed for Pakistani students shipping essential belongings at affordable rates.",
    bullets: [
      "Special student pricing for shipments under 50 kg",
      "Fast delivery aligned with university term start dates",
      "CBSA personal effects advisory for student visa holders",
      "Delivery to student residences, university addresses, and off-campus housing",
      "WhatsApp support — available 24/7 throughout your shipment",
    ],
  },
  {
    icon: ShieldCheck,
    title: "6. Cargo Insurance — Complete Protection",
    intro:
      "All air cargo shipments can be fully insured at minimal cost. For high-value electronics, jewellery, and important personal items — insurance is essential.",
    bullets: [
      "All-risk coverage: Loss, damage, and theft during entire transit",
      "Premium: Approximately 1.5–2.5% of declared cargo value",
      "Claims: Our team assists with all documentation for any claim",
      "Declared value: You declare the replacement value of your goods",
    ],
    hasInsuranceLink: true,
  },
];

const standardRates = [
  { weight: "Up to 5 kg (flat rate)", rate: "PKR 16,000 – 24,000 total", time: "6–9 Business Days" },
  { weight: "5 kg – 20 kg", rate: "PKR 2,800 – 3,600 per kg", time: "6–9 Business Days" },
  { weight: "20 kg – 50 kg", rate: "PKR 2,200 – 2,900 per kg", time: "6–8 Business Days" },
  { weight: "50 kg – 150 kg", rate: "PKR 1,800 – 2,400 per kg", time: "5–8 Business Days" },
  { weight: "150 kg – 300 kg", rate: "PKR 1,500 – 2,000 per kg", time: "5–7 Business Days" },
  { weight: "300 kg – 500 kg", rate: "PKR 1,200 – 1,700 per kg", time: "5–7 Business Days" },
  { weight: "500 kg+", rate: "Custom Quote", time: "5–7 Business Days" },
];

const expressRates = [
  { weight: "Up to 2 kg", rate: "PKR 18,000 – 28,000 total", time: "48–72 Hours" },
  { weight: "2 kg – 10 kg", rate: "PKR 4,500 – 6,000 per kg", time: "48–72 Hours" },
  { weight: "10 kg – 30 kg", rate: "PKR 3,500 – 4,800 per kg", time: "72–96 Hours" },
];

const transitTimes = [
  { route: "Karachi (KHI) → Toronto (YYZ)", standard: "6–9 Business Days", express: "48–72 Hours" },
  { route: "Lahore (LHE) → Toronto (YYZ)", standard: "6–9 Business Days", express: "48–72 Hours" },
  { route: "Islamabad (ISB) → Toronto (YYZ)", standard: "6–9 Business Days", express: "48–72 Hours" },
  { route: "Karachi (KHI) → Vancouver (YVR)", standard: "6–9 Business Days", express: "72–96 Hours" },
  { route: "Karachi (KHI) → Calgary (YYC)", standard: "6–9 Business Days", express: "72–96 Hours" },
  { route: "Karachi (KHI) → Edmonton (YEG)", standard: "7–9 Business Days", express: "72–96 Hours" },
  { route: "Karachi (KHI) → Montreal (YUL)", standard: "7–10 Business Days", express: "72–96 Hours" },
  { route: "Karachi (KHI) → Ottawa (YOW)", standard: "7–10 Business Days", express: "72–96 Hours" },
  { route: "Karachi (KHI) → Winnipeg (YWG)", standard: "7–10 Business Days", express: "96 Hours" },
];

const processSteps = [
  "Request a Free Quote — Share weight, dimensions, contents, origin city, and Canadian delivery address.",
  "Receive Your Quote — Detailed all-inclusive quote within 2 hours. No hidden charges.",
  "Confirm Booking — Approve quote, share cargo details, confirm pickup date.",
  "Pakistan Pickup — Our team arrives, inspects, weighs, and photographs your cargo.",
  "Professional Packing — Airline-approved materials. Fragile items get bubble wrap and foam protection.",
  "Airway Bill Preparation — Master Airway Bill (MAWB) and House Airway Bill (HAWB) prepared.",
  "Pakistan Export Customs — Export declaration filed with Pakistan Customs (FBR).",
  "Airport Delivery & Check-In — Cargo delivered to departing airport cargo terminal.",
  "Air Transit — Via Emirates, Qatar Airways, or Turkish Airlines routes to Canada.",
  "Canadian Airport Arrival — Cargo arrives at YYZ, YVR, YYC, or other destination airport.",
  "CBSA Customs Clearance — Licensed Canadian broker clears shipment with CBSA.",
  "Final Delivery — Delivered to recipient's door anywhere in Canada with confirmation.",
];

const personalItems = [
  "Clothing, shoes, and fashion accessories",
  "Traditional Pakistani suits, shawls, and embroidered wear",
  "Medicines and health supplements (with prescription where required)",
  "Pakistani dry food items — sealed commercial spices, rice, dried fruits",
  "Books, stationery, and educational materials",
  "Electronics — phones, laptops, tablets, cameras",
  "Gifts, toys, and children's items",
  "Prayer mats, Qurans, and Islamic items",
  "Documents and legal papers",
  "Jewellery — declared accurately with values",
];

const commercialItems = [
  "Garments and ready-made textiles from Faisalabad and Lahore",
  "Leather goods from Karachi and Lahore",
  "Sports goods from Sialkot",
  "Surgical instruments and medical devices from Sialkot",
  "Software and IT equipment",
  "Machine parts and industrial components",
  "Pharmaceutical products — with Health Canada compliance",
  "Carpets and handicrafts for retail",
];

const prohibitedItems = [
  "Firearms, weapons, and ammunition — strictly prohibited",
  "Narcotics and controlled substances",
  "Fresh fruits, vegetables, and live plants without permits",
  "Flammable liquids, gases, and aerosols — dangerous goods",
  "Standalone lithium batteries above IATA threshold",
  "Perishable food without proper temperature control",
  "Counterfeit goods — CBSA seizes and destroys",
  "Currency over CAD 10,000 without declaration",
];

const customsDocs = [
  { doc: "Commercial Invoice", personal: "Required (content + value)", commercial: "Required (detailed)" },
  { doc: "Airway Bill (AWB)", personal: "We prepare", commercial: "We prepare" },
  { doc: "Packing List", personal: "We prepare", commercial: "We prepare" },
  { doc: "Passport Copy (sender)", personal: "Required", commercial: "Required" },
  { doc: "CBSA Import Declaration", personal: "Our broker files", commercial: "Our broker files" },
  { doc: "Certificate of Origin", personal: "Not usually required", commercial: "Required for preferential duty" },
];

const pakistanCities = [
  { city: "Karachi", notes: "Same-day and next-day pickup. Direct access to Jinnah International Airport (KHI)." },
  { city: "Lahore", notes: "Next-day pickup. Allama Iqbal International Airport (LHE)." },
  { city: "Islamabad / Rawalpindi", notes: "Next-day pickup. New Islamabad International Airport (ISB)." },
  { city: "Peshawar", notes: "Collection within 24–48 hours. Transfer to ISB." },
  { city: "Multan", notes: "Collection within 24–48 hours. Transfer to Karachi or Lahore." },
  { city: "Faisalabad", notes: "Collection within 24–48 hours. Transfer to Lahore (LHE)." },
  { city: "Sialkot", notes: "Collection within 24 hours. Sialkot International Airport (SKT)." },
  { city: "Gujranwala", notes: "Collection within 24–48 hours. Transfer to Lahore hub." },
  { city: "Quetta", notes: "Collection available. Transfer to Karachi." },
  { city: "Hyderabad", notes: "Collection available. Close to Karachi hub." },
];

const canadaOntario = [
  "Toronto (all areas) — Scarborough, Etobicoke, North York, Downtown",
  "Mississauga — Largest Pakistani community concentration",
  "Brampton — High Pakistani density, fast delivery",
  "Ottawa — Federal capital",
  "Hamilton, London, Windsor, Kitchener, Waterloo",
  "Markham, Vaughan, Richmond Hill, Oakville, Burlington",
];

const advantages = [
  { advantage: "10+ Years Pakistan-Canada Air Freight", meaning: "Deep route knowledge and proven track record on this corridor" },
  { advantage: "Pickup from Your Door in Pakistan", meaning: "We collect from home, office, or factory anywhere in Pakistan" },
  { advantage: "Licensed Canadian Customs Broker", meaning: "Correct CBSA clearance — no delays from documentation errors" },
  { advantage: "All-Inclusive Transparent Pricing", meaning: "One quote covers pickup, packing, freight, CBSA, and Canadian delivery" },
  { advantage: "Real-Time Tracking Throughout", meaning: "AWB number + WhatsApp updates at every milestone" },
  { advantage: "Express Service Available", meaning: "48–72 hour delivery when you genuinely need it that fast" },
  { advantage: "Cargo Insurance Option", meaning: "Full all-risk coverage at minimal cost" },
  { advantage: "24/7 WhatsApp Support", meaning: "Our team answers messages any time" },
  { advantage: "Specialist Pakistani Items", meaning: "Carpets, embroidered suits, spices, brassware — handled with expert care" },
  { advantage: "Student & Family Packages", meaning: "Affordable rates for small personal shipments" },
  { advantage: "CBSA Settler's Effects Advisory", meaning: "Duty-free personal effects guidance for new Canadian immigrants" },
];

const testimonials = [
  {
    title: "Delivered in 6 Days to Toronto — Excellent!",
    quote:
      "I sent a 14 kg parcel of medicines and clothes from Islamabad to my son in Toronto. Best Int'l Movers collected from my home and the parcel was delivered in exactly 6 business days. The WhatsApp tracking updates were very reassuring. Highly recommended.",
    name: "Farida A.",
    location: "Islamabad",
  },
  {
    title: "Best Air Cargo Service — Karachi to Vancouver",
    quote:
      "We regularly send commercial leather goods from Karachi to our retail partner in Vancouver. Best Int'l Movers handles everything — pickup, export customs, airline booking, CBSA clearance, and delivery. Consistent, reliable, and very professional.",
    name: "Tariq Exports",
    location: "Karachi",
  },
  {
    title: "Student Cargo — Lahore to Mississauga",
    quote:
      "I was moving to Sheridan College in Mississauga and needed to send my clothes, books, and essential items from Lahore. The student cargo package was very affordable and my things arrived in 7 days — perfectly in time for my first week of classes.",
    name: "Zainab K.",
    location: "Mississauga",
  },
  {
    title: "Express Cargo — Critical Documents to Ottawa",
    quote:
      "I needed urgent legal documents to reach my lawyer in Ottawa within 3 days. Best Int'l Movers' express service collected from my office in Karachi and delivered in exactly 3 business days. Flawless service when it mattered most.",
    name: "Ahmed R.",
    location: "Karachi",
  },
];

const faqs = [
  {
    q: "How long does air cargo take from Pakistan to Canada?",
    a: "Standard air cargo takes 6 to 9 business days door to door. Express service delivers in 48 to 72 hours. Transit includes Pakistan pickup, export customs, air transit, CBSA clearance, and final delivery.",
  },
  {
    q: "What is the cheapest air cargo rate from Pakistan to Canada?",
    a: "Rates start from approximately PKR 16,000–24,000 for shipments up to 5 kg. For heavier shipments, per-kg rates reduce significantly — 150 kg+ can achieve PKR 1,500–2,000 per kg. Contact us for an exact all-inclusive quote.",
  },
  {
    q: "Do I pay Canadian customs duty on air cargo from Pakistan?",
    a: "Personal gifts under CAD 60 are duty-free. Personal effects for new Canadian immigrants may qualify for Settler's Effects exemption. Commercial goods are subject to CBSA duty based on HS codes and value.",
  },
  {
    q: "Can I track my air cargo shipment to Canada?",
    a: "Yes. Once booked, track using the AWB number on the airline's cargo portal. Our team also sends WhatsApp updates at every key milestone.",
  },
  {
    q: "Can you collect air cargo from small Pakistani cities?",
    a: "Yes. We collect from all Pakistani cities. For cities without direct international flights, we transfer to the nearest hub airport (Karachi, Lahore, or Islamabad).",
  },
  {
    q: "What is the maximum weight for air cargo to Canada?",
    a: "There is no strict maximum — we handle from 1 kg parcels to 500 kg+ consignments. Very large shipments above 500 kg are handled on charter or dedicated air freight basis.",
  },
  {
    q: "Can I send Pakistani food to Canada by air?",
    a: "Commercially sealed dry food items — spices, rice, dried fruits — can generally be sent with proper CBSA declaration. Fresh fruits, vegetables, meat, and dairy are restricted or prohibited.",
  },
  {
    q: "Is air cargo insurance mandatory?",
    a: "No — but strongly recommended for cargo above PKR 30,000. Basic carrier liability covers approximately USD 22 per kg. Full all-risk insurance at 1.5–2.5% of declared value provides complete protection.",
  },
  {
    q: "Can businesses use your air cargo service for regular exports to Canada?",
    a: "Absolutely. We offer dedicated commercial accounts with volume-based pricing, dedicated account manager, and full documentation management.",
  },
  {
    q: "What airlines do you use for Pakistan to Canada air cargo?",
    a: "We work with Emirates, Qatar Airways, Turkish Airlines, Lufthansa, and Air Canada transshipment cargo — selecting the best routing for your date, weight, and destination.",
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
  name: "Air Cargo to Canada from Pakistan",
  description:
    "Door-to-door air cargo to Canada from Pakistan — personal parcels, commercial freight, express delivery, CBSA customs clearance and Canadian last-mile delivery.",
  serviceType: "International air freight",
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Canada" },
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

export default function AirCargoToCanada() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Air Cargo to Canada from Pakistan | Fast Door-to-Door Delivery | Best Int'l Movers"
        description="Send air cargo to Canada from Pakistan in 5–9 days. Best Int'l Movers offers affordable door-to-door air freight from Karachi, Lahore & Islamabad to Toronto, Vancouver, Calgary & all Canadian cities. Full customs clearance. Get a free quote today!"
        keywords="air cargo to canada, air cargo to canada from pakistan, air freight to canada, send cargo to canada, air cargo service canada, shipping to canada by air, air cargo rates to canada, cargo to canada from karachi lahore islamabad, fast cargo to canada, door to door air cargo canada, cargo delivery canada, international air cargo canada"
        urlPath="/services/air-cargo-to-canada/"
        canonicalUrl="https://bestintlmovers.com/services/air-cargo-to-canada/"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Plane className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Air Cargo to Canada — 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Air Cargo to Canada from Pakistan — Fast, Reliable &amp; Affordable Door-to-Door Shipping
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Urgent documents, family parcels &amp; commercial cargo — Karachi, Lahore, Islamabad to Toronto,
              Vancouver, Calgary, Edmonton &amp; all Canadian provinces
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
                Get Free Air Cargo Quote
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

          <section className="mb-14">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Need to send <strong>air cargo to Canada</strong> from Pakistan? Whether you are shipping urgent
              documents, a parcel of clothes for family in Toronto, commercial goods to Vancouver, or essential
              personal effects for a new life in Calgary — Best Int&apos;l Movers delivers your air cargo to Canada
              faster, more safely, and more affordably than any other Pakistani freight company.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our dedicated air cargo service connects all major Pakistani cities — Karachi, Lahore, Islamabad,
              Rawalpindi, Peshawar, Multan, Faisalabad, and Sialkot — directly to every Canadian province and territory.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of Pakistan-Canada air freight experience, established airline partnerships, and a
              licensed Canadian customs broker network, Best Int&apos;l Movers is the name thousands of Pakistani
              families, students, and businesses trust when their cargo needs to reach Canada fast.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Send Air Cargo to Canada from Pakistan?
            </h2>
            <p className="text-muted-foreground mb-6">
              Canada is home to over 300,000 Pakistanis across Toronto, Mississauga, Brampton, Vancouver, Surrey,
              Calgary, Edmonton, Ottawa, and Winnipeg. Air cargo is the preferred choice when speed, safety, and
              certainty matter.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Why Air Cargo Beats Sea Freight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Details</th>
                </tr>
              </thead>
              <tbody>
                {airVsSea.map((row) => (
                  <tr key={row.factor} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.factor}</td>
                    <td className="p-4 text-muted-foreground">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Our Air Cargo Services to Canada</h2>
            <div className="space-y-8">
              {serviceOptions.map((opt) => (
                <div key={opt.title} className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <opt.icon className="text-gold flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl font-display font-semibold text-foreground">{opt.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {opt.intro}
                    {opt.hasInsuranceLink && (
                      <>
                        {" "}
                        Learn more about{" "}
                        <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline font-medium">
                          cargo insurance for international shipments
                        </Link>
                        .
                      </>
                    )}
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    {opt.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {opt.note && <p className="text-sm text-muted-foreground italic">{opt.note}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Air Cargo Rates to Canada from Pakistan — 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Our rates are calculated on chargeable weight — the greater of actual weight (kg) or volumetric weight
              (Length × Width × Height in cm ÷ 6000).
            </p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Standard Air Cargo Rates</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Chargeable Weight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approx. Rate (PKR)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Estimated Transit</th>
                </tr>
              </thead>
              <tbody>
                {standardRates.map((row) => (
                  <tr key={row.weight} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.weight}</td>
                    <td className="p-4 text-foreground font-medium">{row.rate}</td>
                    <td className="p-4 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Express Air Cargo Rates</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Weight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approx. Rate (PKR)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Transit Time</th>
                </tr>
              </thead>
              <tbody>
                {expressRates.map((row) => (
                  <tr key={row.weight} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.weight}</td>
                    <td className="p-4 text-foreground font-medium">{row.rate}</td>
                    <td className="p-4 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm text-muted-foreground italic mb-4">
              Note: All rates are indicative and subject to airline fuel surcharges, seasonal demand, and cargo type.
            </p>
            <div className="glass-card rounded-2xl p-6 border border-amber-500/20 text-sm text-muted-foreground">
              <strong className="text-foreground">Watch Out:</strong> Beware of companies quoting very low air cargo
              rates that exclude fuel surcharges, security fees, CBSA clearance, and Canadian delivery. Our
              all-inclusive quotes cover every charge from Pakistan pickup to Canadian doorstep delivery.
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Air Cargo Transit Times — Pakistan to Canada
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Route</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Standard Transit</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Express Transit</th>
                </tr>
              </thead>
              <tbody>
                {transitTimes.map((row) => (
                  <tr key={row.route} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.route}</td>
                    <td className="p-4 text-foreground font-medium">{row.standard}</td>
                    <td className="p-4 text-muted-foreground">{row.express}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              How It Works — Step-by-Step Air Cargo Process
            </h2>
            <ol className="space-y-4">
              {processSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">What We Ship by Air Cargo to Canada</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="glass-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Personal &amp; Family Items</h3>
                <ul className="space-y-2">
                  {personalItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Commercial Cargo</h3>
                <ul className="space-y-2">
                  {commercialItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Items We Cannot Ship by Air to Canada</h3>
              <ul className="space-y-2">
                {prohibitedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-14 glass-card rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-gold" size={24} />
              CBSA Customs Clearance — We Handle Everything
            </h2>
            <p className="text-muted-foreground mb-4">
              Our licensed Canadian customs broker handles the entire CBSA clearance process on your behalf. For
              personal effects guidance, see our{" "}
              <Link
                to="/blog/canada-customs-rules-personal-effects-pakistan/"
                className="text-gold hover:underline font-medium"
              >
                Canada customs rules for personal effects
              </Link>{" "}
              guide.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-3">Required Documents</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Document</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Personal Shipment</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Commercial Shipment</th>
                </tr>
              </thead>
              <tbody>
                {customsDocs.map((row) => (
                  <tr key={row.doc} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.doc}</td>
                    <td className="p-4 text-muted-foreground">{row.personal}</td>
                    <td className="p-4 text-muted-foreground">{row.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm text-muted-foreground italic">
              Always declare the accurate value of your goods. Under-declaring to avoid duty is a customs offence.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Pakistani Cities We Collect Air Cargo From
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">City</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Collection Details</th>
                </tr>
              </thead>
              <tbody>
                {pakistanCities.map((row) => (
                  <tr key={row.city} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-foreground font-medium">{row.city}</td>
                    <td className="p-4 text-muted-foreground">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="text-gold" size={26} />
              Canadian Cities We Deliver Air Cargo To
            </h2>
            <h3 className="text-lg font-semibold text-foreground mb-3">Ontario — Largest Pakistani Community</h3>
            <ul className="space-y-2 mb-6">
              {canadaOntario.map((city) => (
                <li key={city} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  {city}
                </li>
              ))}
            </ul>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">British Columbia</h3>
                <p>Vancouver, Surrey, Burnaby, Richmond, Abbotsford, Langley, Coquitlam, Victoria</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Alberta</h3>
                <p>Calgary, Edmonton, Red Deer, Lethbridge, Medicine Hat</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quebec</h3>
                <p>Montreal, Quebec City, Laval, Longueuil</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Other Provinces</h3>
                <p>Winnipeg, Saskatoon, Regina, Halifax, St. John&apos;s, Moncton, Charlottetown</p>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Why Choose Best Int&apos;l Movers for Air Cargo to Canada?
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Our Advantage</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">What It Means for You</th>
                </tr>
              </thead>
              <tbody>
                {advantages.map((row) => (
                  <tr key={row.advantage} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.advantage}</td>
                    <td className="p-4 text-muted-foreground">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14 glass-card rounded-2xl p-6 border border-gold/30">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Also Need Sea Freight to Canada?</h2>
            <p className="text-muted-foreground mb-2">
              For larger household shipments, furniture, and bulk cargo — our{" "}
              <Link to="/services/sea-freight-pakistan-to-canada/" className="text-gold hover:underline font-medium">
                sea freight from Pakistan to Canada
              </Link>{" "}
              service offers FCL and LCL container options at a fraction of air freight cost. Transit 35–50 days.
              Perfect for full household relocations alongside your air cargo urgent shipment.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Customer Testimonials</h2>
            <div className="space-y-6">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="glass-card rounded-2xl p-6 border border-gold/20">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold fill-gold" size={16} />
                    ))}
                  </div>
                  <p className="text-foreground font-semibold mb-2">&ldquo;{t.title}&rdquo;</p>
                  <p className="text-muted-foreground italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="text-sm text-foreground">
                    — {t.name}, {t.location}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="mb-14 glass-card rounded-2xl p-6 border border-gold/30">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Moving Your Household to Canada?</h2>
            <p className="text-muted-foreground">
              If you are relocating permanently, our complete{" "}
              <Link
                to="/services/relocation-services-pakistan-to-canada/"
                className="text-gold hover:underline font-medium"
              >
                relocation services Pakistan to Canada
              </Link>{" "}
              cover professional packing, sea freight container shipping, CBSA customs clearance, and door delivery —
              alongside your air cargo essentials shipment.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Air Cargo to Canada from Pakistan
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="glass-card rounded-xl border border-border px-4">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mb-8 glass-card rounded-2xl p-6 border border-border">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Related Services</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/services/air-cargo-to-canada/" className="text-gold hover:underline">
                  Air cargo to Canada from Pakistan
                </Link>{" "}
                — door-to-door express and standard air freight
              </li>
              <li>
                <Link to="/services/sea-freight-pakistan-to-canada/" className="text-gold hover:underline">
                  Sea freight from Pakistan to Canada
                </Link>{" "}
                — FCL &amp; LCL for larger household shipments
              </li>
              <li>
                <Link to="/services/relocation-services-pakistan-to-canada/" className="text-gold hover:underline">
                  Relocation services Pakistan to Canada
                </Link>{" "}
                — complete door-to-door moving
              </li>
              <li>
                <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">
                  Cargo insurance for international shipments
                </Link>{" "}
                — all-risk coverage for your air cargo
              </li>
              <li>
                <Link to="/pakistan-to-canada-movers" className="text-gold hover:underline">
                  Pakistan to Canada movers
                </Link>{" "}
                — full relocation hub
              </li>
            </ul>
          </section>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Send Your Air Cargo to Canada Today — Free Quote in 2 Hours"
        subtext="From a single parcel to a full commercial consignment — pickup from Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Sialkot. Delivering to Toronto, Mississauga, Brampton, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, Montreal and every Canadian city."
      />

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
