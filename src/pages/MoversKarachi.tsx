import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Anchor,
  Plane,
  Package,
  Globe,
  MessageCircle,
  Ship,
  Clock,
  Users,
  Star,
  Truck,
  Warehouse,
  FileCheck,
  Car,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
const heroImg =
  "/images/container.jpg";

const heroStats = [
  { value: "1,200+", label: "Karachi Moves Completed" },
  { value: "Direct Port Access", label: "Karachi Seaport & KICT" },
  { value: "Free Home Survey", label: "All Karachi Areas" },
  { value: "Same-Day Response", label: "Call or WhatsApp" },
];

const karachiZones = [
  {
    title: "DHA & Defence",
    areas: "DHA Phase 1, 2, 3, 4, 5, 6, 7, 8 | Defence View | Korangi Creek | Khy-e-Ittehad",
  },
  {
    title: "Clifton & Bath Island",
    areas: "Clifton Block 1–9 | Bath Island | Creek Vista | Boat Basin",
  },
  {
    title: "Gulshan-e-Iqbal & Surrounding",
    areas: "Gulshan-e-Iqbal Blocks 1–13 | Gulistan-e-Johar | Johar Mor | Quaidabad",
  },
  {
    title: "PECHS & Tariq Road",
    areas: "PECHS Blocks A–G | Shahrah-e-Faisal | Tariq Road | Stadium Road",
  },
  {
    title: "North Karachi & North Nazimabad",
    areas: "North Nazimabad Blocks A–R | North Karachi Sectors 11A–14D | Surjani Town",
  },
  {
    title: "Central Karachi",
    areas: "Saddar | Soldier Bazaar | Lyari | Kharadar | Ranchore Lines | Orangi",
  },
  {
    title: "Korangi & Industrial Areas",
    areas: "Korangi Township | Landhi | SITE Area | Bin Qasim",
  },
  {
    title: "Malir & Outskirts",
    areas: "Malir City | Malir Cantonment | Gadap Town | Super Highway Corridor",
  },
];

const routes = [
  { destination: "Karachi to Dubai / UAE", sea: "6–10 days", air: "2–4 days", cost: "From PKR 75,000" },
  { destination: "Karachi to Saudi Arabia", sea: "10–16 days", air: "3–5 days", cost: "From PKR 85,000" },
  { destination: "Karachi to Qatar", sea: "10–15 days", air: "3–5 days", cost: "From PKR 90,000" },
  { destination: "Karachi to UK", sea: "22–28 days", air: "4–6 days", cost: "From PKR 160,000" },
  { destination: "Karachi to Canada", sea: "32–44 days", air: "5–7 days", cost: "From PKR 185,000" },
  { destination: "Karachi to USA", sea: "35–50 days", air: "6–8 days", cost: "From PKR 195,000" },
  { destination: "Karachi to Australia", sea: "18–25 days", air: "5–7 days", cost: "From PKR 150,000" },
  { destination: "Karachi to Germany", sea: "24–30 days", air: "5–7 days", cost: "From PKR 170,000" },
  { destination: "Karachi to Malaysia", sea: "12–18 days", air: "3–5 days", cost: "From PKR 95,000" },
];

