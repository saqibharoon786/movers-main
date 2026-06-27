import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  Home,
  Package,
  MessageCircle,
  Star,
  MapPin,
  FileCheck,
  ShieldCheck,
  Globe,
  Container,
  Plane,
  Ship,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA =
  "https://wa.me/923009130211?text=Hello!%20I%20need%20a%20household%20goods%20shipping%20Pakistan%20to%20UK%20quote.";

const heroStats = [
  { value: "35–45 Days", label: "Door-to-Door Sea Freight" },
  { value: "From USD 1,400", label: "20ft FCL Container" },
  { value: "10+ Years", label: "Pakistan to UK Route" },
  { value: "All UK Cities", label: "Household Delivery" },
];

const whyTrust = [
  "Dedicated household relocation team — not generic cargo handlers",
  "Professional packing using export-grade double-walled cartons and bubble wrap",
  "Specialised handling for fragile items — crockery, glass, mirrors, electronics",
  "Full door-to-door service with no surprise charges at the UK end",
  "UK customs duty relief assistance for new migrants and returning residents",
  "Dedicated move coordinator assigned to your shipment from start to finish",
  "Real-time tracking at every stage — Pakistan to UK",
  "Fully insured shipments with marine cargo insurance",
  "10+ years of Pakistan-UK shipping expertise",
  "Thousands of successful household relocations delivered",
];

const shippingOptions = [
  {
    icon: Container,
    title: "Option 1: Full Container Load (FCL) — Sea Freight",
    intro:
      "FCL is the best choice when you are shipping a full household — living room, bedrooms, kitchen, and personal effects. You get an entire 20-foot or 40-foot container exclusively for your belongings.",
    bullets: [
      "20-foot container (20GP): Ideal for a 2–3 bedroom home (approx. 25–28 CBM)",
      "40-foot container (40GP): Perfect for a 4–5 bedroom home (approx. 55–58 CBM)",
      "40-foot high cube (40HC): Best for tall furniture, wardrobes, and large appliances",
      "Transit time: 25–35 days port to port (Karachi to Felixstowe/Southampton)",
      "Door-to-door: Approximately 35–45 days including packing, customs both ends, and UK delivery",
    ],
    note: "FCL gives you a dedicated container sealed at your home in Pakistan and opened only at your UK destination — the gold standard for household relocation security.",
  },
  {
    icon: Ship,
    title: "Option 2: Less than Container Load (LCL) — Sea Freight",
    intro:
      "Not moving a full household? LCL is ideal for part-moves — a few rooms of furniture, excess baggage, or sending belongings ahead before your main move. You pay only for the cubic meters (CBM) your goods occupy in a shared container.",
    bullets: [
      "Ideal for 1–15 CBM of household goods",
      "Cost-effective for smaller moves — 1 bedroom flat, studio, or partial household",
      "Consolidated with other cargo in a shared container",
      "Transit time: 35–45 days door to door",
      "Best for: Sending clothes, books, kitchenware, and soft furnishings",
    ],
    note: "LCL is our most popular option for students, young professionals, and families sending partial loads ahead of their main move.",
  },
  {
    icon: Plane,
    title: "Option 3: Air Freight — Household Goods",
    intro:
      "Need your essential household items to arrive in the UK within a week? Our air freight service ships selected household goods from Pakistan to UK in 5 to 8 business days.",
    bullets: [
      "Best for: Essential clothing, important documents, medicines, electronics",
      "Not recommended for: Heavy furniture, appliances, or large volumes",
      "Transit time: 5–8 business days door to door",
      "Ideal when: You are already in the UK and need belongings shipped urgently",
      "Can be combined: Ship essentials by air now, main household goods by sea",
    ],
    note: "Air freight is significantly more expensive per kg than sea freight but invaluable when you need items urgently.",
  },
  {
    icon: Package,
    title: "Option 4: Groupage Service",
    intro:
      "Our groupage service consolidates your household goods with other Pakistan-to-UK shipments in a dedicated household goods container — not mixed commercial cargo.",
    bullets: [
      "Better care than standard LCL commercial consolidation",
      "Faster handling at UK destination — household-only containers clear customs more smoothly",
      "Ideal for 3–18 CBM of household goods",
      "More economical than FCL for mid-sized moves",
    ],
    note: "Your belongings travel with other families' household items, providing an extra layer of care and handling appropriate for personal effects.",
  },
];

