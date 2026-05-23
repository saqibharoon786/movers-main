import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Briefcase,
  Globe,
  Phone,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Users,
  Plane,
  Warehouse,
  Car,
  Truck,
  FileCheck,
  GraduationCap,
  Fuel,
  Cpu,
  Landmark,
  HeartHandshake,
  ClipboardList,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const heroImg =
  "/images/international-moving.jpg";

const heroStats = [
  { value: "15+ Years", label: "Corporate Experience" },
  { value: "Outbound & Inbound", label: "Employee Moves" },
  { value: "HR-Friendly", label: "Billing & Reporting" },
  { value: "All Cities", label: "Pakistan Coverage" },
];

const clientTypes = [
  {
    icon: Globe,
    title: "Multinational Companies (MNCs)",
    desc: "Inbound expat arrivals and outbound Pakistani staff assignments — Pakistan–UAE, UK, USA, China, Germany corridors.",
  },
  {
    icon: Building2,
    title: "Pakistani Corporations",
    desc: "Banking, energy, textile, IT, and consulting sectors — fixed-price corporate packages and structured reporting.",
  },
  {
    icon: Landmark,
    title: "Embassies & Diplomatic Missions",
    desc: "Protocol-compliant handling of diplomatic household effects in Islamabad and Karachi under Vienna Convention requirements.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs, Development & UN Agencies",
    desc: "Pre-assignment surveys, inbound customs clearance, and short-notice departure packing for international staff.",
  },
  {
    icon: Cpu,
    title: "Technology & IT Companies",
    desc: "Pre-agreed employee relocation packages for professionals moving to UAE, Canada, UK, and Europe.",
  },
  {
    icon: Fuel,
    title: "Oil, Gas & Energy Sector",
    desc: "High-volume programmes and air-side collections at Islamabad and Karachi for rotation changes.",
  },
  {
    icon: GraduationCap,
    title: "Universities & Schools",
    desc: "Faculty arrivals and departures with temporary storage when accommodation is not yet ready.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Outbound Employee Relocation — Pakistan to Worldwide",
    desc: "Survey, pack, export customs, sea or air freight, and destination delivery with HR departure confirmation and tracking.",
  },
  {
    icon: Plane,
    title: "Inbound Expat Relocation — Arrivals to Pakistan",
    desc: "Port/airport clearance, Pakistan Customs, delivery and unpacking for work-visa household effects.",
  },
  {
    icon: Truck,
    title: "Domestic Employee Transfers — Intercity Pakistan",
    desc: "Karachi to Islamabad, Lahore to Peshawar, and all major city pairs with survey, pack, and GPS-tracked transport.",
  },
  {
    icon: Briefcase,
    title: "Executive Relocation — White Glove Service",
    desc: "Senior move coordinator, priority scheduling, custom crating for art and antiques, expedited processing.",
  },
  {
    icon: Building2,
    title: "Office & Commercial Relocation",
    desc: "IT crating, server dismantling, furniture disassembly, after-hours execution across all major cities.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Move Survey & Volume Assessment",
    desc: "Fixed-price scope for HR approval — evenings and weekends available.",
  },
  {
    icon: FileCheck,
    title: "Customs Documentation & Compliance",
    desc: "Export and import paperwork, port NOCs, and freight forwarding — inbound and outbound.",
  },
  {
    icon: Warehouse,
    title: "Secure Corporate Storage",
    desc: "CCTV-monitored facilities in Islamabad and Karachi for short- or long-term holding.",
  },
  {
    icon: Car,
    title: "Vehicle Shipping for Corporate Employees",
    desc: "RoRo or container from Karachi Port with marine insurance and destination import guidance.",
  },
  {
    icon: MapPin,
    title: "Settling-In Support — Destination Services (Premium)",
    desc: "Partner-network accommodation coordination and orientation at select destinations.",
  },
  {
    icon: Users,
    title: "Corporate Account Management",
    desc: "Rate cards, priority booking, consolidated invoicing, move reports, and a named account manager.",
  },
];

const moveTypes = [
  { type: "Outbound — 1-Bed Employee (Sea, LCL)", desc: "Single employee, Islamabad to Dubai", cost: "From PKR 95,000" },
  { type: "Outbound — 2-Bed Employee (Sea, LCL)", desc: "Family move, Lahore to UK", cost: "From PKR 175,000" },
  { type: "Outbound — 3-Bed Family (Sea, FCL 20ft)", desc: "Full family, Karachi to Canada", cost: "From PKR 350,000" },
  { type: "Outbound — Express (Air Freight)", desc: "Urgent assignment, any city to Gulf", cost: "From PKR 130,000" },
  { type: "Inbound Expat — Clearance + Delivery", desc: "Container, Karachi Port to Islamabad", cost: "From PKR 75,000" },
  { type: "Domestic Transfer — Intercity", desc: "Karachi to Islamabad household", cost: "From PKR 95,000" },
  { type: "Executive White Glove", desc: "Senior executive full service, outbound", cost: "From PKR 250,000" },
  { type: "Office Relocation (Small — 10 desks)", desc: "Single floor, same city", cost: "From PKR 55,000" },
  { type: "Office Relocation (Large — 50+ desks)", desc: "Multi-floor, intercity", cost: "From PKR 200,000+" },
];

