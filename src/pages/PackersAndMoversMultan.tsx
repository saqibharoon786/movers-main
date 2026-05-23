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
  Truck,
  Warehouse,
  Home,
  Building2,
  Ship,
  Plane,
  Globe,
  FileCheck,
  Car,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const heroStats = [
  { value: "300+", label: "Multan Moves Completed" },
  { value: "All Areas", label: "DHA, Bosan Road & More" },
  { value: "Local + Intl", label: "Full Service Coverage" },
  { value: "Free Survey", label: "Home Visit in Multan" },
];

const packingMaterials = [
  "Double-wall corrugated export cartons in five standard sizes",
  "Multi-layer bubble wrap for electronics, glassware, and fragile items",
  "Heavy-duty foam padding for appliances and furniture surfaces",
  "Stretch film wrapping for sofas, mattresses, and upholstered pieces",
  "Corner and edge protectors for wooden furniture and wall units",
  "Custom timber crates for mirrors, paintings, and high-value antiques",
];

const services = [
  {
    icon: Package,
    title: "Professional Packing Services in Multan",
    desc: "Room-by-room packing with export-grade materials, numbered cartons, and a master inventory for customs and insurance.",
  },
  {
    icon: Home,
    title: "House Shifting in Multan — Local Moves",
    desc: "Full local house shifting with access assessment, proper loading equipment, and trained crews for studios to DHA villas.",
  },
  {
    icon: Home,
    title: "Home Shifting Multan — Complete Household Relocation",
    desc: "Packing, disassembly, protection, loading, transport, unloading, and reassembly — you supervise; we handle everything.",
  },
  {
    icon: Building2,
    title: "Office Shifting in Multan — Commercial Relocation",
    desc: "IT equipment, server rooms, archives, and modular furniture — after-hours and weekend office shifts available.",
  },
  {
    icon: Truck,
    title: "Intercity Moving from Multan — All Pakistan",
    desc: "Enclosed, padded trucks with GPS to Lahore, Islamabad, Karachi, Peshawar, Faisalabad, and Quetta — no third-party handoffs.",
  },
  {
    icon: Globe,
    title: "International Moving from Multan — Full Door-to-Door",
    desc: "Packing at your Multan address through customs, sea or air freight, and delivery abroad in 100+ countries.",
    link: { to: "/movers-multan/", label: "International movers Multan →" },
  },
  {
    icon: Ship,
    title: "Sea Freight from Multan — via Karachi Port",
    desc: "FCL for large homes; LCL for smaller volumes. Goods collected in Multan and shipped from Karachi Port or Port Qasim.",
    link: { to: "/services/sea-freight-services/", label: "Sea freight services →" },
  },
  {
    icon: Plane,
    title: "Air Freight from Multan",
    desc: "MUX for Gulf routes; Lahore (LHE) for worldwide. Dubai 3–4 days; UK 5–6 days; Canada 6–8 days.",
    link: { to: "/services/air-freight/", label: "Air freight services →" },
  },
  {
    icon: Package,
    title: "Furniture Packing in Multan — White Glove Standard",
    desc: "Disassembly, multi-layer padding, custom crating for antiques and artwork, and numbered reassembly labels.",
  },
  {
    icon: Truck,
    title: "Goods Transport in Multan & Pakistan",
    desc: "Standalone freight for warehouses, stores, and factories — single or multi-vehicle, intra-city and intercity.",
  },
  {
    icon: Car,
    title: "Vehicle Shifting in Multan",
    desc: "Cars, SUVs, and motorcycles within Multan, intercity, or international export via Karachi Port.",
    link: { to: "/services/vehicle-shipping-services/", label: "Vehicle shipping →" },
  },
  {
    icon: Warehouse,
    title: "Secure Storage in Multan",
    desc: "Monitored, dry, insured storage when your new address or international shipment is not ready yet.",
    link: { to: "/services/secure-storage-services/", label: "Secure storage →" },
  },
  {
    icon: FileCheck,
    title: "Pakistan Customs Clearance for International Moves",
    desc: "Export packing lists, certificates of origin, port NOCs, and destination import coordination worldwide.",
    link: { to: "/services/customs-clearance/", label: "Customs clearance →" },
  },
];

