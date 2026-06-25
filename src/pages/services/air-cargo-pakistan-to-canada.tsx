import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  Plane,
  MessageCircle,
  Star,
  MapPin,
  FileCheck,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20an%20air%20cargo%20Pakistan%20to%20Canada%20quote.";

const heroStats = [
  { value: "5–9 Days", label: "Door-to-Door Delivery" },
  { value: "From PKR 15,000", label: "Small Parcels (Up to 5 kg)" },
  { value: "10+ Years", label: "Pakistan to Canada Route" },
  { value: "All Provinces", label: "Canadian Delivery" },
];

const whyChoose = [
  "Fastest transit time — typically 5 to 9 business days door to door",
  "Fully trackable shipments with real-time updates",
  "Much lower risk of damage versus sea freight",
  "Ideal for urgent shipments, documents, and high-value goods",
  "Airline-grade security and handling throughout transit",
  "Available year-round without seasonal delays",
  "Flexible weight options from 1 kg parcels to multi-tonne cargo",
];

const serviceOptions = [
  {
    title: "1. Door-to-Door Air Cargo",
    desc: "Our flagship service — we pick up your cargo from your home or business premises anywhere in Pakistan and deliver it directly to the recipient's door in Canada. We manage everything: packing, labeling, export documentation, Pakistan customs clearance, air transit, Canadian CBSA customs clearance, and final delivery.",
  },
  {
    title: "2. Personal Parcel & Family Cargo",
    desc: "Sending gifts, clothes, medicines, or household items to your family in Canada? Our personal cargo service handles these shipments with full care and discretion.",
    items: [
      "Clothing, shoes, and fashion accessories",
      "Medicines and health supplements",
      "Dry food items and traditional Pakistani edibles",
      "Books, stationery, and educational materials",
      "Electronics, mobile phones, and gadgets",
      "Gifts, decorative items, and household goods",
    ],
  },
  {
    title: "3. Commercial Air Freight Pakistan to Canada",
    desc: "Pakistan exports a wide range of goods to Canada including textiles, sporting goods, leather products, surgical instruments, and handicrafts. Our commercial air freight service covers full export documentation, CBSA import compliance, HS code classification, and VAT/duty advisory.",
    items: [
      "Garments and ready-made textiles",
      "Leather goods from Lahore and Karachi",
      "Sports goods from Sialkot",
      "Surgical instruments and medical devices",
      "Carpets, rugs, and handicrafts",
      "Rice, spices, and packaged food with CFIA certification",
    ],
    link: { to: "/services/freight-forwarding-services/", text: "international freight forwarding Pakistan" },
  },
  {
    title: "4. Express Air Cargo (48–72 Hours)",
    desc: "When your shipment simply cannot wait, our express air freight service delivers to Canada in as little as 48 to 72 hours. Ideal for legal documents, passport applications, business samples, and medical shipments.",
  },
  {
    title: "5. Cargo Consolidation Service",
    desc: "For smaller shipments that do not need a full charter, we offer cargo consolidation — grouping your cargo with other shipments on the same flight route to reduce per-kg costs significantly. Perfect for shipments between 5 kg and 150 kg.",
  },
  {
    title: "6. Air Cargo Insurance",
    desc: "Every shipment can be fully insured at minimal cost. We offer comprehensive cargo insurance that covers loss, theft, and damage during transit. For high-value personal or commercial cargo, insurance is strongly recommended.",
    link: { to: "/services/cargo-insurance-services/", text: "cargo insurance for international shipments" },
  },
];

const airRates = [
  { range: "Up to 5 kg", rate: "PKR 15,000 – 22,000 (flat)", time: "7–9 Business Days" },
  { range: "5 kg – 30 kg", rate: "PKR 2,800 – 3,500 per kg", time: "7–9 Business Days" },
  { range: "30 kg – 100 kg", rate: "PKR 2,200 – 2,800 per kg", time: "6–8 Business Days" },
  { range: "100 kg – 300 kg", rate: "PKR 1,800 – 2,400 per kg", time: "5–7 Business Days" },
  { range: "300 kg – 500 kg", rate: "PKR 1,400 – 1,900 per kg", time: "5–7 Business Days" },
  { range: "500 kg+", rate: "Custom Charter Quote", time: "5–7 Business Days" },
];