const whyChoose = [
  {
    icon: Users,
    title: "We Understand HR & Global Mobility Teams",
    desc: "Structured for approvals, budget codes, and reporting — professional employee experience at every milestone.",
  },
  {
    icon: Phone,
    title: "Single Point of Contact per Assignment",
    desc: "Dedicated move coordinator from briefing to completion — no call centres or handoffs.",
  },
  {
    icon: FileCheck,
    title: "Fixed-Price, Pre-Approved Quotes",
    desc: "Itemised quotes for finance approval; corporate accounts use pre-agreed rate cards for standard move types.",
  },
  {
    icon: ShieldCheck,
    title: "Comprehensive Liability Coverage",
    desc: "Marine cargo and goods-in-transit insurance with agreed value options for corporate policies.",
  },
  {
    icon: Building2,
    title: "Every Corporate Sector in Pakistan",
    desc: "Banking, oil & gas, FMCG, tech, education, diplomacy, development, manufacturing, and retail.",
  },
  {
    icon: MapPin,
    title: "Nationwide Operational Coverage",
    desc: "Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, Faisalabad, Quetta, Sialkot — direct teams, no subcontracting.",
  },
  {
    icon: Globe,
    title: "15+ Years & 5,000+ Completed Moves",
    desc: "Multinationals, embassies, NGOs, and major Pakistani enterprises trust our corporate programme delivery.",
  },
];

const processSteps = [
  { step: "1", title: "Initial Briefing with HR Team", desc: "Assignment details received; corporate move coordinator assigned immediately." },
  { step: "2", title: "Pre-Move Survey at Employee's Home", desc: "Volume, fragile items, and access assessed — scope of work prepared." },
  { step: "3", title: "Written Quote to HR Within 24 Hours", desc: "Itemised fixed-price quote, or rate-card confirmation for account clients." },
  { step: "4", title: "HR Approval & Move Confirmation", desc: "Packing date confirmed; container or air space reserved for international moves." },
  { step: "5", title: "Packing Day at Employee's Address", desc: "Supervised pack, numbered inventory, employee sign-off before loading." },
  { step: "6", title: "Documentation & Export Clearance", desc: "Pakistan Customs export; HR receives B/L or AWB and tracking reference." },
  { step: "7", title: "Transit Updates & Tracking", desc: "Regular updates to HR and employee; coordinator available throughout transit." },
  { step: "8", title: "Destination Delivery & Completion Report", desc: "Import clearance and delivery abroad; completion confirmation and optional move report for HR." },
];

const corridors = [
  {
    title: "Pakistan to UAE (Dubai, Abu Dhabi, Sharjah)",
    desc: "Most active corridor — sea 10–15 days via Karachi to Jebel Ali; air 2–4 days from Islamabad or Karachi.",
  },
  {
    title: "Pakistan to Saudi Arabia (Riyadh, Jeddah, Dammam)",
    desc: "Energy, construction, and healthcare assignments — Saudi documentation and Riyadh/Jeddah partner clearance.",
  },
  {
    title: "Pakistan to United Kingdom",
    desc: "Door-to-door from all Pakistani cities to UK postcodes — Felixstowe and Southampton container services.",
  },
  {
    title: "Pakistan to Canada",
    desc: "IT, engineering, and finance growth corridor — 35–45 days sea to Halifax/Vancouver with full customs clearance.",
  },
  {
    title: "Pakistan to Germany & Europe",
    desc: "EU documentation and European partner delivery for multinationals transferring Pakistani staff.",
  },
  {
    title: "Pakistan to USA",
    desc: "CBP-compliant personal effects procedures for US-bound corporate relocations.",
  },
  {
    title: "Inbound — Worldwide to Pakistan",
    desc: "Tracking from origin, Karachi Port clearance, delivery and unpacking in Islamabad, Lahore, or Karachi.",
  },
];

