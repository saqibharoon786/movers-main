import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE,
  BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE_CLASS_CARD,
  BEST_PACKERS_MOVERS_ISLAMABAD_2026_SLUG,
} from "@/data/bestPackersMoversIslamabad2026Blog";
import {
  MOVING_CHECKLIST_PAKISTAN_IMAGE,
  MOVING_CHECKLIST_PAKISTAN_SLUG,
} from "@/data/movingChecklistPakistanBlog";
import {
  CARGO_INSURANCE_INTERNATIONAL_IMAGE,
  CARGO_INSURANCE_INTERNATIONAL_SLUG,
} from "@/data/cargoInsuranceInternationalShipmentsBlog";
import {
  OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_IMAGE,
  OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_SLUG,
} from "@/data/officeRelocationKarachiZeroDowntimeBlog";
import {
  DHA_KARACHI_MOVING_GUIDE_IMAGE,
  DHA_KARACHI_MOVING_GUIDE_SLUG,
} from "@/data/dhaKarachiMovingGuideSectorBySectorBlog";
import {
  KARACHI_TO_DUBAI_SHIPPING_COST_IMAGE,
  KARACHI_TO_DUBAI_SHIPPING_COST_SLUG,
} from "@/data/karachiToDubaiShippingCost2026Blog";

const posts = [
  {
    img: OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_IMAGE,
    slug: OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_SLUG,
    title: "Office Relocation Karachi — The Complete Zero Downtime Guide 2026",
    date: "June 6, 2026",
    category: "Office Relocation",
  },
  {
    img: KARACHI_TO_DUBAI_SHIPPING_COST_IMAGE,
    slug: KARACHI_TO_DUBAI_SHIPPING_COST_SLUG,
    title: "Karachi to Dubai Shipping Cost 2026 — Complete Full Breakdown",
    date: "June 6, 2026",
    category: "International Shipping",
  },
  {
    img: DHA_KARACHI_MOVING_GUIDE_IMAGE,
    slug: DHA_KARACHI_MOVING_GUIDE_SLUG,
    title: "Movers in DHA Karachi — Complete Sector by Sector Moving Guide 2026",
    date: "June 6, 2026",
    category: "DHA Karachi",
  },
  {
    img: CARGO_INSURANCE_INTERNATIONAL_IMAGE,
    slug: CARGO_INSURANCE_INTERNATIONAL_SLUG,
    title: "Cargo Insurance for International Shipments from Pakistan — Complete Guide 2026",
    date: "June 4, 2026",
    category: "Shipping & Insurance",
  },
  {
    img: MOVING_CHECKLIST_PAKISTAN_IMAGE,
    slug: MOVING_CHECKLIST_PAKISTAN_SLUG,
    title: "Moving Checklist Pakistan 2026 — Complete International Relocation Guide",
    date: "May 2026",
    category: "Moving Guides",
  },
  {
    img: BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE,
    slug: BEST_PACKERS_MOVERS_ISLAMABAD_2026_SLUG,
    title: "Best Packers and Movers in Islamabad — Complete SEO Guide 2026",
    date: "May 19, 2026",
    category: "Moving Guides",
  },
  { img: "/images/international-moving.jpg", slug: "tips-for-stress-free-international-move", title: "10 Tips for a Stress-Free Pakistan to Dubai Move in 2026", date: "Apr 10, 2026", category: "Moving Tips" },
  { img: "/images/air-freight.jpg", slug: "air-freight-vs-sea-freight-pakistan", title: "Air Freight vs Sea Freight from Pakistan: Cost & Speed Comparison", date: "Mar 28, 2026", category: "Logistics" },
  { img: "/images/cargo-insurance.jpg", slug: "customs-regulations-guide-pakistan", title: "Pakistan Customs Import Regulations 2026: Complete Guide", date: "Mar 15, 2026", category: "Guides" },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy-light/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Blog & News</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Latest <span className="gold-gradient-text">Insights</span></h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <Link to={`/blog/${p.slug}/`} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-gold/30 transition-all block">
                <div className="overflow-hidden">
                  <picture>
                    <source srcSet={`${p.img}&fm=webp`} type="image/webp" />
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={640}
                      height={360}
                      className={`w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ${
                        p.slug === BEST_PACKERS_MOVERS_ISLAMABAD_2026_SLUG
                          ? BEST_PACKERS_MOVERS_ISLAMABAD_2026_IMAGE_CLASS_CARD
                          : p.slug === OFFICE_RELOCATION_KARACHI_ZERO_DOWNTIME_SLUG
                          ? "object-cover object-[50%_40%]"
                          : ""
                      }`}
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">{p.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar size={12} />{p.date}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-3">{p.title}</h3>
                  <span className="text-gold text-sm font-medium flex items-center gap-1">Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