const services = [
  {
    icon: Globe,
    title: "International Moving — Door to Door",
    desc: "Survey, fixed price, export-grade packing, Karachi Port or KHI airport, export & import customs, delivery at your new address worldwide.",
  },
  {
    icon: Package,
    title: "Professional Packing in Karachi",
    desc: "Double-wall cartons, bubble wrap, foam padding, anti-scratch furniture wrap, and custom wooden crating — all materials supplied by us.",
  },
  {
    icon: Ship,
    title: "Sea Freight Karachi",
    desc: "LCL weekly consolidations and FCL 20ft/40ft containers with Maersk, MSC, and Hapag-Lloyd slots from Karachi Port.",
    link: { to: "/cargo-service-karachi", label: "Cargo Service Karachi — rates & FCL/LCL →" },
  },
  {
    icon: Plane,
    title: "Air Freight Karachi",
    desc: "Jinnah International Airport (KHI) bookings via Emirates SkyCargo, Qatar Airways Cargo, and PIA Cargo for urgent shipments.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance — Export from Pakistan",
    desc: "Packing list, commercial invoice, Form E, NOC coordination, and registered freight forwarder clearance at port or airport.",
  },
  {
    icon: Car,
    title: "Vehicle Shipping from Karachi",
    desc: "RoRo and container exports for cars, SUVs, and motorcycles — SBP Form M, inspection, and full customs handling.",
  },
  {
    icon: Warehouse,
    title: "Secure Storage in Karachi",
    desc: "Climate-controlled, 24/7 monitored warehouse for short- or long-term storage before your international departure.",
  },
  {
    icon: Truck,
    title: "House Shifting within Karachi",
    desc: "Local apartment-to-apartment and Karachi-to-other-city moves with same-day booking across all areas.",
    link: { to: "/house-shifting-karachi", label: "House Shifting Karachi page →" },
  },
];

const whyChoose = [
  {
    icon: Anchor,
    title: "Direct Port Access & Port Relationships",
    desc: "In-house handling from your door to the vessel — established relationships at Karachi Port and KICT for faster clearance.",
  },
  {
    icon: Clock,
    title: "15+ Years of International Experience",
    desc: "Every scenario handled — visa delays, customs holds, fragile antiques, oversized items, and diplomatic shipments.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Price — No Hidden Charges",
    desc: "Written all-inclusive quote after free survey — no fuel surcharges, port fees, or documentation surprises on the final invoice.",
  },
  {
    icon: Globe,
    title: "Real-Time Shipment Tracking",
    desc: "Track your container or airfreight consignment live from Karachi departure through destination delivery.",
  },
  {
    icon: Users,
    title: "Dedicated Move Coordinator",
    desc: "One Karachi coordinator from first survey to final delivery — no call centres or rotating agents.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Shipments",
    desc: "Marine cargo insurance for loss, damage, and total loss during sea or air transit — included in standard quotes.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Home Survey (Karachi)",
    desc: "Surveyor visits within 24–48 hours, inventories every room, photographs large pieces — 100% free, no obligation.",
  },
  {
    step: "2",
    title: "Fixed Quote Within 24 Hours",
    desc: "Written quotation with packing date, port loading, vessel sailing, destination ETD/ETA, and payment terms.",
  },
  {
    step: "3",
    title: "Packing Day at Your Karachi Home",
    desc: "Systematic pack, label, and inventory with detailed packing list for customs and insurance records.",
  },
  {
    step: "4",
    title: "Transport to Karachi Port / Airport",
    desc: "Direct transport to Karachi Port (sea) or Jinnah International Airport (air) with full terminal logistics.",
  },
  {
    step: "5",
    title: "Customs Clearance & Vessel Loading",
    desc: "Export documentation with Pakistan Customs, LCL/FCL loading, and Bill of Lading issued to you.",
  },
  {
    step: "6",
    title: "Transit Tracking",
    desc: "Live tracking plus coordinator updates at vessel departure, mid-voyage, and port of arrival ETA.",
  },
  {
    step: "7",
    title: "Destination Delivery",
    desc: "Partner agent handles import customs, last-mile delivery, and optional unpacking at your new address.",
  },
];

const testimonials = [
  {
    quote:
      "We moved from DHA Phase 6 to Dubai Marina in September. The team came on time, packed everything perfectly, and our container arrived in Dubai in 9 days. Not a single item was damaged. The coordinator kept us updated throughout — even after we had already landed in Dubai. Best decision we made was choosing Best International Movers.",
    name: "Farrukh Rehman",
    route: "DHA Karachi → Dubai",
  },
  {
    quote:
      "Moving from Karachi to the UK felt impossible until we called these guys. They handled everything from packing in Clifton to customs clearance in UK. The whole process took about 35 days and everything arrived safely. Price was exactly what they quoted — no surprises.",
    name: "Sadia Mirza",
    route: "Clifton Karachi → Birmingham, UK",
  },
  {
    quote:
      "We used them for shipping our vehicles as well as household goods from Karachi to Riyadh. Two cars and a full house — they managed everything. Customs was complicated but they handled it. Highly recommend for Saudi routes especially.",
    name: "Imran Siddiqui",
    route: "PECHS Karachi → Riyadh, KSA",
  },
];