const itemCategories = [
  {
    title: "Furniture",
    items: [
      "Sofas, sectionals, and lounge suites",
      "Bedroom sets — beds, wardrobes, dressing tables, side tables",
      "Dining tables and chairs",
      "Bookshelves, cabinets, and storage units",
      "Office desks and chairs",
      "Outdoor and garden furniture",
      "Antique and carved wooden furniture — specialist packing available",
    ],
  },
  {
    title: "Kitchen & Appliances",
    items: [
      "Refrigerators, washing machines, and dishwashers",
      "Microwave ovens, air fryers, and small kitchen appliances",
      "Crockery, cutlery, and glassware — individually wrapped",
      "Cooking pots, pans, and utensils",
      "Voltage converters may be needed — UK uses 230V, same as Pakistan",
    ],
  },
  {
    title: "Personal Effects & Clothing",
    items: [
      "All clothing including traditional Pakistani suits, shawls, and wedding outfits",
      "Shoes, bags, and accessories",
      "Jewellery — declared separately for customs and insurance",
      "Prayer mats, Qurans, and religious items",
      "Toys, games, and children's belongings",
    ],
  },
  {
    title: "Electronics & Technology",
    items: [
      "Televisions and home theatre systems",
      "Laptops, computers, and tablets",
      "Cameras, gaming consoles, and accessories",
      "Mobile phones — declared value required for customs",
    ],
  },
  {
    title: "Books, Documents & Sentimental Items",
    items: [
      "Books, magazines, and educational materials",
      "Family photo albums and framed photographs",
      "Artwork, paintings, and decorative pieces",
      "Family heirlooms and sentimental items — extra care packing",
    ],
  },
  {
    title: "Pakistani Specialty Items",
    items: [
      "Handwoven carpets and rugs — rolled and wrapped professionally",
      "Embroidered textiles and suits",
      "Traditional handicrafts and decorative items",
      "Dry food items — spices, rice, dal, dried fruits (properly sealed and declared)",
      "Attar and non-alcohol-based perfumes",
    ],
  },
];

const prohibitedItems = [
  "Firearms, weapons, and ammunition — strictly prohibited",
  "Narcotics and controlled substances",
  "Fresh fruits, vegetables, and perishable food items",
  "Alcohol and alcoholic beverages",
  "Counterfeit goods and pirated media",
  "Endangered species products — ivory, certain animal skins",
  "Soil and soil-contaminated items",
  "Flammable liquids, gases, and aerosols",
  "Currency above GBP 10,000 — must be declared separately",
];

const fclRates = [
  { size: "20-foot (20GP)", cost: "USD 1,400 – 2,200", best: "2–3 bedroom home" },
  { size: "40-foot (40GP)", cost: "USD 1,900 – 2,800", best: "4–5 bedroom home" },
  { size: "40-foot High Cube", cost: "USD 2,000 – 3,000", best: "Large furniture, tall items" },
];

const lclRates = [
  { volume: "1 – 5 CBM", cost: "USD 130 – 200 per CBM", best: "Studio / 1 bedroom" },
  { volume: "5 – 15 CBM", cost: "USD 100 – 160 per CBM", best: "2 bedroom flat" },
  { volume: "15 – 25 CBM", cost: "USD 85 – 130 per CBM", best: "3 bedroom home" },
];

const airRates = [
  { weight: "Up to 10 kg", cost: "PKR 18,000 – 28,000", time: "5–7 Days" },
  { weight: "10 – 30 kg", cost: "PKR 2,500 – 3,500 per kg", time: "5–7 Days" },
  { weight: "30 – 100 kg", cost: "PKR 1,800 – 2,600 per kg", time: "5–7 Days" },
];

