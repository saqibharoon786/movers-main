import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2, MapPin, Package, Truck, ShieldCheck, Clock, Users, Home,
  Building, Sofa, Layers, Zap, Box, ArrowRight, Info, AlertTriangle, Star, Award,
} from "lucide-react";
import {
  whyChooseReasons,
  pricingTableRows,
  serviceAreas,
  movingSteps,
  rawalpindiChallenges,
} from "./homeShiftingRawalpindiContent";

const Section = ({
  children,
  alt = false,
  className = "",
}: {
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
}) => (
  <section className={`py-16 ${alt ? "bg-navy-light/10 border-y border-border" : "bg-background"} ${className}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  </section>
);

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-muted-foreground">
        <CheckCircle2 className="text-gold flex-shrink-0 mt-1" size={16} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export function HomeShiftingRawalpindiBody() {
  return (
    <>
      {/* Intro */}
      <Section>
        <FadeIn className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            Planning a home shift in Rawalpindi? Moving your household is one of life's most stressful events — and doing it wrong can cost thousands in damaged belongings and wasted time. That's where <strong className="text-foreground">Best International Movers & Logistics</strong> comes in. For over a decade, we've been Rawalpindi's most trusted home shifting company, helping families and professionals relocate safely, efficiently, and affordably.
          </p>
          <p>
            Whether you're moving from Bahria Town to DHA, relocating within Saddar, or shifting across Islamabad, our professional team has the expertise, equipment, and local knowledge to make your move seamless.
          </p>
        </FadeIn>
      </Section>

      {/* Professional Services */}
      <Section alt>
        <FadeIn className="space-y-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Professional Home Shifting Services in Rawalpindi
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A professional home shift is far more than just moving boxes from one place to another. It's a carefully coordinated operation that requires planning, skilled labor, proper equipment, and attention to detail at every stage. When you choose our home shifting services, you're partnering with experienced professionals who understand the unique challenges of relocating in Rawalpindi's diverse neighborhoods.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Complete packing and unpacking using high-quality, eco-friendly materials",
              "Professional furniture dismantling and reassembly with specialized tools",
              "Strategic loading and unloading to prevent damage during transit",
              "Safe transportation with tracking and real-time updates",
              "Room-wise arrangement in your new home according to your preferences",
              "Basic housekeeping assistance to help you settle faster",
              "Transit insurance coverage for complete peace of mind",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start glass-card rounded-xl p-4 border border-border">
                <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={18} />
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Every move is handled by our trained, background-verified staff who follow strict safety protocols and maintain the highest standards of professionalism throughout the entire relocation process.
          </p>
        </FadeIn>
      </Section>

      {/* Why Choose */}
      <Section>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">
            Why Homeowners Choose Our Home Shifting Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseReasons.map((item, idx) => (
              <div key={item.title} className="glass-card rounded-xl p-6 border border-border hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center font-bold text-sm border border-gold/20">
                    {idx + 1}
                  </span>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Complete House Relocation */}
      <Section alt>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Complete House Relocation Solutions</h2>
          <p className="text-muted-foreground leading-relaxed">
            A complete house relocation encompasses far more than loading a truck. Our comprehensive approach addresses every aspect of residential relocation from weeks before moving day through settling into your new home.
          </p>
          <div className="space-y-4">
            {[
              { phase: "Pre-Move Planning (2–3 Weeks Before)", items: ["Free home survey to assess volume, special items, and access", "Detailed quote with itemized services and pricing", "Moving timeline and scheduling", "Inventory assessment and valuation"] },
              { phase: "Packing Phase (1 Week Before)", items: ["Room-by-room systematic packing", "Color-coded labeling for easy unpacking", "Special handling for fragile and valuable items", "Careful furniture dismantling"] },
              { phase: "Moving Day Operations", items: ["Strategic loading with weight distribution", "Real-time tracking and communication", "Careful unloading and placement", "Floor and doorway protection"] },
              { phase: "Post-Move Support", items: ["Complete unpacking and arrangement", "Furniture reassembly and testing", "Cleanup of packing materials", "Final walkthrough and inspection"] },
            ].map((phase) => (
              <div key={phase.phase} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Package className="text-gold" size={18} />
                  {phase.phase}
                </h3>
                <BulletList items={phase.items} />
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Furniture Moving */}
      <Section>
        <FadeIn className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
            <Sofa className="text-gold" size={28} />
            Furniture Moving Services in Rawalpindi
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Furniture is often the most challenging and valuable aspect of any home move. Our dedicated furniture moving service ensures your pieces arrive at your new home in perfect condition.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Professional Assessment", desc: "Size, weight, material, and access risks assessed for each piece." },
              { title: "Careful Wrapping & Protection", desc: "Furniture pads, bubble wrap, and stretch wrap with extra measures for high-end pieces." },
              { title: "Furniture Dismantling", desc: "Beds, wardrobes, and modular furniture dismantled with photos and labeled parts." },
              { title: "Safe Maneuvering & Loading", desc: "Dollies, sliders, and lifting straps for narrow spaces and staircases." },
              { title: "Secure Transportation", desc: "Straps and supports prevent shifting. No heavy items stacked on delicate pieces." },
              { title: "Careful Unloading & Reassembly", desc: "Positioned in correct rooms with functionality tested — drawers, doors, and joints." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-navy-light/20 rounded-xl p-5 border border-navy-light">
            <p className="text-foreground font-medium mb-3">Furniture Items We Regularly Move:</p>
            <div className="flex flex-wrap gap-2">
              {["Sofas & sectionals", "Dining tables & chairs", "Bed frames & mattresses", "Wardrobes", "Office desks", "Bookshelves", "Antiques", "Kitchen appliances"].map((item) => (
                <span key={item} className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full border border-gold/20">{item}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Apartment Shifting */}
      <Section alt>
        <FadeIn className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
            <Building className="text-gold" size={28} />
            Apartment Shifting Services in Rawalpindi
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Apartment relocation presents unique challenges — shared staircases, elevators with restricted access, parking limitations, and resident society rules. Our apartment shifting specialists understand these constraints.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Why Apartment Moves Are Different</h3>
              {[
                { label: "Vertical Access", text: "3-story walk-ups to 15-story high-rises require careful planning and proper equipment." },
                { label: "Timing Restrictions", text: "DHA and Bahria Town restrict moving hours — we schedule within permitted windows." },
                { label: "Parking & Loading", text: "Dedicated loading zones coordinated with building management and parking permits." },
                { label: "Elevator Management", text: "Building elevators reserved with proper padding to protect infrastructure." },
              ].map((item) => (
                <div key={item.label} className="text-sm">
                  <strong className="text-foreground">{item.label}:</strong>{" "}
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Our Apartment Shifting Approach</h3>
              <BulletList items={[
                "Pre-move survey for building layout, elevator capacity, and access",
                "Building coordination for elevators, parking, and timing",
                "Protective measures for lobbies, corridors, and common areas",
                "Efficient packing for narrow corridors and small elevators",
                "Trained personnel experienced with high-rise protocols",
                "Flexible scheduling for building rules and resident schedules",
              ]} />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Villa Relocation */}
      <Section>
        <FadeIn className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
            <Home className="text-gold" size={28} />
            Villa and House Relocation Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Villas and standalone houses offer different challenges — larger volumes, multiple levels, and often valuable landscaping or external structures. Our villa relocation service is designed for these specific requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Landscape & Exterior Item Handling", desc: "Outdoor furniture, garden equipment, AC units, and solar panels relocated safely." },
              { title: "Multiple-Level Coordination", desc: "Basements, ground floors, and upper levels loaded simultaneously across Bahria, DHA, and Westridge." },
              { title: "High-Value Item Protection", desc: "White-glove service with extra protective measures and insurance coverage." },
              { title: "Direct Access Optimization", desc: "Driveway access leveraged for larger vehicles and more efficient moves." },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Bahria Town (Phases 1–8)", "DHA Rawalpindi", "Westridge", "Askari Housing", "Morgah", "Gulraiz Housing Society"].map((area) => (
              <span key={area} className="inline-flex items-center gap-1 text-sm bg-gold/10 text-gold px-3 py-1.5 rounded-lg border border-gold/20">
                <MapPin size={12} /> {area}
              </span>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Office Relocation */}
      <Section alt>
        <FadeIn className="space-y-6">
          <h2 className="text-3xl font-display font-bold text-foreground">Office Relocation Services in Rawalpindi</h2>
          <p className="text-muted-foreground leading-relaxed">
            Moving an office requires different expertise than residential moving. Downtime costs money, data security is critical, and coordination with multiple stakeholders is essential. Our commercial relocation team specializes in minimizing disruption.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { phase: "Pre-Move Planning", items: ["Detailed inventory of office assets", "IT infrastructure assessment", "Utility coordination", "Staff communication plan"] },
              { phase: "Systematic Packing", items: ["Departmental organization", "Cable documentation", "Fragile equipment protection", "Document security"] },
              { phase: "Controlled Move Execution", items: ["Off-hours moving", "Dedicated IT support", "Rapid setup at new location", "Minimal business downtime"] },
              { phase: "Post-Move Support", items: ["Complete setup and testing", "Floor plan furniture arrangement", "IT system verification", "Staff orientation"] },
            ].map((block) => (
              <div key={block.phase} className="bg-background rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-3">{block.phase}</h3>
                <BulletList items={block.items} />
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            For comprehensive corporate relocation services, see our{" "}
            <Link to="/packers-and-movers-rawalpindi" className="text-gold font-semibold hover:underline">
              packers and movers Rawalpindi
            </Link>{" "}
            page for corporate moving details.
          </p>
        </FadeIn>
      </Section>

      {/* Packing, Loading, Transport, Fragile, Appliance - combined sections */}
      <Section>
        <FadeIn className="space-y-12">
          {/* Packing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Box className="text-gold" size={24} /> Packing and Unpacking Services
            </h2>
            <p className="text-muted-foreground">Professional packing is the foundation of a damage-free move. Improper packing is responsible for 90% of damage during household moves.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Room-by-Room Assessment", desc: "Each room assessed for item types, fragility, and special requirements." },
                { title: "Strategic Organization", desc: "Breakables double-wrapped, heavy items in smaller boxes, electronics documented." },
                { title: "Quality Materials", desc: "Multi-wall corrugated boxes, premium bubble wrap, acid-free tissue, specialty boxes." },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Full packing", "Partial packing", "Kitchen packing", "Electronics packing", "Wardrobe packing", "Artwork & mirrors"].map((s) => (
                <span key={s} className="text-xs bg-navy-light/30 px-3 py-1 rounded-full text-muted-foreground border border-border">{s}</span>
              ))}
            </div>
          </div>

          {/* Loading */}
          <div className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Layers className="text-gold" size={24} /> Loading and Unloading Services
            </h2>
            <p className="text-muted-foreground">How items are loaded determines whether they arrive safely. Poor loading is a leading cause of moving damage.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Heavy furniture at bottom/back, fragile items on top",
                "Furniture secured with padded straps",
                "Empty spaces filled with padding to prevent shifting",
                "Unloading in reverse order with room-specific placement",
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start text-sm text-muted-foreground">
                  <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Truck className="text-gold" size={24} /> Safe Transportation of Household Goods
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Our Fleet</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Mini-trucks (10ft):</strong> 1-bedroom apartments and small moves</li>
                  <li><strong className="text-foreground">Small trucks (14ft):</strong> 2-bedroom houses</li>
                  <li><strong className="text-foreground">Large trucks (20–24ft):</strong> 3+ bedroom houses and villas</li>
                  <li><strong className="text-foreground">Specialized vehicles:</strong> Pianos, art, and precious antiques</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Transit Tracking & Communication</h3>
                <BulletList items={[
                  "Real-time GPS tracking of your moving vehicle",
                  "Driver contact for direct communication",
                  "Estimated arrival time updates",
                  "Photo documentation of loading and unloading",
                ]} />
              </div>
            </div>
          </div>

          {/* Fragile Items */}
          <div className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="text-gold" size={24} /> Fragile Item Moving Services
            </h2>
            <p className="text-muted-foreground">Our damage rate for properly packed fragile items is less than 1%, far below industry average.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Glassware & dishware", "Ceramics & artwork", "Electronics", "Mirrors", "Chandeliers", "Musical instruments", "Antiques", "Aquariums"].map((item) => (
                <span key={item} className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full border border-gold/20">{item}</span>
              ))}
            </div>
          </div>

          {/* Appliances */}
          <div className="space-y-4 border-t border-border pt-10">
            <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-2">
              <Zap className="text-gold" size={24} /> Appliance Relocation Services in Rawalpindi
            </h2>
            <p className="text-muted-foreground">Large appliances require specialized knowledge. Improper handling can damage the appliance, create safety hazards, or cause injury.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { cat: "Kitchen", items: ["Refrigerators", "Ovens & cooktops", "Dishwashers", "Gas stoves"] },
                { cat: "Laundry", items: ["Washing machines", "Dryers", "Washer-dryer combos"] },
                { cat: "Cooling & Heating", items: ["AC units (window/split/central)", "Water heaters", "Space coolers"] },
              ].map((group) => (
                <div key={group.cat} className="glass-card rounded-xl p-4 border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{group.cat}</h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gold" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Step by Step Process */}
      <Section alt>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">
            Complete Moving Process Explained: Step-by-Step
          </h2>
          <p className="text-muted-foreground">Understanding what to expect makes the moving process less stressful. Here's exactly how Best International Movers handles your home relocation.</p>
          <div className="space-y-4">
            {movingSteps.map((s, index) => (
              <div key={s.title} className="flex gap-4 md:gap-6 items-start bg-background p-6 rounded-2xl border border-border shadow-md hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-bold text-lg border border-gold/20 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{s.step}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Areas We Serve */}
      <Section>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">Areas We Serve in Rawalpindi</h2>
          <p className="text-muted-foreground">
            Best International Movers operates throughout Rawalpindi and neighboring cities with extensive knowledge of every major neighborhood, gated community, and commercial zone.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="text-gold" size={18} /> Premium Gated Communities
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {serviceAreas.premium.map((area) => (
                  <div key={area.name} className="glass-card rounded-xl p-4 border border-gold/20 bg-gold/5">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{area.name}</h4>
                    <p className="text-muted-foreground text-xs">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">Major Commercial & Residential Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.commercial.map((area) => (
                  <span key={area} className="inline-flex items-center gap-1 text-sm bg-navy-light/30 px-3 py-1.5 rounded-lg border border-border text-muted-foreground">
                    <MapPin size={12} className="text-gold" /> {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">Commercial & Other Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.other.map((area) => (
                  <span key={area} className="text-sm bg-navy-light/20 px-3 py-1.5 rounded-lg border border-border text-muted-foreground">{area}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
            <p className="text-foreground text-sm">
              <strong>We Also Serve:</strong>{" "}
              <Link to="/home-shifting-islamabad" className="text-gold hover:underline">Islamabad</Link> (Sectors F, G, H, I, and E) and intercity moves to Lahore, Karachi, Multan, Peshawar, and all major Pakistani cities.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Pricing */}
      <Section alt>
        <FadeIn className="space-y-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-foreground">
              Home Shifting Cost Factors & Pricing in Rawalpindi
            </h2>
            <p className="text-muted-foreground mt-2">
              Understanding these factors helps you budget accurately and avoid surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Home size (number of rooms)",
              "Volume of items",
              "Distance of move",
              "Floor level & building type",
              "Accessibility of locations",
              "Packing service level",
              "Additional services (unpacking, storage, insurance)",
              "Moving season & day of week",
            ].map((factor) => (
              <div key={factor} className="flex gap-2 items-center text-sm text-muted-foreground">
                <ArrowRight className="text-gold flex-shrink-0" size={14} />
                {factor}
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl border border-border overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-navy/80 text-white">
                    <th className="p-4 font-display font-semibold">Home Type</th>
                    <th className="p-4 font-display font-semibold">Transport Only</th>
                    <th className="p-4 font-display font-semibold">Partial Packing*</th>
                    <th className="p-4 font-display font-semibold">Full Packing</th>
                    <th className="p-4 font-display font-semibold">Full + Unpacking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {pricingTableRows.map((row) => (
                    <tr key={row.homeType} className="hover:bg-navy-light/20 transition-colors">
                      <td className="p-4 font-semibold text-foreground">{row.homeType}</td>
                      <td className="p-4 text-gold font-bold font-mono">{row.transport}</td>
                      <td className="p-4 text-gold font-bold font-mono">{row.partial}</td>
                      <td className="p-4 text-gold font-bold font-mono">{row.full}</td>
                      <td className="p-4 text-gold font-bold font-mono">{row.fullUnpack}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="p-4 text-xs text-muted-foreground border-t border-border">
              *Partial packing includes fragile items (glassware, electronics, ceramics), valuable items, and special pieces. General items you pack yourself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-gold" size={18} /> What's Included
              </h3>
              <BulletList items={[
                "Professional packing materials (if chosen)",
                "Trained labor for loading and unloading",
                "Vehicle appropriate to move size",
                "Transit insurance coverage",
                "Furniture dismantling and reassembly",
                "Basic room arrangement and material disposal",
              ]} />
            </div>
            <div className="glass-card rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Info className="text-gold" size={18} /> Optional Add-ons
              </h3>
              <BulletList items={[
                "Unpacking service",
                "Storage service (gap between moves)",
                "Enhanced insurance for ultra-valuable items",
                "Additional labor for same-day moves",
                "Appliance installation by technician",
              ]} />
            </div>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-5 flex gap-4 items-start">
            <Info className="text-gold flex-shrink-0 mt-0.5" size={20} />
            <p className="text-foreground text-sm leading-relaxed">
              Our rates are consistently 10–15% lower than competitors while maintaining equal or superior service quality.{" "}
              <a href="tel:03009130211" className="text-gold font-bold hover:underline">Call 0300-9130211</a> for a free home survey — the most accurate quote method.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Challenges */}
      <Section>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">
            Common Challenges During Home Relocation in Rawalpindi
          </h2>
          <div className="space-y-4">
            {rawalpindiChallenges.map((c, idx) => (
              <div key={c.title} className="glass-card rounded-xl p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="text-gold flex-shrink-0 mt-1" size={18} />
                  <h3 className="font-semibold text-foreground">Challenge {idx + 1}: {c.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2"><strong className="text-foreground">The Problem:</strong> {c.problem}</p>
                <p className="text-muted-foreground text-sm"><strong className="text-gold">Our Solution:</strong> {c.solution}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Tips */}
      <Section alt>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">
            Tips for a Stress-Free Home Relocation in Rawalpindi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { phase: "Planning (6–8 Weeks Before)", tips: ["Start early with a moving timeline", "Organize & declutter — can reduce costs 20–30%", "Engage professional movers early and get quotes in writing"] },
              { phase: "Preparation (3–4 Weeks Before)", tips: ["Notify banks, utilities, and subscriptions", "Gather important documents", "Plan utilities at new home"] },
              { phase: "One Month Before", tips: ["Create detailed inventory with photos", "Collect packing supplies if not using full service"] },
              { phase: "One Week Before", tips: ["Use up stockpiles and open containers", "Prepare essentials box for first night", "Confirm details with moving company"] },
              { phase: "Moving Day", tips: ["Clear pathways and arrange parking", "Stay organized and communicate room destinations", "Do final walkthrough before team leaves"] },
              { phase: "After Moving", tips: ["Unpack systematically room by room", "Inspect items and report damage within 24–48 hours", "Activate services and complete registrations"] },
            ].map((block) => (
              <div key={block.phase} className="bg-background rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Clock className="text-gold" size={16} /> {block.phase}
                </h3>
                <BulletList items={block.tips} />
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Why Choose Best International Movers */}
      <Section>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground">
            Why Choose Best International Movers for Home Shifting in Rawalpindi
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Experience & Track Record", items: ["10+ years, thousands of successful moves", "Under 1% damage rate", "98%+ customer satisfaction", "Majority repeat customers and referrals"] },
              { icon: Users, title: "Professional Team", items: ["Background-verified staff", "Regular safety training", "Uniformed & identified", "Courteous & respectful"] },
              { icon: ShieldCheck, title: "Trust & Reputation", items: ["Licensed and registered business", "Positive Google & Facebook reviews", "Trusted by families and corporates", "Referral-based growth"] },
            ].map((block) => (
              <div key={block.title} className="glass-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <block.icon className="text-gold" size={22} />
                  <h3 className="font-display font-semibold text-foreground">{block.title}</h3>
                </div>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-center">
            Don't entrust your precious belongings to inexperienced movers. Choose the team that Rawalpindi families have trusted for over a decade.{" "}
            <a href="tel:03009130211" className="text-gold font-bold hover:underline">Call 0300-9130211</a> or WhatsApp us now.
          </p>
        </FadeIn>
      </Section>

      {/* Testimonials */}
      <Section alt>
        <FadeIn className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ali Hassan", area: "Bahria Town → Askari", text: "We moved from Bahria Town to Askari and the team finished the entire job in under 4 hours. Not a single item was damaged. Excellent service!" },
              { name: "Fatima Malik", area: "Satellite Town", text: "I was hesitant at first but this team made the whole process so easy. I wish I had hired professionals from the start." },
              { name: "Usman Qureshi", area: "DHA Rawalpindi", text: "The price they quoted was exactly what I paid — no extras, no surprises. Very professional and trustworthy team." },
            ].map((rev) => (
              <div key={rev.name} className="bg-background border border-border p-6 rounded-2xl shadow-md hover:border-gold/30 transition-all">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic mb-4">"{rev.text}"</p>
                <p className="font-semibold text-foreground">{rev.name}</p>
                <p className="text-xs text-gold">{rev.area}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
