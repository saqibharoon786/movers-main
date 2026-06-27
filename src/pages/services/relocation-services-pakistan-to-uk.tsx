import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  Globe,
  MessageCircle,
  Star,
  MapPin,
  FileCheck,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA =
  "https://wa.me/923009130211?text=Hello!%20I%20need%20Pakistan%20to%20UK%20relocation%20services%20quote.";

const heroStats = [
  { value: "40–55 Days", label: "Full Door-to-Door Relocation" },
  { value: "From USD 2,500", label: "All-In 20ft FCL Move" },
  { value: "10+ Years", label: "Pakistan to UK Experience" },
  { value: "All UK Cities", label: "Settling-In Support" },
];

const whoWeHelp = [
  {
    icon: Users,
    title: "Families Relocating Permanently",
    desc: "Whether you are joining a spouse already settled in the UK, moving under a family visa, or migrating permanently with your children, we provide a complete family relocation service. We understand the emotional weight of leaving home and treat your belongings — and your peace of mind — with the care they deserve.",
  },
  {
    icon: Briefcase,
    title: "Professionals & Skilled Workers",
    desc: "Moving to the UK on a Skilled Worker visa, Health and Care visa, or Global Talent visa? We specialise in fast, efficient relocations for professionals who need to be settled and working quickly. Our corporate relocation packages include priority scheduling, dedicated move management, and settling-in support.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Moving to the UK for university or postgraduate studies? Our student relocation service ships your essential belongings — clothes, books, electronics, and personal items — quickly and affordably. We offer special student rates for smaller shipments (LCL sea freight or air freight) and guide you through UK customs for personal effects.",
  },
  {
    icon: Building2,
    title: "Corporate & Business Relocations",
    desc: "Relocating employees or executives from Pakistan to UK offices? Our corporate relocation service includes end-to-end move management, furniture and office equipment shipping, temporary storage, and full customs compliance. We work directly with HR departments and relocation managers for seamless corporate moves.",
  },
  {
    icon: Globe,
    title: "Returning UK Residents & British Pakistanis",
    desc: "Returning to the UK after a long stay in Pakistan? We help British nationals and settled UK residents ship their accumulated belongings back to the UK, including Pakistani furniture, carpets, clothing, and household goods, with full guidance on UK customs relief available to returning residents.",
  },
];

