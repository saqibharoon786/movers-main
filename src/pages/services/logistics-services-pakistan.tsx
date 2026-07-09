import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Package,
  Globe,
  Ship,
  Plane,
  FileText,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  Award,
  Zap,
  Truck,
  Warehouse,
  Car,
  Building2
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
    name: "Logistics Services Pakistan — Best International Movers & Logistics",
    serviceType: "Logistics Services",
    description: "Reliable logistics services in Pakistan — air freight, sea freight, customs clearance, warehousing & cargo solutions for businesses. 15+ years experience, 100+ countries. Get a free quote.",
    url: "https://bestintlmovers.com/services/logistics-services-pakistan/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const LogisticsServicesPakistan = () => {
  const serviceSeo = {
    title: "Logistics Services Pakistan | Freight, Cargo & Supply Chain Solutions",
    description: "Reliable logistics services in Pakistan — air freight, sea freight, customs clearance, warehousing & cargo solutions for businesses. 15+ years experience, 100+ countries. Get a free quote.",
    keywords: "logistics services pakistan, freight forwarding company pakistan, cargo services pakistan, logistics company near me, air freight pakistan, sea freight pakistan, customs clearance pakistan, warehousing pakistan",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/logistics-services-pakistan/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Truck size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Logistics Services Pakistan
                </h1>
                <p className="text-gold font-semibold mt-1">Reliable Freight, Cargo & Supply Chain Solutions</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Air Freight</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Sea Freight</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Customs Clearance</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Warehousing</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Supply Chain</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">100+ Countries</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={14} /> Islamabad</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Rawalpindi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Lahore</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Karachi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Peshawar</span>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Updated June 2026 | 15+ Years Freight & Cargo Experience | Global Partner Network | 100+ Countries Served
            </p>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">📌 Logistics Services at a Glance</h2>
              <CheckList
                items={[
                  "15+ Years of Freight & Cargo Experience — proven track record across every major industry",
                  "Global Partner Network — Maersk Line, Emirates SkyCargo, MSC Shipping, DHL Global, Hapag-Lloyd, DB Schenker",
                  "100+ Countries Served — Gulf, Europe, North America, Asia and beyond",
                  "Multi-Modal Freight Options — air, sea, and land freight tailored to timeline and budget",
                  "In-House Customs Brokerage — licensed clearance experts handling documentation and compliance",
                  "Warehousing & Storage — secure, monitored storage facilities for inventory and staging",
                  "Real-Time Shipment Tracking — milestone updates at every stage of the journey",
                  "Dedicated Account Coordinators — single point of contact managing your shipments",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">What Are Logistics Services?</h2>
              <p className="text-muted-foreground mb-6">
                Logistics services encompass the planning, transportation, storage, and management of goods as they move from origin to destination. A complete logistics services provider handles everything in between — freight booking, documentation, customs clearance, warehousing, last-mile delivery, and real-time shipment tracking — so businesses don't have to manage multiple vendors or absorb the risk of coordination gaps.
              </p>
              <p className="text-muted-foreground mb-6">
                In Pakistan's business environment, where import/export regulations, port congestion, and inland transport conditions can all affect delivery timelines, working with an experienced logistics company in Pakistan isn't optional — it's essential for protecting your supply chain and your bottom line.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why Businesses Choose Our Logistics Services in Pakistan</h2>
              <CheckList
                items={[
                  "15+ Years of Freight & Cargo Experience — Proven track record moving goods for businesses across every major industry in Pakistan.",
                  "Global Partner Network — Direct partnerships with Maersk Line, Emirates SkyCargo, MSC Shipping, DHL Global, Hapag-Lloyd, and DB Schenker, giving us access to competitive rates and reliable capacity on major trade lanes.",
                  "100+ Countries Served — Whether your shipment is headed to the Gulf, Europe, North America, or across Asia, we have the network to deliver it.",
                  "Multi-Modal Freight Options — Air, sea, and land freight solutions tailored to your timeline and budget.",
                  "In-House Customs Brokerage — Licensed customs clearance experts who handle documentation, duty calculation, and compliance so your cargo doesn't sit stuck at the port or airport.",
                  "Warehousing & Storage — Secure, monitored storage facilities for inventory, overflow stock, and staging before final delivery.",
                  "Real-Time Shipment Tracking — Milestone updates at every stage of the journey, from pickup to final delivery.",
                  "Dedicated Account Coordinators — A single point of contact managing your shipments, not a rotating call center.",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Our Core Logistics Services in Pakistan</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Plane size={18} /> Air Freight Services</h3>
                  <p className="text-muted-foreground mb-3">For time-sensitive shipments, our air cargo services move urgent inventory, high-value goods, and time-critical shipments quickly and securely. We coordinate airport handoffs, export documentation, and destination delivery with full milestone tracking. Our air freight network covers Islamabad, Rawalpindi, Lahore, and Karachi, connecting to major global hubs including Dubai, Doha, Riyadh, London, New York, and Toronto.</p>
                  <p className="text-muted-foreground">Read more about our <Link to="/air-freight-islamabad/" className="text-gold hover:underline">Air Freight Islamabad services</Link> for lane-specific transit times and rates.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Ship size={18} /> Sea Freight Services</h3>
                  <p className="text-muted-foreground">For businesses shipping full container loads (FCL) or less-than-container loads (LCL), our ocean freight solutions offer a cost-effective alternative to air cargo for non-urgent, high-volume shipments. We manage container booking, port handling, and destination delivery for imports and exports moving through Karachi Port and Port Qasim.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><FileText size={18} /> Customs Clearance & Brokerage</h3>
                  <p className="text-muted-foreground">Customs delays are one of the biggest risks to any supply chain. Our licensed customs brokers handle import/export documentation, HS code classification, duty and tax calculation, and compliance with Pakistan Customs regulations — ensuring your cargo clears quickly without unnecessary holding charges or penalties.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Warehouse size={18} /> Warehousing & Storage Solutions</h3>
                  <p className="text-muted-foreground">We provide secure, monitored warehousing for businesses that need inventory staging, overflow storage, or distribution support. Our storage facilities are climate-appropriate and access-controlled, suitable for retail inventory, industrial equipment, and household goods awaiting final delivery.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Truck size={18} /> Domestic & Intercity Cargo Transport</h3>
                  <p className="text-muted-foreground">Beyond international freight, we manage domestic cargo movement between major Pakistani cities — supporting businesses that need reliable inland transport between manufacturing sites, warehouses, and retail locations across Islamabad, Rawalpindi, Lahore, Karachi, and Peshawar.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Building2 size={18} /> Corporate & Business Relocation Logistics</h3>
                  <p className="text-muted-foreground mb-3">Logistics isn't just about cargo — it's also about relocating entire business operations. Our team supports full office moving services for companies relocating headquarters, branch offices, or operational sites, combining freight-grade handling with business-critical scheduling.</p>
                  <p className="text-muted-foreground">Learn more about how we manage full office transitions on our <Link to="/services/office-moving-services/" className="text-gold hover:underline">Office Moving Services</Link> page.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Car size={18} /> Vehicle & Equipment Shipping</h3>
                  <p className="text-muted-foreground">We provide insured vehicle shipping via enclosed or open carriers, along with specialized handling for industrial machinery and business equipment that requires custom crating or freight-specific handling.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Industries We Serve</h2>
              <p className="text-muted-foreground mb-6">Our logistics services in Pakistan support a wide range of industries:</p>
              <CheckList
                items={[
                  "Import & Export Businesses — End-to-end freight and customs support for cross-border trade",
                  "Manufacturing & Industrial — Inbound raw material logistics and outbound finished goods distribution",
                  "Retail & E-Commerce — Inventory logistics, warehousing, and last-mile delivery coordination",
                  "Corporate & Multinational Offices — Business relocation logistics and equipment shipping",
                  "Textile & Garment Exporters — Time-sensitive freight coordination for international buyers",
                  "Pharmaceutical & Healthcare — Careful handling logistics for sensitive and regulated goods",
                  "Automotive & Machinery — Vehicle shipping and heavy equipment freight",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">How Our Logistics Process Works</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Clock size={18} /> 1. Consultation & Freight Assessment</h3>
                  <p className="text-muted-foreground">We start by understanding your shipment — cargo type, volume, weight, destination, and timeline — to recommend the most cost-effective and reliable freight mode.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><FileText size={18} /> 2. Documentation & Customs Preparation</h3>
                  <p className="text-muted-foreground">Our team prepares and verifies all required export/import documentation in advance, minimizing the risk of delays at customs checkpoints.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Package size={18} /> 3. Booking & Freight Coordination</h3>
                  <p className="text-muted-foreground">We book cargo space with our carrier partners — whether air, sea, or land — securing competitive rates through our established global network.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Globe size={18} /> 4. Transit & Real-Time Tracking</h3>
                  <p className="text-muted-foreground">Your shipment is tracked at every milestone, from pickup through customs clearance to final delivery, with updates shared directly with your team.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><CheckCircle2 size={18} /> 5. Final Delivery & Confirmation</h3>
                  <p className="text-muted-foreground">We coordinate last-mile delivery to your specified destination, whether that's a warehouse, retail location, port, or your business's front door — with confirmation and documentation closure at handover.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Logistics Services Across Pakistan's Major Cities</h2>
              <p className="text-muted-foreground mb-6">We provide logistics and freight services in every major commercial hub in Pakistan:</p>
              <CheckList
                items={[
                  "Logistics Services Islamabad — Blue Area, I-9 Industrial Area, and surrounding commercial zones",
                  "Logistics Services Rawalpindi — Saddar, Bahria Town, and industrial corridors",
                  "Logistics Services Lahore — Manufacturing and export hubs across the city",
                  "Logistics Services Karachi — Direct port access via Karachi Port and Port Qasim for import/export cargo",
                  "Logistics Services Peshawar — Regional freight coordination for Khyber Pakhtunkhwa businesses",
                ]}
              />
              <p className="text-muted-foreground mt-4">No matter where your business operates, our logistics network is built to connect Pakistani cities to over 100 countries worldwide.</p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Cost Factors in Logistics Services</h2>
              <p className="text-muted-foreground mb-6">The cost of logistics services in Pakistan depends on several variables:</p>
              <CheckList
                items={[
                  "Freight Mode — Air freight is faster but costs more; sea freight is more economical for larger, non-urgent shipments",
                  "Cargo Volume & Weight — Larger shipments benefit from better per-unit freight rates",
                  "Destination — Distance and route complexity affect transit time and pricing",
                  "Customs Classification — Duty and tax obligations vary based on HS code and product category",
                  "Additional Services — Warehousing, insurance, and specialized packing add to the total cost but reduce risk",
                ]}
              />
              <InfoBox variant="gold">
                <strong>Transparent Pricing</strong>
                <p className="mt-2">We provide transparent, itemized quotes for every logistics engagement — no hidden fees, no surprise charges at delivery.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why Professional Logistics Partners Matter</h2>
              <p className="text-muted-foreground mb-6">Businesses that try to manage international or domestic freight without an experienced logistics partner often face:</p>
              <CheckList
                items={[
                  "Customs delays due to incomplete or incorrect documentation",
                  "Higher freight costs from lack of carrier negotiation leverage",
                  "Damaged goods due to improper packing or handling",
                  "Lost visibility into shipment status during transit",
                  "Compliance risks from misclassified goods or missing paperwork",
                ]}
              />
              <InfoBox variant="green">
                <strong>Professional Advantage</strong>
                <p className="mt-2">A professional logistics company eliminates these risks with established carrier relationships, licensed customs expertise, and a structured process that keeps your supply chain predictable.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Common Logistics Challenges in Pakistan (And How We Solve Them)</h2>
              <p className="text-muted-foreground mb-6">Businesses operating in Pakistan face a unique set of logistics challenges that differ from other markets. Understanding these challenges — and how a professional logistics partner addresses them — helps businesses plan more realistic timelines and budgets.</p>
              <CheckList
                items={[
                  "Port Congestion at Karachi Port & Port Qasim — Seasonal cargo surges can create backlogs at Pakistan's major ports. We monitor port conditions and adjust booking schedules to avoid unnecessary delays wherever possible.",
                  "Inconsistent Documentation Requirements — Customs documentation standards can shift with regulatory updates. Our in-house customs brokers stay current on Pakistan Customs requirements so your paperwork is correct the first time, avoiding costly resubmissions.",
                  "Inland Transport Bottlenecks — Road conditions, seasonal weather, and city traffic patterns can all affect delivery timelines between ports, airports, and final destinations. We build realistic buffer windows into every delivery schedule based on real operating conditions.",
                  "Currency & Duty Fluctuations — Import duty rates and exchange rate shifts can affect landed costs. We provide duty estimates upfront so businesses aren't caught off guard by unexpected charges at clearance.",
                  "Fragmented Vendor Management — Many businesses juggle separate vendors for freight, customs, warehousing, and last-mile delivery — creating accountability gaps when something goes wrong. Our integrated logistics model puts one team and one point of contact in charge of your entire shipment lifecycle.",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Benefits of Outsourcing Logistics to a Professional Partner</h2>
              <p className="text-muted-foreground mb-6">For growing businesses, managing freight, customs, and warehousing in-house often becomes a costly distraction from core operations. Partnering with an established logistics services provider delivers measurable advantages:</p>
              <CheckList
                items={[
                  "Cost Efficiency — Access to negotiated carrier rates that individual businesses typically can't secure on their own",
                  "Reduced Risk — Licensed customs expertise minimizes compliance issues and clearance delays",
                  "Scalability — Logistics support that scales up during peak seasons and scales down during slower periods, without the overhead of maintaining an in-house logistics team",
                  "Time Savings — Freeing internal teams to focus on sales, production, and customer service instead of freight coordination",
                  "Improved Reliability — Established carrier relationships and structured processes reduce the chance of shipment delays or errors",
                  "Better Visibility — Centralized tracking and reporting instead of chasing updates across multiple vendors",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Technology & Tracking in Our Logistics Operations</h2>
              <p className="text-muted-foreground mb-6">Modern logistics depends on visibility. Throughout your shipment's journey, we provide:</p>
              <CheckList
                items={[
                  "Milestone-based status updates shared directly with your team",
                  "Digital documentation records for customs and compliance purposes",
                  "Coordinated communication between freight, customs, and delivery teams to avoid handoff gaps",
                  "Post-delivery confirmation and closure reporting for your internal records",
                ]}
              />
              <InfoBox variant="blue">
                <strong>Structured Tracking Approach</strong>
                <p className="mt-2">This structured tracking approach means you always know where your cargo is — not just when it left, and when it (hopefully) arrives.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Seasonal Planning for Logistics in Pakistan</h2>
              <p className="text-muted-foreground mb-6">Certain times of year create predictable logistics pressure points in Pakistan — including pre-Eid retail import surges, year-end shipping rushes, and monsoon-season inland transport slowdowns. We work with returning clients to plan shipments ahead of these peak periods, securing freight capacity and customs slots before demand spikes drive up costs and extend timelines. If your business has predictable seasonal shipping needs, our team can build a forward-looking freight calendar to keep your supply chain ahead of these pressure points rather than reacting to them.</p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Our Commitment to Reliable Logistics</h2>
              <p className="text-muted-foreground mb-6">
                At the core of every shipment we handle is a simple commitment: your cargo arrives on time, intact, and fully documented — with no surprises along the way. We built our reputation over 15 years by treating every shipment, whether it's a single pallet or a full container load, with the same level of accountability. Our team doesn't disappear once your cargo leaves the origin point; we stay engaged through every checkpoint, every customs interaction, and every handoff until your goods are confirmed delivered. This is the standard that has made us one of Pakistan's most trusted names in freight and logistics — and it's the standard we apply to every new client relationship, regardless of shipment size.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Frequently Asked Questions — Logistics Services Pakistan</h2>
              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">1. What logistics services do you offer in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">We offer air freight, sea freight, customs clearance, warehousing, domestic cargo transport, vehicle shipping, and full business relocation logistics — covering every major city in Pakistan and 100+ countries internationally.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">2. Which cities do you provide logistics services in?</h3>
                  <p className="text-muted-foreground text-sm">We provide logistics services in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, and other major cities, with direct port and airport access for international freight.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">3. How much do logistics services cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Costs depend on freight mode (air vs. sea), cargo volume, destination, and any additional services like warehousing or specialized packing. We provide a transparent, itemized quote after assessing your shipment.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">4. What's the difference between air freight and sea freight?</h3>
                  <p className="text-muted-foreground text-sm">Air freight is faster and ideal for urgent or high-value shipments, while sea freight is more cost-effective for larger, non-time-sensitive cargo. We help you choose the right mode based on your timeline and budget.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">5. Do you handle customs clearance for imports and exports?</h3>
                  <p className="text-muted-foreground text-sm">Yes. Our licensed customs brokers manage documentation, HS code classification, duty calculation, and compliance with Pakistan Customs to ensure smooth clearance.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">6. Can you help with warehousing and storage?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we offer secure, monitored warehousing solutions for inventory staging, overflow stock, and short or long-term storage needs.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">7. Do you provide logistics services for small businesses, not just large corporations?</h3>
                  <p className="text-muted-foreground text-sm">Yes. Our logistics solutions scale from single-shipment support for small businesses to full supply chain management for large enterprises.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">8. How long does international freight shipping take from Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Transit times vary by mode and destination — air freight typically takes days, while sea freight can take several weeks depending on the route. We provide route-specific timelines during consultation.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">9. Do you offer real-time shipment tracking?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we provide milestone-based tracking updates throughout the shipping process, from pickup to final delivery.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">10. Which carriers and shipping lines do you work with?</h3>
                  <p className="text-muted-foreground text-sm">We partner with major global carriers including Maersk Line, Emirates SkyCargo, MSC Shipping, DHL Global, Hapag-Lloyd, and DB Schenker.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">11. Can you handle both domestic and international logistics?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we manage intercity cargo transport within Pakistan as well as full international freight and customs coordination for global shipments.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">12. Do you provide vehicle and heavy equipment shipping?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we offer insured vehicle shipping via enclosed or open carriers, along with specialized freight handling for industrial machinery and equipment.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">13. Is my cargo insured during transit?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we offer insurance coverage options for cargo in transit to protect against loss or damage.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">14. Can you support business relocation logistics, not just freight?</h3>
                  <p className="text-muted-foreground text-sm">Yes, our logistics network extends into full business and office relocation support, combining freight-grade handling with structured moving timelines.</p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">15. How do I get a logistics quote from your company?</h3>
                  <p className="text-muted-foreground text-sm">Contact us via phone, WhatsApp, or our online quote form with your shipment details. We'll respond with a transparent, itemized quote and freight recommendation within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Logistics Quote Today</h2>
              <p className="text-muted-foreground mb-6">Whether you need a single air freight shipment, ongoing sea freight support for your import/export business, or complete logistics management for your company's supply chain, Best International Movers & Logistics has the network, experience, and licensed expertise to keep your cargo moving.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Truck size={18} />
                  Get Free Logistics Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Logistics Team
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Call/WhatsApp: 0300-9130211 | Email: info@bestintlmovers.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default LogisticsServicesPakistan;
