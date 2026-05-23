import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  MOVING_CHECKLIST_PAKISTAN_CANONICAL,
  MOVING_CHECKLIST_PAKISTAN_IMAGE,
  MOVING_CHECKLIST_PAKISTAN_OG_IMAGE,
  MOVING_CHECKLIST_PAKISTAN_PATH,
  movingChecklistPakistanFaqs,
} from "@/data/movingChecklistPakistanBlog";

const TITLE = "Moving Checklist Pakistan 2026 | Full Guide";
const DESCRIPTION =
  "Planning to move from Pakistan? Use our complete moving checklist — documents, packing, customs, timelines & tips for a stress-free international relocation.";
const KEYWORDS =
  "moving checklist Pakistan, international relocation checklist Pakistan, moving abroad from Pakistan checklist, Pakistan moving guide 2026, documents needed to move from Pakistan, packing list Pakistan international move, Pakistan customs documents moving, international moving guide Pakistan";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Complete Moving Checklist for Pakistan — International Relocation Guide 2026",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": MOVING_CHECKLIST_PAKISTAN_CANONICAL },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: movingChecklistPakistanFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 list-none ml-0">
      <span className="text-gold shrink-0 font-bold" aria-hidden>
        ☐
      </span>
      <span>{children}</span>
    </li>
  );
}

function CheckList({ children }: { children: ReactNode }) {
  return <ul className="space-y-2 pl-0 my-4">{children}</ul>;
}

function TableOfContents() {
  const links = [
    { href: "#why-checklist", label: "Why a checklist matters" },
    { href: "#phase-1", label: "Phase 1 — 12 weeks before" },
    { href: "#phase-2", label: "Phase 2 — 8 weeks before" },
    { href: "#phase-3", label: "Phase 3 — 4 weeks before (packing)" },
    { href: "#phase-4", label: "Phase 4 — Final week" },
    { href: "#phase-5", label: "Phase 5 — After arrival" },
    { href: "#mistakes", label: "Common mistakes" },
    { href: "#quick-reference", label: "Quick reference checklist" },
    { href: "#related", label: "Related guides" },
  ];
  return (
    <nav className="not-prose rounded-xl border border-gold/25 bg-gold/5 p-6 mb-10" aria-label="Table of contents">
      <p className="font-display font-semibold text-foreground mb-3">Table of contents</p>
      <ol className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-gold hover:underline">
              {l.label}
            </a>
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => window.print()}
        className="mt-4 text-sm font-medium text-gold hover:underline"
      >
        Print this checklist
      </button>
    </nav>
  );
}