const relocationServices = [
  {
    num: 1,
    title: "Free Pre-Move Consultation & Home Survey",
    intro:
      "Every successful relocation starts with proper planning. Our move consultant visits your home in Pakistan — or conducts a detailed video survey — to assess your goods, calculate the exact volume, discuss your timeline, and recommend the best shipping method for your budget and schedule. This survey is completely free with no obligation.",
    bullets: [
      "Accurate volume calculation — no surprise cost increases later",
      "Personalised advice on FCL, LCL, groupage, or air freight",
      "UK customs advisory — ToR relief eligibility assessment",
      "Timeline planning aligned with your UK arrival date",
      "Prohibited items guidance — what can and cannot go",
    ],
  },
  {
    num: 2,
    title: "Professional Packing Service",
    intro:
      "Our trained packing crew arrives at your home with all required materials and packs your entire household systematically, item by item, room by room. Every item is individually wrapped, padded, and packed to international sea and air freight standards.",
    bullets: [
      "Double-walled export cartons for books, kitchenware, and general items",
      "Wardrobe boxes — clothes hang upright and arrive wrinkle-free",
      "Dish packs with cell dividers for crockery and glassware",
      "Bubble wrap, foam, and tissue paper for fragile items",
      "Mirror boxes and custom crates for artwork and antiques",
      "Shrink wrap and blanket wrap for furniture",
      "Carpet rolling and heavy-duty polythene wrapping",
      "Detailed room-by-room inventory prepared during packing",
    ],
  },
  {
    num: 3,
    title: "Secure Loading & Container Stuffing",
    intro:
      "For FCL (Full Container Load) moves, we load your packed goods directly into the container at your home — minimising handling and maximising security. The container is sealed with a security seal at your door and opened only at your UK destination.",
    bullets: [
      "FCL: Container sealed at your home, opened only at UK destination",
      "LCL/Groupage: Professional container stuffing at our secure facility",
      "Expert load planning to prevent movement and damage during sea voyage",
    ],
  },
  {
    num: 4,
    title: "Pakistan Export Customs Clearance",
    intro:
      "Exporting household goods from Pakistan requires compliance with Federal Board of Revenue (FBR) regulations and Pakistan Customs procedures. Our licensed customs agents handle all export documentation.",
    bullets: [
      "Export Declaration (GD) filing with FBR",
      "Packing list and commercial invoice preparation",
      "Coordination with Pakistan Customs at Karachi Port",
      "Bank document coordination for regulated items if required",
      "Certificate of Origin where applicable",
    ],
  },
  {
    num: 5,
    title: "International Sea Freight or Air Freight",
    intro:
      "We book your cargo on the most suitable vessel or airline route for your timeline and budget. Our household goods shipping from Pakistan to UK service covers FCL and LCL options for every move size.",
    bullets: [
      "Sea Freight FCL: Full 20ft or 40ft container, exclusively yours — best for full household moves",
      "Sea Freight LCL/Groupage: Shared container, you pay per CBM — best for partial moves",
      "Air Freight: Fast 5–8 day transit for urgent essentials or smaller shipments",
      "We work with all major carriers: Maersk, MSC, CMA CGM, Emirates, Qatar Airways Cargo",
      "Regular departure schedules from Karachi Port to Felixstowe and Southampton",
    ],
  },
  {
    num: 6,
    title: "Real-Time Shipment Tracking",
    intro:
      "From the moment your container leaves Pakistan to the moment it arrives in the UK, you have full visibility over your move.",
    bullets: [
      "Departure confirmation and vessel tracking",
      "Estimated UK arrival updates",
      "Customs clearance status notifications",
      "Delivery confirmation on completion",
      "Dedicated move coordinator available on WhatsApp throughout",
    ],
  },
  {
    num: 7,
    title: "UK Customs Clearance — HMRC & Transfer of Residence",
    intro:
      "UK customs is one of the most complex parts of any Pakistan-to-UK relocation. Our UK customs partners are licensed HMRC customs brokers who handle all import declarations, duty calculations, and customs relief applications on your behalf.",
    bullets: [
      "ToR Relief: Must have lived outside the UK for at least 12 consecutive months",
      "Goods must have been owned and used by you for at least 6 months prior to moving",
      "ToR01 form submitted to HMRC — we prepare and file this for you",
      "Savings: A household worth GBP 20,000 can save GBP 4,000+ in import duty and VAT",
      "Vehicles can also qualify under separate ToR vehicle application",
      "Application should be made before or at the time of import",
    ],
    note: "Our team assesses your ToR eligibility during the free consultation and manages the entire application — so you arrive in the UK knowing your goods will clear customs duty-free.",
  },
  {
    num: 8,
    title: "UK Port Handling & Delivery",
    intro:
      "Once your shipment clears UK customs, our UK partner network takes over for final delivery. We deliver to every postcode in England, Scotland, Wales, and Northern Ireland.",
    bullets: [
      "Delivery from Felixstowe, Southampton, or Tilbury ports",
      "Large vehicle access assessed for your UK delivery address",
      "Timed delivery slots available — morning or afternoon preference",
      "Ground floor delivery standard — stair carry available on request",
      "Delivery confirmation with proof of receipt",
    ],
  },
  {
    num: 9,
    title: "Unpacking & Placement Service (Optional)",
    intro:
      "Our premium relocation package includes unpacking at your new UK home — our crew unpacks all cartons, places furniture as directed, and removes all packing materials. You come home to a properly set-up living space rather than a sea of boxes.",
    bullets: [],
  },
  {
    num: 10,
    title: "Temporary Storage — Pakistan & UK",
    intro:
      "Need to store your goods before your UK home is ready? We offer secure storage solutions at both ends.",
    bullets: [
      "Pakistan: Secure warehouse storage in Karachi — climate controlled options available",
      "UK: Short and long-term storage near major UK cities — accessible and insured",
      "Storage-in-transit insurance available",
      "Flexible duration — days, weeks, or months",
    ],
  },
  {
    num: 11,
    title: "Pet Relocation — Pakistan to UK",
    intro:
      "Moving with your beloved pets? Our dedicated pet relocation services from Pakistan ensure your pets arrive safely and in full DEFRA compliance.",
    bullets: [
      "Dogs and cats: DEFRA-compliant health certificate preparation",
      "Rabies vaccination and titre test coordination",
      "ISO microchip verification",
      "Airline-approved IATA travel crate provision",
      "Approved route and carrier booking (pets cannot transit certain countries for UK entry)",
    ],
  },
  {
    num: 12,
    title: "Vehicle Shipping — Pakistan to UK",
    intro:
      "Shipping your car from Pakistan to the UK alongside your household goods? We arrange vehicle export from Pakistan and import into the UK.",
    bullets: [
      "RoRo (Roll-On Roll-Off) shipping for standard vehicles",
      "Container shipping for classic, luxury, or high-value vehicles",
      "UK import duty: Currently 6.5% plus 20% VAT on vehicle value",
      "DVLA registration and UK road compliance advisory",
    ],
  },
];

