import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Package,
  MessageCircle,
  Clock,
  Users,
  Star,
  Truck,
  Warehouse,
  Home,
  Building2,
  Ship,
  ClipboardList,
  Box,
  Tv,
  Gem,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const heroStats = [
  { value: "1,200+", label: "Karachi Moves Completed" },
  { value: "All Areas", label: "DHA to Surjani Town" },
  { value: "Free Survey", label: "No Obligation" },
  { value: "Same Day", label: "WhatsApp Response" },
];

const packingFeatures = [
  {
    icon: ClipboardList,
    title: "Pre-Move Inventory",
    desc: "Every item listed before packing — your packing list, customs document, and damage claim record. Most Karachi packers skip this. We never do.",
  },
  {
    icon: Box,
    title: "Material Quality — Export Grade for Every Move",
    desc: "Double-wall cartons, industrial stretch wrap, bubble wrap, foam corner guards, anti-scratch fleece, and desiccant packets for sea freight humidity.",
  },
  {
    icon: Package,
    title: "Systematic Room-by-Room Process",
    desc: "Each box labelled with room, item type, and fragility — faster unpacking and fewer lost items.",
  },
  {
    icon: Home,
    title: "Furniture Disassembly and Reassembly",
    desc: "Wardrobes, beds, dining tables, and L-shaped sofas — our tools, included in your quote.",
  },
  {
    icon: Tv,
    title: "Electronics Protection",
    desc: "Anti-static foam, bubble wrap, and double-wall cartons — no loose electronics or soft bags.",
  },
  {
    icon: Gem,
    title: "Special Handling — Antiques, Artwork, Chandeliers",
    desc: "Custom on-site wooden crates, foam-lined and sealed — museum-grade protection most Karachi movers cannot offer.",
  },
];

const services = [
  {
    icon: Home,
    title: "House Shifting in Karachi",
    desc: "Full-service house shifting — packing, loading, transport, unloading, unpacking. Flats to 5-bedroom bungalows. Same-day and next-day moves subject to capacity.",
  },
  {
    icon: Building2,
    title: "Office and Corporate Relocation Karachi",
    desc: "Evening and weekend moves to minimise downtime. Workstations, server racks, filing systems, and reception furniture with full inventory control.",
  },
  {
    icon: Ship,
    title: "International Packing and Cargo from Karachi",
    desc: "Export-grade packing for international customs at Karachi Port. See our International Movers Karachi page for sea freight details.",
    link: { to: "/movers-karachi", label: "International Movers Karachi page →" },
  },
  {
    icon: Truck,
    title: "Cargo Service Karachi — Domestic and International",
    desc: "Cargo-only from Karachi to Lahore, Islamabad, Quetta, and 100+ countries. Minimum 1 CBM, maximum unlimited.",
    link: { to: "/cargo-service-karachi", label: "Cargo Service Karachi page →" },
  },
  {
    icon: Warehouse,
    title: "Storage in Karachi",
    desc: "Climate-controlled, 24/7 CCTV warehouse from one week to twelve months — ideal when your new place or visa is not ready.",
  },
  {
    icon: Package,
    title: "Packing Only Service",
    desc: "Professional packing with all materials and itemised list — you arrange transport. Our most affordable option.",
  },
  {
    icon: Truck,
    title: "Vehicle Transport Karachi",
    desc: "Cars, SUVs, and motorcycles within Karachi and intercity via covered carriers. International via Karachi Port.",
    link: { to: "/services/vehicle-shipping-services", label: "vehicle shipping service →" },
  },
];

