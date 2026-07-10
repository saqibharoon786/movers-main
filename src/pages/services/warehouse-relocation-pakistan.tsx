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
  Warehouse,
  Settings,
  AlertTriangle,
  FileText,
  Box,
  Barcode
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
    name: "Warehouse Relocation Services Pakistan | Best International Movers & Logistics",
    serviceType: "Warehouse Relocation",
    description: "Professional warehouse relocation services in Pakistan. Safe inventory handling, racking dismantling, forklift transport & zero-disruption warehouse moves. Free site survey & quote.",
    url: "https://bestintlmovers.com/services/warehouse-relocation/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const WarehouseRelocationPakistan = () => {
  const serviceSeo = {
    title: "Warehouse Relocation Services Pakistan | Inventory & Racking Moving Experts",
    description: "Professional warehouse relocation services in Pakistan. Safe inventory handling, racking dismantling, forklift transport & zero-disruption warehouse moves. Free site survey & quote.",
    keywords: "warehouse relocation, warehouse shifting services pakistan, distribution center moving company, inventory relocation services, warehouse movers islamabad, warehouse movers lahore, warehouse movers karachi, warehouse moving company",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/warehouse-relocation/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Warehouse size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Warehouse Relocation Services in Pakistan
                </h1>
                <p className="text-muted-foreground mt-1">Zero-Disruption Inventory & Facility Moving</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Relocating a warehouse is one of the most operationally sensitive moves a business can undertake. Unlike an office move, a warehouse relocation involves thousands of SKUs, heavy racking systems, forklifts, and inventory that must stay accurately tracked at every stage — because a single misplaced pallet or a mislabeled shelf can disrupt fulfillment for weeks. <strong className="text-foreground">Best International Movers & Logistics</strong> provides specialized <strong className="text-foreground">warehouse relocation</strong> services built around one goal: moving your entire facility without losing inventory accuracy, damaging stock, or stopping operations longer than absolutely necessary.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 15 years, we've relocated distribution centers, cold storage facilities, retail warehouses, e-commerce fulfillment hubs, and industrial storage sites for businesses across Pakistan. If you searched for "<strong className="text-foreground">warehouse relocation</strong>," "warehouse shifting services Pakistan," "distribution center moving company," or "inventory relocation services," this page walks you through exactly how we plan and execute warehouse moves that keep your supply chain running.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Warehouse Relocation?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Warehouse relocation is the specialized process of moving an entire storage or distribution facility — including racking systems, inventory, forklifts, packing stations, and administrative areas — from one location to another. Unlike standard freight or office moving, <strong className="text-foreground">warehouse relocation</strong> requires precise inventory tracking, racking dismantling and reassembly, coordinated forklift and heavy equipment transport, and a phased move plan that keeps fulfillment operations running throughout the transition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A professional <strong className="text-foreground">warehouse moving company</strong> manages the entire process: pre-move inventory audits, racking system disassembly, SKU-level tracking during transport, and systematic reassembly and restocking at the new facility — so your team can resume picking, packing, and shipping with minimal delay.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Businesses Trust Our Warehouse Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Facility Relocation Experience — Proven track record moving distribution centers, fulfillment hubs, and industrial storage facilities across Pakistan",
                  "Inventory-Accurate Move Process — SKU-level tracking and labeling systems that prevent lost or misplaced stock during the move",
                  "Racking Dismantling & Reassembly Expertise — Trained technicians who safely disassemble, transport, and reinstall pallet racking, shelving, and mezzanine systems",
                  "Forklift & Heavy Equipment Transport — Safe handling and transport of forklifts, pallet jacks, and other warehouse material handling equipment",
                  "Phased Relocation Planning — Move your warehouse in stages to keep fulfillment and order processing running throughout the transition",
                  "Full Insurance Coverage — Every item — from racking to inventory — is covered against damage or loss during the move",
                  "Minimal Operational Downtime — Move scheduling designed around your order volume and peak business periods",
                  "Nationwide Coverage — From a single-city warehouse shift to relocating a multi-facility distribution network"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Warehouse Relocation Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    1. Pre-Move Site Survey & Inventory Audit
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our team surveys both the current and new warehouse facilities to assess racking layout, inventory volume, access points, and loading dock configurations. A pre-move inventory audit establishes a baseline count so nothing goes missing during the transition.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={20} className="text-gold" />
                    2. Move Planning & Racking Layout Design
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We design a floor plan for the new facility, mapping racking placement, aisle widths, and zone allocation before the move begins — so racking goes up in its final position on the first attempt, not after multiple rearrangements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={20} className="text-gold" />
                    3. Racking Dismantling & Labeling
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pallet racking, shelving units, and mezzanine structures are carefully dismantled by trained technicians, with all components labeled and matched to the new facility's layout plan.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Barcode size={20} className="text-gold" />
                    4. Inventory Packing & SKU Tracking
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Inventory is packed and labeled with SKU-level tracking, ensuring every item can be accounted for from the moment it leaves the original warehouse to the moment it's restocked at the new location.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    5. Transport & Phased Relocation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Depending on warehouse size, we execute the move in phases — relocating slower-moving inventory first while keeping high-demand SKUs operational until the final transition window, minimizing disruption to order fulfillment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Box size={20} className="text-gold" />
                    6. Racking Reassembly & Restocking
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    At the destination, racking systems are reassembled according to the pre-planned layout, and inventory is restocked following the same SKU tracking system used during transport — so your warehouse management system stays accurate from day one.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-gold" />
                    7. Final Walkthrough & Operational Handover
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We complete a final walkthrough with your warehouse or operations manager to confirm racking stability, inventory accuracy, and equipment placement before handing operations back to your team.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What's Included in Our Warehouse Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Free pre-move site survey and inventory audit",
                  "Racking layout design for the new facility",
                  "Dismantling and reassembly of pallet racking, shelving, and mezzanines",
                  "SKU-level inventory tracking and labeling",
                  "Forklift and material handling equipment transport",
                  "Phased relocation planning to minimize downtime",
                  "Secure, insured transport of inventory and equipment",
                  "Restocking support at the new facility",
                  "Post-move inventory reconciliation",
                  "Optional short-term storage for overflow inventory during transition"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Warehouse Facilities We Relocate</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">warehouse relocation</strong> team has direct experience moving a wide range of facility types:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Warehouse size={18} className="text-gold" />
                    Distribution Centers
                  </h4>
                  <p className="text-muted-foreground text-sm">Large-scale relocation of multi-zone distribution facilities with high SKU counts.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    E-Commerce Fulfillment Hubs
                  </h4>
                  <p className="text-muted-foreground text-sm">Fast-paced relocations designed to minimize disruption to order processing and shipping timelines.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Box size={18} className="text-gold" />
                    Retail & Wholesale Warehouses
                  </h4>
                  <p className="text-muted-foreground text-sm">Inventory-heavy relocations for retail chains and wholesale distributors.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-gold" />
                    Cold Storage & Temperature-Controlled
                  </h4>
                  <p className="text-muted-foreground text-sm">Specialized handling for perishable or temperature-sensitive inventory during transit.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Industrial & Manufacturing Storage
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocation of raw material and finished goods storage tied to production facilities.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={18} className="text-gold" />
                    Third-Party Logistics (3PL) Facilities
                  </h4>
                  <p className="text-muted-foreground text-sm">Coordinated moves for logistics providers managing inventory on behalf of multiple clients.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-gold" />
                    Pharmaceutical & Medical Supply
                  </h4>
                  <p className="text-muted-foreground text-sm">Compliance-conscious handling for regulated inventory during relocation.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Warehouse Relocation Across Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide <strong className="text-foreground">warehouse and distribution center relocation services</strong> in every major logistics and industrial hub in Pakistan:
              </p>
              <CheckList
                items={[
                  "Warehouse Movers Islamabad — I-9, I-10, and surrounding industrial zones",
                  "Warehouse Movers Rawalpindi — Industrial estates and logistics corridors",
                  "Warehouse Movers Lahore — Sundar Industrial Estate and logistics parks",
                  "Warehouse Movers Karachi — SITE Industrial Area, Korangi, and Port Qasim-adjacent facilities",
                  "Warehouse Movers Faisalabad — Textile and manufacturing storage relocation support",
                  "Warehouse Movers Peshawar — Hayatabad Industrial Estate and regional distribution facilities"
                ]}
              />
              <InfoBox variant="blue">
                <strong>💡 Business Relocation Integration:</strong> For businesses relocating both warehouse and office operations as part of a broader facility move, our team coordinates the entire transition as one project. <Link to="/services/office-moving-services/" className="text-gold hover:underline">Learn more about our Office Moving Services</Link>.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Minimizing Downtime During a Warehouse Move</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The biggest operational risk in any warehouse relocation is disruption to order fulfillment. Our approach is built specifically to reduce this risk:
              </p>
              <CheckList
                items={[
                  "Phased Moves by SKU Velocity — High-turnover inventory is moved last, keeping fulfillment active as long as possible before the final cutover",
                  "Weekend & After-Hours Scheduling — Major transitions are scheduled during low-order windows to reduce customer impact",
                  "Parallel Racking Setup — Where facility timelines allow, we begin racking assembly at the new site before inventory transport begins, cutting total transition time",
                  "Real-Time Inventory Tracking — SKU-level tracking throughout the move means your team always knows exactly where stock is, reducing reconciliation time after the move"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Many of our warehouse relocation clients have completed full facility transitions with less than 48 hours of reduced fulfillment capacity — a standard we hold every warehouse move to.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Handling Heavy Equipment & Racking Systems</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Warehouse relocations often involve equipment far heavier and more complex than standard office furniture. Our team is equipped to handle:
              </p>
              <CheckList
                items={[
                  "Pallet Racking Systems — Selective, drive-in, and push-back racking dismantled and reinstalled to manufacturer specifications",
                  "Mezzanine Structures — Structural disassembly and reassembly for multi-level storage systems",
                  "Forklifts & Pallet Jacks — Safe loading, transport, and unloading of material handling equipment",
                  "Conveyor Systems — Dismantling and reinstallation of automated or manual conveyor lines",
                  "Loading Dock Equipment — Relocation support for dock levelers, ramps, and related infrastructure"
                ]}
              />
              <InfoBox variant="blue">
                <strong>🔧 Heavy Equipment Expertise:</strong> For facilities with especially large or structurally complex equipment, our team draws on the same rigging and engineering expertise used in our <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link> services, ensuring even the most demanding warehouse equipment is handled safely.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors in Warehouse Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cost of a <strong className="text-foreground">warehouse relocation</strong> depends on several variables:
              </p>
              <CheckList
                items={[
                  "Warehouse size and inventory volume — Larger facilities with higher SKU counts require more planning, labor, and transport capacity",
                  "Racking complexity — The type and volume of racking systems being dismantled and reinstalled",
                  "Distance — Local relocation versus intercity or cross-country moves",
                  "Phasing requirements — Whether the move needs to happen in stages to maintain operational continuity",
                  "Equipment handling — Forklifts, conveyor systems, and other material handling equipment add to scope",
                  "Timing — After-hours or weekend scheduling to minimize disruption to fulfillment operations"
                ]}
              />
              <InfoBox variant="save">
                <strong>💰 Free Site Survey:</strong> We provide a free, no-obligation site survey and detailed quote for every warehouse relocation project, so you know the full scope and cost before committing.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International & Cross-Border Warehouse Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For businesses expanding their distribution network internationally or relocating a facility as part of a cross-border expansion, our warehouse relocation expertise connects directly with our broader freight and logistics capabilities. From inventory freight booking to customs documentation, our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> division manages the international shipping side of your warehouse relocation as one coordinated project.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Professional Warehouse Movers Matter</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Attempting to relocate a warehouse using general labor or unspecialized transport creates significant operational risk:
              </p>
              <CheckList
                items={[
                  "Lost or misplaced inventory due to inadequate tracking systems",
                  "Extended fulfillment downtime from poorly sequenced moves",
                  "Damaged racking systems from improper dismantling technique",
                  "Safety incidents from mishandled heavy equipment or unstable racking",
                  "No insurance protection if inventory or equipment is damaged during transit"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                A professional <strong className="text-foreground">warehouse relocation company</strong> eliminates these risks with structured inventory tracking, trained racking technicians, and phased move planning — protecting both your stock and your fulfillment timeline.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes Businesses Make During Warehouse Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Even well-run operations can run into avoidable problems when a warehouse move isn't properly planned. The most common issues we see include:
              </p>
              <CheckList
                items={[
                  "Skipping the Pre-Move Inventory Audit — Without a documented baseline count, discrepancies discovered after the move are almost impossible to trace back to a specific stage of the relocation",
                  "Moving Everything at Once — Attempting a single-day, all-at-once move for a large facility often leads to extended fulfillment downtime that a phased approach would have avoided",
                  "Underestimating Racking Reassembly Time — Racking systems dismantled without proper labeling frequently take far longer to reassemble correctly, delaying the restocking timeline",
                  "Poor Coordination Between Old and New Facility Timelines — Overlapping lease end-dates and new facility readiness without a buffer window creates unnecessary pressure and rushed decision-making",
                  "Not Accounting for Loading Dock and Access Differences — A new facility's dock configuration or access points may not match the old site, causing unexpected bottlenecks on move day if not surveyed in advance",
                  "Using General Movers Without Warehouse Experience — Standard moving crews without racking and inventory-tracking expertise are far more likely to cause damage, delays, or inventory discrepancies"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Planning around these common pitfalls — with a relocation partner experienced specifically in warehouse and distribution facility moves — is what keeps a warehouse relocation from turning into weeks of operational disruption.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment to Every Warehouse Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Behind every warehouse relocation we handle is a simple standard: your inventory arrives complete, your racking goes up correctly the first time, and your team is back to normal fulfillment operations as quickly as possible. We've built this standard over 15 years of relocating facilities for businesses that couldn't afford to lose a single day of order processing — from growing e-commerce operations to established distribution networks serving clients across Pakistan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every warehouse relocation project is assigned a dedicated coordinator who stays engaged from the initial site survey through the final walkthrough, so you always have one point of accountability for the entire move.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Warehouse Relocation Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're relocating a single distribution center or coordinating a multi-facility warehouse network move, <strong className="text-foreground">Best International Movers & Logistics</strong> has the inventory tracking systems, racking expertise, and phased planning approach to keep your operations running. Contact us today for a <strong className="text-foreground">free site survey and no-obligation quote</strong> for warehouse relocation in Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar, or anywhere in Pakistan.
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Warehouse Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. What is warehouse relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Warehouse relocation is the process of moving an entire storage or distribution facility — including racking systems, inventory, and material handling equipment — from one location to another with accurate inventory tracking throughout.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. How much does warehouse relocation cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Costs depend on warehouse size, inventory volume, racking complexity, distance, and phasing requirements. We provide a free site survey and detailed quote before any work begins.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Can you relocate our warehouse without stopping order fulfillment?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we use phased relocation planning — moving lower-turnover inventory first and keeping high-demand SKUs operational until the final transition window — to minimize disruption to fulfillment.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Do you handle racking dismantling and reassembly?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. Our technicians dismantle pallet racking, shelving, and mezzanine structures, label all components, and reassemble them according to a pre-planned layout at the new facility.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. How do you prevent lost or misplaced inventory during the move?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use SKU-level tracking and labeling throughout the entire relocation process, from initial packing through final restocking, so every item can be accounted for.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Do you transport forklifts and other warehouse equipment?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we safely load, transport, and unload forklifts, pallet jacks, conveyor systems, and other material handling equipment as part of our warehouse relocation services.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Which cities do you provide warehouse relocation services in?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide warehouse relocation services in Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar, and other major logistics hubs across Pakistan.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Can you relocate cold storage or temperature-sensitive warehouses?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we provide specialized handling for cold storage and temperature-controlled facilities to protect perishable or sensitive inventory during transit.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">9. How long does a warehouse relocation take?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Timelines vary based on facility size and inventory volume — smaller warehouses may be relocated over a weekend, while larger distribution centers may require a phased move spanning several weeks.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">10. Is our inventory insured during the relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, all inventory, racking, and equipment are covered by insurance throughout the relocation process, from packing through final delivery.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">11. Do you provide a floor plan for racking placement at the new facility?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we design a complete racking layout for the new warehouse before the move begins, so racking is installed in its final position without repeated rearrangement.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">12. Can you relocate a 3PL facility managing multiple clients' inventory?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we have experience coordinating relocations for third-party logistics providers, maintaining separate inventory tracking for each client account throughout the move.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">13. Do you offer temporary storage during a warehouse transition?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we offer short-term storage solutions for overflow inventory if there's a timing gap between vacating the old facility and completing setup at the new one.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">14. Can you handle both warehouse and office relocation together?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, for businesses relocating an entire facility with both warehouse and administrative office space, we coordinate the full transition as a single, unified project.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">15. How do I get a quote for warehouse relocation services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contact us via phone, WhatsApp, or our online quote form with your facility details. We'll schedule a free site survey and provide a detailed quote within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg">
                Request Free Site Survey
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

export default WarehouseRelocationPakistan;
