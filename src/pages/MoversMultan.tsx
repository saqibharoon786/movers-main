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
  Truck,
  Warehouse,
  FileCheck,
  Car,
  Building2,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const heroImg =
  "/images/air-freight.jpg";

const heroStats = [
  { value: "300+", label: "Multan Moves Completed" },
  { value: "All Areas", label: "Gulgasht, DHA & More" },
  { value: "MUX Airport", label: "Air Cargo from Multan" },
  { value: "Free Survey", label: "Home Visit in Multan" },
];

const multanZones = [
  {
    title: "Central & Established Areas",
    areas:
      "Gulgasht Colony | Bosan Road | Cantt Area | Saddar Multan | Shah Rukn-e-Alam Colony | Qasim Bela | Kumharanwala | Nishtar Colony",
  },
  {
    title: "New & Developing Housing Schemes",
    areas:
      "New Multan | City Housing Scheme | DHA Multan Phase 1 | DHA Multan Phase 2 | Bahauddin Zakariya Town | Wapda Town Multan | Askari Housing Scheme | Al-Rehman Garden",
  },
  {
    title: "Commercial & Business Districts",
    areas: "Hussain Agahi | Katchery Road | LMQ Road | Abdali Road | Vehari Road Corridor",
  },
  {
    title: "Surrounding Areas",
    areas: "Shujabad | Muzaffargarh | Khanewal | Lodhran | Sahiwal (via Multan operations)",
  },
];

const routes = [
  { destination: "Multan to Dubai", sea: "12–18 days", air: "3–4 days", cost: "From PKR 88,000" },
  { destination: "Multan to Saudi Arabia", sea: "16–22 days", air: "3–5 days", cost: "From PKR 98,000" },
  { destination: "Multan to UK", sea: "27–34 days", air: "5–6 days", cost: "From PKR 172,000" },
  { destination: "Multan to Canada", sea: "36–46 days", air: "6–8 days", cost: "From PKR 192,000" },
  { destination: "Multan to USA", sea: "38–52 days", air: "6–9 days", cost: "From PKR 202,000" },
  { destination: "Multan to Australia", sea: "28–38 days", air: "5–7 days", cost: "From PKR 182,000" },
  { destination: "Multan to Qatar", sea: "14–20 days", air: "3–5 days", cost: "From PKR 92,000" },
  { destination: "Multan to Kuwait", sea: "14–20 days", air: "3–5 days", cost: "From PKR 94,000" },
  { destination: "Multan to Germany", sea: "28–36 days", air: "5–7 days", cost: "From PKR 176,000" },
  { destination: "Multan to Malaysia", sea: "20–26 days", air: "4–6 days", cost: "From PKR 122,000" },
];

const services = [
  {
    icon: Globe,
    title: "International Moving from Multan — Full Door-to-Door",
    desc: "Pack every item, prepare customs documentation, book sea or air freight, and deliver to your new address in 100+ countries — one coordinator from first call to final delivery.",
  },
  {
    icon: Package,
    title: "Professional Packing in Multan",
    desc: "Double-wall export cartons, bubble wrap, foam padding, and custom timber crates. Numbered cartons with a detailed inventory for customs and insurance.",
  },
  {
    icon: Ship,
    title: "Sea Freight from Multan",
    desc: "Goods travel from Multan to Karachi Port or Port Qasim. FCL for large homes; LCL for smaller volumes — flexible and cost-effective.",
    link: { to: "/services/sea-freight/", label: "Sea freight services →" },
  },
  {
    icon: Plane,
    title: "Air Freight from Multan",
    desc: "Via Multan International Airport (MUX) for Gulf routes, or Lahore (LHE) for worldwide destinations. Dubai in 3–4 days; UK in 5–6 days.",
    link: { to: "/services/air-freight/", label: "Air freight services →" },
  },
  {
    icon: FileCheck,
    title: "Customs Documentation & Export Compliance",
    desc: "Packing lists, certificates of origin, NOC coordination, and destination import paperwork prepared correctly the first time.",
  },
  {
    icon: Warehouse,
    title: "Secure Warehouse Storage in Multan",
    desc: "Monitored, dry, insured storage if you vacate your home before departure or need to hold goods before shipping.",
  },
  {
    icon: Car,
    title: "Vehicle Shipping from Multan",
    desc: "Cars, SUVs, and motorcycles collected in Multan and exported from Karachi Port with marine insurance and import guidance abroad.",
    link: { to: "/services/vehicle-shipping/", label: "Vehicle shipping →" },
  },
  {
    icon: Building2,
    title: "Office & Corporate Relocation from Multan",
    desc: "Office de-fit, IT packing, international freight, and destination setup — including after-hours and weekend moves.",
  },
  {
    icon: Truck,
    title: "Last Mile Delivery at Destination",
    desc: "Partner agents in 100+ countries deliver to your new door — not left at port. Unpacking available at select destinations.",
  },
];

