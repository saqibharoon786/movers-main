import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Package,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  Award,
  Zap,
  Truck,
  Wrench,
  Factory,
  Settings,
  AlertTriangle,
  FileText,
  Thermometer,
  Activity,
  Microscope
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

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical Equipment Shipping Services Pakistan | Best International Movers & Logistics",
    serviceType: "Medical Equipment Shipping",
    description: "Professional medical equipment shipping services in Pakistan. Safe transport of hospital, lab & diagnostic equipment with temperature control, insurance & compliance handling. Free quote.",
    url: "https://bestintlmovers.com/services/medical-equipment-shipping/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const MedicalEquipmentShippingPakistan = () => {
  const serviceSeo = {
    title: "Medical Equipment Shipping Services Pakistan | Safe Hospital & Lab Equipment Moving",
    description: "Professional medical equipment shipping services in Pakistan. Safe transport of hospital, lab & diagnostic equipment with temperature control, insurance & compliance handling. Free quote.",
    keywords: "medical equipment shipping, hospital equipment movers pakistan, lab equipment transport services, healthcare logistics company, medical device shipping, diagnostic equipment transport, pharmaceutical cold chain shipping",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/medical-equipment-shipping/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Activity size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Medical Equipment Shipping Services in Pakistan
                </h1>
                <p className="text-muted-foreground mt-1">Safe, Compliant & Precision-Handled</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Medical equipment isn't just expensive — it's often life-critical, delicately calibrated, and regulated by strict handling standards. A damaged MRI coil, a mishandled centrifuge, or a temperature-compromised lab reagent shipment doesn't just cost money — it can delay patient care and put a hospital or lab out of compliance. <strong className="text-foreground">Best International Movers & Logistics</strong> provides specialized <strong className="text-foreground">medical equipment shipping</strong> services built for the unique demands of healthcare logistics: careful handling, calibration protection, temperature-controlled transport, and compliance-conscious documentation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 15 years, we've shipped diagnostic imaging equipment, laboratory instruments, hospital beds, surgical equipment, and pharmaceutical supplies for hospitals, diagnostic labs, clinics, and medical distributors across Pakistan and internationally. If you searched for "<strong className="text-foreground">medical equipment shipping</strong>," "hospital equipment movers Pakistan," "lab equipment transport services," or "healthcare logistics company," this page walks you through exactly how we move sensitive medical assets without compromising their integrity.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What Is Medical Equipment Shipping?</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Medical equipment shipping is the specialized process of packing, transporting, and installing healthcare equipment — including diagnostic imaging machines, laboratory instruments, surgical devices, and hospital furniture — while protecting calibration accuracy, sterility, and regulatory compliance throughout the move. Unlike standard freight, <strong className="text-foreground">medical equipment shipping</strong> requires shock-absorbing packaging, climate-controlled transport for sensitive electronics, and often direct coordination with equipment manufacturers for installation and recalibration at the destination.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A professional <strong className="text-foreground">medical logistics provider</strong> manages the full lifecycle of the shipment: pre-move equipment assessment, specialized packing, insured transport, customs and regulatory documentation for cross-border shipments, and installation support — so equipment arrives fully functional and ready for use.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Healthcare Institutions Trust Our Medical Equipment Shipping Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "15+ Years of Sensitive Equipment Handling Experience — Proven track record moving diagnostic, laboratory, and hospital equipment across Pakistan and internationally",
                  "Specialized Packing for Fragile & Calibrated Equipment — Shock-absorbing crating, anti-static materials, and vibration-dampened packaging for sensitive electronics and imaging equipment",
                  "Temperature-Controlled Transport — Climate-monitored shipping options for equipment and supplies requiring stable temperature ranges during transit",
                  "Full Insurance Coverage — Comprehensive coverage for high-value medical equipment throughout the shipping process",
                  "Compliance-Conscious Documentation — Careful handling of import/export paperwork for regulated medical devices and pharmaceutical-adjacent shipments",
                  "Manufacturer Coordination — We work alongside equipment manufacturers and biomedical engineering teams for disconnection, reconnection, and recalibration support",
                  "Minimal Facility Downtime — Scheduling designed around hospital and lab operating hours to reduce disruption to patient care",
                  "Nationwide & International Reach — From a single ultrasound machine moving within the same city to a full hospital wing relocating internationally"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Types of Medical Equipment We Ship</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">medical equipment shipping</strong> team has direct experience handling a wide range of healthcare assets, including:
              </p>
              <CheckList
                items={[
                  "Diagnostic Imaging Equipment — X-ray machines, ultrasound units, CT scanners, and MRI components requiring vibration-sensitive handling",
                  "Laboratory Instruments — Centrifuges, analyzers, microscopes, and diagnostic testing equipment",
                  "Surgical Equipment — Operating tables, surgical lights, and precision surgical instrumentation",
                  "Hospital Furniture & Beds — Hospital beds, patient monitoring stations, and ward furniture",
                  "Dental Equipment — Dental chairs, imaging units, and clinical instrumentation",
                  "Pharmacy & Cold Chain Supplies — Temperature-sensitive pharmaceutical and reagent shipments requiring monitored cold chain logistics",
                  "Patient Monitoring Systems — ECG machines, ventilators, and other electronic monitoring equipment",
                  "Rehabilitation & Physiotherapy Equipment — Specialized therapy and rehabilitation machinery"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Whatever category your equipment falls into, our team conducts a pre-shipment assessment to determine the exact packing, handling, and transport approach required to protect calibration and functionality.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Medical Equipment Shipping Process</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    1. Pre-Shipment Assessment & Planning
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our team assesses the equipment type, fragility, calibration sensitivity, and any manufacturer-specific handling requirements before building a shipping plan. For cross-border shipments, we also review destination country import regulations for medical devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={20} className="text-gold" />
                    2. Specialized Packing & Crating
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Equipment is packed using shock-absorbing materials, custom crating for irregular shapes, anti-static wrapping for sensitive electronics, and vibration-dampened padding for calibrated instruments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={20} className="text-gold" />
                    3. Disconnection & Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For installed equipment, our team coordinates safe disconnection — often alongside your biomedical engineering staff or the equipment manufacturer — and documents connection points and settings for accurate reinstallation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Truck size={20} className="text-gold" />
                    4. Insured, Monitored Transport
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Equipment is transported using appropriately equipped vehicles, with temperature-controlled options available for sensitive shipments, and full insurance coverage throughout transit.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <FileText size={20} className="text-gold" />
                    5. Customs & Regulatory Documentation (International Shipments)
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For cross-border medical equipment shipments, we prepare the necessary import/export documentation, including commercial invoices, certificates of origin, and any device-specific regulatory paperwork required by the destination country.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench size={20} className="text-gold" />
                    6. Delivery, Installation & Recalibration Support
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    At the destination, equipment is carefully unloaded and positioned, with installation and recalibration support coordinated alongside your technical team or the equipment manufacturer to confirm functionality before handover.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">What's Included in Our Medical Equipment Shipping Services</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <CheckList
                items={[
                  "Free pre-shipment equipment assessment",
                  "Specialized shock-absorbing and anti-static packing",
                  "Custom crating for irregular or oversized equipment",
                  "Temperature-controlled transport options",
                  "Full insurance coverage for equipment in transit",
                  "Coordination with biomedical engineering teams for disconnection/reconnection",
                  "Import/export documentation for international shipments",
                  "Secure, monitored transport vehicles",
                  "Installation and positioning support at the destination",
                  "Optional short-term storage for equipment awaiting facility readiness"
                ]}
              />
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Healthcare Facilities We Serve</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <strong className="text-foreground">medical equipment shipping</strong> services support a wide range of healthcare institutions across Pakistan:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Activity size={18} className="text-gold" />
                    Hospitals & Medical Centers
                  </h4>
                  <p className="text-muted-foreground text-sm">Full-scale equipment relocation for new facility openings, wing expansions, or equipment upgrades.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Microscope size={18} className="text-gold" />
                    Diagnostic Laboratories
                  </h4>
                  <p className="text-muted-foreground text-sm">Careful transport of analyzers, centrifuges, and testing equipment sensitive to vibration and temperature.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Thermometer size={18} className="text-gold" />
                    Radiology & Imaging Centers
                  </h4>
                  <p className="text-muted-foreground text-sm">Specialized handling for X-ray, ultrasound, and imaging equipment requiring precise calibration protection.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Settings size={18} className="text-gold" />
                    Dental Clinics
                  </h4>
                  <p className="text-muted-foreground text-sm">Relocation of dental chairs, imaging units, and clinical instrumentation for new or expanding practices.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package size={18} className="text-gold" />
                    Pharmaceutical Distributors
                  </h4>
                  <p className="text-muted-foreground text-sm">Cold chain logistics for temperature-sensitive pharmaceutical and reagent shipments.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Factory size={18} className="text-gold" />
                    Medical Equipment Manufacturers & Distributors
                  </h4>
                  <p className="text-muted-foreground text-sm">Shipping newly manufactured or imported equipment to hospitals, clinics, and distributors nationwide.</p>
                </div>
                <div className="p-4 bg-navy-mid/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-gold" />
                    Rehabilitation Centers
                  </h4>
                  <p className="text-muted-foreground text-sm">Transport of physiotherapy and rehabilitation equipment for new or relocating facilities.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Medical Equipment Shipping Across Pakistan</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide <strong className="text-foreground">healthcare logistics and equipment shipping services</strong> in every major city in Pakistan:
              </p>
              <CheckList
                items={[
                  "Medical Equipment Movers Islamabad — Hospitals, diagnostic centers, and clinics across the capital",
                  "Medical Equipment Movers Rawalpindi — Healthcare facilities across the twin cities",
                  "Medical Equipment Movers Lahore — Major hospitals, labs, and medical distributors",
                  "Medical Equipment Movers Karachi — Healthcare institutions and pharmaceutical distribution hubs",
                  "Medical Equipment Movers Peshawar — Regional hospitals and diagnostic facilities"
                ]}
              />
              <InfoBox variant="blue">
                <strong>💡 Heavy Equipment Support:</strong> For healthcare institutions relocating equipment as part of a larger facility move, larger and heavier medical equipment such as imaging machinery or sterilization units often requires the same rigging and engineering expertise used in our <Link to="/services/heavy-machinery-relocation/" className="text-gold hover:underline">Heavy Machinery Relocation</Link> services, ensuring even the most demanding equipment is handled safely.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Temperature-Controlled & Cold Chain Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Certain medical shipments — including pharmaceuticals, reagents, blood products, and some laboratory samples — require strict temperature control throughout transit. Our cold chain logistics capability includes:
              </p>
              <CheckList
                items={[
                  "Temperature-monitored vehicles and packaging for sensitive shipments",
                  "Insulated and refrigerated transport options based on required temperature ranges",
                  "Documentation of temperature conditions throughout transit for compliance and audit purposes",
                  "Coordination with destination facilities to ensure immediate cold storage upon arrival"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Maintaining an unbroken cold chain is critical for pharmaceutical and laboratory shipments, and our team builds transport plans specifically around these requirements rather than treating them as standard freight.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Compliance & Documentation for Medical Equipment Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Medical equipment — particularly for international shipments — is often subject to regulatory requirements beyond standard customs documentation. Our team assists with:
              </p>
              <CheckList
                items={[
                  "Commercial invoices and packing lists reflecting accurate equipment classification",
                  "Certificates of origin and manufacturer documentation",
                  "Import/export documentation aligned with destination country medical device regulations",
                  "Coordination with customs brokers for accurate HS code classification of medical devices"
                ]}
              />
              <InfoBox variant="blue">
                <strong>📋 Logistics Support:</strong> For businesses managing broader international shipments alongside medical equipment, our <Link to="/services/logistics-services-pakistan/" className="text-gold hover:underline">Logistics Services Pakistan</Link> division provides full freight and customs brokerage support, ensuring your medical equipment shipment is handled as part of a coordinated, compliant logistics process.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Cost Factors in Medical Equipment Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The cost of shipping medical equipment depends on several variables:
              </p>
              <CheckList
                items={[
                  "Equipment fragility and value — Highly sensitive or high-value equipment requires more specialized packing and insurance coverage",
                  "Size and weight — Larger imaging or laboratory equipment may require specialized crating and transport vehicles",
                  "Temperature control requirements — Cold chain shipments involve additional monitoring and equipment costs",
                  "Distance — Local delivery versus intercity or international shipping",
                  "Regulatory documentation — Cross-border shipments may require additional compliance paperwork",
                  "Installation support — Whether recalibration or manufacturer coordination is required at the destination"
                ]}
              />
              <InfoBox variant="save">
                <strong>💰 Free Assessment:</strong> We provide a free, no-obligation assessment and detailed quote for every medical equipment shipment, so healthcare institutions know the full scope and cost before committing.
              </InfoBox>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">International Medical Equipment Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                For hospitals, clinics, and distributors importing new equipment or relocating facilities internationally, our medical equipment shipping expertise connects directly with our broader freight and logistics network. Our <Link to="/blog/international-logistics-guide-2026/" className="text-gold hover:underline">International Logistics Guide</Link> walks through the documentation, customs, and freight planning process required for cross-border shipments — essential reading for any healthcare institution importing or exporting sensitive equipment.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Why Professional Medical Equipment Movers Matter</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Attempting to ship medical equipment using general freight services or unspecialized movers creates serious risks:
              </p>
              <CheckList
                items={[
                  "Calibration damage from inadequate shock-absorbing packaging",
                  "Broken cold chains leading to compromised pharmaceutical or reagent shipments",
                  "Compliance issues from incorrect or incomplete regulatory documentation",
                  "Extended facility downtime from improper installation or recalibration delays",
                  "No insurance protection if high-value equipment is damaged during transit"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                A professional <strong className="text-foreground">medical equipment shipping company</strong> eliminates these risks through specialized packing expertise, temperature-controlled logistics, and compliance-conscious documentation — protecting both your equipment investment and your facility's ability to deliver patient care without interruption.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Common Mistakes in Medical Equipment Shipping (And How to Avoid Them)</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Even experienced healthcare institutions can run into avoidable problems when equipment shipping isn't handled by a specialized provider. The most common mistakes we see include:
              </p>
              <CheckList
                items={[
                  "Using Standard Freight Packing for Sensitive Equipment — Generic packing materials aren't designed for the vibration sensitivity of imaging or laboratory equipment, often resulting in calibration drift or hardware damage that isn't discovered until the equipment is powered on at the destination",
                  "Breaking the Cold Chain During Transit — Pharmaceutical and reagent shipments that lose temperature control even briefly can become unusable, resulting in significant financial loss and compliance issues",
                  "Incomplete Regulatory Documentation for Cross-Border Shipments — Medical devices often require specific import documentation beyond standard commercial invoices; missing paperwork can result in shipments being held at customs for extended periods",
                  "Not Coordinating with Biomedical Engineering Teams — Disconnecting equipment without proper documentation of settings and connections significantly extends reinstallation and recalibration time at the destination",
                  "Underestimating Installation Time — Facilities often plan for delivery but underestimate how long professional installation, calibration, and testing takes before equipment is cleared for clinical use",
                  "Choosing Movers Without Healthcare Logistics Experience — General moving companies without medical equipment handling expertise are far more likely to cause damage to sensitive, high-value devices"
                ]}
              />
              <p className="text-muted-foreground leading-relaxed mt-6">
                Planning around these common pitfalls — with a logistics partner experienced specifically in healthcare equipment — is what protects both your equipment investment and your facility's ability to resume patient care without unnecessary delay.
              </p>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Commitment to Every Medical Equipment Shipment</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Behind every medical equipment shipment we handle is a simple standard: equipment arrives undamaged, properly calibrated, and ready for clinical use as quickly as possible. We've built this standard over 15 years of shipping equipment for institutions that couldn't afford delays in patient care — from single-device clinic upgrades to full hospital wing equipment transitions across Pakistan and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every medical equipment shipment is assigned a dedicated coordinator who manages the process from initial assessment through final installation, so your facility always has one point of accountability for the entire shipment.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10 bg-gradient-to-br from-gold/5 to-transparent">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Medical Equipment Shipping Quote Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're relocating a single diagnostic device or coordinating a full hospital wing's equipment transition, <strong className="text-foreground">Best International Movers & Logistics</strong> has the specialized packing expertise, temperature-controlled transport, and compliance experience to move your medical equipment safely. Contact us today for a <strong className="text-foreground">free assessment and no-obligation quote</strong> for medical equipment shipping in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, or anywhere in Pakistan and internationally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+923009130211" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors">
                  <Phone size={18} />
                  0300-9130211
                </a>
                <a href="mailto:info@bestintlmovers.com" className="inline-flex items-center justify-center gap-2 bg-navy-mid text-foreground font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid/80 transition-colors">
                  <FileText size={18} />
                  info@bestintlmovers.com
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Frequently Asked Questions — Medical Equipment Shipping</h2>
            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. What is medical equipment shipping?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Medical equipment shipping is the specialized process of packing, transporting, and installing healthcare equipment — such as diagnostic, laboratory, and surgical devices — while protecting calibration accuracy and regulatory compliance throughout the move.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. What types of medical equipment do you ship?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We ship diagnostic imaging equipment, laboratory instruments, surgical equipment, hospital furniture, dental equipment, patient monitoring systems, and temperature-sensitive pharmaceutical and reagent shipments.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. How much does medical equipment shipping cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Costs depend on equipment fragility, size, temperature control requirements, distance, and regulatory documentation needs. We provide a free assessment and detailed quote before any work begins.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Do you provide temperature-controlled shipping for pharmaceuticals?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we offer cold chain logistics with temperature-monitored vehicles and packaging for pharmaceuticals, reagents, and other temperature-sensitive medical shipments.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">5. Is medical equipment insured during shipping?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, all medical equipment is covered by insurance throughout the shipping process, from packing through final delivery and installation.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">6. Can you ship medical equipment internationally?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we manage international medical equipment shipping including import/export documentation, customs coordination, and destination delivery to global healthcare facilities.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">7. Do you help with disconnection and reinstallation of hospital equipment?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we coordinate safe disconnection and documentation of installed equipment, alongside your biomedical engineering team or the manufacturer where needed, and support reinstallation at the destination.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">8. Which cities do you provide medical equipment shipping services in?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide medical equipment shipping services in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, and other major cities across Pakistan, along with international shipping options.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">9. How do you protect sensitive equipment like MRI or ultrasound machines during transit?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use shock-absorbing crating, vibration-dampened padding, and anti-static wrapping specifically designed for calibrated diagnostic and imaging equipment.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">10. Do you handle regulatory documentation for medical devices?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we assist with commercial invoices, certificates of origin, and import/export documentation aligned with destination country medical device regulations for international shipments.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">11. Can you ship equipment for a new hospital or clinic opening?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we regularly support new facility openings by coordinating equipment shipping from manufacturers or existing facilities to new hospital, clinic, or lab locations.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">12. Do you offer recalibration support after equipment arrives?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We coordinate with your technical team or the equipment manufacturer for recalibration and functionality testing to confirm equipment is fully operational after installation.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">13. Can you ship heavy medical equipment like sterilization units or imaging machinery?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, for larger and heavier medical equipment, we apply the same rigging and engineering expertise used in our heavy machinery relocation services to ensure safe handling.
                  </p>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">14. Do you provide storage if our facility isn't ready to receive equipment yet?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we offer short-term storage solutions for medical equipment awaiting facility readiness or installation scheduling.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">15. How do I get a quote for medical equipment shipping?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Contact us via phone, WhatsApp, or our online quote form with your equipment details and shipping requirements. We'll provide a free assessment and detailed quote within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold px-8 py-4 rounded-lg hover:bg-gold/90 transition-colors text-lg">
                Request Free Assessment
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default MedicalEquipmentShippingPakistan;