const faqs = [
  {
    q: "Do you have experience with corporate relocation programmes, not just individual moves?",
    a: "Yes — from single annual moves to 30–50+ assignments per year with corporate accounts, rate cards, consolidated invoicing, account managers, and move status reporting.",
  },
  {
    q: "Can you manage both outbound and inbound corporate relocations?",
    a: "Yes. Outbound when employees leave Pakistan for international assignments, and inbound when expatriates arrive and need Pakistan Customs clearance and home delivery.",
  },
  {
    q: "How quickly can you execute a last-minute corporate relocation?",
    a: "Packing crews can mobilise within 24–48 hours in major cities. Air freight and priority port processing are available for urgent assignments.",
  },
  {
    q: "Do you provide invoicing suitable for corporate finance teams?",
    a: "Yes — itemised per-assignment invoices with cost codes, monthly consolidated statements, and summary move reports. Formats can be tailored to your organisation.",
  },
  {
    q: "Can you handle diplomatic household effects?",
    a: "Yes — extensive experience in Islamabad and Karachi including diplomatic exemption clearance, restricted cargo, and MFA coordination where required.",
  },
  {
    q: "What insurance options are available for corporate relocation?",
    a: "Marine cargo for international moves and goods-in-transit for domestic moves. Agreed-value coverage structured to meet relocation policy requirements.",
  },
  {
    q: "Do you cover all Pakistani cities for corporate relocation?",
    a: "Yes — direct operations in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, Faisalabad, and Quetta. Contact us for other locations.",
  },
  {
    q: "How do we set up a corporate account?",
    a: "Call 0300-9130211 or email info@bestintlmovers.com with organisation details and estimated annual volume. No minimum volume required.",
  },
  {
    q: "Can you manage office relocation in addition to employee household moves?",
    a: "Yes — IT equipment, furniture, archives, and operational materials with after-hours execution during restructures.",
  },
  {
    q: "Do you provide settling-in support for expatriates arriving in Pakistan?",
    a: "We deliver and unpack goods on schedule. For school search, housing, and orientation we introduce specialist destination service partners.",
  },
];

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Best International Movers & Logistics",
        description:
          "Corporate relocation company in Pakistan. Employee moving, office shifting, executive relocation and expat arrival services for HR teams and multinational companies.",
        url: "https://bestintlmovers.com/corporate-relocation-pakistan/",
        telephone: "+92-300-9130211",
        email: "info@bestintlmovers.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        areaServed: { "@type": "Country", name: "Pakistan" },
        openingHours: "Mo-Sa 08:00-20:00",
        priceRange: "PKR 55,000+",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Corporate Relocation Services Pakistan",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outbound Employee Relocation Pakistan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inbound Expat Relocation Pakistan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic Employee Transfer Pakistan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Relocation Pakistan" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Relocation Pakistan" } },
          ],
        },
      },
      {
        "@type": "Service",
        name: "Corporate Relocation Pakistan",
        serviceType: "Corporate and employee relocation",
        provider: { "@type": "Organization", name: "Best International Movers & Logistics" },
        areaServed: "Pakistan",
      },
    ],
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Corporate Relocation Pakistan",
        item: "https://bestintlmovers.com/corporate-relocation-pakistan/",
      },
    ],
  };
}

