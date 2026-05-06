import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const faqClusters = [
  {
    heading: "Pricing & Cost",
    faqs: [
      { q: "How much do packers and movers charge in Pakistan?", a: "Shifting costs in Pakistan vary by city, home size, distance, and whether you include professional packing. As a general guide for local shifts: <br/><br/><strong>Studio / 1-bed apartment:</strong> Rs. 8,000 – 20,000<br/><strong>2-bedroom house:</strong> Rs. 18,000 – 35,000<br/><strong>3-bedroom house:</strong> Rs. 30,000 – 55,000<br/><strong>4-bedroom bungalow:</strong> Rs. 50,000 – 90,000<br/><br/>These are full-service estimates including packing, loading, transport, and unloading. Transport-only jobs without packing cost significantly less. Intercity shifts cost more due to fuel, toll, and driver accommodation on long routes." },
      { q: "Why do two moving companies give very different quotes?", a: "A large difference in quotations — sometimes 40% to 60% — almost always reflects a difference in what is actually included. The lower quote typically excludes professional packing materials, uses casual daily labour instead of trained staff, provides no transit insurance, and has no accountability if something breaks. Always compare quotes on a like-for-like basis: same packing scope, same vehicle type, same insurance coverage." },
      { q: "What is included in a standard full-service shifting quote?", a: "A genuine full-service quote from a reputable company should include: pre-move survey, all packing materials (boxes, bubble wrap, stretch film, tape), professional packing labour, loading, intercity or local transport, unloading, and basic unpacking. Furniture dismantling and reassembly, specialist packing for fragile items, and transit insurance are sometimes quoted separately — always ask." },
      { q: "Can I reduce cost of moving without risking my belongings?", a: "Yes — with some practical choices. Declutter before the move: anything you are not taking to your new home does not need packing or loading. Pack non-fragile items like clothing, books, and linens yourself — most moving companies charge only for professional packing of furniture, appliances, and breakables. Book mid-week if your date is flexible — demand is lower from Tuesday to Thursday, and some companies offer lower rates. Book well in advance — last-minute bookings command a premium." },
      { q: "Is tipping moving team expected?", a: "Tipping is not mandatory but is appreciated for a job well done. The standard practice in Pakistan is a discretionary tip based on the difficulty of the job and your satisfaction with the crew's work. There is no fixed amount." },
    ],
  },
  {
    heading: "Booking & Timing",
    faqs: [
      { q: "How far in advance should I book packers and movers in Pakistan?", a: "For a standard local shift, 3 to 5 days notice is usually sufficient. For intercity moves, 5 to 7 days is recommended. Month-end dates — particularly the last week of any month — are consistently the busiest period as most rental agreements end on the last day. If your move falls at month-end, book at least 10 to 14 days in advance. Ramadan and Eid periods also create high demand for moving services." },
      { q: "What is the best day of the week to shift in Pakistan?", a: "Tuesday, Wednesday, and Thursday are consistently the least busy moving days. Saturday is the busiest. Moving mid-week gives you better crew availability, more flexible timing, and in some cases better rates." },
      { q: "What is the best time of day to start a shift?", a: "Early morning — 7:00 AM to 8:00 AM — is optimal for most shifts. Starting early means you avoid peak traffic in Rawalpindi, Islamabad, Lahore, and Karachi, the crew works during cooler hours, and you have the entire day to complete the move and settle in. Afternoon starts often result in arriving at the new home after dark." },
      { q: "What should I do the day before a shift?", a: "Confirm the crew's arrival time. Ensure all utilities — gas, electricity, water — are arranged for both the old and new address. Disconnect and defrost the refrigerator the night before (it must be completely dry before transport). Remove all items from drawers and cabinets — they add weight and can shift during transit damaging furniture. Prepare a personal bag with essentials you will need the first night — documents, phone chargers, children's items, medications." },
    ],
  },
  {
    heading: "Packing & Handling",
    faqs: [
      { q: "Do I need to empty my wardrobes and cupboards before movers arrive?", a: "Yes — always. Furniture is significantly heavier with contents inside and risks structural damage during loading if drawers shift. More importantly, items inside cupboards are not covered by transit insurance in most policies if they were not professionally packed. Remove everything, pack it separately in cartons, and label each box with its destination room." },
      { q: "How are fragile items like crockery and glassware handled?", a: "Professional movers use cell-pack cartons — boxes with individual cardboard dividers for each piece of crockery or glassware. Each item is wrapped separately in packing paper or bubble wrap before being placed in its cell. Double-walled cartons are used for heavier ceramic pieces. This method has an extremely low breakage rate compared to casual packing in single-wall boxes with loose newspaper." },
      { q: "What happens to flat-screen TVs during a move?", a: "TVs should ideally be packed in their original box. If this is not available, professional movers use TV-specific foam corner protectors, anti-static bubble wrap, and a reinforced cardboard frame. TVs should never be transported flat — they must be kept upright at all times. Our crews are trained on this specifically." },
      { q: "Can movers reassemble furniture at the new home?", a: "Yes — furniture reassembly is a standard part of a full-service move. Large pieces such as double beds, wardrobes, bunk beds, and modular dining tables are dismantled before the move and fully reassembled at the new address. Our team brings all required tools. Clients do not need to provide any hardware or equipment." },
    ],
  },
  {
    heading: "City & Area Coverage",
    faqs: [
      { q: "Do you cover all areas of Rawalpindi, Islamabad, Lahore, and Peshawar?", a: "Yes. We operate across all major residential areas in each city — including gated societies such as DHA, Bahria Town, and Askari in Rawalpindi and Islamabad; DHA, Bahria Town, Gulberg, and Johar Town in Lahore; and Hayatabad, University Town, and Saddar in Peshawar. We also cover all CDA sectors (F, G, E, I series) in Islamabad. If your area is not mentioned, call us — we almost certainly cover it." },
      { q: "Do you work in gated communities like DHA and Bahria Town?", a: "Yes. We are fully familiar with the entry protocols, vehicle registration requirements, and NOC documentation sometimes needed at DHA, Bahria Town, Askari, and other gated developments. This is part of our standard pre-move planning — we coordinate everything in advance so there are no delays on moving day." },
      { q: "Can you handle high-rise apartment shifts where lift access is limited?", a: "Yes. High-rise and apartment shifts with limited lift access are a routine part of our operations across Islamabad and Lahore. We plan lift booking slots in advance, assess staircase access for oversized pieces, and adjust crew size and vehicle positioning accordingly. There are no surprises on moving day." },
      { q: "Do you do same-day shifts?", a: "Subject to availability, yes. Contact us as early as possible in the morning for a same-day booking. Same-day availability is more likely on weekdays than weekends and at month-mid rather than month-end. We do not recommend leaving a move to the last minute, but we accommodate urgent bookings where we can." },
    ],
  },
  {
    heading: "Insurance & Liability",
    faqs: [
      { q: "What is transit insurance and do I need it?", a: "Transit insurance compensates you for the actual declared value of goods that are lost or damaged during a move. It is different from a moving company's standard liability — which is typically limited to a small fixed amount per consignment regardless of actual value. For any move involving significant household contents, electronics, furniture, or valuables, transit insurance is strongly recommended. The premium is typically 0.1% to 0.3% of declared value for domestic moves — a very small cost relative to the protection it provides." },
      { q: "What is not covered by transit insurance?", a: "Standard transit insurance exclusions include: inherent vice (natural deterioration of goods), deliberate damage caused by the owner, improper packing by the shipper (items packed by the owner and not by the moving company), and mechanical or electrical derangement of appliances not accompanied by external physical damage. Always read the policy terms before signing." },
      { q: "What should I do if something is damaged during a move?", a: "Note the damage on the delivery receipt before signing. Photograph all damaged items clearly — multiple angles, showing the extent of damage. Do not dispose of damaged items before the insurance assessment. Notify the moving company and insurer promptly — most policies require notification within 3 to 7 days. Keep all packing materials until the claim is resolved, as the surveyor may want to inspect them." },
      { q: "Does carrier liability cover the full value of my goods?", a: "No — and this applies to both domestic and international moves. Road carriers in Pakistan typically cap liability at a nominal fixed amount per consignment. International sea freight carriers limit liability under the Hague-Visby Rules to approximately USD 500 per package or SDR 2 per kilogram — far below the actual value of household goods. Cargo insurance is the only complete protection. Never rely on carrier liability alone for a high-value shipment." },
    ],
  },
  {
    heading: "International Moving & Cargo",
    faqs: [
      { q: "What is the difference between international moving and sending cargo?", a: "International moving refers to a complete household or office relocation — involving a pre-move survey, professional export-standard packing, export customs clearance, sea or air freight, destination import clearance, and door-to-door delivery with unpacking at the new overseas home. Cargo services cover a broader range of commercial and personal shipments — from a single LCL parcel to a full FCL container — with or without packing, and not necessarily involving a full household move. Both services use the same freight infrastructure, but international moving involves a much higher level of end-to-end coordination." },
      { q: "How do I decide between air freight and sea freight for an international move?", a: "The primary factors are volume and urgency. If your shipment is small — under 2 to 3 CBM — air freight may be cost-competitive with LCL sea freight when you factor in the much shorter transit time. If your shipment is larger — a full household of furniture and appliances — sea freight is almost always the right choice from a cost perspective, with air freight reserved for priority items needed urgently. Most families shipping internationally use sea freight for the container and air freight for essential items needed immediately upon arrival. For a side-by-side cost and transit comparison, see our <a href='/blog/air-vs-sea-freight-pakistan' className='text-gold hover:underline'>Air vs Sea Freight guide</a>." },
      { q: "Do I need to visit Karachi for anything during an international move?", a: "No. We manage everything from your city — Rawalpindi, Islamabad, Lahore, or Peshawar. Packing at your home, inland transport to Karachi Port, export customs clearance, and container loading are all coordinated by our team. You do not need to travel to Karachi at any stage of the process." },
      { q: "What documents do I need for an international move from Pakistan?", a: "For household goods: a valid CNIC or passport, a detailed packing list of all items, and your destination country visa or residency documentation. For overseas Pakistanis claiming concessional import duty at the destination, a Stay Abroad Certificate or equivalent is typically required. Our team provides a complete pre-move documentation checklist at the time of the survey — customised for your specific destination country." },
      { q: "How long does an international move from Pakistan take?", a: "It depends on the destination and freight mode. UAE by sea: 3 to 5 weeks. UK by sea: 8 to 11 weeks. Canada and USA by sea: 10 to 14 weeks. Australia by sea: 9 to 12 weeks. Air freight reduces these timelines to days rather than weeks. These are door-to-door estimates including origin packing, export clearance, ocean transit, destination clearance, and final delivery." },
    ],
  },
  {
    heading: "Choosing the Right Company",
    faqs: [
      { q: "What should I look for when choosing a moving company in Pakistan?", a: "Five things matter most. First — physical presence: does the company have a verifiable office address in your city, or just a mobile number? Second — written quotation: any credible company provides an itemised written quote before the move, not a verbal estimate. Third — their own crew: ask whether workers are their permanent employees or casual daily labour hired on the job. Fourth — transit insurance: do they offer it, and is it genuine? Fifth — reviews: look for reviews that mention specific areas and service details, not generic one-line ratings." },
      { q: "Is the cheapest quote always a red flag?", a: "Not automatically — but an unusually low quote almost always reflects something missing from the service. Common ways cheap quotes are achieved: no packing materials included, casual untrained labour, no insurance, no accountability for damage, and a vehicle that is too small for the job (requiring a second trip at extra cost). Get at least three written quotes and compare what is actually included." },
      { q: "What questions should I ask before hiring packers and movers in Pakistan?", a: "Ask: Are your packers permanent employees or hired daily? What packing materials do you use — can I see samples? Is transit insurance included or optional? What is your process if something breaks? Can you provide a written itemised quote? Do you have experience with my specific type of move — high-rise, intercity, international? How many moves do you do per week in my area? A reputable company answers all of these without hesitation." },
      { q: "Are there any red flags I should watch for?", a: "Yes. Avoid any company that: quotes only verbally without a written itemised breakdown; demands full payment upfront before the move; cannot provide a physical office address; has no reviews or only generic five-star reviews with no detail; sends unmarked vehicles with workers in casual clothes; or cannot answer basic questions about their packing materials and process. Trust your judgment — if something feels off during the enquiry, it will feel worse on moving day." },
    ],
  },
];