const karachiZones = [
  {
    title: "Defence Housing Authority (DHA)",
    areas:
      "DHA Phase 1–8 | Khayaban-e-Ittehad | Khayaban-e-Badar | Khayaban-e-Hafiz | Khy-e-Muslim | Defence View Apartments",
  },
  {
    title: "Clifton and Bath Island",
    areas: "Clifton Block 1–9 | Bath Island | Boat Basin | Creek Vista | Frere Town | Khayaban-e-Roomi",
  },
  {
    title: "Gulshan-e-Iqbal and Johar",
    areas: "Gulshan-e-Iqbal Block 1–13 | Gulistan-e-Johar Blocks 1–18 | Rashid Minhas Road | Johar Chowrangi",
  },
  {
    title: "PECHS and Shahrah-e-Faisal",
    areas: "PECHS Block A–G | Tariq Road | Shahrah-e-Faisal | KDA Officers Society | Bahadurabad",
  },
  {
    title: "North Nazimabad and North Karachi",
    areas: "North Nazimabad Blocks A–R | North Karachi Sectors 11A–14D | Nazimabad | Liaquatabad",
  },
  {
    title: "Central and Old Karachi",
    areas: "Saddar | Civil Lines | Soldier Bazaar | Lyari | Kharadar | Lee Market | Burns Road | M.A. Jinnah Road",
  },
  {
    title: "Korangi, Landhi and Industrial Zones",
    areas: "Korangi Township | Landhi | Bin Qasim | SITE Area | Shah Faisal Colony | Federal B Industrial Area",
  },
  {
    title: "Malir, Gadap and Super Highway",
    areas: "Malir City | Malir Cantonment | Gadap Town | Scheme 33 | Super Highway Housing | Taiser Town | Saadi Town",
  },
  {
    title: "Surjani Town and Orangi",
    areas: "Surjani Town | Orangi Town | New Karachi | Metroville | Banaras",
  },
];

const pricingRows = [
  { moveType: "1-bedroom flat — local Karachi shift", cost: "PKR 8,000 – 18,000" },
  { moveType: "2-bedroom flat — local Karachi shift", cost: "PKR 15,000 – 30,000" },
  { moveType: "3-bedroom house — local Karachi shift", cost: "PKR 25,000 – 50,000" },
  { moveType: "4–5 bedroom bungalow — local Karachi", cost: "PKR 45,000 – 90,000" },
  { moveType: "Office shift (small — up to 20 workstations)", cost: "PKR 20,000 – 45,000" },
  { moveType: "Packing only service (per day)", cost: "PKR 6,000 – 12,000" },
  { moveType: "Karachi to Lahore (road cargo)", cost: "PKR 18,000 – 55,000" },
  { moveType: "Karachi to Islamabad (road cargo)", cost: "PKR 22,000 – 65,000" },
  { moveType: "Karachi to Dubai (sea freight, LCL)", cost: "From PKR 75,000" },
  { moveType: "Karachi to UK (sea freight, LCL)", cost: "From PKR 160,000" },
];

const bookingSteps = [
  {
    step: "1",
    title: "Call or WhatsApp (Free)",
    desc: "Call 0300-9130211 or WhatsApp your pickup area, destination, and room count. We respond within 2 hours (Mon–Sat, 8 AM–8 PM).",
  },
  {
    step: "2",
    title: "Free Home Survey in Karachi",
    desc: "Surveyor visits within 24–48 hours, notes every item, photographs large pieces, and assesses lift and parking access — free, no obligation.",
  },
  {
    step: "3",
    title: "Written Fixed Quote",
    desc: "Within 24 hours: total cost, move date, crew size, vehicle type, and inclusions — all in writing.",
  },
  {
    step: "4",
    title: "Packing Day",
    desc: "Crew arrives with all materials, works room by room, labels every box, disassembles furniture. You only need to be present or designate a contact.",
  },
  {
    step: "5",
    title: "Loading and Transport",
    desc: "Trolleys and furniture sliders protect floors. Team lead supervises loading. Vehicle is sealed and departs to destination.",
  },
  {
    step: "6",
    title: "Unloading and Placement",
    desc: "Furniture placed per your direction, boxes unpacked if included, large items reassembled, packing materials removed.",
  },
  {
    step: "7",
    title: "Post-Move Follow-Up",
    desc: "Your coordinator calls after delivery to confirm everything arrived correctly.",
  },
];

const relocationPoints = [
  "Pre-Move Consultation — honest advice on what to ship vs sell, and destination restrictions",
  "Export Customs Documentation — packing list, commercial invoice, Form E, and special permits",
  "Prohibited Items Advisory — before packing day, not after destination customs",
  "Storage During Relocation — up to 30 days included when ship-out and move-out dates do not align",
  "Destination Agent Coordination — single tracking reference from Karachi to your new front door",
];

