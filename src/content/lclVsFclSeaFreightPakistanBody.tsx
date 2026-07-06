import type { ReactNode } from "react";

function InfoBox({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "warn" | "save" | "blue" | "green" | "red" | "orange" }) {
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
          <span className="text-gold shrink-0 font-bold" aria-hidden>•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="not-prose space-y-2 my-4 pl-0 list-none">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
          <span className="text-gold shrink-0 font-bold min-w-[1.5rem]" aria-hidden>{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-navy-mid/70 text-foreground">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left p-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`p-4 ${j === 0 ? "font-medium text-foreground" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LclVsFclSeaFreightPakistanBody() {
  return (
    <>
      <nav className="not-prose mb-8 p-4 bg-muted/50 rounded-xl">
        <h3 className="font-semibold mb-3 text-sm">Table of Contents</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><a href="#what-is-lcl" className="hover:text-foreground">What Is LCL (Less than Container Load)?</a></li>
          <li><a href="#what-is-fcl" className="hover:text-foreground">What Is FCL (Full Container Load)?</a></li>
          <li><a href="#lcl-vs-fcl-comparison" className="hover:text-foreground">LCL vs FCL — Side-by-Side Comparison</a></li>
          <li><a href="#cost-comparison" className="hover:text-foreground">LCL vs FCL: Cost Comparison — Pakistan Routes 2026</a></li>
          <li><a href="#lcl-consolidation" className="hover:text-foreground">How LCL Consolidation Works — Step by Step</a></li>
          <li><a href="#fcl-shipping" className="hover:text-foreground">How FCL Shipping Works — Step by Step</a></li>
          <li><a href="#container-sizes" className="hover:text-foreground">Container Sizes: 20ft vs 40ft vs 40ft High Cube</a></li>
          <li><a href="#when-lcl" className="hover:text-foreground">When to Choose LCL — 10 Scenarios</a></li>
          <li><a href="#when-fcl" className="hover:text-foreground">When to Choose FCL — 10 Scenarios</a></li>
          <li><a href="#pakistan-uae" className="hover:text-foreground">LCL vs FCL from Pakistan to UAE / Dubai</a></li>
          <li><a href="#pakistan-uk" className="hover:text-foreground">LCL vs FCL from Pakistan to UK / Europe</a></li>
          <li><a href="#pakistan-usa" className="hover:text-foreground">LCL vs FCL from Pakistan to USA & Canada</a></li>
          <li><a href="#pakistan-china" className="hover:text-foreground">LCL vs FCL from Pakistan to China</a></li>
          <li><a href="#household-goods" className="hover:text-foreground">LCL vs FCL for Household Goods & Personal Effects</a></li>
          <li><a href="#hidden-costs" className="hover:text-foreground">Hidden Costs in LCL and FCL Shipping</a></li>
          <li><a href="#transit-times" className="hover:text-foreground">LCL vs FCL Transit Times — Route by Route</a></li>
          <li><a href="#cargo-insurance" className="hover:text-foreground">Cargo Insurance: LCL vs FCL Differences</a></li>
          <li><a href="#best-rates" className="hover:text-foreground">How to Get the Best LCL and FCL Rates</a></li>
          <li><a href="#special-cargo" className="hover:text-foreground">LCL vs FCL — Special Cargo Types</a></li>
        </ul>
      </nav>

      <p>
        If you have ever tried to book sea freight from Pakistan — whether you are exporting garments from Lahore to Dubai, shipping household goods from Karachi to London, or importing machinery from China to Islamabad — you have faced this fundamental question: should I book LCL (Less than Container Load) or FCL (Full Container Load)?
      </p>
      <p>
        It sounds simple. LCL means you share a container with other cargo. FCL means you use the whole container yourself. But the real decision is far more nuanced — involving your cargo volume, budget, transit time requirements, cargo sensitivity, route options, and your relationship with your freight forwarder. Choosing wrong can cost you 30–60% more than necessary, or result in delays, damage, and customs complications.
      </p>
      <p>
        This comprehensive guide — written specifically for Pakistani exporters, importers, and individuals shipping internationally — explains LCL and FCL in complete detail: how they work, what they cost from Pakistan routes, when to choose each, and how to get the best rates from your freight forwarder. By the end, you will know exactly which option to book for your next shipment.
      </p>

      <InfoBox variant="blue">
        <strong>📌 Quick Answer: LCL vs FCL at a Glance</strong>
        <ul className="mt-2 space-y-1">
          <li><strong>LCL (Less than Container Load):</strong> Share a container with other shippers. Pay per CBM (cubic meter). Best for cargo under 15 CBM. More flexible. Slower.</li>
          <li><strong>FCL (Full Container Load):</strong> Entire container exclusively for your cargo. Pay per container (20ft or 40ft). Best for cargo over 15–18 CBM. Faster. More secure.</li>
          <li><strong>Break-even point:</strong> At approximately 14–16 CBM, FCL and LCL cost roughly the same — above this, FCL is almost always cheaper.</li>
        </ul>
      </InfoBox>

      <h2 id="what-is-lcl">1. What Is LCL (Less than Container Load)? — Complete Explanation</h2>
      <p>
        LCL stands for Less than Container Load — sometimes called groupage or consolidation cargo. In LCL shipping, your cargo shares a standard shipping container with goods from multiple other shippers. Instead of paying for an entire container, you only pay for the space your cargo occupies, measured in CBM (Cubic Meters) or freight tons (whichever is greater).
      </p>

      <h3>How LCL Shipping Is Priced</h3>
      <p>
        LCL freight is charged per CBM (cubic meter) or per freight ton — the carrier charges whichever is higher. One freight ton = 1,000 kg. One CBM = 1 cubic meter of space. For most general cargo, CBM is the applicable measure.
      </p>

      <InfoBox variant="green">
        <strong>📐 CBM Calculation Formula</strong>
        <p className="mt-2">CBM = Length (metres) × Width (metres) × Height (metres)</p>
        <p className="mt-1"><strong>Example 1:</strong> A box 100cm × 80cm × 60cm = 1.0m × 0.8m × 0.6m = 0.48 CBM</p>
        <p><strong>Example 2:</strong> 10 boxes each 60cm × 50cm × 40cm = 10 × (0.6×0.5×0.4) = 10 × 0.12 = 1.2 CBM</p>
        <p className="mt-2">If your 1.2 CBM cargo weighs 2,000 kg (= 2 freight tons), you pay for 2 freight tons (higher of CBM and freight tons). For general cargo, CBM is almost always the higher measure and therefore the pricing basis.</p>
      </InfoBox>

      <h3>What Happens to LCL Cargo at the Origin</h3>
      <CheckList
        items={[
          "You deliver your cargo to the freight forwarder's CFS (Container Freight Station) or they collect from your premises",
          "The CFS operator consolidates your cargo with multiple other shippers' cargo into one container",
          "Your cargo is assigned a position within the container based on destination and fragility",
          "The consolidated container is sealed and sent to the terminal for loading onto the vessel",
          "You receive a House Bill of Lading (HBL) — your own B/L for your portion of the cargo",
          "The forwarder (acting as NVOCC) holds the Master Bill of Lading (MBL) from the shipping line",
        ]}
      />

      <h3>LCL Minimum Charge — What You Need to Know</h3>
      <p>
        Almost all LCL freight has a minimum charge — typically 1 CBM or 1 freight ton, even if your actual cargo is smaller. This means shipping a 0.3 CBM parcel via LCL will be charged as 1 CBM. For very small shipments under 0.5 CBM, compare LCL with air freight or courier — sometimes courier is cheaper for tiny volumes.
      </p>

      <h2 id="what-is-fcl">2. What Is FCL (Full Container Load)? — Complete Explanation</h2>
      <p>
        FCL stands for Full Container Load. In FCL shipping, you book an entire standard shipping container exclusively for your cargo. No other shipper's goods share your container. You pay a flat rate per container — regardless of whether the container is completely full or only partially loaded. This makes FCL economical when your volume is large enough to justify the fixed cost.
      </p>

      <h3>FCL Container Types Available for Pakistan Exports</h3>
      <DataTable
        headers={["Container Type", "External Size", "Internal Volume", "Max Payload", "Best For"]}
        rows={[
          ["20ft Standard (TEU)", "6.1m × 2.4m × 2.6m", "~25–28 CBM", "~28,000 kg", "Medium volume cargo, heavy goods"],
          ["40ft Standard (FEU)", "12.2m × 2.4m × 2.6m", "~55–58 CBM", "~26,500 kg", "Large volume, general cargo"],
          ["40ft High Cube (HC)", "12.2m × 2.4m × 2.9m", "~67–70 CBM", "~26,000 kg", "Tall cargo, furniture, household goods"],
          ["20ft Reefer", "6.1m × 2.3m × 2.2m", "~22 CBM", "~27,000 kg", "Perishables, pharma (temperature control)"],
          ["40ft Reefer", "12.2m × 2.3m × 2.2m", "~52 CBM", "~26,500 kg", "Large perishable shipments"],
          ["20ft Open Top", "6.1m × 2.4m × 2.6m", "~25 CBM", "~28,000 kg", "Tall cargo loaded from top (cranes)"],
          ["40ft Flat Rack", "12.2m × 2.4m × N/A", "No walls", "~40,000 kg", "OOG cargo, machinery, vehicles"],
        ]}
      />

      <h3>Who Loads and Seals an FCL Container?</h3>
      <CheckList
        items={[
          "Factory loading (Shipper's Load and Count — SLC): You or your agent loads and seals the container at your factory — common for large exporters",
          "CFS stuffing: For smaller FCL bookings, the freight forwarder's CFS team loads the container",
          "Container seal: Once loaded, a customs seal AND a shipping line seal are applied",
          "VGM (Verified Gross Mass): Container must be weighed and VGM submitted to shipping line — SOLAS requirement",
          "Once sealed, the container goes directly to the terminal — no one else's cargo enters",
        ]}
      />

      <h2 id="lcl-vs-fcl-comparison">3. LCL vs FCL — Complete Side-by-Side Comparison</h2>
      <p>Here is the definitive comparison table that every Pakistani shipper needs before booking sea freight:</p>

      <DataTable
        headers={["Factor", "🚢 LCL (Less than Container Load)", "📦 FCL (Full Container Load)"]}
        rows={[
          ["Cost basis", "Per CBM or freight ton", "Flat rate per container"],
          ["Minimum charge", "1 CBM / 1 freight ton", "Full container cost regardless of fill level"],
          ["Best volume", "1–14 CBM", "15+ CBM (20ft) or 28+ CBM (40ft)"],
          ["Break-even point", "14–16 CBM — above this, FCL often cheaper", "14–16 CBM — below this, LCL often cheaper"],
          ["Transit time", "Slower — consolidation adds 4–7 days", "Faster — direct loading, no consolidation wait"],
          ["Security", "Cargo mixed with others — moderate risk", "Your cargo only — lower contamination risk"],
          ["Customs risk", "One shipper's problem can delay all cargo", "Your GD only — no third-party delay risk"],
          ["Damage risk", "Slightly higher — multiple handling stages", "Lower — fewer handling touchpoints"],
          ["Flexibility", "High — book any size, any time", "Lower — must have volume to justify"],
          ["Documentation", "House B/L + Master B/L", "Direct B/L from shipping line"],
          ["Cargo insurance", "All Risks (ICC A) recommended", "All Risks (ICC A) recommended"],
          ["Tracking", "Via NVOCC portal + shipping line", "Direct on shipping line portal"],
          ["Booking lead time", "1–5 days", "3–10 days (container availability varies)"],
          ["Demurrage risk", "Lower — NVOCC manages container return", "Higher — you responsible for container return"],
          ["Best for", "SMEs, individuals, household goods, samples", "Large exporters, full household moves, factories"],
        ]}
      />

      <InfoBox variant="orange">
        <strong>🔗 Service: Sea Freight from Pakistan — LCL & FCL Booking</strong>
        <p className="mt-2">Need to book LCL or FCL sea freight from Pakistan?</p>
        <p>bestintlmovers.com provides competitive LCL and FCL rates from Karachi to UAE, UK, USA, Canada, Australia and all global ports:</p>
        <CheckList
          items={[
            "LCL consolidation from Karachi — competitive per-CBM rates",
            "FCL 20ft and 40ft container booking — all major shipping lines",
            "Transparent all-in pricing — no hidden destination charges",
            "Export customs clearance included (WeBOC / GD filing)",
            "Real-time container tracking via online portal",
          ]}
        />
      </InfoBox>

      <h2 id="cost-comparison">4. LCL vs FCL Cost Comparison — Pakistan Routes 2026</h2>
      <p>
        The cost difference between LCL and FCL depends heavily on your cargo volume. Here is a practical cost comparison for the most common Pakistan trade routes. These figures are ocean freight components only — add origin charges, customs, and destination charges for total cost.
      </p>

      <h3>Cost Comparison: Karachi to Jebel Ali (UAE) — 2026</h3>
      <DataTable
        headers={["Volume", "LCL Rate", "LCL Total Cost", "FCL Option", "FCL Total Cost", "Verdict"]}
        rows={[
          ["2 CBM", "USD 55/CBM", "USD 110", "N/A", "N/A", "LCL wins easily"],
          ["5 CBM", "USD 55/CBM", "USD 275", "N/A", "N/A", "LCL wins"],
          ["10 CBM", "USD 55/CBM", "USD 550", "N/A", "N/A", "LCL wins"],
          ["15 CBM", "USD 55/CBM", "USD 825", "20ft: USD 500", "USD 500", "FCL slightly better"],
          ["20 CBM", "USD 55/CBM", "USD 1,100", "20ft: USD 500", "USD 500", "FCL wins clearly"],
          ["28 CBM", "USD 55/CBM", "USD 1,540", "20ft: USD 500", "USD 500", "FCL wins strongly"],
          ["50 CBM", "USD 55/CBM", "USD 2,750", "40ft: USD 800", "USD 800", "FCL wins massively"],
        ]}
      />

      <h3>Cost Comparison: Karachi to Felixstowe (UK) — 2026</h3>
      <DataTable
        headers={["Volume", "LCL Rate", "LCL Total Cost", "FCL Option", "FCL Total Cost", "Verdict"]}
        rows={[
          ["2 CBM", "USD 130/CBM", "USD 260", "N/A", "N/A", "LCL wins easily"],
          ["5 CBM", "USD 130/CBM", "USD 650", "N/A", "N/A", "LCL wins"],
          ["10 CBM", "USD 130/CBM", "USD 1,300", "N/A", "N/A", "LCL wins"],
          ["15 CBM", "USD 130/CBM", "USD 1,950", "20ft: USD 1,600", "USD 1,600", "FCL slightly better"],
          ["20 CBM", "USD 130/CBM", "USD 2,600", "20ft: USD 1,600", "USD 1,600", "FCL wins clearly"],
          ["30 CBM", "USD 130/CBM", "USD 3,900", "20ft: USD 1,600", "USD 1,600", "FCL wins strongly"],
          ["60 CBM", "USD 130/CBM", "USD 7,800", "40ft: USD 2,500", "USD 2,500", "FCL wins massively"],
        ]}
      />

      <h3>Cost Comparison: Karachi to New York (USA) — 2026</h3>
      <DataTable
        headers={["Volume", "LCL Rate", "LCL Total Cost", "FCL Option", "FCL Total Cost", "Verdict"]}
        rows={[
          ["2 CBM", "USD 180/CBM", "USD 360", "N/A", "N/A", "LCL wins easily"],
          ["5 CBM", "USD 180/CBM", "USD 900", "N/A", "N/A", "LCL wins"],
          ["10 CBM", "USD 180/CBM", "USD 1,800", "N/A", "N/A", "LCL wins"],
          ["12 CBM", "USD 180/CBM", "USD 2,160", "20ft: USD 2,500", "USD 2,500", "LCL marginally better"],
          ["16 CBM", "USD 180/CBM", "USD 2,880", "20ft: USD 2,500", "USD 2,500", "FCL wins"],
          ["25 CBM", "USD 180/CBM", "USD 4,500", "20ft: USD 2,500", "USD 2,500", "FCL wins strongly"],
          ["55 CBM", "USD 180/CBM", "USD 9,900", "40ft: USD 4,000", "USD 4,000", "FCL wins massively"],
        ]}
      />

      <InfoBox variant="blue">
        <strong>💡 Key Insight: The LCL vs FCL Break-Even Rule</strong>
        <ul className="mt-2 space-y-1">
          <li>Dubai / UAE route: FCL becomes cheaper at ~14 CBM (20ft) → book FCL above 14 CBM</li>
          <li>UK / Europe route: FCL becomes cheaper at ~13 CBM (20ft) → book FCL above 13 CBM</li>
          <li>USA / Canada route: FCL becomes cheaper at ~14–16 CBM → book FCL above this</li>
          <li>China route: FCL becomes cheaper at ~12–14 CBM → book FCL above this</li>
          <li><strong>Rule of thumb:</strong> If you have more than half a 20ft container (12+ CBM), ALWAYS get an FCL quote</li>
          <li>Remember: LCL has extra costs (stuffing/unstuffing, NVOCC fee) that eat into apparent savings</li>
        </ul>
      </InfoBox>

      <h2 id="lcl-consolidation">5. How LCL Consolidation Works — Step by Step from Pakistan</h2>
      <p>Understanding the LCL consolidation process helps you plan timelines accurately and choose the right NVOCC operator for your cargo.</p>

      <DataTable
        headers={["Step", "Action", "Who Does It", "Time Required"]}
        rows={[
          ["1", "Book LCL space with NVOCC / forwarder", "You / your broker", "1–3 days before cut-off"],
          ["2", "Deliver cargo to NVOCC's CFS in Karachi", "Your truck / forwarder", "Before CFS cut-off date"],
          ["3", "CFS receives and weighs/measures your cargo", "CFS operator", "Same day"],
          ["4", "Cargo consolidated with other shippers in container", "CFS operator + NVOCC", "1–3 days"],
          ["5", "Container sealed and VGM submitted to shipping line", "CFS + NVOCC", "24–48 hrs before vessel"],
          ["6", "Export GD filed on WeBOC by clearing agent", "Clearing agent", "Parallel — 1–2 days"],
          ["7", "Container delivered to Karachi terminal (KICT/QICT)", "Terminal trucker", "Before terminal cut-off"],
          ["8", "Container loaded onto vessel", "Terminal operator", "Vessel departure day"],
          ["9", "House B/L (HBL) issued to you", "NVOCC", "After vessel departure"],
          ["10", "At destination: container de-consolidated at CFS", "Destination CFS agent", "1–3 days after vessel arrival"],
          ["11", "Your cargo released after customs clearance", "Destination clearing agent", "1–5 days"],
          ["12", "Last-mile delivery to your address", "Delivery agent", "1–3 days"],
        ]}
      />

      <InfoBox variant="red">
        <strong>🚨 LCL Risk: One Shipper's Problem Delays Everyone</strong>
        <p className="mt-2">
          In LCL consolidation, your cargo shares a container with other shippers. If Customs selects the container for RED channel examination due to another shipper's misdeclaration, ALL cargo in that container is held — including yours. This is a real, documented risk on Pakistan export routes.
        </p>
        <p className="mt-2"><strong>To mitigate:</strong></p>
        <CheckList
          items={[
            "Use a reputable NVOCC that vets fellow consolidation customers carefully",
            "Build 5–7 extra days into your delivery schedule for LCL",
            "If cargo is time-critical, switch to FCL or air freight",
          ]}
        />
      </InfoBox>

      <h2 id="fcl-shipping">6. How FCL Shipping Works — Step by Step from Pakistan</h2>
      <DataTable
        headers={["Step", "Action", "Who Does It", "Time Required"]}
        rows={[
          ["1", "Book FCL space with shipping line via agent", "You / freight forwarder", "7–14 days before ETD"],
          ["2", "Empty container released to you / your factory", "Shipping line / terminal", "3–5 days before cut-off"],
          ["3", "Load and stuff container at your factory or CFS", "Your team / CFS", "1 day"],
          ["4", "Seal container + apply customs seal", "Shipper / customs", "Same day as stuffing"],
          ["5", "Weigh container — submit VGM to shipping line", "Weighbridge operator", "Before VGM cut-off"],
          ["6", "Export GD filed on WeBOC + Let Export Order obtained", "Clearing agent", "1–3 days"],
          ["7", "Container trucked to Karachi terminal (KICT/QICT)", "Trucking company", "Before cargo cut-off"],
          ["8", "Container loaded onto vessel", "Terminal operator", "Vessel departure day"],
          ["9", "Original Bill of Lading (B/L) issued by shipping line", "Shipping line", "Within 3–5 days of departure"],
          ["10", "At destination: container released after customs", "Destination agent + customs", "1–7 days after arrival"],
          ["11", "Container delivered to consignee's warehouse / address", "Trucking company", "1–3 days"],
          ["12", "Empty container returned to shipping line depot", "Consignee / agent", "Within free time (3–7 days)"],
        ]}
      />

      <InfoBox variant="green">
        <strong>✅ FCL Advantage: Your Container = Your Control</strong>
        <CheckList
          items={[
            "No other shipper's cargo = no contamination risk (food, pharma, luxury goods especially benefit)",
            "Customs examination affects only your GD — no third-party delay risk",
            "Faster transit — container goes directly, no consolidation wait",
            "Cheaper per CBM when volume exceeds 14–16 CBM",
            "Easier claims — if damage occurs, liability is clear",
            "Suitable for fragile, sensitive, or high-value cargo",
          ]}
        />
      </InfoBox>

      <h2 id="container-sizes">7. Container Sizes: 20ft vs 40ft vs 40ft High Cube — Complete Guide</h2>
      <p>Choosing between a 20ft and 40ft container is a critical FCL decision. Here is everything you need to know:</p>

      <DataTable
        headers={["Specification", "20ft Standard", "40ft Standard", "40ft High Cube"]}
        rows={[
          ["Internal Length", "5.90 metres", "12.03 metres", "12.03 metres"],
          ["Internal Width", "2.35 metres", "2.35 metres", "2.35 metres"],
          ["Internal Height", "2.39 metres", "2.39 metres", "2.69 metres"],
          ["Usable Volume", "25–28 CBM", "55–58 CBM", "67–70 CBM"],
          ["Max Payload", "~28,000 kg", "~26,500 kg", "~26,000 kg"],
          ["Ocean Freight Cost", "USD 350–2,500", "USD 550–4,000", "USD 600–4,500"],
          ["Best Fill Weight", "Heavy goods", "General cargo", "Tall/bulky cargo"],
          ["Best Fill Volume", "Dense cargo", "Light, bulky", "Furniture, household"],
          ["Typical Use Pakistan", "Textiles, rice, machinery", "Garments, household, general", "Furniture, household moves"],
        ]}
      />

      <InfoBox variant="blue">
        <strong>📌 20ft vs 40ft: Which Is Cheaper for Your Cargo?</strong>
        <p className="mt-2">
          A 40ft container costs approximately 1.5x the price of a 20ft — but holds 2x the volume. This means the 40ft is almost always cheaper per CBM if you have the volume to fill it.
        </p>
        <p className="mt-2"><strong>Rule:</strong> If you have 30+ CBM, always price a 40ft alongside a 20ft and compare per-CBM cost. If your cargo is heavy (near 28-ton limit) but not very large in volume, the 20ft may suit better — 40ft containers hit their weight limit less often.</p>
      </InfoBox>

      <h2 id="when-lcl">8. When to Choose LCL — 10 Real-World Scenarios from Pakistan</h2>
      <p>LCL is the right choice in these specific situations. If your situation matches any of these, LCL is likely your best option:</p>

      <DataTable
        headers={["Scenario", "Why LCL Wins", "Typical Volume"]}
        rows={[
          ["Small textile exporter sending first sample order", "Volume too small for FCL; test the market first", "0.5–3 CBM"],
          ["Individual shipping household goods — studio apartment", "Not enough volume for a container; LCL fills the gap", "3–8 CBM"],
          ["E-commerce seller sending stock to UAE distributor", "Regular small orders; flexibility more important than cost", "1–5 CBM per shipment"],
          ["Pakistani student shipping belongings to UK/Canada", "Personal effects too small for a container", "0.5–3 CBM"],
          ["Importer testing a new product line from China", "Small test order before committing to FCL quantity", "2–8 CBM"],
          ["Seasonal exporter with irregular volumes", "Volume varies month to month; LCL avoids empty space cost", "5–12 CBM (variable)"],
          ["Family shipping gifts and care packages abroad", "Ongoing small shipments — LCL is the only viable option", "0.5–2 CBM"],
          ["Pharmaceutical exporter with high-value small shipment", "Value too high to risk with air; volume too small for FCL", "1–5 CBM"],
          ["Machinery spare parts importer — urgent small batch", "Cannot wait for FCL accumulation; LCL next sailing", "2–8 CBM"],
          ["Food exporter mixing multiple SKUs for a distributor", "Mixed pallet of different products — ideal for LCL groupage", "3–10 CBM"],
        ]}
      />

      <h2 id="when-fcl">9. When to Choose FCL — 10 Real-World Scenarios from Pakistan</h2>
      <DataTable
        headers={["Scenario", "Why FCL Wins", "Typical Volume"]}
        rows={[
          ["Large garment exporter filling seasonal orders for UK buyer", "Volume exceeds 20 CBM; FCL cheaper per CBM", "20–55 CBM"],
          ["Family relocating from Karachi to Dubai — full house", "Complete household move; FCL gives security + value", "25–60 CBM"],
          ["Rice or wheat exporter sending bulk grain order", "Heavy, dense cargo; 20ft FCL maximises weight capacity", "18–28 ton"],
          ["Machinery importer receiving equipment from China", "Single large piece + accessories; FCL avoids LCL handling", "15–40 CBM"],
          ["Car shipping — 1 or 2 vehicles to UAE", "Vehicles cannot go LCL; FCL (20ft) or RoRo only", "1–2 vehicles"],
          ["Pharmaceutical manufacturer exporting drug batches", "Contamination risk from LCL unacceptable; FCL essential", "15–30 CBM"],
          ["Furniture exporter sending showroom stock to UAE", "Bulky, tall items; 40ft HC maximises volume", "40–60 CBM"],
          ["Textile factory filling repeat large order for EU buyer", "Regular large volume; FCL negotiated contract rate better", "25–55 CBM"],
          ["Perishable food exporter (reefer container needed)", "Temperature control only available in FCL reefer", "Any volume"],
          ["High-value electronics importer", "Security and contamination risk too high for LCL", "15–30 CBM"],
        ]}
      />

      <InfoBox variant="orange">
        <strong>🔗 Service: International Moving Services — LCL & FCL Household Goods</strong>
        <p className="mt-2">Moving your household from Pakistan to UAE, UK, USA, Canada or Australia?</p>
        <p>bestintlmovers.com provides professional door-to-door moving services with both LCL and FCL options — we advise which is right for your volume:</p>
        <CheckList
          items={[
            "LCL groupage for smaller moves (studio to 2-bed): AED 600–2,800 Karachi to Dubai",
            "FCL 20ft for medium homes (2–3 bed): competitive all-in rates",
            "FCL 40ft for large villas and complete household moves",
            "Professional packing, export customs clearance, destination delivery",
            "Free pre-move survey — we calculate your CBM and recommend the best option",
          ]}
        />
      </InfoBox>

      <h2 id="pakistan-uae">10. LCL vs FCL from Pakistan to UAE / Dubai — Detailed Guide</h2>
      <p>
        The Pakistan–UAE corridor is the busiest trade route for Pakistani cargo — serving textile exporters, household movers, personal effects shippers, and commercial importers. Here is what you need to know about LCL vs FCL specifically on this route:
      </p>

      <h3>LCL from Pakistan to UAE — Key Facts</h3>
      <CheckList
        items={[
          "Sailing frequency: daily LCL consolidations from Karachi to Jebel Ali — one of the world's most frequent LCL services",
          "Transit time: 8–14 days door-to-door (Karachi to Dubai address)",
          "LCL rate: USD 45–75 per CBM (Karachi to Jebel Ali, ocean freight)",
          "Minimum: 1 CBM or 1 freight ton",
          "LCL operators: multiple NVOCCs in Karachi — competition keeps rates low",
          "UAE customs: 5% import duty + 5% VAT; personal effects duty-free with residency",
          "CFS at Jebel Ali: well-developed — cargo typically released within 2–4 days of vessel arrival",
        ]}
      />

      <h3>FCL from Pakistan to UAE — Key Facts</h3>
      <CheckList
        items={[
          "Shipping lines: Maersk, MSC, CMA CGM, Evergreen, Hapag-Lloyd, COSCO — multiple options",
          "Transit time: 4–6 days port-to-port (Karachi to Jebel Ali), 6–10 days door-to-door",
          "FCL 20ft rate: USD 350–700 (ocean freight, market-dependent)",
          "FCL 40ft rate: USD 550–1,100 (ocean freight, market-dependent)",
          "Booking lead time: 7–10 days recommended; last-minute possible but premium applies",
          "Demurrage: Jebel Ali typically offers 5–7 free days before detention charges begin",
        ]}
      />

      <DataTable
        headers={["Shipment Size", "Recommended Mode", "Approx Ocean Cost", "Door-to-Door Time"]}
        rows={[
          ["1–5 CBM", "LCL", "USD 55–275", "10–16 days"],
          ["5–10 CBM", "LCL", "USD 275–550", "10–16 days"],
          ["10–14 CBM", "LCL", "USD 550–770", "10–16 days"],
          ["15–25 CBM", "FCL 20ft", "USD 400–600", "7–12 days"],
          ["25–55 CBM", "FCL 40ft", "USD 600–1,000", "7–12 days"],
          ["55+ CBM", "FCL 40ft HC", "USD 650–1,100", "7–12 days"],
        ]}
      />

      <h2 id="pakistan-uk">11. LCL vs FCL from Pakistan to UK / Europe — Detailed Guide</h2>

      <h3>LCL from Pakistan to UK</h3>
      <CheckList
        items={[
          "Main UK destination: Felixstowe (FXT) — also Southampton and Tilbury",
          "Transit time: 28–38 days door-to-door (Karachi to UK address)",
          "LCL rate: USD 120–160 per CBM (Karachi to Felixstowe, ocean freight)",
          "Routing: Direct via Maersk/MSC, or via Jebel Ali transhipment",
          "UK customs: HMRC CDS filing — UK customs broker required at destination",
          "GSP duty reduction: Certificate of Origin (Form A/REX) needed for reduced UK duty on Pakistan textiles",
        ]}
      />

      <h3>LCL from Pakistan to Europe (Rotterdam / Hamburg)</h3>
      <CheckList
        items={[
          "Transit time: 28–38 days to Rotterdam or Hamburg",
          "LCL rate: USD 130–180 per CBM (Karachi to Rotterdam/Hamburg)",
          "EU customs: Import duty + 19–21% VAT; EU GSP reduces duty on Pakistan goods",
          "Transhipment hubs used: Jebel Ali, Port Said, Colombo",
        ]}
      />

      <h3>FCL from Pakistan to UK / Europe</h3>
      <CheckList
        items={[
          "20ft FCL Karachi to Felixstowe: USD 1,100–2,100 (ocean freight)",
          "40ft FCL Karachi to Felixstowe: USD 1,700–3,300 (ocean freight)",
          "Transit time: 22–30 days port-to-port",
          "Carriers: Maersk, MSC, CMA CGM, Hapag-Lloyd — direct weekly services",
          "Break-even: FCL becomes cheaper than LCL at approximately 12–14 CBM on UK routes",
        ]}
      />

      <h2 id="pakistan-usa">12. LCL vs FCL from Pakistan to USA & Canada</h2>

      <h3>LCL from Karachi to USA / Canada</h3>
      <CheckList
        items={[
          "Transit time: 35–50 days door-to-door (Karachi to US/Canada address)",
          "LCL rate: USD 170–220 per CBM (Karachi to New York or Los Angeles)",
          "Routing: Via Jebel Ali or Colombo transhipment",
          "ISF (Importer Security Filing): must be filed 24 hrs before Karachi departure — your US broker handles",
          "FDA, FCC clearance for food/pharma/electronics — arrange with US customs broker",
        ]}
      />

      <h3>FCL from Karachi to USA / Canada</h3>
      <CheckList
        items={[
          "20ft FCL to New York: USD 2,000–4,000; to Los Angeles: USD 1,800–3,800",
          "40ft FCL to New York: USD 3,000–6,000; to Los Angeles: USD 2,800–5,800",
          "Transit time: 28–40 days port-to-port",
          "Break-even: FCL cheaper than LCL at approximately 13–15 CBM",
          "Canada: CBSA clearance — similar to US but separate broker required",
        ]}
      />

      <h2 id="pakistan-china">13. LCL vs FCL from Pakistan to China</h2>
      <p>Pakistan–China trade under CPEC has grown significantly. Both import and export flows benefit from understanding LCL vs FCL dynamics on this route.</p>

      <DataTable
        headers={["Route", "LCL Rate/CBM", "FCL 20ft Rate", "Transit Time", "Break-even"]}
        rows={[
          ["Karachi → Shanghai", "USD 60–90", "USD 400–900", "14–18 days", "~10 CBM"],
          ["Karachi → Tianjin", "USD 65–95", "USD 420–950", "16–20 days", "~10 CBM"],
          ["Karachi → Guangzhou", "USD 55–85", "USD 350–800", "12–16 days", "~9 CBM"],
          ["Shanghai → Karachi", "USD 70–100", "USD 500–1,100", "14–18 days", "~11 CBM"],
          ["Guangzhou → Karachi", "USD 65–95", "USD 450–1,000", "12–16 days", "~10 CBM"],
        ]}
      />

      <h2 id="household-goods">14. LCL vs FCL for Household Goods & Personal Effects from Pakistan</h2>
      <p>Household goods shipping is one of the most common reasons Pakistani individuals and families choose sea freight. The LCL vs FCL decision for household moves is primarily volume-driven.</p>

      <DataTable
        headers={["Home Size", "Typical Volume", "Recommended Mode", "Karachi to Dubai Cost", "Transit"]}
        rows={[
          ["Studio / 1-bed flat", "3–8 CBM", "LCL", "AED 600–1,600", "12–18 days"],
          ["2-bedroom apartment", "8–16 CBM", "LCL", "AED 1,200–2,800", "12–18 days"],
          ["3-bedroom house", "16–30 CBM", "FCL 20ft", "AED 2,500–4,800", "8–14 days"],
          ["4-bedroom villa", "30–50 CBM", "FCL 40ft", "AED 3,800–7,000", "8–14 days"],
          ["5+ bedroom + garage", "50–70 CBM", "FCL 40ft HC", "AED 4,500–8,500", "8–14 days"],
        ]}
      />

      <h3>LCL for Household Goods — Advantages</h3>
      <CheckList
        items={[
          "Pay only for what you have — no wasted container space cost",
          "More frequent sailings — weekly or even more frequent LCL consolidations to UAE",
          "No need to accumulate cargo — ship as soon as you are ready",
          "Good option for studio and 1–2 bed apartments moving to UAE",
        ]}
      />

      <h3>FCL for Household Goods — Advantages</h3>
      <CheckList
        items={[
          "Your furniture and fragile items are not handled alongside strangers' cargo",
          "Lower damage risk — container sealed at origin, not opened until destination",
          "Faster transit — no consolidation delays",
          "Better value for 3-bedroom and larger homes — break-even at ~15 CBM",
          "One customs examination — your goods only, not other shippers' cargo affecting you",
        ]}
      />

      <h2 id="hidden-costs">15. Hidden Costs in LCL and FCL Shipping from Pakistan</h2>
      <p>
        Many freight quotes from Pakistan look attractively low — until you add all the mandatory charges. Here is the complete list of charges for both LCL and FCL that you must include in your total cost comparison:
      </p>

      <h3>LCL — Hidden and Additional Charges to Budget For</h3>
      <DataTable
        headers={["Charge", "Typical Amount", "Mandatory?"]}
        rows={[
          ["CFS stuffing / handling (origin)", "USD 8–18 per CBM", "Yes"],
          ["NVOCC / HBL issuance fee", "USD 30–60 per HBL", "Yes"],
          ["Origin customs documentation (GD)", "PKR 2,500–5,000", "Yes"],
          ["Origin THC (terminal handling charge)", "USD 8–15 per CBM", "Yes"],
          ["Destination CFS handling", "USD 10–20 per CBM", "Yes"],
          ["Destination NVOCC delivery order", "USD 30–60", "Yes"],
          ["Destination customs clearance", "Varies by country", "Yes"],
          ["Cargo insurance (recommended)", "0.35–0.7% of cargo value", "No — but strongly advised"],
          ["Certificate of Origin", "PKR 500–1,500", "If required"],
          ["Fumigation certificate", "PKR 2,000–5,000", "If wooden packing"],
        ]}
      />

      <h3>FCL — Hidden and Additional Charges to Budget For</h3>
      <DataTable
        headers={["Charge", "Typical Amount", "Mandatory?"]}
        rows={[
          ["Origin THC (Karachi terminal)", "USD 100–200 per container", "Yes"],
          ["Bill of Lading issuance", "USD 30–75 per B/L", "Yes"],
          ["VGM / weighing fee", "PKR 3,000–8,000", "Yes (SOLAS mandatory)"],
          ["Origin customs documentation (GD)", "PKR 2,500–6,000", "Yes"],
          ["Container seal", "USD 10–30", "Yes"],
          ["Inland haulage (factory to port)", "PKR 8,000–25,000", "Yes"],
          ["Destination THC", "Varies (USD 100–400)", "Yes"],
          ["Demurrage (if container not returned on time)", "USD 50–200/day", "If applicable — avoid"],
          ["Destination customs clearance", "Varies by country", "Yes"],
          ["Cargo insurance", "0.35–0.7% of cargo value", "No — but strongly advised"],
        ]}
      />

      <InfoBox variant="red">
        <strong>⚠️ Always Ask for All-In Door-to-Door Pricing</strong>
        <p className="mt-2">
          A Karachi freight agent quoting 'LCL at USD 55/CBM to Jebel Ali' is only quoting the ocean freight component. The total all-in cost to a Dubai address will be 2–3x this figure after adding: CFS charges, origin THC, customs doc, destination THC, destination clearance, and delivery. Always ask: 'What is the total cost from my Karachi address to my Dubai address — fully inclusive?' Compare quotes on this basis only.
        </p>
      </InfoBox>

      <h2 id="transit-times">16. LCL vs FCL Transit Times — Route by Route Pakistan</h2>
      <DataTable
        headers={["Route", "LCL Door-to-Door", "FCL Door-to-Door", "LCL Extra Days vs FCL"]}
        rows={[
          ["Karachi → Dubai (UAE)", "10–18 days", "7–12 days", "+3–6 days for LCL"],
          ["Karachi → Abu Dhabi", "12–20 days", "8–14 days", "+4–6 days for LCL"],
          ["Karachi → Felixstowe (UK)", "30–40 days", "24–32 days", "+6–8 days for LCL"],
          ["Karachi → Rotterdam (Netherlands)", "30–42 days", "25–34 days", "+5–8 days for LCL"],
          ["Karachi → Hamburg (Germany)", "30–42 days", "25–34 days", "+5–8 days for LCL"],
          ["Karachi → New York (USA)", "38–52 days", "32–42 days", "+6–10 days for LCL"],
          ["Karachi → Los Angeles (USA)", "40–55 days", "34–48 days", "+6–10 days for LCL"],
          ["Karachi → Toronto (Canada)", "42–58 days", "36–50 days", "+6–8 days for LCL"],
          ["Karachi → Shanghai (China)", "18–28 days", "14–22 days", "+4–6 days for LCL"],
          ["Karachi → Sydney (Australia)", "30–45 days", "25–38 days", "+5–8 days for LCL"],
        ]}
      />

      <p>
        Why is LCL slower than FCL? LCL has additional processing stages: consolidation at origin CFS (2–5 days), and de-consolidation at destination CFS (2–4 days). These stages add 4–9 days to total transit time compared to FCL. If your delivery deadline is tight, FCL is always faster.
      </p>

      <h2 id="cargo-insurance">17. Cargo Insurance: LCL vs FCL — Key Differences</h2>

      <h3>Insurance for LCL Shipments</h3>
      <CheckList
        items={[
          "Insure on All Risks (ICC A) basis — covers physical loss or damage",
          "Declare the correct CIF (Cost + Insurance + Freight) value — not just product cost",
          "LCL cargo is handled more times than FCL — at origin CFS, during transit, and at destination CFS — higher handling = higher damage risk",
          "If co-loaded cargo causes damage to your goods (fire, spillage) — only good insurance protects you",
          "Some NVOCCs offer basic cargo insurance — check the limit: often only USD 500–2,000 total",
        ]}
      />

      <h3>Insurance for FCL Shipments</h3>
      <CheckList
        items={[
          "All Risks (ICC A) still recommended despite lower handling risk",
          "Carrier liability for FCL under Hague-Visby: only USD 2 per kg or USD 666.67 per package — far below typical cargo value",
          "For a container of garments worth USD 50,000 at 5,000 kg — carrier liable for only USD 10,000 without your own insurance",
          "Reefer containers: buy temperature deviation clause — covers loss if reefer malfunctions",
          "War Risk: for certain routes, add War, Strikes, Riots and Civil Commotion (SRCC) cover",
        ]}
      />

      <h2 id="best-rates">18. How to Get the Best LCL and FCL Rates from Pakistan</h2>
      <p>Freight rates are highly negotiable — especially for regular shippers. Here are proven strategies for Pakistani exporters and importers to reduce their sea freight costs:</p>

      <h3>For LCL — Getting Best Rates</h3>
      <CheckList
        items={[
          "Get minimum 3 quotes from different NVOCCs in Karachi — rates vary up to 40% between operators",
          "Negotiate regular-volume contracts — if you ship monthly, ask for a monthly rate agreement",
          "Check cut-off dates and avoid last-minute bookings — premium applies for urgent consolidation",
          "Accurate dimensions are critical — pack efficiently to minimise CBM and save money",
          "Ask about 'all-in' vs 'port-to-port' rates and compare on same basis",
          "Ship during off-peak periods — pre-Eid and Q4 are busy and more expensive",
        ]}
      />

      <h3>For FCL — Getting Best Rates</h3>
      <CheckList
        items={[
          "Book 14–21 days in advance — last-minute FCL bookings can cost 30–50% more",
          "Get quotes from 3–5 different shipping lines via your freight forwarder",
          "Negotiate service contracts for regular FCL volumes (monthly or quarterly)",
          "Consider vessel schedules carefully — faster services cost more; if transit time allows, choose slower service",
          "Maximise container utilisation — a half-full 20ft costs the same as a full 20ft",
          "Compare 20ft vs 40ft per-CBM cost — for 25+ CBM, 40ft is almost always cheaper per CBM",
        ]}
      />

      <h2 id="special-cargo">19. LCL vs FCL — Special Cargo Types from Pakistan</h2>
      <DataTable
        headers={["Cargo Type", "LCL or FCL?", "Reason", "Special Requirements"]}
        rows={[
          ["Fresh mangoes / fruits", "Air freight (not sea)", "Sea too slow for perishables", "ISPM-15, phytosanitary cert, cool storage"],
          ["Frozen seafood", "FCL Reefer only", "Temperature control needs dedicated unit", "−18°C reefer, health cert, HACCP"],
          ["Textiles/garments (small order)", "LCL", "Volume too small for FCL", "CO, Form E, packing list"],
          ["Textiles/garments (large order)", "FCL 20ft or 40ft", "Volume justifies container cost", "CO, Form E, possible anti-dumping check"],
          ["Dangerous goods (DG)", "FCL preferred", "LCL operators often decline DG cargo", "IMDG code, DG declaration, MSDS"],
          ["Household goods", "LCL or FCL (volume)", "LCL up to 14 CBM; FCL above", "Packing list, B4 form, attestation"],
          ["Vehicles / cars", "FCL 20ft or RoRo", "Vehicles cannot go in LCL", "Export cert, deregistration, empty fuel"],
          ["Marble / stone (heavy)", "FCL 20ft (weight)", "Weight fills 20ft before volume does", "Wooden cradle, lashing"],
          ["Pharmaceuticals", "FCL preferred", "Contamination risk in LCL unacceptable", "DRAP cert, GDP handling, cold chain"],
          ["Machinery / equipment", "FCL (size)", "OOG items need flat rack or open top", "Lashing, survey, crane at origin"],
        ]}
      />

      <InfoBox variant="orange">
        <strong>🔗 Service: Best Freight Forwarders in Pakistan — LCL & FCL Experts</strong>
        <p className="mt-2">Looking for a reliable freight forwarder in Pakistan who can advise on LCL vs FCL, negotiate the best container rates, and handle full customs?</p>
        <p>bestintlmovers.com is Pakistan's trusted sea freight partner:</p>
        <CheckList
          items={[
            "IATA and Pakistan Customs licensed freight forwarder",
            "Direct contracts with Maersk, MSC, CMA CGM, Hapag-Lloyd, Evergreen",
            "LCL consolidation from Karachi to all global ports",
            "FCL 20ft and 40ft booking — competitive negotiated rates",
            "Complete customs clearance (WeBOC, GD, Form E, CoO)",
            "Destination partner network: UAE, UK, USA, Canada, Australia",
          ]}
        />
      </InfoBox>

      <h2>Conclusion: LCL vs FCL — Making the Right Choice for Your Pakistan Shipment</h2>
      <p>
        The LCL vs FCL decision comes down to four factors: your cargo volume, your budget, your timeline, and your cargo sensitivity. Use LCL when you have under 14 CBM, when flexibility is more important than speed, when you need weekly departures without waiting to fill a container, and when budget is tight. Use FCL when you have 14+ CBM, when speed matters, when your cargo is sensitive or high-value, when you need a reefer, or when you are moving a full household.
      </p>
      <p>
        The most important thing is to get both LCL and FCL quotes for any shipment above 8 CBM — do not assume one is always cheaper. Market rates fluctuate, route dynamics change seasonally, and a good freight forwarder will run both calculations and show you transparently which option serves you better.
      </p>
      <p>
        bestintlmovers.com is your trusted sea freight partner from Pakistan — with direct carrier relationships, competitive LCL consolidation rates, and transparent FCL pricing on all major trade lanes. Contact us today for a free, all-in sea freight quote.
      </p>

      <InfoBox variant="orange">
        <strong>🔗 Get Your Free LCL & FCL Quote — bestintlmovers.com</strong>
        <p className="mt-2">bestintlmovers.com handles all your sea freight needs from Pakistan:</p>
        <CheckList
          items={[
            "SEA FREIGHT SERVICES: bestintlmovers.com/cargo-charges-pakistan-to-uae — LCL + FCL | Karachi to UAE, UK, USA, Canada, Australia & all global ports — Competitive rates | Export customs | Real-time tracking",
            "INTERNATIONAL MOVING: bestintlmovers.com/international-moving — LCL and FCL for household goods | Door-to-door | Professional packing",
            "FREIGHT FORWARDING: bestintlmovers.com/best-freight-forwarders-pakistan — IATA | Pakistan Customs licensed | FIATA standard | All trade lanes",
          ]}
        />
        <p className="mt-2">📞 FREE quote + LCL vs FCL recommendation — WhatsApp our team now</p>
        <p>🌐 bestintlmovers.com — Pakistan's Sea Freight Specialists</p>
      </InfoBox>
    </>
  );
}
