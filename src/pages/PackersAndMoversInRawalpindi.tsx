import { Building2, Boxes, MapPinned, Shield, Truck, Package, Clock, Award, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoLandingPageLayout from "@/components/marketing/SeoLandingPageLayout";

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://bestintlmovers.com/#organization",
      "name": "Best International Movers & Logistics",
      "url": "https://bestintlmovers.com",
      "telephone": "+923009130211",
      "address": {
        "@type": "PostalAddress",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    {
      "@type": "Service",
      "@id": "https://bestintlmovers.com/packers-and-movers-rawalpindi#service",
      "name": "Packers and Movers in Rawalpindi | Home & Office Shifting",
      "serviceType": "Packers and Movers",
      "description": "Looking for reliable packers and movers in Rawalpindi? Survey-based quotes, trained crews, zero hidden charges. Serving Bahria Town, DHA, Askari & all areas. Call 0300-9130211.",
      "url": "https://bestintlmovers.com/packers-and-movers-rawalpindi",
      "provider": { "@id": "https://bestintlmovers.com/#organization" },
      "areaServed": { "@type": "City", "name": "Rawalpindi" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Packers and Movers Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Moving Rawalpindi" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Relocation Rawalpindi" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Packing Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture Dismantling & Reassembly" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercity Moving Rawalpindi" } }
        ]
      }
    }
  ]
};

const faqs = [
  {
    q: "Do you provide movers and packers in Rawalpindi on short notice?",
    a: "Yes, subject to crew and truck availability. Early booking of 3–5 days is recommended, but urgent scheduling is possible in most areas."
  },
  {
    q: "Which Rawalpindi areas do you cover?",
    a: "Bahria Town (all phases), DHA Rawalpindi, Askari 1–14, Satellite Town, Chaklala Schemes, PWD Colony, Gulraiz Housing, Westridge, Adyala Road, Morgah, Adiala, and Rawat — including all surrounding neighborhoods."
  },
  {
    q: "How are moving charges calculated?",
    a: "Charges depend on volume, floor access, packing scope, distance, and complexity. We provide survey-based written quotes with clear line items — no lump-sum guessing."
  },
  {
    q: "Do you handle office relocations in Rawalpindi?",
    a: "Yes. We manage workstation labeling, IT-safe equipment movement, and controlled weekend timelines so teams are operational by Monday."
  },
  {
    q: "Can you provide packing services only?",
    a: "Yes. Partial packing is available for kitchens, fragile items, and high-value furniture — even if you prefer to handle the rest yourself."
  },
  {
    q: "Do you dismantle and reassemble furniture?",
    a: "Yes. Beds, wardrobes, and modular furniture are dismantled before loading and reassembled at destination with labeled hardware bags."
  },
  {
    q: "Is transit insurance available?",
    a: "Yes. Coverage options are clearly explained at quotation stage. High-value items can be specifically noted for additional protection."
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend at least 5–7 days for residential moves and 2–3 weeks for office relocations. Month-end and Friday slots fill fastest."
  }
];

const packersTopDecor = (
  <div className="grid md:grid-cols-2 gap-4">
    <div className="rounded-2xl border border-cyan-800/35 bg-gradient-to-br from-cyan-950/50 to-navy-mid/40 p-6 md:col-span-2">
      <p className="text-xs font-bold uppercase tracking-widest text-cyan-400/90 mb-2">Packers &amp; Movers Rawalpindi 2026</p>
      <p className="text-lg font-display font-semibold text-foreground">Trusted Home &amp; Office Shifting — Survey-Based Quotes</p>
      <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
        From Bahria Town to Saddar, we align packing depth, vehicle size, and crew count before move day. No hidden charges, no surprises.
      </p>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <Boxes className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Inventory-led Quotes</p>
        <p className="text-sm text-muted-foreground mt-1">Written scope: rooms, fragile count, disassembly needs.</p>
      </div>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <Building2 className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Commercial Moves</p>
        <p className="text-sm text-muted-foreground mt-1">After-hours and weekend slots when buildings allow.</p>
      </div>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <Shield className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Careful Handling</p>
        <p className="text-sm text-muted-foreground mt-1">Padding, edge guards, and load plans per truck.</p>
      </div>
    </div>
    <div className="rounded-xl border border-cyan-900/30 bg-slate-950/40 p-5 flex gap-4">
      <MapPinned className="w-10 h-10 text-cyan-400 shrink-0" aria-hidden />
      <div>
        <p className="font-display font-semibold text-foreground">Local + Intercity</p>
        <p className="text-sm text-muted-foreground mt-1">Twin cities and beyond with tracked convoys.</p>
      </div>
    </div>
  </div>
);

