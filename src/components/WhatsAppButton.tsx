import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";

const WhatsAppButton = () => (
  <motion.div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
    <motion.a
      href="tel:+923009130211"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.8, type: "spring" }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gold flex items-center justify-center shadow-lg ring-2 ring-navy/40 hover:shadow-[0_0_20px_hsl(var(--gold)/0.5)] hover:scale-110 transition-all duration-300"
      aria-label="Call now"
      title="Call 0300-9130211"
    >
      <PhoneCall size={24} className="text-navy-dark shrink-0" strokeWidth={2.25} />
    </motion.a>
    <motion.a
      href="https://wa.me/923009130211?text=Hi%2C%20I%20need%20a%20free%20quote%20for%20international%20moving%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </motion.a>
  </motion.div>
);

export default WhatsAppButton;