export default function MovingChecklistPakistanBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={MOVING_CHECKLIST_PAKISTAN_PATH}
      canonicalUrl={MOVING_CHECKLIST_PAKISTAN_CANONICAL}
      h1="The Complete Moving Checklist for Pakistan — Stress-Free International Relocation in 2026"
      dateLabel="May 2026 · 11 min read · Moving Guides"
      breadcrumbItems={[{ label: "Blog", to: "/blog" }, { label: "Moving Checklist Pakistan" }]}
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={MOVING_CHECKLIST_PAKISTAN_OG_IMAGE}
      ogImageAlt="Complete moving checklist Pakistan international relocation guide 2026"
    >
      <p className="not-prose text-sm text-muted-foreground mb-2">
        <strong className="text-foreground">Author:</strong> Best International Movers &amp; Logistics &nbsp;|&nbsp;{" "}
        <strong className="text-foreground">Last updated:</strong> May 2026
      </p>

      <img
        src={MOVING_CHECKLIST_PAKISTAN_IMAGE}
        alt="Complete moving checklist Pakistan international relocation guide 2026"
        className="not-prose w-full rounded-xl mb-8 object-cover max-h-[420px]"
        loading="eager"
      />

      <TableOfContents />

      <p>
        Moving abroad from Pakistan is one of the most significant decisions you will make — and one of the most
        logistically complex. Whether you are relocating to Dubai, Canada, the UK, Australia, or the USA, the tasks
        between deciding to move and settling abroad can feel overwhelming.
      </p>
      <p>
        This <strong>moving checklist Pakistan</strong> guide is built for families and professionals in Islamabad,
        Rawalpindi, Lahore, Karachi, Peshawar, Multan, and Faisalabad. Work through it section by section — and contact
        Best International Movers &amp; Logistics at <strong>0300-9130211</strong> if you need professional help at any
        stage.
      </p>

      <h2 id="why-checklist">Why a Moving Checklist is Non-Negotiable for an International Move from Pakistan</h2>
      <p>
        International relocation involves parallel tasks: customs documentation, freight booking, property handover,
        visa finalisation, school transfers, utility disconnection, banking, and packing an entire household. Without a
        structured <strong>international relocation checklist Pakistan</strong>, critical items are missed — documents
        arrive late, shipments delay at customs, and children miss school deadlines.
      </p>
      <p>
        Families who complete smooth moves are usually those who started with a checklist and worked through it
        methodically. This guide is that checklist.
      </p>

      <h2 id="phase-1">Phase 1 — 12 Weeks Before Your Move Date</h2>
      <p>The planning phase is where most international moves are won or lost. Twelve weeks gives enough buffer.</p>

      <h3>Confirm your move date and destination</h3>
      <p>
        Set a firm departure date or a two-to-four-week window. Share it with your employer, moving company, and family
        immediately.
      </p>

      <h3>Research and book your international moving company</h3>
      <p>Get two to three quotes from established companies. Ask in writing:</p>
      <CheckList>
        <CheckItem>Do you manage Pakistan export customs documentation?</CheckItem>
        <CheckItem>Do you coordinate destination customs clearance?</CheckItem>
        <CheckItem>Do you have a partner agent at my destination?</CheckItem>
        <CheckItem>Will I have a dedicated move coordinator?</CheckItem>
        <CheckItem>What marine or transit insurance do you offer?</CheckItem>
      </CheckList>

      <h3>Arrange a free pre-move survey</h3>
      <p>
        A surveyor assesses volume, fragile items, and access — producing a fixed-price quote that drives freight cost,
        packing date, and container booking.
      </p>

      <h3>Begin visa and immigration process</h3>
      <p>Pursue visa approval in parallel. Do not pack everything until departure is confirmed.</p>

      <h3>Start decluttering</h3>
      <p>
        Divide belongings into take, sell/donate, and discard. Less volume means lower freight cost. Use donation centres,
        Marketplace, and local resale platforms across Pakistan.
      </p>

      <h3>Notify employer and plan children&apos;s schooling abroad</h3>
      <p>
        Research destination schools early — many have waiting lists. Gather transcripts, vaccination records, and
        references from Pakistani institutions.
      </p>

      <h2 id="phase-2">Phase 2 — 8 Weeks Before Your Move Date</h2>

      <h3>Confirm booking and packing date</h3>
      <p>
        For sea freight, packing should be 3–4 weeks before departure. For air freight, 1–2 weeks is often sufficient.
      </p>

      <h3>Compile your documents checklist</h3>
      <p>Standard export documentation for most international household moves from Pakistan:</p>
      <CheckList>
        <CheckItem>Valid Pakistani passport (all pages)</CheckItem>
        <CheckItem>Original CNIC for Pakistani nationals</CheckItem>
        <CheckItem>Destination visa copy (work visa, PR, BRP, etc.)</CheckItem>
        <CheckItem>Detailed packing inventory in English</CheckItem>
        <CheckItem>Transfer of Residence (TOR) or equivalent for duty exemption abroad</CheckItem>
        <CheckItem>Employer letter if relocating for work</CheckItem>
        <CheckItem>Export declaration (prepared by your moving company)</CheckItem>
        <CheckItem>Transit insurance certificate if purchased</CheckItem>
      </CheckList>
      <p className="border-l-4 border-gold pl-4 bg-gold/5 rounded-r-lg py-3 text-sm">
        <strong>Important:</strong> A professional international mover prepares most customs paperwork. If a company
        asks you to source everything alone, treat that as a red flag.
      </p>

      <h3>Pakistan export restrictions — never ship these</h3>
      <p>
        <strong>Prohibited:</strong> alcohol, narcotics, weapons, explosives, pornographic material, counterfeit goods.
      </p>
      <p>
        <strong>Restricted (may need permits):</strong> prescription medicines (with doctor&apos;s prescription),
        high-value new electronics, antiques, certain plants/seeds, pets with veterinary certificates.
      </p>

      <h3>Notify banks, utilities, and government departments</h3>
      <CheckList>
        <CheckItem>Banks — update correspondence address; arrange remittance if needed</CheckItem>
        <CheckItem>WAPDA, gas (SNGPL/SSGC), water — schedule final readings</CheckItem>
        <CheckItem>Internet and mobile — cancel with notice periods</CheckItem>
        <CheckItem>NADRA / OPF — update overseas status if applicable</CheckItem>
        <CheckItem>Property and vehicle registration — transfer or update</CheckItem>
      </CheckList>

      <h3>Medical and health preparations</h3>
      <CheckList>
        <CheckItem>Final medical and dental check-ups</CheckItem>
        <CheckItem>3–6 months of prescriptions with pharmacy receipts</CheckItem>
        <CheckItem>Certified vaccination and medical records</CheckItem>
        <CheckItem>Destination vaccination requirements</CheckItem>
        <CheckItem>Travel health insurance until destination cover is active</CheckItem>
      </CheckList>

      <h3>Children&apos;s school records</h3>
      <CheckList>
        <CheckItem>Leaving certificates and certified transcripts</CheckItem>
        <CheckItem>Conduct certificates and vaccination cards</CheckItem>
        <CheckItem>Translations if required by destination school</CheckItem>
      </CheckList>

      <h2 id="phase-3">Phase 3 — 4 Weeks Before Your Move Date (Packing Phase)</h2>

      <h3>Finalise shipment vs hand-carry vs leave-behind</h3>
      <ol>
        <li>
          <strong>Shipment:</strong> Everything the mover packs and ships
        </li>
        <li>
          <strong>Hand luggage:</strong> Valuables, documents, medications, laptops, 4–6 weeks of essentials
        </li>
        <li>
          <strong>Left behind:</strong> Items for family, donation, or disposal
        </li>
      </ol>
      <p>
        <strong>Key rule:</strong> Sea freight may take 2–6 weeks after sailing. Do not pack essentials you need during
        that window into the shipment.
      </p>

      <h3>Documents that must travel with you — never in the container</h3>
      <CheckList>
        <CheckItem>Original passports and CNICs</CheckItem>
        <CheckItem>Nikah nama, birth certificates, degrees</CheckItem>
        <CheckItem>Property and vehicle documents</CheckItem>
        <CheckItem>Police clearance if required for immigration</CheckItem>
        <CheckItem>USB backup of digital document copies</CheckItem>
      </CheckList>

      <h3>Prepare for packing day</h3>
      <CheckList>
        <CheckItem>Clear access to all rooms</CheckItem>
        <CheckItem>Separate items not to be packed into a marked room</CheckItem>
        <CheckItem>Be present or assign a trusted family member</CheckItem>
        <CheckItem>Review and sign the inventory before the crew leaves</CheckItem>
      </CheckList>

      <h3>Property handover</h3>
      <CheckList>
        <CheckItem>Final inspection with landlord; photograph condition</CheckItem>
        <CheckItem>Return keys and collect security deposit</CheckItem>
      </CheckList>

      <h2 id="phase-4">Phase 4 — Final Week Before Departure</h2>
      <CheckList>
        <CheckItem>Verify all hand-carry documents one final time</CheckItem>
        <CheckItem>Confirm Bill of Lading or Air Waybill with move coordinator</CheckItem>
        <CheckItem>Book airport transfers and first-night accommodation abroad</CheckItem>
        <CheckItem>Carry foreign currency for 2–4 weeks of expenses</CheckItem>
        <CheckItem>Confirm destination agent contact and delivery address</CheckItem>
      </CheckList>

      <h2 id="phase-5">Phase 5 — After You Arrive at Your Destination</h2>

      <h3>Customs and delivery</h3>
      <CheckList>
        <CheckItem>Coordinate destination clearance timing with your Pakistan coordinator</CheckItem>
        <CheckItem>Provide TOR, visa copy, and translated inventory if required</CheckItem>
        <CheckItem>Be present on delivery day for inspection and sign-off</CheckItem>
      </CheckList>

      <h3>Registration abroad (examples)</h3>
      <ul>
        <li>
          <strong>UAE:</strong> Emirates ID, tenancy, DEWA
        </li>
        <li>
          <strong>UK:</strong> National Insurance, NHS, council tax
        </li>
        <li>
          <strong>Canada:</strong> SIN, provincial health card, bank account
        </li>
        <li>
          <strong>Australia:</strong> TFN, Medicare, state licence
        </li>
      </ul>
      <p>Complete school enrolment and health insurance in the first weeks after arrival.</p>

      <h2 id="mistakes">The Most Common Mistakes Pakistanis Make When Moving Abroad</h2>
      <ul>
        <li>
          <strong>Starting too late</strong> — begin 12 weeks minimum
        </li>
        <li>
          <strong>Skipping the pre-move survey</strong> — quotes without surveys are estimates, not fixed prices
        </li>
        <li>
          <strong>Packing originals in the shipment</strong> — passports and degrees stay in hand luggage
        </li>
        <li>
          <strong>Underestimating paperwork</strong> — use a professional mover for Pakistan export customs
        </li>
        <li>
          <strong>Ignoring destination rules</strong> — TOR and personal-effects rules vary by country
        </li>
        <li>
          <strong>Shipping cheap replaceable items</strong> — buy basic furniture abroad; ship sentimental and quality
          pieces
        </li>
      </ul>

      <h2 id="quick-reference">Your Complete Moving Checklist Pakistan — Quick Reference</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-navy-light/40">
              <th className="border border-border p-3 text-left">Timeline</th>
              <th className="border border-border p-3 text-left">Key tasks</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border p-3 font-medium text-foreground">12 weeks out</td>
              <td className="border border-border p-3">Move date · Book mover · Survey · Declutter · Visa · Schools</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium text-foreground">8 weeks out</td>
              <td className="border border-border p-3">Packing date · Documents · Utilities · Medical · School records</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium text-foreground">4 weeks out</td>
              <td className="border border-border p-3">Shipment lists · Packing day · Property handover</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium text-foreground">Final week</td>
              <td className="border border-border p-3">Tracking · Hand-carry docs · Airport · Destination plan</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-medium text-foreground">After arrival</td>
              <td className="border border-border p-3">Customs · Registrations · Schools · Insurance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Need Help Planning Your International Move from Pakistan?</h2>
      <p>
        Best International Movers &amp; Logistics has helped Pakistani families relocate for 15+ years — to Dubai, the
        UK, Canada, Australia, the USA, Saudi Arabia, and 100+ countries. We manage every step in this checklist from
        survey and packing to customs and overseas delivery.
      </p>
      <p>
        <strong>Free home survey · fixed written quote within 24 hours · no obligation.</strong>
      </p>
      <p>
        📞 <strong>0300-9130211</strong> &nbsp;|&nbsp; 📧 info@bestintlmovers.com
      </p>

      <h2 id="related">Related Articles from Best International Movers</h2>
      <p>
        <strong>Comparing sea and air freight?</strong> Read our{" "}
        <Link to="/blog/air-freight-vs-sea-freight-pakistan/">air freight vs sea freight from Pakistan</Link> guide for
        costs and timelines.
      </p>
      <p>
        <strong>Moving to Dubai?</strong> See our{" "}
        <Link to="/pakistan-to-dubai-movers/">Pakistan to Dubai movers</Link> page for Jebel Ali shipping, customs, and
        door-to-door delivery.
      </p>
      <p>
        <strong>Estimating import duties on goods arriving in Pakistan?</strong> Use our free{" "}
        <Link to="/custom-duty-calculator/">Pakistan customs duty calculator</Link> before your shipment reaches the port.
      </p>

      <h2>Frequently Asked Questions</h2>
      {movingChecklistPakistanFaqs.map((faq) => (
        <div key={faq.q}>
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      ))}
    </BlogArticleShell>
  );
}
