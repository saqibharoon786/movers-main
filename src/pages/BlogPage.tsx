import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ArrowLeft, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const blogs = [
  {
    slug: "home-shifting-islamabad",
    img: "/blog/packers-movers-islamabad-truck.jpg",
    title: "Home Shifting in Islamabad 2026 — Complete Guide | Best International Movers",
    date: "Jun 1, 2026",
    category: "Moving Guides",
    author: "Best International Movers",
    readTime: "18 min read",
    excerpt: "Planning home shifting in Islamabad? Read our 2026 complete guide covering costs, tips, best packers and movers, checklists, and how to shift safely. Call 0300-9130211.",
    content: `<h2>Home Shifting in Islamabad 2026 — The Complete Guide You Actually Need</h2>
<p>Home shifting in Islamabad sounds simple until you are actually doing it. Whether you are moving within F-sectors, relocating from DHA to Bahria Town, shifting from Islamabad to Rawalpindi, or planning a full move abroad — the process involves careful planning, the right team, and a lot of smart decisions.</p>
<p>This guide covers everything: costs, timelines, checklists, how to choose packers and movers in Islamabad, what to watch out for, and how to make your move completely stress-free. Bookmark this — you will need it.</p>

<h2>What You Will Learn in This Guide</h2>
<ul>
<li>What home shifting in Islamabad really involves</li>
<li>Complete cost breakdown for 2026</li>
<li>Step-by-step moving checklist</li>
<li>How to choose the right packers and movers</li>
<li>Common mistakes that cost people money</li>
<li>Shifting from Islamabad to Rawalpindi tips</li>
<li>FAQ answered by our 15-year experts</li>
</ul>

<h2>What Is Home Shifting in Islamabad — and Why Is It Complicated?</h2>
<p>Home shifting means relocating all your household belongings — furniture, electronics, clothes, kitchen items, appliances, and valuables — from one address to another. In Islamabad and Rawalpindi, this is more complex than it looks for several reasons:</p>
<ul>
<li>Islamabad has strict traffic timing rules in certain sectors</li>
<li>Many buildings have no lifts — ground floor loading/unloading is often the only option</li>
<li>Monsoon season (July–September) creates weather risks for furniture and electronics</li>
<li>Fragile items like LCD screens, glass tables, and crockery require professional wrapping</li>
<li>DHA and Bahria Town have entry gate procedures that require prior coordination</li>
<li>Parking for trucks is limited in F-sector markets and apartment buildings</li>
</ul>
<p>This is exactly why professional home shifting services in Islamabad exist. The right team handles all of this before you even think about it. You can check our dedicated <a href="/movers-islamabad">Movers Islamabad</a> page for specialized local insights.</p>

<h2>Home Shifting Cost in Islamabad 2026 — Complete Breakdown</h2>
<p>The number one question people ask is: how much does home shifting cost in Islamabad? The honest answer is: it depends. But here is a transparent breakdown of what to expect in 2026:</p>

<table className="w-full border-collapse border border-border my-6">
  <thead>
    <tr className="bg-navy-light/30">
      <th className="border border-border p-3 text-left font-bold text-foreground">Home Size</th>
      <th className="border border-border p-3 text-left font-bold text-foreground">Local Shift (within Islamabad)</th>
      <th className="border border-border p-3 text-left font-bold text-foreground">Islamabad ↔ Rawalpindi</th>
      <th className="border border-border p-3 text-left font-bold text-foreground">Islamabad → Lahore</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-navy-light/10">
      <td className="border border-border p-3 font-semibold text-foreground">1 Room / Studio</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 8,000–15,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 10,000–18,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 25,000+</td>
    </tr>
    <tr className="bg-navy-light/20">
      <td className="border border-border p-3 font-semibold text-foreground">2 Bedroom Apartment</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 18,000–30,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 22,000–38,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 45,000+</td>
    </tr>
    <tr className="bg-navy-light/10">
      <td className="border border-border p-3 font-semibold text-foreground">3 Bedroom House</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 30,000–50,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 35,000–60,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 70,000+</td>
    </tr>
    <tr className="bg-navy-light/20">
      <td className="border border-border p-3 font-semibold text-foreground">4–5 Bedroom Villa</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 55,000–90,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 65,000–100,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 120,000+</td>
    </tr>
    <tr className="bg-navy-light/10">
      <td className="border border-border p-3 font-semibold text-foreground">Full Office (small)</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 40,000–70,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 50,000–80,000</td>
      <td className="border border-border p-3 text-gold font-bold">PKR 90,000+</td>
    </tr>
  </tbody>
</table>
<p className="text-xs text-muted-foreground italic mb-6">* Rates vary by floor (no lift), distance, item count, packing complexity, and season. Summer and Eid periods are 10–20% more expensive due to demand.</p>

<h3>What Affects Home Shifting Prices in Islamabad?</h3>
<ul>
<li><strong>Number of floors</strong> — above ground floor with no lift adds PKR 2,000–5,000 per floor due to heavy manual carrying.</li>
<li><strong>Packing service</strong> — professional <a href="/services/professional-packing">professional packing services</a> add PKR 3,000–15,000 depending on the volume of fragile items.</li>
<li><strong>Distance</strong> — moving within the same sector is much cheaper than shipping from F-6 to DHA or Bahria Town.</li>
<li><strong>Time of year</strong> — Eid holidays, peak summer, and month-end are high-demand periods that affect rate averages.</li>
<li><strong>Heavy or specialty items</strong> — moving a piano, large safe, or heavy gym equipment requires specialized gear and incurs extra charges.</li>
<li><strong>Short-notice bookings</strong> — bookings made within 48 hours typically add a 15–25% premium.</li>
</ul>
<p><strong>💡 Pro Tip:</strong> Always get a written, itemized quote before confirming. Any company that refuses to provide a written quotation — walk away. Our team at the <a href="/contact">Contact Page</a> is always ready to issue comprehensive, transparent binding quotes.</p>

<h2>Home Shifting Checklist — 4 Weeks Before Your Move</h2>
<p>The biggest mistake people make is starting too late. Here is a week-by-week checklist that professional moving coordinators use for home shifting in Islamabad:</p>

<h3>4 Weeks Before — Planning Phase</h3>
<ol>
<li>Decide your exact moving date — avoid Eid week, Ramadan, and peak monsoon if possible.</li>
<li>Book your packers and movers — highly rated teams get booked 2–3 weeks in advance.</li>
<li>Start decluttering — sell, donate, or throw away household goods you do not need.</li>
<li>Measure your new home's entry doors and rooms — ensure large furniture pieces can fit.</li>
<li>Notify your landlord and get your security deposit paperwork moving.</li>
<li>Collect cartons and boxes from local markets if you plan to pack secondary items yourself.</li>
</ol>

<h3>2 Weeks Before — Preparation Phase</h3>
<ol>
<li>Confirm moving company booking with a written, signed agreement.</li>
<li>Pack non-essential items first: books, home décor, seasonal clothes, extra kitchenware.</li>
<li>Label every box clearly with room name, contents, and a "FRAGILE" tag if applicable.</li>
<li>Take photos of your current home — highly useful for security deposit clearances.</li>
<li>Notify utility companies like <a href="https://www.iesco.com.pk/" target="_blank" rel="noopener noreferrer">IESCO</a>, SNGPL, and PTCL of your shifting schedule.</li>
<li>Update your address with banks, your <a href="https://www.nadra.gov.pk/" target="_blank" rel="noopener noreferrer">NADRA</a> CNIC, vehicle registration, and school records.</li>
<li>Arrange babysitting or pet safety measures for moving day.</li>
</ol>

<h3>Moving Week — Execution Phase</h3>
<ol>
<li>Confirm the shifting team's exact arrival time — usually 8–9 AM is best for morning moves.</li>
<li>Pack a 'first night bag' containing absolute essentials (medication, change of clothes, chargers).</li>
<li>Charge all power banks and keep your essential phone chargers handy.</li>
<li>Defrost your refrigerator 24 hours before moving day.</li>
<li>Drain your washing machine hoses completely.</li>
<li>Dismantle beds, large wardrobes, and dining tables the evening before to save time.</li>
<li>Keep important documents, jewelry, and cash with you personally — never put them in the moving truck.</li>
</ol>

<h3>Moving Day — The Day Itself</h3>
<ol>
<li>Be present during the loading process — do not leave the moving crew unsupervised.</li>
<li>Cross-check your digital inventory list as items are loaded into the truck.</li>
<li>Do a final walkthrough of your old home: check closets, cabinets, bathrooms, and outdoor spaces.</li>
<li>Take photos of any pre-existing scratches or damage at your new property before unloading.</li>
<li>Direct movers room by room — tell them exactly where to set up each large furniture piece.</li>
<li>Inspect all delivered items and note any transit damage immediately.</li>
<li>Pay the remaining balance only after the entire job is complete and you are fully satisfied.</li>
</ol>
<p><strong>💡 Pro Tip:</strong> Keep a small cash amount ready on moving day for tips or refreshments. Movers appreciate the hospitality, and it keeps the team highly motivated!</p>

<h2>How to Choose Packers and Movers in Islamabad — 7 Things to Check</h2>
<p>Islamabad has dozens of moving companies advertising online. Not all of them are reliable. Here is exactly how to tell the professional ones from the bad ones:</p>
<ol>
<li><strong>They Give a Written Quote:</strong> Legitimate companies will visit your home or conduct a video survey and issue an itemized, written quote. Avoid verbal-only estimators.</li>
<li><strong>They Have Verifiable Reviews:</strong> Check Google Maps reviews and ask for recent twin-city customer references. Look for companies with a 4.5+ average rating.</li>
<li><strong>Their Team Is Trained:</strong> Ensure the crew are permanent, trained moving professionals, rather than random daily-wage laborers hired from the street.</li>
<li><strong>They Use Quality Packing Materials:</strong> Thick bubble wrap, stretch film, double-walled cartons, and moving blankets are mandatory. Low-grade movers will compromise on these.</li>
<li><strong>They Have Insurance Coverage:</strong> Accidents can happen. Always choose a company that offers comprehensive transit insurance for complete peace of mind.</li>
<li><strong>They Have a Physical Office:</strong> Verified office address in Islamabad (e.g., Blue Area) implies stability and accountability if any issues arise.</li>
<li><strong>Clear Payment Terms:</strong> Never pay 100% upfront. Professional logistics standards involve 30–50% deposit and the final balance upon successful shifting.</li>
</ol>
<p>Check out our detailed guide on the <a href="/packers-and-movers-islamabad">Packers & Movers Islamabad</a> page to see our full service standards.</p>

<h2>Home Shifting from Islamabad to Rawalpindi — Special Tips</h2>
<p>Islamabad to Rawalpindi is the most common twin-city move, but it has its own challenges:</p>
<ul>
<li>Many historic Rawalpindi areas (e.g., Saddar, old city) have narrow streets, requiring smaller Suzuki or Mazda trucks instead of large container trucks.</li>
<li>Gated societies like Bahria Town Rawalpindi and DHA Rawalpindi require advance security clearance gate passes for moving vehicles.</li>
<li>Early morning moves (before 8:00 AM) are highly recommended to beat the intense GT Road and Murree Road traffic.</li>
<li>If you are shifting to an upper floor in Rawalpindi with no elevator, notify your moving coordinator in advance.</li>
</ul>
<p>Review our specialized <a href="/home-shifting-rawalpindi">Home Shifting Rawalpindi</a> page to check local rates, routes, and timing windows.</p>

<h2>Packing Tips for Home Shifting in Islamabad — Room by Room</h2>
<h3>Kitchen — The Most Complex Room</h3>
<ul>
<li>Pack glasses and crockery individually in bubble wrap or clean packing paper — never stack glass directly.</li>
<li>Use original appliance boxes for mixers, microwaves, and air fryers if available.</li>
<li>Empty, clean, and defrost the fridge 24 hours prior — wrap all glass shelves separately.</li>
<li>Seal all spices, oils, and liquids in tight zip-lock bags inside a box to prevent messy leaks.</li>
</ul>

<h3>Bedroom — Wardrobe and Mattress Care</h3>
<ul>
<li>Wardrobes can often be moved locked or wrapped with clothing inside if they are sturdy enough.</li>
<li>Matresses should be wrapped in heavy polythene covers to protect against Islamabad's notorious dust.</li>
<li>Store all bed frame screws and bolts in a labelled zip-lock bag and tape it securely to the frame.</li>
</ul>

<h3>Living Room — TVs and Electronics</h3>
<ul>
<li>LED and LCD screens must be heavily wrapped in foam padding and placed upright on the vehicle.</li>
<li>Photograph the cable setup behind your router, TV, and gaming systems before disconnecting them.</li>
<li>Label each power adapter and remote — it saves hours of search later.</li>
</ul>

<h2>Home Shifting Mistakes to Avoid — Costly Lessons</h2>
<p>In our 15 years of operations, we have seen the same mistakes repeated. Ensure you avoid them:</p>
<ul>
<li><strong>Mistake 1: Booking the lowest quote.</strong> Extremely cheap quotes almost always result in hidden charges, poor wrapping, or late no-shows. Focus on best value.</li>
<li><strong>Mistake 2: Failing to make an inventory.</strong> Spend 20 minutes making a checklist of your major boxes. It is the ultimate tool for accountability.</li>
<li><strong>Mistake 3: Shifting during holidays without pre-booking.</strong> Ramadan, Eid breaks, and month-end dates book out instantly. Secure your spot at least 3 weeks ahead.</li>
<li><strong>Mistake 4: Not being present on-site.</strong> Make sure a responsible family member is present to direct placement and double-check unloading condition.</li>
</ul>

<h2>Ready to Shift? Get a Free Quote in 60 Minutes</h2>
<p>Home shifting in Islamabad does not have to be stressful. With the right team, the right plan, and this guide in hand, your move can go smoothly from first box to final placement.</p>
<p>Best International Movers & Logistics has been Islamabad's trusted home shifting partner for over 15 years — serving 5,000+ families across Islamabad, Rawalpindi, Lahore, and Peshawar. Contact us today for a free, no-obligation moving quote!</p>`
  },
  {
    slug: "pet-relocation-from-pakistan-complete-guide",
    img: "/images/pet-relocation.png",
    title: "Pet Relocation from Pakistan 2026 — IATA Certified, Safe & Stress-Free",
    date: "Apr 29, 2026",
    category: "Pet Services",
    author: "Best International Movers",
    readTime: "15 min read",
    excerpt: "Complete guide to pet relocation from Pakistan. IATA crates, vet documents, customs clearance, costs, and trusted routes to UAE, UK, USA & Canada. Free quote available.",
    content: "",
  },
  {
    slug: "packers-and-movers-islamabad-guide",
    img: "/images/professional-packing.png",
    title: "Packers and Movers in Islamabad: Complete Guide to Safe & Affordable House Shifting (2026)",
    date: "Apr 2026",
    category: "Moving Guides",
    author: "Best International Movers",
    readTime: "11 min read",
    excerpt:
      "Planning to shift in Islamabad? Costs, tips, red flags, checklists and how to get a free survey — plus how to choose trusted packers and movers in Islamabad.",
    content: "",
  },
  {
    slug: "tips-for-stress-free-international-move",
    img: "/images/international-moving.jpg",
    title: "10 Tips for a Stress-Free International Move from Pakistan",
    date: "Apr 1, 2026",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Planning to move internationally from Pakistan? Expert tips on packing, customs, documentation and choosing the right moving company—complete 2026 guide.",
    content: "",
  },
  {
    slug: "air-freight-vs-sea-freight-pakistan",
    img: "/images/air-freight.jpg",
    title: "Air Freight vs Sea Freight from Pakistan: Which is Right?",
    date: "Apr 1, 2026",
    category: "Logistics",
    author: "Best International Movers",
    readTime: "12 min read",
    excerpt: "Compare air and sea freight costs, transit times, pros and cons—and choose the right shipping method for your move.",
    content: "",
  },
  {
    slug: "customs-regulations-guide-pakistan",
    img: "/images/cargo-insurance.jpg",
    title: "Pakistan Customs Regulations Guide | Moving Abroad",
    date: "Feb 28, 2024",
    category: "Guides",
    author: "Best International Movers",
    readTime: "10 min read",
    excerpt: "Everything you need to know about customs clearance, documentation, and regulations when moving your household goods from Pakistan internationally.",
    content: `<h2>Understanding Pakistan Export Customs in 2026</h2>
<p>When relocating from Pakistan, customs delays are usually caused by incomplete documents, mismatched inventory descriptions, or unclear ownership records. A clean file from day one helps your shipment move without storage penalties or unexpected port holds.</p>

<h2>Essential Documentation Checklist</h2>
<p>Before cargo handover, keep these ready in one shared folder:</p>
<ul>
<li>Valid passport, visa, and destination permit copies</li>
<li>Detailed inventory with item condition and estimated value</li>
<li>National ID, proof of residence, and shipper declaration</li>
<li>Power of attorney for customs broker handling</li>
<li>Special permits for antiques, controlled electronics, or commercial stock</li>
</ul>

<h2>Compliance Tips That Reduce Delays</h2>
<p>Use consistent item names across packing list, valuation sheet, and airway/bill of lading data. Avoid broad labels like "miscellaneous goods". For mixed shipments, separate personal effects from business inventory and mark cartons clearly.</p>

<h2>Duty Planning Before Dispatch</h2>
<p>Duty exposure changes by destination and commodity class. Estimate liability early with our <a href="/custom-duty-calculator">Pakistan custom duty calculator</a>, then validate assumptions with your destination customs advisor before final booking.</p>

<h2>Related Services for Safer Clearance</h2>
<p>Clients moving homes usually pair <a href="/services/professional-packing">professional packing services</a> with <a href="/services/customs-clearance">customs clearance support</a> to reduce inspection issues and paperwork errors.</p>

<h2>Best Routes from Pakistan</h2>
<p>For destination-specific planning, review <a href="/pakistan-to-dubai-movers">Pakistan to Dubai movers</a> and <a href="/pakistan-to-uk-movers">Pakistan to UK movers</a> pages to compare transit times, document flow, and handling approach.</p>`
  },
  {
    slug: "best-international-moving-company-pakistan",
    img: "/images/international-moving.jpg",
    title: "How to Choose the Best International Moving Company in Pakistan",
    date: "Feb 15, 2024",
    category: "Guides",
    author: "Best International Movers",
    readTime: "7 min read",
    excerpt: "A comprehensive guide to selecting a reliable international moving company in Rawalpindi, Islamabad, Lahore, and Peshawar. What to look for and red flags to avoid.",
    content: `<h2>How to Choose an International Moving Company in Pakistan</h2>
<p>Price alone is not a decision framework. The right mover should show operational clarity: survey process, cargo plan, customs documentation workflow, insurance terms, and escalation paths when delays happen.</p>

<h2>5 Criteria That Actually Matter</h2>
<h3>1) Survey Quality</h3>
<p>A proper pre-move survey should classify fragile goods, oversized pieces, access constraints, and preferred freight mode. Generic phone quotes without inspection are high-risk.</p>

<h3>2) Freight Strategy</h3>
<p>Ask when they recommend <a href="/services/air-freight">air freight</a> versus <a href="/services/sea-freight">sea freight</a>, and whether they provide mixed-mode options for urgent and non-urgent items.</p>

<h3>3) Documentation Control</h3>
<p>Strong movers provide document templates, ownership declarations, and destination compliance notes before dispatch. This is where most failed relocations break down.</p>

<h3>4) City Operations</h3>
<p>Choose teams with active coverage where you actually live: <a href="/movers-islamabad">Islamabad</a>, <a href="/movers-rawalpindi">Rawalpindi</a>, <a href="/movers-lahore">Lahore</a>, and <a href="/movers-and-packers-in-peshawar">Peshawar</a>.</p>

<h3>5) Cost Transparency</h3>
<p>Use the <a href="/custom-duty-calculator">import duty estimator</a> before final quote approval and ask for separate line-items for origin handling, freight, destination charges, and insurance.</p>

<h2>Red Flags You Should Not Ignore</h2>
<ul>
<li>No written scope of work or exclusions list</li>
<li>Unclear liability terms for fragile/high-value items</li>
<li>No timeline commitment for customs milestones</li>
<li>No post-delivery issue handling process</li>
</ul>

<h2>Shortlist Workflow</h2>
<p>Compare two or three companies, ask the same compliance questions, and verify response quality. Then select the team that offers the clearest documentation plan, not just the lowest upfront number.</p>`
  },
    {
    slug: "packing-guide-international-move",
    img: "/images/packing-materials.jpg",
    title: "Ultimate Packing Guide for International Moving: Protect Your Belongings",
    date: "Feb 1, 2024",
    category: "Moving Tips",
    author: "Best International Movers",
    readTime: "9 min read",
    excerpt: "Professional packing tips and techniques for protecting your household goods during international shipping. Learn what materials to use and how to pack like the pros.",
    content: `<h2>International Packing Standards That Prevent Damage</h2>
<p>Packing quality decides claim rates. Every cross-border move passes through loading, port handling, customs checks, transit vibration, and final unloading. Weak labeling or low-grade cartons usually fail at transfer points, not at pickup.</p>

<h2>Material Stack We Recommend</h2>
<ul>
<li><strong>Double-wall export cartons:</strong> for weight-bearing household items</li>
<li><strong>Foam + bubble layering:</strong> for fragile mixed-load cartons</li>
<li><strong>Custom crating:</strong> for mirrors, artwork, and high-value electronics</li>
<li><strong>Moisture barriers:</strong> for sea-freight humidity control</li>
<li><strong>Serialized labels:</strong> inventory tracking from origin to delivery</li>
</ul>

<h2>Packing Workflow by Priority</h2>
<p>Start with non-daily items, then room-priority cartons, then fragile sets. Keep one essentials carton (documents, chargers, medication) and one customs carton with copies of invoices and inventory references.</p>

<h2>Pair Packing With Freight & Compliance</h2>
<p>For heavy household moves, coordinate packing with <a href="/services/sea-freight">sea freight planning</a>. For urgent shipments, use <a href="/services/air-freight">air freight options</a>. If the move includes dutiable items, pre-calculate with the <a href="/custom-duty-calculator">custom duty calculator</a>.</p>

<h2>City-Level Support in Pakistan</h2>
<p>Our packing teams work from <a href="/movers-islamabad">Islamabad</a>, <a href="/movers-rawalpindi">Rawalpindi</a>, <a href="/movers-lahore">Lahore</a>, and <a href="/movers-and-packers-in-peshawar">Peshawar</a>. You can also review our <a href="/services/professional-packing">professional packing service page</a> for scope details and add-ons.</p>`
  },
];