const torReliefPoints = [
  "You must have lived outside the UK for at least 12 consecutive months",
  "Goods must have been owned and used by you for at least 6 months before the move",
  "You must intend to use the goods in the UK for the same purpose",
  "Application submitted to HMRC using the ToR01 form before or on arrival",
  "Motor vehicles can also qualify but require separate application",
];

const noTorPoints = [
  "Standard UK import duty applies — typically 0–12% depending on goods category",
  "20% VAT applies on the combined value of goods plus duty",
  "Antiques (over 100 years old) may qualify for reduced 5% VAT",
  "Gifts valued under GBP 39: Generally exempt from VAT",
  "Gifts between GBP 39 and GBP 135: VAT applies, no customs duty",
];

const customsDocs = [
  "Completed inventory list — all items described in detail with values",
  "Passport copy of shipper and receiver",
  "UK visa or settlement document (BRP or BNO visa etc.)",
  "Proof of previous overseas residence (utility bills, tenancy agreements)",
  "ToR01 form if claiming Transfer of Residence relief",
  "Bill of Lading or Airway Bill",
  "Packing list prepared by Best Int'l Movers",
];

const processSteps = [
  "Free Home Survey & Quote — Our team visits your home (or conducts a video survey) to assess your goods, estimate volume, and provide a detailed all-inclusive quote.",
  "Move Planning & Booking — We agree on your preferred shipping method (FCL, LCL, air), pickup date, and confirm all details in a formal booking.",
  "Pre-Move Customs Advisory — We advise on ToR relief eligibility, prohibited items, and documentation requirements so you are fully prepared.",
  "Professional Packing Day — Our trained packing crew arrives with all materials — double-walled cartons, bubble wrap, foam, tissue paper, wardrobe boxes, and dish packs.",
  "Inventory Preparation — Every item is recorded on a detailed inventory list that you sign off before loading.",
  "Loading & Container Stuffing — For FCL, we load directly at your home. For LCL/groupage, we transport to our packing station for professional container stuffing.",
  "Pakistan Export Customs Clearance — We file all export declarations with Pakistan Customs (FBR) and obtain relevant certificates.",
  "Ocean/Air Transit — Your shipment travels to the UK. You receive tracking updates at key milestones.",
  "UK Pre-Arrival Documentation — We file UK customs entry in advance — ToR relief application, import declarations, and HMRC notifications.",
  "UK Port Customs Clearance — Our UK customs partners clear your shipment through HMRC and coordinate with the port/airport.",
  "UK Delivery — Our UK delivery partners transport your goods from the port to your UK address.",
  "Unpacking Service (Optional) — We can arrange unpacking, item placement, and debris removal at your new UK home.",
];

const pakistanCities = [
  { city: "Karachi", port: "Karachi Port / KHI Airport", notes: "Direct port access — fastest loading" },
  { city: "Lahore", port: "Via Karachi Port / LHE Airport", notes: "Road transport to port via M-4/M-2" },
  { city: "Islamabad / Rawalpindi", port: "Via Karachi Port / ISB Airport", notes: "Road transport via Motorway" },
  { city: "Peshawar", port: "Via Islamabad or Karachi", notes: "Collection service available" },
  { city: "Multan", port: "Via Karachi Port", notes: "Road transport via M-4 Motorway" },
  { city: "Faisalabad", port: "Via Lahore / Karachi Port", notes: "Industrial city — furniture exports" },
  { city: "Sialkot", port: "Via Lahore / Karachi Port", notes: "Close to Lahore hub" },
  { city: "Gujranwala", port: "Via Lahore / Karachi Port", notes: "Collection and transport available" },
];

