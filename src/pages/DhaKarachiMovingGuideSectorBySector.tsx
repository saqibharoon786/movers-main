import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Phone,
  CheckCircle2,
  MessageCircle,
  Home,
  Star,
  MapPin,
  Globe,
  Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";
import PageBottomQuoteCta from "@/components/marketing/PageBottomQuoteCta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { dhaKarachiMovingGuideFaqs, DHA_KARACHI_MOVING_GUIDE_IMAGE } from "@/data/dhaKarachiMovingGuideSectorBySectorBlog";
import {
  dhaOverviewRows,
  phaseGuides,
  dhaCityGuide,
  floorSurcharges,
  commercialZones,
  internationalRoutes,
  internationalSteps,
  serviceIncludes,
  dhaTestimonials,
  type PhaseGuide,
} from "@/data/dhaKarachiMovingGuidePageData";

const WA = "https://wa.me/923009130211?text=Hello!%20I%20need%20movers%20in%20DHA%20Karachi.";

const heroStats = [
  { value: "All 8 Phases", label: "Plus DHA City" },
  { value: "Since 2009", label: "DHA Karachi Specialists" },
  { value: "Gate Registration", label: "Handled For You" },
  { value: "Free Survey", label: "Written Quote in 24hrs" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dhaKarachiMovingGuideFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Movers DHA Karachi — Sector by Sector Guide",
  description:
    "Complete DHA Karachi moving guide 2026. Movers for Phase 1–8, DHA City, all commercial zones. House shifting, office relocation, international cargo.",
  serviceType: "Local and international moving",
  areaServed: { "@type": "Place", name: "DHA Karachi, Pakistan" },
  provider: { "@id": "https://bestintlmovers.com/#organization" },
};

function TableWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto glass-card rounded-2xl border border-border mb-6">
      <table className="w-full border-collapse min-w-[480px] text-sm">{children}</table>
    </div>
  );
}

