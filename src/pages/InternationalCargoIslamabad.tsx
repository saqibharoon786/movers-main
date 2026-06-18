import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane,
  Anchor,
  MapPin,
  Phone,
  Package,
  Globe,
  ShieldCheck,
  FileCheck,
  Clock,
  Truck,
  Thermometer,
  Car,
  CheckCircle2,
  MessageCircle,
  Building,
  Box,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  seoConfig,
  faqs,
  buildAllSchemas,
  airCargoRates,
  lclFclComparison,
  seaTransitTable,
  customsDocsTable,
  doorToDoorTimes,
  vehicleShippingTable,
  pickupAreas,
  shippingSteps,
  whyChooseUs,
  relatedLinks,
} from "@/data/internationalCargoIslamabadContent";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-border rounded-lg text-sm">
        <thead>
          <tr className="bg-navy-light/40">
            {headers.map((h) => (
              <th key={h} className="border border-border px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-navy-light/10" : "bg-navy-light/20"}>
              {row.map((cell, j) => (
                <td key={j} className="border border-border px-4 py-2.5 text-muted-foreground">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-display font-bold text-foreground mb-6">{children}</h2>;
}

const InternationalCargoIslamabad = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={seoConfig.title}
      description={seoConfig.description}
      keywords={seoConfig.keywords}
      urlPath="/international-cargo-islamabad"
      schema={buildAllSchemas()}
    />

    <Navbar />

    {/* Hero */}
    <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Globe className="text-gold" size={18} />
            <span className="text-gold text-sm font-medium">Islamabad&apos;s Most Trusted Cargo Company Since 2009</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            International Cargo Service in Islamabad
          </h1>
          <img
            src="/images/cargo-insurance.jpg"
            alt="International cargo service Islamabad - Air and sea freight to 100+ countries"
            className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
          />
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Pakistan&apos;s most reliable international cargo service in Islamabad — offering end-to-end air cargo, sea freight, freight forwarding and door-to-door shipping from all sectors of Islamabad to UAE, UK, USA, Canada, Saudi Arabia and 100+ countries. Free pickup from your doorstep. Real-time cargo tracking. Zero paperwork hassle. Licensed by IATA, FIATA and Pakistan Customs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all">
              <Phone size={18} /> Get Free Quote
            </Link>
            <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all">
              <MessageCircle size={18} /> WhatsApp 0300-9130211
            </a>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Intro */}
          <motion.div {...fade} className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Whether you are a household sender relocating abroad, a business exporting commercial goods, or an expatriate sending personal effects home, our dedicated cargo team in Islamabad delivers with speed, security and complete transparency — from the moment we collect your goods in DHA Islamabad, Bahria Town, Blue Area, or any of Islamabad&apos;s 40+ sectors, to final delivery at the recipient&apos;s address anywhere in the world.
            </p>
          </motion.div>

          {/* What Is */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>What Is International Cargo Service in Islamabad?</SectionHeading>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                International cargo service in Islamabad is a professional logistics solution that manages the entire process of moving goods from your location in Islamabad to any destination worldwide. Unlike a simple courier or parcel service, a full-service cargo company handles professional packaging, export documentation, Pakistan Customs clearance through the WeBOC system, airline or shipping line booking, international transit, destination import clearance and final last-mile delivery.
              </p>
              <p>
                As Islamabad is a landlocked city, all sea freight consignments are transported overland from Islamabad to Karachi Port or Port Qasim before being loaded onto international vessels. Air cargo departs from Benazir Bhutto International Airport (IATA: ISB), which operates direct and one-stop connections to major cargo hubs in the Middle East, Europe and beyond.
              </p>
              <p>
                The scope encompasses air freight for urgent shipments, sea freight for large volumes, road freight for regional destinations such as Afghanistan and Central Asia, and multimodal freight combining transport modes for optimal cost and speed. For dedicated mode-specific services, see our{" "}
                <Link to="/air-freight-islamabad" className="text-gold hover:underline">air freight Islamabad</Link> and{" "}
                <Link to="/sea-freight-islamabad" className="text-gold hover:underline">sea freight Islamabad</Link> pages.
              </p>
              <p className="text-sm border-l-4 border-gold pl-4 italic">
                <strong className="text-gold not-italic">Expert Insight:</strong> Islamabad businesses exporting to GCC countries consistently achieve the best cost-to-speed balance with air cargo due to short transit distances. For Europe-bound shipments above 500 kg, sea freight via Karachi Port often provides 65–75% cost savings over air at only a 20–25 day additional transit time.
              </p>
            </div>
          </motion.section>

          {/* Air Cargo */}
          <motion.section {...fade}>
            <SectionHeading>Air Cargo Service in Islamabad — Fast, Reliable International Air Freight</SectionHeading>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                Air cargo from Islamabad connects Pakistan&apos;s capital to major cities worldwide through Benazir Bhutto International Airport (ISB). We maintain active accounts with PIA Cargo, Qatar Airways Cargo, Emirates SkyCargo, Turkish Cargo, Air Arabia, FedEx, DHL and UPS.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Express Air Cargo", desc: "1–3 business days — priority airline booking" },
                  { title: "Standard Air Cargo", desc: "3–5 business days — most popular and cost-effective" },
                  { title: "Economy Air Consolidation", desc: "5–8 business days — weekly consolidation departures" },
                ].map((s) => (
                  <div key={s.title} className="glass-card rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2"><Plane size={20} className="text-gold" /> How Air Cargo from Islamabad Is Priced</h3>
              <p>
                Rates are calculated on chargeable weight — the higher of actual gross weight (kg) or volumetric weight: Length × Width × Height (cm) ÷ 5,000. Surcharges include Fuel Surcharge (FSC), Security Surcharge and Origin Handling Charge. Our team provides fully transparent all-inclusive quotations.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Air Cargo Rates from Islamabad 2026 — Estimated Per KG (All-Inclusive)</h3>
            <DataTable
              headers={["Destination City", "Rate (PKR/kg)", "Min. Chargeable", "Transit Time", "Service Level"]}
              rows={airCargoRates.map((r) => [r.city, r.rate, r.min, r.transit, r.level])}
            />
            <p className="text-sm text-muted-foreground mt-3 flex items-start gap-2">
              <span className="text-gold">⚠</span> Rate Notice: Estimates for reference only — subject to fuel surcharges, airline availability, commodity type and seasonal demand. Call 0300-9130211 for today&apos;s confirmed rate.
            </p>
            <p className="text-muted-foreground mt-4">
              Air cargo accommodates personal effects, electronics, documents, spare parts, pharmaceuticals, food products (with permits), commercial samples and more. Prohibited items include narcotics, firearms, counterfeit goods and endangered species products.
            </p>
          </motion.section>

          {/* Sea Cargo */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Sea Cargo Service from Islamabad — Economical Ocean Freight Worldwide</SectionHeading>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                Sea freight via Karachi Port and Port Qasim is the most economical solution for large-volume cargo — household removals, commercial bulk goods, vehicles, machinery and furniture. Cost saving is often 60–80% less per cubic metre than air freight, with transit times of 20–50 days depending on destination.
              </p>
              <p>
                Our end-to-end process covers collection from Islamabad, overland transport to Karachi, port handling, booking with MSC, Maersk, CMA CGM, COSCO and Hapag-Lloyd, ocean transit, destination clearance through partner agents, and final delivery.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Anchor size={20} className="text-gold" /> LCL vs FCL Sea Freight from Islamabad</h3>
            <DataTable
              headers={["Feature", "LCL (Less than Container Load)", "FCL (Full Container Load)"]}
              rows={lclFclComparison.map((r) => [r.feature, r.lcl, r.fcl])}
            />
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Sea Freight Transit Times from Islamabad (via Karachi Port) 2026</h3>
            <DataTable
              headers={["Destination Port", "Shipping Line Options", "LCL Transit", "FCL Transit"]}
              rows={seaTransitTable.map((r) => [r.port, r.lines, r.lcl, r.fcl])}
            />
          </motion.section>

          {/* Freight Forwarding */}
          <motion.section {...fade}>
            <SectionHeading>Freight Forwarding in Islamabad — Complete Trade Logistics Management</SectionHeading>
            <div className="text-muted-foreground space-y-4">
              <p>
                As a licensed freight forwarder registered with IATA and FIATA, we act as your single point of contact for every step — truckers, airlines, shipping lines, customs agents and destination delivery. We cover export and import freight forwarding with full customs clearance. Learn more on our{" "}
                <Link to="/freight-forwarding-islamabad" className="text-gold hover:underline">freight forwarding Islamabad</Link> page.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "HS Code Classification for duty calculation and compliance",
                  "Export Documentation — invoice, packing list, COO, SPS, fumigation",
                  "WeBOC Filing — electronic Goods Declaration for export clearance",
                  "Cargo Booking with negotiated airline and shipping line rates",
                  "All-risk marine cargo insurance at competitive premiums",
                  "Transshipment coordination at Dubai, Singapore, Colombo, Rotterdam",
                  "Destination agent network in 100+ countries",
                  "Real-time track and trace from departure to delivery",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm border-l-4 border-gold pl-4 italic">
                <strong className="text-gold not-italic">Expert Tip:</strong> Pakistan&apos;s DTRE and SRO 450 export rebate schemes can significantly reduce input costs for manufactured goods exports. Our team assists Islamabad exporters in documenting shipments to maximise rebate claims.
              </p>
            </div>
          </motion.section>

          {/* Customs Clearance */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Customs Clearance Services in Islamabad — Expert Export Documentation</SectionHeading>
            <div className="text-muted-foreground space-y-4 mb-6">
              <p>
                Every shipment leaving Pakistan must be declared to Pakistan Customs (FBR), and every destination import must clear that country&apos;s customs. Our licensed Customs Clearing Agents handle export GD filing, examination facilitation and duty drawback claims. For import clearance in Islamabad, see{" "}
                <Link to="/customs-clearance-islamabad" className="text-gold hover:underline">customs clearance Islamabad</Link>.
              </p>
              <h3 className="text-xl font-semibold text-foreground">Step-by-Step Pakistan Customs Export Process</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li><strong className="text-foreground">HS Code Classification</strong> — correct 8-digit code for every item</li>
                <li><strong className="text-foreground">Goods Declaration (GD) Filing</strong> — electronic submission on WeBOC</li>
                <li><strong className="text-foreground">Risk Assessment</strong> — Green, Yellow or Red channel via PACCS</li>
                <li><strong className="text-foreground">Examination</strong> — agent accompanies officers if required</li>
                <li><strong className="text-foreground">Export Clearance Certificate</strong> — cargo released to carrier</li>
                <li><strong className="text-foreground">Destination Import Clearance</strong> — partner agents handle arrival customs</li>
              </ol>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><FileCheck size={20} className="text-gold" /> Documents Required for Cargo Customs Clearance</h3>
            <DataTable
              headers={["Document", "Required For", "Issued By", "Prepared By Us?"]}
              rows={customsDocsTable.map((r) => [r.doc, r.for, r.by, r.us])}
            />
          </motion.section>

          {/* Door to Door */}
          <motion.section {...fade}>
            <SectionHeading>Door-to-Door Cargo Service from Islamabad — Hassle-Free International Delivery</SectionHeading>
            <p className="text-muted-foreground mb-6">
              From a single phone call, we handle cargo collection, professional packing, export clearance, international transit, import clearance at destination, and final delivery — one contract, one invoice, one point of contact and real-time tracking the entire way.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Truck size={20} className="text-gold" /> Door-to-Door Cargo Delivery Times from Islamabad</h3>
            <DataTable
              headers={["Destination", "Air Door-to-Door", "Sea Door-to-Door (LCL)", "Best For"]}
              rows={doorToDoorTimes.map((r) => [r.dest, r.air, r.sea, r.best])}
            />
          </motion.section>

          {/* Commercial & Personal */}
          <motion.section {...fade} className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2"><Building size={20} className="text-gold" /> Commercial Cargo &amp; Trade Freight</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Purpose-built for Islamabad exporters, manufacturers and e-commerce businesses requiring consistent schedules and contract rates. We handle textiles, surgical instruments, handicrafts, agricultural produce, pharmaceuticals, IT equipment and industrial machinery.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Regular weekly air consolidations to Dubai, Riyadh, London, Toronto</li>
                <li>• FCL block space agreements on major shipping lines</li>
                <li>• Trade compliance — HS codes, COO, FORM-E, L/C documentation</li>
                <li>• IATA-certified dangerous goods handling (Class 3, 4, 8, 9)</li>
                <li>• E-commerce fulfillment — pick-and-pack and international dispatch</li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2"><Package size={20} className="text-gold" /> Personal Cargo &amp; Household Goods</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Personal cargo specialists guide families through international shipping, customs regulations and destination import rules that vary country by country — accompanied baggage excess, unaccompanied personal effects, full household removals and student shipments.
              </p>
              <p className="text-sm text-muted-foreground">
                Most destination countries offer Personal Effects Import Relief for people relocating permanently. Our team advises on documentation to qualify for duty-free import — including UK Transferred Residence Relief (ToR1) for Pakistani nationals relocating to the UK after 12+ months abroad.
              </p>
            </div>
          </motion.section>

          {/* Packaging */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Professional Cargo Packaging in Islamabad — Export-Grade Packing</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
              {[
                { icon: Box, title: "Double-Wall Corrugated Cartons", desc: "Heavy-duty cartons rated for international stacking" },
                { icon: ShieldCheck, title: "Polyethylene Foam", desc: "Custom-cut inserts for electronics and fragile items" },
                { icon: Package, title: "Bubble Wrap & Stretch Wrap", desc: "Multi-layer protection for ceramics, artwork and instruments" },
                { icon: Anchor, title: "ISPM-15 Wooden Crates", desc: "Heat-treated timber for machinery and oversized items" },
                { icon: Truck, title: "Palletization", desc: "Consolidation on pallets for commercial LCL and FCL" },
                { icon: Thermometer, title: "Moisture Barriers", desc: "Desiccant packets and liners for sea freight shipments" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-navy-light/10">
                  <item.icon className="text-gold mb-2" size={22} />
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tracking */}
          <motion.section {...fade}>
            <SectionHeading>International Cargo Tracking from Islamabad — Real-Time Shipment Visibility</SectionHeading>
            <div className="text-muted-foreground space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Plane size={18} className="text-gold" /> Air Cargo Tracking</h3>
                  <p className="text-sm">Track via 11-digit Airway Bill (AWB) on airline websites or Track-Trace.com / 17Track.net. WhatsApp updates at: Accepted, Departed ISB, Arrived Hub, Arrived Destination, Customs Cleared, Delivered.</p>
                </div>
                <div className="glass-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2"><Anchor size={18} className="text-gold" /> Sea Freight Tracking</h3>
                  <p className="text-sm">FCL tracked via container number on shipping line websites. LCL via House Bill of Lading (HBL). Updates at: Received Karachi, Loaded on Vessel, Departed Karachi, Arrived Destination Port, Customs Cleared, Delivered.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Vehicle Shipping */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Vehicle &amp; Car Shipping from Islamabad — International Auto Transport</SectionHeading>
            <p className="text-muted-foreground mb-4">
              Complete vehicle export management — MVRS de-registration, Pakistan Customs export GD, inland transport to Karachi Port, RoRo or container booking, marine insurance, ocean transit and destination import clearance for cars, SUVs, motorcycles and commercial vehicles.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Car size={20} className="text-gold" /> Vehicle Shipping from Islamabad — Estimated Costs &amp; Transit Times 2026</h3>
            <DataTable
              headers={["Destination", "RoRo Cost (Est.)", "Container Cost (Est.)", "Transit Time"]}
              rows={vehicleShippingTable.map((r) => [r.dest, r.roro, r.container, r.transit])}
            />
          </motion.section>

          {/* Pickup Coverage */}
          <motion.section {...fade}>
            <SectionHeading>Cargo Pickup Coverage Across Islamabad — All Sectors Served</SectionHeading>
            <p className="text-muted-foreground mb-6">
              Free doorstep cargo collection from every sector in Islamabad and Rawalpindi. Our fleet operates from our Blue Area, Jinnah Avenue office.
            </p>
            <div className="space-y-4">
              {pickupAreas.map((area) => (
                <div key={area.title} className="glass-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-2"><MapPin size={18} className="text-gold" /> {area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Process */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Complete International Shipping Process from Islamabad — Step by Step</SectionHeading>
            <div className="space-y-4">
              {shippingSteps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold font-bold text-sm">{s.step.replace("Step ", "")}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Top Destinations */}
          <motion.section {...fade}>
            <SectionHeading>Cargo from Islamabad to Top Destinations — What You Need to Know</SectionHeading>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              {[
                { dest: "Cargo to UAE from Islamabad", text: "Most popular destination. Air cargo 2–3 days at PKR 850–1,200/kg. Personal effects qualify for UAE Customs duty exemptions under Residency Transfer with precise documentation." },
                { dest: "Cargo to UK from Islamabad", text: "UK HMRC allows duty-free household goods under Transfer of Residence Relief (ToR01). Air to London 3–5 days; sea to Felixstowe 28–38 days. We prepare ToR01-compliant documentation." },
                { dest: "Cargo to USA from Islamabad", text: "Subject to US CBP regulations. Personal effects under USD 800 may qualify for de minimis exemption. We ensure ISF submission for sea freight and FDA compliance for regulated goods. Air to New York/LA 4–6 days." },
                { dest: "Cargo to Saudi Arabia from Islamabad", text: "ZATCA requires precise customs documentation. Personal effects may qualify for duty exemption for new residents. Halal certification required for food. Air to Riyadh/Jeddah 2–4 days." },
              ].map((d) => (
                <div key={d.dest} className="glass-card rounded-xl p-5 border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{d.dest}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Why Best International Movers Is Islamabad&apos;s Most Trusted Cargo Company</SectionHeading>
            <div className="space-y-4">
              {whyChooseUs.map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section {...fade} className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20">
            <SectionHeading>Ship Your Cargo from Islamabad Today — Get a Free Quote in 5 Minutes</SectionHeading>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join over 10,000 satisfied clients who trust Best International Movers for international cargo from Islamabad — single box or full container — to UAE, UK, USA, Canada, Saudi Arabia and 100+ countries.
            </p>
            <div className="text-muted-foreground mb-8 space-y-1 text-sm">
              <p>📞 Call / WhatsApp: 0300-9130211</p>
              <p>✉ Email: info@bestintlmovers.com</p>
              <p>🕐 Monday – Saturday, 8:00 AM – 8:00 PM</p>
              <p>📍 Office: Blue Area, Jinnah Avenue, Islamabad</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all">
                <Phone size={18} /> Get Free Quote
              </Link>
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all">
                <MessageCircle size={18} /> WhatsApp Now
              </a>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
            <SectionHeading>Frequently Asked Questions — International Cargo Service in Islamabad</SectionHeading>
            <p className="text-muted-foreground mb-6">Can&apos;t find your answer? Call 0300-9130211 and speak directly with our cargo team.</p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground">
                    {i + 1}. {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* Related Services */}
          <motion.section {...fade}>
            <SectionHeading>Related Cargo &amp; Logistics Services from Best International Movers</SectionHeading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {relatedLinks.map((link) => (
                <Link key={link.href} to={link.href} className="glass-card rounded-xl p-4 border border-border hover:border-gold/50 transition-colors flex items-center gap-2 text-sm text-gold">
                  <Search size={14} /> {link.label}
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </div>

    <ContactFooter />
    <WhatsAppButton />
  </div>
);

export default InternationalCargoIslamabad;