const whyChoose = [
  {
    icon: Users,
    title: "No Third-Party Handoffs",
    desc: "Our Karachi team is employed, trained, and accountable to us — not random day labour.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed Price Guarantee",
    desc: "Unexpected costs require your approval before we proceed — no inflated end-of-day invoices.",
  },
  {
    icon: Clock,
    title: "15+ Years Karachi Moving Experience",
    desc: "No lift, narrow gali, 10th floor without freight lift — we have done it all.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Shipments",
    desc: "Transit insurance for local moves; marine cargo all-risk for international relocations.",
  },
  {
    icon: MapPin,
    title: "Karachi-Specific Knowledge",
    desc: "Traffic patterns, port gates, and customs contacts — local knowledge that saves time and money.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Updates Throughout",
    desc: "Photo updates from packing start to destination arrival — you are never left wondering.",
  },
];

const testimonials = [
  {
    quote:
      "We moved from a 4-bedroom bungalow in DHA Phase 4 to a flat in Clifton. The team spent the entire day packing everything perfectly. The chandelier was wrapped in layers and crated. Nothing was damaged. Highly recommended.",
    name: "Nadia Hussain",
    route: "DHA Phase 4 → Clifton",
  },
  {
    quote:
      "I needed an office shift from SITE Area to Korangi on a Saturday. They sent 8 people and 2 vehicles, finished in 6 hours. By Monday everything was set up. Absolutely professional.",
    name: "Tariq Mehmood",
    route: "SITE → Korangi Industrial",
  },
  {
    quote:
      "We used them to send cargo from Karachi to Islamabad — furniture, appliances, and 30 boxes. Everything arrived in 2 days. Not even one glass broke.",
    name: "Rukhsana Akhtar",
    route: "Gulshan-e-Iqbal → Islamabad",
  },
  {
    quote:
      "Moving internationally from Karachi to Canada was my biggest worry. They handled packing, port, customs, everything. WhatsApp photos of our container at Karachi Port. Arrived in Toronto in 44 days exactly as quoted.",
    name: "Adeel Raza",
    route: "PECHS Karachi → Toronto, Canada",
  },
];

const faqs = [
  {
    q: "How much do packers and movers cost in Karachi?",
    a: "Local 1–2 bedroom flat: PKR 8,000–30,000. Larger house: PKR 25,000–90,000. International from PKR 75,000 (Dubai LCL). Book a free 30-minute home survey for an accurate price.",
  },
  {
    q: "Do you cover all areas of Karachi?",
    a: "Yes — DHA all phases, Clifton, Gulshan-e-Iqbal, Gulistan-e-Johar, PECHS, North Nazimabad, North Karachi, Saddar, Korangi, Landhi, Malir, Surjani Town, Orangi Town, and Super Highway schemes.",
  },
  {
    q: "How far in advance should I book packers and movers in Karachi?",
    a: "Local shifts: 5–7 days ideal. International: 2–3 weeks for vessel slots. Peak months (May–August, December) book earlier.",
  },
  {
    q: "Do you provide packing materials or do I need to buy them?",
    a: "We provide everything — boxes, tape, bubble wrap, stretch wrap, foam pads, wooden crates — all included in your quote.",
  },
  {
    q: "Can I get a quote without a home survey?",
    a: "We can give a rough ballpark by phone, but binding quotes require a survey — volume and access vary greatly between homes.",
  },
  {
    q: "Do you disassemble and reassemble furniture?",
    a: "Yes — wardrobes, beds, dining tables, bunk beds, L-shaped sofas, and modular kitchens. Included at no extra charge.",
  },
  {
    q: "How do you protect TVs and electronics during shifting?",
    a: "Anti-static foam, bubble wrap, double-wall cartons, and TV-specific boxes with foam inserts. No soft bags or unwrapped electronics.",
  },
  {
    q: "Do you offer cargo service from Karachi to other cities?",
    a: "Yes — regular cargo to Lahore, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad. Delivery typically 24–72 hours.",
  },
  {
    q: "What is the difference between your /movers-karachi page and this page?",
    a: "Our International Movers Karachi page focuses on international moving and sea freight via Karachi Port. This page covers packing, shifting, cargo, and relocation — domestic and international.",
    link: true,
  },
  {
    q: "How do I start?",
    a: "Call or WhatsApp 0300-9130211, or use our Contact page quote form. We reply within 2 hours Monday to Saturday, 8 AM to 8 PM.",
  },
];

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    name: "Best International Movers & Logistics — Packers and Movers Karachi",
    url: "https://bestintlmovers.com/packers-and-movers-karachi",
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
      "Surjani Town",
      "Orangi Town",
      "Landhi",
      "Karachi",
    ],
    description:
      "Professional packers and movers in Karachi for house shifting, office relocation, cargo service and international moving. All Karachi areas covered.",
    priceRange: "PKR 8,000 – 950,000",
    openingHours: "Mo-Sa 08:00-20:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Karachi Moving Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Shifting Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocation Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cargo Service Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Moving Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packing Service Karachi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storage Karachi" } },
      ],
    },
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
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.link
          ? "Our International Movers Karachi page focuses on international moving and sea freight. This page covers packing, shifting, cargo, and relocation within and from Karachi."
          : faq.a,
      },
    })),
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Packers and Movers Karachi",
        item: "https://bestintlmovers.com/packers-and-movers-karachi",
      },
    ],
  };
}