const fclCosts = [
  { container: "20ft Container", cost: "USD 2,500 – 4,500 all-in", suitable: "2–3 bedroom home" },
  { container: "40ft Container", cost: "USD 3,500 – 6,000 all-in", suitable: "4–5 bedroom home" },
  { container: "40ft High Cube", cost: "USD 3,800 – 6,500 all-in", suitable: "Large furniture & appliances" },
];

const lclCosts = [
  { size: "1–3 CBM", cost: "USD 400 – 700", suitable: "Student move / essential items" },
  { size: "3–8 CBM", cost: "USD 700 – 1,400", suitable: "Studio / 1-bedroom flat" },
  { size: "8–15 CBM", cost: "USD 1,400 – 2,400", suitable: "2-bedroom flat" },
  { size: "15–20 CBM", cost: "USD 2,400 – 3,200", suitable: "3-bedroom home (partial)" },
];

const airCosts = [
  { weight: "Up to 15 kg", cost: "PKR 20,000 – 35,000", time: "5–8 Days" },
  { weight: "15 – 50 kg", cost: "PKR 2,500 – 3,200 per kg", time: "5–8 Days" },
  { weight: "50 – 150 kg", cost: "PKR 1,900 – 2,600 per kg", time: "5–8 Days" },
];

const ukCitiesEngland = [
  "London — All 32 boroughs: Southall, Wembley, Ilford, Whitechapel, Tower Hamlets, East Ham, Seven Sisters, Tooting",
  "Birmingham — Small Heath, Sparkhill, Handsworth, Alum Rock, Bordesley Green",
  "Manchester — Rusholme (the 'Curry Mile'), Longsight, Levenshulme, Cheetham Hill, Wythenshawe",
  "Bradford — Manningham, Toller, Heaton, Lidget Green",
  "Leeds — Beeston, Harehills, Hyde Park, Chapeltown",
  "Sheffield — Burngreave, Sharrow, Darnall, Firth Park",
  "Leicester — Highfields, Spinney Hills, Belgrave, Evington",
  "Luton — Bury Park",
  "Slough, Watford, Reading, Oxford",
  "Coventry, Wolverhampton, Derby, Nottingham, Stoke-on-Trent",
  "Newcastle, Sunderland, Middlesbrough, Hull",
  "Bristol, Southampton, Portsmouth, Brighton",
];

const pakistanCities = [
  { city: "Karachi", sea: "Direct — Karachi Port & Port Qasim", air: "JIAP (KHI)" },
  { city: "Lahore", sea: "Via Karachi (1,200 km road)", air: "Allama Iqbal (LHE)" },
  { city: "Islamabad / Rawalpindi", sea: "Via Karachi Motorway", air: "New Islamabad (ISB)" },
  { city: "Peshawar", sea: "Via Islamabad hub", air: "Bacha Khan (PEW)" },
  { city: "Multan", sea: "Via Karachi M-4 Motorway", air: "Multan (MUX)" },
  { city: "Faisalabad", sea: "Via Lahore then Karachi", air: "Faisalabad (LYP)" },
  { city: "Sialkot", sea: "Via Lahore then Karachi", air: "Sialkot Intl (SKT)" },
  { city: "Gujranwala", sea: "Via Lahore then Karachi", air: "Via Lahore (LHE)" },
];