import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";
import { BlogSchema } from "@/components/BlogSchema";

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <SEO {...seoConfig.blog} urlPath="/blog" />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Blog & News</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Latest <span className="gold-gradient-text">Insights</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Expert tips, guides, and news about international moving from Pakistan.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogs.map((p, i) => (
              <motion.article key={p.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${p.slug}`} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-gold/30 transition-all block h-full">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={640} height={360} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">{p.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={12} />{p.date}</span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.excerpt}</p>
                    <span className="text-gold text-sm font-medium flex items-center gap-1">Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
        <ContactFooter />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO title={blog.title} description={blog.excerpt} urlPath={`/blog/${blog.slug}/`} />
      <BlogSchema title={blog.title} date={blog.date} />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="text-gold text-sm mb-6 inline-flex items-center gap-1 hover:underline"><ArrowLeft size={14} /> All Articles</Link>
          
          <motion.article initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6">
              <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded">{blog.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{blog.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-8">
              <span className="flex items-center gap-1"><User size={14} />{blog.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} />{blog.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{blog.readTime}</span>
            </div>

            <img src={blog.img} alt={blog.title} className="w-full rounded-xl mb-8 object-cover h-64 md:h-80" />

            <div className="prose prose-invert prose-gold max-w-none [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-muted-foreground [&_strong]:text-foreground" dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="mt-12 glass-card rounded-xl p-8 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Need Help With Your Move?</h3>
              <p className="text-muted-foreground mb-6">Contact Best International Movers & Logistics for a free quote. We serve Rawalpindi, Islamabad, Lahore & Peshawar.</p>
              <a href="https://wa.me/923009130211" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-3 rounded-lg gold-gradient-bg text-primary-foreground font-bold items-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all">
                WhatsApp Us Now <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
