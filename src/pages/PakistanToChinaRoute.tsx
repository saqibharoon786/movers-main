import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Ship, Package, FileText, CheckCircle2, Phone, Mail, Mountain } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import SEO from "@/components/SEO";

const WA = "https://wa.me/923009130211";
const PHONE = "0300-9130211";

const PakistanToChinaRoute = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pakistan to China Shipping & Relocation Services | Movers & Logistics"
        description="Complete Pakistan to China shipping and relocation services — household goods, cargo freight, CPEC business logistics & customs clearance. Trusted movers with 15+ years experience."
        keywords="Pakistan to China, shipping Pakistan to China, movers Pakistan to China, cargo services China, CPEC logistics, relocation to China, household goods China, freight Pakistan China, CPFTA"
        urlPath="/routes/pakistan-to-china/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Pakistan to China Shipping & Relocation Services",
          description: "Complete Pakistan to China shipping and relocation services — household goods, cargo freight, CPEC business logistics & customs clearance.",
          provider: {
            "@type": "Organization",
            name: "Best International Movers & Logistics",
            telephone: "+923009130211",
            email: "info@bestintlmovers.com",
          },
          areaServed: ["Pakistan", "China"],
        }}
      />
      <Navbar />
      <section className="pt-28 lg:pt-36 pb-14 bg-navy-light border-b border-border">
        <div className="container mx-auto px-4">
          <PageBreadcrumb
            className="mb-8"
            items={[
              { label: "Routes", to: "/routes" },
              { label: "Pakistan to China" },
            ]}
          />
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 text-gold text-sm font-semibold tracking-widest uppercase">
              <Plane size={18} /> International Route · Pakistan to China
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Pakistan to China — Shipping, Relocation & Freight Services</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Few international routes matter more to Pakistan's trade and business landscape today than the one connecting it to China. Between the China-Pakistan Economic Corridor (CPEC), the China-Pakistan Free Trade Agreement, a steadily growing number of Pakistani students at Chinese universities, and businesses on both sides expanding cross-border operations, the volume and complexity of shipping between the two countries has grown significantly.
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
          <h2 className="text-3xl font-display font-bold mb-6">What We Ship and Relocate from Pakistan to China</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Household Goods & Personal Effects Relocation</h3>
              <p className="text-sm text-muted-foreground">For individuals relocating to China — whether for employment, academic postings, or long-term business assignments — we manage the complete shipment of household goods, furniture, personal belongings, and vehicles from Pakistan to Chinese cities including Beijing, Shanghai, Guangzhou, Shenzhen, Urumqi, and Kashgar.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Commercial Cargo & Export Freight</h3>
              <p className="text-sm text-muted-foreground">For Pakistani exporters shipping to Chinese buyers, importers, and distributors, we manage commercial freight for textiles, leather goods, surgical instruments, agricultural products, and general merchandise, coordinating booking, documentation, and customs clearance on both ends of the shipment.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">Student Relocation Support</h3>
              <p className="text-sm text-muted-foreground">China hosts one of the largest populations of Pakistani international students, drawn by scholarship programs and growing academic partnerships between the two countries. We provide tailored shipping solutions for students relocating personal belongings, often combining smaller air freight shipments for immediate needs with more economical sea freight for larger item volumes.</p>
            </div>
            <div className="p-6 bg-navy-mid/40 rounded-xl border border-white/5">
              <h3 className="font-semibold text-foreground mb-2">CPEC-Related Business & Equipment Logistics</h3>
              <p className="text-sm text-muted-foreground">For businesses involved in China-Pakistan Economic Corridor projects — including infrastructure, energy, and industrial ventures — we coordinate equipment shipping, personnel relocation, and cross-border logistics support tied to CPEC-related operations.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Freight Options for Pakistan to China Shipments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Plane size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Air Freight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Air freight is the fastest option for shipments from Pakistan to China, typically used for urgent personal effects, high-value cargo, sample shipments, and business shipments with tight deadlines. Routes connect through major hubs before arriving at Chinese airports including Beijing Capital, Shanghai Pudong, and Guangzhou Baiyun.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Ship size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Sea Freight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For household goods relocations and bulk commercial cargo, sea freight offers a more economical option. We manage FCL and LCL shipments from Karachi Port, with transit to major Chinese ports including Shanghai, Shenzhen, and Guangzhou, followed by inland delivery.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Mountain size={22} />
                <Package size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Overland via Khunjerab Pass</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Pakistan and China share a direct land border crossing at the Khunjerab Pass, connecting Gilgit-Baltistan to China's Xinjiang region via the Karakoram Highway. This overland route can offer a practical alternative for certain cargo types, though it involves seasonal accessibility considerations.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-6 border border-white/5">
              <div className="flex items-center gap-2 text-gold mb-3">
                <Plane size={22} />
                <Ship size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Combined Air & Sea Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">For relocating families or businesses with mixed shipping needs — urgent items via air freight and bulk household goods via sea freight — we coordinate combined shipping plans that balance cost and delivery timing.</p>
            </motion.div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">Our Pakistan to China Shipping Process</h2>
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              { title: "Consultation & Shipment Assessment", description: "We start by understanding your specific needs — household relocation, student shipment, commercial cargo, or CPEC-related business logistics — including item inventory, volume, and target delivery timeline in China." },
              { title: "Documentation Preparation", description: "For household goods relocation, this includes visa or work permit documentation, a detailed inventory list, and any required customs declarations. For commercial cargo, this includes commercial invoices, packing lists, and certificates of origin." },
              { title: "Packing & Loading", description: "Household items are professionally packed using export-grade materials suited for long-distance sea, air, or overland transit. Commercial cargo is packed according to product-specific handling requirements." },
              { title: "Export Customs Clearance in Pakistan", description: "Our licensed customs brokers handle export documentation and clearance procedures in Pakistan before the shipment departs." },
              { title: "Freight Transit", description: "Your shipment travels via air, sea, or overland freight according to the selected service, with milestone tracking updates provided throughout transit." },
              { title: "Chinese Customs Clearance & Import Documentation", description: "Upon arrival in China, we coordinate customs clearance with China Customs, working with the required import documentation for both personal effects and commercial goods, including certificate of origin documentation for shipments seeking preferential tariff treatment under the China-Pakistan Free Trade Agreement." },
              { title: "Final Delivery", description: "Your shipment is delivered to its final destination in China — a residential address for household relocations, or a warehouse, distributor, or business address for commercial cargo." },
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
          <h2 className="text-2xl font-display font-bold mb-4">Documentation Required for Household Goods Relocation to China</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            Individuals relocating household goods to China typically need to prepare:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Valid passport and Chinese work permit, residence permit, or student visa documentation",
              "Detailed inventory list (packing list) of all items being shipped, including approximate values",
              "Proof of employment, academic enrollment, or business assignment in China",
              "Customs declaration forms required by China Customs for personal effects import",
              "Vehicle registration and ownership documents, if shipping a personal vehicle — noting that China applies strict and complex regulations on imported vehicles",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mt-6">
            China's customs regulations for personal effects vary depending on visa category and length of stay, making it important to confirm current requirements based on your specific relocation circumstances before shipping.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">Documentation Required for Commercial Cargo to China</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            Businesses shipping commercial cargo to China typically need:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Commercial invoice reflecting accurate transaction value",
              "Packing list with itemized shipment contents",
              "Certificate of origin, essential for goods seeking preferential tariff treatment under the China-Pakistan Free Trade Agreement (CPFTA)",
              "Bill of lading or air waybill",
              "Product-specific certifications, including China Compulsory Certification (CCC) for certain regulated product categories",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mt-6">
            China's customs process is managed by the General Administration of Customs, and goods entering under CPFTA preferential arrangements require proper certificate of origin documentation to benefit from reduced or eliminated tariff rates.
          </p>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">Understanding the China-Pakistan Free Trade Agreement</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            The China-Pakistan Free Trade Agreement significantly reduces or eliminates tariffs on a wide range of products traded between the two countries, and businesses that properly document their shipments can realize meaningful cost savings.
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Certificate of Origin Requirements — Properly issued certificates of origin are essential to claim CPFTA preferential tariff rates rather than paying standard duty",
              "Product Category Eligibility — Tariff reductions vary by product category and have been expanded through subsequent phases of the agreement, making it worth verifying your specific product's current status",
              "Documentation Accuracy — Errors in certificate of origin documentation can result in shipments being assessed standard duty rates instead of the preferential rate, reducing the trade agreement's cost advantage",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass-card rounded-2xl p-8 border border-gold/20">
          <h2 className="text-2xl font-display font-bold mb-4">CPEC and the Growing Pakistan-China Logistics Relationship</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed mb-6">
            The China-Pakistan Economic Corridor has fundamentally reshaped the logistics relationship between the two countries, driving investment in infrastructure, energy, and industrial projects that require ongoing cross-border equipment and personnel movement. Businesses involved in CPEC-related projects often need:
          </p>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Specialized Equipment Shipping — Machinery and equipment tied to infrastructure and energy projects, often requiring the same rigging and engineering expertise used in heavy machinery relocation",
              "Personnel Relocation Support — Coordinated household goods shipping for personnel moving between Pakistan and China for project assignments",
              "Recurring Freight Coordination — Businesses with ongoing CPEC-related shipping needs often benefit from a structured logistics relationship rather than managing each shipment individually",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-display font-bold text-center mb-10">FAQ — Pakistan to China Shipping</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does shipping from Pakistan to China take?", a: "Air freight typically takes a matter of days, while sea freight from Karachi Port to Chinese ports like Shanghai or Shenzhen usually takes two to three weeks, plus inland delivery time to the final destination." },
              { q: "Is there a direct land route between Pakistan and China?", a: "Yes, the Khunjerab Pass connects Gilgit-Baltistan to China's Xinjiang region via the Karakoram Highway, though this route has seasonal accessibility limitations and specific border documentation requirements." },
              { q: "What is the China-Pakistan Free Trade Agreement and how does it affect shipping costs?", a: "CPFTA reduces or eliminates tariffs on a wide range of products traded between Pakistan and China, offering cost advantages to exporters with proper certificate of origin documentation." },
              { q: "What documents do I need to relocate my household to China?", a: "Typically required documents include a valid passport, Chinese work permit or visa documentation, a detailed inventory list, proof of employment or enrollment, and customs declaration forms required by China Customs." },
              { q: "How much does it cost to ship from Pakistan to China?", a: "Costs depend on shipment type, freight mode, volume, destination city, and customs considerations. We provide a free, itemized quote based on your specific shipment." },
              { q: "Can you ship a vehicle from Pakistan to China?", a: "We provide vehicle shipping coordination, but China applies complex and often restrictive regulations on imported vehicles, so we recommend verifying current requirements carefully before shipping." },
              { q: "Do commercial shipments to China require special certifications?", a: "Certain regulated product categories require China Compulsory Certification (CCC) before entering the Chinese market, and this should be arranged well in advance of shipping." },
              { q: "Which Chinese ports and cities do you deliver to?", a: "We coordinate shipments to major Chinese ports including Shanghai, Shenzhen, and Guangzhou, with inland delivery to cities including Beijing, Shanghai, Guangzhou, Shenzhen, Urumqi, and Kashgar." },
              { q: "Can you help Pakistani students relocate their belongings to China?", a: "Yes, we provide tailored shipping solutions for students, often combining air freight for immediate needs with more economical sea freight for larger item volumes." },
              { q: "Do you support logistics for CPEC-related projects?", a: "Yes, we coordinate equipment shipping, personnel relocation, and cross-border logistics support for businesses involved in China-Pakistan Economic Corridor infrastructure, energy, and industrial projects." },
            ].map((faq) => (
              <div key={faq.q} className="glass-card rounded-xl p-5 border border-white/5">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center glass-card rounded-3xl p-10 border border-border">
          <h2 className="text-2xl font-display font-bold mb-4">Get a Free Pakistan to China Shipping Quote Today</h2>
          <p className="text-muted-foreground mb-6">
            Whether you're relocating your household to China, shipping a student's belongings, managing commercial export cargo, or coordinating CPEC-related equipment logistics, Best International Movers & Logistics has the carrier relationships, customs expertise, and dedicated coordination to make your Pakistan to China shipment smooth and reliable.
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

export default PakistanToChinaRoute;
