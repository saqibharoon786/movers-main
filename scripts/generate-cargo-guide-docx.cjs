const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, LevelFormat, BorderStyle, Table, TableRow,
  TableCell, WidthType, ShadingType
} = require('docx');
const fs = require('fs');

const border  = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: t, bold: true, size: 36, font: "Arial" })] });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: t, bold: true, size: 28, font: "Arial", color: "1a5276" })] });
const h3 = t => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: t, bold: true, size: 24, font: "Arial", color: "2e86c1" })] });
const h4 = t => new Paragraph({ heading: HeadingLevel.HEADING_4, children: [new TextRun({ text: t, bold: true, size: 22, font: "Arial", color: "117a65" })] });
const p       = t => new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: t, size: 22, font: "Arial" })] });
const bullet  = t => new Paragraph({ numbering: { reference: "bullets",  level: 0 }, children: [new TextRun({ text: t, size: 22, font: "Arial" })] });
const numbered= t => new Paragraph({ numbering: { reference: "numbers",  level: 0 }, children: [new TextRun({ text: t, size: 22, font: "Arial" })] });
const space   = () => new Paragraph({ children: [new TextRun("")] });
const divider = () => new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "1a5276", space: 1 } }, spacing: { after: 200 }, children: [new TextRun("")] });
const redLabel   = t => new Paragraph({ spacing: { after: 60 },  children: [new TextRun({ text: t, bold: true, size: 22, font: "Arial", color: "c0392b" })] });
const linkLine   = t => new Paragraph({ spacing: { after: 60 },  children: [new TextRun({ text: t, size: 21, font: "Courier New", color: "1a5276", underline: {} })] });
const italicNote = t => new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: t, size: 21, font: "Arial", color: "555555", italics: true })] });

const callout = (emoji, label, fill, borderColor, t) => new Paragraph({
  spacing: { before: 120, after: 200 },
  border: {
    top:    { style: BorderStyle.SINGLE, size: 2,  color: "CCCCCC" },
    bottom: { style: BorderStyle.SINGLE, size: 2,  color: "CCCCCC" },
    left:   { style: BorderStyle.SINGLE, size: 18, color: borderColor },
    right:  { style: BorderStyle.SINGLE, size: 2,  color: "CCCCCC" },
  },
  shading: { fill, type: ShadingType.CLEAR },
  indent: { left: 240, right: 240 },
  children: [new TextRun({ text: `${emoji} ${label} ${t}`, size: 22, font: "Arial", color: "333333" })]
});
const proTip   = t => callout("💡", "Pro Tip:",      "eaf4fb", "2e86c1", t);
const warning  = t => callout("⚠️",  "Watch Out:",    "fdedec", "c0392b", t);
const saveTip  = t => callout("💰", "Money Saver:",  "eafaf1", "27ae60", t);
const important= t => callout("📌", "Important:",    "fef9e7", "e67e22", t);

const svcBox = (heading, body, anchor, url) => [
  new Paragraph({
    spacing: { before: 160, after: 0 },
    border: { top: { style: BorderStyle.SINGLE, size: 2, color: "1a5276" }, left: { style: BorderStyle.SINGLE, size: 20, color: "1a5276" }, right: { style: BorderStyle.SINGLE, size: 2, color: "1a5276" } },
    shading: { fill: "eaf4fb", type: ShadingType.CLEAR }, indent: { left: 240, right: 240 },
    children: [new TextRun({ text: "🚢 " + heading, bold: true, size: 22, font: "Arial", color: "1a5276" })]
  }),
  new Paragraph({
    spacing: { after: 0 },
    border: { left: { style: BorderStyle.SINGLE, size: 20, color: "1a5276" }, right: { style: BorderStyle.SINGLE, size: 2, color: "1a5276" } },
    shading: { fill: "eaf4fb", type: ShadingType.CLEAR }, indent: { left: 240, right: 240 },
    children: [new TextRun({ text: body, size: 22, font: "Arial", color: "333333" })]
  }),
  new Paragraph({
    spacing: { after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "1a5276" }, left: { style: BorderStyle.SINGLE, size: 20, color: "1a5276" }, right: { style: BorderStyle.SINGLE, size: 2, color: "1a5276" } },
    shading: { fill: "eaf4fb", type: ShadingType.CLEAR }, indent: { left: 240, right: 240 },
    children: [new TextRun({ text: `👉 Anchor: "${anchor}" — URL: ${url}`, size: 21, font: "Arial", color: "c0392b", italics: true, underline: {} })]
  }),
];

const twoCol = (headers, rows) => new Table({
  width: { size: 9360, type: WidthType.DXA }, columnWidths: [4680, 4680],
  rows: [
    new TableRow({ children: headers.map(h => new TableCell({ borders, shading: { fill: "1a5276", type: ShadingType.CLEAR }, width: { size: 4680, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: "ffffff", size: 22, font: "Arial" })] })] })) }),
    ...rows.map((row, i) => new TableRow({ children: row.map(cell => new TableCell({ borders, shading: { fill: i % 2 === 0 ? "eaf4fb" : "ffffff", type: ShadingType.CLEAR }, width: { size: 4680, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: cell, size: 22, font: "Arial" })] })] })) }))
  ]
});