const relatedLinks = [
  { to: "/home-shifting-rawalpindi", label: "Home Shifting Rawalpindi" },
  { to: "/packers-and-movers-lahore", label: "Packers and Movers Lahore" },
  { to: "/blog/air-vs-sea-freight-pakistan", label: "Air vs Sea Freight Pakistan" },
];

export default function FaqHubPakistan() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Packers and Movers Pakistan FAQ – Moving, Cargo & Cost Guide"
        description="Complete FAQ for packers and movers in Pakistan. Honest answers on pricing, process, insurance, international moving & cargo. Read before you book – 0300-9130211"
        keywords="packers and movers pakistan faq, movers pakistan questions, moving cost pakistan, house shifting questions pakistan, international moving faq pakistan, cargo services pakistan faq, how to choose packers movers pakistan"
        urlPath="/faqs-packers-movers-pakistan/"
      />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">FAQ Hub</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
              Packers and Movers Pakistan FAQ – Every Question Answered Honestly
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hiring a moving company or cargo service in Pakistan raises a lot of questions — about pricing, process, safety, timing, insurance, and what to watch out for. This page answers questions we hear most often, drawn from 15+ years of helping families and businesses relocate across Pakistan and internationally.
            </p>
          </motion.div>

          <div className="space-y-12">
            {faqClusters.map((cluster, idx) => (
              <motion.section key={cluster.heading} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
                <h2 className="text-2xl font-display font-bold mb-5">{cluster.heading}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {cluster.faqs.map((f, i) => (
                    <AccordionItem key={f.q} value={`${cluster.heading}-${i}`} className="glass-card rounded-xl px-6 border border-border hover:border-gold/30 transition-colors">
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-gold py-5 [&[data-state=open]]:text-gold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.section>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-display font-bold mb-5">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is available Monday to Saturday, 8:00 AM to 8:00 PM. Call or WhatsApp us at <strong>0300-9130211</strong> and we will answer any question about your specific move — honestly and without obligation.
            </p>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-4 text-muted-foreground">
                <span>📞 <strong>Call / WhatsApp: 0300-9130211</strong></span>
                <span>📍 <strong>Rawalpindi | Islamabad | Lahore | Peshawar</strong></span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105">
                GET FREE QUOTE
              </Link>
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy-dark transition-all">
                WHATSAPP US NOW
              </a>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-display font-bold mb-5">Related Pages</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {relatedLinks.map((item) => (
                <Link key={item.to} to={item.to} className="rounded-lg border border-border px-4 py-3 hover:border-gold/40 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-14 text-center glass-card rounded-2xl p-8 border border-gold/20">
            <h2 className="text-2xl font-display font-bold mb-3">Need a moving quote now?</h2>
            <p className="text-muted-foreground mb-6">Call 0300-9130211 or WhatsApp for a free survey and written quote.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold">
                WhatsApp Us
              </a>
              <a href="tel:03009130211" className="inline-flex px-6 py-3 rounded-lg border border-gold/30 text-gold font-semibold">
                Call 0300-9130211
              </a>
            </div>
          </section>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
}
