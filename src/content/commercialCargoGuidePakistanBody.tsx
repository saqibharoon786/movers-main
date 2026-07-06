import type { ReactNode } from "react";
import { Link } from "react-router-dom";

function InfoBox({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "warn" | "save" | "blue" }) {
  const cls =
    variant === "warn"
      ? "border-amber-500/40 bg-amber-500/5"
      : variant === "save"
        ? "border-emerald-500/40 bg-emerald-500/5"
        : variant === "blue"
          ? "border-blue-500/40 bg-blue-500/5"
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

const TOC = [
  "Pakistan's Key Export Industries & Their Shipping Requirements",
  "Air Freight vs Sea Freight for Commercial Cargo — Making the Right Choice",
  "Essential Export Documentation — What Every Pakistani Exporter Needs",
  "HS Codes — The Foundation of International Trade",
  "Incoterms — Who Pays What, Who Is Responsible for What",
  "Pakistan Customs Export Procedures — Step by Step",
  "Destination Customs — Import Duties Your Buyer Will Face",
  "Letters of Credit & Payment Terms in International Trade",
  "Choosing the Right Freight Forwarder in Pakistan",
  "Commercial Cargo Packaging & Labelling Requirements",
  "Cargo Insurance for Commercial Shipments",
  "Common Mistakes Pakistani Exporters Make — And How to Avoid Them",
  "Frequently Asked Questions",
];

export function CommercialCargoGuidePakistanBody() {
  return (
    <>
      <p>
        Pakistan is a major exporting nation — textiles from Faisalabad, leather goods from Karachi and Lahore, sports equipment from Sialkot, surgical instruments from Gujranwala, rice and food products from Punjab, handicrafts and carpets from across the country. Pakistani businesses export to buyers in the UK, USA, Canada, Australia, UAE, Germany, Italy, and dozens of other markets around the world.
      </p>
      <p>
        But for many Pakistani businesses — especially small and medium enterprises (SMEs) new to international trade — the logistics of shipping commercial cargo internationally can be confusing, expensive if done incorrectly, and full of regulatory complexity that can delay shipments and damage buyer relationships. Export documentation, HS codes, Letters of Credit, Incoterms, customs duties at destination, freight forwarder selection — each element requires knowledge and expertise.
      </p>
      <p>
        This guide is our complete reference for Pakistani businesses shipping commercial cargo internationally. Whether you are a Sialkot sports goods manufacturer exporting to the UK for the first time, a Faisalabad textile producer shipping to your regular Canadian buyer, or a Karachi leather goods exporter expanding to Australian retail — this guide covers every aspect of commercial cargo shipping from Pakistan, step by step.
      </p>

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

      <h2>1. Pakistan's Key Export Industries & Their Shipping Requirements</h2>
      <p>Pakistan's export sector is diverse. Different industries have very different shipping requirements, regulations, and documentation needs. Here is an overview of Pakistan's major export sectors and what their international shipping involves:</p>

      <DataTable
        headers={["Export Sector", "Main Shipping Points", "Key Shipping Considerations"]}
        rows={[
          ["Textiles & Garments", "Faisalabad, Lahore, Karachi", "Sea freight FCL/LCL, APTMA certificates, composition labels, country of origin marking"],
          ["Leather Goods & Footwear", "Karachi, Lahore, Sialkot", "Air or sea, CITES compliance for exotic skins, chemical testing certificates for EU"],
          ["Sports Goods", "Sialkot", "Sea freight, Sialkot export via SKT airport or Lahore/Karachi port, CE marking for EU"],
          ["Surgical Instruments", "Sialkot, Gujranwala", "Air or sea, ISO 13485, CE marking, FDA registration for USA, sterilisation certificates"],
          ["Rice & Food Products", "Karachi, Lahore, Hyderabad", "Sea FCL, phytosanitary certificate, HACCP, fumigation certificate, FDA for USA"],
          ["Carpets & Rugs", "Karachi, Lahore, Peshawar", "Sea freight, manual handling required, country of origin, CITES if wool source uncertain"],
          ["Handicrafts & Decorative", "Multiple cities", "Air or LCL sea, cultural artefact export permit may be needed for very old items"],
          ["Software & IT Exports", "All cities (services)", "PSEB registration, banking documentation, no physical cargo — digital delivery"],
          ["Engineering Goods", "Karachi, Lahore, Gujranwala", "Sea freight, technical specifications, country of origin, heavy lift if large machinery"],
          ["Pharmaceuticals", "Karachi, Lahore", "Air freight, cold chain if required, DRAP export permit, destination country health authority approval"],
        ]}
      />

      <InfoBox variant="blue">
        <strong className="text-foreground">💡 Pro Tip:</strong> Before shipping to any new country for the first time, research the destination country's specific import requirements for your product category. The UK, USA, Canada, Australia, and EU all have different standards, labelling requirements, and testing certifications that Pakistani exporters must comply with. Getting this wrong delays your shipment at destination and damages your buyer relationship.
      </InfoBox>

      <h2>2. Air Freight vs Sea Freight for Commercial Cargo — The Right Choice</h2>
      <p>The choice between air freight and sea freight for your commercial cargo depends on several factors: urgency, weight, volume, value, and your buyer's requirements. Here is a comprehensive comparison:</p>

      <DataTable
        headers={["Factor", "Air Freight vs Sea Freight for Commercial Cargo"]}
        rows={[
          ["Speed", "Air: 3–10 days | Sea: 15–45 days depending on destination"],
          ["Cost per kg", "Air: PKR 1,200–4,000/kg | Sea: PKR 20–100/kg equivalent"],
          ["Best for weight", "Air: Under 500 kg | Sea: 500 kg to full containers"],
          ["Best for volume", "Air: Under 5 CBM | Sea: Any volume"],
          ["High-value goods", "Air preferred — lower insurance premium, faster payment cycles"],
          ["Bulk commodities", "Sea always — textiles, rice, furniture, machinery"],
          ["Time-sensitive orders", "Air — fashion seasons, sample shipments, urgent restocking"],
          ["Regular bulk orders", "Sea — most cost-effective for established trade routes"],
          ["Letters of Credit", "Both work — L/C documents can be airway bill or B/L based"],
          ["Insurance cost", "Air: Slightly lower % of value | Sea: Standard marine cargo rates"],
          ["Damage risk", "Air: Lower (fewer handlings) | Sea: Low with proper packing"],
          ["Carbon footprint", "Air: Much higher | Sea: Lower — some buyers require sea for ESG"],
        ]}
      />

      <h3>When Pakistani Exporters Typically Choose Air</h3>
      <CheckList
        items={[
          "Surgical instruments and medical devices — time-sensitive, high-value, low-weight",
          "Fashion garments for seasonal orders — spring/summer or autumn/winter delivery deadlines",
          "Sample shipments — product samples for buyer approval before bulk order",
          "Emergency restocking — buyer has run out of stock and needs urgent replenishment",
          "High-value leather goods — faster payment cycle justifies air freight premium",
          "Pharmaceutical exports — temperature-sensitive or time-sensitive products",
          "Small commercial orders under 100 kg where sea freight minimum charges make sea uneconomical",
        ]}
      />

      <h3>When Pakistani Exporters Choose Sea Freight</h3>
      <CheckList
        items={[
          "Textiles and garments in bulk — cotton fabric, denim, knitwear — always sea",
          "Rice and food products — bulk sea freight is the only practical option",
          "Sports goods in commercial quantities — footballs, protective equipment, bats",
          "Carpets and rugs — large, heavy, unsuited to air freight",
          "Engineering goods and machinery — sea is the only option for heavy equipment",
          "Any shipment over 300–500 kg where sea freight saves 80–90% on freight cost",
          "Containerised regular orders where buyer has established sea freight payment terms",
        ]}
      />

      <InfoBox variant="save">
        <strong className="text-foreground">💰 Money Saver:</strong> For most Pakistani exporters shipping to established buyers, the hybrid approach works best: air freight for samples, urgent top-up orders, and high-value small consignments; sea freight for regular bulk orders. This optimises cost while maintaining the responsiveness your buyers expect.
      </InfoBox>

      <h2>3. Essential Export Documentation — What Every Pakistani Exporter Needs</h2>
      <p>Incorrect or incomplete export documentation is the most common cause of cargo delays, customs holds, and payment disputes in Pakistani international trade. Here is a complete guide to every document you may need:</p>

      <h3>Core Documents — Required for Every Commercial Shipment</h3>

      <h4>1. Commercial Invoice</h4>
      <p>The commercial invoice is the most important document in any international shipment. It describes the goods, states the price, identifies buyer and seller, and forms the basis for customs assessment at the destination.</p>
      <CheckList
        items={[
          "Must include: Exporter details (name, address, NTN), importer details, invoice number and date, detailed description of goods, quantity, unit price, total value, currency, country of origin, HS code, and Incoterms",
          "Value: Must state the ACTUAL transaction value — under-invoicing to reduce buyer's import duty is illegal and a frequent cause of goods being seized",
          "Language: English is universally acceptable — some countries require translation",
          "Copies: Typically 3 originals required for L/C transactions",
        ]}
      />

      <h4>2. Packing List</h4>
      <p>The packing list details exactly what is in each box, carton, or container — dimensions, weight, number of pieces, marks, and numbers. It is checked by customs officers to verify the commercial invoice.</p>
      <CheckList
        items={[
          "Must match: Every item on the commercial invoice must appear on the packing list",
          "Include: Gross weight, net weight, dimensions of each carton, total carton count",
          "Marks and numbers: Shipping marks on outer cartons must match the packing list",
        ]}
      />

      <h4>3. Bill of Lading (B/L) — Sea Freight</h4>
      <p>The Bill of Lading is the contract between the shipper and the ocean carrier. It is also the title document to the goods — whoever holds the original B/L has legal ownership. Critical for Letter of Credit transactions.</p>
      <CheckList
        items={[
          "Types: Original B/L (negotiable, for L/C), Surrender B/L (non-negotiable, faster release), Seaway B/L (non-negotiable)",
          "Details: Vessel name, port of loading, port of discharge, container number, seal number, freight terms",
          "Copies: For L/C transactions — usually 3 originals required",
          "Telex/Surrender: For trusted buyer relationships without L/C — simplifies release",
        ]}
      />

      <h4>4. Airway Bill (AWB) — Air Freight</h4>
      <p>The Air Waybill is the air freight equivalent of the Bill of Lading. Unlike an ocean B/L, an AWB is a non-negotiable transport document — it cannot be used as a title document for Letter of Credit purposes.</p>
      <CheckList
        items={[
          "Master AWB (MAWB): Issued by the airline",
          "House AWB (HAWB): Issued by the freight forwarder — this is what the exporter receives",
          "Tracking: AWB number used for real-time shipment tracking",
        ]}
      />

      <h4>5. Certificate of Origin</h4>
      <p>The Certificate of Origin (CoO) certifies that goods were manufactured in Pakistan. It is required by most destination countries for customs assessment and may qualify your goods for preferential tariff rates.</p>
      <CheckList
        items={[
          "Where to obtain in Pakistan: TDAP (Trade Development Authority of Pakistan) or Chamber of Commerce and Industry",
          "Types: General CoO, GSP Form A (for preferential tariff with EU, UK, Canada), Certificate of Pakistani Origin",
          "GSP/DCTS for UK: Pakistan benefits from UK's Developing Countries Trading Scheme (DCTS) — many Pakistani exports enter UK at 0% duty with correct Form A",
          "GSP for EU: Pakistan benefits from EU's GSP+ scheme — significant duty reduction",
        ]}
      />

      <h3>Additional Documents — Required for Specific Goods</h3>
      <DataTable
        headers={["Document", "Required For"]}
        rows={[
          ["Phytosanitary Certificate", "All plant-based products — rice, dried fruits, spices, cotton, wood packaging. Issued by Pakistan Department of Plant Protection."],
          ["Fumigation Certificate", "Required by Australia, USA, Canada for wooden packaging and some food products. ISPM-15 heat treatment certificate."],
          ["Health Certificate / Veterinary Certificate", "Meat, dairy, and animal products. Issued by Pakistan veterinary authority."],
          ["HACCP / Food Safety Certificate", "Food products to EU, UK, USA, Canada, Australia. Demonstrates food safety management system."],
          ["ISO Certificate", "Medical devices, surgical instruments — ISO 13485. Engineering goods — ISO 9001."],
          ["CE Marking Declaration", "Sports goods, electrical goods, medical devices exported to UK and EU."],
          ["FDA Registration", "Medical devices and food products exported to USA — requires prior FDA establishment registration."],
          ["DRAP Export Permit", "Pharmaceutical exports from Pakistan — issued by Drug Regulatory Authority of Pakistan."],
          ["Weight Certificate", "Bulk commodity shipments — verified by approved weighbridge."],
          ["Quality Certificate / Inspection Certificate", "Many buyers require third-party inspection (SGS, Bureau Veritas, Intertek) before shipment."],
          ["Textile Test Reports", "Garments and fabrics — azo dye testing, formaldehyde levels, shrinkage testing required for EU/UK/USA."],
          ["CITES Certificate", "Products from endangered species — certain leathers, woods. Issued by IUCN-recognized Pakistan authority."],
          ["Dangerous Goods Declaration", "Any cargo classified as dangerous under IMDG (sea) or IATA (air) regulations."],
        ]}
      />

      <InfoBox variant="warn">
        <strong className="text-foreground">📌 Important:</strong> Document requirements vary by destination country and product type. A surgical instrument export to the USA requires different certifications than the same instrument exported to the UAE. Always verify destination-specific requirements before preparing your export shipment — incorrect documentation causes holds, fines, and rejected shipments.
      </InfoBox>

      <h2>4. HS Codes — The Foundation of International Trade</h2>
      <p>The Harmonized System (HS) code is a 6-digit international product classification code that determines customs duty rates, import restrictions, and statistical reporting in every country. Getting the HS code right is one of the most important — and most often misunderstood — aspects of commercial cargo shipping.</p>

      <h3>How HS Codes Work</h3>
      <CheckList
        items={[
          "First 6 digits: International standard — same globally. Pakistan uses these for export declaration.",
          "Digits 7–8: Country-specific — destination country adds these for their tariff system",
          "Digits 9–10: Further country-specific sub-classification",
          "Example: Cotton T-shirts = HS 6109.10 (internationally) — UK adds digits for DCTS duty assessment",
          "Pakistan FBR: Uses Pakistan Customs Tariff based on HS codes for export declaration",
        ]}
      />

      <h3>Key HS Codes for Pakistan's Major Export Categories</h3>
      <DataTable
        headers={["Product Category", "HS Code Range", "Common Export Destination Duty Notes"]}
        rows={[
          ["Cotton fabrics (grey/greige)", "5208–5212", "UK: 0–12% (DCTS may apply), EU: 0–12% (GSP+)"],
          ["Ready-made garments (cotton)", "6101–6117", "UK: 0–12% (DCTS applicable), USA: 10–32%"],
          ["Leather footwear", "6401–6406", "UK: 0–16%, EU: 3–17%, USA: 5–15%"],
          ["Leather bags and accessories", "4202", "UK: 0–3.5%, EU: 2.4–3.7%"],
          ["Sports goods (footballs)", "9506.62", "UK: 0%, EU: 2.7%, USA: Free"],
          ["Surgical instruments", "9018–9022", "UK: 0%, EU: 0%, USA: Free-2.5%"],
          ["Basmati rice", "1006.30", "UK: £120–£160/tonne, EU: €65/tonne"],
          ["Carpets (handmade)", "5701", "UK: 0% (DCTS), EU: 0% (GSP+), USA: Free"],
          ["Processed food (spices)", "0902–0910", "UK: 0–5.5%, EU: 0–5.5%, Canada: 0%"],
          ["Engineering goods (parts)", "8400–8487", "Varies significantly by product"],
        ]}
      />

      <h3>Why the Right HS Code Matters</h3>
      <p>Using the wrong HS code has serious consequences:</p>
      <CheckList
        items={[
          "Under-duty: Wrong code gives buyer wrong duty rate — they may request credit or refuse shipment",
          "Over-duty: Wrong code makes your goods artificially expensive at destination — loses buyer",
          "Prohibited: Some HS codes trigger import restrictions or licensing requirements",
          "Preferential tariff loss: Wrong code means buyer loses DCTS/GSP preferential duty benefit — your price competitiveness suffers",
          "Customs penalties: Deliberate misclassification is a customs offence — fines and seizure risk",
        ]}
      />

      <InfoBox variant="warn">
        <strong className="text-foreground">⚠️ Watch Out:</strong> HS code classification for textiles, garments, and composite products can be complex. A 'cotton' shirt with 5% synthetic content may have a completely different HS code than a 100% cotton shirt — with different duty rates at destination. Our freight forwarding team classifies your goods correctly before every shipment. Wrong classification costs more than our service fee.
      </InfoBox>

      <h2>5. Incoterms — Who Pays What, Who Is Responsible for What</h2>
      <p>Incoterms (International Commercial Terms) are standardised trade terms published by the International Chamber of Commerce (ICC) that define the responsibilities of buyer and seller in an international transaction — who pays for freight, who handles customs, and who bears the risk of loss at each stage of the journey.</p>

      <h3>The Most Common Incoterms for Pakistani Exporters</h3>
      <DataTable
        headers={["Incoterm", "What It Means for the Pakistani Exporter"]}
        rows={[
          ["EXW — Ex Works", "You make goods available at your factory. Buyer arranges everything — export customs, freight, import customs. Lowest responsibility for you, lowest price for buyer, but risky if buyer uses inexperienced agents."],
          ["FOB — Free On Board", "You are responsible until goods are loaded onto the vessel at Karachi Port. Buyer pays ocean freight, insurance, and destination charges. Most common Incoterm for Pakistani sea freight exports."],
          ["CIF — Cost, Insurance, Freight", "You pay ocean freight and insurance to destination port. Buyer handles import customs and last-mile. You control the freight booking — good for protecting your margin."],
          ["CFR — Cost and Freight", "You pay ocean freight to destination port but buyer arranges insurance. Similar to CIF but you do not control insurance."],
          ["CPT — Carriage Paid To", "You pay freight to agreed destination point — includes multimodal. Buyer handles import customs and final delivery."],
          ["DDP — Delivered Duty Paid", "You are responsible for EVERYTHING — export, freight, destination import customs, duty payment, and final delivery. Highest responsibility but gives buyer zero hassle. Premium pricing justified."],
          ["DAP — Delivered At Place", "You are responsible until goods are at buyer's named location ready for unloading. Buyer handles import duty and unloading. Good middle ground for experienced exporters."],
          ["FCA — Free Carrier", "You are responsible until goods are handed to the carrier nominated by buyer. Good for air freight or multimodal shipments."],
        ]}
      />

      <p>For most Pakistani exporters, FOB (Free On Board) is the most common starting Incoterm because it is well understood, keeps export responsibilities clear, and allows buyers to use their preferred shipping arrangements. As your buyer relationships mature, CIF or even DDP can significantly improve your profitability by giving you control over the freight booking.</p>

      <InfoBox variant="blue">
        <strong className="text-foreground">💡 Pro Tip:</strong> Pakistani exporters who shift from FOB to CIF or DDP terms with trusted buyers can earn an additional 5–15% margin by controlling the freight booking — using competitive rates from Best Int'l Movers rather than whatever the buyer's agent charges. For a USD 100,000 order, this can be USD 5,000–15,000 in additional margin per shipment.
      </InfoBox>

      <h2>6. Pakistan Customs Export Procedures — Step by Step</h2>
      <p>Exporting commercial cargo from Pakistan involves a specific sequence of steps with the Federal Board of Revenue (FBR) and Pakistan Customs. Here is the complete export process:</p>

      <NumberedList
        items={[
          "Obtain NTN (National Tax Number) — All exporters must be registered with FBR. Apply at any Regional Tax Office or online at iris.fbr.gov.pk.",
          "Register as an Exporter — Register with FBR Export Module and get your Exporter Registration Number.",
          "Prepare all export documents — Commercial invoice, packing list, Certificate of Origin, and any product-specific certificates.",
          "File Goods Declaration (GD) — Submit the Pakistan Customs export GD through the WeBOC system (Web-Based One Customs). This is done by your freight forwarder or Customs Clearing Agent (CCA).",
          "Physical Examination (if selected) — Pakistan Customs may select your shipment for physical examination. Our team coordinates this.",
          "Customs Seal — Once cleared, customs seals the container. Seal number is recorded on all documents.",
          "Cargo Receipt at Port — Container is moved to Karachi Port or Port Qasim. Port receipt (EIR) issued.",
          "Vessel Loading — Container is loaded on the nominated vessel. Bill of Lading issued after loading.",
          "Export Realisation — Payment received from buyer must be repatriated to Pakistan within 180 days (as per SBP regulations).",
          "Sales Tax Refund — Exporters are entitled to sales tax refund on inputs. File refund claim with FBR after shipment.",
        ]}
      />

      <h3>WeBOC — Pakistan's Online Customs System</h3>
      <p>WeBOC (Web-Based One Customs) is Pakistan's electronic customs management system. All export Goods Declarations are filed electronically through WeBOC. As your freight forwarder, Best Int'l Movers' licensed Customs Clearing Agent (CCA) files your GD, manages the electronic clearance, and handles any customs examination or queries on your behalf.</p>
      <CheckList
        items={[
          "WeBOC Green Channel: Low-risk shipments — automatic clearance, no physical examination",
          "WeBOC Yellow Channel: Document verification required — physical examination rare",
          "WeBOC Red Channel: Full physical examination required — adds 1–3 days",
          "Your shipment's channel is determined by FBR risk management system — we cannot control this",
        ]}
      />

      <h3>State Bank of Pakistan (SBP) Export Regulations</h3>
      <CheckList
        items={[
          "All export proceeds must be received in foreign currency through authorised banking channels",
          "Export documents must be submitted to your bank within 14 days of shipment",
          "Proceeds must be repatriated within 180 days of shipment date",
          "Advance payment from foreign buyers: Allowed — SBP Circular 25 governs conditions",
          "Export rebate and duty drawback: FBR provides rebate on customs duties paid on inputs used in exports",
        ]}
      />

      <h2>7. Destination Customs — Import Duties Your Buyer Will Face</h2>
      <p>Understanding what import duty and taxes your buyer will pay at destination is critical for your price competitiveness. Higher destination duties make your goods more expensive for the buyer — even if your ex-factory price is competitive.</p>

      <h3>UK — DCTS (Developing Countries Trading Scheme)</h3>
      <p>Pakistan benefits from the UK's DCTS — one of the most valuable trade preferences available. Under DCTS Enhanced Preferences (Pakistan's category), most Pakistani goods enter the UK at significantly reduced or zero duty:</p>
      <CheckList
        items={[
          "Garments and textiles: 0% under DCTS (standard rate 9–12%)",
          "Footwear: 0–3.5% under DCTS (standard rate 8–20%)",
          "Carpets: 0% under DCTS (standard rate 4.7–12%)",
          "Sports goods: 0% (MFN rate already 0% for most categories)",
          "Surgical instruments: 0% (MFN rate already 0%)",
          "Rice (milled): GBP 101/tonne — no DCTS preference for rice",
          "Certificate of Origin Form A required to claim DCTS preferences",
        ]}
      />
      <InfoBox variant="blue">
        <strong className="text-foreground">💡 Pro Tip:</strong> The UK's DCTS gives Pakistani exporters a significant competitive advantage over suppliers from countries without preferential access. A 9% duty saving on garments versus a competitor from a non-DCTS country is often the difference between winning and losing a UK buyer. Always include a Form A Certificate of Origin — without it, your buyer pays full MFN duty.
      </InfoBox>

      <h3>EU — GSP+ (Generalised System of Preferences)</h3>
      <p>Pakistan benefits from the EU's GSP+ scheme — one of the most comprehensive preferential trade arrangements globally:</p>
      <CheckList
        items={[
          "Garments: 0–12% → 0% under GSP+ (standard EU rate 12%)",
          "Cotton fabrics: 0–8% → 0% under GSP+",
          "Leather goods: 2.4–3.7% → 0% under GSP+",
          "Carpets: 1.7% → 0% under GSP+",
          "Condition: Pakistan must comply with 27 international conventions on human rights, labour rights, environment, and good governance",
          "REX (Registered Exporter) system: Exporters must register with FBR REX to issue statements on origin",
        ]}
      />

      <h3>USA — No Preferential Trade Agreement with Pakistan</h3>
      <p>Pakistan does NOT have a Free Trade Agreement with the USA. Pakistani goods face US Most Favoured Nation (MFN) tariff rates — typically higher than EU or UK:</p>
      <CheckList
        items={[
          "Garments: 10–32% MFN duty",
          "Footwear: 8–20% MFN duty",
          "Sports goods (footballs): Free — 0% duty",
          "Surgical instruments: Free–2.5%",
          "Basmati rice: Specific duty applies",
          "Section 301 tariffs: Some Pakistani goods may face additional Section 301 tariffs on top of MFN",
          "USA buyers are accustomed to higher import duty costs — factor this into your pricing",
        ]}
      />

      <h3>Canada — CPTPP & MFN Rates</h3>
      <p>Canada and Pakistan have no bilateral FTA but Canada's MFN rates are generally moderate:</p>
      <CheckList
        items={[
          "Garments: 17–18% MFN (no preferential rate — significant cost for buyer)",
          "Carpets: 0% — good opportunity for Pakistani carpet exporters",
          "Sports goods: 0% — excellent for Sialkot exports",
          "Surgical instruments: 0% — strong competitive position",
          "Food items: Varies — CFIA compliance and phytosanitary requirements",
        ]}
      />

      <h3>Australia — Standard Tariff Rates</h3>
      <CheckList
        items={[
          "Most manufactured goods: 0–5% — generally favourable",
          "Garments and footwear: 0–10%",
          "Biosecurity: Strict import conditions (DAFF) — see Australian biosecurity requirements",
          "No significant preferential arrangement with Pakistan currently",
        ]}
      />

      <h2>8. Letters of Credit & Payment Terms in International Trade</h2>
      <p>For Pakistani exporters, especially those exporting to new buyers or in large quantities, the method of payment is as important as the freight logistics. Understanding Letters of Credit (L/C) is essential for any Pakistani exporter doing significant international business.</p>

      <h3>The Main Payment Terms in International Trade</h3>
      <DataTable
        headers={["Payment Term", "How It Works & Risk Level for Pakistani Exporter"]}
        rows={[
          ["Advance Payment (T/T)", "Buyer pays before shipment. Zero risk for exporter. Best for small orders or trusted buyers. Difficult to get from new buyers."],
          ["Letter of Credit (L/C)", "Bank guarantees payment when compliant documents presented. Safest for large orders. Bank verifies all shipping documents match L/C terms."],
          ["Documents Against Payment (D/P)", "Documents released to buyer only after bank collects payment. Moderate risk — buyer could refuse to pay and abandon goods."],
          ["Documents Against Acceptance (D/A)", "Documents released against buyer's promise to pay later. Higher risk — relies on buyer creditworthiness."],
          ["Open Account (30/60/90 days)", "Goods shipped, invoice sent, payment due later. Highest risk for exporter. Only for very trusted, long-standing buyers."],
          ["Partial Advance + Balance on Shipment", "30–50% advance, balance when goods ready. Good compromise for established relationships."],
        ]}
      />

      <h3>Letters of Credit — Key Points for Pakistani Exporters</h3>
      <p>An irrevocable Documentary Letter of Credit (L/C) issued by the buyer's bank and confirmed by a Pakistani bank is the gold standard of payment security for Pakistani exporters. Here is what to understand:</p>
      <CheckList
        items={[
          "L/C terms: All shipping documents (invoice, B/L, packing list, CoO, and any other specified documents) must exactly match the L/C terms. Even minor discrepancies can result in non-payment.",
          "Shipment deadline: L/C specifies latest shipment date — missing it voids the L/C",
          "Expiry date: L/C has an expiry date for document presentation",
          "Confirmation: Get your Pakistani bank to 'confirm' the L/C — this adds your bank's payment guarantee alongside the issuing bank",
          "Discrepancies: If your documents have discrepancies, the buyer can choose to waive them or refuse payment — negotiate discrepancy waiver fees carefully",
          "Transferable L/C: Allows a Pakistani exporter/middleman to transfer L/C benefit to a Pakistani manufacturer",
        ]}
      />
      <InfoBox variant="warn">
        <strong className="text-foreground">⚠️ Watch Out:</strong> The number one cause of L/C non-payment for Pakistani exporters is document discrepancy — when the Bill of Lading description does not exactly match the L/C description, or the shipment date is one day late. Our freight forwarding team reviews all L/C terms before preparing documents to ensure 100% compliance. We have a zero-discrepancy record on L/C shipments we manage.
      </InfoBox>

      <h2>9. Choosing the Right Freight Forwarder in Pakistan</h2>
      <p>Your freight forwarder is your most important partner in international commercial cargo. A good freight forwarder manages the entire logistics chain — documentation, customs, booking, tracking, and problem resolution. A bad one causes delays, documentation errors, and buyer relationship damage. Here is how to evaluate any freight forwarder in Pakistan:</p>

      <h3>What to Look for in a Pakistani Freight Forwarder</h3>
      <DataTable
        headers={["Evaluation Criteria", "What to Ask / Check"]}
        rows={[
          ["Licencing & Registration", "Licensed by Pakistan Customs as a Customs Clearing Agent (CCA). Member of PIFFA (Pakistan International Freight Forwarders Association) or FIATA."],
          ["Destination Network", "Ask: 'Do you have your own agent at [destination country] or do you use a third party?' Own network = faster response and accountability."],
          ["Documentation Expertise", "Ask about their experience with your specific product category and destination. Can they classify your HS code correctly?"],
          ["L/C Experience", "Ask: 'Have you handled L/C shipments to [destination]?' L/C documentation errors are costly — only use experienced forwarders for L/C shipments."],
          ["Insurance Services", "Do they offer cargo insurance? Can they arrange marine open cover for regular exporters?"],
          ["Technology & Tracking", "Do they provide online shipment tracking? Can you track via AWB or B/L number? What is their communication response time?"],
          ["References", "Ask for references from exporters in your industry. A forwarder with textile experience may not have medical device expertise."],
          ["Pricing Transparency", "Do they provide all-inclusive quotes? Or do they add surcharges later? Request a written breakdown of every charge."],
          ["Problem Resolution", "Ask: 'What happens if customs holds my shipment at destination?' How do they handle problems?"],
        ]}
      />

      <h3>Red Flags — Signs of an Unreliable Freight Forwarder</h3>
      <CheckList
        items={[
          "Cannot provide a written, all-inclusive quote — only gives vague verbal estimates",
          "Has no PIFFA or FIATA membership",
          "Cannot name their agent at your destination country",
          "Provides incorrect HS codes or does not know your product's classification",
          "Has no experience with L/C documentation for your specific destination",
          "Gives unrealistically low quotes — low prices mean corners cut somewhere",
          "Does not respond promptly to WhatsApp/email communications",
          "Cannot provide references from exporters in your product category",
        ]}
      />

      <h2>10. Commercial Cargo Packaging & Labelling Requirements</h2>
      <p>Commercial cargo packaging for international shipment must meet both shipping line/airline requirements and destination country import requirements. Incorrect packaging causes cargo damage, customs delays, and buyer complaints.</p>

      <h3>General Packaging Standards for Export</h3>
      <CheckList
        items={[
          "Export cartons: Double-walled corrugated cartons — single-wall cartons are NOT acceptable for most international buyers or insurers",
          "Gross weight per carton: Maximum 25 kg for manually handled cartons — heavier requires mechanical handling equipment warning",
          "Pallet: Many buyers require goods palletised — EUR pallet (80×120 cm) or US pallet (100×120 cm) depending on destination market",
          "Shrink wrap: Palletised goods must be shrink-wrapped to prevent movement during sea transit",
          "Waterproofing: Sea freight — all cartons must be protected against moisture. Inner polythene bags for sensitive goods.",
          "Void fill: No movement allowed inside cartons — packing peanuts, foam, or crumpled paper",
        ]}
      />

      <h3>ISPM-15 — Wooden Packaging Heat Treatment</h3>
      <p>This is one of the most frequently overlooked packaging requirements for Pakistani exporters. ISPM-15 (International Standards for Phytosanitary Measures No. 15) requires that all wooden packaging (pallets, crates, dunnage) used in international trade must be heat-treated or fumigated and marked with an approved stamp.</p>
      <CheckList
        items={[
          "Required by: USA, Canada, EU, UK, Australia, China, and most major importing countries",
          "Mark: IPPC mark with country code (PK), producer/treatment provider code, treatment method (HT or MB)",
          "Non-compliant wood: Will be refused entry, fumigated at exporter's cost, or destroyed",
          "Our service: We arrange ISPM-15 compliant packaging for all export shipments — never use untreated wood",
        ]}
      />

      <h3>Labelling Requirements — Outer Cartons</h3>
      <CheckList
        items={[
          "Shipping marks: Buyer reference, order number, destination, gross/net weight, dimensions — agreed with buyer before production",
          "Country of origin: 'Made in Pakistan' must appear on outer cartons for most destinations",
          "Handling instructions: Fragile, This Way Up, Keep Dry — where applicable",
          "Dangerous goods: IATA/IMDG dangerous goods labels where required by goods classification",
          "Carton numbers: Sequential numbering (1/20, 2/20... 20/20) for easy customs checking",
        ]}
      />

      <h3>Destination-Specific Labelling Requirements</h3>
      <DataTable
        headers={["Destination", "Special Labelling Requirements"]}
        rows={[
          ["UK / EU", "Garments: Fibre composition label, care instructions, size. Footwear: Material components. CE marking where required."],
          ["USA", "All textile products: RN number or WPL number (registered identification number), fibre content, country of origin. FDA-regulated products: FDA labelling requirements."],
          ["Canada", "Bilingual (English and French) labelling required for consumer goods. Include country of origin. Inflammable liquids require warnings."],
          ["Australia", "Strict biosecurity declaration required for wood/straw packaging. All items must be free of soil/seeds."],
        ]}
      />

      <h2>11. Cargo Insurance for Commercial Shipments</h2>
      <p>International commercial cargo is exposed to various risks during transit — maritime accidents, cargo damage due to rough weather, theft, handling mishaps at ports, and shipping delays. Relying solely on the carrier's standard liability is a mistake, as carriers' legal liability is heavily limited by international conventions (such as the Hague-Visby Rules for sea freight or Montreal Convention for air freight).</p>
      <p>Every commercial exporter should secure adequate marine cargo insurance. The standard coverage used is:</p>
      <CheckList
        items={[
          "Institute Cargo Clauses (A) — This is the most comprehensive, 'All-Risks' coverage. It covers almost all forms of physical loss or damage, including general average, salvage, theft, water ingress, and cargo handling damage.",
          "Institute Cargo Clauses (B) & (C) — These are more restrictive, lower-premium options covering specific named perils (like sinking, burning, collision) but excluding theft or rain damage. Unsuitable for valuable commercial cargo.",
          "General Average — A critical maritime law concept where all cargo owners share the cost of saving the vessel in an emergency. If your cargo is uninsured, you must pay a cash deposit to release your goods, even if they were not damaged.",
        ]}
      />
      <InfoBox variant="save">
        <strong className="text-foreground">💰 Money Saver:</strong> Cargo insurance typically costs between 0.1% and 0.3% of the declared CIF value of the shipment (e.g., USD 100 to 300 for a USD 100,000 shipment). Given the peace of mind and protection against General Average claims, skipping cargo insurance is one of the worst savings an exporter can make.
      </InfoBox>

      <h2>12. Common Mistakes Pakistani Exporters Make — And How to Avoid Them</h2>
      <p>Over the years, we have seen several common pitfalls that delay shipments, cause financial losses, or damage relationships with international buyers. Here is how to avoid them:</p>
      <NumberedList
        items={[
          "Under-valuing or Misdeclaring Goods: Deliberately stating a lower value on the commercial invoice to reduce destination duties is illegal. Customs authorities use advanced pricing databases, and discrepancies trigger inspections, penalties, and cargo seizure.",
          "Incorrect HS Code Selection: Self-classifying goods without expert verification often leads to using incorrect codes. This can cause you to miss out on export rebates (DLTL/rebates) or subject your buyer to higher duties.",
          "Failing to Meet L/C Shipment Deadlines: A Letter of Credit has strict dates for loading/shipment. Loading even one day after the 'latest shipment date' voids the L/C protection, giving the buyer the legal right to reject the goods.",
          "Using Non-ISPM-15 Certified Wood: Packing cargo on untreated wooden pallets triggers immediate biosecurity holds in the UK, EU, USA, and Australia. The shipment will be quarantined, and you will face massive fees for fumigation or re-packing.",
          "Not Verifying Destination Regulatory Standards: Shipping goods like surgical instruments, food products, or cosmetics without checking destination compliance (CE, FDA, biosecurity) leads to customs rejection at the destination port.",
        ]}
      />
      <InfoBox variant="warn">
        <strong className="text-foreground">⚠️ Watch Out:</strong> A minor document discrepancy — such as a single letter difference between the company name on the Bill of Lading and the Letter of Credit — is the most common reason bank payments are delayed or blocked. Double-check all documents before submittal.
      </InfoBox>

      <h2>13. Frequently Asked Questions</h2>
      <p>Exporting commercial cargo is a detailed process, but with the right preparation and a specialized logistics partner, it can be highly efficient and secure. Best Int'l Movers handles the complete export process from Pakistan to all major global destinations. For assistance, contact us at 0300-9130211 or WhatsApp us today.</p>
    </>
  );
}