const intercityRoutes = [
  { route: "Multan to Lahore", time: "3–4 hours" },
  { route: "Multan to Islamabad / Rawalpindi", time: "5–6 hours" },
  { route: "Multan to Karachi", time: "10–12 hours" },
  { route: "Multan to Peshawar", time: "8–9 hours" },
  { route: "Multan to Faisalabad", time: "2–3 hours" },
  { route: "Multan to Quetta", time: "8–9 hours" },
];

const multanZones = [
  {
    title: "DHA Multan",
    areas:
      "DHA Multan Phase 1 | DHA Multan Phase 2 | DHA Multan Sector A–P | DHA Multan Commercial Areas",
  },
  {
    title: "Established Residential Colonies",
    areas:
      "Gulgasht Colony | Shah Rukn-e-Alam Colony | Nishtar Colony | Qasim Bela | Kumharanwala | Cantt Area | Saddar Multan | Cantonment Board Area",
  },
  {
    title: "New Housing Schemes",
    areas:
      "City Housing Scheme | City Housing Scheme 2 | Bahauddin Zakariya Town | Wapda Town | Askari Housing Scheme | Al-Rehman Garden | Multan Enclave | New Multan | Green Fort Housing",
  },
  {
    title: "Commercial & Business Districts",
    areas: "Hussain Agahi | Katchery Road | LMQ Road | Abdali Road | Vehari Road | Bosan Road Commercial | Khanewal Road",
  },
  {
    title: "Surrounding Areas Served",
    areas: "Khanewal | Sahiwal | Lodhran | Muzaffargarh | Dera Ghazi Khan (on request) | Bahawalpur (on request)",
  },
];

const localPricingRows = [
  { size: "1-Bedroom", multan: "PKR 16,000–28,000", lahore: "PKR 42,000–60,000", islamabad: "PKR 58,000–78,000", karachi: "PKR 85,000–110,000" },
  { size: "2-Bedroom", multan: "PKR 26,000–42,000", lahore: "PKR 60,000–85,000", islamabad: "PKR 78,000–105,000", karachi: "PKR 110,000–145,000" },
  { size: "3-Bedroom", multan: "PKR 38,000–60,000", lahore: "PKR 85,000–125,000", islamabad: "PKR 105,000–145,000", karachi: "PKR 145,000–185,000" },
  { size: "4–5 Bedroom Villa", multan: "PKR 58,000–95,000", lahore: "PKR 125,000–175,000", islamabad: "PKR 145,000–195,000", karachi: "PKR 185,000–240,000" },
];

const intlPricingRows = [
  { destination: "Multan to Dubai", sea: "12–18 days", air: "3–4 days", cost: "From PKR 88,000" },
  { destination: "Multan to Saudi Arabia", sea: "16–22 days", air: "3–5 days", cost: "From PKR 98,000" },
  { destination: "Multan to UK", sea: "27–34 days", air: "5–6 days", cost: "From PKR 172,000" },
  { destination: "Multan to Canada", sea: "36–46 days", air: "6–8 days", cost: "From PKR 192,000" },
  { destination: "Multan to USA", sea: "38–52 days", air: "6–9 days", cost: "From PKR 202,000" },
  { destination: "Multan to Qatar", sea: "14–20 days", air: "3–5 days", cost: "From PKR 92,000" },
  { destination: "Multan to Kuwait", sea: "14–20 days", air: "3–5 days", cost: "From PKR 94,000" },
  { destination: "Multan to Australia", sea: "28–38 days", air: "5–7 days", cost: "From PKR 182,000" },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "We Are Operators, Not Brokers",
    desc: "Our own trained, uniformed crew comes to your Multan address — no subcontracting to unvetted local companies.",
  },
  {
    icon: Clock,
    title: "Free Home Survey — Fixed Quote in 24 Hours",
    desc: "Itemised written quote after a free survey at both addresses. The quoted price is fixed — no additions on moving day.",
  },
  {
    icon: Users,
    title: "Dedicated Move Coordinator",
    desc: "One coordinator from booking through delivery — available on WhatsApp throughout your move.",
  },
  {
    icon: Globe,
    title: "15+ Years — 5,000+ Completed Moves",
    desc: "Experience with DHA access, old Multan streets, and last-minute international departures.",
  },
  {
    icon: Package,
    title: "Export-Grade Packing — Every Move",
    desc: "Same cartons and materials for a local Multan shift as for an international container.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent, Competitive Pricing",
    desc: "Packing, labour, vehicle, transport, and freight listed separately — no surprise charges after loading.",
  },
  {
    icon: Truck,
    title: "GPS Tracking on Intercity Vehicles",
    desc: "GPS on long-haul trucks; container and sailing details for international shipments.",
  },
  {
    icon: ShieldCheck,
    title: "Full Insurance Options",
    desc: "Marine cargo insurance internationally; goods-in-transit coverage for domestic moves.",
  },
];