const whyChoose = [
  {
    icon: Users,
    title: "Dedicated Multan Service — Not Just a Broker",
    desc: "Our own surveyors, packers, and documentation team work your move directly — we do not pass your job to a local agent after taking a commission.",
  },
  {
    icon: MapPin,
    title: "Free Home Survey — Accurate, Fixed Quote",
    desc: "A trained surveyor visits your Multan address at no cost. You receive an itemised written quote — fixed price, no surprise additions on moving day.",
  },
  {
    icon: Phone,
    title: "Dedicated Move Coordinator",
    desc: "One person manages packing, port documentation, tracking, and destination delivery — with a direct number for calls or WhatsApp.",
  },
  {
    icon: Globe,
    title: "Real-Time Shipment Tracking",
    desc: "Follow your container or air waybill online from departure through arrival at destination.",
  },
  {
    icon: Package,
    title: "Export-Grade Packing Standards",
    desc: "Same materials and methods as our headquarters cities — standards aligned with Maersk, MSC, Emirates SkyCargo, and global carriers.",
  },
  {
    icon: Clock,
    title: "15+ Years of International Experience",
    desc: "5,000+ international moves from Pakistan. Multan clients benefit from established customs relationships in Dubai, London, Toronto, and Sydney.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, Competitive Pricing",
    desc: "Detailed itemised quotes — no separate charges for stairs, awkward access, or extra crew on the day. What is quoted is what you pay.",
  },
];

const whoWeMove = [
  {
    icon: Users,
    title: "Families Relocating Abroad",
    desc: "Full household moves — kitchen to garden — for families joining relatives abroad or relocating after immigration approval.",
  },
  {
    icon: Briefcase,
    title: "Professionals Moving for Employment",
    desc: "Fast moves for Gulf-bound professionals and couples, with air freight for urgent departures when timelines are tight.",
  },
  {
    icon: GraduationCap,
    title: "Students Going Abroad",
    desc: "Affordable smaller-volume shipping for personal items, clothing, electronics, and books to UK, Canada, and Australia universities.",
  },
  {
    icon: Building2,
    title: "Business Cargo & Commercial Shipments",
    desc: "Commercial cargo from Hussain Agahi, Bosan Road, and wider Multan — freight forwarding and customs for B2B shipments.",
  },
  {
    icon: Anchor,
    title: "Returning Pakistanis (Personal Effects Import)",
    desc: "Overseas packing, sea or air to Karachi, Pakistan customs clearance, and delivery to your Multan address.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Free Phone Consultation & Home Survey",
    desc: "Call or WhatsApp 0300-9130211. We schedule a free survey at your Multan address — mornings, evenings, or weekends.",
  },
  {
    step: "2",
    title: "Detailed Written Quote Within 24 Hours",
    desc: "Full breakdown of packing, labour, transport to port, freight, documentation, and destination delivery.",
  },
  {
    step: "3",
    title: "Packing Day at Your Multan Address",
    desc: "Room-by-room pack, number, and inventory. Fragile items crated or cushioned. You sign the inventory before anything leaves.",
  },
  {
    step: "4",
    title: "Transport to Port or Airport",
    desc: "Sealed cartons go to Karachi Port (sea) or MUX / Lahore (air), depending on service and shipment size.",
  },
  {
    step: "5",
    title: "Export Customs & Clearance",
    desc: "Our team submits export declarations, stuffs containers or checks in air cargo, and issues Bill of Lading or Air Waybill.",
  },
  {
    step: "6",
    title: "Freight in Transit",
    desc: "Tracking details and regular updates from your move coordinator throughout the journey.",
  },
  {
    step: "7",
    title: "Destination Customs & Delivery",
    desc: "Partner agent clears import customs and delivers to your new front door. Unpacking available at select destinations.",
  },
];

