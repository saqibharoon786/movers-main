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
  Activity
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
    name: "Business Relocation Services Pakistan | Best International Movers & Logistics",
    serviceType: "Business Relocation",
    description: "Complete business relocation services in Pakistan — offices, warehouses, machinery & full facility moves. Zero-downtime relocation for corporates & industries. Free site survey & quote.",
    url: "https://bestintlmovers.com/services/business-relocation-pakistan/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
};

const BusinessRelocationPakistan = () => {
  const serviceSeo = {
    title: "Business Relocation Services Pakistan | Complete Corporate Moving Solutions",
    description: "Complete business relocation services in Pakistan — offices, warehouses, machinery & full facility moves. Zero-downtime relocation for corporates & industries. Free site survey & quote.",
    keywords: "business relocation pakistan, corporate relocation company, commercial moving services pakistan, company shifting services, office relocation services, warehouse relocation, industrial equipment moving, corporate movers islamabad, corporate movers lahore, corporate movers karachi",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/business-relocation-pakistan/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Building2 size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Business Relocation Pakistan
                </h1>
                <p className="text-muted-foreground mt-1">Complete Corporate & Facility Moving Solutions</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Relocating a business is never just about moving boxes from one address to another. It's about protecting revenue, keeping employees productive, safeguarding equipment, and making sure clients never notice a disruption. <strong className="text-foreground">Best International Movers & Logistics</strong> provides complete <strong className="text-foreground">business relocation services in Pakistan</strong> — covering everything from office moves and warehouse transitions to heavy machinery relocation and full multi-facility corporate moves — built around one core principle: your business should keep running while it changes address.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 15 years, we've relocated startups, corporate headquarters, manufacturing plants, warehouses, and multinational branch offices across Pakistan. If you searched for "<strong className="text-foreground">business relocation Pakistan</strong>," "corporate relocation company," "commercial moving services Pakistan," or "company shifting services," this page is your complete guide to how we plan and execute business relocations of every size and complexity.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Business Relocation?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Business relocation refers to the complete process of moving a company's physical operations — offices, warehouses, production facilities, or a combination of all three — from one location to another. Unlike residential moving, <strong className="text-foreground">business relocation</strong> requires coordination across multiple departments, careful handling of IT infrastructure and confidential data, minimal disruption to daily operations, and often the simultaneous management of several move types happening at once.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A professional <strong className="text-foreground">business relocation company</strong> doesn't just transport assets. It manages the entire transition: pre-move planning and timeline coordination, employee communication support, IT and equipment handling, inventory and machinery relocation where applicable, and a structured setup process at the new location — so your business is fully operational again as quickly as possible.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Businesses Across Pakistan Choose Our Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Corporate Relocation Experience — A proven track record managing relocations for startups, corporates, manufacturers, and multinational branch offices",
                  "One Provider for Every Move Type — Offices, warehouses, machinery, and IT infrastructure handled under a single coordinated project instead of multiple disconnected vendors",
                  "Zero-Downtime Planning Approach — Move scheduling designed around your business hours, peak seasons, and operational priorities",
                  "Trained, Specialized Teams — Dedicated expertise for office furniture, IT equipment, warehouse racking, and heavy industrial machinery — not generalist labor handling everything the same way",
                  "Full Insurance Coverage — Every asset moved is covered against damage or loss throughout the relocation",
                  "Dedicated Move Coordinator — A single point of contact managing your entire relocation timeline, regardless of how many facility types are involved",
                  "Nationwide & International Capability — From a local office shift to relocating an entire company's operations to another country",
                  "Transparent, Itemized Quotes — No hidden charges — you know the full scope and cost before the move begins"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Business Relocation We Handle</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Building2 size={18} className="text-gold" />
                    Office & Corporate Relocation
                  </h4>
                  <p className="text-muted-foreground text-sm">Full-scale office moves for startups, corporate headquarters, and multinational branch offices — including IT equipment, confidential documents, and executive furniture. Our zero-downtime scheduling means your team can return to a fully functional office without losing working days. <Link to="/services/office-moving-services/" className="text-gold hover:underline">Explore our Office Moving Services</Link>.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Warehouse size={18} className="text-gold" />
                    Warehouse & Distribution Center Relocation
                  </h4>
                  <p className="text-muted-foreground text-sm">Facility moves involving racking systems, SKU-tracked inventory, and material handling equipment, executed with phased planning to minimize disruption to order fulfillment. <Link to="/services/warehouse-relocation/" className="text-gold hover:underline">Learn about our Warehouse Relocation</Link>.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={18} className="text-gold" />
                    Heavy Machinery & Industrial Equipment Relocation
                  </h4>
                  <p className="text-muted-foreground text-sm">Rigging, dismantling, permit-compliant transport, and reinstallation of production equipment, generators, and industrial machinery — handled with certified engineering expertise. <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Full details on Heavy Machinery Relocation</Link>.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    Retail & Showroom Relocation
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocation of display fixtures, signage, and inventory for retail chains and showrooms transitioning to new locations, with careful handling to avoid damage to fixtures and product stock.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Multi-Facility & Full Company Relocation
                  </h4>
                  <p className="text-muted-foreground text-sm">For businesses relocating an entire operation — combining office, warehouse, and production facilities into a coordinated move — we manage the complete transition as one unified project with a single timeline and point of accountability.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-gold" />
                    International Business Relocation
                  </h4>
                  <p className="text-muted-foreground text-sm">For companies expanding abroad or relocating headquarters internationally, our team coordinates freight, customs documentation, and destination delivery through our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> division.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Business Relocation Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    1. Discovery & Site Survey
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We begin with a detailed consultation to understand your business's relocation scope — office, warehouse, machinery, or a combination — followed by a site survey at both the current and new locations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={20} className="text-gold" />
                    2. Custom Relocation Plan & Timeline
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Based on the survey, we build a move plan tailored to your business, including phasing strategy, scheduling around operational hours, and coordination across every facility type involved.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileLock size={20} className="text-gold" />
                    3. Pre-Move Preparation & Inventory Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All assets — furniture, IT equipment, inventory, or machinery — are tagged, labeled, and documented against a layout plan for the new location.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={20} className="text-gold" />
                    4. Packing, Dismantling & Secure Loading
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized teams handle packing and dismantling according to asset type — IT-safe packing for electronics, rigging for machinery, and SKU tracking for warehouse inventory.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    5. Transport & Real-Time Coordination
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Assets are transported using appropriate vehicles for each move type, with a dedicated coordinator managing the timeline and keeping your team updated throughout.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={20} className="text-gold" />
                    6. Setup, Reassembly & Final Walkthrough
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    At the new location, our teams handle furniture setup, machinery reinstallation, and inventory restocking according to the pre-planned layout, followed by a final walkthrough to confirm everything is in place.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What's Included in Our Business Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Free consultation and site survey at both locations",
                  "Custom relocation plan tailored to your business type and scope",
                  "Asset tagging, labeling, and documentation",
                  "Specialized packing for IT equipment, furniture, and sensitive machinery",
                  "Dismantling and reassembly of furniture, racking, and equipment",
                  "Secure, insured transport for all asset types",
                  "Dedicated move coordinator managing the full project",
                  "Post-move setup and final walkthrough",
                  "Optional short-term or long-term storage",
                  "International freight and customs coordination, where applicable"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">business relocation services in Pakistan</strong> support companies across nearly every sector:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Monitor size={18} className="text-gold" />
                    IT & Technology Companies
                  </h4>
                  <p className="text-muted-foreground text-sm">Office and data infrastructure relocation with minimal system downtime.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Manufacturing & Industrial Businesses
                  </h4>
                  <p className="text-muted-foreground text-sm">Combined machinery, warehouse, and office relocation.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    Textile & Garment Exporters
                  </h4>
                  <p className="text-muted-foreground text-sm">Production facility and warehouse moves tied to export operations.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Building2 size={18} className="text-gold" />
                    Retail & E-Commerce Businesses
                  </h4>
                  <p className="text-muted-foreground text-sm">Store, showroom, and fulfillment center relocation.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileLock size={18} className="text-gold" />
                    Banks & Financial Institutions
                  </h4>
                  <p className="text-muted-foreground text-sm">Secure handling of confidential records and compliance-sensitive equipment.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-gold" />
                    Law Firms & Professional Services
                  </h4>
                  <p className="text-muted-foreground text-sm">Confidential document handling during office transitions.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Activity size={18} className="text-gold" />
                    Pharmaceutical & Healthcare Companies
                  </h4>
                  <p className="text-muted-foreground text-sm">Compliance-conscious relocation of offices, warehouses, and equipment.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-gold" />
                    Multinational Corporations
                  </h4>
                  <p className="text-muted-foreground text-sm">Full-scale local and international branch relocations.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Business Relocation Services Across Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide <strong className="text-foreground">business and corporate relocation services</strong> in every major commercial hub in Pakistan:
              </p>
              <CheckList
                items={[
                  "Business Relocation Islamabad — Blue Area, F-Sectors, I-9/I-10 Industrial Areas, Bahria Town commercial zones",
                  "Business Relocation Rawalpindi — Saddar, Bahria Town, and industrial estates",
                  "Business Relocation Lahore — Gulberg, DHA Lahore, Sundar Industrial Estate, Kot Lakhpat",
                  "Business Relocation Karachi — I.I. Chundrigar Road, Clifton, DHA Karachi, SITE and Korangi Industrial Areas",
                  "Business Relocation Faisalabad — Textile manufacturing and industrial relocation support",
                  "Business Relocation Peshawar — Hayatabad Industrial Estate and commercial districts"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                No matter which city — or combination of cities — your business operates in, our teams arrive equipped with the right expertise, vehicles, and manpower to complete your relocation on schedule.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Minimizing Downtime During a Business Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Downtime is the single biggest cost businesses face during relocation — every hour of non-operation can mean lost revenue and frustrated clients. Our approach to minimizing downtime includes:
              </p>
              <CheckList
                items={[
                  "Phased Relocation Planning — Moving non-critical functions first while keeping essential operations running until the final transition window",
                  "Weekend & After-Hours Scheduling — Major moves scheduled outside business hours so teams return to a functional workspace without losing working days",
                  "IT-First Prioritization — Ensuring internet, servers, and communication systems are reconnected before general setup, so business-critical functions resume quickly",
                  "Parallel Setup at the New Location — Where timelines allow, furniture and equipment setup begins at the destination before the final move-out, cutting total transition time"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Many of our corporate clients have successfully relocated entire operations over a single weekend, returning to fully functional facilities on Monday morning.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors in Business Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cost of a <strong className="text-foreground">business relocation</strong> depends on several variables:
              </p>
              <CheckList
                items={[
                  "Scope of the move — Office-only relocation versus a combined office, warehouse, and machinery move",
                  "Business size — Number of employees, departments, and physical assets being relocated",
                  "Distance — Local relocation versus intercity or international moves",
                  "Equipment complexity — Standard furniture versus specialized IT infrastructure or industrial machinery",
                  "Timing requirements — After-hours or weekend scheduling to minimize disruption",
                  "Additional services — Temporary storage, disposal of old furniture, or new facility setup assistance"
                ]}
              />
              <InfoBox variant="save">
                <strong>💰 Free Consultation:</strong> We provide a free, no-obligation consultation and site survey for every business relocation project, so you know the full scope and cost before committing.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Professional Business Relocation Partners Matter</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Businesses that attempt to manage relocation internally — using regular staff or unspecialized movers — frequently face:
              </p>
              <CheckList
                items={[
                  "Extended downtime from poorly sequenced, unplanned moves",
                  "Damaged IT equipment, furniture, or machinery due to improper handling",
                  "Lost or disorganized files, inventory, or equipment components",
                  "No insurance coverage if assets are damaged or lost during the move",
                  "Coordination breakdowns when multiple vendors handle different parts of the same relocation"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                A professional <strong className="text-foreground">business relocation company</strong> eliminates these risks by managing every asset type — furniture, IT, inventory, and machinery — under one coordinated plan, with a single point of accountability from start to finish.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Signs Your Business Needs Professional Relocation Support</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Not every move requires a full-scale professional relocation partner — but certain signs make it clear that DIY or piecemeal approaches will cost more than they save:
              </p>
              <CheckList
                items={[
                  "Multiple Asset Types Involved — If your move includes office furniture, IT infrastructure, and even a small amount of specialized equipment, coordinating separate vendors for each often creates more delays than it saves in cost",
                  "Tight Operational Deadlines — If your business cannot afford more than a day or two of reduced operations, professional phased planning becomes essential rather than optional",
                  "High-Value or Sensitive Assets — Confidential documents, expensive IT infrastructure, or specialized machinery all carry risks that untrained labor and general transport aren't equipped to manage safely",
                  "Multi-Location Complexity — Relocations spanning more than one facility or city benefit significantly from a single coordinated timeline rather than independently managed moves",
                  "Lease Deadline Pressure — When your old lease is ending and your new space has a hard move-in date, professional scheduling reduces the risk of costly overlap charges or rushed, poorly planned transitions"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                If any of these apply to your upcoming move, a consultation with a relocation specialist — even before finalizing your new location — can help you plan a realistic timeline and budget from the start.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Planning a Business Relocation? Read Our Complete Guides</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For businesses planning a relocation, we've published detailed guides based on real projects we've executed across Pakistan:
              </p>
              <div className="space-y-3">
                <Link to="/blog/office-relocation-karachi-zero-downtime-guide-2026/" className="block p-4 bg-navy-mid/20 rounded-lg hover:bg-navy-mid/30 transition-colors">
                  <h4 className="font-semibold text-foreground mb-1">Office Relocation Karachi — The Complete Zero Downtime Guide 2026</h4>
                  <p className="text-muted-foreground text-sm">Real timelines, checklists, and lessons learned from actual office relocations in Karachi.</p>
                </Link>
                <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="block p-4 bg-navy-mid/20 rounded-lg hover:bg-navy-mid/30 transition-colors">
                  <h4 className="font-semibold text-foreground mb-1">Complete Guide to Heavy Machinery Relocation in Pakistan 2026</h4>
                  <p className="text-muted-foreground text-sm">Everything manufacturers need to know about rigging, permits, safety, and costs.</p>
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment to Every Business Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Behind every business relocation we handle is a simple standard: your operations resume as quickly as possible, with every asset accounted for and nothing left to chance. We've built this standard over 15 years of relocating businesses that couldn't afford extended downtime — from single-office startups to multinational corporations managing multi-facility transitions across Pakistan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every relocation project, regardless of size, is treated with the same level of planning discipline and accountability, because we know that for the business on the other end of the move, this isn't just logistics — it's the continuity of everything they've built.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Business Relocation Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're relocating a small startup office, a full warehouse and production facility, or an entire multinational branch, <strong className="text-foreground">Best International Movers & Logistics</strong> has the experience, specialized teams, and coordinated process to make your business relocation seamless. Contact us today for a <strong className="text-foreground">free consultation and no-obligation quote</strong> for business relocation anywhere in Pakistan — or internationally.
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Business Relocation Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. What is included in business relocation services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Business relocation services cover the complete move of a company's physical operations — offices, warehouses, production facilities, and equipment — including packing, transport, setup, and coordination across every asset type.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. How much does business relocation cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Costs depend on the scope of the move, business size, distance, equipment complexity, and timing requirements. We provide a free consultation and site survey for an accurate, itemized quote.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Can you handle relocations involving both an office and a warehouse?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we coordinate combined relocations — office, warehouse, and machinery — as a single, unified project with one timeline and one point of accountability.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. How long does a business relocation take?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Timelines vary based on scope — a small office move may take a weekend, while a full multi-facility relocation can take several weeks of phased planning.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Can you relocate our business without disrupting operations?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we specialize in zero-downtime relocation planning, using phased moves and after-hours scheduling to minimize disruption to daily operations.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Do you handle IT equipment during business relocations?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our team is trained to safely disconnect, pack, transport, and reconnect computers, servers, and networking equipment as part of any business relocation.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Which cities do you provide business relocation services in?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide business relocation services in Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar, and other major cities across Pakistan, along with international relocation options.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Can you relocate manufacturing equipment as part of a business move?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our team includes certified rigging expertise for heavy machinery and industrial equipment relocation as part of a broader business move.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">9. Is our equipment and inventory insured during relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, all assets — furniture, IT equipment, inventory, and machinery — are covered by insurance throughout the relocation process.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">10. Do you provide storage if our new location isn't ready yet?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we offer short-term and long-term storage solutions for furniture, equipment, and inventory if there's a timing gap between locations.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">11. Can you help relocate our business internationally?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we coordinate international business relocation, including freight, customs documentation, and destination delivery through our logistics division.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">12. Do you provide a dedicated coordinator for the entire relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, every business relocation project is assigned a dedicated move coordinator managing the full process from initial survey through final setup.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">13. How far in advance should we plan a business relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We recommend starting planning at least four to six weeks in advance for standard office moves, and longer for combined moves involving warehouses or machinery.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">14. Can you relocate a business with multiple locations at once?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we manage multi-facility and multi-location relocations, coordinating timelines across sites to keep the overall transition on schedule.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">15. How do I get a quote for business relocation services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contact us via phone, WhatsApp, or our online quote form with your relocation scope and locations. We'll schedule a free consultation and provide a detailed quote within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg">
                Request Free Consultation
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

export default BusinessRelocationPakistan;
