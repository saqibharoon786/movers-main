import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import BlogArticleShell from "@/components/blog/BlogArticleShell";
import {
  CANADA_CUSTOMS_PERSONAL_EFFECTS_CANONICAL,
  CANADA_CUSTOMS_PERSONAL_EFFECTS_IMAGE,
  CANADA_CUSTOMS_PERSONAL_EFFECTS_IMAGE_CLASS_CARD,
  CANADA_CUSTOMS_PERSONAL_EFFECTS_OG_IMAGE,
  CANADA_CUSTOMS_PERSONAL_EFFECTS_PATH,
  canadaCustomsPersonalEffectsFaqs,
} from "@/data/canadaCustomsRulesPersonalEffectsPakistanBlog";

const TITLE =
  "Canada Customs Rules for Personal Effects — Complete 2025 Guide for Pakistanis | Best Int'l Movers";
const DESCRIPTION =
  "Moving from Pakistan to Canada? Learn the complete Canada customs rules for personal effects — B4 & B4A forms, Settler's Effects duty-free exemption, prohibited items, and step-by-step CBSA clearance guide for Pakistani immigrants in 2025.";
const KEYWORDS =
  "canada customs rules for personal effects, canada customs personal effects from pakistan, cbsa b4 form pakistan, importing personal belongings to canada, settler's effects canada duty free, canada import rules household goods, personal effects exemption canada, cbsa form b4 b4a guide, moving to canada customs rules pakistan";

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Canada Customs Rules for Personal Effects — The Complete 2025 Guide for Pakistanis Moving to Canada",
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Best International Movers & Logistics" },
  publisher: {
    "@type": "Organization",
    name: "Best International Movers & Logistics",
    url: "https://bestintlmovers.com",
  },
  datePublished: "2026-06-27",
  dateModified: "2026-06-27",
  image: CANADA_CUSTOMS_PERSONAL_EFFECTS_OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANADA_CUSTOMS_PERSONAL_EFFECTS_CANONICAL,
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: canadaCustomsPersonalEffectsFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border border-gold/30 bg-gold/5 p-5 my-6 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

function WarnBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border border-amber-500/40 bg-amber-500/5 p-5 my-6 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

