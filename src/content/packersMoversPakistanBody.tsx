import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Phone,
  FileText,
  Plane,
  Ship,
  Truck,
  Building2,
  Home,
  Factory,
  Globe2,
  Package,
} from "lucide-react";

export const packersMoversPakistanFaqs = [
  {
    q: "What do packers and movers services in Pakistan actually include?",
    a: "Packers and movers services typically include a pre-move survey, professional packing using materials like bubble wrap and corrugated boxes, loading onto transport vehicles, safe transit (via road, air, or sea for international moves), unloading, and unpacking at the destination. Full-service companies like Best International Movers & Logistics also provide furniture disassembly and reassembly, cargo insurance, and GPS tracking. The exact scope depends on the package you choose — clarify during your consultation so there are no surprises on moving day.",
  },
  {
    q: "How much do packers and movers cost in Pakistan?",
    a: "Costs vary based on volume of goods, distance, type of move (residential, office, or industrial), and whether it's domestic or international. Fragile packing, wooden crating, floor access without an elevator, and cargo insurance also affect price. Request a free in-person or virtual survey for an accurate, itemized quote with no hidden charges.",
  },
  {
    q: "How far in advance should I book packers and movers?",
    a: "For a local same-city move, book 1–2 weeks ahead (earlier in peak season). For intercity moves, allow 3–4 weeks. International relocations typically need 4–8 weeks for customs documentation, freight booking, and destination coordination.",
  },
  {
    q: "Is my furniture insured during the move?",
    a: "Furniture and belongings are insured only if you opt for cargo insurance as part of your package — it is not automatic. We offer cargo insurance for domestic and international transit and recommend confirming coverage during your survey, especially for high-value or fragile items.",
  },
  {
    q: "Do you provide packing materials, or do I need to arrange my own?",
    a: "We provide all necessary packing materials — bubble wrap, corrugated boxes, wooden crates, packing tape, labels, moving blankets, and foam sheets — brought to your location on packing day. Special requests such as extra crating for fragile or valuable items can be arranged during the survey.",
  },
  {
    q: "Can you handle international relocation, including customs clearance?",
    a: "Yes. We manage export packing, documentation, air or sea freight booking, and customs clearance at origin in Pakistan, plus coordination with destination clearance agents where needed — covering 100+ countries across the Middle East, Europe, North America, and beyond.",
  },
  {
    q: "What is the difference between air freight and sea freight for international moves?",
    a: "Air freight is fastest (days) and best for urgent, high-value, or smaller shipments. Sea freight is more economical for large household or commercial shipments but takes weeks. For most full household moves, sea freight via Karachi Port or Port Qasim offers the best value; air freight suits urgent partial shipments.",
  },
  {
    q: "How do you handle fragile items like glassware and electronics?",
    a: "Glassware and chinaware are individually bubble-wrapped and packed in double-walled boxes with cushioning. Electronics use anti-static materials and foam padding. Mirrors, glass tabletops, and fine art get custom wooden crating with foam corner protection for long-distance and international transit.",
  },
  {
    q: "Do you offer office relocation services with minimal business downtime?",
    a: "Yes. We schedule office moves during evenings, weekends, or holidays, use floor plans and IT labeling, secure confidential documents, and set up workstations so teams can resume quickly. Larger corporate moves get a dedicated move coordinator.",
  },
  {
    q: "Can you relocate heavy machinery and factory equipment?",
    a: "Yes. Industrial and factory relocation uses appropriate rigging, flatbed transport, and trained crews. We work with your engineering team on phased schedules, dismantling, secure transport, reinstallation, and inventory tracking to minimize production downtime.",
  },
  {
    q: "Which cities in Pakistan do you provide services in?",
    a: "We serve Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Multan, Sialkot, Peshawar, Quetta, Hyderabad, Gujranwala, and Bahawalpur — plus intercity moves between them — with international shipping via Karachi Port, Port Qasim, and Lahore Dry Port.",
  },
  {
    q: "What happens if an item gets damaged during the move?",
    a: "If cargo insurance was included, damage is assessed and compensated per policy terms. We document inventory before packing and after delivery so issues are identified quickly. Always note damage on the delivery receipt and contact us promptly with photos.",
  },
  {
    q: "Do you provide storage services if I'm not ready to move into my new home immediately?",
    a: "Yes. Short-term and long-term storage can bridge gaps between vacating and moving into a new property — common for international moves or renovations. Storage maintains security until final delivery.",
  },
  {
    q: "How does GPS tracking work for my shipment?",
    a: "For domestic and international shipments, GPS tracking lets you monitor location and estimated arrival. Our support team also provides journey updates so you always know where your belongings are.",
  },
  {
    q: "Can I pack some items myself and let you handle the rest?",
    a: "Yes. Flexible packing lets you pack personal items while we handle furniture, fragiles, and bulk goods. Self-packed items should use sturdy boxes and clear labels. Note that insurance often covers professionally packed items more comprehensively.",
  },
  {
    q: "What is the difference between full container load (FCL) and less than container load (LCL) shipping?",
    a: "FCL means your shipment occupies an entire container — typical for larger household or commercial loads. LCL shares container space with other cargo — more cost-effective for smaller volumes but may take slightly longer due to consolidation. Our freight team helps you choose.",
  },
  {
    q: "Do you provide door-to-door service for international moves?",
    a: "Yes. Door-to-door covers packing at your Pakistan address, export docs, freight, customs clearance, and delivery to your new address abroad — one company, one point of contact, full accountability.",
  },
  {
    q: "How do I get an accurate moving quote?",
    a: "Request a free in-person or virtual survey. We assess volume, special handling, floor access, and destination, then provide a detailed itemized quote. Be wary of fixed quotes without a proper survey — they often lead to disputes on moving day.",
  },
  {
    q: "What should I do to prepare before the movers arrive?",
    a: "Declutter, disconnect appliances, prepare an essentials box, photograph valuables, clear pathways, and keep your schedule and move coordinator contacts ready. This reduces cost, time, and first-night stress.",
  },
  {
    q: "Are you licensed and experienced enough to handle a large corporate or international relocation?",
    a: "Yes. Best International Movers & Logistics has 15+ years of experience and 5,000+ successful moves — residential, corporate, industrial, and international across 100+ countries — with licensed operations, certified packers, insurance options, GPS tracking, and customs specialists.",
  },
];