const whoWeMove = [
  {
    icon: Home,
    title: "Families Shifting Homes within Multan",
    desc: "Full household packing and reassembly — upgrades to DHA Multan, new schemes, or downsizing.",
  },
  {
    icon: Globe,
    title: "Families Relocating Internationally",
    desc: "Gulf, UK, Canada, and Australia — sea or air freight, customs, and door delivery abroad.",
  },
  {
    icon: Briefcase,
    title: "Professionals Transferring to Another City",
    desc: "Intercity house shifting to Lahore, Islamabad, Karachi, and other cities for employment.",
  },
  {
    icon: Building2,
    title: "Business & Office Relocations",
    desc: "IT, furniture, files, and machinery — low-downtime office shifts within Multan or intercity.",
  },
  {
    icon: GraduationCap,
    title: "Students Going Abroad",
    desc: "Affordable, tracked student shipping for personal effects to UK, Canada, Australia, and USA.",
  },
  {
    icon: Package,
    title: "People Returning to Multan from Abroad",
    desc: "Inbound sea or air freight, Pakistan customs clearance, and delivery to your Multan address.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Contact Us & Request a Free Survey",
    desc: "Call 0300-9130211, WhatsApp, or use our quote form. We schedule a free home survey at your convenience.",
  },
  {
    step: "2",
    title: "Free Home Survey at Your Multan Address",
    desc: "30–60 minute walk-through: fragile items, access, and volume measurement — no obligation.",
  },
  {
    step: "3",
    title: "Written Quote Within 24 Hours",
    desc: "Fully itemised quote — packing, materials, vehicle, transport, freight, and documentation.",
  },
  {
    step: "4",
    title: "Booking Confirmation & Move Scheduling",
    desc: "Packing date confirmed; coordinator assigned; international container or air booking initiated.",
  },
  {
    step: "5",
    title: "Packing Day at Your Multan Address",
    desc: "Room-by-room packing, numbered cartons, master inventory, furniture disassembly where required.",
  },
  {
    step: "6",
    title: "Loading & Transport",
    desc: "Local delivery in Multan; intercity on padded trucks; international to staging then port or airport.",
  },
  {
    step: "7",
    title: "Export Documentation (International Moves)",
    desc: "Pakistan export customs; containers to Karachi Port; air cargo at MUX or Lahore.",
  },
  {
    step: "8",
    title: "Transit & Tracking",
    desc: "Bill of Lading, Air Waybill, or GPS updates — coordinator available throughout.",
  },
  {
    step: "9",
    title: "Delivery & Completion",
    desc: "Door delivery in Multan, another Pakistani city, or abroad — unpacking available on request.",
  },
];