const processSteps = [
  "Request a Free Quote — WhatsApp, call, or fill our online form. Share cargo details: weight, dimensions, content type, origin, and Canadian delivery address.",
  "Book Your Shipment — Confirm the rate, sign the booking form, and schedule your pickup date.",
  "Cargo Pickup in Pakistan — Our team arrives at your location with proper packing materials and collects the cargo.",
  "Professional Packing & Labeling — All items are packed to IATA airline standards and labeled with airway bill information.",
  "Pakistan Export Customs Clearance — We file all necessary export declarations with Pakistan Customs on your behalf.",
  "Air Transit to Canada — Your cargo travels via scheduled airline, with stops typically at Dubai, Doha, or Frankfurt.",
  "Canadian CBSA Clearance — Our Canadian partners handle all import customs documentation with CBSA.",
  "Last-Mile Delivery in Canada — Cargo is delivered directly to the recipient's address anywhere in Canada.",
  "Delivery Confirmation — You receive confirmation once the cargo has been delivered successfully.",
];

const pakistanCities = [
  "Karachi — Main hub via Jinnah International Airport (KHI)",
  "Lahore — Allama Iqbal International Airport (LHE)",
  "Islamabad / Rawalpindi — Islamabad International Airport (ISB)",
  "Peshawar — Bacha Khan International Airport (PEW)",
  "Multan — Multan International Airport (MUX)",
  "Faisalabad — Collection and transfer to nearest hub airport",
  "Sialkot — International Airport (SKT), suitable for commercial exports",
  "Quetta — Collection with transfer to Karachi hub",
];

const canadaDestinations = [
  { region: "Ontario", cities: "Toronto, Mississauga, Brampton, Ottawa, Hamilton, London, Windsor, Scarborough" },
  { region: "British Columbia", cities: "Vancouver, Surrey, Burnaby, Richmond, Abbotsford" },
  { region: "Alberta", cities: "Calgary, Edmonton" },
  { region: "Quebec", cities: "Montreal, Quebec City" },
  { region: "Other Provinces", cities: "Winnipeg (Manitoba), Halifax (Nova Scotia), Saskatoon & Regina (Saskatchewan), St. John's (Newfoundland)" },
];

const allowedItems = [
  "Clothing and textiles (new or used, declared accurately)",
  "Electronics — laptops, mobile phones, tablets (with battery restrictions)",
  "Medicines and supplements (with valid prescription for controlled substances)",
  "Books, documents, and educational materials",
  "Dry food items — spices, pulses, rice (with CFIA clearance)",
  "Handicrafts, carpets, and decorative items",
  "Machinery and industrial parts (with proper HS codes)",
  "Sports goods and leather accessories",
  "Personal effects for new immigrants (Tariff 9807 exemption may apply)",
];

const prohibitedItems = [
  "Firearms, weapons, and ammunition",
  "Narcotics, cannabis, and controlled substances",
  "Fresh fruits, vegetables, and plants without CFIA phytosanitary certificate",
  "Soil and soil-based products",
  "Standalone lithium batteries above IATA threshold",
  "Currency above CAD 10,000 — must be declared to CBSA",
  "Counterfeit or pirated goods",
  "Endangered species products (CITES violations)",
];

const airVsSea = [
  { feature: "Transit Time", air: "5–9 Business Days", sea: "35–50 Days" },
  { feature: "Cost", air: "Higher per kg", sea: "Lower per kg" },
  { feature: "Best For", air: "Urgent, valuable, light cargo", sea: "Heavy, bulk, non-urgent" },
  { feature: "Tracking", air: "Real-time flight tracking", sea: "Vessel tracking (less frequent)" },
  { feature: "Damage Risk", air: "Very Low", sea: "Moderate (handling)" },
  { feature: "Minimum Weight", air: "1 kg", sea: "Usually 50 kg+" },
  { feature: "Customs Speed", air: "Fast (2–3 days)", sea: "Slower (3–7 days)" },
  { feature: "Reliability", air: "Very High", sea: "Subject to port delays" },
];

