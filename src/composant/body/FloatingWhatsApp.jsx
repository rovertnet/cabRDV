import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [status, setStatus] = useState("Absent");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = dimanche, 6 = samedi

    const isWorkingDay = day >= 1 && day <= 5; // Lundi à Vendredi
    const isWorkingHour = hour >= 8 && hour < 18; // 8h à 18h

    if (isWorkingDay && isWorkingHour) {
      setStatus("Disponible");
    } else {
      setStatus("Absent");
    }
  }, []);

  return (
    <motion.a
      href="https://wa.me/243820000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform lg:hidden`}
    >
      <FaWhatsapp size={20} />
      <span className="text-sm font-medium">{status}</span>
    </motion.a>
  );
}