const visaTypes = [
  { visa: "Skilled Worker Visa", notes: "Full ToR relief eligible after 12 months abroad. Fast move recommended — start date driven." },
  { visa: "Family Visa (Spouse/Child)", notes: "ToR relief if qualifying period met. Ship goods to coincide with UK arrival." },
  { visa: "BNO Visa (Hong Kong)", notes: "Increasingly used by some Pakistani British nationals. Same ToR rules apply." },
  { visa: "Student Visa", notes: "Personal effects exempt from duty. No furniture duty exemption unless ToR qualifies." },
  { visa: "Indefinite Leave to Remain", notes: "Full ToR relief available. Best to consolidate all goods in one shipment." },
  { visa: "British Citizenship", notes: "Returning citizen rules — ToR applies if 12+ months abroad. HMRC advisory recommended." },
  { visa: "Global Talent Visa", notes: "ToR relief eligible. Fast-track move packages available for senior professionals." },
];

const timeline = [
  { time: "8–12 Weeks Before", action: "Book free home survey. Confirm shipping method. Start decluttering." },
  { time: "6–8 Weeks Before", action: "Confirm booking. Begin document preparation. Apply for ToR01 if eligible." },
  { time: "4–6 Weeks Before", action: "Packing day scheduled. Finalise UK delivery address. Confirm customs documents." },
  { time: "2–4 Weeks Before", action: "Packing and loading completed. Export customs filed. Vessel booked." },
  { time: "Departure Week", action: "Container sealed and shipped. Bill of Lading issued. UK customs pre-filing begins." },
  { time: "In Transit (3–5 Weeks)", action: "Vessel tracking updates. UK customs entry lodged. Delivery date confirmed." },
  { time: "UK Arrival Week", action: "UK customs clearance. Port release. Last-mile delivery to your new UK home." },
  { time: "After Delivery", action: "Unpacking (if booked). Insurance claim filed if any damage. Move complete." },
];

const comparison = [
  { regular: "Generic cargo handlers pack your home", us: "Specialist household packing crew trained for fragile, delicate items" },
  { regular: "No UK customs knowledge", us: "Full HMRC customs advisory + ToR relief application service" },
  { regular: "No move coordinator", us: "Dedicated personal move coordinator from survey to UK delivery" },
  { regular: "No settling-in support", us: "Optional settling-in services — unpacking, placement, debris removal" },
  { regular: "Quotes hidden charges at destination", us: "Transparent all-inclusive quotes — no surprises at UK end" },
  { regular: "No pet or vehicle service", us: "Complete pet relocation and vehicle shipping available" },
  { regular: "Basic tracking only", us: "Full milestone tracking + WhatsApp updates throughout" },
  { regular: "One-size solution", us: "FCL, LCL, groupage, air freight — right option for every move size" },
];

const testimonials = [
  {
    title: "Our Family Move Was Flawless — Lahore to Birmingham",
    quote:
      "We moved our entire family of 5 from Lahore to Birmingham in 2024. Best Int'l Movers handled everything — from packing our home to getting the ToR01 form approved by HMRC. Not a single item was damaged and we saved over GBP 4,000 in customs duty thanks to their guidance. Our move coordinator was in touch every step of the way. Truly exceptional.",
    name: "The Mirza Family",
    location: "Birmingham",
  },
  {
    title: "Fast Corporate Relocation — Karachi to London",
    quote:
      "Our company relocated two senior executives from Karachi to our London office. Best Int'l Movers provided a seamless corporate relocation service — professional packing, priority shipping, and even temporary storage while the executives' UK accommodation was finalised. The HR team was extremely impressed. Our go-to relocation partner.",
    name: "Shahid A.",
    location: "HR Director, Karachi",
  },
  {
    title: "Perfect Student Move — Islamabad to Manchester",
    quote:
      "I was moving to Manchester for my Masters degree and needed to ship about 4 CBM of clothing, books, and a few personal items. Best Int'l Movers' student LCL service was exactly what I needed. Affordable, well-organised, and my belongings arrived safely in 36 days. The team even advised me on UK customs for students — very helpful.",
    name: "Zoya K.",
    location: "Manchester",
  },
  {
    title: "Our Antiques and Carpets Arrived Perfectly",
    quote:
      "We had handcarved wooden furniture, antique pieces, and several handmade carpets to move from Peshawar to Bradford. I was extremely nervous about damage. The packing crew were true professionals — custom crating for the antiques, perfect rolling and wrapping for the carpets. Everything arrived without a scratch. I cannot recommend Best Int'l Movers highly enough.",
    name: "Rashid N.",
    location: "Bradford",
  },
];

