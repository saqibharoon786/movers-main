import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  Plane,
  Package,
  MessageCircle,
  Clock,
  Star,
  MapPin,
  FileCheck,
  ShieldCheck,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20an%20air%20cargo%20Pakistan%20to%20UK%20quote.";

const heroStats = [
  { value: "3–7 Days", label: "Door-to-Door Delivery" },
  { value: "From PKR 12,000", label: "Small Parcels (Up to 5 kg)" },
  { value: "10+ Years", label: "Pakistan to UK Route" },
  { value: "All UK Cities", label: "Last-Mile Delivery" },
];

const whyChoose = [
  "Fastest delivery time — 3 to 7 business days door to door",
  "Suitable for urgent documents, electronics, clothing, and perishables",
  "Fully tracked shipments with real-time updates",
  "Lower risk of damage compared to sea or road freight",
  "Customs clearance assistance on both ends (Pakistan & UK)",
  "Door-to-door pickup and delivery available",
  "Competitive rates for both personal and commercial cargo",
];

const serviceOptions = [
  {
    title: "1. Door-to-Door Air Cargo",
    desc: "We collect your shipment directly from your home or office anywhere in Pakistan and deliver it to the recipient's door in the UK. No need to visit any cargo terminal — we handle packing, labeling, documentation, and UK customs clearance.",
  },
  {
    title: "2. Air Freight for Personal Belongings",
    desc: "Moving to the UK or sending gifts and clothes to family? We handle personal air cargo with full care. All items are securely packed and insured for safe transit.",
    items: ["Clothing and household items", "Electronics and gadgets", "Medicines and health products", "Books, documents, and study materials", "Gifts and family parcels"],
  },
  {
    title: "3. Commercial Air Freight Pakistan to UK",
    desc: "We provide B2B air cargo services for businesses exporting goods from Pakistan to the UK. Our team manages export documentation, UK import clearance, VAT handling, and last-mile delivery.",
    items: ["Textiles and garments export", "Leather goods and accessories", "Surgical instruments from Sialkot", "Sports goods and equipment", "Food items with proper packaging and health certificates"],
    link: { to: "/services/freight-forwarding-services/", text: "international freight forwarding services" },
  },
  {
    title: "4. Express Air Cargo",
    desc: "Need it there in 48 to 72 hours? Our express air cargo service uses premium airline routes to get your shipment to the UK as fast as possible. Ideal for business-critical documents, samples, and urgent personal parcels.",
  },
  {
    title: "5. Air Cargo Insurance",
    desc: "All shipments can be fully insured at nominal cost. In the unlikely event of damage or loss, you are covered. We strongly recommend cargo insurance for high-value items.",
    link: { to: "/services/cargo-insurance-services/", text: "cargo insurance for international shipments" },
  },
];

const airRates = [
  { range: "Up to 5 kg", rate: "PKR 12,000 – 18,000", time: "5–7 Business Days" },
  { range: "5 kg – 20 kg", rate: "PKR 2,000 – 2,800 per kg", time: "5–7 Business Days" },
  { range: "20 kg – 100 kg", rate: "PKR 1,600 – 2,200 per kg", time: "4–6 Business Days" },
  { range: "100 kg – 300 kg", rate: "PKR 1,200 – 1,800 per kg", time: "3–5 Business Days" },
  { range: "300 kg+", rate: "Custom Quote", time: "3–5 Business Days" },
];

const processSteps = [
  "Request a Free Quote — Contact us via WhatsApp, call, or our online form. Share your cargo details (weight, dimensions, content).",
  "Cargo Pickup — Our team picks up your cargo from your location anywhere in Pakistan.",
  "Professional Packing — We securely pack all items using airline-approved materials.",
  "Documentation — We prepare all required export documents including airway bill, packing list, and commercial invoice.",
  "Pakistan Customs Clearance — We handle export customs at origin airport (Karachi/Lahore/Islamabad).",
  "Air Transit — Your cargo flies via scheduled airlines with full tracking.",
  "UK Customs Clearance — Our UK partners handle import customs, duties, and HMRC documentation.",
  "Final Delivery in UK — We deliver directly to the recipient's door anywhere in England, Scotland, Wales, or Northern Ireland.",
];

