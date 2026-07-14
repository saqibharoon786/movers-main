import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Ship, Package, FileText, CheckCircle2, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";

const PakistanToGermanyRoute = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pakistan to Germany Shipping & Relocation Services | Movers & Logistics"
        description="Complete Pakistan to Germany shipping and relocation services — household goods, cargo freight, customs clearance & documentation. Trusted movers with 15+ years experience. Free quote."
        keywords="Pakistan to Germany, shipping Pakistan to Germany, movers Pakistan to Germany, cargo services Germany, relocation to Germany, household goods Germany, freight Pakistan Germany"
        urlPath="/routes/pakistan-to-germany/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Pakistan to Germany Shipping & Relocation Services",
          description: "Complete Pakistan to Germany shipping and relocation services — household goods, cargo freight, customs clearance & documentation.",
          provider: {
            "@type": "Organization",
            name: "Best International Movers & Logistics",
            telephone: "+923009130211",
            email: "info@bestintlmovers.com",
          },
          areaServed: ["Pakistan", "Germany"],
        }}
      />
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-14 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: "Routes", to: "/routes" },
              { label: "Pakistan to Germany" },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              <Plane size={18} /> International Route · Pakistan to Germany
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Pakistan to Germany — Shipping, Relocation & Freight Services</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're an individual relocating to Germany for work, study, or family reunification, or a business shipping cargo to German buyers and distributors, moving between Pakistan and Germany involves a specific set of freight options, customs procedures, and documentation requirements that differ meaningfully from other international routes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
                Get Free Quote <ArrowRight size={18} />
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 rounded-lg border border-border bg-navy-mid font-bold">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 container mx-auto px-4 max-w-6xl space-y-16">
        <section className="glass-card rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-display font-bold mb-6">What We Ship and Relocate from Pakistan to Germany</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Household Goods & Personal Effects Relocation</h3>
              <p className="text-sm text-muted-foreground">For individuals and families relocating to Germany — whether for employment, higher education, spousal visas, or permanent migration — we manage the complete shipment of household goods, furniture, personal belongings, and vehicles from Pakistan to German cities including Frankfurt, Berlin, Munich, Hamburg, Stuttgart, and Cologne.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Commercial Cargo & Export Freight</h3>
              <p className="text-sm text-muted-foreground">For Pakistani exporters shipping to German buyers, importers, and distributors, we manage commercial freight for textiles, leather goods, surgical instruments, sporting goods, and general merchandise, coordinating booking, documentation, and customs clearance on both ends of the shipment.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Vehicle Shipping</h3>
              <p className="text-sm text-muted-foreground">We provide insured vehicle shipping services for individuals relocating to Germany with a personal vehicle, managing export documentation from Pakistan and import compliance with German vehicle registration requirements.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Corporate & Business Relocation</h3>
              <p className="text-sm text-muted-foreground">For Pakistani businesses establishing a branch office, warehouse, or operational presence in Germany, we coordinate equipment, inventory, and office relocation as part of a broader international business expansion.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Freight Options for Pakistan to Germany Shipments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Plane size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Air Freight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Air freight is the fastest option for shipments from Pakistan to Germany, typically used for urgent personal effects, high-value cargo, sample shipments, and business shipments with tight deadlines. Air freight routes typically connect through major hubs before arriving at German airports including Frankfurt Airport.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Ship size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Sea Freight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For household goods relocations and bulk commercial cargo, sea freight offers a more economical option. We manage full container load (FCL) and less-than-container load (LCL) shipments from Karachi Port, with transit to major German ports including Hamburg and Bremerhaven, followed by inland delivery to the final destination city.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Plane size={22} />
                <Ship size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Combined Air & Sea Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For relocating families or businesses with mixed shipping needs — urgent items via air freight and bulk household goods via sea freight — we coordinate combined shipping plans that balance cost and delivery timing according to what actually needs to arrive quickly versus what can travel more economically.</p>
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Our Pakistan to Germany Shipping Process</h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { title: "Consultation & Shipment Assessment", description: "We start by understanding your specific needs — household relocation, commercial cargo, or a combination — including item inventory, volume, and target delivery timeline in Germany." },
              { title: "Documentation Preparation", description: "For household goods relocation, this includes visa or residence permit documentation, an inventory list, and any required customs declarations. For commercial cargo, this includes commercial invoices, packing lists, and certificates of origin." },
              { title: "Packing & Loading", description: "Household items are professionally packed using export-grade materials suited for long-distance sea or air transit. Commercial cargo is packed according to product-specific handling requirements." },
              { title: "Export Customs Clearance in Pakistan", description: "Our licensed customs brokers handle export documentation and clearance procedures in Pakistan before the shipment departs." },
              { title: "Freight Transit", description: "Your shipment travels via air or sea freight according to the selected service, with milestone tracking updates provided throughout transit." },
              { title: "German Customs Clearance & Import Documentation", description: "Upon arrival in Germany, we coordinate customs clearance, working with the required import documentation — including transfer of residence documentation for household goods relocations, which can qualify for duty exemptions under German customs regulations." },
              { title: "Final Delivery", description: "Your shipment is delivered to its final destination in Germany — a residential address for household relocations, or a warehouse, distributor, or business address for commercial cargo." },
            ].map((step, idx) => (
              <div key={step.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold font-bold shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">Documentation Required for Household Goods Relocation to Germany</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            Individuals relocating household goods to Germany typically need to prepare:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Valid passport and German visa or residence permit",
              "Detailed inventory list of all items being shipped, including approximate values",
              "Proof of German address or registration confirmation (Anmeldung), where available",
              "Proof of prior residence in Pakistan, supporting eligibility for duty-free import of used household goods under transfer of residence regulations",
              "Vehicle registration and ownership documents, if shipping a personal vehicle",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mt-6">
            German customs generally allows duty-free import of used household goods for individuals genuinely transferring their residence to Germany, provided the goods have been used and owned for a sufficient period before the move — though specific requirements should always be confirmed against current German customs regulations at the time of shipping.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">Documentation Required for Commercial Cargo to Germany</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            Businesses shipping commercial cargo to Germany typically need:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Commercial invoice reflecting accurate transaction value",
              "Packing list with itemized shipment contents",
              "Certificate of origin, particularly relevant for goods that may qualify for preferential trade treatment",
              "Bill of lading or air waybill",
              "Product-specific certifications, such as CE marking compliance documentation for applicable goods entering the EU market",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mt-6">
            Germany, as part of the European Union, applies EU-wide customs and product compliance standards, meaning goods entering Germany must meet broader EU regulatory requirements in addition to standard customs documentation.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">FAQ — Pakistan to Germany Shipping</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does shipping from Pakistan to Germany take?", a: "Air freight typically takes a matter of days, while sea freight from Karachi Port to German ports like Hamburg usually takes several weeks, plus inland delivery time to the final destination." },
              { q: "Can I ship household goods to Germany duty-free?", a: "Individuals genuinely transferring their residence to Germany can often qualify for duty-free import of used household goods under transfer of residence regulations, subject to specific documentation and eligibility requirements." },
              { q: "What documents do I need to relocate my household to Germany?", a: "Typically required documents include a valid passport, German visa or residence permit, a detailed inventory list, and proof of prior residence in Pakistan supporting duty exemption eligibility." },
              { q: "How much does it cost to ship from Pakistan to Germany?", a: "Costs depend on shipment type, freight mode, volume, destination city, and customs considerations. We provide a free, itemized quote based on your specific shipment." },
              { q: "Can you ship a vehicle from Pakistan to Germany?", a: "Yes, we provide insured vehicle shipping services, managing export documentation from Pakistan and helping coordinate import compliance with German vehicle registration requirements." },
              { q: "What is the difference between air freight and sea freight for this route?", a: "Air freight is faster but more expensive, typically used for urgent or high-value shipments, while sea freight is more cost-effective for larger household goods or bulk commercial shipments." },
              { q: "Do commercial shipments to Germany require CE marking?", a: "Certain product categories require CE marking to demonstrate compliance with EU health, safety, and environmental standards before entering the German and broader EU market." },
              { q: "Which German ports and cities do you deliver to?", a: "We coordinate shipments to major German ports including Hamburg and Bremerhaven, with inland delivery to cities including Frankfurt, Berlin, Munich, Hamburg, Stuttgart, and Cologne." },
              { q: "Do I need to pay VAT on shipments to Germany?", a: "Commercial imports into Germany are typically subject to German import VAT in addition to any applicable customs duty, while household goods relocations may qualify for exemptions under transfer of residence rules." },
              { q: "Can you handle customs clearance on both ends of the shipment?", a: "Yes, our licensed customs brokers manage export clearance in Pakistan as well as coordination for import clearance and compliance in Germany." },
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-5 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center glass-card rounded-3xl p-10 border border-border">
          <h2 className="text-2xl font-display font-bold mb-4">Get a Free Pakistan to Germany Shipping Quote Today</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're relocating your household to Germany, shipping a vehicle, or managing commercial export cargo to German buyers, Best International Movers & Logistics has the carrier relationships, customs expertise, and dedicated coordination to make your Pakistan to Germany shipment smooth and reliable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${PHONE}`} className="inline-flex px-8 py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold gap-2">
              <Phone size={18} /> {PHONE}
            </a>
            <a href={`mailto:info@bestintlmovers.com`} className="inline-flex px-8 py-4 rounded-lg border border-border font-bold">
              <Mail size={18} /> info@bestintlmovers.com
            </a>
          </div>
        </section>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default PakistanToGermanyRoute;
