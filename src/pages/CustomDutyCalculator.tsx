import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  CheckCircle2,
  ShieldCheck,
  Package,
  FileCheck,
  Calculator,
  AlertTriangle,
  MessageCircle,
  Ship,
  Car,
  Smartphone,
  Laptop,
  Scale,
  TrendingDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import ImportDutyCalculatorWidget from "@/components/ImportDutyCalculatorWidget";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  seoConfig,
  faqs,
  buildAllSchemas,
  calculatorExampleRows,
  vehicleDutyTable,
  evDutyTable,
  corollaExampleRows,
  electronicsTable,
  mobileSlabTable,
  laptopExampleRows,
  importTaxReferenceTable,
  portChargesTable,
  ftaTable,
  cdSlabTable,
  acdTable,
  ctaLinks,
} from "@/data/customDutyCalculatorContent";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-border rounded-lg text-sm">
        <thead>
          <tr className="bg-navy-light/40">
            {headers.map((h) => (
              <th key={h} className="border border-border px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-navy-light/10" : "bg-navy-light/20"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border border-border px-4 py-2.5 ${j === row.length - 1 && row.length <= 3 ? "font-semibold text-gold" : "text-muted-foreground"}`}
                >
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-display font-bold text-foreground mb-6">{children}</h2>
  );
}

const CustomDutyCalculator = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        urlPath="/custom-duty-calculator"
        schema={buildAllSchemas()}
      />

      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Calculator className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">FBR Customs Duty Guide 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Pakistan Import Duty Calculator — Calculate Customs Duty, Sales Tax &amp; All Import Charges (2026 Updated)
            </h1>
            <img
              src="/images/container.jpg"
              alt="Pakistan Import Duty Calculator 2026 – FBR Customs"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />
            <p className="text-lg text-white/80 max-w-3xl mx-auto">{seoConfig.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
              >
                <Phone size={18} />
                Get Free Duty Calculation
              </Link>
              <a
                href="https://wa.me/923009130211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Our Customs Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">

            {/* Calculator Widget */}
            <motion.div {...fade}>
              <ImportDutyCalculatorWidget />
            </motion.div>

            {/* Introduction */}
            <motion.div {...fade} className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Importing goods into Pakistan involves navigating one of the region&apos;s most layered tax structures. Whether you are a business owner importing raw materials, an overseas Pakistani bringing back a vehicle, or a traveler carrying electronics, understanding exactly what you owe before your shipment arrives is not just useful — it is financially critical.
              </p>
              <p>
                The <strong className="text-foreground">Pakistan Import Duty Calculator</strong> on this page is designed to give you a precise, FBR-aligned estimate of every import charge applicable to your goods. From customs duty and sales tax to regulatory duty, additional customs duty, and advance income tax — our calculator covers every levy that Pakistan Customs and the Federal Board of Revenue (FBR) apply at the import stage.
              </p>
              <p>
                Pakistan&apos;s import duty structure is governed by the <strong className="text-foreground">Customs Act 1969</strong>, the <strong className="text-foreground">Sales Tax Act 1990</strong>, the <strong className="text-foreground">Income Tax Ordinance 2001</strong>, and scores of Statutory Regulatory Orders (SROs) issued annually by FBR. As of 2026, the standard customs duty rates range from 0% to 100%+ depending on product category, and total effective tax rates on some goods — particularly vehicles and luxury electronics — can exceed 300% of the product&apos;s original price.
              </p>
              <p>
                This is why accurate duty calculation before shipment is not optional. Underestimating your customs liability can freeze your cargo at port, trigger penalty proceedings, and turn a profitable import into a financial disaster. Our tool is built to prevent exactly that.
              </p>
              <p>
                At <strong className="text-foreground">Best International Movers</strong>, we have successfully handled customs clearance for thousands of shipments across Pakistan&apos;s major ports — Karachi, Port Qasim, Islamabad Dry Port, and Lahore. Our licensed clearing agents understand FBR tariff schedules, classification disputes, valuation methodologies, and SRO exemptions — knowledge we have distilled into this free, comprehensive resource. For professional clearance, see our{" "}
                <Link to="/custom-clearance-agency-in-pakistan" className="text-gold hover:underline">customs clearance agency in Pakistan</Link>.
              </p>
              <p>Use the calculator above to get your estimate instantly. Scroll down to understand exactly how every figure is calculated, what each charge means, and how you can legally minimize your import costs.</p>
            </motion.div>

            {/* What Is Import Duty */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>What Is Import Duty in Pakistan?</SectionHeading>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Import duty in Pakistan is a government-mandated tax levied on goods brought into the country from abroad. It is administered by <strong className="text-foreground">Pakistan Customs</strong>, a department operating under the <strong className="text-foreground">Federal Board of Revenue (FBR)</strong>, and is the primary mechanism through which the government regulates foreign trade, protects domestic industries, and generates revenue.
                </p>
                <p>
                  Under the <strong className="text-foreground">Customs Act 1969</strong>, all goods crossing Pakistan&apos;s borders — whether by sea, air, or land — are subject to assessment and clearance by customs authorities. The importer or their authorized customs clearing agent must file a <strong className="text-foreground">Goods Declaration (GD)</strong> through the <strong className="text-foreground">WEBOC (Web Based One Customs)</strong> system, declaring the nature, quantity, origin, and value of the goods.
                </p>
                <p>
                  The basis for calculating import duty in Pakistan is the <strong className="text-foreground">CIF (Cost, Insurance, and Freight) value</strong> — meaning the price of the goods, plus shipping costs, plus insurance, all converted to Pakistani Rupees at the prevailing exchange rate at the time of import.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Customs Duty (CD)</strong> — the primary tariff, ranging from 0% to 100%</li>
                  <li><strong className="text-foreground">Sales Tax (ST)</strong> — applied at 18% on the dutiable value</li>
                  <li><strong className="text-foreground">Additional Customs Duty (ACD)</strong> — 1% to 7% depending on product category</li>
                  <li><strong className="text-foreground">Regulatory Duty (RD)</strong> — variable, imposed via SRO on specific goods</li>
                  <li><strong className="text-foreground">Advance Income Tax (AIT)</strong> — collected under Section 148 of Income Tax Ordinance</li>
                  <li><strong className="text-foreground">Withholding Tax (WHT)</strong> — 5.5% for registered, 8% for unregistered importers</li>
                </ul>
                <p className="text-sm border-l-4 border-gold pl-4 italic">
                  <strong className="text-gold not-italic">Expert Tip:</strong> The specific rates applicable to your product are determined by its <strong className="text-foreground">PCT (Pakistan Customs Tariff) code</strong> — an 8-digit HS code that classifies every importable good. Correct PCT classification is the single most important factor in accurate duty calculation.
                </p>
              </div>
            </motion.section>

            {/* How Calculator Works */}
            <motion.section {...fade}>
              <SectionHeading>How the Pakistan Import Duty Calculator Works</SectionHeading>
              <div className="text-muted-foreground leading-relaxed space-y-4 mb-8">
                <p>
                  Our <strong className="text-foreground">Pakistan Import Duty Calculator</strong> is built around the same methodology used by FBR-registered customs agents when filing Goods Declarations through WEBOC. For end-to-end shipment support, explore our{" "}
                  <Link to="/cargo-services-pakistan/" className="text-gold hover:underline">cargo services Pakistan</Link>.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { step: "Step 1", title: "Determine CIF Value", desc: "CIF = (Cost + Freight + Insurance) × SBP Exchange Rate" },
                    { step: "Step 2", title: "Apply Customs Duty", desc: "CD = CIF Value × CD Rate" },
                    { step: "Step 3", title: "Calculate ACD", desc: "ACD = CIF Value × ACD Rate (1%–7%)" },
                    { step: "Step 4", title: "Apply Regulatory Duty", desc: "RD = CIF Value × RD Rate" },
                    { step: "Step 5", title: "Calculate Sales Tax", desc: "ST = (CIF + CD + ACD + RD) × 18%" },
                    { step: "Step 6", title: "Advance Income Tax", desc: "AIT = (CIF + CD + ACD + RD + ST) × AIT Rate" },
                    { step: "Step 7", title: "Withholding Tax", desc: "WHT = CIF Value × WHT Rate" },
                  ].map((s) => (
                    <div key={s.step} className="glass-card rounded-xl p-4 border border-border">
                      <span className="text-xs text-gold font-semibold">{s.step}</span>
                      <h3 className="font-semibold text-foreground mt-1">{s.title}</h3>
                      <p className="text-sm mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="font-semibold text-foreground text-center bg-gold/10 rounded-xl p-4 border border-gold/20">
                  Total Payable = CD + ACD + RD + ST + AIT + WHT
                </p>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Practical Example — Consumer Electronics (CIF PKR 280,000)</h3>
              <DataTable
                headers={["Charge", "Rate", "Amount (PKR)"]}
                rows={calculatorExampleRows.map((r) => [r.charge, r.rate, r.amount])}
              />
              <p className="text-sm text-muted-foreground mt-4">
                A product invoiced at USD 1,000 can cost nearly PKR 476,000 once landed in Pakistan — 70% more than the product value alone.
              </p>
            </motion.section>

            {/* CD, ST, ACD, RD Explained */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>Customs Duty, Sales Tax, Additional Customs Duty &amp; Regulatory Duty Explained</SectionHeading>
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2"><Scale size={20} className="text-gold" /> Customs Duty (CD)</h3>
                  <DataTable headers={["Duty Slab", "Products"]} rows={cdSlabTable.map((r) => [r.slab, r.products])} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sales Tax on Imports (ST)</h3>
                  <p>Levied under the <strong className="text-foreground">Sales Tax Act 1990</strong> at <strong className="text-foreground">18%</strong> of the value inclusive of customs duty. Certain goods attract higher rates — tobacco 100%+, luxury goods additional 3–5% surcharge.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Additional Customs Duty (ACD)</h3>
                  <DataTable headers={["Category", "ACD Rate"]} rows={acdTable.map((r) => [r.category, r.rate])} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Regulatory Duty (RD)</h3>
                  <p>Imposed under <strong className="text-foreground">Section 18(3) of the Customs Act 1969</strong> via SROs. As of 2026, RD applies to luxury goods, consumer electronics (10%–90%), food items, cosmetics, and select textiles. Rates can change within a single budget year.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Advance Income Tax (AIT)</h3>
                  <p>Collected under <strong className="text-foreground">Section 148 of the Income Tax Ordinance 2001</strong>: 5.5% for Active Taxpayer List (ATL) registered importers; 8% for unregistered.</p>
                </div>
              </div>
            </motion.section>

            {/* Vehicle Import Duty */}
            <motion.section {...fade}>
              <SectionHeading>Vehicle Import Duty Calculator Pakistan — Complete 2026 Rate Guide</SectionHeading>
              <div className="text-muted-foreground space-y-6">
                <p>
                  Vehicle imports are among the most heavily taxed categories in Pakistan&apos;s customs framework. Pakistan allows vehicle imports under Commercial Import, Baggage Rules, Transfer of Residence (TR), and Gift Scheme. For detailed guidance, see our{" "}
                  <Link to="/vehicle-import-guide-pakistan" className="text-gold hover:underline">vehicle import guide Pakistan</Link>.
                </p>
                <img src="/images/shipping.png" alt="Car Import Duty Calculator Pakistan – Vehicle Duty Rates 2026" className="w-full rounded-xl border border-border" loading="lazy" />
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2"><Car size={20} className="text-gold" /> Vehicle Import Duty Table Pakistan 2026 (Commercial Import)</h3>
                <DataTable
                  headers={["Engine Capacity", "Customs Duty", "Regulatory Duty", "Sales Tax", "AIT", "Approx. Total Tax"]}
                  rows={vehicleDutyTable.map((r) => [r.cc, r.cd, r.rd, r.st, r.ait, r.total])}
                />
                <h3 className="text-xl font-semibold text-foreground">Electric Vehicle Import Duty Pakistan 2026</h3>
                <DataTable
                  headers={["Vehicle Type", "Customs Duty", "Sales Tax", "Other Levies"]}
                  rows={evDutyTable.map((r) => [r.type, r.cd, r.st, r.other])}
                />
              </div>
            </motion.section>

            {/* Car Import Practical Guide */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>Car Import Duty Calculator Pakistan — Practical Guide for Every Buyer</SectionHeading>
              <div className="text-muted-foreground space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Real-World Calculation: Toyota Corolla 1800cc</h3>
                <p>Auction Sheet Price in Japan: JPY 800,000 ≈ USD 5,400 ≈ PKR 1,512,000 | Freight: PKR 180,000 | Insurance: PKR 15,120 | <strong className="text-foreground">CIF Value: PKR 1,707,120</strong></p>
                <DataTable
                  headers={["Charge", "Rate", "Amount (PKR)"]}
                  rows={corollaExampleRows.map((r) => [r.charge, r.rate, r.amount])}
                />
                <p>A car bought in Japan for PKR 1.5 million lands in Pakistan at PKR 6.1 million for commercial imports.</p>
                <h3 className="text-xl font-semibold text-foreground mt-6">Key Factors That Affect Car Import Duty</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Depreciation on Used Vehicles:</strong> Year 1: 10%, Year 2: 19%, Year 3: 27%, Year 4: 34%, Year 5: 40%</li>
                  <li><strong className="text-foreground">Origin of Vehicle:</strong> FTA benefits with China and Malaysia; Japanese/Korean/European vehicles do not qualify</li>
                  <li><strong className="text-foreground">Hybrid vs. Non-Hybrid:</strong> HEV up to 1800cc: 25%–50% duty vs. 150%–200% for non-hybrid</li>
                </ul>
              </div>
            </motion.section>

            {/* Electronics */}
            <motion.section {...fade}>
              <SectionHeading>Import Duty on Electronics in Pakistan</SectionHeading>
              <img src="/images/container.jpg" alt="Electronics Import Duty Pakistan – Laptops Mobiles Rates 2026" className="w-full rounded-xl border border-border mb-6" loading="lazy" />
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Laptop size={20} className="text-gold" /> Electronics Import Duty Table Pakistan 2026</h3>
              <DataTable
                headers={["Product Category", "PCT Heading", "CD", "ST", "RD", "AIT", "Total Effective Rate"]}
                rows={electronicsTable.map((r) => [r.product, r.pct, r.cd, r.st, r.rd, r.ait, r.total])}
              />
            </motion.section>

            {/* Mobile Phones */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>Import Duty on Mobile Phones in Pakistan</SectionHeading>
              <div className="text-muted-foreground space-y-4">
                <p>All mobile phones brought into Pakistan must be registered with PTA under the <strong className="text-foreground">DIRBS</strong> system.</p>
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2"><Smartphone size={20} className="text-gold" /> PTA / FBR Mobile Import Duty Rates Pakistan 2026</h3>
                <DataTable headers={["Phone Value (USD)", "Fixed Duty (PKR)"]} rows={mobileSlabTable.map((r) => [r.value, r.duty])} />
                <p className="text-sm">Commercial imports attract 20% CD + 4% ACD + 10%–25% RD + 18% ST + AIT + WHT (~65%–90% of CIF).</p>
              </div>
            </motion.section>

            {/* Laptops */}
            <motion.section {...fade}>
              <SectionHeading>Import Duty on Laptops and Computers in Pakistan</SectionHeading>
              <div className="text-muted-foreground space-y-4">
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong className="text-foreground">Customs Duty:</strong> 0% (PCT heading 8471)</li>
                  <li><strong className="text-foreground">Regulatory Duty:</strong> 0% under current SROs</li>
                  <li><strong className="text-foreground">Sales Tax:</strong> 17%–18%</li>
                  <li><strong className="text-foreground">Advance Income Tax:</strong> 5.5% (ATL) / 8% (unregistered)</li>
                </ul>
                <p><strong className="text-foreground">Total effective tax burden:</strong> ~22%–26% of CIF value.</p>
                <h3 className="text-xl font-semibold text-foreground">Practical Laptop Import Cost Example (CIF PKR 150,000)</h3>
                <DataTable headers={["Charge", "Rate", "Amount (PKR)"]} rows={laptopExampleRows.map((r) => [r.charge, r.rate, r.amount])} />
              </div>
            </motion.section>

            {/* FBR Rules */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>FBR Import Duty Rules in Pakistan — What Every Importer Must Know</SectionHeading>
              <div className="text-muted-foreground space-y-4">
                <p>The <strong className="text-foreground">Federal Board of Revenue (FBR)</strong> governs every aspect of the import process through the Customs Act 1969, Sales Tax Act 1990, Income Tax Ordinance 2001, Import Policy Order, and SROs.</p>
                <h3 className="text-xl font-semibold text-foreground">FBR Customs Valuation</h3>
                <p>Based on the WTO Customs Valuation Agreement (Section 25, Customs Act). Pakistan Customs may override declared transaction value for under-invoicing, related-party transactions, or when National Minimum Values (NMVs) apply.</p>
                <h3 className="text-xl font-semibold text-foreground">WEBOC and GD Filing</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Importer/agent logs into WEBOC with registered credentials</li>
                  <li>Files Goods Declaration (GD) with shipment details</li>
                  <li>Green / Yellow / Red channel assignment</li>
                  <li>Payment Scroll generated and duty paid at bank</li>
                  <li>Goods released</li>
                </ol>
                <p>
                  For professional WEBOC filing, see our{" "}
                  <Link to="/customs-clearance-islamabad" className="text-gold hover:underline">customs clearance Islamabad</Link> services.
                </p>
              </div>
            </motion.section>

            {/* Complete Tax Reference */}
            <motion.section {...fade}>
              <SectionHeading>Common Import Taxes and Charges — Complete Breakdown Table</SectionHeading>
              <h3 className="text-xl font-semibold text-foreground mb-4">Complete Pakistan Import Tax and Charges Reference Table (2026)</h3>
              <DataTable
                headers={["Tax / Charge", "Legal Basis", "Calculated On", "Rate"]}
                rows={importTaxReferenceTable.map((r) => [r.tax, r.basis, r.on, r.rate])}
              />
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4 flex items-center gap-2"><Ship size={20} className="text-gold" /> Port and Handling Charges</h3>
              <DataTable headers={["Charge", "Approximate Cost"]} rows={portChargesTable.map((r) => [r.charge, r.cost])} />
            </motion.section>

            {/* Reduce Import Costs */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>How to Reduce Import Costs Legally in Pakistan</SectionHeading>
              <div className="text-muted-foreground space-y-4">
                <div className="flex items-start gap-3"><TrendingDown className="text-gold mt-1 shrink-0" size={20} /><p>Leverage FTAs (Pak-China, Pak-Malaysia, SAFTA) with valid Certificate of Origin</p></div>
                <div className="flex items-start gap-3"><TrendingDown className="text-gold mt-1 shrink-0" size={20} /><p>Use Transfer of Residence or Baggage Rules where eligible (2+ years abroad)</p></div>
                <div className="flex items-start gap-3"><TrendingDown className="text-gold mt-1 shrink-0" size={20} /><p>Manufacturing bonds and Export Facilitation Scheme for exporters</p></div>
                <div className="flex items-start gap-3"><TrendingDown className="text-gold mt-1 shrink-0" size={20} /><p>Correct PCT classification with expert agent guidance</p></div>
                <div className="flex items-start gap-3"><TrendingDown className="text-gold mt-1 shrink-0" size={20} /><p>Maintain ATL status to reduce AIT from 8% to 5.5%</p></div>
                <h3 className="text-xl font-semibold text-foreground mt-4">Free Trade Agreements</h3>
                <DataTable headers={["Agreement", "Partner", "Benefit"]} rows={ftaTable.map((r) => [r.agreement, r.partner, r.benefit])} />
                <p>
                  For shipment-specific strategies, explore our{" "}
                  <Link to="/logistics-services-pakistan/" className="text-gold hover:underline">logistics services Pakistan</Link> or{" "}
                  <Link to="/top-shipping-companies-in-pakistan" className="text-gold hover:underline">shipping companies in Pakistan</Link>.
                </p>
              </div>
            </motion.section>

            {/* Why Accurate Calculation Matters */}
            <motion.section {...fade}>
              <SectionHeading>Why Accurate Duty Calculation Matters — Risks of Getting It Wrong</SectionHeading>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                {[
                  { icon: AlertTriangle, title: "Under-calculation Risk", desc: "Port demurrage PKR 5,000–20,000/day, penalties up to 5× evaded duty under Section 156, possible confiscation." },
                  { icon: FileCheck, title: "Over-calculation Risk", desc: "Duty refunds take 6–18 months; sales tax refunds via FASTER are faster but still require documentation." },
                  { icon: ShieldCheck, title: "Customs Audit Risk", desc: "FBR post-clearance audits can trigger reassessment, penalties, and prosecution for incorrect values or classifications." },
                  { icon: Package, title: "Reputational Risk", desc: "Repeated disputes can remove WEBOC trusted trader status and increase Red Channel examinations." },
                ].map((item) => (
                  <div key={item.title} className="glass-card rounded-xl p-5 border border-border">
                    <item.icon className="text-gold mb-2" size={24} />
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section {...fade} className="text-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-10 border border-gold/20">
              <Ship className="text-gold mx-auto mb-4" size={40} />
              <h2 className="text-3xl font-display font-bold text-foreground mb-3">Need Expert Help With Customs Clearance in Pakistan?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Calculating duty is just the first step. Best International Movers provides FBR-licensed customs clearing at all major ports — vehicle imports, commercial cargo, personal effects, TR and Baggage schemes.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8">
                {ctaLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-gold hover:underline flex items-center justify-center gap-1">
                    <CheckCircle2 size={14} /> {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all">
                  <Calculator size={18} /> Get Free Duty Assessment
                </Link>
                <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all">
                  <MessageCircle size={18} /> WhatsApp Our Customs Team
                </a>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section {...fade} className="glass-card rounded-2xl p-8 border border-border">
              <SectionHeading>Frequently Asked Questions — Pakistan Import Duty Calculator</SectionHeading>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground">
                      Q{i + 1}: {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.section>

          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CustomDutyCalculator;
