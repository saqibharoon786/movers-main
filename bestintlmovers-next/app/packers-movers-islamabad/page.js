import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CrossServiceLinks from "@/components/CrossServiceLinks";
import ServiceFaq from "@/components/ServiceFaq";
import PackersMoversIslamabadSchema from "@/components/PackersMoversIslamabadSchema";
import { COMPANY, SITE_URL } from "@/lib/site";

export const metadata = {
  title:
    "Packers and Movers Islamabad 2026 | Home Shifting | Call 0300-9130211",
  description:
    "Best packers and movers in Islamabad. Home shifting from PKR 15,000. All sectors: F-7, G-11, DHA, Bahria. Free survey. Call 0300-9130211.",
  alternates: {
    canonical: `${SITE_URL}/packers-movers-islamabad`,
  },
};

const FAQ = [
  {
    question: "What do packers and movers charge in Islamabad in 2026?",
    answer:
      "Charges start from PKR 15,000 for a studio or 1-bedroom home and go up to PKR 80,000+ for a 4–5 bedroom villa. Office moves start from PKR 20,000. Exact pricing depends on volume, distance and packing needs. We provide a free home survey with a written quote — call 0300-9130211.",
  },
  {
    question: "Is same-day shifting available in Islamabad?",
    answer:
      "Yes — book before 10:00 AM on the day of your move. WhatsApp us at 0300-9130211 with your address, room count and item list. We confirm availability within 30 minutes.",
  },
  {
    question: "Do you cover DHA, Bahria Enclave and Diplomatic Enclave in Islamabad?",
    answer:
      "Yes — we cover all of Islamabad including DHA Phase 1 & 2, Bahria Enclave, Diplomatic Enclave, Park Enclave, Naval Anchorage, Gulberg Greens and all F, G, E and I sectors.",
  },
  {
    question: "Is my furniture insured during the move?",
    answer:
      "Yes. Every residential and office move is fully insured against damage or loss during transit. In the rare event of any damage, we provide complete compensation at no extra cost.",
  },
  {
    question: "How long does a house shift take in Islamabad?",
    answer:
      "A 2–3 bedroom home with a team of 4–6 packers typically takes 6–10 hours. Larger homes may need 1–2 days. Same-day completion is possible for smaller homes booked before 10:00 AM.",
  },
  {
    question: "Do you do international moves from Islamabad?",
    answer:
      "Yes — door-to-door international moving from Islamabad to UAE, UK, USA, Canada, Saudi Arabia, Australia, Qatar and 100+ countries. Both sea freight and air freight available. Call 0300-9130211 for a free international moving quote.",
  },
];