const pakistanCities = [
  "Karachi — Main international cargo hub, fastest airline connections",
  "Lahore — Direct flights to UK via major carriers",
  "Islamabad / Rawalpindi — Islamabad International Airport cargo services",
  "Peshawar — Collection and transfer to Islamabad hub",
  "Multan — Collection service with transfer",
  "Faisalabad — Industrial cargo and textile exports",
  "Sialkot — Sports goods and surgical instruments",
  "Quetta — Special cargo handling available",
];

const ukDestinations = [
  "London (all boroughs including East London, Southall, Wembley)",
  "Birmingham — Highest Pakistani diaspora density",
  "Manchester — Popular destination for Pakistani community",
  "Bradford — Large Pakistani community area",
  "Leeds — Yorkshire region deliveries",
  "Glasgow and Edinburgh — Scotland deliveries",
  "Sheffield, Leicester, Luton, Slough, Coventry",
  "Cardiff — Wales deliveries",
  "Belfast — Northern Ireland deliveries",
];

const allowedItems = [
  "Clothing and textiles",
  "Electronics (laptops, phones — with restrictions on batteries)",
  "Books and documents",
  "Household goods and gifts",
  "Surgical instruments and medical equipment",
  "Sports goods",
  "Food items (non-perishable, with proper certification)",
  "Machine parts and industrial equipment",
];

const prohibitedItems = [
  "Firearms, weapons, and ammunition",
  "Narcotics and controlled substances",
  "Lithium batteries above threshold (standalone)",
  "Aerosols and flammable liquids",
  "Fresh fruits and vegetables without phytosanitary certificates",
  "Currency above declared limits",
];

const documents = [
  "Passport copy of sender and receiver",
  "CNIC copy (for Pakistan customs)",
  "Commercial invoice (for business cargo)",
  "Packing list with accurate item descriptions",
  "Airway Bill (AWB) — We prepare this for you",
  "Certificate of Origin (for commercial goods)",
  "Import declaration for UK customs (HMRC)",
];

const advantages = [
  { advantage: "10+ Years Experience", meaning: "Trusted by thousands of families and businesses" },
  { advantage: "Nationwide Pickup", meaning: "We collect from your doorstep anywhere in Pakistan" },
  { advantage: "UK Partner Network", meaning: "Reliable last-mile delivery across all UK cities" },
  { advantage: "Real-Time Tracking", meaning: "Know exactly where your cargo is at all times" },
  { advantage: "Competitive Rates", meaning: "Best prices with no hidden fees" },
  { advantage: "24/7 Customer Support", meaning: "WhatsApp and phone support round the clock" },
  { advantage: "Cargo Insurance", meaning: "Optional full coverage for high-value items" },
  { advantage: "Customs Expertise", meaning: "We handle Pakistan & UK customs for you" },
];

const testimonials = [
  {
    quote: "I sent a 15 kg parcel of clothes and medicines from Lahore to Birmingham. Best Int'l Movers picked it up from my home and it was delivered in 5 days. Excellent service and very reasonable rates.",
    name: "Sadia R.",
    location: "Lahore",
    title: "Excellent Service!",
  },
  {
    quote: "We use Best Int'l Movers for sending leather goods from Karachi to our UK store every month. Very professional, always on time, and their customs handling is top-notch.",
    name: "Ali Enterprises",
    location: "Karachi",
    title: "Highly Recommended for UK Cargo",
  },
  {
    quote: "My family needed urgent documents to reach London for a visa application. Best Int'l Movers delivered them in 3 business days. Amazing service!",
    name: "Usman T.",
    location: "Islamabad",
    title: "Best Air Cargo Service from Pakistan to UK",
  },
];