const faqs = [
  {
    q: "How much does it cost to move internationally from Karachi?",
    a: "Cost depends on volume, destination, and sea vs air. A typical 2-bedroom house to Dubai by sea: PKR 75,000–175,000 LCL. A full 20ft container to the UK: approximately PKR 750,000–950,000 all-inclusive. Accurate pricing requires a free home survey within 24–48 hours.",
  },
  {
    q: "Do you serve all areas of Karachi?",
    a: "Yes — DHA, Clifton, Gulshan-e-Iqbal, PECHS, North Nazimabad, Saddar, Korangi, Landhi, Malir, Gulistan-e-Johar, North Karachi, Surjani Town, and all surrounding areas. No minimum-size requirement for a survey.",
  },
  {
    q: "How long does sea freight from Karachi to Dubai take?",
    a: "6 to 10 days from loading at Karachi Port to arrival at Jebel Ali, Dubai. Thursday vessel loads typically arrive within 8–10 days. Add 3–5 days for destination customs and last-mile delivery.",
  },
  {
    q: "Can you ship from Karachi to a country not listed here?",
    a: "Yes — we ship to 100+ countries worldwide. Call us for a specific quote. We have established agents in Europe, North America, Southeast Asia, East Africa, and the Middle East.",
  },
  {
    q: "Do you handle customs export clearance from Karachi Port?",
    a: "Yes, fully. Our customs team handles packing list, commercial invoice, Form E, Bill of Lading, and any special permits. You do not need to visit any customs office.",
  },
  {
    q: "Is my shipment insured from Karachi?",
    a: "All shipments are eligible for marine cargo insurance. We recommend comprehensive all-risk insurance and include it in our standard quote package. Claims are handled through us.",
  },
  {
    q: "Can you move from Karachi to another Pakistani city first, then internationally?",
    a: "Yes. If you are relocating from Karachi to Islamabad before moving abroad, we manage both domestic and international legs with a single point of contact.",
  },
  {
    q: "Do you move vehicles internationally from Karachi?",
    a: "Yes. Karachi Port handles all international vehicle exports from Pakistan. We manage RoRo and container shipping for cars and motorcycles with full SBP and customs documentation.",
  },
  {
    q: "What packing materials do you use for Karachi sea freight?",
    a: "Heavy-duty double-wall cartons, industrial stretch wrap, bubble wrap, foam corner protectors, anti-moisture desiccant packets, and custom wooden crating for antiques or large appliances — all provided at no extra charge.",
  },
  {
    q: "How do I get started?",
    a: "Call or WhatsApp 0300-9130211 to schedule your free home survey in Karachi. Or fill in the quote form on our Contact page — we call back within 2 hours during business hours.",
  },
];

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    name: "Best International Movers & Logistics — Karachi",
    url: "https://bestintlmovers.com/movers-karachi",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: [
      "DHA Karachi",
      "Clifton",
      "Gulshan-e-Iqbal",
      "PECHS",
      "North Nazimabad",
      "Saddar",
      "Korangi",
      "Malir",
      "Gulistan-e-Johar",
      "North Karachi",
      "Karachi",
    ],
    description:
      "International movers in Karachi with direct sea freight from Karachi Port. Door-to-door moving to Dubai, UK, USA, Canada and 100+ countries.",
    priceRange: "PKR 75,000 – 950,000",
    openingHours: "Mo-Sa 08:00-20:00",
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
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com" },
      { "@type": "ListItem", position: 2, name: "Movers Karachi", item: "https://bestintlmovers.com/movers-karachi" },
    ],
  };
}

