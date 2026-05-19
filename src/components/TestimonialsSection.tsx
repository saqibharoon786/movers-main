import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Lahore → Dubai",
    rating: 5,
    text: "Absolutely flawless experience. The team handled our entire family's move with such care and professionalism. Every item arrived safely, on time, and without a scratch.",
  },
  {
    name: "Fatima Khan",
    role: "Karachi → Jeddah",
    rating: 5,
    text: "Moving across continents felt overwhelming until Best International Movers made it effortless. Their customs expertise saved us weeks of paperwork.",
  },
  {
    name: "Muhammad Raza",
    role: "Islamabad → London",
    rating: 5,
    text: "The attention to detail was incredible. From the initial survey to the final unpacking, every step was communicated and executed perfectly.",
  },
  {
    name: "Hassan Malik",
    role: "Islamabad → Dubai (DHA)",
    rating: 5,
    text: "Best movers in Islamabad! Office relocation in 3 days — professional staff, safe packing, and reached Dubai with zero damage. Highly recommended.",
  },
  {
    name: "Hira Siddiqui",
    role: "Lahore → London",
    rating: 5,
    text: "More affordable than other international movers but superior service. Helped with customs clearance and delivered 2 weeks early. Outstanding team!",
  },
  {
    name: "Ayesha Ahmed",
    role: "Karachi → New York",
    rating: 5,
    text: "International moving from Karachi made easy. Expert handling of fragile items and complex customs documentation. Our family is very happy.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding bg-navy-light/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            What Our <span className="gold-gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Real feedback from families and businesses we have moved across Pakistan and worldwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 md:p-7 border border-border hover:border-gold/30 transition-all duration-300 flex flex-col h-full group hover:shadow-[0_8px_32px_-8px_hsl(var(--gold)/0.15)]"
            >
              <Quote
                size={36}
                className="text-gold/40 mb-4 shrink-0 group-hover:text-gold/60 transition-colors"
                aria-hidden
              />

              <p className="text-foreground/90 text-sm md:text-[15px] leading-relaxed italic flex-grow mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-border/60">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-gold text-sm mt-0.5">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