const faqs = [
  {
    q: "How long does air cargo take from Pakistan to UK?",
    a: "Standard air cargo takes 5 to 7 business days. Express service can deliver in 3 to 4 business days. Door-to-door timing may vary slightly based on UK customs clearance.",
  },
  {
    q: "What is the minimum weight for air cargo?",
    a: "There is no strict minimum. We handle shipments from 1 kg parcels to multi-tonne commercial consignments.",
  },
  {
    q: "Can I track my air cargo shipment?",
    a: "Yes. We provide a tracking number once your cargo is booked. You can track it online or contact our team via WhatsApp for live updates.",
  },
  {
    q: "How are air cargo rates calculated?",
    a: "Rates are based on chargeable weight, which is the higher of actual weight or volumetric weight (Length x Width x Height in cm / 6000). We will calculate this for you when you request a quote.",
  },
  {
    q: "Is my cargo insured?",
    a: "Basic carrier liability is included. We strongly recommend purchasing full cargo insurance for valuable items, which we offer at a nominal cost.",
  },
  {
    q: "What airports are used for Pakistan to UK air cargo?",
    a: "We primarily use Jinnah International Airport (KHI - Karachi), Allama Iqbal International Airport (LHE - Lahore), and Islamabad International Airport (ISB). UK arrivals are typically at Heathrow (LHR), Gatwick (LGW), or Manchester (MAN).",
  },
  {
    q: "Can you handle large commercial cargo?",
    a: "Yes. We handle commercial air freight of all sizes including full charter bookings for very large shipments. Contact us for B2B rates.",
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
  name: "Air Cargo from Pakistan to UK",
  description:
    "Door-to-door air cargo from Pakistan to the United Kingdom — personal belongings, commercial freight, express delivery, customs clearance and UK last-mile delivery.",
  serviceType: "International air freight",
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

export default function AirCargoPakistanToUK() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Air Cargo from Pakistan to UK | Fast & Reliable Shipping | Best Int'l Movers"
        description="Send air cargo from Pakistan to UK quickly and safely. Best Int'l Movers offers door-to-door air freight services from Karachi, Lahore & Islamabad to all UK cities. Get a free quote today!"
        keywords="air cargo from pakistan to uk, cargo pakistan to uk, air freight pakistan uk, shipping from pakistan to uk, pakistan to uk parcel service"
        urlPath="/services/air-cargo-pakistan-to-uk/"
        canonicalUrl="https://bestintlmovers.com/services/air-cargo-pakistan-to-uk/"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Plane className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Air Cargo Pakistan to UK — 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Air Cargo from Pakistan to UK — Fast, Affordable &amp; Door-to-Door Shipping
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Personal belongings, commercial goods &amp; urgent parcels — Karachi, Lahore, Islamabad to London,
              Birmingham, Manchester &amp; all UK cities
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
              Are you looking to send <strong>air cargo from Pakistan to UK</strong>? Whether you need to ship personal
              belongings, commercial goods, or important parcels, Best Int&apos;l Movers offers the most reliable and
              affordable air freight solutions from Pakistan to the United Kingdom.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We handle air cargo shipments from all major Pakistani cities — Karachi, Lahore, Islamabad, Rawalpindi,
              Peshawar, Multan, and Faisalabad — directly to any UK destination including London, Birmingham, Manchester,
              Bradford, Glasgow, and beyond.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Choose Air Cargo from Pakistan to UK?</h2>
            <p className="text-muted-foreground mb-6">
              When time is critical, air freight is the smartest choice. Unlike{" "}
              <Link to="/services/sea-freight-pakistan-to-uk/" className="text-gold hover:underline font-medium">
                sea freight from Pakistan to UK
              </Link>{" "}
              which takes 25–35 days, air cargo from Pakistan to UK typically arrives within 3 to 7 business days. Here
              is why thousands of Pakistanis and businesses trust air shipping for their UK cargo:
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
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Air Cargo Services from Pakistan to UK</h2>
            <p className="text-muted-foreground mb-8">
              At Best Int&apos;l Movers, we provide end-to-end air cargo solutions tailored to your needs:
            </p>
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
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Air Cargo Rates from Pakistan to UK</h2>
            <p className="text-muted-foreground mb-6">
              Our air cargo rates from Pakistan to UK are calculated based on actual weight or volumetric weight
              (whichever is higher). We offer some of the most competitive rates in the market with no hidden charges.
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/50">
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Weight Range</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Estimated Rate (PKR)</th>
                  <th className="text-left p-4 font-semibold text-foreground border-b border-border">Delivery Time</th>
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
              Note: Rates are approximate and may vary based on cargo type, origin city, airline availability, and fuel
              surcharges. Contact us for an exact quote.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">How Does Our Air Cargo Process Work?</h2>
            <p className="text-muted-foreground mb-6">
              Sending air cargo with Best Int&apos;l Movers is simple and stress-free. Here is our step-by-step process:
            </p>
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

          <section className="mb-14 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="text-gold" size={22} /> Cities We Serve in Pakistan
              </h2>
              <ul className="space-y-2">
                {pakistanCities.map((city) => (
                  <li key={city} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Globe className="text-gold" size={22} /> UK Destinations We Deliver To
              </h2>
              <ul className="space-y-2">
                {ukDestinations.map((dest) => (
                  <li key={dest} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={16} />
                    {dest}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">What Items Can We Send by Air Cargo to UK?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-lg font-semibold text-foreground mb-4">Allowed Items</h3>
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
                <h3 className="text-lg font-semibold text-foreground mb-4">Restricted / Prohibited Items</h3>
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
            <p className="text-muted-foreground mt-4 text-sm">
              Our team will advise you on any item-specific regulations before booking your shipment.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <FileCheck className="text-gold" size={26} /> Required Documents for Air Cargo Pakistan to UK
            </h2>
            <p className="text-muted-foreground mb-4">
              To ensure smooth customs clearance at both ends, you will need:
            </p>
            <ul className="space-y-2 mb-4">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={18} />
                  {doc}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              Our team handles all documentation end-to-end so you do not need to worry about paperwork.
            </p>
          </section>

          <section className="mb-14 glass-card rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">UK Import Duties on Air Cargo from Pakistan</h2>
            <p className="text-muted-foreground mb-4">
              Items imported into the UK from Pakistan may be subject to import duty and VAT depending on the type and
              value of goods. Under the UK&apos;s Developing Countries Trading Scheme (DCTS), many Pakistani goods benefit
              from reduced or zero duty rates.
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Personal effects and gifts under GBP 135: Generally duty-free</li>
              <li>• Commercial goods: Subject to UK tariff rates and VAT (20%)</li>
              <li>• Textile and garments: May qualify for preferential DCTS rates</li>
            </ul>
            <p className="text-muted-foreground">
              Our customs experts will advise you on applicable duties and help you minimize costs through proper
              documentation.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Best Int&apos;l Movers for Air Cargo Pakistan to UK?</h2>
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
              Frequently Asked Questions — Air Cargo Pakistan to UK
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
                — cost-effective option for larger household shipments (25–35 days)
              </li>
              <li>
                <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">
                  Cargo insurance for international shipments
                </Link>{" "}
                — full replacement value protection
              </li>
              <li>
                <Link to="/services/freight-forwarding-services/" className="text-gold hover:underline">
                  International freight forwarding services
                </Link>{" "}
                — B2B commercial cargo coordination
              </li>
              <li>
                <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">
                  Pakistan to UK movers
                </Link>{" "}
                — complete household relocation
              </li>
            </ul>
          </section>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Get a Free Air Cargo Quote — Pakistan to UK"
        subtext="Ready to send your cargo to the UK? Get a free, no-obligation quote. Our cargo experts are available 24/7. Serving Karachi, Lahore, Islamabad, Rawalpindi, Multan, Peshawar & Faisalabad."
      />

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