const ukRegions = [
  {
    region: "England",
    cities: [
      "London — All 32 boroughs including East London, Southall, Wembley, Ilford, Tower Hamlets",
      "Birmingham — Small Heath, Sparkhill, Handsworth",
      "Manchester — Rusholme, Longsight, Levenshulme, Wythenshawe",
      "Bradford — Manningham, Toller, Heaton",
      "Leeds — Beeston, Harehills, Hyde Park",
      "Sheffield, Leicester, Luton, Slough, Watford, Reading",
      "Derby, Nottingham, Coventry, Wolverhampton",
      "Newcastle, Sunderland, Middlesbrough",
      "Bristol, Oxford, Cambridge, Southampton",
    ],
  },
  {
    region: "Scotland",
    cities: ["Glasgow — Pollokshields, Govanhill", "Edinburgh — Southside area", "Dundee, Aberdeen, Inverness"],
  },
  {
    region: "Wales",
    cities: ["Cardiff, Swansea, Newport"],
  },
  {
    region: "Northern Ireland",
    cities: ["Belfast, Derry/Londonderry"],
  },
];

const packingMethods = [
  { item: "Crockery & glassware", method: "Individual tissue wrap + dish packs with cell dividers" },
  { item: "Furniture", method: "Blanket wrap + corner protection + shrink wrap" },
  { item: "Mirrors & paintings", method: "Mirror boxes with foam edges + fragile labeling" },
  { item: "Clothing & soft items", method: "Wardrobe boxes — clothes hang upright, arrive wrinkle-free" },
  { item: "Electronics & TVs", method: "Original boxes preferred + foam inserts + anti-static wrap" },
  { item: "Carpets & rugs", method: "Rolled tight + wrapped in heavy-duty polythene" },
  { item: "Books & documents", method: "Small, strong cartons — packed tight to prevent movement" },
  { item: "Antiques & valuables", method: "Custom crating + extra foam + high-value declaration" },
];

const insuranceOptions = [
  "All-Risk Marine Insurance: Covers loss, theft, and damage from any cause during transit",
  "Total Loss Insurance: Covers only if the entire container is lost",
  "Premium: Typically 1.5% to 3% of the declared value of goods",
  "Claims process: We assist with documentation and claims if required",
];

const seaVsAir = [
  { factor: "Cost", sea: "85–95% cheaper for volumes above 100 kg", air: "Premium pricing per kg" },
  { factor: "Speed", sea: "35–45 days", air: "5–8 days" },
  { factor: "Best Volume", sea: "All sizes", air: "Under 100 kg only" },
  { factor: "Furniture", sea: "Yes", air: "Not practical" },
  { factor: "FCL Option", sea: "Yes (exclusive container)", air: "Not available" },
  { factor: "UK Customs Relief", sea: "ToR relief available", air: "ToR relief available" },
  { factor: "Recommended For", sea: "Full household", air: "Urgent essentials only" },
];

const advantages = [
  { advantage: "Dedicated Household Relocation Team", meaning: "Specialists who handle only home moves — not generic cargo" },
  { advantage: "Free Home Survey", meaning: "Accurate volume assessment — no surprise costs" },
  { advantage: "Professional Packing Crew", meaning: "Trained packers with specialist materials for every item type" },
  { advantage: "UK ToR Relief Expertise", meaning: "We save you thousands in UK import duty — legally" },
  { advantage: "Door-to-Door Complete Service", meaning: "One company, one contact, zero handover gaps" },
  { advantage: "Real-Time Shipment Tracking", meaning: "Know exactly where your home is at every stage" },
  { advantage: "All-Risk Marine Insurance", meaning: "Full protection for the full journey" },
  { advantage: "UK Customs Partner Network", meaning: "Licensed UK customs brokers handle HMRC clearance" },
  { advantage: "Transparent All-In Pricing", meaning: "Quote includes everything — no destination surprises" },
  { advantage: "10+ Years Pakistan-UK Experience", meaning: "Thousands of successful UK household relocations" },
  { advantage: "Fragile Item Specialists", meaning: "Crockery, antiques, carpets — handled with expert care" },
  { advantage: "24/7 Customer Support", meaning: "WhatsApp and phone support throughout your move" },
];