const faqs = [
  {
    q: "Do you actually come to Multan, or do you use a local agent?",
    a: "We send our own team to Multan — surveyor, packing crew, and documentation coordinator. We do not subcontract your packing to another company.",
  },
  {
    q: "How do goods get from Multan to the port?",
    a: "Packed goods load onto our vehicles in Multan and travel to Karachi Port or Port Qasim (about 8–9 hours by road). Air freight uses MUX for Gulf destinations or Lahore for worldwide connections.",
  },
  {
    q: "How long does it take to ship from Multan to Dubai?",
    a: "Sea freight: approximately 12–18 days from Karachi Port loading. Air freight: 3–4 days via Multan or Lahore. Sea suits large households; air suits smaller or urgent shipments.",
  },
  {
    q: "What is the minimum volume you can ship from Multan?",
    a: "No minimum — from a few cartons (LCL) to a full 40-foot container. We recommend LCL or FCL after your free home survey.",
  },
  {
    q: "Can you ship my vehicle from Multan to Dubai or the UK?",
    a: "Yes. We collect from Multan, transport to Karachi Port, handle export documentation, port booking, and marine insurance, and guide you on destination import duties.",
  },
  {
    q: "How much does it cost to move from Multan to Dubai?",
    a: "From approximately PKR 88,000 for a 1-bedroom LCL sea shipment. Final price depends on volume, packing, destination port, and delivery address — best confirmed after a free home survey.",
  },
  {
    q: "Do you handle Pakistan export customs for me?",
    a: "Yes. Our documentation team prepares and submits export declarations — packing lists, certificates, NOCs where required. You do not visit the port or customs office.",
  },
  {
    q: "Can you store my packed goods in Multan before shipping?",
    a: "Yes. Secure warehousing if you need to vacate your home before departure or before your overseas address is ready.",
  },
  {
    q: "Is insurance included in the moving price?",
    a: "Marine cargo insurance is available as an add-on and is strongly recommended. Your coordinator explains coverage and costs during the survey.",
  },
  {
    q: "Which Multan areas do you cover for packing and collection?",
    a: "All Multan — Gulgasht, Bosan Road, New Multan, DHA Multan, City Housing, Cantt, Wapda Town, Al-Rehman Garden, and surrounding Khanewal, Sahiwal, Muzaffargarh, and Lodhran.",
  },
  {
    q: "Do you offer local house shifting and office relocation in Multan, not just international moves?",
    a: "",
    packersLink: true,
  },
  {
    q: "How do I get a free quote for moving from Multan internationally?",
    a: "Call or WhatsApp 0300-9130211 or use our contact form. We arrange a free home survey and send a written quote within 24 hours with no obligation.",
  },
];

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    name: "Best International Movers & Logistics — Multan",
    description:
      "International movers and packers in Multan offering door-to-door relocation to Dubai, UK, USA, Canada and 100+ countries.",
    url: "https://bestintlmovers.com/movers-multan/",
    telephone: "+92-300-9130211",
    email: "info@bestintlmovers.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Multan",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: [
      "Gulgasht Colony",
      "Bosan Road",
      "DHA Multan",
      "New Multan",
      "Cantt Area Multan",
      "Multan",
      "Khanewal",
      "Muzaffargarh",
    ],
    openingHours: "Mo-Sa 08:00-20:00",
    priceRange: "PKR 88,000+",
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bestintlmovers.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://bestintlmovers.com/services/" },
      { "@type": "ListItem", position: 3, name: "Movers Multan", item: "https://bestintlmovers.com/movers-multan/" },
    ],
  };
}

