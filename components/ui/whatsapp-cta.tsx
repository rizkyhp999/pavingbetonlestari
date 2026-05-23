"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-6 right-6 z-50 pointer-events-auto"
        >
          <a
            href="https://wa.me/62811723830?text=Halo%20Paving%20Beton%20Lestari%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20paving%20block..."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold px-6 py-4.5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white focus:outline-none"
            aria-label="Tanya Kami di WhatsApp"
          >
            <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471h.006c5.786 0 10.493-4.702 10.496-10.492.002-2.805-1.093-5.443-3.082-7.437C17.278 2.701 14.636 1.6 11.83 1.6 6.046 1.6 1.339 6.302 1.336 12.093c-.001 1.955.511 3.868 1.488 5.564L1.87 21.657l4.777-1.253-.001-.001z"/>
            </svg>
            <span className="text-xl font-extrabold tracking-wide hidden sm:inline pr-1">
              Tanya Kami di WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