function RatesTable({ rates }: { rates: { type: string; price: string }[] }) {
  return (
    <TableWrapper>
      <thead>
        <tr className="bg-navy-light/30">
          <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Move Type</th>
          <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Price Range (PKR)</th>
        </tr>
      </thead>
      <tbody>
        {rates.map((row, idx) => (
          <tr key={row.type} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
            <td className="border border-border px-4 py-3 text-foreground">{row.type}</td>
            <td className="border border-border px-4 py-3 text-gold font-semibold">{row.price}</td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
}

function PhaseSection({ guide, showFloorSurcharges }: { guide: PhaseGuide; showFloorSurcharges?: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 md:p-8 border border-border mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
        {guide.sectionNum}. {guide.title}
      </h2>
      {guide.intro.map((p) => (
        <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
          {p}
        </p>
      ))}
      {guide.challenges && guide.challenges.length > 0 && (
        <div className="space-y-4 mb-6">
          {guide.challenges.map((c) => (
            <div key={c.title}>
              <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      )}
      {guide.bullets && (
        <ul className="space-y-2 mb-6">
          {guide.bullets.map((b) => (
            <li key={b.slice(0, 30)} className="flex items-start gap-2 text-muted-foreground text-sm">
              <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={16} />
              {b}
            </li>
          ))}
        </ul>
      )}
      {showFloorSurcharges && (
        <>
          <h3 className="text-lg font-semibold text-foreground mb-3">Floor Surcharges — No-Lift Apartments</h3>
          <TableWrapper>
            <thead>
              <tr className="bg-navy-light/30">
                <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Floor</th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Surcharge</th>
              </tr>
            </thead>
            <tbody>
              {floorSurcharges.map((row, idx) => (
                <tr key={row.floor} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                  <td className="border border-border px-4 py-3 text-foreground">{row.floor}</td>
                  <td className="border border-border px-4 py-3 text-gold font-semibold">{row.surcharge}</td>
                </tr>
              ))}
            </tbody>
          </TableWrapper>
        </>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-3">Moving Charges 2026</h3>
      <RatesTable rates={guide.rates} />
      {guide.note && <p className="text-muted-foreground text-sm">{guide.note}</p>}
    </motion.section>
  );
}

const DhaKarachiMovingGuideSectorBySector = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Movers DHA Karachi 2026 | Sector by Sector Guide"
        description="Complete DHA Karachi moving guide 2026. Movers for Phase 1–8, DHA City, all commercial zones. House shifting, office relocation, international. Call 0300-9130211."
        keywords="movers DHA Karachi, DHA Karachi moving guide, packers movers DHA Phase 1 2 3 4 5 6 7 8, DHA City movers, house shifting DHA Karachi 2026, office relocation DHA"
        urlPath="/dha-karachi-moving-guide-sector-by-sector"
        canonicalUrl="https://bestintlmovers.com/dha-karachi-moving-guide-sector-by-sector"
        schema={[serviceLd, faqSchema]}
      />

      <Navbar />

      <div className="pt-32 pb-12 bg-gradient-to-br from-navy-dark via-navy to-navy-light">
        <motion.div className="container mx-auto px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Home className="text-gold" size={18} />
              <span className="text-gold text-sm font-medium">DHA Karachi — Every Phase Covered 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Movers in DHA Karachi — Complete Sector by Sector Moving Guide 2026
            </h1>

            <img
              src={DHA_KARACHI_MOVING_GUIDE_IMAGE}
              alt="DHA Karachi moving guide — sector by sector movers 2026"
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-2xl mb-8 shadow-2xl border-4 border-white/10"
            />

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Phase 1–8 | DHA City | All Commercial Zones | House Shifting | Office Relocation | International Cargo
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-gold font-bold text-lg md:text-xl">{stat.value}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
              >
                <Phone size={18} />
                Book Free DHA Survey
              </Link>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp 0300-9130211
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground leading-relaxed space-y-4 mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Why DHA Karachi Requires Specialist Movers in 2026
            </h2>
            <p>
              DHA Karachi is not a single neighbourhood. It is a city within a city — Phase 6 is the rental hub, Phase 8
              is the ROI engine and DHA City is the long-term future bet — spanning 8 developed phases, DHA City on the
              Super Highway corridor and dozens of commercial zones that together house more than half a million residents
              and thousands of businesses.
            </p>
            <p>
              Every phase of DHA Karachi has its own character, its own street layout, its own security protocols, its own
              truck entry procedures and its own moving challenges. If you are moving in or out of DHA Karachi, ask the
              mover about building access, loading windows, crew strength, vehicle timing and whether the quote already
              accounts for the practical realities of that neighbourhood. A serious mover will answer clearly. A weak mover
              will stay vague.
            </p>
            <p>
              Best International Movers &amp; Logistics has been moving DHA Karachi residents and businesses since 2009. We
              have completed hundreds of moves across every phase — from original-scheme Phase 1 bungalows with narrow
              lane access to Phase 8&apos;s newest high-rise towers with complex gate registration systems.
            </p>
            <p>
              Also see our dedicated{" "}
              <Link to="/dha-karachi-movers" className="text-gold hover:underline font-medium">
                DHA Karachi movers
              </Link>{" "}
              service page for booking and pricing.
            </p>
          </motion.section>

          {/* Overview Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              1. DHA Karachi — Overview for Movers in 2026
            </h2>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Phase</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Development Status</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Primary Character</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Typical Property</th>
                </tr>
              </thead>
              <tbody>
                {dhaOverviewRows.map((row, idx) => (
                  <tr key={row.phase} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.phase}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.status}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.character}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.property}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="text-muted-foreground text-sm border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3">
              Phase 6 and Phase 8 dominate investor and mover activity in 2026. Phase 7 is the rising star with
              mid-development and strong appreciation. DHA City is the long-term play on the CPEC and Super Highway
              corridor.
            </p>
          </motion.section>

          {/* Phase guides */}
          {phaseGuides.map((guide) => (
            <PhaseSection key={guide.sectionNum} guide={guide} showFloorSurcharges={guide.sectionNum === 6} />
          ))}

          {/* DHA City */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-border mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              {dhaCityGuide.sectionNum}. {dhaCityGuide.title}
            </h2>
            {dhaCityGuide.intro.map((p) => (
              <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="space-y-4 mb-6">
              {dhaCityGuide.considerations.map((c) => (
                <div key={c.title}>
                  <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">DHA City Moving Charges 2026</h3>
            <RatesTable rates={dhaCityGuide.rates} />
          </motion.section>

          {/* Commercial Zones */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              11. DHA Karachi Commercial Zones — Office Moving Guide 2026
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              DHA Karachi hosts one of Pakistan&apos;s most concentrated collections of premium commercial space. Our{" "}
              <Link to="/office-relocation-karachi" className="text-gold hover:underline font-medium">
                office relocation service in Karachi
              </Link>{" "}
              covers every DHA commercial zone:
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Commercial Zone</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Phase</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Move Timing</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Access Notes</th>
                </tr>
              </thead>
              <tbody>
                {commercialZones.map((row, idx) => (
                  <tr key={row.zone} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.zone}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.phase}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.timing}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* International */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              12. DHA Karachi to International — When Your Move Goes Abroad
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For DHA Karachi families relocating internationally, our{" "}
              <Link to="/cargo-service-karachi" className="text-gold hover:underline font-medium">
                cargo and sea freight service from Karachi Port
              </Link>{" "}
              connects your DHA home directly to destinations worldwide — UAE, UK, Canada, Australia, Saudi Arabia and
              100+ countries.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Globe className="text-gold" size={20} />
              How DHA to International Works
            </h3>
            <ol className="space-y-2 mb-8 list-decimal list-inside text-muted-foreground text-sm">
              {internationalSteps.map((step, i) => (
                <li key={i} className="leading-relaxed pl-2">
                  {step}
                </li>
              ))}
            </ol>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Destination</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Method</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Transit</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">From (USD)</th>
                </tr>
              </thead>
              <tbody>
                {internationalRoutes.map((row, idx) => (
                  <tr key={row.dest} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground">{row.dest}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.method}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.transit}</td>
                    <td className="border border-border px-4 py-3 text-gold font-semibold">{row.from}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-border mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              13. Our Complete DHA Karachi Moving Service — What We Handle
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our{" "}
              <Link to="/packers-and-movers-karachi" className="text-gold hover:underline font-medium">
                packers and movers in DHA Karachi
              </Link>{" "}
              service covers every possible moving scenario across all DHA phases:
            </p>
            <TableWrapper>
              <thead>
                <tr className="bg-navy-light/30">
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Service</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">What We Deliver</th>
                </tr>
              </thead>
              <tbody>
                {serviceIncludes.map((row, idx) => (
                  <tr key={row.service} className={idx % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                    <td className="border border-border px-4 py-3 text-foreground font-medium">{row.service}</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">{row.deliver}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              14. DHA Karachi Moving — Complete FAQ 2026
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {dhaKarachiMovingGuideFaqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* Reviews */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              15. DHA Karachi Moving Reviews — June 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dhaTestimonials.map((t) => (
                <div key={t.name} className="glass-card rounded-2xl p-6 border border-border">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="text-gold fill-gold" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-gold text-xs">{t.route}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 border border-gold/20 bg-gold/5"
          >
            <div className="flex items-start gap-3">
              <MapPin className="text-gold shrink-0 mt-1" size={22} />
              <div className="text-muted-foreground text-sm space-y-1">
                <p>
                  <strong className="text-foreground">Serving:</strong> DHA Phase 1, 2, 3, 4, 5, 6, 7, 8, DHA City — All
                  Commercial Zones
                </p>
                <p>
                  <strong className="text-foreground">Hours:</strong> Monday – Saturday 8:00 AM – 8:00 PM | Weekend Service
                  Available
                </p>
                <p className="flex items-center gap-2 pt-2">
                  <Truck className="text-gold" size={16} />
                  Free home survey. Written quote. DHA gate registration handled. Fully insured.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <PageBottomQuoteCta
        heading="Book Free DHA Home Survey — All Phases Covered 2026"
        subtext="Free home survey within 24 hours. Written quote. DHA gate registration handled. All phases covered. Fully insured. Call 0300-9130211"
      />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default DhaKarachiMovingGuideSectorBySector;