const MoversKarachi = () => {
  const seoConfig = {
    title: "Movers in Karachi | Packers & Movers Karachi | Best Intl Movers",
    description:
      "Best international movers in Karachi. Door-to-door moving to Dubai, UK, USA & 100+ countries direct from Karachi Port. Free survey. Call 0300-9130211.",
    keywords:
      "international movers Karachi, movers Karachi, packers movers Karachi, house shifting Karachi, cargo service Karachi, sea freight Karachi, movers and packers Karachi",
    canonicalUrl: "https://bestintlmovers.com/movers-karachi",
    ogTitle: "Movers in Karachi | Best Intl Movers & Logistics",
    ogDescription:
      "Pakistan's most trusted international movers in Karachi. Direct sea freight from Karachi Port to Dubai, UK, USA, Canada & 100+ countries. Free home survey.",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/movers-karachi"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildLocalBusinessSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Ship className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Direct from Karachi Port</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Movers in Karachi — Direct from Karachi Port
            </h1>

            <img
              src={heroImg}
              alt="International movers in Karachi — sea freight from Karachi Port"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Trusted by 1,200+ Karachi Families | DHA | Clifton | Gulshan | PECHS | Saddar | Direct Sea Freight | Free
              Home Survey
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
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
              >
                <Phone size={18} />
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Karachi&apos;s Most Trusted International Moving Company
              </h2>
              <p>
                Best International Movers &amp; Logistics is Karachi&apos;s preferred international moving partner —
                trusted by over 1,200 Karachi families and businesses for door-to-door relocation to 100+ countries.
                What makes our Karachi service uniquely powerful is our <strong className="text-gold">direct access to Karachi Port</strong> — Pakistan&apos;s largest seaport and the gateway for over 95% of the country&apos;s international cargo.
              </p>
              <p>
                Whether you are shifting from DHA Phase 1 to 8, Clifton, Gulshan-e-Iqbal, PECHS, North Nazimabad,
                Gulistan-e-Johar, Defence, Korangi, Landhi, Malir, or anywhere across Karachi — our team surveys your
                home, packs with export-grade materials, handles all customs documentation, and delivers door-to-door at
                your international destination.
              </p>
              <p>
                We have been serving Karachi since our company was founded and have built a dedicated operations team
                based in the city. Our Karachi staff understand the city&apos;s traffic, its port procedures, and its
                unique requirements for international relocation — so nothing surprises us.
              </p>
            </motion.div>

            {/* Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Karachi Areas &amp; Neighbourhoods We Cover
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Karachi operations team covers every corner of the city — from upscale coastal areas to busy
                commercial zones and residential outskirts.
              </p>
              <motion.div className="grid md:grid-cols-2 gap-4">
                {karachiZones.map((zone) => (
                  <div key={zone.title} className="p-4 rounded-lg bg-navy-light/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="text-gold shrink-0" size={18} />
                      {zone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{zone.areas}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Sea freight advantage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">
                Direct Sea Freight from Karachi Port — Our Biggest Advantage
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Karachi is home to <strong className="text-gold">Pakistan&apos;s largest and busiest seaport</strong> — Port Muhammad Bin Qasim and the Karachi International Container Terminal (KICT). Every international shipment that leaves Pakistan by sea passes through Karachi.
                </p>
                <p>
                  When a family in Islamabad or Lahore hires a mover, their goods must first travel by road to Karachi (18–22 hours), adding cost and transit risk. When you move with us from Karachi, your goods go <strong className="text-gold">directly from your door to the port</strong> — a 20-minute to 45-minute drive depending on your area.
                </p>
                <ul className="space-y-2">
                  {[
                    "Lower cost: No inland road freight surcharge to Karachi",
                    "Faster loading: Direct port-to-ship handling",
                    "Less handling: Fewer loading/unloading cycles = less damage risk",
                    "Better container options: Direct contracts with Maersk, MSC, Hapag-Lloyd, and Emirates Shipping",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  We consolidate LCL shipments every week from Karachi and offer FCL in 20ft and 40ft containers for larger household moves.
                </p>
                <p className="text-sm border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3">
                  For our sea freight pricing and container options from Karachi, see our{" "}
                  <Link to="/services/sea-freight/" className="text-gold hover:underline font-medium">
                    Sea Freight Pakistan guide →
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Routes table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                International Moving Routes from Karachi — Transit Times &amp; Estimates
              </h2>
              <motion.div className="overflow-x-auto glass-card rounded-2xl border border-border">
                <table className="w-full border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Sea Transit</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Air Transit</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Starting Cost (LCL)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routes.map((row, idx) => (
                      <tr key={row.destination} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">{row.destination}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.sea}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.air}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <p className="text-muted-foreground text-sm mt-4">
                *All costs are minimum LCL estimates for a small household shipment (1–3 CBM). Final quote after free home survey. Karachi-to-Dubai route benefits from direct weekly vessel calls — shortest transit in Pakistan.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Our Complete Moving Services in Karachi
              </h2>
              <div className="space-y-6">
                {services.map((svc) => (
                  <motion.div key={svc.title} className="flex gap-4 p-4 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <svc.icon className="text-gold" size={22} />
                    </div>
                    <motion.div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                      {svc.link && (
                        <p className="mt-2 text-sm">
                          <Link to={svc.link.to} className="text-gold hover:underline font-medium">
                            {svc.link.label}
                          </Link>
                        </p>
                      )}
                      {!svc.link && svc.title.includes("Sea Freight") && (
                        <p className="mt-2 text-sm">
                          <Link to="/services/sea-freight/" className="text-gold hover:underline font-medium">
                            View full sea freight details →
                          </Link>
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why choose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Choose Best International Movers in Karachi — vs Other Companies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="glass-card rounded-2xl p-6 border border-border">
                    <motion.div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <item.icon className="text-gold" size={24} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                How Our Karachi Moving Process Works
              </h2>
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <motion.div className="w-10 h-10 rounded-full bg-gold text-navy-dark font-bold flex items-center justify-center shrink-0">
                      {step.step}
                    </motion.div>
                    <motion.div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
              <p className="text-sm border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3 mt-8">
                To understand the full process in detail, visit our{" "}
                <Link to="/process" className="text-gold hover:underline font-medium">
                  How It Works page →
                </Link>
              </p>
            </motion.div>

            {/* Dubai route + mid CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Karachi to Dubai Movers — Our Most Popular Route
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  The Karachi to Dubai corridor is our single most active international moving route. Over 1.5 million Pakistanis live in the UAE, and Karachi has a direct weekly vessel call to Jebel Ali Port — sea transit is just <strong className="text-gold">6 to 10 days</strong>, the fastest international sea freight route from any Pakistani city.
                </p>
                <ul className="space-y-2">
                  {[
                    "Weekly LCL consolidations every Thursday from Karachi to Jebel Ali",
                    "FCL containers (20ft and 40ft) bookable with 3–5 days notice",
                    "Dubai partner handles customs at Jebel Ali and last-mile delivery across all Emirates",
                    "Emirates SkyCargo operates Karachi–Dubai daily for urgent next-day cargo",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  For costs, customs rules, and prohibited items, see our dedicated{" "}
                  <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline font-medium">
                    Pakistan to Dubai Movers page →
                  </Link>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Get Free Karachi Quote
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — Movers in Karachi
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Client Testimonials — Karachi International Moves
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="glass-card rounded-2xl p-6 border border-border">
                    <motion.div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="text-gold fill-gold" size={16} />
                      ))}
                    </motion.div>
                    <p className="text-muted-foreground text-sm italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-gold text-sm">{t.route}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Get Your Free Karachi Moving Quote Today
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Our survey team is available across all Karachi areas Monday to Saturday, 8:00 AM to 8:00 PM. We respond
                to all enquiries within 2 hours during business hours.
              </p>
              <div className="text-muted-foreground text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-foreground">Call / WhatsApp:</strong> 0300-9130211
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@bestintlmovers.com
                </p>
                <p>
                  <strong className="text-foreground">Survey Areas:</strong> All Karachi — DHA, Clifton, Gulshan, PECHS,
                  North Nazimabad, Saddar, Korangi, Malir &amp; surrounding areas
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Get Free Quote
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default MoversKarachi;