const MoversMultan = () => {
  const seoConfig = {
    title: "International Movers Multan | Packers & Movers | Best Intl Movers",
    description:
      "Trusted international movers in Multan. Door-to-door relocation to Dubai, UK, USA, Canada & 100+ countries. Free home survey in Multan. Call 0300-9130211.",
    keywords:
      "international movers Multan, movers Multan, packers and movers Multan, overseas movers Multan, Multan to Dubai movers, house shifting Multan, cargo service Multan, air freight Multan, sea freight Multan, international relocation Multan",
    canonicalUrl: "https://bestintlmovers.com/movers-multan/",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/movers-multan/"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildLocalBusinessSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Multan International Moving 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              International Movers in Multan — Overseas Relocation Experts
            </h1>

            <img
              src={heroImg}
              alt="International movers in Multan — air and sea freight overseas relocation"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Multan&apos;s Trusted International Moving Company | Bosan Road, Gulgasht, New Multan &amp; All Areas
              Covered | Free Home Survey
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
                Why Multan Families Trust Best International Movers for Overseas Relocation
              </h2>
              <p>
                Multan — Pakistan&apos;s City of Saints — is one of the country&apos;s most significant cities, with a
                large population of professionals, businesspeople, and families who relocate internationally every year,
                particularly to the UAE, Saudi Arabia, the UK, and Canada. As demand for trusted{" "}
                <strong className="text-gold">international movers in Multan</strong> has grown, Best International
                Movers &amp; Logistics has built a dedicated service network for Multan clients that delivers the same
                quality and accountability our Islamabad, Rawalpindi, Lahore, and Karachi clients rely on.
              </p>
              <p>
                When you book an international move with us from Multan, you are not dealing with a local agent who will
                hand your shipment off to someone else. You are working directly with an operational moving company with
                15+ years of international relocation experience, verified processes, trained packing crews, and a
                dedicated move coordinator from the first call to final delivery abroad.
              </p>
              <p>
                We handle every aspect of your Multan to international move — professional packing at your home, secure
                transport to Karachi Port or Multan Airport, full export customs documentation, sea or air freight
                booking, destination customs clearance, and door delivery at your new address. You do not need to contact
                a port, airline, or customs agent separately.
              </p>
              <p>
                Whether you are a family moving from Gulgasht Colony to Dubai, a professional relocating from Bosan Road
                to the UK, or a business shifting from New Multan to Canada, our team is ready with a free home survey
                and a transparent fixed-price quote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Multan Areas &amp; Housing Schemes We Cover
              </h2>
              <p className="text-muted-foreground mb-6">
                Professional international packing and moving across all major areas, colonies, and housing schemes in
                Multan:
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
                Not sure if we cover your area? Call{" "}
                <a href="tel:+923009130211" className="text-gold hover:underline font-medium">
                  0300-9130211
                </a>{" "}
                — if you are in or near Multan, we serve you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Our Complete International Moving Services in Multan
              </h2>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Popular International Moving Routes from Multan
              </h2>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border">
                <table className="w-full border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Sea Freight</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Air Freight</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Est. Starting Cost</th>
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
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                *LCL minimum estimates for a standard 1-bedroom shipment. Final cost after free home survey based on
                volume, destination, and service selection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why Multan Residents Choose Best International Movers
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
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">Who We Move from Multan</h2>
              <div className="space-y-6">
                {whoWeMove.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                How We Handle Your Move from Multan — Step by Step
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
                For our full relocation workflow, visit our{" "}
                <Link to="/process/" className="text-gold hover:underline font-medium">
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
                Explore More From Best International Movers
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Moving internationally from Multan involves important decisions — route, sea vs air, and customs at
                  both ends. These pages help you plan with complete information:
                </p>
                <p>
                  <strong className="text-foreground">Moving to Saudi Arabia or Dubai?</strong> The Gulf is Multan&apos;s
                  most common destination. See our{" "}
                  <Link to="/pakistan-to-saudi-arabia-movers/" className="text-gold hover:underline font-medium">
                    Pakistan to Saudi Arabia movers
                  </Link>{" "}
                  page and our{" "}
                  <Link to="/pakistan-to-dubai-movers/" className="text-gold hover:underline font-medium">
                    Pakistan to Dubai movers
                  </Link>{" "}
                  guide for transit times, costs, and customs.
                </p>
                <p>
                  <strong className="text-foreground">Comparing sea vs air freight?</strong> Read our{" "}
                  <Link to="/blog/air-freight-vs-sea-freight-pakistan/" className="text-gold hover:underline font-medium">
                    air freight vs sea freight from Pakistan
                  </Link>{" "}
                  guide for cost and timeline comparisons with figures from Pakistan.
                </p>
                <p>
                  <strong className="text-foreground">Estimating import duties?</strong> Use our free{" "}
                  <Link to="/custom-duty-calculator/" className="text-gold hover:underline font-medium">
                    Pakistan customs duty calculator
                  </Link>{" "}
                  to estimate import duties before your shipment arrives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Multan to Dubai &amp; Gulf — Our Most Active Corridor
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Saudi Arabia and the UAE are the top destinations for Multan families and professionals relocating
                  abroad. Sea freight to Jebel Ali typically takes{" "}
                  <strong className="text-gold">12–18 days</strong> from Karachi Port loading; air via MUX or Lahore
                  reaches Dubai in <strong className="text-gold">3–4 days</strong>.
                </p>
                <ul className="space-y-2">
                  {[
                    "LCL consolidations for smaller Multan household moves",
                    "FCL 20ft and 40ft containers for full home relocations",
                    "Destination agents handle UAE and KSA customs and last-mile delivery",
                    "Air cargo for urgent documents, samples, and smaller personal shipments",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone size={18} />
                  Get Free Multan Quote
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Frequently Asked Questions — International Movers in Multan
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-5 last:border-0">
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{faq.q}</h3>
                    {"packersLink" in faq && faq.packersLink ? (
                      <p className="text-muted-foreground leading-relaxed">
                        Yes. See our{" "}
                        <Link to="/packers-and-movers-multan/" className="text-gold hover:underline font-medium">
                          Packers and Movers Multan page
                        </Link>{" "}
                        for local house shifting, office relocation, intercity moves, furniture packing, and full
                        domestic services — this page focuses on international and sea freight moves from Multan.
                      </p>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    )}
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
                Plan Your International Move from Multan — Get a Free Quote Today
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Our team will visit your home for a free survey, assess your requirements, and provide a detailed,
                fixed written quote within 24 hours. No obligation and no upfront payment.
              </p>
              <div className="text-muted-foreground text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-foreground">Call / WhatsApp:</strong> 0300-9130211
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@bestintlmovers.com
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday to Saturday, 8:00 AM – 8:00 PM (Sunday:
                  emergency only)
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
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default MoversMultan;