const PackersAndMoversInRawalpindi = () => {
  return (
    <SeoLandingPageLayout
      visualSkin="rwpPackers"
      topDecor={packersTopDecor}
      title="Packers and Movers in Rawalpindi 2026 — Trusted Home & Office Shifting | Best Intl Movers"
      description="Looking for reliable packers and movers in Rawalpindi? Survey-based quotes, trained crews, zero hidden charges. Serving Bahria Town, DHA, Askari & all areas. Call 0300-9130211."
      keywords="packers and movers in Rawalpindi, packers movers Rawalpindi, home relocation Rawalpindi, office shifting Rawalpindi, moving company Rawalpindi, house shifting Rawalpindi, Bahria Town movers, DHA Rawalpindi packers"
      urlPath="/packers-and-movers-rawalpindi"
      h1="Packers and Movers in Rawalpindi — Reliable Home & Office Shifting"
      heroSubtext="Reliable Rawalpindi relocation teams with structured packing, safe transport, and clear handover standards — for homes, offices, and everything in between. Our survey-based approach eliminates hidden cost surprises and ensures the right crew and truck are assigned from day one."
      breadcrumbItems={[{ label: "Services", to: "/services" }, { label: "Packers & Movers Rawalpindi" }]}
      heroImageUrl=""
      heroImageAlt="Best packers and movers in Rawalpindi loading a truck for home shifting"
      schema={serviceSchema}
      faqs={faqs}
      faqSectionTitle="Frequently Asked Questions — Packers and Movers in Rawalpindi"
    >
      {/* Services Offered Section */}
      <div className="my-8">
        <img src="/images/rwp.png" alt="Packers and Movers in Rawalpindi" className="w-full rounded-lg shadow-lg" />
      </div>
      <h1>Services Offered by Our Rawalpindi Moving Team</h1>
      <p>
        Searching for <strong>movers and packers in Rawalpindi</strong> means you need more than just a truck. You need reliable packing, careful handling, disciplined 
        loading, timely delivery, and a team that does not create confusion on moving day. We provide all of this from one operations desk:
      </p>
      <ul>
        <li><strong>Residential Moving</strong> — Full home shifting with room-wise labeling, fragile protection, mattress and upholstery handling, and destination placement.</li>
        <li><strong>Office Relocation</strong> — Sequence-based office shifting so departments resume work quickly with minimal downtime. Weekend moves available.</li>
        <li><strong>Professional Packing</strong> — Complete or partial packing available. Kitchens, fragile zones, artwork, and high-value furniture handled with premium materials.</li>
        <li><strong>Furniture Dismantling &amp; Reassembly</strong> — Beds, wardrobes, and modular shelving dismantled before loading and fully reassembled at destination with labeled hardware bags.</li>
        <li><strong>Storage Support</strong> — Optional short and long-term secure storage if your new space is not ready yet.</li>
        <li><strong>Intercity Moves</strong> — Rawalpindi to Islamabad, Lahore, Peshawar, and across Pakistan with controlled handover.</li>
      </ul>
      <div className="bg-gold/10 rounded-lg p-4 border border-gold/20 mt-4">
        <p className="text-foreground">
          <strong>🌍 Planning to move abroad from Rawalpindi?</strong> Our local packing team connects directly with our{" "}
          <Link to="/services/international-moving" className="text-gold hover:underline font-semibold">
            international moving services from Pakistan
          </Link>
          {" — covering everything from your doorstep to your destination country including customs clearance and last-mile delivery."}
        </p>
      </div>

      {/* Why Choose Us Section */}
      <h1>Why Choose Best International Movers in Rawalpindi?</h1>
      <p>
        Our biggest difference is <strong>planning before execution</strong>. We inspect access points, floor types, parking availability, furniture dimensions, and 
        packing requirements before issuing a final quote. This eliminates hidden cost surprises and ensures the right crew and truck class are assigned from the start.
      </p>
      <p>
        Second, we run a <strong>documentation-driven workflow</strong>. High-value items are inventoried, cartons are labeled by zone, and handover is verified at 
        destination before our team leaves. Third, our crews understand <strong>Rawalpindi's real conditions</strong> — busy access points, narrow lanes in older 
        neighborhoods, mixed building standards, and gate controls in societies like Bahria Town and DHA. We schedule around these realities instead of reacting late.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="text-center p-3 bg-navy-light/30 rounded-lg">
          <Award className="w-6 h-6 text-gold mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">15+ Years</p>
          <p className="text-xs text-muted-foreground">Experience</p>
        </div>
        <div className="text-center p-3 bg-navy-light/30 rounded-lg">
          <Users className="w-6 h-6 text-gold mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">5,000+</p>
          <p className="text-xs text-muted-foreground">Clients Served</p>
        </div>
        <div className="text-center p-3 bg-navy-light/30 rounded-lg">
          <CheckCircle2 className="w-6 h-6 text-gold mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">100%</p>
          <p className="text-xs text-muted-foreground">Survey-Based Quotes</p>
        </div>
        <div className="text-center p-3 bg-navy-light/30 rounded-lg">
          <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
          <p className="text-sm font-semibold text-foreground">24/7</p>
          <p className="text-xs text-muted-foreground">Support</p>
        </div>
      </div>

      {/* Step-by-Step Process */}
      <h1>Step-by-Step Moving Process in Rawalpindi</h1>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="border-l-4 border-gold pl-4 py-2">
          <h3 className="font-semibold text-foreground">Step 1 — Survey and Consultation</h3>
          <p className="text-sm text-muted-foreground">We gather location details, inventory scope, date windows, and special handling requirements — in person or remotely.</p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2">
          <h3 className="font-semibold text-foreground">Step 2 — Written Quotation</h3>
          <p className="text-sm text-muted-foreground">You receive a transparent cost breakdown with defined inclusions and exclusions. No lump-sum guessing.</p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2">
          <h3 className="font-semibold text-foreground">Step 3 — Move Planning</h3>
          <p className="text-sm text-muted-foreground">We lock access slots, truck type, manpower count, and packing sequence in advance.</p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2">
          <h3 className="font-semibold text-foreground">Step 4 — Packing Execution</h3>
          <p className="text-sm text-muted-foreground">Teams pack room-wise, protect fragile goods with premium materials, and dismantle required furniture.</p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2">
          <h3 className="font-semibold text-foreground">Step 5 — Safe Loading and Dispatch</h3>
          <p className="text-sm text-muted-foreground">Items are loaded in weight and stability order with proper layering and securing.</p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2">
          <h3 className="font-semibold text-foreground">Step 6 — Destination Unloading and Placement</h3>
          <p className="text-sm text-muted-foreground">Cartons are placed by zone labels to minimize unpacking confusion at your new location.</p>
        </div>
        <div className="border-l-4 border-gold pl-4 py-2 md:col-span-2">
          <h3 className="font-semibold text-foreground">Step 7 — Reassembly and Completion Check</h3>
          <p className="text-sm text-muted-foreground">Core furniture is assembled and a closure verification is done with you before our team signs off.</p>
        </div>
      </div>

      {/* Areas We Serve */}
      <h1>Areas We Serve in Rawalpindi</h1>
      <p>
        Our active coverage includes all major residential and commercial zones. Each location has unique constraints — gate permissions, truck timing rules, narrow lanes, 
        high-rise lift coordination — which we map during the survey so your move stays controlled and predictable.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
        {[
          "Bahria Town (All Phases)", "DHA Rawalpindi", "Askari 1–14", "Satellite Town",
          "Chaklala Schemes", "PWD Colony", "Gulraiz Housing", "Westridge",
          "Adyala Road", "Morgah", "Adiala", "Rawat"
        ].map((area, idx) => (
          <div key={idx} className="flex items-center gap-2 p-2 bg-navy-light/30 rounded-lg">
            <MapPinned className="text-gold" size={14} />
            <span className="text-foreground text-sm">{area}</span>
          </div>
        ))}
      </div>
      <div className="bg-gold/10 rounded-lg p-4 border border-gold/20 mt-2">
        <p className="text-foreground">
          <strong>🔄 Moving between Rawalpindi and Islamabad?</strong> We handle twin-city moves as one seamless operation. Visit our dedicated{" "}
          <Link to="/packers-and-movers-islamabad" className="text-gold hover:underline font-semibold">
            packers and movers in Islamabad
          </Link>
          {" page for Islamabad-specific coverage and pricing."}
        </p>
      </div>

      {/* Rawalpindi Moving Costs */}
      <h1>Rawalpindi Moving Costs — What to Expect</h1>
      <p>
        Rawalpindi moving prices depend on volume, floors, walking distance, packaging depth, special-item handling, and move timing. We avoid vague lump-sum quotations — 
        you get clear line items so budgeting is practical and decisions are informed.
      </p>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg p-4 border border-gold/20">
          <h3 className="font-semibold text-foreground mb-3">Typical Price Ranges</h3>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-foreground">Compact apartment (local move)</span><span className="text-gold font-semibold">PKR 18,000 – 30,000</span></div>
            <div className="flex justify-between"><span className="text-foreground">Medium home 3–4 bedrooms</span><span className="text-gold font-semibold">PKR 40,000 – 75,000</span></div>
            <div className="flex justify-between"><span className="text-foreground">Large property or villa</span><span className="text-gold font-semibold">Survey-based quote</span></div>
            <div className="flex justify-between"><span className="text-foreground">Office relocation</span><span className="text-gold font-semibold">Survey-based quote</span></div>
          </div>
        </div>
        <div className="bg-navy-light/30 rounded-lg p-4 border border-navy-light">
          <h3 className="font-semibold text-foreground mb-2">Cost Increase Factors</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>No-lift stairwork</li>
            <li>Long carries from parking</li>
            <li>Heavy specialty furniture (pianos, safes)</li>
            <li>Urgent same-day scheduling</li>
            <li>Premium packing material requirements</li>
          </ul>
          <h3 className="font-semibold text-foreground mt-3 mb-2">Cost Optimization Tips</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Accurate survey details</li>
            <li>Declutter before move day</li>
            <li>Phase scope where suitable</li>
          </ul>
        </div>
      </div>

      {/* Common House Shifting Mistakes */}
      <h1>Common House Shifting Mistakes in Rawalpindi</h1>
      <div className="space-y-3 mb-6">
        <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
          <p className="text-foreground"><strong className="text-red-400">❌ Booking a truck without a survey</strong> — Results in wrong vehicle size, manpower shortage, and surprise charges on move day.</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
          <p className="text-foreground"><strong className="text-red-400">❌ Packing without labeling</strong> — Creates chaos at destination. Nothing goes to the right room and unpacking takes twice as long.</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
          <p className="text-foreground"><strong className="text-red-400">❌ Not checking society gate timelines</strong> — Many Bahria Town and DHA phases have strict truck entry windows. Missing these causes costly delays.</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
          <p className="text-foreground"><strong className="text-red-400">❌ Ignoring staircase and lift constraints</strong> — Furniture that fits in the unit may not fit in the stairwell or lift. This needs pre-planning during survey.</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-3 border border-red-500/20">
          <p className="text-foreground"><strong className="text-red-400">❌ Choosing cheapest day-labor without supervision</strong> — Untrained crews cause breakage, delays, and disputes with zero accountability.</p>
        </div>
      </div>
      <div className="bg-gold/10 rounded-lg p-4 border border-gold/20 mt-2">
        <p className="text-foreground">
          <strong>🏠 Moving within the twin cities?</strong> Our guide on{" "}
          <Link to="/home-shifting-islamabad" className="text-gold hover:underline font-semibold">
            home shifting in Islamabad
          </Link>
          {" covers society-specific rules, lift coordination, and budget planning tips that apply equally to Rawalpindi residential moves."}
        </p>
      </div>

      {/* Moving Internationally from Rawalpindi */}
      <h1>Moving Internationally from Rawalpindi?</h1>
      <p>
        If your move extends beyond Pakistan, our international team handles everything from Rawalpindi to 100+ countries — customs documentation, air and sea freight, 
        and door-to-door delivery at your destination. Before shipping goods internationally, it helps to estimate what customs charges you may face on arrival.
      </p>
      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 mt-2">
        <p className="text-foreground">
          <strong>📊 Use our free</strong>{" "}
          <Link to="/custom-duty-calculator" className="text-gold hover:underline font-semibold">
            Pakistan import duty calculator
          </Link>
          {" to estimate customs charges before your shipment departs — saving you from unexpected costs on arrival."}
        </p>
      </div>

      {/* Testimonials */}
      <h1>What Rawalpindi Clients Say</h1>
      <div className="grid md:grid-cols-2 gap-4 my-4">
        <div className="bg-navy-light/30 rounded-lg p-4 border border-navy-light">
          <p className="text-foreground italic">"Shifted from Askari to Bahria with zero breakage. Crew was punctual and disciplined."</p>
          <p className="text-gold text-sm mt-2">— Naeem Q., Askari 14</p>
        </div>
        <div className="bg-navy-light/30 rounded-lg p-4 border border-navy-light">
          <p className="text-foreground italic">"Kitchen and fragile items were packed professionally. No hidden charges after the move."</p>
          <p className="text-gold text-sm mt-2">— Rabia S., PWD</p>
        </div>
        <div className="bg-navy-light/30 rounded-lg p-4 border border-navy-light">
          <p className="text-foreground italic">"Survey-based quote was accurate and execution stayed on schedule."</p>
          <p className="text-gold text-sm mt-2">— Faisal H., Chaklala</p>
        </div>
        <div className="bg-navy-light/30 rounded-lg p-4 border border-navy-light">
          <p className="text-foreground italic">"Office move completed over the weekend — teams were fully operational by Monday."</p>
          <p className="text-gold text-sm mt-2">— Tariq M., Satellite Town</p>
        </div>
      </div>

      {/* Ready to Move CTA */}
      <h1>Ready to Move in Rawalpindi?</h1>
      <p>
        Share your area, move date, and room count for faster planning. Our team responds within 2 hours during business hours.
      </p>
      <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg p-6 border border-gold/30 text-center mt-4">
        <div className="space-y-3">
          <div className="text-2xl font-bold text-foreground">
            📞 Call / WhatsApp: <span className="text-gold">0300-9130211</span>
          </div>
          <div className="text-lg text-foreground">
            📧 Email: <span className="text-gold">info@bestintlmovers.com</span>
          </div>
          <p className="text-sm text-muted-foreground">Mon – Sat: 8:00 AM – 8:00 PM</p>
          <div className="mt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
            >
              <Package size={18} />
              Get Free Moving Quote
            </Link>
          </div>
        </div>
      </div>
    </SeoLandingPageLayout>
  );
};

export default PackersAndMoversInRawalpindi;
