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
  FileText
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
    name: "Heavy Machinery Relocation Services Pakistan | Best International Movers & Logistics",
    serviceType: "Heavy Machinery Relocation",
    description: "Professional heavy machinery relocation services in Pakistan. Safe rigging, dismantling, transport & reinstallation of industrial equipment across Islamabad, Lahore, Karachi & beyond. Free site survey.",
    url: "https://bestintlmovers.com/services/heavy-machinery-relocation/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const HeavyMachineryRelocationPakistan = () => {
  const serviceSeo = {
    title: "Heavy Machinery Relocation Services Pakistan | Safe Industrial Equipment Moving",
    description: "Professional heavy machinery relocation services in Pakistan. Safe rigging, dismantling, transport & reinstallation of industrial equipment across Islamabad, Lahore, Karachi & beyond. Free site survey.",
    keywords: "heavy machinery relocation, industrial equipment movers pakistan, machinery shifting services, factory equipment relocation, machinery movers islamabad, machinery movers lahore, machinery movers karachi, industrial moving company",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/heavy-machinery-relocation/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Wrench size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Heavy Machinery Relocation Services in Pakistan
                </h1>
                <p className="text-muted-foreground mt-1">Safe, Insured & Precision-Handled Industrial Equipment Moving</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Moving heavy machinery isn't a job for regular movers. A single miscalculated lift, an improperly secured load, or a poorly planned transport route can damage equipment worth millions of rupees — or worse, put workers at serious risk. <strong className="text-foreground">Best International Movers & Logistics</strong> provides specialized <strong className="text-foreground">heavy machinery relocation</strong> services built specifically for the unique demands of industrial equipment: precision rigging, structural load calculations, permit-compliant transport, and careful reinstallation at the destination site.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 15 years, we've relocated CNC machines, generators, production lines, boilers, cranes, printing presses, textile machinery, and entire factory floors for manufacturers, industrial plants, and construction companies across Pakistan. If you searched for "<strong className="text-foreground">heavy machinery relocation</strong>," "industrial equipment movers Pakistan," "machinery shifting services," or "factory equipment relocation company," you're looking at the right team — one that treats every machine move as an engineering project, not just a transport job.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Manufacturers relocate machinery for many reasons — expanding to a larger facility, consolidating operations, moving closer to raw material sources, or upgrading to a purpose-built industrial site. Whatever the reason behind your move, the risk profile is the same: heavy, high-value equipment that must arrive undamaged, properly aligned, and ready to return to production as quickly as possible. That's the standard every heavy machinery relocation project at our company is measured against.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Heavy Machinery Relocation?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Heavy machinery relocation is the specialized process of dismantling, rigging, transporting, and reinstalling large industrial equipment — such as manufacturing machines, generators, production line components, and construction equipment — from one facility to another. Unlike standard freight or office moving, <strong className="text-foreground">heavy machinery relocation</strong> requires structural engineering assessments, specialized lifting equipment, permit coordination for oversized loads, and precision reinstallation to ensure machines are operational and correctly calibrated at the new site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A professional <strong className="text-foreground">machinery moving company</strong> manages the entire lifecycle of the move: pre-move engineering assessment, safe dismantling, secure rigging and loading, permit-compliant road transport, and full reinstallation — including alignment, leveling, and testing — so your equipment is production-ready the moment it arrives.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Industrial Businesses Trust Our Heavy Machinery Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Industrial Moving Experience — Proven track record relocating manufacturing, textile, printing, and construction equipment across Pakistan",
                  "Certified Rigging & Lifting Expertise — Trained riggers using proper load calculations, slings, and lifting equipment rated for heavy industrial loads",
                  "Specialized Transport Fleet — Flatbed trailers, low-loaders, and heavy-haul vehicles equipped to carry oversized and overweight machinery safely",
                  "Full Insurance Coverage — Every piece of equipment is insured against damage or loss throughout the relocation process",
                  "Permit & Route Planning — We handle oversized load permits and plan transport routes that account for bridge clearances, road weight limits, and site access constraints",
                  "Reinstallation & Calibration Support — We don't just deliver machinery — we assist with positioning, leveling, and reconnection so equipment is ready to run",
                  "Minimal Production Downtime — Move scheduling designed to get your machinery back online as quickly as possible",
                  "Nationwide & Cross-Border Capability — From a single-machine shift within the same city to relocating an entire production line internationally"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Heavy Machinery We Relocate</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">heavy machinery relocation</strong> team has hands-on experience moving a wide range of industrial equipment, including:
              </p>
              <CheckList
                items={[
                  "CNC Machines & Precision Equipment — Careful handling to protect calibration and sensitive components",
                  "Generators & Power Equipment — Safe rigging and transport of industrial generators and power units",
                  "Textile & Garment Machinery — Looms, spinning frames, and finishing equipment for Pakistan's textile sector",
                  "Printing Presses — Large-format and industrial printing equipment requiring precise disassembly and reassembly",
                  "Production Line Components — Conveyor systems, assembly stations, and modular manufacturing equipment",
                  "Construction Equipment — Cranes, excavators, and heavy construction machinery requiring specialized transport",
                  "Boilers & Pressure Vessels — Industrial boilers and tanks requiring careful structural handling",
                  "Warehouse & Material Handling Equipment — Forklifts, racking systems, and heavy-duty shelving units",
                  "Food & Pharmaceutical Processing Equipment — Equipment requiring hygienic handling standards during relocation"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Whatever category your equipment falls into, our team conducts a pre-move engineering assessment to determine the exact rigging, transport, and reinstallation approach required.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Heavy Machinery Relocation Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    1. Pre-Move Site Survey & Engineering Assessment
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our team visits both the origin and destination sites to assess machine dimensions, weight, access points, floor load capacity, and any structural considerations. This survey determines the rigging plan, transport vehicle requirements, and permit needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={20} className="text-gold" />
                    2. Dismantling & Component Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Machines are carefully dismantled by trained technicians, with every component labeled, photographed, and logged to ensure accurate reassembly at the destination. Wiring, piping, and control systems are documented before disconnection.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    3. Rigging & Secure Loading
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Using certified lifting equipment — including cranes, forklifts, hydraulic jacks, and rigging slings rated for the specific load — machinery is safely lifted and secured onto flatbed trailers or low-loader transport vehicles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    4. Permit-Compliant Transport
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For oversized or overweight loads, we secure the necessary transport permits and plan routes that account for road weight restrictions, bridge clearances, and site accessibility at both ends of the move.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={20} className="text-gold" />
                    5. Unloading & Precision Positioning
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    At the destination, machinery is unloaded using the same level of rigging care, then positioned according to the facility's layout plan — accounting for utility connections, floor load points, and operational clearances.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={20} className="text-gold" />
                    6. Reassembly, Alignment & Testing
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our technicians reassemble machinery according to the documentation captured during dismantling, ensuring proper alignment, leveling, and reconnection. Where required, we coordinate with your in-house technical team or equipment manufacturer for final calibration and testing.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What's Included in Our Heavy Machinery Relocation Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Free pre-move site survey and engineering assessment",
                  "Dismantling by trained industrial technicians",
                  "Component labeling, photography, and documentation",
                  "Certified rigging and lifting equipment",
                  "Specialized flatbed and low-loader transport",
                  "Oversized load permit coordination",
                  "Route planning for safe, compliant transport",
                  "Secure loading and unloading procedures",
                  "Reassembly and positioning at the destination site",
                  "Insurance coverage for equipment throughout the move",
                  "Optional coordination with manufacturers for calibration and testing"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">heavy machinery relocation</strong> services support a wide range of industrial sectors across Pakistan:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Textile & Garment Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocating spinning, weaving, and finishing equipment between production facilities.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={18} className="text-gold" />
                    Printing & Packaging
                  </h4>
                  <p className="text-muted-foreground text-sm">Moving industrial printing presses and packaging line equipment with precision handling.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    Food & Beverage Processing
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocating processing lines and equipment while maintaining hygienic handling standards.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-gold" />
                    Pharmaceutical Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Careful handling of regulated production equipment during facility moves or expansions.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={18} className="text-gold" />
                    Construction & Engineering Firms
                  </h4>
                  <p className="text-muted-foreground text-sm">Transporting cranes, excavators, and heavy construction machinery between project sites.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-gold" />
                    Power & Energy Sector
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocating generators, transformers, and power distribution equipment.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={18} className="text-gold" />
                    Automotive & Parts Manufacturing
                  </h4>
                  <p className="text-muted-foreground text-sm">Moving assembly line components and manufacturing equipment.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={18} className="text-gold" />
                    Warehousing & Logistics Facilities
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocating racking systems, forklifts, and material handling equipment during facility transitions.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Heavy Machinery Relocation Across Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide <strong className="text-foreground">industrial equipment relocation services</strong> in every major manufacturing and industrial hub in Pakistan:
              </p>
              <CheckList
                items={[
                  "Machinery Movers Islamabad — I-9 and I-10 Industrial Areas, and surrounding commercial zones",
                  "Machinery Movers Rawalpindi — Industrial estates and manufacturing corridors",
                  "Machinery Movers Lahore — Sundar Industrial Estate, Kot Lakhpat, and manufacturing zones",
                  "Machinery Movers Karachi — SITE Industrial Area, Korangi Industrial Area, and Port Qasim access",
                  "Machinery Movers Faisalabad — Textile manufacturing hub relocation support",
                  "Machinery Movers Peshawar — Hayatabad Industrial Estate and regional manufacturing sites"
                ]}
              />
              <InfoBox variant="blue">
                <strong>💡 Business Relocation Integration:</strong> For facilities relocating machinery as part of a larger operation — including offices, warehouses, and administrative functions — our team coordinates the entire transition. <Link to="/services/office-moving-services/" className="text-gold hover:underline">Learn more about our Office Moving Services</Link>.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Safety Standards in Heavy Machinery Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Heavy machinery relocation carries real safety risks — for both the equipment and the personnel involved. Our teams follow strict safety protocols at every stage:
              </p>
              <CheckList
                items={[
                  "Load calculations performed before any lifting begins, using equipment rated well above the actual machine weight",
                  "Certified rigging slings, chains, and lifting equipment inspected before each use",
                  "Clear exclusion zones maintained around lifting and loading operations",
                  "Trained riggers and equipment operators with hands-on industrial experience",
                  "Route surveys conducted in advance to identify low bridges, weight-restricted roads, or narrow access points",
                  "Site-specific risk assessments for both the origin and destination facility"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                This disciplined approach is why manufacturers and industrial businesses across Pakistan trust us with equipment that simply cannot be damaged or delayed.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors in Heavy Machinery Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cost of relocating heavy machinery depends on several variables:
              </p>
              <CheckList
                items={[
                  "Machine weight and dimensions — Larger, heavier equipment requires more specialized rigging and transport",
                  "Dismantling complexity — Machines requiring extensive disassembly and reassembly involve more labor and time",
                  "Distance and route complexity — Intercity moves may require oversized load permits and route planning",
                  "Site access conditions — Limited access points, narrow doorways, or multi-floor facilities can increase handling complexity",
                  "Reinstallation requirements — Alignment, calibration, and testing needs vary by equipment type",
                  "Insurance coverage — Higher-value equipment may require additional coverage during transit"
                ]}
              />
              <InfoBox variant="save">
                <strong>💰 Free Site Survey:</strong> We provide a free, no-obligation site survey and detailed quote for every heavy machinery relocation project, so you know the full cost and scope before work begins.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Machinery Relocation & Import/Export Logistics</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For businesses relocating machinery internationally — whether importing new industrial equipment or relocating a manufacturing facility abroad — our relocation expertise connects directly with our broader freight and customs capabilities. From oversized cargo freight booking to customs documentation for industrial equipment, our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> division manages the international shipping side of your machinery relocation as one coordinated project.
              </p>
              <InfoBox variant="blue">
                <strong>📚 International Shipping Guide:</strong> If you're planning a cross-border equipment shipment, our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link> walks through the documentation, customs, and freight planning process in detail — essential reading before moving heavy equipment across borders.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Professional Machinery Movers Matter</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Attempting to relocate heavy machinery with general labor or unspecialized transport creates serious risks:
              </p>
              <CheckList
                items={[
                  "Equipment damage from improper rigging or lifting technique",
                  "Safety incidents from inadequate load calculations or unsecured loads",
                  "Extended production downtime from botched reassembly or misalignment",
                  "Legal and regulatory issues from transporting oversized loads without proper permits",
                  "No insurance protection if equipment is damaged or lost during transit"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                A professional <strong className="text-foreground">heavy machinery relocation company</strong> eliminates these risks through certified rigging expertise, proper equipment, and a structured process — protecting both your investment and your production timeline.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes Businesses Make When Relocating Heavy Machinery</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Even experienced businesses can run into costly problems when a machinery move isn't planned properly. The most common mistakes we see include:
              </p>
              <CheckList
                items={[
                  "Skipping the Pre-Move Site Survey — Without an engineering assessment, businesses often discover access or floor-load problems only after the machine arrives at the destination — by then it's an expensive fix instead of a planned solution",
                  "Using General Transport Instead of Specialized Vehicles — Standard trucks aren't built for oversized, unevenly distributed industrial loads, increasing the risk of shifting cargo and transport damage",
                  "Not Documenting Disassembly — Machines dismantled without proper labeling and photography often take significantly longer to reassemble correctly, extending downtime",
                  "Ignoring Permit Requirements — Transporting oversized machinery without the correct permits can result in fines, delays, or forced route changes mid-transport",
                  "Underestimating Reinstallation Time — Businesses often plan for the move itself but underestimate how long alignment, leveling, and testing takes before machinery is truly production-ready",
                  "Choosing Movers Without Industrial Experience — General moving companies without rigging expertise are far more likely to cause equipment damage or safety incidents during heavy lifts"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Planning around these common pitfalls — with an experienced machinery relocation partner — is what separates a smooth, on-schedule move from a costly disruption to your production timeline.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Heavy Machinery Relocation Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're relocating a single CNC machine within the same city or coordinating a full factory relocation across Pakistan, <strong className="text-foreground">Best International Movers & Logistics</strong> has the rigging expertise, specialized transport fleet, and engineering approach to move your equipment safely. Contact us today for a <strong className="text-foreground">free site survey and no-obligation quote</strong> for heavy machinery relocation in Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar, or anywhere in Pakistan.
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

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Heavy Machinery Relocation</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. What is heavy machinery relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Heavy machinery relocation is the specialized process of dismantling, rigging, transporting, and reinstalling large industrial equipment from one facility to another, requiring engineering assessment and certified lifting expertise.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. What types of machinery do you relocate?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We relocate CNC machines, generators, textile machinery, printing presses, production line equipment, construction machinery, boilers, and material handling equipment, among other industrial assets.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. How much does heavy machinery relocation cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Costs depend on machine weight, dismantling complexity, distance, site access conditions, and reinstallation requirements. We provide a free site survey and detailed quote before any work begins.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Do you provide dismantling and reassembly services?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. Our technicians dismantle machinery with full documentation and photography, then reassemble and align equipment at the destination site according to that documentation.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Is my machinery insured during relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, all equipment is covered by insurance throughout the relocation process, from dismantling through transport to final reinstallation.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Do you handle oversized load permits for machinery transport?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we coordinate all necessary permits for oversized or overweight loads and plan transport routes accounting for road weight limits and bridge clearances.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Which cities do you provide heavy machinery relocation services in?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide machinery relocation services in Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Peshawar, and other major industrial hubs across Pakistan.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Can you relocate machinery internationally?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we coordinate international machinery relocation including oversized cargo freight, customs documentation, and destination delivery through our logistics division.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">9. How long does a heavy machinery relocation project take?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Timelines vary based on machine complexity and distance — a single-machine local move may take a day, while a full factory relocation can take several weeks of coordinated phases.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">10. Do you provide calibration or testing after reinstallation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We assist with positioning, alignment, and reconnection, and can coordinate with your technical team or the equipment manufacturer for final calibration and testing.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">11. What safety measures do you follow during machinery relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We follow strict rigging protocols including pre-lift load calculations, certified lifting equipment, exclusion zones during lifts, and site-specific risk assessments at both origin and destination.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">12. Can you relocate machinery with minimal production downtime?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we plan move schedules and phased relocation approaches specifically designed to minimize the time your equipment is offline.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">13. Do you handle machinery relocation for multi-floor facilities?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, our engineering assessment accounts for floor load capacity, access points, and elevator or staircase constraints in multi-floor facilities.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">14. What industries do you serve for machinery relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We serve textile, printing, food and beverage, pharmaceutical, construction, power and energy, automotive, and warehousing industries, among others.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">15. How do I get a quote for heavy machinery relocation?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contact us via phone, WhatsApp, or our online quote form with your equipment details and location. We'll schedule a free site survey and provide a detailed quote within 24 hours.
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

export default HeavyMachineryRelocationPakistan;
