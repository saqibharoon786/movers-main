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
    name: "Factory Relocation Services Pakistan | Best International Movers & Logistics",
    serviceType: "Factory Relocation",
    description: "Professional factory relocation services in Pakistan. Complete manufacturing unit moves — machinery, staff transition & production restart planning. Free site survey across Pakistan.",
    url: "https://bestintlmovers.com/services/factory-relocation-pakistan/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
};

const FactoryRelocationPakistan = () => {
  const serviceSeo = {
    title: "Factory Relocation Services Pakistan | Complete Manufacturing Unit Moving",
    description: "Professional factory relocation services in Pakistan. Complete manufacturing unit moves — machinery, staff transition & production restart planning. Free site survey across Pakistan.",
    keywords: "factory relocation pakistan, factory shifting services, manufacturing unit relocation, industrial unit moving company, factory movers faisalabad, factory movers lahore, factory movers karachi, industrial estate shifting, production unit moving",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/factory-relocation-pakistan/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Factory size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Factory Relocation Pakistan
                </h1>
                <p className="text-muted-foreground mt-1">Complete Manufacturing Unit Moving Services</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every year, Pakistani manufacturers relocate their factories — moving to bigger units, shifting into designated industrial zones, consolidating multiple production sites, or simply responding to lease terms that no longer make sense. Whatever the reason, a factory relocation is a decision that affects production output, staff continuity, and revenue for weeks or months if it isn't planned properly. <strong className="text-foreground">Best International Movers & Logistics</strong> provides complete <strong className="text-foreground">factory relocation services in Pakistan</strong> designed around the practical realities factory owners actually face — tight timelines, staff coordination, machinery risk, and the pressure to get back to full production fast.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 15 years, we've helped manufacturers relocate factories across Pakistan's industrial belts — from Faisalabad's textile units to Karachi's SITE and Korangi zones, Lahore's Sundar Industrial Estate, and beyond. If you searched for "<strong className="text-foreground">factory relocation Pakistan</strong>," "factory shifting services," "manufacturing unit relocation," or "industrial unit moving company," this page walks you through exactly how we plan and execute factory moves that get you back to production as fast as possible.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Factory Relocation?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Factory relocation is the process of moving an entire manufacturing unit — production machinery, raw material and finished goods inventory, staff work areas, and often administrative offices — from one physical location to another. A <strong className="text-foreground">factory relocation</strong> project typically spans everything from initial site comparison and lease planning through machinery dismantling, transport, reinstallation, and a structured production restart at the new site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike a single equipment move, factory relocation involves coordinating the entire operational footprint of a manufacturing business — which is why factory owners consistently look for a relocation partner who understands both the physical logistics and the business pressure of minimizing lost production days.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Pakistani Manufacturers Choose Our Factory Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Factory Relocation Experience — A proven track record relocating manufacturing units across Pakistan's major industrial belts",
                  "Certified Rigging & Machinery Handling — Trained technicians and certified lifting equipment for safely moving production machinery of every size",
                  "Production-First Scheduling — Relocation plans built around minimizing lost production days, not just moving equipment from point A to point B",
                  "Full-Scope Project Management — Machinery, inventory, staff work areas, and administrative offices coordinated under one relocation plan",
                  "Specialized Transport Fleet — Flatbeds and low-loaders equipped to move oversized and heavy manufacturing equipment safely",
                  "Full Insurance Coverage — Machinery, inventory, and equipment covered against damage or loss throughout the move",
                  "Permit & Route Coordination — We handle oversized load permits and route planning so transport stays compliant and on schedule",
                  "Nationwide Coverage — From relocating within the same industrial estate to shifting your entire factory to a different city"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Reasons Pakistani Factories Relocate</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Understanding why manufacturers relocate helps frame how to plan the move correctly. The most common drivers we see include:
              </p>
              <CheckList
                items={[
                  "Outgrowing the Current Facility — Production demand exceeding available floor space, requiring a move to a larger unit",
                  "Lease Expiry or Rent Increases — Businesses relocating to more cost-effective facilities as lease terms change",
                  "Shifting into Designated Industrial Zones — Moving into formal industrial estates or special economic zones for better infrastructure, compliance, or incentive access",
                  "Consolidating Multiple Production Sites — Merging operations from separate locations into a single, more efficient facility",
                  "Proximity to Raw Materials or Export Infrastructure — Relocating closer to suppliers, ports, or transport corridors to reduce ongoing logistics costs",
                  "Facility Upgrades — Moving to a purpose-built facility better suited to modern machinery, utility requirements, or workflow design"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Whatever the driver behind your move, the underlying challenge is the same: relocating production capacity without losing more time or money than necessary.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Factory Relocation Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    1. Site Survey & Relocation Planning
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We assess both the current and new factory sites — machinery inventory, floor plans, utility access, and loading/unloading conditions — to build a relocation plan tailored to your specific facility.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={20} className="text-gold" />
                    2. Machinery Dismantling & Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Production equipment is dismantled by trained technicians, with every component labeled, photographed, and logged against the new facility's layout to ensure accurate, efficient reassembly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    3. Rigging & Secure Loading
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Using certified lifting equipment rated for your specific machinery, equipment is safely rigged and loaded onto flatbed or low-loader transport vehicles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin size={20} className="text-gold" />
                    4. Permit-Compliant Transport
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For oversized or heavy machinery, we secure the necessary transport permits and plan routes accounting for road weight limits, bridge clearances, and access conditions at both locations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={20} className="text-gold" />
                    5. Inventory & Material Relocation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Raw material and finished goods inventory are relocated using SKU-level tracking, ensuring stock accuracy is maintained throughout the transition.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-gold" />
                    6. Reassembly, Alignment & Production Restart
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    At the new facility, machinery is reassembled, aligned, and tested according to the documentation captured during dismantling — with coordination for manufacturer calibration where required — before production resumes.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Factory Relocation Checklist for Pakistani Manufacturers</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based on hundreds of factory relocation projects, here's a practical checklist we recommend every manufacturer follow before moving day. This checklist reflects the questions and oversights that most commonly determine whether a factory relocation stays on schedule or turns into an extended, costly disruption:
              </p>
              <CheckList
                items={[
                  "Confirm the new facility's utility capacity (power load, water supply, gas connection) matches your machinery's operational requirements",
                  "Verify floor load capacity at the new site, particularly for heavy machinery and multi-floor facilities",
                  "Start regulatory and licensing paperwork early — permits and approvals for a new industrial site often take longer than expected",
                  "Create a machinery inventory list with weights, dimensions, and any special handling requirements",
                  "Plan staff transition timing — communicate the move schedule with your workforce well in advance",
                  "Sequence the move by production priority — decide which lines can pause first and which must transition last",
                  "Arrange temporary storage if needed — for inventory or non-critical equipment during the transition window",
                  "Schedule utility disconnection and reconnection to avoid machinery sitting idle waiting for power or gas hookups",
                  "Confirm insurance coverage for machinery and inventory throughout the relocation period",
                  "Set a realistic production restart date — accounting for reassembly, alignment, and testing time, not just transport"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What's Included in Our Factory Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Free site survey and relocation planning consultation",
                  "Machinery dismantling with full component documentation",
                  "Certified rigging and lifting equipment",
                  "Specialized flatbed and low-loader transport",
                  "Oversized load permit coordination",
                  "SKU-tracked inventory and raw material relocation",
                  "Reassembly, alignment, and reinstallation at the new site",
                  "Insurance coverage throughout the relocation process",
                  "Optional short-term storage for inventory or equipment",
                  "Coordination support for staff transition scheduling"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">factory relocation</strong> services support manufacturers across Pakistan's key industrial sectors, drawing on hands-on experience with the specific equipment, handling requirements, and production considerations unique to each:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    Textile & Garment Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Full production unit relocations including spinning, weaving, and finishing equipment, particularly common across Faisalabad and Lahore's textile belts.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Activity size={18} className="text-gold" />
                    Food & Beverage Processing
                  </h4>
                  <p className="text-muted-foreground text-sm">Facility moves with hygienic handling standards for processing and packaging lines.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Printing & Packaging
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocation of industrial printing presses and packaging equipment with precision reassembly.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={18} className="text-gold" />
                    Plastics & Rubber Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Moving injection molding, extrusion, and related production equipment.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={18} className="text-gold" />
                    Automotive Parts Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocating assembly line components and precision manufacturing machinery.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-gold" />
                    Chemical & Process Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Careful handling of process equipment with attention to structural and safety considerations.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Building2 size={18} className="text-gold" />
                    Light Engineering & Metal Fabrication
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocating fabrication equipment, presses, and workshop machinery.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Factory Relocation Across Pakistan's Industrial Hubs</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide <strong className="text-foreground">factory relocation services</strong> in every major manufacturing region in Pakistan:
              </p>
              <CheckList
                items={[
                  "Factory Relocation Faisalabad — Pakistan's textile manufacturing hub",
                  "Factory Relocation Lahore — Sundar Industrial Estate, Kot Lakhpat, and surrounding manufacturing zones",
                  "Factory Relocation Karachi — SITE Industrial Area, Korangi Industrial Area, and Port Qasim-adjacent facilities",
                  "Factory Relocation Islamabad & Rawalpindi — I-9 and I-10 Industrial Areas and regional manufacturing corridors",
                  "Factory Relocation Peshawar — Hayatabad Industrial Estate and regional manufacturing sites",
                  "Factory Relocation Gujranwala & Sialkot — Light engineering and export manufacturing hubs"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                We also support intercity factory relocations — for example, businesses consolidating operations from smaller cities into major industrial hubs, or shifting closer to port infrastructure for export-focused manufacturing. This intercity capability is particularly valuable for exporters looking to reduce inland transport time and cost by relocating nearer to Karachi's port facilities.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Minimizing Downtime During Factory Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lost production days are the single biggest cost in any factory relocation. Our approach is built specifically to reduce this exposure:
              </p>
              <CheckList
                items={[
                  "Phased Line Transition — Moving non-critical production lines and support equipment first, keeping core output running as long as possible",
                  "Pre-Coordinated Utility Setup — Ensuring power, water, and gas are ready at the new facility before machinery arrives, avoiding idle equipment",
                  "Parallel Reassembly — Beginning setup and testing at the new site while remaining operations continue at the original facility, where feasible",
                  "Realistic Restart Scheduling — Building alignment, calibration, and testing time into the plan rather than assuming production can resume the moment machinery arrives"
                ]}
              />
              <InfoBox variant="blue">
                <strong>🔧 Heavy Machinery Expertise:</strong> For manufacturers relocating especially heavy or structurally complex machinery, our team applies the same certified rigging standards used in our dedicated <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link> services.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Factory Relocation vs. Full Industrial Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Factory relocation typically refers to moving a single manufacturing unit — machinery, inventory, and immediate operations. For businesses managing a larger transition involving multiple facilities, utility infrastructure planning, regulatory clearances, and workforce coordination at a broader scale, our <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link> services provide the full end-to-end project management such moves require. If you're unsure which scope fits your situation, our team can assess your specific move during the initial site survey and recommend the right approach.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors in Factory Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cost of relocating a factory in Pakistan depends on several variables:
              </p>
              <CheckList
                items={[
                  "Machinery volume and weight — More equipment, or heavier and more complex machinery, increases rigging and transport requirements",
                  "Distance — Local relocation within the same industrial area versus intercity moves requiring oversized load permits",
                  "Inventory volume — The scale of raw material and finished goods requiring coordinated relocation",
                  "Facility access conditions — Loading dock configurations, floor levels, and structural constraints at both sites",
                  "Utility coordination complexity — The scope of power, water, and gas setup required at the new facility",
                  "Timeline requirements — Whether the move needs to happen in phases to protect ongoing production"
                ]}
              />
              <InfoBox variant="save">
                <strong>💰 Free Site Survey:</strong> We provide a free, no-obligation site survey and detailed quote for every factory relocation project, so you understand the full scope and cost before committing.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment to Every Factory Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Behind every factory relocation we manage is a simple standard: your machinery arrives undamaged, your inventory stays accounted for, and your production line resumes as quickly as the physical realities of the move allow. We've built this standard over 15 years of relocating factories for manufacturers who measure the cost of downtime in daily production targets, not just moving expenses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every factory relocation project is assigned a dedicated coordinator who manages the process from the initial site survey through the final production restart, so you have one point of accountability from start to finish — not a rotating cast of subcontractors.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Factory Relocation Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're relocating a single production line within the same city or moving your entire factory to a new industrial zone, <strong className="text-foreground">Best International Movers & Logistics</strong> has the rigging expertise, specialized transport fleet, and production-focused planning approach to get you back to full output as quickly as possible. For a deeper look at the engineering and permit considerations involved in moving heavy equipment, our <Link to="/blog/heavy-machinery-relocation-guide-pakistan-2026/" className="text-gold hover:underline">Complete Guide to Heavy Machinery Relocation in Pakistan 2026</Link> is worth reading before your move. Contact us today for a <strong className="text-foreground">free site survey and no-obligation quote</strong> for factory relocation anywhere in Pakistan.
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Factory Relocation Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. What is factory relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Factory relocation is the process of moving an entire manufacturing unit — including production machinery, inventory, and work areas — from one location to another, with the goal of resuming full production as quickly as possible.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. How much does factory relocation cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Costs depend on machinery volume, distance, inventory volume, facility access conditions, and utility coordination requirements. We provide a free site survey and detailed quote before any work begins.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. How long does a factory relocation take?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Timelines vary based on facility size and machinery complexity — smaller factory moves may take one to two weeks, while larger, multi-line relocations can take several weeks of phased planning.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Can you relocate our factory without stopping production completely?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we use phased relocation planning, moving non-critical lines and support equipment first while keeping core production running as long as possible before the final transition.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Do you handle permits for transporting heavy factory machinery?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we coordinate all necessary oversized load permits and plan transport routes accounting for road weight limits and bridge clearances.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Which cities do you provide factory relocation services in?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide factory relocation services in Faisalabad, Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Gujranwala, Sialkot, and other major manufacturing hubs across Pakistan.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Can you relocate raw material and finished goods inventory along with machinery?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we use SKU-level inventory tracking to ensure raw material and finished goods inventory is accurately relocated alongside your production equipment.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Is our machinery insured during the factory relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, all machinery, inventory, and equipment are covered by insurance throughout the entire relocation process, from dismantling through reinstallation.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">9. What's the difference between factory relocation and industrial relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Factory relocation typically refers to moving a single manufacturing unit, while industrial relocation covers larger transitions involving multiple facilities, utility infrastructure, and broader regulatory coordination.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">10. How far in advance should we start planning a factory relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We recommend starting planning at least six to eight weeks in advance, particularly if regulatory permits or utility setup at the new facility are involved.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">11. Do you provide reassembly and testing support after machinery arrives?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our technicians reassemble and align machinery according to pre-move documentation, and coordinate with manufacturers or your technical team for final calibration and testing.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">12. Can you help us choose between relocating locally or to a different industrial zone?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    While the final decision depends on your business needs, our site survey process can help assess practical logistics factors — access, utility capacity, and transport considerations — for locations you're considering.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">13. What industries do you serve for factory relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We serve textile, food and beverage, printing, plastics, automotive parts, chemical, and light engineering manufacturing sectors, among others.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">14. Do you offer temporary storage during a factory relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we offer short-term storage solutions for inventory or non-critical equipment if there's a timing gap between vacating the old facility and completing setup at the new one.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">15. How do I get a quote for factory relocation services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contact us via phone, WhatsApp, or our online quote form with your factory details. We'll schedule a free site survey and provide a detailed quote within 24 hours.
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

export default FactoryRelocationPakistan;
