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

const IndustrialRelocationGuideBody = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-muted-foreground leading-relaxed mb-4">
        Relocating an entire industrial facility is one of the most consequential decisions a manufacturing business can make. It touches every part of the operation — production continuity, workforce stability, utility infrastructure, regulatory compliance, and often months of planning before the first machine is ever disconnected. And yet, industrial relocation in Pakistan has become increasingly common, driven by rising urban land costs, growth into designated industrial zones, consolidation strategies, and businesses positioning themselves closer to export infrastructure.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        This <strong className="text-foreground">complete guide to industrial relocation in Pakistan</strong> is built for plant managers, business owners, and operations leaders planning a full facility move in 2026. It covers the feasibility questions to ask before committing to a new site, the regulatory and utility planning that most businesses underestimate, workforce transition considerations, and the cost factors that determine whether a relocation stays on budget or spirals into an extended, expensive disruption. This guide reflects real project experience relocating industrial facilities across Pakistan's manufacturing hubs, not generic advice adapted from residential or office moving content.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Whether you're evaluating a move for the first time or already deep into planning a facility transition, this guide will help you approach industrial relocation with the level of rigor it actually requires — the same rigor businesses apply to major capital investment decisions, because that's effectively what an industrial relocation is.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Industrial Relocation Requires a Different Approach</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Unlike moving equipment or even a single production line, a full industrial relocation involves managing several interconnected systems simultaneously:
      </p>
      <CheckList
        items={[
          "Production Machinery — Equipment that must be dismantled, transported, and reinstalled without losing calibration or functionality",
          "Utility Infrastructure — Power, water, gas, and compressed air systems that must be operational at the new site before production can resume",
          "Regulatory Compliance — Permits, environmental clearances, and industry-specific licensing tied to operating at a new location",
          "Inventory & Supply Chain — Raw material and finished goods that must move without disrupting supplier relationships or customer commitments",
          "Workforce Transition — Staff scheduling, commute considerations, and operational handover planning",
          "Financial Planning — Capital expenditure for the move itself, balanced against the revenue impact of production downtime"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Treating industrial relocation as simply "a bigger machinery move" is one of the most common planning mistakes businesses make — and one of the most expensive to correct mid-project.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Feasibility Planning: The Step Most Businesses Skip</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Before committing to a new facility, a proper feasibility assessment answers questions that are far cheaper to resolve on paper than after signing a lease or purchase agreement:
      </p>
      <CheckList
        items={[
          "Does the new site's utility capacity match your operational requirements? Power load, water supply, and gas connection capacity should be verified against your actual machinery specifications, not assumed based on facility size alone",
          "What is the floor load capacity? Especially critical for heavy machinery, multi-floor facilities, or equipment with concentrated point loads",
          "What access constraints exist? Loading dock height, doorway dimensions, and road access all affect whether large machinery can physically reach its intended position",
          "What permits and approvals are required? Environmental clearances, industry-specific licensing, and zoning approvals can take significantly longer than the physical move itself",
          "How does the new location affect your supply chain? Distance from raw material suppliers, export ports, or key customers can meaningfully change ongoing logistics costs"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        A feasibility assessment conducted before finalizing a location decision prevents the far more expensive scenario of discovering a critical incompatibility after equipment has already arrived on site.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Regulatory and Environmental Considerations for 2026</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Pakistan's regulatory environment for industrial operations continues to evolve, and businesses relocating in 2026 should factor in:
      </p>
      <CheckList
        items={[
          "Environmental Clearance Requirements — Certain manufacturing sectors require environmental impact assessments or clearances before operating at a new site, particularly for chemical, process, and heavy manufacturing industries",
          "Industrial Zone and SEZ Considerations — Businesses relocating into designated industrial estates or special economic zones may benefit from infrastructure advantages and incentive structures, but should verify specific zone requirements and timelines well in advance",
          "Utility Connection Lead Times — Power and gas connection approvals for industrial facilities often take longer than businesses initially budget for, making early application critical to avoiding production delays",
          "Labor and Compliance Documentation — Businesses relocating across provincial or district lines should confirm any changes to labor registration or compliance requirements tied to the new location"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Starting regulatory documentation early — ideally in parallel with the physical relocation planning rather than after it — is one of the clearest ways to prevent a completed physical move from sitting idle while paperwork catches up.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Step-by-Step Industrial Relocation Process</h2>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">Step 1: Feasibility Assessment & Site Comparison</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Evaluate potential new sites against utility capacity, floor load, access conditions, and regulatory requirements before finalizing a decision.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 2: Relocation Strategy & Phased Planning</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Build a detailed plan sequencing the move to minimize production downtime — typically relocating non-critical equipment and support functions first, with core production transitioning last.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 3: Regulatory & Utility Coordination</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Begin permit applications, environmental clearances, and utility connection requests as early as possible, running in parallel with physical relocation planning rather than sequentially after it.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 4: Machinery Dismantling & Documentation</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Production equipment is dismantled by trained technicians, with every component labeled, photographed, and logged to ensure accurate reassembly.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 5: Rigging, Transport & Permit Compliance</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Machinery and heavy equipment are moved using certified rigging expertise and specialized transport vehicles, with any required oversized load permits secured in advance.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 6: Utility Activation at the New Facility</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Power, water, gas, and compressed air connections are sequenced and activated so machinery can be reinstalled and tested as soon as infrastructure is ready.
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-2">Step 7: Reassembly, Testing & Production Restart</h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Equipment is reassembled, aligned, and tested, with manufacturer or technical team coordination for final calibration before full production resumes.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Workforce Transition: An Often Underestimated Factor</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Relocating a facility affects your workforce as much as it affects your machinery, and businesses that overlook this often face unexpected staff turnover or productivity loss during the transition. Key considerations include:
      </p>
      <CheckList
        items={[
          "Commute Impact — A significant change in facility location can affect staff retention, particularly for workers without easy access to transport routes serving the new site",
          "Communication Timing — Informing staff early, with a clear timeline, reduces uncertainty and turnover risk during the relocation period",
          "Shift Scheduling During Transition — Phased relocations often require temporary adjustments to shift patterns as production moves between facilities",
          "Training on New Facility Layout — Even staff who aren't operating new equipment benefit from orientation to the new facility's layout, safety protocols, and emergency procedures"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Workforce planning should run parallel to the physical and regulatory planning tracks — not as an afterthought once the move date is confirmed.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Planning for Industrial Relocation in 2026</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Industrial relocation costs typically span several categories that businesses should budget for separately:
      </p>
      <CheckList
        items={[
          "Machinery Rigging & Transport — Dismantling, certified lifting equipment, specialized transport, and reassembly costs",
          "Utility Infrastructure — Connection fees, installation costs, and any infrastructure upgrades required at the new site",
          "Regulatory & Compliance Costs — Permit fees, environmental assessments, and any required certifications",
          "Inventory & Logistics — Relocation of raw materials and finished goods, potentially including temporary storage",
          "Production Downtime — Often the largest hidden cost, calculated as lost output during the transition period",
          "Contingency Buffer — A reasonable buffer for unexpected delays, particularly around utility connections and regulatory approvals, which are the most common sources of timeline overruns"
        ]}
      />
      <p className="text-muted-foreground leading-relaxed mt-6">
        Businesses that budget only for the physical move — machinery and transport — while overlooking downtime and regulatory delays consistently underestimate the true cost of industrial relocation.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes in Industrial Relocation Planning</h2>
      <CheckList
        items={[
          "Sequencing Regulatory Work Too Late — Starting permit applications only after the physical move begins is one of the most common causes of extended production downtime",
          "Underestimating Utility Connection Timelines — Power and gas connections for industrial facilities frequently take longer than businesses budget for",
          "Treating It as a Machinery-Only Project — Focusing exclusively on equipment transport while underestimating utility, workforce, and regulatory coordination",
          "Skipping a Formal Feasibility Study — Committing to a new site without verifying utility capacity and floor load often surfaces costly incompatibilities after the fact",
          "Fragmented Vendor Management — Coordinating separate contractors for machinery, utilities, and inventory without a single accountable project manager creates gaps in responsibility",
          "Unrealistic Production Restart Timelines — Underestimating how long alignment, calibration, and testing take before machinery is genuinely production-ready"
        ]}
      />

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Real-World Example: Consolidating Two Production Sites in Lahore</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Consider a common 2026 scenario: a manufacturer operating two smaller production units in different parts of Lahore decides to consolidate into a single, larger facility in Sundar Industrial Estate to reduce overhead and improve operational efficiency. The process typically begins with a feasibility assessment of the new site's utility capacity and floor load against the combined machinery inventory from both existing units.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Regulatory work — including any required environmental clearance and updated utility connection applications — starts in parallel with physical planning. Machinery from the lower-priority unit is relocated first, allowing the business to test reassembly and utility activation processes before the higher-output unit transitions. Inventory from both original locations is consolidated using SKU-level tracking to prevent stock discrepancies during the merge. This phased, feasibility-first approach typically results in a significantly shorter overall disruption than attempting to relocate and consolidate both units simultaneously without a structured sequencing plan.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industrial Relocation as Part of a Broader Business Move</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Industrial relocation rarely happens in isolation from other parts of the business — administrative offices, warehousing, and sometimes multiple production lines are often involved in the same overall transition. For a detailed breakdown of how the full facility relocation process works, including utility coordination and regulatory support, see our dedicated <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link> services page. For manufacturers specifically focused on relocating a single production unit rather than a multi-facility operation, our <Link to="/services/factory-relocation-pakistan/" className="text-gold hover:underline">Factory Relocation Pakistan</Link> services and practical relocation checklist may be the more directly relevant resource.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        If your industrial relocation also involves moving warehoused inventory or distribution operations, our <Link to="/services/warehouse-relocation/" className="text-gold hover:underline">Warehouse Relocation</Link> services apply the same SKU-tracked, phased approach to keep stock accuracy intact throughout the transition.
      </p>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Final Thoughts</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Industrial relocation in Pakistan rewards the businesses that treat it as a structured, multi-track project rather than a single logistics task. Feasibility planning, regulatory coordination, utility sequencing, and workforce communication all need to run in parallel with the physical machinery move — not as afterthoughts once transport is underway. The manufacturers who consistently minimize downtime and stay on budget are the ones who start this planning early, work with a partner experienced in the full scope of industrial relocation, and build realistic timelines around production restart rather than just transport day.
      </p>

      <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
        <h3 className="text-xl font-display font-bold text-foreground mb-4">Planning an industrial relocation in 2026?</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Contact Best International Movers & Logistics for a free feasibility assessment and transparent quote. Our team can walk through your specific facility requirements and outline a realistic timeline before you commit to a new location.
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
        <em>Published by Best International Movers & Logistics — Pakistan's trusted industrial relocation and logistics partner since 2009. This guide reflects real feasibility, regulatory, and project management conditions for industrial relocation projects across Pakistan and is updated periodically to stay current with regulatory and industry changes. For city-specific guidance or a project already in motion, our team is available to review your timeline directly.</em>
      </p>
    </div>
  );
};

export default IndustrialRelocationGuideBody;
