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

function StepBox({ num, title, content, fill }: { num: string; title: string; content: string; fill?: string }) {
  return (
    <div className="not-prose my-4 rounded-xl border border-border overflow-hidden">
      <div className="flex">
        <div className="bg-navy-mid/70 text-foreground flex items-center justify-center min-w-[90px] p-4">
          <span className="text-3xl font-bold">{num}</span>
        </div>
        <div className={`flex-1 p-4 ${fill || "bg-muted/30"}`}>
          <h4 className="font-semibold text-foreground mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">{content}</p>
        </div>
      </div>
    </div>
  );
}

function CtaBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border-2 border-orange-500/50 bg-orange-500/5 p-6 my-8 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

export function ExportShippingPakistanBody() {
  return (
    <>
      <nav className="not-prose mb-8 p-4 bg-muted/50 rounded-xl">
        <h3 className="font-semibold mb-3 text-sm">Table of Contents</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><a href="#overview" className="hover:text-foreground">Overview: Pakistan's Export Shipping Industry</a></li>
          <li><a href="#commodities" className="hover:text-foreground">Pakistan's Top Export Commodities & Destination Markets</a></li>
          <li><a href="#shipping-methods" className="hover:text-foreground">Export Shipping Methods: Air Freight vs Sea Freight vs Courier</a></li>
          <li><a href="#export-process" className="hover:text-foreground">Step-by-Step Export Shipping Process from Pakistan</a></li>
          <li><a href="#documentation" className="hover:text-foreground">Export Documentation — Every Document Explained</a></li>
          <li><a href="#weboc" className="hover:text-foreground">WeBOC & Pakistan Customs Export Procedure</a></li>
          <li><a href="#incoterms" className="hover:text-foreground">Incoterms for Pakistani Exporters — Complete Guide</a></li>
          <li><a href="#rates" className="hover:text-foreground">Export Shipping Rates from Pakistan — 2026</a></li>
          <li><a href="#air-freight" className="hover:text-foreground">Air Freight Export from Pakistan — Complete Guide</a></li>
          <li><a href="#sea-freight" className="hover:text-foreground">Sea Freight Export from Pakistan — Complete Guide</a></li>
          <li><a href="#karachi" className="hover:text-foreground">Export Shipping from Karachi</a></li>
          <li><a href="#lahore" className="hover:text-foreground">Export Shipping from Lahore — Textile & Garment Hub</a></li>
          <li><a href="#islamabad" className="hover:text-foreground">Export Shipping from Islamabad & Rawalpindi</a></li>
          <li><a href="#faisalabad-sialkot" className="hover:text-foreground">Export Shipping from Faisalabad & Sialkot</a></li>
          <li><a href="#compliance" className="hover:text-foreground">Export Compliance: Prohibited Items & Export Controls</a></li>
          <li><a href="#insurance" className="hover:text-foreground">Cargo Insurance for Pakistan Exports</a></li>
          <li><a href="#mistakes" className="hover:text-foreground">Common Export Shipping Mistakes — Pakistani Exporters</a></li>
          <li><a href="#freight-forwarder" className="hover:text-foreground">How to Choose the Best Export Freight Forwarder</a></li>
          <li><a href="#cost-calculator" className="hover:text-foreground">Export Shipping Cost Calculator — Pakistan</a></li>
          <li><a href="#faqs" className="hover:text-foreground">10 FAQs — Export Shipping from Pakistan</a></li>
        </ul>
      </nav>

      <p>
        Pakistan is one of South Asia's most dynamic export economies — sending textiles, garments, surgical instruments, rice, mangoes, leather goods, sports equipment, and carpets to markets across the UAE, UK, USA, Europe, China, and beyond. But for many Pakistani exporters — especially SMEs and first-time exporters — the export shipping process is confusing, expensive, and full of hidden pitfalls.
      </p>
      <p>
        From understanding WeBOC and Form E to choosing between air freight and sea freight, from calculating the right Incoterm to avoiding customs penalties — export shipping from Pakistan requires expert knowledge at every step. Get it right and you unlock global markets, build long-term buyer relationships, and grow your business internationally. Get it wrong and you face cargo delays, customs fines, failed payments, and unhappy buyers.
      </p>
      <p>
        This definitive export shipping guide covers everything Pakistani exporters need to know in 2026: the full export process step by step, all required documents, air and sea freight rates for every major route, Incoterms explained, customs procedures, commodity-specific guidance, and the 10 most important FAQs answered in detail.
      </p>

      <InfoBox variant="blue">
        <strong>📌 Pakistan Export Overview — Key Facts 2026</strong>
        <ul className="mt-2 space-y-1">
          <li>Pakistan's total exports: approximately USD 30+ billion annually</li>
          <li>Top export commodities: Textiles & garments (60%), rice, surgical instruments, leather, sports goods, carpets, chemicals</li>
          <li>Top export destinations: UAE, USA, UK, China, Germany, Netherlands, Afghanistan, Saudi Arabia</li>
          <li>Main export ports: Karachi Port (KPT), Port Muhammad Bin Qasim, Gwadar</li>
          <li>Main export airports: JIAP Karachi, Allama Iqbal International Lahore, New Islamabad International Airport</li>
          <li>Key regulatory bodies: Pakistan Customs (FBR), State Bank of Pakistan (SBP), TDAP, NTC, ECC</li>
        </ul>
      </InfoBox>

      <h2 id="overview">1. Overview: Pakistan's Export Shipping Industry</h2>
      <p>
        Pakistan's export shipping industry is centred on Karachi — home to the country's largest seaport and busiest air cargo terminal. The country exports across three primary modes: sea freight (dominant for large volumes and most commercial exports), air freight (for perishables, high-value goods, and time-sensitive orders), and courier services (for samples, documents, and small parcels).
      </p>

      <DataTable
        headers={["Export Mode", "Share of Volume", "Key Commodities", "Primary Destinations"]}
        rows={[
          ["Sea Freight (FCL)", "55%", "Textiles, rice, garments, chemicals, marble", "UAE, UK, USA, Germany, China"],
          ["Sea Freight (LCL)", "20%", "Mixed cargo, SME exports, household goods", "UAE, UK, USA, Gulf countries"],
          ["Air Freight", "15%", "Surgical instruments, perishables, high-value", "UAE, UK, USA, Europe, Asia"],
          ["Courier (DHL/FedEx)", "8%", "Samples, documents, pharmaceuticals", "Global"],
          ["Road/Truck", "2%", "Afghanistan, Iran, Central Asian countries", "Afghanistan, Central Asia"],
        ]}
      />

      <p>
        Pakistan's export sector faces both opportunities and challenges. The country benefits from preferential trade access to the EU and UK under GSP/GSP+ schemes (significantly reducing duty on Pakistani textiles), a large and skilled manufacturing workforce, competitive production costs, and growing CPEC-enabled connectivity. However, exporters must navigate complex customs procedures, foreign exchange regulations, and documentation requirements to access these markets.
      </p>

      <h2 id="commodities">2. Pakistan's Top Export Commodities & Destination Markets</h2>

      <DataTable
        headers={["Commodity", "Major Exporting Cities", "Top Destinations", "Preferred Mode"]}
        rows={[
          ["Textiles & Knitwear", "Karachi, Faisalabad, Lahore", "USA, UK, Germany, Spain, Netherlands", "Sea FCL/LCL"],
          ["Ready-Made Garments", "Karachi, Lahore, Faisalabad", "USA, UK, UAE, Germany, France", "Sea FCL/LCL"],
          ["Basmati & Non-Basmati Rice", "Karachi (port), Punjab origin", "UAE, Saudi Arabia, UK, Kenya, USA", "Sea FCL bulk/bags"],
          ["Surgical Instruments", "Sialkot", "USA, UK, Germany, UAE", "Air freight primary"],
          ["Sports Goods (Footballs)", "Sialkot", "UK, Germany, USA, Brazil, UAE", "Sea LCL/FCL + Air"],
          ["Leather & Leather Products", "Karachi, Lahore, Kasur", "Germany, Italy, UK, UAE, USA", "Sea FCL/LCL"],
          ["Carpets & Rugs", "Karachi, Lahore, Peshawar", "USA, UK, Germany, UAE", "Sea FCL/LCL"],
          ["Fresh Mangoes", "Sindh, Punjab (May–September)", "UAE, UK, Saudi Arabia, EU", "Air freight only"],
          ["Seafood (Shrimp, Fish)", "Karachi (Fish Harbour)", "China, EU, UAE, Japan, USA", "Air + Sea Reefer"],
          ["Pharmaceuticals", "Karachi, Lahore", "Afghanistan, UAE, UK, Africa", "Air freight primary"],
          ["Marble & Granite", "Karachi, Khyber Pakhtunkhwa", "UAE, China, Italy, Turkey", "Sea FCL (flat rack)"],
          ["Chemicals & Dyes", "Karachi", "China, India (via UAE), SE Asia", "Sea FCL (DG)"],
        ]}
      />

      <InfoBox variant="green">
        <strong>✅ Pakistan's Biggest Export Opportunity — GSP+ with EU & UK</strong>
        <ul className="mt-2 space-y-1">
          <li>Pakistan benefits from EU GSP+ scheme — zero or reduced duty on 66% of EU tariff lines</li>
          <li>Textiles: 0% duty into EU under GSP+ (vs 12% standard) — massive competitive advantage</li>
          <li>UK also offers preferential rates for Pakistan under UK GSP (Enhanced Framework)</li>
          <li>Condition: Must provide Certificate of Origin (Form A / REX) to claim reduced duty</li>
          <li>Value of preference: Pakistani textile exporters save USD 300–800 per FCL container vs non-GSP countries</li>
          <li>Action: Ensure your forwarder includes CoO in every EU/UK shipment — never export without it</li>
        </ul>
      </InfoBox>

      <h2 id="shipping-methods">3. Export Shipping Methods: Air Freight vs Sea Freight vs Courier</h2>
      <p>Choosing the right export shipping method is the first and most important decision for any Pakistani exporter. Each mode has specific advantages, costs, and ideal use cases:</p>

      <DataTable
        headers={["Method", "Cost", "Speed", "Best Cargo Type", "Min Volume", "Max Volume"]}
        rows={[
          ["Air Freight", "Highest", "2–7 days", "Perishable, high-value, urgent", "No min (cost rises)", "No limit"],
          ["Sea FCL (20ft)", "Lowest/CBM", "8–35 days", "Large volume, heavy, bulk", "~15 CBM to justify", "28 CBM / 28 tons"],
          ["Sea FCL (40ft)", "Lowest/CBM", "8–35 days", "Very large volume, household", "~28 CBM to justify", "58 CBM / 26 tons"],
          ["Sea LCL", "Low", "10–40 days", "Small-medium commercial cargo", "1 CBM minimum", "~14 CBM (then FCL better)"],
          ["Express Courier", "Very High", "2–5 days", "Documents, samples, less than 30 kg", "No minimum", "30–70 kg typically"],
          ["Road Freight", "Medium", "5–15 days", "Afghanistan, Central Asia exports", "Full truck loads", "Multiple trucks"],
        ]}
      />

      <InfoBox variant="gold">
        <strong>💡 Which Export Mode Is Right for Your Pakistan Shipment?</strong>
        <ul className="mt-2 space-y-1">
          <li>Textiles / garments (large order, more than 15 CBM) → Sea FCL 20ft or 40ft</li>
          <li>Textiles / garments (small order, less than 15 CBM) → Sea LCL consolidation</li>
          <li>Fresh mangoes / seafood → Air freight ONLY (sea is too slow for perishables)</li>
          <li>Surgical instruments (Sialkot) → Air freight for most orders (high value, relatively light)</li>
          <li>Rice (bulk) → Sea FCL 20ft (heavy cargo, dense — weight fills container before volume)</li>
          <li>Pharmaceutical samples or urgent B2B orders → Express courier (DHL/FedEx)</li>
          <li>Machinery / marble / heavy equipment → Sea FCL (flat rack or standard container)</li>
          <li>Household goods export (personal effects) → Sea LCL (small) or FCL (large)</li>
        </ul>
      </InfoBox>

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Service: Export Cargo Charges from Pakistan — Air & Sea Rates
        </strong>
        Need exact export shipping rates from Pakistan? bestintlmovers.com provides transparent, all-inclusive export freight quotes for every major Pakistan trade route:
        <CheckList
          items={[
            "Air freight export rates Pakistan to UAE, UK, USA, Canada per kg",
            "Sea freight LCL rates per CBM — Karachi to all global ports",
            "FCL 20ft and 40ft container rates — all shipping lines",
            "Door-to-door export shipping — customs clearance included",
            "Free export consultation — we advise on best mode for your cargo",
          ]}
        />
        <p className="mt-2">📦 Visit: bestintlmovers.com/cargo-charges-pakistan-to-uae</p>
        <p>📞 FREE export quote — WhatsApp our export team today</p>
      </CtaBox>

      <h2 id="export-process">4. Step-by-Step Export Shipping Process from Pakistan</h2>
      <p>Every export shipment from Pakistan — whether a container of garments to London or a consignment of surgical instruments to Dubai — goes through the same fundamental process. Understanding each step helps exporters plan timelines, prepare documents, and avoid costly delays.</p>

      <StepBox num="1" title="Receive Purchase Order & Confirm Export Terms" content="Buyer sends Purchase Order (PO) specifying: product, quantity, price, delivery date, and Incoterm (FOB, CIF, etc.). Confirm you can meet specifications, quantity, price, and delivery date. Clarify packaging requirements, labelling standards, and any product certifications required in the destination country." fill="#EBF5FB" />
      <StepBox num="2" title="Production / Procurement" content="Manufacture or source the goods as per buyer's specifications. Ensure quality control inspections are completed — many buyers require pre-shipment inspection (PSI) by SGS, Bureau Veritas, or Intertek before shipping. Allow buffer time between production completion and cargo cut-off." fill="#EAFAF1" />
      <StepBox num="3" title="Get Freight Quote & Book Shipment" content="Contact your freight forwarder for export shipping quotes. Provide: commodity, weight, dimensions (for air) or CBM (for sea), origin city, destination port/address, Incoterm, and required delivery date. Compare at least 3 quotes. Book shipment at least 7–14 days before required sailing/flight date." fill="#FEF9E7" />
      <StepBox num="4" title="Prepare Export Documents" content="Prepare all required documents: Commercial Invoice, Packing List, Certificate of Origin (from TDAP or Chamber of Commerce), and any commodity-specific certificates (phytosanitary, health, fumigation). Submit Form E to your authorised bank (mandatory for all Pakistan exports under SBP rules)." fill="#EBF5FB" />
      <StepBox num="5" title="File Goods Declaration (GD) on WeBOC" content="Your licensed customs clearing agent files the Goods Declaration (GD) on Pakistan Customs' WeBOC system. GD includes: exporter NTN, HS code, product description, declared value, destination, and vessel/flight details. File at least 24–48 hours before cargo cut-off." fill="#EAFAF1" />
      <StepBox num="6" title="Pakistan Customs Clearance" content="WeBOC Risk Management System assigns your cargo to: Green Channel (auto-release — same day), Yellow Channel (document examination — 1–2 days), or Red Channel (physical examination — 3–7 days). Your clearing agent manages this process and obtains the Let Export Order (LEO)." fill="#FEF9E7" />
      <StepBox num="7" title="Cargo Pickup & Delivery to Terminal" content="Once LEO is issued, your cargo is delivered to Karachi Port terminal (KICT/QICT) for sea freight or JIAP cargo terminal for air freight. For FCL, your container must arrive before cargo cut-off (typically 24–48 hrs before vessel departure). For LCL, cargo goes to NVOCC's CFS." fill="#EBF5FB" />
      <StepBox num="8" title="Loading & Departure" content="Your cargo is loaded onto the vessel or aircraft. Shipping line issues Bill of Lading (sea) or airline issues Air Waybill (air) — these are your title documents and proof of shipment. Share these with your buyer to trigger payment (under LC or collection terms)." fill="#EAFAF1" />
      <StepBox num="9" title="Share Documents with Buyer" content="Send the full set of shipping documents to your buyer or their bank (under LC): Commercial Invoice, Packing List, Bill of Lading/AWB, Certificate of Origin, and any required certificates. Under LC terms, documents must be presented within the time specified in the credit." fill="#FEF9E7" />
      <StepBox num="10" title="Receive Payment & Repatriate Foreign Exchange" content="Receive payment from buyer. Under SBP rules, export proceeds must be repatriated to Pakistan within 180 days of shipment date. Your authorised bank will close the Form E upon receipt of funds. Failure to repatriate attracts SBP penalties." fill="#EBF5FB" />

      <h2 id="documentation">5. Export Documentation — Every Document Explained</h2>
      <p>Export documentation is where most Pakistani first-time exporters struggle. Missing, incorrect, or late documents cause customs delays, letter of credit discrepancies, and buyer disputes. Here is a complete guide to every document required for Pakistan exports:</p>

      <h3>Core Documents — Required for All Pakistan Exports</h3>
      <DataTable
        headers={["Document", "Purpose", "Who Prepares", "When Needed"]}
        rows={[
          ["Commercial Invoice", "States value, description, buyer/seller details", "Exporter", "Always — foundation document"],
          ["Packing List", "Details each carton: content, weight, dimensions", "Exporter", "Always"],
          ["Bill of Lading (B/L)", "Sea freight: title to goods, contract of carriage", "Shipping Line", "Sea exports only"],
          ["Air Waybill (AWB)", "Air freight: non-negotiable contract of carriage", "Airline/IATA agent", "Air exports only"],
          ["Certificate of Origin (CoO)", "Proves manufacturing origin for customs/duty", "TDAP / Chamber / FPCCI", "Almost always required"],
          ["Goods Declaration (GD)", "Pakistan Customs export filing on WeBOC", "Licensed clearing agent", "All Pakistan exports"],
          ["Form E", "SBP: foreign exchange repatriation declaration", "Exporter + bank", "All Pakistan exports"],
          ["Packing Declaration", "Confirms wooden packing is ISPM-15 compliant", "Exporter/packer", "Most destinations require"],
        ]}
      />

      <h3>Additional Documents — Commodity or Destination Specific</h3>
      <DataTable
        headers={["Document", "Required For", "Issuing Authority", "Processing Time"]}
        rows={[
          ["Phytosanitary Certificate", "Fruits, vegetables, seeds, plants", "Dept. of Plant Protection", "2–3 days"],
          ["Export Health Certificate", "Seafood, meat, dairy, processed food", "Animal Quarantine / NAPHIS", "2–4 days"],
          ["Halal Certificate", "Meat/food to Gulf, Muslim countries", "Pakistan Halal Authority / PHDEC", "2–5 days"],
          ["Fumigation Certificate", "All wooden packaging (ISPM-15)", "Licensed fumigation company", "Same day"],
          ["Pre-Shipment Inspection (PSI)", "Saudi Arabia, Nigeria, and others require", "SGS / Bureau Veritas / Intertek", "3–7 days"],
          ["Form A / REX Certificate", "EU & UK GSP reduced duty claim", "TDAP / Exporter (REX)", "1–3 days"],
          ["MSDS (Safety Data Sheet)", "Chemicals, dangerous goods", "Manufacturer", "Pre-prepared"],
          ["IATA DG Declaration", "Dangerous goods via air", "Exporter + IATA-certified agent", "Pre-shipment"],
          ["Drug Regulatory Certificate", "Pharmaceuticals — all destinations", "DRAP Pakistan", "Days to weeks"],
          ["GSP Form A", "Preferential duty into EU/UK", "TDAP", "1–3 days"],
        ]}
      />

      <InfoBox variant="red">
        <strong>🚨 Form E — Most Missed Document in Pakistan Exports</strong>
        <p className="mt-2">Form E is mandatory for ALL Pakistani exports without exception. It is a State Bank of Pakistan requirement for foreign exchange repatriation — ensuring export proceeds come back to Pakistan. Your authorised bank must endorse Form E BEFORE your clearing agent files the GD on WeBOC. Missing or late Form E = GD cannot be filed = cargo cannot be exported = shipment missed. Always submit Form E at least 3–5 days before your cargo cut-off.</p>
      </InfoBox>

      <h2 id="weboc">6. WeBOC & Pakistan Customs Export Procedure — Complete Guide</h2>
      <p>WeBOC (Web-Based One Customs) is Pakistan's electronic customs management system — mandatory for all import and export cargo. Understanding how WeBOC works helps exporters plan realistic timelines and avoid costly examination delays.</p>

      <h3>WeBOC Export GD — Key Fields Every Exporter Must Know</h3>
      <DataTable
        headers={["GD Field", "What to Enter", "Common Mistake"]}
        rows={[
          ["Exporter NTN", "Your National Tax Number — must be active and filed", "Using wrong or expired NTN"],
          ["Declarant (Agent)", "Your licensed clearing agent's WeBOC credentials", "Using unlicensed agent"],
          ["HS Code", "8-digit Harmonized System code for your product", "Wrong HS code = wrong duty / examination"],
          ["Product Description", "Specific, accurate description — not vague terms", "'General merchandise' triggers Red channel"],
          ["Declared Value", "True invoice value in USD/GBP/AED — no under-declaration", "Under-valuation = seizure risk"],
          ["Quantity & Unit", "Exact number of units, cartons, metric tons", "Quantity mismatch with packing list"],
          ["Shipping Line / Flight", "Name of carrier, vessel/flight number", "Wrong vessel causes GD amendment delays"],
          ["Form E Reference", "Bank-endorsed Form E number — mandatory", "Missing Form E = GD rejected"],
          ["Destination Country", "ISO country code of final destination", "Wrong country code affects routing"],
          ["Port of Loading", "PKKHIC (KICT), PKKHQ (QICT), PKKHW (West Wharf), PKISB", "Wrong port causes customs jurisdiction issue"],
        ]}
      />

      <h3>WeBOC Risk Channels — What Each Means for Your Export Timeline</h3>
      <DataTable
        headers={["Channel", "What Happens", "Time Required", "How to Get Green Channel"]}
        rows={[
          ["🟢 Green", "Auto-release — Let Export Order issued automatically", "Same day — fastest", "Accurate GD, consistent compliance history, FASTER registered"],
          ["🟡 Yellow", "Document examination by Customs Appraiser — physical docs checked", "1–2 business days", "Correct HS code, accurate value, all docs complete"],
          ["🔴 Red", "Physical examination of cargo at terminal — containers opened", "3–7 business days", "Cannot fully control — improve compliance to reduce frequency"],
          ["🔵 Blue", "Post-clearance audit — cargo released first, audited later", "Same day release", "Available to pre-approved exporters with clean history"],
        ]}
      />

      <h3>FASTER Scheme — Fast-Track for Regular Pakistan Exporters</h3>
      <CheckList
        items={[
          "FASTER (Facilitation and Accelerated Shipment Terminal for Export Relief) is Pakistan Customs' pre-approval program",
          "Registered exporters get Green Channel assignment more consistently",
          "Requirements: minimum 2 years export history, clean compliance record, regular filing",
          "Apply through your Customs Collectorate — significant time savings for active exporters",
          "FASTER exporters experience 70–80% Green channel rate vs 40–50% for unregistered exporters",
        ]}
      />

      <h2 id="incoterms">7. Incoterms for Pakistani Exporters — Complete Guide</h2>
      <p>Incoterms define the responsibilities, costs, and risks between the Pakistani seller and the overseas buyer. Choosing the wrong Incoterm costs you money or exposes you to unexpected liability. Here is a practical guide for Pakistani exporters:</p>

      <DataTable
        headers={["Incoterm", "Seller (Pakistan) Responsible For", "Buyer Responsible For", "Most Common In Pakistan?"]}
        rows={[
          ["EXW (Ex Works)", "Nothing — goods ready at factory gate", "Everything: freight, export customs, destination customs", "Rare — disadvantages seller"],
          ["FCA (Free Carrier)", "Export customs + delivery to named carrier", "Main freight + destination costs", "Growing — modern standard"],
          ["FOB (Free on Board)", "Export customs + delivery on vessel at Karachi", "Ocean freight + insurance + destination costs", "Most common for sea exports"],
          ["CFR (Cost & Freight)", "Export customs + ocean freight to dest. port", "Insurance + destination costs", "Common — buyer arranges insurance"],
          ["CIF (Cost, Ins, Freight)", "Export customs + freight + insurance", "Destination customs + delivery", "Very common for Pakistani exports"],
          ["CPT (Carriage Paid To)", "Export customs + freight to named destination", "Insurance + destination customs", "Used for air/multimodal"],
          ["CIP (Carriage + Ins Paid)", "Export + freight + insurance to named point", "Destination customs + delivery", "Air freight / courier exports"],
          ["DAP (Delivered at Place)", "Everything except destination duty", "Import duty + taxes only", "E-commerce, door-to-door"],
          ["DDP (Delivered Duty Paid)", "EVERYTHING including import duty at dest.", "Nothing", "Rare — very high seller risk"],
        ]}
      />

      <InfoBox variant="gold">
        <strong>💡 Which Incoterm Should Pakistani Exporters Use?</strong>
        <ul className="mt-2 space-y-1">
          <li>FOB Karachi: Most common for textile and garment exporters — simple, buyer controls freight</li>
          <li>CIF [Destination Port]: Good for building relationships — you arrange freight, buyer trusts you more</li>
          <li>FCA: Modern standard — better than FOB for container shipments (risk transfers at CFS, not on vessel)</li>
          <li>CFR: Good when buyer wants to arrange their own insurance (common in Gulf trade)</li>
          <li>EXW: Avoid — you lose control at your factory gate but retain export liability</li>
          <li>DDP to UAE/UK: Only if you have a trusted customs broker there — high risk if duty miscalculated</li>
          <li>Always write: Incoterm + named place, e.g. 'FOB Karachi Port' — never just 'FOB'</li>
        </ul>
      </InfoBox>

      <h2 id="rates">8. Export Shipping Rates from Pakistan — Complete 2026 Guide</h2>

      <h3>Air Freight Export Rates from Pakistan — 2026</h3>
      <DataTable
        headers={["Route", "100–300 kg", "300–500 kg", "500+ kg", "Transit"]}
        rows={[
          ["Karachi (KHI) → Dubai (DXB)", "USD 2.20–3.50/kg", "USD 1.80–2.80/kg", "USD 1.40–2.20/kg", "1–2 days"],
          ["Karachi (KHI) → London (LHR)", "USD 3.20–5.00/kg", "USD 2.80–4.20/kg", "USD 2.20–3.50/kg", "2–3 days"],
          ["Karachi (KHI) → New York (JFK)", "USD 3.80–6.00/kg", "USD 3.20–5.00/kg", "USD 2.60–4.20/kg", "3–5 days"],
          ["Karachi (KHI) → Frankfurt (FRA)", "USD 3.00–4.80/kg", "USD 2.60–4.00/kg", "USD 2.00–3.40/kg", "2–3 days"],
          ["Lahore (LHE) → Dubai (DXB)", "USD 2.50–3.80/kg", "USD 2.00–3.20/kg", "USD 1.60–2.60/kg", "2–3 days"],
          ["Islamabad (ISB) → Dubai (DXB)", "USD 2.80–4.20/kg", "USD 2.20–3.50/kg", "USD 1.80–2.80/kg", "2–3 days"],
          ["Karachi (KHI) → Beijing (PEK)", "USD 2.00–3.50/kg", "USD 1.80–3.00/kg", "USD 1.50–2.50/kg", "2–3 days"],
          ["Karachi (KHI) → Toronto (YYZ)", "USD 3.50–5.50/kg", "USD 3.00–4.80/kg", "USD 2.50–4.00/kg", "3–5 days"],
        ]}
      />

      <h3>Sea Freight Export Rates from Karachi — 2026 (Ocean Freight Only)</h3>
      <DataTable
        headers={["Destination Port", "LCL per CBM", "FCL 20ft", "FCL 40ft", "Transit (port-port)"]}
        rows={[
          ["Jebel Ali, UAE", "USD 45–75", "USD 350–700", "USD 550–1,100", "3–6 days"],
          ["Felixstowe, UK", "USD 120–160", "USD 1,100–2,100", "USD 1,700–3,300", "22–28 days"],
          ["Rotterdam, Netherlands", "USD 130–170", "USD 1,200–2,200", "USD 1,800–3,500", "22–28 days"],
          ["Hamburg, Germany", "USD 130–175", "USD 1,200–2,400", "USD 1,900–3,800", "22–28 days"],
          ["New York, USA", "USD 170–220", "USD 2,000–4,000", "USD 3,000–6,000", "28–35 days"],
          ["Los Angeles, USA", "USD 155–210", "USD 1,800–3,800", "USD 2,800–5,800", "32–40 days"],
          ["Shanghai, China", "USD 55–90", "USD 400–900", "USD 650–1,400", "14–18 days"],
          ["Singapore", "USD 40–70", "USD 300–700", "USD 500–1,100", "10–14 days"],
          ["Mombasa, Kenya", "USD 65–110", "USD 600–1,200", "USD 900–1,900", "18–25 days"],
          ["Sydney, Australia", "USD 100–160", "USD 1,200–2,400", "USD 1,900–3,800", "22–30 days"],
        ]}
      />

      <InfoBox variant="blue">
        <strong>📌 Important: All-In Export Shipping Cost from Pakistan</strong>
        <p className="mt-2">The rates above are ocean or air freight components only. A complete all-in export shipping cost from Pakistan includes:</p>
        <ul className="mt-2 space-y-1">
          <li>Origin inland haulage (factory to port/airport): PKR 5,000–25,000</li>
          <li>Export customs clearance (GD filing, Form E processing): PKR 3,000–8,000</li>
          <li>Certificate of Origin: PKR 500–1,500</li>
          <li>Origin terminal handling charge: USD 100–200 (sea FCL)</li>
          <li>Bill of Lading / AWB issuance: USD 30–75</li>
          <li>Cargo insurance: 0.35–0.7% of cargo value</li>
          <li>Fumigation certificate (if wooden packing): PKR 2,000–5,000</li>
        </ul>
        <p className="mt-2">Total all-in adds 25–45% to the base freight rate — always request a door-to-port or door-to-door all-in quote.</p>
      </InfoBox>

      <h2 id="air-freight">9. Air Freight Export from Pakistan — Complete Guide</h2>
      <p>Air freight is essential for Pakistani exporters of perishables, high-value goods, and time-sensitive orders. Here is everything you need to know about exporting by air from Pakistan:</p>

      <h3>Airlines Carrying Pakistan Export Cargo</h3>
      <DataTable
        headers={["Airline", "Cargo Type", "Key Export Routes from Pakistan"]}
        rows={[
          ["PIA Cargo", "General + belly cargo", "Dubai, Jeddah, Manchester, Toronto, New York"],
          ["Emirates SkyCargo", "Belly cargo", "Dubai (DXB) — largest capacity, daily"],
          ["flydubai Cargo", "Belly cargo", "Dubai (DXB) — daily, competitive rates"],
          ["Air Arabia Cargo", "Belly cargo", "Sharjah (SHJ) — UAE exports"],
          ["Qatar Airways Cargo", "Belly + freighter", "Doha (DOH) — global connections"],
          ["Turkish Airlines", "Belly + freighter", "Istanbul (IST) — Europe connections"],
          ["Etihad Cargo", "Belly cargo", "Abu Dhabi (AUH) — GCC + global"],
          ["China Southern", "Belly cargo", "Guangzhou — China exports"],
          ["Saudi Airlines", "Belly cargo", "Jeddah, Riyadh — KSA exports"],
        ]}
      />

      <h3>What Air Freight Exporters Must Know</h3>
      <CheckList
        items={[
          "Chargeable weight = higher of actual weight (kg) vs volumetric weight (L×W×H÷6000)",
          "Pack densely — light/bulky cargo pays volumetric weight which inflates cost",
          "Book at least 5–7 days before required flight — peak seasons (Eid, Christmas, Ramadan) book 2–3 weeks ahead",
          "Perishables (mangoes, seafood): book cool room storage at JIAP cargo terminal 48 hrs in advance",
          "Dangerous goods (DG): must use IATA DG-certified agent — significant surcharges apply",
          "Surgical instruments: check import licensing requirements at destination (US FDA, EU CE marking)",
          "Air cargo security screening: all Pakistan export air cargo is screened — allow extra time",
        ]}
      />

      <h2 id="sea-freight">10. Sea Freight Export from Pakistan — Complete Guide</h2>

      <h3>Pakistan's Seaports for Export</h3>
      <DataTable
        headers={["Port", "Terminal", "Best For", "Main Carriers"]}
        rows={[
          ["Karachi Port (KPT)", "KICT (East Wharf)", "General containers — most exporters", "Maersk, MSC, CMA CGM"],
          ["Karachi Port (KPT)", "PICT (West Wharf)", "General containers", "Evergreen, APL, COSCO"],
          ["Port Qasim (QASIM)", "QICT terminal", "Deep-water — large vessels", "Hapag-Lloyd, ONE, Evergreen"],
          ["Karachi Port (KPT)", "SAPT terminal", "Multi-purpose, bulk cargo", "Multiple carriers"],
          ["Gwadar Port", "GWPT", "CPEC route — China exports", "China-Pakistan corridor"],
        ]}
      />

      <h3>Key Sea Freight Export Considerations</h3>
      <CheckList
        items={[
          "FCL: Book 10–14 days before ETD — empty container release + stuffing takes 3–5 days",
          "LCL: Deliver cargo to NVOCC's CFS 5–7 days before vessel ETD for proper consolidation",
          "VGM (Verified Gross Mass): Container must be weighed and VGM submitted before terminal cut-off — SOLAS mandatory",
          "Cargo cut-off: typically 24–48 hours before vessel departure — missing it = rolled to next vessel (7–14 day delay)",
          "Bill of Lading instructions: submit to shipping line within 24 hours of vessel departure — late BL instructions cause delays",
          "Original BL vs Telex Release: Original BL sent to buyer for payment; Telex Release used when payment received before cargo arrives",
        ]}
      />

      <h2 id="karachi">11. Export Shipping from Karachi — Pakistan's Export Capital</h2>
      <p>Karachi handles over 60% of Pakistan's total export value. The city's combination of KPT, Port Qasim, and JIAP provides every export mode and the most competitive freight rates in the country.</p>

      <CheckList
        items={[
          "Karachi textile exporters: FCL 20ft and 40ft — weekly sailings to UK, USA, Germany, Netherlands",
          "Karachi rice exporters: FCL 20ft bulk bags — UAE, Saudi Arabia, Africa primary markets",
          "Karachi seafood exporters (Fish Harbour): Air freight to China, EU, Japan; Sea reefer to EU and USA",
          "Karachi pharmaceutical exporters: Air freight to UAE, Afghanistan, Africa",
          "Karachi chemical exporters: FCL DG containers — strict IMDG compliance required",
          "Karachi leather exporters: FCL/LCL to Germany, Italy, UK, UAE",
          "Customs: Appraisement East (KICT/QICT) and Appraisement West (PICT) handle Karachi exports",
        ]}
      />

      <DataTable
        headers={["Commodity", "Typical Volume/Shipment", "Mode", "Route", "Avg Rate"]}
        rows={[
          ["Garments (export order)", "20–40 CBM", "FCL 20ft", "Karachi → Felixstowe", "USD 1,400–2,500 FCL"],
          ["Basmati Rice", "18–20 tons", "FCL 20ft", "Karachi → Jebel Ali", "USD 400–700 FCL"],
          ["Fresh Mango", "500–2,000 kg", "Air freight", "Karachi → Dubai/London", "USD 2.50–5.00/kg"],
          ["Frozen Shrimp", "5–15 tons", "Reefer FCL", "Karachi → Shanghai/EU", "USD 800–1,800 FCL"],
          ["Leather Products", "5–15 CBM", "LCL/FCL", "Karachi → Hamburg", "USD 700–1,600 LCL"],
          ["Carpets", "10–30 CBM", "FCL/LCL", "Karachi → Rotterdam", "USD 1,200–2,200 FCL"],
        ]}
      />

      <h2 id="lahore">12. Export Shipping from Lahore — Textile & Garment Hub</h2>
      <p>Lahore is Pakistan's second largest export city — home to textile mills, garment factories, and sports goods manufacturers. Most Lahore exports go via two routes: air freight from Allama Iqbal International Airport (LHE) for urgent orders, or road to Karachi Port for sea freight.</p>

      <CheckList
        items={[
          "Road distance Lahore to Karachi Port: ~1,300 km — 18–22 hours by truck, PKR 10,000–20,000/ton",
          "ICD Sheikhupura (Lahore Dry Port): inland container depot allowing customs clearance in Lahore",
          "Air freight from LHE: daily flights to Dubai (PIA, Emirates), onwards to global markets",
          "Knitwear and hosiery: primary Lahore export — UK, USA, Germany main markets",
          "Certificate of Origin from LCCI (Lahore Chamber of Commerce and Industry)",
          "Sialkot nearby: surgical instruments and sports goods export hub — own airport (SKT)",
        ]}
      />

      <h2 id="islamabad">13. Export Shipping from Islamabad & Rawalpindi</h2>
      <p>Islamabad and Rawalpindi contribute growing export volumes — particularly pharmaceutical exports, IT services, fresh produce from the Punjab and Khyber Pakhtunkhwa regions, and government/diplomatic cargo.</p>

      <CheckList
        items={[
          "New Islamabad International Airport (NIIA/ISB): direct flights to Dubai, Abu Dhabi for air exports",
          "Road to Karachi for sea freight: PKR 12,000–22,000/ton, 20–28 hours",
          "Pharmaceutical exports: major growth sector from Islamabad — air freight to UAE, Africa",
          "Fresh produce: apricots, apples, pomegranates from KPK — air freight to UAE/Gulf",
          "ICCI (Islamabad Chamber of Commerce): issues Certificates of Origin for ISB exporters",
          "Peshawar and KPK: marble, gemstones, dried fruit — primarily exported via Karachi",
        ]}
      />

      <h2 id="faisalabad-sialkot">14. Export Shipping from Faisalabad & Sialkot</h2>

      <h3>Faisalabad — Pakistan's Textile Capital</h3>
      <p>Faisalabad produces approximately 30% of Pakistan's total textile exports — yarn, fabric, made-ups, and home textiles. Most Faisalabad exports reach Karachi by truck (PKR 8,000–15,000/ton, 12–16 hours) for sea freight loading.</p>

      <CheckList
        items={[
          "Primary exports: yarn, grey fabric, dyed fabric, bed linen, towels, curtains",
          "Main markets: USA, UK, Germany, Netherlands, Spain, Turkey",
          "Mode: Sea FCL and LCL from Karachi — weekly sailings to all major textile markets",
          "Dry Port Faisalabad: allows inland customs clearance for large exporters",
        ]}
      />

      <h3>Sialkot — Surgical Instruments & Sports Goods Capital</h3>
      <p>Sialkot is Pakistan's most export-intensive city per capita — producing 80% of the world's hand-made footballs and significant surgical instruments. The city has its own international airport (SKT).</p>

      <CheckList
        items={[
          "Surgical instruments: primarily air freight — high value relative to weight, tight EU/FDA compliance",
          "Sports goods (footballs): combination of air (urgent orders) and sea (bulk season stock)",
          "Sialkot International Airport (SKT): cargo flights to Dubai and onward connections",
          "CE Marking (EU) and FDA registration (USA) required for surgical instruments — arrange well in advance",
          "Certificate of Origin from SCCI (Sialkot Chamber of Commerce and Industry)",
        ]}
      />

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Service: International Moving & Freight Forwarding from Pakistan
        </strong>
        Are you a Pakistani exporter looking for a reliable, licensed freight forwarder who handles the complete export process from documentation to delivery? bestintlmovers.com is your full-service export shipping partner:
        <CheckList
          items={[
            "Export customs clearance — WeBOC GD filing, Form E, Certificate of Origin",
            "Air freight export Pakistan to UAE, UK, USA, Canada — competitive kg rates",
            "Sea freight FCL and LCL — all major shipping lines from Karachi",
            "Door-to-door export service — factory pickup to buyer's warehouse",
            "Cargo insurance for all export shipments",
          ]}
        />
        <p className="mt-2">📦 Visit: bestintlmovers.com/international-moving</p>
        <p>📞 FREE export consultation — WhatsApp our team today</p>
      </CtaBox>

      <h2 id="compliance">15. Export Compliance: Prohibited Items & Export Controls</h2>
      <p>Not everything can be exported from Pakistan freely. Understanding export controls, prohibited items, and special licensing requirements protects you from cargo seizure, fines, and legal action.</p>

      <h3>Items Requiring Special Export Licences from Pakistan</h3>
      <DataTable
        headers={["Item Category", "Licence Required From", "Processing Time"]}
        rows={[
          ["Antiques & archaeological artifacts", "Ministry of Culture Pakistan", "Weeks to months — apply early"],
          ["Wildlife (CITES species)", "Ministry of Climate Change (CITES Auth)", "Weeks — very strict"],
          ["Firearms & ammunition", "Ministry of Defence / Interior", "Months — very restrictive"],
          ["Dual-use goods (potential military)", "Ministry of Commerce (ECC)", "Weeks to months"],
          ["Pharmaceutical exports (narcotics)", "DRAP + Ministry of Health", "Weeks"],
          ["Cultural heritage items", "Ministry of Culture", "Case by case"],
          ["Currency > USD 10,000", "State Bank of Pakistan", "Form R declaration"],
          ["Nuclear / radioactive material", "Pakistan Nuclear Regulatory Authority", "Strictly controlled"],
        ]}
      />

      <h3>Destination-Country Import Restrictions — What Pakistan Exporters Must Check</h3>
      <CheckList
        items={[
          "USA: FDA approval for food, pharma, cosmetics; FCC compliance for electronics; CBP ISF filing",
          "EU/UK: CE marking for electronics/machinery; EU organic certification for organic food; REACH for chemicals",
          "UAE: Ministry of Climate Change clearance for food; Ministry of Health for pharma; DG Department for chemicals",
          "Saudi Arabia: SASO (Saudi Standards Organization) certification for many product categories",
          "Australia: AQIS (biosecurity) clearance for all food/agricultural products — strict quarantine",
          "China: CIQ inspection for food; CCCR registration for pharma; China Compulsory Certification (CCC) for electronics",
        ]}
      />

      <h2 id="insurance">16. Cargo Insurance for Pakistan Exports</h2>
      <p>Cargo insurance is not optional for serious Pakistani exporters. International trade exposes your goods to physical damage, theft, vessel sinking, and total loss. The shipping line's liability under Hague-Visby Rules is only USD 2 per kg or USD 666.67 per package — a fraction of most cargo values.</p>

      <DataTable
        headers={["Insurance Type", "What It Covers", "Cost", "Recommended?"]}
        rows={[
          ["All Risks (ICC A)", "All physical loss/damage unless specifically excluded", "0.35–0.7% of CIF value", "✅ YES — always"],
          ["With Average (ICC B)", "Major perils: fire, sinking, collision, general average", "0.2–0.5% of CIF value", "Acceptable for low-risk cargo"],
          ["Free of PA (ICC C)", "Only total loss and major casualties", "0.15–0.3% of CIF value", "❌ Not recommended"],
          ["War Risk Clause", "War, SRCC (strikes, riots, civil commotion)", "Additional — route based", "Essential for high-risk routes"],
          ["Reefer/Cold Chain", "Temperature deviation, breakdown of reefer unit", "Additional premium", "Mandatory for perishables"],
        ]}
      />

      <CheckList
        items={[
          "Always insure to full CIF value (cargo value + freight + insurance) — not just FOB value",
          "Notify insurer within 3 working days of any damage discovery — late notification = claim rejection",
          "Keep all packing photographs — insurers require evidence of pre-shipment condition",
          "General Average: if ship runs aground and cargo is jettisoned to save vessel — all cargo owners share loss; only insurance protects you",
        ]}
      />

      <h2 id="mistakes">17. Common Export Shipping Mistakes — Pakistani Exporters</h2>
      <DataTable
        headers={["Mistake", "Consequence", "Prevention"]}
        rows={[
          ["Missing Form E before GD filing", "GD rejected — shipment delayed", "Submit Form E to bank 5 days before cargo cut-off"],
          ["Wrong HS code on GD", "Wrong duty, Red channel, penalties", "Verify HS code with FBR tariff schedule or clearing agent"],
          ["Under-declaring invoice value", "Customs seizure, fraud penalties, buyer risk", "Always declare true transaction value"],
          ["Missing Certificate of Origin", "Buyer pays full duty — buyer complaint, lost order", "Get CoO with every shipment to EU, UK, USA"],
          ["Wooden packing not ISPM-15", "Cargo quarantined/returned at destination", "Use only HT (heat-treated) stamped wood"],
          ["Missing phytosanitary cert (food)", "Cargo rejected at destination port", "Apply 3–5 days before shipment — allow lead time"],
          ["Late GD filing (after vessel ETD)", "Penalties + difficult post-export GD issues", "File GD at least 24–48 hrs before cargo cut-off"],
          ["Booking unreliable freight agent", "Cargo collected, company disappears with funds", "Verify IATA licence, C-licence, WeBOC registration"],
          ["No cargo insurance", "Total loss with carrier paying USD 2/kg only", "Always take All Risks (ICC A) policy"],
          ["Ignoring ISF for USA exports", "US CBP fine USD 5,000–10,000 per violation", "File ISF 24 hrs before Pakistan loading via US broker"],
        ]}
      />

      <h2 id="freight-forwarder">18. How to Choose the Best Export Freight Forwarder from Pakistan</h2>
      <p>Your freight forwarder is your most critical business partner in export shipping. A poor choice costs you customers, delays, and money. Here is the 12-point checklist for evaluating any Pakistani freight forwarder for your exports:</p>

      <NumberedList
        items={[
          "IATA licence: verifiable on iata.org — mandatory for air freight agents",
          "Pakistan Customs C-Licence: registered clearing agent — ask for licence number",
          "WeBOC registered: can file GDs electronically — ask for WeBOC user ID confirmation",
          "FIATA/PIFFA membership: international and local industry standards",
          "Physical office: in Karachi (must), Lahore or Islamabad (preferred)",
          "Carrier relationships: direct contracts with 3+ shipping lines and/or airlines on your route",
          "Route expertise: minimum 3 years specific experience on your target market lane",
          "Documentation capability: can they handle CoO, phytosanitary, health certs coordination?",
          "Insurance partner: do they offer cargo insurance — what are the policy terms?",
          "Tracking system: real-time shipment tracking via online portal",
          "All-in pricing: itemised quote including ALL origin and destination charges",
          "References: 3 verified references from exporters in your industry — call them",
        ]}
      />

      <h2 id="cost-calculator">19. Export Shipping Cost Calculator — Pakistan</h2>
      <p>Use this reference guide to estimate your total export shipping cost from Pakistan. These are indicative all-in estimates — request a formal quote for exact pricing:</p>

      <DataTable
        headers={["Shipment Scenario", "Mode", "Route", "Estimated All-In Cost", "Transit"]}
        rows={[
          ["5 CBM garments (LCL)", "Sea LCL", "Karachi → Dubai", "USD 600–1,000 all-in", "12–18 days"],
          ["20 CBM garments (FCL 20ft)", "Sea FCL", "Karachi → Felixstowe", "USD 2,200–4,000 all-in", "26–34 days"],
          ["40 CBM textiles (FCL 40ft)", "Sea FCL", "Karachi → Rotterdam", "USD 3,500–6,000 all-in", "26–34 days"],
          ["500 kg surgical instruments", "Air freight", "Sialkot → Frankfurt", "USD 1,800–3,500 all-in", "3–5 days"],
          ["2 ton fresh mangoes", "Air freight", "Karachi → London", "USD 5,000–9,000 all-in", "2–3 days"],
          ["5 ton frozen shrimp (reefer)", "Sea reefer", "Karachi → Shanghai", "USD 2,500–4,500 all-in", "16–22 days"],
          ["18 ton basmati rice (FCL 20ft)", "Sea FCL", "Karachi → Jebel Ali", "USD 1,200–2,200 all-in", "6–10 days"],
          ["1 CBM samples (courier)", "Courier", "Lahore → New York", "USD 200–400 all-in", "4–6 days"],
          ["30 CBM household goods (FCL)", "Sea FCL 20ft", "Karachi → Toronto", "USD 4,000–7,000 all-in", "40–55 days"],
          ["10 CBM leather goods (LCL)", "Sea LCL", "Karachi → Hamburg", "USD 2,000–3,500 all-in", "30–40 days"],
        ]}
      />

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Service: Best Freight Forwarders in Pakistan — Export Specialists
        </strong>
        Searching for a trusted export freight forwarder in Karachi, Lahore or Islamabad? bestintlmovers.com is Pakistan's licensed export shipping specialist — handling everything from WeBOC customs to door-to-buyer delivery:
        <CheckList
          items={[
            "Air freight export — IATA licensed, all major airline contracts",
            "Sea freight FCL/LCL — Maersk, MSC, CMA CGM, Hapag-Lloyd partner",
            "Complete export documentation — GD, Form E, CoO, phytosanitary, halal cert",
            "Export to UAE, UK, USA, Canada, Germany, China, Australia & beyond",
            "Competitive all-in pricing — no hidden charges",
          ]}
        />
        <p className="mt-2">📦 Visit: bestintlmovers.com/best-freight-forwarders-pakistan</p>
        <p>📞 FREE export freight consultation — call or WhatsApp today</p>
      </CtaBox>

      <h2 id="faqs">20. 10 Most Important FAQs — Export Shipping from Pakistan</h2>
      <p>These are the most searched questions about export shipping from Pakistan — answered in complete detail for Pakistani exporters:</p>

      <InfoBox variant="blue">
        <strong>❓ What documents are required for export shipping from Pakistan?</strong>
        <p className="mt-2">All Pakistan exports require: (1) Commercial Invoice — declaring value, buyer/seller details, and product description. (2) Packing List — detailing each carton's contents, weight, and dimensions. (3) Goods Declaration (GD) — filed by your licensed clearing agent on WeBOC (Pakistan Customs' electronic system). (4) Form E — State Bank of Pakistan's foreign exchange repatriation declaration, endorsed by your authorised bank before GD filing. (5) Bill of Lading (sea freight) or Air Waybill (air freight) — issued by the carrier after loading. (6) Certificate of Origin — from TDAP, Chamber of Commerce, or FPCCI, proving Pakistani manufacture. Additional documents depend on commodity: phytosanitary certificate for food, health certificate for meat/seafood, fumigation certificate for wooden packaging, and Form A/REX for EU/UK GSP duty reduction.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ How do I export goods from Pakistan for the first time?</strong>
        <p className="mt-2">To export from Pakistan for the first time: (1) Register your business with SECP (Securities & Exchange Commission of Pakistan) and obtain NTN from FBR. (2) Register as an exporter with TDAP (Trade Development Authority of Pakistan). (3) Open a foreign currency account with an authorised bank for export proceeds. (4) Find an overseas buyer through Alibaba, trade missions, or industry contacts. (5) Agree on product, price, payment terms, and Incoterm. (6) Engage a licensed customs clearing agent in Karachi or your city. (7) File Form E with your bank and Goods Declaration on WeBOC. (8) Book freight with a licensed freight forwarder. (9) Obtain Certificate of Origin and commodity-specific certificates. (10) Ship cargo and present shipping documents to your bank or buyer. bestintlmovers.com guides first-time Pakistani exporters through every step.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ What is WeBOC and how does it work for Pakistan exports?</strong>
        <p className="mt-2">WeBOC (Web-Based One Customs) is Pakistan's integrated electronic customs management system operated by FBR (Federal Board of Revenue). All Pakistan exports are processed through WeBOC — there is no paper-based alternative. Your licensed customs clearing agent files a Goods Declaration (GD) on WeBOC containing: exporter NTN, HS code (tariff classification), product description, declared value, quantity, destination country, carrier details, and Form E reference. WeBOC's automated Risk Management System (RMS) then assigns the cargo to one of three channels: Green (auto-release — same day), Yellow (document examination — 1–2 days), or Red (physical examination — 3–7 days). The Let Export Order (LEO) is issued upon successful clearance, authorising the terminal to load your cargo. First-time exporters must use a licensed clearing agent registered on WeBOC — bestintlmovers.com provides this service.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ What is Form E and why is it mandatory for Pakistan exports?</strong>
        <p className="mt-2">Form E is a mandatory State Bank of Pakistan (SBP) requirement for all Pakistani exports. It serves as a foreign exchange repatriation declaration — ensuring that export proceeds (the payment from your overseas buyer) are received in Pakistan within 180 days of the shipment date. Form E must be submitted to and endorsed by your SBP-authorised bank BEFORE your clearing agent files the Goods Declaration (GD) on WeBOC — the GD cannot be submitted without a valid Form E reference number. If export proceeds are not repatriated within 180 days, SBP penalties apply and the bank must report the defaulting exporter. Always submit Form E at least 3–5 business days before your cargo cut-off date to avoid delays. Your freight forwarder or clearing agent will advise on which bank to use and what documents to provide.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ How much does it cost to export from Pakistan to UAE by sea?</strong>
        <p className="mt-2">The total all-in cost to export from Pakistan to UAE by sea depends on volume and mode. For LCL (shared container): ocean freight USD 45–75/CBM + origin CFS handling USD 10–18/CBM + customs documentation PKR 3,000–6,000 + origin THC USD 8–15/CBM + destination charges USD 40–80 + delivery. Total all-in for 5 CBM approximately USD 600–1,000. For FCL 20ft (full container): ocean freight USD 350–700 + origin THC USD 100–200 + customs documentation PKR 3,000–6,000 + B/L issuance USD 30–75 + inland haulage PKR 8,000–20,000 + destination THC and customs. Total all-in for a 20ft FCL Karachi to Dubai approximately USD 1,200–2,500 depending on commodity and current market rates. Always request an all-in quote from bestintlmovers.com for your specific cargo details.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ Which Incoterm should Pakistani exporters use?</strong>
        <p className="mt-2">The most common and recommended Incoterms for Pakistani exporters are: (1) FOB (Free on Board) Karachi — You handle export customs and load cargo onto the vessel; buyer pays ocean freight and destination costs. This is the most common term for textile and garment exports from Pakistan. (2) CIF (Cost, Insurance and Freight) — You arrange and pay for ocean freight and cargo insurance to the destination port; buyer handles destination customs and delivery. Good for building buyer relationships. (3) FCA (Free Carrier) — Modern alternative to FOB, better suited to containerised cargo; risk transfers when cargo is loaded onto the carrier's vehicle at origin, not on the vessel. Always specify the named place: e.g. 'FOB Karachi Port' or 'CIF Jebel Ali' — never just 'FOB' without the location. Avoid EXW unless you have a very experienced buyer; avoid DDP unless you have a trusted customs broker at destination.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ How long does sea freight take from Pakistan to UK?</strong>
        <p className="mt-2">Sea freight from Karachi to the UK (Felixstowe or Southampton) takes 22–32 days port-to-port on direct or single-transhipment services. Total door-to-door time from a Pakistan factory to a UK address is typically 30–42 days, including: inland trucking to Karachi Port (1–2 days), export customs clearance (1–3 days), vessel transit (22–30 days), UK import customs clearance (2–5 days), and UK inland delivery (1–3 days). Fastest option is via Maersk or MSC direct service or single transhipment via Jebel Ali. Add 3–7 extra days for Red channel customs examination. For urgent UK orders, air freight from Karachi to London Heathrow takes 2–3 days airport-to-airport, 4–6 days door-to-door.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ What is Certificate of Origin and why do Pakistani exporters need it?</strong>
        <p className="mt-2">A Certificate of Origin (CoO) is an official document issued by TDAP (Trade Development Authority of Pakistan), a Chamber of Commerce (KCCI, LCCI, ICCI, FCCI), or FPCCI, certifying that the exported goods were manufactured in Pakistan. It is required for: (1) Customs clearance at the destination — most countries require CoO to classify and apply the correct import duty rate. (2) GSP/GSP+ duty preference — UK and EU grant significantly reduced or zero import duty on Pakistani goods when accompanied by Form A or REX (Registered Exporter) certificate as proof of Pakistani origin. (3) Letter of Credit compliance — most LCs specify CoO as a required document. (4) Trade agreement benefits — Pakistan has bilateral trade agreements with several countries requiring CoO for preferential treatment. Without a CoO, your buyer may pay full MFN duty instead of the preferential GSP rate — costing them 6–12% extra on textiles to EU/UK, which can make your goods uncompetitive.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ How do I get an export licence from Pakistan?</strong>
        <p className="mt-2">Most goods can be exported from Pakistan without a specific export licence — export is generally free except for a defined list of controlled items. What you DO need for every export: (1) NTN registration with FBR. (2) TDAP exporter registration. (3) Foreign currency account with an authorised bank. (4) Form E from your bank for each shipment. (5) Goods Declaration (GD) on WeBOC filed by a licensed clearing agent. Special export licences are required for: antiques (Ministry of Culture), firearms (Ministry of Defence/Interior), certain chemicals and dual-use goods (Ministry of Commerce/ECC), CITES-protected species (Ministry of Climate Change), and narcotics/controlled pharmaceuticals (DRAP + Ministry of Health). For standard commercial exports — textiles, food, surgical instruments, leather — no additional licence is needed beyond the above standard requirements.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>❓ Can bestintlmovers.com handle my complete export shipping from Pakistan?</strong>
        <p className="mt-2">Yes. bestintlmovers.com provides complete export shipping services from Pakistan — handling every stage from your factory or warehouse to the buyer's door in UAE, UK, USA, Canada, Germany, Australia, or any international destination. Our export services include: factory or warehouse pickup anywhere in Pakistan (Karachi, Lahore, Islamabad, Faisalabad, Sialkot, Rawalpindi); professional packing and crating if required; coordination of Certificate of Origin, phytosanitary certificates, fumigation, and all commodity-specific documentation; Form E submission guidance; Goods Declaration (GD) filing on WeBOC by our licensed clearing agents; booking of air freight or sea freight (FCL or LCL) on your chosen carrier; cargo insurance arrangement; real-time shipment tracking; and destination clearance through our international partner network. Contact us for a free, all-in export freight quote tailored to your specific commodity and route.</p>
      </InfoBox>

      <h2>Conclusion: Export Shipping from Pakistan — Start Right, Ship Smart</h2>
      <p>Export shipping from Pakistan is a rewarding but complex undertaking. The exporters who succeed internationally are those who invest time in understanding the process — the documentation, the customs procedures, the Incoterms, the freight options, and the insurance requirements. Those who skip these fundamentals face delays, fines, unhappy buyers, and lost business.</p>
      <p>The good news: with the right freight forwarding partner, the complexity disappears. A licensed, experienced export freight forwarder handles WeBOC filings, Form E coordination, Certificate of Origin, cargo booking, customs clearance, and delivery — leaving you free to focus on production quality and buyer relationships.</p>
      <p>bestintlmovers.com is Pakistan's trusted export shipping partner — IATA licensed, WeBOC registered, FIATA standard, with direct carrier contracts on all major Pakistan trade lanes. From Karachi to Dubai, Lahore to London, Sialkot to Frankfurt — we move Pakistan's exports to the world.</p>

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Get Your Free Export Shipping Quote — bestintlmovers.com
        </strong>
        bestintlmovers.com — Complete Export Shipping Services from Pakistan:
        <CheckList
          items={[
            "CARGO RATES: bestintlmovers.com/cargo-charges-pakistan-to-uae — Air freight + sea freight rates | All routes | All-in transparent pricing",
            "FREIGHT FORWARDING: bestintlmovers.com/best-freight-forwarders-pakistan — Licensed export agent | WeBOC | IATA | All documentation handled",
            "INTERNATIONAL MOVING: bestintlmovers.com/international-moving — Personal effects + household goods export | Door-to-door global",
          ]}
        />
        <p className="mt-2">📞 FREE export consultation — WhatsApp or call our team today</p>
        <p>🌐 bestintlmovers.com | Pakistan's Export Shipping Specialists</p>
      </CtaBox>
    </>
  );
}
