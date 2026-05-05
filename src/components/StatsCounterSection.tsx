import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, target: 5000, display: "5,000+", label: "Happy Families" },
  { icon: Globe, target: 100, display: "100+", label: "Countries Served" },
  { icon: Award, target: 15, display: "15+", label: "Years Experience" },
  { icon: TrendingUp, target: 98, display: "98%", label: "Client Satisfaction" },
];

const StatsCounterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [counters, setCounters] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds animation
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const intervals: NodeJS.Timeout[] = [];

      stats.forEach((stat, index) => {
        const increment = stat.target / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.target) {
            current = stat.target;
            clearInterval(interval);
          }
          setCounters(prev => ({ ...prev, [index]: Math.floor(current) }));
        }, stepDuration);

        intervals.push(interval);
      });

      return () => {
        intervals.forEach(clearInterval);
      };
    }
  }, [inView]);

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gold-gradient-bg opacity-5" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">Our Impact</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">
            Numbers That <span className="gold-gradient-text">Speak Volumes</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <s.icon size={28} className="text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold gold-gradient-text mb-1">
                {index === 3 ? `${counters[index]}%` : 
                 index === 1 ? `${counters[index]}+` : 
                 index === 2 ? `${counters[index]}+` : 
                 `${counters[index].toLocaleString()}+`}
              </div>
              <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