function CtaBox({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose rounded-xl border border-gold/40 bg-navy-light/20 p-6 my-8 text-sm text-muted-foreground leading-relaxed">
      {children}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="not-prose space-y-2 my-4 pl-0 list-none">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
          <span className="text-gold shrink-0 font-bold" aria-hidden>
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-navy-mid/70 text-foreground">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left p-4 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border text-muted-foreground">
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={`p-4 ${j === 0 ? "font-medium text-foreground" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CanadaCustomsRulesPersonalEffectsPakistanBlog() {
  return (
    <BlogArticleShell
      title={TITLE}
      description={DESCRIPTION}
      keywords={KEYWORDS}
      urlPath={CANADA_CUSTOMS_PERSONAL_EFFECTS_PATH}
      canonicalUrl={CANADA_CUSTOMS_PERSONAL_EFFECTS_CANONICAL}
      h1="Canada Customs Rules for Personal Effects — The Complete 2025 Guide for Pakistanis Moving to Canada"
      dateLabel="June 2025 · 13 min read"
      breadcrumbCurrent="Canada Customs Rules for Personal Effects"
      articleSchemaOverride={blogPostingSchema}
      extraSchema={faqPageSchema}
      ogImage={CANADA_CUSTOMS_PERSONAL_EFFECTS_OG_IMAGE}
      ogImageAlt="Canada customs rules for personal effects — CBSA guide for Pakistanis moving to Canada"
    >
      <figure className="not-prose -mt-2 mb-8">
        <img
          src={CANADA_CUSTOMS_PERSONAL_EFFECTS_IMAGE}
          alt="Canada customs rules for personal effects from Pakistan — CBSA B4 B4A guide"
          className={`w-full rounded-xl border border-border max-h-80 ${CANADA_CUSTOMS_PERSONAL_EFFECTS_IMAGE_CLASS_CARD}`}
          loading="eager"
        />
      </figure>

      <p className="text-sm text-muted-foreground not-prose mb-6">
        By Best Int&apos;l Movers · Updated: June 2025 · Reading Time: 13 Minutes
      </p>

      <p>
        If you are moving from Pakistan to Canada, one of the most critical — and most confusing — parts of your
        relocation is understanding <strong>Canada customs rules for personal effects</strong>. Get it right and
        your entire household can enter Canada completely duty-free and tax-free. Get it wrong and you could face
        unexpected import duties, fines, or your belongings held at the Canadian port of entry.
      </p>
      <p>
        The Canada Border Services Agency (CBSA) has specific rules, forms, and procedures for new immigrants and
        returning Canadians importing personal effects and household goods. These rules are genuinely favourable
        for new immigrants — but only if you understand them and follow the correct process.
      </p>
      <p>
        This comprehensive guide explains everything a Pakistani immigrant needs to know — from the
        Settler&apos;s Effects duty-free exemption and CBSA B4/B4A forms, to prohibited items and exactly what
        happens when your sea freight shipment arrives at a Canadian port.
      </p>

      <nav className="not-prose rounded-xl border border-border bg-navy-light/10 p-6 mb-10" aria-label="Table of contents">
        <p className="font-display font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm columns-1 md:columns-2 text-muted-foreground">
          {[
            "What Are Personal Effects Under Canadian Customs Law?",
            "The Settler's Effects Exemption",
            "CBSA Form B4 — Goods Accompanying You",
            "CBSA Form B4A — Goods to Follow",
            "Step-by-Step: The B4/B4A Filing Process",
            "What Personal Effects Are Duty-Free?",
            "What Is NOT Covered by Settler's Effects",
            "Canadian Import Duty Rates",
            "Prohibited and Restricted Items",
            "CBSA Inspection — What to Expect",
            "Special Items — Vehicles, Jewellery, Electronics, Food",
            "Gifts and Items Purchased After Leaving Pakistan",
            "Currency and Monetary Instruments",
            "Common Mistakes Pakistani Immigrants Make",
            "Frequently Asked Questions",
          ].map((item, i) => (
            <li key={item}>
              <span className="text-gold mr-1">{i + 1}.</span> {item}
            </li>
          ))}
        </ol>
      </nav>

      <h2>1. What Are &apos;Personal Effects&apos; Under Canadian Customs Law?</h2>
      <p>
        Under CBSA regulations, &apos;personal effects&apos; refers to goods that you own and use personally — as
        opposed to commercial goods intended for resale or business use. When importing personal effects as a new
        Canadian immigrant, specific exemptions apply that can eliminate import duty and GST entirely.
      </p>
      <CheckList
        items={[
          "Clothing, shoes, and personal accessories",
          "Household furniture and furnishings",
          "Kitchen appliances and cookware",
          "Electronics used personally — laptops, phones, televisions",
          "Books, documents, and educational materials",
          "Sports equipment and recreational items",
          "Children's toys and belongings",
          "Family heirlooms, artwork, and sentimental items",
          "Personal vehicles (with separate import process)",
        ]}
      />
      <p>
        The key distinction is personal use versus commercial or resale use. A laptop you use for work is a
        personal effect. A batch of 50 mobile phones you plan to sell is commercial cargo.
      </p>
      <InfoBox>
        <strong className="text-foreground">Important:</strong> All personal effects must be accurately declared on
        CBSA Form B4 and/or B4A at your first Canadian port of entry. Even duty-free items must be declared —
        failure to declare is a customs offence regardless of whether duty would have been owed.
      </InfoBox>

      <h2>2. The Settler&apos;s Effects Exemption — Your Most Valuable Customs Benefit</h2>
      <p>
        Canada&apos;s Settler&apos;s Effects exemption — found under Tariff Item 9807.00.00 of Canada&apos;s
        Customs Tariff — allows new Canadian permanent residents and qualifying individuals to import personal and
        household goods completely duty-free and GST-free.
      </p>
      <p>
        For a typical Pakistani family shipping a 20-foot container worth CAD 25,000–40,000, this exemption saves
        CAD 2,500–10,000 in import duties and taxes.
      </p>

      <h3>Who Qualifies for Settler&apos;s Effects Exemption?</h3>
      <DataTable
        headers={["Who Qualifies", "Conditions"]}
        rows={[
          ["New Canadian Permanent Resident", "First time establishing residence in Canada. Must be admissible as a PR."],
          ["Returning Canadian Citizen", "Canadian citizen who has lived abroad for 12+ consecutive months."],
          ["Returning Canadian Permanent Resident", "PR card holder who has lived abroad for 12+ months."],
          ["Convention Refugee", "Persons granted refugee status in Canada."],
          ["Former Residents of Canada", "Subject to CBSA officer discretion and documentation."],
        ]}
      />

      <h3>Core Eligibility Conditions</h3>
      <CheckList
        items={[
          "You must be admissible to Canada — PR, citizenship, or qualifying status confirmed",
          "Goods must have been owned AND used by you personally for at least 6 months before import",
          "Goods must be for personal or household use — not for resale, rental, or commercial purposes",
          "You must file CBSA Form B4 and/or Form B4A at your first Canadian port of entry",
          "All goods claimed under the exemption must be listed on the B4 or B4A form — unlisted goods are not eligible",
        ]}
      />
      <WarnBox>
        <strong className="text-foreground">Watch Out:</strong> The 6-month ownership and use rule is strictly
        enforced. New furniture bought specifically to ship to Canada does NOT qualify because it has not been
        &apos;used&apos; for 6 months. Buy and use goods well before your move date.
      </WarnBox>

      <h3>What the Exemption Actually Saves You</h3>
      <DataTable
        headers={["Goods Category", "Normal Duty Rate", "With Settler's Exemption"]}
        rows={[
          ["Household furniture", "0 – 9.5%", "CAD 0"],
          ["Clothing and textiles", "0 – 18%", "CAD 0"],
          ["Electronics", "0 – 6%", "CAD 0"],
          ["Kitchen appliances", "0 – 8%", "CAD 0"],
          ["Carpets and rugs", "0 – 14%", "CAD 0"],
          ["GST (on all goods)", "5% on dutiable value", "CAD 0"],
        ]}
      />
      <InfoBox>
        <strong className="text-foreground">Money Saver:</strong> A Pakistani family shipping CAD 30,000 of
        household goods without Settler&apos;s Effects could pay CAD 3,000–8,670 in duties and GST. With proper
        B4/B4A filing — CAD 0. See our{" "}
        <Link to="/blog/moving-from-pakistan-to-canada-guide/" className="text-gold hover:underline font-medium">
          complete Pakistan to Canada moving guide
        </Link>{" "}
        for the full relocation timeline.
      </InfoBox>

      <h2>3. CBSA Form B4 — Goods Accompanying You</h2>
      <p>
        CBSA Form B4 (BSF186) is the Personal Effects Accounting Document for goods you physically bring when you
        first arrive in Canada — checked baggage, hand luggage, and items on your person.
      </p>

      <h3>When Do You File Form B4?</h3>
      <CheckList
        items={[
          "At your first Canadian port of entry — airport, land border, or marine port",
          "Filed when you clear Canadian immigration and customs",
          "Must be completed before you pass through the CBSA primary inspection booth",
          "Even if you have no goods with you — file B4 to register settler's status and list goods to follow on B4A",
        ]}
      />

      <h3>What Information Does Form B4 Require?</h3>
      <CheckList
        items={[
          "Full name, date of birth, and Canadian address",
          "Country of origin (Pakistan) and date of arrival",
          "List of ALL goods accompanying you — even if duty-free",
          "Estimated value of all goods (in Canadian dollars)",
          "Declaration of goods to follow (listed on B4A)",
          "Declaration of restricted items — currency over CAD 10,000, firearms, food items",
          "Signature certifying accuracy of declaration",
        ]}
      />
      <InfoBox>
        <strong className="text-foreground">Important:</strong> B4 is filed in DUPLICATE. CBSA stamps and returns
        one copy to you — keep this copy SAFELY. It is your proof of immigrant status entry and is needed for B4A
        goods clearance when your sea freight shipment arrives weeks later.
      </InfoBox>

      <h2>4. CBSA Form B4A — Goods to Follow</h2>
      <p>
        CBSA Form B4A (BSF186A) lists all personal effects and household goods NOT with you on arrival — typically
        your sea freight container from Pakistan.
      </p>
      <p>
        When your shipment arrives at a Canadian port (Vancouver, Halifax, Montreal), CBSA needs proof you
        declared these goods when you first arrived. Your stamped B4 and B4A are that proof.
      </p>

      <h3>Key B4A Rules</h3>
      <CheckList
        items={[
          "Filed at the same time as your B4 — at your first Canadian port of entry",
          "Lists ALL goods still in Pakistan that will be shipped later",
          "Goods must arrive in Canada within 12 months of your first arrival date",
          "Goods arriving after 12 months lose their duty-free exemption",
          "You cannot add items to B4A after it has been filed — only listed items qualify",
          "B4A is submitted to CBSA when your sea freight shipment clears at the destination port",
        ]}
      />

      <h3>How to Complete B4A for Your Pakistan Shipment</h3>
      <DataTable
        headers={["Room / Category", "Example B4A Entries"]}
        rows={[
          ["Living Room", "Sofa set (1), Coffee table (1), Curtains (4 pairs), Carpets (2), Decorative items"],
          ["Master Bedroom", "Bed frame (1), Wardrobe (1), Dressing table (1), Clothing (assorted)"],
          ["Kitchen", "Refrigerator (1), Microwave (1), Crockery set (1), Pots and pans (assorted)"],
          ["Children's Room", "Beds (2), Wardrobes (2), Books (assorted), Toys (assorted)"],
          ["General", "Books and documents, Prayer mats, Family photos, Sports equipment"],
        ]}
      />
      <InfoBox>
        <strong className="text-foreground">Pro Tip:</strong> Be accurate but not overly conservative with declared
        values on your B4A. Under-declaring values is a customs offence. Fair market value in Pakistan is the
        correct benchmark — not replacement cost in Canada.
      </InfoBox>

      <h2>5. Step-by-Step: The Complete B4/B4A Filing Process</h2>
      <ol className="not-prose space-y-3 my-6 text-sm text-muted-foreground list-decimal pl-6">
        {[
          "Best Int'l Movers packs your household goods in Pakistan and prepares a detailed inventory (packing list). This becomes the basis of your B4A.",
          "We provide you a copy of the packing list before you fly to Canada — review it carefully.",
          "You arrive at your Canadian port of entry (e.g., Toronto Pearson Airport). At CBSA primary inspection, declare you are a new immigrant.",
          "You are directed to CBSA secondary inspection. Present your completed B4 and B4A listing household goods still in Pakistan.",
          "CBSA officer reviews your forms, confirms immigration status, stamps your B4, and accepts your B4A.",
          "Keep your stamped B4 copy in a SAFE place — you will need it when your shipment arrives.",
          "Your sea freight container departs Karachi Port and arrives at the Canadian destination port 22–36 days later.",
          "Our Canadian customs partner lodges the import entry with CBSA, referencing your B4A and immigrant status.",
          "CBSA reviews the B4A, import declaration, and Bill of Lading against your original B4A filing.",
          "If documents are in order, CBSA releases the shipment duty-free under Settler's Effects.",
          "If selected for examination, a CBSA officer inspects the container — routine, usually 1–3 days.",
          "Your shipment is released from port and delivered to your Canadian address.",
        ].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <InfoBox>
        <strong className="text-foreground">Important:</strong> Filing B4 and B4A at your first Canadian entry is
        YOUR responsibility. Best Int&apos;l Movers prepares all documentation — but you must file the forms
        personally at CBSA. We brief you fully before you travel.
      </InfoBox>

      <h2>6. What Personal Effects Are Duty-Free in Canada?</h2>
      <p>Under Settler&apos;s Effects (Tariff 9807.00.00), the following categories qualify for duty-free and GST-free entry:</p>

      <h3>Household Furniture &amp; Furnishings</h3>
      <CheckList
        items={[
          "Sofas, armchairs, lounge suites, bedroom sets, dining tables and chairs",
          "Bookshelves, cabinets, curtains, carpets, and rugs",
          "Antique and carved wooden furniture (owned/used 6+ months)",
          "Garden and outdoor furniture",
        ]}
      />

      <h3>Kitchen &amp; Household Appliances</h3>
      <CheckList
        items={[
          "Refrigerators, freezers, washing machines, dryers, microwaves",
          "Air conditioners, small kitchen appliances, crockery, cutlery, cookware",
        ]}
      />

      <h3>Clothing, Electronics, Books &amp; Pakistani Specialty Items</h3>
      <CheckList
        items={[
          "All clothing including traditional Pakistani dress — shalwar kameez, saris, sherwanis",
          "Laptops, phones, televisions, cameras, gaming consoles",
          "Books, photo albums, children's toys, musical instruments, sports equipment",
          "Handwoven carpets, embroidered textiles, decorative brassware and crafts",
          "Pakistani dry food items (spices, rice, dried fruits — see food rules below)",
          "Non-alcoholic perfumes and attars",
        ]}
      />

      <h2>7. What Is NOT Covered by the Settler&apos;s Effects Exemption</h2>
      <DataTable
        headers={["Item / Category", "Why It Does Not Qualify"]}
        rows={[
          ["Goods bought after leaving Pakistan", "Must be owned AND used for 6+ months before import date"],
          ["Goods purchased in Canada", "Items bought after arriving are not settler's effects"],
          ["Alcohol and tobacco", "Excluded — subject to excise duty and provincial taxes"],
          ["Vehicles", "Separate import process — cannot be listed on standard B4A"],
          ["Goods for resale or commercial use", "Only personal-use items qualify"],
          ["Goods not listed on B4/B4A", "Only declared goods qualify"],
          ["Goods arriving after 12 months", "Must arrive within 12 months of first Canada entry"],
          ["Gifts for Canadian residents", "Separate CAD 60 duty-free threshold applies"],
        ]}
      />
      <WarnBox>
        <strong className="text-foreground">Watch Out:</strong> New furniture bought in the month before your move
        may not qualify as &apos;used&apos; for 6 months. Buy goods at least 6 months before your Canadian arrival
        date.
      </WarnBox>

      <h2>8. Canadian Import Duty Rates — If You Do Not Qualify</h2>
      <DataTable
        headers={["Category", "Duty Rate", "GST"]}
        rows={[
          ["Most household furniture", "0%", "5%"],
          ["Clothing and textiles (general)", "0 – 18%", "5%"],
          ["Footwear", "0 – 20%", "5%"],
          ["Electronics (personal)", "0 – 6%", "5%"],
          ["Carpets and rugs", "0 – 14%", "5%"],
          ["Kitchen appliances", "0 – 8%", "5%"],
          ["Vehicles (passenger cars)", "6.1%", "5%"],
          ["Books and printed material", "0%", "0% (GST exempt)"],
          ["Gold and jewellery", "0 – 6.5%", "5%"],
        ]}
      />

      <h2>9. Prohibited and Restricted Items — What You Cannot Bring to Canada</h2>

      <h3>Absolutely Prohibited</h3>
      <CheckList
        items={[
          "Narcotics, cannabis, and controlled substances (without Health Canada permit)",
          "Firearms without proper RCMP registration and import authorization",
          "Child pornography, hate propaganda, counterfeit currency",
          "Endangered species products — ivory, certain animal skins (CITES violations)",
          "Asbestos-containing materials",
        ]}
      />

      <h3>Restricted Items — Require Permits or Declaration</h3>
      <CheckList
        items={[
          "Firearms and weapons — must be declared; restricted firearms require RCMP authorization",
          "Prescription medications — personal supply only (90 days maximum per drug)",
          "Fresh fruits and vegetables — may be seized; import permit required for commercial quantities",
          "Meat and dairy products — highly restricted",
          "Plants and seeds — require phytosanitary certificate from Pakistan NPPO",
          "Currency over CAD 10,000 — must be declared",
        ]}
      />

      <h3>Pakistani-Specific Items — Commonly Questioned at CBSA</h3>
      <DataTable
        headers={["Item", "CBSA Guidance"]}
        rows={[
          ["Dry spices (sealed, commercial packaging)", "Generally allowed. Declare all food items."],
          ["Loose spices or home-mixed masalas", "May be inspected or seized. Use sealed commercial packages."],
          ["Dried fruits and nuts (sealed)", "Generally allowed with declaration."],
          ["Fresh mangoes, vegetables", "NOT allowed without import permit. Will be seized."],
          ["Mithai (sweets) — sealed", "Generally allowed for personal quantities."],
          ["Attar / non-alcohol perfumes", "Allowed. Declare if value exceeds threshold."],
          ["Pakistani currency (rupees)", "Allowed but declare if total currency over CAD 10,000 equivalent."],
          ["Herbal medicines", "Declare all medicines. Some may be restricted under Health Canada."],
        ]}
      />
      <InfoBox>
        <strong className="text-foreground">Important:</strong> When in doubt — DECLARE IT. Declaring an allowed
        item costs nothing. Failing to declare a restricted item costs fines, penalties, and potentially your
        belongings.
      </InfoBox>

      <CtaBox>
        <strong className="text-foreground block mb-2">We Prepare Your Complete CBSA Customs Documentation</strong>
        Best Int&apos;l Movers prepares your professional packing list, B4A inventory, and customs documentation
        for your Pakistan-to-Canada shipment. Our{" "}
        <Link to="/services/air-cargo-pakistan-to-canada/" className="text-gold hover:underline font-medium">
          air cargo from Pakistan to Canada
        </Link>{" "}
        and sea freight services include full CBSA clearance support.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Get a free quote →
        </Link>
      </CtaBox>

      <h2>10. CBSA Inspection — What to Expect When Your Shipment Arrives</h2>

      <h3>Level 1 — Documentary Review (Most Common)</h3>
      <p>
        CBSA reviews the import entry, B4A, packing list, and Bill of Lading on-screen. If documents are in order,
        CBSA issues a Release — your container is cleared. This covers the majority of immigrant household
        shipments.
      </p>

      <h3>Level 2 — Non-Intrusive Inspection (NII)</h3>
      <p>
        CBSA may select your container for an X-ray or gamma-ray scan. If nothing unusual is detected, it is
        released. Adds 1–3 days.
      </p>

      <h3>Level 3 — Physical Examination</h3>
      <p>
        A small percentage of containers are opened and examined against the packing list. Routine, not
        suspicious. Adds 3–7 days; examination fee typically CAD 200–500.
      </p>
      <InfoBox>
        <strong className="text-foreground">Pro Tip:</strong> The most common reason for examination is a mismatch
        between the B4A inventory and container contents. Our detailed professional packing list minimises this
        risk.
      </InfoBox>
      <WarnBox>
        <strong className="text-foreground">Watch Out:</strong> Never conceal undeclared goods inside declared
        items. CBSA penalties are severe and can affect your immigration record.
      </WarnBox>

      <h2>11. Special Items — Detailed Customs Rules</h2>

      <h3>Vehicles — Importing Your Pakistani Car to Canada</h3>
      <CheckList
        items={[
          "Import duty: 6.1% of vehicle value plus 5% GST",
          "Settler's Effects: Vehicles may qualify under separate CBSA Form B4 Section 5 and Transport Canada Form 1",
          "Right-hand drive vehicles: Pakistan uses RHD — Canada requires LHD. Conversion is often impractical.",
          "Age rule: Vehicles 15 years or older may be eligible regardless of Canadian standards",
          "For most Pakistani immigrants, selling in Pakistan and buying in Canada is more practical",
        ]}
      />

      <h3>Jewellery — Import Rules for Pakistan to Canada</h3>
      <CheckList
        items={[
          "Personal jewellery owned 6+ months qualifies under Settler's Effects — duty-free",
          "Must be listed on B4/B4A with accurate description and value",
          "High-value gold sets — list individually with weight, stone, and metal description",
          "Carry valuable jewellery in personal luggage on the flight rather than the container",
        ]}
      />

      <h3>Electronics</h3>
      <CheckList
        items={[
          "Personal electronics — duty-free under Settler's Effects",
          "List all electronics individually on B4/B4A with make, model, and value",
          "Multiple identical units (e.g., 5 brand-new phones) — CBSA may treat as commercial goods",
          "Pakistan uses 220V; Canada uses 120V — large appliances may need voltage converters",
          "Pakistani PAL-format TVs may not work perfectly in Canada (NTSC/ATSC standard)",
        ]}
      />

      <h3>Food Items — What You Can and Cannot Bring</h3>
      <DataTable
        headers={["Food Item", "Canada Import Status"]}
        rows={[
          ["Commercial packaged spices (National, Shan, Laziza)", "Generally allowed — declare all"],
          ["Homemade or loose spices", "May be inspected — use sealed commercial packaging"],
          ["Basmati rice, dal, lentils (sealed)", "Allowed — declare"],
          ["Dried fruits and nuts (sealed)", "Allowed — declare"],
          ["Packaged sweets / mithai (sealed)", "Allowed in reasonable quantity — declare"],
          ["Fresh mangoes and fruits", "NOT allowed without import permit"],
          ["Fresh vegetables", "NOT allowed without import permit"],
          ["Meat products", "Highly restricted — CFIA permit required for commercial import"],
          ["Dairy products", "Restricted — commercial quantities require permits"],
        ]}
      />

      <h3>Currency and Monetary Instruments</h3>
      <CheckList
        items={[
          "You can bring any amount of currency into Canada — no legal maximum",
          "CAD 10,000 or more (or equivalent) MUST be declared to CBSA",
          "Failure to declare can result in seizure of the entire amount",
          "PKR 1.4 million is approximately CAD 10,000 at current rates",
          "Best practice: Transfer large amounts via Wise or bank transfer; carry moderate cash for immediate needs",
        ]}
      />

      <h2>12. Gifts for Canadian Residents — Separate Rules Apply</h2>
      <CheckList
        items={[
          "Gifts valued under CAD 60: Duty-free and GST-free",
          "Gifts between CAD 60 and CAD 150: Duty may apply at reduced rate",
          "Gifts over CAD 150: Regular import duty and 5% GST on full value",
          "Gifts must be clearly identified as gifts on your B4 form",
          "Gifts of alcohol or tobacco: Subject to excise duty regardless of value",
        ]}
      />

      <h2>13. Common Mistakes Pakistani Immigrants Make at Canadian Customs</h2>

      <h3>Mistake 1: Not Filing B4/B4A on First Arrival</h3>
      <p>
        Without these forms, your sea freight shipment cannot clear under Settler&apos;s Effects — you will owe
        full import duty. <strong>Solution:</strong> We give you completed B4 and B4A forms before you travel.
      </p>

      <h3>Mistake 2: Forgetting to List Items on B4A</h3>
      <p>
        Unlisted items in the container face full duty. <strong>Solution:</strong> Our packing list covers every
        item and is cross-checked against your B4A.
      </p>

      <h3>Mistake 3: Shipping Newly Purchased Goods</h3>
      <p>
        Items must be owned and used 6+ months. <strong>Solution:</strong> Buy and use goods at least 6 months
        before your move date.
      </p>

      <h3>Mistake 4: Not Declaring Food Items</h3>
      <p>
        Undeclared food results in fines even for allowed items. <strong>Solution:</strong> Declare all food on
        your B4 form.
      </p>

      <h3>Mistake 5: Carrying Excessive Undeclared Cash</h3>
      <p>
        CAD 10,000+ must be declared. <strong>Solution:</strong> Transfer money via Wise or bank transfer.
      </p>

      <h3>Mistake 6: Mixing Commercial and Personal Goods</h3>
      <p>
        Commercial stock inside a personal effects shipment is a serious offence.{" "}
        <strong>Solution:</strong> Never mix commercial goods with personal effects.
      </p>

      <CtaBox>
        <strong className="text-foreground block mb-2">Complete Door-to-Door Cargo from Pakistan to Canada</strong>
        Best Int&apos;l Movers handles all customs documentation — professional B4A inventory, CBSA import entry,
        and Settler&apos;s Effects filing by our licensed Canadian customs partner. Our{" "}
        <Link to="/services/freight-forwarding-services/" className="text-gold hover:underline font-medium">
          international freight forwarding Pakistan to Canada
        </Link>{" "}
        service covers FCL, LCL, and full door-to-door delivery.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Request a free quote →
        </Link>
      </CtaBox>

      <h2>Frequently Asked Questions — Canada Customs for Personal Effects</h2>
      {canadaCustomsPersonalEffectsFaqs.map((faq) => (
        <div key={faq.q} className="not-prose mb-6">
          <h3 className="text-lg font-display font-semibold text-foreground mb-2">{faq.q}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      ))}

      <CtaBox>
        <strong className="text-foreground block mb-2">Get Your Free Pakistan to Canada Shipping Quote Today</strong>
        Best Int&apos;l Movers offers complete door-to-door{" "}
        <Link to="/services/air-cargo-pakistan-to-canada/" className="text-gold hover:underline font-medium">
          cargo shipping Pakistan to Canada
        </Link>
        . We prepare all CBSA documentation and ensure your household goods enter Canada duty-free under
        Settler&apos;s Effects. Serving Karachi, Lahore, Islamabad, Rawalpindi, Peshawar and all Pakistani cities.{" "}
        <Link to="/contact" className="text-gold hover:underline font-medium">
          Contact us today →
        </Link>
      </CtaBox>

      <h2>Final Word — Know the Rules Before You Ship</h2>
      <p>
        Canada&apos;s customs rules for personal effects are genuinely generous for new immigrants — but only if
        you know them and follow the correct process. The Settler&apos;s Effects exemption can save a Pakistani
        family CAD 5,000–10,000 in import duties and taxes. The B4 and B4A forms are straightforward once you
        understand what they are asking.
      </p>
      <p>
        The families who have problems at Canadian customs are almost always the ones who were not prepared — who
        did not know about B4A, who forgot to declare food items, or whose packing list did not match their
        container contents. Preparation and accurate documentation eliminate virtually every customs risk.
      </p>
      <p>
        At Best Int&apos;l Movers, we have guided thousands of Pakistani families through exactly this process.
        We prepare your B4A packing list, brief you on the B4 filing process before your travel date, and our
        licensed Canadian customs partner manages full CBSA clearance when your container arrives.
      </p>
      <p>
        <strong>Pakistan to Canada — handled by experts, delivered with care.</strong>
      </p>
    </BlogArticleShell>
  );
}
