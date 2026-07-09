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

function CtaBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border-2 border-orange-500/50 bg-orange-500/5 p-6 my-8 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

export function InternationalLogisticsGuideBody() {
  return (
    <>
      <nav className="not-prose mb-8 p-4 bg-muted/50 rounded-xl">
        <h3 className="font-semibold mb-3 text-sm">Table of Contents</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><a href="#what-is-international-logistics" className="hover:text-foreground">What Is International Logistics?</a></li>
          <li><a href="#why-matters-2026" className="hover:text-foreground">Why International Logistics Matters in 2026</a></li>
          <li><a href="#freight-modes" className="hover:text-foreground">Air Freight vs Sea Freight vs Land Freight</a></li>
          <li><a href="#shipping-process" className="hover:text-foreground">The Complete International Shipping Process</a></li>
          <li><a href="#documentation" className="hover:text-foreground">Essential Documentation for International Shipping</a></li>
          <li><a href="#incoterms" className="hover:text-foreground">Understanding Incoterms</a></li>
          <li><a href="#common-mistakes" className="hover:text-foreground">Common International Logistics Mistakes</a></li>
          <li><a href="#choosing-partner" className="hover:text-foreground">How to Choose the Right Logistics Partner</a></li>
          <li><a href="#cost-factors" className="hover:text-foreground">Cost Factors in International Logistics</a></li>
          <li><a href="#business-relocation" className="hover:text-foreground">International Logistics for Business Relocation</a></li>
          <li><a href="#trends-2026" className="hover:text-foreground">International Logistics Trends to Watch in 2026</a></li>
          <li><a href="#real-world-example" className="hover:text-foreground">Real-World Example: Textile Export to Germany</a></li>
          <li><a href="#faqs" className="hover:text-foreground">Frequently Asked Questions</a></li>
        </ul>
      </nav>

      <p>
        Shipping goods across borders looks simple from the outside — book a carrier, load the cargo, and wait for delivery. In reality, international logistics is one of the most document-heavy, timeline-sensitive, and cost-variable processes a business will ever manage. A single missing certificate, an incorrect HS code, or a poorly chosen freight mode can delay a shipment by weeks and add thousands of rupees in unplanned charges.
      </p>
      <p>
        This international logistics guide breaks down everything a Pakistani business — or an individual managing a major shipment — needs to understand before moving cargo internationally in 2026. We've built this guide from real freight and customs experience handling shipments from Pakistan to over 100 countries, so it reflects how international logistics actually works, not just the textbook version.
      </p>
      <p>
        Whether you're an exporter shipping textiles to Europe, an e-commerce business sending inventory abroad, or a company relocating equipment overseas, this guide will walk you through the full process — freight modes, documentation, customs, costs, and the mistakes that cost businesses the most time and money.
      </p>

      <h2 id="what-is-international-logistics">What Is International Logistics?</h2>
      <p>
        International logistics is the coordinated process of moving goods across national borders — covering freight transportation, customs clearance, documentation, warehousing, and last-mile delivery. Unlike domestic shipping, international logistics involves multiple regulatory jurisdictions, currency considerations, and compliance requirements that vary by destination country.
      </p>
      <p>
        A complete international logistics operation typically includes:
      </p>
      <CheckList
        items={[
          "Freight booking and carrier coordination (air, sea, or land)",
          "Export documentation and compliance in the origin country",
          "Customs clearance at both origin and destination",
          "Import duty and tax calculation",
          "Warehousing or staging, if required",
          "Final delivery to the destination address",
        ]}
      />
      <p>
        Understanding each of these components — and how they connect — is the difference between a smooth shipment and a cargo that sits stuck at customs for weeks.
      </p>

      <h2 id="why-matters-2026">Why International Logistics Matters More Than Ever in 2026</h2>
      <p>
        Global trade has grown more complex, not simpler, over the past few years. Rising fuel costs, shifting trade regulations, and increased scrutiny at customs checkpoints mean businesses can no longer treat international shipping as an afterthought. A well-planned logistics strategy directly affects:
      </p>
      <CheckList
        items={[
          "Delivery reliability — Meeting client deadlines and contractual shipping commitments",
          "Landed cost accuracy — Avoiding unexpected duty, tax, or demurrage charges",
          "Cash flow — Faster customs clearance means faster payment cycles for exporters",
          "Business reputation — Consistent, on-time international delivery builds trust with overseas buyers and partners",
        ]}
      />
      <p>
        For Pakistani exporters competing in global markets, logistics reliability is often as important as product quality when it comes to winning and keeping international buyers.
      </p>

      <h2 id="freight-modes">Air Freight vs. Sea Freight vs. Land Freight: Choosing the Right Mode</h2>
      <p>
        The first major decision in any international shipment is choosing the right freight mode. Each option comes with different cost, speed, and volume trade-offs.
      </p>

      <h3>Air Freight</h3>
      <p>
        Air freight is the fastest international shipping option, typically moving cargo in a matter of days. It's ideal for:
      </p>
      <CheckList
        items={[
          "High-value goods where speed reduces risk exposure",
          "Time-sensitive shipments with tight delivery deadlines",
          "Smaller cargo volumes where the cost-per-kg premium is justified by speed",
        ]}
      />
      <p>
        The trade-off is cost — air freight is significantly more expensive per kilogram than sea freight, making it less economical for large-volume, non-urgent shipments. For a detailed breakdown of transit times and lane-specific rates, see our Air Freight Islamabad services page.
      </p>

      <h3>Sea Freight</h3>
      <p>
        Sea freight is the most cost-effective option for large-volume shipments, particularly full container loads (FCL) and less-than-container loads (LCL). It's the standard choice for:
      </p>
      <CheckList
        items={[
          "Bulk exports such as textiles, agricultural goods, and manufactured products",
          "Non-time-sensitive inventory shipments",
          "Businesses prioritizing cost efficiency over speed",
        ]}
      />
      <p>
        The main trade-off is transit time — sea freight can take several weeks depending on the route, compared to days for air freight.
      </p>

      <h3>Land Freight</h3>
      <p>
        For shipments to neighboring countries or regional trade partners, land freight offers a middle-ground option in terms of both cost and speed, though it's less relevant for Pakistan's major international trade lanes, which rely primarily on air and sea routes.
      </p>

      <DataTable
        headers={["Freight Mode", "Speed", "Cost", "Best For"]}
        rows={[
          ["Air Freight", "Days", "High per kg", "Urgent, high-value, time-sensitive"],
          ["Sea Freight", "Weeks", "Low per kg", "Bulk, non-urgent, cost-sensitive"],
          ["Land Freight", "Days to weeks", "Medium", "Regional trade, neighboring countries"],
        ]}
      />

      <h2 id="shipping-process">The Complete International Shipping Process</h2>
      <NumberedList
        items={[
          "Cargo Assessment & Freight Mode Selection — Every shipment starts with assessing cargo type, volume, weight, value, and delivery timeline to determine whether air, sea, or a hybrid approach makes the most sense.",
          "Export Documentation Preparation — Before cargo can leave Pakistan, exporters must prepare accurate documentation, including commercial invoices, packing lists, certificates of origin, and any product-specific certifications required by the destination country.",
          "Booking & Carrier Coordination — Freight space is booked with carrier partners, and pickup is scheduled from the origin point — whether that's a factory, warehouse, or business location.",
          "Customs Clearance (Origin) — Export customs clearance in Pakistan requires correct HS code classification, duty documentation (if applicable), and compliance with any export restrictions on the specific product category.",
          "Transit & Tracking — Cargo moves via the selected freight mode, with milestone tracking available at each major checkpoint — departure, transshipment (if applicable), and arrival.",
          "Customs Clearance (Destination) — Upon arrival, the shipment clears destination customs, where import duties and taxes are assessed based on the destination country's regulations and the shipment's declared value.",
          "Final Delivery — The cargo is delivered to its final destination — a warehouse, distribution center, retail location, or direct customer address, depending on the shipping arrangement.",
        ]}
      />

      <h2 id="documentation">Essential Documentation for International Shipping from Pakistan</h2>
      <p>
        Missing or incorrect documentation is the single biggest cause of customs delays. A complete international shipment typically requires:
      </p>
      <CheckList
        items={[
          "Commercial Invoice — Details the transaction value, buyer, and seller information",
          "Packing List — Itemized breakdown of shipment contents, weights, and dimensions",
          "Bill of Lading (sea) or Air Waybill (air) — The official shipping contract and receipt of goods",
          "Certificate of Origin — Confirms the country where goods were manufactured, often required for duty preference programs",
          "Export License (if applicable) — Required for regulated or restricted product categories",
          "Insurance Certificate — Confirms coverage for cargo in transit",
          "Product-Specific Certifications — Health, safety, or quality certificates depending on the destination country and product type",
        ]}
      />
      <p>
        Businesses that prepare this documentation accurately and in advance consistently see faster customs clearance and fewer unexpected delays.
      </p>

      <InfoBox variant="warn">
        <strong>⚠️ Critical:</strong> The most common documentation error is incorrect HS code classification. This leads to wrong duty assessment and potential customs holds. Always verify classification with an experienced customs broker before shipping.
      </InfoBox>

      <h2 id="incoterms">Understanding Incoterms in International Logistics</h2>
      <p>
        Incoterms (International Commercial Terms) define who is responsible for costs, risk, and logistics coordination at each stage of an international shipment. The most commonly used terms include:
      </p>
      <DataTable
        headers={["Incoterm", "Responsibility", "Best For"]}
        rows={[
          ["EXW (Ex Works)", "Buyer takes full responsibility from seller's premises", "Buyer wants complete control over logistics"],
          ["FOB (Free on Board)", "Seller handles export clearance and loading; buyer takes responsibility once goods are on the vessel", "Standard international trade arrangement"],
          ["CIF (Cost, Insurance & Freight)", "Seller covers shipping and insurance costs to the destination port", "Buyer wants seller to handle most logistics"],
          ["DDP (Delivered Duty Paid)", "Seller handles the entire process, including destination duties and taxes", "Buyer wants fully cleared goods delivered to door"],
        ]}
      />
      <p>
        Choosing the right Incoterm affects both cost allocation and risk exposure — and it should always be clearly stated in commercial agreements to avoid disputes during shipping.
      </p>

      <h2 id="common-mistakes">Common International Logistics Mistakes (And How to Avoid Them)</h2>
      <CheckList
        items={[
          "Incorrect HS Code Classification — Leads to incorrect duty assessment and potential customs holds. Always verify classification with an experienced customs broker.",
          "Incomplete Documentation — Missing certificates or invoice discrepancies are the top cause of clearance delays.",
          "Choosing the Wrong Freight Mode — Prioritizing cost over deadline (or vice versa) without evaluating the actual trade-off leads to unnecessary expense or missed delivery windows.",
          "Underestimating Transit Time — Sea freight timelines are frequently underestimated, causing missed commitments to buyers or clients.",
          "Ignoring Insurance — Uninsured cargo leaves businesses fully exposed to loss or damage during transit.",
          "Working with Fragmented Vendors — Using separate, uncoordinated vendors for freight, customs, and delivery creates accountability gaps when problems arise.",
        ]}
      />

      <h2 id="choosing-partner">How to Choose the Right International Logistics Partner</h2>
      <p>
        Not all logistics providers offer the same level of reliability. When evaluating an international logistics partner, look for:
      </p>
      <CheckList
        items={[
          "Proven experience on your specific trade lanes and destination countries",
          "Licensed customs brokerage capability, not just freight booking",
          "Transparent, itemized pricing with no hidden charges at delivery",
          "Established carrier relationships for competitive rates and reliable capacity",
          "Real-time tracking and communication throughout the shipment lifecycle",
          "A single point of contact managing your shipment end-to-end, rather than multiple disconnected vendors",
        ]}
      />
      <p>
        Our team at Best International Movers & Logistics manages this entire process under one roof — from freight booking to customs clearance to final delivery — through our Logistics Services Pakistan offering, backed by 15+ years of experience and partnerships with major global carriers including Maersk Line, Emirates SkyCargo, DHL Global, and DB Schenker.
      </p>

      <h2 id="cost-factors">Cost Factors in International Logistics</h2>
      <p>
        International shipping costs are influenced by several variables businesses should plan for:
      </p>
      <CheckList
        items={[
          "Freight mode (air vs. sea) and current carrier rates",
          "Cargo weight and volume, which determine freight pricing tiers",
          "Destination country and route complexity",
          "Import duties and taxes, which vary significantly by product category and destination",
          "Insurance premiums, based on declared cargo value",
          "Additional services such as warehousing, special packing, or expedited customs handling",
        ]}
      />
      <p>
        Getting an accurate, itemized quote before shipping — rather than a rough estimate — is the best way to avoid budget surprises once cargo reaches its destination.
      </p>

      <h2 id="business-relocation">International Logistics for Business Relocation</h2>
      <p>
        International logistics isn't limited to commercial cargo — it also applies when businesses relocate operations, open new branch offices abroad, or move corporate equipment internationally. This process combines freight-grade cargo handling with the scheduling precision of a full office move. If your business is planning a cross-border relocation, our Office Moving Services team works alongside our logistics division to coordinate equipment shipping, customs documentation, and destination setup as one unified project.
      </p>

      <h2 id="trends-2026">International Logistics Trends to Watch in 2026</h2>
      <CheckList
        items={[
          "Increased Digital Documentation — More customs authorities are shifting toward digital-first documentation, reducing paper-based delays for compliant shippers.",
          "Greater Customs Scrutiny — Regulatory bodies globally are tightening compliance checks, making accurate documentation even more critical.",
          "Rising Freight Rate Volatility — Fuel costs and capacity constraints continue to cause rate fluctuations, making advance booking increasingly valuable.",
          "Growing Demand for End-to-End Providers — Businesses are consolidating logistics vendors to reduce coordination risk, favoring providers who manage freight, customs, and delivery under one roof.",
        ]}
      />

      <h2 id="real-world-example">Real-World Example: Textile Export from Lahore to Germany</h2>
      <p>
        To make this process concrete, consider a common scenario for Pakistani exporters: a textile manufacturer in Lahore shipping a full container load of finished garments to a buyer in Germany.
      </p>
      <p>
        The process typically unfolds as follows: the exporter finalizes the commercial invoice and packing list based on the confirmed order, while the logistics partner books container space with a carrier operating the Karachi-to-Hamburg route. Export customs clearance in Pakistan requires accurate HS code classification for textile goods and confirmation that no export restrictions apply to the specific product category. Once the container departs Karachi Port, it typically transits for several weeks before arriving at the German port, where destination customs assess import duty based on the EU's tariff schedule and the shipment's declared value under the agreed Incoterm — commonly FOB or CIF for textile exports. Upon clearance, the cargo is delivered to the buyer's warehouse or distribution center.
      </p>
      <p>
        This example illustrates why documentation accuracy and Incoterm clarity matter so much — a single error in HS code classification or a missing certificate of origin can add weeks to this timeline and jeopardize the exporter's relationship with an international buyer who is depending on a reliable delivery schedule.
      </p>

      <h2 id="final-thoughts">Final Thoughts</h2>
      <p>
        International logistics rewards preparation. Businesses that invest time in accurate documentation, realistic timeline planning, and a reliable logistics partner consistently avoid the delays and cost overruns that catch unprepared shippers off guard. Whether you're shipping your first export order or managing recurring international freight, the fundamentals in this guide — correct freight mode selection, complete documentation, clear Incoterms, and a trustworthy logistics partner — apply to every shipment, regardless of size or destination.
      </p>

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Need help planning your next international shipment?
        </strong>
        Contact Best International Movers & Logistics for a free consultation and transparent quote. Call/WhatsApp: 0300-9130211 | Email: info@bestintlmovers.com
      </CtaBox>

      <p className="text-sm text-muted-foreground italic">
        Published by Best International Movers & Logistics — Pakistan's trusted international moving and logistics partner since 2009. This guide reflects real freight and customs conditions for shipments originating from Pakistan and is updated periodically to stay current with regulatory and industry changes.
      </p>

      <h2 id="faqs">Frequently Asked Questions — International Logistics Guide</h2>
      <div className="space-y-6">
        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">1. What is international logistics?</h3>
          <p className="text-muted-foreground text-sm">International logistics is the process of planning, transporting, and coordinating the movement of goods across national borders, including freight booking, customs clearance, documentation, and final delivery.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">2. What's the difference between international logistics and domestic logistics?</h3>
          <p className="text-muted-foreground text-sm">International logistics involves crossing national borders, which adds customs clearance, import/export documentation, and destination-country compliance requirements that domestic shipping doesn't require.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">3. Which is cheaper — air freight or sea freight?</h3>
          <p className="text-muted-foreground text-sm">Sea freight is generally more cost-effective for large-volume, non-urgent shipments, while air freight costs more per kilogram but delivers significantly faster.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">4. What documents do I need to ship internationally from Pakistan?</h3>
          <p className="text-muted-foreground text-sm">Common requirements include a commercial invoice, packing list, bill of lading or air waybill, certificate of origin, and any product-specific certifications required by the destination country.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">5. What are Incoterms and why do they matter?</h3>
          <p className="text-muted-foreground text-sm">Incoterms define who is responsible for shipping costs, risk, and logistics coordination at each stage of a shipment. Choosing the right term (EXW, FOB, CIF, DDP, etc.) affects cost allocation and prevents disputes between buyer and seller.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">6. How long does international shipping take from Pakistan?</h3>
          <p className="text-muted-foreground text-sm">Air freight typically takes a few days, while sea freight can take several weeks depending on the destination and route. Exact timelines vary by carrier and lane.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">7. What causes customs delays in international shipping?</h3>
          <p className="text-muted-foreground text-sm">The most common causes are incomplete documentation, incorrect HS code classification, and discrepancies between invoice values and declared shipment contents.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">8. Do I need a customs broker for international shipments?</h3>
          <p className="text-muted-foreground text-sm">While not always legally required, working with a licensed customs broker significantly reduces the risk of clearance delays and ensures accurate duty and tax calculation.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">9. How is import duty calculated on international shipments?</h3>
          <p className="text-muted-foreground text-sm">Import duty is calculated based on the shipment's declared value, product HS code classification, and the destination country's specific duty rates and trade agreements.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">10. Can international logistics providers handle both freight and customs clearance?</h3>
          <p className="text-muted-foreground text-sm">Yes, full-service logistics providers manage freight booking, export/import documentation, and customs brokerage under one coordinated process, reducing vendor fragmentation.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">11. What is the safest way to ship high-value cargo internationally?</h3>
          <p className="text-muted-foreground text-sm">Air freight is generally preferred for high-value cargo due to shorter transit times, combined with adequate cargo insurance to cover potential loss or damage.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">12. How do I choose between multiple logistics providers?</h3>
          <p className="text-muted-foreground text-sm">Evaluate experience on your specific trade lane, licensed customs capability, transparent pricing, carrier relationships, and whether they offer end-to-end tracking and communication.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">13. What happens if my shipment is held at customs?</h3>
          <p className="text-muted-foreground text-sm">Shipments are typically held due to missing or incorrect documentation. A logistics partner with in-house customs expertise can usually resolve holds faster by correcting and resubmitting the required paperwork.</p>
        </div>

        <div className="border-b border-border pb-4">
          <h3 className="font-display font-semibold text-foreground mb-2">14. Is cargo insurance necessary for international shipments?</h3>
          <p className="text-muted-foreground text-sm">Yes, cargo insurance is strongly recommended for any international shipment, as it protects against financial loss from damage, loss, or theft during transit.</p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-foreground mb-2">15. How can I get a quote for international logistics services?</h3>
          <p className="text-muted-foreground text-sm">Contact Best International Movers & Logistics via phone, WhatsApp, or our online quote form with your shipment details — origin, destination, cargo type, and volume — for a transparent, itemized quote within 24 hours.</p>
        </div>
      </div>
    </>
  );
}
