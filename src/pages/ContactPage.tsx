import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import { QUOTE_INBOX_EMAIL } from "@/lib/quoteForm";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const offices = [
  { city: "Rawalpindi", address: "Commercial Market, Satellite Town, Rawalpindi", phone: "0300-9130211" },
  { city: "Islamabad", address: "Blue Area, Jinnah Avenue, Islamabad", phone: "0300-9130211" },
  { city: "Lahore", address: "Main Boulevard, Gulberg III, Lahore", phone: "0300-9130211" },
  { city: "Peshawar", address: "University Road, Peshawar", phone: "0300-9130211" },
];

import SEO from "@/components/SEO";
import { seoConfig } from "@/seoConfig";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seoConfig.contact} urlPath="/contact" />
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">Contact Us</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Get Your <span className="gold-gradient-text">Free Quote</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Fill out the form and our team will get back to you within 24 hours.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
              <div className="glass-card rounded-xl p-8">
                <QuoteRequestForm source="Contact Page Quote Form" variant="full" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-6">
              {[
                { icon: MapPin, title: "Offices", text: "Rawalpindi | Islamabad | Lahore | Peshawar" },
                { icon: Phone, title: "Phone / WhatsApp", text: "0300-9130211" },
                {
                  icon: Mail,
                  title: "Quote & Email",
                  text: `${QUOTE_INBOX_EMAIL}\ninfo@bestintlmovers.com`,
                },
                {
                  icon: Clock,
                  title: "Hours",
                  text: "Monday to Saturday 8:00 AM — 8:00 PM\nSunday: Emergency Only",
                },
                {
                  icon: MessageCircle,
                  title: "Response guarantee",
                  text: "We aim to respond within 2 hours during business hours.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-display font-bold text-center mb-10">Our <span className="gold-gradient-text">Offices</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {offices.map((o, i) => (
                <motion.div key={o.city} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all">
                  <MapPin size={24} className="text-gold mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-foreground mb-1">{o.city}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{o.address}</p>
                  <a href={`tel:${o.phone}`} className="text-gold text-sm">{o.phone}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
