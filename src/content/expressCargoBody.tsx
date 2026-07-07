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

export function ExpressCargoBody() {
  return (
    <>
      <nav className="not-prose mb-8 p-4 bg-muted/50 rounded-xl">
        <h3 className="font-semibold mb-3 text-sm">Table of Contents</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li><a href="#what-is-express" className="hover:text-foreground">What Is Express Cargo?</a></li>
          <li><a href="#transit-times" className="hover:text-foreground">Express Cargo Transit Times</a></li>
          <li><a href="#rates" className="hover:text-foreground">Express Cargo Rates</a></li>
          <li><a href="#what-can-send" className="hover:text-foreground">What Can You Send by Express Cargo?</a></li>
          <li><a href="#what-cannot-send" className="hover:text-foreground">What Cannot Be Sent by Express Cargo?</a></li>
          <li><a href="#process" className="hover:text-foreground">Our Express Cargo Process</a></li>
          <li><a href="#comparison" className="hover:text-foreground">Express Cargo vs Standard Air Cargo vs Courier</a></li>
          <li><a href="#uk-guide" className="hover:text-foreground">Express Cargo from Pakistan to UK</a></li>
          <li><a href="#canada-guide" className="hover:text-foreground">Express Cargo from Pakistan to Canada</a></li>
          <li><a href="#uae-guide" className="hover:text-foreground">Express Cargo from Pakistan to UAE & Other Destinations</a></li>
          <li><a href="#faqs" className="hover:text-foreground">Frequently Asked Questions</a></li>
        </ul>
      </nav>

      <p>
        Some situations simply cannot wait for standard 5–9 day air cargo or 35-day sea freight. A visa rejection needs urgent supporting documents sent to an overseas embassy. A family emergency requires medicines to reach a loved one in the UK within 48 hours. A business deal depends on samples reaching a Canadian buyer before a competing supplier. A contract must be signed and original documents received in Dubai tomorrow.
      </p>
      <p>
        When time is the most critical factor in your international shipment, express cargo is the answer — and Best Int'l Movers operates one of Pakistan's most comprehensive express cargo services to the UK, Canada, Australia, UAE, Saudi Arabia, and worldwide. We offer same-day pickup, 24/7 booking, and guaranteed transit times as fast as 24 hours to the Gulf and 48–72 hours to Europe and North America.
      </p>
      <p>
        This complete guide covers everything you need to know about express cargo from Pakistan — how it works, what it costs, which destinations we serve, what you can and cannot send, and exactly how to book when every hour counts. If you have an urgent shipment right now, WhatsApp us directly — we respond within minutes, 24 hours a day, 7 days a week.
      </p>

      <h2 id="what-is-express">1. What Is Express Cargo? — How It Differs from Standard Air Cargo</h2>
      <p>
        Express cargo is a premium international shipping service that prioritises speed above all else. While standard air cargo typically takes 5–9 business days door-to-door, express cargo delivers in 24 to 96 hours depending on the destination — using priority airline booking, expedited customs processing, and same-day or overnight delivery networks at the destination.
      </p>

      <DataTable
        headers={["Feature", "Express Cargo vs Standard Air Cargo vs Sea Freight"]}
        rows={[
          ["Transit time", "Express: 24–96 hours | Standard Air: 5–9 days | Sea: 28–50 days"],
          ["Cost per kg", "Express: 2–4x standard air rate | Standard Air: Standard | Sea: 80–90% cheaper"],
          ["Pickup speed", "Express: Same-day pickup available | Standard: Next day | Sea: 3–5 days"],
          ["Customs clearance", "Express: Priority clearance lane | Standard: Regular queue | Sea: Port schedule"],
          ["Tracking", "Express: Real-time hourly updates | Standard: Milestone updates | Sea: Vessel tracking"],
          ["Delivery at destination", "Express: Next day after customs | Standard: 1–3 days | Sea: 1–5 days"],
          ["Best for", "Express: Life-critical, time-sensitive, high-value urgent | Standard: Regular cargo | Sea: Bulk, non-urgent"],
          ["Weight range", "Express: 0.1 kg to 300 kg | Standard: 1 kg to 1,000 kg+ | Sea: Unlimited"],
          ["24/7 availability", "Express: Yes — book any time | Standard: Business hours | Sea: Scheduled"],
        ]}
      />

      <InfoBox variant="blue">
        <strong>⚡ Fast Fact:</strong> Best Int'l Movers has delivered express cargo from Karachi to London in 26 hours — from same-day pickup at the client's Karachi office to delivery at a London address the following morning. This is our fastest documented Pakistan-to-UK express delivery.
      </InfoBox>

      <h3>When Do Pakistani Families & Businesses Use Express Cargo?</h3>
      <p>Express cargo is not for everyday shipments — it is for situations where time is more valuable than cost. The most common express cargo scenarios from Pakistan:</p>

      <DataTable
        headers={["Situation", "Who Uses Express Cargo"]}
        rows={[
          ["Urgent visa/embassy documents", "Individuals — passport applications, visa support documents to embassies in UK/Canada"],
          ["Medical emergency — medicines", "Families — prescription medicines, medical equipment for hospitalised family member abroad"],
          ["Business samples before deadline", "Exporters — product samples to reach buyer before competitor supplier"],
          ["Legal documents — original contracts", "Law firms, businesses — signed originals, court documents, notarised papers"],
          ["Death in family — urgent documents", "Families — death certificate, next-of-kin documentation, estate papers"],
          ["University/school documents", "Students — application documents, attestation papers, scholarship letters"],
          ["Product recall / warranty replacement", "Businesses — replacement parts, repaired goods, quality failure resolution"],
          ["Last-minute gifts for Eid/occasion", "Families — gifts that could not be planned in advance"],
          ["Cheques and financial instruments", "Banks, businesses — physical payment instruments requiring secure fast delivery"],
          ["IT equipment for business continuity", "Businesses — replacement servers, critical hardware for offices abroad"],
        ]}
      />

      <h2 id="transit-times">2. Express Cargo Transit Times from Pakistan — Every Destination</h2>
      <p>Best Int'l Movers' express cargo transit times are among the fastest available from Pakistan. Here are guaranteed transit times for major international routes:</p>

      <h3>Express Transit Times — Pakistan to Major Destinations</h3>
      <DataTable
        headers={["Destination", "Standard Express", "Priority Express", "From City"]}
        rows={[
          ["London, UK", "48–72 Hours", "24–48 Hours", "Karachi/Lahore/ISB"],
          ["Birmingham, UK", "48–72 Hours", "24–48 Hours", "Karachi/Lahore/ISB"],
          ["Manchester, UK", "48–72 Hours", "24–48 Hours", "Karachi/Lahore/ISB"],
          ["Bradford / Leeds, UK", "48–72 Hours", "24–48 Hours", "Karachi/Lahore/ISB"],
          ["Toronto, Canada", "72–96 Hours", "48–72 Hours", "Karachi/Lahore/ISB"],
          ["Vancouver, Canada", "72–96 Hours", "48–72 Hours", "Karachi/Lahore/ISB"],
          ["Calgary, Canada", "72–96 Hours", "48–72 Hours", "Karachi/Lahore/ISB"],
          ["Dubai, UAE", "24–36 Hours", "12–24 Hours", "Karachi (KHI)"],
          ["Abu Dhabi, UAE", "24–36 Hours", "12–24 Hours", "Karachi (KHI)"],
          ["Riyadh, Saudi Arabia", "24–48 Hours", "24 Hours", "Karachi/Lahore"],
          ["Jeddah, Saudi Arabia", "24–48 Hours", "24 Hours", "Karachi/Lahore"],
          ["Sydney, Australia", "72–96 Hours", "72 Hours", "Karachi (KHI)"],
          ["Melbourne, Australia", "72–96 Hours", "72 Hours", "Karachi (KHI)"],
          ["Frankfurt, Germany", "48–72 Hours", "24–48 Hours", "Karachi (KHI)"],
          ["New York, USA", "72–96 Hours", "48–72 Hours", "Karachi/Lahore"],
          ["Houston, USA", "72–96 Hours", "48–72 Hours", "Karachi (KHI)"],
        ]}
      />

      <p>Note: Transit times are from confirmed booking and same-day pickup. Priority Express uses next available direct or minimum-connection flight. Standard Express uses scheduled express airline routing. Times shown are business hours and subject to customs clearance, which is typically 2–4 hours for documents and 4–24 hours for goods shipments.</p>

      <InfoBox variant="orange">
        <strong>📌 Important:</strong> Express cargo transit times are guaranteed from pickup to destination clearance — but final delivery (last-mile) adds 2–6 hours depending on the destination city. A London express shipment that clears Heathrow customs at 6 AM will typically be at the delivery address by noon the same day.
      </InfoBox>

      <h2 id="rates">3. Express Cargo Rates from Pakistan — 2026 Transparent Pricing</h2>
      <p>Express cargo is priced at a premium over standard air cargo because of priority airline booking, dedicated handling, and expedited customs lanes. Here are our 2026 express rates — all-inclusive, door-to-door with no hidden charges:</p>

      <h3>Express Cargo Rates — Pakistan to UK</h3>
      <DataTable
        headers={["Chargeable Weight", "Standard Express PKR", "Priority Express PKR", "Transit"]}
        rows={[
          ["0.5 kg – 2 kg", "PKR 22,000–32,000 total", "PKR 35,000–50,000 total", "48–72 hrs / 24–48 hrs"],
          ["2 kg – 5 kg", "PKR 5,000–7,000/kg", "PKR 8,000–12,000/kg", "48–72 hrs / 24–48 hrs"],
          ["5 kg – 15 kg", "PKR 3,500–5,000/kg", "PKR 6,000–9,000/kg", "48–72 hrs / 24–48 hrs"],
          ["15 kg – 30 kg", "PKR 2,800–4,000/kg", "PKR 5,000–7,500/kg", "48–72 hrs / 24–48 hrs"],
          ["30 kg – 70 kg", "PKR 2,200–3,200/kg", "PKR 4,000–6,000/kg", "48–72 hrs"],
        ]}
      />

      <h3>Express Cargo Rates — Pakistan to Canada</h3>
      <DataTable
        headers={["Chargeable Weight", "Standard Express PKR", "Priority Express PKR", "Transit"]}
        rows={[
          ["0.5 kg – 2 kg", "PKR 25,000–35,000 total", "PKR 40,000–55,000 total", "72–96 hrs / 48–72 hrs"],
          ["2 kg – 5 kg", "PKR 5,500–7,500/kg", "PKR 9,000–13,000/kg", "72–96 hrs / 48–72 hrs"],
          ["5 kg – 15 kg", "PKR 3,800–5,500/kg", "PKR 6,500–9,500/kg", "72–96 hrs / 48–72 hrs"],
          ["15 kg – 30 kg", "PKR 3,000–4,200/kg", "PKR 5,500–8,000/kg", "72–96 hrs"],
          ["30 kg – 70 kg", "PKR 2,400–3,400/kg", "PKR 4,500–6,500/kg", "72–96 hrs"],
        ]}
      />

      <h3>Express Cargo Rates — Pakistan to UAE (Dubai/Abu Dhabi)</h3>
      <DataTable
        headers={["Chargeable Weight", "Standard Express PKR", "Priority Express PKR", "Transit"]}
        rows={[
          ["0.5 kg – 2 kg", "PKR 10,000–16,000 total", "PKR 18,000–26,000 total", "24–36 hrs / 12–24 hrs"],
          ["2 kg – 5 kg", "PKR 2,000–3,000/kg", "PKR 4,000–6,000/kg", "24–36 hrs / 12–24 hrs"],
          ["5 kg – 15 kg", "PKR 1,400–2,200/kg", "PKR 3,000–4,500/kg", "24–36 hrs / 12–24 hrs"],
          ["15 kg – 50 kg", "PKR 1,000–1,700/kg", "PKR 2,500–3,800/kg", "24–36 hrs"],
          ["50 kg – 150 kg", "PKR 700–1,200/kg", "PKR 2,000–3,200/kg", "24–36 hrs"],
        ]}
      />

      <p>All rates are all-inclusive — pickup in Pakistan, packing, airway bill, export customs, airline priority booking, destination customs clearance, and door delivery. No hidden fuel surcharges or destination fees added later.</p>

      <InfoBox variant="red">
        <strong>⚠️ Watch Out:</strong> Beware of companies advertising very low express rates and then adding 'fuel surcharge', 'security surcharge', 'terminal handling', 'remote area delivery' and 'destination customs fee' separately. Our express rates are fully all-inclusive. The price we quote is the price you pay — guaranteed in writing before booking.
      </InfoBox>

      <h2 id="what-can-send">4. What Can You Send by Express Cargo from Pakistan?</h2>
      <p>Express cargo from Pakistan handles a wide range of urgent shipment types. Here is what we regularly ship on an express basis:</p>

      <h3>Documents — Most Common Express Cargo Category</h3>
      <CheckList
        items={[
          "Visa applications and embassy documents — passport copies, financial statements, invitation letters",
          "Legal documents — signed contracts, court orders, notarised papers, Power of Attorney",
          "Educational documents — degree transcripts, attestation papers, scholarship acceptance letters",
          "Financial instruments — bank guarantees, letters of credit, insurance certificates",
          "Corporate documents — board resolutions, company registration papers, audited accounts",
          "Immigration papers — visa extension letters, PR applications, supporting documents",
          "Medical reports — pathology reports, specialist referrals, MRI/X-ray images",
          "Death and estate documents — death certificates, inheritance papers, NOC letters",
        ]}
      />

      <InfoBox variant="blue">
        <strong>💡 Pro Tip:</strong> For document-only express shipments, use our 'Document Express' service — documents travel faster because they clear customs in a dedicated document lane without goods inspection. A 0.5 kg document envelope from Karachi reaches London in 24–36 hours via Document Express. This is significantly faster than including documents in a goods shipment.
      </InfoBox>

      <h3>Personal & Medical Cargo</h3>
      <CheckList
        items={[
          "Prescription medicines — especially critical where specific formulations are unavailable in the destination country",
          "Medical devices and equipment — insulin pumps, hearing aid parts, specialist medical supplies",
          "Baby formula and specialist nutrition products",
          "Eyeglasses and contact lens prescriptions",
          "Personal items for hospitalised family members abroad",
          "Urgent clothing and personal effects for someone whose luggage was lost",
          "Gifts for time-sensitive occasions — wedding gifts, newborn gifts, Eid",
        ]}
      />

      <h3>Business & Commercial Express</h3>
      <CheckList
        items={[
          "Product samples for buyer approval before order deadline",
          "Replacement parts for factory machinery — avoiding production downtime",
          "IT hardware for business continuity — servers, networking equipment, peripherals",
          "Electronics — phones, tablets, specialist equipment (declare value accurately)",
          "Quality control samples — lab testing samples, certification testing",
          "Artworks and handicrafts for exhibitions with fixed dates",
          "Commercial cargo under 100 kg where air freight standard service is too slow",
        ]}
      />

      <h2 id="what-cannot-send">5. What CANNOT Be Sent by Express Cargo from Pakistan?</h2>
      <p>Express cargo has the same prohibited items as standard air cargo — plus some additional restrictions due to airline security requirements. Understanding these before booking saves time and avoids disappointment:</p>

      <DataTable
        headers={["Prohibited — Cannot Send by Express", "Restricted — Special Procedures Required"]}
        rows={[
          ["Firearms, weapons, ammunition — strictly prohibited", "Prescription medicines over 90 days supply — requires medical prescription"],
          ["Narcotics and controlled substances", "Lithium batteries (standalone) — IATA DG regulations apply"],
          ["Explosives of any kind", "Tobacco products — excise documentation required"],
          ["Flammable liquids and gases — aerosols, petrol, lighter fluid", "Alcohol — destination country regulations apply"],
          ["Dangerous goods without DGD declaration", "High-value jewellery over USD 5,000 — special declaration required"],
          ["Fresh fruits, vegetables, live plants", "Large cash amounts — must be declared"],
          ["Counterfeit goods of any kind", "Certain electronics — may require FCC/CE certification at destination"],
          ["Currency — physical banknotes over legal limits", "Medicines — health authority permit may be needed at destination"],
          ["Perishables without cold chain service", "CITES-protected species products — export permit required"],
        ]}
      />

      <InfoBox variant="orange">
        <strong>📌 Important:</strong> Lithium batteries — the most common express cargo restriction issue. Standalone lithium batteries (not installed in devices) have strict IATA quantity and watt-hour limits for air carriage. Phones, laptops, and tablets shipped WITH their internal batteries are generally permitted. Spare/replacement lithium batteries have strict quantity limits. Always declare batteries when booking.
      </InfoBox>

      <h2 id="process">6. Our Express Cargo Process — From Booking to Delivery</h2>
      <p>Speed without process is just chaos. At Best Int'l Movers, our express cargo process is meticulously designed to eliminate every delay and deliver your shipment in the fastest possible time:</p>

      <NumberedList
        items={[
          "Book Instantly — WhatsApp or call 24/7. Share: weight, dimensions, contents, destination, and your urgency requirement. We respond within 10 minutes with a confirmed quote and availability.",
          "Confirm & Pay — Approve the quote. Payment via bank transfer, JazzCash, Easypaisa, or cash on pickup. We confirm your booking and dispatch the pickup team immediately.",
          "Same-Day Pickup — Our pickup team arrives at your location in Pakistan within 2–4 hours of confirmation. We collect from your home, office, factory, or any location.",
          "Express Packing — We pack your shipment using airline-approved materials. Documents go in tamper-evident express envelopes. Goods are packed, wrapped, and secured for priority air handling.",
          "Airway Bill & Documentation — We prepare the Master Airway Bill (MAWB) and all customs documentation within 1 hour of pickup. For goods: commercial invoice, packing list, and any required certifications.",
          "Priority Customs Filing — We file your Pakistan export declaration with FBR on priority track. Express shipments are flagged for fast-track customs processing at the airport.",
          "Airport Priority Check-In — Your shipment is delivered to the airline priority cargo terminal and checked in for the earliest available flight. We confirm flight details to you via WhatsApp.",
          "Real-Time Flight Tracking — We send you the AWB tracking number immediately. You can track your shipment's location in real time via the airline's tracking portal or WhatsApp us for live updates.",
          "Destination Customs Priority — Our partner at the destination country lodges the import declaration on priority track. Express shipments are cleared in 2–8 hours rather than standard 1–3 day wait.",
          "Express Last-Mile Delivery — Once cleared, our destination delivery partner dispatches for same-day or next-morning delivery. You receive confirmation with delivery details via WhatsApp.",
          "Delivery Confirmation — We send you proof of delivery including recipient name, signature, and delivery time. For documents, a scanned copy of the signed delivery confirmation is sent to you.",
        ]}
      />

      <InfoBox variant="blue">
        <strong>⚡ Fast Fact:</strong> Our WhatsApp express booking system operates 24 hours a day, 7 days a week, 365 days a year — including Eid and public holidays. If you have an urgent shipment at 2 AM on Eid night, we answer and we book. Express cargo never sleeps.
      </InfoBox>

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Express Air Cargo from Pakistan to UK — 24–72 Hours Guaranteed
        </strong>
        Best Int'l Movers operates Pakistan's fastest door-to-door express air cargo service to the United Kingdom. Same-day pickup from Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, and Multan. Delivery to London, Birmingham, Manchester, Bradford, Leeds, Glasgow, Cardiff, and all UK cities in 48–72 hours. 24/7 booking on WhatsApp. All-inclusive transparent pricing.
      </CtaBox>

      <h2 id="comparison">7. Express Cargo vs Standard Air Cargo vs Courier — Which Is Right for You?</h2>
      <p>Many Pakistani senders are confused about the difference between express cargo (freight forwarder), standard air cargo, and international courier services (DHL, FedEx, TNT). Here is a clear comparison to help you choose the right service for your specific situation:</p>

      <DataTable
        headers={["Factor", "Express Cargo (Best Int'l Movers)", "Standard Air Cargo (Best Int'l Movers)"]}
        rows={[
          ["Transit time", "24–96 hours door to door", "5–9 business days door to door"],
          ["Best weight range", "0.1 kg to 300 kg", "1 kg to 1,000 kg+"],
          ["Cost vs courier", "30–50% cheaper than DHL for 10+ kg", "60–70% cheaper than DHL"],
          ["Tracking", "Real-time + WhatsApp updates", "AWB milestone tracking"],
          ["Pickup", "Same-day", "Next business day"],
          ["Customs handling", "Priority lane — 2–8 hours", "Regular lane — 1–3 days"],
          ["Large shipments", "Up to 300 kg express", "Up to 1,000 kg+"],
          ["24/7 booking", "Yes", "Business hours"],
          ["Best for", "Urgent, time-critical, valuable", "Regular non-urgent, commercial"],
        ]}
      />

      <DataTable
        headers={["Factor", "International Courier (DHL/FedEx) vs Express Cargo Forwarder"]}
        rows={[
          ["Transit time", "Courier: 2–5 days | Express Cargo: 24–96 hours (similar, sometimes faster)"],
          ["Cost for 1–5 kg", "Courier: Often cheaper | Express Cargo: Comparable or slightly more"],
          ["Cost for 10–50 kg", "Courier: Expensive | Express Cargo: 30–50% cheaper"],
          ["Cost for 50–300 kg", "Courier: Very expensive | Express Cargo: 50–70% cheaper"],
          ["Complex customs", "Courier: Limited support | Express Cargo: Full customs advisory"],
          ["Commercial cargo", "Courier: Basic support | Express Cargo: Full commercial docs"],
          ["L/C documentation", "Courier: Not possible | Express Cargo: Full L/C support"],
          ["Restricted goods", "Courier: Limited categories | Express Cargo: Wider category handling"],
          ["Customer support", "Courier: Call centre | Express Cargo: Dedicated WhatsApp contact"],
        ]}
      />

      <InfoBox variant="save">
        <strong>💰 Money Saver:</strong> For shipments over 10 kg, express cargo freight forwarding is almost always cheaper than DHL or FedEx at comparable speeds. DHL is convenient for small parcels under 5 kg where the simplicity justifies the premium. For anything over 10 kg requiring speed — choose our express cargo service for better pricing, better customs handling, and dedicated personal service.
      </InfoBox>

      <h2 id="uk-guide">8. Express Cargo from Pakistan to UK — Detailed Guide</h2>
      <p>The UK is our highest-demand express cargo destination from Pakistan. With 1.6 million British Pakistanis and constant flow of documents, medicines, and urgent cargo between Pakistan and Britain, we operate multiple express departures to the UK weekly.</p>

      <h3>Express Cargo UK — Key Facts</h3>
      <CheckList
        items={[
          "Departure airports: Karachi (KHI), Lahore (LHE), Islamabad (ISB) — all have express UK connections",
          "Primary UK arrivals: London Heathrow (LHR), Gatwick (LGW), Manchester (MAN)",
          "Transit route: Typically via Emirates (Dubai), Qatar Airways (Doha), or Turkish Airlines (Istanbul)",
          "Fastest route: Karachi → Dubai → London (KHI-DXB-LHR) — fastest available connection",
          "UK customs: HMRC customs clearance — typically 2–4 hours for express shipments",
          "UK delivery: Next business morning after customs clearance",
          "Coverage: All UK postcodes including Scotland, Wales, and Northern Ireland",
        ]}
      />

      <h3>UK-Specific Express Cargo Rules</h3>
      <CheckList
        items={[
          "Documents: No customs declaration required for documents — fastest clearance",
          "Goods under GBP 135: Simplified HMRC customs entry — faster clearance",
          "Goods over GBP 135: Full HMRC import declaration required — handled by our UK broker",
          "Medicine: Personal supply (90 days) generally permitted — prescription letter recommended",
          "Food: Declare all food items — APHA (UK biosecurity) may inspect",
          "CITES: Any wildlife products require CITES certificate even for express",
          "Transfer of Residence goods: Cannot use express for ToR relief — sea freight container required for duty-free household goods",
        ]}
      />

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Express Air Cargo from Pakistan to Canada — 72–96 Hours
        </strong>
        Need urgent cargo to reach Canada from Pakistan fast? Best Int'l Movers delivers door-to-door to Toronto, Vancouver, Calgary, Edmonton, Ottawa, Montreal & all Canadian cities in 72–96 hours via our express service. CBSA customs clearance by our licensed Canadian broker. 24/7 booking. Same-day Pakistan pickup.
      </CtaBox>

      <h2 id="canada-guide">9. Express Cargo from Pakistan to Canada — Detailed Guide</h2>
      <p>Canada's 300,000+ Pakistani community generates consistent express cargo demand — urgent documents for immigration authorities, medicines for family members, business samples for Canadian buyers, and emergency personal cargo.</p>

      <h3>Express Cargo Canada — Key Facts</h3>
      <CheckList
        items={[
          "Departure airports: Karachi (KHI), Lahore (LHE), Islamabad (ISB)",
          "Primary Canadian arrivals: Toronto Pearson (YYZ), Vancouver (YVR), Calgary (YYC), Montreal (YUL)",
          "Transit route: Via Emirates (Dubai→Toronto), Qatar Airways (Doha→Toronto/Vancouver), or Turkish Airlines (Istanbul→Toronto)",
          "Fastest option: YYZ (Toronto) has most frequent connections — best for Mississauga/Brampton/Ottawa",
          "CBSA clearance: Our licensed Canadian customs broker handles priority express clearance — typically 4–12 hours",
          "Last-mile: Express delivery next business day after clearance",
        ]}
      />

      <h3>Canada-Specific Express Cargo Rules</h3>
      <CheckList
        items={[
          "Gifts under CAD 60: Duty-free — no formal entry required",
          "Goods CAD 60–CAD 500: Courier/simplified entry — our broker handles",
          "Goods over CAD 500: Formal CBSA entry required — full broker service",
          "Documents: Fastest clearance — typically 2–4 hours",
          "Medicines: Personal supply with prescription letter — declare all",
          "Food: Declare all food items — CBSA biosecurity applies to Canadian arrivals",
          "Alcohol and tobacco: Separate excise assessment — ask before shipping",
        ]}
      />

      <h3>Most Common Express Cargo Items — Pakistan to Canada</h3>
      <CheckList
        items={[
          "Immigration documents — IRCC applications, PR cards, sponsor letters",
          "Educational certificates — IELTS results, degree transcripts, WES credential assessment documents",
          "Medicines — prescription medicines unavailable in Canada, traditional remedies",
          "Pakistani dry food and specialty items — sealed commercial packaging",
          "Business samples — textile samples, leather goods, sports goods for Canadian buyers",
          "Personal effects — urgent clothing, phones, glasses for recently arrived immigrants",
        ]}
      />

      <h2 id="uae-guide">10. Express Cargo from Pakistan to UAE & Other Destinations</h2>

      <h3>UAE — Our Fastest Express Route</h3>
      <p>Dubai is our fastest and most affordable express cargo destination from Pakistan. With 30+ weekly direct flights from Karachi to Dubai alone, we can often arrange same-day delivery to Dubai from Karachi — making it the most responsive express corridor we operate.</p>
      <CheckList
        items={[
          "Karachi → Dubai: 12–24 hour express, 24–36 hour standard express",
          "Lahore/Islamabad → Dubai: 24–36 hour express",
          "UAE customs: Dubai customs clearance typically 2–4 hours for express",
          "Coverage: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah",
          "Most common: Documents, medicines, business samples, personal effects",
          "UAE restrictions: No alcohol, no pork products, declare all medicines",
        ]}
      />

      <h3>Australia — Express via Singapore or Dubai Hub</h3>
      <p>Australia is our longest express route from Pakistan but still achievable in 72–96 hours for most shipments. We route via Singapore (SIN) or Dubai (DXB) for the fastest available connections to Sydney, Melbourne, and Perth.</p>
      <CheckList
        items={[
          "Transit: Karachi → Dubai/Singapore → Sydney/Melbourne/Perth",
          "Standard Express: 72–96 hours door to door",
          "DAFF biosecurity: Must declare all food items, organic materials — express clearance 4–12 hours",
          "Coverage: Sydney, Melbourne, Brisbane, Perth, Adelaide, Canberra",
        ]}
      />

      <h3>Saudi Arabia — Express for Pakistan's Overseas Worker Community</h3>
      <p>Saudi Arabia hosts approximately 2.5 million Pakistani workers. Express cargo demand is consistently high for documents, medicines, and personal items for workers unable to access them locally.</p>
      <CheckList
        items={[
          "Transit: 24–48 hours from Karachi/Lahore via direct or one-stop",
          "Saudi customs (ZATCA): Generally fast for personal effects and documents",
          "Coverage: Riyadh, Jeddah, Dammam, Makkah, Madinah, Al Khobar",
          "Key restrictions: No alcohol, no religious items other than Islamic, declare all medicines",
        ]}
      />

      <h2 id="faqs">10 Frequently Asked Questions — Express Cargo from Pakistan</h2>
      <p>These are the 10 most important questions Pakistani senders ask about express cargo. Each answer is complete — no need to search anywhere else.</p>

      <InfoBox variant="blue">
        <strong>Q: How fast is the fastest possible express cargo from Pakistan to UK?</strong>
        <p className="mt-2">The fastest documented delivery from Pakistan to UK is 24–26 hours — from same-day pickup in Karachi to doorstep delivery in London the following morning. This requires our Priority Express service booked before midday, using a direct Emirates or Qatar Airways routing (Karachi → Dubai/Doha → London Heathrow), with HMRC priority clearance managed by our UK broker. For standard express, 48–72 hours is the realistic transit time from any Pakistani city to any UK address. Factors that can extend this: shipments from Lahore or Islamabad adding 4–6 hours for overnight hub transfer; customs holds at HMRC (rare with correct documentation); remote UK delivery postcodes (Scottish Highlands, Northern Ireland) adding 4–8 hours.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: What is the express cargo cost from Karachi to Dubai for a 2 kg document envelope?</strong>
        <p className="mt-2">A 2 kg document-only express shipment from Karachi to Dubai costs approximately PKR 12,000–18,000 all-inclusive on our standard express service (24–36 hours) or PKR 20,000–28,000 for priority express (12–24 hours). These rates include same-day pickup in Karachi, express packaging, airway bill, Pakistan export customs (document category — fast track), air transit, Dubai customs clearance, and door delivery anywhere in Dubai, Abu Dhabi, or Sharjah. There are no additional fuel surcharges, security fees, or destination charges added. This compares favourably to DHL Express rates of PKR 18,000–25,000 for the same weight and destination, with equivalent or faster transit on our priority service.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: Can I send medicines by express cargo from Pakistan to UK or Canada?</strong>
        <p className="mt-2">Yes — sending prescription medicines by express cargo from Pakistan to the UK or Canada is one of our most common services. For UK-bound medicines: bring a prescription letter from your Pakistani doctor or include the original prescription if available. Personal supply (90 days maximum per medication) is generally permitted by HMRC. Controlled drugs (opioids, certain sedatives) require a Home Office personal import licence — this must be arranged before shipping. For Canada-bound medicines: CBSA allows personal supply of prescription medicines with a valid prescription letter. Controlled substances under the Controlled Drugs and Substances Act require Health Canada import permits — we advise which medications qualify before booking. In both cases, medicines must be in their original pharmacy packaging with the patient name visible. We declare all medicines accurately on customs documents — undeclared medicines at UK or Canadian customs can result in the entire shipment being held or destroyed.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: Is express cargo from Pakistan reliable — what happens if my shipment is delayed?</strong>
        <p className="mt-2">Express cargo from Pakistan through Best Int'l Movers has a 98%+ on-time delivery record. The most common causes of delay (affecting under 2% of express shipments) are: HMRC or CBSA customs holds due to incomplete documentation (we prevent this with pre-clearance document review), extreme weather events affecting airline operations, and airport technical issues at transit hubs. In the event of any delay, our team proactively contacts you as soon as we are aware — we do not wait for you to chase us. We provide a revised ETA immediately and work to recover time wherever possible. For business-critical express shipments, we also recommend booking Priority Express (our fastest tier) which uses next-available-flight booking rather than next scheduled express routing — this provides an additional time buffer. All express shipments are insured as standard against loss — and in the very rare event of carrier-caused delay, we pursue compensation on your behalf.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: Can I send a large express cargo shipment — is there a maximum weight limit?</strong>
        <p className="mt-2">Best Int'l Movers handles express cargo from Pakistan in weights ranging from 0.1 kg document envelopes up to 300 kg for express air freight consignments. For shipments above 100 kg on an express basis, we use charter or priority block space arrangements with our airline partners — ensuring your large consignment still achieves express transit times. For very large urgent commercial shipments (300 kg+), we can arrange full charter cargo flights from Karachi on a bespoke basis — contact us directly for charter options. There is no minimum weight for our express service. A single sheet of paper in a tracked envelope qualifies for our express document service. Pricing scales transparently from the flat rates for small shipments to per-kg rates for larger consignments as shown in our rate tables above.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: How does express cargo customs clearance work at UK, Canada, and UAE?</strong>
        <p className="mt-2">Express cargo customs clearance is managed entirely by Best Int'l Movers' licensed customs partners in each destination country — you do not need to do anything at the destination end. Here is how it works in each: UK (HMRC): Our licensed UK customs broker files the import entry electronically before your cargo arrives. Documents clear in 2–4 hours via the express clearance lane. Goods under GBP 135 are assessed under simplified procedures. Goods over GBP 135 require a formal import entry — our broker handles this, including any duty or VAT assessment. Canada (CBSA): Our licensed Canadian customs broker files electronically using CBSA's ACROSS system. Express cargo typically clears in 4–12 hours. Personal effects and medicines under CAD 500 use simplified clearance. Formal entry required above CAD 500 — our broker manages duty assessment and payment on your behalf. UAE (Dubai Customs): Dubai is one of the world's most efficient customs environments for express cargo. Express personal effects and documents typically clear in 1–3 hours. Commercial goods are assessed by HS code and value — our Dubai partner handles this process. In all cases, any duties or taxes payable at destination are quoted to you upfront — there are no surprise charges at delivery.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: What is the difference between express cargo and courier services like DHL or FedEx from Pakistan?</strong>
        <p className="mt-2">Both express cargo freight forwarders (like Best Int'l Movers) and international courier companies (DHL, FedEx, TNT) offer fast international shipping from Pakistan — but they differ in important ways. Speed: For most destinations, our express service matches or beats courier transit times — we use the same airline routes. Cost: For shipments above 10 kg, we are consistently 30–50% cheaper than DHL or FedEx at equivalent service levels. For shipments under 5 kg, couriers are sometimes more convenient. Customs handling: We provide superior customs support — especially for commercial cargo, L/C shipments, and goods requiring specialist documentation (like medicines or controlled items). Service: Dedicated WhatsApp contact with our team versus call centre support for couriers. Weight flexibility: We handle up to 300 kg on express terms — courier maximum is typically 70 kg per piece. Restrictions: Couriers have stricter prohibited items lists — we can often handle items that DHL or FedEx will not accept. Choose courier for: under 5 kg, very simple domestic shipping equivalent, maximum brand-name convenience. Choose Best Int'l Movers express for: 5 kg and above, complex customs requirements, commercial shipments, competitive pricing, dedicated service.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: Can I book express cargo from cities outside Karachi — Lahore, Islamabad, Peshawar, Multan?</strong>
        <p className="mt-2">Yes — we provide express cargo pickup and service from all major Pakistani cities, not just Karachi. Here is how it works by city: Lahore (LHE): We collect from your Lahore location and either use direct Lahore international flights (which have UK and Gulf connections) or transfer overnight to Karachi hub for next-morning express dispatch. Transit to UK: 48–72 hours. Transit to UAE: 24–36 hours. Islamabad (ISB): Direct collection in Islamabad. Direct ISB flights to UK and Gulf. Transit to UK: 48–72 hours. Transit to UAE: 24–36 hours. Peshawar: Collection from Peshawar, transfer to Islamabad hub. Add 6–12 hours to ISB transit times. Multan: Collection from Multan, transfer to Karachi or Lahore hub. Add 6–12 hours to hub transit times. Faisalabad: Collection, transfer to Lahore hub. Add 4–8 hours. Sialkot: Direct collection, transfer to Lahore or use Sialkot Airport (SKT) for some Gulf destinations. We confirm the fastest routing for your specific city and destination when you book. All cities outside major hubs attract an inland transport charge of PKR 1,000–3,000 depending on distance — this is always quoted upfront.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: What documents do I need to prepare for express cargo from Pakistan?</strong>
        <p className="mt-2">For document-only express shipments (no goods): You need only your CNIC and the recipient's name and address. We handle all paperwork. For goods express shipments, the basic documents are: (1) A clear description of the contents — what the items are, how many, and their approximate value in USD. (2) Your CNIC or passport copy as sender. (3) Recipient's full name, address, and contact number. (4) For medicines: original prescription or doctor's letter. We then prepare all the formal shipping documents: Airway Bill (AWB), Commercial Invoice (we draft from your description), Packing List, and Pakistan FBR export declaration. For commercial goods express shipments: you also need a supplier invoice or purchase receipt. For high-value goods (over USD 1,000): accurate declared value and any product certificates. For pharmaceuticals to controlled markets: Health Canada or UK Home Office permits if required (we advise which medications need this before you book). The key message: you provide the goods/documents and the basic information — we do all the paperwork. This is one of the biggest advantages of using a professional freight forwarder like Best Int'l Movers versus attempting to send complex cargo through a simple courier.</p>
      </InfoBox>

      <InfoBox variant="blue">
        <strong>Q: Is express cargo from Pakistan insured — what happens if something is lost or damaged?</strong>
        <p className="mt-2">All express cargo booked through Best Int'l Movers is covered by carrier liability as standard — this covers loss or damage caused by the airline or handling agents under the Montreal Convention (approximately USD 22 per kg for air cargo). For most personal document shipments, carrier liability is sufficient. For high-value goods — electronics, business samples, medicines, jewellery, or any cargo where replacement cost exceeds the carrier liability value — we strongly recommend purchasing full all-risk cargo insurance. All-risk express cargo insurance from Pakistan costs approximately 1.5–2.5% of the declared value. For a PKR 200,000 worth of goods, insurance costs approximately PKR 3,000–5,000 — a very small cost for complete financial protection. In the event of a claim: report any damage or loss at delivery (note it on the delivery paperwork), photograph all damage, and contact our team immediately via WhatsApp. We initiate the insurance claim on your behalf and manage the process to resolution. We have a 100% successful claim resolution record for insured shipments damaged by verified carrier mishandling.</p>
      </InfoBox>

      <CtaBox>
        <strong className="text-foreground block mb-2 text-base">
          🔗 Book Your Express Cargo from Pakistan — Any Destination, Any Time
        </strong>
        Best Int'l Movers operates 24/7 express cargo from Pakistan to UK, Canada, Australia, UAE, Saudi Arabia, USA and worldwide. Same-day pickup. Transparent all-inclusive pricing. Priority customs clearance. Real-time tracking. WhatsApp us right now for an instant quote — we respond within 10 minutes any time of day or night.
      </CtaBox>

      <h2>When Every Hour Counts — Choose Best Int'l Movers Express Cargo</h2>
      <p>
        Express cargo from Pakistan is not just about speed — it is about reliability, transparency, and having a team that answers your call at 2 AM when you have a life-critical shipment that cannot wait. At Best Int'l Movers, we have built our express cargo service around exactly those moments — the urgent visa document, the emergency medicine, the business sample that must reach its destination before your competitor's does.
      </p>
      <p>
        Our 24/7 booking system, same-day pickup in all major Pakistani cities, priority airline partnerships, and licensed customs broker network in the UK, Canada, UAE, and Australia mean that when you book with us, you are booking with confidence that your express shipment will arrive exactly when it needs to.
      </p>
      <p>
        WhatsApp us now with your shipment details — weight, contents, destination, and your deadline. We will respond within 10 minutes with a confirmed quote and same-day pickup scheduling. Because when your cargo is urgent, our response should be too.
      </p>
    </>
  );
}