const faqs = [
  {
    q: "How much do packers and movers in Multan cost for a local house shift?",
    a: "Local house shifting within Multan starts from approximately PKR 16,000 for a studio or small 1-bedroom and ranges to PKR 95,000+ for a large 4–5 bedroom villa. A free home survey gives the most accurate fixed price.",
  },
  {
    q: "Are you actually based in Multan or do you subcontract locally?",
    a: "We send our own trained, uniformed packing crew directly to your Multan address — we do not subcontract your job to a local company. Your move is managed by Best International Movers & Logistics from survey to final delivery.",
  },
  {
    q: "Can you handle an intercity move from Multan to Lahore or Islamabad?",
    a: "Yes. Multan to Lahore, Islamabad, Rawalpindi, Karachi, Peshawar, and Faisalabad are standard routes with enclosed, GPS-tracked trucks. Lahore is approximately 3–4 hours; Islamabad 5–6 hours.",
  },
  {
    q: "Do you cover DHA Multan Phase 1 and Phase 2 for packing and collection?",
    a: "Yes. DHA Multan across all phases and sectors is within our standard service area, including gated entry and building access procedures.",
  },
  {
    q: "How does goods transport from Multan to Karachi Port work for international shipping?",
    a: "Packed goods travel from Multan to Karachi Port or Port Qasim (approximately 8–9 hours), then FCL or LCL loading, Pakistan Customs clearance, and vessel departure to your destination.",
  },
  {
    q: "How long does it take to ship from Multan to Dubai by sea?",
    a: "Sea freight from Karachi to Jebel Ali takes approximately 12–18 days after loading. Multan to port adds 1–2 days. Total door-to-door from Multan by sea is typically 15–22 days from packing date.",
  },
  {
    q: "Can you pack and ship a car from Multan internationally?",
    a: "Yes. We collect from Multan, transport to Karachi Port, and export by RO-RO or container with documentation, port booking, marine insurance, and destination import guidance.",
  },
  {
    q: "Do you offer packing-only services in Multan without transport?",
    a: "Yes. Our crew can pack at your Multan address with all materials and inventory; you arrange onward transport. Contact us to discuss this option.",
  },
  {
    q: "How do I get a fixed price for moving from Multan?",
    a: "Request a free home survey — call or WhatsApp 0300-9130211 or use our Contact page quote form for a fully itemised fixed written quote within 24 hours.",
    contactLink: true,
  },
  {
    q: "Which areas of Multan do you cover?",
    a: "We cover all of Multan — DHA, Gulgasht, Shah Rukn-e-Alam, Nishtar Colony, City Housing, Wapda Town, Al-Rehman Garden, Bosan Road, Saddar, Cantt, Hussain Agahi, and surrounding Khanewal, Sahiwal, Lodhran, and Muzaffargarh on request.",
  },
  {
    q: "What is the difference between this page and your International Movers Multan page?",
    a: "",
    moversLink: true,
  },
];

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    name: "Best International Movers & Logistics — Packers and Movers Multan",
    description:
      "Professional packers and movers in Multan for local house shifting, intercity moves to Lahore, Islamabad and Karachi, and international relocation to UAE, UK, Canada and 100+ countries.",
    url: "https://bestintlmovers.com/packers-and-movers-multan",
    telephone: "+923009130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Multan",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: [
      "DHA Multan",
      "Gulgasht Colony",
      "Bosan Road",
      "City Housing Multan",
      "Shah Rukn-e-Alam Colony",
      "Multan",
    ],
    openingHours: "Mo-Sa 08:00-20:00",
    priceRange: "PKR 16,000+",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Packing and Moving Services Multan",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Shifting Multan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocation Multan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intercity Moving from Multan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Moving Multan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sea Freight Multan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Freight Multan" } },
      ],
    },
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
        text: faq.moversLink
          ? "Our International Movers Multan page focuses on overseas and sea freight. This page covers local house shifting, office relocation, intercity moves, and full packing services in Multan."
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
        name: "Packers and Movers Multan",
        item: "https://bestintlmovers.com/packers-and-movers-multan",
      },
    ],
  };
}

