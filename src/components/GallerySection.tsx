import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteImages } from "@/lib/siteImages";

const projects = siteImages.gallery;
const fallbackImg = siteImages.galleryFallback;

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Recent <span className="gold-gradient-text">Pakistan Moves</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Recent successful moves from Lahore, Islamabad, Rawalpindi, Peshawar, and Karachi. Real photos from our
            on-site operations demonstrating our expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-navy-light/30"
            >
              <img
                src={failed[p.title] ? fallbackImg : p.img}
                alt={p.title}
                loading="lazy"
                width={640}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                onError={() => setFailed((prev) => ({ ...prev, [p.title]: true }))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
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