const threeCol = (headers, rows) => new Table({
  width: { size: 9360, type: WidthType.DXA }, columnWidths: [3120, 3120, 3120],
  rows: [
    new TableRow({ children: headers.map(h => new TableCell({ borders, shading: { fill: "1a5276", type: ShadingType.CLEAR }, width: { size: 3120, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: "ffffff", size: 22, font: "Arial" })] })] })) }),
    ...rows.map((row, i) => new TableRow({ children: row.map(cell => new TableCell({ borders, shading: { fill: i % 2 === 0 ? "eaf4fb" : "ffffff", type: ShadingType.CLEAR }, width: { size: 3120, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: cell, size: 22, font: "Arial" })] })] })) }))
  ]
});

// ─────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      { reference: "bullets",  levels: [{ level: 0, format: LevelFormat.BULLET,  text: "•",  alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers",  levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 36, bold: true, font: "Arial", color: "1a1a1a" }, paragraph: { spacing: { before: 300, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 28, bold: true, font: "Arial", color: "1a5276" }, paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, font: "Arial", color: "2e86c1" }, paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
      { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 22, bold: true, font: "Arial", color: "117a65" }, paragraph: { spacing: { before: 160, after: 100 }, outlineLevel: 3 } },
    ]
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: [

      // ── META BLOCK ──
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "📌 BLOG POST SEO DETAILS", bold: true, size: 20, font: "Arial", color: "777777" })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "URL Slug: /blog/commercial-cargo-guide-pakistan/", size: 20, font: "Courier New", color: "c0392b" })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Primary Keyword: commercial cargo from pakistan", size: 20, font: "Arial", color: "777777" })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Secondary Keywords: commercial cargo services pakistan, how to ship commercial goods from pakistan, export cargo pakistan, international commercial shipping pakistan, commercial freight pakistan to uk, commercial cargo pakistan to canada, commercial cargo pakistan to australia, business cargo pakistan, exporting goods from pakistan guide, commercial shipping guide pakistan, freight forwarding commercial cargo pakistan, export documentation pakistan guide, hs code pakistan export, customs clearance commercial cargo pakistan", size: 20, font: "Arial", color: "777777" })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Content Type: Long-Form SEO Blog / Ultimate Guide  |  Word Count: 2500+  |  Intent: Informational + Commercial", size: 20, font: "Arial", color: "777777" })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Target Audience: Pakistani businesses, exporters, manufacturers, SMEs shipping commercial goods internationally", size: 20, font: "Arial", color: "777777" })] }),
      divider(),

      h2("🔍 Meta Title"),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Commercial Cargo from Pakistan — The Complete Export Shipping Guide 2025 | Best Int'l Movers", size: 22, font: "Courier New", color: "c0392b" })] }),
      space(),
      h2("🔍 Meta Description"),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Complete guide to shipping commercial cargo from Pakistan internationally. Covers export documentation, HS codes, customs clearance, freight options (air & sea), Incoterms, duties, and how to choose the right freight forwarder. For Pakistani exporters, manufacturers & businesses.", size: 22, font: "Courier New", color: "c0392b" })] }),
      divider(),

      // ══════════════════════════════════════
      //  BLOG STARTS
      // ══════════════════════════════════════
      h1("Commercial Cargo from Pakistan — The Complete Export Shipping Guide for Pakistani Businesses (2025)"),

      new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "By Best Int'l Movers  |  Updated: June 2025  |  Reading Time: 16 Minutes", size: 20, font: "Arial", color: "888888", italics: true })] }),
      space(),

      p("Pakistan is a major exporting nation — textiles from Faisalabad, leather goods from Karachi and Lahore, sports equipment from Sialkot, surgical instruments from Gujranwala, rice and food products from Punjab, handicrafts and carpets from across the country. Pakistani businesses export to buyers in the UK, USA, Canada, Australia, UAE, Germany, Italy, and dozens of other markets around the world."),
      p("But for many Pakistani businesses — especially small and medium enterprises (SMEs) new to international trade — the logistics of shipping commercial cargo internationally can be confusing, expensive if done incorrectly, and full of regulatory complexity that can delay shipments and damage buyer relationships. Export documentation, HS codes, Letters of Credit, Incoterms, customs duties at destination, freight forwarder selection — each element requires knowledge and expertise."),
      p("This guide is our complete reference for Pakistani businesses shipping commercial cargo internationally. Whether you are a Sialkot sports goods manufacturer exporting to the UK for the first time, a Faisalabad textile producer shipping to your regular Canadian buyer, or a Karachi leather goods exporter expanding to Australian retail — this guide covers every aspect of commercial cargo shipping from Pakistan, step by step."),

      space(),
      h2("Table of Contents"),
      bullet("Pakistan's Key Export Industries & Their Shipping Requirements"),
      bullet("Air Freight vs Sea Freight for Commercial Cargo — Making the Right Choice"),
      bullet("Essential Export Documentation — What Every Pakistani Exporter Needs"),
      bullet("HS Codes — The Foundation of International Trade"),
      bullet("Incoterms — Who Pays What, Who Is Responsible for What"),
      bullet("Pakistan Customs Export Procedures — Step by Step"),
      bullet("Destination Customs — Import Duties Your Buyer Will Face"),
      bullet("Letters of Credit & Payment Terms in International Trade"),
      bullet("Choosing the Right Freight Forwarder in Pakistan"),
      bullet("Commercial Cargo Packaging & Labelling Requirements"),
      bullet("Cargo Insurance for Commercial Shipments"),
      bullet("Common Mistakes Pakistani Exporters Make — And How to Avoid Them"),
      bullet("Frequently Asked Questions"),
      space(),
      divider(),

      // ── SECTION 1 ──
      h2("1. Pakistan's Key Export Industries & Their Shipping Requirements"),
      p("Pakistan's export sector is diverse. Different industries have very different shipping requirements, regulations, and documentation needs. Here is an overview of Pakistan's major export sectors and what their international shipping involves:"),

      space(),
      threeCol(
        ["Export Sector", "Main Shipping Points", "Key Shipping Considerations"],
        [
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
        ]
      ),
      space(),
      proTip("Before shipping to any new country for the first time, research the destination country's specific import requirements for your product category. The UK, USA, Canada, Australia, and EU all have different standards, labelling requirements, and testing certifications that Pakistani exporters must comply with. Getting this wrong delays your shipment at destination and damages your buyer relationship."),

      space(),
      divider(),

      // ── SECTION 2 ──
      h2("2. Air Freight vs Sea Freight for Commercial Cargo — The Right Choice"),
      p("The choice between air freight and sea freight for your commercial cargo depends on several factors: urgency, weight, volume, value, and your buyer's requirements. Here is a comprehensive comparison:"),

      space(),
      twoCol(
        ["Factor", "Air Freight vs Sea Freight for Commercial Cargo"],
        [
          ["Speed", "Air: 3–10 days  |  Sea: 15–45 days depending on destination"],
          ["Cost per kg", "Air: PKR 1,200–4,000/kg  |  Sea: PKR 20–100/kg equivalent"],
          ["Best for weight", "Air: Under 500 kg  |  Sea: 500 kg to full containers"],
          ["Best for volume", "Air: Under 5 CBM  |  Sea: Any volume"],
          ["High-value goods", "Air preferred — lower insurance premium, faster payment cycles"],
          ["Bulk commodities", "Sea always — textiles, rice, furniture, machinery"],
          ["Time-sensitive orders", "Air — fashion seasons, sample shipments, urgent restocking"],
          ["Regular bulk orders", "Sea — most cost-effective for established trade routes"],
          ["Letters of Credit", "Both work — L/C documents can be airway bill or B/L based"],
          ["Insurance cost", "Air: Slightly lower % of value  |  Sea: Standard marine cargo rates"],
          ["Damage risk", "Air: Lower (fewer handlings)  |  Sea: Low with proper packing"],
          ["Carbon footprint", "Air: Much higher  |  Sea: Lower — some buyers require sea for ESG"],
        ]
      ),
      space(),
      h3("When Pakistani Exporters Typically Choose Air"),
      bullet("Surgical instruments and medical devices — time-sensitive, high-value, low-weight"),
      bullet("Fashion garments for seasonal orders — spring/summer or autumn/winter delivery deadlines"),
      bullet("Sample shipments — product samples for buyer approval before bulk order"),
      bullet("Emergency restocking — buyer has run out of stock and needs urgent replenishment"),
      bullet("High-value leather goods — faster payment cycle justifies air freight premium"),
      bullet("Pharmaceutical exports — temperature-sensitive or time-sensitive products"),
      bullet("Small commercial orders under 100 kg where sea freight minimum charges make sea uneconomical"),

      space(),
      h3("When Pakistani Exporters Choose Sea Freight"),
      bullet("Textiles and garments in bulk — cotton fabric, denim, knitwear — always sea"),
      bullet("Rice and food products — bulk sea freight is the only practical option"),
      bullet("Sports goods in commercial quantities — footballs, protective equipment, bats"),
      bullet("Carpets and rugs — large, heavy, unsuited to air freight"),
      bullet("Engineering goods and machinery — sea is the only option for heavy equipment"),
      bullet("Any shipment over 300–500 kg where sea freight saves 80–90% on freight cost"),
      bullet("Containerised regular orders where buyer has established sea freight payment terms"),
      saveTip("For most Pakistani exporters shipping to established buyers, the hybrid approach works best: air freight for samples, urgent top-up orders, and high-value small consignments; sea freight for regular bulk orders. This optimises cost while maintaining the responsiveness your buyers expect."),

      space(),
      divider(),

      // ── SECTION 3 ──
      h2("3. Essential Export Documentation — What Every Pakistani Exporter Needs"),
      p("Incorrect or incomplete export documentation is the most common cause of cargo delays, customs holds, and payment disputes in Pakistani international trade. Here is a complete guide to every document you may need:"),

      space(),
      h3("Core Documents — Required for Every Commercial Shipment"),

      space(),
      h4("1. Commercial Invoice"),
      p("The commercial invoice is the most important document in any international shipment. It describes the goods, states the price, identifies buyer and seller, and forms the basis for customs assessment at the destination."),
      bullet("Must include: Exporter details (name, address, NTN), importer details, invoice number and date, detailed description of goods, quantity, unit price, total value, currency, country of origin, HS code, and Incoterms"),
      bullet("Value: Must state the ACTUAL transaction value — under-invoicing to reduce buyer's import duty is illegal and a frequent cause of goods being seized"),
      bullet("Language: English is universally acceptable — some countries require translation"),
      bullet("Copies: Typically 3 originals required for L/C transactions"),

      space(),
      h4("2. Packing List"),
      p("The packing list details exactly what is in each box, carton, or container — dimensions, weight, number of pieces, marks, and numbers. It is checked by customs officers to verify the commercial invoice."),
      bullet("Must match: Every item on the commercial invoice must appear on the packing list"),
      bullet("Include: Gross weight, net weight, dimensions of each carton, total carton count"),
      bullet("Marks and numbers: Shipping marks on outer cartons must match the packing list"),

      space(),
      h4("3. Bill of Lading (B/L) — Sea Freight"),
      p("The Bill of Lading is the contract between the shipper and the ocean carrier. It is also the title document to the goods — whoever holds the original B/L has legal ownership. Critical for Letter of Credit transactions."),
      bullet("Types: Original B/L (negotiable, for L/C), Surrender B/L (non-negotiable, faster release), Seaway B/L (non-negotiable)"),
      bullet("Details: Vessel name, port of loading, port of discharge, container number, seal number, freight terms"),
      bullet("Copies: For L/C transactions — usually 3 originals required"),
      bullet("Telex/Surrender: For trusted buyer relationships without L/C — simplifies release"),

      space(),
      h4("4. Airway Bill (AWB) — Air Freight"),
      p("The Air Waybill is the air freight equivalent of the Bill of Lading. Unlike an ocean B/L, an AWB is a non-negotiable transport document — it cannot be used as a title document for Letter of Credit purposes (use an Air Transport Document instead for L/C)."),
      bullet("Master AWB (MAWB): Issued by the airline"),
      bullet("House AWB (HAWB): Issued by the freight forwarder — this is what the exporter receives"),
      bullet("Tracking: AWB number used for real-time shipment tracking"),

      space(),
      h4("5. Certificate of Origin"),
      p("The Certificate of Origin (CoO) certifies that goods were manufactured in Pakistan. It is required by most destination countries for customs assessment and may qualify your goods for preferential tariff rates."),
      bullet("Where to obtain in Pakistan: TDAP (Trade Development Authority of Pakistan) or Chamber of Commerce and Industry"),
      bullet("Types: General CoO, GSP Form A (for preferential tariff with EU, UK, Canada), Certificate of Pakistani Origin"),
      bullet("GSP/DCTS for UK: Pakistan benefits from UK's Developing Countries Trading Scheme (DCTS) — many Pakistani exports enter UK at 0% duty with correct Form A"),
      bullet("GSP for EU: Pakistan benefits from EU's GSP+ scheme — significant duty reduction"),

      space(),
      h3("Additional Documents — Required for Specific Goods"),
      twoCol(
        ["Document", "Required For"],
        [
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
        ]
      ),
      important("Document requirements vary by destination country and product type. A surgical instrument export to the USA requires different certifications than the same instrument exported to the UAE. Always verify destination-specific requirements before preparing your export shipment — incorrect documentation causes holds, fines, and rejected shipments."),

      space(),
      divider(),

      // ── SECTION 4 ──
      h2("4. HS Codes — The Foundation of International Trade"),
      p("The Harmonized System (HS) code is a 6-digit international product classification code that determines customs duty rates, import restrictions, and statistical reporting in every country. Getting the HS code right is one of the most important — and most often misunderstood — aspects of commercial cargo shipping."),

      space(),
      h3("How HS Codes Work"),
      bullet("First 6 digits: International standard — same globally. Pakistan uses these for export declaration."),
      bullet("Digits 7–8: Country-specific — destination country adds these for their tariff system"),
      bullet("Digits 9–10: Further country-specific sub-classification"),
      bullet("Example: Cotton T-shirts = HS 6109.10 (internationally) — UK adds digits for DCTS duty assessment"),
      bullet("Pakistan FBR: Uses Pakistan Customs Tariff based on HS codes for export declaration"),

      space(),
      h3("Key HS Codes for Pakistan's Major Export Categories"),
      threeCol(
        ["Product Category", "HS Code Range", "Common Export Destination Duty Notes"],
        [
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
        ]
      ),
      space(),
      h3("Why the Right HS Code Matters"),
      p("Using the wrong HS code has serious consequences:"),
      bullet("Under-duty: Wrong code gives buyer wrong duty rate — they may request credit or refuse shipment"),
      bullet("Over-duty: Wrong code makes your goods artificially expensive at destination — loses buyer"),
      bullet("Prohibited: Some HS codes trigger import restrictions or licensing requirements"),
      bullet("Preferential tariff loss: Wrong code means buyer loses DCTS/GSP preferential duty benefit — your price competitiveness suffers"),
      bullet("Customs penalties: Deliberate misclassification is a customs offence — fines and seizure risk"),
      warning("HS code classification for textiles, garments, and composite products can be complex. A 'cotton' shirt with 5% synthetic content may have a completely different HS code than a 100% cotton shirt — with different duty rates at destination. Our freight forwarding team classifies your goods correctly before every shipment. Wrong classification costs more than our service fee."),

      space(),
      divider(),

      // ── SECTION 5 ──
      h2("5. Incoterms — Who Pays What, Who Is Responsible for What"),
      p("Incoterms (International Commercial Terms) are standardised trade terms published by the International Chamber of Commerce (ICC) that define the responsibilities of buyer and seller in an international transaction — who pays for freight, who handles customs, and who bears the risk of loss at each stage of the journey."),

      space(),
      h3("The Most Common Incoterms for Pakistani Exporters"),
      twoCol(
        ["Incoterm", "What It Means for the Pakistani Exporter"],
        [
          ["EXW — Ex Works", "You make goods available at your factory. Buyer arranges everything — export customs, freight, import customs. Lowest responsibility for you, lowest price for buyer, but risky if buyer uses inexperienced agents."],
          ["FOB — Free On Board", "You are responsible until goods are loaded onto the vessel at Karachi Port. Buyer pays ocean freight, insurance, and destination charges. Most common Incoterm for Pakistani sea freight exports."],
          ["CIF — Cost, Insurance, Freight", "You pay ocean freight and insurance to destination port. Buyer handles import customs and last-mile. You control the freight booking — good for protecting your margin."],
          ["CFR — Cost and Freight", "You pay ocean freight to destination port but buyer arranges insurance. Similar to CIF but you do not control insurance."],
          ["CPT — Carriage Paid To", "You pay freight to agreed destination point — includes multimodal. Buyer handles import customs and final delivery."],
          ["DDP — Delivered Duty Paid", "You are responsible for EVERYTHING — export, freight, destination import customs, duty payment, and final delivery. Highest responsibility but gives buyer zero hassle. Premium pricing justified."],
          ["DAP — Delivered At Place", "You are responsible until goods are at buyer's named location ready for unloading. Buyer handles import duty and unloading. Good middle ground for experienced exporters."],
          ["FCA — Free Carrier", "You are responsible until goods are handed to the carrier nominated by buyer. Good for air freight or multimodal shipments."],
        ]
      ),
      space(),
      p("For most Pakistani exporters, FOB (Free On Board) is the most common starting Incoterm because it is well understood, keeps export responsibilities clear, and allows buyers to use their preferred shipping arrangements. As your buyer relationships mature, CIF or even DDP can significantly improve your profitability by giving you control over the freight booking."),
      proTip("Pakistani exporters who shift from FOB to CIF or DDP terms with trusted buyers can earn an additional 5–15% margin by controlling the freight booking — using competitive rates from Best Int'l Movers rather than whatever the buyer's agent charges. For a USD 100,000 order, this can be USD 5,000–15,000 in additional margin per shipment."),

      space(),

      // ── INTERNAL LINK 1 ──
      ...svcBox(
        "International Freight Forwarding — Commercial Cargo Pakistan",
        "Best Int'l Movers provides complete commercial freight forwarding services from Pakistan to all major export markets. Air freight, sea freight FCL/LCL, full export documentation including HS code classification, Certificate of Origin, customs clearance, and L/C compliant documentation. Serving exporters in Karachi, Lahore, Faisalabad, Sialkot, Gujranwala, and all Pakistani cities.",
        "international freight forwarding services pakistan",
        "bestintimovers.com/services/international-freight-forwarding/"
      ),

      divider(),

      // ── SECTION 6 ──
      h2("6. Pakistan Customs Export Procedures — Step by Step"),
      p("Exporting commercial cargo from Pakistan involves a specific sequence of steps with the Federal Board of Revenue (FBR) and Pakistan Customs. Here is the complete export process:"),

      space(),
      numbered("Obtain NTN (National Tax Number) — All exporters must be registered with FBR. Apply at any Regional Tax Office or online at iris.fbr.gov.pk."),
      numbered("Register as an Exporter — Register with FBR Export Module and get your Exporter Registration Number."),
      numbered("Prepare all export documents — Commercial invoice, packing list, Certificate of Origin, and any product-specific certificates."),
      numbered("File Goods Declaration (GD) — Submit the Pakistan Customs export GD through the WeBOC system (Web-Based One Customs). This is done by your freight forwarder or Customs Clearing Agent (CCA)."),
      numbered("Physical Examination (if selected) — Pakistan Customs may select your shipment for physical examination. Our team coordinates this."),
      numbered("Customs Seal — Once cleared, customs seals the container. Seal number is recorded on all documents."),
      numbered("Cargo Receipt at Port — Container is moved to Karachi Port or Port Qasim. Port receipt (EIR) issued."),
      numbered("Vessel Loading — Container is loaded on the nominated vessel. Bill of Lading issued after loading."),
      numbered("Export Realisation — Payment received from buyer must be repatriated to Pakistan within 180 days (as per SBP regulations)."),
      numbered("Sales Tax Refund — Exporters are entitled to sales tax refund on inputs. File refund claim with FBR after shipment."),

      space(),
      h3("WeBOC — Pakistan's Online Customs System"),
      p("WeBOC (Web-Based One Customs) is Pakistan's electronic customs management system. All export Goods Declarations are filed electronically through WeBOC. As your freight forwarder, Best Int'l Movers' licensed Customs Clearing Agent (CCA) files your GD, manages the electronic clearance, and handles any customs examination or queries on your behalf."),
      bullet("WeBOC Green Channel: Low-risk shipments — automatic clearance, no physical examination"),
      bullet("WeBOC Yellow Channel: Document verification required — physical examination rare"),
      bullet("WeBOC Red Channel: Full physical examination required — adds 1–3 days"),
      bullet("Your shipment's channel is determined by FBR risk management system — we cannot control this"),

      space(),
      h3("State Bank of Pakistan (SBP) Export Regulations"),
      bullet("All export proceeds must be received in foreign currency through authorised banking channels"),
      bullet("Export documents must be submitted to your bank within 14 days of shipment"),
      bullet("Proceeds must be repatriated within 180 days of shipment date"),
      bullet("Advance payment from foreign buyers: Allowed — SBP Circular 25 governs conditions"),
      bullet("Export rebate and duty drawback: FBR provides rebate on customs duties paid on inputs used in exports"),

      space(),
      divider(),

      // ── SECTION 7 ──
      h2("7. Destination Customs — Import Duties Your Buyer Will Face"),
      p("Understanding what import duty and taxes your buyer will pay at destination is critical for your price competitiveness. Higher destination duties make your goods more expensive for the buyer — even if your ex-factory price is competitive."),

      space(),
      h3("UK — DCTS (Developing Countries Trading Scheme)"),
      p("Pakistan benefits from the UK's DCTS — one of the most valuable trade preferences available. Under DCTS Enhanced Preferences (Pakistan's category), most Pakistani goods enter the UK at significantly reduced or zero duty:"),
      bullet("Garments and textiles: 0% under DCTS (standard rate 9–12%)"),
      bullet("Footwear: 0–3.5% under DCTS (standard rate 8–20%)"),
      bullet("Carpets: 0% under DCTS (standard rate 4.7–12%)"),
      bullet("Sports goods: 0% (MFN rate already 0% for most categories)"),
      bullet("Surgical instruments: 0% (MFN rate already 0%)"),
      bullet("Rice (milled): GBP 101/tonne — no DCTS preference for rice"),
      bullet("Certificate of Origin Form A required to claim DCTS preferences"),
      proTip("The UK's DCTS gives Pakistani exporters a significant competitive advantage over suppliers from countries without preferential access. A 9% duty saving on garments versus a competitor from a non-DCTS country is often the difference between winning and losing a UK buyer. Always include a Form A Certificate of Origin — without it, your buyer pays full MFN duty."),

      space(),
      h3("EU — GSP+ (Generalised System of Preferences)"),
      p("Pakistan benefits from the EU's GSP+ scheme — one of the most comprehensive preferential trade arrangements globally:"),
      bullet("Garments: 0–12% → 0% under GSP+ (standard EU rate 12%)"),
      bullet("Cotton fabrics: 0–8% → 0% under GSP+"),
      bullet("Leather goods: 2.4–3.7% → 0% under GSP+"),
      bullet("Carpets: 1.7% → 0% under GSP+"),
      bullet("Condition: Pakistan must comply with 27 international conventions on human rights, labour rights, environment, and good governance"),
      bullet("REX (Registered Exporter) system: Exporters must register with FBR REX to issue statements on origin"),

      space(),
      h3("USA — No Preferential Trade Agreement with Pakistan"),
      p("Pakistan does NOT have a Free Trade Agreement with the USA. Pakistani goods face US Most Favoured Nation (MFN) tariff rates — typically higher than EU or UK:"),
      bullet("Garments: 10–32% MFN duty"),
      bullet("Footwear: 8–20% MFN duty"),
      bullet("Sports goods (footballs): Free — 0% duty"),
      bullet("Surgical instruments: Free–2.5%"),
      bullet("Basmati rice: Specific duty applies"),
      bullet("Section 301 tariffs: Some Pakistani goods may face additional Section 301 tariffs on top of MFN"),
      bullet("USA buyers are accustomed to higher import duty costs — factor this into your pricing"),

      space(),
      h3("Canada — CPTPP & MFN Rates"),
      p("Canada and Pakistan have no bilateral FTA but Canada's MFN rates are generally moderate:"),
      bullet("Garments: 17–18% MFN (no preferential rate — significant cost for buyer)"),
      bullet("Carpets: 0% — good opportunity for Pakistani carpet exporters"),
      bullet("Sports goods: 0% — excellent for Sialkot exports"),
      bullet("Surgical instruments: 0% — strong competitive position"),
      bullet("Food items: Varies — CFIA compliance and phytosanitary requirements"),

      space(),
      h3("Australia — Standard Tariff Rates"),
      bullet("Most manufactured goods: 0–5% — generally favourable"),
      bullet("Garments and footwear: 0–10%"),
      bullet("Biosecurity: Strict import conditions (DAFF) — see Australian biosecurity requirements"),
      bullet("No significant preferential arrangement with Pakistan currently"),

      space(),
      divider(),

      // ── SECTION 8 ──
      h2("8. Letters of Credit & Payment Terms in International Trade"),
      p("For Pakistani exporters, especially those exporting to new buyers or in large quantities, the method of payment is as important as the freight logistics. Understanding Letters of Credit (L/C) is essential for any Pakistani exporter doing significant international business."),

      space(),
      h3("The Main Payment Terms in International Trade"),
      twoCol(
        ["Payment Term", "How It Works & Risk Level for Pakistani Exporter"],
        [
          ["Advance Payment (T/T)", "Buyer pays before shipment. Zero risk for exporter. Best for small orders or trusted buyers. Difficult to get from new buyers."],
          ["Letter of Credit (L/C)", "Bank guarantees payment when compliant documents presented. Safest for large orders. Bank verifies all shipping documents match L/C terms."],
          ["Documents Against Payment (D/P)", "Documents released to buyer only after bank collects payment. Moderate risk — buyer could refuse to pay and abandon goods."],
          ["Documents Against Acceptance (D/A)", "Documents released against buyer's promise to pay later. Higher risk — relies on buyer creditworthiness."],
          ["Open Account (30/60/90 days)", "Goods shipped, invoice sent, payment due later. Highest risk for exporter. Only for very trusted, long-standing buyers."],
          ["Partial Advance + Balance on Shipment", "30–50% advance, balance when goods ready. Good compromise for established relationships."],
        ]
      ),
      space(),
      h3("Letters of Credit — Key Points for Pakistani Exporters"),
      p("An irrevocable Documentary Letter of Credit (L/C) issued by the buyer's bank and confirmed by a Pakistani bank is the gold standard of payment security for Pakistani exporters. Here is what to understand:"),
      bullet("L/C terms: All shipping documents (invoice, B/L, packing list, CoO, and any other specified documents) must exactly match the L/C terms. Even minor discrepancies can result in non-payment."),
      bullet("Shipment deadline: L/C specifies latest shipment date — missing it voids the L/C"),
      bullet("Expiry date: L/C has an expiry date for document presentation"),
      bullet("Confirmation: Get your Pakistani bank to 'confirm' the L/C — this adds your bank's payment guarantee alongside the issuing bank"),
      bullet("Discrepancies: If your documents have discrepancies, the buyer can choose to waive them or refuse payment — negotiate discrepancy waiver fees carefully"),
      bullet("Transferable L/C: Allows a Pakistani exporter/middleman to transfer L/C benefit to a Pakistani manufacturer"),
      warning("The number one cause of L/C non-payment for Pakistani exporters is document discrepancy — when the Bill of Lading description does not exactly match the L/C description, or the shipment date is one day late. Our freight forwarding team reviews all L/C terms before preparing documents to ensure 100% compliance. We have a zero-discrepancy record on L/C shipments we manage."),

      space(),
      divider(),

      // ── SECTION 9 ──
      h2("9. Choosing the Right Freight Forwarder in Pakistan"),
      p("Your freight forwarder is your most important partner in international commercial cargo. A good freight forwarder manages the entire logistics chain — documentation, customs, booking, tracking, and problem resolution. A bad one causes delays, documentation errors, and buyer relationship damage. Here is how to evaluate any freight forwarder in Pakistan:"),

      space(),
      h3("What to Look for in a Pakistani Freight Forwarder"),
      twoCol(
        ["Evaluation Criteria", "What to Ask / Check"],
        [
          ["Licencing & Registration", "Licensed by Pakistan Customs as a Customs Clearing Agent (CCA). Member of PIFFA (Pakistan International Freight Forwarders Association) or FIATA."],
          ["Destination Network", "Ask: 'Do you have your own agent at [destination country] or do you use a third party?' Own network = faster response and accountability."],
          ["Documentation Expertise", "Ask about their experience with your specific product category and destination. Can they classify your HS code correctly?"],
          ["L/C Experience", "Ask: 'Have you handled L/C shipments to [destination]?' L/C documentation errors are costly — only use experienced forwarders for L/C shipments."],
          ["Insurance Services", "Do they offer cargo insurance? Can they arrange marine open cover for regular exporters?"],
          ["Technology & Tracking", "Do they provide online shipment tracking? Can you track via AWB or B/L number? What is their communication response time?"],
          ["References", "Ask for references from exporters in your industry. A forwarder with textile experience may not have medical device expertise."],
          ["Pricing Transparency", "Do they provide all-inclusive quotes? Or do they add surcharges later? Request a written breakdown of every charge."],
          ["Problem Resolution", "Ask: 'What happens if customs holds my shipment at destination?' How do they handle problems?"],
        ]
      ),
      space(),
      h3("Red Flags — Signs of an Unreliable Freight Forwarder"),
      bullet("Cannot provide a written, all-inclusive quote — only gives vague verbal estimates"),
      bullet("Has no PIFFA or FIATA membership"),
      bullet("Cannot name their agent at your destination country"),
      bullet("Provides incorrect HS codes or does not know your product's classification"),
      bullet("Has no experience with L/C documentation for your specific destination"),
      bullet("Gives unrealistically low quotes — low prices mean corners cut somewhere"),
      bullet("Does not respond promptly to WhatsApp/email communications"),
      bullet("Cannot provide references from exporters in your product category"),

      space(),
      divider(),

      // ── SECTION 10 ──
      h2("10. Commercial Cargo Packaging & Labelling Requirements"),
      p("Commercial cargo packaging for international shipment must meet both shipping line/airline requirements and destination country import requirements. Incorrect packaging causes cargo damage, customs delays, and buyer complaints."),

      space(),
      h3("General Packaging Standards for Export"),
      bullet("Export cartons: Double-walled corrugated cartons — single-wall cartons are NOT acceptable for most international buyers or insurers"),
      bullet("Gross weight per carton: Maximum 25 kg for manually handled cartons — heavier requires mechanical handling equipment warning"),
      bullet("Pallet: Many buyers require goods palletised — EUR pallet (80×120 cm) or US pallet (100×120 cm) depending on destination market"),
      bullet("Shrink wrap: Palletised goods must be shrink-wrapped to prevent movement during sea transit"),
      bullet("Waterproofing: Sea freight — all cartons must be protected against moisture. Inner polythene bags for sensitive goods."),
      bullet("Void fill: No movement allowed inside cartons — packing peanuts, foam, or crumpled paper"),

      space(),
      h3("ISPM-15 — Wooden Packaging Heat Treatment"),
      p("This is one of the most frequently overlooked packaging requirements for Pakistani exporters. ISPM-15 (International Standards for Phytosanitary Measures No. 15) requires that all wooden packaging (pallets, crates, dunnage) used in international trade must be heat-treated or fumigated and marked with an approved stamp."),
      bullet("Required by: USA, Canada, EU, UK, Australia, China, and most major importing countries"),
      bullet("Mark: IPPC mark with country code (PK), producer/treatment provider code, treatment method (HT or MB)"),
      bullet("Non-compliant wood: Will be refused entry, fumigated at exporter's cost, or destroyed"),
      bullet("Our service: We arrange ISPM-15 compliant packaging for all export shipments — never use untreated wood"),

      space(),
      h3("Labelling Requirements — Outer Cartons"),
      bullet("Shipping marks: Buyer reference, order number, destination, gross/net weight, dimensions — agreed with buyer before production"),
      bullet("Country of origin: 'Made in Pakistan' must appear on outer cartons for most destinations"),
      bullet("Handling instructions: Fragile, This Way Up, Keep Dry — where applicable"),
      bullet("Dangerous goods: IATA/IMDG dangerous goods labels where required by goods classification"),
      bullet("Carton numbers: Sequential numbering (1/20, 2/20... 20/20) for easy customs checking"),

      space(),
      h3("Destination-Specific Labelling Requirements"),
      twoCol(
        ["Destination", "Special Labelling Requirements"],
        [
          ["UK / EU", "Garments: Fibre composition label, care instructions, size. Footwear: Material components. CE marking where required."],
          ["USA", "All textile products: RN number or WPL number (registered identification number), fibre content, country of origin. FDA-regulated products: FDA labelling requirements."],
          ["Canada", "Bilingual (English and French) labelling required for consumer goods. Include country of origin. Inflammable liquids require warnings."],
          ["Australia", "Strict biosecurity declaration required for wood/straw packaging. All items must be free of soil/seeds."],
        ]
      ),
      space(),
      divider(),

      // ── SECTION 11 ──
      h2("11. Cargo Insurance for Commercial Shipments"),
      p("International commercial cargo is exposed to various risks during transit — maritime accidents, cargo damage due to rough weather, theft, handling mishaps at ports, and shipping delays. Relying solely on the carrier's standard liability is a mistake, as carriers' legal liability is heavily limited by international conventions (such as the Hague-Visby Rules for sea freight or Montreal Convention for air freight)."),
      p("Every commercial exporter should secure adequate marine cargo insurance. The standard coverage used is:"),
      bullet("Institute Cargo Clauses (A) — This is the most comprehensive, 'All-Risks' coverage. It covers almost all forms of physical loss or damage, including general average, salvage, theft, water ingress, and cargo handling damage."),
      bullet("Institute Cargo Clauses (B) & (C) — These are more restrictive, lower-premium options covering specific named perils (like sinking, burning, collision) but excluding theft or rain damage. Unsuitable for valuable commercial cargo."),
      bullet("General Average — A critical maritime law concept where all cargo owners share the cost of saving the vessel in an emergency. If your cargo is uninsured, you must pay a cash deposit to release your goods, even if they were not damaged."),
      saveTip("Cargo insurance typically costs between 0.1% and 0.3% of the declared CIF value of the shipment (e.g., USD 100 to 300 for a USD 100,000 shipment). Given the peace of mind and protection against General Average claims, skipping cargo insurance is one of the worst savings an exporter can make."),
      space(),
      divider(),

      // ── SECTION 12 ──
      h2("12. Common Mistakes Pakistani Exporters Make — And How to Avoid Them"),
      p("Over the years, we have seen several common pitfalls that delay shipments, cause financial losses, or damage relationships with international buyers. Here is how to avoid them:"),
      numbered("Under-valuing or Misdeclaring Goods: Deliberately stating a lower value on the commercial invoice to reduce destination duties is illegal. Customs authorities use advanced pricing databases, and discrepancies trigger inspections, penalties, and cargo seizure."),
      numbered("Incorrect HS Code Selection: Self-classifying goods without expert verification often leads to using incorrect codes. This can cause you to miss out on export rebates (DLTL/rebates) or subject your buyer to higher duties."),
      numbered("Failing to Meet L/C Shipment Deadlines: A Letter of Credit has strict dates for loading/shipment. Loading even one day after the 'latest shipment date' voids the L/C protection, giving the buyer the legal right to reject the goods."),
      numbered("Using Non-ISPM-15 Certified Wood: Packing cargo on untreated wooden pallets triggers immediate biosecurity holds in the UK, EU, USA, and Australia. The shipment will be quarantined, and you will face massive fees for fumigation or re-packing."),
      numbered("Not Verifying Destination Regulatory Standards: Shipping goods like surgical instruments, food products, or cosmetics without checking destination compliance (CE, FDA, biosecurity) leads to customs rejection at the destination port."),
      warning("A minor document discrepancy — such as a single letter difference between the company name on the Bill of Lading and the Letter of Credit — is the most common reason bank payments are delayed or blocked. Double-check all documents before submittal."),
      space(),
      divider(),

      // ── SECTION 13 ──
      h2("13. Frequently Asked Questions"),
      h3("Can I export commercial cargo from Pakistan without WeBOC?"),
      p("No. All commercial exports from Pakistan must be registered and cleared through the WeBOC online customs portal. Individual shippers or non-registered businesses must work with a licensed exporter or customs agent."),
      h3("What is the deadline for SBP export proceed repatriation?"),
      p("Under current State Bank of Pakistan regulations, all commercial export proceeds must be repatriated into the exporter's bank account in Pakistan within 180 days from the date of shipment."),
      h3("How do I qualify for export rebate schemes in Pakistan?"),
      p("Exporters can claim duty drawbacks and tax rebates by submitting export proof (WeBOC GD, Bill of Lading, bank realization certificate) to FBR and their bank, ensuring the correct HS code was declared during filing."),
      h3("What is the difference between air freight and sea freight transit times?"),
      p("Air freight takes 3 to 10 days door-to-door, depending on destination. Sea freight takes 15 to 45 days. Sea freight is generally 80% to 90% cheaper than air freight for heavy commercial shipments."),
      h3("Does the buyer or seller pay customs duties at destination?"),
      p("This is determined by the Incoterms. Under FOB, CIF, or CFR, the buyer pays destination customs duties and taxes. Under DDP (Delivered Duty Paid), the seller is responsible for paying all destination duties and taxes."),
      space(),
      p("Exporting commercial cargo is a detailed process, but with the right preparation and a specialized logistics partner, it can be highly efficient and secure. Best Int'l Movers handles the complete export process from Pakistan to all major global destinations. For assistance, contact us at 0300-9130211 or WhatsApp us today."),
      space()
    ]
  }]
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("commercial-cargo-guide-pakistan.docx", buffer);
  console.log("Document 'commercial-cargo-guide-pakistan.docx' created successfully.");
}).catch((err) => {
  console.error("Error creating document:", err);
});