const testimonials = [
  {
    title: "Our Entire Home Arrived Safely in Birmingham",
    quote:
      "We shipped a full 20-foot container of household goods from Lahore to Birmingham when we moved permanently in 2024. Best Int'l Movers packed everything beautifully — even our antique furniture and my mother's crockery collection arrived in perfect condition. Their ToR relief assistance saved us over GBP 3,000 in UK customs duty. Exceptional service.",
    name: "Saima & Imran K.",
    location: "Birmingham",
  },
  {
    title: "Perfect LCL Service — Islamabad to London",
    quote:
      "I was moving to London for work and needed to send about 6 CBM of personal belongings and some furniture. The LCL service was exactly right. Everything was packed by their team, tracked throughout, and delivered to my flat in East London in 38 days. Not a single item was damaged. Very professional.",
    name: "Dr. Fahad A.",
    location: "London",
  },
  {
    title: "They Made Our Family Move Stress-Free",
    quote:
      "Moving four kids and an entire house from Karachi to Manchester was terrifying to even think about. Best Int'l Movers assigned us a personal move coordinator who guided us through every single step. The team was punctual, careful, and thorough. Our home arrived in Manchester and it felt like home from day one. Highly recommended.",
    name: "The Siddiqui Family",
    location: "Manchester",
  },
  {
    title: "Carpets and Furniture Arrived Perfectly",
    quote:
      "I had handmade carpets, carved wooden furniture, and traditional Pakistani decorative items to ship from Peshawar to Bradford. I was very worried about damage. Best Int'l Movers packed everything with exceptional care — the carpets were rolled and wrapped, the furniture blanket-wrapped. Everything arrived in the same condition it left. I would not trust anyone else.",
    name: "Nusrat B.",
    location: "Bradford",
  },
];

