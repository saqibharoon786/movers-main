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

const PakistanToMalaysiaRoute = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pakistan to Malaysia Shipping & Relocation Services | Movers & Logistics"
        description="Complete Pakistan to Malaysia shipping and relocation services — household goods, cargo freight, customs clearance & documentation. Trusted movers with 15+ years experience. Free quote."
        keywords="Pakistan to Malaysia, shipping Pakistan to Malaysia, movers Pakistan to Malaysia, cargo services Malaysia, relocation to Malaysia, household goods Malaysia, freight Pakistan Malaysia, MPCEPA"
        urlPath="/routes/pakistan-to-malaysia/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Pakistan to Malaysia Shipping & Relocation Services",
          description: "Complete Pakistan to Malaysia shipping and relocation services — household goods, cargo freight, customs clearance & documentation.",
          provider: {
            "@type": "Organization",
            name: "Best International Movers & Logistics",
            telephone: "+923009130211",
            email: "info@bestintlmovers.com",
          },
          areaServed: ["Pakistan", "Malaysia"],
        }}
      />
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-14 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: "Routes", to: "/routes" },
              { label: "Pakistan to Malaysia" },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              <Plane size={18} /> International Route · Pakistan to Malaysia
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Pakistan to Malaysia — Shipping, Relocation & Freight Services</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Malaysia has become one of the most popular destinations for Pakistanis moving abroad — whether for employment, higher education at Malaysia's growing private university sector, or long-term residence under programs like Malaysia My Second Home (MM2H). It's also an increasingly important trade partner for Pakistani exporters, supported by the Pakistan-Malaysia Closer Economic Partnership Agreement.
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
          <h2 className="text-3xl font-display font-bold mb-6">What We Ship and Relocate from Pakistan to Malaysia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Household Goods & Personal Effects Relocation</h3>
              <p className="text-sm text-muted-foreground">For individuals and families relocating to Malaysia — whether through employment passes, student visas, or the MM2H long-term residence program — we manage the complete shipment of household goods, furniture, personal belongings, and vehicles from Pakistan to Malaysian cities including Kuala Lumpur, Penang, Johor Bahru, and Kota Kinabalu.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Commercial Cargo & Export Freight</h3>
              <p className="text-sm text-muted-foreground">For Pakistani exporters shipping to Malaysian buyers, importers, and distributors, we manage commercial freight for textiles, leather goods, surgical instruments, sporting goods, rice, and general merchandise, coordinating booking, documentation, and customs clearance on both ends of the shipment.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Student Relocation Support</h3>
              <p className="text-sm text-muted-foreground">Malaysia hosts a growing number of Pakistani students at both public and private universities. We provide tailored shipping solutions for students relocating personal belongings, often combining smaller air freight shipments for immediate needs with more economical sea freight for larger item volumes.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Corporate & Business Relocation</h3>
              <p className="text-sm text-muted-foreground">For Pakistani businesses establishing a branch office, warehouse, or regional trading presence in Malaysia — often used as a base for broader ASEAN market access — we coordinate equipment, inventory, and office relocation as part of a broader international business expansion.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Freight Options for Pakistan to Malaysia Shipments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Plane size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Air Freight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Air freight is the fastest option for shipments from Pakistan to Malaysia, typically used for urgent personal effects, high-value cargo, sample shipments, and business shipments with tight deadlines. Air freight routes connect through major hubs before arriving at Kuala Lumpur International Airport (KLIA), Malaysia's primary air cargo gateway.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Ship size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Sea Freight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For household goods relocations and bulk commercial cargo, sea freight offers a more economical option. We manage full container load (FCL) and less-than-container load (LCL) shipments from Karachi Port, with transit to major Malaysian ports including Port Klang and Penang Port, followed by inland delivery to the final destination city.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Plane size={22} />
                <Ship size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Combined Air & Sea Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For relocating families or businesses with mixed shipping needs — urgent items via air freight and bulk household goods via sea freight — we coordinate combined shipping plans that balance cost and delivery timing based on what genuinely needs to arrive quickly versus what can travel more economically by sea.</p>
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Our Pakistan to Malaysia Shipping Process</h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { title: "Consultation & Shipment Assessment", description: "We start by understanding your specific needs — household relocation, student shipment, commercial cargo, or a combination — including item inventory, volume, and target delivery timeline in Malaysia." },
              { title: "Documentation Preparation", description: "For household goods relocation, this includes visa or employment pass documentation, a detailed inventory list, and any required customs declarations. For commercial cargo, this includes commercial invoices, packing lists, and certificates of origin." },
              { title: "Packing & Loading", description: "Household items are professionally packed using export-grade materials suited for long-distance sea or air transit. Commercial cargo is packed according to product-specific handling requirements." },
              { title: "Export Customs Clearance in Pakistan", description: "Our licensed customs brokers handle export documentation and clearance procedures in Pakistan before the shipment departs." },
              { title: "Freight Transit", description: "Your shipment travels via air or sea freight according to the selected service, with milestone tracking updates provided throughout transit." },
              { title: "Malaysian Customs Clearance & Import Documentation", description: "Upon arrival in Malaysia, we coordinate customs clearance with the Royal Malaysian Customs Department, working with the required import documentation — including the K1 form used for personal effects belonging to individuals relocating to Malaysia under a valid work pass or long-term visa." },
              { title: "Final Delivery", description: "Your shipment is delivered to its final destination in Malaysia — a residential address for household relocations, or a warehouse, distributor, or business address for commercial cargo." },
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
          <h2 className="text-2xl font-display font-bold mb-4">Documentation Required for Household Goods Relocation to Malaysia</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            Individuals relocating household goods to Malaysia typically need to prepare:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Valid passport and Malaysian work pass, student visa, or MM2H approval documentation",
              "Detailed inventory list (packing list) of all items being shipped, including approximate values",
              "K1 Customs Form, used by Royal Malaysian Customs for personal effects import declarations",
              "Proof of employment or enrollment in Malaysia, supporting the relocation purpose",
              "Vehicle registration and ownership documents, if shipping a personal vehicle — noting that Malaysia applies stricter regulations and high duties on imported vehicles",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mt-6">
            Malaysia generally allows duty exemption on used personal and household effects for individuals relocating under a valid employment pass or long-term residence visa, provided the shipment arrives within a reasonable window of the individual's arrival in Malaysia and the items were genuinely owned and used prior to the move.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">Documentation Required for Commercial Cargo to Malaysia</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            Businesses shipping commercial cargo to Malaysia typically need:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Commercial invoice reflecting accurate transaction value",
              "Packing list with itemized shipment contents",
              "Certificate of origin, particularly important for goods seeking preferential tariff treatment under the Pakistan-Malaysia Closer Economic Partnership Agreement (MPCEPA)",
              "Bill of lading or air waybill",
              "Product-specific certifications, such as SIRIM certification for certain regulated products entering the Malaysian market, or halal certification for relevant food and consumer products",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mt-6">
            Malaysia's customs process is managed by the Royal Malaysian Customs Department, and goods entering under MPCEPA preferential arrangements require proper certificate of origin documentation to benefit from reduced tariff rates.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">The Pakistan-Malaysia Trade Advantage</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            One of the most valuable — and often underused — aspects of shipping commercially between these two countries is the Pakistan-Malaysia Closer Economic Partnership Agreement. This bilateral trade agreement reduces or eliminates tariffs on a significant range of products traded between Pakistan and Malaysia, offering real cost advantages for exporters who properly document their shipments to claim preferential treatment.
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Certificate of Origin Requirements — Properly issued certificates of origin are essential to claim MPCEPA preferential tariff rates rather than paying standard duty",
              "Product Eligibility — Not all product categories qualify for the same tariff reductions, making it worth verifying your specific product's status under the agreement before shipping",
              "Documentation Accuracy — Errors in certificate of origin documentation can result in shipments being assessed standard duty rates instead of the preferential rate, effectively erasing the cost advantage",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">FAQ — Pakistan to Malaysia Shipping</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does shipping from Pakistan to Malaysia take?", a: "Air freight typically takes a matter of days, while sea freight from Karachi Port to Port Klang or Penang Port usually takes two to three weeks, plus inland delivery time to the final destination." },
              { q: "Can I ship household goods to Malaysia duty-free?", a: "Individuals relocating to Malaysia under a valid employment pass or long-term residence visa can often qualify for duty exemption on used personal and household effects using the K1 customs form, subject to specific conditions and timing." },
              { q: "What documents do I need to relocate my household to Malaysia?", a: "Typically required documents include a valid passport, Malaysian work pass or visa documentation, a detailed inventory list, the K1 customs form, and proof of employment or enrollment in Malaysia." },
              { q: "How much does it cost to ship from Pakistan to Malaysia?", a: "Costs depend on shipment type, freight mode, volume, destination city, and customs considerations. We provide a free, itemized quote based on your specific shipment." },
              { q: "Can you ship a vehicle from Pakistan to Malaysia?", a: "We provide vehicle shipping coordination, but Malaysia applies significant duties and restrictions on imported vehicles, so we recommend verifying current requirements carefully before shipping a personal vehicle." },
              { q: "What is the Pakistan-Malaysia Closer Economic Partnership Agreement?", a: "MPCEPA is a bilateral trade agreement that reduces or eliminates tariffs on a wide range of products traded between Pakistan and Malaysia, offering cost advantages to exporters with proper certificate of origin documentation." },
              { q: "Do commercial shipments to Malaysia require special certifications?", a: "Certain regulated products require SIRIM certification, and food or consumer products intended for the halal market require appropriate halal certification from a recognized body." },
              { q: "Which Malaysian ports and cities do you deliver to?", a: "We coordinate shipments to major Malaysian ports including Port Klang and Penang Port, with inland delivery to cities including Kuala Lumpur, Penang, Johor Bahru, and Kota Kinabalu." },
              { q: "Can you help Pakistani students relocate their belongings to Malaysia?", a: "Yes, we provide tailored shipping solutions for students, often combining air freight for immediate needs with more economical sea freight for larger item volumes." },
              { q: "Can you handle customs clearance on both ends of the shipment?", a: "Yes, our licensed customs brokers manage export clearance in Pakistan as well as coordination for import clearance with the Royal Malaysian Customs Department." },
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-5 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center glass-card rounded-3xl p-10 border border-border">
          <h2 className="text-2xl font-display font-bold mb-4">Get a Free Pakistan to Malaysia Shipping Quote Today</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're relocating your household to Malaysia, shipping a student's belongings, or managing commercial export cargo to Malaysian buyers, Best International Movers & Logistics has the carrier relationships, customs expertise, and dedicated coordination to make your Pakistan to Malaysia shipment smooth and reliable.
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

export default PakistanToMalaysiaRoute;
