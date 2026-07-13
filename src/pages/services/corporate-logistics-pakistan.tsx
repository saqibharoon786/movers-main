import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Package,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  Award,
  Zap,
  Truck,
  Wrench,
  Factory,
  Settings,
  AlertTriangle,
  FileText,
  Building2,
  Monitor,
  Server,
  FileLock,
  Warehouse,
  Globe,
  Activity,
  BarChart3,
  Briefcase,
  Network,
  Ship
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

function InfoBox({ children, variant = "gold" }: { children: React.ReactNode; variant?: "gold" | "warn" | "save" | "blue" | "green" | "red" | "orange" }) {
  const cls =
    variant === "warn"
      ? "border-amber-500/40 bg-amber-500/5"
      : variant === "save"
        ? "border-emerald-500/40 bg-emerald-500/5"
        : variant === "blue"
          ? "border-blue-500/40 bg-blue-500/5"
          : variant === "green"
            ? "border-green-500/40 bg-green-500/5"
            : variant === "red"
              ? "border-red-500/40 bg-red-500/5"
              : variant === "orange"
                ? "border-orange-500/40 bg-orange-500/5"
                : "border-gold/30 bg-gold/5";
  return (
    <div className={`not-prose rounded-xl border ${cls} p-5 my-6 text-sm text-muted-foreground leading-relaxed`}>
      {children}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="not-prose space-y-2 my-4 pl-0 list-none">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
          <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Logistics Pakistan | Best International Movers & Logistics",
    serviceType: "Corporate Logistics",
    description: "Corporate logistics services in Pakistan — dedicated account management, recurring freight programs, supply chain coordination & asset logistics for businesses. Get a free consultation.",
    url: "https://bestintlmovers.com/services/corporate-logistics-pakistan/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
};

const CorporateLogisticsPakistan = () => {
  const serviceSeo = {
    title: "Corporate Logistics Pakistan | Dedicated Supply Chain & Freight Solutions",
    description: "Corporate logistics services in Pakistan — dedicated account management, recurring freight programs, supply chain coordination & asset logistics for businesses. Get a free consultation.",
    keywords: "corporate logistics pakistan, corporate supply chain services, business logistics partner, enterprise freight solutions, corporate account management, recurring freight programs, supply chain coordination, corporate shipping services",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/corporate-logistics-pakistan/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Network size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Corporate Logistics Pakistan
                </h1>
                <p className="text-muted-foreground mt-1">Dedicated Supply Chain & Freight Solutions for Businesses</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For companies that ship regularly — whether it's recurring inventory shipments, multi-branch distribution, or ongoing equipment and asset movement — logistics isn't a one-time transaction. It's an operational function that needs consistency, accountability, and a partner who understands your business, not just your next shipment. <strong className="text-foreground">Best International Movers & Logistics</strong> provides <strong className="text-foreground">corporate logistics services in Pakistan</strong> built specifically for businesses that need a dedicated, long-term logistics partner rather than a transactional freight vendor.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 15 years, we've managed ongoing logistics programs for manufacturers, retailers, multinational corporations, and distribution businesses across Pakistan. If you searched for "<strong className="text-foreground">corporate logistics Pakistan</strong>," "corporate supply chain services," "business logistics partner," or "enterprise freight solutions," this page explains how we structure long-term logistics relationships that reduce cost, improve reliability, and give your business a single accountable partner across every shipment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As Pakistani businesses scale — whether through export growth, multi-branch expansion, or increased import activity — the cost of managing logistics reactively becomes harder to ignore. Every renegotiated rate, every re-explained shipment requirement, and every inconsistency between vendors adds friction that a structured corporate account is specifically designed to eliminate.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Corporate Logistics?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Corporate logistics refers to the structured, ongoing management of a company's freight, distribution, and supply chain operations — as opposed to one-off, transactional shipping arrangements. <strong className="text-foreground">Corporate logistics</strong> typically involves a dedicated account structure, negotiated rate agreements based on shipment volume, standardized processes across multiple locations or shipment types, and a single point of contact who understands the business's operational priorities over time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For companies managing recurring shipments — whether that's regular inventory distribution, multi-branch office and asset transfers, or ongoing import/export activity — a <strong className="text-foreground">corporate logistics partner</strong> replaces the inefficiency of shopping for freight vendor-by-vendor with a consistent, accountable relationship that improves both cost predictability and service reliability.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Businesses Choose Our Corporate Logistics Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Enterprise Logistics Experience — A proven track record managing ongoing logistics programs for corporations across manufacturing, retail, and distribution sectors",
                  "Dedicated Account Management — A named account coordinator who understands your business, shipment patterns, and operational priorities — not a rotating call center",
                  "Volume-Based Rate Structures — Negotiated pricing based on your shipment volume and frequency, reducing per-shipment costs compared to one-off bookings",
                  "Multi-Branch & Multi-Location Coordination — Centralized logistics management across multiple offices, warehouses, or retail locations under one account structure",
                  "Integrated Service Model — Freight, customs clearance, warehousing, and business relocation support all managed under one provider instead of fragmented vendors",
                  "Consistent Reporting & Visibility — Standardized shipment tracking and reporting so your team always has clear visibility into logistics performance",
                  "Scalable Support — Logistics capacity that scales up during peak periods and contracts during slower periods without renegotiating from scratch each time",
                  "Global Carrier Network — Established partnerships with Maersk Line, Emirates SkyCargo, DHL Global, MSC Shipping, and DB Schenker for competitive international rates"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Core Components of Our Corporate Logistics Program</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase size={20} className="text-gold" />
                    Dedicated Account Management
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every corporate logistics client is assigned a dedicated account coordinator who becomes familiar with your business's shipment patterns, priority routes, and operational requirements — eliminating the need to re-explain your business every time you need to move freight.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    Freight & Supply Chain Coordination
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We manage recurring air freight, sea freight, and domestic cargo movement as an ongoing program rather than isolated bookings, allowing for better rate negotiation and more predictable scheduling. <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Review our full freight capabilities</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    Customs Brokerage & Compliance Management
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For companies with ongoing import/export activity, our licensed customs brokers manage documentation, HS code classification, and duty calculation consistently across every shipment — reducing the compliance risk that comes from inconsistent, ad hoc customs handling.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Warehouse size={20} className="text-gold" />
                    Warehousing & Distribution Support
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Corporate clients with recurring storage or distribution needs benefit from consistent warehousing arrangements, with inventory management coordinated as part of the broader logistics relationship rather than a separate transaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={20} className="text-gold" />
                    Corporate Asset & Equipment Logistics
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Beyond freight, many corporate clients need ongoing logistics support for asset movement — relocating equipment between branches, coordinating IT infrastructure transfers, or managing periodic office and facility transitions. <Link to="/services/business-relocation-pakistan/" className="text-gold hover:underline">Learn about our Business Relocation services</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Network size={20} className="text-gold" />
                    Vendor Consolidation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Many corporations manage freight, warehousing, customs, and relocation through separate, uncoordinated vendors — creating accountability gaps and inconsistent service quality. Our corporate logistics model consolidates these functions under one provider, giving your business a single point of contact and consistent service standards across every logistics need.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Who Benefits from Corporate Logistics Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Manufacturers with Recurring Export Shipments
                  </h4>
                  <p className="text-muted-foreground text-sm">Businesses that regularly ship finished goods internationally benefit from consistent freight rates and streamlined customs processes.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Building2 size={18} className="text-gold" />
                    Retail Chains with Multi-Branch Distribution
                  </h4>
                  <p className="text-muted-foreground text-sm">Companies moving inventory between distribution centers and retail locations need coordinated, predictable logistics scheduling.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-gold" />
                    Multinational Corporations
                  </h4>
                  <p className="text-muted-foreground text-sm">Businesses with recurring branch office relocations, equipment transfers, or regional distribution needs benefit from a single logistics partner across all locations.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Ship size={18} className="text-gold" />
                    Import/Export Businesses
                  </h4>
                  <p className="text-muted-foreground text-sm">Companies with ongoing international trade activity need consistent customs brokerage and compliance management across every shipment.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    E-Commerce & Distribution Companies
                  </h4>
                  <p className="text-muted-foreground text-sm">Businesses managing regular inventory movement between warehouses and fulfillment centers benefit from standardized logistics processes.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={18} className="text-gold" />
                    Construction & Industrial Companies
                  </h4>
                  <p className="text-muted-foreground text-sm">Businesses moving equipment and materials between project sites on an ongoing basis need reliable, recurring logistics support.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">How Corporate Logistics Accounts Are Structured</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    1. Business Assessment & Logistics Audit
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We begin by understanding your current logistics activity — shipment volume, frequency, routes, and any pain points with existing vendors — to identify where a structured corporate account adds the most value.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={20} className="text-gold" />
                    2. Custom Logistics Program Design
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Based on the assessment, we design a logistics program tailored to your business, including rate structures, preferred carriers, customs handling protocols, and reporting formats.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Briefcase size={20} className="text-gold" />
                    3. Account Onboarding & Coordinator Assignment
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A dedicated account coordinator is assigned to your business, becoming the consistent point of contact for all logistics activity going forward.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    4. Ongoing Freight & Logistics Management
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your account coordinator manages day-to-day freight bookings, customs coordination, and any warehousing or relocation needs as they arise, maintaining consistency across every shipment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 size={20} className="text-gold" />
                    5. Performance Reporting & Account Reviews
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Regular reporting and periodic account reviews ensure your logistics program continues to align with your business's evolving shipment volume and operational priorities.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Corporate Logistics Services Across Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide <strong className="text-foreground">corporate logistics support</strong> for businesses headquartered in or operating across Pakistan's major commercial and industrial hubs:
              </p>
              <CheckList
                items={[
                  "Corporate Logistics Islamabad — Enterprise clients across Blue Area, F-Sectors, and I-9/I-10 Industrial Areas",
                  "Corporate Logistics Rawalpindi — Businesses across Saddar, Bahria Town, and industrial corridors",
                  "Corporate Logistics Lahore — Manufacturing and export-focused corporations across the city",
                  "Corporate Logistics Karachi — Direct port access via Karachi Port and Port Qasim for corporate import/export accounts",
                  "Corporate Logistics Faisalabad — Textile and manufacturing corporate accounts",
                  "Corporate Logistics Peshawar — Regional corporate logistics coordination for Khyber Pakhtunkhwa businesses"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Whether your business operates from a single city or across multiple locations nationwide, our corporate logistics accounts are structured to provide consistent service regardless of how many sites are involved.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of a Structured Corporate Logistics Relationship</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Businesses that move from ad hoc, transactional shipping to a structured corporate logistics account typically see measurable improvements:
              </p>
              <CheckList
                items={[
                  "Lower Per-Shipment Costs — Volume-based rate agreements reduce costs compared to booking each shipment individually at spot rates",
                  "Improved Reliability — A dedicated account coordinator who understands your business reduces miscommunication and shipment errors",
                  "Faster Issue Resolution — A single accountable contact resolves problems faster than navigating a general customer service queue",
                  "Better Budget Predictability — Negotiated rate structures make logistics costs easier to forecast and budget for",
                  "Reduced Internal Administrative Burden — Centralized logistics management frees internal teams from managing multiple vendor relationships",
                  "Consistent Compliance Standards — Standardized customs and documentation processes reduce compliance risk across every shipment"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Trade Support for Corporate Accounts</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For corporate clients managing international trade, understanding the fundamentals of cross-border logistics helps set realistic expectations for cost and timing. Our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link> covers freight mode selection, documentation requirements, and Incoterms in detail — useful background for any corporate account managing recurring international shipments.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Structure for Corporate Logistics Accounts</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Corporate logistics pricing is typically structured differently from one-off shipments:
              </p>
              <CheckList
                items={[
                  "Volume-Based Rate Agreements — Pricing tiers based on shipment frequency and total volume over a defined period",
                  "Consolidated Service Pricing — Combined rates for businesses using freight, customs, warehousing, and relocation services together",
                  "Route-Specific Negotiated Rates — Preferred pricing on your business's most frequently used shipping lanes",
                  "Account-Level Reporting — Transparent, consolidated invoicing and reporting across all logistics activity under the account"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                We work with each corporate client to design a cost structure that reflects actual shipment patterns rather than applying generic, one-size-fits-all pricing.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why a Dedicated Corporate Logistics Partner Matters</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Businesses managing freight through ad hoc, transactional vendors often face:
              </p>
              <CheckList
                items={[
                  "Inconsistent pricing that varies unpredictably shipment to shipment",
                  "Repeated onboarding friction, re-explaining business needs to different representatives",
                  "Fragmented accountability when problems span multiple vendors",
                  "Missed opportunities for volume-based rate savings",
                  "Compliance inconsistencies from working with multiple, uncoordinated customs handlers"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                A dedicated <strong className="text-foreground">corporate logistics partner</strong> eliminates these inefficiencies by building an ongoing relationship structured around your business's actual operations — not treating every shipment as an isolated transaction.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes Businesses Make Without a Corporate Logistics Structure</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Companies that continue managing freight and distribution transactionally — rather than through a structured corporate account — often run into avoidable problems that compound over time:
              </p>
              <CheckList
                items={[
                  "Renegotiating Rates Every Shipment — Without a standing volume agreement, businesses lose the leverage that comes with demonstrating consistent shipping volume, paying spot-market rates repeatedly instead of negotiated corporate pricing",
                  "Losing Institutional Knowledge Between Shipments — Working with different representatives or vendors for each shipment means re-explaining business priorities, preferred routes, and past issues every single time",
                  "Inconsistent Customs Handling — Using different customs brokers for different shipments increases the risk of classification errors and documentation inconsistencies that a single, familiar broker would catch",
                  "No Consolidated View of Logistics Spend — Without centralized reporting, finance teams often struggle to get an accurate picture of total logistics costs across multiple vendors and shipment types",
                  "Slower Problem Resolution — When something goes wrong with a transactional shipment, businesses often deal with general customer service queues rather than a coordinator who already understands the account and can act quickly",
                  "Missed Opportunities for Service Integration — Businesses that use separate providers for freight, warehousing, and relocation miss the efficiency gains of having these functions coordinated under one accountable partner"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Moving to a structured corporate logistics relationship addresses each of these issues directly — replacing repeated friction with a consistent, accountable partnership that improves over time as your account coordinator becomes more familiar with your business.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment to Every Corporate Logistics Account</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Behind every corporate logistics relationship we manage is a simple standard: your business gets a partner who actually knows how you operate, not a vendor you have to re-brief with every shipment. We've built this standard over 15 years of managing recurring freight, distribution, and relocation needs for businesses that depend on logistics being predictable, not a source of constant friction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every corporate account is assigned a dedicated coordinator who stays with your business over time, building the kind of institutional familiarity that transactional logistics vendors simply can't offer.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Corporate Logistics Consultation Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether your business ships occasionally across borders or manages high-volume, recurring freight and distribution needs, <strong className="text-foreground">Best International Movers & Logistics</strong> can structure a corporate logistics program built around how your business actually operates. Contact us today for a <strong className="text-foreground">free logistics assessment and consultation</strong> to explore how a dedicated corporate account can reduce costs and improve reliability across your shipping operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+923009130211" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
                  <Phone size={18} />
                  0300-9130211
                </a>
                <a href="mailto:info@bestintlmovers.com" className="inline-flex items-center justify-center gap-2 bg-navy-mid text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid/80 transition-colors">
                  <FileText size={18} />
                  info@bestintlmovers.com
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Corporate Logistics Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. What is corporate logistics?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Corporate logistics is the structured, ongoing management of a company's freight, distribution, and supply chain operations through a dedicated account relationship, rather than one-off, transactional shipping arrangements.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. How is corporate logistics different from regular freight services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Corporate logistics includes a dedicated account coordinator, volume-based rate agreements, and consistent processes across every shipment, while regular freight services are typically booked individually without ongoing account structure.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. What types of businesses benefit from corporate logistics accounts?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Manufacturers with recurring exports, retail chains with multi-branch distribution, multinational corporations, import/export businesses, and companies with ongoing equipment or asset logistics needs all benefit from structured corporate accounts.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Do corporate logistics accounts reduce shipping costs?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, volume-based rate agreements typically reduce per-shipment costs compared to booking individual shipments at standard rates, particularly for businesses with consistent or high-volume shipping activity.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Can you manage logistics for a business with multiple branch locations?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our corporate logistics accounts are structured to provide centralized, consistent logistics management across multiple offices, warehouses, or retail locations under one account.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Do you provide customs brokerage as part of corporate logistics services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our licensed customs brokers manage documentation, HS code classification, and duty calculation consistently across every shipment for corporate accounts with ongoing import/export activity.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. How is pricing structured for corporate logistics accounts?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pricing is typically based on shipment volume and frequency, with negotiated rates on frequently used routes and consolidated pricing for businesses using multiple services together.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. What is included in a dedicated account coordinator's role?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Your account coordinator manages day-to-day freight bookings, customs coordination, and any warehousing or relocation needs, serving as a consistent single point of contact for your business.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">9. Can corporate logistics accounts include warehousing and business relocation services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our corporate logistics model can consolidate freight, warehousing, customs clearance, and business relocation services under one integrated account relationship.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">10. How do I set up a corporate logistics account?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We begin with a business assessment and logistics audit to understand your current shipment activity, followed by a custom program design and dedicated coordinator assignment.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">11. Which industries do you support with corporate logistics services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We support manufacturing, retail, e-commerce, construction, import/export, and multinational corporate clients, among other industries with recurring logistics needs.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">12. Do you provide reporting and visibility into corporate logistics performance?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, corporate accounts receive standardized shipment tracking and periodic reporting, giving your team consistent visibility into logistics activity and performance.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">13. Can a corporate logistics account scale as our business grows?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our corporate logistics programs are designed to scale with your business's shipment volume, adjusting capacity and rate structures as your operations grow.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">14. Do you support both domestic and international corporate logistics needs?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our corporate logistics accounts cover domestic cargo transport as well as international freight, customs, and destination delivery for businesses trading globally.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">15. How do I get started with a corporate logistics consultation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contact us via phone, WhatsApp, or our online form to schedule a free logistics assessment. We'll review your current shipping activity and propose a corporate account structure suited to your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg">
                Request Free Logistics Assessment
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CorporateLogisticsPakistan;