const faqs = [
  {
    q: "How long does it take to ship household goods from Pakistan to UK?",
    a: "Door-to-door sea freight takes approximately 35 to 45 days including packing, export customs, sea transit (25–35 days), UK customs clearance, and delivery. Air freight for essential items takes 5 to 8 business days.",
  },
  {
    q: "How much does it cost to ship household goods from Pakistan to UK?",
    a: "A 20-foot FCL container costs approximately USD 1,400 to 2,200 for sea freight. LCL costs USD 85 to 200 per CBM. We recommend a free home survey for an accurate quote as costs depend on your specific volume, packing needs, origin city, and UK delivery address.",
  },
  {
    q: "Can I import household goods to UK duty-free?",
    a: "Yes — if you qualify for Transfer of Residence (ToR) relief. You must have lived outside the UK for at least 12 months and be moving your main home to the UK. Your goods must have been owned and used for at least 6 months. Our customs team handles the ToR01 application for you.",
  },
  {
    q: "Do you pack everything or do I pack myself?",
    a: "We strongly recommend using our professional packing service for international shipments — especially sea freight. Improper packing is the leading cause of damage claims. Our team brings all materials and packs to airline and sea freight standards. Self-pack options are available for LCL shipments but not recommended for fragile items.",
  },
  {
    q: "Can I ship a car along with my household goods?",
    a: "Yes. Vehicles can be shipped in a separate container alongside your household goods shipment. We handle vehicle export documentation from Pakistan and UK import duty advisory. Contact us for combined household goods and vehicle shipping quotes.",
  },
  {
    q: "What happens if my goods are delayed at UK customs?",
    a: "With proper documentation — which our team prepares thoroughly — delays are rare. If customs selects your shipment for inspection, our UK customs partners manage the process and keep you informed. We have a strong track record of smooth UK customs clearance.",
  },
  {
    q: "Can I send Pakistani food items in my household shipment?",
    a: "Dry, commercially packaged food items — spices, rice, dal, dried fruits — can generally be included. Fresh produce, meat, and dairy are prohibited. All food items must be declared on the customs inventory. We advise on specific items before packing.",
  },
  {
    q: "Do I need to be present for packing and loading?",
    a: "We recommend you or a trusted family member be present during packing and loading to verify the inventory and ensure nothing is missed. However, if this is not possible, we can work with a designated representative.",
  },
  {
    q: "How do I get a quote for my household move?",
    a: "Contact us via WhatsApp, phone, or our online form. We will arrange a free home survey (in person or video call) to assess your goods, calculate volume, and provide a detailed all-inclusive quote within 24 hours.",
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
  name: "Household Goods Shipping Pakistan to UK",
  description:
    "Door-to-door household goods shipping from Pakistan to the United Kingdom — FCL, LCL, air freight, professional packing, UK customs clearance and ToR relief assistance.",
  serviceType: "International household relocation",
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

export default function HouseholdGoodsShippingPakistanToUK() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Household Goods Shipping Pakistan to UK | Door-to-Door Relocation | Best Int'l Movers"
        description="Ship household goods from Pakistan to UK safely and affordably. Best Int'l Movers offers door-to-door relocation services from Karachi, Lahore & Islamabad to London, Birmingham & all UK cities. FCL, LCL & air options. Free quote!"
        keywords="household goods shipping pakistan to uk, shipping household goods from pakistan to uk, moving household items pakistan to uk, relocation services pakistan to uk, personal effects shipping pakistan uk, furniture shipping pakistan to uk, home shifting pakistan to uk, moving company pakistan to uk"
        urlPath="/services/household-goods-shipping-pakistan-to-uk/"
        canonicalUrl="https://bestintlmovers.com/services/household-goods-shipping-pakistan-to-uk/"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Home className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Household Goods Shipping Pakistan to UK — 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Household Goods Shipping from Pakistan to UK — Safe, Affordable &amp; Door-to-Door Relocation Service
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              FCL, LCL, air freight &amp; groupage — Karachi, Lahore, Islamabad to London, Birmingham, Manchester
              &amp; all UK cities
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
                Get Free Household Shipping Quote
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
              Planning to move your <strong>household goods from Pakistan to the UK</strong>? Whether you are
              relocating permanently, sending furniture to family, or shipping your personal belongings for a new
              chapter of life in Britain, Best Int&apos;l Movers is Pakistan&apos;s most trusted household goods
              shipping company for UK-bound relocations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide complete door-to-door household relocation services from all major Pakistani cities —
              Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, and Faisalabad — to every corner of the
              United Kingdom including London, Birmingham, Manchester, Bradford, Leeds, Glasgow, Cardiff, and Belfast.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the moment we arrive at your home in Pakistan to the moment your belongings are placed in your
              new UK residence, we manage every single step — professional packing, secure loading, export customs,
              sea or air freight, UK customs clearance, and final delivery. You focus on your new life in the UK.
              We handle everything else.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Why Thousands of Pakistani Families Trust Us for UK Relocation
            </h2>
            <p className="text-muted-foreground mb-6">
              Moving internationally is one of the most stressful life events. Your household goods — furniture,
              appliances, clothing, crockery, sentimental items — represent years of your life. Choosing the wrong
              shipping company can mean damaged belongings, unexpected costs, or cargo stuck in UK customs for weeks.
              Best Int&apos;l Movers has spent over a decade perfecting the Pakistan-to-UK household shipping route.
            </p>
            <ul className="space-y-3">
              {whyTrust.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Household Goods Shipping Options — Pakistan to UK
            </h2>
            <p className="text-muted-foreground mb-8">
              Our{" "}
              <Link to="/services/sea-freight-pakistan-to-uk/" className="text-gold hover:underline font-medium">
                sea freight from Pakistan to UK
              </Link>{" "}
              service offers both FCL and LCL options for all household sizes, plus air freight and groupage for
              partial moves and urgent essentials.
            </p>
            <div className="space-y-8">
              {shippingOptions.map((opt) => (
                <div key={opt.title} className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <opt.icon className="text-gold flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl font-display font-semibold text-foreground">{opt.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{opt.intro}</p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
                    {opt.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground italic">{opt.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              What Household Items Can We Ship from Pakistan to UK?
            </h2>
            <p className="text-muted-foreground mb-8">
              We handle virtually all household goods categories. Here is a comprehensive overview:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {itemCategories.map((cat) => (
                <div key={cat.title} className="glass-card rounded-2xl p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6 border border-red-500/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Items We Cannot Ship to UK</h3>
              <ul className="space-y-2">
                {prohibitedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                Our team provides a full pre-move checklist to ensure nothing prohibited is packed, avoiding costly
                delays at UK customs.
              </p>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Household Goods Shipping Costs — Pakistan to UK
            </h2>
            <p className="text-muted-foreground mb-6">
              Shipping costs depend on your move size (volume and weight), shipping method (sea FCL, LCL, or air),
              origin city in Pakistan, and UK delivery address. Below are approximate cost ranges to help you plan:
            </p>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Sea Freight — FCL Rates</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Container Size</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approximate Cost (USD)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Best For</th>
                </tr>
              </thead>
              <tbody>
                {fclRates.map((row) => (
                  <tr key={row.size} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.size}</td>
                    <td className="p-4 text-foreground font-medium">{row.cost}</td>
                    <td className="p-4 text-muted-foreground">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Sea Freight — LCL Rates</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Volume</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approximate Cost (USD per CBM)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Best For</th>
                </tr>
              </thead>
              <tbody>
                {lclRates.map((row) => (
                  <tr key={row.volume} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.volume}</td>
                    <td className="p-4 text-foreground font-medium">{row.cost}</td>
                    <td className="p-4 text-muted-foreground">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">Air Freight — Household Essentials</h3>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Weight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Approximate Cost (PKR)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Transit Time</th>
                </tr>
              </thead>
              <tbody>
                {airRates.map((row) => (
                  <tr key={row.weight} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.weight}</td>
                    <td className="p-4 text-foreground font-medium">{row.cost}</td>
                    <td className="p-4 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm text-muted-foreground italic">
              Note: All rates are indicative and subject to current market conditions, fuel surcharges, packing costs,
              and UK delivery address. Contact us for a precise all-inclusive quote for your specific move.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <FileCheck className="text-gold" size={26} />
              UK Customs — Importing Household Goods
            </h2>
            <p className="text-muted-foreground mb-6">
              Understanding UK customs rules for household goods is critical to avoiding delays and unexpected charges.
            </p>

            <div className="glass-card rounded-2xl p-6 border border-border mb-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Transfer of Residence (ToR) Relief — Duty Free
              </h3>
              <p className="text-muted-foreground mb-4">
                This is the most important relief for anyone moving to the UK permanently. Under UK Transfer of
                Residence (ToR) relief, you can import your personal household goods and personal effects duty-free
                and VAT-free when you are moving your normal place of residence to the UK.
              </p>
              <ul className="space-y-2 mb-4">
                {torReliefPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Our customs team assists with the complete ToR relief application — this alone can save you thousands
                of pounds in import duty and VAT.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-border mb-6">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                If You Do NOT Qualify for ToR Relief
              </h3>
              <ul className="space-y-2">
                {noTorPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4">
                Our customs advisors calculate your potential duty liability before shipping so you can make an
                informed decision about what to ship and what to leave behind.
              </p>
            </div>

            <h3 className="text-xl font-display font-semibold text-foreground mb-4">UK Customs Documentation Required</h3>
            <ul className="space-y-2">
              {customsDocs.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={18} />
                  {doc}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4">
              We prepare all documentation and guide you through the process step by step so nothing is missed.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Our Step-by-Step Household Shipping Process
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
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Pakistan Cities We Serve — Household Pickup</h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">City</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Nearest Port/Airport</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pakistanCities.map((row) => (
                  <tr key={row.city} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-foreground font-medium">{row.city}</td>
                    <td className="p-4 text-muted-foreground">{row.port}</td>
                    <td className="p-4 text-muted-foreground">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="text-gold" size={26} />
              UK Cities We Deliver To
            </h2>
            <p className="text-muted-foreground mb-6">
              We deliver household goods to every city, town, and village in the United Kingdom:
            </p>
            <div className="space-y-6">
              {ukRegions.map((region) => (
                <div key={region.region}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{region.region}</h3>
                  <ul className="space-y-2">
                    {region.cities.map((city) => (
                      <li key={city} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <MapPin className="text-gold mt-0.5 flex-shrink-0" size={16} />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Our Packing Makes All the Difference
            </h2>
            <p className="text-muted-foreground mb-6">
              The biggest risk in international household shipping is damage during transit. Unlike local moves, your
              goods spend 3–5 weeks at sea in a container subjected to vibration, temperature changes, and stacking
              pressure. Our{" "}
              <Link to="/services/professional-packing-services/" className="text-gold hover:underline font-medium">
                professional packing services in Pakistan
              </Link>{" "}
              are specifically designed for international sea and air freight.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Item Type</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Our Packing Method</th>
                </tr>
              </thead>
              <tbody>
                {packingMethods.map((row) => (
                  <tr key={row.item} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.item}</td>
                    <td className="p-4 text-muted-foreground">{row.method}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14 glass-card rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="text-gold" size={24} />
              Marine Cargo Insurance — Protect Your Household Goods
            </h2>
            <p className="text-muted-foreground mb-4">
              We strongly recommend marine{" "}
              <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline font-medium">
                cargo insurance for household shipments
              </Link>{" "}
              for all household goods shipments. Despite our meticulous packing and care, international sea freight
              carries inherent risks — port handling, vessel movement, and rare incidents.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              {insuranceOptions.map((opt) => (
                <li key={opt} className="flex items-start gap-2">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={18} />
                  {opt}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              For a household worth PKR 10 million, comprehensive all-risk insurance costs approximately PKR 150,000
              to 300,000 — a small price for total peace of mind.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Sea Freight vs Air Freight — Household Goods Pakistan to UK
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Factor</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Sea Freight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Air Freight</th>
                </tr>
              </thead>
              <tbody>
                {seaVsAir.map((row) => (
                  <tr key={row.factor} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.factor}</td>
                    <td className="p-4 text-muted-foreground">{row.sea}</td>
                    <td className="p-4 text-muted-foreground">{row.air}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Why Choose Best Int&apos;l Movers for Household Shipping to UK?
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

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Household Goods Shipping Pakistan to UK
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
                <Link to="/services/sea-freight-pakistan-to-uk/" className="text-gold hover:underline">
                  Sea freight from Pakistan to UK
                </Link>{" "}
                — FCL, LCL &amp; groupage for household relocations
              </li>
              <li>
                <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">
                  Cargo insurance for household shipments
                </Link>{" "}
                — all-risk marine coverage for your belongings
              </li>
              <li>
                <Link to="/services/professional-packing-services/" className="text-gold hover:underline">
                  Professional packing services in Pakistan
                </Link>{" "}
                — export-grade packing for international moves
              </li>
              <li>
                <Link to="/services/air-cargo-pakistan-to-uk/" className="text-gold hover:underline">
                  Air cargo Pakistan to UK
                </Link>{" "}
                — urgent essentials in 5–8 business days
              </li>
              <li>
                <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">
                  Pakistan to UK movers
                </Link>{" "}
                — complete door-to-door relocation
              </li>
            </ul>
          </section>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Get Your Free Household Shipping Quote — Pakistan to UK"
        subtext="Ready to move your household goods from Pakistan to the UK? Our dedicated household relocation team is available 24/7. Serving Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, Sialkot, Gujranwala — delivering across London, Birmingham, Manchester, Bradford, Leeds, Glasgow, Cardiff, Belfast and every UK city."
      />

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
