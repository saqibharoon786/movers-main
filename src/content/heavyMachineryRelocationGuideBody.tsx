import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, ShieldCheck, FileText, ArrowRight, Phone, Mail } from "lucide-react";

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

const HeavyMachineryRelocationGuideBody = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-muted-foreground leading-relaxed mb-4">
        Relocating heavy machinery is one of the highest-risk operational decisions a manufacturer or industrial business can make. Unlike moving office furniture or standard cargo, a single miscalculated lift, an improperly secured load, or a rushed reinstallation can damage equipment worth millions of rupees, injure workers, or set a production line back by weeks. And yet, every year, Pakistani manufacturers relocate facilities, upgrade to larger plants, or consolidate operations — which means heavy machinery relocation isn't optional; it's a recurring reality of doing business.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        This <strong className="text-foreground">complete guide to heavy machinery relocation in Pakistan</strong> breaks down everything manufacturers, plant managers, and industrial business owners need to know before moving equipment in 2026 — from rigging fundamentals and permit requirements to cost planning and the mistakes that most commonly derail a machinery move. This guide reflects real, on-the-ground experience relocating industrial equipment across Pakistan's manufacturing hubs, not generic moving advice repackaged for an industrial audience.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Whether you're planning to move a single CNC machine to a new facility or coordinating the relocation of an entire production line, this guide will help you plan the move correctly the first time.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Heavy Machinery Relocation Is Different from Standard Moving</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Heavy machinery relocation sits in a different risk category than office or residential moving for several reasons:
      </p>
      <CheckList
        items={[
          "Extreme Weight and Load Distribution — Industrial equipment often weighs several tons and is unevenly balanced, requiring precise load calculations before any lift begins",
          "Calibration Sensitivity — Many machines, particularly CNC and precision equipment, can lose calibration accuracy from improper handling or excessive vibration during transport",
          "Structural Considerations — Floor load capacity, doorway dimensions, and multi-floor access all affect whether machinery can move safely through a facility",
          "Regulatory Requirements — Oversized or overweight loads require specific transport permits and route planning that standard freight doesn't involve",
          "Production Impact — Every day a critical machine is offline directly affects manufacturing output and revenue, making move scheduling a business-critical decision, not just a logistics one"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Understanding these differences is the first step toward planning a machinery relocation that protects both your equipment and your production timeline.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Heavy Machinery Commonly Relocated in Pakistan</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Pakistan's industrial base spans several sectors, each with machinery that presents different relocation challenges:
      </p>
      <CheckList
        items={[
          "Textile Manufacturing Equipment — Looms, spinning frames, and finishing machinery, common across Faisalabad, Lahore, and Karachi's textile hubs, often require careful disassembly due to their size and integrated wiring systems",
          "Printing & Packaging Machinery — Large-format printing presses and packaging lines involve precision components that must be realigned carefully after transport",
          "Generators & Power Equipment — Industrial generators and power distribution equipment are extremely heavy and require certified rigging for safe lifting and loading",
          "Construction Equipment — Cranes, excavators, and heavy construction machinery require specialized low-loader transport and route planning for road weight limits",
          "Food & Pharmaceutical Processing Equipment — Processing lines in these sectors often require hygienic handling standards in addition to standard rigging precautions",
          "CNC and Precision Manufacturing Equipment — Machines used in automotive parts and precision manufacturing are particularly sensitive to vibration and require specialized packing and transport",
          "Boilers & Pressure Vessels — Industrial boilers require structural handling expertise due to their size, weight, and internal components"
        ]}
      />

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Step-by-Step Process for Relocating Heavy Machinery</h2>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">Step 1: Pre-Move Engineering Assessment</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Before anything is moved, an engineering assessment evaluates machine dimensions, weight, center of gravity, and any structural considerations at both the origin and destination facility. This assessment determines the rigging equipment, transport vehicle, and permit requirements for the move.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 2: Dismantling & Documentation</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Machines requiring disassembly are carefully dismantled by trained technicians, with every component labeled, photographed, and logged. Wiring, piping, and control connections are documented in detail to ensure accurate reassembly.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 3: Rigging & Load Calculation</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Using certified lifting equipment — cranes, forklifts, hydraulic jacks, and rated rigging slings — machinery is lifted according to pre-calculated load distribution, minimizing the risk of shifting or tipping during the lift.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 4: Permit Coordination & Route Planning</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        For oversized or overweight loads, transport permits must be secured, and routes are planned to account for road weight restrictions, bridge clearances, and site access at both ends of the move.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 5: Transport</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Machinery is transported using flatbed trailers or low-loader vehicles appropriate to the load size and weight, with secured tie-downs and load monitoring throughout transit.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 6: Unloading & Positioning</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        At the destination, machinery is unloaded with the same rigging discipline used during loading, then positioned according to the facility's layout plan, accounting for utility connections and operational clearances.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 7: Reassembly, Alignment & Testing</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Technicians reassemble machinery according to the documentation captured during dismantling, ensuring correct alignment and leveling. Manufacturer coordination is often involved at this stage for final calibration and functional testing.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Permits and Regulations for Heavy Machinery Transport in Pakistan</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Transporting oversized or overweight machinery on Pakistani roads typically involves coordination with relevant provincial and national transport authorities for special movement permits. Requirements can vary depending on:
      </p>
      <CheckList
        items={[
          "The province and specific road network the shipment will travel through",
          "Whether the load exceeds standard weight or dimension limits for regular freight vehicles",
          "Bridge and overpass clearance restrictions along the planned route",
          "City-specific regulations for oversized vehicle movement during certain hours"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Because these requirements can vary by route and load specification, working with a logistics partner experienced in securing these permits — rather than attempting to navigate the process independently — significantly reduces the risk of delays or fines during transport.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Safety Standards Every Machinery Relocation Should Follow</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Heavy machinery relocation carries genuine safety risk for both equipment and personnel. A properly managed relocation project should include:
      </p>
      <CheckList
        items={[
          "Pre-lift load calculations using equipment rated well above the actual machine weight",
          "Inspection of all rigging slings, chains, and lifting equipment before use",
          "Clearly marked exclusion zones around lifting and loading operations",
          "Trained riggers and equipment operators with hands-on industrial experience",
          "Advance route surveys identifying low bridges, weight-restricted roads, or narrow access points",
          "Site-specific risk assessments conducted at both the origin and destination facility"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Businesses evaluating a machinery relocation partner should ask directly about these safety protocols — a provider without clear answers on rigging certification and load calculation processes is a significant red flag.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">How to Choose the Right Heavy Machinery Relocation Partner</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Not every moving company is equipped to handle industrial equipment. When evaluating a <strong className="text-foreground">heavy machinery relocation</strong> partner, look for:
      </p>
      <CheckList
        items={[
          "Certified rigging expertise, not just general transport capability",
          "Specialized transport fleet — flatbeds and low-loaders rated for heavy, oversized loads",
          "Documented safety protocols for lifting, loading, and transport",
          "Experience in your specific industry — textile, printing, food processing, or construction equipment each present different handling requirements",
          "Permit coordination capability for oversized load transport",
          "Insurance coverage that specifically covers high-value industrial equipment",
          "Reinstallation and calibration support, not just delivery to the destination"
        ]}
      />
      <InfoBox variant="blue">
        <strong>🔧 Our Expertise:</strong> Our team at Best International Movers & Logistics manages this entire process end-to-end through our <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link> services, backed by 15+ years of experience relocating industrial equipment across Pakistan's manufacturing sectors.
      </InfoBox>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors in Heavy Machinery Relocation</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Machinery relocation costs vary significantly based on:
      </p>
      <CheckList
        items={[
          "Machine weight and dimensions — Heavier, larger equipment requires more specialized rigging and transport",
          "Dismantling complexity — Machines requiring extensive disassembly involve more labor and time",
          "Distance and permit requirements — Intercity moves involving oversized loads require permit coordination and route planning",
          "Site access conditions — Limited access points or multi-floor facilities increase handling complexity",
          "Reinstallation scope — Alignment, calibration, and testing requirements vary by equipment type"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Getting a detailed, itemized quote after a proper site survey — rather than a rough estimate over the phone — is the only reliable way to budget accurately for a machinery relocation project.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes That Derail Machinery Relocation Projects</h2>
      <CheckList
        items={[
          "Skipping the Engineering Assessment — Businesses that skip this step often discover access or floor-load issues only after the machine has arrived, turning a planned solution into an expensive emergency fix",
          "Underestimating Reassembly Time — Move timelines often account for transport but underestimate how long alignment, leveling, and testing actually takes before equipment is production-ready",
          "Using General Transport for Oversized Loads — Standard trucks aren't built for unevenly distributed industrial loads, increasing the risk of shifting cargo during transit",
          "Ignoring Permit Requirements — Moving oversized machinery without proper permits risks fines, delays, and forced route changes mid-transport",
          "Poor Documentation During Dismantling — Machines dismantled without labeling and photography frequently take significantly longer to reassemble correctly",
          "Choosing Cost Over Experience — The cheapest quote is rarely the safest option when equipment worth millions of rupees is on the line"
        ]}
      />

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industry-Specific Considerations for 2026</h2>
      <div className="space-y-4">
        <div className="p-4 bg-navy-mid/20 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">Textile Sector</h4>
          <p className="text-muted-foreground text-sm">With Pakistan's textile industry continuing to modernize equipment for export competitiveness, relocations increasingly involve moving older machinery out of service while installing newer, larger equipment — requiring careful facility layout planning.</p>
        </div>
        <div className="p-4 bg-navy-mid/20 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">Pharmaceutical & Food Processing</h4>
          <p className="text-muted-foreground text-sm">Regulatory compliance requirements around hygienic handling are becoming more consistently enforced, making documentation of cleaning and handling procedures during relocation increasingly important.</p>
        </div>
        <div className="p-4 bg-navy-mid/20 rounded-lg">
          <h4 className="font-semibold text-foreground mb-2">Construction & Infrastructure</h4>
          <p className="text-muted-foreground text-sm">With ongoing infrastructure development across Pakistan, demand for heavy equipment relocation between project sites continues to grow, increasing the importance of reliable permit coordination for road transport.</p>
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Real-World Example: Relocating a Textile Production Line in Faisalabad</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Consider a common scenario: a textile manufacturer in Faisalabad relocating a spinning and weaving production line to a larger facility to increase export capacity. The process typically begins with an engineering assessment of both facilities, identifying floor load capacity and access constraints at the new site. Machines are then dismantled in a planned sequence — starting with equipment not immediately needed for ongoing partial production — with every component labeled against the new facility's layout plan.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Transport is coordinated using flatbed vehicles suited to each machine's dimensions, with permits secured in advance for any oversized loads. At the destination, machines are positioned according to the pre-planned layout, reassembled, and tested before returning to full production. A well-planned relocation like this can be completed with a fraction of the downtime a rushed, unplanned move would cause — the difference often comes down to how much engineering and documentation work happens before the first machine is ever disconnected.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Heavy Machinery Relocation as Part of a Larger Facility Move</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Machinery relocation rarely happens in isolation — it's often part of a broader facility transition that includes warehouse inventory, storage racking, and administrative operations. For manufacturers relocating an entire facility, coordinating machinery movement alongside warehouse and inventory relocation as a single project reduces overall downtime.
      </p>
      <InfoBox variant="blue">
        <strong>📦 Warehouse Integration:</strong> Learn more about how we handle full facility transitions on our <Link to="/services/warehouse-relocation/" className="text-gold hover:underline">Warehouse Relocation</Link> page.
      </InfoBox>
      <p className="text-muted-foreground leading-relaxed mt-4">
        For businesses also managing international equipment imports or exports as part of a facility expansion, our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> division coordinates freight, customs, and destination delivery as part of the same relocation project.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Final Thoughts</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Heavy machinery relocation rewards preparation the same way international shipping does — the businesses that invest in a proper engineering assessment, documented dismantling process, and an experienced rigging partner consistently avoid the damage, delays, and safety incidents that catch unprepared manufacturers off guard. Whether you're moving a single machine within the same city or relocating an entire production line across Pakistan, the fundamentals in this guide — proper load calculation, permit compliance, documented disassembly, and a genuinely experienced relocation partner — apply regardless of your industry or equipment type.
      </p>

      <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
        <h3 className="text-xl font-display font-bold text-foreground mb-4">Planning a machinery relocation in 2026?</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Contact Best International Movers & Logistics for a free site survey and transparent quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+923009130211" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
            <Phone size={18} />
            0300-9130211
          </a>
          <a href="mailto:info@bestintlmovers.com" className="inline-flex items-center justify-center gap-2 bg-navy-mid text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid/80 transition-colors">
            <Mail size={18} />
            info@bestintlmovers.com
          </a>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic mt-8">
        <em>Published by Best International Movers & Logistics — Pakistan's trusted industrial relocation and logistics partner since 2009. This guide reflects real rigging, permit, and safety conditions for machinery relocation projects across Pakistan and is updated periodically to stay current with regulatory and industry changes.</em>
      </p>
    </div>
  );
};

export default HeavyMachineryRelocationGuideBody;