const faqs = [
  {
    q: "How long does a full relocation from Pakistan to UK take?",
    a: "From packing day to UK delivery, a full household sea freight relocation typically takes 40 to 55 days. This includes approximately 3–5 days for packing and loading in Pakistan, 25–35 days sea transit, and 7–14 days for UK customs clearance and delivery. Air freight for essential items takes 5–8 business days.",
  },
  {
    q: "Do I qualify for UK Transfer of Residence (ToR) relief?",
    a: "You likely qualify if you have lived outside the UK for at least 12 consecutive months and are now moving your main residence to the UK. Your goods must have been owned and used for at least 6 months before the move. Our team assesses your eligibility during the free consultation — there is no need to guess.",
  },
  {
    q: "Can I move my car from Pakistan to UK?",
    a: "Yes. We arrange vehicle shipping from Pakistan to UK via RoRo or container. UK import duty is currently 6.5% plus 20% VAT on the vehicle's declared value. Vehicles that qualify under ToR may receive duty relief under a separate application. We advise on all aspects of vehicle import compliance.",
  },
  {
    q: "What is the best time of year to relocate from Pakistan to UK?",
    a: "Spring (March to May) and early autumn (September to October) are ideal — Pakistani weather is manageable for packing crews, UK arrival avoids peak summer moving season, and school calendars align well for families with children. However, we handle relocations year-round with equal quality.",
  },
  {
    q: "Can you store my goods if my UK home is not ready?",
    a: "Yes. We offer secure storage in Pakistan before shipment and UK storage near your destination city after customs clearance. Goods in storage are fully insured. We can hold your shipment and deliver on a date that suits you.",
  },
  {
    q: "Do you provide packing materials if I want to pack myself?",
    a: "We strongly recommend professional packing for international sea freight — the journey is long and rough handling at ports is unavoidable. However, for LCL shipments, some customers prefer to pack clothing and soft items themselves. We supply professional cartons, tape, and bubble wrap and advise on correct packing methods.",
  },
  {
    q: "How do I get started with my Pakistan to UK relocation?",
    a: "Simply contact us via WhatsApp, phone, or our website inquiry form. We will arrange a free home survey (in person or video) within 48 hours and provide a detailed all-inclusive quote. No obligation — just expert advice and transparent pricing.",
  },
  {
    q: "Can you handle the entire move without me being present in Pakistan?",
    a: "Yes. If you are already in the UK and need to ship goods from your family home in Pakistan, we can work with a designated family member or trusted contact as your representative in Pakistan. We manage the entire process remotely with regular video updates.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Relocation Services Pakistan to UK",
  description:
    "Complete door-to-door relocation services from Pakistan to the United Kingdom — packing, shipping, UK customs clearance, ToR relief, pet and vehicle shipping, and settling-in support.",
  serviceType: "International relocation",
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

export default function RelocationServicesPakistanToUK() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Relocation Services Pakistan to UK | Complete Moving Solutions | Best Int'l Movers"
        description="Planning to relocate from Pakistan to UK? Best Int'l Movers offers complete door-to-door relocation services including packing, shipping, customs clearance & settling-in support. Serving Karachi, Lahore, Islamabad to London, Birmingham & all UK cities. Free consultation!"
        keywords="relocation services pakistan to uk, moving company pakistan to uk, international relocation pakistan to uk, moving from pakistan to uk, pakistan to uk moving services, relocating from pakistan to uk, pakistan uk movers, home relocation pakistan to uk, corporate relocation pakistan uk"
        urlPath="/services/relocation-services-pakistan-to-uk/"
        canonicalUrl="https://bestintlmovers.com/services/relocation-services-pakistan-to-uk/"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Pakistan to UK Relocation — 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Relocation Services Pakistan to UK — Complete Door-to-Door Moving Solutions for Families
              &amp; Professionals
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Packing, shipping, UK customs, ToR relief, pet &amp; vehicle shipping — Karachi, Lahore,
              Islamabad to London, Birmingham, Manchester &amp; all UK cities
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
                Free Relocation Consultation
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
              Relocating from Pakistan to the United Kingdom is one of the biggest decisions of your life.
              Whether you are moving for a new job, higher education, family reunification, or a fresh start,
              the logistics of an international move can feel overwhelming. Best Int&apos;l Movers is
              Pakistan&apos;s most trusted full-service{" "}
              <strong>relocation company for UK-bound moves</strong> — and we are here to make your
              transition as smooth, stress-free, and affordable as possible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We go far beyond simply shipping your boxes. Our end-to-end Pakistan to UK relocation service
              covers everything — from a free pre-move consultation at your home in Pakistan, professional
              packing and loading, export and import customs clearance, sea or air freight, UK delivery, all
              the way through to optional settling-in support to help you get established in your new British
              home.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over a decade of Pakistan-UK relocation experience, a dedicated team of move coordinators,
              and an established UK partner network covering every city from London to Glasgow, we have helped
              thousands of Pakistani families and professionals successfully relocate to the United Kingdom.
              Your move is in expert hands.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Who We Help — Pakistan to UK Relocation
            </h2>
            <p className="text-muted-foreground mb-8">
              Our relocation services are tailored for every type of mover:
            </p>
            <div className="space-y-6">
              {whoWeHelp.map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <item.icon className="text-gold flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl font-display font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Our Complete Pakistan to UK Relocation Services
            </h2>
            <div className="space-y-8">
              {relocationServices.map((svc) => (
                <div key={svc.num} className="glass-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {svc.num}. {svc.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {svc.num === 5 ? (
                      <>
                        We book your cargo on the most suitable vessel or airline route for your timeline and
                        budget. Our{" "}
                        <Link
                          to="/services/household-goods-shipping-pakistan-to-uk/"
                          className="text-gold hover:underline font-medium"
                        >
                          household goods shipping from Pakistan to UK
                        </Link>{" "}
                        service covers FCL and LCL options for every move size via our dedicated{" "}
                        <Link
                          to="/services/sea-freight-pakistan-to-uk/"
                          className="text-gold hover:underline font-medium"
                        >
                          sea freight Pakistan to UK
                        </Link>{" "}
                        routes.
                      </>
                    ) : svc.num === 11 ? (
                      <>
                        Moving with your beloved pets?{" "}
                        <Link
                          to="/services/pet-relocation-services/"
                          className="text-gold hover:underline font-medium"
                        >
                          Our dedicated pet relocation services from Pakistan
                        </Link>{" "}
                        ensure your pets arrive safely and in full DEFRA compliance.
                      </>
                    ) : (
                      svc.intro
                    )}
                  </p>
                  {svc.bullets.length > 0 && (
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                      {svc.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {svc.note && <p className="text-sm text-muted-foreground italic">{svc.note}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Relocation Costs — Pakistan to UK
            </h2>
            <p className="text-muted-foreground mb-6">
              Relocation costs vary depending on move size, shipping method, origin city, UK delivery
              postcode, and additional services. Here are indicative cost ranges to help you plan:
            </p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Sea Freight — FCL (Full Container)
            </h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Container</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approximate Total Cost (USD)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Suitable For</th>
                </tr>
              </thead>
              <tbody>
                {fclCosts.map((row) => (
                  <tr key={row.container} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.container}</td>
                    <td className="p-4 text-foreground font-medium">{row.cost}</td>
                    <td className="p-4 text-muted-foreground">{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm text-muted-foreground mb-8 italic">
              All-in cost includes: packing materials, packing labour, loading, inland transport to port,
              Pakistan export customs, sea freight, UK port handling, UK customs clearance, and UK delivery.
              Subject to survey confirmation.
            </p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">
              Sea Freight — LCL / Groupage
            </h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Move Size</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approximate Cost (USD)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Suitable For</th>
                </tr>
              </thead>
              <tbody>
                {lclCosts.map((row) => (
                  <tr key={row.size} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.size}</td>
                    <td className="p-4 text-foreground font-medium">{row.cost}</td>
                    <td className="p-4 text-muted-foreground">{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">
              Air Freight — Essential Items
            </h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Weight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approximate Cost (PKR)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Transit Time</th>
                </tr>
              </thead>
              <tbody>
                {airCosts.map((row) => (
                  <tr key={row.weight} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.weight}</td>
                    <td className="p-4 text-foreground font-medium">{row.cost}</td>
                    <td className="p-4 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm text-muted-foreground italic">
              Note: All costs are indicative. Final pricing depends on confirmed volume, packing requirements,
              origin city, UK delivery postcode, and current freight market rates. Contact us for a free
              detailed quote after your home survey.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="text-gold" size={26} />
              UK Cities We Relocate To
            </h2>
            <p className="text-muted-foreground mb-6">
              We deliver to every city, town, and village across the United Kingdom:
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">England — Major Pakistani Community Areas</h3>
            <ul className="space-y-2 mb-8">
              {ukCitiesEngland.map((city) => (
                <li key={city} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  {city}
                </li>
              ))}
            </ul>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Scotland</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Glasgow — Pollokshields, Govanhill</li>
                  <li>• Edinburgh — Southside, Leith</li>
                  <li>• Dundee, Aberdeen, Inverness, Motherwell</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Wales</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Cardiff — Grangetown, Butetown</li>
                  <li>• Swansea, Newport, Wrexham</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Northern Ireland</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Belfast — lower Falls, Carlisle Circus area</li>
                  <li>• Derry/Londonderry, Newry</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Pakistan Cities We Relocate From
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">City</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Sea Port Access</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Airport (Air Freight)</th>
                </tr>
              </thead>
              <tbody>
                {pakistanCities.map((row) => (
                  <tr key={row.city} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-foreground font-medium">{row.city}</td>
                    <td className="p-4 text-muted-foreground">{row.sea}</td>
                    <td className="p-4 text-muted-foreground">{row.air}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-gold" size={26} />
              UK Visa Types &amp; What They Mean for Your Relocation
            </h2>
            <p className="text-muted-foreground mb-6">
              Your UK visa type determines your eligibility for certain customs reliefs and affects your move
              planning. Here is a quick guide:
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Visa Type</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Relocation Notes</th>
                </tr>
              </thead>
              <tbody>
                {visaTypes.map((row) => (
                  <tr key={row.visa} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.visa}</td>
                    <td className="p-4 text-muted-foreground">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Clock className="text-gold" size={26} />
              Timeline — Pakistan to UK Relocation Planning Guide
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Timeframe Before Move</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Action Required</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row) => (
                  <tr key={row.time} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-foreground font-medium whitespace-nowrap">{row.time}</td>
                    <td className="p-4 text-muted-foreground">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Our Relocation Service Is Different from Regular Cargo Companies
            </h2>
            <p className="text-muted-foreground mb-6">
              Most cargo companies in Pakistan treat household relocation like commercial freight — boxes in,
              boxes out. We treat it completely differently. Here is what sets Best Int&apos;l Movers apart:
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Regular Cargo Company</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Best Int&apos;l Movers Relocation Service</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.regular} className="border-b border-border/50">
                    <td className="p-4 text-muted-foreground">{row.regular}</td>
                    <td className="p-4 text-foreground">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
              Customer Testimonials — Pakistan to UK Relocations
            </h2>
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

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Relocation Services Pakistan to UK
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
                <Link to="/services/household-goods-shipping-pakistan-to-uk/" className="text-gold hover:underline">
                  Household goods shipping Pakistan to UK
                </Link>{" "}
                — FCL, LCL &amp; groupage for every move size
              </li>
              <li>
                <Link to="/services/sea-freight-pakistan-to-uk/" className="text-gold hover:underline">
                  Sea freight Pakistan to UK
                </Link>{" "}
                — cost-effective ocean freight for full household moves
              </li>
              <li>
                <Link to="/services/pet-relocation-services/" className="text-gold hover:underline">
                  Pet relocation services from Pakistan
                </Link>{" "}
                — DEFRA-compliant pet shipping to the UK
              </li>
              <li>
                <Link to="/services/vehicle-shipping-services/" className="text-gold hover:underline">
                  Vehicle shipping Pakistan to UK
                </Link>{" "}
                — RoRo and container car shipping
              </li>
              <li>
                <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">
                  Pakistan to UK movers
                </Link>{" "}
                — complete door-to-door relocation hub
              </li>
            </ul>
          </section>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Start Your Pakistan to UK Relocation — Free Consultation Today"
        subtext="From your first phone call to the last box placed in your new UK home — dedicated move coordinator, transparent pricing, and ToR relief guidance included. Serving Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Sialkot, Gujranwala to London, Birmingham, Manchester, Bradford, Leeds, Glasgow, Cardiff, Belfast and every UK city."
      />

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