const CorporateRelocationPakistan = () => {
  const seoConfig = {
    title: "Corporate Relocation Pakistan | Employee Moving Services | Best Intl Movers",
    description:
      "Pakistan's leading corporate relocation company. Employee moving, office shifting & executive relocation to 100+ countries. HR-friendly packages. Call 0300-9130211.",
    keywords:
      "corporate relocation Pakistan, employee relocation Pakistan, corporate moving services Pakistan, office relocation Pakistan, executive relocation Pakistan, HR relocation services Pakistan, expat relocation Pakistan",
    canonicalUrl: "https://bestintlmovers.com/corporate-relocation-pakistan/",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/corporate-relocation-pakistan/"
        canonicalUrl={seoConfig.canonicalUrl}
        schema={[buildServiceSchema(), buildFAQSchema(), buildBreadcrumbSchema()]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Building2 className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">Corporate Relocation 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Corporate Relocation Pakistan — Employee Moving &amp; Business Relocation Services
            </h1>

            <img
              src={heroImg}
              alt="Corporate relocation Pakistan — employee moving and office relocation services"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Pakistan&apos;s Most Trusted Corporate Relocation Company | Outbound &amp; Inbound Employee Moves |
              Islamabad | Rawalpindi | Lahore | Karachi | HR-Friendly Packages
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
                Request Corporate Quote
              </Link>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Business Enquiry
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
                Pakistan&apos;s Corporate Relocation Partner for HR Teams, Multinationals &amp; Growing Businesses
              </h2>
              <p>
                <strong className="text-gold">Corporate relocation Pakistan</strong> is fundamentally different from a
                standard household move. When a business relocates an employee — internationally, as an inbound expatriate,
                or between Pakistani cities — the move must run on a precise timeline, align with HR or Global Mobility,
                comply with regulations at both ends, and avoid disrupting the employee&apos;s start date.
              </p>
              <p>
                Best International Movers &amp; Logistics is Pakistan&apos;s dedicated{" "}
                <strong className="text-foreground">corporate moving company</strong> — a full-service partner for HR
                departments, multinationals, embassies, NGOs, development organisations, and growing Pakistani
                businesses that need accountable employee relocation.
              </p>
              <p>
                We handle pre-move surveys, professional packing, export and import customs, freight coordination, and
                final delivery. You receive consolidated billing, move status reports, and one point of contact per
                assignment — whether you relocate one employee per year or manage 50+ assignments.
              </p>
              <p>
                We serve Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, Faisalabad, Quetta, and 100+ countries
                worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-border mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Who We Serve — Corporate Relocation Clients in Pakistan
              </h2>
              <div className="space-y-6">
                {clientTypes.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 rounded-lg hover:bg-navy-light/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="text-gold" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
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
                Our Complete Corporate Relocation Services in Pakistan
              </h2>
              <div className="space-y-6">
                {services.map((svc) => (
                  <div key={svc.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <svc.icon className="text-gold" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-xl bg-gold/5 border border-gold/20">
                <h3 className="font-semibold text-foreground mb-3">Corporate account benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Pre-agreed rate cards for standard move types (1-bed, 2-bed, 3-bed, office)",
                    "Priority scheduling with 48-hour booking confirmation",
                    "Monthly consolidated invoicing for HR budget management",
                    "Move status reports for each active assignment",
                    "Named account manager by phone and WhatsApp",
                    "Annual programme review with cost benchmarking",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Corporate Relocation Move Types &amp; Estimated Costs
              </h2>
              <div className="overflow-x-auto glass-card rounded-2xl border border-border">
                <table className="w-full border-collapse min-w-[720px]">
                  <thead>
                    <tr className="bg-navy-light/30">
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Move Type</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Description</th>
                      <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Est. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {moveTypes.map((row, idx) => (
                      <tr key={row.type} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                        <td className="border border-border px-4 py-3 font-medium text-foreground text-sm">{row.type}</td>
                        <td className="border border-border px-4 py-3 text-muted-foreground text-sm">{row.desc}</td>
                        <td className="border border-border px-4 py-3 text-gold font-semibold text-sm">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                *Indicative starting costs after survey. Corporate account clients receive pre-agreed rate cards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                Why HR Teams Choose Best International Movers
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
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Our Corporate Relocation Process — How We Work with HR Teams
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Most Common Corporate Relocation Routes from Pakistan
              </h2>
              <div className="space-y-4">
                {corridors.map((c) => (
                  <div key={c.title} className="glass-card rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
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
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Useful Resources for HR Teams &amp; Corporate Clients
              </h2>
              <div className="glass-card rounded-2xl p-8 border border-border space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">High-volume UAE assignments?</strong> See our{" "}
                  <Link to="/pakistan-to-dubai-movers/" className="text-gold hover:underline font-medium">
                    Pakistan to Dubai movers
                  </Link>{" "}
                  page for Jebel Ali schedules, air options, and Dubai import documentation for corporate start-date planning.
                </p>
                <p>
                  <strong className="text-foreground">Executive or sensitive goods packing specs?</strong> Review our{" "}
                  <Link to="/services/professional-packing-services/" className="text-gold hover:underline font-medium">
                    professional packing services
                  </Link>{" "}
                  for materials, crating, and handling standards for relocation policies.
                </p>
                <p>
                  <strong className="text-foreground">Inbound expat duty estimates?</strong> Use our free{" "}
                  <Link to="/custom-duty-calculator/" className="text-gold hover:underline font-medium">
                    Pakistan customs duty calculator
                  </Link>{" "}
                  before goods arrive at Karachi Port.
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
                Frequently Asked Questions — Corporate Relocation in Pakistan
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                Ready to Set Up Your Corporate Relocation Account?
              </h2>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                One upcoming assignment or an ongoing programme — contact our corporate team for a programme overview or
                assignment quote.
              </p>
              <div className="text-muted-foreground text-sm space-y-1 mb-6">
                <p>
                  <strong className="text-foreground">Call / WhatsApp:</strong> 0300-9130211
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> info@bestintlmovers.com (Subject: Corporate
                  Relocation Enquiry)
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
                  Request Corporate Quote
                </Link>
                <a
                  href="https://wa.me/923009130211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Business Enquiry
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

export default CorporateRelocationPakistan;