export default function PackersMoversIslamabadPage() {
  return (
    <>
      <PackersMoversIslamabadSchema />
      <HeroSection
        title="Best Packers and Movers in Islamabad 2026 — Home Shifting, Office Relocation & International Moving"
        subtitle="Structured surveys, premium materials, and disciplined loading for homes, villas, and offices across Islamabad and the twin cities — with clear handover and optional storage."
        imageSrc="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920"
        imageAlt="Professional movers loading packed moving boxes into a truck in Islamabad"
      />

      <article className="section-padding">
        <div className="container max-w-3xl space-y-8">
          <p className="text-lg text-muted-foreground">
            Whether you are shifting within Islamabad, relocating to Rawalpindi, or
            preparing goods for an{" "}
            <Link
              href="/international-movers"
              className="font-semibold text-gold underline-offset-2 hover:underline"
            >
              international movers
            </Link>{" "}
            shipment, our packers follow a repeatable checklist so nothing is left to
            guesswork.
          </p>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              What our Islamabad packing team handles
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Pre-move survey and volume estimate for accurate crew sizing</li>
              <li>Room-wise labeling and digital inventory for traceability</li>
              <li>Fragile-only crews for glass, artwork, and electronics</li>
              <li>Padded blankets, edge guards, and wardrobe cartons</li>
              <li>Coordination with building management and elevator slots</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              When you also need cargo out of Islamabad
            </h2>
            <p className="mt-3 text-muted-foreground">
              For commercial pallets or personal effects traveling by air or sea,
              see our{" "}
              <Link
                href="/cargo-service-islamabad"
                className="font-semibold text-gold underline-offset-2 hover:underline"
              >
                cargo services Islamabad
              </Link>{" "}
              page for uplift planning, documentation support, and milestone
              tracking.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Packers and Movers Charges in Islamabad 2026
            </h2>
            <p className="mt-3 text-muted-foreground mb-4">
              Our pricing in Islamabad is transparent and based on your move size, distance, and service level. All quotes include labor, packing materials, loading, transport, and unloading.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">Move Type in Islamabad</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Starting Price</th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Studio / 1-Bedroom (Islamabad)</td>
                    <td className="border border-gray-300 p-3">PKR 15,000</td>
                    <td className="border border-gray-300 p-3">4–6 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">2–3 Bedroom Home (Islamabad)</td>
                    <td className="border border-gray-300 p-3">PKR 25,000 – 40,000</td>
                    <td className="border border-gray-300 p-3">6–10 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">4–5 Bedroom Villa (Islamabad)</td>
                    <td className="border border-gray-300 p-3">PKR 50,000 – 80,000+</td>
                    <td className="border border-gray-300 p-3">1–2 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Office Relocation (Islamabad)</td>
                    <td className="border border-gray-300 p-3">PKR 20,000+</td>
                    <td className="border border-gray-300 p-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              *Prices for Islamabad include survey, materials, labor, and transport within city limits. Additional charges apply for storage, insurance, or moves outside Islamabad.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Complete Guide: Hiring Packers and Movers in Islamabad 2026
            </h2>
            <p className="mt-3 text-muted-foreground mb-4">
              Finding the right packers and movers in Islamabad doesn't have to be stressful. Follow these proven steps to hire professional movers in Islamabad and ensure a smooth, damage-free relocation.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. Get a Survey-Based Quote from Islamabad Movers</h3>
                <p className="text-muted-foreground">
                  The first step when hiring movers in Islamabad is requesting a free survey. A professional team will visit your home or office in Islamabad, assess the volume of items, check access routes (stairs, elevators), and provide a written, itemized quote. This avoids surprises later.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">2. Verify Insurance and Credentials</h3>
                <p className="text-muted-foreground">
                  Ensure your chosen Islamabad packers and movers company carries liability insurance and has documented experience with moves in Islamabad neighborhoods like DHA, Bahria Enclave, and F-7. Ask for references from recent Islamabad relocations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">3. Confirm Crew Size and Timing</h3>
                <p className="text-muted-foreground">
                  Discuss how many crew members will show up, what time they'll arrive in Islamabad, and the expected completion time. A 2–3 bedroom Islamabad home typically needs 4–6 packers and 6–10 hours for a smooth move.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">4. Clarify Add-On Services</h3>
                <p className="text-muted-foreground">
                  Confirm whether your Islamabad movers include disassembly/reassembly, storage options, disposal of old items, or international uplift. Many Islamabad packers and movers packages are customizable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">5. Book Early, Especially in Peak Season</h3>
                <p className="text-muted-foreground">
                  Islamabad moves fill up quickly in summer months. Book your packers and movers in Islamabad 2–4 weeks in advance to ensure crew availability and the best rate.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Get a survey-based quote
            </h3>
            <p className="mt-2 text-muted-foreground">
              Call{" "}
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="font-semibold text-gold hover:underline"
              >
                {COMPANY.phoneDisplay}
              </a>{" "}
              or message on WhatsApp — we respond with crew availability and next
              steps.
            </p>
          </div>
        </div>
      </article>

      <CrossServiceLinks currentHref="/packers-movers-islamabad" />
      <ServiceFaq items={FAQ} />
    </>
  );
}