const PackersAndMoversKarachi = () => {
  const seoConfig = {
    title: "Packers and Movers Karachi | Best Packing & Relocation Service",
    description:
      "Trusted packers and movers in Karachi for house shifting, office relocation & international cargo. Expert packing, safe transport. Free survey. 0300-9130211.",
    keywords:
      "packers and movers Karachi, packers movers Karachi, house shifting Karachi, cargo service Karachi, relocation Karachi, office shifting Karachi, packing service Karachi, movers packers Karachi, ghar shifting Karachi, goods transport Karachi",
    canonicalUrl: "https://bestintlmovers.com/packers-and-movers-karachi",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/packers-and-movers-karachi"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildLocalBusinessSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">House Shifting &amp; Cargo Karachi</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Packers and Movers in Karachi — Professional Packing, Safe Shifting
            </h1>

            <img
              src="/images/freight-forwarding.png"
              alt="Packers and movers in Karachi — professional packing and house shifting"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              House Shifting | Office Relocation | Cargo Service | International Moving | DHA | Clifton | Gulshan |
              PECHS | All Karachi Areas | Free Home Survey
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

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Best Packers and Movers in Karachi — Trusted Since 15 Years
              </h2>
              <p>
                Finding reliable packers and movers in Karachi is one of the biggest challenges families and businesses
                face when planning a shift. With over 15 years of moving experience and 1,200+ completed moves from
                Karachi, Best International Movers &amp; Logistics has built a reputation that no newcomer can replicate
                overnight.
              </p>
              <p>
                Our Karachi packing and moving team is dedicated, trained, and based locally — full-time trained packers
                who know how to handle furniture, electronics, crockery, artwork, gym equipment, and every type of
                household item. We serve every area of Karachi with one standard: professional, careful, and on time.
              </p>
              <p>
                Whether you are shifting from DHA Phase 5 to Gulshan-e-Iqbal, relocating your office from I.I.
                Chundrigar Road to Clifton, or shipping household goods internationally from Karachi Port — we handle
                all of it under one roof, one point of contact, and one fixed price.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                What Makes Our Packing Service Different in Karachi
              </h2>
              <p className="text-muted-foreground mb-8">
                The word &ldquo;packers&rdquo; is in dozens of company names in Karachi — but packing quality varies
                enormously. Here is what our Karachi packing team does that most competitors skip:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {packingFeatures.map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-navy-light/20 border border-border">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                      <item.icon className="text-gold" size={22} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Our Complete Packing and Moving Services in Karachi
              </h2>
              <div className="space-y-6">
                {services.map((svc) => (
                  <div key={svc.title} className="flex gap-4 p-4 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <motion.div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <svc.icon className="text-gold" size={22} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                      {svc.link && (
                        <p className="mt-2 text-sm">
                          <Link to={svc.link.to} className="text-gold hover:underline font-medium">
                            {svc.link.label}
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Karachi Neighbourhoods and Areas We Cover
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Karachi packing and moving teams operate across the entire city. If yours is not listed, call us and
                we will confirm availability:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {karachiZones.map((zone) => (
                  <div key={zone.title} className="p-4 rounded-lg bg-navy-light/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="text-gold shrink-0" size={18} />
                      {zone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{zone.areas}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Packers and Movers Karachi — Pricing Guide 2025
              </h2>
              <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
                After a free home survey, we give you a written fixed price. The table below gives starting estimates —
                your exact price depends on volume, floor, access, and destination.
              </p>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border">
                <table className="w-full border-collapse min-w-[480px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Move Type
                      </th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">
                        Approximate Starting Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingRows.map((row, idx) => (
                      <tr key={row.moveType} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 text-foreground">{row.moveType}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                *All prices are starting estimates. Final price confirmed after free home survey. Includes labour,
                materials, transport, and loading/unloading. No hidden charges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                How to Book Packers and Movers in Karachi — Step by Step
              </h2>
              <div className="space-y-6">
                {bookingSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold text-navy-dark font-bold flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3 mt-8">
                For a full visual breakdown, visit our{" "}
                <Link to="/process" className="text-gold hover:underline font-medium">
                  How It Works page →
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Cargo Service Karachi — Sending Goods Locally and Internationally
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Domestic Cargo from Karachi</h3>
                  <p>
                    Regular cargo to Lahore, Islamabad, Rawalpindi, Peshawar, Quetta, Multan, and Faisalabad in covered
                    trucks with GPS tracking. Delivery: 24–48 hours for Lahore/Islamabad, 48–72 hours for other cities.
                    Minimum: 50 kg or 0.5 CBM.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">International Cargo from Karachi Port</h3>
                  <p>
                    LCL and FCL shipping to 100+ countries. Weekly consolidations every Thursday. LCL best for 1–5 CBM;
                    FCL 20ft/40ft for full household moves. Air cargo from Jinnah International Airport (KHI) for urgent
                    3–5 day delivery at higher cost.
                  </p>
                </div>
                <p className="text-sm border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3">
                  For full cargo rates, FCL/LCL options, and air freight from KHI, see our{" "}
                  <Link to="/cargo-service-karachi" className="text-gold hover:underline font-medium">
                    Cargo Service Karachi page →
                  </Link>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Relocation Services Karachi — Beyond Just Moving Boxes
              </h2>
              <p className="text-muted-foreground mb-6">
                International relocation from Karachi involves months of planning, documentation, and two-country
                coordination. Our relocation service goes beyond packing and transport:
              </p>
              <ul className="space-y-3">
                {relocationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Karachi Families Choose Best International Movers
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whyChoose.map((item) => (
                  <div key={item.title} className="glass-card rounded-2xl p-6 border border-border">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <item.icon className="text-gold" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — Packers and Movers Karachi
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    {faq.link ? (
                      <p className="text-muted-foreground leading-relaxed">
                        Our{" "}
                        <Link to="/movers-karachi" className="text-gold hover:underline font-medium">
                          International Movers Karachi page
                        </Link>{" "}
                        focuses specifically on international moving and sea freight via Karachi Port. This page covers
                        the full range of packing, moving, shifting, cargo, and relocation services within and from
                        Karachi — both domestic and international.
                      </p>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.a.includes("Contact page") ? (
                          <>
                            Call or WhatsApp 0300-9130211, or use our{" "}
                            <Link to="/contact" className="text-gold hover:underline">
                              Contact page
                            </Link>{" "}
                            quote form. We reply within 2 hours Monday to Saturday, 8 AM to 8 PM.
                          </>
                        ) : (
                          faq.a
                        )}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Client Reviews — Packers and Movers Karachi
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="glass-card rounded-2xl p-6 border border-border">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="text-gold fill-gold" size={16} />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-gold text-sm">{t.route}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Ready to Book Packers and Movers in Karachi?
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Call us, WhatsApp us, or fill in the quote form — free home survey within 24–48 hours anywhere in
                Karachi.
              </p>
              <motion.div className="text-muted-foreground text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-foreground">Call / WhatsApp:</strong> 0300-9130211
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@bestintlmovers.com
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday to Saturday, 8:00 AM – 8:00 PM | Sunday:
                  Emergency only
                </p>
                <p>
                  <strong className="text-foreground">Survey Coverage:</strong> DHA, Clifton, Gulshan, PECHS, North
                  Nazimabad, Saddar, Korangi, Malir, Surjani &amp; beyond
                </p>
              </motion.div>
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

export default PackersAndMoversKarachi;