const advantages = [
  { advantage: "10+ Years International Experience", meaning: "Deep expertise in Pakistan-Canada freight corridors" },
  { advantage: "Nationwide Pickup Across Pakistan", meaning: "We collect from your door — no terminal visits needed" },
  { advantage: "Established Canadian Partner Network", meaning: "Reliable last-mile delivery in all 10 Canadian provinces" },
  { advantage: "Full Customs Management", meaning: "Pakistan export + CBSA import handled by our experts" },
  { advantage: "Real-Time Shipment Tracking", meaning: "Live updates from pickup to delivery" },
  { advantage: "Transparent Pricing", meaning: "No hidden fees — exact quote before booking" },
  { advantage: "Cargo Insurance Available", meaning: "Full coverage for high-value shipments" },
  { advantage: "24/7 WhatsApp Support", meaning: "Our team is always available for your queries" },
  { advantage: "IATA-Compliant Packing", meaning: "Airline-standard packing for maximum safety" },
  { advantage: "Proven Track Record", meaning: "Thousands of satisfied customers across Pakistan & Canada" },
];

const testimonials = [
  {
    title: "Delivered in 6 Days — Amazing!",
    quote: "I sent a 12 kg package of clothes and medicines from Islamabad to my daughter in Toronto. Best Int'l Movers picked it up from my home and it arrived in just 6 business days. Excellent service and very competitive pricing.",
    name: "Farida K.",
    location: "Islamabad",
  },
  {
    title: "Best Cargo Company for Pakistan to Canada",
    quote: "We export leather accessories from Karachi to our retail store in Vancouver every quarter. Best Int'l Movers handles everything — pickup, packing, customs, and delivery. Zero headaches.",
    name: "Raza Exports",
    location: "Karachi",
  },
  {
    title: "Urgent Document Delivered on Time",
    quote: "I needed urgent legal documents to reach Calgary within 3 days. Best Int'l Movers' express service came through perfectly. Documents arrived in 3 business days.",
    name: "Ahmed M.",
    location: "Lahore",
  },
  {
    title: "New Immigrant — Tariff Exemption Handled Perfectly",
    quote: "When I moved from Lahore to Brampton, Best Int'l Movers helped me ship my personal effects and correctly filed for the Settlers Effects tariff exemption, saving me thousands in customs duties.",
    name: "Zainab A.",
    location: "Brampton",
  },
];