export function InfoBox({
  children,
  variant = "gold",
}: {
  children: React.ReactNode;
  variant?: "gold" | "warn" | "save" | "blue" | "green";
}) {
  const cls =
    variant === "warn"
      ? "border-amber-500/40 bg-amber-500/5"
      : variant === "save"
        ? "border-emerald-500/40 bg-emerald-500/5"
        : variant === "blue"
          ? "border-blue-500/40 bg-blue-500/5"
          : variant === "green"
            ? "border-green-500/40 bg-green-500/5"
            : "border-gold/30 bg-gold/5";
  return (
    <div className={`not-prose rounded-xl border ${cls} p-5 my-6 text-sm text-muted-foreground leading-relaxed`}>
      {children}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
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

export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-navy-mid/70 text-foreground">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left p-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`p-4 ${j === 0 ? "font-medium text-foreground" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const processSteps = [
  {
    title: "1. Free Survey & Consultation",
    text: "Our team visits your home or office (or conducts a virtual survey) to assess volume, special handling needs, and access constraints such as stairs or elevators.",
  },
  {
    title: "2. Customized Quote",
    text: "Based on the survey, we provide a detailed, itemized quote — no hidden charges, no last-minute add-ons.",
  },
  {
    title: "3. Packing Materials Preparation",
    text: "We bring bubble wrap, corrugated boxes, wooden crates, packing tape, and labels directly to your location.",
  },
  {
    title: "4. Professional Packing",
    text: "Trained packers wrap, box, and label every item by category and destination room, creating a full inventory for tracking.",
  },
  {
    title: "5. Loading & Transport",
    text: "Items are loaded systematically using trolleys and ramps, then transported via road, air, or sea depending on the move type.",
  },
  {
    title: "6. GPS-Tracked Transit",
    text: "For domestic and international shipments, GPS tracking lets you monitor your shipment's progress in real time.",
  },
  {
    title: "7. Unloading & Placement",
    text: "At the destination, our team unloads, unpacks, and places furniture and boxes according to your instructions.",
  },
  {
    title: "8. Final Inventory Check",
    text: "We walk through with you to confirm all items arrived safely and match the original inventory list.",
  },
];

export function PackersMoversPakistanBody() {
  return (
    <>
      <InfoBox variant="blue">
        <strong className="text-foreground">Hero Summary:</strong> From a single-room apartment in Rawalpindi to a full factory relocation in Faisalabad, or an international move from Karachi Port to anywhere in the world —{" "}
        <strong className="text-foreground">Best International Movers & Logistics</strong> is Pakistan&apos;s trusted name in professional packing, moving, and freight management. 15+ years, 5,000+ successful moves, 100+ countries served.
      </InfoBox>

      <div className="not-prose grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 text-sm">
        {[
          "15+ Years of Experience",
          "5,000+ Successful Moves",
          "100+ Countries Served",
          "Licensed & Insured Company",
          "24/7 Customer Support",
          "GPS-Tracked Shipments",
        ].map((item) => (
          <div key={item} className="rounded-lg border border-border px-4 py-3 text-muted-foreground">
            {item}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Introduction</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Relocating a home or a business is consistently ranked among the most stressful life events — right alongside changing jobs or renovating a house. Broken furniture, delayed shipments, hidden charges, and untrained labor are not just inconveniences; they can cost thousands of rupees and weeks of frustration. This is exactly the gap that <strong className="text-foreground">Best International Movers & Logistics</strong> was built to close.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          As one of Pakistan&apos;s leading <strong className="text-foreground">packers and movers</strong> companies, we specialize in end-to-end relocation — from a two-bedroom apartment move within Lahore to a complex, multi-container industrial relocation shipped through Port Qasim to Europe or the Middle East. Our teams operate in Islamabad, Rawalpindi, Lahore, Karachi, Faisalabad, Multan, Sialkot, Peshawar, Quetta, Hyderabad, Gujranwala, and Bahawalpur, supported by an international logistics network spanning over 100 countries.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This page covers how professional packing works, pricing factors, moving checklists, insurance, international freight, and real customer case studies — whether you are searching for &quot;packers and movers near me,&quot; &quot;best packers and movers in Pakistan,&quot; or &quot;international moving company.&quot;
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Who Are Packers and Movers?</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Packers and movers</strong> are professional relocation companies that manage packing, loading, transporting, unloading, and unpacking of household goods, office equipment, or industrial machinery. Unlike a simple transport service that only moves items from A to B, a full-service company like Best International Movers & Logistics takes responsibility for the entire journey — protective packing, labeling, inventory documentation, insurance, customs clearance for international shipments, and final placement at destination.
        </p>
        <CheckList
          items={[
            "Residential moving — houses, apartments, and villas",
            "Commercial and office relocation — corporate offices, retail, and co-working spaces",
            "Industrial and factory relocation — machinery, production lines, and warehouses",
            "International relocation — cross-border household and commercial shipments by air, sea, or road",
            "Specialized packing — fragile items, fine art, electronics, and antiques",
            "Freight and cargo services — export packing, container transport, and project logistics",
          ]}
        />
        <p className="text-muted-foreground text-sm mt-4">
          A genuine professional mover is distinguished from informal labor by trained packing staff, proper equipment (trolleys, ramps, moving blankets, hydraulic lifts), and accountability through insurance and documented inventory.
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Hire Professional Packers and Movers?</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Many people in Pakistan still consider a small truck with a couple of laborers &quot;good enough.&quot; In practice, that is where most moving disasters begin. Here is why a licensed <strong className="text-foreground">moving company in Pakistan</strong> makes a measurable difference:
        </p>
        <div className="space-y-4">
          {[
            ["1. Protection Against Damage", "Professionals use bubble wrap, corrugated boxes, wooden crates, and custom crating designed for each item — not guesswork stacking."],
            ["2. Time Efficiency", "A trained team of 4–6 packers can finish in a day what an untrained crew may take two to three days to complete — with far fewer breakages."],
            ["3. Insurance Coverage", "Licensed companies offer cargo insurance if accidents happen. Informal labor offers no such protection."],
            ["4. Proper Equipment", "Hydraulic trolleys, straps, ramps, and specialized crates for glass or fine art are standard — unavailable to random labor contractors."],
            ["5. Legal and Customs Expertise", "For international moves, professionals manage customs clearance, export documentation, and destination import rules."],
            ["6. Stress Reduction", "You focus on family, job, or new office setup while logistics and timing are managed for you."],
            ["7. Accountability", "A registered company has a business address, contract, customer service line, and reputation to protect."],
          ].map(([title, text]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Best International Movers & Logistics?</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["What We Offer", "Why It Matters"]}
          rows={[
            ["15+ Years of Experience", "Deep knowledge of Pakistani roads, ports, customs, and city-specific challenges"],
            ["5,000+ Successful Moves", "Proven track record across residential, corporate, and industrial relocations"],
            ["100+ Countries Served", "Genuine international freight via air, sea, and road"],
            ["Certified Packing Experts", "Trained staff for fragile, fine art, and heavy furniture packing"],
            ["Cargo Insurance", "Financial protection for goods during transit"],
            ["GPS Tracking", "Real-time visibility of your shipment"],
            ["Customs Clearance Experts", "Pakistan Customs and destination import knowledge"],
            ["24/7 Customer Support", "Updates and emergency help around the clock"],
            ["Licensed Company", "Registered and compliant with Pakistani business and transport regulations"],
            ["Door-to-Door Service", "Old address to new address — no gaps, no third-party handoffs"],
          ]}
        />
        <p className="text-muted-foreground text-sm mt-4">
          Every move — from a small apartment in Peshawar to a factory relocation from Faisalabad to Dubai — is assigned a dedicated move coordinator who manages timelines and communication.
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Complete Services</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Home size={20} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Residential Moving Services</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              <strong className="text-foreground">House Shifting</strong> — Complete home relocation for 1-bedroom apartments up to large family houses, from kitchenware to heavy furniture.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              <strong className="text-foreground">Apartment Moving</strong> — Experienced with tight staircases, small elevators, and limited parking in dense areas like Karachi DHA/Clifton and Islamabad high-rises.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Villa Moving</strong> — Pre-move survey for manpower and vehicle sizing when larger homes mean more furniture, fragile décor, and multiple floors.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 size={20} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Commercial & Corporate Moving</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              <strong className="text-foreground">Office Relocation</strong> — Off-hours or weekend moves, IT labeling, and workstation setup by floor plan to minimize downtime. See{" "}
              <Link to="/services/office-moving-services/" className="text-gold hover:underline">Office Moving Services</Link> and{" "}
              <Link to="/office-relocation-karachi/" className="text-gold hover:underline">Office Relocation Karachi</Link>.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Corporate Relocation</strong> — Multi-department plans with asset inventory, confidential document handling, and multi-vehicle coordination via{" "}
              <Link to="/services/corporate-logistics-pakistan/" className="text-gold hover:underline">Corporate Logistics Pakistan</Link>.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Factory size={20} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Industrial & Specialized Moving</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              <strong className="text-foreground">Industrial & Factory Relocation</strong> — Rigging, cranes, flatbed trucks, and phased schedules for machinery and production lines.{" "}
              <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link>
              {" · "}
              <Link to="/services/factory-relocation-pakistan/" className="text-gold hover:underline">Factory Relocation Pakistan</Link>
              {" · "}
              <Link to="/industrial-packing-services/" className="text-gold hover:underline">Industrial Packing Services</Link>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Warehouse Moving</strong> — Palletizing, labeling, and inventory reconciliation.{" "}
              <Link to="/services/warehouse-relocation/" className="text-gold hover:underline">Warehouse Relocation</Link>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Globe2 size={20} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">International Relocation</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Packing, export documentation, customs clearance, ocean or air freight, and overseas delivery. Explore{" "}
              <Link to="/international-movers-and-packers-pakistan" className="text-gold hover:underline">International Movers and Packers</Link>,{" "}
              <Link to="/pakistan-to-dubai-movers" className="text-gold hover:underline">Pakistan to Dubai</Link>,{" "}
              <Link to="/pakistan-to-uk-movers" className="text-gold hover:underline">Pakistan to UK</Link>, and{" "}
              <Link to="/pakistan-to-canada-movers" className="text-gold hover:underline">Pakistan to Canada</Link>.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Package size={20} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Specialized Packing Services</h3>
            </div>
            <CheckList
              items={[
                "Furniture packing — blankets and shrink wrap against scratches and moisture",
                "Fragile packing — bubble wrap and double-walled boxes for glassware and décor",
                "Glass packing — flat-pack crating with foam corner protectors",
                "Fine art packing — museum-standard materials and custom wooden crates",
                "Cargo packaging — export-standard packing for air and sea freight",
                "Wooden & custom crating — heavy-duty or made-to-measure protection",
              ]}
            />
            <p className="text-muted-foreground text-sm mt-3">
              <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>
              {" · "}
              <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>
              {" · "}
              <Link to="/glass-packing-services/" className="text-gold hover:underline">Glass Packing Services</Link>
              {" · "}
              <Link to="/packaging-logistics-solutions/" className="text-gold hover:underline">Packaging & Logistics Solutions</Link>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Freight & Logistics Services</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Freight management, project logistics, FCL/LCL container transport, air freight, sea freight, road freight, door-to-door delivery, export packing, and import logistics.
            </p>
            <p className="text-muted-foreground text-sm">
              <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>
              {" · "}
              <Link to="/services/project-logistics-pakistan/" className="text-gold hover:underline">Project Logistics Pakistan</Link>
              {" · "}
              <Link to="/services/sea-freight-services/" className="text-gold hover:underline">Sea Freight</Link>
              {" · "}
              <Link to="/services/air-freight/" className="text-gold hover:underline">Air Freight</Link>
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cities We Serve</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            ["Islamabad", "Diplomatic and corporate relocations"],
            ["Rawalpindi", "Twin-city moves with Islamabad"],
            ["Lahore", "High-demand residential and corporate hub"],
            ["Karachi", "Largest city and primary shipping gateway"],
            ["Faisalabad", "Industrial relocation for textile & manufacturing"],
            ["Multan", "Growing residential and commercial demand"],
            ["Sialkot", "Export-focused cargo packaging"],
            ["Peshawar", "House shifting and office relocation"],
            ["Quetta", "Cross-provincial road freight"],
            ["Hyderabad", "Residential and commercial relocation"],
            ["Gujranwala", "Industrial and household moving"],
            ["Bahawalpur", "Complete house shifting and packing"],
          ].map(([city, note]) => (
            <div key={city}>
              <h3 className="font-semibold text-foreground">{city}</h3>
              <p className="text-muted-foreground text-sm">{note}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          Connected to <strong className="text-foreground">Karachi Port</strong>, <strong className="text-foreground">Port Qasim</strong>, and <strong className="text-foreground">Lahore Dry Port</strong>. City pages:{" "}
          <Link to="/house-shifting-karachi/" className="text-gold hover:underline">House Shifting Karachi</Link>
          {" · "}
          <Link to="/packers-and-movers-lahore" className="text-gold hover:underline">Packers and Movers Lahore</Link>
          {" · "}
          <Link to="/house-shifting-islamabad" className="text-gold hover:underline">House Shifting Islamabad</Link>
          {" · "}
          <Link to="/packers-and-movers-rawalpindi/" className="text-gold hover:underline">Rawalpindi</Link>
          {" · "}
          <Link to="/movers-and-packers-in-peshawar" className="text-gold hover:underline">Peshawar</Link>
          {" · "}
          <Link to="/locations/cargo-services-faisalabad/" className="text-gold hover:underline">Faisalabad Cargo</Link>
          {" · "}
          <Link to="/locations/cargo-services-sialkot/" className="text-gold hover:underline">Sialkot Cargo</Link>
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Countries We Serve</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <CheckList
          items={[
            "Middle East — UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia, Qatar, Oman, Bahrain, Kuwait",
            "Europe — United Kingdom, Germany, France, Italy, Netherlands, Spain",
            "North America — United States, Canada",
            "Asia Pacific — China, Malaysia, Singapore, Australia",
            "Africa — South Africa, Kenya, Nigeria",
          ]}
        />
        <p className="text-muted-foreground text-sm mt-4">
          Our international specialists handle customs documentation, freight booking, and destination delivery across 100+ countries.
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Industries We Serve</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <CheckList
          items={[
            "Corporate & IT — office relocations with minimal downtime",
            "Textile & Manufacturing — factory and machinery relocation (Faisalabad, Sialkot, Gujranwala)",
            "Oil & Gas — project logistics for heavy equipment",
            "Retail & E-commerce — warehouse relocation and inventory transport",
            "Healthcare — sensitive equipment with specialized handling",
            "Diplomatic & NGO — international household relocation for staff transfers",
            "Education — furniture, labs, and libraries",
            "Hospitality — hotel and restaurant equipment relocation",
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Moving Process</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <div className="space-y-6">
          {processSteps.map((step) => (
            <div key={step.title}>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packing Materials We Use</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Material", "Purpose"]}
          rows={[
            ["Bubble Wrap", "Cushioning for fragile and glass items"],
            ["Corrugated Boxes", "Standard packing for household goods and documents"],
            ["Wooden Crates", "Heavy-duty protection for valuable or oversized items"],
            ["Custom Crates", "Made-to-fit protection for irregularly shaped items"],
            ["Packing Tape & Labels", "Secure sealing and clear identification"],
            ["Moving Blankets", "Scratch and dent protection for furniture"],
            ["Shrink Wrap", "Moisture and dust protection during transit"],
            ["Foam Sheets", "Corner and edge protection for glass and electronics"],
            ["Stretch Film", "Securing drawers and doors on furniture"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Insurance Coverage</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Every shipment — domestic or international — can be covered under a <strong className="text-foreground">cargo insurance</strong> policy that protects you financially in case of loss or damage during transit. Accidents, weather, customs handling, and multi-stage transfers all create risk; insurance provides peace of mind. Discuss options during your free survey so coverage matches the value of your goods. Learn more about{" "}
          <Link to="/services/cargo-insurance-services/" className="text-gold hover:underline">Cargo Insurance Services</Link>.
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Pricing Guide — Moving Cost Factors</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <p className="text-muted-foreground leading-relaxed mb-4">
          Packers and movers pricing in Pakistan is not one-size-fits-all. Treat any quote without a proper survey with caution.
        </p>
        <CheckList
          items={[
            "Volume of goods — packing materials, manpower, and vehicle space",
            "Distance — local vs intercity vs international",
            "Type of move — residential, industrial, or international complexity",
            "Packing requirements — fragile, fine art, or antique crating",
            "Floor access — no elevator or narrow stairs adds labor and time",
            "Insurance coverage — reduces financial risk",
            "Additional services — disassembly, storage, unpacking",
            "Transport mode — air vs sea vs road for international",
            "Customs & documentation — export/import rules by destination",
            "Seasonal demand — school year and mid-year corporate peaks",
          ]}
        />
        <p className="text-muted-foreground leading-relaxed mt-4">
          We provide a <strong className="text-foreground">free, no-obligation survey and quote</strong> so you know exactly what you&apos;re paying before committing.
        </p>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Step-by-Step Moving Timeline</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Timeframe", "What to Do"]}
          rows={[
            ["4–6 Weeks Before", "Research and book packers and movers; declutter"],
            ["3 Weeks Before", "Collect packing materials; notify utility providers"],
            ["2 Weeks Before", "Pack non-essentials; confirm moving date"],
            ["1 Week Before", "Pack most household items; label boxes by room"],
            ["1–2 Days Before", "Pack essentials; confirm arrival time with movers"],
            ["Moving Day", "Supervise loading; final walkthrough of old property"],
            ["Arrival Day", "Supervise unloading; check inventory"],
            ["1 Week After", "Unpack, organize, update address with institutions"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Moving Checklists</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <h3 className="text-lg font-semibold text-foreground mb-2">House Moving Checklist</h3>
        <CheckList
          items={[
            "Book your packers and movers company in advance",
            "Declutter and donate/sell unwanted items",
            "Collect packing materials (boxes, tape, bubble wrap)",
            "Label boxes by room and content",
            "Pack an essentials box for the first night",
            "Take photos of valuable items before packing",
            "Disconnect and prepare appliances for transport",
            "Confirm moving date and time with your mover",
            "Update your address with banks, schools, and utilities",
            "Do a final walkthrough before leaving the old property",
          ]}
        />
        <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Office Relocation Checklist</h3>
        <CheckList
          items={[
            "Notify employees and clients of the moving date",
            "Create a floor plan for the new office",
            "Label IT equipment and cables before disassembly",
            "Back up all critical data before moving computers",
            "Secure confidential documents separately",
            "Schedule the move during off-peak business hours",
            "Coordinate with building management for access/parking",
            "Set up workstations before staff return",
            "Update business address on official documents and listings",
            "Conduct a post-move inventory check",
          ]}
        />
        <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Packing Checklist</h3>
        <CheckList
          items={[
            "Sort items by room and category",
            "Use appropriate box sizes (heavy items in small boxes)",
            "Wrap fragile items individually in bubble wrap",
            "Use wooden crates for valuable or oversized items",
            "Label boxes Fragile where applicable",
            "Keep an inventory list of all packed boxes",
            "Pack a separate box for important documents",
            "Avoid overpacking boxes beyond safe lifting weight",
          ]}
        />
        <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Moving Day Checklist</h3>
        <CheckList
          items={[
            "Confirm arrival time with your moving team",
            "Keep essentials (charger, medicines, documents) with you",
            "Do a final walkthrough of every room",
            "Check all cupboards, drawers, and storage areas",
            "Confirm meter readings for utilities",
            "Hand over keys only after confirming everything is loaded",
            "Keep the moving supervisor's contact number handy",
          ]}
        />
        <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">International Moving Checklist</h3>
        <CheckList
          items={[
            "Check destination country's customs and import regulations",
            "Prepare and organize export documentation",
            "Confirm insurance coverage for international transit",
            "Choose air freight, sea freight, or a combination",
            "Plan temporary accommodation if needed at destination",
            "Arrange customs clearance at destination",
            "Track shipment via GPS/tracking updates",
            "Confirm final delivery address and receiving contact abroad",
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Benefits of Professional Movers</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <CheckList
          items={[
            "Reduced risk of damage through proper packing materials and techniques",
            "Time savings with experienced, efficient teams",
            "Financial protection through cargo insurance",
            "Reduced physical strain — no heavy lifting for you or your family",
            "Professional equipment for safe loading and transport",
            "Structured process with inventory tracking and accountability",
            "International expertise for customs and cross-border logistics",
            "Peace of mind knowing experienced professionals handle your valuables",
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes People Make When Moving</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <CheckList
          items={[
            "Hiring based on price alone — cheapest often means no insurance and least experience",
            "Not decluttering — paying to move items you no longer need",
            "Skipping the survey — quotes without assessment lead to disputes later",
            "Not asking about insurance — goods are not automatically insured",
            "Packing valuables without specialized packing for art, antiques, and electronics",
            "Underestimating international paperwork — missing docs delay shipments for weeks",
            "Not labeling boxes — confusion and wasted time when unpacking",
            "Booking too late — limited dates and higher costs",
            "Not confirming inventory — harder to claim missing items later",
            "Ignoring licensing and reviews — unregistered companies increase risk",
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Expert Tips for a Smooth Move</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <CheckList
          items={[
            "Always request a written, itemized quote — never rely on verbal estimates",
            "Ask specifically whether cargo insurance is included or optional",
            "For international moves, confirm who handles customs clearance",
            "Photograph electronics wiring before disconnecting",
            "Pack a first-night bag with essentials",
            "For office relocations, schedule over a weekend or holiday",
            "Compare air vs sea freight based on timeline and budget",
            "Keep a personal inventory list alongside the mover's documentation",
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Real Customer Success Stories</h2>
      <InfoBox variant="save">
        <h3 className="text-foreground font-semibold mb-2">Case Study 1: Corporate Office — Lahore to Islamabad</h3>
        <p className="mb-4">
          A mid-sized IT company needed to relocate its 60-person office from Lahore to Islamabad with less than two weeks&apos; notice. We packed IT equipment with anti-static materials and executed the move over a single weekend. The office was fully operational by Monday morning with zero data loss and zero equipment damage.
        </p>
        <h3 className="text-foreground font-semibold mb-2">Case Study 2: International Household — Karachi to Dubai</h3>
        <p className="mb-4">
          A family relocating for a job transfer needed their household — including fragile chinaware and a grand piano — shipped from Karachi to Dubai. Custom wooden crating for the piano and fine art packing for décor items cleared customs without delays; the shipment was GPS-tracked via Karachi Port.
        </p>
        <h3 className="text-foreground font-semibold mb-2">Case Study 3: Factory Relocation — Faisalabad to Gujranwala</h3>
        <p className="mb-4">
          A textile manufacturer relocated an entire production line. Our industrial team coordinated rigging, flatbed transport, and a phased schedule that kept partial production running. The full transition finished within the client&apos;s projected downtime window.
        </p>
        <h3 className="text-foreground font-semibold mb-2">Case Study 4: House Shifting — Rawalpindi to Peshawar</h3>
        <p>
          A family with young children needed a stress-free shift. We packed the entire home in one day and delivered the next morning with full unpacking and furniture placement — so the family could settle in almost immediately.
        </p>
      </InfoBox>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Professional Packers vs DIY Moving</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Factor", "Professional Packers & Movers", "DIY Moving"]}
          rows={[
            ["Risk of Damage", "Low (proper materials & training)", "High (inexperienced handling)"],
            ["Time Required", "1–2 days typically", "3–7 days typically"],
            ["Insurance", "Available", "Not available"],
            ["Physical Effort", "Minimal for the customer", "High — heavy lifting required"],
            ["Equipment", "Professional trolleys, ramps, crates", "Improvised/borrowed equipment"],
            ["Cost", "Higher upfront; lower risk cost", "Lower upfront; higher risk cost"],
            ["International Docs", "Handled by the company", "Customer manages independently"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">House Moving vs Office Moving</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Factor", "House Moving", "Office Moving"]}
          rows={[
            ["Primary Focus", "Furniture, kitchenware, personal belongings", "IT equipment, documents, workstations"],
            ["Timing", "Flexible", "Often outside business hours"],
            ["Special Handling", "Fragile & sentimental items", "Confidential docs, servers, electronics"],
            ["Downtime Concern", "Minimal", "Critical — affects business operations"],
            ["Setup at Destination", "Furniture placement", "Workstation & network setup"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">International vs Domestic Moving</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Factor", "International Moving", "Domestic Moving"]}
          rows={[
            ["Documentation", "Export/import customs paperwork required", "Minimal documentation"],
            ["Transport Modes", "Air, sea, or combined", "Primarily road freight"],
            ["Timeline", "Weeks (depending on freight mode)", "1–3 days typically"],
            ["Cost", "Higher — freight mode and distance", "Lower — city distance"],
            ["Customs Clearance", "Required at both ends", "Not applicable"],
            ["Insurance Importance", "Critical", "Recommended"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Air vs Sea vs Road Freight</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Plane size={18} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Air Freight</h3>
            </div>
            <p className="text-muted-foreground text-sm">Fastest; best for urgent, high-value, smaller shipments.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Ship size={18} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Sea Freight</h3>
            </div>
            <p className="text-muted-foreground text-sm">Most economical for large household or commercial shipments via Karachi Port / Port Qasim.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Truck size={18} className="text-gold" />
              <h3 className="text-lg font-semibold text-foreground">Road Freight</h3>
            </div>
            <p className="text-muted-foreground text-sm">Cost-effective for domestic city-to-city and regional cross-border moves.</p>
          </div>
        </div>
        <DataTable
          headers={["Factor", "Air Freight", "Sea Freight", "Road Freight"]}
          rows={[
            ["Speed", "Fastest", "Slowest", "Moderate"],
            ["Cost", "Highest", "Most economical for volume", "Cost-effective regionally"],
            ["Best For", "Urgent, high-value, smaller loads", "Large household/commercial", "Domestic & nearby cross-border"],
            ["Volume", "Limited", "High (FCL)", "Moderate"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Wooden Crates vs Standard Packaging</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Factor", "Wooden Crates", "Standard Packaging (Boxes)"]}
          rows={[
            ["Protection Level", "Very high", "Moderate"],
            ["Best For", "Fragile, valuable, oversized items", "General household goods"],
            ["Cost", "Higher", "Lower"],
            ["Reusability", "Sometimes reusable", "Single-use typically"],
            ["International Suitability", "Ideal for long-distance transit", "Suitable for shorter domestic moves"],
          ]}
        />
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Packing Materials Comparison</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <DataTable
          headers={["Material", "Protection Level", "Best Use Case", "Cost"]}
          rows={[
            ["Bubble Wrap", "Medium", "Glassware, small fragiles", "Low"],
            ["Corrugated Boxes", "Medium", "General household items", "Low"],
            ["Wooden Crates", "High", "Valuables, fine art, machinery parts", "High"],
            ["Custom Crates", "Very High", "Irregular or oversized items", "High"],
            ["Foam Sheets", "Medium-High", "Electronics, glass edges", "Medium"],
            ["Moving Blankets", "Medium", "Furniture surfaces", "Low-Medium"],
          ]}
        />
      </div>

      <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">Ready to Move Without the Stress?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Whether you&apos;re shifting a home in Lahore, relocating your office in Karachi, or planning an international move from Islamabad to Dubai, London, or anywhere else — <strong className="text-foreground">Best International Movers & Logistics</strong> handles it with professionalism, care, and full accountability.
        </p>
        <CheckList
          items={[
            "15+ Years of Experience",
            "5,000+ Successful Moves",
            "100+ Countries Served",
            "Licensed, Insured & GPS-Tracked",
            "24/7 Customer Support",
          ]}
        />
        <p className="text-muted-foreground leading-relaxed my-6">
          Get your <strong className="text-foreground">free moving quote today</strong> — no obligation, no hidden charges, just an honest assessment of your move.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+923009130211" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
            <Phone size={18} />
            Call Now: 0300-9130211
          </a>
          <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy-mid text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid/80 transition-colors">
            WhatsApp Us
          </a>
          <a href="mailto:info@bestintlmovers.com" className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded-lg hover:border-gold/40 transition-colors">
            <FileText size={18} />
            info@bestintlmovers.com
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Related Services & Resources</h2>
      <div className="glass-card rounded-xl p-8 border border-border mb-10">
        <div className="grid sm:grid-cols-2 gap-3 text-sm not-prose">
          <Link to="/international-movers-and-packers-pakistan" className="text-gold hover:underline">International Movers and Packers</Link>
          <Link to="/services/project-logistics-pakistan/" className="text-gold hover:underline">Project Logistics Pakistan</Link>
          <Link to="/services/freight-management-services/" className="text-gold hover:underline">Freight Management Services</Link>
          <Link to="/services/wooden-crating-services/" className="text-gold hover:underline">Wooden Crating Services</Link>
          <Link to="/services/custom-crating-services/" className="text-gold hover:underline">Custom Crating Services</Link>
          <Link to="/glass-packing-services/" className="text-gold hover:underline">Glass Packing Services</Link>
          <Link to="/industrial-packing-services/" className="text-gold hover:underline">Industrial Packing Services</Link>
          <Link to="/packaging-logistics-solutions/" className="text-gold hover:underline">Packaging & Logistics Solutions</Link>
          <Link to="/services/factory-relocation-pakistan/" className="text-gold hover:underline">Factory Relocation Pakistan</Link>
          <Link to="/services/industrial-relocation/" className="text-gold hover:underline">Industrial Relocation</Link>
          <Link to="/contact" className="text-gold hover:underline">Get a Free Moving Quote</Link>
        </div>
      </div>
    </>
  );
}
