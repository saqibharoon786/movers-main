import BlogArticleShell from "@/components/blog/BlogArticleShell";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Package, Plane, Anchor, ShieldCheck, Clock, Users, MapPin, Phone, FileCheck, Calculator, Award } from "lucide-react";

const BlogInternationalRelocationRawalpindi = () => {
  const BlogArticleBody = () => (
    <div className="max-w-4xl mx-auto">
      
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <img 
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="International relocation services in Rawalpindi - Professional packing and shipping" 
          className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-white/10"
        />
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          Are you planning to move abroad from Rawalpindi? Whether you are relocating to Dubai, the UK, Canada, Australia, or anywhere else in the world, the process can feel overwhelming. From packing your entire household to clearing customs in a foreign country, international relocation is a multi-step journey that demands expert handling.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          In this complete guide, we break down everything you need to know about international relocation services in Rawalpindi — what these services include, how much they cost, how to choose the right company, and how Best International Movers has helped thousands of Rawalpindi families successfully settle abroad.
        </p>
      </motion.div>

      {/* What Are International Relocation Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">What Are International Relocation Services?</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          International relocation services are a comprehensive package of logistics support that helps individuals, families, and businesses move from one country to another. Unlike a simple courier or cargo shipment, professional relocation services cover every stage of your move from start to finish.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A full-service international relocation company in Rawalpindi will typically handle:
        </p>
        <div className="space-y-4">
          {[
            "Professional packing of all household goods, furniture, and fragile items",
            "Loading and secure transportation to the nearest port or airport",
            "Sea freight or air freight booking and coordination",
            "Customs documentation and clearance in both Pakistan and the destination country",
            "Delivery to your new address (door-to-door service)",
            "Optional unpacking and home setup support"
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="text-gold" size={14} />
              </div>
              <p className="text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Rawalpindi is Major Hub */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Is Rawalpindi a Major Hub for International Relocation?</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rawalpindi, alongside its twin city Islamabad, is one of Pakistan's most important cities for international migration. Thousands of families from Rawalpindi relocate overseas every year for employment, education, family reunification, or business expansion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The city's proximity to Islamabad International Airport gives Rawalpindi residents a major advantage when it comes to air freight shipments. For sea freight, goods are transported by road to Karachi Port, the country's main shipping hub.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Islamabad International Airport - Gateway for international relocation from Rawalpindi" 
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-foreground mb-4">Top Destination Countries for Rawalpindi Residents</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "United Arab Emirates (Dubai, Abu Dhabi, Sharjah)",
            "United Kingdom (London, Birmingham, Manchester)",
            "Canada (Toronto, Calgary, Vancouver)",
            "Saudi Arabia (Riyadh, Jeddah, Dammam)",
            "Australia (Sydney, Melbourne, Brisbane)",
            "United States of America"
          ].map((destination, index) => (
            <div key={index} className="glass-card rounded-lg p-4 border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-center space-x-3">
                <Globe className="text-gold" size={20} />
                <span className="text-foreground font-medium">{destination}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Complete Breakdown of Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Complete Breakdown of International Relocation Services in Rawalpindi</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          When you hire a professional moving company in Rawalpindi, here is exactly what each service involves:
        </p>
        
        <div className="space-y-8">
          {/* Professional Packing */}
          <div className="glass-card rounded-xl p-6 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Package className="text-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Professional Packing Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional packers use high-quality materials including double-wall cardboard boxes, bubble wrap, foam padding, and wooden crating for heavy furniture and artwork. Every item is labeled, inventoried, and packed according to international shipping standards. Fragile items like glassware, electronics, and antiques receive extra protection.
                </p>
              </div>
            </div>
          </div>

          {/* Sea Freight */}
          <div className="glass-card rounded-xl p-6 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Anchor className="text-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Sea Freight — Most Cost-Effective Option</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For families with large volumes of household goods, sea freight is the most economical choice. Your belongings are loaded into a 20-foot or 40-foot shipping container at Karachi Port and transported to your destination country. Transit time varies from 2 weeks (UAE) to 6-8 weeks (UK, Canada, Australia). You can opt for a Full Container Load (FCL) or share a container with others through a Less than Container Load (LCL) option.
                </p>
              </div>
            </div>
          </div>

          {/* Air Freight */}
          <div className="glass-card rounded-xl p-6 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Plane className="text-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">3. Air Freight — Fastest International Shipping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Air freight is ideal for urgent shipments or smaller volumes of goods. Using Islamabad International Airport as the departure point, your cargo can reach Dubai in as little as 24-48 hours, or the UK and Canada within 3-5 days. While more expensive than sea freight, air cargo is the preferred choice for electronics, documents, medicine, and high-value items.
                </p>
              </div>
            </div>
          </div>

          {/* Customs Clearance */}
          <div className="glass-card rounded-xl p-6 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <FileCheck className="text-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">4. Customs Clearance — The Most Critical Step</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customs clearance is often the most complex and stressful part of any international move. A professional relocation company will prepare all required documentation including the packing list, Bill of Lading (for sea freight) or Airway Bill (for air freight), customs declaration forms, and proof of residency in the destination country. Experienced customs brokers ensure your goods clear both Pakistani and destination country customs without delays or penalties.
                </p>
              </div>
            </div>
          </div>

          {/* Vehicle Shipping */}
          <div className="glass-card rounded-xl p-6 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Globe className="text-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">5. Vehicle Shipping from Rawalpindi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many families moving abroad want to take their car with them. Professional relocation companies offer vehicle shipping via RoRo (Roll-on Roll-off) carriers or enclosed container shipping. The car is transported from Rawalpindi to Karachi Port, loaded onto the vessel, and delivered to the destination port. Import duty and registration requirements of the destination country apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How to Choose Right Company */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">How to Choose the Right International Relocation Company in Rawalpindi</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Choosing the wrong moving company can result in damaged goods, hidden charges, or shipments stuck at customs for weeks. Here is what to check before hiring a relocation company:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Clock, title: "Experience & Track Record", desc: "Look for a company with at least 10+ years of experience in international moves and a verifiable history of successful relocations. Ask for client references." },
            { icon: ShieldCheck, title: "License & Affiliations", desc: "A reputable company should be a member of international moving associations and have proper trade licenses." },
            { icon: Award, title: "Insurance Coverage", desc: "Make sure the company offers comprehensive cargo insurance for your goods during transit. This protects you in case of damage, loss, or theft." },
            { icon: Calculator, title: "Transparent Pricing", desc: "Request a detailed written quote that includes packing, freight, customs fees, and delivery. Avoid companies that give vague or verbal estimates." },
            { icon: Globe, title: "Real-Time Shipment Tracking", desc: "Modern relocation companies provide live tracking so you always know where your shipment is in the journey." },
            { icon: MapPin, title: "Door-to-Door Service", desc: "The best companies handle everything from your home in Rawalpindi to your new address abroad — with zero need for you to coordinate separately with ports, airlines, or local agents." }
          ].map((item, index) => (
            <div key={index} className="glass-card rounded-lg p-4 border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-gold" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Cost Breakdown */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">How Much Does International Relocation from Rawalpindi Cost?</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          The cost of international relocation depends on several factors including the volume of goods, destination country, mode of transport (sea vs air), and additional services required. Below is a general price range to help you plan your budget:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-border rounded-lg">
            <thead>
              <tr className="bg-navy-light/30">
                <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Route</th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Service Type</th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Price Range (PKR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { route: "Rawalpindi to Dubai", service: "Sea Freight, 20ft Container", price: "350,000 – 600,000" },
                { route: "Rawalpindi to UK", service: "Sea Freight, Shared Container", price: "200,000 – 450,000" },
                { route: "Rawalpindi to Canada", service: "Sea Freight", price: "450,000 – 900,000" },
                { route: "Rawalpindi to UAE", service: "Air Freight, 100-200 kg", price: "80,000 – 180,000" },
                { route: "Professional Packing Only", service: "All Cities", price: "25,000 – 80,000" },
                { route: "Vehicle Shipping", service: "Pakistan to Dubai", price: "150,000 – 300,000" }
              ].map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-navy-light/20" : "bg-navy-light/10"}>
                  <td className="border border-border px-4 py-3 font-medium text-foreground">{item.route}</td>
                  <td className="border border-border px-4 py-3 text-muted-foreground">{item.service}</td>
                  <td className="border border-border px-4 py-3 font-semibold text-gold">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-muted-foreground italic text-sm">
          Note: These are estimated figures. Final costs depend on your specific inventory, route, and service level. Always request a free survey and written quote before committing.
        </p>
      </motion.section>

      {/* Documents Required */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Documents Required for International Relocation from Pakistan</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Preparing the right documents in advance avoids costly delays at customs. Here is a standard checklist for international moves from Rawalpindi:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Valid Pakistani Passport (all family members)",
            "Valid Visa or Residency Permit for destination country",
            "Detailed Packing List / Inventory (provided by the moving company)",
            "Bill of Lading (Sea Freight) or Airway Bill (Air Freight)",
            "Customs Declaration Form (destination country requirements)",
            "Proof of Employment or Sponsorship (if applicable)",
            "Insurance Certificate for your shipment",
            "Vehicle Registration Documents (if shipping a car)",
            "CNIC copies for all adult family members"
          ].map((doc, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <FileCheck className="text-gold" size={14} />
              </div>
              <p className="text-muted-foreground text-sm">{index + 1}. {doc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Expert Tips */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">5 Expert Tips for a Smooth International Move from Rawalpindi</h2>
        
        <div className="space-y-6">
          {[
            {
              title: "Start Planning 2-3 Months in Advance",
              desc: "International relocation has many moving parts. Starting early gives you time to sort belongings, get quotes, book your shipping slot, and prepare all documents without last-minute stress.",
              icon: Clock
            },
            {
              title: "Declutter Before You Pack",
              desc: "The less you ship, the lower your cost. Donate, sell, or discard items you will not need abroad. Only ship what is essential or irreplaceable.",
              icon: Package
            },
            {
              title: "Get Multiple Quotes but Compare Carefully",
              desc: "Do not choose based on price alone. Compare what is included in each quote — some cheap quotes exclude customs fees, insurance, or last-mile delivery.",
              icon: Calculator
            },
            {
              title: "Understand Destination Country Import Rules",
              desc: "Every country has specific rules about what you can and cannot import. Electronics, medications, food items, and vehicles are often subject to special regulations or duties.",
              icon: ShieldCheck
            },
            {
              title: "Keep Important Documents and Valuables With You",
              desc: "Never pack passports, jewelry, cash, original property documents, or critical electronics in your sea or air freight shipment. Always carry these with you personally.",
              icon: Award
            }
          ].map((tip, index) => (
            <div key={index} className="glass-card rounded-xl p-6 border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="text-gold" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{index + 1}. {tip.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why Best International Movers */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Why Best International Movers Is Rawalpindi's Most Trusted Relocation Partner</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          With over 15 years of experience and more than 5,000 successful international moves under our belt, Best International Movers has built a reputation for reliability, professionalism, and genuine care for our clients.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            "Door-to-Door Service to 100+ Countries: We handle your move from your home in Rawalpindi all the way to your front door abroad. No third-party handoffs, no confusion.",
            "Expert Customs Brokers: Our in-house customs team handles all paperwork for both Pakistan and your destination country, eliminating the most stressful part of any international move.",
            "Fully Insured Shipments: Every shipment is covered by comprehensive cargo insurance. Your belongings are protected against damage, loss, or theft from packing to delivery.",
            "Real-Time Shipment Tracking: Our proprietary tracking system lets you monitor your shipment at every stage of the journey, so you always know where your belongings are.",
            "Trusted Global Carrier Network: We work with Maersk, MSC, Hapag-Lloyd, Emirates SkyCargo, DHL, and other top-tier international carriers to ensure the safest and most reliable routes.",
            "98% Client Satisfaction Rate: Our satisfied customers across the UK, UAE, Canada, Australia, and Europe speak for themselves. We take pride in every move we manage."
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="text-gold" size={14} />
              </div>
              <p className="text-muted-foreground text-sm">{feature}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Professional international moving team packing household goods" 
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </motion.section>

      {/* Popular Routes */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Popular International Relocation Routes from Rawalpindi</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We manage high-volume moves on all major international routes from Rawalpindi and Islamabad:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { route: "Rawalpindi / Islamabad to Dubai", sea: "10-14 days", air: "24-48 hours" },
            { route: "Rawalpindi / Islamabad to UK", sea: "25-35 days", air: "3-5 days" },
            { route: "Rawalpindi / Islamabad to Canada", sea: "35-45 days", air: "4-6 days" },
            { route: "Rawalpindi / Islamabad to Saudi Arabia", sea: "12-18 days", air: "2-3 days" },
            { route: "Rawalpindi / Islamabad to Australia", sea: "30-40 days", air: "5-7 days" }
          ].map((route, index) => (
            <div key={index} className="glass-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold text-foreground mb-3">{route.route}</h4>
              <div className="flex justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Anchor className="text-gold" size={16} />
                  <span className="text-muted-foreground">Sea: {route.sea}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Plane className="text-gold" size={16} />
                  <span className="text-muted-foreground">Air: {route.air}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Frequently Asked Questions About Relocation Services in Rawalpindi</h2>
        
        <div className="space-y-6">
          {[
            {
              q: "How long does international relocation from Rawalpindi take?",
              a: "Transit times vary by destination and mode. Sea freight to UAE takes 10-14 days; to UK and Canada it takes 25-45 days. Air freight is significantly faster — 1-6 days depending on destination. Planning and packing typically begins 1-2 weeks before your shipment departure date."
            },
            {
              q: "Can I ship my personal car from Rawalpindi to Dubai?",
              a: "Yes. We offer vehicle shipping services from Pakistan to UAE, UK, Canada, and other destinations. Your car is transported from Rawalpindi to Karachi Port and shipped via RoRo or container. Import duties at the destination apply and vary by country and vehicle type."
            },
            {
              q: "Is my shipment insured during transit?",
              a: "Yes. All shipments handled by Best International Movers are covered by comprehensive cargo insurance. We offer all-risk insurance coverage that protects your goods against damage, loss, or theft from the moment we start packing in Rawalpindi until delivery at your new address."
            },
            {
              q: "Do you provide packing materials or should I pack myself?",
              a: "We strongly recommend using our professional packing service. Our trained packers use industry-grade materials and techniques that comply with international shipping standards. Self-packed goods are often not covered by insurance if damage occurs due to improper packing."
            }
          ].map((faq, index) => (
            <div key={index} className="glass-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-3">Q: {faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="glass-card rounded-2xl p-8 border border-border bg-gradient-to-br from-gold/10 to-gold/5">
          <h2 className="text-3xl font-display font-bold text-foreground mb-6">
            Ready to Move Abroad from Rawalpindi? Let Us Handle Everything
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            International relocation is one of the biggest transitions you will ever make. The right moving partner makes all the difference between a stressful experience and a smooth, confident start to your new life abroad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
            >
              <Phone size={18} />
              Get Your FREE Quote
            </Link>
            <a 
              href="https://wa.me/923009130211" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
            >
              <MapPin size={18} />
              WhatsApp Us Now
            </a>
          </div>
          
          <div className="text-muted-foreground">
            <p className="font-semibold">📞 Call: 0300-9130211 | 📧 info@bestintlmovers.com | 🌐 bestintlmovers.com</p>
            <p className="mt-2">Monday to Saturday | 8:00 AM – 8:00 PM | Serving Rawalpindi, Islamabad, Lahore & Peshawar</p>
          </div>
        </div>
      </motion.section>

    </div>
  );

  return (
    <BlogArticleShell
      title="International Relocation Services in Rawalpindi: Everything You Need to Know Before Moving Abroad"
      description="Looking for trusted international relocation services in Rawalpindi? Discover how to plan your overseas move, what services to expect, costs, and why Best International Movers is Rawalpindi's top choice for moving abroad."
      keywords="international relocation services Rawalpindi, international movers Rawalpindi, Rawalpindi to Dubai movers, international moving company Rawalpindi, overseas relocation Pakistan, international moving services Islamabad, best international movers Rawalpindi, Pakistan to UK movers, international relocation costs"
      urlPath="/blog/international-relocation-services-rawalpindi"
      h1="International Relocation Services in Rawalpindi: Everything You Need to Know Before Moving Abroad"
      breadcrumbCurrent="International Relocation Guide"
    >
      <BlogArticleBody />
    </BlogArticleShell>
  );
};

export default BlogInternationalRelocationRawalpindi;