const faqs = [
  {
    q: "How long does air cargo take from Pakistan to Canada?",
    a: "Standard air cargo takes 6 to 9 business days door to door. Our express service delivers in 3 to 5 business days. Timing can vary slightly based on Canadian customs clearance and the destination province.",
  },
  {
    q: "What is the cheapest way to send air cargo from Pakistan to Canada?",
    a: "For shipments between 30 kg and 300 kg, our consolidated air freight service offers the best rates — typically PKR 1,800 to 2,400 per kg. Contact us for a custom quote based on your exact weight and dimensions.",
  },
  {
    q: "Do I need to pay Canadian customs duty on my cargo?",
    a: "It depends on the type and value of goods. Personal gifts under CAD 60 are generally duty-free. New immigrants may qualify for the Settlers' Effects exemption. Commercial goods are subject to CBSA assessment.",
  },
  {
    q: "Can I send food items from Pakistan to Canada by air?",
    a: "Many dry and packaged food items can be sent with proper documentation and CFIA compliance. Fresh produce, meat, and dairy products are generally not permitted. We will advise on specific items and required certifications.",
  },
  {
    q: "How do I track my air cargo shipment?",
    a: "Once your cargo is booked, you receive an Airway Bill (AWB) number. You can use this to track your shipment online via the airline's tracking portal, or contact our team on WhatsApp for real-time updates.",
  },
  {
    q: "Can you ship from small cities in Pakistan like Sialkot or Multan?",
    a: "Yes. We offer pickup from all Pakistani cities. For cities without direct international flights, we collect your cargo and transfer it to the nearest hub airport (Karachi, Lahore, or Islamabad).",
  },
  {
    q: "What airports do you use for Pakistan to Canada routes?",
    a: "On the Pakistan side, we primarily use Karachi (KHI), Lahore (LHE), and Islamabad (ISB). Canadian destinations use Toronto Pearson (YYZ), Vancouver International (YVR), Calgary (YYC), and Montreal Trudeau (YUL).",
  },
  {
    q: "Is cargo insurance mandatory?",
    a: "No, it is optional — but strongly recommended for any cargo valued above PKR 50,000. Our insurance covers loss, theft, and damage during the entire transit.",
  },
  {
    q: "Can businesses use your service for regular commercial exports to Canada?",
    a: "Absolutely. We offer dedicated commercial accounts for regular exporters with volume-based pricing, dedicated account managers, and priority handling.",
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
  name: "Air Cargo from Pakistan to Canada",
  description:
    "Door-to-door air cargo from Pakistan to Canada — personal parcels, commercial freight, express delivery, CBSA customs clearance and Canadian last-mile delivery.",
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

export default function AirCargoPakistanToCanada() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Air Cargo from Pakistan to Canada | Fast Door-to-Door Shipping | Best Int'l Movers"
        description="Send air cargo from Pakistan to Canada with Best Int'l Movers. Fast, safe & affordable air freight from Karachi, Lahore & Islamabad to Toronto, Vancouver, Calgary & more. Free quote available!"
        keywords="air cargo from pakistan to canada, cargo pakistan to canada, air freight pakistan canada, shipping from pakistan to canada, pakistan to canada parcel service, cargo service pakistan canada, send parcel pakistan to canada"
        urlPath="/services/air-cargo-pakistan-to-canada/"
        canonicalUrl="https://bestintlmovers.com/services/air-cargo-pakistan-to-canada/"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Plane className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Air Cargo Pakistan to Canada — 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Air Cargo from Pakistan to Canada — Trusted, Fast &amp; Door-to-Door Shipping Service
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Personal parcels, commercial goods &amp; urgent shipments — Karachi, Lahore, Islamabad to Toronto,
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
              Are you searching for a reliable <strong>air cargo service from Pakistan to Canada</strong>? Whether you
              want to send personal belongings to a family member in Toronto, ship commercial goods to Vancouver, or
              dispatch urgent parcels to Calgary, Best Int&apos;l Movers is Pakistan&apos;s most trusted air freight
              partner for Canada-bound shipments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide complete door-to-door air cargo solutions from all major cities in Pakistan — Karachi, Lahore,
              Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, and Sialkot — to every province in Canada including
              Ontario, British Columbia, Alberta, Quebec, and Manitoba.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Just like our popular{" "}
              <Link to="/services/air-cargo-pakistan-to-uk/" className="text-gold hover:underline font-medium">
                air cargo from Pakistan to UK
              </Link>
              , we bring the same reliability, expert customs handling, and end-to-end tracking to Canada-bound
              shipments — giving you total peace of mind from pickup in Pakistan to delivery at the Canadian doorstep.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Send Air Cargo from Pakistan to Canada?</h2>
            <p className="text-muted-foreground mb-6">
              Canada is home to one of the world&apos;s largest Pakistani diaspora communities — over 300,000 Pakistanis
              live in cities like Toronto, Vancouver, Mississauga, Brampton, Calgary, and Edmonton. Air cargo is the
              preferred choice when speed and safety matter. Here is why air freight beats other shipping modes:
            </p>
            <ul className="space-y-3">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Air Cargo Services Pakistan to Canada</h2>
            <div className="space-y-8">
              {serviceOptions.map((opt) => (
                <div key={opt.title} className="glass-card rounded-2xl p-6 border border-border">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{opt.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {opt.desc}
                    {opt.link && (
                      <>
                        {" "}
                        Learn more about our{" "}
                        <Link to={opt.link.to} className="text-gold hover:underline font-medium">
                          {opt.link.text}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                  {opt.items && (
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      {opt.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Air Cargo Rates — Pakistan to Canada</h2>
            <p className="text-muted-foreground mb-6">
              Our rates are calculated based on chargeable weight — whichever is greater between actual weight and
              volumetric weight (L x W x H in cm divided by 6000). We guarantee transparent pricing with no surprise charges.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Chargeable Weight</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Estimated Rate (PKR)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Transit Time</th>
                </tr>
              </thead>
              <tbody>
                {airRates.map((row) => (
                  <tr key={row.range} className="border-b border-border/50 hover:bg-navy-light/20">
                    <td className="p-4 text-muted-foreground">{row.range}</td>
                    <td className="p-4 text-foreground font-medium">{row.rate}</td>
                    <td className="p-4 text-muted-foreground">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-sm text-muted-foreground italic">
              Note: Rates are indicative and depend on cargo type, origin city, airline availability, and fuel surcharges
              at time of booking. Contact us for a precise quote.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Step-by-Step: How Air Cargo Works</h2>
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
            <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="text-gold" size={22} /> Pakistan Cities We Collect From
            </h2>
            <ul className="space-y-2 mb-10">
              {pakistanCities.map((city) => (
                <li key={city} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                  {city}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <Globe className="text-gold" size={22} /> Canadian Cities We Deliver To
            </h2>
            <p className="text-muted-foreground mb-4">We deliver to every Canadian province and territory. Key destinations include:</p>
            <div className="space-y-4">
              {canadaDestinations.map((d) => (
                <div key={d.region} className="glass-card rounded-xl p-4 border border-border">
                  <p className="font-semibold text-foreground mb-1">{d.region}</p>
                  <p className="text-muted-foreground text-sm">{d.cities}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">What Can You Send by Air Cargo from Pakistan to Canada?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Commonly Shipped — Allowed Items</h3>
                <ul className="space-y-2">
                  {allowedItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Restricted or Prohibited Items</h3>
                <ul className="space-y-2">
                  {prohibitedItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-14 glass-card rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-gold" size={26} /> Canadian Customs — What You Need to Know
            </h2>
            <h3 className="text-lg font-semibold text-foreground mb-3">Personal Imports</h3>
            <ul className="space-y-2 text-muted-foreground mb-6 text-sm">
              <li>• Gifts valued under CAD 60: Generally duty-free if sent as a gift to a Canadian resident</li>
              <li>• Personal effects for new immigrants: May qualify under Tariff Item 9807 (Settlers&apos; Effects)</li>
              <li>• Casual goods valued under CAD 20: May clear without formal entry</li>
              <li>• Goods over CAD 20 in value: Subject to duty and GST/HST assessment</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground mb-3">Commercial Imports</h3>
            <ul className="space-y-2 text-muted-foreground mb-4 text-sm">
              <li>• All commercial goods require a formal CBSA entry regardless of value</li>
              <li>• HS code classification determines applicable duty rates</li>
              <li>• GST (5%) and provincial taxes may apply</li>
              <li>• Pakistan-origin goods may qualify for preferential tariffs under CPTPP provisions</li>
              <li>• Food and agricultural items require Canadian Food Inspection Agency (CFIA) certification</li>
            </ul>
            <p className="text-muted-foreground">
              We provide full customs advisory and handle all CBSA documentation on your behalf to ensure smooth
              clearance and minimize duties.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Air Cargo vs Sea Freight — Pakistan to Canada</h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Feature</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Air Cargo</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Sea Freight</th>
                </tr>
              </thead>
              <tbody>
                {airVsSea.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="p-4 text-foreground font-medium">{row.feature}</td>
                    <td className="p-4 text-muted-foreground">{row.air}</td>
                    <td className="p-4 text-muted-foreground">{row.sea}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-muted-foreground text-sm">
              For most personal and urgent commercial shipments, air cargo is the clear winner for Pakistan to Canada
              routes. For heavy industrial goods and bulk orders,{" "}
              <Link to="/services/sea-freight-services/" className="text-gold hover:underline">
                sea freight
              </Link>{" "}
              may be more economical.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Choose Best Int&apos;l Movers for Air Cargo to Canada?</h2>
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
                  <footer className="text-sm text-foreground">— {t.name}, {t.location}</footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Frequently Asked Questions — Air Cargo Pakistan to Canada
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
                <Link to="/services/air-cargo-pakistan-to-uk/" className="text-gold hover:underline">
                  Air cargo from Pakistan to UK
                </Link>{" "}
                — same reliable door-to-door service to the United Kingdom
              </li>
              <li>
                <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">
                  Cargo insurance for international shipments
                </Link>{" "}
                — full replacement value protection
              </li>
              <li>
                <Link to="/services/freight-forwarding-services/" className="text-gold hover:underline">
                  International freight forwarding Pakistan
                </Link>{" "}
                — B2B commercial cargo coordination
              </li>
              <li>
                <Link to="/pakistan-to-canada-movers" className="text-gold hover:underline">
                  Pakistan to Canada movers
                </Link>{" "}
                — complete household relocation
              </li>
            </ul>
          </section>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Get Your Free Air Cargo Quote — Pakistan to Canada"
        subtext="Ready to send your cargo to Canada? Contact Best Int'l Movers for a free, no-obligation quote. Serving Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad & Sialkot — delivering to Toronto, Vancouver, Calgary, Edmonton, Ottawa, Mississauga, Brampton, Montreal & more."
      />

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
