import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Pakistan-based portfolio with real on-site photos demonstrating expertise */
const projects = [
  {
    img: "/images/move-1-lahore-dubai.jpg",
    title: "Lahore to Dubai — Family Home Relocation",
    location: "DHA Phase 6, Lahore → UAE",
  },
  {
    img: "/images/move-2-islamabad-uk.jpg",
    title: "Islamabad to UK — Corporate Office Move",
    location: "Blue Area, Islamabad → United Kingdom",
  },
  {
    img: "/images/move-3-peshawar-saudi.jpg",
    title: "Peshawar to Saudi Arabia — Family Relocation",
    location: "Hayatabad, Peshawar → KSA",
  },
  {
    img: "/images/move-4-rawalpindi-canada.jpg",
    title: "Rawalpindi to Canada — Student Belongings Shipment",
    location: "Bahria Town, Rawalpindi → Canada",
  },
  {
    img: "/images/move-5-karachi-port.jpg",
    title: "Karachi Port — FCL Container Dispatch to Jebel Ali",
    location: "Karachi → Dubai (sea freight)",
  },
  {
    img: "/images/move-6-islamabad-karachi.jpg",
    title: "Islamabad to Karachi — Multi-Vehicle Transport",
    location: "Twin-city / long-haul Pakistan",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Recent <span className="gold-gradient-text">Pakistan Moves</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Recent successful moves from Lahore, Islamabad, Rawalpindi, Peshawar, and Karachi. Real photos from our on-site operations demonstrating our expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <picture>
                <source srcSet={`${p.img}&fm=webp`} type="image/webp" />
                <img src={p.img} alt={p.title} loading="lazy" width={640} height={400} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                <p className="text-gold text-sm">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
