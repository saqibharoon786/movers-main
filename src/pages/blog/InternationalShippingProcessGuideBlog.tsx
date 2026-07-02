import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  INTERNATIONAL_SHIPPING_PROCESS_GUIDE_CANONICAL,
  INTERNATIONAL_SHIPPING_PROCESS_GUIDE_IMAGE,
  INTERNATIONAL_SHIPPING_PROCESS_GUIDE_IMAGE_CLASS_CARD,
  INTERNATIONAL_SHIPPING_PROCESS_GUIDE_OG_IMAGE,
  INTERNATIONAL_SHIPPING_PROCESS_GUIDE_PATH,
  internationalShippingProcessGuideFaqs,
} from "@/data/internationalShippingProcessGuideBlog";

const TITLE =
  "International Shipping Process: Complete Step-by-Step Guide 2025–2026 | Best Int'l Movers";
const DESCRIPTION =
  "Complete international shipping process guide from Pakistan — air freight, sea freight, customs clearance, documentation, Incoterms, tracking & costs. Step-by-step for UAE, UK, USA, Canada & beyond.";
const KEYWORDS =
  "international shipping process, how does international shipping work, international shipping steps, international freight process, how to ship internationally, shipping goods internationally, international shipping guide, cargo shipping process, freight forwarding process, sea freight process explained, air freight process pakistan, customs clearance process pakistan, export documentation pakistan, import customs clearance process, door to door cargo pakistan, best freight forwarder pakistan";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "International Shipping Process: Complete Step-by-Step Guide 2025–2026",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  image: INTERNATIONAL_SHIPPING_PROCESS_GUIDE_OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": INTERNATIONAL_SHIPPING_PROCESS_GUIDE_CANONICAL,
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: internationalShippingProcessGuideFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function InfoBox({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "warn" | "save" }) {
  const cls =
    variant === "warn"
      ? "border-amber-500/40 bg-amber-500/5"
      : variant === "save"
        ? "border-emerald-500/40 bg-emerald-500/5"
        : "border-gold/30 bg-gold/5";
  return (
    <div className={`not-prose rounded-xl border ${cls} p-5 my-6 text-sm text-muted-foreground leading-relaxed`}>
      {children}
    </div>
  );
}

function CtaBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border border-gold/40 bg-navy-light/20 p-6 my-8 text-sm text-muted-foreground leading-relaxed">
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

const TOC = [
  "International Shipping Process — Big Picture Overview",
  "Step 1: Choosing Your Shipping Method (Air vs Sea vs Courier)",
  "Step 2: Getting Freight Quotes — What to Compare",
  "Step 3: Booking Your Shipment with a Freight Forwarder",
  "Step 4: Packing & Preparing Your Cargo",
  "Step 5: Export Documentation — Every Document Explained",
  "Step 6: Export Customs Clearance Process (Pakistan)",
  "Step 7: Cargo Pickup & Loading — Port or Airport",
  "Step 8: International Transit — What Happens on the Way",
  "Step 9: Import Customs Clearance at Destination",
  "Step 10: Duty & Tax Payment at Destination",
  "Step 11: Last-Mile Delivery to Final Address",
  "Incoterms 2020 — Complete Guide for Shippers",
  "Cargo Insurance — Why It Is Not Optional",
  "International Shipping from Pakistan — Route-Specific Guide",
  "International Shipping Costs — Complete Rate Breakdown 2025",
  "Common International Shipping Mistakes & How to Avoid Them",
  "Prohibited & Restricted Items in International Shipping",
  "How to Track Your International Shipment",
  "Frequently Asked Questions",
];

export default function InternationalShippingProcessGuideBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={INTERNATIONAL_SHIPPING_PROCESS_GUIDE_PATH}
      canonicalUrl={INTERNATIONAL_SHIPPING_PROCESS_GUIDE_CANONICAL}
      h1="International Shipping Process: Complete Step-by-Step Guide 2025–2026"
      dateLabel="June 2026 · 22 min read"
      breadcrumbCurrent="International Shipping Process Guide"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={INTERNATIONAL_SHIPPING_PROCESS_GUIDE_OG_IMAGE}
      ogImageAlt="International shipping process step-by-step guide from Pakistan"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={INTERNATIONAL_SHIPPING_PROCESS_GUIDE_IMAGE}
          alt="International shipping process — air freight, sea freight and customs clearance from Pakistan"
          className={`w-full rounded-xl border border-border max-h-80 ${INTERNATIONAL_SHIPPING_PROCESS_GUIDE_IMAGE_CLASS_CARD}`}
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-2">
        Updated June 2026 · bestintlmovers.com · Trusted by 10,000+ Shippers from Pakistan
      </p>
      <p className="text-sm text-muted-foreground not-prose mb-6 italic">
        Air Freight · Sea Freight · Customs Clearance · Documentation · Incoterms · Tracking — Pakistan to UAE,
        UK, USA &amp; Beyond
      </p>

      <p>
        Whether you are a first-time exporter sending textiles from Karachi to Dubai, a family relocating from
        Lahore to London, a business importing machinery from China to Islamabad, or an individual sending
        personal effects from Pakistan to Canada — understanding the <strong>international shipping process</strong>{" "}
        end-to-end is the single most important thing you can do to protect your cargo, your timeline, and your
        money.
      </p>
      <p>
        International shipping is not just about putting goods on a plane or ship. It is a complex, multi-stage
        process involving freight booking, export customs clearance, cargo documentation, transit, import customs
        clearance, duty payment, and last-mile delivery — each stage with its own rules, timelines, costs, and
        potential pitfalls.
      </p>
      <p>
        This comprehensive guide walks you through every single step — from the moment you decide to ship, to
        the moment your cargo is safely delivered at its destination.
      </p>

      <InfoBox>
        <strong className="text-foreground">Quick Overview — How Long Does International Shipping Take?</strong>
        <br />
        Air Freight: 2–7 days door-to-door · Sea LCL: 10–35 days · Sea FCL: 8–30 days · Courier (DHL/FedEx/UPS):
        2–5 days · Road freight (Afghanistan/Iran): 5–15 days. Transit time depends on origin city, destination
        port, customs efficiency, and whether documentation is complete.
      </InfoBox>

      <nav className="not-prose rounded-xl border border-border bg-navy-light/10 p-6 mb-10" aria-label="Table of contents">
        <p className="font-display font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm columns-1 md:columns-2 text-muted-foreground">
          {TOC.map((item, i) => (
            <li key={item}>
              <span className="text-gold mr-1">{i + 1}.</span> {item}
            </li>
          ))}
        </ol>
      </nav>

      <h2>1. International Shipping Process — Big Picture Overview</h2>
      <p>
        Every international shipment — whether a 1 kg parcel or a 40-foot container — goes through these same
        fundamental stages:
      </p>
      <DataTable
        headers={["Phase", "Stage", "Who Is Responsible", "Typical Time"]}
        rows={[
          ["Pre-Shipment", "Choose shipping method + get quotes", "Shipper + Freight Forwarder", "1–3 days"],
          ["Pre-Shipment", "Book shipment with forwarder or carrier", "Shipper confirms booking", "1–2 days"],
          ["Pre-Shipment", "Pack, label, and prepare cargo", "Shipper (or mover)", "1–5 days"],
          ["Pre-Shipment", "Prepare all export documents", "Shipper + Clearing Agent", "1–3 days"],
          ["Origin", "Export customs clearance", "Clearing Agent + Customs", "1–7 days"],
          ["Origin", "Cargo pickup / delivery to port or airport", "Freight Forwarder / Trucker", "1 day"],
          ["Origin", "Loading onto vessel or aircraft", "Terminal Operator / Airline", "Per schedule"],
          ["Transit", "International transit / voyage", "Carrier", "2–35 days"],
          ["Destination", "Import customs clearance", "Destination Agent + Customs", "1–10 days"],
          ["Destination", "Duty & tax payment", "Consignee / Agent", "1–3 days"],
          ["Destination", "Last-mile delivery", "Delivery Agent / Trucker", "1–5 days"],
        ]}
      />

      <h2>2. Step 1: Choosing Your Shipping Method — Air vs Sea vs Courier</h2>
      <p>
        The first and most consequential decision is choosing your shipping method. This determines cost, transit
        time, cargo safety, documentation requirements, and the type of freight forwarder you need.
      </p>
      <DataTable
        headers={["Method", "Best For", "Cost Level", "Speed", "Max Size/Weight"]}
        rows={[
          ["Air Freight", "Urgent, high-value, perishable cargo", "Highest", "2–7 days", "No limit (cost rises fast)"],
          ["Sea FCL", "Large volumes, full household moves", "Lowest/kg", "8–35 days", "20ft: ~25 CBM / 40ft: ~55 CBM"],
          ["Sea LCL", "Small-medium volumes, non-urgent", "Low", "10–35 days", "1 CBM minimum"],
          ["Express Courier", "Documents, parcels up to 30 kg", "High", "2–5 days", "Typically 30–70 kg max"],
          ["Road Freight", "Afghanistan, Iran, Central Asia", "Medium", "5–15 days", "Full truck loads"],
          ["Air + Sea Combo", "Balance speed and cost for large moves", "Medium", "7–21 days", "Split shipment"],
        ]}
      />

      <h3>When to Choose Air Freight</h3>
      <CheckList
        items={[
          "Cargo value is high — cost of delay exceeds cost of premium freight",
          "Time-sensitive: fashion orders, perishables, medical supplies",
          "Shipment is small — under 200 kg, where sea LCL loses its cost advantage",
          "Destination has poor sea connectivity (landlocked countries, remote locations)",
          "Customer contract specifies air delivery",
        ]}
      />

      <h3>When to Choose Sea Freight</h3>
      <CheckList
        items={[
          "Cargo volume exceeds 3 CBM — sea LCL becomes cheaper than air",
          "Goods are not time-sensitive — standard commercial orders with lead time",
          "Shipping heavy/bulky items: furniture, machinery, vehicles, construction materials",
          "Household goods move — a family's belongings almost always go by sea",
          "Budget is priority — sea freight is 60–80% cheaper than air for same volume",
        ]}
      />

      <InfoBox>
        <strong className="text-foreground">Decision Rule: Air vs Sea from Pakistan</strong>
        <br />
        Under 100 kg AND urgent → Air freight always · 100–500 kg AND 7+ days available → Compare air vs sea
        LCL · Over 3 CBM AND 14+ days available → Sea LCL or FCL · Full household move → Sea freight · Car
        shipping → Sea freight only (RoRo or container) · Documents / samples → Courier
      </InfoBox>

      <CtaBox>
        <strong className="text-foreground block mb-2">Cargo Charges Pakistan to UAE — Air &amp; Sea Rates</strong>
        Deciding between air freight and sea freight for your Pakistan to UAE shipment? Our complete rate guide
        covers air cargo rates per kg, sea freight FCL + LCL per CBM, car shipping costs, and door-to-door
        all-inclusive pricing.{" "}
        <Link to="/karachi-to-dubai-cargo/" className="text-gold hover:underline font-medium">
          Cargo charges Pakistan to UAE
        </Link>{" "}
        —{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Get a free instant quote →
        </Link>
      </CtaBox>

      <h2>3. Step 2: Getting Freight Quotes — What to Compare</h2>
      <p>
        This is where many shippers make costly mistakes — comparing quotes that are not truly like-for-like, or
        choosing the cheapest quote that later reveals hidden charges.
      </p>

      <h3>Information You Must Provide to Get an Accurate Quote</h3>
      <DataTable
        headers={["Information Required", "Why It Matters"]}
        rows={[
          ["Origin city and address", "Determines inland haulage cost and port/airport used"],
          ["Destination city and address", "Determines destination port/airport and delivery cost"],
          ["Cargo description / commodity", "Affects duty rates, restrictions, handling requirements"],
          ["HS (Harmonized System) code", "Determines import duty at destination"],
          ["Gross weight (kg)", "Air freight charged on actual or volumetric weight"],
          ["Dimensions of each piece (L×W×H cm)", "Volumetric weight for air; CBM for sea"],
          ["Total CBM (cubic meters)", "Sea freight LCL charged per CBM"],
          ["Cargo value (USD)", "For insurance and customs declaration"],
          ["Incoterm required (EXW, FOB, CIF etc.)", "Determines what the freight quote covers"],
          ["Required delivery date", "Determines mode selection and booking urgency"],
        ]}
      />

      <h3>What to Look for When Comparing Freight Quotes</h3>
      <CheckList
        items={[
          "Is it airport-to-airport / port-to-port OR door-to-door?",
          "Does it include origin customs clearance and documentation?",
          "Does it include destination customs clearance and duty?",
          "Is cargo insurance included or optional?",
          "What is the transit time commitment — is it guaranteed?",
          "What are the payment terms — full upfront or split?",
          "What happens if cargo is delayed — who bears the cost?",
        ]}
      />
      <InfoBox variant="warn">
        <strong className="text-foreground">Watch Out:</strong> A quote 30–40% below market rate almost always
        means key charges are excluded, the carrier is inferior, or it is a fraudulent quote. Always ask for an
        itemised, all-in quote in writing. Compare 3 quotes minimum.
      </InfoBox>

      <h2>4. Step 3: Booking Your Shipment with a Freight Forwarder</h2>
      <p>
        A reputable freight forwarder will send you a Booking Confirmation that includes all shipment details.
      </p>
      <CheckList
        items={[
          "Shipper name, address, and contact",
          "Consignee name and address (recipient at destination)",
          "Cargo description and HS code",
          "Number of pieces, weight, and dimensions",
          "Shipping line / airline name and service",
          "Vessel name and voyage number (sea) or flight number (air)",
          "Port of Loading (POL) and Port of Discharge (POD)",
          "ETD and ETA",
          "Freight rate and all surcharges — itemised",
          "Cargo cut-off date and document cut-off date",
        ]}
      />
      <InfoBox variant="warn">
        <strong className="text-foreground">Key Dates — Do Not Miss These:</strong> Cargo Cut-off (last day to
        deliver packed cargo to terminal) · Document Cut-off (last day for GD and B/L instructions) · VGM
        Cut-off (Verified Gross Mass — SOLAS mandatory) · ETD/ETA (track regularly)
      </InfoBox>

      <h2>5. Step 4: Packing &amp; Preparing Your Cargo for International Shipping</h2>
      <p>
        Improper packing is one of the leading causes of cargo damage. International cargo goes through multiple
        handling stages — each creates risk for poorly packed cargo.
      </p>
      <CheckList
        items={[
          "Use double-walled corrugated cardboard boxes for all carton cargo",
          "Wrap individual items in bubble wrap, foam, or packing paper before boxing",
          "Fill all empty space in boxes to prevent movement",
          "Mark all boxes: FRAGILE, THIS SIDE UP, DO NOT STACK (where applicable)",
          "Label each box: Shipper name, consignee name, destination address, box number (1 of 10, etc.)",
          "Wooden packaging must be ISPM-15 compliant (heat-treated)",
          "Palletise heavy cartons and wrap with stretch film for stability",
          "For household goods: professional packing by experienced international movers recommended",
        ]}
      />

      <h3>What Is Volumetric Weight and Why Does It Matter?</h3>
      <p>
        For air freight and courier services, freight is charged on whichever is greater: actual gross weight or
        volumetric weight.
      </p>
      <InfoBox>
        <strong className="text-foreground">Volumetric Weight Formulas</strong>
        <br />
        AIR FREIGHT: L × W × H (cm) ÷ 6,000 · COURIER (DHL/FedEx): L × W × H (cm) ÷ 5,000 · SEA LCL: CBM = L ×
        W × H (m). Example: 60×50×40 cm box = 20 kg volumetric. If actual weight = 8 kg, you pay for 20 kg.
      </InfoBox>

      <h2>6. Step 5: Export Documentation — Every Document Explained</h2>
      <p>
        Missing, incorrect, or late documents are the single most common cause of customs delays, cargo holds,
        and unexpected costs.
      </p>

      <h3>Core Documents — Required for ALL International Shipments</h3>
      <DataTable
        headers={["Document", "Purpose", "Who Prepares It"]}
        rows={[
          ["Commercial Invoice", "Declares value, description, and parties", "Exporter"],
          ["Packing List", "Details each piece: weight, dimensions, contents", "Exporter"],
          ["Bill of Lading (B/L)", "Sea freight contract of carriage — title to goods", "Shipping Line"],
          ["Air Waybill (AWB)", "Air freight contract of carriage — non-negotiable", "Airline / IATA Agent"],
          ["Certificate of Origin (CoO)", "Proves where goods were manufactured", "Chamber / TDAP"],
          ["Goods Declaration (GD)", "Pakistan customs export filing via WeBOC", "Clearing Agent"],
          ["Form E", "State Bank Pakistan — forex repatriation declaration", "Exporter + Authorized Bank"],
          ["Packing Declaration", "Confirms wooden packaging is ISPM-15 treated", "Exporter / Packer"],
        ]}
      />

      <h3>Additional Documents — Specific Cargo or Destinations</h3>
      <DataTable
        headers={["Document", "Required For", "Issuing Authority"]}
        rows={[
          ["Phytosanitary Certificate", "Plants, fruits, vegetables, seeds", "Dept of Plant Protection, Pakistan"],
          ["Export Health Certificate", "Seafood, meat, dairy, food products", "Animal Quarantine Dept"],
          ["Halal Certificate", "Meat and food to Gulf/Muslim countries", "Pakistan Halal Authority"],
          ["Fumigation Certificate", "Wooden packing — most countries", "Licensed fumigation company"],
          ["MSDS", "Chemicals, dangerous goods", "Manufacturer"],
          ["Form 'A' / REX Certificate", "Preferential duty under UK/EU GSP", "TDAP / Exporter"],
          ["Drug Regulatory Certificate", "Pharmaceuticals", "DRAP Pakistan"],
        ]}
      />

      <InfoBox variant="warn">
        <strong className="text-foreground">Invoice Fraud Warning:</strong> Under-valuing cargo on the commercial
        invoice to reduce import duty is customs fraud in every country — cargo seizure, fines, blacklisting, and
        criminal prosecution. Always declare the true transaction value.
      </InfoBox>

      <h2>7. Step 6: Export Customs Clearance Process — Pakistan</h2>
      <p>
        In Pakistan, all export cargo must be cleared through Pakistan Customs using the WeBOC electronic
        system. This process is managed by a licensed customs clearing agent and typically takes 1–3 days for
        Green or Yellow channel cargo.
      </p>
      <NumberedList
        items={[
          "Prepare and Verify All Documents — Commercial Invoice, Packing List, Certificate of Origin, Form E, and commodity-specific certificates",
          "File Goods Declaration (GD) on WeBOC — HS codes, cargo description, declared value, exporter NTN, vessel/flight details",
          "Risk Management System (RMS) Assessment — GREEN (auto-release), YELLOW (document examination), or RED (physical examination)",
          "Green Channel — Auto-Release: LEO issued automatically, same day",
          "Yellow Channel — Document Examination: Appraiser reviews documents, 1–2 business days",
          "Red Channel — Physical Examination: Customs officers examine cargo at terminal, 3–7 business days",
          "Let Export Order (LEO) Issued — authority to load cargo onto vessel or aircraft",
          "Cargo Loaded on Vessel / Aircraft — B/L (sea) or AWB (air) issued",
        ]}
      />

      <h2>8. Step 7: Cargo Pickup &amp; Loading — Port or Airport</h2>
      <h3>Sea Freight — Terminal Operations</h3>
      <CheckList
        items={[
          "FCL: Container stuffed at factory or CFS, sealed, delivered to terminal by truck",
          "LCL: Cargo delivered to NVOCC's CFS for consolidation before terminal delivery",
          "VGM (Verified Gross Mass): mandatory weight verification before terminal acceptance (SOLAS)",
          "Terminal Cut-off: typically 24–48 hours before vessel departure",
          "EDI Submission: all cargo details submitted electronically to shipping line and terminal",
        ]}
      />

      <h3>Air Freight — Airport Operations</h3>
      <CheckList
        items={[
          "Cargo delivered to airline cargo terminal (JIAP cargo complex) before cut-off",
          "Security screening: all air cargo undergoes X-ray or physical screening (ICAO/IATA)",
          "Build-up: cargo built into Unit Load Devices (ULDs) by airline or handler",
          "DG segregation: Dangerous Goods stored and loaded per IATA DGR",
          "Perishable priority: fresh cargo loaded last to minimise temperature exposure",
        ]}
      />

      <h2>9. Step 8: International Transit — What Happens While Your Cargo Is at Sea or in the Air</h2>
      <h3>Sea Freight Transit — Direct vs Transhipment</h3>
      <DataTable
        headers={["Route Type", "Description", "Pros", "Cons"]}
        rows={[
          ["Direct Service", "Vessel sails directly from Karachi to destination port", "Fastest, lowest damage risk", "Not always available"],
          ["Transhipment (1 port)", "Cargo transferred at hub port (Jebel Ali, Colombo, Singapore)", "More route options, competitive rates", "Adds 5–10 days, slight handling risk"],
          ["Multi-transhipment", "Cargo transferred at 2+ ports", "Reaches remote/niche ports", "Slower, higher damage risk"],
        ]}
      />

      <h3>Common Transhipment Hubs for Pakistan Cargo</h3>
      <CheckList
        items={[
          "Jebel Ali (UAE): Main hub for Pakistan–Europe and Pakistan–Africa routes",
          "Colombo (Sri Lanka): Alternative hub for Far East, USA, and some Europe routes",
          "Singapore: Trans-Pacific routes to USA, Canada, and Australia",
          "Port Klang (Malaysia): Alternative Asia transhipment point",
          "Istanbul (Turkey): Arkas Line hub for Turkey and Mediterranean destinations",
        ]}
      />

      <h3>What Can Go Wrong During Transit?</h3>
      <DataTable
        headers={["Risk", "Probability", "Prevention", "Insurance Coverage"]}
        rows={[
          ["Physical damage", "Low–Medium", "Quality packing, adequate insurance", "Yes — All Risks policy"],
          ["Delay (weather, congestion)", "Medium", "Build buffer into schedules", "Yes — if delay clause"],
          ["Container rolled", "Low", "File documents on time, track booking", "No — not typically"],
          ["Cargo theft", "Very Low", "Security seals, GPS trackers", "Yes — All Risks policy"],
          ["Water damage", "Low", "Desiccant bags, container check", "Yes — All Risks policy"],
        ]}
      />

      <h2>10. Step 9: Import Customs Clearance at Destination</h2>
      <NumberedList
        items={[
          "Pre-Arrival Filing — import documentation filed BEFORE vessel or aircraft arrives (USA, Canada, UK, UAE)",
          "Submit Import Declaration — destination customs broker files Entry with CBSA, CBP, HMRC, Dubai Customs, etc.",
          "Customs Assessment — officer reviews declaration, HS code, declared value, licensing requirements",
          "Duty Calculation — Import duty = (CIF Value × Duty Rate%). VAT/GST on (CIF + Duty)",
          "Payment of Duties — consignee or broker pays import duties and taxes",
          "Customs Examination (if selected) — physical check of declared description, quantity, and value",
          "Release for Delivery — Customs issues Release Order; delivery agent collects cargo from terminal",
        ]}
      />

      <h2>11. Step 10: Duty &amp; Tax Payment at Destination</h2>
      <DataTable
        headers={["Destination", "Duty Rate", "VAT/GST", "Notes for Pakistan Exports"]}
        rows={[
          ["UAE (Dubai/AD/SHJ)", "5% standard", "5% VAT", "Used personal effects: duty-free with residency"],
          ["UK", "0–12% (varies)", "20% VAT", "Pakistan GSP reduces many textile rates to 0–4%"],
          ["Germany / EU", "0–12% (varies)", "19–21% VAT", "EU GSP applies — reduced rates for Pakistan"],
          ["USA", "0–37.5% (varies)", "No federal VAT", "Section 301 tariffs on some goods; check HS code"],
          ["Canada", "0–20% (varies)", "5% GST + PST", "CPTPP may reduce rates; B4 for household goods"],
          ["Australia", "0–5% (mostly)", "10% GST", "Pakistan goods: general duty rates"],
          ["Saudi Arabia", "5% standard", "15% VAT", "GCC common external tariff"],
          ["Singapore", "0% most goods", "9% GST", "Free trade hub — very low import duties"],
        ]}
      />
      <InfoBox variant="save">
        <strong className="text-foreground">How to Legally Reduce Import Duty:</strong> Use correct HS code ·
        Apply for GSP/FTA rates · Transfer of Residence (UK) / Personal Effects (UAE) for household goods ·
        Free Trade Zones (JAFZA, ADPC) · Accurate valuation · Section 321 de minimis (USA) — shipments under USD
        800 enter USA duty-free
      </InfoBox>

      <h2>12. Step 11: Last-Mile Delivery to Final Address</h2>
      <DataTable
        headers={["Option", "Best For", "Cost Level", "Typical Time"]}
        rows={[
          ["Standard Trucking", "All cargo types", "Low–Medium", "1–3 days from port"],
          ["Express Delivery", "Urgent cargo post-customs", "High", "Same day or next day"],
          ["Self-Collection", "Consignee near port", "Lowest", "Self-arranged"],
          ["White Glove Delivery", "Household goods, furniture", "Highest", "Scheduled appointment"],
          ["Courier Final Mile", "Small parcels (air freight)", "Medium", "1–2 days"],
        ]}
      />

      <CtaBox>
        <strong className="text-foreground block mb-2">International Moving — Door-to-Door from Pakistan</strong>
        Need complete door-to-door international shipping? We handle the ENTIRE process — professional packing,
        export customs clearance (WeBOC), sea or air freight, import customs clearance, and door-to-door
        delivery.{" "}
        <Link to="/services/international-moving-services/" className="text-gold hover:underline font-medium">
          International moving services
        </Link>{" "}
        —{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Free quote — response within 2 hours →
        </Link>
      </CtaBox>

      <h2>13. Incoterms 2020 — Complete Guide for International Shippers</h2>
      <p>
        Incoterms define exactly where the seller&apos;s responsibility ends and the buyer&apos;s begins. Choosing
        the wrong Incoterm is one of the most expensive mistakes in international shipping.
      </p>
      <DataTable
        headers={["Incoterm", "Full Name", "Seller Responsible For", "Buyer Responsible For", "Best Used"]}
        rows={[
          ["EXW", "Ex Works", "Nothing — goods at seller's premises", "Everything from factory to destination", "Experienced buyers only"],
          ["FCA", "Free Carrier", "Delivery to named carrier at origin", "Main freight + destination costs", "Most flexible — recommended"],
          ["FOB", "Free on Board", "Delivery onto vessel at origin port", "Ocean freight + destination costs", "Sea freight standard"],
          ["CFR", "Cost and Freight", "Origin + ocean freight to destination port", "Insurance + destination costs", "Sea — buyer arranges insurance"],
          ["CIF", "Cost Insurance Freight", "Origin + ocean freight + insurance", "Destination customs + delivery", "Sea — seller arranges insurance"],
          ["CPT", "Carriage Paid To", "All freight to named destination point", "Insurance + destination customs", "Air freight / multimodal"],
          ["DAP", "Delivered at Place", "Everything except destination customs + duty", "Import customs + duty only", "E-commerce, small parcels"],
          ["DDP", "Delivered Duty Paid", "EVERYTHING — including import duty", "Nothing", "Full-service seller"],
        ]}
      />
      <InfoBox>
        <strong className="text-foreground">Which Incoterm Should Pakistani Exporters Use?</strong>
        <br />
        FOB Karachi: Most common for textile exporters · CIF [Destination Port]: Seller arranges freight and
        insurance · EXW: Avoid unless buyer is very experienced · DDP: Only if you have a customs broker at
        destination · FCA: Recommended for air freight. Always state Incoterm AND named place: e.g. &apos;FOB
        Karachi Port&apos; not just &apos;FOB&apos;
      </InfoBox>

      <h2>14. Cargo Insurance — Why It Is Not Optional</h2>
      <p>
        Carrier liability is severely limited by international conventions — far below the actual value of most
        cargo.
      </p>
      <DataTable
        headers={["Mode", "Convention", "Carrier Liability Limit", "Reality Check"]}
        rows={[
          ["Sea Freight", "Hague-Visby Rules", "USD 2.00/kg OR USD 666.67/package", "USD 50,000 textiles at 2,000 kg = only USD 4,000 liability"],
          ["Air Freight", "Montreal Convention", "~USD 26 per kg", "USD 30,000 electronics at 50 kg = only USD 1,300 liability"],
          ["Road Freight", "CMR Convention", "~USD 12 per kg", "Very limited coverage"],
          ["Courier", "Carrier T&Cs", "USD 100–500 flat rate", "Declared value cover must be paid upfront"],
        ]}
      />
      <CheckList
        items={[
          "All Risks (ICC A): Broadest cover — recommended for all valuable cargo (0.3–0.7% of CIF value)",
          "With Average (ICC B): Major perils only — no theft or rain water damage",
          "Free of Particular Average (ICC C): Narrowest — only total loss. Not recommended",
          "Example: USD 20,000 cargo → insurance cost USD 60–140. Compare to potential loss of USD 20,000",
        ]}
      />

      <h2>15. International Shipping from Pakistan — Route-Specific Process Guide</h2>

      <h3>Pakistan to UAE</h3>
      <CheckList
        items={[
          "Export: WeBOC GD filing + Form E (SBP) + Certificate of Origin mandatory",
          "Sea freight: Karachi to Jebel Ali — 3–6 days direct sailing, daily vessels",
          "Air freight: Karachi/Lahore/ISB to DXB/AUH/SHJ — daily flights, 24–48 hrs airport-to-airport",
          "UAE import: 5% customs duty, 5% VAT via Dubai Trade portal",
          "Personal effects: Duty-free for UAE residents with valid Emirates ID",
        ]}
      />

      <h3>Pakistan to UK</h3>
      <CheckList
        items={[
          "Certificate of Origin (Form A or REX) critical for UK GSP reduced duty",
          "Sea freight: 22–30 days via Jebel Ali or Colombo to Felixstowe/Southampton",
          "Air freight: 2–4 days via Dubai or Istanbul to London Heathrow",
          "UK import: HMRC CDS — UK-licensed customs broker required",
          "Transfer of Residence (ToR) relief: used household goods duty-free for new UK residents",
        ]}
      />

      <h3>Pakistan to USA</h3>
      <CheckList
        items={[
          "Sea freight: 28–40 days via Jebel Ali or Colombo to New York/Los Angeles",
          "Air freight: 3–5 days via Dubai/Doha to JFK or LAX",
          "ISF (Importer Security Filing): must be filed 24 hours BEFORE loading in Pakistan",
          "CBP ACE system — prior to arrival filing required",
          "Section 321 de minimis: shipments under USD 800 enter USA duty-free",
        ]}
      />

      <h3>Pakistan to Canada</h3>
      <CheckList
        items={[
          "Sea freight: 32–45 days via Singapore or Jebel Ali to Halifax/Vancouver",
          "Air freight: 3–5 days via UAE/Istanbul to Toronto (YYZ) or Vancouver (YVR)",
          "CBSA Pre-arrival review system (PARS)",
          "GST: 5% on most imported goods",
          "Household goods for new immigrants: duty-free under B4 concession",
        ]}
      />

      <h2>16. International Shipping Costs — Complete Rate Breakdown 2025</h2>
      <p>Total cost model: Karachi to Dubai Sea Freight (LCL — 5 CBM)</p>
      <DataTable
        headers={["Cost Component", "Amount", "Who Pays / Notes"]}
        rows={[
          ["Inland trucking (factory to Karachi Port)", "PKR 8,000–15,000", "Shipper — distance dependent"],
          ["Origin CFS / stuffing charge", "USD 40–75 (5 CBM)", "NVOCC rate per CBM"],
          ["LCL ocean freight (Karachi–Jebel Ali)", "USD 200–375", "5 CBM × USD 40–75/CBM"],
          ["Origin THC", "USD 50–100", "Port charge"],
          ["Bill of Lading / HBL issuance", "USD 30–60", "Shipping line / NVOCC"],
          ["Origin customs documentation (GD)", "PKR 2,500–5,000", "Clearing agent"],
          ["Certificate of Origin", "PKR 500–1,500", "Chamber of Commerce"],
          ["Cargo insurance (0.5% of USD 10,000)", "USD 50", "Optional but recommended"],
          ["Destination THC (Jebel Ali)", "USD 40–80", "Destination agent"],
          ["UAE customs clearance", "AED 200–400", "Destination broker"],
          ["Last-mile delivery Dubai", "AED 100–300", "Destination agent"],
          ["TOTAL APPROXIMATE (all-in door to door)", "USD 600–1,100", "Request all-in quote for exact figure"],
        ]}
      />

      <h2>17. Common International Shipping Mistakes &amp; How to Avoid Them</h2>
      <DataTable
        headers={["Mistake", "Impact", "How to Avoid"]}
        rows={[
          ["Wrong HS code declared", "Wrong duty charged, customs examination", "Use official Pakistan Customs HS code finder"],
          ["Under-valuing cargo on invoice", "Customs fraud risk, cargo seizure", "Always declare true transaction value"],
          ["Missing Form E (Pakistan exports)", "Cargo held, penalties", "File Form E with authorized bank BEFORE GD"],
          ["Missing phytosanitary cert (food)", "Cargo refused at destination", "Apply 3–5 days before shipment"],
          ["Wooden packing not ISPM-15", "Cargo quarantined/returned", "Use only heat-treated wood with HT stamp"],
          ["Wrong Incoterm on invoice", "Dispute about who pays freight/duty", "State Incoterm + named place on all docs"],
          ["No cargo insurance", "Total loss with no recovery", "Always take All Risks (ICC A) policy"],
          ["Booking with unlicensed agent", "Cargo collected, company disappears", "Verify IATA licence, C-Licence, WeBOC registration"],
          ["Missing cargo cut-off date", "Cargo rolled — 7–14 day delay", "Book 7–10 days early, track cut-off dates"],
          ["DG cargo not declared", "Cargo removed, legal action", "Always declare dangerous goods per IATA DGR"],
        ]}
      />

      <h2>18. Prohibited &amp; Restricted Items in International Shipping</h2>
      <h3>Items Prohibited on ALL International Flights / Air Cargo</h3>
      <CheckList
        items={[
          "Lithium batteries (loose, unpackaged) — require IATA PI 965–970 compliance",
          "Undeclared Dangerous Goods",
          "Firearms and ammunition without international arms export licence",
          "Counterfeit goods and trademark-infringing products",
          "Narcotics and illegal drugs — absolute prohibition",
        ]}
      />

      <h3>Items Prohibited for Export from Pakistan</h3>
      <CheckList
        items={[
          "Antiques and archaeological artifacts without Ministry of Culture export permit",
          "Protected wildlife and CITES-listed species",
          "Currency above USD 10,000 equivalent without SBP declaration",
          "Classified government documents",
          "Goods subject to UN or government trade sanctions",
        ]}
      />

      <h3>Items Prohibited for Import into UAE</h3>
      <CheckList
        items={[
          "Narcotics, cannabis products, CBD oils — zero tolerance",
          "Pork products and alcohol (except licensed channels)",
          "Gambling equipment and paraphernalia",
          "Publications deemed offensive to Islamic values or UAE law",
          "Certain medications with controlled substances — check UAE MOH positive list",
        ]}
      />

      <h2>19. How to Track Your International Shipment</h2>
      <DataTable
        headers={["Stage", "Tracking Method", "Information Available"]}
        rows={[
          ["Sea freight (vessel)", "Shipping line website — enter B/L number", "Vessel position, ETA, port status"],
          ["Air freight", "Airline cargo portal — enter AWB number", "Flight status, destination ETA"],
          ["Courier", "DHL/FedEx/UPS website — enter tracking number", "Real-time scan history, delivery ETA"],
          ["Port customs (Pakistan)", "WeBOC portal — GD number", "GD status, channel assignment, LEO"],
          ["UAE customs", "Dubai Trade portal or MIRSAL2", "Clearance status, duty amount"],
          ["UK customs", "HMRC CDS portal", "Entry status, examination notice"],
          ["USA customs", "CBP ACE portal", "Entry status, holds, release"],
          ["Last-mile delivery", "Delivery company portal or WhatsApp updates", "Delivery window, driver location"],
        ]}
      />
      <InfoBox variant="save">
        <strong className="text-foreground">Pro Tip:</strong> Register your B/L or AWB on the carrier&apos;s
        portal and enable email/SMS alerts. For sea freight, check vessel position weekly on MarineTraffic.com.
        If cargo stops moving for 5+ days without explanation, contact your forwarder immediately.
      </InfoBox>

      <CtaBox>
        <strong className="text-foreground block mb-2">Best Freight Forwarders in Pakistan — Expert Guide</strong>
        Choosing the right freight forwarder is the single most important decision in the international shipping
        process. Our guide covers IATA/FIATA verification, Karachi/Lahore/Islamabad specialists, and a 15-point
        evaluation checklist.{" "}
        <Link to="/blog/best-freight-forwarders-pakistan/" className="text-gold hover:underline font-medium">
          Best freight forwarders in Pakistan
        </Link>{" "}
        —{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Talk to our licensed specialists →
        </Link>
      </CtaBox>

      <h2>20. Frequently Asked Questions — International Shipping Process</h2>
      {internationalShippingProcessGuideFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <h2>Conclusion: Master the International Shipping Process</h2>
      <p>
        The international shipping process has eleven distinct stages — from choosing your shipping method to
        final delivery at the destination address. Understanding this process end-to-end puts you in control:
        you know what questions to ask your freight forwarder, what documents to prepare, what charges to expect,
        and how to avoid the most common and costly mistakes.
      </p>
      <p>
        Whether you are exporting textiles from Karachi to Rotterdam, shipping household goods from Lahore to
        Dubai, or relocating your family from Islamabad to Toronto — the process is the same. The difference
        between a smooth delivery and a stressful, delayed experience comes down to one thing: the quality of
        your freight forwarding partner.
      </p>

      <CtaBox>
        <strong className="text-foreground block mb-2">Get Started — Complete International Shipping Services</strong>
        <CheckList
          items={[
            "Cargo shipping: air freight + sea freight + door-to-door — all international routes",
            "International moving: household goods, personal effects, professional packing, full customs",
            "Car shipping: vehicle export Pakistan to UAE, UK, and beyond",
          ]}
        />
        <p className="mt-4">
          <Link to="/karachi-to-dubai-cargo/" className="text-gold hover:underline font-medium mr-4">
            Cargo Pakistan to UAE
          </Link>
          <Link to="/services/international-moving-services/" className="text-gold hover:underline font-medium mr-4">
            International Moving
          </Link>
          <Link to="/services/vehicle-shipping-services/" className="text-gold hover:underline font-medium mr-4">
            Car Shipping
          </Link>
          <Link to="/contact" className="text-gold hover:underline font-medium">
            Free consultation →
          </Link>
        </p>
      </CtaBox>
    </BlogArticleShell>
  );
}
