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
  Zap,
  Building2,
  Monitor,
  Server,
  FileLock
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
    name: "Office Moving Services in Pakistan — Best International Movers & Logistics",
    serviceType: "Office Moving Services",
    description: "Professional office moving services across Pakistan. Fast, secure, zero-downtime office relocation for corporates, IT firms & startups in Islamabad, Lahore, Karachi & Rawalpindi. Get a free quote today.",
    url: "https://bestintlmovers.com/services/office-moving-services/",
    provider: {
      "@type": "Organization",
      name: "Best International Movers & Logistics",
      url: "https://bestintlmovers.com",
      telephone: "+923009130211",
    },
    areaServed: { "@type": "Country", name: "Pakistan" },
  };
}

const OfficeMovingServicesPakistan = () => {
  const serviceSeo = {
    title: "Office Moving Services in Pakistan | Zero-Downtime Office Relocation",
    description: "Professional office moving services across Pakistan. Fast, secure, zero-downtime office relocation for corporates, IT firms & startups in Islamabad, Lahore, Karachi & Rawalpindi. Get a free quote today.",
    keywords: "office moving services, office shifting services pakistan, commercial office movers, corporate office relocation company, office movers islamabad, office movers lahore, office movers karachi, office relocation services",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...serviceSeo} urlPath="/services/office-moving-services/" schema={buildServiceSchema()} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <Link to="/services" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline">← All Services</Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center">
                <Building2 size={32} className="text-gold" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                  Office Moving Services in Pakistan
                </h1>
                <p className="text-gold font-semibold mt-1">Fast, Safe & Zero-Downtime Office Relocation</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Zero-Downtime</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">IT Equipment</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Confidential Files</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Weekend Moves</span>
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">Full Insurance</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={14} /> Islamabad</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Rawalpindi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Lahore</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Karachi</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Peshawar</span>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Updated June 2026 | 15+ Years Corporate Moving Experience | Zero-Downtime Guarantee | Pakistan-Wide Coverage
            </p>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">📌 Office Moving Services at a Glance</h2>
              <CheckList
                items={[
                  "15+ Years of Corporate Moving Experience — law firms, IT houses, banks, NGOs, embassies",
                  "Zero-Downtime Moving Model — weekend, evening, overnight moves",
                  "Trained Office Movers — electronics, server racks, glass partitions, executive furniture",
                  "Full Insurance Coverage — every item moved is covered against damage or loss",
                  "IT & Electronics Handling Expertise — safe disconnection, anti-static packing, reconnection",
                  "Confidential Document Handling — sealed crates for HR files, financial records, legal documents",
                  "Nationwide & International Reach — local office shifts to international headquarters relocation",
                  "Dedicated Move Coordinator — single point of contact from survey to final setup",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">What Are Office Moving Services?</h2>
              <p className="text-muted-foreground mb-6">
                Office moving services refer to the specialized process of relocating a business's entire physical workspace — furniture, IT equipment, servers, documents, workstations, pantry and reception setups, signage, and more — from one location to another with minimal disruption to daily operations. Unlike residential shifting, office moving services require careful coordination with IT teams, strict confidentiality handling for documents, specialized packing for electronics, and often a tight overnight or weekend timeline so employees can walk into a fully functional office on Monday morning.
              </p>
              <p className="text-muted-foreground mb-6">
                A professional office movers company doesn't just load boxes onto a truck. It manages inventory tagging, floor plan mapping for the new office, IT disconnection and reconnection, furniture disassembly and reassembly, and post-move setup — all while protecting your company's sensitive data and expensive assets.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why Businesses in Pakistan Choose Our Office Moving Services</h2>
              <p className="text-muted-foreground mb-6">
                Every year, hundreds of Pakistani businesses relocate due to lease expirations, business expansion, downsizing, or a move to a better commercial location. Choosing the right office moving company determines whether that transition is smooth or a costly disaster. Here's why companies across Islamabad, Rawalpindi, Lahore, Karachi, and Peshawar trust us for their office relocation services:
              </p>
              <CheckList
                items={[
                  "15+ Years of Corporate Moving Experience — We've executed office relocations for law firms, IT houses, banks, NGOs, embassies, and multinational branch offices.",
                  "Zero-Downtime Moving Model — We plan moves during weekends, evenings, or overnight so your team never loses a working day.",
                  "Trained Office Movers — Our staff is trained specifically in handling electronics, server racks, glass partitions, executive furniture, and confidential files.",
                  "Full Insurance Coverage — Every item moved is covered against damage or loss during transit.",
                  "IT & Electronics Handling Expertise — Safe disconnection, anti-static packing, and reconnection of computers, servers, printers, and networking equipment.",
                  "Confidential Document Handling — Secure, sealed crates for HR files, financial records, and legal documents.",
                  "Nationwide & International Reach — From a local office shift within Islamabad to relocating your headquarters to Dubai, London, or anywhere in 100+ countries.",
                  "Dedicated Move Coordinator — One point of contact managing your entire office relocation timeline from survey to final setup.",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Our Complete Office Moving Process</h2>
              <p className="text-muted-foreground mb-6">
                A successful office relocation depends entirely on planning. Our office moving services follow a structured five-phase process designed to eliminate surprises and downtime.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Clock size={18} /> 1. Site Survey & Move Planning</h3>
                  <p className="text-muted-foreground">Our team visits your current office and the new location to assess furniture volume, IT infrastructure, access points, elevator availability, and parking. We then build a custom move plan with a fixed timeline — most office moves are scheduled outside business hours to avoid any disruption.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><FileText size={18} /> 2. Inventory Tagging & Floor Mapping</h3>
                  <p className="text-muted-foreground">Every desk, chair, cabinet, and device is tagged and logged against a floor plan of your new office. This means when our team arrives at the destination, furniture and equipment go straight to their designated spot instead of being shuffled around — saving hours of setup time.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Package size={18} /> 3. Professional Packing</h3>
                  <p className="text-muted-foreground">We use anti-static bubble wrap for electronics, reinforced crates for files and documents, and padded blankets for furniture and glass partitions. Server racks and networking equipment are packed following manufacturer handling guidelines to prevent data loss or hardware damage.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><Ship size={18} /> 4. Disassembly, Transport & Reassembly</h3>
                  <p className="text-muted-foreground">Workstations, cubicles, conference tables, and modular furniture are disassembled by trained technicians, transported in secure company vehicles, and reassembled at the new office according to the pre-agreed floor plan.</p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 flex items-center gap-2"><CheckCircle2 size={18} /> 5. Setup, IT Reconnection & Final Walkthrough</h3>
                  <p className="text-muted-foreground">We don't just drop boxes and leave. Our team assists with furniture placement, IT reconnection support, and a final walkthrough with your office manager to confirm everything is exactly where it should be — so your staff can start working immediately.</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">What's Included in Our Office Moving Services</h2>
              <CheckList
                items={[
                  "Free on-site survey and moving cost estimate",
                  "Complete packing materials (boxes, crates, bubble wrap, anti-static wrap)",
                  "Furniture disassembly and reassembly",
                  "IT equipment and server handling (desktops, laptops, printers, networking gear)",
                  "Confidential file and document crating",
                  "Labeling and inventory management system",
                  "Loading, secure transport, and unloading",
                  "Weekend/after-hours moving scheduling to avoid business disruption",
                  "Insurance coverage for all transported items",
                  "Post-move debris removal and cleanup",
                  "Optional short-term or long-term storage for surplus furniture and archives",
                ]}
              />
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Types of Office Relocations We Handle</h2>
              <p className="text-muted-foreground mb-6">Our office moving services are built to scale from small startups to large enterprise relocations:</p>
              <CheckList
                items={[
                  "Corporate Headquarters Relocation — Full-scale moves for large companies with multiple departments, executive suites, and boardrooms.",
                  "IT & Tech Company Moves — Specialized handling of servers, data centers, networking racks, and sensitive electronic equipment with minimal system downtime.",
                  "Startup & Small Office Shifting — Fast, budget-friendly office shifting services for growing businesses moving to bigger spaces.",
                  "Bank & Financial Institution Relocation — Secure handling of confidential records, cash-handling equipment, and compliance-sensitive documentation.",
                  "Law Firm & Legal Office Moves — Confidential file management and chain-of-custody documentation during transit.",
                  "Embassy & Diplomatic Office Relocation — Protocol-compliant moving with full discretion and security clearance handling.",
                  "Retail & Showroom Relocation — Display units, signage, and inventory moved with zero damage to fixtures.",
                  "Warehouse & Industrial Office Moves — Combined office and light industrial equipment relocation for manufacturing and logistics businesses.",
                ]}
              />
              <InfoBox variant="blue">
                <strong>International Corporate Relocation</strong>
                <p className="mt-2">If your business is expanding internationally, our team also manages corporate relocation for companies establishing new branches abroad, coordinating everything from freight to customs clearance. Learn more about how we support growing businesses on our <Link to="/corporate-relocation-pakistan" className="text-gold hover:underline">Corporate Relocation Pakistan</Link> page.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Office Moving Services Across Pakistan</h2>
              <p className="text-muted-foreground mb-6">We provide office moving and relocation services in every major business hub in Pakistan:</p>
              <CheckList
                items={[
                  "Office Movers Islamabad — Blue Area, F-Sectors, DHA Islamabad, Bahria Town corporate zones",
                  "Office Movers Rawalpindi — Saddar, Bahria Town, commercial plazas",
                  "Office Movers Lahore — Gulberg, DHA Lahore, Johar Town, corporate towers",
                  "Office Movers Karachi — I.I. Chundrigar Road, Clifton, DHA Karachi, Korangi Industrial Area",
                  "Office Movers Peshawar — Hayatabad, University Road, commercial districts",
                ]}
              />
              <p className="text-muted-foreground mt-4">No matter which city your business operates in, our teams arrive equipped with the right vehicles, packing materials, and manpower to complete your office move on schedule.</p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Zero-Downtime Moving: How We Keep Your Business Running</h2>
              <p className="text-muted-foreground mb-6">
                The biggest fear businesses have when relocating isn't the cost — it's the downtime. Every hour your office is non-operational can mean lost revenue, missed client calls, and frustrated employees. Our office moving services are specifically structured to minimize this risk:
              </p>
              <CheckList
                items={[
                  "Overnight and weekend moves so your office is fully set up before Monday morning",
                  "Phased relocation for larger offices, moving department by department to keep critical operations running",
                  "IT-first prioritization, ensuring internet, servers, and phone lines are reconnected before general furniture setup",
                  "Pre-move labeling system, so unpacking at the new site takes hours, not days",
                ]}
              />
              <InfoBox variant="green">
                <strong>Weekend Relocation Success</strong>
                <p className="mt-2">Many of our corporate clients have successfully relocated over a single weekend with employees returning to a completely functional office on Monday. This is the standard we hold every office move to.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Handling IT Equipment & Sensitive Data During Office Moves</h2>
              <p className="text-muted-foreground mb-6">
                Modern offices run on data, and data is fragile. Our office movers are trained to handle:
              </p>
              <CheckList
                items={[
                  "Desktop computers, monitors, and peripherals with anti-static packaging",
                  "Server racks and networking equipment, disconnected and reconnected by trained technicians",
                  "Printers, scanners, and office electronics",
                  "Confidential HR, legal, and financial documents in sealed, tamper-evident crates",
                  "Backup drives and sensitive digital media with chain-of-custody tracking",
                ]}
              />
              <InfoBox variant="warn">
                <strong>Data Backup Recommendation</strong>
                <p className="mt-2">We recommend businesses back up critical data before any move as a best practice, and our team coordinates directly with your internal IT department to ensure a smooth disconnection and reconnection process.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Cost of Office Moving Services in Pakistan</h2>
              <p className="text-muted-foreground mb-6">
                The cost of an office relocation depends on several factors:
              </p>
              <CheckList
                items={[
                  "Office size — number of employees, desks, and departments being moved",
                  "Distance — intercity moves within Pakistan versus local relocation within the same city",
                  "IT & equipment volume — servers, specialized machinery, or industry-specific equipment",
                  "Packing requirements — standard furniture versus fragile glass partitions, artwork, or specialized fixtures",
                  "Timing — after-hours or weekend moves may involve different scheduling than standard daytime moves",
                  "Additional services — temporary storage, furniture disposal, or new office setup assistance",
                ]}
              />
              <InfoBox variant="gold">
                <strong>Free Site Survey & Quote</strong>
                <p className="mt-2">We provide a free, no-obligation site survey and quote for every office relocation, so you know the exact cost before committing. There are no hidden charges — what we quote is what you pay.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">International Office Relocation for Growing Businesses</h2>
              <p className="text-muted-foreground mb-6">
                If your company is expanding beyond Pakistan — opening a branch in Dubai, London, or anywhere else in our 100+ country network — our international moving services extend the same zero-downtime philosophy to global relocations. From freight coordination to customs documentation for office equipment and furniture, we manage the entire cross-border move so your international launch stays on schedule. Explore our full <Link to="/services/international-moving-services/" className="text-gold hover:underline">International Moving Services</Link> for details on how we handle cross-border corporate relocations.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why DIY Office Moves Cost Businesses More</h2>
              <p className="text-muted-foreground mb-6">
                Many companies attempt to manage office moves internally using regular labor or unspecialized transport — and it almost always costs more in the long run. Common problems with DIY office moves include:
              </p>
              <CheckList
                items={[
                  "Damaged electronics due to improper packing",
                  "Lost or disorganized files and cables",
                  "Extended downtime because furniture and IT setup wasn't planned against a floor layout",
                  "No insurance coverage if equipment is damaged or lost",
                  "Employee productivity loss from managing the move instead of doing their jobs",
                ]}
              />
              <InfoBox variant="red">
                <strong>Professional Advantage</strong>
                <p className="mt-2">A professional office moving company eliminates these risks with trained manpower, proper equipment, and a structured plan — ultimately saving businesses both time and money.</p>
              </InfoBox>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Planning an Office Move? Read Our Complete Guides</h2>
              <p className="text-muted-foreground mb-6">
                For businesses planning a relocation, we've published detailed city-specific and planning guides based on real projects we've executed:
              </p>
              <div className="space-y-2 mb-4">
                <Link to="/blog/office-relocation-karachi-zero-downtime-guide-2026/" className="text-gold hover:underline block">Office Relocation Karachi — The Complete Zero Downtime Guide 2026</Link>
                <Link to="/blog/office-relocation-checklist-pakistan/" className="text-gold hover:underline block">Office Relocation Checklist Pakistan</Link>
              </div>
              <p className="text-muted-foreground">These guides walk through real timelines, checklists, and lessons learned from actual corporate moves we've handled across Pakistan.</p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Best Time to Schedule Your Office Move</h2>
              <p className="text-muted-foreground mb-6">
                Timing plays a major role in how smoothly an office relocation goes. Based on hundreds of corporate moves across Pakistan, we generally recommend:
              </p>
              <CheckList
                items={[
                  "Weekend Moves — Friday evening to Sunday night is the most common window, giving teams a full workday buffer before Monday.",
                  "End-of-Month Scheduling — Aligns naturally with lease transitions and billing cycles for most Pakistani businesses.",
                  "Off-Peak Business Hours — For offices that can't fully pause operations, we schedule phased moves during evenings or lower-traffic hours.",
                  "Avoiding Peak Business Seasons — Certain industries have quarter-end or year-end crunch periods; we work with your calendar to avoid these high-pressure windows.",
                ]}
              />
              <p className="text-muted-foreground mt-4">Our move coordinator will assess your business calendar during the initial survey and recommend the scheduling window that causes the least disruption to your operations.</p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Keeping Your Team Informed During the Move</h2>
              <p className="text-muted-foreground mb-6">
                A smooth office relocation isn't just about logistics — it's also about communication. We recommend businesses:
              </p>
              <CheckList
                items={[
                  "Notify employees of the moving timeline at least two weeks in advance",
                  "Assign a single internal point of contact to coordinate with our move team",
                  "Ask staff to clear personal items and label anything fragile or sensitive in advance",
                  "Share the new office floor plan with employees so desk assignments are clear on day one",
                  "Update clients, vendors, and delivery services with the new address ahead of the move date",
                ]}
              />
              <p className="text-muted-foreground mt-4">Our move coordinators work directly with your designated internal contact throughout the process, so there's always a clear communication line between your team and ours from the first survey to the final walkthrough.</p>
            </div>

            <div className="glass-card rounded-xl p-8 border border-border mb-10">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Frequently Asked Questions — Office Moving Services</h2>
              <div className="space-y-6">
                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">1. What are office moving services?</h3>
                  <p className="text-muted-foreground text-sm">Office moving services cover the complete relocation of a business's workplace — furniture, IT equipment, documents, and fixtures — from one location to another, handled by trained professionals to minimize downtime and damage.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">2. How much do office moving services cost in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">Costs vary based on office size, distance, IT equipment volume, and packing requirements. We provide a free on-site survey and a detailed, no-obligation quote before any work begins.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">3. How long does an office relocation take?</h3>
                  <p className="text-muted-foreground text-sm">Most small to mid-sized office moves are completed within a single weekend or overnight window. Larger corporate relocations with multiple departments may be phased over several days to avoid disrupting operations.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">4. Can you move our office without disrupting business operations?</h3>
                  <p className="text-muted-foreground text-sm">Yes. We specialize in zero-downtime relocations, scheduling moves after business hours or over weekends so your team returns to a fully functional office without losing working days.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">5. Do you handle IT equipment and servers?</h3>
                  <p className="text-muted-foreground text-sm">Yes. Our team is trained to safely disconnect, pack, transport, and reconnect computers, servers, networking equipment, and other electronics using anti-static materials and proper handling procedures.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">6. Is our confidential data and documents safe during the move?</h3>
                  <p className="text-muted-foreground text-sm">Absolutely. We use sealed, tamper-evident crates for HR, financial, and legal documents, and maintain chain-of-custody tracking throughout the move.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">7. Do you provide packing materials for office moves?</h3>
                  <p className="text-muted-foreground text-sm">Yes, all packing materials — including boxes, crates, bubble wrap, and anti-static wrap for electronics — are included in our office moving services.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">8. Which cities do you provide office moving services in?</h3>
                  <p className="text-muted-foreground text-sm">We provide office moving services in Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, and other major cities across Pakistan, along with intercity and international relocation options.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">9. Can you help set up furniture and workstations at the new office?</h3>
                  <p className="text-muted-foreground text-sm">Yes. Our team handles disassembly, transport, reassembly, and placement of furniture and workstations according to your new office's floor plan.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">10. Do you offer storage if our new office isn't ready yet?</h3>
                  <p className="text-muted-foreground text-sm">Yes, we offer short-term and long-term secure storage solutions for furniture, files, and equipment if there's a gap between vacating your old office and moving into the new one.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">11. Is our equipment insured during the move?</h3>
                  <p className="text-muted-foreground text-sm">Yes, all items transported during your office relocation are covered under insurance against damage or loss in transit.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">12. Can you relocate our office to another country?</h3>
                  <p className="text-muted-foreground text-sm">Yes. Beyond local and intercity moves, we manage full international office relocations, including freight, customs documentation, and delivery to over 100 countries.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">13. Do you move specialized equipment like server racks or industrial machinery?</h3>
                  <p className="text-muted-foreground text-sm">Yes, our team has experience handling server racks, networking infrastructure, and light industrial or specialized equipment during corporate relocations.</p>
                </div>

                <div className="border-b border-border pb-4">
                  <h3 className="font-display font-semibold text-foreground mb-2">14. How do I get a quote for office moving services?</h3>
                  <p className="text-muted-foreground text-sm">Simply contact us via phone, WhatsApp, or our online quote form. We'll schedule a free site survey and provide a detailed cost estimate within 24 hours.</p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">15. What makes your office moving services different from other movers in Pakistan?</h3>
                  <p className="text-muted-foreground text-sm">With 15+ years of experience, trained staff, full insurance coverage, zero-downtime scheduling, and specialized handling for IT and confidential documents, we treat every office move as a business-critical project — not just a transport job.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Get a Free Office Moving Quote Today</h2>
              <p className="text-muted-foreground mb-6">Whether you're relocating a small startup office or coordinating a multi-department corporate headquarters move, Best International Movers & Logistics has the experience, manpower, and equipment to make it seamless.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Building2 size={18} />
                  Get Free Office Moving Quote
                </Link>
                <a 
                  href="https://wa.me/923009130211" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  <Phone size={18} />
                  WhatsApp Our Office Moving Team
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Call/WhatsApp: 0300-9130211 | Email: info@bestintlmovers.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default OfficeMovingServicesPakistan;