const PackersAndMoversMultan = () => {
  const seo = {
    title: "Packers and Movers Multan | Local & Intl Shifting",
    description:
      "Best packers and movers in Multan for local house shifting, intercity moves & international relocation. DHA, Bosan Road, City Housing covered. Call 0300-9130211.",
    keywords:
      "packers and movers Multan, house shifting Multan, home shifting Multan, office shifting Multan, movers and packers Multan, intercity movers Multan, international packers Multan, furniture packing Multan, sea freight Multan, air freight Multan, DHA Multan packers, cargo service Multan, Multan to Dubai movers, Multan to Lahore movers",
    canonicalUrl: "https://bestintlmovers.com/packers-and-movers-multan",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        urlPath="/packers-and-movers-multan"
        canonicalUrl={seo.canonicalUrl}
        schema={[buildLocalBusinessSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Package className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Packers &amp; Movers Multan</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Packers and Movers in Multan — Local, Intercity &amp; International Relocation
            </h1>

            <img
              src="/images/freight-forwarding.png"
              alt="Packers and movers in Multan — professional house shifting and packing"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
              width={1200}
              height={675}
              loading="eager"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Multan&apos;s Most Trusted Packing &amp; Moving Company | DHA, Bosan Road, Gulgasht, City Housing &amp; All
              Areas | Local, Intercity &amp; Overseas Moves | Free Home Survey
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
          </div>
        </motion.div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed space-y-4 mb-16"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Multan&apos;s Most Reliable Packers and Movers — From House Shifting to International Relocation
              </h2>
              <p>
                Multan — Pakistan&apos;s City of Saints and one of the oldest cities in South Asia — is home to hundreds of
                thousands of families, a growing number of modern housing schemes, and a large community of professionals
                who relocate domestically and internationally every year. Finding professional, accountable{" "}
                <strong className="text-foreground">packers and movers in Multan</strong> is one of the most important
                decisions you will make before any relocation — because the quality of your packing and moving company
                directly determines whether your belongings arrive safely, on time, and without hidden costs.
              </p>
              <p>
                Best International Movers &amp; Logistics brings over 15 years of professional packing and moving
                experience directly to Multan clients. We are not an agent or a local subcontractor. We are a fully
                operational moving company with trained packing crews, our own fleet of vehicles, in-house customs and
                freight documentation teams, and dedicated move coordinators who manage your relocation from the first
                call to the final delivery — whether that delivery is across Multan, in another Pakistani city, or at
                your new home abroad.
              </p>
              <p>
                Our Multan service covers everything — professional{" "}
                <strong className="text-foreground">house shifting Multan</strong> within the city, intercity
                relocations to Lahore, Islamabad, Karachi, and Peshawar, and complete international door-to-door moves to
                Dubai, Saudi Arabia, the UK, Canada, Australia, and 100+ other destinations. All moves start with a free
                home survey at your Multan address and a fixed written quote within 24 hours. No surprises, no
                subcontracting, no compromise on quality.
              </p>
              <p>
                Whether you are a family upgrading from Gulgasht Colony to DHA Multan, a professional transferring to
                Islamabad for a new role, or a family relocating overseas after an immigration approval, our team is ready
                to make your move smooth, safe, and completely stress-free.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Complete Packing &amp; Moving Services in Multan
              </h2>
              <p className="text-muted-foreground mb-6">
                Proper packing is the foundation of every successful move. Our Multan packing teams use export-grade
                materials and a structured, room-by-room system:
              </p>
              <ul className="space-y-2 mb-8">
                {packingMaterials.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mb-8">
                Every carton is numbered, itemised, and recorded on a master packing list — your customs declaration for
                international shipments and your insurance document for all moves.
              </p>
              <div className="space-y-6">
                {services.map((svc) => (
                  <div key={svc.title} className="flex gap-4 p-4 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <svc.icon className="text-gold" size={22} />
                    </div>
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
              <div className="mt-8 p-4 rounded-lg bg-navy-light/20 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Intercity Routes from Multan</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {intercityRoutes.map((r) => (
                    <p key={r.route} className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{r.route}</strong> — {r.time}
                    </p>
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Multan Areas &amp; Housing Schemes We Cover — Complete City Coverage
              </h2>
              <p className="text-muted-foreground mb-6">
                Our packers and movers in Multan operate across the entire city and all major housing schemes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {multanZones.map((zone) => (
                  <div key={zone.title} className="p-4 rounded-lg bg-navy-light/20 border border-border">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <MapPin className="text-gold shrink-0" size={18} />
                      {zone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{zone.areas}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 border-l-4 border-gold pl-4">
                Not sure if we cover your location? Call 0300-9130211 — if you are in or near Multan, we will reach you.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Packing &amp; Moving Rates in Multan — Estimated Costs
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-4">Local House Shifting in Multan</h3>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-10">
                <table className="w-full border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-3 py-3 text-left font-semibold text-foreground text-sm">
                        Move Size
                      </th>
                      <th className="border border-border px-3 py-3 text-left font-semibold text-foreground text-sm">
                        Within Multan
                      </th>
                      <th className="border border-border px-3 py-3 text-left font-semibold text-foreground text-sm">
                        Multan to Lahore
                      </th>
                      <th className="border border-border px-3 py-3 text-left font-semibold text-foreground text-sm">
                        Multan to Islamabad
                      </th>
                      <th className="border border-border px-3 py-3 text-left font-semibold text-foreground text-sm">
                        Multan to Karachi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {localPricingRows.map((row, idx) => (
                      <tr key={row.size} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-3 py-3 text-foreground text-sm">{row.size}</td>
                        <td className="border border-border px-3 py-3 text-gold font-semibold text-sm">{row.multan}</td>
                        <td className="border border-border px-3 py-3 text-muted-foreground text-sm">{row.lahore}</td>
                        <td className="border border-border px-3 py-3 text-muted-foreground text-sm">{row.islamabad}</td>
                        <td className="border border-border px-3 py-3 text-muted-foreground text-sm">{row.karachi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                International Moving from Multan — Sea Freight LCL Starting Costs
              </h3>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border">
                <table className="w-full border-collapse min-w-[520px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Sea Transit</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Air Transit</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Starting Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {intlPricingRows.map((row, idx) => (
                      <tr key={row.destination} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 text-foreground">{row.destination}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.sea}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground">{row.air}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                *All rates are indicative estimates only. Final price confirmed after free home survey based on actual
                volume, packing requirements, floor level, access, and destination. International LCL rates are minimum
                estimates for a standard 1-bedroom volume.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Multan Families &amp; Businesses Choose Best International Movers
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
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Who Uses Our Packers &amp; Movers in Multan
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {whoWeMove.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                How Our Packers &amp; Movers Process Works in Multan
              </h2>
              <div className="space-y-6">
                {processSteps.map((step) => (
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
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12 space-y-6 text-muted-foreground leading-relaxed"
            >
              <h2 className="text-3xl font-display font-bold text-foreground">
                Explore More from Best International Movers &amp; Logistics
              </h2>
              <p>
                <strong className="text-foreground">Moving from Multan to Saudi Arabia or the UAE?</strong> The Gulf —
                particularly Saudi Arabia and the UAE — is the most common international destination for Multan families
                and workers. See our{" "}
                <Link to="/pakistan-to-saudi-arabia-movers" className="text-gold hover:underline font-medium">
                  Pakistan to Saudi Arabia movers
                </Link>{" "}
                page for sea freight transit times, air freight via Multan Airport, and Saudi customs documentation. For
                UAE-bound moves, see our{" "}
                <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline font-medium">
                  Pakistan to Dubai movers
                </Link>{" "}
                page for route-specific detail.
              </p>
              <p>
                <strong className="text-foreground">HR manager or employer handling employee relocation from Multan?</strong>{" "}
                See our{" "}
                <Link to="/corporate-relocation-pakistan" className="text-gold hover:underline font-medium">
                  corporate relocation Pakistan
                </Link>{" "}
                page for business relocation, pre-agreed rate cards, and end-to-end employee moves.
              </p>
              <p>
                <strong className="text-foreground">Estimate Pakistan customs duties on personal goods?</strong> Use our
                free{" "}
                <Link to="/custom-duty-calculator" className="text-gold hover:underline font-medium">
                  Pakistan customs duty calculator
                </Link>{" "}
                before your shipment arrives at port.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — Packers &amp; Movers in Multan
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    {faq.moversLink ? (
                      <p className="text-muted-foreground leading-relaxed">
                        Our{" "}
                        <Link to="/movers-multan/" className="text-gold hover:underline font-medium">
                          International Movers Multan page
                        </Link>{" "}
                        focuses on overseas relocation and sea freight. This page covers local house shifting, office
                        relocation, intercity moves, furniture packing, and full packing services in Multan — domestic and
                        international.
                      </p>
                    ) : faq.contactLink ? (
                      <p className="text-muted-foreground leading-relaxed">
                        Request a free home survey — call or WhatsApp 0300-9130211 or use our{" "}
                        <Link to="/contact" className="text-gold hover:underline">
                          Contact page
                        </Link>{" "}
                        quote form for a fully itemised fixed written quote within 24 hours.
                      </p>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Get a Free Quote from Multan&apos;s Most Trusted Packers &amp; Movers
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Ready to move? Our Multan team will schedule a free home survey and provide a detailed, fixed written
                quote within 24 hours — within Multan, to another Pakistani city, or internationally. No obligation. No
                upfront payment.
              </p>
              <div className="text-muted-foreground text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-foreground">Call / WhatsApp:</strong> 0300-9130211
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@bestintlmovers.com
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday to Saturday, 8:00 AM – 8:00 PM
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
                  WhatsApp Us
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PackersAndMoversMultan;
