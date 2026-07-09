import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Package,
  Globe,
  Ship,
  Plane,
  FileText,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  Award,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

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

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Import Export Services Pakistan — Best International Movers & Logistics",
    serviceType: "Import Export Services",
    description: "Pakistan's most trusted import & export freight company. Air Freight, Sea Freight, Customs Clearance, Export Documentation, Import Duty, Door-to-Door services to UAE, UK, USA, Canada, Germany, China.",
    url: "https://bestintlmovers.com/services/import-export-services-pakistan",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const ImportExportServicesPakistan = () => {
  const serviceSeo = {
    title: "Import Export Services Pakistan | Best International Movers",
    description: "Pakistan's most trusted import & export freight company. Air Freight, Sea Freight, Customs Clearance, Export Documentation, Import Duty, Door-to-Door services to UAE, UK, USA, Canada, Germany, China.",
    keywords: "import export services pakistan, pakistan import export company, freight forwarder pakistan, customs clearance pakistan, import services pakistan, export services pakistan, cargo company pakistan, sea freight pakistan, air freight pakistan, webok customs pakistan, form e pakistan, certificate of origin pakistan",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/import-export-services-pakistan" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Globe size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Import Export Services Pakistan
                </h1>
                <p className="text-gold font-semibold mt-1">Pakistan's Most Trusted Import & Export Freight Company</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Air Freight</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Sea Freight</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Customs Clearance</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Export Documentation</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Import Duty</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Door-to-Door</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={14} /> UAE</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> UK</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> USA</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Canada</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Germany</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> China</span>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Updated June 2026 | IATA · FIATA · WeBOC · Pakistan Customs Licensed | Karachi · Lahore · Islamabad · Faisalabad · Sialkot
            </p>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">📌 bestintlmovers.com — Import Export Services at a Glance</h2>
              <CheckList
                items={[
                  "IATA Licensed Air Freight Agent — all major airlines",
                  "Pakistan Customs C-Licence — WeBOC registered clearing agent",
                  "FIATA Member — international freight standards",
                  "Sea Freight — FCL & LCL, Maersk, MSC, CMA CGM, Hapag-Lloyd partners",
                  "Export Documentation — GD, Form E, Certificate of Origin, Phytosanitary",
                  "Import Clearance — duty calculation, WeBOC GD, port examination handling",
                  "All Pakistan cities: Karachi, Lahore, Islamabad, Faisalabad, Sialkot, Rawalpindi",
                  "All global routes: UAE, UK, USA, Canada, Germany, China, Australia, GCC",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">1. Import Export Services Overview — What We Offer</h2>
              <p className="text-muted-foreground mb-6">
                bestintlmovers.com provides a full-spectrum import and export service covering every step of the international trade journey. Our services are designed for Pakistani businesses of all sizes — from first-time exporters discovering global markets to established importers managing regular supply chains.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Our Core Import Export Service Categories</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Package size={18} /> Export Services from Pakistan</h4>
                  <CheckList
                    items={[
                      "Air freight export — Pakistan to UAE, UK, USA, Germany, China and all global markets",
                      "Sea freight FCL and LCL export — Karachi Port to all global ports",
                      "Export customs clearance — WeBOC Goods Declaration (GD) filing",
                      "Form E submission — State Bank of Pakistan forex repatriation compliance",
                      "Certificate of Origin — TDAP, KCCI, LCCI, ICCI, SCCI, FCCI",
                      "Phytosanitary, health, and fumigation certificates for food exports",
                      "Export packing, labelling, and container stuffing",
                      "Door-to-door export — factory pickup to overseas buyer's warehouse",
                    ]}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Ship size={18} /> Import Services into Pakistan</h4>
                  <CheckList
                    items={[
                      "Sea freight import — FCL and LCL from China, UAE, UK, USA, Germany",
                      "Air freight import — urgent machinery parts, electronics, pharmaceuticals",
                      "Import customs clearance — WeBOC GD filing, duty calculation, examination handling",
                      "Import duty and tax payment management",
                      "Bonded warehouse services — defer duty until cargo is needed",
                      "Port Karachi, Port Qasim, and JIAP airport import clearance",
                      "Anti-dumping and regulatory compliance for controlled imports",
                      "Door-to-door import — overseas supplier's door to your Pakistan warehouse",
                    ]}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Plane size={18} /> Air Freight Services Pakistan</h4>
                  <CheckList
                    items={[
                      "IATA-licensed air cargo agent — all major airlines",
                      "Daily air freight to UAE, UK, USA, Germany, China, Saudi Arabia",
                      "Express air freight — same-day and next-day departure options",
                      "Perishable air freight — mangoes, seafood, flowers with cool room",
                      "Dangerous goods (DG) air freight — IATA DGR certified handling",
                      "Air freight import — machinery parts, electronics, pharmaceuticals",
                      "Air cargo consolidation — groupage for smaller shipments",
                      "Real-time AWB tracking — online and WhatsApp updates",
                    ]}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><Ship size={18} /> Sea Freight Services Pakistan</h4>
                  <CheckList
                    items={[
                      "FCL booking — 20ft and 40ft containers, all major shipping lines",
                      "LCL consolidation — weekly groupage sailings from Karachi",
                      "Reefer containers — perishable and temperature-controlled cargo",
                      "Flat rack and open top — OOG and machinery cargo",
                      "Karachi Port (KICT, QICT, PICT) and Port Qasim operations",
                      "Sea freight import clearance — all terminal operators",
                      "VGM submission, cargo cut-off management",
                      "Bill of Lading — Original, Telex Release, Sea Waybill",
                    ]}
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2"><FileText size={18} /> Customs Clearance Services Pakistan</h4>
                  <CheckList
                    items={[
                      "WeBOC Goods Declaration (GD) filing — export and import",
                      "Risk channel management — Green, Yellow, Red channel handling",
                      "Import duty calculation and HS code classification advice",
                      "Examination representation at Karachi Port and JIAP",
                      "SRO duty exemption and concession applications",
                      "FASTER scheme registration for pre-approved exporters",
                      "Pakistan Single Window (PSW) compliance",
                      "Post-clearance audit representation and dispute resolution",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">2. Export Services from Pakistan — Complete Guide</h2>
              <p className="text-muted-foreground mb-6">
                Pakistan's export sector generates over USD 30 billion annually across textiles, food, industrial goods, and services. bestintlmovers.com has been facilitating Pakistani exports for 15+ years — helping manufacturers, traders, and SMEs access global markets with reliable, compliant, cost-effective freight solutions.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Pakistan's Top Export Routes — Our Coverage</h3>
              <DataTable
                headers={["Export Route", "Mode", "Transit Time", "Our Service Level"]}
                rows={[
                  ["Pakistan → UAE (Dubai, AD, SHJ)", "Air + Sea", "Air: 1-5d / Sea: 6-18d", "Daily air / Weekly sea FCL+LCL"],
                  ["Pakistan → UK (Felixstowe, LHR)", "Air + Sea", "Air: 3-5d / Sea: 25-35d", "3x weekly air / Weekly sea"],
                  ["Pakistan → USA (NY, LA, Houston)", "Air + Sea", "Air: 4-6d / Sea: 32-45d", "Regular air / Bi-weekly sea"],
                  ["Pakistan → Germany (FRA, HH)", "Air + Sea", "Air: 2-4d / Sea: 24-30d", "Daily air / Weekly sea"],
                  ["Pakistan → China (SHA, GZ, TJ)", "Air + Sea", "Air: 2-4d / Sea: 14-20d", "Daily air / Weekly sea"],
                  ["Pakistan → Saudi Arabia", "Air + Sea", "Air: 2-3d / Sea: 10-16d", "Daily air / Weekly sea"],
                  ["Pakistan → Canada (YYZ, YVR)", "Air + Sea", "Air: 4-6d / Sea: 38-52d", "Regular air / Bi-weekly sea"],
                  ["Pakistan → Australia (SYD, MEL)", "Air + Sea", "Air: 5-7d / Sea: 24-32d", "Regular air / Weekly sea"],
                  ["Pakistan → Netherlands (RTM, AMS)", "Air + Sea", "Air: 3-5d / Sea: 24-30d", "Daily air / Weekly sea"],
                  ["Pakistan → Afghanistan (KBL)", "Road + Air", "Road: 3-7d / Air: 1-2d", "Truck convoy + air freight"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">What Our Export Service Includes</h3>
              <CheckList
                items={[
                  "Pre-shipment consultation: best mode, route, Incoterm, and documentation advice",
                  "Factory or warehouse pickup from anywhere in Pakistan",
                  "Professional export packing and container stuffing",
                  "All export documentation: GD, Form E, Certificate of Origin, commodity certs",
                  "Pakistan Customs clearance: WeBOC filing, LEO (Let Export Order) management",
                  "Freight booking: air freight AWB or sea freight B/L on your preferred carrier",
                  "Cargo insurance: All Risks (ICC A) policy — we arrange and manage",
                  "Destination coordination: our partner network handles import clearance and delivery",
                  "Payment documentation: B/L and full doc set for Letter of Credit presentation",
                ]}
              />

              <InfoBox variant="green">
                <strong>✅ Our Export Promise to Pakistani Businesses</strong>
                <p className="mt-2">On-time shipment — we have never missed a booked sailing or flight due to our error. Transparent pricing — itemised quotes with ZERO hidden charges. Compliant documentation — zero customs penalties for our clients over 15 years. Single point of contact — one account manager handles your entire shipment. Real-time tracking — WhatsApp updates at every stage. Competitive rates — we leverage volume to negotiate best carrier rates for you.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">3. Import Services into Pakistan — Complete Guide</h2>
              <p className="text-muted-foreground mb-6">
                Pakistan imports over USD 55 billion worth of goods annually — from Chinese machinery and electronics to UAE re-exports, European chemicals, American agricultural products, and Japanese vehicles. bestintlmovers.com provides complete import services into Pakistan — from supplier booking in the origin country to cleared and delivered cargo at your Pakistan warehouse.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Pakistan's Top Import Routes — Our Coverage</h3>
              <DataTable
                headers={["Import Route", "Key Commodities", "Mode", "Transit to Karachi"]}
                rows={[
                  ["China → Pakistan", "Machinery, electronics, steel, consumer goods, chemicals", "Sea FCL/LCL + Air", "14-20 days sea / 2-3 days air"],
                  ["UAE → Pakistan", "Re-exports, electronics, gold, luxury goods", "Air + Sea", "1-3 days air / 5-10 days sea"],
                  ["USA → Pakistan", "Aircraft parts, chemicals, soybean, agricultural", "Air + Sea", "3-5 days air / 30-42 days sea"],
                  ["Germany → Pakistan", "Machinery, chemicals, automotive parts, medical devices", "Air + Sea", "2-4 days air / 24-30 days sea"],
                  ["UK → Pakistan", "Pharmaceuticals, chemicals, whisky (licensed), used cars", "Air + Sea", "3-5 days air / 25-35 days sea"],
                  ["Japan → Pakistan", "Used vehicles, electronics, machinery", "Sea (RoRo/FCL)", "18-25 days sea"],
                  ["Indonesia → Pakistan", "Palm oil, rubber, plywood", "Sea FCL (bulk)", "12-18 days sea"],
                  ["Saudi Arabia → Pakistan", "Petroleum products, chemicals, dates", "Sea tanker + Air", "5-12 days"],
                  ["Turkey → Pakistan", "Textiles, machinery, construction materials", "Sea FCL/LCL + Air", "14-20 days sea"],
                  ["South Korea → Pakistan", "Electronics, vehicles, steel", "Sea FCL + Air", "16-22 days sea"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Pakistan Import Duty Structure — What Importers Must Know</h3>
              <DataTable
                headers={["Duty Type", "Rate", "Applies To", "Notes"]}
                rows={[
                  ["Customs Duty (CD)", "0–100% (varies by HS code)", "All imports", "Pakistan tariff schedule — check FBR website"],
                  ["Additional Customs Duty", "2–7%", "Many import categories", "Added on top of basic CD"],
                  ["Regulatory Duty (RD)", "0–100%", "Specific items", "Luxury goods, non-essential items"],
                  ["Sales Tax (ST)", "17% standard", "Most imports", "Input tax adjustable for registered businesses"],
                  ["Additional Sales Tax", "3–5%", "Non-essential imports", "Check notification for applicable items"],
                  ["Withholding Tax (WHT/AT)", "2–6%", "Commercial imports", "Adjustable against tax liability"],
                  ["Anti-Dumping Duty (ADD)", "Varies", "Specific origin/product", "Check NTC anti-dumping orders"],
                  ["Total Effective Rate", "Up to 70%+ on some items", "Varies hugely", "Always check HS code before importing"],
                ]}
              />

              <InfoBox variant="red">
                <strong>⚠️ Import Duty Warning — Always Check HS Code Before Ordering</strong>
                <p className="mt-2">Pakistan's import duty structure is complex and rates vary enormously by HS code. A product classified under one HS code may attract 10% total tax; the same physical product under a different (incorrect) HS code may attract 60%+. Always verify the correct HS code with bestintlmovers.com BEFORE placing your import order — this prevents costly surprises at Karachi Port. We provide HS code classification advice and duty calculation as part of our import consultation service.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">4. Air Freight Import Export Services Pakistan</h2>
              <p className="text-muted-foreground mb-6">
                Air freight is Pakistan's fastest trade corridor for both exports and imports. bestintlmovers.com operates as a fully IATA-licensed air freight agent from all three major Pakistani airports — JIAP Karachi (KHI), Allama Iqbal International Lahore (LHE), and New Islamabad International Airport (ISB).
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Air Freight Export Rates from Pakistan — 2026</h3>
              <DataTable
                headers={["Route", "+100 kg Rate", "+300 kg Rate", "+500 kg Rate", "Transit"]}
                rows={[
                  ["KHI → Dubai (DXB)", "USD 2.20–3.50/kg", "USD 1.80–2.80/kg", "USD 1.40–2.20/kg", "1-2 days"],
                  ["KHI → London (LHR)", "USD 3.20–5.00/kg", "USD 2.80–4.20/kg", "USD 2.20–3.50/kg", "2-3 days"],
                  ["KHI → Frankfurt(FRA)", "USD 3.00–4.80/kg", "USD 2.60–4.00/kg", "USD 2.00–3.40/kg", "2-3 days"],
                  ["KHI → New York (JFK)", "USD 3.80–6.00/kg", "USD 3.20–5.00/kg", "USD 2.60–4.20/kg", "3-5 days"],
                  ["LHE → Dubai (DXB)", "USD 2.50–3.80/kg", "USD 2.00–3.20/kg", "USD 1.60–2.60/kg", "2-3 days"],
                  ["ISB → Dubai (DXB)", "USD 2.80–4.20/kg", "USD 2.20–3.50/kg", "USD 1.80–2.80/kg", "2-3 days"],
                  ["KHI → Beijing (PEK)", "USD 2.00–3.50/kg", "USD 1.80–3.00/kg", "USD 1.50–2.50/kg", "2-3 days"],
                  ["KHI → Toronto (YYZ)", "USD 3.50–5.50/kg", "USD 3.00–4.80/kg", "USD 2.50–4.00/kg", "3-5 days"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Air Freight Import Rates to Pakistan — 2026</h3>
              <DataTable
                headers={["Route", "+100 kg Rate", "+300 kg Rate", "Transit", "Key Commodities"]}
                rows={[
                  ["Dubai (DXB) → KHI", "USD 1.50–2.80/kg", "USD 1.20–2.20/kg", "1-2 days", "Electronics, machinery parts"],
                  ["London (LHR) → KHI", "USD 2.80–4.50/kg", "USD 2.20–3.80/kg", "2-3 days", "Pharma, chemicals, spare parts"],
                  ["Frankfurt(FRA) → KHI", "USD 2.60–4.20/kg", "USD 2.00–3.50/kg", "2-3 days", "Machinery, medical devices"],
                  ["Beijing (PEK) → KHI", "USD 1.80–3.20/kg", "USD 1.50–2.60/kg", "2-3 days", "Electronics, components"],
                  ["New York (JFK) → KHI", "USD 3.50–5.50/kg", "USD 2.80–4.50/kg", "3-5 days", "Aircraft parts, chemicals"],
                  ["Toronto (YYZ) → KHI", "USD 3.20–5.00/kg", "USD 2.60–4.20/kg", "3-5 days", "Machinery, auto parts"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">5. Sea Freight Import Export Services Pakistan</h2>
              <p className="text-muted-foreground mb-6">
                Sea freight remains the backbone of Pakistan's import-export trade — handling 95%+ of cargo by volume and 70%+ by value. bestintlmovers.com offers comprehensive sea freight services from Karachi Port (KICT, QICT, PICT terminals) and Port Muhammad Bin Qasim.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Sea Freight Export Rates from Karachi — 2026</h3>
              <DataTable
                headers={["Destination", "LCL / CBM", "FCL 20ft", "FCL 40ft", "Port-Port Transit"]}
                rows={[
                  ["Jebel Ali, UAE", "USD 45–75", "USD 350–700", "USD 550–1,100", "3-6 days"],
                  ["Felixstowe, UK", "USD 120–160", "USD 1,100–2,100", "USD 1,700–3,300", "22-28 days"],
                  ["Rotterdam, Netherlands", "USD 130–170", "USD 1,200–2,200", "USD 1,800–3,500", "22-28 days"],
                  ["Hamburg, Germany", "USD 130–175", "USD 1,200–2,400", "USD 1,900–3,800", "22-28 days"],
                  ["New York, USA", "USD 170–220", "USD 2,000–4,000", "USD 3,000–6,000", "28-35 days"],
                  ["Los Angeles, USA", "USD 155–210", "USD 1,800–3,800", "USD 2,800–5,800", "32-40 days"],
                  ["Shanghai, China", "USD 55–90", "USD 400–900", "USD 650–1,400", "14-18 days"],
                  ["Toronto, Canada", "USD 180–230", "USD 2,200–4,500", "USD 3,200–6,500", "38-50 days"],
                  ["Sydney, Australia", "USD 100–160", "USD 1,200–2,400", "USD 1,900–3,800", "22-30 days"],
                  ["Mombasa, Kenya", "USD 65–110", "USD 600–1,200", "USD 900–1,900", "18-25 days"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Sea Freight Import Rates to Karachi — 2026</h3>
              <DataTable
                headers={["Origin", "LCL / CBM", "FCL 20ft", "FCL 40ft", "Port-Port Transit"]}
                rows={[
                  ["Shanghai, China", "USD 60–100", "USD 500–1,100", "USD 750–1,600", "14-18 days"],
                  ["Guangzhou, China", "USD 55–95", "USD 450–1,000", "USD 700–1,500", "12-16 days"],
                  ["Jebel Ali, UAE", "USD 50–80", "USD 400–750", "USD 600–1,100", "3-6 days"],
                  ["Felixstowe, UK", "USD 130–175", "USD 1,200–2,200", "USD 1,800–3,500", "22-28 days"],
                  ["Hamburg, Germany", "USD 130–175", "USD 1,200–2,300", "USD 1,850–3,700", "22-28 days"],
                  ["New York, USA", "USD 175–230", "USD 2,100–4,200", "USD 3,100–6,200", "30-38 days"],
                  ["Tokyo, Japan", "USD 90–140", "USD 900–1,800", "USD 1,350–2,700", "18-24 days"],
                  ["Istanbul, Turkey", "USD 70–120", "USD 650–1,400", "USD 1,000–2,000", "14-20 days"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">6. Customs Clearance Services Pakistan — Export & Import</h2>
              <p className="text-muted-foreground mb-6">
                Customs clearance is the most technically complex and legally sensitive part of import-export operations in Pakistan. A single error — wrong HS code, missing document, incorrect value — can trigger examination, penalties, and significant delays. bestintlmovers.com provides expert customs clearance services at all Pakistan ports and airports.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Export Customs Clearance — Our Process</h3>
              <DataTable
                headers={["Stage", "What We Do", "Timeline"]}
                rows={[
                  ["Pre-clearance", "Document check: Invoice, Packing List, Form E, CoO — verify all fields match", "48 hrs before cut-off"],
                  ["HS Code review", "Confirm correct 8-digit HS code to avoid examination and duty issues", "With each new product"],
                  ["GD Filing", "File Goods Declaration on WeBOC with all required fields", "24-48 hrs before ETD"],
                  ["Channel management", "Green: auto-release. Yellow: doc examination. Red: physical — we manage all", "Per WeBOC RMS assignment"],
                  ["LEO issuance", "Let Export Order obtained — authorises terminal to load cargo", "Same day to 7 days"],
                  ["Post-export", "GD finalisation, Form E closure, B/L coordination", "After vessel departure"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Import Customs Clearance — Our Process</h3>
              <DataTable
                headers={["Stage", "What We Do", "Timeline"]}
                rows={[
                  ["Pre-arrival", "File import GD before vessel/aircraft arrival for faster release", "3-5 days before ETA"],
                  ["Duty calculation", "Calculate total import tax liability: CD + ST + WHT — no surprises", "At booking stage"],
                  ["GD Filing", "File import GD on WeBOC with correct HS code and declared value", "On vessel arrival"],
                  ["Duty payment", "Submit duty payment to bank on your behalf — immediate processing", "After GD assessment"],
                  ["Examination", "If Red channel: coordinate exam time, represent at terminal, resolve queries", "3-7 days if selected"],
                  ["DO issuance", "Delivery Order from shipping line — collect container from terminal", "After customs release"],
                  ["Delivery", "Arrange inland trucking: Karachi to Lahore, Islamabad, Faisalabad etc.", "1-3 days after release"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">7. Import Export Documentation Services Pakistan</h2>
              <p className="text-muted-foreground mb-6">
                Documentation is where most Pakistani importers and exporters face their biggest challenges. bestintlmovers.com provides comprehensive documentation services — preparing, coordinating, and managing every document required for your imports and exports.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Export Documentation We Handle</h3>
              <DataTable
                headers={["Document", "We Do", "Processing Time"]}
                rows={[
                  ["Goods Declaration (GD)", "File on WeBOC with correct HS codes and values", "24-48 hrs"],
                  ["Form E", "Coordinate with exporter's bank — ensure timely endorsement", "3-5 days lead time"],
                  ["Certificate of Origin", "Obtain from TDAP, KCCI, LCCI, ICCI, SCCI, FCCI", "1-3 days"],
                  ["Phytosanitary Certificate", "Coordinate with Dept. of Plant Protection for food/agri", "2-3 days"],
                  ["Export Health Certificate", "Coordinate with Animal Quarantine Department", "2-4 days"],
                  ["Halal Certificate", "Coordinate with Pakistan Halal Authority/PHDEC", "2-5 days"],
                  ["Fumigation Certificate", "Arrange licensed fumigation + certification", "Same day"],
                  ["Commercial Invoice review", "Check for customs compliance before filing", "Same day"],
                  ["Packing List preparation", "Assist in preparing compliant packing list", "Same day"],
                  ["Bill of Lading instructions", "Coordinate B/L issuance with shipping line", "After departure"],
                  ["Form A / REX Certificate", "For EU/UK GSP duty reduction claims", "1-3 days"],
                  ["Pre-Shipment Inspection (PSI)", "Arrange PSI with SGS/Bureau Veritas for required markets", "3-7 days"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Import Documentation We Handle</h3>
              <DataTable
                headers={["Document", "We Do", "Why Important"]}
                rows={[
                  ["Import GD (WeBOC)", "File with correct HS code, value, supplier details", "Legal requirement — no clearance without"],
                  ["Duty Exemption (SRO)", "Apply for applicable duty exemptions under SROs", "Significant cost saving for eligible goods"],
                  ["Import Permit (if required)", "Obtain import permit for regulated goods", "Mandatory for certain categories"],
                  ["Delivery Order (DO)", "Collect from shipping line after duty payment", "Required for container release from terminal"],
                  ["Dray/Transport Arrangement", "Book inland trucking from port to your warehouse", "Final delivery to your door"],
                  ["Bonded Warehouse (if needed)", "Place cargo in bond — defer duty, store safely", "Cash flow management for importers"],
                  ["Customs Examination Report", "Document examination findings for your records", "Evidence if damage claim needed"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">8. Import Export Services — City by City Pakistan</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">Import Export Services Karachi</h3>
                  <p className="text-muted-foreground mb-4">Karachi is Pakistan's commercial capital and the centre of its import-export ecosystem. All major sea freight enters and exits through Karachi Port (KPT) and Port Qasim. JIAP handles the country's largest air cargo volumes. bestintlmovers.com's Karachi office manages the full range of import export services with direct port access.</p>
                  <CheckList
                    items={[
                      "Port Karachi: KICT, QICT, PICT, SAPT terminal operations — all covered",
                      "JIAP air cargo: daily flights export and import — all airlines",
                      "Customs Appraisement East and West — both collectorates handled",
                      "LCL consolidation: weekly groupage sailings to all global ports",
                      "FCL booking: all major shipping lines — competitive market rates",
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">Import Export Services Lahore</h3>
                  <p className="text-muted-foreground mb-4">Lahore is Pakistan's textile and garment export capital. Most Lahore exports are either air-freighted from Allama Iqbal International Airport (LHE) or trucked to Karachi for sea freight. bestintlmovers.com provides full import export services from Lahore — including factory pickup, documentation, and coordination with Karachi port.</p>
                  <CheckList
                    items={[
                      "Air freight direct from LHE airport — Dubai, Saudi Arabia connections",
                      "Road freight: Lahore to Karachi Port — 18-22 hours, PKR 10,000–20,000/ton",
                      "ICD Sheikhupura: Lahore Dry Port — inland customs clearance available",
                      "LCCI Certificate of Origin — issued from Lahore Chamber of Commerce",
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">Import Export Services Islamabad & Rawalpindi</h3>
                  <p className="text-muted-foreground mb-4">Islamabad's New International Airport (ISB) handles growing export and import volumes — particularly pharmaceuticals, diplomatic cargo, and government procurement. bestintlmovers.com offers comprehensive services from Islamabad and Rawalpindi.</p>
                  <CheckList
                    items={[
                      "Air freight from ISB airport — daily connections to Dubai, onwards globally",
                      "Pharmaceutical export: DRAP documentation + air freight coordination",
                      "Diplomatic cargo: embassy clearance knowledge — bestintlmovers.com specialty",
                      "Road to Karachi: PKR 12,000–22,000/ton for sea freight cargo",
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">Import Export Services Faisalabad & Sialkot</h3>
                  <p className="text-muted-foreground mb-4">Faisalabad (Pakistan's textile capital) and Sialkot (surgical instruments and sports goods global hub) generate enormous export volumes. bestintlmovers.com provides dedicated services for these key industrial cities.</p>
                  <CheckList
                    items={[
                      "Faisalabad: Dry Port + road to Karachi — textiles, yarn, fabric FCL exports",
                      "Sialkot: Sialkot International Airport (SKT) for air freight exports",
                      "Sialkot surgical instruments: CE, FDA compliance coordination",
                      "Sialkot sports goods: air freight + sea LCL for different order types",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">9. Import Export Services Pakistan to UAE</h2>
              <p className="text-muted-foreground mb-6">
                The Pakistan-UAE trade corridor is the most active bilateral trade route for Pakistani businesses. UAE is Pakistan's largest export market by value and a major re-export hub for goods onward to Europe, Africa, and Asia. bestintlmovers.com handles hundreds of Pakistan-UAE import and export shipments monthly.
              </p>
              <DataTable
                headers={["Service", "Export Pakistan→UAE", "Import UAE→Pakistan"]}
                rows={[
                  ["Air Freight", "Daily from KHI/LHE/ISB to DXB/AUH/SHJ — 1-2 days", "Daily DXB/SHJ to KHI — 1-2 days"],
                  ["Sea Freight LCL", "Weekly Karachi→Jebel Ali — USD 45-75/CBM", "Weekly JEA→Karachi — USD 50-80/CBM"],
                  ["Sea Freight FCL", "20ft USD 350-700 / 40ft USD 550-1,100", "20ft USD 400-750 / 40ft USD 600-1,100"],
                  ["Export Customs", "WeBOC GD + Form E + CoO", "N/A"],
                  ["Import Customs", "N/A", "WeBOC import GD + duty (5% + 5% VAT)"],
                  ["Door-to-Door", "Pakistan factory → Dubai address", "Dubai supplier → Pakistan warehouse"],
                  ["Transit Time", "Air: 3-5 days D2D / Sea: 10-18 days D2D", "Air: 3-5 days / Sea: 10-16 days D2D"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">10. Import Export Services Pakistan to UK</h2>
              <DataTable
                headers={["Service", "Export Pakistan→UK", "Import UK→Pakistan"]}
                rows={[
                  ["Air Freight", "Daily KHI→LHR via UAE/IST — 3-5 days D2D", "LHR→KHI — 3-5 days D2D"],
                  ["Sea LCL", "Weekly Karachi→Felixstowe — USD 120-160/CBM", "Felixstowe→Karachi — USD 130-175/CBM"],
                  ["Sea FCL", "20ft USD 1,100-2,100 / 40ft USD 1,700-3,300", "20ft USD 1,200-2,200 / 40ft USD 1,800-3,500"],
                  ["UK Import Duty", "N/A", "HMRC: 0-20% + 20% VAT; GSP reduces textiles"],
                  ["CoO/GSP", "Form A / REX cert — reduces UK duty to 0-4%", "N/A"],
                  ["D2D Transit", "Air: 5-7 days / Sea: 32-42 days", "Air: 5-7 days / Sea: 28-36 days"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">11. Import Export Services Pakistan to USA & Canada</h2>
              <CheckList
                items={[
                  "Air freight export: KHI→JFK/LAX — 4-6 days, via DXB or DOH",
                  "Sea freight export: 20ft FCL Karachi→New York USD 2,000–4,000 ocean freight",
                  "ISF (Importer Security Filing): mandatory 24 hrs before Pakistan loading — US broker files",
                  "Air freight import: JFK/LAX→KHI — 4-6 days for urgent machinery parts",
                  "Sea freight import from USA: agricultural products, aircraft spares, chemicals",
                  "Canada: CBSA clearance, GST 5%, similar process to USA",
                  "Break-even LCL vs FCL: ~14 CBM on this route",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">12. Import Export Services Pakistan to China</h2>
              <CheckList
                items={[
                  "Largest Pakistan import source: machinery, electronics, steel, consumer goods, chemicals",
                  "Sea freight import: Shanghai/Guangzhou→Karachi — 14-18 days, weekly sailings",
                  "FCL 20ft from China: USD 500–1,100 ocean freight",
                  "Export to China: cotton, raw materials, seafood, chemicals",
                  "CPEC facilitation: special customs treatment for CPEC-related cargo",
                  "China import duty: GACC registration required for food/pharma imports into China",
                  "Air freight: KHI→PEK/CAN — 2-3 days for urgent components",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">13. Import Export Services Pakistan to Saudi Arabia & GCC</h2>
              <DataTable
                headers={["Country", "Key Exports from Pakistan", "Key Imports to Pakistan", "Mode"]}
                rows={[
                  ["Saudi Arabia (KSA)", "Rice, textiles, surgical instruments, food", "Petroleum, chemicals, dates", "Air + Sea"],
                  ["UAE", "Garments, food, leather, marble", "Electronics, gold, re-exports", "Air + Sea (dominant)"],
                  ["Qatar", "Food, construction materials", "Petroleum, LNG", "Air + Sea"],
                  ["Kuwait", "Food products, textiles", "Petroleum", "Air + Sea"],
                  ["Oman", "Food, consumer goods", "Petroleum", "Air + Sea"],
                  ["Bahrain", "Food, textiles", "Petroleum, aluminium", "Air + Sea"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">14. Import Export Rates & Charges Pakistan 2026 — Complete Breakdown</h2>

              <InfoBox variant="blue">
                <strong>📌 All-In Cost Components — What You Actually Pay</strong>
                <p className="mt-2">EXPORT all-in cost = Ocean/Air Freight + Origin THC + Customs/GD Filing + Form E bank charge + Certificate of Origin + Fumigation (if applicable) + Cargo Insurance + Inland Haulage to port</p>
                <p className="mt-2">IMPORT all-in cost = Ocean/Air Freight + Origin THC + Destination THC (Karachi) + Import GD Filing + Import Duty + Sales Tax + Withholding Tax + DO (Delivery Order) + Port Storage (if any) + Inland Delivery</p>
                <p className="mt-2">Always request an ALL-IN quote — ocean freight alone is only 40-60% of total cost</p>
              </InfoBox>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Typical Service Costs</h3>
              <DataTable
                headers={["Service", "Typical Cost", "Notes"]}
                rows={[
                  ["Export customs GD filing", "PKR 2,500–6,000", "Per export GD on WeBOC"],
                  ["Import customs GD filing", "PKR 3,000–8,000", "Per import GD — complexity based"],
                  ["Certificate of Origin", "PKR 500–1,500", "Per certificate, per chamber"],
                  ["Form E processing", "PKR 500–1,500", "Bank charge varies"],
                  ["Phytosanitary Certificate", "PKR 2,000–5,000", "Per certificate, product dependent"],
                  ["Fumigation Certificate", "PKR 2,000–5,000", "Per container/lot"],
                  ["Cargo Insurance (export)", "0.35–0.7% of cargo value", "All Risks ICC A recommended"],
                  ["Inland haulage Karachi Port", "PKR 5,000–20,000", "Karachi factory/port distance"],
                  ["Inland haulage Lahore→KPT", "PKR 10,000–20,000/ton", "1,300 km road freight"],
                  ["ISB/PWD→KPT road freight", "PKR 12,000–22,000/ton", "1,800 km road freight"],
                  ["Port storage (demurrage)", "PKR 5,000–15,000/day", "Avoid by fast clearance"],
                  ["Import duty calculation", "FREE consultation", "Service we provide before order"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">15. Trade Compliance & Regulatory Services Pakistan</h2>
              <p className="text-muted-foreground mb-6">
                Trade compliance is increasingly important for Pakistani importers and exporters. Regulatory violations — from anti-dumping evasion to under-valuation, misdeclaration, or prohibited goods — carry severe penalties including cargo seizure, fines, and criminal prosecution. bestintlmovers.com provides proactive trade compliance services.
              </p>
              <CheckList
                items={[
                  "HS Code Classification: correct 8-digit tariff classification — determines duty rate and import restrictions",
                  "Valuation Compliance: declared invoice value must match actual transaction value — no under-valuation",
                  "Form E Compliance: all export proceeds repatriated within 180 days — SBP requirement",
                  "Anti-Dumping Awareness: NTC (National Tariff Commission) orders on Chinese steel, Indian chemicals, and other products",
                  "SRO Duty Exemptions: hundreds of SROs (Statutory Regulatory Orders) provide duty relief — identifying applicable ones saves significant cost",
                  "Export Control: dual-use goods, defence equipment — Ministry of Commerce ECC licence required",
                  "Product Standards: Pakistan Standards and Quality Control Authority (PSQCA) compliance for certain imports",
                  "CITES: wildlife and endangered species — Ministry of Climate Change clearance",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">16. Industry-Specific Import Export Services Pakistan</h2>
              <DataTable
                headers={["Industry", "Export Service", "Import Service", "Key Documents"]}
                rows={[
                  ["Textile & Garments", "FCL/LCL sea freight to UK/USA/EU/UAE", "Raw cotton, yarn, dyes import", "CoO, Form E, fumigation cert"],
                  ["Surgical Instruments", "Air freight Sialkot to USA/EU/UAE", "Stainless steel, components from Japan", "CE, FDA, CoO, SCCI cert"],
                  ["Food & Agriculture", "Air (perishables), sea (rice/commodities)", "Palm oil, soybean, wheat import", "Phytosanitary, health, halal"],
                  ["Pharmaceuticals", "Air freight to UAE, Africa, Afghanistan", "APIs, chemicals, machinery import", "DRAP cert, MOH clearance"],
                  ["Marble & Stone", "Sea FCL flat rack to UAE, China, Italy", "N/A primarily", "Origin cert, weight survey"],
                  ["Leather Products", "Sea LCL/FCL to Germany, Italy, UK", "Chemicals for tanning import", "CoO, LCCI cert"],
                  ["Sports Goods", "Air/sea Sialkot to UK, Germany, UAE, USA", "Synthetic materials import", "CoO, SCCI cert"],
                  ["Carpets & Rugs", "Sea FCL to USA, UK, Germany, UAE", "Wool import from NZ, Australia", "CoO, fumigation cert"],
                  ["Chemicals", "Sea FCL (DG) to China, SE Asia", "Chemicals from China, Germany import", "MSDS, IMDG cert"],
                  ["Electronics", "Air freight samples + small shipments", "Major import from China, UAE", "FCC, CE, PSQCA compliance"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">17. Why Choose bestintlmovers.com for Import Export Services Pakistan</h2>
              <DataTable
                headers={["Factor", "bestintlmovers.com", "Typical Competitor"]}
                rows={[
                  ["IATA Licence", "✅ Licensed — verifiable on iata.org", "❓ Often sub-agents without own licence"],
                  ["WeBOC Registration", "✅ Registered — file GDs directly", "❓ Some use unlicensed sub-agents"],
                  ["FIATA Membership", "✅ Full FIATA member — international standard", "❓ Often not FIATA members"],
                  ["Pakistan Customs Lic.", "✅ C-Licence clearing agent", "❌ Many operate without own licence"],
                  ["City Coverage", "✅ Karachi, Lahore, ISB, FSD, Sialkot", "❌ Usually Karachi only"],
                  ["Pricing Transparency", "✅ Itemised all-in quotes", "❌ Low headline rate, hidden charges"],
                  ["Route Expertise", "✅ 15+ years on all major Pakistan routes", "❓ Often 2-5 years, limited routes"],
                  ["Tracking", "✅ Real-time online + WhatsApp", "❓ Manual updates, unreliable"],
                  ["Insurance", "✅ All Risks ICC A arranged in-house", "❓ Often declined or basic coverage"],
                  ["References", "✅ 500+ verified clients across industries", "❓ References not verifiable"],
                ]}
              />

              <InfoBox variant="green">
                <strong>✅ Our Commitment to Every Import Export Client</strong>
                <p className="mt-2">Single dedicated account manager — you always know who to call. Response within 2 hours on WhatsApp during business hours. Pre-shipment document check — we flag issues BEFORE they cause delays. Zero surprise charges — if there is an additional cost, we call you first. Full transparency — you see all carrier invoices, customs receipts, and our fees separately. 15 years of compliance — not a single customs fraud case against our clients. Money-back guarantee on documentation errors caused by our team.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">18. Import Export Process — Step by Step with bestintlmovers.com</h2>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">Export Process — How We Work</h3>
              <DataTable
                headers={["Step", "Action", "Timeline"]}
                rows={[
                  ["1. Enquiry", "You contact us with cargo details — commodity, weight, destination, Incoterm", "Day 1"],
                  ["2. Quote", "We provide itemised all-in export quote within 2-4 hours", "Day 1"],
                  ["3. Booking", "You confirm — we book freight space on optimal carrier", "Day 2-3"],
                  ["4. Documents", "We guide document preparation: Invoice, PL, Form E, CoO, certificates", "Day 2-5"],
                  ["5. Pickup", "We collect cargo from your factory/warehouse", "Agreed date"],
                  ["6. Customs", "Our clearing agent files GD on WeBOC — manages all customs stages", "1-3 days"],
                  ["7. Loading", "Cargo loaded on vessel/aircraft — B/L or AWB issued", "Per schedule"],
                  ["8. Tracking", "Real-time updates via WhatsApp and online portal", "Throughout"],
                  ["9. Destination", "Our partner coordinates import clearance and delivery abroad", "On arrival"],
                  ["10. Completion", "Delivery confirmed — Form E closed — account reconciled", "After delivery"],
                ]}
              />

              <h3 className="text-xl font-display font-semibold text-foreground mb-4 mt-8">Import Process — How We Work</h3>
              <DataTable
                headers={["Step", "Action", "Timeline"]}
                rows={[
                  ["1. Enquiry", "You share supplier details, HS code, value — we calculate total import cost", "Day 1"],
                  ["2. Quote", "All-in import quote including duty, tax, freight, clearance, delivery", "Day 1"],
                  ["3. Coordination", "We instruct your overseas supplier on correct export documentation", "Before shipment"],
                  ["4. Freight", "We book air or sea freight from origin — or use supplier's carrier", "Per sailing schedule"],
                  ["5. Pre-arrival", "We review all shipping documents — flag any issues before cargo arrives", "On receipt of docs"],
                  ["6. GD Filing", "We file import GD on WeBOC with correct HS code and value", "On arrival at KPT/JIAP"],
                  ["7. Duty Payment", "We calculate and pay import duty on your behalf — full receipt provided", "Within 1 day of GD"],
                  ["8. Clearance", "Green channel: same day. Yellow: 1-2 days. Red: 3-7 days — we manage all", "Per channel assigned"],
                  ["9. Delivery", "Container collected from terminal — trucked to your warehouse", "1-3 days post-clearance"],
                  ["10. Completion", "Delivery receipt signed — full cost reconciliation provided to you", "After delivery"],
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">19. 15 Frequently Asked Questions — Import Export Services Pakistan</h2>
              <p className="text-muted-foreground mb-6">These are Pakistan's most searched import-export questions — answered in complete expert detail:</p>

              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q1: What import export services does bestintlmovers.com provide in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">bestintlmovers.com provides a complete range of import and export services from all major Pakistani cities. Our export services include: air freight and sea freight booking from Karachi, Lahore, Islamabad, Faisalabad, and Sialkot; export customs clearance (WeBOC Goods Declaration filing); Form E submission and coordination; Certificate of Origin from all major Chambers of Commerce; phytosanitary, health, halal, and fumigation certificates; cargo insurance; and door-to-door export to any country. Our import services include: freight coordination from overseas suppliers; sea and air freight import to Pakistan; WeBOC import GD filing; import duty calculation and payment; bonded warehouse; port examination management; and door-to-door delivery to your Pakistan warehouse. We cover all global routes with particular expertise on Pakistan-UAE, Pakistan-UK, Pakistan-USA, Pakistan-Germany, and Pakistan-China corridors.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q2: How do I start importing goods into Pakistan for the first time?</h3>
                  <p className="text-muted-foreground text-sm">Starting import operations in Pakistan requires these foundational steps: (1) Register your business with SECP (Securities and Exchange Commission of Pakistan) and obtain an NTN (National Tax Number) from FBR. (2) Register for Sales Tax (STN) if you will be a regular importer — allows input tax adjustment. (3) Identify your product's HS code — this determines import duty rate and whether an import licence is required. (4) Check Pakistan Customs' Import Policy Order for any restrictions, licensing requirements, or prohibited status for your product. (5) Open a foreign currency account with an authorised bank for import payments. (6) Find a reliable overseas supplier and negotiate price, payment terms, and Incoterm. (7) Engage bestintlmovers.com for freight booking, customs clearance, and door delivery. (8) Arrange cargo insurance — protect your investment during international transit. Contact bestintlmovers.com for a free first-time importer consultation.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q3: How do I start exporting goods from Pakistan for the first time?</h3>
                  <p className="text-muted-foreground text-sm">Becoming a Pakistani exporter requires: (1) Business registration with SECP and NTN from FBR. (2) TDAP (Trade Development Authority of Pakistan) exporter registration — enables access to export incentives and Official Certificate of Origin. (3) Foreign currency account with an authorised SBP bank for export proceeds. (4) Find overseas buyers through Alibaba, trade missions, B2B exhibitions, or buyer referrals. (5) Agree on product specifications, price, payment terms (T/T, LC, CAD), and Incoterm. (6) Submit Form E to your authorised bank BEFORE your clearing agent files the GD on WeBOC. (7) Engage bestintlmovers.com for freight booking, customs clearance, and complete documentation. (8) Receive payment and ensure repatriation within 180 days as per SBP regulations. bestintlmovers.com guides first-time exporters through every step of this process — contact us for a free export readiness consultation.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q4: What documents are required for export from Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Core documents required for every export from Pakistan: Commercial Invoice (declares value, product, buyer/seller), Packing List (per-piece weight and dimensions), Goods Declaration / GD (WeBOC filing by your clearing agent), Form E (State Bank forex repatriation — bank-endorsed BEFORE GD), Bill of Lading (sea freight) or Air Waybill (air freight), and Certificate of Origin (TDAP or Chamber of Commerce). Additional documents depend on commodity: Phytosanitary Certificate for fruits, vegetables, seeds; Export Health Certificate for seafood, meat, dairy; Halal Certificate for food to Gulf countries; Fumigation Certificate for wooden packaging; MSDS for chemicals; DRAP Certificate for pharmaceuticals; Form A or REX Certificate for EU/UK GSP duty reduction. bestintlmovers.com manages all export documentation — you focus on production, we handle the paperwork.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q5: How much does it cost to import machinery from China to Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Importing machinery from China to Pakistan involves these cost components: Ocean freight (Karachi to Shanghai): FCL 20ft USD 500–1,100; FCL 40ft USD 750–1,600 per container for ocean freight. Pakistan import duty on machinery: typically 0–5% customs duty on industrial machinery under SRO 565 concession (verify specific HS code). Sales Tax: 17% on CIF+duty value (adjustable for registered importers). Additional Customs Duty: 2–5% on some categories. Withholding Tax: 5.5% for non-ATL importers (1% for ATL-registered). Import GD filing: PKR 3,000–8,000. Inland delivery Karachi to factory: PKR 15,000–50,000+ depending on weight and distance. Total landed cost for a container of machinery worth USD 50,000: approximately USD 55,000–70,000 depending on applicable duties and HS code classification. Contact bestintlmovers.com for a precise landed cost calculation before ordering.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q6: What is WeBOC and how does it affect my import export operations?</h3>
                  <p className="text-muted-foreground text-sm">WeBOC (Web-Based One Customs) is Pakistan's integrated electronic customs management system operated by FBR (Federal Board of Revenue). ALL import and export cargo in Pakistan must be processed through WeBOC — there is no paper alternative. For exporters: your licensed clearing agent files a Goods Declaration (GD) on WeBOC covering: your NTN, HS code, product description, declared value, Form E reference, destination, and carrier details. WeBOC's Risk Management System (RMS) assigns Green (auto-release), Yellow (document exam), or Red (physical exam) channel. For importers: import GD is filed with similar details plus duty calculation. The system calculates import duty liability automatically based on declared value and HS code. Let Import Order (LIO) is issued after customs clearance. The entire WeBOC process is managed by bestintlmovers.com — our registered clearing agents handle all filings, so you never need to interact with WeBOC directly.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q7: What is Form E and why is it mandatory for Pakistani exports?</h3>
                  <p className="text-muted-foreground text-sm">Form E is a State Bank of Pakistan (SBP) mandatory declaration for ALL Pakistani exports — there are no exceptions. It serves as the foreign exchange repatriation declaration, ensuring that export proceeds (the payment from your overseas buyer) are received in Pakistan within 180 days of shipment. The process: you submit Form E to your SBP-authorised bank (HBL, MCB, UBL, NBP, etc.) along with export documents; the bank verifies and endorses the Form E; the bank-endorsed Form E reference number must be included in your WeBOC Goods Declaration (GD) — the GD cannot be submitted without it. If export proceeds are not received within 180 days, your bank reports the default to SBP, penalties are imposed, and repeat defaults can result in export privileges being suspended. bestintlmovers.com coordinates Form E submission timing with your bank to ensure no GD filing is delayed.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q8: How do I calculate import duty on goods coming to Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Import duty calculation in Pakistan uses the following formula: Total Import Tax = Customs Duty (CD) + Additional Customs Duty (ACD) + Regulatory Duty (RD, if applicable) + Sales Tax (ST 17%) + Additional Sales Tax (AST, if applicable) + Withholding Tax (WHT). Each of these is calculated on a different base value. Customs Duty is calculated on CIF value (Cost + Insurance + Freight) in PKR at the customs exchange rate. Sales Tax is calculated on (CIF + CD + ACD + RD). WHT is calculated on import value and varies by importer's tax registration status (1% for active tax filers, 5.5% for non-filers). Example: USD 10,000 CIF value machinery (5% CD + 3% ACD + 17% ST + 1% WHT) = total tax of approximately PKR 500,000–600,000 depending on exchange rate. HS code determines all applicable rates. bestintlmovers.com provides free import duty calculation for any product before you place your order.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q9: Can I import used or second-hand goods into Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Pakistan's Import Policy Order regulates the import of used goods. The general rule: used goods are restricted but permitted in specific categories. What CAN be imported used: Used vehicles (subject to age restrictions and SRO conditions), used machinery for industrial use (subject to pre-shipment inspection and specific SRO requirements), used aircraft and marine vessels (with specific approvals), used IT equipment (with conditions). What CANNOT be imported used: Used consumer goods (clothing, appliances, electronics for consumer use), used tyres (except under specific SROs), most used capital goods without proper approvals. Key requirements for used machinery imports: Pre-Shipment Inspection (PSI) by SGS, Bureau Veritas, or other approved inspection agency; inspection certificate showing item is fully functional; age limit compliance (varies by category); and SRO applicability check. Contact bestintlmovers.com for advice on whether your specific used goods can be imported and under what conditions.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">Q10: What are the most common import export mistakes Pakistani businesses make?</h3>
                  <p className="text-muted-foreground text-sm">The 10 most costly import-export mistakes made by Pakistani businesses: (1) Wrong HS code — leads to wrong duty rate, possible examination and penalties. (2) Under-declaring value on export invoice — customs fraud with severe legal consequences. (3) Missing Form E before GD filing — GD rejected, shipment delayed. (4) No Certificate of Origin — EU/UK buyer pays full duty instead of GSP reduced rate, may lose the order. (5) Wooden packing not ISPM-15 heat-treated — cargo quarantined/destroyed at destination. (6) No cargo insurance — total loss covered by only USD 2/kg under Hague-Visby. (7) Missing phytosanitary cert for food exports — cargo rejected at destination port. (8) Ignoring ISF for USA exports — USD 5,000–10,000 fine per violation. (9) Using unlicensed freight agent — cargo disappears or held at customs without recourse. (10) Missing cargo cut-off date — rolled to next vessel, 7-14 day delay, buyer penalties. bestintlmovers.com prevents all 10 of these through systematic pre-shipment checks.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get Started with Pakistan's Most Trusted Import Export Services</h2>
              <p className="text-muted-foreground mb-6">Whether you are a first-time exporter discovering global markets, an established importer managing complex supply chains, or a business looking to replace a freight forwarder who has let you down — bestintlmovers.com is the import export partner you have been looking for.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Package size={18} />
                  Get Free Import Export Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Import Export Team
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default ImportExportServicesPakistan;
